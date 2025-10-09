
import React from 'react';
import { getCurrentLanguage } from '../i18n/index.ts';
import { t } from '../i18n/index.ts';
import BookOpenIcon from './icons/BookOpenIcon.tsx';
import LightBulbIcon from './icons/LightBulbIcon.tsx';
import BrainIcon from './icons/BrainIcon.tsx';
import ObjectsIcon from './icons/ObjectsIcon.tsx';
import DiceIcon from './icons/DiceIcon.tsx';
import MenuButton from './ui/MenuButton.tsx';

interface MainMenuScreenProps {
  onSelectCategory: (category: 'letterSound' | 'objectCategories' | 'objectCategoriesIntl' | 'conceptActivities' | 'reasoningActivities') => void;
  onStartRandomMode: () => void;
  onSelectParentTips: () => void;
  onSelectSettings?: () => void;
  theme: string;
}

const MainMenuScreen: React.FC<MainMenuScreenProps> = ({ onSelectCategory, onStartRandomMode, onSelectParentTips, theme }) => {
  const lang = getCurrentLanguage();
  const showObjectsIntl = lang !== 'tr';

  const menuItems = [
    {
      id: 'letterSound' as const,
      icon: BookOpenIcon,
      title: "Harf ve Sesler",
      subtitle: "Harfleri ve sesleri öğren, hecele ve oku.",
      color: 'sky' as const
    },
    ...(lang === 'tr' ? [{
      id: 'objectCategories' as const,
      icon: ObjectsIcon,
      title: "Nesneleri Tanıyalım",
      subtitle: "Hayvanları, meyveleri ve daha fazlasını öğren.",
      color: 'amber' as const
    }] : []),
    ...(showObjectsIntl ? [{
      id: 'objectCategoriesIntl' as const,
      icon: ObjectsIcon,
      title: t('categories.objectsIntl.title') || 'Objects',
      subtitle: t('categories.objectsIntl.subtitle') || 'Curated objects for non‑TR languages',
      color: 'amber' as const
    }] : []),
    {
      id: 'conceptActivities' as const,
      icon: LightBulbIcon,
      title: "Kavram Etkinlikleri",
      subtitle: "Renkleri, şekilleri ve zıt kavramları öğren.",
      color: 'teal' as const
    },
    {
      id: 'reasoningActivities' as const,
      icon: BrainIcon,
      title: "Akıl Oyunları",
      subtitle: "Hafıza, sudoku ve mantık oyunları oyna.",
      color: 'indigo' as const
    },
  ];
  const isThemed = theme !== 'simple';
  const textColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-slate-800';
  const subtitleColorClass = isThemed ? 'text-white text-shadow-soft' : 'text-slate-600';

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-lg landscape:max-w-5xl mx-auto p-4 sm-landscape:p-2 animate-fade-in">
      <div className="w-full text-center mb-4 landscape:mb-2">
        <p className={`text-3xl landscape:text-2xl sm-landscape:text-xl font-semibold animate-fade-in ${subtitleColorClass}`}>Merhaba 👋</p>
      </div>
      <div className="w-full text-center mb-8 landscape:mb-4">
        <h1 className={`text-3xl sm:text-4xl landscape:text-3xl sm-landscape:text-2xl font-black ${textColorClass}`}>İlk Sözüm: Eğitici Kartlar</h1>
      </div>

      <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 sm-landscape:grid-cols-3 gap-4 sm-landscape:gap-3">
             <MenuButton
                icon={DiceIcon}
                title="Rastgele Mod"
                subtitle="Seçili etkinliklerden karışık oyna"
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
              </MenuButton>
            ))}
            <MenuButton
              icon={LightBulbIcon}
              title="Ebeveynler İçin İpuçları"
              subtitle="Uygulamayı daha verimli kullanın"
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
