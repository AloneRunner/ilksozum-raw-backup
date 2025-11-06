
import React, { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string; // expected to be an absolute /videos/*.mp4 path
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const [nextSrc, setNextSrc] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!currentSrc) {
      // Initial load
      setCurrentSrc(src);
    } else if (currentSrc !== src) {
      // A change in video is requested
      setNextSrc(src);
    }
  }, [src, currentSrc]);

  const handleNextVideoReady = () => {
    // Start the fade transition
    setIsFading(true);
    // After the transition, clean up the state
    setTimeout(() => {
      setCurrentSrc(nextSrc);
      setNextSrc(null);
      setIsFading(false);
    }, 500); // This duration must match the CSS transition duration
  };

  // Derive a simple portrait fallback (remove 'yan' before .mp4) if a landscape variant fails.
  const deriveFallback = (failed: string): string | null => {
    if (!failed.endsWith('.mp4')) return null;
    // heuristic: replace 'yan.mp4' with '.mp4'
    const fallback = failed.replace(/yan\.mp4$/i, '.mp4');
    return fallback !== failed ? fallback : null;
  };

  const handleVideoError = (which: 'current' | 'next') => () => {
    const failedSrc = which === 'current' ? currentSrc : nextSrc;
    if (!failedSrc) return;
    const fb = deriveFallback(failedSrc);
    if (fb) {
      // Try loading fallback immediately
      if (which === 'current') {
        setCurrentSrc(fb);
      } else {
        setNextSrc(fb);
      }
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black">
      {currentSrc && (
        <video
          key={currentSrc}
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError('current')}
          className={`w-full h-full object-cover transition-opacity duration-500 ${!nextSrc ? 'animate-fade-in' : ''} ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
      )}
      {nextSrc && (
        <video
          key={nextSrc}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleNextVideoReady}
          onError={handleVideoError('next')}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={nextSrc} type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-sky-950/22 via-sky-900/15 to-emerald-900/30 mix-blend-multiply"
      />
    </div>
  );
};

export default React.memo(VideoBackground);
