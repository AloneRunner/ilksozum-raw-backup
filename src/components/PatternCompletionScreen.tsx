
import React, { useState, useEffect, useRef } from 'react';
import { PatternRound } from '../types.ts';
import Card from './ui/Card.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface PatternCompletionScreenProps {
    roundData: PatternRound;
    onAdvance: (isCorrect: boolean) => void;
    currentCard: number;
    totalCards: number;
    onBack: () => void;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
}

const PatternCompletionScreen: React.FC<PatternCompletionScreenProps> = ({
    roundData, onAdvance, currentCard, totalCards, onBack, isAutoSpeakEnabled, isWordLabelVisible, onToggleWordLabel
}) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isWrong, setIsWrong] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const question = roundData.question;
    useAutoSpeak(question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setSelectedId(null);
        setIsWrong(null);
        setIsCorrect(false);
        setMistakeMade(false);
    }, [roundData]);
    
     useEffect(() => {
        if(cardRef.current) {
            cardRef.current.focus();
        }
    }, [roundData.id]);

    const handleOptionClick = async (optionId: number) => {
        if (isCorrect) return;
        setSelectedId(optionId);
        
        const selectedOption = roundData.options.find(o => o.id === optionId);
        if (selectedOption) {
            speak(selectedOption.word);
        }

        if (optionId === roundData.answer.id) {
            setIsCorrect(true);
            await playEffect('correct');
            setTimeout(() => onAdvance(!mistakeMade), 1200);
        } else {
            setMistakeMade(true);
            setIsWrong(optionId);
            await playEffect('incorrect');
            setTimeout(() => {
                setIsWrong(null);
                setSelectedId(null);
            }, 800);
        }
    };
    
    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();
        speak(question);
    };

    return (
        <div 
         ref={cardRef}
         tabIndex={-1}
         className="flex flex-col items-center justify-start h-full w-full max-w-4xl mx-auto p-4 animate-fade-in outline-none overflow-y-auto" 
         aria-live="polite">
            
            {/* Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-indigo-700" />
                </button>
                 <div className="flex-grow flex items-center justify-center gap-4">
                    <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-800">
                        {question}
                    </h1>
                     <button onClick={handleSpeak} className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label="Soruyu seslendir">
                        <SpeakerIcon className="w-7 h-7 text-indigo-600" />
                    </button>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-indigo-800">{currentCard}/{totalCards}</span>
                    <button onClick={onToggleWordLabel} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={isWordLabelVisible ? 'Etiketleri gizle' : 'Etiketleri göster'}>
                        {isWordLabelVisible ? <EyeSlashIcon className="w-7 h-7 text-indigo-600" /> : <EyeIcon className="w-7 h-7 text-indigo-600" />}
                    </button>
                </div>
            </div>

            <div className="w-full flex-grow flex flex-col landscape:flex-row items-center justify-center gap-6 landscape:gap-8">
                {/* Pattern Display */}
                <div className="w-full bg-white/60 p-4 rounded-2xl shadow-inner min-h-[120px] flex items-center justify-center landscape:flex-[1.5] landscape:max-h-[70vh]">
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap landscape:flex-nowrap">
                        {roundData.pattern.map((item, index) => (
                            <div key={index} className="w-20 h-20 sm:w-24 sm:h-24">
                                <Card imageUrl={item.imageUrl} word={item.word} onClick={() => speak(item.word)} isRevealed={isWordLabelVisible}/>
                            </div>
                        ))}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-slate-200 rounded-2xl border-2 border-dashed border-slate-400">
                            {isCorrect ? (
                                <div className="w-full h-full">
                                    <Card imageUrl={roundData.answer.imageUrl} word={roundData.answer.word} isRevealed={isWordLabelVisible} onClick={() => {}} />
                                </div>
                            ) : (
                                <span className="text-4xl text-slate-500">?</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Options */}
                <div className="w-full landscape:w-80 sm-landscape:w-72 landscape:flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                        {roundData.options.map((option) => (
                            <div
                                key={option.id}
                                className={`transition-transform duration-300 ${isWrong === option.id ? 'animate-shake' : ''}`}
                            >
                                <Card
                                    imageUrl={option.imageUrl}
                                    word={option.word}
                                    isSelected={selectedId === option.id && !isWrong}
                                    isCorrect={isCorrect && selectedId === option.id}
                                    onClick={() => handleOptionClick(option.id)}
                                    isDisabled={isCorrect}
                                    isRevealed={isWordLabelVisible}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatternCompletionScreen;