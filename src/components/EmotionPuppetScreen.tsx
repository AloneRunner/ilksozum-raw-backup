import React, { useState, useCallback } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { playEffect, speak } from '../services/speechService.ts';
import { t } from '../i18n/index.ts';
import { getSpeechLocale } from '../utils/translate.ts';
import { getCurrentLanguage } from '../i18n/index.ts';

interface FacePart {
  id: string;
  type: 'eyes' | 'mouth' | 'eyebrows';
  emoji: string;
  name: string;
}

interface EmotionPuppetRound {
  id: number;
  targetEmotion: string; // "happy", "sad", "angry", etc.
  targetEmotionLabel: string; // "Mutlu", "Üzgün", etc.
  correctParts: {
    eyes: string;
    mouth: string;
    eyebrows: string;
  };
}

interface EmotionPuppetScreenProps {
  roundData: EmotionPuppetRound;
  onAdvance: (isCorrect: boolean) => void;
  onBack: () => void;
  currentCard: number;
  totalCards: number;
  isAutoSpeakEnabled: boolean;
}

const EmotionPuppetScreen: React.FC<EmotionPuppetScreenProps> = ({
  roundData,
  onAdvance,
  onBack,
  currentCard,
  totalCards,
  isAutoSpeakEnabled,
}) => {
  const [selectedEyes, setSelectedEyes] = useState<string | null>(null);
  const [selectedMouth, setSelectedMouth] = useState<string | null>(null);
  const [selectedEyebrows, setSelectedEyebrows] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const lang = getCurrentLanguage();
  const speechLocale = getSpeechLocale(lang as any);
  const localizedEmotionNames = React.useMemo(() => ({
    happy: t('emotionPuppet.emotions.happy', 'Mutlu'),
    sad: t('emotionPuppet.emotions.sad', 'Üzgün'),
    angry: t('emotionPuppet.emotions.angry', 'Kızgın'),
    surprised: t('emotionPuppet.emotions.surprised', 'Şaşkın'),
  }), [lang]);
  const localizedTargetEmotion = localizedEmotionNames[roundData.targetEmotion as keyof typeof localizedEmotionNames] ?? roundData.targetEmotionLabel;

  // Yüz parçaları seçenekleri
  const eyesOptions: FacePart[] = [
    { id: 'happy-eyes', type: 'eyes', emoji: '�', name: t('emotionPuppet.parts.eyes.happy', 'Neşeli Gözler') },
    { id: 'sad-eyes', type: 'eyes', emoji: '🥺', name: t('emotionPuppet.parts.eyes.sad', 'Üzgün Gözler') },
    { id: 'angry-eyes', type: 'eyes', emoji: '😠', name: t('emotionPuppet.parts.eyes.angry', 'Kızgın Gözler') },
    { id: 'surprised-eyes', type: 'eyes', emoji: '😲', name: t('emotionPuppet.parts.eyes.surprised', 'Şaşkın Gözler') },
  ];

  const mouthOptions: FacePart[] = [
    { id: 'happy-mouth', type: 'mouth', emoji: '︶', name: t('emotionPuppet.parts.mouth.happy', 'Gülen Ağız') },
    { id: 'sad-mouth', type: 'mouth', emoji: '︵', name: t('emotionPuppet.parts.mouth.sad', 'Üzgün Ağız') },
    { id: 'angry-mouth', type: 'mouth', emoji: '︿', name: t('emotionPuppet.parts.mouth.angry', 'Kızgın Ağız') },
    { id: 'surprised-mouth', type: 'mouth', emoji: '○', name: t('emotionPuppet.parts.mouth.surprised', 'Şaşkın Ağız') },
  ];

  const eyebrowsOptions: FacePart[] = [
    { id: 'happy-brows', type: 'eyebrows', emoji: '︶', name: t('emotionPuppet.parts.eyebrows.happy', 'Neşeli Kaşlar') },
    { id: 'sad-brows', type: 'eyebrows', emoji: '︵', name: t('emotionPuppet.parts.eyebrows.sad', 'Üzgün Kaşlar') },
    { id: 'angry-brows', type: 'eyebrows', emoji: '︿', name: t('emotionPuppet.parts.eyebrows.angry', 'Kızgın Kaşlar') },
    { id: 'surprised-brows', type: 'eyebrows', emoji: '⌃', name: t('emotionPuppet.parts.eyebrows.surprised', 'Şaşkın Kaşlar') },
  ];

  // Otomatik konuşma
  React.useEffect(() => {
    if (isAutoSpeakEnabled) {
      const instruction = t('emotionPuppet.instruction', '{emotion} bir yüz yap!').replace('{emotion}', localizedTargetEmotion);
      speak(instruction, speechLocale);
    }
  }, [roundData.id, isAutoSpeakEnabled, localizedTargetEmotion, speechLocale]);

  const handleCheck = useCallback(async () => {
    if (!selectedEyes || !selectedMouth || !selectedEyebrows) {
      // Tüm parçalar seçilmemiş
      await playEffect('incorrect');
      return;
    }

    const correct = 
      selectedEyes === roundData.correctParts.eyes &&
      selectedMouth === roundData.correctParts.mouth &&
      selectedEyebrows === roundData.correctParts.eyebrows;

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      await playEffect('correct');
      await speak(t('emotionPuppet.feedback.correct', 'Harika! {emotion} yüzü yaptın!').replace('{emotion}', localizedTargetEmotion), speechLocale);
      setTimeout(() => {
        setShowFeedback(false);
        onAdvance(true);
      }, 2000);
    } else {
      await playEffect('incorrect');
      await speak(t('emotionPuppet.feedback.incorrect', 'Tekrar dene!'), speechLocale);
      setTimeout(() => {
        setShowFeedback(false);
      }, 1500);
    }
  }, [selectedEyes, selectedMouth, selectedEyebrows, roundData, onAdvance, speechLocale, localizedTargetEmotion]);

  const renderFacePreview = () => {
    return (
      <div className="relative w-64 h-64 bg-yellow-100 rounded-full border-4 border-yellow-300 shadow-xl flex flex-col items-center justify-center">
        {/* Kaşlar */}
        <div className="absolute top-12 flex gap-12">
          {/* Sol Kaş */}
          <div className="relative w-14 h-6">
            {selectedEyebrows === 'happy-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full bottom-0" style={{transform: 'translateY(2px)'}} />
            )}
            {selectedEyebrows === 'sad-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full" style={{transform: 'rotate(15deg) translateY(-2px)', transformOrigin: 'left'}} />
            )}
            {selectedEyebrows === 'angry-brows' && (
              <div className="absolute w-full h-1.5 bg-gray-900 rounded-sm" style={{transform: 'rotate(30deg)', transformOrigin: 'right center'}} />
            )}
            {selectedEyebrows === 'surprised-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full" style={{transform: 'translateY(-4px)'}} />
            )}
            {!selectedEyebrows && (
              <div className="absolute w-full h-0.5 bg-gray-400 bottom-0" />
            )}
          </div>
          {/* Sağ Kaş */}
          <div className="relative w-14 h-6">
            {selectedEyebrows === 'happy-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full bottom-0" style={{transform: 'translateY(2px)'}} />
            )}
            {selectedEyebrows === 'sad-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full" style={{transform: 'rotate(-15deg) translateY(-2px)', transformOrigin: 'right'}} />
            )}
            {selectedEyebrows === 'angry-brows' && (
              <div className="absolute w-full h-1.5 bg-gray-900 rounded-sm" style={{transform: 'rotate(-30deg)', transformOrigin: 'left center'}} />
            )}
            {selectedEyebrows === 'surprised-brows' && (
              <div className="absolute w-full h-1 bg-gray-800 rounded-full" style={{transform: 'translateY(-4px)'}} />
            )}
            {!selectedEyebrows && (
              <div className="absolute w-full h-0.5 bg-gray-400 bottom-0" />
            )}
          </div>
        </div>
        
        {/* Gözler */}
        <div className="absolute top-22 flex gap-8">
          {/* Left Eye */}
          <div className={`relative ${selectedEyes === 'surprised-eyes' ? 'w-16 h-16' : 'w-14 h-14'} bg-white rounded-full border-3 border-gray-900`}>
            {/* pupil */}
            <div
              className={`${selectedEyes === 'surprised-eyes' ? 'w-6 h-6' : selectedEyes === 'happy-eyes' ? 'w-4 h-6' : 'w-5 h-5'} bg-black rounded-full absolute`}
              style={{
                left: selectedEyes === 'angry-eyes' ? '65%' : '50%',
                top: selectedEyes === 'happy-eyes' ? '60%' : '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {/* eyelid/marker */}
            {selectedEyes === 'happy-eyes' && (
              <div className="absolute w-full h-1/2 bg-yellow-100 bottom-0 rounded-b-full" />
            )}
            {selectedEyes === 'sad-eyes' && (
              <>
                <div className="absolute -bottom-3 left-2 w-3 h-4 bg-blue-400 rounded-b-full opacity-80" />
                <div className="absolute -bottom-1 left-3 w-2 h-2 bg-blue-300 rounded-full opacity-60" />
              </>
            )}
            {selectedEyes === 'angry-eyes' && (
              <div className="absolute w-full h-1/3 bg-red-100 top-0 rounded-t-full" style={{clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)'}} />
            )}
          </div>
          {/* Right Eye */}
          <div className={`relative ${selectedEyes === 'surprised-eyes' ? 'w-16 h-16' : 'w-14 h-14'} bg-white rounded-full border-3 border-gray-900`}>
            <div
              className={`${selectedEyes === 'surprised-eyes' ? 'w-6 h-6' : selectedEyes === 'happy-eyes' ? 'w-4 h-6' : 'w-5 h-5'} bg-black rounded-full absolute`}
              style={{
                left: selectedEyes === 'angry-eyes' ? '35%' : '50%',
                top: selectedEyes === 'happy-eyes' ? '60%' : '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {selectedEyes === 'happy-eyes' && (
              <div className="absolute w-full h-1/2 bg-yellow-100 bottom-0 rounded-b-full" />
            )}
            {selectedEyes === 'sad-eyes' && (
              <>
                <div className="absolute -bottom-3 right-2 w-3 h-4 bg-blue-400 rounded-b-full opacity-80" />
                <div className="absolute -bottom-1 right-3 w-2 h-2 bg-blue-300 rounded-full opacity-60" />
              </>
            )}
            {selectedEyes === 'angry-eyes' && (
              <div className="absolute w-full h-1/3 bg-red-100 top-0 rounded-t-full" style={{clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'}} />
            )}
          </div>
        </div>
        
        {/* Burun */}
        <div className="absolute top-36">
          <span className="text-3xl">👃</span>
        </div>
        
        {/* Ağız */}
        <div className="absolute top-48">
          <div className="relative w-16 h-8">
            {selectedMouth === 'happy-mouth' && (
              <div className="w-14 h-6 border-b-4 border-gray-900 rounded-b-full mx-auto" />
            )}
            {selectedMouth === 'sad-mouth' && (
              <div className="w-14 h-6 border-t-4 border-gray-900 rounded-t-full mx-auto mt-2" />
            )}
            {selectedMouth === 'angry-mouth' && (
              <div className="w-12 h-1 bg-gray-900 mx-auto mt-3" />
            )}
            {selectedMouth === 'surprised-mouth' && (
              <div className="w-10 h-10 border-4 border-gray-900 rounded-full mx-auto -mt-1" />
            )}
            {!selectedMouth && (
              <div className="w-12 h-1 bg-gray-400 mx-auto mt-3" />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPartSelector = (title: string, options: FacePart[], selected: string | null, onSelect: (id: string) => void) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-sm font-bold text-gray-700 mb-2 text-center">{title}</h3>
        <div className="flex gap-2 justify-center flex-wrap">
          {options.map(part => (
            <button
              key={part.id}
              onClick={() => {
                onSelect(part.id);
              }}
              className={`
                w-16 h-16 rounded-lg flex items-center justify-center text-3xl
                transition-all duration-200 transform hover:scale-110
                ${selected === part.id 
                  ? 'bg-blue-500 ring-4 ring-blue-300 scale-110' 
                  : 'bg-gray-100 hover:bg-gray-200'
                }
              `}
              aria-label={part.name}
            >
              {/* Custom previews for consistency */}
              {part.type === 'eyebrows' && (
                <div className="relative w-12 h-6 flex items-center justify-center">
                  {part.id === 'happy-brows' && (
                    <div className="w-10 h-1 bg-gray-800 rounded-full" />
                  )}
                  {part.id === 'sad-brows' && (
                    <div className="flex gap-1">
                      <div className="w-5 h-0.5 bg-gray-800" style={{transform: 'rotate(15deg)'}} />
                      <div className="w-5 h-0.5 bg-gray-800" style={{transform: 'rotate(-15deg)'}} />
                    </div>
                  )}
                  {part.id === 'angry-brows' && (
                    <div className="flex gap-0">
                      <div className="w-5 h-1 bg-gray-900" style={{transform: 'rotate(30deg)', transformOrigin: 'right center'}} />
                      <div className="w-5 h-1 bg-gray-900" style={{transform: 'rotate(-30deg)', transformOrigin: 'left center'}} />
                    </div>
                  )}
                  {part.id === 'surprised-brows' && (
                    <div className="w-10 h-1 bg-gray-800 rounded-full -mt-1" />
                  )}
                </div>
              )}
              {part.type === 'mouth' && (
                <div className="relative w-12 h-10 flex items-center justify-center">
                  {part.id === 'happy-mouth' && (
                    <div className="w-10 h-4 border-b-4 border-gray-900 rounded-b-full" />
                  )}
                  {part.id === 'sad-mouth' && (
                    <div className="w-10 h-4 border-t-4 border-gray-900 rounded-t-full mt-2" />
                  )}
                  {part.id === 'angry-mouth' && (
                    <div className="w-8 h-1 bg-gray-900" />
                  )}
                  {part.id === 'surprised-mouth' && (
                    <div className="w-7 h-7 border-4 border-gray-900 rounded-full" />
                  )}
                </div>
              )}
              {part.type === 'eyes' && (
                <div className="flex items-center gap-1">
                  {[0,1].map(i => (
                    <div key={i} className={`relative ${part.id === 'surprised-eyes' ? 'w-7 h-7' : 'w-6 h-6'} bg-white rounded-full border-2 border-gray-900`}>
                      <div 
                        className={`${part.id === 'surprised-eyes' ? 'w-3 h-3' : part.id === 'happy-eyes' ? 'w-2 h-3' : 'w-2.5 h-2.5'} bg-black rounded-full absolute`} 
                        style={{
                          left: part.id === 'angry-eyes' ? (i===0 ? '65%' : '35%') : '50%',
                          top: part.id === 'happy-eyes' ? '60%' : '50%',
                          transform:'translate(-50%,-50%)'
                        }} 
                      />
                      {part.id === 'happy-eyes' && (
                        <div className="absolute w-full h-1/2 bg-yellow-100 bottom-0 rounded-b-full" />
                      )}
                      {part.id === 'sad-eyes' && (
                        <>
                          {i===0 ? <div className="absolute -bottom-1.5 left-1 w-1.5 h-2 bg-blue-400 rounded-b-full" /> : <div className="absolute -bottom-1.5 right-1 w-1.5 h-2 bg-blue-400 rounded-b-full" />}
                        </>
                      )}
                      {part.id === 'angry-eyes' && (
                        <div className="absolute w-full h-1/3 bg-red-50 top-0 rounded-t-full" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 pb-10">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={t('app.back')}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-purple-600">🎭 {t('emotionPuppet.title', 'Duygu Kuklası')}</h1>
            <p className="text-sm text-gray-600 mt-1">
              {t('emotionPuppet.instruction', '{emotion} bir yüz yap!').replace('{emotion}', localizedTargetEmotion)}
            </p>
          </div>
          
          <div className="text-lg font-bold text-gray-700">
            {currentCard}/{totalCards}
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sol: Yüz Önizleme */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
                {t('emotionPuppet.facePreview', 'Yüz Önizleme')}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {t('emotionPuppet.targetEmotion', 'Hedef')}: <span className="font-bold text-purple-600">{localizedTargetEmotion}</span>
              </p>
            </div>
            {renderFacePreview()}
          </div>

          {/* Sağ: Parça Seçiciler */}
          <div className="space-y-4">
            {renderPartSelector(
              t('emotionPuppet.selectEyebrows', 'Kaşları Seç'),
              eyebrowsOptions,
              selectedEyebrows,
              setSelectedEyebrows
            )}
            
            {renderPartSelector(
              t('emotionPuppet.selectEyes', 'Gözleri Seç'),
              eyesOptions,
              selectedEyes,
              setSelectedEyes
            )}
            
            {renderPartSelector(
              t('emotionPuppet.selectMouth', 'Ağzı Seç'),
              mouthOptions,
              selectedMouth,
              setSelectedMouth
            )}

            {/* Kontrol Butonu */}
            <button
              onClick={handleCheck}
              disabled={!selectedEyes || !selectedMouth || !selectedEyebrows || showFeedback}
              className={`
                w-full py-4 rounded-xl font-bold text-lg transition-all duration-200
                ${!selectedEyes || !selectedMouth || !selectedEyebrows || showFeedback
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                }
              `}
            >
              {t('emotionPuppet.checkButton', 'Kontrol Et')}
            </button>
          </div>
        </div>

        {/* Geri Bildirim */}
        {showFeedback && (
          <div className={`
            mt-6 p-4 rounded-xl text-center font-bold text-lg
            ${isCorrect 
              ? 'bg-green-100 text-green-700 border-2 border-green-500' 
              : 'bg-red-100 text-red-700 border-2 border-red-500'
            }
          `}>
            {isCorrect 
              ? `🎉 ${t('emotionPuppet.feedback.correct', 'Harika! {emotion} yüzü yaptın!').replace('{emotion}', localizedTargetEmotion)}`
              : `💭 ${t('emotionPuppet.feedback.incorrect', 'Tekrar dene!')}`
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionPuppetScreen;
