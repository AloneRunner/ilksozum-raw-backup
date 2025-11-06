import React from 'react';
import { LETTER_GROUPS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';

interface LetterSelectionScreenProps {
  onSelectLetter: (letter: string) => void;
  onBack: () => void;
  activityType: ActivityType | null;
  activityStats: Record<string, ActivityStats>;
  theme: string;
}

const LetterSelectionScreen: React.FC<LetterSelectionScreenProps> = ({ onSelectLetter, onBack, activityType }) => {

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
    <div className="flex flex-col items-center justify-start h-full max-w-2xl landscape:max-w-6xl mx-auto p-2 sm:p-4 landscape:p-3 animate-fade-in overflow-y-auto">
       <div className="w-full flex justify-between items-center mb-3 landscape:mb-2">
          <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
              <ArrowLeftIcon className="w-7 h-7 landscape:w-6 landscape:h-6 text-sky-700" />
          </button>
          <h1 className="text-xl sm:text-2xl landscape:text-lg font-black text-sky-800 text-center px-4">
            {getActivityTitle()}
          </h1>
          <div className="w-11 landscape:w-10"></div>
      </div>
      
      <p className="text-center text-slate-600 mb-4 landscape:mb-2 text-base landscape:text-sm">
        Alıştırma yapmak için bir harf seç.
      </p>

      <div className="w-full space-y-4 landscape:space-y-0 landscape:grid landscape:grid-cols-5 landscape:gap-3">
        {LETTER_GROUPS.map((group) => (
          <div key={group.name}>
            <h2 className="text-lg landscape:text-base font-bold text-sky-800 mb-2 landscape:mb-1 pl-1">{group.name}</h2>
            <div className="flex flex-nowrap gap-2 landscape:flex-col landscape:gap-1.5 overflow-x-auto landscape:overflow-visible pb-2 landscape:pb-0 touch-auto">
              {group.letters.map((letter) => {
                return (
                  <button
                    key={letter}
                    onClick={() => onSelectLetter(letter)}
                    className="relative flex-shrink-0 w-14 h-18 sm:w-16 sm:h-20 landscape:w-full landscape:h-14 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl landscape:rounded-lg shadow-lg flex items-center justify-center font-black text-2xl sm:text-3xl landscape:text-2xl text-sky-800 hover:bg-sky-100/80 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-400 overflow-hidden"
                    aria-label={`'${letter}' harfi alıştırması`}
                  >
                    {letter}
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