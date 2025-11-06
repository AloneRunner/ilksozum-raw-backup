import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Vegetables) in English
// ID range corrected to 1400s and expanded to 12 rounds.

export const enVegetablesData: ConceptRound[] = [
  {
    id: 1401,
    question: 'Which one is the tomato?',
    questionAudioKey: 'q_which_is_tomato_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 128, word: 'domates', imageUrl: '/images/128.png', isCorrect: true, audioKey: 'domates', spokenText: 'tomato' },
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: false, audioKey: 'salatalık', spokenText: 'cucumber' },
      { id: 227, word: 'biber', imageUrl: '/images/227.png', isCorrect: false, audioKey: 'biber', spokenText: 'pepper' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' }
    ]
  },
  {
    id: 1402,
    question: 'Which one is the cucumber?',
    questionAudioKey: 'q_which_is_cucumber',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: true, audioKey: 'salatalık', spokenText: 'cucumber' },
      { id: 280, word: 'patlıcan', imageUrl: '/images/280.png', isCorrect: false, audioKey: 'patlıcan', spokenText: 'eggplant' },
      { id: 75, word: 'soğan', imageUrl: '/images/75.png', isCorrect: false, audioKey: 'soğan', spokenText: 'onion' },
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: false, audioKey: 'patates', spokenText: 'potato' }
    ]
  },
  {
    id: 1403,
    question: 'Which one is the potato?',
    questionAudioKey: 'q_which_is_potato_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: true, audioKey: 'patates', spokenText: 'potato' },
      { id: 98, word: 'havuç', imageUrl: '/images/98.png', isCorrect: false, audioKey: 'havuç', spokenText: 'carrot' },
      { id: 227, word: 'biber', imageUrl: '/images/227.png', isCorrect: false, audioKey: 'biber', spokenText: 'pepper' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' }
    ]
  },
  {
    id: 1404,
    question: 'Which one is the onion?',
    questionAudioKey: 'q_which_is_onion_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 75, word: 'soğan', imageUrl: '/images/75.png', isCorrect: true, audioKey: 'soğan', spokenText: 'onion' },
      { id: 128, word: 'domates', imageUrl: '/images/128.png', isCorrect: false, audioKey: 'domates', spokenText: 'tomato' },
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: false, audioKey: 'patates', spokenText: 'potato' },
      { id: 334, word: 'lahana', imageUrl: '/images/334.png', isCorrect: false, audioKey: 'lahana', spokenText: 'cabbage' }
    ]
  },
  {
    id: 1405,
    question: 'Which one is the pepper?',
    questionAudioKey: 'q_which_is_pepper_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 227, word: 'biber', imageUrl: '/images/227.png', isCorrect: true, audioKey: 'biber', spokenText: 'pepper' },
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: false, audioKey: 'salatalık', spokenText: 'cucumber' },
      { id: 280, word: 'patlıcan', imageUrl: '/images/280.png', isCorrect: false, audioKey: 'patlıcan', spokenText: 'eggplant' },
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: false, audioKey: 'patates', spokenText: 'potato' }
    ]
  },
  {
    id: 1406,
    question: 'Which one is the lettuce?',
    questionAudioKey: 'q_which_is_lettuce_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: true, audioKey: 'marul', spokenText: 'lettuce' },
      { id: 75, word: 'soğan', imageUrl: '/images/75.png', isCorrect: false, audioKey: 'soğan', spokenText: 'onion' },
      { id: 420, word: 'ıspanak', imageUrl: '/images/420.png', isCorrect: false, audioKey: 'ıspanak', spokenText: 'spinach' },
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: false, audioKey: 'salatalık', spokenText: 'cucumber' }
    ]
  },
  {
    id: 1407,
    question: 'Which one is the carrot?',
    questionAudioKey: 'q_which_is_carrot_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 98, word: 'havuç', imageUrl: '/images/98.png', isCorrect: true, audioKey: 'havuç', spokenText: 'carrot' },
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: false, audioKey: 'patates', spokenText: 'potato' },
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: false, audioKey: 'salatalık', spokenText: 'cucumber' },
      { id: 75, word: 'soğan', imageUrl: '/images/75.png', isCorrect: false, audioKey: 'soğan', spokenText: 'onion' }
    ]
  },
  {
    id: 1408,
    question: 'Which one is the eggplant?',
    questionAudioKey: 'q_which_is_eggplant_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 280, word: 'patlıcan', imageUrl: '/images/280.png', isCorrect: true, audioKey: 'patlıcan', spokenText: 'eggplant' },
      { id: 116, word: 'salatalık', imageUrl: '/images/116.png', isCorrect: false, audioKey: 'salatalık', spokenText: 'cucumber' },
      { id: 334, word: 'lahana', imageUrl: '/images/334.png', isCorrect: false, audioKey: 'lahana', spokenText: 'cabbage' },
      { id: 803, word: 'kabak', imageUrl: '/images/803.png', isCorrect: false, audioKey: 'kabak', spokenText: 'pumpkin' }
    ]
  },
  {
    id: 1409,
    question: 'Which one is the corn?',
    questionAudioKey: 'q_which_is_corn_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 853, word: 'mısır', imageUrl: '/images/853.png', isCorrect: true, audioKey: 'mısır', spokenText: 'corn' },
      { id: 802, word: 'patates', imageUrl: '/images/802.png', isCorrect: false, audioKey: 'patates', spokenText: 'potato' },
      { id: 98, word: 'havuç', imageUrl: '/images/98.png', isCorrect: false, audioKey: 'havuç', spokenText: 'carrot' },
      { id: 75, word: 'soğan', imageUrl: '/images/75.png', isCorrect: false, audioKey: 'soğan', spokenText: 'onion' }
    ]
  },
  {
    id: 1410,
    question: 'Which one is the broccoli?',
    questionAudioKey: 'q_which_is_broccoli_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 311, word: 'brokoli', imageUrl: '/images/311.png', isCorrect: true, audioKey: 'brokoli', spokenText: 'broccoli' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' },
      { id: 648, word: 'karnabahar', imageUrl: '/images/648.png', isCorrect: false, audioKey: 'karnabahar', spokenText: 'cauliflower' },
      { id: 420, word: 'ıspanak', imageUrl: '/images/420.png', isCorrect: false, audioKey: 'ıspanak', spokenText: 'spinach' }
    ]
  },
  {
    id: 1411,
    question: 'Which one is the cauliflower?',
    questionAudioKey: 'q_which_is_cauliflower_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 648, word: 'karnabahar', imageUrl: '/images/648.png', isCorrect: true, audioKey: 'karnabahar', spokenText: 'cauliflower' },
      { id: 311, word: 'brokoli', imageUrl: '/images/311.png', isCorrect: false, audioKey: 'brokoli', spokenText: 'broccoli' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' },
      { id: 334, word: 'lahana', imageUrl: '/images/334.png', isCorrect: false, audioKey: 'lahana', spokenText: 'cabbage' }
    ]
  },
  {
    id: 1412,
    question: 'Which one is the cabbage?',
    questionAudioKey: 'q_which_is_cabbage_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 334, word: 'lahana', imageUrl: '/images/334.png', isCorrect: true, audioKey: 'lahana', spokenText: 'cabbage' },
      { id: 129, word: 'marul', imageUrl: '/images/129.png', isCorrect: false, audioKey: 'marul', spokenText: 'lettuce' },
      { id: 648, word: 'karnabahar', imageUrl: '/images/648.png', isCorrect: false, audioKey: 'karnabahar', spokenText: 'cauliflower' },
      { id: 420, word: 'ıspanak', imageUrl: '/images/420.png', isCorrect: false, audioKey: 'ıspanak', spokenText: 'spinach' }
    ]
  }
];