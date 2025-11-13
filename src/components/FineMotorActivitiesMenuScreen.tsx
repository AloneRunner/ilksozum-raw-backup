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
