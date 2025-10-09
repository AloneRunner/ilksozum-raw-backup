import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Entertainment) in English
// ID range starts from 1921 as requested and expanded to 10 rounds.

export const enEntertainmentData: ConceptRound[] = [
  {
    id: 1921,
    question: 'Which one is the cinema?',
    questionAudioKey: 'q_which_is_cinema',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: true, audioKey: 'sinema_salonu', spokenText: 'cinema' },
      { id: 673, word: 'disko topu', imageUrl: '/images/673.png', isCorrect: false, audioKey: 'disko_topu', spokenText: 'disco ball' }, // 'ayna küre' -> 'disko topu'
      { id: 510, word: 'satranç', imageUrl: '/images/510.png', isCorrect: false, audioKey: 'satranç_taşları', spokenText: 'chess' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' }
    ]
  },
  {
    id: 1922,
    question: 'Which one is the book?',
    questionAudioKey: 'q_which_is_book',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: true, audioKey: 'kitap', spokenText: 'book' },
      { id: 247, word: 'dergi', imageUrl: '/images/247.png', isCorrect: false, audioKey: 'dergi', spokenText: 'magazine' },
      { id: 246, word: 'gazete', imageUrl: '/images/246.png', isCorrect: false, audioKey: 'gazete', spokenText: 'newspaper' },
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: false, audioKey: 'defter', spokenText: 'notebook' }
    ]
  },
  {
    id: 1923,
    question: 'Which one is the guitar?',
    questionAudioKey: 'q_which_is_guitar',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: true, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: false, audioKey: 'keman', spokenText: 'violin' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' },
      { id: 364, word: 'saksafon', imageUrl: '/images/364.png', isCorrect: false, audioKey: 'saksafon', spokenText: 'saxophone' }
    ]
  },
  {
    id: 1924,
    question: 'Which one is the television?',
    questionAudioKey: 'q_which_is_television',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 892, word: 'akıllı televizyon', imageUrl: '/images/892.png', isCorrect: true, audioKey: 'akıllı_televizyon', spokenText: 'television' },
      { id: 436, word: 'radyo', imageUrl: '/images/436.png', isCorrect: false, audioKey: 'radyo', spokenText: 'radio' },
      { id: 884, word: 'bilgisayar', imageUrl: '/images/884.png', isCorrect: false, audioKey: 'bilgisayar', spokenText: 'computer' },
      { id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: false, audioKey: 'sinema_salonu', spokenText: 'cinema' }
    ]
  },
  {
    id: 1925,
    question: 'Which one is the radio?',
    questionAudioKey: 'q_which_is_radio',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 436, word: 'radyo', imageUrl: '/images/436.png', isCorrect: true, audioKey: 'radyo', spokenText: 'radio' },
      { id: 892, word: 'akıllı televizyon', imageUrl: '/images/892.png', isCorrect: false, audioKey: 'akıllı_televizyon', spokenText: 'television' },
      { id: 355, word: 'kulaklık', imageUrl: '/images/355.png', isCorrect: false, audioKey: 'kulaklık', spokenText: 'headphones' },
      { id: 182, word: 'mikrofon', imageUrl: '/images/182.png', isCorrect: false, audioKey: 'mikrofon', spokenText: 'microphone' }
    ]
  },
  {
    id: 1926,
    question: 'Which one is the drum?',
    questionAudioKey: 'q_which_is_drum',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: true, audioKey: 'davul', spokenText: 'drum' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 429, word: 'tef', imageUrl: '/images/429.png', isCorrect: false, audioKey: 'tef', spokenText: 'tambourine' },
      { id: 428, word: 'zil', imageUrl: '/images/428.png', isCorrect: false, audioKey: 'zil', spokenText: 'cymbals' }
    ]
  },
  {
    id: 1927,
    question: 'Which one is chess?',
    questionAudioKey: 'q_which_is_chess',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 510, word: 'satranç', imageUrl: '/images/510.png', isCorrect: true, audioKey: 'satranç_taşları', spokenText: 'chess' },
      { id: 480, word: 'yapboz', imageUrl: '/images/480.png', isCorrect: false, audioKey: 'yapboz', spokenText: 'puzzle' },
      { id: 762, word: 'misket', imageUrl: '/images/762.png', isCorrect: false, audioKey: 'misket', spokenText: 'marble' },
      { id: 156, word: 'top', imageUrl: '/images/156.png', isCorrect: false, audioKey: 'top', spokenText: 'ball' }
    ]
  },
  {
    id: 1928,
    question: 'Which one is the kite?',
    questionAudioKey: 'q_which_is_kite',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 135, word: 'uçurtma', imageUrl: '/images/135.png', isCorrect: true, audioKey: 'uçurtma', spokenText: 'kite' },
      { id: 130, word: 'balon', imageUrl: '/images/130.png', isCorrect: false, audioKey: 'balon', spokenText: 'balloon' },
      { id: 156, word: 'top', imageUrl: '/images/156.png', isCorrect: false, audioKey: 'top', spokenText: 'ball' },
      { id: 109, word: 'oyuncak bebek', imageUrl: '/images/109.png', isCorrect: false, audioKey: 'oyuncak bebek', spokenText: 'doll' }
    ]
  },
  {
    id: 1929,
    question: 'Which one is the violin?',
    questionAudioKey: 'q_which_is_violin',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 208, word: 'keman', imageUrl: '/images/208.png', isCorrect: true, audioKey: 'keman', spokenText: 'violin' },
      { id: 180, word: 'gitar', imageUrl: '/images/180.png', isCorrect: false, audioKey: 'gitar', spokenText: 'guitar' },
      { id: 328, word: 'flüt', imageUrl: '/images/328.png', isCorrect: false, audioKey: 'flüt', spokenText: 'flute' },
      { id: 72, word: 'davul', imageUrl: '/images/72.png', isCorrect: false, audioKey: 'davul', spokenText: 'drum' }
    ]
  },
  {
    id: 1930,
    question: 'Which one is the magazine?',
    questionAudioKey: 'q_which_is_magazine',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 247, word: 'dergi', imageUrl: '/images/247.png', isCorrect: true, audioKey: 'dergi', spokenText: 'magazine' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 246, word: 'gazete', imageUrl: '/images/246.png', isCorrect: false, audioKey: 'gazete', spokenText: 'newspaper' },
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: false, audioKey: 'defter', spokenText: 'notebook' }
    ]
  }
];