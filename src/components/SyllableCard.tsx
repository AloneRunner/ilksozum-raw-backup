import React, { useState, useEffect, useRef } from 'react';
import { Word } from '../types.ts';
import Card from './ui/Card.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import BanIcon from './icons/BanIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface SyllableCardProps {
    word: Word;
    onAdvance: (isCorrect: boolean) => void;
    currentCard: number;
    totalCards: number;
    onBack: () => void;
    isAutoSpeakEnabled: boolean;
    onBanImage: (id: number) => void;
    isBanButtonEnabled: boolean;
    isFastTransitionEnabled: boolean;
}

const SyllableCard: React.FC<SyllableCardProps> = ({
    word, onAdvance, currentCard, totalCards, onBack, isAutoSpeakEnabled, onBanImage, isBanButtonEnabled, isFastTransitionEnabled
}) => {
    const [selectedSyllables, setSelectedSyllables] = useState<string[]>([]);
    const [options, setOptions] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useAutoSpeak(word.word, isAutoSpeakEnabled, word.id, 250);

    useEffect(() => {
        setSelectedSyllables([]);
        setIsCorrect(false);
        setIsWrong(false);
        setMistakeMade(false);
        
        if (word.syllables) {
            const allOptions = [...word.syllables, ...(word.distractorSyllables || [])];
            setOptions([...allOptions].sort(() => Math.random() - 0.5));
        }
    }, [word]);
    
     useEffect(() => {
        if(cardRef.current) {
            cardRef.current.focus();
        }
    }, [word.id]);

    const handleSyllableClick = (syllable: string) => {
        if (isCorrect) return;

        const newSelectedSyllables = [...selectedSyllables, syllable];
        setSelectedSyllables(newSelectedSyllables);
        speak(syllable);

        const expectedSyllable = word.syllables?.[newSelectedSyllables.length - 1];

        if (syllable === expectedSyllable) {
            if (newSelectedSyllables.length === word.syllables?.length) {
                setIsCorrect(true);
                playEffect('correct');
                setTimeout(() => onAdvance(!mistakeMade), isFastTransitionEnabled ? 200 : 1200);
            }
        } else {
            setMistakeMade(true);
            setIsWrong(true);
            playEffect('incorrect');
            setTimeout(() => {
                setSelectedSyllables([]);
                setIsWrong(false);
            }, 800);
        }
    };
    
    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();
        speak(word.word);
    };

    const handleBan = (e: React.MouseEvent) => {
        e.stopPropagation();
        onBanImage(word.id);
    }

    const currentWordDisplay = selectedSyllables.join(' - ');

    return (
        <div 
         ref={cardRef}
         tabIndex={-1}
         className="flex flex-col items-center justify-start h-full w-full max-w-4xl mx-auto p-2 sm:p-4 landscape:p-2 animate-fade-in outline-none" 
         aria-live="polite">
            
            {/* Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-sky-700" />
                </button>
                 <h1 className="text-xl sm:text-2xl font-bold text-center text-sky-800">
                    Kelimeyi Heceleyelim
                </h1>
                <div className="text-lg font-bold text-sky-800">
                    {currentCard} / {totalCards}
                </div>
            </div>

            <div className="flex-grow w-full flex flex-col landscape:flex-row landscape:items-center landscape:justify-center landscape:gap-4">

                {/* Left Side (Image & Syllable Display) */}
                <div className="w-full flex flex-col items-center landscape:w-2/5">
                    <Card
                        imageUrl={word.imageUrl}
                        word={word.word}
                        isRevealed={isCorrect}
                        isCorrect={isCorrect}
                        onClick={() => {}}
                        className="w-full h-auto aspect-square max-h-[50vh] landscape:max-h-[calc(100vh-10rem)]"
                        isLetterActivity={true}
                    >
                        <div className="absolute top-2 right-2 flex space-x-2">
                             {isBanButtonEnabled && (
                                <button 
                                    onClick={handleBan}
                                    className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors" 
                                    aria-label="Bu görseli bir daha gösterme">
                                    <BanIcon className="w-6 h-6 text-red-600" />
                                </button>
                            )}
                            <button onClick={handleSpeak} className="p-2 bg-sky-100 rounded-full hover:bg-sky-200 transition-colors" aria-label="Kelimeyi seslendir">
                                <SpeakerIcon className="w-6 h-6 text-sky-600" />
                            </button>
                        </div>
                    </Card>
                    
                    <div className={`w-full h-16 mt-4 flex items-center justify-center bg-white/60 rounded-xl shadow-inner ${isWrong ? 'animate-shake' : ''}`}>
                        <p className={`text-3xl sm:text-4xl font-bold tracking-widest ${isCorrect ? 'text-green-600' : 'text-sky-800'}`}>
                            {currentWordDisplay || "..."}
                        </p>
                    </div>
                </div>
            
                {/* Right Side (Syllable Choices) */}
                <div className="w-full mt-6 landscape:w-3/5 landscape:mt-0">
                     <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {options.map((syllable, index) => {
                            const isSelected = selectedSyllables.includes(syllable);
                            
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSyllableClick(syllable)}
                                    disabled={isSelected || isCorrect}
                                    className={`
                                        py-4 sm:py-5 px-2 text-2xl sm:text-3xl font-bold rounded-lg shadow-md
                                        transition-all duration-200 ease-in-out
                                        focus:outline-none focus:ring-4 focus:ring-amber-400
                                        ${
                                            isSelected && isCorrect
                                                ? 'bg-green-400 text-white'
                                                : isSelected
                                                ? 'bg-sky-300 text-white opacity-70'
                                                : 'bg-white hover:bg-sky-50 text-sky-800'
                                        }
                                    `}
                                    aria-label={`Hece ${syllable}`}
                                >
                                    {syllable}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyllableCard;