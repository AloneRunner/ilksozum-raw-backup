import React from 'react';
import WanderingMeteors from './WanderingMeteors.tsx';

interface CosmicBackdropProps {
  variant?: 'light' | 'rich';
  showMeteors?: boolean;
  showDots?: boolean;
  className?: string;
}

// Lightweight cosmic background for activity screens. Very subtle by default.
const CosmicBackdrop: React.FC<CosmicBackdropProps> = ({ variant = 'light', showMeteors = true, showDots = true, className = '' }) => {
  const isLight = variant === 'light';
  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`} aria-hidden>
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#050816] to-[#000000]" />

      {/* Stars dotted grid (CSS-based, very cheap) */}
      {showDots && (
        <div className={`absolute inset-0 opacity-30 [background-image:radial-gradient(1.1px_1.1px_at_1.1px_1.1px,rgba(255,255,255,0.7)_1.1px,transparent_1.1px)] [background-size:24px_24px]`} />
      )}

      {/* Nebula glows (very faint) */}
      <div className={`absolute top-1/3 left-1/5 w-80 h-80 ${isLight ? 'bg-fuchsia-400/10' : 'bg-fuchsia-400/14'} rounded-full blur-[110px] -z-10`} />
      <div className={`absolute bottom-1/4 right-1/6 w-96 h-96 ${isLight ? 'bg-cyan-400/10' : 'bg-cyan-400/14'} rounded-full blur-[120px] -z-10`} />

      {/* Optional very subtle meteors */}
      {showMeteors && <WanderingMeteors count={2} />}

      {/* Vignette for contrast */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.55) 100%)'
      }} />
    </div>
  );
};

export default CosmicBackdrop;
