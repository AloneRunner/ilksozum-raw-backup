import React from "react";
import { OBJECT_CATEGORIES } from "../constants.ts";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.tsx";
import { t, getCurrentLanguage } from "../i18n/index.ts";
import { translateLabel } from "../utils/translate.ts";
import { imageData } from "../services/database/imageData.ts";
import { ActivityStats } from "../types.ts";
import ProgressIndicator from "./ui/ProgressIndicator.tsx";
import CosmicBackdrop from "./ui/CosmicBackdrop.tsx";
import PanelStars from "./ui/PanelStars.tsx";

import {
  SIMPLE_THEME_COLORS,
} from "../themes/simpleTheme.tsx";

interface ObjectCategoriesMenuScreenProps {
  onSelectCategory: (categoryId: string) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
  isPremium: boolean;
  categoriesOverride?: { id: string; title: string; imageId: number; disabled?: boolean }[];
  titleOverride?: string;
  /** Optional handler to add a category to the print pool (categoryId, color) */
  onAddCategoryToPrintPool?: (categoryId: string, color: keyof typeof SIMPLE_THEME_COLORS) => void;
}



const ObjectCategoriesMenuScreen: React.FC<ObjectCategoriesMenuScreenProps> = ({
  onSelectCategory,
  onBack,
  activityStats,
  theme,
  enabledActivities,
  isPremium,
  categoriesOverride,
  titleOverride,
  onAddCategoryToPrintPool,
}) => {
  const isSimpleTheme = theme === "simple";
  const isSimple2Theme = theme === "simple2";
  const lang = getCurrentLanguage();
  const categories = categoriesOverride || OBJECT_CATEGORIES;
  const gradientPalette = ["sky", "teal", "amber", "purple", "rose", "indigo", "emerald", "orange"];

  const localizedCategories = categories.map((category) => ({
    ...category,
    title: translateLabel(String(category.title), lang),
  }));

  // Cosmic theme - deneme2: Planet-like menu buttons with space backdrop
  if (theme === 'deneme2') {
    return (
      <>
        <CosmicBackdrop variant="rich" />
        <div className="relative z-10 flex h-full max-w-4xl landscape:max-w-6xl flex-col items-center justify-start animate-fade-in px-4 py-4 landscape:py-3 overflow-hidden">
          <PanelStars count={96} />
          <div className="relative mb-3 landscape:mb-2 flex w-full items-center">
            <button
              onClick={onBack}
              className="absolute left-0 rounded-full p-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-300/40 backdrop-blur-sm transition-colors"
              aria-label={t("app.back", "Go back")}
              type="button"
            >
              <ArrowLeftIcon className="h-7 w-7 landscape:h-6 landscape:w-6 text-white drop-shadow" />
            </button>
            <div className="flex-1 flex justify-center">
              <div className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-600/80 via-cyan-500/80 to-indigo-600/80 border border-cyan-300/50 shadow-lg shadow-cyan-400/30 backdrop-blur-sm">
                <h1 className="text-xl sm:text-2xl landscape:text-lg font-extrabold text-white drop-shadow">
                  {titleOverride || t("menu.objects.title", "Nesneleri Tanıyalım")}
                </h1>
              </div>
            </div>
          </div>

          <div className="animate-fade-in w-full flex-grow overflow-y-auto pr-2">
            <div className="touch-pan-y grid grid-cols-2 gap-3 sm:gap-4 landscape:grid-cols-4">
              {localizedCategories.map((category, idx) => {
                const image = imageData.find((item) => item.id === category.imageId);
                const stats =
                  activityStats[category.id] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                const isDisabled =
                  Boolean((category as { disabled?: boolean }).disabled) || !enabledActivities.has(category.id);
                const imageUrl = image?.imageUrl || "/images/placeholder.png";
                const ringColors = [
                  'from-cyan-400 via-blue-500 to-indigo-600',
                  'from-sky-400 via-cyan-500 to-teal-500',
                  'from-indigo-500 via-blue-500 to-cyan-400',
                  'from-teal-500 via-cyan-500 to-blue-500',
                ];
                const ring = ringColors[idx % ringColors.length];

                return (
                  <div key={category.id} className="group relative">
                    <button
                      type="button"
                      onClick={() => onSelectCategory(category.id)}
                      disabled={isDisabled}
                      className={`w-full min-h-[180px] landscape:min-h-[160px] flex flex-col items-center justify-start gap-2 rounded-2xl p-4 landscape:p-3 pt-4 landscape:pt-3 pb-12 landscape:pb-10 transition-all duration-200 ${isDisabled ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'} bg-white/5 border border-cyan-300/30 backdrop-blur-md`}
                    >
                      {/* Planet-like orb */}
                      <div className={`relative flex items-center justify-center w-24 h-24 landscape:w-20 landscape:h-20 rounded-full bg-gradient-to-br ${ring} shadow-[0_0_24px_rgba(56,189,248,0.35)]`}> 
                        <div className="absolute inset-0 rounded-full border border-white/20 opacity-70" />
                        <div className="absolute -inset-1 rounded-full blur-xl bg-cyan-400/10" />
                        <div className="relative flex items-center justify-center w-[76%] h-[76%] rounded-full bg-black/20 border border-white/20 overflow-hidden">
                          <img src={imageUrl} alt={String(category.title)} className="w-14 h-14 landscape:w-12 landscape:h-12 object-contain drop-shadow" />
                        </div>
                      </div>
                      <div className="mt-2 landscape:mt-1 text-center text-base landscape:text-sm font-bold leading-tight text-white drop-shadow-sm">
                        {String(category.title)}
                      </div>
                      {stats.attempts > 0 && (
                        <ProgressIndicator
                          mode="aggregate"
                          attempts={stats.attempts}
                          completions={stats.completions}
                          totalCorrect={stats.totalCorrect}
                          totalQuestions={stats.totalQuestions}
                        />
                      )}
                    </button>
                    {onAddCategoryToPrintPool && isPremium && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                          onAddCategoryToPrintPool(category.id, color);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                            onAddCategoryToPrintPool(category.id, color);
                          }
                        }}
                        className="absolute top-2 right-2 p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-300/50 shadow-md transition-all hover:scale-110 cursor-pointer z-10"
                        title={t('print.addToPrintPool', 'Yazdırma Listesine Ekle')}
                      >
                        <svg className="w-4 h-4 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Simple2 teması - Simple ile aynı tasarım, mor/pembe renklerle
  if (isSimple2Theme) {
    const titleColorClass = "text-purple-900";
    const iconColorClass = "text-purple-700";
    
    return (
      <div className="flex h-full max-w-4xl landscape:max-w-6xl flex-col items-center justify-start animate-fade-in px-4 py-4 landscape:py-3">
        <div className="relative mb-3 landscape:mb-2 flex w-full items-center">
          <button
            onClick={onBack}
            className="absolute left-0 rounded-full bg-purple-200 p-2 transition-colors hover:bg-purple-300"
            aria-label={t("app.back", "Go back")}
            type="button"
          >
            <ArrowLeftIcon className={`h-7 w-7 landscape:h-6 landscape:w-6 ${iconColorClass}`} />
          </button>
          <h1 className={`flex-1 text-center text-xl sm:text-2xl landscape:text-lg font-black ${titleColorClass}`}>
            {titleOverride || t("menu.objects.title", "Nesneleri Tanıyalım")}
          </h1>
        </div>

        <div className="animate-fade-in w-full flex-grow overflow-y-auto pr-2">
          <div className="touch-pan-y grid grid-cols-2 gap-3 sm:gap-4 landscape:grid-cols-4">
            {localizedCategories.map((category) => {
              const image = imageData.find((item) => item.id === category.imageId);
              const stats =
                activityStats[category.id] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
              const isDisabled =
                Boolean((category as { disabled?: boolean }).disabled) || !enabledActivities.has(category.id);
              const imageUrl = image?.imageUrl || "/images/placeholder.png";

              return (
                <div key={category.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    disabled={isDisabled}
                    className={`w-full min-h-[180px] landscape:min-h-[160px] flex flex-col items-center justify-start gap-2 rounded-xl p-4 landscape:p-3 pt-4 landscape:pt-3 pb-12 landscape:pb-10 transition-all duration-150 ${isDisabled ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'} bg-white border-2 border-purple-200`}
                  >
                    <div className="flex h-24 w-24 landscape:h-20 landscape:w-20 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-100">
                      <img src={imageUrl} alt={String(category.title)} className="h-20 w-20 landscape:h-16 landscape:w-16 object-contain" />
                    </div>
                    <div className="mt-2 landscape:mt-1 text-center text-base landscape:text-sm font-bold leading-tight text-purple-900">{String(category.title)}</div>
                    {stats.attempts > 0 && (
                      <ProgressIndicator
                        mode="aggregate"
                        attempts={stats.attempts}
                        completions={stats.completions}
                        totalCorrect={stats.totalCorrect}
                        totalQuestions={stats.totalQuestions}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Simple tema - Mor/pembe renklerle (Kavram Etkinlikleri gibi)
  if (isSimpleTheme) {
    const titleColorClass = "text-purple-900";
    const iconColorClass = "text-purple-700";
    
    return (
      <div className="flex h-full max-w-4xl landscape:max-w-6xl flex-col items-center justify-start animate-fade-in px-4 py-4 landscape:py-3">
        <div className="relative mb-3 landscape:mb-2 flex w-full items-center">
          <button
            onClick={onBack}
            className="absolute left-0 rounded-full bg-purple-200/50 p-2 transition-colors hover:bg-purple-200"
            aria-label={t("app.back", "Go back")}
            type="button"
          >
            <ArrowLeftIcon className={`h-7 w-7 landscape:h-6 landscape:w-6 ${iconColorClass}`} />
          </button>
          <h1 className={`flex-1 text-center text-xl sm:text-2xl landscape:text-lg font-black ${titleColorClass}`}>
            {titleOverride || t("menu.objects.title", "Nesneleri Tanıyalım")}
          </h1>
        </div>

        <div className="animate-fade-in w-full flex-grow overflow-y-auto pr-2">
          <div className="touch-pan-y grid grid-cols-2 gap-3 sm:gap-4 landscape:grid-cols-4">
            {localizedCategories.map((category) => {
              const image = imageData.find((item) => item.id === category.imageId);
              const stats =
                activityStats[category.id] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
              const isDisabled =
                Boolean((category as { disabled?: boolean }).disabled) || !enabledActivities.has(category.id);
              const imageUrl = image?.imageUrl || "/images/placeholder.png";

              return (
                <div key={category.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    disabled={isDisabled}
                    className={`w-full min-h-[180px] landscape:min-h-[160px] flex flex-col items-center justify-start gap-2 rounded-xl p-4 landscape:p-3 pt-4 landscape:pt-3 pb-12 landscape:pb-10 transition-all duration-150 ${isDisabled ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'} bg-white/80 backdrop-blur-md border-2 border-purple-200/50`}
                  >
                    <div className="flex h-24 w-24 landscape:h-20 landscape:w-20 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-100">
                      <img src={imageUrl} alt={String(category.title)} className="h-20 w-20 landscape:h-16 landscape:w-16 object-contain" />
                    </div>
                    <div className="mt-2 landscape:mt-1 text-center text-base landscape:text-sm font-bold leading-tight text-purple-900">{String(category.title)}</div>
                    {stats.attempts > 0 && (
                      <ProgressIndicator
                        mode="aggregate"
                        attempts={stats.attempts}
                        completions={stats.completions}
                        totalCorrect={stats.totalCorrect}
                        totalQuestions={stats.totalQuestions}
                      />
                    )}
                  </button>
                  {onAddCategoryToPrintPool && isPremium && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                        onAddCategoryToPrintPool(category.id, color);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.stopPropagation();
                          const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                          onAddCategoryToPrintPool(category.id, color);
                        }
                      }}
                      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-slate-50 transition-all hover:scale-110 cursor-pointer z-10 border border-slate-200"
                      title={t('print.addToPrintPool', 'Yazdırma Listesine Ekle')}
                    >
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Video temaları - Temaya özel renklerle yeni tasarım
  const getThemeColors = (theme: string) => {
    const themeColors: Record<string, { gradient: string; border: string; text: string; button: string; buttonHover: string; titleBg: string; titleText: string }> = {
      gunes: { gradient: 'from-yellow-100 to-orange-100', border: 'border-yellow-300', text: 'text-orange-900', button: 'bg-gradient-to-r from-yellow-300 to-amber-400', buttonHover: 'hover:from-yellow-400 hover:to-amber-500', titleBg: 'bg-gradient-to-br from-yellow-100/85 via-amber-100/80 to-orange-100/75 border border-yellow-300/60 shadow-2xl shadow-amber-400/30 backdrop-blur-lg', titleText: 'text-orange-800 drop-shadow-[0_4px_16px_rgba(255,255,255,0.7)] font-extrabold' },
      tilki: { gradient: 'from-green-100 to-emerald-100', border: 'border-green-300', text: 'text-green-900', button: 'bg-green-200', buttonHover: 'hover:bg-green-300', titleBg: 'bg-white/55 border border-amber-100/60 shadow-xl shadow-emerald-100/30 backdrop-blur-lg', titleText: 'text-amber-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.55)]' },
      ay: { gradient: 'from-indigo-100 to-blue-100', border: 'border-indigo-300', text: 'text-indigo-900', button: 'bg-indigo-200', buttonHover: 'hover:bg-indigo-300', titleBg: 'bg-white/70 border border-indigo-200/50 shadow-xl shadow-indigo-200/30 backdrop-blur-lg', titleText: 'text-indigo-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.6)]' },
      geceorman: { gradient: 'from-indigo-200 to-purple-200', border: 'border-indigo-400', text: 'text-indigo-900', button: 'bg-indigo-300', buttonHover: 'hover:bg-indigo-400', titleBg: 'bg-white/70 border border-indigo-200/50 shadow-xl shadow-indigo-200/30 backdrop-blur-lg', titleText: 'text-indigo-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.6)]' },
      yagmur: { gradient: 'from-slate-100 to-gray-200', border: 'border-slate-300', text: 'text-slate-900', button: 'bg-slate-200', buttonHover: 'hover:bg-slate-300', titleBg: 'bg-white/70 border border-slate-200/50 shadow-xl shadow-slate-200/30 backdrop-blur-lg', titleText: 'text-slate-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      kus: { gradient: 'from-sky-100 to-cyan-100', border: 'border-sky-300', text: 'text-sky-900', button: 'bg-sky-200', buttonHover: 'hover:bg-sky-300', titleBg: 'bg-white/70 border border-sky-200/50 shadow-xl shadow-sky-200/30 backdrop-blur-lg', titleText: 'text-sky-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      tilki2: { gradient: 'from-lime-100 to-green-100', border: 'border-lime-300', text: 'text-lime-900', button: 'bg-lime-200', buttonHover: 'hover:bg-lime-300', titleBg: 'bg-white/70 border border-lime-200/50 shadow-xl shadow-lime-200/30 backdrop-blur-lg', titleText: 'text-lime-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      kedi: { gradient: 'from-green-100 to-teal-100', border: 'border-green-300', text: 'text-green-900', button: 'bg-green-200', buttonHover: 'hover:bg-green-300', titleBg: 'bg-white/70 border border-orange-200/50 shadow-xl shadow-orange-200/30 backdrop-blur-lg', titleText: 'text-orange-700 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      kar: { gradient: 'from-sky-50 to-blue-100', border: 'border-sky-200', text: 'text-sky-900', button: 'bg-sky-100', buttonHover: 'hover:bg-sky-200', titleBg: 'bg-white/40 border border-sky-100/60 shadow-xl shadow-sky-200/40 backdrop-blur-2xl', titleText: 'text-sky-100 drop-shadow-[0_4px_18px_rgba(15,23,42,0.55)]' },
      gunbatimi: { gradient: 'from-orange-100 to-red-100', border: 'border-orange-300', text: 'text-orange-900', button: 'bg-orange-200', buttonHover: 'hover:bg-orange-300', titleBg: 'bg-white/70 border border-orange-200/50 shadow-xl shadow-orange-200/30 backdrop-blur-lg', titleText: 'text-orange-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      ay2: { gradient: 'from-indigo-100 to-violet-100', border: 'border-indigo-300', text: 'text-indigo-900', button: 'bg-indigo-200', buttonHover: 'hover:bg-indigo-300', titleBg: 'bg-white/70 border border-indigo-200/50 shadow-xl shadow-indigo-200/30 backdrop-blur-lg', titleText: 'text-indigo-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.6)]' },
      zurafa: { gradient: 'from-cyan-100 to-teal-100', border: 'border-cyan-300', text: 'text-cyan-900', button: 'bg-cyan-200', buttonHover: 'hover:bg-cyan-300', titleBg: 'bg-white/60 border border-cyan-200/50 shadow-xl shadow-cyan-200/30 backdrop-blur-lg', titleText: 'text-cyan-700 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      geometri: { gradient: 'from-rose-100 to-pink-100', border: 'border-rose-300', text: 'text-rose-900', button: 'bg-rose-200', buttonHover: 'hover:bg-rose-300', titleBg: 'bg-white/70 border border-rose-200/50 shadow-xl shadow-rose-200/30 backdrop-blur-lg', titleText: 'text-rose-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]' },
      deneme: { gradient: 'from-purple-100 to-pink-100', border: 'border-purple-300', text: 'text-purple-900', button: 'bg-gradient-to-r from-purple-300 to-pink-400', buttonHover: 'hover:from-purple-400 hover:to-pink-500', titleBg: 'bg-gradient-to-br from-purple-100/85 via-pink-100/80 to-red-100/75 border border-purple-300/60 shadow-2xl shadow-purple-400/30 backdrop-blur-lg', titleText: 'text-purple-800 drop-shadow-[0_4px_16px_rgba(255,255,255,0.7)] font-extrabold' },
    };
    return themeColors[theme] || { gradient: 'from-white to-gray-50', border: 'border-gray-200', text: 'text-gray-900', button: 'bg-gray-100', buttonHover: 'hover:bg-gray-200', titleBg: 'bg-white/70', titleText: 'text-gray-800' };
  };

  const colors = getThemeColors(theme);

  return (
    <div className="flex h-full max-w-4xl landscape:max-w-6xl flex-col items-center justify-start animate-fade-in px-4 py-4 landscape:py-3">
      <div className={`relative mb-3 landscape:mb-2 flex w-full items-center px-5 py-3 landscape:py-2 rounded-3xl ${colors.titleBg}`}>
        <button
          onClick={onBack}
          className="absolute left-2 rounded-full bg-white/50 backdrop-blur-sm p-2 transition-colors hover:bg-white/70"
          aria-label={t("app.back", "Go back")}
          type="button"
        >
          <ArrowLeftIcon className={`h-7 w-7 landscape:h-6 landscape:w-6 ${colors.text}`} />
        </button>
        <h1 className={`flex-1 text-center text-xl sm:text-2xl landscape:text-lg font-black ${colors.titleText}`}>
          {titleOverride || t("menu.objects.title", "Nesneleri Tanıyalım")}
        </h1>
      </div>

      <div className="animate-fade-in w-full flex-grow overflow-y-auto pr-2">
        <div className="touch-pan-y grid grid-cols-2 gap-3 sm:gap-4 landscape:grid-cols-4">
          {localizedCategories.map((category) => {
            const image = imageData.find((item) => item.id === category.imageId);
            const stats =
              activityStats[category.id] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
            const isDisabled =
              Boolean((category as { disabled?: boolean }).disabled) || !enabledActivities.has(category.id);
            const imageUrl = image?.imageUrl || "/images/placeholder.png";

            return (
              <div key={category.id} className="group relative">
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  disabled={isDisabled}
                  className={`w-full min-h-[180px] landscape:min-h-[160px] flex flex-col items-center justify-start gap-2 rounded-xl p-4 landscape:p-3 pt-4 landscape:pt-3 pb-12 landscape:pb-10 transition-all duration-150 ${isDisabled ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'} bg-white/80 backdrop-blur-md border-2 ${colors.border}`}
                >
                  <div className={`flex h-24 w-24 landscape:h-20 landscape:w-20 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} shadow-md`}>
                    <img src={imageUrl} alt={String(category.title)} className="h-20 w-20 landscape:h-16 landscape:w-16 object-contain drop-shadow-sm" />
                  </div>
                  <div className={`mt-2 landscape:mt-1 text-center text-base landscape:text-sm font-bold leading-tight ${colors.text}`}>{String(category.title)}</div>
                  {stats.attempts > 0 && (
                    <ProgressIndicator
                      mode="aggregate"
                      attempts={stats.attempts}
                      completions={stats.completions}
                      totalCorrect={stats.totalCorrect}
                      totalQuestions={stats.totalQuestions}
                    />
                  )}
                </button>
                {onAddCategoryToPrintPool && isPremium && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                      onAddCategoryToPrintPool(category.id, color);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                        const color = gradientPalette[(localizedCategories.indexOf(category)) % gradientPalette.length] as keyof typeof SIMPLE_THEME_COLORS;
                        onAddCategoryToPrintPool(category.id, color);
                      }
                    }}
                    className={`absolute top-2 right-2 p-2 rounded-full ${colors.button} ${colors.buttonHover} shadow-md transition-all hover:scale-110 cursor-pointer z-10 border ${colors.border}`}
                    title={t('print.addToPrintPool', 'Yazdırma Listesine Ekle')}
                  >
                    <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ObjectCategoriesMenuScreen;
