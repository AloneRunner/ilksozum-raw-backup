import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Natural Structures) in English
// Expanded to 8 rounds starting from ID 1901.

export const enNaturalStructuresData: ConceptRound[] = [
  {
    id: 1901,
    question: 'Which one is the waterfall?',
    questionAudioKey: 'q_which_is_waterfall',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 216, word: 'şelale', imageUrl: '/images/216.png', isCorrect: true, audioKey: 'şelale', spokenText: 'waterfall' },
      { id: 643, word: 'buzdağı', imageUrl: '/images/643.png', isCorrect: false, audioKey: 'buzdağı', spokenText: 'iceberg' },
      { id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: false, audioKey: 'dağ', spokenText: 'mountain' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' }
    ]
  },
  {
    id: 1902,
    question: 'Which one is the mountain?',
    questionAudioKey: 'q_which_is_mountain',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: true, audioKey: 'dağ', spokenText: 'mountain' },
      { id: 196, word: 'tepe', imageUrl: '/images/196.png', isCorrect: false, audioKey: 'tepe', spokenText: 'hill' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' },
      { id: 342, word: 'göl', imageUrl: '/images/342.png', isCorrect: false, audioKey: 'göl', spokenText: 'lake' }
    ]
  },
  {
    id: 1903,
    question: 'Which one is the forest?',
    questionAudioKey: 'q_which_is_forest',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: true, audioKey: 'orman', spokenText: 'forest' },
      { id: 243, word: 'çöl', imageUrl: '/images/243.png', isCorrect: false, audioKey: 'çöl', spokenText: 'desert' },
      { id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: false, audioKey: 'dağ', spokenText: 'mountain' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' }
    ]
  },
  {
    id: 1904,
    question: 'Which one is the desert?',
    questionAudioKey: 'q_which_is_desert',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 243, word: 'çöl', imageUrl: '/images/243.png', isCorrect: true, audioKey: 'çöl', spokenText: 'desert' },
      { id: 242, word: 'orman', imageUrl: '/images/242.png', isCorrect: false, audioKey: 'orman', spokenText: 'forest' },
      { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'beach' },
      { id: 343, word: 'nehir', imageUrl: '/images/343.png', isCorrect: false, audioKey: 'nehir', spokenText: 'river' }
    ]
  },
  {
    id: 1905,
    question: 'Which one is the river?',
    questionAudioKey: 'q_which_is_river',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 343, word: 'nehir', imageUrl: '/images/343.png', isCorrect: true, audioKey: 'nehir', spokenText: 'river' },
      { id: 342, word: 'göl', imageUrl: '/images/342.png', isCorrect: false, audioKey: 'göl', spokenText: 'lake' },
      { id: 216, word: 'şelale', imageUrl: '/images/216.png', isCorrect: false, audioKey: 'şelale', spokenText: 'waterfall' },
      { id: 225, word: 'deniz', imageUrl: '/images/225.png', isCorrect: false, audioKey: 'deniz', spokenText: 'sea' }
    ]
  },
  {
    id: 1906,
    question: 'Which one is the lake?',
    questionAudioKey: 'q_which_is_lake',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 342, word: 'göl', imageUrl: '/images/342.png', isCorrect: true, audioKey: 'göl', spokenText: 'lake' },
      { id: 343, word: 'nehir', imageUrl: '/images/343.png', isCorrect: false, audioKey: 'nehir', spokenText: 'river' },
      { id: 225, word: 'deniz', imageUrl: '/images/225.png', isCorrect: false, audioKey: 'deniz', spokenText: 'sea' },
      { id: 699, word: 'su birikintisi', imageUrl: '/images/699.png', isCorrect: false, audioKey: 'su_birikintisi', spokenText: 'puddle' }
    ]
  },
  {
    id: 1907,
    question: 'Which one is the iceberg?',
    questionAudioKey: 'q_which_is_iceberg',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 643, word: 'buzdağı', imageUrl: '/images/643.png', isCorrect: true, audioKey: 'buzdağı', spokenText: 'iceberg' },
      { id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: false, audioKey: 'dağ', spokenText: 'mountain' },
      { id: 233, word: 'volkan', imageUrl: '/images/233.png', isCorrect: false, audioKey: 'volkan', spokenText: 'volcano' },
      { id: 342, word: 'göl', imageUrl: '/images/342.png', isCorrect: false, audioKey: 'göl', spokenText: 'lake' }
    ]
  },
  {
    id: 1908,
    question: 'Which one is the volcano?',
    questionAudioKey: 'q_which_is_volcano',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 233, word: 'volkan', imageUrl: '/images/233.png', isCorrect: true, audioKey: 'volkan', spokenText: 'volcano' },
      { id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: false, audioKey: 'dağ', spokenText: 'mountain' },
      { id: 196, word: 'tepe', imageUrl: '/images/196.png', isCorrect: false, audioKey: 'tepe', spokenText: 'hill' },
      { id: 643, word: 'buzdağı', imageUrl: '/images/643.png', isCorrect: false, audioKey: 'buzdağı', spokenText: 'iceberg' }
    ]
  }
];