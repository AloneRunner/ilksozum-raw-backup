import React, { useState } from 'react';
import LetterSelectionForTracingScreen from './LetterSelectionForTracingScreen.tsx';
import SimpleLetterTracingScreen from './SimpleLetterTracingScreen.tsx';

interface LetterTracingScreenProps {
  currentCard: number;
  totalCards: number;
  isAutoSpeakEnabled: boolean;
  onAdvance: (isCorrect: boolean) => Promise<void>;
  onBack: () => void;
}

const LetterTracingScreen: React.FC<LetterTracingScreenProps> = ({
  currentCard,
  totalCards,
  onAdvance,
  onBack,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isUpperCase, setIsUpperCase] = useState(true);

  if (currentCard > totalCards) return null;

  const handleSelectLetter = (letter: string, upper: boolean) => {
    setSelectedLetter(letter);
    setIsUpperCase(upper);
  };

  const handleComplete = async () => {
    await onAdvance(true);
    setSelectedLetter(null); // Reset for next card
  };

  const handleBackToSelection = () => {
    setSelectedLetter(null);
  };

  if (!selectedLetter) {
    return <LetterSelectionForTracingScreen onSelectLetter={handleSelectLetter} onBack={onBack} />;
  }

  return (
    <SimpleLetterTracingScreen
      letter={selectedLetter}
      isUpperCase={isUpperCase}
      onComplete={handleComplete}
      onBack={handleBackToSelection}
    />
  );
};

export default LetterTracingScreen;
