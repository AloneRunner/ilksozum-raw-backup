
import React from 'react';
import { ActivityCategory, ActivityStats, ActivityType, SubAchievement } from '../types.ts';
import { ACHIEVEMENTS, ALL_SUB_ACHIEVEMENTS, LETTER_GROUPS } from '../constants.ts';
import StarIcon from './icons/StarIcon.tsx';
import BrainIcon from './icons/BrainIcon.tsx';
import CrownIcon from './icons/CrownIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { AppColor, getColorClasses } from '../themes/colorManager.ts';
import { useAppContext } from '../contexts/AppContext.ts';

interface AchievementsScreenProps {
    activityStats: Record<string, ActivityStats>;
    onSelectParentReport: () => void;
    onBack: () => void;
    isPremium: boolean;
}

// A new component to handle the specific logic for letter/group based activities
const AggregatedProgress: React.FC<{
    subAchievement: SubAchievement;
    activityStats: Record<string, ActivityStats>;
    achievementColor: AppColor | string;
}> = ({ subAchievement, activityStats, achievementColor }) => {
    
    const allLetters = React.useMemo(() => LETTER_GROUPS.flatMap(g => g.letters), []);
    
    const {
        totalCorrect,
        totalQuestions,
        attempts,
        completionCount,
        totalSubItems
    } = React.useMemo(() => {
        let totalCorrect = 0;
        let totalQuestions = 0;
        let attempts = 0;
        let completionCount = 0;
        let totalSubItems = 0;
        
        const activityId = String(subAchievement.id);
        
        if (activityId === String(ActivityType.Syllabification)) {
            totalSubItems = 5; // 5 groups
            for (let i = 1; i <= totalSubItems; i++) {
                const key = `${activityId}-${i}`;
                const stats = activityStats[key];
                if (stats) {
                    attempts += stats.attempts;
                    totalCorrect += stats.totalCorrect || 0;
                    totalQuestions += stats.totalQuestions || 0;
                    if ((stats.completions || 0) >= 3) {
                        completionCount++;
                    }
                }
            }
        } else {
            totalSubItems = allLetters.length;
            for (const letter of allLetters) {
                const key = `${activityId}-${letter}`;
                const stats = activityStats[key];
                if (stats) {
                    attempts += stats.attempts;
                    totalCorrect += stats.totalCorrect || 0;
                    totalQuestions += stats.totalQuestions || 0;
                    if ((stats.completions || 0) >= 3) {
                        completionCount++;
                    }
                }
            }
        }
        
        return { totalCorrect, totalQuestions, attempts, completionCount, totalSubItems };

    }, [subAchievement.id, activityStats, allLetters]);

    const isMastered = totalSubItems > 0 && completionCount === totalSubItems;
    const skillPercentage = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100) : 0;
    const progressText = subAchievement.id === ActivityType.Syllabification ? 'Gruplar' : 'Harfler';

    const colorClasses = getColorClasses(achievementColor);

    return (
        <div className={`p-2 rounded-lg transition-colors ${isMastered ? colorClasses.bg100 : 'bg-slate-100'}`}>
            <div className="flex items-center mb-1">
                {isMastered ? (
                    <StarIcon className={`w-4 h-4 mr-2 text-amber-400`} />
                ) : (
                    <div className={`w-4 h-4 mr-2 rounded-full ${attempts > 0 ? colorClasses.bg200 : 'bg-slate-200'}`} />
                )}
                <span className={`text-xs font-semibold ${isMastered ? colorClasses.text800 : 'text-slate-600'}`}>{subAchievement.name}</span>
            </div>
            {attempts > 0 && (
                <>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1.5">
                        <div className={`${colorClasses.bg500} h-1.5 rounded-full`} style={{ width: `${skillPercentage}%` }}></div>
                    </div>
                    <div className="text-xs text-right text-slate-600 mt-1 font-semibold">
                       {progressText}: {completionCount} / {totalSubItems}
                    </div>
                </>
            )}
        </div>
    );
};


const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ activityStats, onSelectParentReport, onBack, isPremium }) => {
    const { settings } = useAppContext();
    const isSimpleTheme = settings.theme === 'simple';
    
    const allLetters = React.useMemo(() => LETTER_GROUPS.flatMap(g => g.letters), []);
    
    const getCompletedCountForCategory = (category: ActivityCategory) => {
        const subAchievementsInCategory = ALL_SUB_ACHIEVEMENTS.filter(sa => sa.category === category);
        
        if (category === ActivityCategory.LetterSound) {
            let masteredActivities = 0;
            const letterBasedActivities = subAchievementsInCategory.filter(sa => sa.id !== ActivityType.Syllabification && sa.id !== ActivityType.EmbeddedStory);

            // Check Syllabification mastery
            let masteredGroups = 0;
            for(let i=1; i <= 5; i++){
                const key = `${ActivityType.Syllabification}-${i}`;
                if((activityStats[key]?.completions || 0) >= 3) {
                    masteredGroups++;
                }
            }
            if(masteredGroups === 5) masteredActivities++;

            // Check other letter-based activities
            for(const activity of letterBasedActivities) {
                let masteredLetters = 0;
                for(const letter of allLetters){
                    const key = `${activity.id}-${letter}`;
                    if((activityStats[key]?.completions || 0) >= 3){
                        masteredLetters++;
                    }
                }
                if(masteredLetters === allLetters.length) masteredActivities++;
            }
            return masteredActivities;

        } else {
            return subAchievementsInCategory.filter(sa => {
                const stats = activityStats[String(sa.id)];
                return (stats?.completions || 0) >= 3;
            }).length;
        }
    };

    const getTotalCountForCategory = (category: ActivityCategory) => {
        const subAchievements = ALL_SUB_ACHIEVEMENTS.filter(sa => sa.category === category);
        if (category === ActivityCategory.LetterSound) {
            // EmbeddedStory does not have completion tracking
            return subAchievements.filter(sa => sa.id !== ActivityType.EmbeddedStory).length;
        }
        return subAchievements.length;
    };

    const content = (
        <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
            <div className="w-full flex items-center mb-8 landscape:mb-4 relative z-10">
                <button
                    onClick={onBack}
                    className="absolute left-0 p-3 rounded-full bg-white shadow-md hover:bg-sky-50 hover:shadow-lg transform active:scale-95 transition-all duration-200 z-50"
                    aria-label="Geri Dön"
                >
                    <ArrowLeftIcon className="w-8 h-8 text-sky-700"/>
                </button>
                <h1 className={isSimpleTheme
                    ? "flex-1 text-center text-3xl sm:text-4xl landscape:text-2xl font-black text-purple-900 drop-shadow-[0_4px_12px_rgba(147,51,234,0.15)]"
                    : "flex-1 text-center text-3xl sm:text-4xl landscape:text-2xl font-black text-white text-shadow-soft"}>
                    Başarımlar
                </h1>
                <button 
                    onClick={onSelectParentReport}
                    className="absolute right-0 p-3 rounded-full bg-white shadow-md hover:bg-amber-50 hover:shadow-lg transform active:scale-95 transition-all duration-200 z-50"
                    aria-label="Gelişim Raporunu Görüntüle"
                >
                    <BrainIcon className="w-8 h-8 text-amber-700"/>
                    {!isPremium && <CrownIcon className="absolute -top-1 -right-1 w-6 h-6 text-amber-500 bg-white rounded-full p-0.5" />}
                </button>
            </div>

            <p className={isSimpleTheme
                ? "text-center text-pink-700 drop-shadow-[0_2px_6px_rgba(236,72,153,0.1)] mb-8 landscape:mb-4 text-lg landscape:text-base -mt-4 landscape:-mt-2"
                : "text-center text-white/90 text-shadow-soft mb-8 landscape:mb-4 text-lg landscape:text-base -mt-4 landscape:-mt-2"}>
                Bir etkinliği 3 kez hatasız tamamlayarak rozetini kazan!
            </p>

            <div className="w-full flex-grow overflow-y-auto pr-2 space-y-4">
                {ACHIEVEMENTS.map(achievement => {
                    const completedCount = getCompletedCountForCategory(achievement.id);
                    const totalCount = getTotalCountForCategory(achievement.id);
                    const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
                    const colorClasses = getColorClasses(achievement.color);
                    
                    const subAchievements = ALL_SUB_ACHIEVEMENTS.filter(sa => sa.category === achievement.id);

                    return (
                        <div key={achievement.id} className="bg-white/80 p-5 rounded-2xl shadow-md">
                            <div className="flex items-center mb-3">
                                <div className={`${colorClasses.bg100} p-3 rounded-xl mr-4`}>
                                    <achievement.icon className={`w-8 h-8 ${colorClasses.text600}`} />
                                </div>
                                <div>
                                    <h2 className={`text-xl font-bold ${colorClasses.text800}`}>{achievement.name}</h2>
                                    <p className="text-slate-500 font-semibold">{completedCount} / {totalCount} Tamamlandı</p>
                                </div>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-4">
                                <div
                                    className={`${colorClasses.bg500} h-4 rounded-full transition-all duration-500`}
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {achievement.id === ActivityCategory.LetterSound 
                                ? subAchievements.map(sub => {
                                    if(sub.id === ActivityType.EmbeddedStory) return null;
                                    return <AggregatedProgress key={String(sub.id)} subAchievement={sub} activityStats={activityStats} achievementColor={achievement.color} />
                                })
                                : subAchievements.map(sub => {
                                    const stats = activityStats[String(sub.id)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                                    const isMastered = (stats.completions || 0) >= 3;
                                    const skillPercentage = (stats.totalQuestions || 0) > 0 ? (((stats.totalCorrect || 0) / stats.totalQuestions!) * 100) : 0;
                                    const subColorClasses = getColorClasses(achievement.color);

                                    return (
                                        <div key={String(sub.id)} className={`p-2 rounded-lg transition-colors ${isMastered ? subColorClasses.bg100 : 'bg-slate-100'}`}>
                                            <div className="flex items-center mb-1">
                                                {isMastered ? (
                                                    <StarIcon className={`w-4 h-4 mr-2 text-amber-400`} />
                                                ) : (
                                                    <div className={`w-4 h-4 mr-2 rounded-full ${stats.attempts > 0 ? subColorClasses.bg200 : 'bg-slate-200'}`} />
                                                )}
                                                <span className={`text-xs font-semibold ${isMastered ? subColorClasses.text800 : 'text-slate-600'}`}>{sub.name}</span>
                                            </div>
                                            {stats.attempts > 0 && (
                                                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1.5">
                                                    <div className={`${subColorClasses.bg500} h-1.5 rounded-full`} style={{ width: `${skillPercentage}%` }}></div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

    return content;
};

export default React.memo(AchievementsScreen);
