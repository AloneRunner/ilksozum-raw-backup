import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import SparklesIcon from './icons/SparklesIcon.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import MenuButton from './ui/MenuButton.tsx';
import { t } from '../i18n/index.ts';

interface RelativeComparisonActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const activityDefs = [
  { type: ActivityType.RelativeBigSmall, key: 'concepts.activities.bigSmall', fallback: 'Büyük / Küçük' },
  { type: ActivityType.RelativeWideNarrow, key: 'concepts.activities.wideNarrow', fallback: 'Geniş / Dar' },
  { type: ActivityType.RelativeThinThick, key: 'concepts.activities.thinThick', fallback: 'İnce / Kalın' },
  { type: ActivityType.RelativeFewMuch, key: 'concepts.activities.fewMuch', fallback: 'Az / Çok' },
  { type: ActivityType.RelativeLongShort, key: 'concepts.activities.longShort', fallback: 'Uzun / Kısa' },
  { type: ActivityType.RelativeNearFar, key: 'concepts.activities.nearFar', fallback: 'Yakın / Uzak' },
  { type: ActivityType.RelativeHighLow, key: 'concepts.activities.highLow', fallback: 'Yüksek / Alçak' },
];

const RelativeComparisonActivitiesMenuScreen: React.FC<RelativeComparisonActivitiesMenuScreenProps> = ({
  onSelectActivity,
  onBack,
  activityStats,
  theme,
  enabledActivities,
}) => {
  const activities = activityDefs.map(a => ({
    type: a.type,
    title: t(a.key, a.fallback),
    subtitle: t('experimental.relativeComparison.instruction', 'Açılan iki kartı karşılaştır ve soruyu cevapla.'),
  }));
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
      <style>{`
        /* Make the activities area scrollable when needed and responsive to orientation */
        .rc-menu-scroll { max-height: calc(100vh - 8rem); overflow-y: auto; -webkit-overflow-scrolling: touch; }
        .rc-menu-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
        @media (min-width: 640px) { .rc-menu-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        /* In landscape prefer more columns so the menu compacts */
        @media (orientation: landscape) {
          .rc-menu-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) and (orientation: landscape) {
          .rc-menu-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>
      <div className="w-full flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={onBack}
          className="p-2 rounded-full hover:bg-black/10 transition-colors"
          aria-label={t('app.back', 'Geri dön')}
        >
          <ArrowLeftIcon className="w-8 h-8 text-teal-700" />
        </button>
        <div className="text-center flex-1">
          <h2 className="text-2xl font-bold text-slate-800">
            {t('experimental.relativeComparison.title', 'Göreceli Karşılaştırma')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('experimental.relativeComparison.menuSubtitle', 'Bir karşılaştırma etkinliği seç.')}
          </p>
        </div>
        <div className="w-8 h-8" />
      </div>

      <div className="rc-menu-scroll w-full">
        <div className="rc-menu-grid w-full">
        {activities.map((activity) => {
          const stats = activityStats[String(activity.type)];
          const isEnabled = enabledActivities.has(String(activity.type));
          return (
            <MenuButton
              key={String(activity.type)}
              icon={SparklesIcon}
              title={activity.title}
              subtitle={activity.subtitle}
              onClick={() => onSelectActivity(activity.type)}
              color="teal"
              theme={theme}
              disabled={!isEnabled}
            >
              {stats && (
                <ProgressIndicator
                  attempts={stats.attempts}
                  completions={stats.completions}
                  totalCorrect={stats.totalCorrect}
                  totalQuestions={stats.totalQuestions}
                />
              )}
            </MenuButton>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RelativeComparisonActivitiesMenuScreen);