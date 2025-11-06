import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import SparklesIcon from './icons/SparklesIcon.tsx';
import MenuButton from './ui/MenuButton.tsx';
import { t } from '../i18n/index.ts';
import type { Round } from './RelativeComparisonActivity.tsx';

type Props = {
  rounds: Round[];
  onSelectRound: (round: Round) => void;
  onBack: () => void;
  theme: string;
};

type DimensionKey =
  | 'size'
  | 'width'
  | 'thickness'
  | 'quantity'
  | 'length'
  | 'distance'
  | 'height';

const dimensionMeta: Record<
  DimensionKey,
  {
    titleKey: string;
    subtitleKey: string;
    color: 'teal' | 'sky' | 'amber' | 'rose' | 'indigo' | 'purple' | 'lime';
  }
> = {
  size: {
    titleKey: 'experimental.relativeComparison.dimensions.size.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.size.subtitle',
    color: 'teal',
  },
  width: {
    titleKey: 'experimental.relativeComparison.dimensions.width.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.width.subtitle',
    color: 'sky',
  },
  thickness: {
    titleKey: 'experimental.relativeComparison.dimensions.thickness.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.thickness.subtitle',
    color: 'amber',
  },
  quantity: {
    titleKey: 'experimental.relativeComparison.dimensions.quantity.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.quantity.subtitle',
    color: 'rose',
  },
  length: {
    titleKey: 'experimental.relativeComparison.dimensions.length.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.length.subtitle',
    color: 'indigo',
  },
  distance: {
    titleKey: 'experimental.relativeComparison.dimensions.distance.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.distance.subtitle',
    color: 'purple',
  },
  height: {
    titleKey: 'experimental.relativeComparison.dimensions.height.title',
    subtitleKey: 'experimental.relativeComparison.dimensions.height.subtitle',
    color: 'lime',
  },
};

const RelativeComparisonMenuScreen: React.FC<Props> = ({
  rounds,
  onSelectRound,
  onBack,
  theme,
}) => {
  const comparisonsLabel = (round: Round) => {
    const comparisons = Math.max(0, round.items.length - 1);
    return t(
      'experimental.relativeComparison.roundInfo',
      `${comparisons} soru`
    ).replace('{count}', String(comparisons));
  };

  return (
    <div className="flex flex-col items-center h-full max-w-3xl mx-auto p-4 animate-fade-in">
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
            {t(
              'experimental.relativeComparison.title',
              'Göreceli Karşılaştırma (Deneme)'
            )}
          </h2>
          <p className="text-sm text-slate-600">
            {t(
              'experimental.relativeComparison.menuSubtitle',
              'Bir karşılaştırma turu seç ve o boyutta çalış.'
            )}
          </p>
        </div>
        <div className="w-8 h-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {rounds.map((round, index) => {
          const dimension = (round.dimension ?? 'size') as DimensionKey;
          const meta = dimensionMeta[dimension] ?? dimensionMeta.size;
          return (
            <MenuButton
              key={round.id ?? `round-${index}`}
              icon={SparklesIcon}
              title={t(meta.titleKey)}
              subtitle={`${t(meta.subtitleKey)} · ${comparisonsLabel(round)}`}
              onClick={() => onSelectRound(round)}
              color={meta.color}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(RelativeComparisonMenuScreen);
