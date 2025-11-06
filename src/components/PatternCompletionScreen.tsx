
import React, { useState, useEffect, useRef } from 'react';
import { PatternRound } from '../types.ts';
import Card from './ui/Card.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';
import { getCurrentLanguage } from '../i18n/index.ts';
import { translateQuestion } from '../utils/translate.ts';

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
    const currentLang = getCurrentLanguage();
    const question = translateQuestion(roundData.question, currentLang);
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
        // Etiket okumayı kaldır - sadece efekt sesi
        
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
         className="flex flex-col items-center justify-start h-full w-full max-w-4xl mx-auto p-4 landscape:p-2 animate-fade-in outline-none overflow-y-auto" 
         aria-live="polite">
            
            {/* Compact Header for Landscape */}
            <div className="w-full flex justify-between items-center mb-4 landscape:mb-2 p-2 landscape:p-1 bg-white/50 backdrop-blur-sm rounded-full">
                <button onClick={onBack} className="p-2 landscape:p-1 rounded-full hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 landscape:w-6 landscape:h-6 text-indigo-700" />
                </button>
                <div className="flex items-center gap-2 landscape:gap-3">
                    <h1 className="text-lg landscape:text-sm font-bold text-indigo-800 hidden landscape:block">{question}</h1>
                    <button onClick={handleSpeak} className="p-2 landscape:p-1 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label="Soruyu seslendir">
                        <SpeakerIcon className="w-7 h-7 landscape:w-5 landscape:h-5 text-indigo-600" />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-lg landscape:text-sm font-bold text-indigo-800">{currentCard} / {totalCards}</div>
                    <button onClick={onToggleWordLabel} className="p-2 landscape:p-1 rounded-full hover:bg-white/80 transition-colors" aria-label={isWordLabelVisible ? "Etiketleri gizle" : "Etiketleri göster"}>
                        {isWordLabelVisible ? <EyeSlashIcon className="w-8 h-8 landscape:w-6 landscape:h-6 text-indigo-700" /> : <EyeIcon className="w-8 h-8 landscape:w-6 landscape:h-6 text-indigo-700" />}
                    </button>
                </div>
            </div>

            {/* Question - Only Portrait */}
            <div className="w-full landscape:hidden bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-800 flex items-center justify-center gap-4">
                    {question}
                    <button onClick={handleSpeak} className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label="Soruyu seslendir">
                        <SpeakerIcon className="w-7 h-7 text-indigo-600" />
                    </button>
                </h1>
            </div>

            <div className="w-full flex-grow flex flex-col landscape:flex-row items-center landscape:items-start justify-center gap-4 landscape:gap-4 landscape:max-h-[85vh]">
                {/* Pattern Display - Kartlar küçültüldü */}
                <div className="w-full bg-white/60 p-4 landscape:p-3 rounded-2xl shadow-inner min-h-[120px] flex items-center justify-center landscape:flex-1 landscape:max-w-[65%]">
                    <div className="flex items-center gap-2 sm:gap-3 landscape:gap-2 flex-wrap landscape:flex-nowrap justify-center">
                        {roundData.pattern.map((item, index) => (
                            <div key={index} className="w-14 h-14 sm:w-16 sm:h-16 landscape:w-16 landscape:h-16">
                                <Card imageUrl={item.imageUrl} word={item.word} onClick={() => {}} isRevealed={isWordLabelVisible}/>
                            </div>
                        ))}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 landscape:w-16 landscape:h-16 flex items-center justify-center bg-slate-200 rounded-2xl border-2 border-dashed border-slate-400">
                            {isCorrect ? (
                                <div className="w-full h-full">
                                    <Card imageUrl={roundData.answer.imageUrl} word={roundData.answer.word} isRevealed={isWordLabelVisible} onClick={() => {}} />
                                </div>
                            ) : (
                                <span className="text-2xl landscape:text-xl text-slate-500">?</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Options - Seçenekler büyütüldü */}
                <div className="w-full landscape:w-auto landscape:flex-shrink-0 landscape:max-w-[32%]">
                    <div className="grid grid-cols-2 gap-3 landscape:gap-3 max-h-[60vh] landscape:max-h-[85vh] overflow-y-auto">
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
