import React from 'react';

interface RobotAvatarIconProps {
  className?: string;
  mood?: 'idle' | 'happy' | 'sad' | 'think';
}

const RobotAvatarIcon: React.FC<RobotAvatarIconProps> = ({ className, mood = 'idle' }) => {
  // Eye and mouth expressions based on mood
  const eyesOpen = mood !== 'sad';
  const mouthPath = 
    mood === 'happy' ? 'M40 68 Q48 75 56 68' : // smile
    mood === 'sad' ? 'M40 72 Q48 66 56 72' : // frown
    mood === 'think' ? 'M42 70 H54' : // neutral line
    'M42 70 H54'; // idle neutral
  
  const eyeGlow = mood === 'happy' ? '#10b981' : mood === 'sad' ? '#ef4444' : '#22d3ee';
  const pulseClass = mood === 'happy' ? 'animate-pulse' : '';
  
  return (
    <svg viewBox="0 0 96 96" className={`${className} ${pulseClass}`} role="img" aria-label="Robot Avatar">
      <defs>
        <linearGradient id="robotBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="robotHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      
      {/* Antenna */}
      <line x1="48" y1="12" x2="48" y2="8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="6" r="4" fill={mood === 'happy' ? '#10b981' : mood === 'sad' ? '#ef4444' : '#ef4444'} className={mood === 'think' ? 'animate-pulse' : ''} />
      
      {/* Head */}
      <rect x="26" y="12" width="44" height="36" rx="8" fill="url(#robotHead)" stroke="#1e40af" strokeWidth="2" />
      
      {/* Visor/Face area */}
      <rect x="32" y="20" width="32" height="24" rx="7" fill="#1e293b" opacity="0.8" />
      
      {/* Eyes */}
      {eyesOpen ? (
        <>
          <circle cx="40" cy="30" r="4" fill={eyeGlow} className={mood === 'think' ? 'animate-pulse' : ''} />
          <circle cx="56" cy="30" r="4" fill={eyeGlow} className={mood === 'think' ? 'animate-pulse' : ''} />
          <circle cx="41" cy="29" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="57" cy="29" r="1.5" fill="#fff" opacity="0.8" />
        </>
      ) : (
        <>
          <rect x="36" y="29" width="8" height="3" rx="1.5" fill="#60a5fa" />
          <rect x="52" y="29" width="8" height="3" rx="1.5" fill="#60a5fa" />
        </>
      )}
      
      {/* Mouth */}
      <path 
        d={mouthPath} 
        stroke={mood === 'sad' ? '#ef4444' : mood === 'happy' ? '#10b981' : '#22d3ee'} 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none" 
      />
      
      {/* Body */}
      <rect x="30" y="50" width="36" height="32" rx="6" fill="url(#robotBody)" stroke="#1e40af" strokeWidth="2" />
      
      {/* Chest panel */}
      <rect x="38" y="56" width="20" height="20" rx="4" fill="#1e293b" opacity="0.4" />
      <circle cx="48" cy="66" r="4" fill={mood === 'happy' ? '#10b981' : '#22d3ee'} opacity="0.8" className={mood === 'happy' ? 'animate-pulse' : ''} />
      
      {/* Arms */}
      <rect x="16" y="52" width="10" height="24" rx="5" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
      <rect x="70" y="52" width="10" height="24" rx="5" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
      
      {/* Legs */}
      <rect x="36" y="82" width="10" height="10" rx="3" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
      <rect x="50" y="82" width="10" height="10" rx="3" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
    </svg>
  );
};

export default RobotAvatarIcon;
