import { ActivityType, ConceptRound } from '../../../../types';

// Okul ve Ofis Eşyaları için örnek aktiviteler
export const enSchoolOfficeData: ConceptRound[] = [
  {
    id: 2101,
    question: 'Which one is the pencil?',
    questionAudioKey: 'q_which_is_pencil',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: true, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' }
    ]
  },
  {
    id: 2102,
    question: 'Which one is the book?',
    questionAudioKey: 'q_which_is_book',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: true, audioKey: 'kitap', spokenText: 'book' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' }
    ]
  },
  {
    id: 2103,
    question: 'Which one is the eraser?',
    questionAudioKey: 'q_which_is_eraser',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 902, word: 'silgi', imageUrl: '/images/902.png', isCorrect: true, audioKey: 'silgi', spokenText: 'eraser' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: false, audioKey: 'bardak', spokenText: 'glass' }
    ]
  },
  {
    id: 2104,
    question: 'Which one is the notebook?',
    questionAudioKey: 'q_which_is_notebook_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 903, word: 'defter', imageUrl: '/images/903.png', isCorrect: true, audioKey: 'defter', spokenText: 'notebook' },
      { id: 37, word: 'kitap', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'book' },
      { id: 121, word: 'kalem', imageUrl: '/images/121.png', isCorrect: false, audioKey: 'kalem', spokenText: 'pencil' },
      { id: 902, word: 'silgi', imageUrl: '/images/902.png', isCorrect: false, audioKey: 'silgi', spokenText: 'eraser' }
    ]
  }
];
