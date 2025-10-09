
import { useState, useCallback, useEffect } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
import { useSettings } from './useSettings.ts';
import { useProfile } from './useProfile.ts';
import { useActivity } from './useActivity.ts';
import { useCommunication } from './useCommunication.ts';
import { usePrint } from './usePrint.ts';
import { ScreenState, Tab, ActivityType, ActivityCategory } from '../types.ts';
import { getActivityUiConfig, fetchLetterActivityData } from '../services/contentService.ts';
import { initializeAds } from '../services/monetizationService.ts';
import { setMutedState } from '../services/speechService.ts';

export const useAppCore = () => {
    // --- Core Navigation State ---
    const [screenState, setScreenState] = useState<ScreenState>(ScreenState.Loading);
    const [previousScreen, setPreviousScreen] = useState<ScreenState>(ScreenState.MainMenu);
    const [activeTab, _setActiveTab] = useState<Tab>(Tab.Activities);
    const [activeConceptTab, setActiveConceptTab] = useState('Temel');
    const [toast, setToast] = useState<{ message: string; type: 'error' | 'info' } | null>(null);
    const [categoryToManage, setCategoryToManage] = useState<ActivityCategory | null>(null);

    const showToast = useCallback((message: string, type: 'error' | 'info' = 'error', duration: number = 4000) => {
        setToast({ message, type });
        const timer = setTimeout(() => setToast(null), duration);
        return () => clearTimeout(timer);
    }, []);

    const showPremiumToast = useCallback(() => {
        showToast("Bu bir Premium özelliktir. Ayarlar menüsünden tüm özelliklere erişebilirsiniz.", 'info');
    }, [showToast]);

    // --- State Hooks ---
    const profile = useProfile({ showToast });
    const settings = useSettings({ showToast, showPremiumToast, userId: profile.activeProfile?.id });
    const communication = useCommunication();
    const print = usePrint({ showToast });
    
    const handleGoToMenu = useCallback(() => {
        activity.resetActivityState();
        communication.resetCommunicationState();
        setScreenState(ScreenState.MainMenu);
        _setActiveTab(Tab.Activities);
    }, []);
    
    const activity = useActivity({
        activityStats: profile.activityStats,
        setActivityStats: profile.setActivityStats,
        showToast,
        handleGoToMenu,
        enabledActivitiesSet: profile.enabledActivitiesSet,
    });
    
    const setActiveTab = (tab: Tab) => {
        _setActiveTab(tab);
        switch(tab) {
            case Tab.Communication:
                communication.resetCommunicationState();
                setScreenState(ScreenState.CommunicationMenu);
                break;
            case Tab.Rewards:
                setScreenState(ScreenState.Achievements);
                break;
            case Tab.Activities:
            default:
                handleGoToMenu();
                break;
        }
    };
    
    // Override advance to handle screen state
    const handleAdvance = async (isCorrect: boolean) => {
        const result = await activity.handleAdvance(isCorrect);
        if (result === 'finished') {
            setScreenState(ScreenState.Finished);
        }
    };

    // --- Effects ---
    useEffect(() => { setMutedState(settings.isMuted); }, [settings.isMuted]);
    useEffect(() => { initializeAds(); }, []);
    
    useEffect(() => {
        // This effect runs when profile is loaded or changes.
        if (screenState === ScreenState.Loading && profile.activeProfile) {
            // If we were loading and a profile is now available, move to the main menu.
            // The profile selection screen is handled from settings, so MainMenu is the correct destination after loading.
            setScreenState(ScreenState.MainMenu);
        }
    }, [profile.activeProfile, screenState]);

    useEffect(() => {
        const handleBackButton = () => {
          switch (screenState) {
            case ScreenState.Playing:
            case ScreenState.Finished:
                if (activity.isRandomMode) {
                    handleGoToMenu();
                    break;
                }
                const { backScreen } = getActivityUiConfig(activity.activityType);
                setScreenState(backScreen);
                break;
            case ScreenState.LetterSelection: setScreenState(ScreenState.LetterActivitiesMenu); break;
            case ScreenState.GroupSelection: setScreenState(ScreenState.LetterActivitiesMenu); break;
            case ScreenState.LetterActivitiesMenu:
            case ScreenState.ConceptActivitiesMenu:
            case ScreenState.ReasoningActivitiesMenu:
            case ScreenState.ObjectCategoriesMenu:
            case ScreenState.CommunicationMenu:
            case ScreenState.Achievements: handleGoToMenu(); break;
            case ScreenState.Settings: case ScreenState.ParentTips: setScreenState(ScreenState.MainMenu); break;
            case ScreenState.PrivacyPolicy: case ScreenState.BannedImages: case ScreenState.ActivityManagement: setScreenState(ScreenState.Settings); break;
            case ScreenState.PrintPool: case ScreenState.PrintSelectionDetail: case ScreenState.PrintPreview: setScreenState(previousScreen); break;
            case ScreenState.CommunicationDetail:
                if(communication.selectedCommCategory?.subCategories) setScreenState(ScreenState.CommunicationSubCategory);
                else setScreenState(ScreenState.CommunicationMenu);
                break;
            case ScreenState.CommunicationSubCategory: case ScreenState.BodyPainScreen: setScreenState(ScreenState.CommunicationMenu); break;
            case ScreenState.ParentReport: setScreenState(ScreenState.Achievements); break;
            case ScreenState.ProfileSelection:
                if(profile.profiles.length > 0) setScreenState(ScreenState.MainMenu);
                else CapacitorApp.exitApp();
                break;
            case ScreenState.MainMenu: CapacitorApp.exitApp(); break;
            case ScreenState.Loading: break;
            default: handleGoToMenu(); break;
          }
        };
        const listener = CapacitorApp.addListener('backButton', handleBackButton);
        return () => { listener.then(l => l.remove()); };
    }, [screenState, activity.activityType, activity.isRandomMode, communication.selectedCommCategory, previousScreen, profile.profiles, handleGoToMenu]);

    useEffect(() => {
        if (screenState === ScreenState.Playing && activity.activityType !== null) {
            if (activity.activityData.length > 0 && activity.currentIndex >= activity.activityData.length) {
                setScreenState(ScreenState.Finished);
            } else if (activity.activityData.length === 0) {
                showToast("Bu etkinlik için gösterilecek başka görsel kalmadı.", 'info');
                handleGoToMenu();
            }
        }
    }, [activity.activityData, activity.currentIndex, screenState, activity.activityType, handleGoToMenu, showToast]);

    const handleStartActivityWithLetter = async (letter: string) => {
        if (!activity.selectedActivityForLetter) {
            showToast("Etkinlik seçimi bulunamadı.");
            handleGoToMenu();
            return;
        }
        
        profile.updateActivityAttempt(`${activity.selectedActivityForLetter}-${letter}`);
        if (activity.selectedActivityForLetter !== ActivityType.EmbeddedStory) {
            profile.updateActivityAttempt(String(activity.selectedActivityForLetter));
        }
        
        activity.setSelectedLetter(letter);
        activity.setActivityType(activity.selectedActivityForLetter);
        setScreenState(ScreenState.Loading);
        
        try {
            const data = await fetchLetterActivityData(activity.selectedActivityForLetter, letter);
            if (data.length === 0) {
                showToast(`'${letter}' harfi için bu etkinlik oluşturulamadı.`);
                setScreenState(ScreenState.LetterSelection);
                return;
            }
            activity.setActivityData(data);
            activity.setCurrentIndex(0);
            activity.setScore(0);
            setScreenState(ScreenState.Playing);
        } catch (error) {
            console.error('Letter activity data fetch error:', error);
            showToast("Etkinlik yüklenirken bir hata oluştu.");
            setScreenState(ScreenState.LetterSelection);
        }
    };

    const handleRestartActivity = useCallback(async () => {
        if (activity.isRandomMode) {
            showToast("Mevcut rastgele etkinlik yeniden başlatılıyor...", "info", 2000);
            const currentActivity = activity.randomModeQueue[activity.currentRandomActivityIndex];
            if (currentActivity) {
                const { success, data, type } = await activity.startSpecificRandomActivity(currentActivity);
                 if (success && data && type) {
                    activity.setActivityType(type as ActivityType);
                    activity.setActivityData(data);
                    activity.setCurrentIndex(0);
                    activity.setScore(0);
                    setScreenState(ScreenState.Playing);
                } else {
                    handleGoToMenu();
                }
            } else {
                handleGoToMenu();
            }
        } else if (activity.selectedActivityForLetter && activity.selectedLetter) {
            handleStartActivityWithLetter(activity.selectedLetter);
        } else if (activity.activityType === ActivityType.Syllabification && activity.selectedGroup !== null) {
            // Syllabification activity restart
            showToast("Hece etkinliği yeniden başlatılıyor...", "info", 2000);
            try {
                const { fetchSyllableWordsForGroup } = await import('../services/contentService.ts');
                const data = await fetchSyllableWordsForGroup(activity.selectedGroup);
                if (data && data.length > 0) {
                    activity.setActivityData(data);
                    activity.setCurrentIndex(0);
                    activity.setScore(0);
                    setScreenState(ScreenState.Playing);
                } else {
                    showToast("Bu etkinlik için içerik bulunamadı.");
                    handleGoToMenu();
                }
            } catch (error) {
                console.error('Syllable data fetch error:', error);
                showToast("Etkinlik yüklenirken bir hata oluştu.");
                handleGoToMenu();
            }
        } else if (activity.activityType === ActivityType.ObjectRecognition && activity.selectedObjectCategory) {
            // Object recognition activity restart
            showToast("Nesne etkinliği yeniden başlatılıyor...", "info", 2000);
            try {
                const { createObjectChoiceRounds } = await import('../services/contentService.ts');
                const data = await createObjectChoiceRounds(activity.selectedObjectCategory.id);
                if (data && data.length > 0) {
                    activity.setActivityData(data);
                    activity.setCurrentIndex(0);
                    activity.setScore(0);
                    setScreenState(ScreenState.Playing);
                } else {
                    showToast("Bu kategori için nesne etkinliği oluşturulamadı.");
                    handleGoToMenu();
                }
            } catch (error) {
                console.error('Object activity data fetch error:', error);
                showToast("Etkinlik yüklenirken bir hata oluştu.");
                handleGoToMenu();
            }
        } else if (activity.activityType !== null) {
            // Concept/Reasoning activity restart
            showToast("Etkinlik yeniden başlatılıyor...", "info", 2000);
            try {
                const { fetchConceptActivityData } = await import('../services/contentService.ts');
                const data = await fetchConceptActivityData(activity.activityType, profile.activityStats);
                if (data && data.length > 0) {
                    activity.setActivityData(data);
                    activity.setCurrentIndex(0);
                    activity.setScore(0);
                    setScreenState(ScreenState.Playing);
                } else {
                    showToast("Bu etkinlik için içerik bulunamadı.");
                    handleGoToMenu();
                }
            } catch (error) {
                console.error('Activity data fetch error:', error);
                showToast("Etkinlik yüklenirken bir hata oluştu.");
                handleGoToMenu();
            }
        } else {
            handleGoToMenu();
        }
    }, [activity, handleGoToMenu, showToast, profile.activityStats]);


    return {
        screenState, setScreenState,
        previousScreen, setPreviousScreen,
        categoryToManage, setCategoryToManage,
        navigation: {
            activeTab, setActiveTab,
            activeConceptTab, setActiveConceptTab,
        },
        toast: {
            toast, showToast, showPremiumToast,
        },
        settings,
        profile,
        communication,
        print,
        activity: {
            ...activity,
            handleAdvance,
            handleRestartActivity,
            handleStartActivityWithLetter
        },
        handleGoToMenu
    };
};
