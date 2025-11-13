import React from 'react';

interface PanelStarsProps {
  count?: number;
  className?: string;
}

// Cosmic objects: stars, mini galaxies, comets, black holes, quasars
type CosmicType = 'star' | 'galaxy' | 'comet' | 'blackhole' | 'quasar';

interface CosmicObject {
  id: number;
  type: CosmicType;
  left: number;
  top: number;
  delay: number;
  opacity: number;
  size: number;
  rotation?: number;
}

// Randomly scattered cosmic decorations for panels (deneme2)
const PanelStars: React.FC<PanelStarsProps> = ({ count = 42, className = '' }) => {
  const objects = React.useMemo<CosmicObject[]>(() => {
    const items: CosmicObject[] = [];
    for (let i = 0; i < count; i++) {
      // Mostly stars, ~15% special objects
      const roll = Math.random();
      let type: CosmicType = 'star';
      if (roll < 0.04) type = 'galaxy';
      else if (roll < 0.08) type = 'comet';
      else if (roll < 0.11) type = 'blackhole';
      else if (roll < 0.14) type = 'quasar';

      items.push({
        id: i,
        type,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        opacity: type === 'star' ? 0.25 + Math.random() * 0.35 : 0.2 + Math.random() * 0.25,
        size: type === 'star' ? 1.5 + Math.random() * 1.5 : 6 + Math.random() * 8,
        rotation: Math.random() * 360,
      });
    }
    return items;
  }, [count]);

  const renderObject = (obj: CosmicObject) => {
    const baseStyle: React.CSSProperties = {
      left: `${obj.left}%`,
      top: `${obj.top}%`,
      opacity: obj.opacity,
      animationDelay: `${obj.delay}s`,
    };

    switch (obj.type) {
      case 'galaxy': {
        // Tiny swirl gradient
        return (
          <div
            key={obj.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              ...baseStyle,
              width: `${obj.size}px`,
              height: `${obj.size}px`,
              background: `radial-gradient(circle, rgba(147,197,253,0.6), rgba(139,92,246,0.3), transparent)`,
              transform: `rotate(${obj.rotation}deg)`,
              filter: 'blur(1px)',
            }}
          />
        );
      }
      case 'comet': {
        // Small glowing dot with tail
        return (
          <div
            key={obj.id}
            className="absolute animate-twinkle"
            style={{
              ...baseStyle,
              width: `${obj.size}px`,
              height: `${obj.size * 0.4}px`,
              background: `linear-gradient(90deg, rgba(252,211,77,0.7), transparent)`,
              borderRadius: '50%',
              transform: `rotate(${obj.rotation}deg)`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      }
      case 'blackhole': {
        // Dark center with faint ring
        return (
          <div
            key={obj.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              ...baseStyle,
              width: `${obj.size}px`,
              height: `${obj.size}px`,
              background: `radial-gradient(circle, rgba(0,0,0,0.8) 30%, rgba(124,58,237,0.4) 50%, transparent)`,
              boxShadow: '0 0 8px rgba(124,58,237,0.6)',
              filter: 'blur(0.5px)',
            }}
          />
        );
      }
      case 'quasar': {
        // Bright pulsing core
        return (
          <div
            key={obj.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              ...baseStyle,
              width: `${obj.size}px`,
              height: `${obj.size}px`,
              background: `radial-gradient(circle, rgba(253,224,71,0.9), rgba(251,146,60,0.5), transparent)`,
              boxShadow: '0 0 10px rgba(251,146,60,0.8)',
              filter: 'blur(1px)',
            }}
          />
        );
      }
      case 'star':
      default: {
        // Classic tiny twinkling star
        return (
          <div
            key={obj.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              ...baseStyle,
              width: `${obj.size}px`,
              height: `${obj.size}px`,
              boxShadow: '0 0 6px rgba(255,255,255,0.4)',
            }}
          />
        );
      }
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden>
      {objects.map(renderObject)}
    </div>
  );
};

export default PanelStars;
