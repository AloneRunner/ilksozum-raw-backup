import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import HandIcon from './icons/HandIcon.tsx';
import ShapesIcon from './icons/ShapesIcon.tsx';
import MusicNote from './icons/SpeakerIcon.tsx';
import MenuButton from './ui/MenuButton.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import { getCurrentLanguage, t } from '../i18n/index.ts';
import CosmicBackdrop from './ui/CosmicBackdrop.tsx';
import PanelStars from './ui/PanelStars.tsx';

interface FineMotorActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const FineMotorActivitiesMenuScreen: React.FC<FineMotorActivitiesMenuScreenProps> = ({ onSelectActivity, onBack, activityStats, theme, enabledActivities }) => {
  const lang = getCurrentLanguage();
  const isTr = lang === 'tr';
  const items = [
    { type: ActivityType.LineTracing, icon: HandIcon, title: isTr ? 'Çizgi Takip' : t('fineMotor.activities.lineTracing.title', 'Line Tracing'), subtitle: t('lineTracing.instruction', isTr ? 'Parmağınla çizgiyi takip et.' : 'Follow the line with your finger.'), color: 'rose' as const },
  { type: ActivityType.ShapeColoring, icon: ShapesIcon, title: isTr ? 'Şekil Boyama' : t('fineMotor.activities.coloring.title', 'Shape Coloring'), subtitle: isTr ? 'Şekilleri renklendir' : t('fineMotor.activities.coloring.subtitle', 'Color the shapes'), color: 'amber' as const },
  { type: ActivityType.RhythmFollowing, icon: MusicNote, title: isTr ? 'Ritim Takip' : t('fineMotor.activities.rhythm.title', 'Rhythm Following'), subtitle: isTr ? 'Ritmi takip et' : t('fineMotor.activities.rhythm.subtitle', 'Follow the rhythm'), color: 'purple' as const },
  ];
  const isCosmic = theme === 'deneme2';
  const isUnderwater = theme === 'deneme';
  const isThemed = theme !== 'simple';
  const titleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-rose-800';
  const iconColorClass = isThemed ? 'text-white' : 'text-rose-700';

  if (isCosmic) {
    // Cosmic styled header + cards (consistent with other cosmic menus)
    const palettes = [
      { from: 'from-pink-400', via: 'via-fuchsia-300', to: 'to-rose-200', glow: 'shadow-rose-400/40' },
      { from: 'from-amber-400', via: 'via-orange-300', to: 'to-yellow-200', glow: 'shadow-amber-400/40' },
      { from: 'from-indigo-400', via: 'via-violet-300', to: 'to-fuchsia-200', glow: 'shadow-indigo-400/40' },
    ];
    const renderCosmicCard = (activity: typeof items[number], idx: number) => {
      const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
      const isDisabled = !enabledActivities.has(String(activity.type));
      const palette = palettes[idx % palettes.length];
      const Icon = activity.icon;
      return (
        <button
          key={activity.type}
          onClick={() => !isDisabled && onSelectActivity(activity.type)}
          disabled={isDisabled}
          className={`relative flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-cyan-300/30 min-h-[180px] transition-all duration-300 ${
            isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer'
          }`}
        >
          <div className={`w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br ${palette.from} ${palette.via} ${palette.to} shadow-lg ${palette.glow} flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white drop-shadow-md" />
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
        <div className="relative z-10 flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden">
          <PanelStars count={60} />
          <div className="relative z-10 w-full flex items-center mb-8 sm-landscape:mb-4">
            <button
              onClick={onBack}
              className="absolute left-0 p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/30 transition-all duration-200"
              aria-label={t('app.back', isTr ? 'Geri dön' : 'Go back')}
            >
              <ArrowLeftIcon className="w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 text-white drop-shadow-md" />
            </button>
            <div className="flex-1 flex justify-center">
              <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600/80 via-sky-500/80 to-indigo-600/80 backdrop-blur-sm border border-cyan-300/40 shadow-lg shadow-cyan-400/30">
                <h1 className="text-3xl sm:text-4xl sm-landscape:text-2xl font-black text-white drop-shadow-lg">
                  {t('menu.fineMotor.title', isTr ? 'İnce Motor Beceriler' : 'Fine Motor Skills')}
                </h1>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-3">
              {items.map((activity, idx) => renderCosmicCard(activity, idx))}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isUnderwater) {
    const depict = (activity: typeof items[number], idx: number) => {
      const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
      const isDisabled = !enabledActivities.has(String(activity.type));
      const jellyfishColors = [
        // Oceanic palette — prioritize blues, cyans and teals. Keep variety but avoid pinks.
        'from-blue-600 to-cyan-500',
        'from-cyan-600 to-teal-500',
        'from-teal-600 to-blue-500',
        'from-sky-600 to-cyan-400',
        'from-indigo-600 to-blue-500',
        'from-blue-700 to-teal-500',
        'from-cyan-500 to-sky-400',
        'from-teal-500 to-cyan-400',
      ];
      const color = jellyfishColors[idx % jellyfishColors.length];
      const Icon = activity.icon;
      return (
        <button
          key={activity.type}
          onClick={() => !isDisabled && onSelectActivity(activity.type)}
          disabled={isDisabled}
          className={`relative flex flex-col items-center transition-all duration-300 ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110'}`}>
          <div className={`w-32 h-24 sm:w-36 sm:h-28 rounded-t-full bg-gradient-to-b ${color} border-2 border-white/30 backdrop-blur-sm shadow-lg relative overflow-hidden`}> 
            <div className="absolute inset-0 flex items-center justify-center"><Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md"/></div>
          </div>
          <div className="flex gap-0.5 justify-center -mt-1">
            {[...Array(8)].map((_, i) => (<div key={i} className={`w-0.5 h-8 bg-gradient-to-b ${color} opacity-60 rounded-full animate-tentacle`} style={{ height: `${32 + Math.random() * 12}px`, animationDelay: `${i * 0.15}s`, transformOrigin: 'top' }} />))}
          </div>
          <h3 className="text-sm font-bold text-white text-center mt-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">{activity.title}</h3>
          <p className="text-xs text-white/90 text-center drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]">{activity.subtitle}</p>
          <div className="w-full px-2 mt-2"><ProgressIndicator attempts={stats.attempts} completions={stats.completions} totalCorrect={stats.totalCorrect} totalQuestions={stats.totalQuestions} /></div>
        </button>
      );
    };

    return (
      <>
        {/* Deep ocean gradient background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#001122] via-[#001a2e] to-[#000814]" />
        
        {/* Ocean bubbles animation */}
        <div className="absolute inset-0 -z-18 opacity-40">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-10px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Ocean floor sand */}
        <div className="absolute bottom-0 left-0 right-0 h-32 -z-15 bg-gradient-to-t from-amber-900/30 via-amber-800/20 to-transparent" />
        
        {/* Light rays from surface */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-300/60 via-cyan-400/30 to-transparent -z-16" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-300/60 via-blue-400/30 to-transparent -z-16" />

        <div className="relative z-10 flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden">
          <div className="relative z-10 w-full flex items-center mb-8 sm-landscape:mb-4">
            <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-300/30 backdrop-blur-sm transition-all duration-200" aria-label={t('app.back', 'Geri dön')}>
              <ArrowLeftIcon className="w-8 h-8 text-cyan-100" />
            </button>
            <div className="flex-1 flex justify-center"><div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600/80 via-sky-500/80 to-indigo-600/80 backdrop-blur-sm border border-cyan-300/40 shadow-lg"><h1 className="text-3xl sm:text-4xl font-black text-cyan-100">{t('menu.fineMotor.title', 'İnce Motor Beceriler')}</h1></div></div>
          </div>

          <div className="relative z-10 w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-6 sm-landscape:gap-4">
              {items.map((activity, idx) => depict(activity, idx))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 sm-landscape:p-1 animate-fade-in">
      <div className="w-full flex items-center mb-8 sm-landscape:mb-4 relative">
        <button 
          onClick={onBack} 
          className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" 
          aria-label={t('app.back', isTr ? 'Geri dön' : 'Go back')}
        >
          <ArrowLeftIcon className={`w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 ${iconColorClass}`} />
        </button>
        <h1 className={`flex-1 text-center text-3xl sm:text-4xl sm-landscape:text-2xl font-black ${titleColorClass}`}>
          {t('menu.fineMotor.title', isTr ? 'İnce Motor Beceriler' : 'Fine Motor Skills')}
        </h1>
      </div>

      <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
         <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-3">
            {items.map((activity) => {
                const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                const isDisabled = !enabledActivities.has(String(activity.type));
                return (
                    <MenuButton
                        key={activity.type}
                        icon={activity.icon}
                        title={activity.title}
                        subtitle={activity.subtitle}
                        onClick={() => onSelectActivity(activity.type)}
                        color={activity.color}
                        theme={theme}
                        disabled={isDisabled}
                    >
                        <ProgressIndicator 
                            attempts={stats.attempts} 
                            completions={stats.completions}
                            totalCorrect={stats.totalCorrect}
                            totalQuestions={stats.totalQuestions}
                        />
                    </MenuButton>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default FineMotorActivitiesMenuScreen;
