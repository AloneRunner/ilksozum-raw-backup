import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import SparklesIcon from './icons/SparklesIcon.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import MenuButton from './ui/MenuButton.tsx';
import { t } from '../i18n/index.ts';
import CosmicBackdrop from './ui/CosmicBackdrop.tsx';
import PanelStars from './ui/PanelStars.tsx';

interface RelativeComparisonActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const activityDefs = [
  { type: ActivityType.RelativeBigSmall, key: 'concepts.activities.bigSmall', fallback: 'Büyük / Küçük' },
  { type: ActivityType.RelativeWideNarrow, key: 'concepts.activities.wideNarrow', fallback: 'Geniş / Dar' },
  { type: ActivityType.RelativeThinThick, key: 'concepts.activities.thinThick', fallback: 'İnce / Kalın' },
  { type: ActivityType.RelativeFewMuch, key: 'concepts.activities.fewMuch', fallback: 'Az / Çok' },
  { type: ActivityType.RelativeLongShort, key: 'concepts.activities.longShort', fallback: 'Uzun / Kısa' },
  { type: ActivityType.RelativeNearFar, key: 'concepts.activities.nearFar', fallback: 'Yakın / Uzak' },
  { type: ActivityType.RelativeHighLow, key: 'concepts.activities.highLow', fallback: 'Yüksek / Alçak' },
];

const RelativeComparisonActivitiesMenuScreen: React.FC<RelativeComparisonActivitiesMenuScreenProps> = ({
  onSelectActivity,
  onBack,
  activityStats,
  theme,
  enabledActivities,
}) => {
  const activities = activityDefs.map(a => ({
    type: a.type,
    title: t(a.key, a.fallback),
    subtitle: t('experimental.relativeComparison.instruction', 'Açılan iki kartı karşılaştır ve soruyu cevapla.'),
  }));
  const isCosmic = theme === 'deneme2';
  const isUnderwater = theme === 'deneme';

  if (isCosmic) {
    const palettes = [
      { from: 'from-cyan-600', via: 'via-blue-500', to: 'to-indigo-400', glow: 'shadow-cyan-500/50' },
      { from: 'from-teal-600', via: 'via-cyan-500', to: 'to-sky-400', glow: 'shadow-teal-500/50' },
      { from: 'from-indigo-600', via: 'via-blue-500', to: 'to-cyan-400', glow: 'shadow-indigo-500/50' },
    ];
    const renderCosmicCard = (activity: typeof activities[number], idx: number) => {
      const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
      const isEnabled = enabledActivities.has(String(activity.type));
      const palette = palettes[idx % palettes.length];
      return (
        <button
          key={String(activity.type)}
          onClick={() => isEnabled && onSelectActivity(activity.type)}
          disabled={!isEnabled}
          className={`relative flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-cyan-300/30 min-h-[180px] transition-all duration-300 ${
            !isEnabled ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer'
          }`}
        >
          <div className={`w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br ${palette.from} ${palette.via} ${palette.to} shadow-lg ${palette.glow} flex items-center justify-center`}>
            <SparklesIcon className="w-7 h-7 text-white drop-shadow-md" />
          </div>
          <h3 className="text-sm font-bold text-white text-center mb-1 flex-shrink-0 line-clamp-2">{activity.title}</h3>
          <p className="text-xs text-cyan-100/80 text-center flex-shrink-0 line-clamp-1 mb-2">{activity.subtitle}</p>
          <div className="mt-auto w-full">
            <ProgressIndicator 
              attempts={stats.attempts} 
              completions={stats.completions}
              totalCorrect={stats.totalCorrect}
              totalQuestions={stats.totalQuestions}
            />
          </div>
        </button>
      );
    };

    return (
      <>
        <CosmicBackdrop variant="rich" />
        <div className="relative z-10 flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden">
          <PanelStars count={72} />
          <div className="relative z-10 w-full flex items-center mb-6 sm-landscape:mb-3">
            <button 
              onClick={onBack} 
              className="absolute left-0 z-20 p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/30 transition-all duration-200" 
              aria-label={t('app.back', 'Geri dön')}
            >
              <ArrowLeftIcon className="w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 text-white drop-shadow-md" />
            </button>
            <div className="flex-1 flex justify-center">
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/80 via-cyan-500/80 to-blue-600/80 backdrop-blur-sm border border-cyan-300/40 shadow-lg shadow-cyan-400/30 pointer-events-none z-10">
                <h1 className="text-2xl sm:text-3xl sm-landscape:text-xl font-black text-white drop-shadow-lg">
                  {t('experimental.relativeComparison.title', 'Göreceli Karşılaştırma')}
                </h1>
              </div>
            </div>
          </div>
          <div className="relative z-10 w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-4 gap-4 sm-landscape:gap-3">
              {activities.map((a, idx) => renderCosmicCard(a, idx))}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isUnderwater) {
    const jellyfishColors = [
      'from-pink-400 to-purple-500',      // Pembe-mor jellyfish
      'from-cyan-400 to-blue-500',        // Mavi jellyfish  
      'from-green-400 to-teal-500',       // Yeşil jellyfish
      'from-purple-400 to-indigo-500',    // Mor jellyfish
      'from-teal-400 to-cyan-500',        // Turkuaz jellyfish
      'from-blue-400 to-cyan-500',        // Açık mavi jellyfish
    ];
    
    const renderUnderwaterCard = (activity: typeof activities[number], idx: number) => {
      const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
      const isEnabled = enabledActivities.has(String(activity.type));
      const color = jellyfishColors[idx % jellyfishColors.length];
      
      return (
        <button
          key={String(activity.type)}
          onClick={() => isEnabled && onSelectActivity(activity.type)}
          disabled={!isEnabled}
          className={`relative flex flex-col items-center transition-all duration-300 ${
            !isEnabled ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'
          }`}
        >
          {/* Jellyfish body (dome) */}
          <div className={`w-24 h-12 rounded-t-full bg-gradient-to-b ${color} border-2 border-white/30 backdrop-blur-sm shadow-lg relative overflow-hidden ${isEnabled && 'hover:shadow-2xl'}`}>
            {/* Shine effect */}
            <div className="absolute top-1 left-3 w-4 h-4 bg-white/40 rounded-full blur-sm"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-white/30 rounded-full blur-sm"></div>
            
            {/* Icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </div>
          
          {/* Tentacles */}
          <div className="flex gap-0.5 justify-center -mt-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={`w-0.5 h-8 bg-gradient-to-b ${color} opacity-60 rounded-full`}
                style={{ height: `${24 + Math.random() * 8}px` }}
              />
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-sm font-bold text-cyan-100 text-center mt-2 line-clamp-2 px-2">{activity.title}</h3>
          
          {/* Subtitle */}
          <p className="text-xs text-cyan-200/70 text-center line-clamp-1 px-2 mb-2">{activity.subtitle}</p>
          
          {/* Progress */}
          <div className="w-full px-2">
            <ProgressIndicator 
              attempts={stats.attempts} 
              completions={stats.completions}
              totalCorrect={stats.totalCorrect}
              totalQuestions={stats.totalQuestions}
            />
          </div>
        </button>
      );
    };

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

        <div className="relative z-10 flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden">
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

          <div className="relative z-10 w-full flex items-center mb-6 sm-landscape:mb-3">
            <button 
              onClick={onBack} 
              className="absolute left-0 z-20 p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/30 transition-all duration-200" 
              aria-label={t('app.back', 'Geri dön')}
            >
              <ArrowLeftIcon className="w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 text-cyan-100 drop-shadow-md" />
            </button>
            <div className="flex-1 flex justify-center">
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600/80 via-teal-500/80 to-cyan-600/80 backdrop-blur-sm border border-cyan-300/40 shadow-lg shadow-cyan-400/30 pointer-events-none z-10">
                <h1 className="text-2xl sm:text-3xl sm-landscape:text-xl font-black text-cyan-100 drop-shadow-lg">
                  {t('experimental.relativeComparison.title', 'Göreceli Karşılaştırma')}
                </h1>
              </div>
            </div>
          </div>
          <div className="relative z-10 w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-4 gap-6 sm-landscape:gap-4">
              {activities.map((a, idx) => renderUnderwaterCard(a, idx))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
      <style>{`
        /* Make the activities area scrollable when needed and responsive to orientation */
        .rc-menu-scroll { max-height: calc(100vh - 8rem); overflow-y: auto; -webkit-overflow-scrolling: touch; }
        .rc-menu-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
        @media (min-width: 640px) { .rc-menu-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        /* In landscape prefer more columns so the menu compacts */
        @media (orientation: landscape) {
          .rc-menu-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) and (orientation: landscape) {
          .rc-menu-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>
      <div className="w-full flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={onBack}
          className="p-2 rounded-full hover:bg-black/10 transition-colors"
          aria-label={t('app.back', 'Geri dön')}
        >
          <ArrowLeftIcon className="w-8 h-8 text-teal-700" />
        </button>
        <div className="text-center flex-1">
          <h2 className="text-2xl font-bold text-slate-800">
            {t('experimental.relativeComparison.title', 'Göreceli Karşılaştırma')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('experimental.relativeComparison.menuSubtitle', 'Bir karşılaştırma etkinliği seç.')}
          </p>
        </div>
        <div className="w-8 h-8" />
      </div>

      <div className="rc-menu-scroll w-full">
        <div className="rc-menu-grid w-full">
        {activities.map((activity) => {
          const stats = activityStats[String(activity.type)];
          const isEnabled = enabledActivities.has(String(activity.type));
          return (
            <MenuButton
              key={String(activity.type)}
              icon={SparklesIcon}
              title={activity.title}
              subtitle={activity.subtitle}
              onClick={() => onSelectActivity(activity.type)}
              color="teal"
              theme={theme}
              disabled={!isEnabled}
            >
              {stats && (
                <ProgressIndicator
                  attempts={stats.attempts}
                  completions={stats.completions}
                  totalCorrect={stats.totalCorrect}
                  totalQuestions={stats.totalQuestions}
                />
              )}
            </MenuButton>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RelativeComparisonActivitiesMenuScreen);