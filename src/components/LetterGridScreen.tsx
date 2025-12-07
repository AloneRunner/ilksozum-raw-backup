import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';
import { getCurrentLanguage, t } from '../i18n/index.ts';
import { getAlphabet } from '../data/alphabets.ts';

interface LetterGridScreenProps {
  letter: string;
  onAdvance: (isCorrect: boolean) => void;
  onBack: () => void;
  isAutoSpeakEnabled: boolean;
}

// Helper: locale tag for casing rules
const getLocaleTag = (lang: ReturnType<typeof getCurrentLanguage>) => {
    switch (lang) {
        case 'tr': return 'tr-TR';
        case 'de': return 'de-DE';
        case 'az': return 'az-AZ';
        default: return lang;
    }
};

const generateGrid = (targetLetter: string, lang: ReturnType<typeof getCurrentLanguage>): string[] => {
    const gridSize = 25; // 5x5 grid
    const grid = new Array(gridSize).fill('');
    const locale = getLocaleTag(lang);
    const upperCaseTarget = targetLetter.toLocaleUpperCase(locale);
    
    // Determine the display lowercase form of the target
    let lowerCaseTarget: string;
    if (lang === 'tr' && upperCaseTarget === 'A') {
        // Turkish “school a” glyph for visual distinction
        lowerCaseTarget = 'ɑ';
    } else {
        lowerCaseTarget = upperCaseTarget.toLocaleLowerCase(locale);
    }

    const totalTargets = Math.floor(Math.random() * 2) + 5; // 5-6 targets
    const upperCount = Math.ceil(totalTargets / 2);
    const lowerCount = totalTargets - upperCount;

    let placedCount = 0;
    // Place uppercase
    while (placedCount < upperCount) {
        const randomIndex = Math.floor(Math.random() * gridSize);
        if (grid[randomIndex] === '') {
            grid[randomIndex] = upperCaseTarget;
            placedCount++;
        }
    }
    // Place lowercase
    placedCount = 0;
    while (placedCount < lowerCount) {
        const randomIndex = Math.floor(Math.random() * gridSize);
        if (grid[randomIndex] === '') {
            grid[randomIndex] = lowerCaseTarget;
            placedCount++;
        }
    }
    
    // Build letter pool (upper+lower) from current language alphabet
    const baseAlphabet = getAlphabet(lang);
    const letterForms: string[] = [];
    for (const L of baseAlphabet) {
        const U = L.toLocaleUpperCase(locale);
        const lower = (lang === 'tr' && U === 'A') ? 'ɑ' : U.toLocaleLowerCase(locale);
        letterForms.push(U, lower);
    }
    const distractors = letterForms.filter(l => l !== upperCaseTarget && l !== lowerCaseTarget);
    for (let i = 0; i < gridSize; i++) {
        if (grid[i] === '') {
            grid[i] = distractors[Math.floor(Math.random() * distractors.length)];
        }
    }
    
    return grid;
};

const LetterGridScreen: React.FC<LetterGridScreenProps> = ({ letter, onAdvance, onBack, isAutoSpeakEnabled }) => {
    const [grid, setGrid] = useState<string[]>([]);
    const [foundLetters, setFoundLetters] = useState<number[]>([]);
    const [totalTargets, setTotalTargets] = useState(0);
    const [mistakeMade, setMistakeMade] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const lang = getCurrentLanguage();
    const locale = getLocaleTag(lang);
    
    const upperCaseLetter = letter.toLocaleUpperCase(locale);
    let lowerCaseTarget: string;
    if (lang === 'tr' && upperCaseLetter === 'A') {
        lowerCaseTarget = 'ɑ';
    } else {
        lowerCaseTarget = upperCaseLetter.toLocaleLowerCase(locale);
    }

    const question = t('letters.grid.findAll', `Tabloda gizlenen bütün "{letter}" harflerini bul.`).replace('{letter}', upperCaseLetter);
    useAutoSpeak(question, isAutoSpeakEnabled, letter);

    useEffect(() => {
        const newGrid = generateGrid(letter, lang);
        setGrid(newGrid);
        setFoundLetters([]);
        setMistakeMade(false);
        setIsWrong(false);
        setTotalTargets(newGrid.filter(l => l === upperCaseLetter || l === lowerCaseTarget).length);
    }, [letter, upperCaseLetter, lowerCaseTarget, lang]);

    const handleCellClick = async (clickedLetter: string, index: number) => {
        if (foundLetters.includes(index)) return;

        if (clickedLetter === upperCaseLetter || clickedLetter === lowerCaseTarget) {
            const newFound = [...foundLetters, index];
            setFoundLetters(newFound);
            
            // Play sounds sequentially to avoid interruption
            await playEffect('correct');
            await speak(upperCaseLetter);

            if (newFound.length === totalTargets) {
                setTimeout(() => onAdvance(!mistakeMade), 1000);
            }
        } else {
            playEffect('incorrect');
            setMistakeMade(true);
            setIsWrong(true);
            setTimeout(() => setIsWrong(false), 500);
        }
    };
    
    return (
        <div className={`flex flex-col landscape:flex-row items-center justify-center h-full w-full max-w-5xl mx-auto p-2 sm:p-4 landscape:p-2 animate-fade-in gap-4 sm:gap-8 ${isWrong ? 'animate-shake' : ''}`}>
            {/* Left Panel (Header) */}
            <div className="w-full flex-shrink-0 landscape:w-1/3 flex landscape:flex-col justify-between landscape:justify-center items-center text-center gap-4 mb-2 landscape:mb-0 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
                <div className="w-full flex items-center justify-between landscape:justify-center landscape:flex-col landscape:gap-4">
                     <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                        <ArrowLeftIcon className="w-8 h-8 text-sky-700" />
                    </button>
                    <h1 className="text-2xl sm:text-3xl font-black text-sky-800">
                        {t('letters.grid.findAllShort', 'Tüm {letter} harflerini bul').replace('{letter}', `"${upperCaseLetter}"`)}
                    </h1>
                     <div className="text-3xl sm:text-4xl font-bold text-white bg-sky-500 px-6 py-3 rounded-full shadow-lg">
                        {foundLetters.length}/{totalTargets}
                    </div>
                </div>
            </div>
            
            {/* Right Panel (Grid) */}
            <div className="w-full max-w-md aspect-square landscape:max-w-none landscape:w-auto landscape:flex-grow bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-2xl shadow-inner border border-white/50">
                <div className="grid grid-cols-5 gap-2 sm:gap-3 h-full">
                    {grid.map((char, index) => (
                        <button
                            key={index}
                            onClick={() => handleCellClick(char, index)}
                            className={`
                                aspect-square flex items-center justify-center rounded-lg sm:rounded-xl shadow-md
                                transition-all duration-200 ease-in-out
                                focus:outline-none focus:ring-4 focus:ring-amber-400
                                ${foundLetters.includes(index) 
                                    ? 'bg-green-400 text-white transform scale-110' 
                                    : 'bg-white/80 hover:bg-sky-100 text-sky-800'
                                }
                            `}
                            aria-label={`Hücre ${index + 1}`}
                        >
                            <span className="text-3xl sm:text-4xl font-extrabold">{char}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(LetterGridScreen);