// FIX: Import React to use React.Dispatch and React.SetStateAction types.
import React, { useMemo, useCallback, useEffect } from 'react';
import { getCurrentLanguage, setCurrentLanguage, type Locale } from '../i18n/index.ts';
import { useLocalStorage } from './useLocalStorage.ts';
import { purchasePremium } from '../services/monetizationService.ts';

interface UseSettingsProps {
    showToast: (message: string, type?: 'error' | 'info', duration?: number) => void;
    showPremiumToast: () => void;
    userId?: string; // RevenueCat için kullanıcı ID'si
}

export const useSettings = ({ showToast, showPremiumToast, userId }: UseSettingsProps) => {
    const [hasPurchasedPremium, setHasPurchasedPremium] = useLocalStorage<boolean>('isPremium_v1', false);
    const [trialStartDate, setTrialStartDate] = useLocalStorage<number | null>('trialStartDate_v1', null);
    const [bannedImageIdsArray, setBannedImageIdsArray] = useLocalStorage<number[]>('bannedImageIds_v1', []);
    const [isMuted, setIsMuted] = useLocalStorage<boolean>('isMuted', false);
    const [isAutoSpeakEnabled, setIsAutoSpeakEnabled] = useLocalStorage<boolean>('isAutoSpeakEnabled', true);
    const [isWordLabelVisible, setIsWordLabelVisible] = useLocalStorage<boolean>('isWordLabelVisible', false);
    const [isBanButtonEnabled, setIsBanButtonEnabled] = useLocalStorage<boolean>('isBanButtonEnabled', false);
    const [isFastTransitionEnabled, setIsFastTransitionEnabled] = useLocalStorage<boolean>('isFastTransitionEnabled', false);
    const [theme, setTheme] = useLocalStorage<string>('theme_v2', 'simple');
    const [language, setLanguage] = useLocalStorage<Locale>('lang_v1', getCurrentLanguage());
    
    useEffect(() => {
        // This runs only once on the very first launch for a user
        if (trialStartDate === null) {
            console.log("First launch detected. Starting 3-day premium trial.");
            setTrialStartDate(Date.now());
            setTheme('tilki'); // Set default theme to 'tilki' for new users
        }
    }, [trialStartDate, setTrialStartDate, setTheme]);

    // Keep i18n current language in sync with settings
    useEffect(() => {
        setCurrentLanguage(language);
    }, [language]);

    const isTrialActive = useMemo(() => {
        if (!trialStartDate) {
            return false;
        }
        const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000;
        return (Date.now() - trialStartDate) < threeDaysInMillis;
    }, [trialStartDate]);

    const isPremium = hasPurchasedPremium || isTrialActive;
    
    const bannedImageIds = useMemo(() => new Set(bannedImageIdsArray), [bannedImageIdsArray]);

    const handleToggleMute = useCallback(() => setIsMuted(prev => !prev), [setIsMuted]);
    const handleToggleAutoSpeak = useCallback(() => setIsAutoSpeakEnabled(prev => !prev), [setIsAutoSpeakEnabled]);
    const handleToggleWordLabel = useCallback(() => setIsWordLabelVisible(prev => !prev), [setIsWordLabelVisible]);
    const handleToggleBanButton = useCallback(() => setIsBanButtonEnabled(prev => !prev), [setIsBanButtonEnabled]);

    const handleToggleFastTransition = useCallback(() => {
        if (isPremium) setIsFastTransitionEnabled(prev => !prev);
        else showPremiumToast();
    }, [isPremium, setIsFastTransitionEnabled, showPremiumToast]);

    const handleChangeTheme = useCallback((newTheme: string) => {
        if (!isPremium && newTheme !== 'simple') {
            showPremiumToast();
            return;
        }
        setTheme(newTheme);
    }, [isPremium, setTheme, showPremiumToast]);
    
    const handleChangeLanguage = useCallback((newLang: Locale) => {
        setLanguage(newLang);
        setCurrentLanguage(newLang);
    }, [setLanguage]);
    
    const handlePurchasePremium = useCallback(async (): Promise<boolean> => {
        const success = await purchasePremium(userId);
        if (success) {
            setHasPurchasedPremium(true);
            showToast('Desteğiniz için teşekkürler! Premium özellikler açıldı.', 'info');
        } else {
            showToast('Satın alma işlemi tamamlanamadı. Lütfen tekrar deneyin.', 'error');
        }
        return success;
    }, [setHasPurchasedPremium, showToast, userId]);

    const handleBanImage = useCallback((bannedImageId: number, setActivityData: React.Dispatch<React.SetStateAction<any[]>>) => {
        setBannedImageIdsArray(prev => Array.from(new Set(prev).add(bannedImageId)));
        
        // This logic should ideally be inside the activity hook, but for now we pass setActivityData
        setActivityData(prevData => prevData.filter(round => {
            const containsBanned = (item: any) => item && item.id === bannedImageId;
            if (containsBanned(round)) return false;
            if (round.options?.some(containsBanned)) return false;
            // ... add more checks for other activity types if necessary
            return true;
        }));

        showToast("Bu görsel artık etkinliklerde görünmeyecek.", 'info');
    }, [setBannedImageIdsArray, showToast]);

    const handleUnbanImage = useCallback((id: number) => {
        setBannedImageIdsArray(prev => prev.filter(imageId => imageId !== id));
        showToast("Görsel geri yüklendi.", 'info');
    }, [setBannedImageIdsArray, showToast]);

    return {
        isPremium,
        hasPurchasedPremium,
        bannedImageIds,
        isMuted,
        isAutoSpeakEnabled,
        isWordLabelVisible,
        isBanButtonEnabled,
        isFastTransitionEnabled,
        theme,
        language,
        handleToggleMute,
        handleToggleAutoSpeak,
        handleToggleWordLabel,
        handleToggleBanButton,
        handleToggleFastTransition,
        onChangeTheme: handleChangeTheme,
        onChangeLanguage: handleChangeLanguage,
        handlePurchasePremium,
        handleBanImage,
        handleUnbanImage,
    };
};