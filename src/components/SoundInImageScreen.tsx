import React, { useState, useEffect, useRef } from 'react';
import { Word } from '../types.ts';
import Card from './ui/Card.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import BanIcon from './icons/BanIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface SoundInImageScreenProps {
    roundData: Word;
    letter: string;
    onAdvance: (isCorrect: boolean) => void;
    currentCard: number;
    totalCards: number;
    onBack: () => void;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
    onBanImage: (id: number) => void;
    isBanButtonEnabled: boolean;
    isFastTransitionEnabled: boolean;
}

const SoundInImageScreen: React.FC<SoundInImageScreenProps> = ({
    roundData, letter, onAdvance, currentCard, totalCards, onBack, 
    isAutoSpeakEnabled, isWordLabelVisible, onToggleWordLabel, onBanImage, isBanButtonEnabled, isFastTransitionEnabled
}) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isWrong, setIsWrong] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const upperCaseLetter = letter.toLocaleUpperCase('tr-TR');
    const question = `İçinde "${upperCaseLetter}" sesi olan hangisi?`;

    useAutoSpeak(question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        // Reset state for new round
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

    const handleCardClick = async (option: Word) => {
        if (isCorrect) return;
        setSelectedId(option.id);

        const isOptionCorrect = option.id === roundData.id;

        if (isOptionCorrect) {
            setIsCorrect(true);
            if (isFastTransitionEnabled) {
                await playEffect('correct');
            } else {
                await speak(`Evet, bu ${option.word}.`);
            }
            setTimeout(() => onAdvance(!mistakeMade), isFastTransitionEnabled ? 400 : 1200);
        } else {
            setMistakeMade(true);
            setIsWrong(option.id);
            if (isFastTransitionEnabled) {
                await playEffect('incorrect');
            } else {
                await speak(`Hayır, bu ${option.word}.`);
            }
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
    
    const handleBan = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        onBanImage(id);
    }

    return (
        <div 
         ref={cardRef}
         tabIndex={-1}
         className="flex flex-col items-center justify-start h-full w-full max-w-4xl mx-auto p-4 animate-fade-in outline-none" 
         aria-live="polite">
            
            {/* Header */}
            <div className="w-full flex justify-between items-center mb-4">
                 <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-sky-700" />
                </button>
                <div className="text-lg font-bold text-sky-800">
                    {currentCard} / {totalCards}
                </div>
                 <button onClick={onToggleWordLabel} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={isWordLabelVisible ? 'Kelimeleri gizle' : 'Kelimeleri göster'}>
                    {isWordLabelVisible ? <EyeSlashIcon className="w-8 h-8 text-sky-700" /> : <EyeIcon className="w-8 h-8 text-sky-700" />}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow w-full flex flex-col landscape:flex-row items-center justify-center gap-6">
                 <h1 className="text-2xl sm:text-3xl landscape:text-xl font-bold text-center text-sky-800 mb-4 flex items-center gap-4">
                    {question}
                    <button onClick={handleSpeak} className="p-2 bg-sky-100 rounded-full hover:bg-sky-200 transition-colors" aria-label="Soruyu seslendir">
                        <SpeakerIcon className="w-7 h-7 text-sky-600" />
                    </button>
                </h1>
                
                <div className="w-full landscape:flex-1 grid grid-cols-2 landscape:grid-cols-3 gap-4">
                    {roundData.options?.map((option) => (
                        <Card
                            key={option.id}
                            imageUrl={option.imageUrl}
                            word={option.word}
                            isRevealed={isCorrect || isWordLabelVisible}
                            isSelected={selectedId === option.id && !isWrong}
                            isCorrect={isCorrect && selectedId === option.id}
                            onClick={() => handleCardClick(option)}
                            className={`aspect-square ${isWrong === option.id ? 'animate-shake' : ''}`}
                            isLetterActivity={true}
                        >
                             {isBanButtonEnabled && (
                                <button 
                                    onClick={(e) => handleBan(e, option.id)}
                                    className="absolute top-2 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors" 
                                    aria-label="Bu görseli bir daha gösterme">
                                    <BanIcon className="w-6 h-6 text-red-600" />
                                </button>
                            )}
                        </Card>
                    ))}
                </div>
                <div className="hidden landscape:flex landscape:w-64 sm-landscape:w-56 landscape:flex-shrink-0 flex-col items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/60 shadow-inner text-sky-800 font-semibold">
                        İpucu: Sesi dinle ve ilk harfe dikkat et.
                    </div>
                    <button onClick={handleSpeak} className="w-full py-3 rounded-lg bg-sky-500 text-white font-bold shadow hover:bg-sky-600">
                        Soruyu Tekrar Dinle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SoundInImageScreen;