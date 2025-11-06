import React from 'react';

type OrbColor = 'sky' | 'amber' | 'emerald' | 'purple' | 'rose' | 'cyan' | 'lime' | 'orange' | 'pink' | 'blue';

interface MenuOrbProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  onClick: () => void;
  color: OrbColor;
  disabled?: boolean;
}

const orbColorConfig: Record<OrbColor, { gradient: string; shadow: string; hoverShadow: string }> = {
  sky:     { gradient: 'from-sky-500 to-cyan-400',     shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.35)]', hoverShadow: 'hover:shadow-[0_0_45px_rgba(14,165,233,0.5)]' },
  amber:   { gradient: 'from-amber-500 to-yellow-400', shadow: 'shadow-[0_0_30px_rgba(251,191,36,0.35)]', hoverShadow: 'hover:shadow-[0_0_45px_rgba(251,191,36,0.5)]' },
  emerald: { gradient: 'from-emerald-500 to-green-400', shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]', hoverShadow: 'hover:shadow-[0_0_45px_rgba(16,185,129,0.5)]' },
  purple:  { gradient: 'from-purple-500 to-fuchsia-400',shadow: 'shadow-[0_0_30px_rgba(168,85,247,0.35)]', hoverShadow: 'hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]' },
  rose:    { gradient: 'from-rose-500 to-pink-400',     shadow: 'shadow-[0_0_30px_rgba(244,63,94,0.35)]',   hoverShadow: 'hover:shadow-[0_0_45px_rgba(244,63,94,0.5)]' },
  cyan:    { gradient: 'from-cyan-400 to-teal-300',     shadow: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]',   hoverShadow: 'hover:shadow-[0_0_45px_rgba(6,182,212,0.5)]' },
  lime:    { gradient: 'from-lime-400 to-green-500',    shadow: 'shadow-[0_0_30px_rgba(132,204,22,0.35)]',  hoverShadow: 'hover:shadow-[0_0_45px_rgba(132,204,22,0.5)]' },
  orange:  { gradient: 'from-orange-400 to-red-500',    shadow: 'shadow-[0_0_30px_rgba(249,115,22,0.35)]',  hoverShadow: 'hover:shadow-[0_0_45px_rgba(249,115,22,0.5)]' },
  pink:    { gradient: 'from-pink-500 to-rose-400',     shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.35)]',  hoverShadow: 'hover:shadow-[0_0_45px_rgba(236,72,153,0.5)]' },
  blue:    { gradient: 'from-blue-500 to-indigo-400',   shadow: 'shadow-[0_0_30px_rgba(59,130,246,0.35)]',  hoverShadow: 'hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]' },
};

const MenuOrb: React.FC<MenuOrbProps> = ({ icon: Icon, title, onClick, color, disabled = false }) => {
  const colorClasses = orbColorConfig[color] || orbColorConfig.purple;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative w-36 h-36 sm:w-40 sm:h-40 rounded-full
        flex flex-col items-center justify-center
  bg-gradient-to-br ${colorClasses.gradient}
  text-white font-["Nunito"]
        transition-all duration-300 ease-in-out
        transform animate-float
        ${colorClasses.shadow} ${colorClasses.hoverShadow}
        hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-300
        ${disabled ? 'opacity-50 grayscale pointer-events-none' : ''}
      `}
    >
      <div className="absolute inset-0 rounded-full border border-white/20"></div>
      <div className="absolute inset-0 rounded-full bg-black/10"></div>
      
      <Icon className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg" />
      <h3 className="mt-2 text-base sm:text-lg font-bold tracking-wide">{title}</h3>
      
      {disabled && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Yakında</div>
      )}
    </button>
  );
};

export default MenuOrb;
