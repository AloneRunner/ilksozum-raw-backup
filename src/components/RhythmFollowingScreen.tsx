import React, { useEffect, useMemo, useState } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t } from '../i18n/index.ts';
import { playEffect } from '../services/speechService.ts';

interface RhythmFollowingScreenProps {
  currentCard: number;
  totalCards: number;
  isAutoSpeakEnabled: boolean;
  onAdvance: (isCorrect: boolean) => Promise<void>;
  onBack: () => void;
}

type Beat = 0 | 1 | 2;
const COLORS = ['#f59e0b', '#3b82f6', '#10b981'];
const DEMO_SPEED = 800; // Daha yavaş ve odaklanılabilir tempo

// Basit beep sesleri için Web Audio API
const playTone = (frequency: number, duration: number = 150) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  } catch (e) {
    // Ses çalamazsa sessizce devam et
  }
};

// Her renk için farklı nota (Do-Mi-Sol)
const TONES = [523.25, 659.25, 783.99]; // C5, E5, G5

const makePattern = (seed: number): Beat[] => {
  // Başlangıçta basit, sonra karmaşıklaşan patternler (4 elementi geçmemeli - odak için)
  const patterns: Beat[][] = [
    [0, 1],           // Çok basit 2'li
    [0, 1, 2],        // 3'lü
    [0, 1, 0, 2],     // 4'lü tekrar içeren
    [1, 2, 1, 0],     // Farklı başlangıç
  ];
  const idx = seed % patterns.length;
  return patterns[idx];
};

const RhythmFollowingScreen: React.FC<RhythmFollowingScreenProps> = ({ currentCard, totalCards, onAdvance, onBack }) => {
  const pattern = useMemo(() => makePattern(currentCard), [currentCard]);
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [demoIdx, setDemoIdx] = useState(-1); // -1: none, 0..n: highlight
  const [fail, setFail] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [clickedIdx, setClickedIdx] = useState(-1); // Kullanıcı tıklama animasyonu için

  // Demo: highlight pattern in order - YAVAS ve TEKRARLI (odak için)
  useEffect(() => {
    setPlaying(true);
    setIndex(0);
    setFail(false);
    setDemoIdx(-1);
    setAttempts(0);
    
    // İlk gösterim
    const showPattern = () => {
      let i = 0;
      const id = window.setInterval(() => {
        setDemoIdx(pattern[i]);
        playTone(TONES[pattern[i]]); // SES ÇAL!
        i++;
        if (i >= pattern.length) {
          setTimeout(() => setDemoIdx(-1), 400);
          window.clearInterval(id);
          // 1 saniye bekle, sonra tekrar göster (2. kez - hafıza pekiştirmesi)
          setTimeout(() => {
            let j = 0;
            const repeatId = window.setInterval(() => {
              setDemoIdx(pattern[j]);
              playTone(TONES[pattern[j]]); // SES ÇAL!
              j++;
              if (j >= pattern.length) {
                setTimeout(() => setDemoIdx(-1), 400);
                window.clearInterval(repeatId);
                setTimeout(() => setPlaying(false), 500);
              }
            }, DEMO_SPEED);
          }, 1000);
        }
      }, DEMO_SPEED);
      return id;
    };
    
    const intervalId = showPattern();
    return () => window.clearInterval(intervalId);
  }, [pattern]);

  const handleCircle = (idx: number) => {
    if (playing || fail) return;
    
    // Tıklama animasyonu başlat
    setClickedIdx(idx);
    setTimeout(() => setClickedIdx(-1), 300);
    
    // SES ÇAL!
    playTone(TONES[idx]);
    
    // Her dokunuşta görsel feedback (odak pekiştirmesi)
    if (pattern[index] === idx) {
      if (index+1 === pattern.length) {
        // Başarı - hafif gecikme ile kutlama
        void playEffect('correct');
        setTimeout(() => { void onAdvance(attempts === 0); }, 400);
      } else {
        setIndex(index+1);
      }
    } else {
      setFail(true);
      setAttempts(a => a + 1);
      void playEffect('softincorrect'); // Yumuşak hata sesi
      // Yanlış - kısa feedback, sonra sıfırla (sabır ve tekrar için)
      setTimeout(() => { 
        setIndex(0); 
        setFail(false); 
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600">
      <div className="flex items-center justify-between p-3">
        <button onClick={onBack} aria-label={t('app.back', 'Back')} className="p-2 rounded-full hover:bg-white/20">
          <ArrowLeftIcon className="w-8 h-8 text-white drop-shadow-lg" />
        </button>
        <div className="text-white font-bold text-lg drop-shadow-lg">{currentCard}/{totalCards}</div>
      </div>
      
      {/* Talimat - net ve kısa */}
      <div className="px-4 pb-3 text-center text-white/90 text-sm font-medium drop-shadow-md">
        {t('rhythmFollowing.instruction', 'Önce ritmi izle, sonra ekrana aynı şekilde dokun/uzun bas.')}
      </div>
      
      {/* Ana daireler - büyük ve net */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-6 sm:gap-10">
          {[0,1,2].map(i => {
            const isActive = demoIdx === i;
            const isClicked = clickedIdx === i; // Kullanıcı tıkladı mı?
            const shouldShow = pattern.includes(i as Beat);
            return (
              <button
                key={i}
                onClick={() => handleCircle(i)}
                disabled={playing || fail || !shouldShow}
                className={`rounded-full shadow-2xl border-4 transition-all duration-300
                  ${isActive || isClicked ? 'scale-125 border-white shadow-white/50' : 'border-transparent'}
                  ${fail ? 'bg-red-400' : ''}`}
                style={{ 
                  backgroundColor: fail ? '#f87171' : COLORS[i],
                  opacity: shouldShow ? (playing ? 0.7 : 1) : 0.2,
                  width: '7rem',
                  height: '7rem',
                  filter: (isActive || isClicked) ? 'brightness(1.3)' : 'none'
                }}
                aria-label={`Renk ${i+1}`}
              />
            );
          })}
        </div>
      </div>
      
      {/* Durum mesajı - cesaretlendirici */}
      <div className="pb-8 text-center">
        <p className="text-white text-lg font-bold mb-1 drop-shadow-lg">
          {fail 
            ? t('rhythmFollowing.fail', 'Tekrar dene!') + ' 💪' 
            : playing 
            ? t('rhythmFollowing.watch', 'Önce ritmi izle…') + ' 👀' 
            : t('rhythmFollowing.go', 'Sıra sende!') + ' 🎯'}
        </p>
        {!playing && !fail && (
          <p className="text-white/70 text-sm drop-shadow-md">{index + 1} / {pattern.length}</p>
        )}
      </div>
    </div>
  );
};

export default RhythmFollowingScreen;
