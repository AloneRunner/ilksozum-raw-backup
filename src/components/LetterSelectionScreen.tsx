import React from 'react';
import { LETTER_GROUPS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import ProgressIndicator from './ui/ProgressIndicator.tsx';

interface LetterSelectionScreenProps {
  onSelectLetter: (letter: string) => void;
  onBack: () => void;
  activityType: ActivityType | null;
  activityStats: Record<string, ActivityStats>;
  theme: string;
}

const LetterSelectionScreen: React.FC<LetterSelectionScreenProps> = ({ onSelectLetter, onBack, activityType, activityStats }) => {

  const getActivityTitle = () => {
    if (!activityType) return "Alıştırma Seç";
    const titles: { [key in ActivityType]?: string } = {
        [ActivityType.FindTheLetter]: "Harf Bulma Oyunu",
        [ActivityType.FindTheSoundInImage]: "Görselde Sesi Bul",
        [ActivityType.EmbeddedStory]: "Hikaye Zamanı",
        [ActivityType.SoundPresence]: "Seste Harf Var mı?",
        [ActivityType.FindTheLetterInGrid]: "Harf Tablosu",
    };
    return titles[activityType] || "Alıştırma Seç";
  };
  
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-2 sm:p-4 animate-fade-in overflow-y-auto">
       <div className="w-full flex justify-between items-center mb-4">
          <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
              <ArrowLeftIcon className="w-8 h-8 text-sky-700" />
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-sky-800 text-center px-4">
            {getActivityTitle()}
          </h1>
          <div className="w-12 h-12"></div>
      </div>
      
      <p className="text-center text-slate-600 mb-6 text-lg">
        Alıştırma yapmak için bir harf seç.
      </p>

      <div className="w-full space-y-6">
        {LETTER_GROUPS.map((group) => (
          <div key={group.name}>
            <h2 className="text-xl font-bold text-sky-800 mb-3 pl-1">{group.name}</h2>
            <div className="flex flex-nowrap gap-2 sm:gap-3 overflow-x-auto pb-2 touch-auto">
              {group.letters.map((letter) => {
                const statsKey = activityType ? `${activityType}-${letter}` : '';
                const stats = activityStats[statsKey] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                const showProgress = activityType !== ActivityType.EmbeddedStory;

                return (
                  <button
                    key={letter}
                    onClick={() => onSelectLetter(letter)}
                    className="relative flex-shrink-0 w-12 h-16 sm:w-16 sm:h-20 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg flex items-center justify-center font-black text-2xl sm:text-3xl text-sky-800 hover:bg-sky-100/80 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-400 overflow-hidden"
                    aria-label={`'${letter}' harfi alıştırması`}
                  >
                    {letter}
                    {showProgress && 
                        <ProgressIndicator 
                            mode="individual"
                            attempts={stats.attempts} 
                            completions={stats.completions}
                            totalCorrect={stats.totalCorrect}
                            totalQuestions={stats.totalQuestions}
                        />
                    }
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(LetterSelectionScreen);