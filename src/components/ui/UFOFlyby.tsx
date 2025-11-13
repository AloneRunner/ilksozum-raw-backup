import React from 'react';

interface UFOFlybyProps {
  count?: number; // aynı anda kaç uçuş olsun
}

// Ekranın kenarından ara sıra geçen küçük UFO/uzay gemisi
const UFOFlyby: React.FC<UFOFlybyProps> = ({ count = 1 }) => {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 -z-9 overflow-hidden">
      {items.map((i) => {
        const delay = (i * 7 + Math.random() * 6) % 14; // 0..14s
        const fromLeft = Math.random() > 0.5;
        const top = 10 + Math.random() * 70; // %10..%80
        return (
          <div
            key={i}
            className={`ufo ${fromLeft ? 'ufo--ltr' : 'ufo--rtl'}`}
            style={{ top: `${top}%`, animationDelay: `${delay}s` }}
          >
            <span className="ufo-dome" />
          </div>
        );
      })}
    </div>
  );
};

export default UFOFlyby;
