import React, { useState, useEffect, useRef } from 'react';
import { NumberSequencingRound } from '../types.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface NumberSequencingScreenProps {
    roundData: NumberSequencingRound;
    onAdvance: (isCorrect: boolean) => void;
    currentCard: number;
    totalCards: number;
    onBack: () => void;
    isAutoSpeakEnabled: boolean;
}

const NumberSequencingScreen: React.FC<NumberSequencingScreenProps> = ({
    roundData, onAdvance, currentCard, totalCards, onBack, isAutoSpeakEnabled
}) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const [filledSequence, setFilledSequence] = useState<(number | null)[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);

    useAutoSpeak(roundData.question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setFilledSequence(roundData.numbers); // Initialize with the puzzle sequence
        setSelectedOption(null);
        setIsCorrect(false);
        setIsWrong(false);
        setMistakeMade(false);
    }, [roundData]);
    
     useEffect(() => {
        if(cardRef.current) {
            cardRef.current.focus();
        }
    }, [roundData.id]);

    const handleOptionClick = async (option: number) => {
        if (isCorrect || selectedOption !== null) return;

        setSelectedOption(option);
        speak(String(option));
        
        if(option === roundData.answer){
            setIsCorrect(true);
            setFilledSequence(roundData.numbers.map(n => n === null ? option : n));
            await playEffect('correct');
            setTimeout(() => onAdvance(!mistakeMade), 1200);
        } else {
            setMistakeMade(true);
            setIsWrong(true);
            await playEffect('incorrect');
            setTimeout(() => {
                setIsWrong(false);
                setSelectedOption(null);
            }, 800);
        }
    };
    
    return (
    <div 
         ref={cardRef}
         tabIndex={-1}
     className="flex flex-col items-center justify-start h-full w-full max-w-lg landscape:max-w-5xl mx-auto p-4 animate-fade-in outline-none" 
         aria-live="polite">
            <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-green-700" />
                </button>
                <div className="text-lg font-bold text-green-800">
                    {currentCard} / {totalCards}
                </div>
                <div className="w-12 h-12"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-8 flex items-center gap-4">
                {roundData.question}
                 <button onClick={() => speak(roundData.question)} className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors" aria-label="Soruyu seslendir">
                    <SpeakerIcon className="w-7 h-7 text-green-600" />
                </button>
            </h1>

            <div className="w-full flex-grow flex flex-col landscape:flex-row gap-6">
              <div className={`flex-1 flex items-center justify-center gap-2 sm:gap-4 mb-6 landscape:mb-0 p-4 bg-white/60 rounded-2xl shadow-inner ${isWrong && selectedOption !== null ? 'animate-shake' : ''}`}>
                {filledSequence.map((num, index) => (
                    <div
                        key={index}
                        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-4xl font-bold rounded-xl transition-colors duration-300
                        ${num !== null ? 'bg-white text-green-800 shadow-md' : 
                         isCorrect ? 'bg-green-400 text-white shadow-md' :
                        'bg-slate-200 border-2 border-dashed border-slate-400'}`}
                    >
                        {num}
                    </div>
                ))}
              </div>

              <div className="w-full landscape:w-72 sm-landscape:w-64 landscape:flex-shrink-0 grid grid-cols-3 landscape:grid-cols-1 gap-4">
                  {roundData.options.map((option) => (
                      <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          disabled={isCorrect || selectedOption !== null}
                          className={`
                              py-4 text-3xl sm:text-4xl font-bold rounded-2xl shadow-lg transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-amber-400
                              ${ selectedOption === option && isCorrect ? `bg-green-500 text-white scale-110` :
                                selectedOption === option && isWrong ? `bg-red-500 text-white` :
                                selectedOption !== null ? `bg-slate-200 text-slate-500` :
                                `bg-white hover:bg-green-50 text-green-800`
                              }
                          `}
                      >
                          {option}
                      </button>
                  ))}
              </div>
            </div>
        </div>
    );
};


export default NumberSequencingScreen;