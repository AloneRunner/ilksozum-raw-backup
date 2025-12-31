import React from 'react';

interface DogAvatarIconProps {
  className?: string;
  mood?: 'idle' | 'happy' | 'sad' | 'think';
}

const DogAvatarIcon: React.FC<DogAvatarIconProps> = ({ className, mood = 'idle' }) => {
  // Eye and mouth expressions
  const eyeExpression = mood === 'happy' ? 'happy' : mood === 'sad' ? 'sad' : 'normal';
  const mouthPath = 
    mood === 'happy' ? 'M48 56 Q42 62 36 58 M48 56 Q54 62 60 58' : // big happy pant
    mood === 'sad' ? 'M48 56 Q45 58 42 56 M48 56 Q51 58 54 56' : // small sad
    'M48 56 Q45 60 42 58 M48 56 Q51 60 54 58'; // normal
  
  const tongueOut = mood === 'happy';
  const pulseClass = mood === 'happy' ? 'animate-bounce' : '';
  
  return (
    <svg viewBox="0 0 96 96" className={`${className} ${pulseClass}`} role="img" aria-label="Dog Avatar">
      <defs>
        <linearGradient id="dogFur" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      
      {/* Left ear */}
      <ellipse cx="28" cy="30" rx="12" ry="20" fill="url(#dogFur)" stroke="#78350f" strokeWidth="2" transform="rotate(-20 28 30)" />
      <ellipse cx="28" cy="30" rx="6" ry="14" fill="#fbbf24" transform="rotate(-20 28 30)" />
      
      {/* Right ear */}
      <ellipse cx="68" cy="30" rx="12" ry="20" fill="url(#dogFur)" stroke="#78350f" strokeWidth="2" transform="rotate(20 68 30)" />
      <ellipse cx="68" cy="30" rx="6" ry="14" fill="#fbbf24" transform="rotate(20 68 30)" />
      
      {/* Head */}
      <circle cx="48" cy="48" r="28" fill="url(#dogFur)" stroke="#78350f" strokeWidth="2" />
      
      {/* Snout */}
      <ellipse cx="48" cy="54" rx="18" ry="14" fill="#fbbf24" stroke="#78350f" strokeWidth="2" />
      
      {/* Nose */}
      <ellipse cx="48" cy="56" rx="6" ry="5" fill="#000" />
      
      {/* Mouth */}
      <path d={mouthPath} stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Tongue when happy */}
      {tongueOut && (
        <ellipse cx="48" cy="66" rx="5" ry="4" fill="#ec4899" opacity="0.9" />
      )}
      
      {/* Eyes based on mood */}
      {eyeExpression === 'happy' ? (
        <>
          <path d="M32 40 Q38 38 44 40" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M52 40 Q58 38 64 40" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      ) : eyeExpression === 'sad' ? (
        <>
          <circle cx="38" cy="42" r="6" fill="#fff" stroke="#78350f" strokeWidth="2" opacity="0.6" />
          <circle cx="58" cy="42" r="6" fill="#fff" stroke="#78350f" strokeWidth="2" opacity="0.6" />
          <circle cx="38" cy="44" r="3" fill="#000" opacity="0.6" />
          <circle cx="58" cy="44" r="3" fill="#000" opacity="0.6" />
          <path d="M32 36 Q36 38 40 36" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M56 36 Q60 38 64 36" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <circle cx="38" cy="42" r="6" fill="#fff" stroke="#78350f" strokeWidth="2" />
          <circle cx="58" cy="42" r="6" fill="#fff" stroke="#78350f" strokeWidth="2" />
          <circle cx="40" cy="42" r="4" fill="#000" />
          <circle cx="60" cy="42" r="4" fill="#000" />
          <circle cx="42" cy="40" r="2" fill="#fff" />
          <circle cx="62" cy="40" r="2" fill="#fff" />
          <path d="M32 36 Q36 34 40 36" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M56 36 Q60 34 64 36" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      )}
      
      {/* Spots */}
      <ellipse cx="62" cy="52" rx="5" ry="4" fill="#78350f" opacity="0.5" />
      <ellipse cx="34" cy="50" rx="4" ry="3" fill="#78350f" opacity="0.5" />
    </svg>
  );
};

export default DogAvatarIcon;
