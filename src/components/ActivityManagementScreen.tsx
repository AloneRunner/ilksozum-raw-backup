import React from 'react';
import { ActivityCategory, ActivityType } from '../types.ts';
import { ALL_SUB_ACHIEVEMENTS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import CrownIcon from './icons/CrownIcon.tsx';
import LockClosedIcon from './icons/LockClosedIcon.tsx';

interface ActivityManagementScreenProps {
  onBack: () => void;
  category: ActivityCategory;
  enabledActivities: Set<string>;
  onToggleActivity: (activityId: string) => void;
  onToggleCategory: (category: ActivityCategory, isEnabled: boolean) => void;
  isPremium: boolean;
  showPremiumToast: () => void;
}

const ToggleSwitch: React.FC<{ isEnabled: boolean; onToggle: () => void }> = ({ isEnabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center h-7 w-12 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
      isEnabled ? 'bg-green-500' : 'bg-slate-300'
    }`}
  >
    <span
      className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
        isEnabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

const ActivityManagementScreen: React.FC<ActivityManagementScreenProps> = ({
  onBack,
  category,
  enabledActivities,
  onToggleActivity,
  onToggleCategory,
  isPremium,
  showPremiumToast
}) => {
  const activities = ALL_SUB_ACHIEVEMENTS.filter(sa => sa.category === category);
  
  // Exclude "Hikaye Zamanı" from being disabled
  const manageableActivities = activities.filter(act => String(act.id) !== String(ActivityType.EmbeddedStory));

  const allEnabled = manageableActivities.every(act => enabledActivities.has(String(act.id)));

  const handleToggleAll = () => {
    onToggleCategory(category, !allEnabled);
  };
  
  const getCategoryTitle = (cat: ActivityCategory) => {
    const titles: Record<string, string> = {
        [ActivityCategory.LetterSound]: 'Harf ve Sesler',
        [ActivityCategory.Objects]: 'Nesneleri Tanıyalım',
        [ActivityCategory.Concept]: 'Kavram Etkinlikleri',
        [ActivityCategory.Reasoning]: 'Akıl Oyunları',
    };
    return titles[cat] || 'Etkinlikler';
  }

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button 
          onClick={onBack} 
          className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
          aria-label="Ayarlara dön"
        >
          <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
        </button>
        <h1 className="flex-1 text-center text-2xl sm:text-3xl font-black text-slate-800">
          {getCategoryTitle(category)}
        </h1>
      </div>

      <div className="w-full flex-grow overflow-y-auto pr-2">
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white/90 p-4 rounded-xl shadow-md">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Tümünü Etkinleştir</h3>
              <p className="text-sm text-slate-500">Bu kategorideki tüm etkinlikleri aç/kapat</p>
            </div>
            <ToggleSwitch isEnabled={allEnabled} onToggle={handleToggleAll} />
          </div>
          <hr className="my-4"/>
          {manageableActivities.map(activity => (
            <div 
                key={String(activity.id)} 
                onClick={!isPremium ? showPremiumToast : undefined}
                className={`flex justify-between items-center bg-white/70 p-4 rounded-xl shadow-sm ${!isPremium ? 'cursor-pointer' : ''}`}
            >
              <span className="font-semibold text-slate-700">{activity.name}</span>
              {isPremium ? (
                <ToggleSwitch isEnabled={enabledActivities.has(String(activity.id))} onToggle={() => onToggleActivity(String(activity.id))} />
              ) : (
                <div className="flex items-center gap-2 text-slate-400">
                   <CrownIcon className="w-6 h-6 text-amber-500" />
                   <LockClosedIcon className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityManagementScreen;