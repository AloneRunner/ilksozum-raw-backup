
import React from 'react';
import { Tab } from '../types.ts';
import ObjectsIcon from './icons/ObjectsIcon.tsx';
import CommunicationIcon from './icons/CommunicationIcon.tsx';
import TrophyIcon from './icons/TrophyIcon.tsx';
import CogIcon from './icons/CogIcon.tsx';

interface BottomNavBarProps {
  activeTab: Tab;
  onSelectTab: (tab: Tab) => void;
  onSelectSettings: () => void;
}

const NavButton: React.FC<{
    icon: React.FC<{ className?: string }>;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon: Icon, label, isActive, onClick }) => {
    const activeClasses = 'text-sky-600 landscape:bg-sky-100/80';
    const inactiveClasses = 'text-slate-500 hover:text-sky-500 landscape:hover:bg-slate-200/50';

    return (
        <button 
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 landscape:w-auto landscape:h-auto landscape:p-2 landscape:rounded-lg ${isActive ? activeClasses : inactiveClasses}`}
        >
            <Icon className="w-7 h-7 mb-0.5 landscape:w-8 landscape:h-8" />
            <span className="text-xs font-bold landscape:text-[10px] landscape:mt-1">{label}</span>
        </button>
    );
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab, onSelectSettings }) => {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-t-2 border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-around z-30 landscape:h-full landscape:w-20 landscape:flex-col landscape:justify-start landscape:pt-8 landscape:gap-4 landscape:border-t-0 landscape:border-r-2 landscape:right-auto`}>
      <NavButton
        icon={ObjectsIcon}
        label="Etkinlikler"
        isActive={activeTab === Tab.Activities}
        onClick={() => onSelectTab(Tab.Activities)}
      />
      <NavButton
        icon={CommunicationIcon}
        label="İletişim"
        isActive={activeTab === Tab.Communication}
        onClick={() => onSelectTab(Tab.Communication)}
      />
      <NavButton
        icon={TrophyIcon}
        label="Başarımlar"
        isActive={activeTab === Tab.Rewards}
        onClick={() => onSelectTab(Tab.Rewards)}
      />
       <NavButton
        icon={CogIcon}
        label="Ayarlar"
        isActive={false}
        onClick={onSelectSettings}
      />
    </nav>
  );
};

export default React.memo(BottomNavBar);
