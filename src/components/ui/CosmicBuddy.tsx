import React from 'react';

export type BuddyMood = 'idle' | 'think' | 'happy' | 'sad';

interface CosmicBuddyProps {
  mood?: BuddyMood;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// A tiny SVG robot/alien hybrid that reacts with face changes.
// Uses minimal CSS animations defined in index.css: .cosmic-buddy-blink, .cosmic-buddy-pulse
const CosmicBuddy: React.FC<CosmicBuddyProps> = ({ mood = 'idle', size = 'md', className = '' }) => {
  const sizePx = size === 'sm' ? 72 : size === 'lg' ? 128 : 96;
  const faceGlow = mood === 'happy' ? 'drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]' : mood === 'sad' ? 'drop-shadow-[0_0_12px_rgba(99,102,241,0.25)]' : 'drop-shadow-[0_0_10px_rgba(14,165,233,0.2)]';
  const pulseClass = mood === 'happy' ? 'cosmic-buddy-pulse' : '';

  // Eye shape and mouth based on mood
  const eyeOpen = mood !== 'sad';
  const mouthPath =
    mood === 'happy'
      ? 'M30 64 Q48 78 66 64' // smile
      : mood === 'sad'
      ? 'M30 70 Q48 56 66 70' // frown
      : 'M32 66 H64'; // neutral

  return (
    <div className={`inline-flex items-center justify-center ${className}`} aria-label={`cosmic-buddy-${mood}`}>
      <svg width={sizePx} height={sizePx} viewBox="0 0 96 96" role="img" className={`${faceGlow} ${pulseClass}`}>
        {/* Halo */}
        <defs>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="visor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
        <circle cx="48" cy="48" r="44" fill="url(#halo)" />
        {/* Helmet */}
        <circle cx="48" cy="48" r="34" fill="#0b1220" stroke="#38bdf8" strokeOpacity="0.35" strokeWidth="2" />
        {/* Visor */}
        <rect x="22" y="28" width="52" height="28" rx="14" fill="url(#visor)" opacity="0.8" />
        <rect x="22" y="28" width="52" height="28" rx="14" fill="#000" opacity="0.2" />

        {/* Eyes */}
        <g className="cosmic-buddy-blink">
          {eyeOpen ? (
            <>
              <circle cx="36" cy="42" r="3.5" fill="#0ea5e9" />
              <circle cx="60" cy="42" r="3.5" fill="#0ea5e9" />
            </>
          ) : (
            <>
              <rect x="33" y="41" width="6" height="3" rx="1.5" fill="#60a5fa" />
              <rect x="57" y="41" width="6" height="3" rx="1.5" fill="#60a5fa" />
            </>
          )}
        </g>

        {/* Mouth */}
        <path d={mouthPath} stroke={mood === 'sad' ? '#818cf8' : '#22d3ee'} strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Antenna */}
        <line x1="48" y1="12" x2="48" y2="6" stroke="#38bdf8" strokeOpacity="0.6" strokeWidth="2" />
        <circle cx="48" cy="4" r="3" fill="#38bdf8" opacity="0.8" />
      </svg>
    </div>
  );
};

export default CosmicBuddy;
