
import React, { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
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

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black">
      {currentSrc && (
        <video
          key={currentSrc}
          autoPlay
          loop
          muted
          playsInline
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
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={nextSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default React.memo(VideoBackground);
