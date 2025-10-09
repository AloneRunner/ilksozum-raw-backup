import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Home) in English
// Expanded to 10 rounds starting from ID 1881.

export const enHomeData: ConceptRound[] = [
  {
    id: 1881,
    question: 'Which one is the balcony?',
    questionAudioKey: 'q_which_is_balcony',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 868, word: 'balkon', imageUrl: '/images/868.png', isCorrect: true, audioKey: 'balkon', spokenText: 'balcony' },
      { id: 867, word: 'oturma odası', imageUrl: '/images/867.png', isCorrect: false, audioKey: 'oturma_odası', spokenText: 'living room' },
      { id: 82, word: 'pencere', imageUrl: '/images/82.png', isCorrect: false, audioKey: 'pencere', spokenText: 'window' },
      { id: 39, word: 'kapı', imageUrl: '/images/39.png', isCorrect: false, audioKey: 'kapı', spokenText: 'door' }
    ]
  },
  {
    id: 1882,
    question: 'Which one is the living room?',
    questionAudioKey: 'q_which_is_living_room',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 867, word: 'oturma odası', imageUrl: '/images/867.png', isCorrect: true, audioKey: 'oturma_odası', spokenText: 'living room' },
      { id: 868, word: 'balkon', imageUrl: '/images/868.png', isCorrect: false, audioKey: 'balkon', spokenText: 'balcony' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' }, // Represents bedroom
      { id: 251, word: 'buzdolabı', imageUrl: '/images/251.png', isCorrect: false, audioKey: 'buzdolabı', spokenText: 'refrigerator' } // Represents kitchen
    ]
  },
  {
    id: 1883,
    question: 'Which one is the door?',
    questionAudioKey: 'q_which_is_door',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 39, word: 'kapı', imageUrl: '/images/39.png', isCorrect: true, audioKey: 'kapı', spokenText: 'door' },
      { id: 82, word: 'pencere', imageUrl: '/images/82.png', isCorrect: false, audioKey: 'pencere', spokenText: 'window' },
      { id: 868, word: 'balkon', imageUrl: '/images/868.png', isCorrect: false, audioKey: 'balkon', spokenText: 'balcony' },
      { id: 143, word: 'merdiven', imageUrl: '/images/143.png', isCorrect: false, audioKey: 'merdiven', spokenText: 'stairs' }
    ]
  },
  {
    id: 1884,
    question: 'Which one is the window?',
    questionAudioKey: 'q_which_is_window',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 82, word: 'pencere', imageUrl: '/images/82.png', isCorrect: true, audioKey: 'pencere', spokenText: 'window' },
      { id: 39, word: 'kapı', imageUrl: '/images/39.png', isCorrect: false, audioKey: 'kapı', spokenText: 'door' },
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: false, audioKey: 'ayna', spokenText: 'mirror' },
      { id: 118, word: 'saat', imageUrl: '/images/118.png', isCorrect: false, audioKey: 'saat', spokenText: 'clock' }
    ]
  },
  {
    id: 1885,
    question: 'Which one is the stairs?',
    questionAudioKey: 'q_which_is_stairs',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 143, word: 'merdiven', imageUrl: '/images/143.png', isCorrect: true, audioKey: 'merdiven', spokenText: 'stairs' },
      { id: 39, word: 'kapı', imageUrl: '/images/39.png', isCorrect: false, audioKey: 'kapı', spokenText: 'door' },
      { id: 439, word: 'halı', imageUrl: '/images/439.png', isCorrect: false, audioKey: 'halı', spokenText: 'carpet' },
      { id: 82, word: 'pencere', imageUrl: '/images/82.png', isCorrect: false, audioKey: 'pencere', spokenText: 'window' }
    ]
  },
  {
    id: 1886,
    question: 'Which one is the carpet?',
    questionAudioKey: 'q_which_is_carpet',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 439, word: 'halı', imageUrl: '/images/439.png', isCorrect: true, audioKey: 'halı', spokenText: 'carpet' },
      { id: 341, word: 'paspas', imageUrl: '/images/341.png', isCorrect: false, audioKey: 'paspas', spokenText: 'doormat' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 816, word: 'battaniye', imageUrl: '/images/816.png', isCorrect: false, audioKey: 'battaniye', spokenText: 'blanket' }
    ]
  },
  {
    id: 1887,
    question: 'Which one is the fireplace?',
    questionAudioKey: 'q_which_is_fireplace',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 384, word: 'şömine', imageUrl: '/images/384.png', isCorrect: true, audioKey: 'şömine', spokenText: 'fireplace' },
      { id: 302, word: 'fırın', imageUrl: '/images/302.png', isCorrect: false, audioKey: 'fırın', spokenText: 'oven' },
      { id: 250, word: 'soba', imageUrl: '/images/250.png', isCorrect: false, audioKey: 'soba', spokenText: 'stove' },
      { id: 892, word: 'akıllı televizyon', imageUrl: '/images/892.png', isCorrect: false, audioKey: 'akıllı_televizyon', spokenText: 'television' }
    ]
  },
  {
    id: 1888,
    question: 'Which one is the vase?',
    questionAudioKey: 'q_which_is_vase',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 34, word: 'vazo', imageUrl: '/images/34.png', isCorrect: true, audioKey: 'vazo', spokenText: 'vase' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 432, word: 'saksı', imageUrl: '/images/432.png', isCorrect: false, audioKey: 'saksı', spokenText: 'pot' },
      { id: 814, word: 'şişe', imageUrl: '/images/814.png', isCorrect: false, audioKey: 'şişe', spokenText: 'bottle' }
    ]
  },
  {
    id: 1889,
    question: 'Which one is the blanket?',
    questionAudioKey: 'q_which_is_blanket',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 816, word: 'battaniye', imageUrl: '/images/816.png', isCorrect: true, audioKey: 'battaniye', spokenText: 'blanket' },
      { id: 137, word: 'yastık', imageUrl: '/images/137.png', isCorrect: false, audioKey: 'yastık', spokenText: 'pillow' },
      { id: 523, word: 'havlu', imageUrl: '/images/523.png', isCorrect: false, audioKey: 'havlu', spokenText: 'towel' },
      { id: 735, word: 'çarşaf', imageUrl: '/images/735.png', isCorrect: false, audioKey: 'çarşaf', spokenText: 'sheet' }
    ]
  },
  {
    id: 1890,
    question: 'Which one is the sofa?',
    questionAudioKey: 'q_which_is_sofa',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 549, word: 'koltuk', imageUrl: '/images/549.png', isCorrect: true, audioKey: 'koltuk', spokenText: 'sofa' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 430, word: 'bank', imageUrl: '/images/430.png', isCorrect: false, audioKey: 'bank', spokenText: 'bench' }
    ]
  }
];