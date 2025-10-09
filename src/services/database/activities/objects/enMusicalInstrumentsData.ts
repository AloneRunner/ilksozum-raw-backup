import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Musical Instruments) in English
// Expanded to 8 rounds starting from ID 1851.

export const enMusicalInstrumentsData: ConceptRound[] = [
  {
    id: 1851,
    question: 'Which one is the drum?',
    questionAudioKey: 'q_which_is_drum',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: true, audioKey: 'davul', spokenText: 'drum' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: false, audioKey: 'keman', spokenText: 'violin' },
      { id: 328, word: 'flüt', imageUrl: '/images/328.png', isCorrect: false, audioKey: 'flüt', spokenText: 'flute' }
    ]
  },
  {
    id: 1852,
    question: 'Which one is the guitar?',
    questionAudioKey: 'q_which_is_guitar',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: true, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: false, audioKey: 'keman', spokenText: 'violin' },
      { id: 364, word: 'saksafon', imageUrl: '/images/364.png', isCorrect: false, audioKey: 'saksafon', spokenText: 'saxophone' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' }
    ]
  },
  {
    id: 1853,
    question: 'Which one is the violin?',
    questionAudioKey: 'q_which_is_violin',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: true, audioKey: 'keman', spokenText: 'violin' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 328, word: 'flüt', imageUrl: '/images/328.png', isCorrect: false, audioKey: 'flüt', spokenText: 'flute' },
      { id: 429, word: 'tef', imageUrl: '/images/429.png', isCorrect: false, audioKey: 'tef', spokenText: 'tambourine' }
    ]
  },
  {
    id: 1854,
    question: 'Which one is the flute?',
    questionAudioKey: 'q_which_is_flute',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 328, word: 'flüt', imageUrl: '/images/328.png', isCorrect: true, audioKey: 'flüt', spokenText: 'flute' },
      { id: 364, word: 'saksafon', imageUrl: '/images/364.png', isCorrect: false, audioKey: 'saksafon', spokenText: 'saxophone' },
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: false, audioKey: 'keman', spokenText: 'violin' },
      { id: 182, word: 'mikrofon', imageUrl: '/images/182.png', isCorrect: false, audioKey: 'mikrofon', spokenText: 'microphone' }
    ]
  },
  {
    id: 1855,
    question: 'Which one is the microphone?',
    questionAudioKey: 'q_which_is_microphone',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 182, word: 'mikrofon', imageUrl: '/images/182.png', isCorrect: true, audioKey: 'mikrofon', spokenText: 'microphone' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' },
      { id: 355, word: 'kulaklık', imageUrl: '/images/355.png', isCorrect: false, audioKey: 'kulaklık', spokenText: 'headphones' }
    ]
  },
  {
    id: 1856,
    question: 'Which one is the saxophone?',
    questionAudioKey: 'q_which_is_saxophone',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 364, word: 'saksafon', imageUrl: '/images/364.png', isCorrect: true, audioKey: 'saksafon', spokenText: 'saxophone' },
      { id: 328, word: 'flüt', imageUrl: '/images/328.png', isCorrect: false, audioKey: 'flüt', spokenText: 'flute' },
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: false, audioKey: 'keman', spokenText: 'violin' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' }
    ]
  },
  {
    id: 1857,
    question: 'Which one is the tambourine?',
    questionAudioKey: 'q_which_is_tambourine',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 429, word: 'tef', imageUrl: '/images/429.png', isCorrect: true, audioKey: 'tef', spokenText: 'tambourine' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' },
      { id: 329, word: 'marakas', imageUrl: '/images/329.png', isCorrect: false, audioKey: 'marakas', spokenText: 'maracas' },
      { id: 428, word: 'zil', imageUrl: '/images/428.png', isCorrect: false, audioKey: 'zil', spokenText: 'cymbals' }
    ]
  },
  {
    id: 1858,
    question: 'Which one are the cymbals?',
    questionAudioKey: 'q_which_are_cymbals',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 428, word: 'zil', imageUrl: '/images/428.png', isCorrect: true, audioKey: 'zil', spokenText: 'cymbals' },
      { id: 429, word: 'tef', imageUrl: '/images/429.png', isCorrect: false, audioKey: 'tef', spokenText: 'tambourine' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' },
      { id: 329, word: 'marakas', imageUrl: '/images/329.png', isCorrect: false, audioKey: 'marakas', spokenText: 'maracas' }
    ]
  }
];