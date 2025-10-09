import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Clothes) in English
// Corrected an incorrect ID and expanded to 12 rounds.

export const enClothesData: ConceptRound[] = [
  {
    id: 1301,
    question: 'Which one are the socks?',
    questionAudioKey: 'q_which_are_socks',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 147, word: 'çorap', imageUrl: '/images/147.png', isCorrect: true, audioKey: 'çorap', spokenText: 'socks' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'shoes' }
    ]
  },
  {
    id: 1302,
    question: 'Which one is the shirt?',
    questionAudioKey: 'q_which_is_shirt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: true, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 268, word: 'elbise', imageUrl: '/images/268.png', isCorrect: false, audioKey: 'elbise', spokenText: 'dress' }, // HATA DÜZELTİLDİ: ID 31 -> 268
      { id: 147, word: 'çorap', imageUrl: '/images/147.png', isCorrect: false, audioKey: 'çorap', spokenText: 'socks' }
    ]
  },
  {
    id: 1303,
    question: 'Which one are the shoes?',
    questionAudioKey: 'q_which_are_shoes',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: true, audioKey: 'ayakkabı', spokenText: 'shoes' },
      { id: 848, word: 'sandalet', imageUrl: '/images/848.png', isCorrect: false, audioKey: 'sandalet', spokenText: 'sandals' },
      { id: 308, word: 'terlik', imageUrl: '/images/308.png', isCorrect: false, audioKey: 'terlik', spokenText: 'slippers' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' }
    ]
  },
  {
    id: 1304,
    question: 'Which one is the t-shirt?',
    questionAudioKey: 'q_which_is_tshirt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: true, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 269, word: 'etek', imageUrl: '/images/269.png', isCorrect: false, audioKey: 'etek', spokenText: 'skirt' }
    ]
  },
  {
    id: 1305,
    question: 'Which one are the pants?',
    questionAudioKey: 'q_which_are_pants',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: true, audioKey: 'pantolon', spokenText: 'pants' },
      { id: 80, word: 'şort', imageUrl: '/images/80.png', isCorrect: false, audioKey: 'şort', spokenText: 'shorts' },
      { id: 270, word: 'ceket', imageUrl: '/images/270.png', isCorrect: false, audioKey: 'ceket', spokenText: 'jacket' },
      { id: 59, word: 'ayakkabı', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'shoes' }
    ]
  },
  {
    id: 1306,
    question: 'Which one is the dress?',
    questionAudioKey: 'q_which_is_dress',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 268, word: 'elbise', imageUrl: '/images/268.png', isCorrect: true, audioKey: 'elbise', spokenText: 'dress' },
      { id: 269, word: 'etek', imageUrl: '/images/269.png', isCorrect: false, audioKey: 'etek', spokenText: 'skirt' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 54, word: 'pijama', imageUrl: '/images/54.png', isCorrect: false, audioKey: 'pijama', spokenText: 'pajamas' }
    ]
  },
  {
    id: 1307,
    question: 'Which one is the skirt?',
    questionAudioKey: 'q_which_is_skirt',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 269, word: 'etek', imageUrl: '/images/269.png', isCorrect: true, audioKey: 'etek', spokenText: 'skirt' },
      { id: 268, word: 'elbise', imageUrl: '/images/268.png', isCorrect: false, audioKey: 'elbise', spokenText: 'dress' },
      { id: 80, word: 'şort', imageUrl: '/images/80.png', isCorrect: false, audioKey: 'şort', spokenText: 'shorts' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' }
    ]
  },
  {
    id: 1308,
    question: 'Which one is the hat?',
    questionAudioKey: 'q_which_is_hat',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 111, word: 'şapka', imageUrl: '/images/111.png', isCorrect: true, audioKey: 'şapka', spokenText: 'hat' },
      { id: 336, word: 'bere', imageUrl: '/images/336.png', isCorrect: false, audioKey: 'bere', spokenText: 'beanie' },
      { id: 271, word: 'atkı', imageUrl: '/images/271.png', isCorrect: false, audioKey: 'atkı', spokenText: 'scarf' },
      { id: 272, word: 'eldiven', imageUrl: '/images/272.png', isCorrect: false, audioKey: 'eldiven', spokenText: 'gloves' }
    ]
  },
  {
    id: 1309,
    question: 'Which one is the scarf?',
    questionAudioKey: 'q_which_is_scarf',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 271, word: 'atkı', imageUrl: '/images/271.png', isCorrect: true, audioKey: 'atkı', spokenText: 'scarf' },
      { id: 111, word: 'şapka', imageUrl: '/images/111.png', isCorrect: false, audioKey: 'şapka', spokenText: 'hat' },
      { id: 272, word: 'eldiven', imageUrl: '/images/272.png', isCorrect: false, audioKey: 'eldiven', spokenText: 'gloves' },
      { id: 147, word: 'çorap', imageUrl: '/images/147.png', isCorrect: false, audioKey: 'çorap', spokenText: 'socks' }
    ]
  },
  {
    id: 1310,
    question: 'Which one are the gloves?',
    questionAudioKey: 'q_which_are_gloves',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 272, word: 'eldiven', imageUrl: '/images/272.png', isCorrect: true, audioKey: 'eldiven', spokenText: 'gloves' },
      { id: 271, word: 'atkı', imageUrl: '/images/271.png', isCorrect: false, audioKey: 'atkı', spokenText: 'scarf' },
      { id: 336, word: 'bere', imageUrl: '/images/336.png', isCorrect: false, audioKey: 'bere', spokenText: 'beanie' },
      { id: 147, word: 'çorap', imageUrl: '/images/147.png', isCorrect: false, audioKey: 'çorap', spokenText: 'socks' }
    ]
  },
  {
    id: 1311,
    question: 'Which one are the pajamas?',
    questionAudioKey: 'q_which_are_pajamas',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 54, word: 'pijama', imageUrl: '/images/54.png', isCorrect: true, audioKey: 'pijama', spokenText: 'pajamas' },
      { id: 268, word: 'elbise', imageUrl: '/images/268.png', isCorrect: false, audioKey: 'elbise', spokenText: 'dress' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 79, word: 'pantolon', imageUrl: '/images/79.png', isCorrect: false, audioKey: 'pantolon', spokenText: 'pants' }
    ]
  },
  {
    id: 1312,
    question: 'Which one is the jacket?',
    questionAudioKey: 'q_which_is_jacket',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 270, word: 'ceket', imageUrl: '/images/270.png', isCorrect: true, audioKey: 'ceket', spokenText: 'jacket' },
      { id: 255, word: 'gömlek', imageUrl: '/images/255.png', isCorrect: false, audioKey: 'gömlek', spokenText: 'shirt' },
      { id: 13, word: 'tişört', imageUrl: '/images/13.png', isCorrect: false, audioKey: 'tişört', spokenText: 't-shirt' },
      { id: 335, word: 'kazak', imageUrl: '/images/335.png', isCorrect: false, audioKey: 'kazak', spokenText: 'sweater' }
    ]
  }
];