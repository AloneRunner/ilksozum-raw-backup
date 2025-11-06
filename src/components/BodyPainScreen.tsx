
import React from 'react';
import { CommunicationCard } from '../types.ts';
import { communicationCategories } from '../services/communicationData.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t, getCurrentLanguage } from '../i18n/index.ts';
import { translateLabel } from '../utils/translate.ts';

interface BodyPainScreenProps {
  onBack: () => void;
  onSelectPainArea: (card: CommunicationCard) => void;
}

const BodyPainScreen: React.FC<BodyPainScreenProps> = ({ onBack, onSelectPainArea }) => {
  const painCategory = communicationCategories.find(c => c.id === 'pain');

  if (!painCategory) {
    return (
      <div className="p-4">
        <button onClick={onBack} className="mb-4 bg-gray-200 p-2 rounded">{t('app.back', 'Geri')}</button>
        <h1 className="text-xl">{t('communication.bodyPain.missingCategory', 'Hata: Ağrı kategorisi bulunamadı.')}</h1>
      </div>
    );
  }

  const handleAreaClick = (areaId: string) => {
    const card = painCategory.cards?.find(c => c.id === `pain-${areaId}`);
    if (card) {
      onSelectPainArea(card);
    }
  };

  const PainArea: React.FC<{
    areaId: string;
    path: string;
    label: string;
    labelPosition: { x: string, y: string };
  }> = ({ areaId, path, label, labelPosition }) => (
    <g className="pain-area group cursor-pointer" onClick={() => handleAreaClick(areaId)}>
      <path d={path} className="fill-sky-200/50 stroke-sky-400 stroke-2 transition-all duration-200 group-hover:fill-red-400/80" />
      <text
        x={labelPosition.x}
        y={labelPosition.y}
        className="font-bold text-lg fill-slate-700 pointer-events-none transition-all duration-200 group-hover:fill-white"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {label}
      </text>
    </g>
  );

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={t('app.back', 'Geri dön')}>
          <ArrowLeftIcon className="w-8 h-8 text-amber-700" />
        </button>
        <h1 className="flex-1 text-center text-3xl sm:text-4xl font-black text-amber-800">
          {t('communication.bodyPain.title', 'Bir Yerim Acıyor')}
        </h1>
      </div>
      
      <p className="text-center text-slate-600 mb-8 text-lg -mt-4">
        {t('communication.bodyPain.subtitle', 'Acıyan bölgeye dokunarak söyle.')}
      </p>

      <div className="w-full max-w-sm mx-auto">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          {/* Head */}
          <PainArea areaId="head" path="M80 60 C 80 40, 120 40, 120 60 C 120 80, 80 80, 80 60 Z" label={(getCurrentLanguage() === 'tr' ? 'Baş' : translateLabel('Baş', getCurrentLanguage()))} labelPosition={{ x: "100", y: "60" }} />
          
          {/* Body */}
          <PainArea areaId="stomach" path="M75 85 L 125 85 L 120 180 L 80 180 Z" label={(getCurrentLanguage() === 'tr' ? 'Karın' : translateLabel('Karın', getCurrentLanguage()))} labelPosition={{ x: "100", y: "135" }} />
          
          {/* Throat area (overlay on body) */}
          <PainArea areaId="throat" path="M85 85 L 115 85 L 115 105 L 85 105 Z" label={(getCurrentLanguage() === 'tr' ? 'Boğaz' : translateLabel('Boğaz', getCurrentLanguage()))} labelPosition={{ x: "100", y: "95" }} />
          
          {/* Left Arm */}
          <PainArea areaId="arm" path="M75 90 L 50 100 L 40 180 L 60 180 Z" label={(getCurrentLanguage() === 'tr' ? 'Kol' : translateLabel('Kol', getCurrentLanguage()))} labelPosition={{ x: "55", y: "140" }} />
          
          {/* Right Arm */}
          <PainArea areaId="arm" path="M125 90 L 150 100 L 160 180 L 140 180 Z" label={(getCurrentLanguage() === 'tr' ? 'Kol' : translateLabel('Kol', getCurrentLanguage()))} labelPosition={{ x: "145", y: "140" }} />
          
          {/* Left Leg */}
          <PainArea areaId="leg" path="M80 180 L 100 180 L 90 340 L 60 330 Z" label={(getCurrentLanguage() === 'tr' ? 'Bacak' : translateLabel('Bacak', getCurrentLanguage()))} labelPosition={{ x: "75", y: "260" }} />
          
          {/* Right Leg */}
          <PainArea areaId="leg" path="M100 180 L 120 180 L 140 330 L 110 340 Z" label={(getCurrentLanguage() === 'tr' ? 'Bacak' : translateLabel('Bacak', getCurrentLanguage()))} labelPosition={{ x: "125", y: "260" }} />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(BodyPainScreen);