import React, { useState, useCallback, useEffect } from 'react';
import { Story } from '../types.ts';
import { speak, cancelSpeech } from '../services/speechService.ts';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import HomeIcon from './icons/HomeIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';

interface StoryScreenProps {
    stories: Story[];
    letter: string;
    onBack: () => void;
    onGoToMenu: () => void;
    isAutoSpeakEnabled: boolean;
}

const StoryScreen: React.FC<StoryScreenProps> = ({ stories, letter, onBack, onGoToMenu, isAutoSpeakEnabled }) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const highlightLetter = useCallback((text: string, letterToHighlight: string) => {
        const regex = new RegExp(`(${letterToHighlight})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            part.toLowerCase() === letterToHighlight.toLowerCase() ? (
                <span key={i} className="text-red-500 font-bold">
                    {part}
                </span>
            ) : (
                part
            )
        );
    }, []);

    const currentStory = stories[currentStoryIndex];
    const storyTextToSpeak = currentStory ? `${currentStory.title}. ${currentStory.story}` : null;

    useAutoSpeak(storyTextToSpeak, isAutoSpeakEnabled, currentStory?.id);

    useEffect(() => {
        return () => {
            cancelSpeech();
        };
    }, []);

    const handleSpeak = useCallback(() => {
        if (storyTextToSpeak) {
            speak(storyTextToSpeak);
        }
    }, [storyTextToSpeak]);

    const goToNextStory = () => {
        setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const goToPreviousStory = () => {
        setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    return (
        <div className="flex flex-col items-center justify-between h-full w-full max-w-2xl mx-auto p-4 animate-fade-in">
             {/* Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-sky-700" />
                </button>
                 <h1 className="text-2xl sm:text-3xl font-bold text-center text-sky-800">
                    Hikaye Zamanı
                </h1>
                <button onClick={onGoToMenu} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Ana menüye dön">
                    <HomeIcon className="w-8 h-8 text-sky-700" />
                </button>
            </div>
            
            <div className="flex-grow w-full bg-white/70 rounded-2xl shadow-lg p-6 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-800 flex-grow">
                        {highlightLetter(currentStory.title, letter)}
                    </h2>
                     <button onClick={handleSpeak} className="p-2 bg-sky-100 rounded-full hover:bg-sky-200 transition-colors flex-shrink-0 ml-4" aria-label="Hikayeyi seslendir">
                        <SpeakerIcon className="w-7 h-7 text-sky-600" />
                    </button>
                </div>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                    {highlightLetter(currentStory.story, letter)}
                </p>
            </div>

            <div className="w-full flex justify-between items-center mt-6">
                 <button 
                    onClick={goToPreviousStory} 
                    className="bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-100 transition-all disabled:opacity-50"
                    disabled={stories.length <= 1}
                >
                    Önceki
                </button>
                <span className="font-bold text-sky-800">
                    {currentStoryIndex + 1} / {stories.length}
                </span>
                <button 
                    onClick={goToNextStory} 
                    className="bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-100 transition-all disabled:opacity-50"
                    disabled={stories.length <= 1}
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
};

export default StoryScreen;