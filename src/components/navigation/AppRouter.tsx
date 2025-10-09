import { lazy } from 'react';
import { useAppContext } from '../../contexts/AppContext.ts';
import { ScreenState, ActivityType } from '../../types.ts';
import { getActivityCategory, getActivityUiConfig, fetchSyllableWordsForGroup, createObjectChoiceRounds, fetchConceptActivityData } from '../../services/contentService.ts';
import Spinner from '../Spinner.tsx';
import { OBJECT_CATEGORIES } from '../../constants.ts';
import { t } from '../../i18n/index.ts';

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
const NumberSequencingScreen = lazy(() => import('../NumberSequencingScreen.tsx'));
const CommunicationCardDetailScreen = lazy(() => import('../CommunicationCardDetailScreen.tsx'));
const ObjectCategoriesMenuScreen = lazy(() => import('../ObjectCategoriesMenuScreen.tsx'));
const SequencingStoryScreen = lazy(() => import('../SequencingStoryScreen.tsx'));
const LetterActivitiesMenuScreen = lazy(() => import('../LetterActivitiesMenuScreen.tsx'));
const LearningCard = lazy(() => import('../LearningCard.tsx'));
const BodyPainScreen = lazy(() => import('../BodyPainScreen.tsx'));
const DragAndDropCountingScreen = lazy(() => import('../DragAndDropCountingScreen.tsx'));
const DragAndDropPositioningScreen = lazy(() => import('../DragAndDropPositioningScreen.tsx'));
const CommunicationSubCategoryScreen = lazy(() => import('../CommunicationSubCategoryScreen.tsx'));
const ParentTipsScreen = lazy(() => import('../ParentTipsScreen.tsx'));
const ActivityManagementScreen = lazy(() => import('../ActivityManagementScreen.tsx'));
const PrintPreviewScreen = lazy(() => import('../PrintPreviewScreen.tsx'));
const PrintPoolScreen = lazy(() => import('../PrintPoolScreen.tsx'));
const PrintSelectionDetailScreen = lazy(() => import('../PrintSelectionDetailScreen.tsx'));

export const AppRouter = () => {
    const ctx = useAppContext();
    const { screenState, setScreenState, setPreviousScreen, handleGoToMenu } = ctx;

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

    const onBackToConcept = () => setScreenState(ScreenState.ConceptActivitiesMenu);
        const onBackToReasoning = () => setScreenState(ScreenState.ReasoningActivitiesMenu);
        const onBackToLetterSelection = () => setScreenState(ScreenState.LetterSelection);

        switch (activityType) {
            case ActivityType.Syllabification:
                return <SyllableCard word={currentData} {...commonProps} onBack={() => setScreenState(ScreenState.GroupSelection)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />;
            case ActivityType.FindTheLetterInGrid:
                return <LetterGridScreen letter={ctx.activity.selectedLetter!} {...commonProps} onBack={onBackToLetterSelection} />;
            case ActivityType.FindTheLetter:
                return <LearningCard word={currentData} letter={ctx.activity.selectedLetter!} activityType={activityType} {...commonProps} onBack={onBackToLetterSelection} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />;
            case ActivityType.FindTheSoundInImage:
                 return <SoundInImageScreen roundData={currentData} letter={ctx.activity.selectedLetter!} {...commonProps} onBack={onBackToLetterSelection} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />;
            case ActivityType.EmbeddedStory:
                return <StoryScreen stories={activityData} letter={ctx.activity.selectedLetter!} onBack={onBackToLetterSelection} onGoToMenu={handleGoToMenu} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} />;
            case ActivityType.SoundPresence:
            case ActivityType.YesNo:
                 const backScreen = getActivityUiConfig(activityType).backScreen;
                 const onBackHandler = backScreen === ScreenState.LetterSelection ? onBackToLetterSelection : onBackToConcept;
                 return <ConceptLearningScreen word={currentData} letter={ctx.activity.selectedLetter || undefined} activityType={activityType} {...commonProps} onBack={onBackHandler} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />;
            case ActivityType.Sudoku:
                return <SudokuScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />;
            case ActivityType.PatternCompletion:
                return <PatternCompletionScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />;
            case ActivityType.MemoryCards:
                 return <MemoryCardsScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} onToggleAutoSpeak={ctx.settings.handleToggleAutoSpeak} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />;
            case ActivityType.NumberSequencing:
                return <NumberSequencingScreen roundData={currentData} {...commonProps} onBack={onBackToConcept} />;
            case ActivityType.SequencingStories:
                return <SequencingStoryScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />;
            case ActivityType.DragAndDropCounting:
                return <DragAndDropCountingScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} />;
            case ActivityType.DragAndDropPositioning:
                return <DragAndDropPositioningScreen roundData={currentData} {...commonProps} onBack={onBackToReasoning} />;
            default:
                if (currentData.options) {
                    const category = getActivityCategory(currentData.activityType);
                    const colorMap: {[key: string]: 'teal' | 'indigo' | 'amber'} = { ['Concept']: 'teal', ['Reasoning']: 'indigo', ['Objects']: 'amber' };
                    const themeColor = colorMap[category!] || 'teal';
                    const onBackDefault = category === 'Concept' 
                        ? onBackToConcept 
                        : category === 'Reasoning' 
                        ? onBackToReasoning 
                        : () => setScreenState(ctx.previousScreen === ScreenState.ObjectCategoriesIntlMenu ? ScreenState.ObjectCategoriesIntlMenu : ScreenState.ObjectCategoriesMenu);
                    return <ConceptChoiceScreen roundData={currentData} themeColor={themeColor} {...commonProps} onBack={onBackDefault} onBanImage={(id) => ctx.settings.handleBanImage(id, ctx.activity.setActivityData)} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} isWordLabelVisible={ctx.settings.isWordLabelVisible} onToggleWordLabel={ctx.settings.handleToggleWordLabel} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} />;
                }
        }
        return null;
    };

    switch (screenState) {
        case ScreenState.Loading: return <div className="flex items-center justify-center h-full w-full"><Spinner /></div>;
        
        case ScreenState.ProfileSelection: return <ProfileSelectionScreen profiles={ctx.profile.profiles} onSelectProfile={(p) => { ctx.profile.handleSelectProfile(p); setScreenState(ScreenState.MainMenu); }} onCreateProfile={(n, a) => { ctx.profile.handleCreateProfile(n, a); setScreenState(ScreenState.MainMenu); }} onBack={() => setScreenState(ScreenState.MainMenu)} />;
        
        case ScreenState.MainMenu: return <MainMenuScreen 
            onSelectCategory={(category) => {
                if (category === 'letterSound') setScreenState(ScreenState.LetterActivitiesMenu);
                if (category === 'objectCategories') setScreenState(ScreenState.ObjectCategoriesMenu);
                if (category === 'objectCategoriesIntl') setScreenState(ScreenState.ObjectCategoriesIntlMenu);
                if (category === 'conceptActivities') setScreenState(ScreenState.ConceptActivitiesMenu);
                if (category === 'reasoningActivities') setScreenState(ScreenState.ReasoningActivitiesMenu);
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
        case ScreenState.LetterActivitiesMenu: return <LetterActivitiesMenuScreen onSelectActivity={(act) => {
            if (act === ActivityType.Syllabification) {
                ctx.activity.setActivityType(ActivityType.Syllabification);
                setScreenState(ScreenState.GroupSelection);
            } else {
                ctx.activity.setSelectedActivityForLetter(act);
                setScreenState(ScreenState.LetterSelection);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;
        
        case ScreenState.LetterSelection: return <LetterSelectionScreen onSelectLetter={ctx.activity.handleStartActivityWithLetter} onBack={() => setScreenState(ScreenState.LetterActivitiesMenu)} activityType={ctx.activity.selectedActivityForLetter} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} />;
        
        case ScreenState.GroupSelection: return <GroupSelectionScreen onSelectGroup={async (groupNumber) => {
            ctx.profile.updateActivityAttempt(`${ActivityType.Syllabification}-${groupNumber}`);
            ctx.profile.updateActivityAttempt(String(ActivityType.Syllabification));
            ctx.activity.setSelectedGroup(groupNumber);
            ctx.activity.setActivityType(ActivityType.Syllabification);
            setScreenState(ScreenState.Loading);
            const data = await fetchSyllableWordsForGroup(groupNumber);
            if (data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast("Bu grup için kelime bulunamadı.");
                setScreenState(ScreenState.GroupSelection);
            }
        }} onBack={() => setScreenState(ScreenState.LetterActivitiesMenu)} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme}/>;
      
        case ScreenState.ObjectCategoriesMenu: return <ObjectCategoriesMenuScreen onSelectCategory={async (catId) => {
            ctx.profile.updateActivityAttempt(catId);
            const catInfo = OBJECT_CATEGORIES.find(c => c.id === catId);
            if(catInfo) ctx.activity.setSelectedObjectCategory({ id: catInfo.id, title: catInfo.title });
            setPreviousScreen(ScreenState.ObjectCategoriesMenu);
            setScreenState(ScreenState.Loading);
            ctx.activity.setActivityType(ActivityType.ObjectRecognition);
            const data = await createObjectChoiceRounds(catId);
            if (data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast("Bu kategori için test oluşturulamadı.");
                setScreenState(ScreenState.ObjectCategoriesMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet} onAddCategoryToPrintPool={(catId, color) => {
            if (!ctx.settings.isPremium) { ctx.toast.showPremiumToast(); return; }
            ctx.print.setCategoryForPrintSelection({ id: catId, title: OBJECT_CATEGORIES.find(c=>c.id === catId)?.title || '', color });
            setPreviousScreen(screenState);
            setScreenState(ScreenState.PrintSelectionDetail);
        }} isPremium={ctx.settings.isPremium} />;

        case ScreenState.ObjectCategoriesIntlMenu: {
            // Only show a subset that has curated EN datasets for now, in a fixed logical order
            const orderedIds = ['hayvan','meyve','sebze','yiyecek','giysi','oyuncak','mutfak','ev_esya','ev','vücut','insan','bitki','doğal nesne','doğal yapı','doğa olayı','yer','bina','ulasim','muzik_aleti','tamir_aleti','uzay','profession','okul_esya','eglence'];
            const catsById = new Map(OBJECT_CATEGORIES.map(c => [c.id, c] as const));
            const intlCats = orderedIds
                .map(id => catsById.get(id))
                .filter((c): c is typeof OBJECT_CATEGORIES[number] => !!c);
            const enTitles: Record<string, string> = {
                hayvan: 'Animals',
                meyve: 'Fruits',
                sebze: 'Vegetables',
                ulasim: 'Vehicles',
                giysi: 'Clothes',
                mutfak: 'Kitchen',
                ev_esya: 'Household',
                oyuncak: 'Toys',
                yiyecek: 'Foods',
                profession: 'Professions',
                okul_esya: 'School Items',
                'vücut': 'Body Parts',
                bitki: 'Plants',
                'doğa olayı': 'Natural Events',
                uzay: 'Space',
                tamir_aleti: 'Tools',
                muzik_aleti: 'Musical Instruments',
                bina: 'Buildings',
                yer: 'Places',
                ev: 'Home',
                insan: 'People',
                'doğal yapı': 'Natural Structures',
                'doğal nesne': 'Natural Objects',
                eglence: 'Entertainment',
            };
            const intlCatsWithEn = intlCats.map(c => ({ ...c, title: enTitles[c.id] || c.title }));
            return <ObjectCategoriesMenuScreen 
                categoriesOverride={intlCatsWithEn}
                titleOverride={t('categories.objectsIntl.title')}
                onSelectCategory={async (catId) => {
                    ctx.profile.updateActivityAttempt(catId + '_intl');
                    const catInfo = intlCatsWithEn.find(c => c.id === catId);
                    if(catInfo) ctx.activity.setSelectedObjectCategory({ id: catInfo.id, title: catInfo.title });
                    setPreviousScreen(ScreenState.ObjectCategoriesIntlMenu);
                    setScreenState(ScreenState.Loading);
                    ctx.activity.setActivityType(ActivityType.ObjectRecognition);
                    const data = await createObjectChoiceRounds(catId);
                    if (data.length > 0) {
                        ctx.activity.setActivityData(data);
                        ctx.activity.setCurrentIndex(0);
                        ctx.activity.setScore(0);
                        setScreenState(ScreenState.Playing);
                    } else {
                        ctx.toast.showToast('No curated set for this category yet.');
                        setScreenState(ScreenState.ObjectCategoriesIntlMenu);
                    }
                }} 
                onBack={handleGoToMenu} 
                activityStats={ctx.profile.activityStats} 
                theme={ctx.settings.theme} 
                enabledActivities={ctx.profile.enabledActivitiesSet} 
                onAddCategoryToPrintPool={(catId, color) => {
                    if (!ctx.settings.isPremium) { ctx.toast.showPremiumToast(); return; }
                    ctx.print.setCategoryForPrintSelection({ id: catId, title: intlCatsWithEn.find(c=>c.id === catId)?.title || '', color });
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
            const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast("Bu etkinlik için içerik bulunamadı.");
                setScreenState(ScreenState.ConceptActivitiesMenu);
            }
        }} onBack={handleGoToMenu} activeCategory={ctx.navigation.activeConceptTab} onSelectCategory={ctx.navigation.setActiveConceptTab} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;
      
        case ScreenState.ReasoningActivitiesMenu: return <ReasoningActivitiesMenuScreen onSelectActivity={async (act) => {
            ctx.profile.updateActivityAttempt(String(act));
            ctx.activity.setActivityType(act);
            setScreenState(ScreenState.Loading);
            const data = await fetchConceptActivityData(act, ctx.profile.activityStats);
            if(data.length > 0) {
                ctx.activity.setActivityData(data);
                ctx.activity.setCurrentIndex(0);
                ctx.activity.setScore(0);
                setScreenState(ScreenState.Playing);
            } else {
                ctx.toast.showToast("Bu etkinlik için içerik bulunamadı.");
                setScreenState(ScreenState.ReasoningActivitiesMenu);
            }
        }} onBack={handleGoToMenu} activityStats={ctx.profile.activityStats} theme={ctx.settings.theme} enabledActivities={ctx.profile.enabledActivitiesSet}/>;

        case ScreenState.Playing: return renderPlayingScreen();

        case ScreenState.Finished: return <CompletionScreen score={ctx.activity.score} total={ctx.activity.activityData.length} onGoToMenu={handleGoToMenu} onRestart={ctx.activity.handleRestartActivity} onGoBack={() => {
            if (ctx.activity.isRandomMode) {
                handleGoToMenu();
                return;
            }
            const { backScreen } = getActivityUiConfig(ctx.activity.activityType);
            const resolvedBack = ctx.activity.activityType === ActivityType.ObjectRecognition && ctx.previousScreen === ScreenState.ObjectCategoriesIntlMenu 
                ? ScreenState.ObjectCategoriesIntlMenu 
                : backScreen;
            setScreenState(resolvedBack);
        }} activityType={ctx.activity.activityType} />;
        
        // Other Screens
        case ScreenState.Settings: return <SettingsScreen onBack={() => setScreenState(ScreenState.MainMenu)} isMuted={ctx.settings.isMuted} onToggleMute={ctx.settings.handleToggleMute} isAutoSpeakEnabled={ctx.settings.isAutoSpeakEnabled} onToggleAutoSpeak={ctx.settings.handleToggleAutoSpeak} isBanButtonEnabled={ctx.settings.isBanButtonEnabled} onToggleBanButton={ctx.settings.handleToggleBanButton} isFastTransitionEnabled={ctx.settings.isFastTransitionEnabled} onToggleFastTransition={ctx.settings.handleToggleFastTransition} onSelectPrivacyPolicy={() => setScreenState(ScreenState.PrivacyPolicy)} onManageBannedImages={()=>setScreenState(ScreenState.BannedImages)} isPremium={ctx.settings.isPremium} hasPurchasedPremium={ctx.settings.hasPurchasedPremium} onPurchasePremium={async () => {
            const success = await ctx.settings.handlePurchasePremium();
            if (success) setScreenState(ScreenState.Settings);
        }} onResetProgress={ctx.profile.handleResetProgress} theme={ctx.settings.theme} onChangeTheme={ctx.settings.onChangeTheme} activeProfile={ctx.profile.activeProfile!} onManageProfiles={() => setScreenState(ScreenState.ProfileSelection)} onManageActivities={(cat) => {
            ctx.setCategoryToManage(cat);
            setScreenState(ScreenState.ActivityManagement);
        }} showPremiumToast={ctx.toast.showPremiumToast} />;
        
        case ScreenState.PrivacyPolicy: return <PrivacyPolicyScreen onBack={() => setScreenState(ScreenState.Settings)} />;
        
        case ScreenState.Achievements: return <AchievementsScreen activityStats={ctx.profile.activityStats} onSelectParentReport={() => { ctx.settings.isPremium ? setScreenState(ScreenState.ParentReport) : ctx.toast.showPremiumToast() }} isPremium={ctx.settings.isPremium}/>;
        case ScreenState.BannedImages: return <BannedImagesScreen bannedImageIds={ctx.settings.bannedImageIds} onUnbanImage={ctx.settings.handleUnbanImage} onBack={() => setScreenState(ScreenState.Settings)} />;
        case ScreenState.ParentReport: return <ParentReportScreen activityStats={ctx.profile.activityStats} onBack={() => setScreenState(ScreenState.Achievements)} />;
        case ScreenState.ParentTips: return <ParentTipsScreen onBack={() => setScreenState(ScreenState.MainMenu)} />;
        case ScreenState.ActivityManagement: return <ActivityManagementScreen onBack={() => setScreenState(ScreenState.Settings)} category={ctx.categoryToManage!} enabledActivities={ctx.profile.enabledActivitiesSet} onToggleActivity={ctx.profile.handleToggleActivityEnabled} onToggleCategory={ctx.profile.handleToggleCategoryEnabled} isPremium={ctx.settings.isPremium} showPremiumToast={ctx.toast.showPremiumToast} />;
        
        // Communication Flow
        case ScreenState.CommunicationMenu: return <CommunicationCardMenuScreen categories={ctx.communication.communicationCategories} onSelectCategory={(cat) => {
            ctx.communication.setSelectedCommCategory(cat);
            ctx.communication.setSelectedCommSubCategory(null);
            ctx.communication.setSentence([]);
            if(cat.id === 'pain') setScreenState(ScreenState.BodyPainScreen);
            else if (cat.subCategories) setScreenState(ScreenState.CommunicationSubCategory);
            else setScreenState(ScreenState.CommunicationDetail);
        }} onBack={handleGoToMenu}/>;

        case ScreenState.CommunicationSubCategory: return <CommunicationSubCategoryScreen category={ctx.communication.selectedCommCategory!} onSelectSubCategory={(sub) => {
            ctx.communication.setSelectedCommSubCategory(sub);
            setScreenState(ScreenState.CommunicationDetail);
        }} onBack={() => setScreenState(ScreenState.CommunicationMenu)} />;

        case ScreenState.CommunicationDetail: return <CommunicationCardDetailScreen categoryTitle={ctx.communication.selectedCommSubCategory?.title || ctx.communication.selectedCommCategory!.title} categoryColor={ctx.communication.selectedCommCategory!.color} cards={ctx.communication.selectedCommSubCategory?.cards || ctx.communication.selectedCommCategory!.cards!} onBack={() => ctx.communication.selectedCommCategory?.subCategories ? setScreenState(ScreenState.CommunicationSubCategory) : setScreenState(ScreenState.CommunicationMenu)} sentence={ctx.communication.sentence} onCardClick={ctx.communication.handleCardClick} onSpeakSentence={ctx.communication.handleSpeakSentence} onClearSentence={ctx.communication.handleClearSentence} isPremium={ctx.settings.isPremium} printPool={ctx.print.printPool} onTogglePrintPool={ctx.print.handleTogglePrintPool} />;
        
        case ScreenState.BodyPainScreen: return <BodyPainScreen onBack={() => setScreenState(ScreenState.CommunicationMenu)} onSelectPainArea={(card) => {
            ctx.communication.handleCardClick(card);
            setScreenState(ScreenState.CommunicationMenu);
        }} />;

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