import React from 'react';
import { FiveWOneHCategory } from '../services/database/activities/reasoning/fiveWOneHBatch50';
import { t } from '../i18n/index';

const categories: { id: FiveWOneHCategory; label: string; color: 'emerald' | 'amber' | 'sky' | 'indigo' | 'rose' | 'teal' }[] = [
  { id: 'Kim', label: t('fiveWOneH.category.who', 'Kim?'), color: 'emerald' },
  { id: 'Ne', label: t('fiveWOneH.category.what', 'Ne?'), color: 'amber' },
  { id: 'Nerede', label: t('fiveWOneH.category.where', 'Nerede?'), color: 'sky' },
  { id: 'Ne Zaman', label: t('fiveWOneH.category.when', 'Ne Zaman?'), color: 'indigo' },
  { id: 'Neden', label: t('fiveWOneH.category.why', 'Neden?'), color: 'rose' },
  { id: 'Nasıl', label: t('fiveWOneH.category.how', 'Nasıl?'), color: 'teal' },
];

interface FiveWOneHMenuScreenProps {
  onSelectCategory: (category: FiveWOneHCategory | 'Karışık') => void;
  onBack: () => void;
}

const FiveWOneHMenuScreen: React.FC<FiveWOneHMenuScreenProps> = ({ onSelectCategory, onBack }) => {
  const colorClassMap: Record<typeof categories[number]['color'], string> = {
    emerald: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
    amber: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    sky: 'bg-sky-100 text-sky-800 hover:bg-sky-200',
    indigo: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    rose: 'bg-rose-100 text-rose-800 hover:bg-rose-200',
    teal: 'bg-teal-100 text-teal-800 hover:bg-teal-200',
  };
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" aria-label={t('app.back', 'Geri Dön')}>
          <span className="text-lg font-bold">←</span>
        </button>
        <h1 className="flex-1 text-center text-3xl font-black text-emerald-700">5N1K</h1>
      </div>
      <div className="w-full flex-grow overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`rounded-2xl px-4 py-6 font-bold text-lg shadow-md transition-colors ${colorClassMap[cat.color]}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          <button
            className="rounded-2xl px-4 py-6 font-bold text-lg shadow-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            onClick={() => onSelectCategory('Karışık')}
          >
            {t('fiveWOneH.category.mixed', 'Karışık')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiveWOneHMenuScreen;
