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

const PALETTES: Record<CosmicPalette, { core: string; glow: string; textTone?: string }>= {
  nebula:  { core: 'from-fuchsia-500 to-rose-500', glow: 'shadow-[0_0_40px_rgba(217,70,239,0.5),0_0_70px_rgba(217,70,239,0.3)]', textTone: 'text-white' },
  galaxy:  { core: 'from-blue-500 to-sky-500',   glow: 'shadow-[0_0_40px_rgba(59,130,246,0.5),0_0_70px_rgba(59,130,246,0.3)]',  textTone: 'text-white' },
  sun:     { core: 'from-amber-400 to-yellow-500', glow: 'shadow-[0_0_40px_rgba(245,158,11,0.5),0_0_70px_rgba(245,158,11,0.3)]', textTone: 'text-white' },
  aqua:    { core: 'from-cyan-500 to-teal-500',    glow: 'shadow-[0_0_40px_rgba(34,211,238,0.5),0_0_70px_rgba(34,211,238,0.3)]', textTone: 'text-white' },
  violet:  { core: 'from-purple-500 to-fuchsia-500',glow:'shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_70px_rgba(168,85,247,0.3)]',  textTone: 'text-white' },
  emerald: { core: 'from-emerald-500 to-green-500',glow:'shadow-[0_0_40px_rgba(16,185,129,0.5),0_0_70px_rgba(16,185,129,0.3)]',   textTone: 'text-white' },
  rose:    { core: 'from-rose-500 to-pink-500',    glow: 'shadow-[0_0_40px_rgba(244,63,94,0.5),0_0_70px_rgba(244,63,94,0.3)]',   textTone: 'text-white' },
  sky:     { core: 'from-sky-500 to-cyan-500',     glow: 'shadow-[0_0_40px_rgba(14,165,233,0.5),0_0_70px_rgba(14,165,233,0.3)]',  textTone: 'text-white' },
  star:    { core: 'from-red-500 to-orange-500',     glow: 'shadow-[0_0_40px_rgba(239,68,68,0.5),0_0_70px_rgba(239,68,68,0.3)]',   textTone: 'text-white' },
  terra:   { core: 'from-green-500 to-emerald-600',   glow: 'shadow-[0_0_40px_rgba(34,197,94,0.5),0_0_70px_rgba(34,197,94,0.3)]',  textTone: 'text-white' },
  quasar:  { core: 'from-cyan-400 to-sky-600',     glow: 'shadow-[0_0_40px_rgba(6,182,212,0.5),0_0_70px_rgba(6,182,212,0.3)]',  textTone: 'text-white' },
  nova:    { core: 'from-orange-400 to-amber-600', glow: 'shadow-[0_0_40px_rgba(251,146,60,0.5),0_0_70px_rgba(251,146,60,0.3)]',  textTone: 'text-white' },
  comet:   { core: 'from-violet-500 to-purple-600',glow:'shadow-[0_0_40px_rgba(139,92,246,0.5),0_0_70px_rgba(139,92,246,0.3)]',   textTone: 'text-white' },
  ember:   { core: 'from-green-400 to-emerald-600',glow:'shadow-[0_0_40px_rgba(34,197,94,0.5),0_0_70px_rgba(34,197,94,0.3)]',    textTone: 'text-white' },
};

const CosmicOrb: React.FC<CosmicOrbProps> = ({ icon: Icon, title, onClick, palette='galaxy', disabled=false, size='md', showOrbit=false }) => {
  const [active, setActive] = useState(false);
  const p = useMemo(() => PALETTES[palette] || PALETTES.galaxy, [palette]);
  const orbitParticles = useMemo(() => {
    if (!showOrbit) return [] as Array<{ left: number; top: number; opacity: number; duration: number; delay: number }>;
    // Parçacık sayısı azaltıldı: 4 -> 2
    return Array.from({ length: 2 }, (_, i) => ({
      left: 20 + i * 40 + Math.random() * 8,
      top: 30 + Math.random() * 40,
      opacity: 0.4 + Math.random() * 0.3,
      duration: 10 + Math.random() * 4,
      delay: i * 1,
    }));
  }, [showOrbit]);

  const sizeMap: Record<typeof size, { btn: string; icon: string; mt: string }> = {
    md: { btn: 'w-28 h-28 sm:w-32 sm:h-32', icon: 'w-10 h-10 sm:w-12 sm:h-12', mt: 'mt-2 text-sm' },
    lg: { btn: 'w-32 h-32 sm:w-36 sm:h-36', icon: 'w-11 h-11 sm:w-13 sm:h-13', mt: 'mt-3 text-sm' },
    xl: { btn: 'w-36 h-36 sm:w-40 sm:h-40', icon: 'w-14 h-14 sm:w-16 sm:h-16', mt: 'mt-3 text-sm' },
  };
  const s = sizeMap[size];

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Outer orbital glow - optimize edilmiş */}
        {showOrbit && (
          <div
            className={`absolute -inset-2 sm:-inset-3 rounded-full opacity-20 blur-lg pointer-events-none ${p.glow}`}
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
          {showOrbit && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="cosmic-saturn-ring cosmic-saturn-ring--base" />
              <div className="cosmic-saturn-ring cosmic-saturn-ring--aura" />
            </div>
          )}

          {/* Planet core - temiz gradient, animasyon optimize */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${p.core} ${p.glow}`} />

          {/* Atmospheric rim lighting & depth shading */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)] opacity-75" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_82%,rgba(0,0,0,0.55),rgba(0,0,0,0)_62%)] mix-blend-multiply opacity-65" />
          <div className="absolute inset-0 rounded-full border border-white/12 opacity-35" />

          {/* Specular highlight - optimize */}
          <div className="absolute left-[28%] top-[24%] w-[32%] h-[32%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)] blur-[10px] opacity-70" />
          
          {/* Icon - tam ortada */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className={`${s.icon} text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]`} />
          </div>

          {showOrbit && orbitParticles.length > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              {orbitParticles.map((particle, idx) => (
                <span
                  key={idx}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    opacity: particle.opacity,
                    animation: `orbital-drift ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </button>
      </div>
      <div className={`${s.mt} font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${p.core} text-glow-planet font-["Poppins"] text-center leading-tight max-w-[140px]`}>
        {title}
      </div>
    </div>
  );
};

export default CosmicOrb;
