import React, { useEffect, useMemo, useState } from 'react';
import { FiveWOneHCategory } from '../services/database/activities/reasoning/fiveWOneHBatch50';
import { getCurrentLanguage, t } from '../i18n/index';
import CosmicBackdrop from './ui/CosmicBackdrop.tsx';
import PanelStars from './ui/PanelStars.tsx';
import UnderwaterBackdrop from './ui/UnderwaterBackdrop.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';

interface FiveWOneHMenuScreenProps {
  onSelectCategory: (category: FiveWOneHCategory | 'Karışık') => void;
  onBack: () => void;
  theme: string;
}

const FiveWOneHMenuScreen: React.FC<FiveWOneHMenuScreenProps> = ({ onSelectCategory, onBack, theme }) => {
  const lang = getCurrentLanguage();
  const isCosmic = theme === 'deneme2';
  const isUnderwater = theme === 'deneme';
  const localizedTitle = t('menu.fiveWOneH.title', '5N1K');

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
  const planets = useMemo(() => [
    // Kim (Who): person silhouette
    { category: 'Kim', label: t('menu.fiveWOneH.category.who', 'Kim?'), emoji: '👤', color: 'from-gray-400 to-gray-600', sizePx: 44, orbit: 120 },
    // Ne (What): box/object
    { category: 'Ne', label: t('menu.fiveWOneH.category.what', 'Ne?'), emoji: '📦', color: 'from-yellow-400 to-orange-500', sizePx: 50, orbit: 160 },
    // Nerede (Where): map pin / globe
    { category: 'Nerede', label: t('menu.fiveWOneH.category.where', 'Nerede?'), emoji: '📍', color: 'from-blue-400 to-blue-600', sizePx: 56, orbit: 200 },
    // Ne Zaman (When): clock
    { category: 'Ne Zaman', label: t('menu.fiveWOneH.category.when', 'Ne Zaman?'), emoji: '⏰', color: 'from-red-400 to-red-600', sizePx: 48, orbit: 240 },
    // Neden (Why): light bulb
    { category: 'Neden', label: t('menu.fiveWOneH.category.why', 'Neden?'), emoji: '💡', color: 'from-orange-300 to-orange-500', sizePx: 64, orbit: 290 },
    // Nasıl (How): tools/wrench
    { category: 'Nasıl', label: t('menu.fiveWOneH.category.how', 'Nasıl?'), emoji: '🛠️', color: 'from-yellow-300 to-yellow-500', sizePx: 58, orbit: 340 },
    // Karışık (Mixed): shuffle/dice
    { category: 'Karışık', label: t('menu.fiveWOneH.category.mixed', 'Karışık'), emoji: '🔀', color: 'from-cyan-300 to-cyan-500', sizePx: 48, orbit: 385 },
  ], [lang]);

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
                {localizedTitle}
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
              {planets.map((planet) => (
                <span key={planet.category} className="flex items-center gap-1">
                  <span>{planet.emoji}</span>
                  <span>{planet.label}</span>
                </span>
              ))}
            </div>
            <p className="text-[11px] sm:text-xs text-white/70 text-center bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {t('menu.fiveWOneH.instructions', 'Bir gezegene tıklayarak kategoriyi seç')}
            </p>
          </div>
        </div>
      </>
    );
  }

  if (isUnderwater) {
    return (
      <>
        <UnderwaterBackdrop count={12} className="-z-20 opacity-90" />

        <div className="relative z-10 flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden">
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-12 w-12 h-12 opacity-14">🪼</div>
            <div className="absolute bottom-12 left-8 text-cyan-300/12 text-xl">🐠</div>
          </div>

          <div className="absolute top-4 left-4 z-20">
            <button
              onClick={onBack}
              className="p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/40 transition-all duration-200"
              aria-label={t('app.back', 'Geri Dön')}
            >
              <ArrowLeftIcon className="w-8 h-8 text-cyan-100 drop-shadow-md" />
            </button>
          </div>

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/80 to-teal-500/80 drop-shadow-lg border border-cyan-300/40">
              <h1 className="text-3xl font-black text-cyan-100">{localizedTitle}</h1>
            </div>
          </div>

          <div className="relative z-10 w-full flex-grow overflow-y-auto">
            <div className="grid grid-cols-2 gap-4 landscape:grid-cols-3 sm-landscape:grid-cols-4">
              {planets.map((planet) => (
                <button
                  key={planet.category}
                  onClick={() => onSelectCategory(planet.category as FiveWOneHCategory | 'Karışık')}
                  className={`w-full p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:scale-105 border border-cyan-300/10`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${planet.color} shadow-lg`}>{planet.emoji}</div>
                  <div className="mt-2 text-sm font-bold text-cyan-100">{planet.label}</div>
                </button>
              ))}
            </div>
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
    { id: 'Kim', label: t('menu.fiveWOneH.category.who', 'Kim?'), color: 'emerald' },
    { id: 'Ne', label: t('menu.fiveWOneH.category.what', 'Ne?'), color: 'amber' },
    { id: 'Nerede', label: t('menu.fiveWOneH.category.where', 'Nerede?'), color: 'sky' },
    { id: 'Ne Zaman', label: t('menu.fiveWOneH.category.when', 'Ne Zaman?'), color: 'indigo' },
    { id: 'Neden', label: t('menu.fiveWOneH.category.why', 'Neden?'), color: 'rose' },
    { id: 'Nasıl', label: t('menu.fiveWOneH.category.how', 'Nasıl?'), color: 'teal' },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" aria-label={t('app.back', 'Geri Dön')}>
          <span className="text-lg font-bold">←</span>
        </button>
        <h1 className="flex-1 text-center text-3xl font-black text-emerald-700">{localizedTitle}</h1>
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
            {t('menu.fiveWOneH.category.mixed', 'Karışık')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiveWOneHMenuScreen;
