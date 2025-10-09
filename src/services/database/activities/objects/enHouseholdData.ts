import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Household Items) in English
// ID range corrected and expanded to 12 rounds.

export const enHouseholdData: ConceptRound[] = [
  {
    id: 1201, // ID'ler 1200'lü aralığa taşındı
    question: 'Which one is the table?',
    questionAudioKey: 'q_which_is_table',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: true, audioKey: 'masa', spokenText: 'table' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: false, audioKey: 'ayna', spokenText: 'mirror' }
    ]
  },
  {
    id: 1202,
    question: 'Which one is the chair?',
    questionAudioKey: 'q_which_is_chair',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: true, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 549, word: 'koltuk', imageUrl: '/images/549.png', isCorrect: false, audioKey: 'koltuk', spokenText: 'sofa' },
      { id: 142, word: 'anahtar', imageUrl: '/images/142.png', isCorrect: false, audioKey: 'anahtar', spokenText: 'key' }
    ]
  },
  {
    id: 1203,
    question: 'Which one is the bed?',
    questionAudioKey: 'q_which_is_bed',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: true, audioKey: 'yatak', spokenText: 'bed' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 137, word: 'yastık', imageUrl: '/images/137.png', isCorrect: false, audioKey: 'yastık', spokenText: 'pillow' }
    ]
  },
  {
    id: 1204,
    question: 'Which one is the mirror?',
    questionAudioKey: 'q_which_is_mirror',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: true, audioKey: 'ayna', spokenText: 'mirror' },
      { id: 118, word: 'saat', imageUrl: '/images/118.png', isCorrect: false, audioKey: 'saat', spokenText: 'clock' },
      { id: 82, word: 'pencere', imageUrl: '/images/82.png', isCorrect: false, audioKey: 'pencere', spokenText: 'window' },
      { id: 142, word: 'anahtar', imageUrl: '/images/142.png', isCorrect: false, audioKey: 'anahtar', spokenText: 'key' }
    ]
  },
  {
    id: 1205,
    question: 'Which one is the key?',
    questionAudioKey: 'q_which_is_key',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 142, word: 'anahtar', imageUrl: '/images/142.png', isCorrect: true, audioKey: 'anahtar', spokenText: 'key' },
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: false, audioKey: 'ayna', spokenText: 'mirror' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'spoon' },
      { id: 137, word: 'yastık', imageUrl: '/images/137.png', isCorrect: false, audioKey: 'yastık', spokenText: 'pillow' }
    ]
  },
  {
    id: 1206,
    question: 'Which one is the pillow?',
    questionAudioKey: 'q_which_is_pillow',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 137, word: 'yastık', imageUrl: '/images/137.png', isCorrect: true, audioKey: 'yastık', spokenText: 'pillow' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 816, word: 'battaniye', imageUrl: '/images/816.png', isCorrect: false, audioKey: 'battaniye', spokenText: 'blanket' },
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: false, audioKey: 'ayna', spokenText: 'mirror' }
    ]
  },
  {
    id: 1207,
    question: 'Which one is the clock?',
    questionAudioKey: 'q_which_is_clock',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 118, word: 'saat', imageUrl: '/images/118.png', isCorrect: true, audioKey: 'saat', spokenText: 'clock' },
      { id: 148, word: 'ayna', imageUrl: '/images/148.png', isCorrect: false, audioKey: 'ayna', spokenText: 'mirror' },
      { id: 884, word: 'bilgisayar', imageUrl: '/images/884.png', isCorrect: false, audioKey: 'bilgisayar', spokenText: 'computer' },
      { id: 251, word: 'buzdolabı', imageUrl: '/images/251.png', isCorrect: false, audioKey: 'buzdolabı', spokenText: 'refrigerator' }
    ]
  },
  {
    id: 1208,
    question: 'Which one is the sofa?',
    questionAudioKey: 'q_which_is_sofa',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 549, word: 'koltuk', imageUrl: '/images/549.png', isCorrect: true, audioKey: 'koltuk', spokenText: 'sofa' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 287, word: 'kitaplık', imageUrl: '/images/287.png', isCorrect: false, audioKey: 'kitaplık', spokenText: 'bookshelf' }
    ]
  },
  {
    id: 1209,
    question: 'Which one is the bookshelf?',
    questionAudioKey: 'q_which_is_bookshelf',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 287, word: 'kitaplık', imageUrl: '/images/287.png', isCorrect: true, audioKey: 'kitaplık', spokenText: 'bookshelf' },
      { id: 339, word: 'elbise dolabı', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'elbise_dolabı', spokenText: 'wardrobe' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 549, word: 'koltuk', imageUrl: '/images/549.png', isCorrect: false, audioKey: 'koltuk', spokenText: 'sofa' }
    ]
  },
  {
    id: 1210,
    question: 'Which one is the wardrobe?',
    questionAudioKey: 'q_which_is_wardrobe',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 339, word: 'elbise dolabı', imageUrl: '/images/339.png', isCorrect: true, audioKey: 'elbise_dolabı', spokenText: 'wardrobe' },
      { id: 287, word: 'kitaplık', imageUrl: '/images/287.png', isCorrect: false, audioKey: 'kitaplık', spokenText: 'bookshelf' },
      { id: 251, word: 'buzdolabı', imageUrl: '/images/251.png', isCorrect: false, audioKey: 'buzdolabı', spokenText: 'refrigerator' },
      { id: 301, word: 'bulaşık makinesi', imageUrl: '/images/301.png', isCorrect: false, audioKey: 'bulaşık_makinesi', spokenText: 'dishwasher' }
    ]
  },
  {
    id: 1211,
    question: 'Which one is the refrigerator?',
    questionAudioKey: 'q_which_is_refrigerator',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 251, word: 'buzdolabı', imageUrl: '/images/251.png', isCorrect: true, audioKey: 'buzdolabı', spokenText: 'refrigerator' },
      { id: 339, word: 'elbise dolabı', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'elbise_dolabı', spokenText: 'wardrobe' },
      { id: 301, word: 'bulaşık makinesi', imageUrl: '/images/301.png', isCorrect: false, audioKey: 'bulaşık_makinesi', spokenText: 'dishwasher' },
      { id: 302, word: 'fırın', imageUrl: '/images/302.png', isCorrect: false, audioKey: 'fırın', spokenText: 'oven' }
    ]
  },
  {
    id: 1212,
    question: 'Which one is the lamp?',
    questionAudioKey: 'q_which_is_lamp',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 575, word: 'lamba', imageUrl: '/images/575.png', isCorrect: true, audioKey: 'lamba', spokenText: 'lamp' },
      { id: 540, word: 'mum', imageUrl: '/images/540.png', isCorrect: false, audioKey: 'mum', spokenText: 'candle' },
      { id: 74, word: 'el feneri', imageUrl: '/images/74.png', isCorrect: false, audioKey: 'el_feneri', spokenText: 'flashlight' },
      { id: 118, word: 'saat', imageUrl: '/images/118.png', isCorrect: false, audioKey: 'saat', spokenText: 'clock' }
    ]
  }
];