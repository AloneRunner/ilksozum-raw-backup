import { Capacitor } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

// Current language code for TTS (BCP-47)
let speechLang = 'tr-TR';

export function setSpeechLanguage(lang: 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az') {
    const map: Record<string, string> = {
        tr: 'tr-TR',
        en: 'en-US',
        de: 'de-DE',
        fr: 'fr-FR',
        nl: 'nl-NL',
        az: 'az-Latn-AZ', // Azerice Latin
    };
    speechLang = map[lang] || 'en-US';
}

let isMuted = false;
let currentEffect: HTMLAudioElement | null = null;

/**
 * Updates the global mute state for the speech service.
 * @param {boolean} muted - Whether the sound should be muted.
 */
export const setMutedState = (muted: boolean) => {
    isMuted = muted;
    if (isMuted) {
        cancelSpeech();
        stopCurrentEffect();
    }
};

/**
 * Stops any currently playing or pending speech.
 */
export const cancelSpeech = async () => {
    if (Capacitor.isNativePlatform()) {
        try {
            await TextToSpeech.stop();
        } catch (e) {
            // Ignore errors if TTS wasn't speaking
        }
    } else {
        if (typeof speechSynthesis !== 'undefined' && (speechSynthesis.speaking || speechSynthesis.pending)) {
            speechSynthesis.cancel();
        }
    }
};

/**
 * Stops any currently playing sound effect.
 */
const stopCurrentEffect = () => {
    if (currentEffect) {
        currentEffect.pause();
        currentEffect.currentTime = 0;
        currentEffect = null;
    }
};

/**
 * Speaks a given text using the appropriate TTS engine for the platform.
 * Returns a promise that resolves when the speech is finished.
 * @param {string} textToSpeak - The text to be spoken.
 * @returns {Promise<void>}
 */
export const speak = async (textToSpeak: string, overrideLang?: string): Promise<void> => {
    if (isMuted || !textToSpeak) {
        return Promise.resolve();
    }

    await cancelSpeech();
    stopCurrentEffect();

    if (Capacitor.isNativePlatform()) {
        try {
            await TextToSpeech.speak({
                text: textToSpeak,
                lang: overrideLang || speechLang,
                rate: 0.9,
                pitch: 1.0,
                volume: 1.0,
                category: 'playback',
            });
        } catch (e) {
            console.error("Native TTS Error:", e);
        }
    } else {
        // Fallback to web browser's SpeechSynthesis API
        if (typeof speechSynthesis !== 'undefined') {
            return new Promise((resolve) => {
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = overrideLang || speechLang;
                utterance.rate = 0.9;
                utterance.onend = () => resolve();
                utterance.onerror = (event) => {
                    console.error("Web Speech API error:", event.error);
                    resolve();
                };
                speechSynthesis.speak(utterance);
            });
        } else {
            console.warn("Speech Synthesis API not supported in this browser.");
        }
    }
};

/**
 * Plays a sound effect from an MP3 file, if not muted.
 * @param {'correct' | 'incorrect' | 'finish'} effect - The name of the effect.
 */
export const playEffect = (effect: 'correct' | 'incorrect' | 'finish'): Promise<void> => {
  return new Promise((resolve) => {
    if (isMuted) {
      return resolve();
    }
    
    stopCurrentEffect();

    const audioSrc = `/audio/${effect}.mp3`;
    const audio = new Audio(audioSrc);
    currentEffect = audio;

    audio.play().catch(error => {
      console.error(`Error playing sound effect '${effect}':`, error);
      currentEffect = null;
      resolve();
    });

    audio.onended = () => {
      currentEffect = null;
      resolve();
    };

    audio.onerror = () => {
      console.error(`Error loading sound effect '${effect}'`);
      currentEffect = null;
      resolve();
    };
  });
};