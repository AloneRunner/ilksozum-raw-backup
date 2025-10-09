import React, { useState, useEffect, useRef } from 'react';
import { DragAndDropPositioningRound } from '../types.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface DragAndDropPositioningScreenProps {
    roundData: DragAndDropPositioningRound;
    onAdvance: (isCorrect: boolean) => void;
    onBack: () => void;
    currentCard: number;
    totalCards: number;
    isAutoSpeakEnabled: boolean;
}

const DragAndDropPositioningScreen: React.FC<DragAndDropPositioningScreenProps> = ({
    roundData, onAdvance, onBack, currentCard, totalCards, isAutoSpeakEnabled
}) => {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    
    const dropZonesRef = useRef<Record<string, HTMLDivElement | null>>({});
    const ballRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useAutoSpeak(roundData.question, isAutoSpeakEnabled, roundData.id);

    useEffect(() => {
        setIsCorrect(false);
        setIsWrong(false);
        setMistakeMade(false);
        
        if (ballRef.current) {
            ballRef.current.style.transform = `translate(0px, 0px)`;
        }
        setBallPosition({ x: 0, y: 0 });

    }, [roundData]);
    
    const handleDragStart = (e: React.PointerEvent) => {
        if (isCorrect) return;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setIsDragging(true);
    };

    const handleDragMove = (e: React.PointerEvent) => {
        if (!isDragging || !ballRef.current || !containerRef.current) return;
        
        const newX = ballPosition.x + e.movementX;
        const newY = ballPosition.y + e.movementY;

        setBallPosition({ x: newX, y: newY });
        ballRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    const handleDragEnd = async (e: React.PointerEvent) => {
        if (!isDragging || !ballRef.current) return;
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        setIsDragging(false);

        const ballRect = ballRef.current.getBoundingClientRect();
        const ballCenterX = ballRect.left + ballRect.width / 2;
        const ballCenterY = ballRect.top + ballRect.height / 2;
        
        let droppedInZone: string | null = null;
        
        for (const zoneName in dropZonesRef.current) {
            const zoneEl = dropZonesRef.current[zoneName];
            if (zoneEl) {
                const zoneRect = zoneEl.getBoundingClientRect();
                if (
                    ballCenterX > zoneRect.left &&
                    ballCenterX < zoneRect.right &&
                    ballCenterY > zoneRect.top &&
                    ballCenterY < zoneRect.bottom
                ) {
                    droppedInZone = zoneName;
                    break;
                }
            }
        }

        if (droppedInZone === roundData.correctZone) {
            setIsCorrect(true);
            await playEffect('correct');
            setTimeout(() => onAdvance(!mistakeMade), 1200);
        } else {
            setMistakeMade(true);
            setIsWrong(true);
            await playEffect('incorrect');
            if (ballRef.current) {
                ballRef.current.style.transition = 'transform 0.5s ease-out';
                ballRef.current.style.transform = 'translate(0px, 0px)';
            }
            setTimeout(() => {
                setBallPosition({ x: 0, y: 0 });
                if(ballRef.current) ballRef.current.style.transition = '';
                setIsWrong(false);
            }, 500);
        }
    };
    
    const Zone = ({ position, gridClass }: { position: string, gridClass: string }) => (
        <div
            ref={el => { dropZonesRef.current[position] = el; }}
            className={`flex items-center justify-center rounded-2xl border-4 border-dashed transition-all duration-300 ${gridClass}
            ${isDragging ? 'bg-slate-300/70 border-slate-500' : 'bg-slate-200/50 border-slate-400'}
            `}
        >
            {isCorrect && roundData.correctZone === position && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 landscape:w-24 landscape:h-24 animate-pop-in">
                    <img src={roundData.itemToDrag.imageUrl} alt="" className="w-full h-full pointer-events-none"/>
                </div>
            )}
        </div>
    );


    return (
    <div ref={containerRef} className={`flex flex-col items-center h-full w-full max-w-lg landscape:max-w-5xl mx-auto p-4 animate-fade-in overflow-y-auto ${isDragging ? 'touch-none' : ''}`}>
            <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-rose-700" />
                </button>
                <div className="text-lg font-bold text-rose-800">{currentCard} / {totalCards}</div>
                <div className="w-12 h-12" />
            </div>
            
            <h1 className="text-xl sm:text-2xl landscape:text-xl font-bold text-center text-rose-800 mb-6 flex items-center gap-4">
                {roundData.question}
                <button onClick={() => speak(roundData.question)} className="p-2 bg-rose-100 rounded-full hover:bg-rose-200 transition-colors" aria-label="Soruyu seslendir">
                    <SpeakerIcon className="w-7 h-7 text-rose-600" />
                </button>
            </h1>

            <div className="w-full flex-grow flex flex-col landscape:flex-row items-center justify-center gap-8 landscape:gap-10">
                 {/* Draggable Ball Area (Left in landscape) */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 landscape:w-40 landscape:h-40 landscape:flex-1 flex items-center justify-center">
                    <div 
                        ref={ballRef}
                        onPointerDown={handleDragStart}
                        onPointerMove={handleDragMove}
                        onPointerUp={handleDragEnd}
                        onPointerCancel={handleDragEnd}
                        className={`w-16 h-16 sm:w-20 sm:h-20 landscape:w-24 landscape:h-24 cursor-grab ${isDragging ? 'cursor-grabbing' : ''} ${isWrong ? 'animate-shake' : ''} ${isCorrect ? 'hidden' : ''} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                    >
                        <img src={roundData.itemToDrag.imageUrl} alt={roundData.itemToDrag.word} className="w-full h-full pointer-events-none"/>
                    </div>
                </div>
                
                {/* Drop Zones Grid (Right in landscape) */}
                <div className="w-full max-w-sm landscape:w-[min(48vw,70vh)] aspect-square relative">
                    <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
                        <div />
                        <Zone position="üstünde" gridClass="col-start-2 row-start-1" />
                        <div />
                        <Zone position="solunda" gridClass="col-start-1 row-start-2" />
                        <div className="relative col-start-2 row-start-2">
                            <div className="absolute inset-0 bg-amber-300 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="font-bold text-white text-2xl">KUTU</span>
                            </div>
                            <Zone position="içinde" gridClass="w-full h-full" />
                        </div>
                        <Zone position="sağında" gridClass="col-start-3 row-start-2" />
                        <div />
                        <Zone position="altında" gridClass="col-start-2 row-start-3" />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(DragAndDropPositioningScreen);