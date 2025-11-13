/**
 * Placeholder data for remaining new activities
 * 
 * TODO: Expand each into dedicated files with proper round structures
 */

// MultiStepInstruction (Unit 8)
export interface MultiStepInstructionRound {
  id: number;
  commands: string[];
  sceneObjects: Array<{ shape: string; color: string; size: string }>;
}

export const MULTI_STEP_INSTRUCTION_ROUNDS: MultiStepInstructionRound[] = [
  {
    id: 1,
    commands: ['Kırmızı üçgene dokun', 'Büyük daireyi sürükle'],
    sceneObjects: [
      { shape: 'triangle', color: 'red', size: 'small' },
      { shape: 'circle', color: 'blue', size: 'large' }
    ]
  }
];

// Ordering (Unit 7)
export interface OrderingRound {
  id: number;
  criterion: 'size' | 'length' | 'quantity';
  items: Array<{ id: number; imageUrl: string; value: number }>;
}

export const ORDERING_ROUNDS: OrderingRound[] = [
  {
    id: 1,
    criterion: 'size',
    items: [
      { id: 1, imageUrl: '/images/objects/ball_small.png', value: 1 },
      { id: 2, imageUrl: '/images/objects/ball_medium.png', value: 2 },
      { id: 3, imageUrl: '/images/objects/ball_large.png', value: 3 }
    ]
  }
];

// PatternExtension (Unit 6)
export const PATTERN_EXTENSION_ROUNDS = [
  { id: 1, pattern: ['red', 'blue', 'red', 'blue'], extension: 2 }
];

// VisualAnalogies (Unit 9)
export const VISUAL_ANALOGIES_ROUNDS = [
  { id: 1, A: 'spoon', B: 'eating', C: 'pencil', options: ['writing', 'cutting', 'playing'] }
];

// CountToNumber (Unit 8)
export const COUNT_TO_NUMBER_ROUNDS = [
  { id: 1, objectImageUrl: '/images/objects/apple.png', count: 3, options: [2, 3, 4] }
];

// InitialSoundSort (Unit 10)
export const INITIAL_SOUND_SORT_ROUNDS = [
  { id: 1, targetSound: 'A', words: ['Araba', 'Elma', 'Ağaç', 'Kitap'] }
];

// EmotionScenarioMatch (Unit 5)
export const EMOTION_SCENARIO_MATCH_ROUNDS = [
  { id: 1, scenarioImageUrl: '/images/scenarios/birthday.png', correctEmotion: 'happy', options: ['happy', 'sad', 'angry'] }
];

// MapClue (Unit 7)
export const MAP_CLUE_ROUNDS = [
  { id: 1, clue: 'Market sağ tarafta', mapImageUrl: '/images/maps/street1.png', correctX: 0.7, correctY: 0.5 }
];

// FiveWOneHExtended (Unit 9)
export const FIVE_W_ONE_H_EXTENDED_ROUNDS = [
  { id: 1, questionType: 'when', scenarioImageUrl: '/images/scenarios/morning.png', options: ['Sabah', 'Akşam', 'Öğle'] }
];
