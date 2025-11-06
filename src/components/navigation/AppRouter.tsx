import { lazy, useCallback, useMemo, useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext.ts';
import { ScreenState, ActivityType, ActivityCategory } from '../../types.ts';
import Spinner from '../Spinner.tsx';
import { OBJECT_CATEGORIES, OBJECTS_INTL_ORDER, LETTER_SOUND_ACTIVITIES, CONCEPT_ACTIVITIES, REASONING_ACTIVITIES, OBJECT_RECOGNITION_ACTIVITIES } from '../../constants.ts';
import { t, getCurrentLanguage } from '../../i18n/index.ts';

// Lazy load all screens
const ProfileSelectionScreen = lazy(() => import('../ProfileSelectionScreen.tsx'));
const MainMenuScreen = lazy(() => import('../MainMenuScreen.tsx'));
const CommunicationCardMenuScreen = lazy(() => import('../CommunicationCardMenuScreen.tsx'));
const LetterSelectionScreen = lazy(() => import('../LetterSelectionScreen.tsx'));
const GroupSelectionScreen = lazy(() => import('../GroupSelectionScreen.tsx'));
const SyllableCard = lazy(() => import('../SyllableCard.tsx'));
const LetterGridScreen = lazy(() => import('../LetterGridScreen.tsx'));
const CompletionScreen = lazy(() => import('../CompletionScreen.tsx'));
const SoundInImageScreen = lazy(() => import('../SoundInImageScreen.tsx'));
const StoryScreen = lazy(() => import('../StoryScreen.tsx'));
const ConceptLearningScreen = lazy(() => import('../ConceptLearningScreen.tsx'));
const SettingsScreen = lazy(() => import('../SettingsScreen.tsx'));
const ConceptChoiceScreen = lazy(() => import('../ConceptChoiceScreen.tsx'));
const ConceptActivitiesMenuScreen = lazy(() => import('../ConceptActivitiesMenuScreen.tsx'));
const ReasoningActivitiesMenuScreen = lazy(() => import('../ReasoningActivitiesMenuScreen.tsx'));
const SudokuScreen = lazy(() => import('../SudokuScreen.tsx'));
const PatternCompletionScreen = lazy(() => import('../PatternCompletionScreen.tsx'));
const MemoryCardsScreen = lazy(() => import('../MemoryCardsScreen.tsx'));
const PrivacyPolicyScreen = lazy(() => import('../PrivacyPolicyScreen.tsx'));
const AchievementsScreen = lazy(() => import('../AchievementsScreen.tsx'));
const ParentReportScreen = lazy(() => import('../ParentReportScreen.tsx'));
const BannedImagesScreen = lazy(() => import('../BannedImagesScreen.tsx'));
const CommunicationCardDetailScreen = lazy(() => import('../CommunicationCardDetailScreen.tsx'));
const ObjectCategoriesMenuScreen = lazy(() => import('../ObjectCategoriesMenuScreen.tsx'));
const SequencingStoryScreen = lazy(() => import('../SequencingStoryScreen.tsx'));
const LetterActivitiesMenuScreen = lazy(() => import('../LetterActivitiesMenuScreen.tsx'));
const LearningCard = lazy(() => import('../LearningCard.tsx'));
const DragAndDropCountingScreen = lazy(() => import('../DragAndDropCountingScreen.tsx'));
const DragAndDropPositioningScreen = lazy(() => import('../DragAndDropPositioningScreen.tsx'));
const LineTracingScreen = lazy(() => import('../LineTracingScreen.tsx'));
const ShapeColoringScreen = lazy(() => import('../ShapeColoringScreen.tsx'));
const RhythmFollowingScreen = lazy(() => import('../RhythmFollowingScreen.tsx'));
const CommunicationSubCategoryScreen = lazy(() => import('../CommunicationSubCategoryScreen.tsx'));
const ParentTipsScreen = lazy(() => import('../ParentTipsScreen.tsx'));
const ActivityManagementScreen = lazy(() => import('../ActivityManagementScreen.tsx'));
const PrintPreviewScreen = lazy(() => import('../PrintPreviewScreen.tsx'));
const PrintPoolScreen = lazy(() => import('../PrintPoolScreen.tsx'));
const PrintSelectionDetailScreen = lazy(() => import('../PrintSelectionDetailScreen.tsx'));
const FineMotorActivitiesMenuScreen = lazy(() => import('../FineMotorActivitiesMenuScreen.tsx'));
const RelativeComparisonActivitiesMenuScreen = lazy(() => import('../RelativeComparisonActivitiesMenuScreen.tsx'));
const RelativeComparisonActivity = lazy(() => (import('../RelativeComparisonActivity.tsx') as any));
const ProgramModeIntroScreen = lazy(() => import('../ProgramModeIntroScreen.tsx'));
const FiveWOneHMenuScreen = lazy(() => import('../FiveWOneHMenuScreen.tsx'));

export const AppRouter = () => {
    const ctx = useAppContext();
    const { screenState, setScreenState, setPreviousScreen, handleGoToMenu } = ctx;
    const [relativeComparisonRounds, setRelativeComparisonRounds] = useState<any[]>([]);

    // Lightweight local helpers to avoid importing heavy content service on initial load
    const getActivityCategoryLocal = (activity: ActivityType | string): ActivityCategory | null => {
        if (typeof activity === 'string') {
            // Object categories are tracked as strings in ALL_SUB_ACHIEVEMENTS; treat them as Objects
            return ActivityCategory.Objects;
        }
        if (LETTER_SOUND_ACTIVITIES.includes(activity)) return ActivityCategory.LetterSound;
        if (CONCEPT_ACTIVITIES.includes(activity)) return ActivityCategory.Concept;
        if (REASONING_ACTIVITIES.includes(activity)) return ActivityCategory.Reasoning;
        if (OBJECT_RECOGNITION_ACTIVITIES.includes(activity)) return ActivityCategory.Objects;
        return ActivityCategory.Concept;
    };

    const getActivityUiConfigLocal = (activityType: ActivityType | null): { backScreen: ScreenState; backButtonText: string } => {
        if (activityType === null) return { backScreen: ScreenState.MainMenu, backButtonText: 'Etkinlik Menüsüne Dön' };
        if (activityType === ActivityType.FiveWOneH) return { backScreen: ScreenState.MainMenu, backButtonText: 'Ana Menüye Dön' };
        if (activityType === ActivityType.Syllabification) return { backScreen: ScreenState.GroupSelection, backButtonText: 'Grup Seçimine Dön' };
        if (LETTER_SOUND_ACTIVITIES.includes(activityType)) return { backScreen: ScreenState.LetterSelection, backButtonText: 'Harf Seçimine Dön' };
        if (CONCEPT_ACTIVITIES.includes(activityType)) return { backScreen: ScreenState.ConceptActivitiesMenu, backButtonText: 'Kavram Menüsüne Dön' };
        if (REASONING_ACTIVITIES.includes(activityType)) return { backScreen: ScreenState.ReasoningActivitiesMenu, backButtonText: 'Oyun Menüsüne Dön' };
        if (OBJECT_RECOGNITION_ACTIVITIES.includes(activityType)) return { backScreen: ScreenState.ObjectCategoriesMenu, backButtonText: 'Nesne Menüsüne Dön' };
    if (activityType === ActivityType.LineTracing || activityType === ActivityType.ShapeColoring || activityType === ActivityType.RhythmFollowing) return { backScreen: ScreenState.FineMotorMenu, backButtonText: t('menu.fineMotor.backButton', 'İnce Motor Menüsüne Dön') };
        return { backScreen: ScreenState.MainMenu, backButtonText: 'Etkinlik Menüsüne Dön' };
    };

    useEffect(() => {
        if (screenState === ScreenState.RelativeComparisonMenu && relativeComparisonRounds.length === 0) {
            const loadRounds = async () => {
                try {
                    const mod = (await import('../../data/experimental/relative_concepts.json')) as any;
                    const payload = mod.default ?? mod;
                    const loadedRounds = payload?.rounds ?? [];
                    setRelativeComparisonRounds(loadedRounds);
                } catch (e) {
                    console.error('Could not load relative comparison data', e);
                    ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'), 'error');
                    handleGoToMenu();
                }
            };
            loadRounds();
        }
    }, [screenState, relativeComparisonRounds.length, handleGoToMenu, ctx.toast]);
    
    // Build a flattened list of object categories (roots + subcategories)
    const flattenedObjectCategories = useMemo(() => {
        const flat: Array<{ id: string; title: string; imageId?: number }> = [];
        for (const c of OBJECT_CATEGORIES) {
            flat.push({ id: c.id, title: c.title as string, imageId: (c as any).imageId });
            if (Array.isArray((c as any).subcategories)) {
                for (const s of (c as any).subcategories) {
                    flat.push({ id: s.id, title: s.title as string, imageId: s.imageId });
                }
            }
        }
        return flat;
    }, []);
    const resolveObjectCategory = useCallback((categoryId: string) => {
        for (const category of OBJECT_CATEGORIES) {
            if (category.id === categoryId) {
                return { id: category.id, title: category.title };
            }
            if (Array.isArray((category as any).subcategories)) {
                const sub = (category as any).subcategories.find((s: any) => s.id === categoryId);
                if (sub) {
                    return { id: sub.id, title: sub.title };
                }
            }
        }
        return null;
    }, []);

    const renderPlayingScreen = () => {
        const { activityData, currentIndex, activityType } = ctx.activity;
        if (!activityData || activityData.length === 0 || currentIndex >= activityData.length) {
            return <MainMenuScreen onSelectCategory={() => {}} onStartRandomMode={ctx.activity.handleStartRandomMode} onSelectParentTips={() => setScreenState(ScreenState.ParentTips)} onSelectSettings={() => setScreenState(ScreenState.Settings)} theme={ctx.settings.theme}/>; // Fallback
        }

        const currentData = activityData[currentIndex];
        const commonProps = {
            currentCard: currentIndex + 1,
            totalCards: activityData.length,
            isAutoSpeakEnabled: ctx.settings.isAutoSpeakEnabled,
            onAdvance: ctx.activity.handleAdvance,
        };

        // Overlay badge for Program Mode session progress
        const renderProgramModeOverlay = () => {
            if (!ctx.activity.isProgramMode) return null;
            const step = (ctx.activity.currentRandomActivityIndex || 0) + 1;
            const total = ctx.activity.randomModeQueue.length || 0;
            const round = commonProps.currentCard;
            const roundTotal = commonProps.totalCards;
            return (
                <div className="fixed top-2 right-2 z-50 flex flex-col items-end gap-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm border border-emerald-200">
                        <span>🎯 {t('programMode.badge', 'Program Modu')}</span>
                        <span>•</span>
                        <span>{t('programMode.progress.activity', 'Etkinlik {current}/{total}').replace('{current}', String(step)).replace('{total}', String(total))}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                        <span>{t('programMode.progress.round', 'Tur {current}/{total}').replace('{current}', String(round)).replace('{total}', String(roundTotal))}</span>
                    </div>
                </div>
            );
        };

    const onBackToConcept = () => setScreenState(ScreenState.ConceptActivitiesMenu);
        const onBackToReasoning = () => setScreenState(ScreenState.ReasoningActivitiesMenu);
    const onBackToFineMotor = () => setScreenState(ScreenState.FineMotorMenu);
        const onBackToLetterSelection = () => setScreenState(ScreenState.LetterSelection);

        switch (activityType) {
            case ActivityType.Syllabification:
                return <>
                    {renderProgramModeOverlay()}
                    <SyllableCard word={currentData} {...commonProps} onBack={() => setScreenState(ScreenState.GroupSelection)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />
                </>;
            case ActivityType.FindTheLetterInGrid:
                return <>
                    {renderProgramModeOverlay()}
                    <LetterGridScreen letter={ctx.activity.selectedLetter!} {...commonProps} onBack={onBackToLetterSelection} />
                </>;
            case ActivityType.FindTheLetter:
                return <>
                    {renderProgramModeOverlay()}
                    <LearningCard word={currentData} letter={ctx.activity.selectedLetter!} activityType={activityType} {...commonProps} onBack={onBackToLetterSelection} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />
                </>;
            case ActivityType.FindTheSoundInImage:
                      return <>
                          {renderProgramModeOverlay()}
                          <SoundInImageScreen roundData={currentData} letter={ctx.activity.selectedLetter!} {...commonProps} onBack={onBackToLetterSelection} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />
                      </>;
            case ActivityType.EmbeddedStory:
                return <StoryScreen stories={activityData} letter={ctx.activity.selectedLetter!} onBack={onBackToLetterSelection} onGoToMenu={handleGoToMenu} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} />;
          case ActivityType.SoundPresence:
          case ActivityType.YesNo:
              const backScreen = getActivityUiConfigLocal(activityType).backScreen;
                 const onBackHandler = backScreen === ScreenState.LetterSelection ? onBackToLetterSelection : onBackToConcept;
                      return <>
                          {renderProgramModeOverlay()}
                          <ConceptLearningScreen word={currentData} letter={ctx.activity.selectedLetter || undefined} activityType={activityType} {...commonProps} onBack={onBackHandler} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />
                      </>;
            case ActivityType.Sudoku:
                return <>
                    {renderProgramModeOverlay()}
                    <SudokuScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />
                </>;
            case ActivityType.PatternCompletion:
                return <>
                    {renderProgramModeOverlay()}
                    <PatternCompletionScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />
                </>;
            case ActivityType.MemoryCards:
                      return <>
                          {renderProgramModeOverlay()}
                          <MemoryCardsScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} onToggleAutoSpeak={ctx.settings.handleToggleAutoSpeak} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />
                      </>;
            case ActivityType.SequencingStories:
                return <>
                    {renderProgramModeOverlay()}
                    <SequencingStoryScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />
                </>;
            case ActivityType.DragAndDropCounting:
                return <>
                    {renderProgramModeOverlay()}
                    <DragAndDropCountingScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />
                </>;
            case ActivityType.DragAndDropPositioning:
                return <>
                    {renderProgramModeOverlay()}
                    <DragAndDropPositioningScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} />
                </>;
            case ActivityType.LineTracing:
                return <>
                    {renderProgramModeOverlay()}
                    <LineTracingScreen {...commonProps} onBack={onBackToFineMotor} />
                </>;
            case ActivityType.ShapeColoring:
                return <>
                    {renderProgramModeOverlay()}
                    <ShapeColoringScreen {...commonProps} onBack={onBackToFineMotor} />
                </>;
            case ActivityType.RhythmFollowing:
                return <>
                    {renderProgramModeOverlay()}
                    <RhythmFollowingScreen {...commonProps} onBack={onBackToFineMotor} />
                </>;
            
            case ActivityType.RelativeBigSmall:
            case ActivityType.RelativeWideNarrow:
            case ActivityType.RelativeThinThick:
            case ActivityType.RelativeFewMuch:
            case ActivityType.RelativeLongShort:
            case ActivityType.RelativeNearFar:
            case ActivityType.RelativeHighLow:
                return <>
                    {renderProgramModeOverlay()}
                    <RelativeComparisonActivity data={currentData as any} activityType={activityType} {...commonProps} onBack={() => setScreenState(ScreenState.RelativeComparisonActivitiesMenu)} />
                </>;
            default:
                if (currentData.options) {
                    const category = getActivityCategoryLocal(currentData.activityType);
                    const colorMap: Record<ActivityCategory, 'teal' | 'indigo' | 'amber' | 'emerald'> = {
                        [ActivityCategory.Concept]: 'teal',
                        [ActivityCategory.Reasoning]: 'indigo',
                        [ActivityCategory.Objects]: 'amber',
                        [ActivityCategory.FiveWOneH]: 'emerald',
                        // Fallbacks for categories that might appear in future mappings
                        [ActivityCategory.LetterSound]: 'teal',
                        [ActivityCategory.FineMotor]: 'indigo',
                        [ActivityCategory.RelativeComparison]: 'amber',
                    };
                    const themeColor = category ? colorMap[category] : 'teal';
                    const onBackDefault = currentData.activityType === ActivityType.FiveWOneH
                        ? () => setScreenState(ScreenState.MainMenu)
                        : category === ActivityCategory.Concept 
                            ? onBackToConcept 
                            : category === ActivityCategory.Reasoning 
                                ? onBackToReasoning 
                                : () => setScreenState(ctx.previousScreen === ScreenState.ObjectCategoriesIntlMenu ? ScreenState.ObjectCategoriesIntlMenu : ScreenState.ObjectCategoriesMenu);
                    return <>
                        {renderProgramModeOverlay()}
                        <ConceptChoiceScreen roundData={currentData} themeColor={themeColor} {...commonProps} onBack={onBackDefault} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />
                    </>;
                }
        }
        return null;
    };

    switch (screenState) {
        case ScreenState.Loading: return <div className="flex items-center justify-center h-full w-full"><Spinner /></div>;
        
        case ScreenState.ProfileSelection: return <ProfileSelectionScreen profiles={ctx.profile.profiles} onSelectProfile={(p) => { ctx.profile.handleSelectProfile(p); setScreenState(ScreenState.MainMenu); }} onCreateProfile={(n, a) => { ctx.profile.handleCreateProfile(n, a); setScreenState(ScreenState.MainMenu); }} onBack={() => setScreenState(ScreenState.MainMenu)} />;
        
        case ScreenState.MainMenu: return <MainMenuScreen 
            onSelectCategory={async (category) => {
                if (category === 'letterSound') {
                    const lang = getCurrentLanguage();
                    if (lang !== 'tr') {
                        ctx.toast.showToast(t('settings.languageNote', 'Letter activities are currently Turkish-only.'), 'info');
                        return;
                    }
                    setScreenState(ScreenState.LetterActivitiesMenu);
                }
                if (category === 'objectCategories') setScreenState(ScreenState.ObjectCategoriesMenu);
                if (category === 'objectCategoriesIntl') setScreenState(ScreenState.ObjectCategoriesIntlMenu);
                if (category === 'conceptActivities') setScreenState(ScreenState.ConceptActivitiesMenu);
                if (category === 'reasoningActivities') setScreenState(ScreenState.ReasoningActivitiesMenu);
                if (category === 'fiveWOneH') {
                    ctx.activity.setActivityType(ActivityType.FiveWOneH);
                    setScreenState(ScreenState.FiveWOneHMenu);
                }
                if (category === 'fineMotor') setScreenState(ScreenState.FineMotorMenu);
                if (category === 'programMode') setScreenState(ScreenState.ProgramIntro);
                                    if (category === 'relativeComparison') {
                    setScreenState(ScreenState.RelativeComparisonActivitiesMenu);
                }
            }} 
            onStartRandomMode={async () => {
                setScreenState(ScreenState.Loading);
                const started = await ctx.activity.handleStartRandomMode();
                if (started) setScreenState(ScreenState.Playing);
                else setScreenState(ScreenState.MainMenu);
            }}
            onSelectParentTips={() => setScreenState(ScreenState.ParentTips)}
            onSelectSettings={() => setScreenState(ScreenState.Settings)}
            theme={ctx.settings.theme}
        />;
        
        // Activity Flows
        case ScreenState.FiveWOneHMenu: {
            return <FiveWOneHMenuScreen 
                onSelectCategory={async (cat) => {
                    const toId = (c: string) => c === 'Kim' ? 'FiveWOneH_Who' 
                        : c === 'Ne' ? 'FiveWOneH_What' 
                        : c === 'Nerede' ? 'FiveWOneH_Where' 
                        : c === 'Ne Zaman' ? 'FiveWOneH_When' 
                        : c === 'Neden' ? 'FiveWOneH_Why' 
                        : c === 'Nasıl' ? 'FiveWOneH_How' 
                        : null;

                    const subKey = toId(String(cat));
                    // Track attempts only for specific categories (not for Mixed)
                    if (subKey) {
                        ctx.profile.updateActivityAttempt(subKey);
                    }
                    // Persist selected 5N1K category for per-category stat tracking
                    ctx.activity.setSelectedFiveWOneHKey(subKey);

                    setScreenState(ScreenState.Loading);
                    const { fetchConceptActivityData } = await import('../../services/contentService.ts');
                    const base = await fetchConceptActivityData(ActivityType.FiveWOneH, ctx.profile.activityStats);

                    let data = base;
                    if (cat !== 'Karışık') {
                        const { filterFiveWOneHByCategory } = await import('../../services/database/activities/reasoning/fiveWOneHBatch50');
                        data = filterFiveWOneHByCategory(base as any, cat as any) as any;
                    }

                    if (data.length > 0) {
                        ctx.activity.setActivityData(data);
                        ctx.activity.setCurrentIndex(0);
                        ctx.activity.setScore(0);
                        setScreenState(ScreenState.Playing);
                    } else {
                        ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'), 'info');
                        setScreenState(ScreenState.FiveWOneHMenu);
                    }
                }}
                onBack={() => { ctx.activity.setSelectedFiveWOneHKey(null); setScreenState(ScreenState.ReasoningActivitiesMenu); }}
            />;
        }
        case ScreenState.LetterActivitiesMenu: {
            const lang = getCurrentLanguage();
            if (lang !== 'tr') {
                ctx.toast.showToast(t('settings.languageNote', 'Letter activities are currently Turkish-only.'), 'info');
                setScreenState(ScreenState.MainMenu);
                return <MainMenuScreen onSelectCategory={() => {}} onStartRandomMode={ctx.activity.handleStartRandomMode} onSelectParentTips={() => setScreenState(ScreenState.ParentTips)} onSelectSettings={() => setScreenState(ScreenState.Settings)} theme={ctx.settings.theme}/>;
            }
            return <LetterActivitiesMenuScreen onSelectActivity={(act) => {
            if (act === ActivityType.Syllabification) {
                ctx.activity.setActivityType(ActivityType.Syllabification);
                setScreenState(ScreenState.GroupSelection);
            } else {
                ctx.activity.setSelectedActivityForLetter(act);
                setScreenState(ScreenState.LetterSelection);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;
        }
        
        case ScreenState.LetterSelection: {
            const lang = getCurrentLanguage();
            if (lang !== 'tr') {
                ctx.toast.showToast(t('settings.languageNote', 'Letter activities are currently Turkish-only.'), 'info');
                setScreenState(ScreenState.MainMenu);
                return <MainMenuScreen onSelectCategory={() => {}} onStartRandomMode={ctx.activity.handleStartRandomMode} onSelectParentTips={() => setScreenState(ScreenState.ParentTips)} onSelectSettings={() => setScreenState(ScreenState.Settings)} theme={ctx.settings.theme} />;
            }
            return <LetterSelectionScreen onSelectLetter={ctx.activity.handleStartActivityWithLetter} onBack={() => setScreenState(ScreenState.LetterActivitiesMenu)} activityType={ctx.activity.selectedActivityForLetter} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} />;
        }
        
        case ScreenState.GroupSelection: {
            const lang = getCurrentLanguage();
            if (lang !== 'tr') {
                ctx.toast.showToast(t('settings.languageNote', 'Letter activities are currently Turkish-only.'), 'info');
                setScreenState(ScreenState.MainMenu);
                return <MainMenuScreen onSelectCategory={() => {}} onStartRandomMode={ctx.activity.handleStartRandomMode} onSelectParentTips={() => setScreenState(ScreenState.ParentTips)} onSelectSettings={() => setScreenState(ScreenState.Settings)} theme={ctx.settings.theme} />;
            }
            return <GroupSelectionScreen onSelectGroup={async (groupNumber) => {
            ctx.profile.updateActivityAttempt(`${ActivityType.Syllabification}-${groupNumber}`);
            ctx.profile.updateActivityAttempt(String(ActivityType.Syllabification));
            ctx.activity.setSelectedGroup(groupNumber);
            ctx.activity.setActivityType(ActivityType.Syllabification);
            setScreenState(ScreenState.Loading);
            const { fetchSyllableWordsForGroup } = await import('../../services/contentService.ts');
            const data = await fetchSyllableWordsForGroup(groupNumber);
            if (data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('letters.noWordsForGroup', 'No words found for this group.'));
                setScreenState(ScreenState.GroupSelection);
            }
        }} onBack={() => setScreenState(ScreenState.LetterActivitiesMenu)} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme}/>;
        }
      
        case ScreenState.ObjectCategoriesMenu: return <ObjectCategoriesMenuScreen onSelectCategory={async (catId) => {
            ctx.profile.updateActivityAttempt(catId);
            const catInfo = resolveObjectCategory(catId);
            if (catInfo) ctx.activity.setSelectedObjectCategory(catInfo);
            setPreviousScreen(ScreenState.ObjectCategoriesMenu);
            setScreenState(ScreenState.Loading);
            ctx.activity.setActivityType(ActivityType.ObjectRecognition);
            const { createObjectChoiceRounds } = await import('../../services/contentService.ts');
            const data = await createObjectChoiceRounds(catId);
            if (data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('objects.noTestForCategory', 'Could not create a test for this category.'));
                setScreenState(ScreenState.ObjectCategoriesMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet} onAddCategoryToPrintPool={(catId, color) => {
            if (!ctx.settings.isPremium) { ctx.toast.showPremiumToast(); return; }
            const resolved = resolveObjectCategory(String(catId));
            ctx.print.setCategoryForPrintSelection({ id: String(catId), title: String(resolved?.title || ''), color: String(color) });
            setPreviousScreen(screenState);
            setScreenState(ScreenState.PrintSelectionDetail);
        }} isPremium={ctx.settings.isPremium} />;

        case ScreenState.ObjectCategoriesIntlMenu: {
            // Only show a subset that has curated EN datasets for now, in a fixed logical order
            // Use canonical order from constants (derived from Turkish OBJECT_CATEGORIES)
            const orderedIds = OBJECTS_INTL_ORDER;

            // Build a lookup for categories by id and also a normalized lookup to match singular/plural
            const catsById = new Map(flattenedObjectCategories.map(c => [c.id, c] as const));
            const normalize = (s?: string) => {
                const str = (s || '').toString().toLowerCase();
                const charMap: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' };
                return str
                    .replace(/[\s_-]+/g, '')
                    .replace(/[çğıöşü]/g, (ch) => (charMap[ch as string] || ch))
                    .replace(/(lar|ler)$/, '');
            };
            const normalizedMap = new Map<string, typeof flattenedObjectCategories[number]>();
            for (const c of flattenedObjectCategories) {
                normalizedMap.set(normalize(c.id), c);
                normalizedMap.set(normalize(String(c.title)), c);
            }

            const usedIds = new Set<string>();
            const intlCats: typeof flattenedObjectCategories = [];
            for (const id of orderedIds) {
                // try to find the best candidate for this ordered id
                let candidate: typeof flattenedObjectCategories[number] | undefined;
                // 1) exact id
                candidate = catsById.get(id);
                // 2) normalized id/title lookup
                if (!candidate) candidate = normalizedMap.get(normalize(id));
                // 3) plural/variant checks
                if (!candidate) {
                    const variants = [id + 'lar', id + 'ler', id.replace(/s$/,'')];
                    for (const v of variants) {
                        candidate = catsById.get(v) || normalizedMap.get(normalize(v));
                        if (candidate) break;
                    }
                }
                // 4) fuzzy title contains
                if (!candidate) {
                    const nid = normalize(id);
                    candidate = flattenedObjectCategories.find(c => normalize(String(c.title)).includes(nid));
                }

                // If we found one and it's not already used, add it.
                if (candidate && !usedIds.has(candidate.id)) {
                    intlCats.push(candidate);
                    usedIds.add(candidate.id);
                }
            }
            // Localize category titles according to current UI language using TR-first map
            const resolveTitle = (c: typeof intlCats[number]) => {
                const key = `objects.categories.${c.id}`;
                const trLookup = t(key);
                if (trLookup !== key) return trLookup;
                // Keep initial bundle small: avoid heavy translate.ts on first load.
                // Fallback to raw title for non-TR; screens that need richer translations can import lazily.
                return c.title;
            };

            const intlCatsLocalized = intlCats.map(c => ({ id: c.id, title: resolveTitle(c), imageId: c.imageId ?? 0 }));
            return <ObjectCategoriesMenuScreen 
                categoriesOverride={intlCatsLocalized}
                titleOverride={t('categories.objectsIntl.title')}
                onSelectCategory={async (catId) => {
                    ctx.profile.updateActivityAttempt(catId + '_intl');
                    const catInfo = intlCatsLocalized.find(c => c.id === catId);
                    if(catInfo) ctx.activity.setSelectedObjectCategory({ id: catInfo.id, title: catInfo.title });
                    setPreviousScreen(ScreenState.ObjectCategoriesIntlMenu);
                    setScreenState(ScreenState.Loading);
                    ctx.activity.setActivityType(ActivityType.ObjectRecognition);
                    const { createObjectChoiceRounds } = await import('../../services/contentService.ts');
                    const data = await createObjectChoiceRounds(catId);
                    if (data.length > 0) {
                        ctx.activity.setActivityData(data);
                        ctx.activity.setCurrentIndex(0);
                        ctx.activity.setScore(0);
                        setScreenState(ScreenState.Playing);
                    } else {
                        ctx.toast.showToast(t('categories.objectsIntl.noCuratedSet', 'No curated set for this category yet.'));
                        setScreenState(ScreenState.ObjectCategoriesIntlMenu);
                    }
                }} 
                onBack={handleGoToMenu} 
                activityStats={ctx.profile.activityStats} 
                theme={ctx.settings.theme} 
                enabledActivities={ctx.profile.enabledActivitiesSet} 
                onAddCategoryToPrintPool={(catId, color) => {
                    if (!ctx.settings.isPremium) { ctx.toast.showPremiumToast(); return; }
                    ctx.print.setCategoryForPrintSelection({ id: String(catId), title: String(intlCatsLocalized.find(c=>c.id === String(catId))?.title || ''), color: String(color) });
                    setPreviousScreen(screenState);
                    setScreenState(ScreenState.PrintSelectionDetail);
                }} 
                isPremium={ctx.settings.isPremium} 
            />
        }

        case ScreenState.ConceptActivitiesMenu: return <ConceptActivitiesMenuScreen onSelectActivity={async (act) => {
            ctx.profile.updateActivityAttempt(String(act));
            ctx.activity.setActivityType(act);
            setScreenState(ScreenState.Loading);
                    const { fetchConceptActivityData } = await import('../../services/contentService.ts');
                    const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'));
                setScreenState(ScreenState.ConceptActivitiesMenu);
            }
        }} onBack={handleGoToMenu} activeCategory={ctx.navigation.activeConceptTab} onSelectCategory={ctx.navigation.setActiveConceptTab} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;
      
        case ScreenState.ReasoningActivitiesMenu: return <ReasoningActivitiesMenuScreen onSelectActivity={async (act) => {
            // 5N1K has its own category selection menu
            if (act === ActivityType.FiveWOneH) {
                setScreenState(ScreenState.FiveWOneHMenu);
                return;
            }
            
            ctx.profile.updateActivityAttempt(String(act));
            ctx.activity.setActivityType(act);
            setScreenState(ScreenState.Loading);
            const { fetchConceptActivityData } = await import('../../services/contentService.ts');
            const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'));
                setScreenState(ScreenState.ReasoningActivitiesMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;

        case ScreenState.FineMotorMenu: return <FineMotorActivitiesMenuScreen onSelectActivity={async (act) => {
            ctx.profile.updateActivityAttempt(String(act));
            ctx.activity.setActivityType(act);
            setScreenState(ScreenState.Loading);
            const { fetchConceptActivityData } = await import('../../services/contentService.ts');
            const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'), 'error');
                setScreenState(ScreenState.FineMotorMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;

        case ScreenState.RelativeComparisonActivitiesMenu: return <RelativeComparisonActivitiesMenuScreen onSelectActivity={async (act) => {
            ctx.profile.updateActivityAttempt(String(act));
            ctx.activity.setActivityType(act);
            setScreenState(ScreenState.Loading);
            const { fetchConceptActivityData } = await import('../../services/contentService.ts');
            const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast(t('app.noContentForActivity', 'No content found for this activity.'));
                setScreenState(ScreenState.RelativeComparisonActivitiesMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;

        case ScreenState.ProgramIntro: return <ProgramModeIntroScreen 
            onBack={() => setScreenState(ScreenState.MainMenu)} 
            onStartProgramMode={async () => {
                setScreenState(ScreenState.Loading);
                const started = await ctx.activity.handleStartProgramMode();
                if (started) setScreenState(ScreenState.Playing);
                else setScreenState(ScreenState.MainMenu);
            }} 
            theme={ctx.settings.theme} 
            activityStats={ctx.profile.activityStats}
            masteredObjectCategories={new Set()}
            profileId={ctx.profile.activeProfile?.id || undefined}
            lastSessionDate={window.localStorage.getItem(`lastProgramSession_${ctx.profile.activeProfile?.id}`) || undefined}
        />;

        case ScreenState.Playing: return renderPlayingScreen();

        case ScreenState.Finished: return <CompletionScreen score={ctx.activity.score} total={ctx.activity.activityData.length} onGoToMenu={handleGoToMenu} onRestart={ctx.activity.handleRestartActivity} onGoBack={() => {
            if (ctx.activity.isRandomMode) {
                handleGoToMenu();
                return;
            }
            const { backScreen } = getActivityUiConfigLocal(ctx.activity.activityType);
            const resolvedBack = ctx.activity.activityType === ActivityType.ObjectRecognition && ctx.previousScreen === ScreenState.ObjectCategoriesIntlMenu 
                ? ScreenState.ObjectCategoriesIntlMenu 
                : backScreen;
            setScreenState(resolvedBack);
        }} activityType={ctx.activity.activityType} />;
        
        // Other Screens
        case ScreenState.Settings: return <SettingsScreen onBack={() => setScreenState(ScreenState.MainMenu)} isMuted={ctx.settings.isMuted} onToggleMute={ctx.settings.handleToggleMute} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} onToggleAutoSpeak={ctx.settings.handleToggleAutoSpeak} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} onToggleBanButton={ctx.settings.handleToggleBanButton} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} onToggleFastTransition={ctx.settings.handleToggleFastTransition} 
            onSelectPrivacyPolicy={() => setScreenState(ScreenState.PrivacyPolicy)} onManageBannedImages={()=>setScreenState(ScreenState.BannedImages)} isPremium={ctx.settings.isPremium} hasPurchasedPremium={ctx.settings.hasPurchasedPremium} onPurchaseMonthly={async () => {
            const success = await ctx.settings.handlePurchaseMonthly();
            if (success) setScreenState(ScreenState.Settings);
        }} onPurchaseLifetime={async () => {
            const success = await ctx.settings.handlePurchaseLifetime();
            if (success) setScreenState(ScreenState.Settings);
        }} onResetProgress={ctx.profile.handleResetProgress} theme={ctx.settings.theme} onChangeTheme={ctx.settings.onChangeTheme} activeProfile={ctx.profile.activeProfile!} onManageProfiles={() => setScreenState(ScreenState.ProfileSelection)} onManageActivities={(cat) => {
            const lang = getCurrentLanguage();
            if (cat === ActivityCategory.LetterSound && lang !== 'tr') {
                ctx.toast.showToast(t('settings.languageNote', 'Letter activities are currently Turkish-only.'), 'info');
                return;
            }
            ctx.setCategoryToManage(cat);
            setScreenState(ScreenState.ActivityManagement);
        }} showPremiumToast={ctx.toast.showPremiumToast} onSelectAchievements={() => setScreenState(ScreenState.Achievements)}
        parentOverrides={ctx.profile.parentOverrides}
        onAddParentOverride={ctx.profile.handleAddParentOverride}
        onRemoveParentOverride={ctx.profile.handleRemoveParentOverride}
        />;
        
        case ScreenState.PrivacyPolicy: return <PrivacyPolicyScreen onBack={() => setScreenState(ScreenState.Settings)} />;
        
    case ScreenState.Achievements: return <AchievementsScreen activityStats={ctx.profile.activityStats} onSelectParentReport={() => setScreenState(ScreenState.ParentReport)} onBack={() => setScreenState(ScreenState.MainMenu)} isPremium={ctx.settings.isPremium}/>;
        case ScreenState.BannedImages: return <BannedImagesScreen bannedImageIds={ctx.settings.bannedImageIds} onUnbanImage={ctx.settings.handleUnbanImage} onBack={() => setScreenState(ScreenState.Settings)} />;
        case ScreenState.ParentReport: return <ParentReportScreen activityStats={ctx.profile.activityStats} onBack={() => setScreenState(ScreenState.MainMenu)} />;
        case ScreenState.ParentTips: return <ParentTipsScreen onBack={() => setScreenState(ScreenState.MainMenu)} />;
        case ScreenState.ActivityManagement: return <ActivityManagementScreen onBack={() => setScreenState(ScreenState.Settings)} category={ctx.categoryToManage!} enabledActivities={ctx.profile.enabledActivitiesSet} onToggleActivity={ctx.profile.handleToggleActivityEnabled} onToggleCategory={ctx.profile.handleToggleCategoryEnabled} isPremium={ctx.settings.isPremium} showPremiumToast={ctx.toast.showPremiumToast} />;
        
        // Communication Flow
        case ScreenState.CommunicationMenu: return <CommunicationCardMenuScreen categories={ctx.communication.communicationCategories} onSelectCategory={(cat) => {
            ctx.communication.setSelectedCommCategory(cat);
            ctx.communication.setSelectedCommSubCategory(null);
            ctx.communication.setSentence([]);
            if (cat.subCategories) setScreenState(ScreenState.CommunicationSubCategory);
            else setScreenState(ScreenState.CommunicationDetail);
        }} onBack={handleGoToMenu} theme={ctx.settings.theme} />;

        case ScreenState.CommunicationSubCategory: return <CommunicationSubCategoryScreen category={ctx.communication.selectedCommCategory!} onSelectSubCategory={(sub) => {
            ctx.communication.setSelectedCommSubCategory(sub);
            setScreenState(ScreenState.CommunicationDetail);
        }} onBack={() => setScreenState(ScreenState.CommunicationMenu)} />;

        case ScreenState.CommunicationDetail: return <CommunicationCardDetailScreen categoryTitle={ctx.communication.selectedCommSubCategory?.title || ctx.communication.selectedCommCategory!.title} categoryColor={ctx.communication.selectedCommCategory!.color} cards={ctx.communication.selectedCommSubCategory?.cards || ctx.communication.selectedCommCategory!.cards!} onBack={() => ctx.communication.selectedCommCategory?.subCategories ? setScreenState(ScreenState.CommunicationSubCategory) : setScreenState(ScreenState.CommunicationMenu)} sentence={ctx.communication.sentence} onCardClick={ctx.communication.handleCardClick} onSpeakSentence={ctx.communication.handleSpeakSentence} onClearSentence={ctx.communication.handleClearSentence} isPremium={ctx.settings.isPremium} printPool={ctx.print.printPool} onTogglePrintPool={ctx.print.handleTogglePrintPool} />;
        
        

        // Print Flow
        case ScreenState.PrintPool: return <PrintPoolScreen 
            pool={ctx.print.printPool} 
            onBack={() => setScreenState(ctx.previousScreen)} 
            onTogglePrintPool={ctx.print.handleTogglePrintPool} 
            onClearPrintPool={ctx.print.handleClearPrintPool} 
            onPrepareToPrint={(cards) => {
                ctx.print.setCardsToPrint(cards);
                const color = cards[0]?.categoryColor || 'slate';
                ctx.print.setPrintCategoryColor(color);
                setScreenState(ScreenState.PrintPreview);
            }} 
        />;
        case ScreenState.PrintPreview: return <PrintPreviewScreen cards={ctx.print.cardsToPrint} categoryColor={ctx.print.printCategoryColor} onBack={() => setScreenState(ScreenState.PrintPool)} />;
        case ScreenState.PrintSelectionDetail: return <PrintSelectionDetailScreen category={ctx.print.categoryForPrintSelection!} onBack={() => setScreenState(ctx.previousScreen)} onConfirmSelection={(cards) => ctx.print.handleUpdatePrintPool(cards, ctx.previousScreen, setScreenState)} bannedImageIds={ctx.settings.bannedImageIds} currentPrintPool={ctx.print.printPool} />;

    default: return <MainMenuScreen onSelectCategory={() => {}} onStartRandomMode={ctx.activity.handleStartRandomMode} onSelectParentTips={() => setScreenState(ScreenState.ParentTips)} onSelectSettings={() => setScreenState(ScreenState.Settings)} theme={ctx.settings.theme} />;
    }
};





