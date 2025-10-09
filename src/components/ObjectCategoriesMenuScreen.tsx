import React from 'react';
import { OBJECT_CATEGORIES, ACHIEVEMENTS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { imageData } from '../services/database/imageData.ts';
import { ActivityStats, ActivityCategory } from '../types.ts';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import CrownIcon from './icons/CrownIcon.tsx';
import BasketIcon from './icons/BasketIcon.tsx';

interface ObjectCategoriesMenuScreenProps {
  onSelectCategory: (categoryId: string) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
  onAddCategoryToPrintPool: (categoryId: string, color: string) => void;
  isPremium: boolean;
  // Optional overrides to show different set (e.g., ObjectsIntl)
  categoriesOverride?: { id: string; title: string; imageId: number; disabled?: boolean }[];
  titleOverride?: string;
}

const CategoryButton: React.FC<{
  title: string;
  imageUrl: string;
  onClick: () => void;
  disabled: boolean;
  theme: string;
  children?: React.ReactNode;
}> = ({ title, imageUrl, onClick, disabled, theme, children }) => {
  const isThemed = theme !== 'simple';

  if (!isThemed) {
    return (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`relative w-full h-full aspect-square text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 overflow-hidden group ${disabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}
        >
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>
          <h2 className="absolute bottom-2 left-2 right-2 text-sm sm:text-base font-bold text-center text-shadow-soft">{title}</h2>
          {children}
        </button>
    );
  }

  // Themed version
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full h-full aspect-square text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 overflow-hidden group bg-white/70 backdrop-blur-md border border-white/50 p-2 ${disabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110" />
       <div className="absolute bottom-1 left-1 right-1 p-1 bg-black/50 rounded-b-lg">
          <h2 className="text-xs font-bold text-center truncate">{title}</h2>
      </div>
      {children}
    </button>
  );
};


const ObjectCategoriesMenuScreen: React.FC<ObjectCategoriesMenuScreenProps> = ({ onSelectCategory, onBack, activityStats, theme, enabledActivities, onAddCategoryToPrintPool, isPremium, categoriesOverride, titleOverride }) => {
  const isThemed = theme !== 'simple';
  const titleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-amber-800';
  const iconColorClass = isThemed ? 'text-white' : 'text-amber-700';
  const categories = categoriesOverride || OBJECT_CATEGORIES;

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
        <div className="w-full flex items-center mb-4 relative">
            <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" aria-label="Ana menüye dön">
                <ArrowLeftIcon className={`w-8 h-8 ${iconColorClass}`} />
            </button>
            <h1 className={`flex-1 text-center text-3xl sm:text-4xl font-black ${titleColorClass}`}>
        {titleOverride || 'Nesneleri Tanıyalım'}
            </h1>
        </div>
        
        <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 touch-pan-y">
      {categories.map((category) => {
                const image = imageData.find(item => item.id === category.imageId);
                const stats = activityStats[category.id] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                const isDisabled = !enabledActivities.has(category.id);
                return (
                    <div key={category.id} className="relative group">
                        <CategoryButton
                            title={category.title}
                            imageUrl={image?.imageUrl || '/images/placeholder.png'}
                            onClick={() => onSelectCategory(category.id)}
                            disabled={isDisabled}
                            theme={theme}
                        >
                            <ProgressIndicator 
                                attempts={stats.attempts} 
                                completions={stats.completions}
                                totalCorrect={stats.totalCorrect}
                                totalQuestions={stats.totalQuestions}
                            />
                        </CategoryButton>
                         <button 
                            onClick={() => {
                                const achievement = ACHIEVEMENTS.find(a => a.id === ActivityCategory.Objects);
                                onAddCategoryToPrintPool(category.id, achievement?.color || 'amber');
                            }}
                            className="absolute top-1 right-1 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors z-10"
                            aria-label={`${category.title} kategorisindeki kartları sepete ekle`}
                        >
                            <BasketIcon className="w-6 h-6 text-sky-600" />
                            {!isPremium && <CrownIcon className="absolute -top-1 -right-1 w-5 h-5 text-amber-500 bg-white rounded-full p-0.5" />}
                        </button>
                    </div>
                );
            })}
            </div>
        </div>
    </div>
  );
};

export default ObjectCategoriesMenuScreen;