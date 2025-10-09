import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Tools) in English
// Expanded to 6 rounds starting from ID 1841.

export const enToolsData: ConceptRound[] = [
  {
    id: 1841,
    question: 'Which one is the hammer?',
    questionAudioKey: 'q_which_is_hammer',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 496, word: 'çekiç', imageUrl: '/images/496.png', isCorrect: true, audioKey: 'çekiç', spokenText: 'hammer' },
      { id: 344, word: 'pense', imageUrl: '/images/344.png', isCorrect: false, audioKey: 'pense', spokenText: 'pliers' },
      { id: 217, word: 'tornavida', imageUrl: '/images/217.png', isCorrect: false, audioKey: 'tornavida', spokenText: 'screwdriver' },
      { id: 306, word: 'çivi', imageUrl: '/images/306.png', isCorrect: false, audioKey: 'çivi', spokenText: 'nail' }
    ]
  },
  {
    id: 1842,
    question: 'Which one are the pliers?',
    questionAudioKey: 'q_which_are_pliers',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 344, word: 'pense', imageUrl: '/images/344.png', isCorrect: true, audioKey: 'pense', spokenText: 'pliers' },
      { id: 496, word: 'çekiç', imageUrl: '/images/496.png', isCorrect: false, audioKey: 'çekiç', spokenText: 'hammer' },
      { id: 217, word: 'tornavida', imageUrl: '/images/217.png', isCorrect: false, audioKey: 'tornavida', spokenText: 'screwdriver' },
      { id: 144, word: 'makas', imageUrl: '/images/144.png', isCorrect: false, audioKey: 'makas', spokenText: 'scissors' }
    ]
  },
  {
    id: 1843,
    question: 'Which one is the screwdriver?',
    questionAudioKey: 'q_which_is_screwdriver',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 217, word: 'tornavida', imageUrl: '/images/217.png', isCorrect: true, audioKey: 'tornavida', spokenText: 'screwdriver' },
      { id: 496, word: 'çekiç', imageUrl: '/images/496.png', isCorrect: false, audioKey: 'çekiç', spokenText: 'hammer' },
      { id: 344, word: 'pense', imageUrl: '/images/344.png', isCorrect: false, audioKey: 'pense', spokenText: 'pliers' },
      { id: 53, word: 'vida', imageUrl: '/images/53.png', isCorrect: false, audioKey: 'vida', spokenText: 'screw' }
    ]
  },
  {
    id: 1844,
    question: 'Which one are the scissors?',
    questionAudioKey: 'q_which_are_scissors',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 144, word: 'makas', imageUrl: '/images/144.png', isCorrect: true, audioKey: 'makas', spokenText: 'scissors' },
      { id: 262, word: 'bıçak', imageUrl: '/images/262.png', isCorrect: false, audioKey: 'bıçak', spokenText: 'knife' },
      { id: 344, word: 'pense', imageUrl: '/images/344.png', isCorrect: false, audioKey: 'pense', spokenText: 'pliers' },
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: false, audioKey: 'çatal', spokenText: 'fork' }
    ]
  },
  {
    id: 1845,
    question: 'Which one is the nail?',
    questionAudioKey: 'q_which_is_nail',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 306, word: 'çivi', imageUrl: '/images/306.png', isCorrect: true, audioKey: 'çivi', spokenText: 'nail' },
      { id: 53, word: 'vida', imageUrl: '/images/53.png', isCorrect: false, audioKey: 'vida', spokenText: 'screw' },
      { id: 496, word: 'çekiç', imageUrl: '/images/496.png', isCorrect: false, audioKey: 'çekiç', spokenText: 'hammer' },
      { id: 217, word: 'tornavida', imageUrl: '/images/217.png', isCorrect: false, audioKey: 'tornavida', spokenText: 'screwdriver' }
    ]
  },
  {
    id: 1846,
    question: 'Which one is the screw?',
    questionAudioKey: 'q_which_is_screw',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 53, word: 'vida', imageUrl: '/images/53.png', isCorrect: true, audioKey: 'vida', spokenText: 'screw' },
      { id: 306, word: 'çivi', imageUrl: '/images/306.png', isCorrect: false, audioKey: 'çivi', spokenText: 'nail' },
      { id: 217, word: 'tornavida', imageUrl: '/images/217.png', isCorrect: false, audioKey: 'tornavida', spokenText: 'screwdriver' },
      { id: 344, word: 'pense', imageUrl: '/images/344.png', isCorrect: false, audioKey: 'pense', spokenText: 'pliers' }
    ]
  }
];