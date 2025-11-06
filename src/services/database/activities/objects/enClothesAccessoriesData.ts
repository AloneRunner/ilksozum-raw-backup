import { ActivityType, ConceptRound } from '../../../../types';

// Giysiler ve Aksesuarlar için örnek aktiviteler
export const enClothesAccessoriesData: ConceptRound[] = [
  {
    id: 2301,
    question: 'Which one is the shirt?',
    questionAudioKey: 'q_which_is_shirt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: true, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'shoes' }
    ]
  },
  {
    id: 2302,
    question: 'Which one is the pants?',
    questionAudioKey: 'q_which_is_pants',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: true, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'shoes' }
    ]
  },
  {
    id: 2303,
    question: 'Which one is the t-shirt?',
    questionAudioKey: 'q_which_is_tshirt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: true, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'shoes' }
    ]
  },
  {
    id: 2304,
    question: 'Which one is the shoes?',
    questionAudioKey: 'q_which_is_shoes',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: true, audioKey: 'ayakkabı', spokenText: 'shoes' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' }
    ]
  }
];
