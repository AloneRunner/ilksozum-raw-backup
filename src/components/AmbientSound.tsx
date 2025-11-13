import React, { useEffect, useRef } from 'react';

interface AmbientSoundProps {
  theme: string;
  volume?: number;
}

const AmbientSound: React.FC<AmbientSoundProps> = ({ theme, volume = 0.1 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Underwater tema için ambient ses
    if (theme === 'deneme') {
      // Okyanus derinlikleri ambient sesi
      // Şimdilik basit bir çözüm olarak, sessiz ambient ses dosyası kullanacağız
      // Gerçek uygulamada buraya okyanus sesi dosyası eklenebilir
      audio.volume = volume;
      audio.loop = true;

      // Eğer ambient ses dosyası varsa çal
      if (audio.src) {
        audio.play().catch(() => {
          // Otomatik oynatma engellendi, kullanıcı etkileşimi bekle
        });
      }
    } else {
      // Diğer temalarda sesi durdur
      audio.pause();
      audio.currentTime = 0;
    }
  }, [theme, volume]);

  // Şimdilik ambient ses dosyası yok, sadece yapı kuruluyor
  // Kullanıcı ambient ses dosyası ekleyince buraya eklenecek
  return (
    <audio
      ref={audioRef}
      preload="none"
      // src="/audio/underwater-ambient.mp3" // Gelecekte eklenecek
    />
  );
};

export default AmbientSound;