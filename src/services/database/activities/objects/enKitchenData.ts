import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Kitchen Items) in English
// Rewritten to fix compilation errors and expanded to 12 rounds.

export const enKitchenData: ConceptRound[] = [
  {
    id: 1501,
    question: 'Which one is the glass?',
    questionAudioKey: 'q_which_is_glass',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: true, audioKey: 'bardak', spokenText: 'glass' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'spoon' },
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: false, audioKey: 'çatal', spokenText: 'fork' }
    ]
  },
  {
    id: 1502,
    question: 'Which one is the spoon?',
    questionAudioKey: 'q_which_is_spoon',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: true, audioKey: 'kaşık', spokenText: 'spoon' },
      { id: 262, word: 'bıçak', imageUrl: '/images/262.png', isCorrect: false, audioKey: 'bıçak', spokenText: 'knife' },
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: false, audioKey: 'çatal', spokenText: 'fork' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' }
    ]
  },
  {
    id: 1503,
    question: 'Which one is the fork?',
    questionAudioKey: 'q_which_is_fork',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: true, audioKey: 'çatal', spokenText: 'fork' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'spoon' },
      { id: 262, word: 'bıçak', imageUrl: '/images/262.png', isCorrect: false, audioKey: 'bıçak', spokenText: 'knife' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' }
    ]
  },
  {
    id: 1504,
    question: 'Which one is the knife?',
    questionAudioKey: 'q_which_is_knife',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 262, word: 'bıçak', imageUrl: '/images/262.png', isCorrect: true, audioKey: 'bıçak', spokenText: 'knife' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'spoon' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: false, audioKey: 'çatal', spokenText: 'fork' }
    ]
  },
  {
    id: 1505,
    question: 'Which one is the pan?',
    questionAudioKey: 'q_which_is_pan',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 264, word: 'tava', imageUrl: '/images/264.png', isCorrect: true, audioKey: 'tava', spokenText: 'pan' },
      { id: 671, word: 'tencere', imageUrl: '/images/671.png', isCorrect: false, audioKey: 'tencere', spokenText: 'pot' },
      { id: 700, word: 'kase', imageUrl: '/images/700.png', isCorrect: false, audioKey: 'kase', spokenText: 'bowl' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' }
    ]
  },
  {
    id: 1506,
    question: 'Which one is the pot?',
    questionAudioKey: 'q_which_is_pot',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 671, word: 'tencere', imageUrl: '/images/671.png', isCorrect: true, audioKey: 'tencere', spokenText: 'pot' },
      { id: 264, word: 'tava', imageUrl: '/images/264.png', isCorrect: false, audioKey: 'tava', spokenText: 'pan' },
      { id: 356, word: 'çaydanlık', imageUrl: '/images/356.png', isCorrect: false, audioKey: 'çaydanlık', spokenText: 'teapot' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' }
    ]
  },
  {
    id: 1507,
    question: 'Which one is the plate?',
    questionAudioKey: 'q_which_is_plate',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: true, audioKey: 'tabak', spokenText: 'plate' },
      { id: 700, word: 'kase', imageUrl: '/images/700.png', isCorrect: false, audioKey: 'kase', spokenText: 'bowl' },
      { id: 264, word: 'tava', imageUrl: '/images/264.png', isCorrect: false, audioKey: 'tava', spokenText: 'pan' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' }
    ]
  },
  {
    id: 1508,
    question: 'Which one is the bowl?',
    questionAudioKey: 'q_which_is_bowl',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 700, word: 'kase', imageUrl: '/images/700.png', isCorrect: true, audioKey: 'kase', spokenText: 'bowl' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'plate' },
      { id: 671, word: 'tencere', imageUrl: '/images/671.png', isCorrect: false, audioKey: 'tencere', spokenText: 'pot' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' }
    ]
  },
  {
    id: 1509,
    question: 'Which one is the teapot?',
    questionAudioKey: 'q_which_is_teapot',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 356, word: 'çaydanlık', imageUrl: '/images/356.png', isCorrect: true, audioKey: 'çaydanlık', spokenText: 'teapot' },
      { id: 671, word: 'tencere', imageUrl: '/images/671.png', isCorrect: false, audioKey: 'tencere', spokenText: 'pot' },
      { id: 350, word: 'sürahi', imageUrl: '/images/350.png', isCorrect: false, audioKey: 'sürahi', spokenText: 'pitcher' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' }
    ]
  },
  {
    id: 1510,
    question: 'Which one is the pitcher?',
    questionAudioKey: 'q_which_is_pitcher',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 350, word: 'sürahi', imageUrl: '/images/350.png', isCorrect: true, audioKey: 'sürahi', spokenText: 'pitcher' },
      { id: 356, word: 'çaydanlık', imageUrl: '/images/356.png', isCorrect: false, audioKey: 'çaydanlık', spokenText: 'teapot' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 814, word: 'şişe', imageUrl: '/images/814.png', isCorrect: false, audioKey: 'şişe', spokenText: 'bottle' }
    ]
  },
  {
    id: 1511,
    question: 'Which one is the bottle?',
    questionAudioKey: 'q_which_is_bottle',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 814, word: 'şişe', imageUrl: '/images/814.png', isCorrect: true, audioKey: 'şişe', spokenText: 'bottle' },
      { id: 350, word: 'sürahi', imageUrl: '/images/350.png', isCorrect: false, audioKey: 'sürahi', spokenText: 'pitcher' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 671, word: 'tencere', imageUrl: '/images/671.png', isCorrect: false, audioKey: 'tencere', spokenText: 'pot' }
    ]
  },
  {
    id: 1512,
    question: 'Which one is the oven?',
    questionAudioKey: 'q_which_is_oven',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 302, word: 'fırın', imageUrl: '/images/302.png', isCorrect: true, audioKey: 'fırın', spokenText: 'oven' },
      { id: 301, word: 'bulaşık makinesi', imageUrl: '/images/301.png', isCorrect: false, audioKey: 'bulaşık_makinesi', spokenText: 'dishwasher' },
      { id: 169, word: 'çamaşır makinesi', imageUrl: '/images/169.png', isCorrect: false, audioKey: 'çamaşır_makinesi', spokenText: 'washing machine' },
      { id: 251, word: 'buzdolabı', imageUrl: '/images/251.png', isCorrect: false, audioKey: 'buzdolabı', spokenText: 'refrigerator' }
    ]
  }
];