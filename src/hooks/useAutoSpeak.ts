import { useEffect, useRef } from 'react';
import { speak, cancelSpeech } from '../services/speechService';

export function useAutoSpeak(text: string | null | undefined, enabled: boolean, key?: any, delay: number = 150) {
    const hasSpokenRef = useRef(false);

    useEffect(() => {
        // Reset speech flag when the key or text changes (i.e., new card/screen)
        hasSpokenRef.current = false;
        
        if (!enabled || !text) {
            return;
        }

        const speakText = async () => {
            // This ref is checked again inside the timeout to handle fast-unmounts
            if (!hasSpokenRef.current) { 
                hasSpokenRef.current = true;
                await speak(text);
            }
        };

        const timer = setTimeout(speakText, delay);

        // Cleanup function for when the component unmounts or dependencies change
        return () => {
            clearTimeout(timer);
            cancelSpeech();
        };
    }, [text, enabled, delay, key]);
}
