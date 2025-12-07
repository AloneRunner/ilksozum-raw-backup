import React from 'react';

export type PlanetType = 'striped' | 'cratered' | 'ringed';

interface GalacticPlanetProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  onClick: () => void;
  color1: string;
  color2: string;
  color3?: string;
  ringColor?: string;
  type?: PlanetType;
  size?: 'md' | 'lg' | 'xl';
  disabled?: boolean;
}

const GalacticPlanet: React.FC<GalacticPlanetProps> = ({
  icon: Icon,
  title,
  onClick,
  color1,
  color2,
  color3 = color2,
  ringColor = 'rgba(255,255,255,0.5)',
  type = 'striped',
  size = 'md',
  disabled = false,
}) => {
  const sizeClasses = {
    md: 'w-28 h-28 sm:w-32 sm:h-32',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
    xl: 'w-36 h-36 sm:w-40 sm:h-40',
  };

  const iconSizes = {
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-11 h-11 sm:w-13 sm:h-13',
    xl: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const style = {
    '--planet-color-1': color1,
    '--planet-color-2': color2,
    '--planet-color-3': color3,
    '--ring-color': ringColor,
    '--ring-glow': ringColor,
  } as React.CSSProperties;

  return (
    <div className="flex flex-col items-center group z-10">
      <div className="galactic-planet-container relative flex items-center justify-center p-4">
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={`galactic-planet galactic-planet--${type} ${sizeClasses[size]} flex items-center justify-center focus:outline-none ${disabled ? 'opacity-50 grayscale' : ''}`}
          style={style}
        >
          {/* Ring (only for ringed type) */}
          {type === 'ringed' && <div className="galactic-ring" />}

          {/* Icon */}
          <div className="relative z-10 drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <Icon className={`${iconSizes[size]} text-white`} />
          </div>
          
          {/* Shine effect */}
          <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-gradient-to-br from-white/60 to-transparent rounded-full blur-[2px] pointer-events-none" />
        </button>
      </div>
      
      {/* Title Label */}
      <span className={`mt-1 text-sm sm:text-base font-bold text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:text-sky-200 group-hover:scale-105 max-w-[140px] leading-tight`}>
        {title}
      </span>
    </div>
  );
};

export default GalacticPlanet;
