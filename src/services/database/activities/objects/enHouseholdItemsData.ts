import { ActivityType, ConceptRound } from '../../../../types';

// Household Items (Ev Eşyaları) için örnek aktiviteler
export const enHouseholdItemsData: ConceptRound[] = [
  {
    id: 2001,
    question: 'Which one is the table?',
    questionAudioKey: 'q_which_is_table',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: true, audioKey: 'masa', spokenText: 'table' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 339, word: 'dolap', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'dolap', spokenText: 'wardrobe' }
    ]
  },
  {
    id: 2002,
    question: 'Which one is the chair?',
    questionAudioKey: 'q_which_is_chair',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: true, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' },
      { id: 339, word: 'dolap', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'dolap', spokenText: 'wardrobe' }
    ]
  },
  {
    id: 2003,
    question: 'Which one is the bed?',
    questionAudioKey: 'q_which_is_bed',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: true, audioKey: 'yatak', spokenText: 'bed' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 339, word: 'dolap', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'dolap', spokenText: 'wardrobe' }
    ]
  },
  {
    id: 2004,
    question: 'Which one is the wardrobe?',
    questionAudioKey: 'q_which_is_wardrobe',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 339, word: 'dolap', imageUrl: '/images/339.png', isCorrect: true, audioKey: 'dolap', spokenText: 'wardrobe' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'table' },
      { id: 319, word: 'sandalye', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'chair' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'bed' }
    ]
  }
];
