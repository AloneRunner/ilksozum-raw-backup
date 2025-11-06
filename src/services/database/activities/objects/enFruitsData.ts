import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Fruits) in English
// Uses corrected main image IDs and provides 12 rounds.

export const enFruitsData: ConceptRound[] = [
  {
    id: 1101,
    question: 'Which one is the apple?',
    questionAudioKey: 'q_which_is_apple_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: true, audioKey: 'elma', spokenText: 'apple' },
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: false, audioKey: 'muz', spokenText: 'banana' },
      { id: 171, word: 'çilek', imageUrl: '/images/171.png', isCorrect: false, audioKey: 'çilek', spokenText: 'strawberry' },
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: false, audioKey: 'portakal', spokenText: 'orange' }
    ]
  },
  {
    id: 1102,
    question: 'Which one is the banana?',
    questionAudioKey: 'q_which_is_banana',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: true, audioKey: 'muz', spokenText: 'banana' },
      { id: 365, word: 'armut', imageUrl: '/images/365.png', isCorrect: false, audioKey: 'armut', spokenText: 'pear' },
      { id: 88, word: 'üzüm', imageUrl: '/images/88.png', isCorrect: false, audioKey: 'üzüm', spokenText: 'grapes' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' }
    ]
  },
  {
    id: 1103,
    question: 'Which one is the orange?',
    questionAudioKey: 'q_which_is_orange_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: true, audioKey: 'portakal', spokenText: 'orange' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' },
      { id: 88, word: 'üzüm', imageUrl: '/images/88.png', isCorrect: false, audioKey: 'üzüm', spokenText: 'grapes' },
      { id: 703, word: 'limon', imageUrl: '/images/703.png', isCorrect: false, audioKey: 'limon', spokenText: 'lemon' }
    ]
  },
  {
    id: 1104,
    question: 'Which one is the strawberry?',
    questionAudioKey: 'q_which_is_strawberry_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 171, word: 'çilek', imageUrl: '/images/171.png', isCorrect: true, audioKey: 'çilek', spokenText: 'strawberry' },
      { id: 170, word: 'karpuz', imageUrl: '/images/170.png', isCorrect: false, audioKey: 'karpuz', spokenText: 'watermelon' },
      { id: 703, word: 'limon', imageUrl: '/images/703.png', isCorrect: false, audioKey: 'limon', spokenText: 'lemon' },
      { id: 278, word: 'kiraz', imageUrl: '/images/278.png', isCorrect: false, audioKey: 'kiraz', spokenText: 'cherry' }
    ]
  },
  {
    id: 1105,
    question: 'Which one are the grapes?',
    questionAudioKey: 'q_which_are_grapes_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 88, word: 'üzüm', imageUrl: '/images/88.png', isCorrect: true, audioKey: 'üzüm', spokenText: 'grapes' },
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: false, audioKey: 'muz', spokenText: 'banana' },
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: false, audioKey: 'portakal', spokenText: 'orange' },
      { id: 171, word: 'çilek', imageUrl: '/images/171.png', isCorrect: false, audioKey: 'çilek', spokenText: 'strawberry' }
    ]
  },
  {
    id: 1106,
    question: 'Which one is the watermelon?',
    questionAudioKey: 'q_which_is_watermelon_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 170, word: 'karpuz', imageUrl: '/images/170.png', isCorrect: true, audioKey: 'karpuz', spokenText: 'watermelon' },
      { id: 295, word: 'kavun', imageUrl: '/images/295.png', isCorrect: false, audioKey: 'kavun', spokenText: 'melon' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' },
      { id: 279, word: 'ananas', imageUrl: '/images/279.png', isCorrect: false, audioKey: 'ananas', spokenText: 'pineapple' }
    ]
  },
  {
    id: 1107,
    question: 'Which one is the lemon?',
    questionAudioKey: 'q_which_is_lemon_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 703, word: 'limon', imageUrl: '/images/703.png', isCorrect: true, audioKey: 'limon', spokenText: 'lemon' },
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: false, audioKey: 'portakal', spokenText: 'orange' },
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: false, audioKey: 'muz', spokenText: 'banana' },
      { id: 365, word: 'armut', imageUrl: '/images/365.png', isCorrect: false, audioKey: 'armut', spokenText: 'pear' }
    ]
  },
  {
    id: 1108,
    question: 'Which one is the pear?',
    questionAudioKey: 'q_which_is_pear_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 365, word: 'armut', imageUrl: '/images/365.png', isCorrect: true, audioKey: 'armut', spokenText: 'pear' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' },
      { id: 703, word: 'limon', imageUrl: '/images/703.png', isCorrect: false, audioKey: 'limon', spokenText: 'lemon' },
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: false, audioKey: 'muz', spokenText: 'banana' }
    ]
  },
  {
    id: 1109,
    question: 'Which one is the cherry?',
    questionAudioKey: 'q_which_is_cherry_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 278, word: 'kiraz', imageUrl: '/images/278.png', isCorrect: true, audioKey: 'kiraz', spokenText: 'cherry' },
      { id: 171, word: 'çilek', imageUrl: '/images/171.png', isCorrect: false, audioKey: 'çilek', spokenText: 'strawberry' },
      { id: 88, word: 'üzüm', imageUrl: '/images/88.png', isCorrect: false, audioKey: 'üzüm', spokenText: 'grapes' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' }
    ]
  },
  {
    id: 1110,
    question: 'Which one is the pineapple?',
    questionAudioKey: 'q_which_is_pineapple_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 279, word: 'ananas', imageUrl: '/images/279.png', isCorrect: true, audioKey: 'ananas', spokenText: 'pineapple' },
      { id: 170, word: 'karpuz', imageUrl: '/images/170.png', isCorrect: false, audioKey: 'karpuz', spokenText: 'watermelon' },
      { id: 114, word: 'muz', imageUrl: '/images/114.png', isCorrect: false, audioKey: 'muz', spokenText: 'banana' },
      { id: 295, word: 'kavun', imageUrl: '/images/295.png', isCorrect: false, audioKey: 'kavun', spokenText: 'melon' }
    ]
  },
  {
    id: 1111,
    question: 'Which one is the melon?',
    questionAudioKey: 'q_which_is_melon_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 295, word: 'kavun', imageUrl: '/images/295.png', isCorrect: true, audioKey: 'kavun', spokenText: 'melon' },
      { id: 170, word: 'karpuz', imageUrl: '/images/170.png', isCorrect: false, audioKey: 'karpuz', spokenText: 'watermelon' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' },
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: false, audioKey: 'portakal', spokenText: 'orange' }
    ]
  },
  {
    id: 1112,
    question: 'Which one is the peach?',
    questionAudioKey: 'q_which_is_peach_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 333, word: 'şeftali', imageUrl: '/images/333.png', isCorrect: true, audioKey: 'şeftali', spokenText: 'peach' },
      { id: 43, word: 'elma', imageUrl: '/images/43.png', isCorrect: false, audioKey: 'elma', spokenText: 'apple' },
      { id: 365, word: 'armut', imageUrl: '/images/365.png', isCorrect: false, audioKey: 'armut', spokenText: 'pear' },
      { id: 115, word: 'portakal', imageUrl: '/images/115.png', isCorrect: false, audioKey: 'portakal', spokenText: 'orange' }
    ]
  }
];
