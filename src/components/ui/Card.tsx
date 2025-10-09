import React from 'react';
import CheckIcon from '../icons/CheckIcon.tsx';
import { getCurrentLanguage } from '../../i18n/index.ts';
import { translateLabel } from '../../utils/translate.ts';

interface CardProps {
    imageUrl: string;
    word?: string;
    isRevealed?: boolean;
    isCorrect?: boolean;
    isSelected?: boolean;
    isFlipped?: boolean;
    isDisabled?: boolean;
    onClick: () => void;
    className?: string;
    children?: React.ReactNode;
    ariaLabel?: string;
    showCheckmark?: boolean;
    isFlippable?: boolean;
    isLetterActivity?: boolean;
}

const Card: React.FC<CardProps> = ({
    imageUrl,
    word,
    isRevealed = true,
    isCorrect = false,
    isSelected = false,
    isFlipped = false,
    isDisabled = false,
    onClick,
    className = '',
    children,
    ariaLabel,
    showCheckmark = false,
    isFlippable = false,
    isLetterActivity = false,
}) => {
    const currentLang = getCurrentLanguage();
    const resolvedWord = word ? (currentLang === 'tr' ? word : translateLabel(word, currentLang)) : undefined;
    const labelSizeClass = isLetterActivity ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl';

    if (!isFlippable) {
        const simpleCardClasses = [
            'relative w-full rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out group bg-white/70 backdrop-blur-md border border-white/50',
            className,
            isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl cursor-pointer',
            isSelected ? 'ring-4 ring-amber-400 shadow-amber-300/50' : '',
            isCorrect ? 'ring-4 ring-green-500 shadow-green-400/50' : '',
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div
                className={simpleCardClasses}
                onClick={!isDisabled ? onClick : undefined}
                role="button"
                aria-label={ariaLabel || resolvedWord}
                aria-pressed={isSelected}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 0}
            >
                <img
                    src={imageUrl}
                    alt={resolvedWord || 'Egitim karti'}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.png';
                    }}
                />

                {resolvedWord && (
                    <div
                        className={`absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                            isRevealed ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <p className={`text-white text-center font-black truncate ${labelSizeClass}`}>{resolvedWord}</p>
                    </div>
                )}

                {showCheckmark && isSelected && (
                    <div className="absolute inset-0 bg-green-500/70 flex items-center justify-center rounded-2xl animate-pop-in">
                        <CheckIcon className="w-1/2 h-1/2 text-white" />
                    </div>
                )}

                {children}
            </div>
        );
    }

    const flippableBaseClasses = 'relative w-full aspect-square rounded-2xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer group';
    const dynamicClasses = [
        className,
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl',
        isSelected && !isCorrect ? 'ring-4 ring-amber-400 shadow-amber-300/50' : '',
        isCorrect ? 'ring-4 ring-green-500 shadow-green-400/50' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={`${flippableBaseClasses} ${dynamicClasses}`}
            onClick={!isDisabled ? onClick : undefined}
            role="button"
            aria-label={ariaLabel || resolvedWord}
            aria-pressed={isSelected}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : 0}
        >
            {isFlipped ? (
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl animate-fade-in">
                    <img
                        src={imageUrl}
                        alt={resolvedWord || 'Egitim karti'}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = '/images/placeholder.png';
                        }}
                    />
                    {resolvedWord && (
                        <div
                            className={`absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                                isRevealed ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p className={`text-white text-center font-black truncate ${labelSizeClass}`}>{resolvedWord}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center animate-fade-in">
                    <svg className="w-1/2 h-1/2 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Card;
