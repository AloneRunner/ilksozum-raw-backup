import React from 'react';
import StarIcon from '../icons/StarIcon.tsx';

interface ProgressIndicatorProps {
  mode?: 'individual' | 'aggregate';
  attempts: number;
  completions: number;
  totalCorrect?: number;
  totalQuestions?: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
    mode = 'individual', 
    attempts, 
    completions, 
    totalCorrect, 
    totalQuestions 
}) => {
  // Don't show anything if it has never been attempted.
  if (attempts === 0) {
    return null;
  }
  
  const masteryLevel = Math.min(3, completions || 0);
  const skillPercentage = (totalQuestions || 0) > 0 ? (((totalCorrect || 0) / totalQuestions!) * 100) : 0;
  
  const skillBarColor = isNaN(skillPercentage) || skillPercentage < 40 
      ? 'bg-red-400' 
      : skillPercentage < 75
      ? 'bg-yellow-400'
      : 'bg-green-400';

  if (mode === 'aggregate') {
    return (
        <div 
          className="absolute bottom-2 left-3 right-3 h-auto flex flex-col items-start gap-1 bg-black/20 backdrop-blur-sm p-2 rounded-xl" 
          aria-label={`Genel Beceri Seviyesi: ${Math.round(skillPercentage)}%`}
        >
            <span className="text-xs font-bold text-white/90 ml-1">Genel Başarı: {Math.round(skillPercentage)}%</span>
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
            <div 
              className={`h-full ${skillBarColor} rounded-full transition-all duration-500`}
              style={{ width: `${skillPercentage}%` }}
            ></div>
          </div>
        </div>
    );
  }

  // --- Individual Mode ---
  return (
    <div 
      className="absolute bottom-2 left-3 right-3 h-6 flex items-center gap-2 bg-black/20 backdrop-blur-sm p-1 rounded-full" 
      aria-label={`Beceri seviyesi: ${Math.round(skillPercentage)}%, Ustalık: ${masteryLevel} yıldız`}
    >
      {/* Skill Bar */}
      <div className="flex-grow h-2 bg-black/20 rounded-full overflow-hidden">
        <div 
          className={`h-full ${skillBarColor} rounded-full transition-all duration-500`}
          style={{ width: `${skillPercentage}%` }}
        ></div>
      </div>
      {/* Mastery Stars */}
      <div className="flex-shrink-0 flex items-center">
        {[...Array(3)].map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 transition-colors ${i < masteryLevel ? 'text-amber-300' : 'text-black/20'}`} />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;