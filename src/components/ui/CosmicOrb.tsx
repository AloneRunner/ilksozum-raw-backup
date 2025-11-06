import React, { useMemo, useState } from 'react';

export type CosmicPalette = 'nebula' | 'galaxy' | 'sun' | 'aqua' | 'violet' | 'emerald' | 'rose' | 'sky' | 'star' | 'terra' | 'quasar' | 'nova' | 'comet' | 'ember';

interface CosmicOrbProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  onClick: () => void;
  palette?: CosmicPalette;
  disabled?: boolean;
  size?: 'md' | 'lg' | 'xl';
  showOrbit?: boolean;
}

const PALETTES: Record<CosmicPalette, { core: string; glow: string; ring: string; textTone?: string; shimmer?: string }>= {
  nebula:  { core: 'from-fuchsia-500 to-rose-500', glow: 'shadow-[0_0_60px_rgba(217,70,239,0.7),0_0_100px_rgba(217,70,239,0.4)]', ring: 'border-fuchsia-300/70', textTone: 'text-white', shimmer: 'from-fuchsia-400/30 to-transparent' },
  galaxy:  { core: 'from-blue-500 to-sky-500',   glow: 'shadow-[0_0_60px_rgba(59,130,246,0.7),0_0_100px_rgba(59,130,246,0.4)]',  ring: 'border-sky-300/70',     textTone: 'text-white', shimmer: 'from-sky-400/30 to-transparent' },
  sun:     { core: 'from-amber-400 to-yellow-500', glow: 'shadow-[0_0_60px_rgba(245,158,11,0.7),0_0_100px_rgba(245,158,11,0.4)]', ring: 'border-amber-200/80',   textTone: 'text-white', shimmer: 'from-yellow-300/30 to-transparent' },
  aqua:    { core: 'from-cyan-500 to-teal-500',    glow: 'shadow-[0_0_60px_rgba(34,211,238,0.7),0_0_100px_rgba(34,211,238,0.4)]', ring: 'border-cyan-300/80',    textTone: 'text-white', shimmer: 'from-cyan-300/30 to-transparent' },
  violet:  { core: 'from-purple-500 to-fuchsia-500',glow:'shadow-[0_0_60px_rgba(168,85,247,0.7),0_0_100px_rgba(168,85,247,0.4)]',  ring: 'border-purple-300/80',  textTone: 'text-white', shimmer: 'from-purple-300/30 to-transparent' },
  emerald: { core: 'from-emerald-500 to-green-500',glow:'shadow-[0_0_60px_rgba(16,185,129,0.7),0_0_100px_rgba(16,185,129,0.4)]',   ring: 'border-emerald-300/80', textTone: 'text-white', shimmer: 'from-emerald-300/30 to-transparent' },
  rose:    { core: 'from-rose-500 to-pink-500',    glow: 'shadow-[0_0_60px_rgba(244,63,94,0.7),0_0_100px_rgba(244,63,94,0.4)]',   ring: 'border-rose-300/80',    textTone: 'text-white', shimmer: 'from-rose-300/30 to-transparent' },
  sky:     { core: 'from-sky-500 to-cyan-500',     glow: 'shadow-[0_0_60px_rgba(14,165,233,0.7),0_0_100px_rgba(14,165,233,0.4)]',  ring: 'border-sky-300/80',     textTone: 'text-white', shimmer: 'from-sky-300/30 to-transparent' },
  star:    { core: 'from-red-500 to-orange-500',     glow: 'shadow-[0_0_60px_rgba(239,68,68,0.7),0_0_100px_rgba(239,68,68,0.4)]',   ring: 'border-red-300/80',     textTone: 'text-white', shimmer: 'from-red-300/30 to-transparent' },
  terra:   { core: 'from-green-500 to-emerald-600',   glow: 'shadow-[0_0_60px_rgba(34,197,94,0.7),0_0_100px_rgba(34,197,94,0.4)]',  ring: 'border-green-300/80',   textTone: 'text-white', shimmer: 'from-green-300/30 to-transparent' },
  quasar:  { core: 'from-cyan-400 to-sky-600',     glow: 'shadow-[0_0_60px_rgba(6,182,212,0.7),0_0_100px_rgba(6,182,212,0.4)]',  ring: 'border-cyan-300/80',    textTone: 'text-white', shimmer: 'from-cyan-300/30 to-transparent' },
  nova:    { core: 'from-orange-400 to-amber-600', glow: 'shadow-[0_0_60px_rgba(251,146,60,0.7),0_0_100px_rgba(251,146,60,0.4)]',  ring: 'border-orange-300/80',   textTone: 'text-white', shimmer: 'from-orange-300/30 to-transparent' },
  comet:   { core: 'from-violet-500 to-purple-600',glow:'shadow-[0_0_60px_rgba(139,92,246,0.7),0_0_100px_rgba(139,92,246,0.4)]',   ring: 'border-purple-300/80',  textTone: 'text-white', shimmer: 'from-violet-300/30 to-transparent' },
  ember:   { core: 'from-green-400 to-emerald-600',glow:'shadow-[0_0_60px_rgba(34,197,94,0.7),0_0_100px_rgba(34,197,94,0.4)]',    ring: 'border-emerald-300/80', textTone: 'text-white', shimmer: 'from-green-300/30 to-transparent' },
};

const CosmicOrb: React.FC<CosmicOrbProps> = ({ icon: Icon, title, onClick, palette='galaxy', disabled=false, size='md', showOrbit=false }) => {
  const [active, setActive] = useState(false);
  const p = useMemo(() => PALETTES[palette] || PALETTES.galaxy, [palette]);

  const sizeMap: Record<typeof size, { btn: string; icon: string; insetCore: string; mt: string }> = {
    md: { btn: 'w-28 h-28 sm:w-32 sm:h-32', icon: 'w-10 h-10 sm:w-12 sm:h-12', insetCore: 'inset-4 sm:inset-5', mt: 'mt-2 text-sm' },
    lg: { btn: 'w-32 h-32 sm:w-36 sm:h-36', icon: 'w-12 h-12 sm:w-14 sm:h-14', insetCore: 'inset-4 sm:inset-5', mt: 'mt-3 text-sm' },
    xl: { btn: 'w-36 h-36 sm:w-40 sm:h-40', icon: 'w-14 h-14 sm:w-16 sm:h-16', insetCore: 'inset-2 sm:inset-3', mt: 'mt-3 text-sm' },
  };
  const s = sizeMap[size];
  const ringColorClass = useMemo(() => `border ${p.ring}`, [p.ring]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Outer orbital glow - daha az parlak */}
        {showOrbit && (
          <div
            className={`absolute -inset-2 sm:-inset-3 rounded-full opacity-30 blur-xl pointer-events-none ${p.glow}`}
          />
        )}

        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          data-active={active || undefined}
          onPointerDown={() => setActive(true)}
          onPointerUp={() => setActive(false)}
          onPointerLeave={() => setActive(false)}
          className={`group relative ${s.btn} rounded-full overflow-visible focus:outline-none transition-all duration-300 ${disabled ? 'opacity-50 grayscale pointer-events-none' : 'hover:scale-105 active:scale-[1.02]'}`}
        >
          {/* Planet core - temiz gradient */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${p.core} ${p.glow} animate-pulse-glow`} />
          
          {/* Shimmer overlay */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${p.shimmer} opacity-30`} />
          
          {/* Orbit rings - smooth, no dashed segments */}
          <div className={`absolute -inset-[10px] sm:-inset-[12px] rounded-full border border-white/15`} />
          <div className={`absolute -inset-[7px] sm:-inset-[9px] rounded-full ${ringColorClass} opacity-55 animate-ring-slow`} />
          <div className={`absolute -inset-[4px] sm:-inset-[5px] rounded-full ${ringColorClass} opacity-30 animate-ring-slow-rev`} />
          
          {/* Icon - tam ortada */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className={`${s.icon} text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]`} />
          </div>
        </button>
      </div>
      <div className={`${s.mt} font-bold tracking-wide ${p.textTone} drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-["Poppins"] text-center max-w-[120px]`}>{title}</div>
    </div>
  );
};

export default CosmicOrb;
