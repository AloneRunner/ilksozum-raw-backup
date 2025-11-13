import React from 'react';
import { getCurrentLanguage, t } from '../i18n/index.ts';
import { getAlphabet, getDisplayGroups } from '../data/alphabets.ts';
import { getLetterActivityPack } from '../data/letterActivityPacks.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import CosmicBackdrop from './ui/CosmicBackdrop.tsx';
import PanelStars from './ui/PanelStars.tsx';

interface LetterSelectionScreenProps {
  onSelectLetter: (letter: string) => void;
  onBack: () => void;
  activityType: ActivityType | null;
  activityStats: Record<string, ActivityStats>;
  theme: string;
}

const LetterSelectionScreen: React.FC<LetterSelectionScreenProps> = ({ onSelectLetter, onBack, activityType, theme }) => {
  const isCosmic = theme === 'deneme2';
  const lang = getCurrentLanguage();
  const groups = getDisplayGroups(lang);
  const flatLetters = getAlphabet(lang);
  const pack = getLetterActivityPack(lang);

  const getActivityTitle = () => {
    if (!activityType) return t('letters.selectActivity', 'Select Activity');
    const titles: { [key in ActivityType]?: string } = {
        [ActivityType.FindTheLetter]: t('activities.letter.findTheLetter', 'Find the Letter'),
        [ActivityType.FindTheSoundInImage]: t('activities.letter.findSoundInImage', 'Find Sound in Image'),
        [ActivityType.EmbeddedStory]: t('activities.letter.embeddedStory', 'Story Time'),
        [ActivityType.SoundPresence]: t('activities.letter.soundPresence', 'Is the Sound Present?'),
        [ActivityType.FindTheLetterInGrid]: t('activities.letter.grid', 'Letter Grid'),
    };
    return titles[activityType] || t('letters.selectActivity', 'Select Activity');
  };
  
  return (
    <div className={`relative flex flex-col items-center justify-start h-full max-w-2xl landscape:max-w-6xl mx-auto p-2 sm:p-4 landscape:p-3 animate-fade-in ${isCosmic ? 'overflow-hidden' : 'overflow-y-auto'}`}>
      {isCosmic && (
        <CosmicBackdrop variant="light" showMeteors={false} />
      )}
      
      {/* Cosmic: Wrap everything in one big panel */}
      <div className={`relative w-full h-full flex flex-col ${isCosmic ? 'bg-slate-900/50 border border-sky-400/20 backdrop-blur-lg rounded-3xl shadow-xl p-4 landscape:p-3 overflow-y-auto' : ''}`}>
        {isCosmic && (
          <>
            <PanelStars count={64} className="rounded-3xl" />
            <div className="cosmic-panel-nebula rounded-3xl" />
          </>
        )}
        
        <div className={`relative z-10 w-full flex justify-between items-center mb-3 landscape:mb-2 px-3 py-1.5 ${isCosmic ? 'bg-slate-900/60 border border-sky-400/20' : 'bg-white/50'} backdrop-blur-sm rounded-full`}>
            <button onClick={onBack} className="p-1.5 rounded-full hover:bg-white/50 transition-colors" aria-label="Geri dön">
                <ArrowLeftIcon className={`w-7 h-7 landscape:w-6 landscape:h-6 ${isCosmic ? 'text-sky-300' : 'text-sky-700'}`} />
            </button>
            <h1 className={`${isCosmic ? 'font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-indigo-200 to-fuchsia-300 text-glow-planet' : 'text-sky-800'} text-xl sm:text-2xl landscape:text-lg text-center px-4 ${isCosmic ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : ''}`}>
              {getActivityTitle()}
            </h1>
            <div className="w-10 h-10"></div>
        </div>
        
        <p className={`relative z-10 ${isCosmic ? 'text-sky-200/90 font-semibold drop-shadow-[0_2px_8px_rgba(15,23,42,0.55)]' : 'text-slate-600'} text-center mb-4 landscape:mb-2 text-base landscape:text-sm`}>
          {t('letters.selectLetterPrompt', 'Alıştırma yapmak için bir harf seç.')}
        </p>
        {pack?.notes && (
          <div className={`relative z-10 mb-3 px-4 py-2 rounded-xl text-xs shadow ${isCosmic ? 'bg-slate-800/70 border border-sky-400/30 text-sky-200' : 'bg-amber-50 border border-amber-200 text-amber-800'}`}> 
            {t('activities.letter.betaNotice', pack.notes)}
          </div>
        )}

        <div className="relative z-10 w-full space-y-3 landscape:space-y-2">
          {(groups && groups.length > 0 ? groups : [{ name: t('letters.letters', 'Letters'), letters: flatLetters }]).map((group) => (
            <div key={group.name} className={`${isCosmic ? 'bg-slate-900/40 border border-sky-400/20' : 'bg-white/30'} rounded-2xl p-3 landscape:p-2 backdrop-blur-sm`}>
              <h2 className={`text-base landscape:text-sm font-bold mb-2 landscape:mb-1.5 ${isCosmic ? 'bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-200 text-glow-planet drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-sky-800'}`}>
                {group.name}
              </h2>
              <div className="grid grid-cols-6 sm:grid-cols-8 landscape:grid-cols-10 gap-2 landscape:gap-1.5">
                {group.letters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => onSelectLetter(letter)}
                    className={`aspect-square ${isCosmic ? 'bg-slate-900/70 border border-sky-400/30 text-sky-100 hover:bg-slate-800/80 hover:border-sky-300/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]' : 'bg-white/70 border border-white/50 text-sky-800 hover:bg-sky-100/80'} backdrop-blur-sm rounded-xl landscape:rounded-lg shadow-lg flex items-center justify-center font-black text-xl sm:text-2xl landscape:text-lg transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 ${isCosmic ? 'focus:ring-sky-400/60' : 'focus:ring-amber-400'}`}
                    aria-label={`${letter}`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(LetterSelectionScreen);