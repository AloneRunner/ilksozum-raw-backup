import React from "react";
import { CommunicationCategory } from "../types.ts";
import { getCurrentLanguage, t } from "../i18n/index.ts";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.tsx";

interface CommunicationCardMenuScreenProps {
  categories: CommunicationCategory[];
  onSelectCategory: (category: CommunicationCategory) => void;
  onBack: () => void;
  theme: string;
}

const deriveThemeFlags = (theme: string) => ({
  isCatTheme: theme === "kedi",
  isHilalTheme: theme === "ay2",
  isSnowTheme: theme === "kar",
  isFoxTheme: theme === "tilki",
  isZurafaTheme: theme === "zurafa",
});

type PaletteEntry = { gradient: string; border: string; textClass: string; iconClass: string; shadow: string };
type RGB = [number, number, number];

const COLOR_TONES: Record<string, { start: RGB; end: RGB; textClass: string; iconClass: string }> = {
  blue: { start: [59, 130, 246], end: [37, 99, 235], textClass: "text-blue-900", iconClass: "text-blue-700" },
  green: { start: [52, 211, 153], end: [16, 185, 129], textClass: "text-emerald-900", iconClass: "text-emerald-700" },
  yellow: { start: [253, 224, 71], end: [251, 191, 36], textClass: "text-amber-900", iconClass: "text-amber-700" },
  red: { start: [248, 113, 113], end: [239, 68, 68], textClass: "text-rose-900", iconClass: "text-rose-700" },
  orange: { start: [253, 132, 72], end: [249, 115, 22], textClass: "text-orange-900", iconClass: "text-orange-700" },
  purple: { start: [196, 181, 253], end: [168, 85, 247], textClass: "text-purple-900", iconClass: "text-purple-700" },
  indigo: { start: [129, 140, 248], end: [99, 102, 241], textClass: "text-indigo-900", iconClass: "text-indigo-700" },
  pink: { start: [244, 114, 182], end: [236, 72, 153], textClass: "text-pink-900", iconClass: "text-pink-700" },
  teal: { start: [45, 212, 191], end: [20, 184, 166], textClass: "text-teal-900", iconClass: "text-teal-700" },
  amber: { start: [251, 191, 36], end: [245, 158, 11], textClass: "text-amber-900", iconClass: "text-amber-700" },
  slate: { start: [148, 163, 184], end: [100, 116, 139], textClass: "text-slate-900", iconClass: "text-slate-700" },
};

const formatRgba = (rgb: RGB, alpha: number) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;

const buildThemePalette = ({
  startAlpha,
  endAlpha,
  borderAlpha,
  shadowAlpha,
  shadowTintAdjust = 0,
}: {
  startAlpha: number;
  endAlpha: number;
  borderAlpha: number;
  shadowAlpha: number;
  shadowTintAdjust?: number;
}): Record<string, PaletteEntry> => {
  const palette: Record<string, PaletteEntry> = {};
  Object.entries(COLOR_TONES).forEach(([color, tone]) => {
    const adjustedShadow: RGB = tone.end.map((value) => Math.max(0, Math.min(255, value + shadowTintAdjust))) as RGB;
    palette[color] = {
      gradient: `linear-gradient(135deg, ${formatRgba(tone.start, startAlpha)} 0%, ${formatRgba(tone.end, endAlpha)} 100%)`,
      border: formatRgba(tone.end, borderAlpha),
      textClass: tone.textClass,
      iconClass: tone.iconClass,
      shadow: `0 18px 28px ${formatRgba(adjustedShadow, shadowAlpha)}`,
    };
  });
  palette.default = palette.orange;
  return palette;
};

const catPalette = buildThemePalette({
  startAlpha: 0.24,
  endAlpha: 0.48,
  borderAlpha: 0.42,
  shadowAlpha: 0.24,
});

const hilalPalette = buildThemePalette({
  startAlpha: 0.18,
  endAlpha: 0.42,
  borderAlpha: 0.34,
  shadowAlpha: 0.2,
  shadowTintAdjust: -12,
});

const snowPalette = buildThemePalette({
  startAlpha: 0.16,
  endAlpha: 0.38,
  borderAlpha: 0.3,
  shadowAlpha: 0.18,
  shadowTintAdjust: -18,
});

const foxPalette = buildThemePalette({
  startAlpha: 0.2,
  endAlpha: 0.44,
  borderAlpha: 0.36,
  shadowAlpha: 0.22,
  shadowTintAdjust: -6,
});

const zurafaPalette = buildThemePalette({
  startAlpha: 0.22,
  endAlpha: 0.46,
  borderAlpha: 0.4,
  shadowAlpha: 0.23,
  shadowTintAdjust: -8,
});

// Deneme teması için daha yumuşak pastel renkler
const simplePalette = buildThemePalette({
  startAlpha: 0.12,
  endAlpha: 0.25,
  borderAlpha: 0.2,
  shadowAlpha: 0.1,
  shadowTintAdjust: -25,
});

const colorClasses: Record<string, { gradient: string; ring: string; text: string }> = {
  red: { gradient: "from-red-400 to-rose-500", ring: "ring-red-300", text: "text-white" },
  yellow: { gradient: "from-yellow-400 to-amber-500", ring: "ring-yellow-300", text: "text-white" },
  green: { gradient: "from-green-400 to-emerald-500", ring: "ring-green-300", text: "text-white" },
  blue: { gradient: "from-blue-400 to-sky-500", ring: "ring-blue-300", text: "text-white" },
  indigo: { gradient: "from-indigo-400 to-violet-500", ring: "ring-indigo-300", text: "text-white" },
  purple: { gradient: "from-purple-400 to-fuchsia-500", ring: "ring-purple-300", text: "text-white" },
  pink: { gradient: "from-pink-400 to-rose-500", ring: "ring-pink-300", text: "text-white" },
  teal: { gradient: "from-teal-400 to-emerald-500", ring: "ring-teal-300", text: "text-white" },
  amber: { gradient: "from-amber-500 to-orange-600", ring: "ring-amber-300", text: "text-white" },
  orange: { gradient: "from-orange-400 to-red-500", ring: "ring-orange-300", text: "text-white" },
  slate: { gradient: "from-slate-300 to-slate-400", ring: "ring-slate-200", text: "text-slate-800" },
};

const specialPalettes: Record<string, Record<string, PaletteEntry>> = {
  kedi: catPalette,
  ay2: hilalPalette,
  kar: snowPalette,
  tilki: foxPalette,
  zurafa: zurafaPalette,
  simple: simplePalette,
};

const CategoryButton: React.FC<{ category: CommunicationCategory; onClick: () => void; theme: string }> = ({
  category,
  onClick,
  theme,
}) => {
  const { title, icon: Icon, color, isUnderDevelopment } = category;
  const lang = getCurrentLanguage();
  const displayedTitle =
    lang === "tr"
      ? title
      : t(`communication.categories.${(category as any).id}`, title);

  const { isCatTheme, isHilalTheme, isSnowTheme, isFoxTheme, isZurafaTheme } = deriveThemeFlags(theme);
  const isSimpleTheme = theme === "simple";
  const paletteCollection = specialPalettes[theme];
  const specialPalette = paletteCollection?.[color as keyof typeof paletteCollection] || paletteCollection?.default;
  const defaultPalette = colorClasses[color as keyof typeof colorClasses] || colorClasses.slate;

  const specialFocusRingClass = isCatTheme
    ? "focus:ring-orange-200/60"
    : isHilalTheme
    ? "focus:ring-indigo-200/60"
    : isSnowTheme
    ? "focus:ring-sky-200/60"
    : isFoxTheme
    ? "focus:ring-amber-200/60"
    : isZurafaTheme
    ? "focus:ring-cyan-200/60"
    : isSimpleTheme
    ? "focus:ring-purple-200/60"
    : "focus:ring-sky-200/60";

  const isSpecialTheme = Boolean(paletteCollection);
  const baseClasses = isSpecialTheme
    ? `relative w-full flex items-center justify-between text-left px-4 py-4 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 ${specialFocusRingClass} border backdrop-blur-md`
    : `relative w-full flex items-center justify-start text-left px-4 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-br ${defaultPalette.gradient} ${defaultPalette.ring}`;

  const buttonStyle = isSpecialTheme
    ? {
        background: specialPalette?.gradient,
        borderColor: specialPalette?.border,
        boxShadow: specialPalette?.shadow,
      }
    : undefined;

  const labelClass = isSpecialTheme ? specialPalette?.textClass ?? "text-slate-900" : defaultPalette.text;
  const iconClass = isSpecialTheme ? specialPalette?.iconClass ?? "text-slate-700" : defaultPalette.text;

  const iconWrapperClass = isSpecialTheme
    ? "mr-4 rounded-2xl p-3 bg-white/30 border border-white/25"
    : "mr-4 rounded-2xl p-3 bg-white/20";

  const accentEmoji = isCatTheme ? "🐾" : isSimpleTheme ? "🦋" : isHilalTheme ? "✨" : isSnowTheme ? "❄️" : isFoxTheme ? "🦊" : isZurafaTheme ? "🦒" : null;
  const accentClass = isCatTheme
    ? "ml-2 text-2xl animate-bounce drop-shadow-[0_4px_10px_rgba(249,115,22,0.35)]"
    : isSimpleTheme
    ? "ml-2 text-2xl animate-pulse drop-shadow-[0_4px_12px_rgba(147,51,234,0.25)] text-purple-500"
    : isHilalTheme
    ? "ml-2 text-2xl animate-cat-wave drop-shadow-[0_4px_12px_rgba(79,70,229,0.35)] text-indigo-500"
    : isSnowTheme
    ? "ml-2 text-2xl animate-pulse drop-shadow-[0_4px_12px_rgba(56,189,248,0.25)] text-sky-500"
    : isFoxTheme
    ? "ml-2 text-2xl animate-bounce drop-shadow-[0_4px_12px_rgba(245,158,11,0.28)] text-amber-500"
    : isZurafaTheme
    ? "ml-2 text-2xl animate-bounce drop-shadow-[0_4px_12px_rgba(6,182,212,0.35)] text-cyan-500"
    : "";

  return (
    <button onClick={onClick} className={baseClasses} style={buttonStyle}>
      <div className={iconWrapperClass}>
        <Icon className={`w-8 h-8 ${iconClass}`} />
      </div>
      <h2 className={`flex-1 text-lg font-bold ${labelClass}`}>{displayedTitle}</h2>
      {accentEmoji ? <span className={accentClass}>{accentEmoji}</span> : null}
      {isUnderDevelopment && (
        <div className="absolute top-2 right-2 rounded-full bg-yellow-400/90 px-2 py-1 text-xs font-bold text-black shadow-sm">
          {t("app.developing", "Under development")}
        </div>
      )}
    </button>
  );
};

const CommunicationCardMenuScreen: React.FC<CommunicationCardMenuScreenProps> = ({
  categories,
  onSelectCategory,
  onBack,
  theme,
}) => {
  const { isCatTheme, isHilalTheme, isSnowTheme, isFoxTheme, isZurafaTheme } = deriveThemeFlags(theme);
  const isSimpleTheme = theme === "simple";

  const specialStyles = isCatTheme
    ? {
        titleColorClass: "text-orange-800 drop-shadow-[0_4px_12px_rgba(255,255,255,0.55)]",
        subtitleColorClass: "text-orange-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.4)]",
        headerWrapperClass: "rounded-3xl bg-white/55 px-4 py-3 shadow-xl shadow-orange-200/25 backdrop-blur-xl border border-orange-200/40",
        backButtonClass: "bg-orange-100/70 text-orange-700 hover:bg-orange-100/90",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass: "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/28 via-white/12 to-white/5 border border-orange-200/35 shadow-inner shadow-orange-200/18 backdrop-blur-md",
        overlayTopClass: "hidden sm:block absolute -top-8 -left-3 text-4xl opacity-70 drop-shadow-[0_10px_20px_rgba(249,115,22,0.2)]",
        overlayTopEmoji: "🐾",
        overlayBottomClass: "hidden sm:block absolute bottom-5 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_20px_rgba(249,115,22,0.18)]",
        overlayBottomEmoji: "🐱",
        listWrapperClass: "space-y-4 relative px-3 pb-5",
        titleAccentEmoji: "🐱",
        titleAccentClass: "ml-2 text-3xl animate-bounce drop-shadow-[0_4px_12px_rgba(249,115,22,0.3)] text-orange-500",
      }
    : isSimpleTheme
    ? {
        titleColorClass: "text-purple-900 drop-shadow-[0_4px_14px_rgba(147,51,234,0.18)]",
        subtitleColorClass: "text-pink-700 drop-shadow-[0_3px_10px_rgba(236,72,153,0.14)]",
        headerWrapperClass:
          "rounded-3xl bg-white/85 px-4 py-3 shadow-[0_22px_50px_rgba(147,51,234,0.12)] backdrop-blur-xl border border-purple-200/50",
        backButtonClass: "bg-white/85 text-purple-700 border border-purple-200/60 hover:bg-white",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass:
          "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/70 via-purple-50/30 to-pink-50/20 ring-1 ring-inset ring-purple-200/40 shadow-inner shadow-purple-200/20 backdrop-blur-3xl",
        overlayTopClass:
          "hidden sm:block absolute -top-8 left-6 text-4xl opacity-70 drop-shadow-[0_12px_26px_rgba(147,51,234,0.22)]",
        overlayTopEmoji: "🦋",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 right-6 text-4xl opacity-60 drop-shadow-[0_12px_24px_rgba(236,72,153,0.22)]",
        overlayBottomEmoji: "✨",
        listWrapperClass: "space-y-4 relative px-3 pb-6",
        titleAccentEmoji: "🦋",
        titleAccentClass: "ml-2 text-3xl animate-pulse drop-shadow-[0_4px_12px_rgba(147,51,234,0.25)] text-purple-500",
      }
    : isHilalTheme
    ? {
        titleColorClass: "text-indigo-800 drop-shadow-[0_4px_12px_rgba(221,227,255,0.6)]",
        subtitleColorClass: "text-indigo-900 drop-shadow-[0_3px_10px_rgba(199,210,254,0.45)]",
        headerWrapperClass: "rounded-3xl bg-white/50 px-4 py-3 shadow-xl shadow-indigo-200/25 backdrop-blur-xl border border-indigo-200/40",
        backButtonClass: "bg-indigo-100/60 text-indigo-700 hover:bg-indigo-100/80",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass: "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/26 via-indigo-50/14 to-white/6 border border-indigo-200/35 shadow-inner shadow-indigo-200/18 backdrop-blur-md",
        overlayTopClass: "hidden sm:block absolute -top-8 -left-2 text-4xl opacity-70 drop-shadow-[0_10px_20px_rgba(79,70,229,0.2)]",
        overlayTopEmoji: "🌙",
        overlayBottomClass: "hidden sm:block absolute bottom-5 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_20px_rgba(79,70,229,0.18)]",
        overlayBottomEmoji: "✨",
        listWrapperClass: "space-y-4 relative px-3 pb-5",
        titleAccentEmoji: "✨",
        titleAccentClass: "ml-2 text-3xl animate-cat-wave drop-shadow-[0_4px_12px_rgba(79,70,229,0.28)] text-indigo-500",
      }
    : isSnowTheme
    ? {
        titleColorClass: "text-sky-900 drop-shadow-[0_4px_14px_rgba(148,197,253,0.5)]",
        subtitleColorClass: "text-sky-800 drop-shadow-[0_3px_10px_rgba(191,219,254,0.4)]",
        headerWrapperClass: "rounded-3xl bg-white/45 px-4 py-3 shadow-xl shadow-sky-200/25 backdrop-blur-2xl border border-sky-100/40",
        backButtonClass: "bg-sky-100/60 text-sky-700 hover:bg-sky-100/80",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass: "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/24 via-sky-100/14 to-sky-200/10 border border-sky-100/35 shadow-inner shadow-sky-100/18 backdrop-blur-lg",
        overlayTopClass: "hidden sm:block absolute -top-8 -left-2 text-4xl opacity-70 drop-shadow-[0_10px_20px_rgba(125,211,252,0.2)]",
        overlayTopEmoji: "❄️",
        overlayBottomClass: "hidden sm:block absolute bottom-5 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_20px_rgba(148,197,253,0.2)]",
        overlayBottomEmoji: "❄️",
        listWrapperClass: "space-y-4 relative px-3 pb-5",
        titleAccentEmoji: "❄️",
        titleAccentClass: "ml-2 text-3xl animate-pulse drop-shadow-[0_4px_12px_rgba(125,211,252,0.28)] text-sky-500",
      }
    : isFoxTheme
    ? {
        titleColorClass: "text-amber-900 drop-shadow-[0_4px_12px_rgba(255,255,255,0.55)]",
        subtitleColorClass: "text-emerald-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.45)]",
        headerWrapperClass: "rounded-3xl bg-white/52 px-4 py-3 shadow-xl shadow-emerald-100/24 backdrop-blur-xl border border-amber-100/40",
        backButtonClass: "bg-amber-100/60 text-emerald-700 hover:bg-amber-100/80",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass: "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/24 via-amber-50/12 to-emerald-50/10 border border-amber-100/35 shadow-inner shadow-emerald-100/18 backdrop-blur-lg",
        overlayTopClass: "hidden sm:block absolute -top-8 -left-2 text-4xl opacity-68 drop-shadow-[0_10px_20px_rgba(245,158,11,0.2)]",
        overlayTopEmoji: "✨",
        overlayBottomClass: "hidden sm:block absolute bottom-5 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_20px_rgba(56,161,105,0.2)]",
        overlayBottomEmoji: "🦊",
        listWrapperClass: "space-y-4 relative px-3 pb-5",
        titleAccentEmoji: "🦊",
        titleAccentClass: "ml-2 text-3xl animate-bounce drop-shadow-[0_4px_12px_rgba(245,158,11,0.28)] text-amber-500",
      }
    : isZurafaTheme
    ? {
        titleColorClass: "text-cyan-800 drop-shadow-[0_4px_12px_rgba(255,255,255,0.55)]",
        subtitleColorClass: "text-cyan-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.4)]",
        headerWrapperClass: "rounded-3xl bg-white/55 px-4 py-3 shadow-xl shadow-cyan-200/25 backdrop-blur-xl border border-cyan-200/40",
        backButtonClass: "bg-cyan-100/70 text-cyan-700 hover:bg-cyan-100/90",
        containerClass: "relative w-full flex-grow overflow-y-auto pr-2 pt-2",
        overlayClass: "absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/28 via-white/12 to-white/5 border border-cyan-200/35 shadow-inner shadow-cyan-200/18 backdrop-blur-md",
        overlayTopClass: "hidden sm:block absolute -top-8 -left-3 text-4xl opacity-70 drop-shadow-[0_10px_20px_rgba(6,182,212,0.2)]",
        overlayTopEmoji: "🦒",
        overlayBottomClass: "hidden sm:block absolute bottom-5 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_20px_rgba(6,182,212,0.18)]",
        overlayBottomEmoji: "🌸",
        listWrapperClass: "space-y-4 relative px-3 pb-5",
        titleAccentEmoji: "🦒",
        titleAccentClass: "ml-2 text-3xl animate-bounce drop-shadow-[0_4px_12px_rgba(6,182,212,0.3)] text-cyan-500",
      }
    : null;

  const titleColorClass = specialStyles?.titleColorClass ?? "text-white text-shadow-soft";
  const subtitleColorClass = specialStyles?.subtitleColorClass ?? "text-white/90 text-shadow-soft";
  const headerWrapperClass = specialStyles?.headerWrapperClass ?? "";
  const backButtonClass = specialStyles?.backButtonClass ?? "bg-white/30 text-white hover:bg-white/60";
  const containerClass = specialStyles?.containerClass ?? "w-full flex-grow overflow-y-auto pr-2 animate-fade-in";
  const listWrapperClass = specialStyles?.listWrapperClass ?? "space-y-4";
  const titleAccentEmoji = specialStyles?.titleAccentEmoji;
  const titleAccentClass = specialStyles?.titleAccentClass ?? "";

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 animate-fade-in">
      <div className={`w-full flex items-center mb-5 landscape:mb-3 relative ${headerWrapperClass}`}>
        <button
          onClick={onBack}
          className={`absolute left-0 rounded-full p-2 transition-colors ${backButtonClass}`}
          aria-label={t("app.back", "Go back")}
        >
          <ArrowLeftIcon className="w-7 h-7" />
        </button>
        <h1 className={`flex-1 text-center text-xl sm:text-2xl landscape:text-lg font-black ${titleColorClass}`}>
          {t("communication.title", "Communication Cards")}
          {titleAccentEmoji ? <span className={titleAccentClass}>{titleAccentEmoji}</span> : null}
        </h1>
      </div>

      <p className={`text-center ${subtitleColorClass} mb-6 landscape:mb-3 text-base landscape:text-sm -mt-2 landscape:-mt-1`}>
        {t("communication.subtitle", "Pick a starting point to build a sentence.")}
      </p>

      <div className={containerClass}>
        {specialStyles && (
          <>
            <div className={specialStyles.overlayClass} />
            <span className={specialStyles.overlayTopClass}>{specialStyles.overlayTopEmoji}</span>
            <span className={specialStyles.overlayBottomClass}>{specialStyles.overlayBottomEmoji}</span>
          </>
        )}
        <div className={listWrapperClass}>
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} onClick={() => onSelectCategory(category)} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CommunicationCardMenuScreen);
