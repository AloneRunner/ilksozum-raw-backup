import React, { useMemo } from 'react';

interface WanderingMeteorsProps {
  count?: number; // toplam meteor sayısı (eşzamanlı)
}

// Arada bir beliren, yavaşça kaybolan küçük göktaşları
const WanderingMeteors: React.FC<WanderingMeteorsProps> = ({ count = 6 }) => {
  const meteors = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 6 + Math.round(Math.random() * 6),
    delay: Math.random() * 8, // 0..8s
    duration: 5 + Math.random() * 6, // 5..11s
  })), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WanderingMeteors;
