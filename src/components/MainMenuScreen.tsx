import React from "react";
import { getCurrentLanguage } from "../i18n/index.ts";
import { t } from "../i18n/index.ts";
import MenuButton from "./ui/MenuButton.tsx";
import MenuOrb from "./ui/MenuOrb.tsx";
import CosmicOrb from "./ui/CosmicOrb.tsx";
import ShootingStars from "./ui/ShootingStars.tsx";
import StoryIcon from "./icons/StoryIcon.tsx";
import BasketIcon from "./icons/BasketIcon.tsx";
import SparklesIcon from "./icons/SparklesIcon.tsx";
import SudokuIcon from "./icons/SudokuIcon.tsx";
import EyeIcon from "./icons/EyeIcon.tsx";
import StarIcon from "./icons/StarIcon.tsx";
import PersonIcon from "./icons/PersonIcon.tsx";
import AcademicCapIcon from "./icons/AcademicCapIcon.tsx";
import FiveWOneHIcon from "./icons/FiveWOneHIcon.tsx";

type MainMenuCategory =
  | "letterSound"
  | "objectCategories"
  | "objectCategoriesIntl"
  | "conceptActivities"
  | "reasoningActivities"
  | "fiveWOneH"
  | "fineMotor"
  | "relativeComparison"
  | "programMode";

interface MainMenuScreenProps {
  onSelectCategory: (category: MainMenuCategory) => void;
  onStartRandomMode: () => void;
  onSelectParentTips: () => void;
  onSelectSettings?: () => void;
  theme: string;
}

const MainMenuScreen: React.FC<MainMenuScreenProps> = ({
  onSelectCategory,
  onStartRandomMode,
  onSelectParentTips,
  theme,
}) => {
  const lang = getCurrentLanguage();
  const showObjectsIntl = lang !== "tr";
  const isSimpleTheme = theme === "simple";
  const isCatTheme = theme === "kedi";
  const isHilalTheme = theme === "ay2";
  const isSnowTheme = theme === "kar";
  const isFoxTheme = theme === "tilki";
  const isZurafaTheme = theme === "zurafa";
  const isDenemeTheme = theme === "deneme";
  const isDeneme2Theme = theme === "deneme2";
  const specialPalette = isSimpleTheme
    ? {
        titleColor: "text-purple-900 drop-shadow-[0_14px_32px_rgba(147,51,234,0.15)]",
        subtitleColor: "text-pink-700 drop-shadow-[0_8px_18px_rgba(236,72,153,0.12)]",
        headerWrapper:
          "px-6 py-4 rounded-3xl border border-purple-200/50 bg-white/85 shadow-[0_32px_70px_rgba(147,51,234,0.12)] backdrop-blur-xl",
        titleWrapper:
          "px-6 py-6 rounded-3xl border border-purple-200/60 bg-white/90 shadow-[0_40px_90px_rgba(147,51,234,0.15)] backdrop-blur-2xl",
        subtitleExtras: "tracking-tight",
        titleExtras: "tracking-tight sm:tracking-normal",
        greetingEmoji: "💖",
        greetingAnimation: "animate-pulse drop-shadow-[0_8px_22px_rgba(236,72,153,0.28)]",
        overlayGradient:
          "bg-gradient-to-br from-white/70 via-purple-50/30 to-pink-50/20 ring-1 ring-inset ring-purple-200/40 shadow-[0_48px_110px_rgba(147,51,234,0.12)] backdrop-blur-3xl",
        overlayTopEmoji: "🦋",
        overlayTopClass:
          "hidden sm:block absolute -top-8 left-6 text-4xl opacity-70 drop-shadow-[0_16px_32px_rgba(147,51,234,0.25)]",
        overlayBottomEmoji: "✨",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 right-6 text-4xl opacity-60 drop-shadow-[0_18px_36px_rgba(236,72,153,0.28)]",
        gridPadding: "px-2 pb-6 sm:px-4",
      }
    : isCatTheme
    ? {
        titleColor: "text-orange-700 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]",
        subtitleColor: "text-orange-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.55)]",
        headerWrapper:
          "px-5 py-3 rounded-3xl bg-white/70 border border-orange-200/50 shadow-xl shadow-orange-200/30 backdrop-blur-lg",
        titleWrapper:
          "px-6 py-4 rounded-3xl bg-white/75 border border-orange-200/60 shadow-[0_18px_40px_rgba(249,115,22,0.22)] backdrop-blur-lg",
        subtitleExtras: "tracking-wide",
        titleExtras: "tracking-tight",
        greetingEmoji: "\uD83D\uDC08",
        greetingAnimation: "animate-cat-wave drop-shadow-[0_3px_8px_rgba(249,115,22,0.35)]",
        overlayGradient:
          "bg-gradient-to-b from-white/40 via-white/22 to-white/12 border border-orange-200/45 shadow-inner shadow-orange-200/30 backdrop-blur-lg",
        overlayTopEmoji: "\uD83D\uDC31",
        overlayTopClass:
          "hidden sm:block absolute -top-9 -left-3 text-5xl opacity-70 drop-shadow-[0_10px_25px_rgba(249,115,22,0.25)]",
        overlayBottomEmoji: "\uD83D\uDC08",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_25px_rgba(249,115,22,0.25)]",
        gridPadding: "px-3 pb-5",
      }
    : isHilalTheme
    ? {
        titleColor: "text-indigo-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.6)]",
        subtitleColor: "text-indigo-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.55)]",
        headerWrapper:
          "px-5 py-3 rounded-3xl bg-white/70 border border-indigo-200/50 shadow-xl shadow-indigo-200/30 backdrop-blur-lg",
        titleWrapper:
          "px-6 py-4 rounded-3xl bg-white/75 border border-indigo-200/60 shadow-[0_18px_40px_rgba(99,102,241,0.22)] backdrop-blur-lg",
        subtitleExtras: "tracking-wide",
        titleExtras: "tracking-tight",
        greetingEmoji: "\uD83C\uDF19",
        greetingAnimation: "animate-cat-wave drop-shadow-[0_4px_12px_rgba(79,70,229,0.35)]",
        overlayGradient:
          "bg-gradient-to-b from-white/42 via-indigo-50/24 to-white/12 border border-indigo-200/45 shadow-inner shadow-indigo-200/25 backdrop-blur-lg",
        overlayTopEmoji: "\u2728",
        overlayTopClass:
          "hidden sm:block absolute -top-9 -left-3 text-5xl opacity-70 drop-shadow-[0_10px_25px_rgba(79,70,229,0.25)]",
        overlayBottomEmoji: "\uD83C\uDF1F",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_25px_rgba(79,70,229,0.25)]",
        gridPadding: "px-3 pb-5",
      }
    : isSnowTheme
    ? {
        titleColor: "text-sky-100 drop-shadow-[0_4px_18px_rgba(15,23,42,0.55)]",
        subtitleColor: "text-sky-50 drop-shadow-[0_3px_14px_rgba(15,23,42,0.5)]",
        headerWrapper:
          "px-5 py-3 rounded-3xl bg-white/40 border border-sky-100/60 shadow-xl shadow-sky-200/40 backdrop-blur-2xl",
        titleWrapper:
          "px-6 py-4 rounded-3xl bg-white/45 border border-sky-100/60 shadow-[0_24px_48px_rgba(96,165,250,0.28)] backdrop-blur-2xl",
        subtitleExtras: "tracking-wide uppercase",
        titleExtras: "tracking-tight",
        greetingEmoji: "\u2744",
        greetingAnimation: "animate-cat-wave drop-shadow-[0_4px_16px_rgba(148,197,255,0.45)]",
        overlayGradient:
          "bg-gradient-to-b from-white/55 via-sky-100/30 to-sky-200/18 border border-sky-100/45 shadow-inner shadow-sky-200/30 backdrop-blur-2xl",
        overlayTopEmoji: "\u2745",
        overlayTopClass:
          "hidden sm:block absolute -top-9 -left-4 text-5xl opacity-75 drop-shadow-[0_12px_26px_rgba(148,197,255,0.3)]",
        overlayBottomEmoji: "\u2744",
        overlayBottomClass:
          "hidden sm:block absolute bottom-7 -right-3 text-4xl opacity-75 drop-shadow-[0_12px_26px_rgba(148,197,255,0.28)]",
        gridPadding: "px-3 pb-6",
      }
    : isFoxTheme
    ? {
        titleColor: "text-amber-800 drop-shadow-[0_4px_14px_rgba(255,255,255,0.55)]",
        subtitleColor: "text-emerald-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.45)]",
        headerWrapper:
          "px-5 py-3 rounded-3xl bg-white/55 border border-amber-100/60 shadow-xl shadow-emerald-100/30 backdrop-blur-lg",
        titleWrapper:
          "px-6 py-4 rounded-3xl bg-white/60 border border-amber-200/55 shadow-[0_18px_40px_rgba(245,158,11,0.22)] backdrop-blur-lg",
        subtitleExtras: "tracking-wide",
        titleExtras: "tracking-tight",
        greetingEmoji: "\uD83E\uDD8A",
        greetingAnimation: "animate-bounce drop-shadow-[0_4px_12px_rgba(245,158,11,0.32)]",
        overlayGradient:
          "bg-gradient-to-b from-white/35 via-amber-50/16 to-emerald-50/12 border border-amber-100/40 shadow-inner shadow-emerald-100/25 backdrop-blur-lg",
        overlayTopEmoji: "\u2728",
        overlayTopClass:
          "hidden sm:block absolute -top-9 -left-4 text-5xl opacity-70 drop-shadow-[0_12px_24px_rgba(245,158,11,0.28)]",
        overlayBottomEmoji: "\uD83C\uDF3F",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 -right-2 text-4xl opacity-60 drop-shadow-[0_12px_24px_rgba(56,161,105,0.28)]",
        gridPadding: "px-3 pb-5",
      }
    : isZurafaTheme
    ? {
        titleColor: "text-cyan-700 drop-shadow-[0_4px_14px_rgba(255,255,255,0.65)]",
        subtitleColor: "text-cyan-900 drop-shadow-[0_3px_10px_rgba(255,255,255,0.55)]",
        headerWrapper:
          "px-5 py-3 rounded-3xl bg-white/70 border border-cyan-200/50 shadow-xl shadow-cyan-200/30 backdrop-blur-lg",
        titleWrapper:
          "px-6 py-4 rounded-3xl bg-white/75 border border-cyan-200/60 shadow-[0_18px_40px_rgba(6,182,212,0.22)] backdrop-blur-lg",
        subtitleExtras: "tracking-wide",
        titleExtras: "tracking-tight",
        greetingEmoji: "\uD83E\uDD92",
        greetingAnimation: "animate-cat-wave drop-shadow-[0_3px_8px_rgba(6,182,212,0.35)]",
        overlayGradient:
          "bg-gradient-to-b from-white/40 via-white/22 to-white/12 border border-cyan-200/45 shadow-inner shadow-cyan-200/30 backdrop-blur-lg",
        overlayTopEmoji: "\uD83E\uDD92",
        overlayTopClass:
          "hidden sm:block absolute -top-9 -left-3 text-5xl opacity-70 drop-shadow-[0_10px_25px_rgba(6,182,212,0.25)]",
        overlayBottomEmoji: "\uD83C\uDF3C",
        overlayBottomClass:
          "hidden sm:block absolute bottom-6 -right-2 text-4xl opacity-60 drop-shadow-[0_10px_25px_rgba(6,182,212,0.25)]",
        gridPadding: "px-3 pb-5",
      }
    : null;
  const isSpecialTheme = Boolean(specialPalette);

  const menuItems = [
    // Program Mode (experimental beta)
    {
      id: "programMode" as const,
      icon: AcademicCapIcon,
      title: t('programMode.menuTitle', 'Program Modu (Deneme)'),
      subtitle: t('programMode.menuSubtitle', 'Uzman planıyla günlük oturum başlat'),
      color: 'emerald' as const,
    },
    ...(lang === "tr"
      ? [
          {
            id: "letterSound" as const,
            icon: StoryIcon,
            title: t("menu.letterSound.title", "Harf ve Sesler"),
            subtitle: t(
              "menu.letterSound.subtitle",
              "Harfleri ve sesleri \u00f6\u011fren, hecele ve oku."
            ),
            color: "sky" as const,
          },
        ]
      : []),
    ...(lang === "tr"
      ? [
          {
            id: "objectCategories" as const,
            icon: BasketIcon,
            title: t("menu.objects.title", "Nesneleri Tan\u0131yal\u0131m"),
            subtitle: t(
              "menu.objects.subtitle",
              "Hayvanlar\u0131, meyveleri ve daha fazlas\u0131n\u0131 \u00f6\u011fren."
            ),
            color: "amber" as const,
          },
        ]
      : []),
    ...(!showObjectsIntl
      ? []
      : [
          {
            id: "objectCategoriesIntl" as const,
            icon: BasketIcon,
            title: t("categories.objectsIntl.title") || "Objects",
            subtitle:
              t("categories.objectsIntl.subtitle") ||
              "Curated objects for non-TR languages",
            color: "amber" as const,
          },
        ]),
    {
      id: "fiveWOneH" as const,
      icon: FiveWOneHIcon,
      title: t('menu.fiveWOneH.title', '5N1K'),
      subtitle: `${t('menu.fiveWOneH.subtitle', 'Kim • Ne • Nerede • Ne Zaman • Neden • Nasıl')} — ${t('menu.fiveWOneH.developingNote', 'Geliştiriliyor')}`,
      color: 'emerald' as const,
    },
    {
      id: "conceptActivities" as const,
      icon: SparklesIcon,
      title: t("menu.concepts.title", "Kavram Etkinlikleri"),
      subtitle: t(
        "menu.concepts.subtitle",
        "Renkleri, \u015fekilleri ve z\u0131t kavramlar\u0131 \u00f6\u011fren."
      ),
      color: "teal" as const,
    },
    {
      id: "reasoningActivities" as const,
      icon: SudokuIcon,
      title: t("menu.reasoning.title", "Ak\u0131l Oyunlar\u0131"),
      subtitle: t(
        "menu.reasoning.subtitle",
        "Haf\u0131za, sudoku ve mant\u0131k oyunlar\u0131 oyna."
      ),
      color: "indigo" as const,
    },
    {
      id: "fineMotor" as const,
      icon: EyeIcon,
      title: t("menu.fineMotor.title", lang === "tr" ? "\u0130nce Motor" : "Fine Motor"),
      subtitle: `${t(
        "menu.fineMotor.subtitle",
        lang === "tr" ? "\u00c7izgi Takip, Boyama ve daha fazlas\u0131" : "Line Tracing, Coloring, and more"
      )} — ${t('menu.fineMotor.developingNote', 'Geliştiriliyor')}`,
      color: "rose" as const,
    },
    // Relative comparison activity
    {
      id: "relativeComparison" as const,
      icon: SparklesIcon,
      title: t('experimental.relativeComparison.title', 'Göreceli Karşılaştırma'),
      subtitle: t('experimental.relativeComparison.instruction', 'Açılan iki kartı karşılaştır ve soruyu cevapla.'),
      color: 'teal' as const,
    },
  ];

  const textColorClass = specialPalette
    ? specialPalette.titleColor
    : "text-white text-shadow-soft";
  const subtitleColorClass = specialPalette
    ? specialPalette.subtitleColor
    : "text-white text-shadow-soft";
  const titleWrapperClass = specialPalette?.titleWrapper ?? "";
  const titleWrapperOpacityClass =
    isFoxTheme && specialPalette ? "bg-white/65" : "";
  const subtitleExtras = specialPalette?.subtitleExtras ?? "";
  const titleExtras = specialPalette?.titleExtras ?? "";
  const greetingEmoji = specialPalette?.greetingEmoji ?? "\uD83D\uDC4B";
  const greetingAnimation = specialPalette?.greetingAnimation ?? "";
  const gridPadding = specialPalette?.gridPadding ?? "";

  // Special cosmic layout for "deneme2" theme (independent)
  if (isDeneme2Theme) {
    const paletteFor = (id: MainMenuCategory): any => {
      switch (id) {
        case 'programMode': return 'ember';     // yeşil
        case 'letterSound': return 'galaxy';    // mavi
        case 'objectCategories': return 'nova'; // turuncu
        case 'fiveWOneH': return 'terra';       // yeşil
        case 'conceptActivities': return 'quasar'; // camgöbeği
        case 'reasoningActivities': return 'comet'; // mor
        case 'fineMotor': return 'nebula';      // pembe
        case 'relativeComparison': return 'star'; // kırmızı
        default: return 'galaxy';
      }
    };

    return (
      <div className="relative flex flex-col items-center justify-start h-full w-full mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden">
  {/* Deep space gradient background - daha koyu ve derin */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a0e27] via-[#050816] to-[#000000]" />
  
  {/* Twinkling stars background - daha parlak yıldızlar */}
  <div className="absolute inset-0 -z-18 opacity-100">
    {Array.from({ length: 120 }, (_, i) => (
      <div
        key={i}
        className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
      />
    ))}
  </div>
  
  {/* Grid pattern - uzay koordinat sistemi */}
  <div className="absolute inset-0 -z-15 [background-image:radial-gradient(circle_at_center,_rgba(147,197,253,0.15)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />
  
  {/* Nebula glow effects - arka planda renkli parlama */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-17" />
  <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] -z-17" />
  
        {/* shooting stars */}
        <ShootingStars count={12} />

        {/* Header - daha belirgin */}
        <div className="w-full text-center mb-6 pt-4 z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_8px_24px_rgba(147,197,253,0.5)] font-[Poppins] tracking-wide">
            ✨ Kozmik Keşif
          </h1>
          <p className="mt-2 text-blue-200/80 font-medium text-sm">
            {t('menu.chooseActivity', 'Bir macera seç.')}
          </p>
        </div>

        {/* Grid of CosmicOrbs (two columns, larger orbs) */}
        <div className="relative w-full flex-grow overflow-y-auto pr-1 pb-24 z-10">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 justify-items-center items-start px-2 sm:px-4">
            {/* Random Mode */}
            <CosmicOrb icon={StarIcon} title={t('menu.random.title','Rastgele Mod')} onClick={onStartRandomMode} palette={'sun' as any} size="xl" showOrbit />
            {menuItems.map((item) => (
              <CosmicOrb
                key={item.id}
                icon={item.icon}
                title={item.title}
                onClick={() => onSelectCategory(item.id)}
                palette={paletteFor(item.id)}
                size="xl"
                showOrbit
              />
            ))}
            <CosmicOrb icon={PersonIcon} title={t('menu.parentTips.title','Ebeveyn İpuçları')} onClick={onSelectParentTips} palette={'galaxy' as any} size="xl" showOrbit />
          </div>
          {lang !== 'tr' && (
            <div className="text-center text-xs text-blue-300/60 mt-3">
              {t('settings.languageNote','Letter activities are currently Turkish-only.')}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special cosmic layout for "deneme" theme
  if (isDenemeTheme) {
    return (
      <div className="relative flex flex-col items-center justify-start h-full max-w-lg landscape:max-w-5xl mx-auto p-4 sm-landscape:p-2 animate-fade-in overflow-hidden rounded-[28px]">
        {/* Cosmic gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D122D] via-[#0b0f2b] to-[#010310]" />
        {/* Stars dotted grid with slow pan */}
        <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(1.2px_1.2px_at_1.2px_1.2px,rgba(255,255,255,0.9)_1.2px,transparent_1.2px)] [background-size:22px_22px] animate-pan-slow" />

        {/* Header */}
        <div className="w-full text-center mb-3">
          <p className="text-slate-300 text-sm sm:text-base font-semibold mb-1">
            {t("menu.hello", "Merhaba")} <span className="inline-block animate-wave">👋</span>
          </p>
          <h1 className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-sky-300 to-cyan-200 drop-shadow-[0_6px_16px_rgba(56,189,248,0.35)]">
            {t("menu.appTitle", "İlk Sözüm")}
          </h1>
          <p className="mt-1 text-slate-400 text-xs sm:text-sm">{t("menu.chooseActivity", "Hadi bir etkinlik seçelim.")}</p>
        </div>

        {/* Orbs grid */}
        <div className="relative w-full flex-grow overflow-y-auto pr-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6">
            {/* Random Mode as first orb */}
            <MenuOrb
              icon={StarIcon}
              title={t("menu.random.title", "Rastgele Mod")}
              onClick={onStartRandomMode}
              color="rose"
            />

            {menuItems.map((item, idx) => (
              <MenuOrb
                key={item.id}
                icon={item.icon}
                title={item.title}
                onClick={() => onSelectCategory(item.id)}
                color={(idx % 6 === 0 ? "sky" : idx % 6 === 1 ? "amber" : idx % 6 === 2 ? "emerald" : idx % 6 === 3 ? "purple" : idx % 6 === 4 ? "blue" : "pink") as any}
              />
            ))}

            {/* Parent Tips orb */}
            <MenuOrb
              icon={PersonIcon}
              title={t("menu.parentTips.title", "Ebeveyn İpuçları")}
              onClick={onSelectParentTips}
              color="cyan"
            />
          </div>
          {lang !== "tr" && (
            <div className="col-span-2 sm:col-span-3 text-center text-xs text-slate-400 mt-1">
              {t(
                "settings.languageNote",
                "Letter activities are currently Turkish-only."
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg landscape:max-w-5xl mx-auto p-4 sm-landscape:p-2 animate-fade-in">
      <div
        className={`w-full text-center mb-4 landscape:mb-2 ${titleWrapperClass} ${titleWrapperOpacityClass}`}
      >
        <p
          className={`text-lg landscape:text-base sm-landscape:text-sm font-semibold mb-1 ${subtitleColorClass} ${subtitleExtras}`}
        >
          {t("menu.hello", "Merhaba")}
          <span
            className={`ml-1 ${greetingAnimation}`}
            aria-hidden="true"
          >
            {greetingEmoji}
          </span>
        </p>
        <h1
          className={`text-base sm:text-lg landscape:text-base sm-landscape:text-sm font-black ${textColorClass} ${titleExtras}`}
        >
          {t("menu.appTitle", "İlk Sözüm: Otizm & Okul Öncesi")}
        </h1>
      </div>

      <div
        className={`w-full flex-grow overflow-y-auto pr-2 animate-fade-in relative ${
          isSpecialTheme ? "pt-2" : ""
        }`}
      >
        {isSpecialTheme && specialPalette && (
          <>
            <div className={`absolute inset-0 rounded-[32px] ${specialPalette.overlayGradient}`} />
            <span className={specialPalette.overlayTopClass}>
              {specialPalette.overlayTopEmoji}
            </span>
            <span className={specialPalette.overlayBottomClass}>
              {specialPalette.overlayBottomEmoji}
            </span>
          </>
        )}
        <div
          className={`relative grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-3 ${
            gridPadding
          }`}
        >
          <MenuButton
            icon={StarIcon}
            title={t("menu.random.title", "Rastgele Mod")}
            subtitle={t(
              "menu.random.subtitle",
              "Se\u00e7ili etkinliklerden kar\u0131\u015f\u0131k oyna"
            )}
            onClick={onStartRandomMode}
            color="rose"
            theme={theme}
          />
          {menuItems.map((item) => (
            <MenuButton
              key={item.id}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => onSelectCategory(item.id)}
              color={item.color}
              theme={theme}
            >
              {item.id === 'programMode' && (
                <span
                  className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/85 border border-emerald-200 px-2 py-0.5 text-xs font-semibold text-emerald-700 shadow-sm"
                  aria-label={t('programMode.units', 'Üniteler')}
                >
                  📚 {t('programMode.unitsCount', '{count} Ünite').replace('{count}', '10')}
                </span>
              )}
            </MenuButton>
          ))}
          {lang !== "tr" && (
            <div className="col-span-1 sm:col-span-2 landscape:col-span-3 text-center text-xs text-slate-500 mt-1">
              {t(
                "settings.languageNote",
                "Letter activities are currently Turkish-only."
              )}
            </div>
          )}
          <MenuButton
            icon={PersonIcon}
            title={t("menu.parentTips.title", "Ebeveynler \u0130\u00e7in \u0130pu\u00e7lar\u0131")}
            subtitle={t(
              "menu.parentTips.subtitle",
              "Uygulamay\u0131 daha verimli kullan\u0131n"
            )}
            onClick={onSelectParentTips}
            color="purple"
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainMenuScreen);
