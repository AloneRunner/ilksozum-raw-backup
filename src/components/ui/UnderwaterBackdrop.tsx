import React, { useMemo } from 'react';

interface UnderwaterBackdropProps {
  count?: number;
  bubbleColorClass?: string; // tailwind color for bubbles
  lightRays?: boolean;
  className?: string;
}

const generateBubbles = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    bottom: Math.random() * 100,
    size: 8 + Math.random() * 16,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 6,
  }));
};

const UnderwaterBackdrop: React.FC<UnderwaterBackdropProps> = ({
  count = 14,
  bubbleColorClass = 'bg-cyan-400/15 border-cyan-300/20',
  lightRays = true,
  className = '',
}) => {
  const bubbles = useMemo(() => generateBubbles(count), [count]);

  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`} aria-hidden>
      {/* gentle ocean gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001122] via-[#001a2e] to-[#000814]" />

      {/* bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${bubbleColorClass} animate-bubble`}
            style={{
              left: `${b.left}%`,
              bottom: `${b.bottom}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      {/* soft light rays */}
      {lightRays && (
        <div className="absolute inset-0 opacity-14">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-cyan-300/40 via-transparent to-transparent transform rotate-6" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-300/40 via-transparent to-transparent transform -rotate-6" />
        </div>
      )}
    </div>
  );
};

export default UnderwaterBackdrop;
