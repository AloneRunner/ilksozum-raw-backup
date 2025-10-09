import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Foods) in English
// Expanded to 12 rounds using main visual IDs.

export const enFoodsData: ConceptRound[] = [
  {
    id: 1601,
    question: 'Which one is the pizza?',
    questionAudioKey: 'q_which_is_pizza',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 23, word: 'pizza', imageUrl: '/images/23.png', isCorrect: true, audioKey: 'pizza', spokenText: 'pizza' },
      { id: 366, word: 'sosisli sandviç', imageUrl: '/images/366.png', isCorrect: false, audioKey: 'sosisli_sandviç', spokenText: 'hot dog' },
      { id: 809, word: 'hamburger', imageUrl: '/images/809.png', isCorrect: false, audioKey: 'hamburger', spokenText: 'hamburger' },
      { id: 812, word: 'mantı', imageUrl: '/images/812.png', isCorrect: false, audioKey: 'mantı', spokenText: 'dumplings' }
    ]
  },
  {
    id: 1602,
    question: 'Which one is the ice cream?',
    questionAudioKey: 'q_which_is_ice_cream',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 63, word: 'dondurma', imageUrl: '/images/63.png', isCorrect: true, audioKey: 'dondurma', spokenText: 'ice cream' },
      { id: 801, word: 'süt', imageUrl: '/images/801.png', isCorrect: false, audioKey: 'süt', spokenText: 'milk' },
      { id: 792, word: 'yoğurt', imageUrl: '/images/792.png', isCorrect: false, audioKey: 'yoğurt', spokenText: 'yogurt' },
      { id: 791, word: 'çay', imageUrl: '/images/791.png', isCorrect: false, audioKey: 'çay', spokenText: 'tea' }
    ]
  },
  {
    id: 1603,
    question: 'Which one is the milk?',
    questionAudioKey: 'q_which_is_milk',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 801, word: 'süt', imageUrl: '/images/801.png', isCorrect: true, audioKey: 'süt', spokenText: 'milk' },
      { id: 63, word: 'dondurma', imageUrl: '/images/63.png', isCorrect: false, audioKey: 'dondurma', spokenText: 'ice cream' },
      { id: 112, word: 'ekmek', imageUrl: '/images/112.png', isCorrect: false, audioKey: 'ekmek', spokenText: 'bread' },
      { id: 811, word: 'meyve suyu', imageUrl: '/images/811.png', isCorrect: false, audioKey: 'meyve_suyu', spokenText: 'juice' }
    ]
  },
  {
    id: 1604,
    question: 'Which one is the yogurt?',
    questionAudioKey: 'q_which_is_yogurt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 792, word: 'yoğurt', imageUrl: '/images/792.png', isCorrect: true, audioKey: 'yoğurt', spokenText: 'yogurt' },
      { id: 801, word: 'süt', imageUrl: '/images/801.png', isCorrect: false, audioKey: 'süt', spokenText: 'milk' },
      { id: 63, word: 'dondurma', imageUrl: '/images/63.png', isCorrect: false, audioKey: 'dondurma', spokenText: 'ice cream' },
      { id: 811, word: 'meyve suyu', imageUrl: '/images/811.png', isCorrect: false, audioKey: 'meyve_suyu', spokenText: 'juice' }
    ]
  },
  {
    id: 1605,
    question: 'Which one is the bread?',
    questionAudioKey: 'q_which_is_bread',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 112, word: 'ekmek', imageUrl: '/images/112.png', isCorrect: true, audioKey: 'ekmek', spokenText: 'bread' }, // DÜZELTME: Ana görsel ID 112 kullanıldı.
      { id: 296, word: 'simit', imageUrl: '/images/296.png', isCorrect: false, audioKey: 'simit', spokenText: 'bagel' },
      { id: 23, word: 'pizza', imageUrl: '/images/23.png', isCorrect: false, audioKey: 'pizza', spokenText: 'pizza' },
      { id: 366, word: 'sosisli sandviç', imageUrl: '/images/366.png', isCorrect: false, audioKey: 'sosisli_sandviç', spokenText: 'hot dog' }
    ]
  },
  {
    id: 1606,
    question: 'Which one is the hamburger?',
    questionAudioKey: 'q_which_is_hamburger',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 809, word: 'hamburger', imageUrl: '/images/809.png', isCorrect: true, audioKey: 'hamburger', spokenText: 'hamburger' },
      { id: 366, word: 'sosisli sandviç', imageUrl: '/images/366.png', isCorrect: false, audioKey: 'sosisli_sandviç', spokenText: 'hot dog' },
      { id: 23, word: 'pizza', imageUrl: '/images/23.png', isCorrect: false, audioKey: 'pizza', spokenText: 'pizza' },
      { id: 63, word: 'dondurma', imageUrl: '/images/63.png', isCorrect: false, audioKey: 'dondurma', spokenText: 'ice cream' }
    ]
  },
  {
    id: 1607,
    question: 'Which one is the juice?',
    questionAudioKey: 'q_which_is_juice',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 811, word: 'meyve suyu', imageUrl: '/images/811.png', isCorrect: true, audioKey: 'meyve_suyu', spokenText: 'juice' },
      { id: 801, word: 'süt', imageUrl: '/images/801.png', isCorrect: false, audioKey: 'süt', spokenText: 'milk' },
      { id: 793, word: 'gazoz', imageUrl: '/images/793.png', isCorrect: false, audioKey: 'gazoz', spokenText: 'soda' },
      { id: 791, word: 'çay', imageUrl: '/images/791.png', isCorrect: false, audioKey: 'çay', spokenText: 'tea' }
    ]
  },
  {
    id: 1608,
    question: 'Which one are the chips?',
    questionAudioKey: 'q_which_is_chips',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 804, word: 'cips', imageUrl: '/images/804.png', isCorrect: true, audioKey: 'cips', spokenText: 'chips' },
      { id: 805, word: 'kraker', imageUrl: '/images/805.png', isCorrect: false, audioKey: 'kraker', spokenText: 'crackers' },
      { id: 806, word: 'jelibon', imageUrl: '/images/806.png', isCorrect: false, audioKey: 'jelibon', spokenText: 'gummies' }, // Gummy bears -> gummies (daha genel)
      { id: 112, word: 'ekmek', imageUrl: '/images/112.png', isCorrect: false, audioKey: 'ekmek', spokenText: 'bread' }
    ]
  },
  {
    id: 1609,
    question: 'Which one is the cheese?',
    questionAudioKey: 'q_which_is_cheese',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 50, word: 'peynir', imageUrl: '/images/50.png', isCorrect: true, audioKey: 'peynir', spokenText: 'cheese' },
      { id: 810, word: 'tereyağı', imageUrl: '/images/810.png', isCorrect: false, audioKey: 'tereyağı', spokenText: 'butter' },
      { id: 801, word: 'süt', imageUrl: '/images/801.png', isCorrect: false, audioKey: 'süt', spokenText: 'milk' },
      { id: 792, word: 'yoğurt', imageUrl: '/images/792.png', isCorrect: false, audioKey: 'yoğurt', spokenText: 'yogurt' }
    ]
  },
  {
    id: 1610,
    question: 'Which one is the pasta?',
    questionAudioKey: 'q_which_is_pasta',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 267, word: 'makarna', imageUrl: '/images/267.png', isCorrect: true, audioKey: 'makarna', spokenText: 'pasta' },
      { id: 812, word: 'mantı', imageUrl: '/images/812.png', isCorrect: false, audioKey: 'mantı', spokenText: 'dumplings' },
      { id: 808, word: 'köfte', imageUrl: '/images/808.png', isCorrect: false, audioKey: 'köfte', spokenText: 'meatballs' },
      { id: 218, word: 'pirinç', imageUrl: '/images/218.png', isCorrect: false, audioKey: 'pirinç', spokenText: 'rice' }
    ]
  },
  {
    id: 1611,
    question: 'Which one is the salad?',
    questionAudioKey: 'q_which_is_salad',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 332, word: 'salata', imageUrl: '/images/332.png', isCorrect: true, audioKey: 'salata', spokenText: 'salad' },
      { id: 266, word: 'çorba', imageUrl: '/images/266.png', isCorrect: false, audioKey: 'çorba', spokenText: 'soup' },
      { id: 789, word: 'sulu yemek', imageUrl: '/images/789.png', isCorrect: false, audioKey: 'sulu_yemek', spokenText: 'stew' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' }
    ]
  },
  {
    id: 1612,
    question: 'Which one is the bagel?',
    questionAudioKey: 'q_which_is_bagel',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 296, word: 'simit', imageUrl: '/images/296.png', isCorrect: true, audioKey: 'simit', spokenText: 'bagel' },
      { id: 112, word: 'ekmek', imageUrl: '/images/112.png', isCorrect: false, audioKey: 'ekmek', spokenText: 'bread' },
      { id: 330, word: 'bisküvi', imageUrl: '/images/330.png', isCorrect: false, audioKey: 'bisküvi', spokenText: 'cookie' },
      { id: 805, word: 'kraker', imageUrl: '/images/805.png', isCorrect: false, audioKey: 'kraker', spokenText: 'cracker' }
    ]
  }
];