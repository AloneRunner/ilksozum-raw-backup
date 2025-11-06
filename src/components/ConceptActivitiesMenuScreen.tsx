import React from "react";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.tsx";
import { ActivityType, ActivityStats } from "../types.ts";
import ShapesIcon from "./icons/ShapesIcon.tsx";
import QuantityIcon from "./icons/QuantityIcon.tsx";
import LocationIcon from "./icons/LocationIcon.tsx";
import TimeIcon from "./icons/TimeIcon.tsx";
import ProgressIndicator from "./ui/ProgressIndicator.tsx";
import MenuButton from "./ui/MenuButton.tsx";
import WideNarrowIcon from "./icons/WideNarrowIcon.tsx";
import TextureIcon from "./icons/TextureIcon.tsx";
import ArrowsRightLeftIcon from "./icons/ArrowsRightLeftIcon.tsx";
import { getCurrentLanguage, t } from "../i18n/index.ts";

interface ConceptActivity {
  type: ActivityType;
  title: string;
  subtitle: string;
}

interface ConceptTab {
  name: string;
  icon: React.FC<{ className?: string }>;
  activities: ConceptActivity[];
}

interface ConceptActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const buildTabs = (lang: ReturnType<typeof getCurrentLanguage>): ConceptTab[] => {
  const isTr = lang === "tr";
  return [
    {
      name: isTr ? "Temel" : t("concepts.basic", "Basic"),
      icon: ShapesIcon,
      activities: [
        {
          type: ActivityType.YesNo,
          title: isTr ? "Evet / Hayır" : t("concepts.activities.yesNo", "Yes / No"),
          subtitle: isTr ? "Görseli onayla veya reddet" : t("concepts.subtitles.approveReject", "Approve or reject the image"),
        },
        {
          type: ActivityType.Colors,
          title: isTr ? "Renkler" : t("concepts.activities.colors", "Colors"),
          subtitle: isTr ? "İstenen rengi bul" : t("concepts.subtitles.findColor", "Find the requested color"),
        },
        {
          type: ActivityType.Shapes,
          title: isTr ? "Şekiller" : t("concepts.activities.shapes", "Shapes"),
          subtitle: isTr ? "Doğru şekli seç" : t("concepts.subtitles.rightShape", "Pick the right shape"),
        },
        {
          type: ActivityType.Emotions,
          title: isTr ? "Duygular" : t("concepts.activities.emotions", "Emotions"),
          subtitle: isTr ? "Yüz ifadelerini tanı" : t("concepts.subtitles.recognizeFaces", "Recognize facial expressions"),
        },
        {
          type: ActivityType.ParlakMat,
          title: isTr ? "Parlak / Mat" : t("concepts.activities.parlakMat", "Shiny / Matte"),
          subtitle: isTr ? "Yansımaları öğren" : t("concepts.subtitles.learnReflections", "Learn reflections"),
        },
        {
          type: ActivityType.SeffafOpak,
          title: isTr ? "Şeffaf / Opak" : t("concepts.activities.seffafOpak", "Transparent / Opaque"),
          subtitle: isTr ? "Görünürlüğü öğren" : t("concepts.subtitles.understandTransparency", "Understand transparency"),
        },
        {
          type: ActivityType.StraightCurved,
          title: isTr ? "Düz / Eğri" : t("concepts.activities.straightCurved", "Straight / Curved"),
          subtitle: isTr ? "Çizgileri tanı" : t("concepts.subtitles.recognizeLines", "Recognize lines"),
        },
      ],
    },
    {
      name: isTr ? "Boyutsal" : t("concepts.dimensional", "Dimensional"),
      icon: WideNarrowIcon,
      activities: [
        {
          type: ActivityType.BigSmall,
          title: isTr ? "Büyük / Küçük" : t("concepts.activities.bigSmall", "Big / Small"),
          subtitle: isTr ? "Boyutları karşılaştır" : t("concepts.subtitles.compareSizes", "Compare sizes"),
        },
        {
          type: ActivityType.LongShort,
          title: isTr ? "Uzun / Kısa" : t("concepts.activities.longShort", "Long / Short"),
          subtitle: isTr ? "Uzunlukları ayırt et" : t("concepts.subtitles.tellLengths", "Tell lengths apart"),
        },
        {
          type: ActivityType.ThinThick,
          title: isTr ? "İnce / Kalın" : t("concepts.activities.thinThick", "Thin / Thick"),
          subtitle: isTr ? "Kalınlıkları öğren" : t("concepts.subtitles.learnThickness", "Learn thickness"),
        },
        {
          type: ActivityType.WideNarrow,
          title: isTr ? "Geniş / Dar" : t("concepts.activities.wideNarrow", "Wide / Narrow"),
          subtitle: isTr ? "Genişlikleri anla" : t("concepts.subtitles.understandWidth", "Understand width"),
        },
        {
          type: ActivityType.HeavyLight,
          title: isTr ? "Ağır / Hafif" : t("concepts.activities.heavyLight", "Heavy / Light"),
          subtitle: isTr ? "Ağırlıkları karşılaştır" : t("concepts.subtitles.compareWeights", "Compare weights"),
        },
        {
          type: ActivityType.DerinSig,
          title: isTr ? "Derin / Sığ" : t("concepts.activities.derinSig", "Deep / Shallow"),
          subtitle: isTr ? "Derinlikleri ölç" : t("concepts.subtitles.measureDepths", "Measure depths"),
        },
        {
          type: ActivityType.KalabalikTenha,
          title: isTr ? "Kalabalık / Tenha" : t("concepts.activities.kalabalikTenha", "Crowded / Empty"),
          subtitle: isTr ? "Yoğunlukları anla" : t("concepts.subtitles.understandCrowding", "Understand crowding"),
        },
      ],
    },
    {
      name: isTr ? "Dokunsal" : t("concepts.tactile", "Tactile"),
      icon: TextureIcon,
      activities: [
        {
          type: ActivityType.HardSoft,
          title: isTr ? "Sert / Yumuşak" : t("concepts.activities.hardSoft", "Hard / Soft"),
          subtitle: isTr ? "Dokuları hisset" : t("concepts.subtitles.feelTextures", "Feel textures"),
        },
        {
          type: ActivityType.RoughSmooth,
          title: isTr ? "Pürüzlü / Pürüzsüz" : t("concepts.activities.roughSmooth", "Rough / Smooth"),
          subtitle: isTr ? "Yüzeyleri tanı" : t("concepts.subtitles.knowSurfaces", "Know surfaces"),
        },
        {
          type: ActivityType.DikenliPuruzsuz,
          title: isTr ? "Dikenli / Pürüzsüz" : t("concepts.activities.dikenliPuruzsuz", "Spiky / Smooth"),
          subtitle: isTr ? "Sivri yüzeyleri keşfet" : t("concepts.subtitles.discoverSpiky", "Discover spiky surfaces"),
        },
        {
          type: ActivityType.TembelCaliskan,
          title: isTr ? "Tembel / Çalışkan" : t("concepts.activities.tembelCaliskan", "Lazy / Hardworking"),
          subtitle: isTr ? "Hareketi karşılaştır" : t("concepts.subtitles.compareActivity", "Compare activity levels"),
        },
        {
          type: ActivityType.WetDry,
          title: isTr ? "Islak / Kuru" : t("concepts.activities.wetDry", "Wet / Dry"),
          subtitle: isTr ? "Hisleri tanı" : t("concepts.subtitles.recognizeMoisture", "Recognize moisture"),
        },
        {
          type: ActivityType.BitterSweet,
          title: isTr ? "Acı / Tatlı" : t("concepts.activities.bitterSweet", "Bitter / Sweet"),
          subtitle: isTr ? "Tatları keşfet" : t("concepts.subtitles.discoverTastes", "Discover tastes"),
        },
        {
          type: ActivityType.TazeBayat,
          title: isTr ? "Taze / Bayat" : t("concepts.activities.tazeBayat", "Fresh / Stale"),
          subtitle: isTr ? "Durumları fark et" : t("concepts.subtitles.noticeFreshness", "Notice freshness"),
        },
      ],
    },
    {
      name: isTr ? "Konum" : t("concepts.position", "Spatial"),
      icon: LocationIcon,
      activities: [
        {
          type: ActivityType.OnUnder,
          title: isTr ? "Üst / Alt" : t("concepts.activities.onUnder", "Up / Down"),
          subtitle: isTr ? "Konumları öğren" : t("concepts.subtitles.learnPositions", "Learn positions"),
        },
        {
          type: ActivityType.BelowAbove,
          title: isTr ? "Altında / Üstünde" : t("concepts.activities.belowAbove", "Below / Above"),
          subtitle: isTr ? "Konumla eşleştir" : t("concepts.subtitles.matchPlacement", "Match the placement"),
        },
        {
          type: ActivityType.InFrontOfBehind,
          title: isTr ? "Ön / Arka" : t("concepts.activities.inFrontOfBehind", "Front / Back"),
          subtitle: isTr ? "Yönleri keşfet" : t("concepts.subtitles.discoverDirections", "Discover directions"),
        },
        {
          type: ActivityType.InsideOutside,
          title: isTr ? "İç / Dış" : t("concepts.activities.insideOutside", "Inside / Outside"),
          subtitle: isTr ? "Konum karşılaştır" : t("concepts.subtitles.comparePlacement", "Compare placement"),
        },
        {
          type: ActivityType.LeftRight,
          title: isTr ? "Sol / Sağ" : t("concepts.activities.leftRight", "Left / Right"),
          subtitle: isTr ? "Yönleri pekiştir" : t("concepts.subtitles.strengthenDirections", "Strengthen directions"),
        },
        {
          type: ActivityType.NearFar,
          title: isTr ? "Yakın / Uzak" : t("concepts.activities.nearFar", "Near / Far"),
          subtitle: isTr ? "Mesafeyi ölç" : t("concepts.subtitles.measureDistance", "Measure distance"),
        },
        {
          type: ActivityType.HighLow,
          title: isTr ? "Yüksek / Alçak" : t("concepts.activities.highLow", "High / Low"),
          subtitle: isTr ? "Seviyeleri fark et" : t("concepts.subtitles.noticeLevels", "Notice levels"),
        },
        {
          type: ActivityType.TersDuz,
          title: isTr ? "Ters / Düz" : t("concepts.activities.tersDuz", "Upside Down / Upright"),
          subtitle: isTr ? "Yön değişimini fark et" : t("concepts.subtitles.noticeOrientation", "Notice orientation"),
        },
      ],
    },
    {
      name: isTr ? "Zaman" : t("concepts.time", "Temporal"),
      icon: TimeIcon,
      activities: [
        {
          type: ActivityType.BeforeAfter,
          title: isTr ? "Önce / Sonra" : t("concepts.activities.beforeAfter", "Before / After"),
          subtitle: isTr ? "Sıralamayı öğren" : t("concepts.subtitles.learnOrder", "Learn order"),
        },
        {
          type: ActivityType.DayNight,
          title: isTr ? "Gündüz / Gece" : t("concepts.activities.dayNight", "Day / Night"),
          subtitle: isTr ? "Zamanı ayırt et" : t("concepts.subtitles.distinguishTime", "Distinguish time"),
        },
        {
          type: ActivityType.FastSlow,
          title: isTr ? "Hızlı / Yavaş" : t("concepts.activities.fastSlow", "Fast / Slow"),
          subtitle: isTr ? "Hızları karşılaştır" : t("concepts.subtitles.compareSpeeds", "Compare speeds"),
        },
      ],
    },
    {
      name: isTr ? "Miktar" : t("concepts.quantity", "Quantity"),
      icon: QuantityIcon,
      activities: [
        {
          type: ActivityType.FewMuch,
          title: isTr ? "Az / Çok" : t("concepts.activities.fewMuch", "Few / Many"),
          subtitle: isTr ? "Miktarları kıyasla" : t("concepts.subtitles.compareAmounts", "Compare amounts"),
        },
        {
          type: ActivityType.HalfQuarterWhole,
          title: isTr ? "Yarım / Çeyrek" : t("concepts.activities.halfQuarterWhole", "Half / Quarter / Whole"),
          subtitle: isTr ? "Parçaları tanı" : t("concepts.subtitles.recognizeFractions", "Recognize fractions"),
        },
        {
          type: ActivityType.FullEmpty,
          title: isTr ? "Dolu / Boş" : t("concepts.activities.fullEmpty", "Full / Empty"),
          subtitle: isTr ? "Kapları karşılaştır" : t("concepts.subtitles.compareContainers", "Compare containers"),
        },
        {
          type: ActivityType.OddEven,
          title: isTr ? "Tek / Çift" : t("concepts.activities.oddEven", "Odd / Even"),
          subtitle: isTr ? "Sayı türünü bul" : t("concepts.subtitles.findNumberType", "Find the number type"),
        },
      ],
    },
    {
      name: isTr ? "Karşılaştırma" : t("concepts.relative", "Comparisons"),
      icon: ArrowsRightLeftIcon,
      activities: [
        {
          type: ActivityType.AliveLifeless,
          title: isTr ? "Canlı / Cansız" : t("concepts.activities.aliveLifeless", "Alive / Lifeless"),
          subtitle: isTr ? "Varlıkları tanı" : t("concepts.subtitles.recogniseLife", "Recognise living things"),
        },
        {
          type: ActivityType.OldNew,
          title: isTr ? "Eski / Yeni" : t("concepts.activities.oldNew", "Old / New"),
          subtitle: isTr ? "Durumu değerlendir" : t("concepts.subtitles.evaluateState", "Evaluate state"),
        },
        {
          type: ActivityType.HungryFull,
          title: isTr ? "Aç / Tok" : t("concepts.activities.hungryFull", "Hungry / Full"),
          subtitle: isTr ? "Duyguları yorumla" : t("concepts.subtitles.interpretFeelings", "Interpret feelings"),
        },
        {
          type: ActivityType.YoungOld,
          title: isTr ? "Genç / Yaşlı" : t("concepts.activities.youngOld", "Young / Old"),
          subtitle: isTr ? "Yaş farkını keşfet" : t("concepts.subtitles.discoverAge", "Discover age difference"),
        },
        {
          type: ActivityType.BrokenIntact,
          title: isTr ? "Kırık / Sağlam" : t("concepts.activities.brokenIntact", "Broken / Intact"),
          subtitle: isTr ? "Durumları ayırt et" : t("concepts.subtitles.distinguishCondition", "Distinguish condition"),
        },
        {
          type: ActivityType.CleanDirty,
          title: isTr ? "Temiz / Kirli" : t("concepts.activities.cleanDirty", "Clean / Dirty"),
          subtitle: isTr ? "Durumu değerlendir" : t("concepts.subtitles.evaluateCleanliness", "Evaluate cleanliness"),
        },
        {
          type: ActivityType.MessyClean,
          title: isTr ? "Dağınık / Toplu" : t("concepts.activities.messyClean", "Messy / Tidy"),
          subtitle: isTr ? "Düzeni kıyasla" : t("concepts.subtitles.compareOrder", "Compare order"),
        },
      ],
    },
  ];
};

const TabButton: React.FC<{
  name: string;
  icon: React.FC<{ className?: string }>;
  isActive: boolean;
  onClick: () => void;
  isThemed: boolean;
  displayMode?: "simple" | "default";
}> = ({ name, icon: Icon, isActive, onClick, isThemed, displayMode = "default" }) => {
  if (displayMode === "simple") {
    return (
            <button
              type="button"
              onClick={onClick}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white/95 border border-slate-200 text-slate-700 hover:shadow-md hover:-translate-y-0.5"
                }`}>
              <Icon className="h-5 w-5" />
              {name}
            </button>
    );
  }

  const activeClass = isThemed ? "bg-white/60 text-teal-700" : "bg-white text-teal-700";
  const inactiveClass = isThemed ? "text-white/80 hover:bg-white/20" : "text-slate-500 hover:bg-white/60";
  const textShadow = isThemed ? "text-shadow-soft" : "";

  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center p-2 sm-landscape:p-1 rounded-t-lg transition-colors duration-200 ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      <Icon className="mb-1 h-6 w-6 sm-landscape:mb-0.5 sm-landscape:h-5 sm-landscape:w-5" />
      <span className={`text-xs font-bold sm-landscape:text-[11px] ${textShadow}`}>{name}</span>
    </button>
  );
};

const ConceptActivitiesMenuScreen: React.FC<ConceptActivitiesMenuScreenProps> = ({
  onSelectActivity,
  onBack,
  activeCategory,
  onSelectCategory,
  activityStats,
  theme,
  enabledActivities,
}) => {
  const lang = getCurrentLanguage();
  const tabs = React.useMemo(() => buildTabs(lang), [lang]);
  const activeTabData = tabs.find((t) => t.name === activeCategory) || tabs[0];
  const colors = ["teal", "rose", "sky", "amber", "purple", "cyan", "indigo"] as const;
  const isSimpleTheme = theme === "simple";
  const titleColorClass = isSimpleTheme ? "text-purple-900" : "text-white text-shadow-soft";
  const iconColorClass = isSimpleTheme ? "text-purple-700" : "text-white";

  return (
    <div className="flex h-full max-w-4xl flex-col items-center p-2 sm:p-4 animate-fade-in">
      <div
        className={`flex h-full w-full flex-col rounded-3xl p-4 shadow-2xl sm:p-6 sm-landscape:p-2 ${
          isSimpleTheme ? "bg-white/80 backdrop-blur-md border border-purple-200/50" : "bg-black/20 backdrop-blur-md"
        }`}
      >
        <div className="relative mb-4 flex-shrink-0 w-full text-center sm-landscape:mb-2">
          <button
            onClick={onBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors hover:bg-black/10"
            aria-label={t("app.back", "Go back")}
          >
            <ArrowLeftIcon className={`h-8 w-8 sm-landscape:h-7 sm-landscape:w-7 ${iconColorClass}`} />
          </button>
          <h1 className={`text-2xl font-black sm:text-3xl sm-landscape:text-xl ${titleColorClass}`}>
            {lang === "tr" ? "Kavram Etkinlikleri" : "Concept Activities"}
          </h1>
        </div>

        <div
          className={`mb-4 flex w-full justify-around overflow-x-auto rounded-t-xl pb-1 sm-landscape:mb-2 ${
            isSimpleTheme ? "bg-purple-100/50" : "bg-black/20"
          }`}
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.name}
              name={tab.name}
              icon={tab.icon}
              isActive={activeCategory === tab.name}
              onClick={() => onSelectCategory(tab.name)}
              isThemed={!isSimpleTheme}
            />
          ))}
        </div>

        <div key={activeTabData.name} className="relative flex-grow overflow-y-auto pr-2 animate-fade-in">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 landscape:grid-cols-3 sm-landscape:grid-cols-4">
            {activeTabData.activities.map((activity, index) => {
              const stats =
                activityStats[String(activity.type)] || {
                  attempts: 0,
                  completions: 0,
                  totalCorrect: 0,
                  totalQuestions: 0,
                };
              const isDisabled = !enabledActivities.has(String(activity.type));
              return (
                <MenuButton
                  key={activity.type}
                  icon={activeTabData.icon}
                  title={activity.title}
                  subtitle={activity.subtitle}
                  onClick={() => onSelectActivity(activity.type)}
                  color={colors[index % colors.length]}
                  theme={theme}
                  disabled={isDisabled}
                >
                  <ProgressIndicator
                    attempts={stats.attempts}
                    completions={stats.completions}
                    totalCorrect={stats.totalCorrect}
                    totalQuestions={stats.totalQuestions}
                  />
                </MenuButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConceptActivitiesMenuScreen);
