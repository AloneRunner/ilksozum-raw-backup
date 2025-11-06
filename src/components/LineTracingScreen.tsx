import React, { useEffect, useRef, useState } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t } from '../i18n/index.ts';
import { playEffect } from '../services/speechService.ts';

export type LineTracingLevel = 'straight' | 'wave' | 'spiral' | 'zigzag' | 'curve' | 'loop';

interface LineTracingScreenProps {
  currentCard: number;
  totalCards: number;
  isAutoSpeakEnabled: boolean;
  onAdvance: (isCorrect: boolean) => Promise<void>;
  onBack: () => void;
  level?: LineTracingLevel; // optional: defaults rotate by card index
}

const VIBRATE = (ms: number) => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try { (navigator as any).vibrate(ms); } catch {}
  }
};

const LineTracingScreen: React.FC<LineTracingScreenProps> = ({ currentCard, totalCards, onAdvance, onBack, level }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<Path2D | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const samplesRef = useRef<Array<{x:number;y:number}>>([]);
  const bestIndexRef = useRef(0);
  const endPointRef = useRef<{x:number;y:number}>({ x: 0, y: 0 });
  // Simple drawing state

  const effectiveLevel: LineTracingLevel = level || (['straight','wave','zigzag','curve','spiral','loop'][((currentCard-1) % 6)] as LineTracingLevel);

  const drawScene = () => {
    const canvas = canvasRef.current;
  if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use the canvas element's actual CSS size for drawing and scaling
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr, dpr); // draw in CSS pixels

    ctx.clearRect(0,0,w,h);

    // draw background grid faintly
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    for (let x=0; x<w; x+=32) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
    for (let y=0; y<h; y+=32) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }

    // build path and sample points along it
    const margin = 32;
    const startX = margin;
    const endX = w - margin;
    const midY = Math.floor(h/2);

    const path = new Path2D();
    samplesRef.current = [];
    if (effectiveLevel === 'straight') {
      path.moveTo(startX, midY);
      for (let x = startX; x <= endX; x += 3) {
        const y = midY;
        samplesRef.current.push({ x, y });
        if (x === startX) continue; path.lineTo(x, y);
      }
    } else if (effectiveLevel === 'wave') {
      const amp = Math.max(24, Math.min(64, h*0.18));
      const periods = 3;
      const span = endX - startX;
      path.moveTo(startX, midY);
      for (let i=0;i<=span;i+=6) {
        const x = startX + i;
        const t = (i/span) * periods * Math.PI * 2;
        const y = midY + Math.sin(t) * amp;
        samplesRef.current.push({ x, y });
        path.lineTo(x, y);
      }
    } else if (effectiveLevel === 'zigzag') {
      // Zikzak çizgi
      const amp = Math.max(32, Math.min(80, h*0.22));
      const segments = 6;
      const span = endX - startX;
      path.moveTo(startX, midY);
      for (let i=0; i<=segments; i++) {
        const x = startX + (i/segments) * span;
        const y = midY + (i % 2 === 0 ? -amp : amp);
        samplesRef.current.push({ x, y });
        path.lineTo(x, y);
      }
      // Smooth out samples between segments
      const smoothSamples: Array<{x:number;y:number}> = [];
      for (let i=0; i<samplesRef.current.length-1; i++) {
        const p1 = samplesRef.current[i];
        const p2 = samplesRef.current[i+1];
        for (let t=0; t<1; t+=0.05) {
          smoothSamples.push({
            x: p1.x + (p2.x - p1.x) * t,
            y: p1.y + (p2.y - p1.y) * t
          });
        }
      }
      samplesRef.current = smoothSamples;
    } else if (effectiveLevel === 'curve') {
      // Yumuşak eğri (S şekli)
      const span = endX - startX;
      path.moveTo(startX, midY);
      for (let i=0; i<=span; i+=4) {
        const x = startX + i;
        const t = i / span;
        const y = midY + Math.sin(t * Math.PI) * (h * 0.25);
        samplesRef.current.push({ x, y });
        path.lineTo(x, y);
      }
    } else if (effectiveLevel === 'loop') {
      // İlmek/halka şekli
      const cx = Math.floor(w * 0.5);
      const cy = midY;
      const radius = Math.min(w, h) * 0.28;
      path.moveTo(startX, midY);
      // Başlangıç noktasından merkeze
      for (let t=0; t<=1; t+=0.05) {
        const x = startX + (cx - radius - startX) * t;
        const y = midY;
        samplesRef.current.push({ x, y });
        if (t > 0) path.lineTo(x, y);
      }
      // Daireyi çiz
      for (let a=Math.PI; a<=Math.PI*3; a+=0.05) {
        const x = cx + Math.cos(a) * radius;
        const y = cy + Math.sin(a) * radius;
        samplesRef.current.push({ x, y });
        path.lineTo(x, y);
      }
      // Merkezden bitiş noktasına
      for (let t=0; t<=1; t+=0.05) {
        const x = (cx + radius) + (endX - (cx + radius)) * t;
        const y = midY;
        samplesRef.current.push({ x, y });
        path.lineTo(x, y);
      }
    } else if (effectiveLevel === 'spiral') {
      const cx = Math.floor(w*0.5);
      const cy = midY;
      const turns = 2.2;
      const maxR = Math.min(w,h) * 0.35;
      for (let a=0; a<=Math.PI*2*turns; a+=0.05) {
        const r = (a / (Math.PI*2*turns)) * maxR;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        samplesRef.current.push({ x, y });
        if (a === 0) path.moveTo(x,y); else path.lineTo(x,y);
      }
    }

  // keep reference and reset progress index
    pathRef.current = path;
  bestIndexRef.current = 0;
  setProgress(0);

    // draw thick stroke for hit area (CSS px)
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 24;
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.stroke(path);

    // draw visible center line with gradient glow
    ctx.lineWidth = 8;
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#22c55e';
    ctx.strokeStyle = '#22c55e'; // green-500
    ctx.stroke(path);
    ctx.shadowBlur = 0;

    // start and end circles with glowing effect
    const startPoint = getStartPoint(effectiveLevel, startX, midY);
    const endPoint = getEndPoint(effectiveLevel, endX, midY, w);
    endPointRef.current = endPoint;
    
    // start circle (blue with glow)
    ctx.shadowBlur = 16;
    ctx.shadowColor = '#0ea5e9';
    ctx.fillStyle = '#0ea5e9'; // sky-500
    ctx.beginPath(); ctx.arc(startPoint.x, startPoint.y, 16, 0, Math.PI*2); ctx.fill();
    // inner white dot
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(startPoint.x, startPoint.y, 6, 0, Math.PI*2); ctx.fill();
    
    // end circle (amber with glow + pulsing animation effect)
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#f59e0b';
    ctx.fillStyle = '#f59e0b'; // amber-500
    ctx.beginPath(); ctx.arc(endPoint.x, endPoint.y, 16, 0, Math.PI*2); ctx.fill();
    // inner white dot
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(endPoint.x, endPoint.y, 6, 0, Math.PI*2); ctx.fill();
  };

  useEffect(() => {
    drawScene();
    const onResize = () => drawScene();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveLevel]);

  const handlePointer = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const path = pathRef.current;
    if (!canvas || !path) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left; // CSS px
  const y = e.clientY - rect.top;  // CSS px

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (e.type === 'pointerdown') {
      setIsDrawing(true);
      // draw a small marker where the touch started for visual alignment
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }

    if (!isDrawing) return;

  // Geometry-based hit test against sampled polyline (transform-agnostic)
  const hitOn = effectiveLevel === 'spiral' ? 10 : 12;
  const hitNear = effectiveLevel === 'spiral' ? 16 : 20;
  const { onStroke, nearHit } = distanceHitTest(x, y, samplesRef.current, hitOn, hitNear);
    // draw dual-color trail for feedback (blue on line, red outside)
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = (onStroke || nearHit) ? '#3b82f6' : '#ef4444';
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI*2); ctx.fill();
    ctx.restore();
    if (!onStroke) { VIBRATE(15); }

    // update progress along sampled path with windowed nearest search to avoid big jumps
    if ((onStroke || nearHit) && samplesRef.current.length > 1) {
      const samples = samplesRef.current;
      const curr = bestIndexRef.current;
      const SEARCH_BACK = 10;
      const SEARCH_AHEAD = effectiveLevel === 'spiral' ? 60 : 120; // stricter for spiral
      const startIdx = Math.max(0, curr - SEARCH_BACK);
      const endIdx = Math.min(samples.length - 1, curr + SEARCH_AHEAD);

      let candIdx = curr;
      let bestDist = Infinity;
      for (let i = startIdx; i <= endIdx; i++) {
        const p = samples[i];
        const dx = p.x - x; const dy = p.y - y;
        const d2 = dx*dx + dy*dy;
        if (d2 < bestDist) { bestDist = d2; candIdx = i; }
      }

      // Only move forward a limited step to prevent jumping across loops
      const MAX_STEP = effectiveLevel === 'spiral' ? 2 : 4;
      if (candIdx > curr) {
        const nextIdx = Math.min(candIdx, curr + MAX_STEP);
        if (nextIdx > bestIndexRef.current) {
          bestIndexRef.current = nextIdx;
          const pct = nextIdx / (samples.length - 1);
          setProgress(pct);
        }
      }
    }

    if (e.type === 'pointerup' || e.type === 'pointercancel' || e.type === 'pointerleave') {
      setIsDrawing(false);
      const pctDone = samplesRef.current.length > 1 ? (bestIndexRef.current / (samplesRef.current.length - 1)) : progress;
      // consider success if near the end point as well
      const end = endPointRef.current;
      const nearEnd = Math.hypot(x - end.x, y - end.y) <= 24;
      if ((pctDone > 0.92 || nearEnd) && (onStroke || nearHit)) {
        setTimeout(() => { void onAdvance(true); }, 250);
      } else {
        playEffect('softincorrect');
      }
    }
  };

// Returns whether the pointer is close enough to the sampled path
function distanceHitTest(x:number, y:number, samples: Array<{x:number;y:number}>, hitOn:number, hitNear:number) {
  if (!samples || samples.length < 2) return { onStroke: false, nearHit: false };
  let minDist = Infinity;
  // Check distance to segments
  for (let i=1; i<samples.length; i++) {
    const a = samples[i-1]; const b = samples[i];
    const d = pointToSegmentDistance(x,y,a.x,a.y,b.x,b.y);
    if (d < minDist) minDist = d;
  }
  // thresholds provided by caller
  return { onStroke: minDist <= hitOn, nearHit: minDist <= hitNear };
}

function pointToSegmentDistance(px:number, py:number, x1:number, y1:number, x2:number, y2:number) {
  const vx = x2 - x1, vy = y2 - y1;
  const wx = px - x1, wy = py - y1;
  const c1 = vx*wx + vy*wy;
  if (c1 <= 0) return Math.hypot(px-x1, py-y1);
  const c2 = vx*vx + vy*vy;
  if (c2 <= c1) return Math.hypot(px-x2, py-y2);
  const b = c1 / c2;
  const bx = x1 + b*vx, by = y1 + b*vy;
  return Math.hypot(px-bx, py-by);
}

  return (
    <div ref={containerRef} className="flex flex-col h-full w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 landscape:flex-row">
      {/* Üst panel (dikey) / Sol panel (yatay): geri butonu ve tur göstergesi */}
      <div className="flex items-center justify-between p-3 bg-black/20 backdrop-blur-sm landscape:flex-col landscape:h-full landscape:w-20 landscape:justify-start landscape:gap-4 landscape:py-4">
        <button onClick={onBack} aria-label={t('app.back', 'Back')} className="p-2 rounded-full hover:bg-white/30 transition-all active:scale-95">
          <ArrowLeftIcon className="w-7 h-7 landscape:w-6 landscape:h-6 text-white drop-shadow-lg" />
        </button>
        <div className="text-white font-bold text-base landscape:text-sm bg-white/20 px-3 py-1 landscape:px-2 landscape:py-1 rounded-full shadow-lg">{currentCard}/{totalCards}</div>
      </div>
      
      {/* Ana içerik alanı */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Talimat metni */}
        <div className="px-4 py-2 landscape:py-1 text-center">
          <p className="text-white text-base landscape:text-sm font-semibold drop-shadow-md">
            {t('lineTracing.instruction', 'Parmağınla çizgiyi takip et. Çizgi üzerinde kal!')}
          </p>
          <p className="text-white/90 text-xs landscape:text-[10px] mt-1">
            Seviye: {effectiveLevel === 'straight' ? 'Düz Çizgi' : 
                     effectiveLevel === 'wave' ? 'Dalgalı' : 
                     effectiveLevel === 'zigzag' ? 'Zikzak' :
                     effectiveLevel === 'curve' ? 'Eğri' :
                     effectiveLevel === 'loop' ? 'İlmek' : 'Spiral'}
          </p>
        </div>
        
        {/* Canvas alanı + İlerleme barı container */}
        <div className="flex-1 px-3 pb-2 landscape:px-4 landscape:pb-2 flex flex-col min-h-0">
          <div className="flex-1 relative min-h-0">
            <canvas
              ref={canvasRef}
              className="w-full h-full touch-none rounded-2xl bg-black/30 shadow-2xl border-4 border-white/20"
              onPointerDown={handlePointer}
              onPointerMove={handlePointer}
              onPointerUp={handlePointer}
              onPointerCancel={handlePointer}
              onPointerLeave={handlePointer}
            />
          </div>
          
          {/* İlerleme barı - Canvas'ın hemen altında */}
          <div className="mt-2 landscape:mt-1 flex-shrink-0">
            <div className="w-full bg-white/30 rounded-full h-2 shadow-inner">
              <div className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full transition-all duration-300 shadow-lg" style={{ width: `${Math.floor(progress*100)}%`}} />
            </div>
            <p className="text-center text-white/90 text-[10px] mt-0.5 font-medium">{Math.floor(progress*100)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function getStartPoint(level: LineTracingLevel, startX: number, midY: number) {
  if (level === 'spiral' || level === 'loop') return { x: startX, y: midY };
  return { x: startX, y: midY };
}
function getEndPoint(level: LineTracingLevel, endX: number, midY: number, w: number) {
  if (level === 'spiral') return { x: Math.floor(w*0.5), y: midY };
  if (level === 'loop') return { x: endX, y: midY };
  return { x: endX, y: midY };
}

export default LineTracingScreen;
