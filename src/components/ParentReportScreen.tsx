import React, { useMemo } from 'react';
import { ActivityStats, ActivityType, ActivityCategory } from '../types.ts';
import { ALL_SUB_ACHIEVEMENTS, ACHIEVEMENTS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import CheckCircleIcon from './icons/CheckCircleIcon.tsx';
import XCircleIcon from './icons/XCircleIcon.tsx';
import RobotIcon from './icons/RobotIcon.tsx';
import AcademicCapIcon from './icons/AcademicCapIcon.tsx';
import StarIcon from './icons/StarIcon.tsx';
import ClipboardListIcon from './icons/ClipboardListIcon.tsx';
import { getColorClasses } from '../themes/colorManager.ts';
import { t } from '../i18n/index.ts';
import { useAppContext } from '../contexts/AppContext.ts';
import { getUnlockedUnits } from '../services/masteryEngine.ts';
// getValueFromLocalStorage no longer needed - using unit-based system


interface ParentReportScreenProps {
    activityStats: Record<string, ActivityStats>;
    onBack: () => void;
}

// Helper component for progress bar
const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => {
    const color = percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className={`${color} h-2.5 rounded-full transition-all duration-300`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

// Helper component for mastery stars
const MasteryStars: React.FC<{ completions: number }> = ({ completions }) => {
    const masteryLevel = Math.min(3, completions || 0);
    return (
        <div className="flex flex-shrink-0">
            {[...Array(3)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < masteryLevel ? 'text-amber-400' : 'text-slate-300'}`} />
            ))}
        </div>
    );
};


const ParentReportScreen: React.FC<ParentReportScreenProps> = ({ activityStats, onBack }) => {
    const { settings } = useAppContext();
    const isSimpleTheme = settings.theme === 'simple';
    const isCatTheme = settings.theme === 'kedi';
    const isHilalTheme = settings.theme === 'ay2';
    const isSnowTheme = settings.theme === 'kar';
    const isFoxTheme = settings.theme === 'tilki';
    const isZurafaTheme = settings.theme === 'zurafa';
    const themeVariant = isCatTheme ? 'cat' : isHilalTheme ? 'hilal' : isSnowTheme ? 'snow' : isFoxTheme ? 'fox' : isZurafaTheme ? 'zurafa' : isSimpleTheme ? 'simple' : undefined;

    const catPalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-sky-200/60 via-white/70 to-emerald-100/60',
            decorations: [
                { className: 'absolute top-6 right-6 text-5xl opacity-75 drop-shadow-[0_16px_30px_rgba(249,115,22,0.28)]', content: '\uD83D\uDC08' },
                { className: 'absolute bottom-16 left-1/2 -translate-x-1/2 text-6xl opacity-80 drop-shadow-[0_18px_30px_rgba(249,115,22,0.32)]', content: '\uD83D\uDC31' },
            ],
        },
        headerWrapperClass: 'w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 relative px-3 py-2 rounded-3xl border border-orange-200/60 backdrop-blur-md bg-white/40 shadow-[0_18px_42px_rgba(249,115,22,0.25)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-orange-200/60 shadow-[0_14px_30px_rgba(249,115,22,0.22)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-orange-500',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-orange-900 drop-shadow-[0_6px_18px_rgba(255,255,255,0.7)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-orange-200/60 shadow-[0_16px_36px_rgba(249,115,22,0.25)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-orange-500',
        sectionHeadingClass: 'text-2xl font-bold text-orange-900 drop-shadow-[0_4px_12px_rgba(255,255,255,0.65)]',
        sectionIconClass: 'w-8 h-8 text-orange-500 mr-3 drop-shadow-[0_4px_12px_rgba(249,115,22,0.35)]',
        cardClass: 'relative bg-white/75 border border-orange-200/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(249,115,22,0.2)] backdrop-blur-md w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-orange-500 mr-3 drop-shadow-[0_4px_10px_rgba(249,115,22,0.45)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-orange-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\uD83D\uDC3E' },
        statLabelClass: 'text-orange-800 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/75 border border-orange-200/60 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(249,115,22,0.18)] backdrop-blur-md w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/55 border border-orange-200/60 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(249,115,22,0.22)]',
        categoryIconClass: 'w-6 h-6 text-orange-500',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-orange-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        categoryActivityLabelClass: 'text-orange-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        categoryAttemptsClass: 'text-xs font-bold text-orange-500 w-24 text-right',
        emptyStateTextClass: 'text-orange-700 text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-orange-800 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentLabelClass: 'text-orange-800 font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentValueClass: 'font-bold text-orange-500',
    };

    const hilalPalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-indigo-100/85 via-white/92 to-slate-100/75',
            decorations: [
                { className: 'absolute top-8 right-8 text-5xl opacity-75 drop-shadow-[0_14px_28px_rgba(79,70,229,0.28)]', content: '\uD83C\uDF19' },
                { className: 'absolute bottom-14 left-10 text-4xl opacity-65 drop-shadow-[0_14px_28px_rgba(79,70,229,0.25)]', content: '\u2728' },
            ],
        },
        headerWrapperClass: 'w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 relative px-3 py-2 rounded-3xl border border-indigo-200/60 backdrop-blur-md bg-white/45 shadow-[0_18px_42px_rgba(79,70,229,0.28)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-indigo-200/60 shadow-[0_14px_30px_rgba(79,70,229,0.22)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-indigo-500',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-indigo-900 drop-shadow-[0_6px_18px_rgba(199,210,254,0.7)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-indigo-200/60 shadow-[0_16px_36px_rgba(79,70,229,0.25)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-indigo-500',
        sectionHeadingClass: 'text-2xl font-bold text-indigo-900 drop-shadow-[0_4px_12px_rgba(199,210,254,0.65)]',
        sectionIconClass: 'w-8 h-8 text-indigo-500 mr-3 drop-shadow-[0_4px_12px_rgba(79,70,229,0.35)]',
        cardClass: 'relative bg-white/78 border border-indigo-200/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(79,70,229,0.2)] backdrop-blur-md w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-indigo-500 mr-3 drop-shadow-[0_4px_10px_rgba(79,70,229,0.35)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-indigo-900 drop-shadow-[0_3px_10px_rgba(199,210,254,0.6)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\u2728' },
        statLabelClass: 'text-indigo-800 font-semibold drop-shadow-[0_2px_6px_rgba(199,210,254,0.55)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/78 border border-indigo-200/60 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(79,70,229,0.18)] backdrop-blur-md w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/55 border border-indigo-200/60 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(79,70,229,0.22)]',
        categoryIconClass: 'w-6 h-6 text-indigo-500',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-indigo-900 drop-shadow-[0_3px_10px_rgba(199,210,254,0.6)]',
        categoryActivityLabelClass: 'text-indigo-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(199,210,254,0.55)]',
        categoryAttemptsClass: 'text-xs font-bold text-indigo-500 w-24 text-right',
        emptyStateTextClass: 'text-indigo-700 text-sm drop-shadow-[0_1px_4px_rgba(199,210,254,0.6)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-indigo-800 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(199,210,254,0.55)]',
        recentLabelClass: 'text-indigo-800 font-semibold drop-shadow-[0_1px_4px_rgba(199,210,254,0.55)]',
        recentValueClass: 'font-bold text-indigo-500',
    };

    const snowPalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-sky-100/70 via-white/90 to-sky-200/75',
            decorations: [
                { className: 'absolute top-6 right-6 text-5xl opacity-75 drop-shadow-[0_16px_30px_rgba(125,211,252,0.32)]', content: '\u2744' },
                { className: 'absolute bottom-14 left-8 text-4xl opacity-65 drop-shadow-[0_14px_28px_rgba(125,211,252,0.26)]', content: '\u2745' },
                { className: 'absolute bottom-12 right-1/2 translate-x-1/2 text-5xl opacity-70 drop-shadow-[0_18px_30px_rgba(56,189,248,0.28)]', content: '\uD83D\uDC30' },
            ],
        },
        headerWrapperClass: 'relative w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 px-4 py-3 rounded-3xl border border-sky-100/60 backdrop-blur-2xl bg-white/55 shadow-[0_18px_42px_rgba(56,189,248,0.22)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-sky-100/60 shadow-[0_14px_30px_rgba(56,189,248,0.2)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-sky-600',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-sky-900 drop-shadow-[0_6px_18px_rgba(148,197,253,0.65)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-sky-100/60 shadow-[0_16px_36px_rgba(56,189,248,0.22)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-sky-500',
        sectionHeadingClass: 'text-2xl font-bold text-sky-900 drop-shadow-[0_4px_12px_rgba(148,197,253,0.6)]',
        sectionIconClass: 'w-8 h-8 text-sky-500 mr-3 drop-shadow-[0_4px_12px_rgba(148,197,253,0.35)]',
        cardClass: 'relative bg-white/78 border border-sky-100/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(56,189,248,0.18)] backdrop-blur-xl w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-sky-500 mr-3 drop-shadow-[0_4px_10px_rgba(56,189,248,0.35)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-sky-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\u2744' },
        statLabelClass: 'text-sky-800 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/78 border border-sky-100/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(56,189,248,0.16)] backdrop-blur-xl w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/60 border border-sky-100/55 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(56,189,248,0.2)]',
        categoryIconClass: 'w-6 h-6 text-sky-500',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-sky-900 drop-shadow-[0_3px_10px_rgba(148,197,253,0.6)]',
        categoryActivityLabelClass: 'text-sky-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(148,197,253,0.55)]',
        categoryAttemptsClass: 'text-xs font-bold text-sky-500 w-24 text-right',
        emptyStateTextClass: 'text-sky-700 text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-sky-800 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(148,197,253,0.55)]',
        recentLabelClass: 'text-sky-800 font-semibold drop-shadow-[0_1px_4px_rgba(148,197,253,0.55)]',
        recentValueClass: 'font-bold text-sky-500',
    };

    const foxPalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-amber-100/65 via-white/88 to-emerald-100/70',
            decorations: [
                { className: 'absolute top-6 right-6 text-5xl opacity-75 drop-shadow-[0_16px_30px_rgba(245,158,11,0.3)]', content: '\uD83E\uDD8A' },
                { className: 'absolute bottom-14 left-8 text-4xl opacity-65 drop-shadow-[0_14px_28px_rgba(16,185,129,0.24)]', content: '\u2728' },
                { className: 'absolute bottom-10 right-10 text-4xl opacity-60 drop-shadow-[0_12px_24px_rgba(34,197,94,0.22)]', content: '\uD83C\uDF31' },
            ],
        },
        headerWrapperClass: 'relative w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 px-4 py-3 rounded-3xl border border-amber-100/60 backdrop-blur-xl bg-white/55 shadow-[0_18px_42px_rgba(245,158,11,0.22)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/82 border border-amber-100/60 shadow-[0_14px_30px_rgba(245,158,11,0.24)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-emerald-600',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-amber-900 drop-shadow-[0_6px_18px_rgba(255,255,255,0.7)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/82 border border-amber-100/60 shadow-[0_16px_36px_rgba(16,185,129,0.24)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-emerald-600',
        sectionHeadingClass: 'text-2xl font-bold text-amber-900 drop-shadow-[0_4px_12px_rgba(255,255,255,0.6)]',
        sectionIconClass: 'w-8 h-8 text-emerald-600 mr-3 drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]',
        cardClass: 'relative bg-white/75 border border-amber-100/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(245,158,11,0.18)] backdrop-blur-xl w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-emerald-600 mr-3 drop-shadow-[0_4px_10px_rgba(16,185,129,0.35)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-amber-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\uD83E\uDD8A' },
        statLabelClass: 'text-amber-800 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/75 border border-amber-100/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(245,158,11,0.16)] backdrop-blur-xl w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/58 border border-amber-100/55 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(245,158,11,0.18)]',
        categoryIconClass: 'w-6 h-6 text-emerald-600',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-amber-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        categoryActivityLabelClass: 'text-amber-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        categoryAttemptsClass: 'text-xs font-bold text-emerald-600 w-24 text-right',
        emptyStateTextClass: 'text-emerald-800 text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-amber-900 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentLabelClass: 'text-amber-900 font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentValueClass: 'font-bold text-emerald-600',
    };

    const zurafaPalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-cyan-200/60 via-white/70 to-yellow-100/60',
            decorations: [
                { className: 'absolute top-6 right-6 text-5xl opacity-75 drop-shadow-[0_16px_30px_rgba(6,182,212,0.28)]', content: '\uD83E\uDD92' },
                { className: 'absolute bottom-16 left-1/2 -translate-x-1/2 text-6xl opacity-80 drop-shadow-[0_18px_30px_rgba(34,197,94,0.32)]', content: '\uD83C\uDF3F' },
            ],
        },
        headerWrapperClass: 'w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 relative px-3 py-2 rounded-3xl border border-cyan-200/60 backdrop-blur-md bg-white/40 shadow-[0_18px_42px_rgba(6,182,212,0.25)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-cyan-200/60 shadow-[0_14px_30px_rgba(6,182,212,0.22)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-cyan-500',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-cyan-900 drop-shadow-[0_6px_18px_rgba(255,255,255,0.7)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-cyan-200/60 shadow-[0_16px_36px_rgba(6,182,212,0.25)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-cyan-500',
        sectionHeadingClass: 'text-2xl font-bold text-cyan-900 drop-shadow-[0_4px_12px_rgba(255,255,255,0.65)]',
        sectionIconClass: 'w-8 h-8 text-cyan-500 mr-3 drop-shadow-[0_4px_12px_rgba(6,182,212,0.35)]',
        cardClass: 'relative bg-white/75 border border-cyan-200/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(6,182,212,0.2)] backdrop-blur-md w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-cyan-500 mr-3 drop-shadow-[0_4px_10px_rgba(6,182,212,0.45)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-cyan-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\uD83C\uDF3F' },
        statLabelClass: 'text-cyan-800 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/75 border border-cyan-200/60 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(6,182,212,0.18)] backdrop-blur-md w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/55 border border-cyan-200/60 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(6,182,212,0.22)]',
        categoryIconClass: 'w-6 h-6 text-cyan-500',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-cyan-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]',
        categoryActivityLabelClass: 'text-cyan-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(255,255,255,0.55)]',
        categoryAttemptsClass: 'text-xs font-bold text-cyan-500 w-24 text-right',
        emptyStateTextClass: 'text-cyan-700 text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-cyan-800 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentLabelClass: 'text-cyan-800 font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.55)]',
        recentValueClass: 'font-bold text-cyan-500',
    };

    const simplePalette = {
        containerClass: 'relative flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in overflow-hidden',
        overlay: {
            gradientClass: 'absolute inset-0 bg-gradient-to-b from-purple-50/70 via-white/85 to-pink-50/60',
            decorations: [
                { className: 'absolute top-8 right-8 text-5xl opacity-75 drop-shadow-[0_14px_28px_rgba(147,51,234,0.22)]', content: '\uD83E\uDD8B' },
                { className: 'absolute bottom-14 left-10 text-4xl opacity-65 drop-shadow-[0_14px_28px_rgba(236,72,153,0.22)]', content: '\u2728' },
            ],
        },
        headerWrapperClass: 'w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4 relative px-3 py-2 rounded-3xl border border-purple-200/60 backdrop-blur-md bg-white/55 shadow-[0_18px_42px_rgba(147,51,234,0.18)]',
        backButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-purple-200/60 shadow-[0_14px_30px_rgba(147,51,234,0.18)] hover:bg-white transition-colors relative z-20',
        backIconClass: 'text-purple-500',
        headerTitleClass: 'flex-1 text-center text-3xl sm:text-4xl font-black text-purple-900 drop-shadow-[0_6px_18px_rgba(244,114,182,0.25)]',
        achievementsButtonClass: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 border border-purple-200/60 shadow-[0_16px_36px_rgba(236,72,153,0.22)] hover:bg-white transition-all duration-200 relative z-20',
        achievementsIconClass: 'w-7 h-7 text-pink-500',
        sectionHeadingClass: 'text-2xl font-bold text-purple-900 drop-shadow-[0_4px_12px_rgba(244,114,182,0.18)]',
        sectionIconClass: 'w-8 h-8 text-purple-500 mr-3 drop-shadow-[0_4px_12px_rgba(147,51,234,0.25)]',
        cardClass: 'relative bg-white/78 border border-purple-200/55 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(147,51,234,0.18)] backdrop-blur-md w-full overflow-hidden',
        cardIconClass: 'w-7 h-7 text-pink-500 mr-3 drop-shadow-[0_4px_10px_rgba(236,72,153,0.28)]',
        cardTitleClass: 'text-lg sm:text-xl font-bold text-purple-900 drop-shadow-[0_3px_10px_rgba(244,114,182,0.25)]',
        cardDecoration: { className: 'absolute -right-3 -top-3 text-2xl opacity-40 pointer-events-none select-none', content: '\u2728' },
        statLabelClass: 'text-purple-800 font-semibold drop-shadow-[0_2px_6px_rgba(244,114,182,0.25)]',
        statValueSuccessClass: 'font-bold text-emerald-600',
        statValueFailClass: 'font-bold text-rose-500',
        categoryBaseClass: 'relative bg-white/78 border border-purple-200/60 p-4 sm:p-5 rounded-3xl shadow-[0_18px_38px_rgba(147,51,234,0.16)] backdrop-blur-md w-full overflow-hidden',
        categoryIconWrapperClass: 'p-2.5 bg-white/58 border border-purple-200/60 rounded-2xl mr-3 drop-shadow-[0_6px_16px_rgba(147,51,234,0.18)]',
        categoryIconClass: 'w-6 h-6 text-pink-500',
        categoryTitleClass: 'text-lg sm:text-xl font-bold text-purple-900 drop-shadow-[0_3px_10px_rgba(244,114,182,0.25)]',
        categoryActivityLabelClass: 'text-purple-900 font-semibold text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(244,114,182,0.22)]',
        categoryAttemptsClass: 'text-xs font-bold text-pink-500 w-24 text-right',
        emptyStateTextClass: 'text-pink-700 text-sm drop-shadow-[0_1px_4px_rgba(244,114,182,0.25)]',
        recommendationsListClass: 'list-disc list-inside space-y-2 text-purple-800 text-sm sm:text-base drop-shadow-[0_1px_4px_rgba(244,114,182,0.22)]',
        recentLabelClass: 'text-purple-800 font-semibold drop-shadow-[0_1px_4px_rgba(244,114,182,0.25)]',
        recentValueClass: 'font-bold text-pink-500',
    };

    const palette =
        themeVariant === 'cat'
            ? catPalette
            : themeVariant === 'hilal'
            ? hilalPalette
            : themeVariant === 'snow'
            ? snowPalette
            : themeVariant === 'fox'
            ? foxPalette
            : themeVariant === 'zurafa'
            ? zurafaPalette
            : themeVariant === 'simple'
            ? simplePalette
            : null;

    const containerClass = palette?.containerClass ?? 'flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in';
    const headerWrapperClass = (palette?.headerWrapperClass ?? 'relative w-full flex items-center justify-between mb-8 gap-3 landscape:mb-4') + ' z-10';
    const backButtonClass =
        palette?.backButtonClass ?? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md hover:bg-amber-50 transition-colors relative z-20';
    const headerTitleClass = palette?.headerTitleClass ?? 'flex-1 text-center text-3xl sm:text-4xl font-black text-white text-shadow-lg';
    const sectionHeadingClass = palette?.sectionHeadingClass ?? 'text-2xl font-bold text-white text-shadow-soft';

    const reportData = useMemo(() => {
        const analyzedStats = Object.keys(activityStats).map(key => {
            const stats = activityStats[key];
            if (!stats || stats.attempts === 0 || (stats.totalQuestions || 0) === 0) {
                return null;
            }

            const correct = stats.totalCorrect || 0;
            const total = stats.totalQuestions || 1;
            const successRate = (correct / total) * 100;
            const errorRate = 100 - successRate;

            const keyParts = key.split('-');
            const baseActivityIdStr = keyParts[0];
            const subIdentifier = keyParts.length > 1 ? keyParts[1] : null;

            const subAchievementInfo = ALL_SUB_ACHIEVEMENTS.find(sa => String(sa.id) === baseActivityIdStr);

            if (!subAchievementInfo) {
                return null;
            }

            let name = subAchievementInfo.name;
            if (subIdentifier) {
                const isSyllabification = String(subAchievementInfo.id) === String(ActivityType.Syllabification);
                name = `${name} (${isSyllabification ? 'Grup' : ''} ${subIdentifier})`;
            }

            return {
                id: key,
                name: name,
                category: subAchievementInfo.category,
                attempts: stats.attempts,
                completions: stats.completions || 0,
                successRate,
                errorRate
            };
        }).filter(Boolean) as any[];

        const mostChallenging = [...analyzedStats]
            .filter(s => s.successRate < 80 && s.completions < 3)
            .sort((a, b) => a.successRate - b.successRate)
            .slice(0, 5);

        const bestPerforming = [...analyzedStats]
            .filter(s => s.successRate >= 90 || s.completions >= 3)
            .sort((a, b) => b.successRate - a.successRate)
            .slice(0, 5);
        
        const recentActivities = [...analyzedStats]
            .sort((a, b) => {
                 const lastAttemptA = activityStats[a.id]?.history?.slice(-1)[0]?.timestamp || 0;
                 const lastAttemptB = activityStats[b.id]?.history?.slice(-1)[0]?.timestamp || 0;
                 return lastAttemptB - lastAttemptA;
            })
            .slice(0, 5);


        let recommendations: string[] = [];
        if (mostChallenging.length > 0) {
            const worst = mostChallenging[0];
            const localizedWorstName = worst.name;
            recommendations.push(t('parentReport.recommendationFocusOn', 'Çocuğunuzun en çok zorlandığı "{activityName}" etkinliği üzerine odaklanarak başlayabilirsiniz.').replace('{activityName}', localizedWorstName));
            recommendations.push(t('parentReport.recommendationModel', 'Bu etkinliği tekrar oynarken ona model olabilir ve doğru cevapları birlikte bulabilirsiniz.'));
        } else if (bestPerforming.length > 0) {
            const best = bestPerforming[0];
            const localizedBestName = best.name;
            recommendations.push(t('parentReport.recommendationReinforce', 'Çocuğunuz "{activityName}" konusunda çok başarılı! Bu alandaki özgüvenini pekiştirmek için benzer etkinlikleri deneyebilirsiniz.').replace('{activityName}', localizedBestName));
        } else {
             recommendations.push(t('parentReport.recommendationGeneral', 'Öğrenme yolculuğuna devam edin! Farklı kategorilerden etkinlikler deneyerek yeni beceriler kazanmasına yardımcı olabilirsiniz.'));
        }
        
        const fullReport: Record<string, any[]> = {};
        ACHIEVEMENTS.forEach(ach => {
            fullReport[ach.id] = [];
        });

        analyzedStats.forEach(stat => {
            if (stat.category && fullReport[stat.category]) {
                fullReport[stat.category].push(stat);
            }
        });

        for (const category in fullReport) {
            fullReport[category].sort((a: any, b: any) => a.name.localeCompare(b.name, 'tr'));
        }
        
        return { mostChallenging, bestPerforming, recentActivities, recommendations, fullReport };

    }, [activityStats, t]);

    const cardClassBase = palette?.cardClass ?? 'bg-white/80 p-4 sm:p-5 rounded-2xl shadow-md w-full';
    const cardIconClass = palette?.cardIconClass ?? 'w-7 h-7 text-slate-500 mr-3';
    const cardTitleClass = palette?.cardTitleClass ?? 'text-lg sm:text-xl font-bold text-slate-700';
    const cardDecoration = palette?.cardDecoration;
    const statLabelClass = palette?.statLabelClass ?? 'text-slate-600 font-semibold';
    const statValueSuccessClass = palette?.statValueSuccessClass ?? 'font-bold text-green-600';
    const statValueFailClass = palette?.statValueFailClass ?? 'font-bold text-red-600';
    const categoryBaseClass = palette?.categoryBaseClass ?? 'bg-white/80 p-4 sm:p-5 rounded-2xl shadow-md w-full';
    const backIconClass = palette?.backIconClass ?? 'text-slate-700';
    const sectionIconClass = palette?.sectionIconClass ?? 'w-8 h-8 text-slate-500 mr-3';
    const emptyStateTextClass = palette?.emptyStateTextClass ?? 'text-slate-500 text-sm';
    const recommendationsListClass = palette?.recommendationsListClass ?? 'list-disc list-inside space-y-2 text-slate-600 text-sm sm:text-base';
    const recentLabelClass = palette?.recentLabelClass ?? 'text-slate-600 font-semibold';
    const recentValueClass = palette?.recentValueClass ?? 'font-bold text-slate-500';

    const Card: React.FC<{ icon: React.FC<{ className?: string }>, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => {
        return (
            <div className={cardClassBase}>
                {cardDecoration && (
                    <span className={cardDecoration.className}>{cardDecoration.content}</span>
                )}
                <div className="flex items-center mb-3">
                    <Icon className={cardIconClass} />
                    <h2 className={cardTitleClass}>{title}</h2>
                </div>
                <div className="space-y-3">
                    {children}
                </div>
            </div>
        );
    };
    
    const StatItem: React.FC<{ name: string, rate: number, isSuccess: boolean }> = ({ name, rate, isSuccess }) => {
        return (
            <div className="flex items-center justify-between text-sm sm:text-base">
                <span className={statLabelClass}>{name}</span>
                <span className={isSuccess ? statValueSuccessClass : statValueFailClass}>
                    %{Math.round(rate)} {isSuccess ? t('parentReport.successLabel', 'Başarı') : t('parentReport.errorLabel', 'Hata')}
                </span>
            </div>
        );
    };
    
    const CategoryReportCard: React.FC<{
        category: { id: ActivityCategory; name: string; icon: React.FC<{ className?: string }>; color: string };
        activities: any[];
    }> = ({ category, activities }) => {
        if (activities.length === 0) return null;
        
        const { icon: Icon, name, color } = category;
        const colorClasses = getColorClasses(color);

        return (
            <div className={categoryBaseClass}>
                {themeVariant === 'cat' && (
                    <span className="absolute -left-2 -top-3 text-2xl opacity-30 select-none pointer-events-none">
                        {"\uD83D\uDC08"}
                    </span>
                )}
                {themeVariant === 'hilal' && (
                    <span className="absolute -left-2 -top-3 text-2xl opacity-30 select-none pointer-events-none">
                        {"\u2728"}
                    </span>
                )}
                {themeVariant === 'snow' && (
                    <span className="absolute -left-2 -top-3 text-2xl opacity-30 select-none pointer-events-none">
                        {"\u2744"}
                    </span>
                )}
                {themeVariant === 'fox' && (
                    <span className="absolute -left-2 -top-3 text-2xl opacity-30 select-none pointer-events-none">
                        {"\uD83E\uDD8A"}
                    </span>
                )}
                <div className="flex items-center mb-4">
                    <div className={palette?.categoryIconWrapperClass ?? `p-2 ${colorClasses.bg100} rounded-lg mr-3`}>
                        <Icon className={palette?.categoryIconClass ?? `w-6 h-6 ${colorClasses.text600}`} />
                    </div>
                    <h2 className={palette?.categoryTitleClass ?? `text-lg sm:text-xl font-bold ${colorClasses.text800}`}>{name}</h2>
                </div>
                <div className="space-y-4">
                    {activities.map((activity: any) => (
                        <div key={activity.id}>
                            <div className="flex justify-between items-center mb-1">
                                <span className={palette?.categoryActivityLabelClass ?? 'text-slate-700 font-semibold text-sm sm:text-base'}>{activity.name}</span>
                                <MasteryStars completions={activity.completions} />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-grow">
                                    <ProgressBar percentage={activity.successRate} />
                                </div>
                                <span className={palette?.categoryAttemptsClass ?? 'text-xs font-bold text-slate-500 w-20 text-right'}>
                                    {activity.attempts} {t('parentReport.attemptsLabel', 'deneme')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <div className={containerClass}>
            {palette?.overlay && (
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                    <div className={palette.overlay.gradientClass} />
                    {palette.overlay.decorations.map((dec, idx) => (
                        <span key={idx} className={dec.className}>
                            {dec.content}
                        </span>
                    ))}
                </div>
            )}
            <div className={headerWrapperClass}>
                <button 
                    onClick={onBack}
                    className={backButtonClass}
                    aria-label={t('parentReport.goBackAria', 'Geri dön')}
                >
                    <ArrowLeftIcon className={`w-8 h-8 ${backIconClass}`} />
                </button>
                <h1 className={headerTitleClass}>
                    {t('parentReport.title', 'Gelişim Raporu')}
                </h1>
                <div className="h-12 w-12 shrink-0" aria-hidden="true" />
            </div>

            <div className="w-full flex-grow overflow-y-auto pr-2 space-y-4">
                {/* Program Mode Progress - Unit Based System */}
                {(() => {
                    const unlockedUnits = getUnlockedUnits(activityStats, new Set<string>());
                    const maxUnit = unlockedUnits.size > 0 ? Math.max(...Array.from(unlockedUnits) as number[]) : 1;
                    const totalUnits = 10;
                    
                    const hasStarted = Object.keys(activityStats).length > 0 && Object.values(activityStats).some(s => s.completions > 0);
                    
                    let statusText = '';
                    if (!hasStarted) {
                        statusText = t('programReport.notStarted', 'Plan henüz başlatılmadı. Program modunu başlatınca burada ilerlemeyi göreceksiniz.');
                    } else if (maxUnit === totalUnits) {
                        statusText = t('programReport.completed', 'Tüm üniteleri tamamladınız! Harika bir başarı!');
                    } else if (maxUnit >= 7) {
                        statusText = t('programReport.advanced', 'İleri seviyedesiniz! {unit}. ünitede devam ediyorsunuz.').replace('{unit}', String(maxUnit));
                    } else if (maxUnit >= 4) {
                        statusText = t('programReport.progressing', 'Güzel ilerliyorsunuz! {unit}. ünitede çalışıyorsunuz.').replace('{unit}', String(maxUnit));
                    } else {
                        statusText = t('programReport.beginning', 'Başlangıç aşamasındasınız. {unit}. ünite ile devam edin!').replace('{unit}', String(maxUnit));
                    }
                    
                    return (
                        <Card icon={AcademicCapIcon} title={t('programReport.title', 'Program Modu İlerlemesi')}>
                            <div className="text-sm sm:text-base space-y-1">
                                <div className="flex items-center justify-between"><span className="font-semibold">{t('programReport.currentUnit', 'Mevcut Ünite')}</span><span>{maxUnit} / {totalUnits}</span></div>
                                <div className="flex items-center justify-between"><span className="font-semibold">{t('programReport.unlockedUnits', 'Açılan Üniteler')}</span><span>{unlockedUnits.size}</span></div>
                                <div className="flex items-center justify-between"><span className="font-semibold">{t('programReport.progress', 'İlerleme')}</span><span>{Math.round((maxUnit / totalUnits) * 100)}%</span></div>
                            </div>
                            <div className="pt-2 text-xs sm:text-sm text-slate-600">{statusText}</div>
                            <div className="pt-1 text-[11px] text-slate-500">{t('programReport.paceHint', 'Günde en fazla 1 ünite ilerleyebilirsiniz. Bu, sağlam öğrenme için önerilen tempodur.')}</div>
                        </Card>
                    );
                })()}

                <Card icon={XCircleIcon} title={t('parentReport.mostChallenging', 'En Çok Zorlanılanlar (Özet)')}>
                    {reportData.mostChallenging.length > 0 ? (
                        reportData.mostChallenging.map(item => (
                            <StatItem key={String(item.id)} name={item.name} rate={item.errorRate} isSuccess={false} />
                        ))
                    ) : (
                        <p className={emptyStateTextClass}>
                            {t('parentReport.noChallengesFound', 'Belirgin bir zorluk alanı bulunamadı. Harika gidiyor!')}
                        </p>
                    )}
                </Card>

                <Card icon={CheckCircleIcon} title={t('parentReport.bestPerforming', 'En Başarılı Alanlar (Özet)')}>
                    {reportData.bestPerforming.length > 0 ? (
                        reportData.bestPerforming.map(item => (
                            <StatItem key={String(item.id)} name={item.name} rate={item.successRate} isSuccess={true} />
                        ))
                    ) : (
                        <p className={emptyStateTextClass}>
                            {t('parentReport.noSuccessDataYet', 'Başarı verileri toplamak için daha fazla etkinlik tamamlanmalı.')}
                        </p>
                    )}
                </Card>

                <Card icon={RobotIcon} title={t('parentReport.recommendations', 'Öneriler')}>
                     <ul className={recommendationsListClass}>
                        {reportData.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </Card>
                
                <div className="w-full flex items-center pt-6 pb-2">
                 <ClipboardListIcon className={sectionIconClass}/>
                 <h2 className={sectionHeadingClass}>{t('parentReport.fullReport', 'Tüm Etkinlik Raporu')}</h2>
                </div>
                
                {ACHIEVEMENTS.map(category => (
                    <CategoryReportCard
                        key={category.id}
                        category={category}
                        activities={reportData.fullReport[category.id]}
                    />
                ))}

                <Card icon={AcademicCapIcon} title={t('parentReport.recentActivities', 'Son Aktiviteler')}>
                    {reportData.recentActivities.length > 0 ? (
                        reportData.recentActivities.map(item => (
                             <div key={item.id} className="flex items-center justify-between text-sm sm:text-base">
                                <span className={recentLabelClass}>
                                    {item.name}
                                </span>
                                <span className={recentValueClass}>
                                    {item.attempts} {t('parentReport.attemptsLabel', 'deneme')}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className={emptyStateTextClass}>
                            {t('parentReport.noRecentActivities', 'Henüz bir etkinlik tamamlanmadı.')}
                        </p>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default React.memo(ParentReportScreen);
