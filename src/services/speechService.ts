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
                const lang = overrideLang || speechLang;
                utterance.lang = lang;
                utterance.rate = 0.9;

                // Try to select the most appropriate voice for the target language
                try {
                    const chooseVoice = () => {
                        const voices = speechSynthesis.getVoices?.() || [];
                        if (voices.length === 0) return;
                        const langPrefix = lang.split('-')[0];
                        
                        // Special handling for Azerbaijani (often not available in browsers)
                        if (langPrefix === 'az') {
                            // Try Azerbaijani first
                            let voice = voices.find(v => v.lang?.toLowerCase().startsWith('az'));
                            // Fallback to Turkish (very similar language)
                            if (!voice) voice = voices.find(v => v.lang?.toLowerCase().startsWith('tr'));
                            // Last resort: any available voice
                            if (!voice && voices.length > 0) {
                                console.warn('No Azerbaijani or Turkish voice found, using default');
                                voice = voices[0];
                            }
                            if (voice) utterance.voice = voice;
                            return;
                        }
                        
                        // Exact match first
                        let voice = voices.find(v => v.lang?.toLowerCase() === lang.toLowerCase());
                        // Then language-only match (en-*, de-*, ...)
                        if (!voice) voice = voices.find(v => v.lang?.toLowerCase().startsWith(langPrefix));
                        // Prefer non-default Turkish when target is not Turkish
                        if (!voice && langPrefix !== 'tr') voice = voices.find(v => v.lang?.toLowerCase().startsWith('en'));
                        if (voice) utterance.voice = voice;
                    };

                    // Some browsers load voices asynchronously
                    if (speechSynthesis.onvoiceschanged !== undefined) {
                        const handler = () => { chooseVoice(); speechSynthesis.onvoiceschanged = null as any; };
                        speechSynthesis.onvoiceschanged = handler;
                        // Also attempt immediately in case voices are already available
                        chooseVoice();
                    } else {
                        chooseVoice();
                    }
                } catch (e) {
                    // Non-fatal: if voice selection fails, rely on browser default
                }

                utterance.onend = () => resolve();
                utterance.onerror = (event) => {
                    console.error("Web Speech API error:", (event as any)?.error || event);
                    resolve();
                };
                try {
                    speechSynthesis.speak(utterance);
                } catch (e) {
                    console.error("Speech Synthesis speak() failed:", e);
                    resolve();
                }
            });
        } else {
            console.warn("Speech Synthesis API not supported in this browser.");
        }
    }
};

/**
 * Plays a sound effect from an MP3 file, if not muted.
 * @param {'correct' | 'incorrect' | 'finish' | 'softincorrect'} effect - The name of the effect.
 * @param options Optional settings such as volume (0.0 - 1.0)
 */
export const playEffect = (effect: 'correct' | 'incorrect' | 'finish' | 'softincorrect', options?: { volume?: number }): Promise<void> => {
  return new Promise((resolve) => {
    if (isMuted) {
      return resolve();
    }
    
    stopCurrentEffect();

    const audioSrc = `/audio/${effect}.mp3`;
    const audio = new Audio(audioSrc);
        if (typeof options?.volume === 'number') {
            audio.volume = Math.max(0, Math.min(1, options.volume));
        }
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