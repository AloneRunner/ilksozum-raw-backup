import React from 'react';

export type CosmicPalette = 'nebula' | 'galaxy' | 'sun' | 'aqua' | 'violet' | 'emerald' | 'rose' | 'sky' | 'star' | 'terra' | 'quasar' | 'nova' | 'comet' | 'ember';

interface CosmicOrbProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  onClick: () => void;
  palette?: CosmicPalette;
  disabled?: boolean;
  size?: 'md' | 'lg' | 'xl';
  showOrbit?: boolean;
  ringStyle?: 'none' | 'classic' | 'thin' | 'broad' | 'dusty' | 'holo';
}

const colorStyles: Record<CosmicPalette, { core: string, rings: string, glowStart: string, glowEnd: string }> = {
  nebula: { core: 'bg-gradient-to-br from-pink-400 to-purple-500', rings: 'border-pink-300/50', glowStart: 'rgba(244, 114, 182, 0.5)', glowEnd: 'rgba(168, 85, 247, 0.2)' },
  galaxy: { core: 'bg-gradient-to-br from-blue-400 to-indigo-600', rings: 'border-blue-300/50', glowStart: 'rgba(96, 165, 250, 0.5)', glowEnd: 'rgba(79, 70, 229, 0.2)' },
  sun: { core: 'bg-gradient-to-br from-yellow-400 to-orange-500', rings: 'border-yellow-300/50', glowStart: 'rgba(251, 191, 36, 0.5)', glowEnd: 'rgba(249, 115, 22, 0.2)' },
  aqua: { core: 'bg-gradient-to-br from-cyan-500 to-teal-400', rings: 'border-cyan-200/60', glowStart: 'rgba(34,211,238,0.45)', glowEnd: 'rgba(14, 165, 233, 0.2)' },
  violet: { core: 'bg-gradient-to-br from-purple-500 to-fuchsia-400', rings: 'border-purple-200/60', glowStart: 'rgba(168,85,247,0.45)', glowEnd: 'rgba(124,58,237,0.2)' },
  emerald: { core: 'bg-gradient-to-br from-emerald-500 to-green-400', rings: 'border-emerald-200/60', glowStart: 'rgba(16,185,129,0.45)', glowEnd: 'rgba(22,163,74,0.2)' },
  rose: { core: 'bg-gradient-to-br from-rose-500 to-pink-400', rings: 'border-rose-200/60', glowStart: 'rgba(244,63,94,0.45)', glowEnd: 'rgba(225,29,72,0.2)' },
  sky: { core: 'bg-gradient-to-br from-sky-500 to-cyan-400', rings: 'border-sky-200/60', glowStart: 'rgba(14,165,233,0.45)', glowEnd: 'rgba(34,211,238,0.2)' },
  star: { core: 'bg-gradient-to-br from-red-500 to-rose-600', rings: 'border-red-400/50', glowStart: 'rgba(239, 68, 68, 0.5)', glowEnd: 'rgba(225, 29, 72, 0.2)' },
  terra: { core: 'bg-gradient-to-br from-green-400 to-teal-600', rings: 'border-green-300/50', glowStart: 'rgba(74, 222, 128, 0.5)', glowEnd: 'rgba(13, 148, 136, 0.2)' },
  quasar: { core: 'bg-gradient-to-br from-cyan-300 to-sky-500', rings: 'border-cyan-200/50', glowStart: 'rgba(103, 232, 249, 0.5)', glowEnd: 'rgba(14, 165, 233, 0.2)' },
  nova: { core: 'bg-gradient-to-br from-amber-400 to-orange-600', rings: 'border-amber-300/50', glowStart: 'rgba(251, 191, 36, 0.5)', glowEnd: 'rgba(234, 88, 12, 0.2)' },
  comet: { core: 'bg-gradient-to-br from-purple-400 to-violet-600', rings: 'border-purple-300/50', glowStart: 'rgba(192, 132, 252, 0.5)', glowEnd: 'rgba(124, 58, 237, 0.2)' },
  ember: { core: 'bg-gradient-to-br from-emerald-400 to-green-600', rings: 'border-emerald-300/50', glowStart: 'rgba(52, 211, 153, 0.5)', glowEnd: 'rgba(22, 163, 74, 0.2)' },
};

const CosmicOrb: React.FC<CosmicOrbProps> = ({ icon: Icon, title, onClick, palette='galaxy', disabled: _disabled=false, size='md', showOrbit: _showOrbit=false, ringStyle = 'none' }) => {
  const styles = colorStyles[palette] || colorStyles.galaxy;

  const sizeMap: Record<typeof size, { btn: string; icon: string; insetCore: string; mt: string }> = {
    md: { btn: 'w-28 h-28 sm:w-32 sm:h-32', icon: 'w-10 h-10 sm:w-12 sm:h-12', insetCore: 'inset-5 sm:inset-6', mt: 'mt-4 text-base sm:text-lg' },
    lg: { btn: 'w-32 h-32 sm:w-36 sm:h-36', icon: 'w-12 h-12 sm:w-14 sm:h-14', insetCore: 'inset-4 sm:inset-5', mt: 'mt-4 text-lg sm:text-xl' },
    xl: { btn: 'w-36 h-36 sm:w-40 sm:h-40', icon: 'w-14 h-14 sm:w-16 sm:h-16', insetCore: 'inset-3 sm:inset-4', mt: 'mt-5 text-xl sm:text-2xl' },
  };
  const s = sizeMap[size];

  return (
    <div className="relative flex flex-col items-center justify-center group cursor-pointer" onClick={onClick} role="button" tabIndex={0}>
      <div className={`relative ${s.btn} transform-style-3d transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2`}>
        {/* Big soft halo behind the core to create stronger glow */}
        <div
          className="absolute -inset-6 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at 40% 30%, ${styles.glowStart} 0%, ${styles.glowEnd} 35%, rgba(0,0,0,0) 60%)`,
            filter: 'blur(30px)',
            opacity: 0.95,
          }}
        />

  {/* Ring variants controlled by ringStyle prop */}
  {ringStyle !== 'none' && (
    (() => {
  // parameters per style
      if (ringStyle === 'classic') {
        return (
          <>
            {/* Back part of the ring (behind planet) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[220%] h-6 sm:h-8 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-35%) rotate(-22deg) perspective(600px) rotateX(55deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.12), ${styles.glowEnd}55, ${styles.glowStart}44, rgba(255,255,255,0.08))`,
                filter: 'blur(4px)',
                zIndex: 0,
                boxShadow: `0 8px 24px -4px ${styles.glowEnd}`,
                opacity: 0.94,
              }}
            />
            {/* Front part of the ring (in front of planet, visible overlap) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[200%] h-3 sm:h-4 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-35%) rotate(-22deg) perspective(600px) rotateX(55deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.22), ${styles.glowEnd}66, rgba(255,255,255,0.18))`,
                zIndex: 30,
                mixBlendMode: 'screen',
                filter: 'blur(1px)',
              }}
            />
          </>
        );
      }

      if (ringStyle === 'holo') {
        return (
          <>
            {/* Animated wrapper that handles rotation + positioning */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 holo-rotate pointer-events-none" style={{ width: '240%', height: '140px' }}>
              {/* Outer holo loop (faint, slightly blurred) */}
              <div
                className="holo-wobble"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '35%',
                  transform: 'translateX(-50%)',
                  width: '220%',
                  height: '6px',
                  borderRadius: '999px',
                  background: `linear-gradient(90deg, rgba(255,255,255,0.06), ${styles.glowEnd}55, rgba(255,255,255,0.03))`,
                  filter: 'blur(3px) saturate(150%)',
                  mixBlendMode: 'screen',
                  zIndex: 0,
                  opacity: 0.95,
                }}
              />

              {/* Inner holo loop (brighter, tighter, shimmering) */}
              <div
                className="holo-wobble holo-shimmer"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '38%',
                  transform: 'translateX(-50%)',
                  width: '185%',
                  height: '3.5px',
                  borderRadius: '999px',
                  background: `linear-gradient(90deg, rgba(255,255,255,0.18), ${styles.glowEnd}88, rgba(0,200,255,0.14))`,
                  filter: 'blur(1.5px) saturate(180%)',
                  mixBlendMode: 'screen',
                  zIndex: 30,
                }}
              />
            </div>
          </>
        );
      }

      if (ringStyle === 'thin') {
        return (
          <>
            {/* Back part of the ring (behind planet) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[180%] h-4 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-30%) rotate(-18deg) perspective(600px) rotateX(50deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.12), ${styles.glowEnd}66, rgba(255,255,255,0.08))`,
                filter: 'blur(2px)',
                zIndex: 0,
                boxShadow: `0 0 20px 6px ${styles.glowEnd}`,
                opacity: 0.92,
              }}
            />
            {/* Front part of the ring (in front of planet, darker to show overlap) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[170%] h-2 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-30%) rotate(-18deg) perspective(600px) rotateX(50deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.25), ${styles.glowEnd}88, rgba(255,255,255,0.18))`,
                zIndex: 30,
                mixBlendMode: 'screen',
                filter: 'blur(0.8px)',
              }}
            />
          </>
        );
      }

      if (ringStyle === 'broad') {
        return (
          <>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-10 sm:h-12 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-45%) rotate(-26deg) perspective(600px) rotateX(60deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.04), ${styles.glowEnd}44, ${styles.glowStart}33, rgba(0,0,0,0))`,
                filter: 'blur(10px)',
                zIndex: 0,
                boxShadow: `0 10px 30px -10px ${styles.glowEnd}`,
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-3 sm:h-4 rounded-full pointer-events-none"
              style={{
                transform: 'translateX(-50%) translateY(-45%) rotate(-26deg) perspective(600px) rotateX(60deg)',
                background: `linear-gradient(90deg, rgba(0,0,0,0.28), ${styles.glowEnd}24, rgba(255,255,255,0.05))`,
                zIndex: 30,
                mixBlendMode: 'screen',
              }}
            />
          </>
        );
      }

      // dusty: multiple faint thin slices to imply particle/dusty rings
      if (ringStyle === 'dusty') {
        return (
          <>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[210%] h-1.5 rounded-full pointer-events-none opacity-80"
              style={{
                transform: 'translateX(-50%) translateY(-35%) rotate(-20deg) perspective(600px) rotateX(52deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.02), ${styles.glowEnd}10, rgba(0,0,0,0))`,
                filter: 'blur(2px)',
                zIndex: 0,
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[190%] h-1 rounded-full pointer-events-none opacity-60"
              style={{
                transform: 'translateX(-50%) translateY(-33%) rotate(-22deg) perspective(600px) rotateX(54deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.02), ${styles.glowEnd}8, rgba(0,0,0,0))`,
                filter: 'blur(1px)'
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[170%] h-0.5 rounded-full pointer-events-none opacity-50"
              style={{
                transform: 'translateX(-50%) translateY(-31%) rotate(-24deg) perspective(600px) rotateX(56deg)',
                background: `linear-gradient(90deg, rgba(255,255,255,0.015), ${styles.glowEnd}6, rgba(0,0,0,0))`,
              }}
            />
          </>
        );
      }

      return null;
    })()
  )}

        {/* Core */}
        <div 
            className={`absolute ${s.insetCore} rounded-full ${styles.core} flex items-center justify-center animate-pulse-glow group-hover:[animation-duration:2s]`}
            style={{
                ['--glow-color-start' as any]: styles.glowStart,
                ['--glow-color-end' as any]: styles.glowEnd,
                boxShadow: `0 0 30px 8px ${styles.glowStart}, 0 0 80px 28px ${styles.glowEnd}`,
            }}
        >
          <Icon className={`w-10 h-10 sm:w-12 sm:h-12 text-white/90 drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]`} />
        </div>
      </div>
      <h3 className={`${s.mt} font-bold text-slate-200/90 text-center tracking-wide group-hover:text-white transition-colors duration-300`}>{title}</h3>
    </div>
  );
};

export default CosmicOrb;

