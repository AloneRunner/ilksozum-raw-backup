import React, { useState, useEffect, useRef } from 'react';
import { SudokuRound, SudokuItem } from '../types.ts';
import Card from './ui/Card.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';
import { getCurrentLanguage, t } from '../i18n/index.ts';
import { translateQuestion } from '../utils/translate.ts';

interface SudokuScreenProps {
    roundData: SudokuRound;
    onAdvance: (isCorrect: boolean) => void;
    onBack: () => void;
    currentCard: number;
    totalCards: number;
    isAutoSpeakEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
}

const SudokuScreen: React.FC<SudokuScreenProps> = ({ roundData, onAdvance, onBack, currentCard, totalCards, isAutoSpeakEnabled, isWordLabelVisible: _isWordLabelVisible, onToggleWordLabel: _onToggleWordLabel }) => {
    const [board, setBoard] = useState<(SudokuItem | null)[]>([]);
    const [selectedItem, setSelectedItem] = useState<SudokuItem | null>(null);
    const [wrongDropIndex, setWrongDropIndex] = useState<number | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const lang = getCurrentLanguage();
    const question = translateQuestion(roundData.questionText, lang);
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
        // Etiket okumayı kaldır - sadece seçim yap
        setSelectedItem(item);
    };
    
    // Sürükle-bırak event handlers
    const handleDragStart = (e: React.DragEvent, item: SudokuItem) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('item', JSON.stringify(item));
        setSelectedItem(item);
    };
    
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    
    const handleDrop = async (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (board[index] !== null) return;
        
        const itemData = e.dataTransfer.getData('item');
        if (!itemData) return;
        
        const droppedItem = JSON.parse(itemData) as SudokuItem;
        
        if (roundData.solutionGrid[index].id === droppedItem.id) {
            const newBoard = [...board];
            newBoard[index] = droppedItem;
            setBoard(newBoard);
            setSelectedItem(null);
            playEffect('correct').catch(() => {});
        } else {
            setMistakeMade(true);
            setWrongDropIndex(index);
            playEffect('incorrect').catch(() => {});
            setTimeout(() => setWrongDropIndex(null), 500);
        }
    };
    
    // Touch events için mobile destek
    const [draggedItem, setDraggedItem] = useState<SudokuItem | null>(null);
    
    const handleTouchStart = (_e: React.TouchEvent, item: SudokuItem) => {
        setDraggedItem(item);
        setSelectedItem(item);
    };
    
    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    };
    
    const handleTouchEnd = async (_e: React.TouchEvent, index: number) => {
        if (!draggedItem || board[index] !== null) {
            setDraggedItem(null);
            return;
        }
        
        if (roundData.solutionGrid[index].id === draggedItem.id) {
            const newBoard = [...board];
            newBoard[index] = draggedItem;
            setBoard(newBoard);
            setSelectedItem(null);
            setDraggedItem(null);
            playEffect('correct').catch(() => {});
        } else {
            setMistakeMade(true);
            setWrongDropIndex(index);
            setDraggedItem(null);
            playEffect('incorrect').catch(() => {});
            setTimeout(() => setWrongDropIndex(null), 500);
        }
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

    return (
        <div className="flex flex-col items-center h-full w-full max-w-5xl mx-auto p-4 landscape:p-2 animate-fade-in overflow-y-auto">
            {/* Compact Header for Landscape */}
            <div className="w-full flex justify-between items-center mb-4 landscape:mb-2 p-2 landscape:p-1 bg-white/50 backdrop-blur-sm rounded-full">
                <button onClick={onBack} className="p-2 landscape:p-1 rounded-full hover:bg-white/80 transition-colors" aria-label={t('app.back', 'Go back')}>
                    <ArrowLeftIcon className="w-8 h-8 landscape:w-6 landscape:h-6 text-indigo-700" />
                </button>
                <div className="flex items-center gap-2 landscape:gap-3">
                    <h1 className="text-lg landscape:text-sm font-bold text-indigo-800 hidden landscape:block">{question}</h1>
                    <button onClick={handleSpeak} className="p-2 landscape:p-1 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label={t('choice.readQuestion', 'Speak the question')}>
                        <SpeakerIcon className="w-7 h-7 landscape:w-5 landscape:h-5 text-indigo-600" />
                    </button>
                </div>
                <div className="text-lg landscape:text-sm font-bold text-indigo-800">{currentCard} / {totalCards}</div>
            </div>

            {/* Question - Only Portrait */}
            <div className="w-full landscape:hidden bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-800 flex items-center justify-center gap-4">
                    {question}
                    <button onClick={handleSpeak} className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors" aria-label={t('choice.readQuestion', 'Speak the question')}>
                        <SpeakerIcon className="w-7 h-7 text-indigo-600" />
                    </button>
                </h1>
            </div>
            
            <div className="flex flex-col landscape:flex-row items-center justify-center gap-4 landscape:gap-3 w-full landscape:max-h-[85vh] landscape:min-h-0">
                {/* Sudoku Board - Landscape: hücre boyutu yan seçeneklerle eşit (64px) */}
                <div className="w-full max-w-sm aspect-square landscape:w-auto landscape:h-auto landscape:aspect-auto landscape:flex-shrink-0 bg-white/60 p-3 landscape:p-3 rounded-2xl shadow-inner">
                    <div className="grid grid-cols-3 gap-2 landscape:gap-3 h-full landscape:h-auto">
                        {board.map((cell, index) => (
                             <div 
                                key={index}
                                onClick={() => handleBoardCellClick(index)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, index)}
                                onTouchEnd={(e) => handleTouchEnd(e, index)}
                                className={`
                                    aspect-square landscape:aspect-auto landscape:w-[64px] landscape:h-[64px] flex items-center justify-center rounded-lg sm:rounded-xl shadow-sm transition-colors duration-200
                                    ${cell ? 'bg-white' : 'bg-slate-200 border-2 border-dashed border-slate-400 cursor-pointer hover:bg-slate-300'}
                                    ${wrongDropIndex === index ? 'bg-red-300' : ''}
                                `}
                            >
                                {cell && <Card imageUrl={cell.imageUrl} word={cell.word} onClick={() => {}} isRevealed={false} className="w-full h-full" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Item Pool - Landscape dengeli */}
                <div className="w-full landscape:w-auto landscape:flex-shrink-0 flex landscape:flex-col items-center justify-center gap-3 landscape:gap-3 p-4 landscape:p-3 rounded-2xl bg-white/60 landscape:bg-transparent landscape:shadow-none landscape:p-0 landscape:rounded-none landscape:h-[45vh]">
                    {roundData.itemPool.map((item) => (
                        <div 
                            key={item.id} 
                            className="w-16 h-16 sm:w-20 sm:h-20 landscape:w-16 landscape:h-16"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                            onTouchStart={(e) => handleTouchStart(e, item)}
                            onTouchMove={handleTouchMove}
                        >
                            <Card 
                                imageUrl={item.imageUrl} 
                                word={item.word}
                                onClick={() => handleItemPoolClick(item)}
                                isSelected={selectedItem?.id === item.id || draggedItem?.id === item.id}
                                isRevealed={false}
                                className="aspect-square cursor-grab active:cursor-grabbing"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SudokuScreen;