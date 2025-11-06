import React from 'react';

interface ShootingStarsProps {
  count?: number;
}

// Simple decorative component that renders a handful of diagonally animating streaks
const ShootingStars: React.FC<ShootingStarsProps> = ({ count = 8 }) => {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {items.map((i) => {
        const top = (i * 11 + 7) % 95; // pseudo-random
        const delay = (i * 0.9) % 8;    // 0..8s
        const left = (i * 17 + 13) % 90; // pseudo-random
        return (
          <span
            key={i}
            className="shooting-star"
            style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
};

export default ShootingStars;
