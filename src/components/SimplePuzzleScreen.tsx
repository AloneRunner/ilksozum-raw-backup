import React, { useEffect, useMemo, useState } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t } from '../i18n/index.ts';

interface SimplePuzzleScreenProps {
  currentCard: number;
  totalCards: number;
  isAutoSpeakEnabled: boolean;
  onAdvance: (isCorrect: boolean) => Promise<void>;
  onBack: () => void;
}

const GOAL = [0,1,2,3];

const SimplePuzzleScreen: React.FC<SimplePuzzleScreenProps> = ({ currentCard, totalCards, onAdvance, onBack }) => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const shuffled = [0,1,2,3].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
    setSelected(null);
  }, [currentCard]);

  const isSolved = useMemo(() => tiles.every((v,i) => v===GOAL[i]), [tiles]);

  useEffect(() => {
    if (isSolved) setTimeout(() => { void onAdvance(true); }, 350);
  }, [isSolved, onAdvance]);

  // Note: handleClick will be used when puzzle is fully implemented
  // const handleClick = (idx: number) => {
  //   if (selected === null) { setSelected(idx); return; }
  //   if (selected === idx) { setSelected(null); return; }
  //   setTiles(prev => {
  //     const next = [...prev];
  //     const tmp = next[selected!];
  //     next[selected!] = next[idx];
  //     next[idx] = tmp;
  //     return next;
  //   });
  //   setSelected(null);
  // };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <div className="flex items-center justify-between p-3">
        <button onClick={onBack} aria-label={t('app.back', 'Back')} className="p-2 rounded-full hover:bg-white/20">
          <ArrowLeftIcon className="w-8 h-8 text-white" />
        </button>
        <div className="text-white font-bold">{currentCard}/{totalCards}</div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-white/90 text-xl font-semibold mb-6">
          {t('simplePuzzle.comingSoon', 'Bu etkinlik yakında eklenecek.')}
        </div>
        <div className="w-48 h-48 rounded-xl bg-white/10 flex items-center justify-center">
          <span className="text-5xl text-white/30">🧩</span>
        </div>
      </div>
    </div>
  );
};

export default SimplePuzzleScreen;
