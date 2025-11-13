import React, { useEffect, useMemo, useState } from 'react';
import { FiveWOneHCategory } from '../services/database/activities/reasoning/fiveWOneHBatch50';
import { t } from '../i18n/index';
import CosmicBackdrop from './ui/CosmicBackdrop.tsx';
import PanelStars from './ui/PanelStars.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';

interface FiveWOneHMenuScreenProps {
  onSelectCategory: (category: FiveWOneHCategory | 'Karışık') => void;
  onBack: () => void;
  theme: string;
}

const FiveWOneHMenuScreen: React.FC<FiveWOneHMenuScreenProps> = ({ onSelectCategory, onBack, theme }) => {
  const isCosmic = theme === 'deneme2';
  const isUnderwater = theme === 'deneme';

  // Responsive container sizing
  const BASE_SIZE = 850; // design reference
  const [containerSize, setContainerSize] = useState<number>(() => {
    const minSide = Math.min(window.innerWidth, window.innerHeight);
    return Math.max(360, Math.min(850, Math.floor(minSide * 0.88)));
  });
  useEffect(() => {
    const onResize = () => {
      const minSide = Math.min(window.innerWidth, window.innerHeight);
      setContainerSize(Math.max(360, Math.min(850, Math.floor(minSide * 0.88))));
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize as any);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize as any);
    };
  }, []);

  const scale = useMemo(() => containerSize / BASE_SIZE, [containerSize]);

  // Planet configuration for solar system (sizes in px, orbits in px relative to BASE_SIZE)
  const planets = [
    // Kim (Who): person silhouette
    { category: 'Kim', label: t('fiveWOneH.category.who', 'Kim?'), emoji: '👤', color: 'from-gray-400 to-gray-600', sizePx: 44, orbit: 120 },
    // Ne (What): box/object
    { category: 'Ne', label: t('fiveWOneH.category.what', 'Ne?'), emoji: '📦', color: 'from-yellow-400 to-orange-500', sizePx: 50, orbit: 160 },
    // Nerede (Where): map pin / globe
    { category: 'Nerede', label: t('fiveWOneH.category.where', 'Nerede?'), emoji: '📍', color: 'from-blue-400 to-blue-600', sizePx: 56, orbit: 200 },
    // Ne Zaman (When): clock
    { category: 'Ne Zaman', label: t('fiveWOneH.category.when', 'Ne Zaman?'), emoji: '⏰', color: 'from-red-400 to-red-600', sizePx: 48, orbit: 240 },
    // Neden (Why): light bulb
    { category: 'Neden', label: t('fiveWOneH.category.why', 'Neden?'), emoji: '💡', color: 'from-orange-300 to-orange-500', sizePx: 64, orbit: 290 },
    // Nasıl (How): tools/wrench
    { category: 'Nasıl', label: t('fiveWOneH.category.how', 'Nasıl?'), emoji: '🛠️', color: 'from-yellow-300 to-yellow-500', sizePx: 58, orbit: 340 },
    // Karışık (Mixed): shuffle/dice
    { category: 'Karışık', label: t('fiveWOneH.category.mixed', 'Karışık'), emoji: '🔀', color: 'from-cyan-300 to-cyan-500', sizePx: 48, orbit: 385 },
  ];

  // Stable pseudo-random helpers to avoid overlap; different speed/phase/direction per category
  const hash = (s: string) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  };
  const jitter = (key: string, min: number, max: number) => {
    const h = hash(key) % 1000;
    return min + (h / 1000) * (max - min);
  };

  const renderPlanet = (planet: typeof planets[0]) => {
    const orbitScaled = Math.round(planet.orbit * scale);
    const size = planet.sizePx; // keep constant for readability; can also multiply by scale if needed
    const half = Math.floor(size / 2);
    // duration between 16s..34s but also slightly depend on orbit so outer rings can be slower
  const base = 16 + (planet.orbit / 385) * 10; // 16..26
  const dur = Math.round(jitter(planet.category, base, base + 8)); // vary + up to 8s
  const delay = -Math.round(jitter(planet.category + '-d', 0, 10));
    return (
      <div
        key={planet.category}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          animation: `spin ${dur}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <div
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${orbitScaled * 2}px`,
            height: `${orbitScaled * 2}px`,
          }}
        />
        <button
          onClick={() => onSelectCategory(planet.category as FiveWOneHCategory | 'Karışık')}
          className={`absolute rounded-full bg-gradient-to-br ${planet.color} shadow-2xl border-2 border-white/30 flex items-center justify-center text-2xl hover:scale-125 transition-transform duration-300 cursor-pointer pointer-events-auto group`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `calc(50% + ${orbitScaled}px - ${half}px)`,
            top: `calc(50% - ${half}px)`,
          }}
          title={planet.label}
        >
          <span className="drop-shadow-lg">{planet.emoji}</span>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {planet.label}
          </span>
        </button>
      </div>
    );
  };

  if (isCosmic) {
    return (
      <>
        <CosmicBackdrop variant="rich" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden">
          <PanelStars count={100} />
          
          {/* Back button */}
          <div className="absolute top-4 left-4 z-20">
            <button 
              onClick={onBack} 
              className="p-2 rounded-full bg-yellow-400/20 hover:bg-yellow-400/30 backdrop-blur-sm border border-yellow-300/40 transition-all duration-200" 
              aria-label={t('app.back', 'Geri Dön')}
            >
              <ArrowLeftIcon className="w-8 h-8 text-white drop-shadow-md" />
            </button>
          </div>

          {/* Title */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500/80 via-orange-400/80 to-yellow-500/80 backdrop-blur-sm border border-yellow-300/40 shadow-lg shadow-yellow-400/30">
              <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
                5N1K
              </h1>
            </div>
          </div>

          {/* Solar System Container */}
          <div className="relative z-10 flex items-center justify-center" style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
            {/* Sun in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 shadow-2xl shadow-yellow-400/50 animate-pulse flex items-center justify-center text-5xl border-4 border-yellow-200/50">
                ☀️
              </div>
            </div>

            {/* Orbiting planets */}
            {planets.map((planet) => renderPlanet(planet))}
          </div>

          {/* Legend + Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-[92%] max-w-[920px] flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-3 bg-black/35 text-white/85 px-3 py-2 rounded-xl backdrop-blur-sm text-[11px] sm:text-xs">
              <span className="flex items-center gap-1"><span>👤</span><span>Kim</span></span>
              <span className="flex items-center gap-1"><span>📦</span><span>Ne</span></span>
              <span className="flex items-center gap-1"><span>📍</span><span>Nerede</span></span>
              <span className="flex items-center gap-1"><span>⏰</span><span>Ne Zaman</span></span>
              <span className="flex items-center gap-1"><span>💡</span><span>Neden</span></span>
              <span className="flex items-center gap-1"><span>🛠️</span><span>Nasıl</span></span>
              <span className="flex items-center gap-1"><span>🔀</span><span>Karışık</span></span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70 text-center bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {t('fiveWOneH.instructions', 'Bir gezegene tıklayarak kategoriyi seç')}
            </p>
          </div>
        </div>
      </>
    );
  }

  if (isUnderwater) {
    return (
      <>
        {/* Underwater backdrop */}
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden>
          {/* Ocean gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001122] via-[#001a2e] to-[#000814]" />
          
          {/* Animated bubbles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-400/15 border border-cyan-300/20 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${12 + Math.random() * 16}px`,
                  height: `${12 + Math.random() * 16}px`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
          
          {/* Light rays */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-cyan-300/40 via-transparent to-transparent transform rotate-12" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent transform -rotate-8" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-teal-300/35 via-transparent to-transparent transform rotate-6" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            {/* Jellyfish */}
            <div className="absolute top-12 right-16 w-12 h-12 opacity-20">
              <div className="w-full h-full bg-cyan-400/20 rounded-full relative animate-pulse">
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-5 bg-cyan-400/20 rounded-b-full"></div>
                <div className="absolute top-1.5 left-1.5 w-1.5 h-3 bg-cyan-300/30 rounded-full"></div>
                <div className="absolute top-1.5 right-1.5 w-1.5 h-3 bg-cyan-300/30 rounded-full"></div>
              </div>
            </div>
            {/* Fish */}
            <div className="absolute bottom-16 left-12 text-cyan-300/15 text-xl animate-pulse">🐠</div>
            <div className="absolute top-1/3 left-8 text-teal-300/10 text-lg animate-pulse" style={{ animationDelay: '1s' }}>🐟</div>
          </div>
          
          {/* Back button */}
          <div className="absolute top-4 left-4 z-20">
            <button 
              onClick={onBack} 
              className="p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/40 transition-all duration-200" 
              aria-label={t('app.back', 'Geri Dön')}
            >
              <ArrowLeftIcon className="w-8 h-8 text-cyan-100 drop-shadow-md" />
            </button>
          </div>

          {/* Title */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/80 via-teal-400/80 to-cyan-500/80 backdrop-blur-sm border border-cyan-300/40 shadow-lg shadow-cyan-400/30">
              <h1 className="text-3xl sm:text-4xl font-black text-cyan-100 drop-shadow-lg">
                5N1K
              </h1>
            </div>
          </div>

          {/* Underwater themed container */}
          <div className="relative z-10 flex items-center justify-center mt-20" style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
            {/* Central bubble */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300/60 via-teal-400/60 to-cyan-500/60 shadow-2xl shadow-cyan-400/30 animate-pulse flex items-center justify-center text-6xl border-4 border-cyan-200/50 backdrop-blur-sm">
                🫧
              </div>
            </div>

            {/* Orbiting bubbles with categories */}
            {planets.map((planet) => {
              const orbitScaled = Math.round(planet.orbit * scale);
              const size = planet.sizePx;
              const half = Math.floor(size / 2);
              const base = 18 + (planet.orbit / 385) * 12;
              const dur = Math.round(jitter(planet.category, base, base + 10));
              const delay = -Math.round(jitter(planet.category + '-d', 0, 12));
              
              return (
                <div
                  key={planet.category}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    animation: `spin ${dur}s linear infinite`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  <button
                    onClick={() => onSelectCategory(planet.category as FiveWOneHCategory | 'Karışık')}
                    className={`absolute rounded-full bg-gradient-to-br ${planet.color} shadow-2xl border-2 border-cyan-200/40 flex items-center justify-center text-2xl hover:scale-125 transition-transform duration-300 cursor-pointer pointer-events-auto group backdrop-blur-sm`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `calc(50% + ${orbitScaled}px - ${half}px)`,
                      top: `calc(50% - ${half}px)`,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                    }}
                    title={planet.label}
                  >
                    <span className="drop-shadow-lg">{planet.emoji}</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-cyan-100 bg-slate-900/80 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {planet.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Legend + Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-[92%] max-w-[920px] flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-3 bg-slate-900/40 text-cyan-100/85 px-3 py-2 rounded-xl backdrop-blur-sm text-[11px] sm:text-xs">
              <span className="flex items-center gap-1"><span>👤</span><span>Kim</span></span>
              <span className="flex items-center gap-1"><span>📦</span><span>Ne</span></span>
              <span className="flex items-center gap-1"><span>📍</span><span>Nerede</span></span>
              <span className="flex items-center gap-1"><span>⏰</span><span>Ne Zaman</span></span>
              <span className="flex items-center gap-1"><span>💡</span><span>Neden</span></span>
              <span className="flex items-center gap-1"><span>🛠️</span><span>Nasıl</span></span>
              <span className="flex items-center gap-1"><span>🔀</span><span>Karışık</span></span>
            </div>
            <p className="text-[11px] sm:text-xs text-cyan-100/70 text-center bg-slate-900/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {t('fiveWOneH.instructions', 'Bir kabarcığa tıklayarak kategoriyi seç')}
            </p>
          </div>
        </div>
      </>
    );
  }

  const colorClassMap: Record<'emerald' | 'amber' | 'sky' | 'indigo' | 'rose' | 'teal', string> = {
    emerald: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
    amber: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    sky: 'bg-sky-100 text-sky-800 hover:bg-sky-200',
    indigo: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    rose: 'bg-rose-100 text-rose-800 hover:bg-rose-200',
    teal: 'bg-teal-100 text-teal-800 hover:bg-teal-200',
  };

  const categories: { id: FiveWOneHCategory; label: string; color: 'emerald' | 'amber' | 'sky' | 'indigo' | 'rose' | 'teal' }[] = [
    { id: 'Kim', label: t('fiveWOneH.category.who', 'Kim?'), color: 'emerald' },
    { id: 'Ne', label: t('fiveWOneH.category.what', 'Ne?'), color: 'amber' },
    { id: 'Nerede', label: t('fiveWOneH.category.where', 'Nerede?'), color: 'sky' },
    { id: 'Ne Zaman', label: t('fiveWOneH.category.when', 'Ne Zaman?'), color: 'indigo' },
    { id: 'Neden', label: t('fiveWOneH.category.why', 'Neden?'), color: 'rose' },
    { id: 'Nasıl', label: t('fiveWOneH.category.how', 'Nasıl?'), color: 'teal' },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" aria-label={t('app.back', 'Geri Dön')}>
          <span className="text-lg font-bold">←</span>
        </button>
        <h1 className="flex-1 text-center text-3xl font-black text-emerald-700">5N1K</h1>
      </div>
      <div className="w-full flex-grow overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`rounded-2xl px-4 py-6 font-bold text-lg shadow-md transition-colors ${colorClassMap[cat.color]}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          <button
            className="rounded-2xl px-4 py-6 font-bold text-lg shadow-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            onClick={() => onSelectCategory('Karışık')}
          >
            {t('fiveWOneH.category.mixed', 'Karışık')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiveWOneHMenuScreen;
