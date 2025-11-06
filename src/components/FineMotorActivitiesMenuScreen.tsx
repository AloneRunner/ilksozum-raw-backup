import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import HandIcon from './icons/HandIcon.tsx';
import ShapesIcon from './icons/ShapesIcon.tsx';
import MusicNote from './icons/SpeakerIcon.tsx';
import MenuButton from './ui/MenuButton.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import { getCurrentLanguage, t } from '../i18n/index.ts';

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
  const isThemed = theme !== 'simple';
  const titleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-rose-800';
  const iconColorClass = isThemed ? 'text-white' : 'text-rose-700';

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
