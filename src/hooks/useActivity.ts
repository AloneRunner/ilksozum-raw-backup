import React, { useState, useCallback } from 'react';
import { ActivityType, ActivityStats, AttemptRecord, ActivityCategory } from '../types.ts';
import { ALL_SUB_ACHIEVEMENTS, LETTER_GROUPS, OBJECT_CATEGORIES, LETTER_SOUND_ACTIVITIES } from '../constants.ts';
import { createObjectChoiceRounds, fetchConceptActivityData, fetchLetterActivityData, fetchSyllableWordsForGroup, fetchFiveWOneHBySubKey } from '../services/contentService.ts';
import { shuffleArray } from '../utils.ts';
import { t, getCurrentLanguage } from '../i18n/index.ts';
import { buildDailySession, getRecommendedSessionLength } from '../services/sessionBuilder';
import { getUnlockedUnits } from '../services/masteryEngine';
import { getAllowedUnitCeiling, recordUnitAdvanced } from '../services/progressionPolicy';

interface UseActivityProps {
    activityStats: Record<string, ActivityStats>;
    setActivityStats: React.Dispatch<React.SetStateAction<Record<string, ActivityStats>>>;
    showToast: (message: string, type?: 'error' | 'info', duration?: number) => void;
    handleGoToMenu: () => void;
    enabledActivitiesSet: Set<string>;
    activeProfileId?: string | null;
    isPremium?: boolean;
}

export const useActivity = ({ activityStats, setActivityStats, showToast, handleGoToMenu, enabledActivitiesSet, activeProfileId, isPremium }: UseActivityProps) => {
    const [activityType, setActivityType] = useState<ActivityType | null>(null);
    const [activityData, setActivityData] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
    const [selectedObjectCategory, setSelectedObjectCategory] = useState<{ id: string; title: string } | null>(null);
    const [selectedActivityForLetter, setSelectedActivityForLetter] = useState<ActivityType | null>(null);
    // 5N1K category tracking (per-category stats like Kim/Ne/Nerede...)
    const [selectedFiveWOneHKey, setSelectedFiveWOneHKey] = useState<string | null>(null);
    
    // Random Mode State
    const [isRandomMode, setIsRandomMode] = useState(false);
    const [isProgramMode, setIsProgramMode] = useState(false);
    const [randomModeQueue, setRandomModeQueue] = useState<(ActivityType | string)[]>([]);
    const [currentRandomActivityIndex, setCurrentRandomActivityIndex] = useState(0);
    const [randomModeAttemptCount, setRandomModeAttemptCount] = useState<Record<string, number>>({});

    // --- Program Mode progression (per-profile) ---
    // Old 24-level system removed - now using unit-based progression with progressionPolicy service
    // Program mode now uses buildDailySession from sessionBuilder.ts with dynamic difficulty adaptation

    const resetActivityState = useCallback(() => {
        setActivityType(null);
        setActivityData([]);
        setCurrentIndex(0);
        setScore(0);
        setSelectedLetter(null);
        setSelectedGroup(null);
        setSelectedObjectCategory(null);
        setSelectedActivityForLetter(null);
        setIsRandomMode(false);
        setIsProgramMode(false);
        setRandomModeQueue([]);
        setCurrentRandomActivityIndex(0);
        setRandomModeAttemptCount({});
    }, []);

    const startSpecificRandomActivity = useCallback(async (activityId: ActivityType | string): Promise<{ success: boolean, data?: any[], type?: ActivityType | string }> => {
        const activityInfo = ALL_SUB_ACHIEVEMENTS.find(sa => String(sa.id) === String(activityId));
        if (!activityInfo) return { success: false };

        // Guard: Allow letter activities for TR + DE/AZ/EN/FR/NL (beta); block others in random/program flows
        const lang = getCurrentLanguage();
        if (activityInfo.category === ActivityCategory.LetterSound) {
            const allowed = new Set(['tr','de','az','en','fr','nl']);
            if (!allowed.has(lang)) return { success: false };
        }

    let fetchedData: any[] = [];
            // Program & random mod: her etkinlik çağrısında hedef soru sayısı = 6
            // İçerik servisleri count paramıyla soruları azaltabilir (yetersiz havuz durumunda)
            const randomCount = 6;
        
        try {
            switch (activityInfo.category) {
                case ActivityCategory.LetterSound: {
                    const activityType = activityInfo.id as ActivityType;
                    if (activityType === ActivityType.Syllabification) {
                        const randomGroup = Math.floor(Math.random() * 5) + 1;
                        fetchedData = await fetchSyllableWordsForGroup(randomGroup, randomCount);
                        if (fetchedData.length > 0) setSelectedGroup(randomGroup);
                    } else {
                        const allLetters = LETTER_GROUPS.flatMap(g => g.letters);
                        const randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
                        fetchedData = await fetchLetterActivityData(activityType, randomLetter, randomCount);
                        if (fetchedData.length > 0) {
                            setSelectedLetter(randomLetter);
                            setSelectedActivityForLetter(activityType);
                        }
                    }
                    break;
                }
                case ActivityCategory.Objects: {
                    const categoryId = String(activityInfo.id);
                    fetchedData = await createObjectChoiceRounds(categoryId, randomCount);
                    if (fetchedData.length > 0) {
                        const categoryDetails = OBJECT_CATEGORIES.find(cat => cat.id === categoryId);
                        if (categoryDetails) setSelectedObjectCategory({ id: categoryDetails.id, title: categoryDetails.title });
                    }
                    break;
                }
                case ActivityCategory.Concept: {
                    fetchedData = await fetchConceptActivityData(activityInfo.id as ActivityType, activityStats, randomCount, isPremium);
                    break;
                }
                case ActivityCategory.Reasoning: {
                    // Special handling for 5W1H sub-IDs (string IDs)
                    if (String(activityInfo.id).startsWith('FiveWOneH_')) {
                        const subKey = String(activityInfo.id);
                        fetchedData = await fetchFiveWOneHBySubKey(subKey, randomCount);
                    } else {
                        fetchedData = await fetchConceptActivityData(activityInfo.id as ActivityType, activityStats, randomCount, isPremium);
                    }
                    break;
                }
                case ActivityCategory.FineMotor: {
                    // Fine motor activities (LineTracing, ShapeColoring, RhythmFollowing) use placeholder rounds
                    // provided by fetchConceptActivityData (which returns minimal round objects).
                    fetchedData = await fetchConceptActivityData(activityInfo.id as ActivityType, activityStats, randomCount, isPremium);
                    break;
                }
                case ActivityCategory.RelativeComparison: {
                    // Experimental relative comparison rounds are delivered via fetchConceptActivityData
                    fetchedData = await fetchConceptActivityData(activityInfo.id as ActivityType, activityStats, randomCount, isPremium);
                    break;
                }
            }
        } catch (e) {
            console.error(`Error fetching data for random activity: ${String(activityId)}`, e);
        }
        
        if (fetchedData.length > 0) {
            // For 5W1H sub-IDs keep activityType as FiveWOneH for UI/back navigation but stats key uses sub-ID elsewhere
            const resolvedType = String(activityInfo.id).startsWith('FiveWOneH_') ? ActivityType.FiveWOneH : (activityInfo.id as ActivityType);
            return { success: true, data: fetchedData, type: resolvedType };
        }
        
        return { success: false };
    }, [activityStats]);

    const startNextRandomActivity = useCallback(async (queue: (ActivityType | string)[], startIndex: number) => {
        for (let i = startIndex; i < queue.length; i++) {
            const nextActivityId = queue[i];
            setCurrentRandomActivityIndex(i);
            const { success, data, type } = await startSpecificRandomActivity(nextActivityId);

            if (success && data && type) {
                // Normal start
                setActivityType(type as ActivityType);
                setActivityData(data);
                setCurrentIndex(0);
                setScore(0);
                return true; // Found an activity to start
            } else {
                // Record a skipped attempt so early progress can reflect exposure
                setActivityStats(prev => {
                    const key = String(nextActivityId);
                    const current = prev[key] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0, history: [] };
                    const newRecord: AttemptRecord = { timestamp: Date.now(), score: 0, total: 0, mode: isProgramMode ? 'program' : 'free' };
                    return {
                        ...prev,
                        [key]: {
                            ...current,
                            attempts: (current.attempts || 0) + 1,
                            history: [...(current.history || []), newRecord].slice(-10)
                        }
                    };
                });
                console.warn(`No data for activity ${String(nextActivityId)}; recorded skipped attempt.`);
            }
        }
        return false; // No more activities in the queue
    }, [startSpecificRandomActivity, setActivityStats, isProgramMode]);
    
    const handleStartRandomMode = useCallback(async () => {
        const lang = getCurrentLanguage();
        const availableToPlay = ALL_SUB_ACHIEVEMENTS
            .filter(sa => enabledActivitiesSet.has(String(sa.id)) && sa.id !== ActivityType.EmbeddedStory)
            // Guard: allow letter activities for tr/de/az/en/fr/nl only
            .filter(sa => {
                if (sa.category !== ActivityCategory.LetterSound) return true;
                const allowed = new Set(['tr','de','az','en','fr','nl']);
                return allowed.has(lang);
            });

        if (availableToPlay.length === 0) {
            showToast("Rastgele mod için hiç etkinlik seçilmemiş. Lütfen ayarlardan etkinlikleri etkinleştirin.", 'info');
            return false;
        }

        const shuffledQueue = shuffleArray(availableToPlay.map(sa => sa.id));
        setRandomModeQueue(shuffledQueue);
        setCurrentRandomActivityIndex(0);
        setRandomModeAttemptCount({});
    setIsRandomMode(true);
    setIsProgramMode(false);
        
        const started = await startNextRandomActivity(shuffledQueue, 0);
        if (!started) {
            showToast("Rastgele mod için uygun etkinlik bulunamadı.", 'info');
            handleGoToMenu();
            return false;
        }
        return true;
    }, [enabledActivitiesSet, showToast, startNextRandomActivity, handleGoToMenu]);

    // Program Mode (experimental): curated sequence, independent of enabledActivitiesSet
    const handleStartProgramMode = useCallback(async () => {
        // Build session using new unit-based system with daily ceiling
        const sessionLength = getRecommendedSessionLength(
            Object.keys(activityStats).filter(id => activityStats[id]?.completions > 0).length
        );
        const masteredObjectCategories = new Set<string>(); // TODO: derive from stats if needed
        const unlockedUnits = getUnlockedUnits(activityStats, masteredObjectCategories);
        const ceiling = activeProfileId ? getAllowedUnitCeiling(activeProfileId, unlockedUnits) : undefined;
        
        const parentOverrides = activeProfileId ? JSON.parse(window.localStorage.getItem(`parentOverrides_profile_${activeProfileId}`) || '[]') : undefined;
        const session = buildDailySession(
            activityStats,
            masteredObjectCategories,
            undefined,
            sessionLength,
            isPremium ? undefined : ceiling,
            parentOverrides
        );
        
        if (session.activities.length === 0) {
            showToast('Program modu için uygun içerik bulunamadı.', 'info');
            handleGoToMenu();
            return false;
        }

        const PROGRAM_QUEUE = session.activities.map(a => a.activityId);
        setRandomModeQueue(PROGRAM_QUEUE);
        setCurrentRandomActivityIndex(0);
        setRandomModeAttemptCount({});
        setIsRandomMode(true);
        setIsProgramMode(true);

        const started = await startNextRandomActivity(PROGRAM_QUEUE, 0);
        if (!started) {
            showToast('Program modu için uygun içerik bulunamadı.', 'info');
            handleGoToMenu();
            return false;
        }
        return true;
    }, [showToast, startNextRandomActivity, handleGoToMenu, activityStats, activeProfileId]);

    const handleAdvance = useCallback(async (isCorrect: boolean) => {
        const newScore = isCorrect ? score + 1 : score;
        if (isCorrect) setScore(newScore);

        if (currentIndex + 1 >= activityData.length) {
            // FINISH ACTIVITY LOGIC
            const finalScore = newScore;
            const totalQuestions = activityData.length;
            
            let genericKey: string | null = null;
            let specificKey: string | null = null;

            // In random/program mode, use the queue ID directly (it's already the correct granular ID)
            if (isRandomMode) {
                genericKey = String(randomModeQueue[currentRandomActivityIndex]);
                specificKey = null;
            } else {
                // In free mode, determine key based on activity type and context
                if (activityType && LETTER_SOUND_ACTIVITIES.includes(activityType) && selectedLetter) {
                    genericKey = String(activityType);
                    specificKey = `${activityType}-${selectedLetter}`;
                } else if (activityType === ActivityType.Syllabification && selectedGroup !== null) {
                    genericKey = String(activityType);
                    specificKey = `${activityType}-${selectedGroup}`;
                } else if (activityType === ActivityType.ObjectRecognition && selectedObjectCategory) {
                    genericKey = selectedObjectCategory.id;
                } else if (activityType === ActivityType.FiveWOneH && selectedFiveWOneHKey) {
                    // Record under the selected 5N1K sub-key (e.g., FiveWOneH_Who)
                    genericKey = selectedFiveWOneHKey;
                } else if (activityType !== null) {
                    genericKey = String(activityType);
                }
            }

            if (genericKey) {
                const newRecord: AttemptRecord = { timestamp: Date.now(), score: finalScore, total: totalQuestions, mode: isProgramMode ? 'program' : 'free' };
                
                // Check units before stats update (for detecting new unlocks)
                const emptyMasteredCats = new Set<string>();
                const previousUnlockedUnits = getUnlockedUnits(activityStats, emptyMasteredCats);
                
                setActivityStats(prev => {
                    const updatedStats = { ...prev };
                    const isComplete = finalScore === totalQuestions;
                    
                    const updateStats = (key: string, isGeneric: boolean) => {
                        const current = updatedStats[key] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0, history: [] };
                        updatedStats[key] = {
                            ...current,
                            attempts: isGeneric ? current.attempts : (current.attempts || 0) + 1,
                            completions: isComplete && !isGeneric ? (current.completions || 0) + 1 : (current.completions || 0),
                            totalCorrect: (current.totalCorrect || 0) + finalScore,
                            totalQuestions: (current.totalQuestions || 0) + totalQuestions,
                             history: [...(current.history || []), newRecord].slice(-10)
                        };
                    };
                    
                    if (specificKey) {
                        updateStats(specificKey, false);
                        if (genericKey) {
                           const generic = updatedStats[genericKey] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0, history: [] };
                            updatedStats[genericKey] = {
                                ...generic,
                                totalCorrect: (generic.totalCorrect || 0) + finalScore,
                                totalQuestions: (generic.totalQuestions || 0) + totalQuestions,
                            };
                        }
                    } else {
                        updateStats(genericKey!, false);
                    }
                    
                    // Check if new unit unlocked after this activity (Program Mode only)
                    if (isProgramMode && activeProfileId) {
                        const currentUnlockedUnits = getUnlockedUnits(updatedStats, emptyMasteredCats);
                        
                        // Find newly unlocked units
                        currentUnlockedUnits.forEach(unitNum => {
                            if (!previousUnlockedUnits.has(unitNum)) {
                                console.log(`[Unit Advancement] New unit unlocked: ${unitNum}`);
                                recordUnitAdvanced(activeProfileId, unitNum);
                            }
                        });
                    }
                    
                    return updatedStats;
                });
            }
            
            if (isRandomMode) {
                const currentActivity = randomModeQueue[currentRandomActivityIndex];
                const attempts = (randomModeAttemptCount[String(currentActivity)] || 0) + 1;
                setRandomModeAttemptCount(prev => ({ ...prev, [String(currentActivity)]: attempts }));

                const successRate = totalQuestions > 0 ? (finalScore / totalQuestions) : 0;
                if (successRate < 0.75 && attempts < 2) {
                    showToast("Bu konuyu biraz daha pekiştirelim!", 'info');
                    const { success, data, type } = await startSpecificRandomActivity(currentActivity);
                    if (success && data && type) {
                        setActivityType(type as ActivityType);
                        setActivityData(data);
                        setCurrentIndex(0);
                        setScore(0);
                    } else {
                        handleGoToMenu();
                    }
                } else {
                     const hasNext = await startNextRandomActivity(randomModeQueue, currentRandomActivityIndex + 1);
                     if (!hasNext) {
                        if (isProgramMode) {
                            showToast(t('programMode.completed', 'Program mode finished! Great job.'), 'info');
                        } else {
                            showToast("Rastgele mod tamamlandı! Harika iş.", 'info');
                        }
                        handleGoToMenu();
                     }
                }
            } else {
                return 'finished'; // Signal to core hook to change screen
            }
        } else {
            setCurrentIndex(prev => prev + 1);
        }
        return 'advanced';
    }, [score, currentIndex, activityData.length, activityType, selectedLetter, selectedGroup, selectedObjectCategory, isRandomMode, randomModeQueue, currentRandomActivityIndex, setActivityStats, handleGoToMenu, showToast, startNextRandomActivity, startSpecificRandomActivity, randomModeAttemptCount]);

    return {
        activityType,
        setActivityType,
        activityData,
        setActivityData,
        currentIndex,
        setCurrentIndex,
        score,
        setScore,
        selectedLetter,
        setSelectedLetter,
        selectedGroup,
        setSelectedGroup,
        selectedObjectCategory,
        setSelectedObjectCategory,
        selectedActivityForLetter,
        setSelectedActivityForLetter,
        selectedFiveWOneHKey,
        setSelectedFiveWOneHKey,
        isRandomMode,
        isProgramMode,
        resetActivityState,
        handleAdvance,
        handleStartRandomMode,
        handleStartProgramMode,
        randomModeQueue,
        currentRandomActivityIndex,
        startSpecificRandomActivity,
    };
};