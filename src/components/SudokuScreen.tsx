import React, { useState, useEffect, useRef } from 'react';
import { SudokuRound, SudokuItem } from '../types.ts';
import Card from './ui/Card.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface SudokuScreenProps {
    roundData: SudokuRound;
    onAdvance: (isCorrect: boolean) => void;
    onBack: () => void;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
}

const SudokuScreen: React.FC<SudokuScreenProps> = ({ roundData, onAdvance, onBack, isAutoSpeakEnabled, isWordLabelVisible, onToggleWordLabel }) => {
    const [board, setBoard] = useState<(SudokuItem | null)[]>([]);
    const [selectedItem, setSelectedItem] = useState<SudokuItem | null>(null);
    const [wrongDropIndex, setWrongDropIndex] = useState<number | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    const question = roundData.questionText;
    useAutoSpeak(question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setBoard([...roundData.puzzleGrid]);
        setSelectedItem(null);
        setIsComplete(false);
        setMistakeMade(false);
    }, [roundData]);
    
    useEffect(() => {
        if (isComplete) return;
        // Check for completion only if the board is not empty
        if (board.length > 0 && board.every(cell => cell !== null)) {
            setIsComplete(true);
            playEffect('finish');
            setTimeout(() => onAdvance(!mistakeMade), 1200);
        }
    }, [board, onAdvance, isComplete, mistakeMade]);
    
     useEffect(() => {
        if(cardRef.current) {
            cardRef.current.focus();
        }
    }, [roundData.id]);

    const handleItemPoolClick = (item: SudokuItem) => {
        speak(item.word);
        setSelectedItem(item);
    };

    const handleBoardCellClick = async (index: number) => {
        if (board[index] !== null || !selectedItem) return;

        if (roundData.solutionGrid[index].id === selectedItem.id) {
            const newBoard = [...board];
            newBoard[index] = selectedItem;
            setBoard(newBoard);
            setSelectedItem(null);
            await playEffect('correct');
        } else {
            setMistakeMade(true);
            setWrongDropIndex(index);
            await playEffect('incorrect');
            setTimeout(() => setWrongDropIndex(null), 500);
        }
    };
    
    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();
        speak(question);
    };

    const renderHeader = () => (
         <div className="w-full flex justify-between items-center mb-4 sm-landscape:mb-2">
            <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                <ArrowLeftIcon className="w-8 h-8 text-indigo-700" />
            </button>
            <div className="w-12"></div>
        </div>
    );
    
    const renderControls = () => (
        <div className="flex flex-col items-center justify-center gap-4 sm-landscape:gap-1 bg-white/60 p-4 sm-landscape:p-2 rounded-2xl shadow-inner">
             <h1 className="text-base sm:text-xl sm-landscape:text-sm font-bold text-center text-indigo-800">
                {question}
            </h1>
             <div className="flex items-center gap-4 sm-landscape:gap-2">
                 <button onClick={handleSpeak} className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label="Soruyu seslendir">
                    <SpeakerIcon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
                </button>
                 <button onClick={onToggleWordLabel} className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label="Etiketleri gizle/göster">
                    {isWordLabelVisible ? <EyeSlashIcon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600"/> : <EyeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600"/>}
                </button>
            </div>
            <div className="flex landscape:flex-col items-center justify-center gap-4 sm-landscape:gap-2">
                {roundData.itemPool.map((item) => (
                    <div key={item.id} className="w-16 h-16 sm:w-20 sm:h-20 landscape:w-16 landscape:h-16 sm-landscape:w-14 sm-landscape:h-14">
                        <Card 
                            imageUrl={item.imageUrl} 
                            word={item.word}
                            onClick={() => handleItemPoolClick(item)}
                            isSelected={selectedItem?.id === item.id}
                            isRevealed={isWordLabelVisible}
                            className="aspect-square"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div 
         ref={cardRef}
         tabIndex={-1}
         className="flex flex-col items-center justify-start h-full w-full max-w-4xl mx-auto p-2 sm:p-4 animate-fade-in outline-none overflow-y-auto" 
         aria-live="polite">

            <div className="hidden landscape:block w-full">
                {renderHeader()}
            </div>
            
            <div className="flex flex-col landscape:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
                {/* Sudoku Board */}
                <div className="w-full max-w-sm aspect-square landscape:max-w-[70vh] landscape:max-h-[70vh] landscape:flex-grow bg-white/60 p-2 sm:p-3 rounded-2xl shadow-inner">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 h-full">
                        {board.map((cell, index) => (
                             <div 
                                key={index}
                                onClick={() => handleBoardCellClick(index)}
                                className={`
                                    aspect-square flex items-center justify-center rounded-lg sm:rounded-xl shadow-sm transition-colors duration-200
                                    ${cell ? 'bg-white' : 'bg-slate-200 border-2 border-dashed border-slate-400 cursor-pointer'}
                                    ${wrongDropIndex === index ? 'bg-red-300' : ''}
                                `}
                            >
                                {cell && <Card imageUrl={cell.imageUrl} word={cell.word} onClick={() => speak(cell.word)} isRevealed={isWordLabelVisible} className="aspect-square" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls and Item Pool */}
                <div className="w-full landscape:w-64 sm-landscape:w-56 landscape:flex-shrink-0">
                    <div className="landscape:hidden w-full">
                        {renderHeader()}
                    </div>
                    {renderControls()}
                </div>
            </div>
        </div>
    );
};

export default SudokuScreen;