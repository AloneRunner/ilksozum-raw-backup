
import React, { useState, useEffect } from 'react';
import { SequencingStoryRound, SequencingStoryItem } from '../types.ts';
import Card from './ui/Card.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import CheckIcon from './icons/CheckIcon.tsx';
import UndoIcon from './icons/UndoIcon.tsx';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface SequencingStoryScreenProps {
    roundData: SequencingStoryRound;
    onAdvance: (isCorrect: boolean) => void;
    onBack: () => void;
    currentCard: number;
    totalCards: number;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
}

const SequencingStoryScreen: React.FC<SequencingStoryScreenProps> = ({
    roundData, onAdvance, onBack, currentCard, totalCards, isAutoSpeakEnabled, isWordLabelVisible, onToggleWordLabel
}) => {
    const [shuffledItems, setShuffledItems] = useState<SequencingStoryItem[]>([]);
    const [userOrder, setUserOrder] = useState<SequencingStoryItem[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [mistakeMade, setMistakeMade] = useState(false);

    useAutoSpeak(roundData.question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setShuffledItems([...roundData.items].sort(() => Math.random() - 0.5));
        setUserOrder([]);
        setIsCorrect(null);
        setMistakeMade(false);
    }, [roundData]);

    const handleItemClick = (item: SequencingStoryItem) => {
        if (isCorrect !== null || userOrder.length >= roundData.items.length) return;
        setUserOrder(prev => [...prev, item]);
        setShuffledItems(prev => prev.filter(i => i.id !== item.id));
        speak(item.word);
    };

    const handleUndo = () => {
        if (userOrder.length === 0 || isCorrect !== null) return;
        const lastItem = userOrder[userOrder.length - 1];
        setUserOrder(prev => prev.slice(0, -1));
        setShuffledItems(prev => [...prev, lastItem].sort(() => Math.random() - 0.5));
    };

    const checkOrder = async () => {
        if (userOrder.length !== roundData.items.length) return;

        const isOrderCorrect = userOrder.every((item, index) => item.id === roundData.items[index].id);
        setIsCorrect(isOrderCorrect);

        if (isOrderCorrect) {
            await playEffect('correct');
            setTimeout(() => onAdvance(!mistakeMade), 1200);
        } else {
            setMistakeMade(true);
            await playEffect('incorrect');
            setTimeout(() => {
                setShuffledItems([...roundData.items].sort(() => Math.random() - 0.5));
                setUserOrder([]);
                setIsCorrect(null);
            }, 1500);
        }
    };
    
    return (
        <div className="flex flex-col items-center h-full w-full max-w-5xl mx-auto p-4 animate-fade-in overflow-y-auto">
             <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-fuchsia-700" />
                </button>
                <div className="text-lg font-bold text-fuchsia-800">{currentCard} / {totalCards}</div>
                 <button onClick={onToggleWordLabel} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={isWordLabelVisible ? 'Kelimeyi gizle' : 'Kelimeleri göster'}>
                    {isWordLabelVisible ? <EyeSlashIcon className="w-8 h-8 text-fuchsia-700" /> : <EyeIcon className="w-8 h-8 text-fuchsia-700" />}
                </button>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-center text-fuchsia-800 mb-4 flex items-center gap-4">
                {roundData.question}
                <button onClick={() => speak(roundData.question)} className="p-2 bg-fuchsia-100 rounded-full hover:bg-fuchsia-200 transition-colors" aria-label="Soruyu seslendir">
                    <SpeakerIcon className="w-7 h-7 text-fuchsia-600" />
                </button>
            </h1>
            
            <div className="w-full flex-grow flex flex-col landscape:flex-row items-center justify-center gap-6 landscape:gap-8">
                {/* User Sequence Area */}
                <div className="w-full flex items-center justify-center gap-2 sm:gap-4 p-4 rounded-2xl bg-white/60 shadow-inner min-h-[140px] landscape:flex-col landscape:min-h-0 landscape:h-full">
                    {roundData.items.map((_, index) => (
                        <div key={index} className={`w-24 h-32 sm:w-28 sm:h-36 landscape:w-20 landscape:h-28 flex items-center justify-center rounded-xl bg-slate-200 border-2 border-dashed border-slate-400
                            ${isCorrect === false ? 'border-red-500 animate-shake' : ''}
                            ${isCorrect === true ? 'border-green-500' : ''}
                        `}>
                            {userOrder[index] && (
                                <Card imageUrl={userOrder[index].imageUrl} word={userOrder[index].word} isRevealed={isWordLabelVisible} onClick={() => {}} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Choices & Actions */}
                <div className="flex flex-col items-center justify-center gap-6 landscape:h-full landscape:justify-between">
                    <div className="w-full flex items-center justify-center gap-2 sm:gap-4 min-h-[150px] flex-wrap max-h-[60vh] overflow-auto">
                        {shuffledItems.map(item => (
                            <div key={item.id} className="w-24 h-32 sm:w-28 sm:h-36 landscape:w-20 landscape:h-28">
                            <Card imageUrl={item.imageUrl} word={item.word} isRevealed={isWordLabelVisible} onClick={() => handleItemClick(item)} />
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex gap-4">
                        <button onClick={handleUndo} disabled={userOrder.length === 0 || isCorrect !== null} className="px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg shadow-md hover:bg-yellow-500 disabled:opacity-50 flex items-center gap-2">
                            <UndoIcon className="w-6 h-6"/> Geri Al
                        </button>
                        <button onClick={checkOrder} disabled={userOrder.length !== roundData.items.length || isCorrect !== null} className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 disabled:opacity-50 flex items-center gap-2">
                            <CheckIcon className="w-6 h-6"/> Kontrol Et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SequencingStoryScreen;