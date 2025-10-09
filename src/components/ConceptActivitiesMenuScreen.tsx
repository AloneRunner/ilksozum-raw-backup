import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import ShapesIcon from './icons/ShapesIcon.tsx';
import QuantityIcon from './icons/QuantityIcon.tsx';
import LocationIcon from './icons/LocationIcon.tsx';
import TimeIcon from './icons/TimeIcon.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import MenuButton from './ui/MenuButton.tsx';
import WideNarrowIcon from './icons/WideNarrowIcon.tsx';
import TextureIcon from './icons/TextureIcon.tsx';
import ArrowsRightLeftIcon from './icons/ArrowsRightLeftIcon.tsx';
import { getCurrentLanguage, t } from '../i18n/index.ts';

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
// Language-aware tab builder to show Turkish for 'tr' and English for other locales
const buildTabs = (lang: ReturnType<typeof getCurrentLanguage>): ConceptTab[] => {
    const isTr = lang === 'tr';
    return [
        {
            name: isTr ? 'Temel' : 'Basic',
            icon: ShapesIcon,
            activities: [
                { type: ActivityType.YesNo, title: isTr ? 'Evet / Hayır' : 'Yes / No', subtitle: isTr ? 'Görseli onayla veya reddet' : 'Approve or reject the image' },
                { type: ActivityType.Colors, title: isTr ? 'Renkler' : 'Colors', subtitle: isTr ? 'İstenen rengi bul' : 'Find the requested color' },
                { type: ActivityType.Shapes, title: isTr ? 'Şekiller' : 'Shapes', subtitle: isTr ? 'Doğru şekli seç' : 'Pick the right shape' },
                { type: ActivityType.Emotions, title: isTr ? 'Duygular' : 'Emotions', subtitle: isTr ? 'Yüz ifadelerini tanı' : 'Recognize facial expressions' },
                { type: ActivityType.ParlakMat, title: isTr ? 'Parlak / Mat' : 'Shiny / Matte', subtitle: isTr ? 'Yansımaları öğren' : 'Learn reflections' },
                { type: ActivityType.SeffafOpak, title: isTr ? 'Şeffaf / Opak' : 'Transparent / Opaque', subtitle: isTr ? 'Görünürlüğü öğren' : 'Understand transparency' },
                { type: ActivityType.StraightCurved, title: isTr ? 'Düz / Eğri' : 'Straight / Curved', subtitle: isTr ? 'Çizgileri tanı' : 'Recognize lines' },
            ],
        },
        {
            name: isTr ? 'Boyutsal' : 'Dimensional',
            icon: WideNarrowIcon,
            activities: [
                { type: ActivityType.BigSmall, title: isTr ? 'Büyük / Küçük' : 'Big / Small', subtitle: isTr ? 'Boyutları karşılaştır' : 'Compare sizes' },
                { type: ActivityType.LongShort, title: isTr ? 'Uzun / Kısa' : 'Long / Short', subtitle: isTr ? 'Uzunlukları ayırt et' : 'Tell lengths apart' },
                { type: ActivityType.ThinThick, title: isTr ? 'İnce / Kalın' : 'Thin / Thick', subtitle: isTr ? 'Kalınlıkları öğren' : 'Learn thickness' },
                { type: ActivityType.WideNarrow, title: isTr ? 'Geniş / Dar' : 'Wide / Narrow', subtitle: isTr ? 'Genişlikleri anla' : 'Understand width' },
                { type: ActivityType.HeavyLight, title: isTr ? 'Ağır / Hafif' : 'Heavy / Light', subtitle: isTr ? 'Ağırlıkları karşılaştır' : 'Compare weights' },
                { type: ActivityType.DerinSig, title: isTr ? 'Derin / Sığ' : 'Deep / Shallow', subtitle: isTr ? 'Derinlikleri ölç' : 'Measure depths' },
                { type: ActivityType.KalabalikTenha, title: isTr ? 'Kalabalık / Tenha' : 'Crowded / Empty', subtitle: isTr ? 'Yoğunlukları anla' : 'Understand crowding' },
            ],
        },
        {
            name: isTr ? 'Dokunsal' : 'Tactile',
            icon: TextureIcon,
            activities: [
                { type: ActivityType.HardSoft, title: isTr ? 'Sert / Yumuşak' : 'Hard / Soft', subtitle: isTr ? 'Dokuları hisset' : 'Feel textures' },
                { type: ActivityType.RoughSmooth, title: isTr ? 'Pürüzlü / Pürüzsüz' : 'Rough / Smooth', subtitle: isTr ? 'Yüzeyleri tanı' : 'Know surfaces' },
                { type: ActivityType.DikenliPuruzsuz, title: isTr ? 'Dikenli / Pürüzsüz' : 'Spiky / Smooth', subtitle: isTr ? 'Bitki ve hayvan dokuları' : 'Plant and animal textures' },
                { type: ActivityType.KirisikDuzgun, title: isTr ? 'Kırışık / Düzgün' : 'Wrinkled / Smooth', subtitle: isTr ? 'Yüzey durumları' : 'Surface conditions' },
                { type: ActivityType.SivriKut, title: isTr ? 'Sivri / Küt' : 'Sharp / Blunt', subtitle: isTr ? 'Uçları tanı' : 'Identify points' },
            ],
        },
        {
            name: isTr ? 'Durumsal' : 'State',
            icon: ArrowsRightLeftIcon,
            activities: [
                { type: ActivityType.OldNew, title: isTr ? 'Eski / Yeni' : 'Old / New', subtitle: isTr ? 'Nesnelerin yaşını bil' : 'Know object age' },
                { type: ActivityType.YoungOld, title: isTr ? 'Yaşlı / Genç' : 'Young / Old', subtitle: isTr ? 'Canlıların yaşını öğren' : 'Learn ages of living things' },
                { type: ActivityType.CleanDirty, title: isTr ? 'Temiz / Kirli' : 'Clean / Dirty', subtitle: isTr ? 'Hijyen kavramı' : 'Hygiene concept' },
                { type: ActivityType.WetDry, title: isTr ? 'Islak / Kuru' : 'Wet / Dry', subtitle: isTr ? 'Maddenin halleri' : 'Learn moisture' },
                { type: ActivityType.OpenClosed, title: isTr ? 'Açık / Kapalı' : 'Open / Closed', subtitle: isTr ? 'Nesnelerin durumları' : 'Object states' },
                { type: ActivityType.AliveLifeless, title: isTr ? 'Canlı / Cansız' : 'Alive / Not alive', subtitle: isTr ? 'Varlıkları ayırt et' : 'Tell living vs non-living' },
                { type: ActivityType.BrokenIntact, title: isTr ? 'Sağlam / Kırık' : 'Broken / Intact', subtitle: isTr ? 'Nesnelerin bütünlüğü' : 'Object integrity' },
                { type: ActivityType.MessyClean, title: isTr ? 'Dağınık / Toplu' : 'Messy / Tidy', subtitle: isTr ? 'Düzen kavramı' : 'Orderliness' },
                { type: ActivityType.TazeBayat, title: isTr ? 'Taze / Bayat' : 'Fresh / Stale', subtitle: isTr ? 'Yiyeceklerin durumu' : 'Food freshness' },
                { type: ActivityType.DugumCozuk, title: isTr ? 'Düğüm / Çözük' : 'Knotted / Untied', subtitle: isTr ? 'Bağlantıları çöz' : 'Untangle connections' },
                { type: ActivityType.HungryFull, title: isTr ? 'Aç / Tok' : 'Hungry / Full', subtitle: isTr ? 'Doyma hissini anla' : 'Understand fullness' },
                { type: ActivityType.TembelCaliskan, title: isTr ? 'Tembel / Çalışkan' : 'Lazy / Hardworking', subtitle: isTr ? 'Davranışları anla' : 'Understand behaviors' },
                { type: ActivityType.HotCold, title: isTr ? 'Sıcak / Soğuk' : 'Hot / Cold', subtitle: isTr ? 'Sıcaklıkları hisset' : 'Feel temperatures' },
                { type: ActivityType.BitterSweet, title: isTr ? 'Acı / Tatlı' : 'Bitter / Sweet', subtitle: isTr ? 'Tatları öğren' : 'Learn tastes' },
                { type: ActivityType.TersDuz, title: isTr ? 'Ters / Düz' : 'Upside down / Upright', subtitle: isTr ? 'Doğru olanı bul' : 'Find the correct one' },
            ],
        },
        {
            name: isTr ? 'Miktar' : 'Quantity',
            icon: QuantityIcon,
            activities: [
                { type: ActivityType.NumberSequencing, title: isTr ? 'Sayı Sıralama' : 'Number Sequencing', subtitle: isTr ? 'Eksik sayıyı bul' : 'Find the missing number' },
                { type: ActivityType.FewMuch, title: isTr ? 'Az / Çok' : 'Few / Many', subtitle: isTr ? 'Miktarları karşılaştır' : 'Compare quantities' },
                { type: ActivityType.HalfQuarterWhole, title: isTr ? 'Bütün / Yarım / Çeyrek' : 'Whole / Half / Quarter', subtitle: isTr ? 'Parçaları öğren' : 'Learn parts' },
                { type: ActivityType.FullEmpty, title: isTr ? 'Dolu / Boş' : 'Full / Empty', subtitle: isTr ? 'Kapların durumunu bil' : 'Know container states' },
                { type: ActivityType.OddEven, title: isTr ? 'Tek / Çift' : 'Odd / Even', subtitle: isTr ? 'Sayıları grupla' : 'Group numbers' },
            ],
        },
        {
            name: isTr ? 'Konum' : 'Location',
            icon: LocationIcon,
            activities: [
                { type: ActivityType.OnUnder, title: isTr ? 'Üstünde / Altında' : 'On / Under', subtitle: isTr ? 'Konumları belirt' : 'Indicate positions' },
                { type: ActivityType.BelowAbove, title: isTr ? 'Aşağıda / Yukarıda' : 'Below / Above', subtitle: isTr ? 'Yükseklikleri anla' : 'Understand heights' },
                { type: ActivityType.InFrontOfBehind, title: isTr ? 'Önünde / Arkada' : 'In front / Behind', subtitle: isTr ? 'Sıralamayı öğren' : 'Learn order' },
                { type: ActivityType.InsideOutside, title: isTr ? 'İçinde / Dışında' : 'Inside / Outside', subtitle: isTr ? 'Yerleri belirt' : 'Indicate place' },
                { type: ActivityType.BesideOpposite, title: isTr ? 'Yanında / Karşısında' : 'Beside / Opposite', subtitle: isTr ? 'Yönleri öğren' : 'Learn directions' },
                { type: ActivityType.Between, title: isTr ? 'Arasında' : 'Between', subtitle: isTr ? 'Ortadakini bul' : 'Find the one in the middle' },
                { type: ActivityType.LeftRight, title: isTr ? 'Sağ / Sol' : 'Left / Right', subtitle: isTr ? 'Yönleri ayırt et' : 'Tell directions' },
                { type: ActivityType.NearFar, title: isTr ? 'Yakın / Uzak' : 'Near / Far', subtitle: isTr ? 'Mesafeleri anla' : 'Understand distances' },
                { type: ActivityType.HighLow, title: isTr ? 'Yüksek / Alçak' : 'High / Low', subtitle: isTr ? 'Seviyeleri karşılaştır' : 'Compare levels' },
            ],
        },
        {
            name: isTr ? 'Zaman' : 'Time',
            icon: TimeIcon,
            activities: [
                { type: ActivityType.DayNight, title: isTr ? 'Gündüz / Gece' : 'Day / Night', subtitle: isTr ? 'Zaman dilimlerini öğren' : 'Learn times of day' },
                { type: ActivityType.BeforeAfter, title: isTr ? 'Önce / Sonra' : 'Before / After', subtitle: isTr ? 'Olayları sırala' : 'Order events' },
                { type: ActivityType.FastSlow, title: isTr ? 'Hızlı / Yavaş' : 'Fast / Slow', subtitle: isTr ? 'Hızları karşılaştır' : 'Compare speeds' },
            ],
        },
    ];
};

// Moved TabButton outside of the main component for performance and to follow React best practices.
const TabButton: React.FC<{ 
    name: string, 
    icon: React.FC<{ className?: string }>, 
    isActive: boolean, 
    onClick: () => void,
    isThemed: boolean
}> = ({ name, icon: Icon, isActive, onClick, isThemed }) => {
    const activeClass = isThemed ? 'bg-white/60 text-teal-700' : 'bg-white text-teal-700';
    const inactiveClass = isThemed ? 'text-white/80 hover:bg-white/20' : 'text-slate-500 hover:bg-white/60';
    const textShadow = isThemed ? 'text-shadow-soft' : '';
    
    return (
        <button
            onClick={onClick}
            className={`flex-1 flex flex-col items-center justify-center p-2 sm-landscape:p-1 rounded-t-lg transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`}
        >
            <Icon className={`w-6 h-6 sm-landscape:w-5 sm-landscape:h-5 mb-1 sm-landscape:mb-0.5`}/>
            <span className={`text-xs sm-landscape:text-[11px] font-bold ${textShadow}`}>{name}</span>
        </button>
    );
};

const ConceptActivitiesMenuScreen: React.FC<ConceptActivitiesMenuScreenProps> = ({ onSelectActivity, onBack, activeCategory, onSelectCategory, activityStats, theme, enabledActivities }) => {
    const lang = getCurrentLanguage();
    const tabs = React.useMemo(() => buildTabs(lang), [lang]);
    const activeTabData = tabs.find(t => t.name === activeCategory) || tabs[0];
    
    const colors: Array<'teal' | 'lime' | 'rose' | 'sky' | 'amber' | 'purple' | 'cyan'> = ['teal', 'lime', 'rose', 'sky', 'amber', 'purple', 'cyan'];
    const isThemed = theme !== 'simple';
    const titleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-slate-800';
    const iconColorClass = isThemed ? 'text-white' : 'text-slate-700';

    return (
        <div className="flex flex-col items-center h-full max-w-4xl mx-auto p-2 sm:p-4 animate-fade-in">
            <div className={`w-full p-4 sm:p-6 sm-landscape:p-2 rounded-3xl shadow-2xl flex flex-col h-full ${isThemed ? 'bg-black/20 backdrop-blur-md' : 'bg-white'}`}>
                <div className="relative w-full text-center mb-4 sm-landscape:mb-2 flex-shrink-0">
                    <button onClick={onBack} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/10 transition-colors" aria-label={t('app.back', 'Go back')}>
                        <ArrowLeftIcon className={`w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 ${iconColorClass}`}/>
                    </button>
                    <h1 className={`text-2xl sm:text-3xl sm-landscape:text-xl font-black ${titleColorClass}`}>{lang === 'tr' ? 'Kavram Etkinlikleri' : 'Concept Activities'}</h1>
                </div>

                <div className={`w-full flex justify-around rounded-t-xl mb-4 sm-landscape:mb-2 flex-shrink-0 overflow-x-auto touch-auto ${isThemed ? 'bg-black/20' : 'bg-slate-900/5'}`}>
                    {tabs.map(tab => (
                        <TabButton 
                            key={tab.name} 
                            name={tab.name} 
                            icon={tab.icon}
                            isActive={activeCategory === tab.name}
                            onClick={() => onSelectCategory(tab.name)}
                            isThemed={isThemed}
                        />
                    ))}
                </div>

                <div key={activeTabData.name} className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
                     <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-4 gap-3 sm:gap-4">
                        {activeTabData.activities.map((activity, index) => {
                            const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ConceptActivitiesMenuScreen);