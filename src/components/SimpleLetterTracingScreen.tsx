import React, { useState } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t } from '../i18n/index.ts';
import { playEffect } from '../services/speechService.ts';

interface SimpleLetterTracingScreenProps {
  letter: string;
  isUpperCase: boolean;
  onComplete: () => void;
  onBack: () => void;
}

const VIBRATE = (ms: number) => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      (navigator as any).vibrate(ms);
    } catch {}
  }
};

const SimpleLetterTracingScreen: React.FC<SimpleLetterTracingScreenProps> = ({
  letter,
  isUpperCase,
  onComplete,
  onBack,
}) => {
  const [strokes, setStrokes] = useState<Array<Array<{ x: number; y: number }>>>([]);
  const [currentStroke, setCurrentStroke] = useState<Array<{ x: number; y: number }>>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const displayLetter = isUpperCase ? letter.toUpperCase() : letter.toLowerCase();

  const totalPoints = strokes.reduce((sum, stroke) => sum + stroke.length, 0) + currentStroke.length;

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDrawing(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Start a new stroke
    setCurrentStroke([{ x, y }]);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Add to current stroke
    setCurrentStroke((prev) => [...prev, { x, y }]);
  };

  const handlePointerUp = () => {
    if (isDrawing && currentStroke.length > 0) {
      // Save current stroke to strokes array
      setStrokes((prev) => [...prev, currentStroke]);
      setCurrentStroke([]);
    }
    setIsDrawing(false);
  };

  const handleComplete = () => {
    if (!isCompleting && totalPoints > 20) {
      setIsCompleting(true);
      VIBRATE(30);
      playEffect('correct');
      setTimeout(() => {
        onComplete();
      }, 400);
    }
  };

  const handleClear = () => {
    setStrokes([]);
    setCurrentStroke([]);
    playEffect('softincorrect');
  };

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-between p-3 bg-black/20 backdrop-blur-sm">
        <button
          onClick={onBack}
          aria-label={t('app.back', 'Geri')}
          className="p-2 rounded-full hover:bg-white/30 transition-all active:scale-95"
        >
          <ArrowLeftIcon className="w-7 h-7 text-white drop-shadow-lg" />
        </button>
        <div className="text-white font-bold text-xl drop-shadow-md">
          {t('letterTracing.currentLetter', 'Harf')}: {displayLetter}
        </div>
        <div className="w-16" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        <div className="text-center text-white text-lg font-semibold drop-shadow-md">
          {t('letterTracing.instructionSimple', 'Harfin üzerinden parmağınla geç!')}
        </div>

        <div
          ref={containerRef}
          className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/30 shadow-2xl touch-none"
          style={{ width: '90%', maxWidth: '500px', aspectRatio: '1' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Large letter in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="font-bold text-white/40 select-none"
              style={{ fontSize: 'min(60vw, 350px)', lineHeight: 1 }}
            >
              {displayLetter}
            </div>
          </div>

          {/* User's trace */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {containerRef.current && (() => {
              const rect = containerRef.current.getBoundingClientRect();
              return (
                <>
                  {/* Draw completed strokes */}
                  {strokes.map((stroke, idx) => (
                    stroke.length > 1 && (
                      <polyline
                        key={idx}
                        points={stroke.map((p) => {
                          const svgX = (p.x / rect.width) * 500;
                          const svgY = (p.y / rect.height) * 500;
                          return `${svgX},${svgY}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )
                  ))}
                  {/* Draw current stroke being drawn */}
                  {currentStroke.length > 1 && (
                    <polyline
                      points={currentStroke.map((p) => {
                        const svgX = (p.x / rect.width) * 500;
                        const svgY = (p.y / rect.height) * 500;
                        return `${svgX},${svgY}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </>
              );
            })()}
          </svg>
        </div>

        <div className="text-white/90 text-sm text-center">
          {totalPoints > 0
            ? `${t('letterTracing.drawing', 'Çiziyorsun... Devam et!')} (${totalPoints})`
            : t('letterTracing.start', 'Harfe dokunarak başla')}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-bold transition-all active:scale-95"
          >
            {t('letterTracing.clear', 'Temizle')}
          </button>
          <button
            onClick={handleComplete}
            disabled={totalPoints < 20}
            className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 ${
              totalPoints >= 20
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                : 'bg-white/10 text-white/40 cursor-not-allowed'
            }`}
          >
            {t('letterTracing.continue', 'Devam Et')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleLetterTracingScreen;
