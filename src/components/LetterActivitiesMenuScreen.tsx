import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import BookOpenIcon from './icons/BookOpenIcon.tsx';
import SyllableIcon from './icons/SyllableIcon.tsx';
import GridIcon from './icons/GridIcon.tsx';
import ImageIcon from './icons/ImageIcon.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import SearchIcon from './icons/SearchIcon.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import { LETTER_GROUPS } from '../constants.ts';
import { t } from '../i18n/index.ts';
import MenuButton from './ui/MenuButton.tsx';

interface LetterActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const LetterActivitiesMenuScreen: React.FC<LetterActivitiesMenuScreenProps> = ({ onSelectActivity, onBack, activityStats, theme, enabledActivities }) => {
  
  const activities = [
    { id: ActivityType.FindTheLetterInGrid, icon: GridIcon, title: t('activities.letter.grid', 'Harf Tablosu'), subtitle: t('activities.letterSubtitles.grid', 'Karışık harflerden isteneni bul.'), color: 'amber' as const, hasSubCategories: true },
    { id: ActivityType.SoundPresence, icon: SpeakerIcon, title: t('activities.letter.soundPresence', 'Seste Harf Var mı?'), subtitle: t('activities.letterSubtitles.soundPresence', 'Görselin adında o ses var mı?'), color: 'teal' as const, hasSubCategories: true },
    { id: ActivityType.FindTheLetter, icon: SearchIcon, title: t('activities.letter.findTheLetter', 'Harf Bulma Oyunu'), subtitle: t('activities.letterSubtitles.findTheLetter', 'Kelimenin içindeki harfleri bul.'), color: 'indigo' as const, hasSubCategories: true },
    { id: ActivityType.FindTheSoundInImage, icon: ImageIcon, title: t('activities.letter.findSoundInImage', 'Görselde Sesi Bul'), subtitle: t('activities.letterSubtitles.findSoundInImage', 'İstenen sesi içeren görseli seç.'), color: 'emerald' as const, hasSubCategories: true },
    { id: ActivityType.Syllabification, icon: SyllableIcon, title: t('activities.letter.syllabification', 'Heceleme Oyunu'), subtitle: t('activities.letterSubtitles.syllabification', 'Kelimeleri hecelerine ayır.'), color: 'rose' as const, hasSubCategories: true },
    { id: ActivityType.EmbeddedStory, icon: BookOpenIcon, title: t('activities.letter.embeddedStory', 'Hikaye Zamanı'), subtitle: t('activities.letterSubtitles.embeddedStory', 'Harfle ilgili hikayeleri dinle.'), color: 'purple' as const, hasSubCategories: false },
  ];

  const getAggregateStats = (activityId: ActivityType): ActivityStats => {
      let totalCorrect = 0;
      let totalQuestions = 0;
      let attempts = 0;
      const prefix = String(activityId);

      // Aggregate stats from sub-categories (letters or groups)
      if (activityId === ActivityType.Syllabification) {
          for (let i = 1; i <= 5; i++) { // For 5 groups
              const key = `${prefix}-${i}`;
              const stats = activityStats[key];
              if (stats) {
                  attempts += stats.attempts;
                  totalCorrect += stats.totalCorrect || 0;
                  totalQuestions += stats.totalQuestions || 0;
              }
          }
      } else {
          const allLetters = LETTER_GROUPS.flatMap(g => g.letters);
          for (const letter of allLetters) {
              const key = `${prefix}-${letter}`;
              const stats = activityStats[key];
              if (stats) {
                  attempts += stats.attempts;
                  totalCorrect += stats.totalCorrect || 0;
                  totalQuestions += stats.totalQuestions || 0;
              }
          }
      }

      // Also include the main activity's stats if they exist
      const mainStats = activityStats[prefix];
      if (mainStats) {
          attempts = Math.max(attempts, mainStats.attempts); // Use the larger attempt count
      }
      
      return { attempts, completions: 0, totalCorrect, totalQuestions };
  };

  const isSimpleTheme = theme === 'simple';
  const titleColorClass = isSimpleTheme ? 'text-purple-900' : 'text-white text-shadow-soft';
  const subtitleColorClass = isSimpleTheme ? 'text-pink-700' : 'text-white/90 text-shadow-soft';
  const iconColorClass = isSimpleTheme ? 'text-purple-700' : 'text-white';

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-y-auto">
      <div className="w-full flex items-center mb-4 sm-landscape:mb-2 relative">
        <button 
          onClick={onBack} 
          className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" 
          aria-label={t('app.back', 'Go back')}
        >
          <ArrowLeftIcon className={`w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 ${iconColorClass}`} />
        </button>
        <h1 className={`flex-1 text-center text-3xl sm:text-4xl sm-landscape:text-2xl font-black ${titleColorClass}`}>
          {t('menu.letterSound.title', 'Harf ve Sesler')}
        </h1>
      </div>

      <p className={`text-center mb-6 sm-landscape:mb-3 text-lg sm-landscape:text-base ${subtitleColorClass}`}>
        {t('letters.menuSubtitle', 'Bir etkinlik seç ve harfleri öğrenmeye başla!')}
      </p>
      
      <div className="w-full pr-2 animate-fade-in">
         <div className="grid grid-cols-2 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-2">
            {activities.map((activity) => {
                const stats = activity.hasSubCategories ? getAggregateStats(activity.id) : activityStats[String(activity.id)];
                const isDisabled = !enabledActivities.has(String(activity.id));
                return (
                  <MenuButton
                      key={activity.id}
                      icon={activity.icon}
                      title={activity.title}
                      subtitle={activity.subtitle}
                      onClick={() => onSelectActivity(activity.id)}
                      color={activity.color}
                      theme={theme}
                      disabled={isDisabled}
                  >
                      {activity.hasSubCategories && stats && (
                        <ProgressIndicator 
                            mode="aggregate"
                            attempts={stats.attempts} 
                            completions={stats.completions}
                            totalCorrect={stats.totalCorrect}
                            totalQuestions={stats.totalQuestions}
                        />
                      )}
                  </MenuButton>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(LetterActivitiesMenuScreen);
