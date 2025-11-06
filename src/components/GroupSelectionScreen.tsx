import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import MenuButton from './ui/MenuButton.tsx';
import SyllableIcon from './icons/SyllableIcon.tsx';
import { ActivityStats, ActivityType } from '../types.ts';
import ProgressIndicator from './ui/ProgressIndicator.tsx';

interface GroupSelectionScreenProps {
  onSelectGroup: (groupNumber: number) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
}

const GroupSelectionScreen: React.FC<GroupSelectionScreenProps> = ({ onSelectGroup, onBack, activityStats, theme }) => {
  const groups = [
    { number: 1, letters: "A, N, E, T, İ, L" },
    { number: 2, letters: "O, K, U, R, I, M" },
    { number: 3, letters: "Ü, S, Ö, Y, D, Z" },
    { number: 4, letters: "Ç, B, G, C, Ş" },
    { number: 5, letters: "P, H, V, Ğ, F, J" },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg landscape:max-w-4xl mx-auto p-4 landscape:p-3 animate-fade-in">
      <div className="w-full flex justify-between items-center mb-3 landscape:mb-2 flex-shrink-0">
         <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
            <ArrowLeftIcon className="w-7 h-7 landscape:w-6 landscape:h-6 text-sky-700" />
          </button>
          <h1 className="text-xl sm:text-2xl landscape:text-lg font-black text-sky-800">Heceleme</h1>
          <div className="w-11 landscape:w-10"></div>
      </div>
      
      <p className="text-center text-slate-600 mb-5 landscape:mb-3 text-base landscape:text-sm flex-shrink-0">
        Öğrendiğin harfleri içeren grubu seç ve kelimeleri hecelemeye başla!
      </p>

      <div className="w-full flex-grow overflow-y-auto pr-2">
        <div className="grid grid-cols-1 landscape:grid-cols-2 sm-landscape:grid-cols-3 gap-4">
          {groups.map((group) => {
            const stats = activityStats[`${ActivityType.Syllabification}-${group.number}`] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
            return (
              <MenuButton
                key={group.number}
                icon={SyllableIcon}
                title={`${group.number}. Grup`}
                subtitle={group.letters}
                onClick={() => onSelectGroup(group.number)}
                color="sky"
                theme={theme}
              >
                <ProgressIndicator 
                    mode="individual"
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

export default React.memo(GroupSelectionScreen);