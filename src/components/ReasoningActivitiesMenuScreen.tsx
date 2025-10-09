import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { ActivityType, ActivityStats } from '../types.ts';
import SameDifferentIcon from './icons/SameDifferentIcon.tsx';
import LinkIcon from './icons/LinkIcon.tsx';
import CauseEffectIcon from './icons/CauseEffectIcon.tsx';
import SequencingIcon from './icons/SequencingIcon.tsx';
import PatternIcon from './icons/PatternIcon.tsx';
import SudokuIcon from './icons/SudokuIcon.tsx';
import MemoryCardsIcon from './icons/MemoryCardsIcon.tsx';
import MoveIcon from './icons/MoveIcon.tsx';
import PositioningIcon from './icons/PositioningIcon.tsx';
import ProgressIndicator from './ui/ProgressIndicator.tsx';
import MenuButton from './ui/MenuButton.tsx';
import { getCurrentLanguage, t } from '../i18n/index.ts';

interface ReasoningActivitiesMenuScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
  activityStats: Record<string, ActivityStats>;
  theme: string;
  enabledActivities: Set<string>;
}

const ReasoningActivitiesMenuScreen: React.FC<ReasoningActivitiesMenuScreenProps> = ({ onSelectActivity, onBack, activityStats, theme, enabledActivities }) => {
  
  const lang = getCurrentLanguage();
  const isTr = lang === 'tr';
  const activities = [
    { type: ActivityType.WhatDoesntBelong, icon: SameDifferentIcon, title: isTr ? 'Hangisi Farklı?' : "Odd One Out", subtitle: isTr ? 'Gruba uymayanı bul' : 'Find what does not belong', color: 'rose' as const },
    { type: ActivityType.FunctionalMatching, icon: LinkIcon, title: isTr ? 'İşlevsel Eşleştirme' : 'Functional Matching', subtitle: isTr ? 'Nesneleri görevlerine göre eşle' : 'Match items by function', color: 'amber' as const },
    { type: ActivityType.CauseEffect, icon: CauseEffectIcon, title: isTr ? 'Neden - Sonuç' : 'Cause and Effect', subtitle: isTr ? 'Olaylar arasındaki ilişkiyi bul' : 'Find relations between events', color: 'orange' as const },
    { type: ActivityType.SequencingStories, icon: SequencingIcon, title: isTr ? 'Olay Sıralama' : 'Story Sequencing', subtitle: isTr ? 'Hikayeyi doğru sıraya diz' : 'Put the story in order', color: 'purple' as const },
    { type: ActivityType.PatternCompletion, icon: PatternIcon, title: isTr ? 'Örüntü Tamamlama' : 'Pattern Completion', subtitle: isTr ? 'Sıradaki şekli tahmin et' : 'Predict the next shape', color: 'cyan' as const },
    { type: ActivityType.Sudoku, icon: SudokuIcon, title: isTr ? 'Görsel Sudoku' : 'Picture Sudoku', subtitle: isTr ? 'Eksik parçayı tamamla' : 'Complete the missing piece', color: 'teal' as const },
    { type: ActivityType.MemoryCards, icon: MemoryCardsIcon, title: isTr ? 'Hafıza Kartları' : 'Memory Cards', subtitle: isTr ? 'Kartların eşini bul' : 'Find matching cards', color: 'sky' as const },
    { type: ActivityType.DragAndDropCounting, icon: MoveIcon, title: isTr ? 'Nesneleri Taşı' : 'Move Objects', subtitle: isTr ? 'İstenen sayıda nesneyi taşı' : 'Move the requested number of items', color: 'lime' as const },
    { type: ActivityType.DragAndDropPositioning, icon: PositioningIcon, title: isTr ? 'Topu Yerleştir' : 'Place the Ball', subtitle: isTr ? 'Nesneyi doğru konuma yerleştir' : 'Place the item in the right spot', color: 'indigo' as const },
  ];
  const isThemed = theme !== 'simple';
  const titleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-indigo-800';
  const iconColorClass = isThemed ? 'text-white' : 'text-indigo-700';
  
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 sm-landscape:p-1 animate-fade-in">
      <div className="w-full flex items-center mb-8 sm-landscape:mb-4 relative">
        <button 
          onClick={onBack} 
          className="absolute left-0 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors" 
          aria-label={t('app.back', 'Go back')}
        >
          <ArrowLeftIcon className={`w-8 h-8 sm-landscape:w-7 sm-landscape:h-7 ${iconColorClass}`} />
        </button>
        <h1 className={`flex-1 text-center text-3xl sm:text-4xl sm-landscape:text-2xl font-black ${titleColorClass}`}>
          {isTr ? 'Akıl Oyunları' : 'Reasoning Games'}
        </h1>
      </div>
      
      <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
         <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-3">
            {activities.map((activity) => {
                const stats = activityStats[String(activity.type)] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0 };
                const isDisabled = !enabledActivities.has(String(activity.type));
                return (
                    <MenuButton
                        key={activity.type}
                        icon={activity.icon}
                        title={activity.title}
                        subtitle={activity.subtitle}
                        onClick={() => onSelectActivity(activity.type)}
                        color={activity.color}
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
  );
};

export default ReasoningActivitiesMenuScreen;