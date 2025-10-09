import React from 'react';
import { t } from '../../i18n';

type ButtonColor = 'sky' | 'amber' | 'teal' | 'indigo' | 'rose' | 'cyan' | 'lime' | 'purple' | 'orange' | 'pink' | 'blue';
type ThemeKey = 'simple' | 'balon' | 'gunes' | 'tilki' | 'ay' | 'geceorman' | 'yagmur' | 'kus' | 'tilki2' | 'kedi' | 'kar' | 'gunbatimi' | 'ay2' | 'zurafa' | 'geometri';

interface MenuButtonProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  onClick: () => void;
  color: ButtonColor;
  theme: string;
  children?: React.ReactNode;
  disabled?: boolean;
  badge?: string;
  isUnderDevelopment?: boolean;
}

const themeConfig: Record<ThemeKey, any> = {
  simple: { // This key is not used directly, but shows the structure
    sky:    { bg: 'bg-gradient-to-br from-sky-400 to-blue-500',   iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-sky-200' },
    amber:  { bg: 'bg-gradient-to-br from-amber-400 to-orange-500', iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-amber-200' },
    teal:   { bg: 'bg-gradient-to-br from-teal-400 to-emerald-500', iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-teal-200' },
    indigo: { bg: 'bg-gradient-to-br from-indigo-400 to-purple-500', iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-indigo-200' },
    rose:   { bg: 'bg-gradient-to-br from-rose-400 to-pink-500',    iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-rose-200' },
    cyan:   { bg: 'bg-gradient-to-br from-cyan-400 to-sky-500',    iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-cyan-200' },
    lime:   { bg: 'bg-gradient-to-br from-lime-400 to-green-500',  iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-lime-200' },
    purple: { bg: 'bg-gradient-to-br from-purple-400 to-fuchsia-500',iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-purple-200' },
    orange: { bg: 'bg-gradient-to-br from-orange-400 to-red-500',   iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-orange-200' },
    pink:   { bg: 'bg-gradient-to-br from-pink-400 to-rose-500',   iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-pink-200' },
    blue:   { bg: 'bg-gradient-to-br from-blue-400 to-indigo-500', iconWrapper: 'bg-white/20', text: 'text-white', ring: 'focus:ring-blue-200' },
  },
  balon:     { bg: 'bg-white/50',          iconBg: 'bg-sky-100/70',     iconText: 'text-sky-600',    title: 'text-sky-900',   subtitle: 'text-sky-700',   ring: 'focus:ring-sky-300' },
  gunes:     { bg: 'bg-amber-400/70',      iconBg: 'bg-orange-100/50',  iconText: 'text-orange-600', title: 'text-yellow-900',subtitle: 'text-yellow-700',ring: 'focus:ring-amber-300' },
  tilki:     { bg: 'bg-green-900/70',      iconBg: 'bg-orange-400/20',  iconText: 'text-orange-300', title: 'text-white',     subtitle: 'text-green-200', ring: 'focus:ring-orange-300' },
  tilki2:    { bg: 'bg-green-700/70',      iconBg: 'bg-orange-400/20',  iconText: 'text-orange-300', title: 'text-white',     subtitle: 'text-green-200', ring: 'focus:ring-orange-300' },
  ay:        { bg: 'bg-indigo-900/70',     iconBg: 'bg-yellow-400/20',  iconText: 'text-yellow-300', title: 'text-white',     subtitle: 'text-indigo-200',ring: 'focus:ring-yellow-300' },
  geceorman: { bg: 'bg-indigo-800/70',     iconBg: 'bg-cyan-400/20',    iconText: 'text-cyan-300',   title: 'text-white',     subtitle: 'text-indigo-200',ring: 'focus:ring-cyan-300' },
  yagmur:    { bg: 'bg-emerald-800/70',    iconBg: 'bg-emerald-400/20', iconText: 'text-emerald-300',title: 'text-white',     subtitle: 'text-emerald-100',ring: 'focus:ring-emerald-300' },
  kus:       { bg: 'bg-sky-300/70',        iconBg: 'bg-sky-100/50',     iconText: 'text-sky-600',    title: 'text-sky-900',   subtitle: 'text-sky-700',   ring: 'focus:ring-sky-300' },
  kedi:      { bg: 'bg-white/50',          iconBg: 'bg-lime-100/70',    iconText: 'text-lime-700',   title: 'text-lime-900',  subtitle: 'text-lime-800',  ring: 'focus:ring-lime-300' },
  kar:       { bg: 'bg-white/60',          iconBg: 'bg-sky-200/50',     iconText: 'text-sky-700',    title: 'text-sky-900',   subtitle: 'text-sky-800',   ring: 'focus:ring-sky-300' },
  gunbatimi: { bg: 'bg-rose-900/60',       iconBg: 'bg-orange-400/20',  iconText: 'text-orange-300', title: 'text-white',     subtitle: 'text-rose-200',  ring: 'focus:ring-orange-300' },
  ay2:       { bg: 'bg-indigo-900/70',     iconBg: 'bg-yellow-400/20',  iconText: 'text-yellow-300', title: 'text-white',     subtitle: 'text-indigo-200',ring: 'focus:ring-yellow-300' },
  zurafa:    { bg: 'bg-white/60',          iconBg: 'bg-cyan-200/50',    iconText: 'text-cyan-700',   title: 'text-cyan-900',  subtitle: 'text-cyan-800',  ring: 'focus:ring-cyan-300' },
  geometri:  { bg: 'bg-rose-900/10',       iconBg: 'bg-rose-200/40',    iconText: 'text-rose-800',   title: 'text-rose-900',  subtitle: 'text-rose-700',  ring: 'focus:ring-rose-300' },
};


const MenuButton: React.FC<MenuButtonProps> = ({ icon: Icon, title, subtitle, onClick, color, theme, children, disabled = false, badge, isUnderDevelopment }) => {
  const isThemed = theme !== 'simple';
  const finalDisabled = disabled || isUnderDevelopment;
  const badgeClass = badge === 'Yeni!' ? 'bg-green-400 animate-pulse' : 'bg-orange-400';

  if (!isThemed) {
    const simpleClasses = themeConfig.simple[color];
    return (
        <button
          onClick={onClick}
          disabled={finalDisabled}
          className={`relative w-full h-36 sm-landscape:h-28 text-left p-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 ${simpleClasses.bg} ${simpleClasses.ring} ${finalDisabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 sm-landscape:flex-col sm-landscape:items-start sm-landscape:gap-1">
                    <div className={`p-2 sm-landscape:p-1.5 rounded-xl flex-shrink-0 ${simpleClasses.iconWrapper}`}>
                      <Icon className={`w-7 h-7 sm-landscape:w-6 sm-landscape:h-6 ${simpleClasses.text}`} />
                    </div>
                    <div className="flex-1 sm-landscape:w-full">
                      <h2 className={`text-base font-bold leading-tight pt-1 sm-landscape:pt-0 ${simpleClasses.text} text-shadow-soft`}>{title}</h2>
                    </div>
                  </div>
                  <p className={`text-sm leading-tight mt-1 ml-1 text-white/80 text-shadow-soft sm-landscape:hidden`}>{subtitle}</p>
                </div>
            </div>
            {children}
            {isUnderDevelopment && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">{t('app.developing', 'Under development')}</div>
            )}
            {disabled && badge && !isUnderDevelopment && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Yakında</div>
            )}
            {badge && !disabled && !isUnderDevelopment && (
              <div className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-full ${badgeClass}`}>{badge}</div>
            )}
        </button>
    )
  }

  // Themed version for video backgrounds
  const themedClasses = themeConfig[theme as ThemeKey] || themeConfig.balon; // Default to 'balon' style if theme not found
  return (
    <button
      onClick={onClick}
      disabled={finalDisabled}
      className={`relative w-full h-36 sm-landscape:h-28 text-left p-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 backdrop-blur-md border border-white/30 ${themedClasses.bg} ${themedClasses.ring} ${finalDisabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="flex items-start gap-3 sm-landscape:flex-col sm-landscape:items-start sm-landscape:gap-1">
            <div className={`p-2 sm-landscape:p-1.5 rounded-xl flex-shrink-0 ${themedClasses.iconBg}`}>
              <Icon className={`w-7 h-7 sm-landscape:w-6 sm-landscape:h-6 ${themedClasses.iconText}`} />
            </div>
            <div className="flex-1 sm-landscape:w-full">
              <h2 className={`text-base font-bold leading-tight pt-1 sm-landscape:pt-0 ${themedClasses.title}`}>{title}</h2>
            </div>
          </div>
          <p className={`text-sm leading-tight mt-1 ml-1 ${themedClasses.subtitle} sm-landscape:hidden`}>{subtitle}</p>
        </div>
      </div>
      {children}
      {isUnderDevelopment && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Geliştiriliyor</div>
      )}
      {disabled && badge && !isUnderDevelopment && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Yakında</div>
      )}
      {badge && !disabled && !isUnderDevelopment && (
        <div className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-full ${badgeClass}`}>{badge}</div>
      )}
    </button>
  );
};

export default MenuButton;