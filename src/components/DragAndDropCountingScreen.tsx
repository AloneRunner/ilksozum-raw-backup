import React, { useState, useEffect } from 'react';
import { DragAndDropCountingRound } from '../types.ts';
import Card from './ui/Card.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import BasketIcon from './icons/BasketIcon.tsx';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface DragAndDropCountingScreenProps {
    roundData: DragAndDropCountingRound;
    onAdvance: (isCorrect: boolean) => void;
    onBack: () => void;
    currentCard: number;
    totalCards: number;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
}

const DragAndDropCountingScreen: React.FC<DragAndDropCountingScreenProps> = ({
    roundData, onAdvance, onBack, currentCard, totalCards, isAutoSpeakEnabled, isWordLabelVisible, onToggleWordLabel
}) => {
    const [count, setCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    useAutoSpeak(roundData.question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setCount(0);
        setIsCorrect(false);
        setIsWrong(false);
    }, [roundData]);

    const handleAddItem = async () => {
        if (isCorrect) return;

        const newCount = count + 1;
        setCount(newCount);
        speak(String(newCount));
        
        if (newCount === roundData.targetCount) {
            setIsCorrect(true);
            await playEffect('correct');
            setTimeout(() => onAdvance(true), 1200);
        } else if (newCount > roundData.targetCount) {
             setIsWrong(true);
             await playEffect('incorrect');
             setTimeout(() => {
                setCount(0);
                setIsWrong(false);
             }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center h-full w-full max-w-4xl mx-auto p-4 animate-fade-in overflow-y-auto">
             <div className="w-full flex justify-between items-center mb-4 p-2 bg-white/50 backdrop-blur-sm rounded-full">
                <button onClick={onBack} className="p-2 rounded-full hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-lime-700" />
                </button>
                <div className="text-lg font-bold text-lime-800">{currentCard} / {totalCards}</div>
                <button onClick={onToggleWordLabel} className="p-2 rounded-full hover:bg-white/80 transition-colors" aria-label={isWordLabelVisible ? 'Kelimeyi gizle' : 'Kelimeleri göster'}>
                    {isWordLabelVisible ? <EyeSlashIcon className="w-8 h-8 text-lime-700" /> : <EyeIcon className="w-8 h-8 text-lime-700" />}
                </button>
            </div>

            <div className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-center text-lime-800 flex items-center justify-center gap-4">
                    {roundData.question}
                    <button onClick={() => speak(roundData.question)} className="p-2 bg-lime-100 rounded-full hover:bg-lime-200 transition-colors" aria-label="Soruyu seslendir">
                        <SpeakerIcon className="w-7 h-7 text-lime-600" />
                    </button>
                </h1>
            </div>


            <div className="flex-grow w-full flex flex-col landscape:flex-row items-center justify-around gap-8">
                {/* Item to Drag */}
                <div className="text-center landscape:flex-1">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg mb-2">
                        <p className="font-semibold text-lime-700">Sepete eklemek için dokun</p>
                    </div>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 landscape:w-48 landscape:h-48">
                       <Card imageUrl={roundData.itemToDrag.imageUrl} word={roundData.itemToDrag.word} isRevealed={isWordLabelVisible} onClick={handleAddItem} className="aspect-square"/>
                    </div>
                </div>

                {/* Target Basket */}
                <div className="text-center landscape:flex-1 flex items-center justify-center">
                    <div className={`relative w-48 h-48 sm:w-64 sm:h-64 landscape:w-[min(44vw,60vh)] landscape:h-[min(44vw,60vh)] flex items-center justify-center p-4 rounded-3xl bg-amber-200/50 border-4 border-dashed border-amber-400 ${isWrong ? 'animate-shake' : ''}`}>
                       <BasketIcon className="w-24 h-24 text-amber-600 opacity-50"/>
                       <div className="absolute inset-0 flex flex-wrap items-start justify-center p-4 gap-2 overflow-hidden">
                           {[...Array(count)].map((_, i) => (
                               <img key={i} src={roundData.itemToDrag.imageUrl} alt="" className="w-10 h-10 animate-pop-in"/>
                           ))}
                       </div>
                       <div className="absolute bottom-2 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-lime-800 shadow-lg">
                           {count}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(DragAndDropCountingScreen);