import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Places) in English
// Expanded to 6 rounds starting from ID 1871.

export const enPlacesData: ConceptRound[] = [
  {
    id: 1871,
    question: 'Which one is the beach?',
    questionAudioKey: 'q_which_is_beach',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: true, audioKey: 'plaj', spokenText: 'beach' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' },
      { id: 850, word: 'okul bahçesi', imageUrl: '/images/850.png', isCorrect: false, audioKey: 'okul_bahçesi', spokenText: 'playground' },
      { id: 243, word: 'çöl', imageUrl: '/images/243.png', isCorrect: false, audioKey: 'çöl', spokenText: 'desert' }
    ]
  },
  {
    id: 1872,
    question: 'Which one is the forest?',
    questionAudioKey: 'q_which_is_forest',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: true, audioKey: 'orman', spokenText: 'forest' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' },
      { id: 243, word: 'çöl', imageUrl: '/images/243.png', isCorrect: false, audioKey: 'çöl', spokenText: 'desert' },
      { id: 850, word: 'okul bahçesi', imageUrl: '/images/850.png', isCorrect: false, audioKey: 'okul_bahçesi', spokenText: 'playground' }
    ]
  },
  {
    id: 1873,
    question: 'Which one is the playground?',
    questionAudioKey: 'q_which_is_playground',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 850, word: 'okul bahçesi', imageUrl: '/images/850.png', isCorrect: true, audioKey: 'okul_bahçesi', spokenText: 'playground' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' },
      { id: 198, word: 'durak', imageUrl: '/images/198.png', isCorrect: false, audioKey: 'durak', spokenText: 'bus stop' }
    ]
  },
  {
    id: 1874,
    question: 'Which one is the desert?',
    questionAudioKey: 'q_which_is_desert',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 243, word: 'çöl', imageUrl: '/images/243.png', isCorrect: true, audioKey: 'çöl', spokenText: 'desert' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' },
      { id: 196, word: 'tepe', imageUrl: '/images/196.png', isCorrect: false, audioKey: 'tepe', spokenText: 'hill' }
    ]
  },
  {
    id: 1875,
    question: 'Which one is the bus stop?',
    questionAudioKey: 'q_which_is_bus_stop',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 198, word: 'durak', imageUrl: '/images/198.png', isCorrect: true, audioKey: 'durak', spokenText: 'bus stop' },
      { id: 850, word: 'okul bahçesi', imageUrl: '/images/850.png', isCorrect: false, audioKey: 'okul_bahçesi', spokenText: 'playground' },
      { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: false, audioKey: 'restoran', spokenText: 'restaurant' },
      { id: 430, word: 'bank', imageUrl: '/images/430.png', isCorrect: false, audioKey: 'bank', spokenText: 'bench' }
    ]
  },
  {
    id: 1876,
    question: 'Which one is the road?',
    questionAudioKey: 'q_which_is_road',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 61, word: 'yol', imageUrl: '/images/61.png', isCorrect: true, audioKey: 'yol', spokenText: 'road' },
      { id: 529, word: 'patika', imageUrl: '/images/529.png', isCorrect: false, audioKey: 'patika', spokenText: 'path' },
      { id: 343, word: 'nehir', imageUrl: '/images/343.png', isCorrect: false, audioKey: 'nehir', spokenText: 'river' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' }
    ]
  }
];