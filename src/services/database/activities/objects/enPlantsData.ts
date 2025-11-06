import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Plants) in English
// Expanded to 8 rounds starting from ID 1811.

export const enPlantsData: ConceptRound[] = [
  {
    id: 1811,
    question: 'Which one is the tree?',
    questionAudioKey: 'q_which_is_tree_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 10, word: 'ağaç', imageUrl: '/images/10.png', isCorrect: true, audioKey: 'ağaç', spokenText: 'tree' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'flower' },
      { id: 281, word: 'kaktüs', imageUrl: '/images/281.png', isCorrect: false, audioKey: 'kaktüs', spokenText: 'cactus' },
      { id: 434, word: 'çim', imageUrl: '/images/434.png', isCorrect: false, audioKey: 'çim', spokenText: 'grass' }
    ]
  },
  {
    id: 1812,
    question: 'Which one is the flower?',
    questionAudioKey: 'q_which_is_flower',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: true, audioKey: 'gül', spokenText: 'flower' },
      { id: 10, word: 'ağaç', imageUrl: '/images/10.png', isCorrect: false, audioKey: 'ağaç', spokenText: 'tree' },
      { id: 281, word: 'kaktüs', imageUrl: '/images/281.png', isCorrect: false, audioKey: 'kaktüs', spokenText: 'cactus' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' }
    ]
  },
  {
    id: 1813,
    question: 'Which one is the cactus?',
    questionAudioKey: 'q_which_is_cactus_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 281, word: 'kaktüs', imageUrl: '/images/281.png', isCorrect: true, audioKey: 'kaktüs', spokenText: 'cactus' },
      { id: 10, word: 'ağaç', imageUrl: '/images/10.png', isCorrect: false, audioKey: 'ağaç', spokenText: 'tree' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'flower' },
      { id: 434, word: 'çim', imageUrl: '/images/434.png', isCorrect: false, audioKey: 'çim', spokenText: 'grass' }
    ]
  },
  {
    id: 1814,
    question: 'Which one is the grass?',
    questionAudioKey: 'q_which_is_grass_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 434, word: 'çim', imageUrl: '/images/434.png', isCorrect: true, audioKey: 'çim', spokenText: 'grass' },
      { id: 10, word: 'ağaç', imageUrl: '/images/10.png', isCorrect: false, audioKey: 'ağaç', spokenText: 'tree' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'flower' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' }
    ]
  },
  {
    id: 1815,
    question: 'Which one is the leaf?',
    questionAudioKey: 'q_which_is_leaf_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: true, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: false, audioKey: 'dal', spokenText: 'branch' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'flower' },
      { id: 10, word: 'ağaç', imageUrl: '/images/10.png', isCorrect: false, audioKey: 'ağaç', spokenText: 'tree' }
    ]
  },
  {
    id: 1816,
    question: 'Which one is the cotton?',
    questionAudioKey: 'q_which_is_cotton_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 27, word: 'pamuk', imageUrl: '/images/27.png', isCorrect: true, audioKey: 'pamuk', spokenText: 'cotton' },
      { id: 434, word: 'çim', imageUrl: '/images/434.png', isCorrect: false, audioKey: 'çim', spokenText: 'grass' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'flower' }
    ]
  },
  {
    id: 1817,
    question: 'Which one is the tulip?',
    questionAudioKey: 'q_which_is_tulip_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 57, word: 'lale', imageUrl: '/images/57.png', isCorrect: true, audioKey: 'lale', spokenText: 'tulip' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'rose' },
      { id: 76, word: 'papatya', imageUrl: '/images/76.png', isCorrect: false, audioKey: 'papatya', spokenText: 'daisy' },
      { id: 374, word: 'menekşe', imageUrl: '/images/374.png', isCorrect: false, audioKey: 'menekşe', spokenText: 'violet' }
    ]
  },
  {
    id: 1818,
    question: 'Which one is the daisy?',
    questionAudioKey: 'q_which_is_daisy_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 76, word: 'papatya', imageUrl: '/images/76.png', isCorrect: true, audioKey: 'papatya', spokenText: 'daisy' },
      { id: 57, word: 'lale', imageUrl: '/images/57.png', isCorrect: false, audioKey: 'lale', spokenText: 'tulip' },
      { id: 309, word: 'gül', imageUrl: '/images/309.png', isCorrect: false, audioKey: 'gül', spokenText: 'rose' },
      { id: 374, word: 'menekşe', imageUrl: '/images/374.png', isCorrect: false, audioKey: 'menekşe', spokenText: 'violet' }
    ]
  }
];