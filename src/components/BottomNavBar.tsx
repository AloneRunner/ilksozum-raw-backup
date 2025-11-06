
import React from 'react';
import { Tab } from '../types.ts';
import ObjectsIcon from './icons/ObjectsIcon.tsx';
import CommunicationIcon from './icons/CommunicationIcon.tsx';
import TrophyIcon from './icons/TrophyIcon.tsx';
import CogIcon from './icons/CogIcon.tsx';
import CrownIcon from './icons/CrownIcon.tsx';
import { t } from '../i18n/index.ts';

interface BottomNavBarProps {
  activeTab: Tab;
  onSelectTab: (tab: Tab) => void;
  onSelectSettings: () => void;
  isPremium: boolean;
  themeKey?: string;
}

const NavButton: React.FC<{
    icon: React.FC<{ className?: string }>;
    label: string;
    isActive: boolean;
    onClick: () => void;
    isLocked?: boolean;
  variant: 'default' | 'cosmic';
}> = ({ icon: Icon, label, isActive, onClick, isLocked, variant }) => {
  const isCosmic = variant === 'cosmic';

  const activeClasses = isCosmic
    ? 'text-cyan-300'
    : 'text-sky-600 landscape:bg-sky-100/80';

  const inactiveClasses = (() => {
    if (isCosmic) {
      return isLocked ? 'text-slate-500/60' : 'text-slate-300 hover:text-white/90';
    }
    return isLocked ? 'text-slate-400' : 'text-slate-500 hover:text-sky-500 landscape:hover:bg-slate-200/50';
  })();

    return (
        <button 
            onClick={onClick}
      className={`relative flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 landscape:w-auto landscape:h-auto landscape:p-2 landscape:rounded-lg ${isActive ? activeClasses : inactiveClasses}`}
        >
      <Icon className={`w-7 h-7 mb-0.5 landscape:w-8 landscape:h-8 ${isCosmic ? 'drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]' : ''}`} />
      <span className={`text-xs font-bold landscape:text-[10px] landscape:mt-1 ${isCosmic ? 'tracking-wide' : ''}`}>{label}</span>
            {isLocked && <CrownIcon className="absolute -top-0.5 -right-0.5 w-4 h-4 text-amber-500 bg-white rounded-full p-0.5" />}
        </button>
    );
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab, onSelectSettings, isPremium, themeKey }) => {
  const isCosmicTheme = themeKey === 'deneme2';

  const baseNavClass = isCosmicTheme
    ? 'bg-slate-900/70 border-sky-500/30 shadow-[0_-8px_24px_rgba(15,118,191,0.25)] text-white'
    : 'bg-white/80 border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]';

  return (
    <nav className={`fixed bottom-0 left-0 right-0 h-20 ${baseNavClass} backdrop-blur-md flex items-center justify-around z-30 landscape:h-full landscape:w-20 landscape:flex-col landscape:justify-start landscape:pt-8 landscape:gap-4 landscape:border-t-0 landscape:border-r-2 landscape:right-auto`}>
      <NavButton
        icon={ObjectsIcon}
        label={t('tabs.activities', 'Etkinlikler')}
        isActive={activeTab === Tab.Activities}
        onClick={() => onSelectTab(Tab.Activities)}
        variant={isCosmicTheme ? 'cosmic' : 'default'}
      />
      <NavButton
        icon={CommunicationIcon}
        label={t('tabs.communication', 'İletişim')}
        isActive={activeTab === Tab.Communication}
        onClick={() => onSelectTab(Tab.Communication)}
        variant={isCosmicTheme ? 'cosmic' : 'default'}
      />
      <NavButton
        icon={TrophyIcon}
        label={t('tabs.achievements', 'Başarımlar')}
        isActive={activeTab === Tab.Rewards}
        onClick={() => onSelectTab(Tab.Rewards)}
        isLocked={!isPremium}
        variant={isCosmicTheme ? 'cosmic' : 'default'}
      />
       <NavButton
        icon={CogIcon}
        label={t('tabs.settings', 'Ayarlar')}
        isActive={false}
        onClick={onSelectSettings}
        variant={isCosmicTheme ? 'cosmic' : 'default'}
      />
    </nav>
  );
};

export default React.memo(BottomNavBar);
