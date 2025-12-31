import React from 'react';

interface CatAvatarIconProps {
  className?: string;
  mood?: 'idle' | 'happy' | 'sad' | 'think';
}

const CatAvatarIcon: React.FC<CatAvatarIconProps> = ({ className, mood = 'idle' }) => {
  // Eye and mouth expressions
  const eyeShape = mood === 'happy' ? 'squint' : mood === 'sad' ? 'closed' : 'normal';
  const mouthPath = 
    mood === 'happy' ? 'M48 53 Q45 58 42 56 M48 53 Q51 58 54 56' : // big smile
    mood === 'sad' ? 'M48 53 Q45 55 42 53 M48 53 Q51 55 54 53' : // small frown
    'M48 53 Q45 56 42 54 M48 53 Q51 56 54 54'; // normal
  
  const pulseClass = mood === 'happy' ? 'animate-bounce' : '';
  
  return (
    <svg viewBox="0 0 96 96" className={`${className} ${pulseClass}`} role="img" aria-label="Cat Avatar">
      <defs>
        <linearGradient id="catFur" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      
      {/* Left ear */}
      <path d="M28 20 L20 8 L30 24 Z" fill="url(#catFur)" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" />
      <path d="M28 20 L22 12 L28 22 Z" fill="#fed7aa" />
      
      {/* Right ear */}
      <path d="M68 20 L76 8 L66 24 Z" fill="url(#catFur)" stroke="#c2410c" strokeWidth="2" strokeLinejoin="round" />
      <path d="M68 20 L74 12 L68 22 Z" fill="#fed7aa" />
      
      {/* Head */}
      <circle cx="48" cy="45" r="28" fill="url(#catFur)" stroke="#c2410c" strokeWidth="2" />
      
      {/* White chest patch */}
      <ellipse cx="48" cy="58" rx="16" ry="12" fill="#fff" opacity="0.9" />
      
      {/* Eyes based on mood */}
      {eyeShape === 'squint' ? (
        <>
          <path d="M33 38 Q38 42 43 38" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M53 38 Q58 42 63 38" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      ) : eyeShape === 'closed' ? (
        <>
          <line x1="33" y1="40" x2="43" y2="40" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
          <line x1="53" y1="40" x2="63" y2="40" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="38" cy="40" rx="5" ry="8" fill="#15803d" />
          <ellipse cx="58" cy="40" rx="5" ry="8" fill="#15803d" />
          <ellipse cx="39" cy="38" rx="2" ry="3" fill="#000" />
          <ellipse cx="59" cy="38" rx="2" ry="3" fill="#000" />
          <circle cx="40" cy="37" r="1.5" fill="#fff" />
          <circle cx="60" cy="37" r="1.5" fill="#fff" />
        </>
      )}
      
      {/* Nose */}
      <path d="M48 48 L45 52 L48 53 L51 52 Z" fill={mood === 'happy' ? '#ec4899' : mood === 'sad' ? '#be185d' : '#ec4899'} />
      
      {/* Mouth */}
      <path d={mouthPath} stroke="#c2410c" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Whiskers */}
      <line x1="20" y1="44" x2="32" y2="42" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="48" x2="32" y2="48" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="52" x2="32" y2="54" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      
      <line x1="76" y1="44" x2="64" y2="42" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="48" x2="64" y2="48" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="52" x2="64" y2="54" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Stripes */}
      <path d="M34 28 Q36 26 38 28" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M58 28 Q60 26 62 28" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
};

export default CatAvatarIcon;
