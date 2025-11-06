
import { useState, useCallback } from 'react';
import { CommunicationCard, CommunicationCategory, CommunicationSubCategory } from '../types.ts';
import { speak } from '../services/speechService.ts';
import { getCurrentLanguage } from '../i18n/index.ts';
import { translateLabel } from '../utils/translate.ts';
import { communicationCategories } from '../services/communicationData.ts';

export const useCommunication = () => {
    const [selectedCommCategory, setSelectedCommCategory] = useState<CommunicationCategory | null>(null);
    const [selectedCommSubCategory, setSelectedCommSubCategory] = useState<CommunicationSubCategory | null>(null);
    const [sentence, setSentence] = useState<CommunicationCard[]>([]);

    const handleCardClick = useCallback((card: CommunicationCard) => {
        setSentence(prev => [...prev, card]);
        const lang = getCurrentLanguage();
        const spoken = lang === 'tr' ? card.text : translateLabel(card.text, lang);
        speak(spoken);
    }, []);

    const handleSpeakSentence = useCallback(() => {
        const lang = getCurrentLanguage();
        const textToSpeak = sentence
            .map(card => (lang === 'tr' ? card.text : translateLabel(card.text, lang)))
            .join(' ');
        if (textToSpeak) speak(textToSpeak);
    }, [sentence]);

    const handleClearSentence = useCallback(() => setSentence([]), []);

    const resetCommunicationState = useCallback(() => {
        setSelectedCommCategory(null);
        setSelectedCommSubCategory(null);
        setSentence([]);
    }, []);

    return {
        selectedCommCategory,
        setSelectedCommCategory,
        selectedCommSubCategory,
        setSelectedCommSubCategory,
        sentence,
        setSentence,
        handleCardClick,
        handleSpeakSentence,
        handleClearSentence,
        resetCommunicationState,
        communicationCategories,
    };
};