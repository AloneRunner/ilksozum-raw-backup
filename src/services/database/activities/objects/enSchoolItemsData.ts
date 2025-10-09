import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (School Items) in English
export const enSchoolItemsData: ConceptRound[] = [
  {
    id: 1701, // unique range to avoid collisions
    question: 'Which one is the book?',
    questionAudioKey: 'q_which_is_book',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: true, audioKey: 'kitap', spokenText: 'book' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: false, audioKey: 'silgi', spokenText: 'eraser' },
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: false, audioKey: 'cetvel', spokenText: 'ruler' }
    ]
  },
  {
    id: 1702,
    question: 'Which one is the pencil?',
    questionAudioKey: 'q_which_is_pencil',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: true, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 372, word: 'makas', imageUrl: '/images/372.png', isCorrect: false, audioKey: 'makas', spokenText: 'scissors' },
      { id: 849, word: 'yapıştırıcı', imageUrl: '/images/849.png', isCorrect: false, audioKey: 'yapıştırıcı', spokenText: 'glue' }
    ]
  },
  {
    id: 1703,
    question: 'Which one is the eraser?',
    questionAudioKey: 'q_which_is_eraser',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: true, audioKey: 'silgi', spokenText: 'eraser' },
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: false, audioKey: 'cetvel', spokenText: 'ruler' },
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: false, audioKey: 'defter', spokenText: 'notebook' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' }
    ]
  },
  {
    id: 1704,
    question: 'Which one is the ruler?',
    questionAudioKey: 'q_which_is_ruler',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: true, audioKey: 'cetvel', spokenText: 'ruler' },
      { id: 207, word: 'çanta', imageUrl: '/images/207.png', isCorrect: false, audioKey: 'çanta', spokenText: 'backpack' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: false, audioKey: 'silgi', spokenText: 'eraser' }
    ]
  },
  {
    id: 1705,
    question: 'Which one is the scissors?',
    questionAudioKey: 'q_which_is_scissors',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 372, word: 'makas', imageUrl: '/images/372.png', isCorrect: true, audioKey: 'makas', spokenText: 'scissors' },
      { id: 849, word: 'yapıştırıcı', imageUrl: '/images/849.png', isCorrect: false, audioKey: 'yapıştırıcı', spokenText: 'glue' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: false, audioKey: 'defter', spokenText: 'notebook' }
    ]
  },
  {
    id: 1706,
    question: 'Which one is the backpack?',
    questionAudioKey: 'q_which_is_backpack',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 207, word: 'çanta', imageUrl: '/images/207.png', isCorrect: true, audioKey: 'çanta', spokenText: 'backpack' },
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: false, audioKey: 'cetvel', spokenText: 'ruler' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 372, word: 'makas', imageUrl: '/images/372.png', isCorrect: false, audioKey: 'makas', spokenText: 'scissors' }
    ]
  },
  {
    id: 1707,
    question: 'Which one is the glue?',
    questionAudioKey: 'q_which_is_glue',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 849, word: 'yapıştırıcı', imageUrl: '/images/849.png', isCorrect: true, audioKey: 'yapıştırıcı', spokenText: 'glue' },
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: false, audioKey: 'silgi', spokenText: 'eraser' },
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: false, audioKey: 'defter', spokenText: 'notebook' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' }
    ]
  },
  {
    id: 1708,
    question: 'Which one is the notebook?',
    questionAudioKey: 'q_which_is_notebook',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 882, word: 'defter', imageUrl: '/images/882.png', isCorrect: true, audioKey: 'defter', spokenText: 'notebook' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: false, audioKey: 'cetvel', spokenText: 'ruler' },
      { id: 207, word: 'çanta', imageUrl: '/images/207.png', isCorrect: false, audioKey: 'çanta', spokenText: 'backpack' }
    ]
  }
];
