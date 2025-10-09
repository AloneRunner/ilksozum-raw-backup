
import React, { useEffect, useRef } from 'react';
import StarIcon from './icons/StarIcon.tsx';
import TrophyIcon from './icons/TrophyIcon.tsx';
import RetryIcon from './icons/RetryIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import HomeIcon from './icons/HomeIcon.tsx';
import { playEffect, speak } from '../services/speechService.ts';
import { ActivityType } from '../types.ts';
import { getActivityUiConfig } from '../services/contentService.ts';
import useWindowSize from '../hooks/useWindowSize.ts';


interface CompletionScreenProps {
    score: number;
    total: number;
    onGoToMenu: () => void;
    onRestart: () => void;
    onGoBack: () => void;
    activityType: ActivityType | null;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ score, total, onGoToMenu, onRestart, onGoBack, activityType }) => {
    const percentage = total > 0 ? (score / total) * 100 : 0;
    const hasPlayedSoundRef = useRef(false);
    const { width, height } = useWindowSize();
    const isLandscape = width !== undefined && height !== undefined ? width > height : false;
    
    let message = "Harika iş çıkardın!";
    if (percentage < 50) {
        message = "Tekrar denemeye ne dersin?";
    } else if (percentage < 100) {
        message = "Çok iyi gidiyorsun!";
    }

    useEffect(() => {
        if (hasPlayedSoundRef.current) return;
        hasPlayedSoundRef.current = true;
        
        playEffect('finish').then(() => {
            speak(message);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    const getBackButtonText = () => {
        return getActivityUiConfig(activityType).backButtonText;
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 animate-fade-in bg-gradient-to-br from-sky-100 to-yellow-100">
            {isLandscape ? (
                <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-2xl w-full max-w-5xl grid grid-cols-2 gap-6 items-center">
                    {/* Left: Trophy, message, stars, score */}
                    <div className="flex flex-col items-center justify-center px-2">
                        <TrophyIcon className="w-24 h-24 sm:w-32 sm:h-32 text-yellow-400 mb-3 animate-pop-in" />
                        <h1 className="text-3xl font-black text-sky-800 mb-1 animate-pop-in animation-delay-200">Tebrikler!</h1>
                        <p className="text-lg text-slate-600 mb-4 animate-pop-in animation-delay-200">{message}</p>
                        <div className="flex justify-center items-end space-x-2 sm:space-x-3 mb-4 animate-pop-in animation-delay-200">
                            {[...Array(total)].map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className={`w-7 h-7 sm:w-9 sm:h-9 transition-all duration-500 ${i < score ? 'text-yellow-400' : 'text-slate-300'}`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                />
                            ))}
                        </div>
                        <p className="text-3xl font-bold text-sky-700 animate-pop-in animation-delay-200">{score} / {total}</p>
                    </div>

                    {/* Right: Actions stacked */}
                    <div className="flex flex-col gap-3 sm:gap-4 w-full">
                        <button
                            onClick={onRestart}
                            className="w-full flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            <RetryIcon className="w-7 h-7"/>
                            <span className="text-lg">Tekrar Oyna</span>
                        </button>
                        <button
                            onClick={onGoBack}
                            className="w-full flex items-center justify-center gap-3 bg-sky-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg hover:bg-sky-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300"
                        >
                            <ArrowLeftIcon className="w-7 h-7"/>
                            <span className="text-lg">{getBackButtonText()}</span>
                        </button>
                        <button
                            onClick={onGoToMenu}
                            className="w-full flex items-center justify-center gap-3 bg-slate-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300"
                        >
                            <HomeIcon className="w-7 h-7"/>
                            <span className="text-lg">Ana Menü</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl max-w-lg w-full">
                    <TrophyIcon className="w-24 h-24 sm:w-32 sm:h-32 text-yellow-400 mx-auto mb-4 animate-pop-in" />
                    <h1 className="text-3xl sm:text-5xl font-black text-sky-800 mb-2 animate-pop-in animation-delay-200">Tebrikler!</h1>
                    <p className="text-lg sm:text-2xl text-slate-600 mb-6 animate-pop-in animation-delay-200">{message}</p>
                    <div className="flex justify-center items-end space-x-2 sm:space-x-4 mb-8 animate-pop-in animation-delay-200">
                        {[...Array(total)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`w-8 h-8 sm:w-12 sm:h-12 transition-all duration-500 ${i < score ? 'text-yellow-400' : 'text-slate-300'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            />
                        ))}
                    </div>
                    <p className="text-2xl sm:text-4xl font-bold text-sky-700 mb-8 animate-pop-in animation-delay-200">{score} / {total}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        <button
                            onClick={onRestart}
                            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 sm:py-4 px-4 rounded-xl shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            <RetryIcon className="w-6 h-6 sm:w-7 sm:h-7"/>
                            <span>Tekrar Oyna</span>
                        </button>
                        <button
                            onClick={onGoBack}
                            className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white font-bold py-3 sm:py-4 px-4 rounded-xl shadow-lg hover:bg-sky-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300"
                        >
                            <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7"/>
                            <span className="text-sm sm:text-base">{getBackButtonText()}</span>
                        </button>
                        <button
                            onClick={onGoToMenu}
                            className="sm:col-span-2 w-full flex items-center justify-center gap-2 bg-slate-500 text-white font-bold py-3 sm:py-4 px-4 rounded-xl shadow-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300"
                        >
                            <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7"/>
                            <span>Ana Menü</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default React.memo(CompletionScreen);