import React from 'react';
import { CommunicationCategory } from '../types.ts';
import { getCurrentLanguage, t } from '../i18n/index.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';

interface CommunicationCardMenuScreenProps {
  categories: CommunicationCategory[];
  onSelectCategory: (category: CommunicationCategory) => void;
  onBack: () => void;
}

const CategoryButton: React.FC<{
  category: CommunicationCategory;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}> = ({ category, onClick, className, style }) => {
  const { title, icon: Icon, color, isUnderDevelopment } = category;
  const lang = getCurrentLanguage();
  const isTr = lang === 'tr';
  const enTitles: Record<string, string> = {
    ihtiyaclar: 'Basic Needs',
    eylemler: 'Actions',
    duygular: 'Feelings',
    kisiler: 'People',
    yerler: 'Places',
    esyalar: 'Objects',
    hayvanlar: 'Animals',
    tasitlar: 'Vehicles',
    pain: 'Pain',
  };
  const displayedTitle = isTr ? title : (enTitles[(category as any).id] || title);

  const colorClasses = {
    red: `from-red-400 to-rose-500 ring-red-300`,
    yellow: `from-yellow-400 to-amber-500 ring-yellow-300`,
    green: `from-green-400 to-emerald-500 ring-green-300`,
    blue: `from-blue-400 to-sky-500 ring-blue-300`,
    indigo: `from-indigo-400 to-violet-500 ring-indigo-300`,
    purple: `from-purple-400 to-fuchsia-500 ring-purple-300`,
    pink: `from-pink-400 to-rose-500 ring-pink-300`,
    teal: `from-teal-400 to-emerald-500 ring-teal-300`,
    amber: 'from-amber-500 to-orange-600 ring-amber-300', // For Brown
    orange: 'from-orange-400 to-red-500 ring-orange-300', // For Orange
    slate: 'from-slate-300 to-slate-400 ring-slate-200' // For White/Grey
  };
  
  const bgClass = colorClasses[color as keyof typeof colorClasses] || 'from-slate-400 to-slate-500 ring-slate-300';
  const textClass = color === 'slate' ? 'text-slate-800' : 'text-white';

  return (
    <button
      onClick={onClick}
      style={style}
      className={`relative w-full h-full flex items-center justify-start text-left p-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 bg-gradient-to-br ${bgClass} ${className} overflow-hidden`}
    >
      <div className="bg-white/20 p-3 rounded-2xl mr-4">
        <Icon className={`w-8 h-8 ${textClass}`} />
      </div>
  <h2 className={`text-lg font-bold ${textClass} text-shadow-soft`}>{displayedTitle}</h2>
      {isUnderDevelopment && (
         <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
          {t('app.developing', 'Under development')}
        </div>
      )}
    </button>
  );
};

const CommunicationCardMenuScreen: React.FC<CommunicationCardMenuScreenProps> = ({ categories, onSelectCategory, onBack }) => {
  const lang = getCurrentLanguage();
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg mx-auto p-4 animate-fade-in">
       <div className="w-full flex items-center mb-8 landscape:mb-4 relative">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors" aria-label={t('app.back', 'Go back')}>
          <ArrowLeftIcon className="w-8 h-8 text-white" />
        </button>
        <h1 className="flex-1 text-center text-3xl sm:text-4xl landscape:text-2xl font-black text-white text-shadow-soft">
          {lang === 'tr' ? 'İletişim Kartları' : 'Communication Cards'}
        </h1>
      </div>
      
      <p className="text-center text-white/90 text-shadow-soft mb-8 landscape:mb-4 text-lg landscape:text-base -mt-4 landscape:-mt-2">
        {lang === 'tr' ? 'Cümle kurmak için bir başlangıç seç.' : 'Pick a starting point to build a sentence.'}
      </p>

      <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
        <div className="space-y-4">
          {categories.map((category) => (
            <CategoryButton
                key={category.id}
                category={category}
                onClick={() => onSelectCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CommunicationCardMenuScreen);
