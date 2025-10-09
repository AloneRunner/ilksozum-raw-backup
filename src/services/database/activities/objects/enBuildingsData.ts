import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Buildings) in English
// Expanded to 9 rounds. ID range: 1861+ for Buildings.

export const enBuildingsData: ConceptRound[] = [
  {
    id: 1861,
    question: 'Which one is the hospital?',
    questionAudioKey: 'q_which_is_hospital',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: true, audioKey: 'hastane', spokenText: 'hospital' },
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: false, audioKey: 'ev', spokenText: 'house' },
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' },
      { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: false, audioKey: 'restoran', spokenText: 'restaurant' }
    ]
  },
  {
    id: 1862,
    question: 'Which one is the school?',
    questionAudioKey: 'q_which_is_school',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: true, audioKey: 'okul', spokenText: 'school' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hospital' },
      { id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: false, audioKey: 'sinema_salonu', spokenText: 'cinema' },
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: false, audioKey: 'ev', spokenText: 'house' }
    ]
  },
  {
    id: 1863,
    question: 'Which one is the house?',
    questionAudioKey: 'q_which_is_house',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: true, audioKey: 'ev', spokenText: 'house' },
      { id: 612, word: 'gökdelen', imageUrl: '/images/612.png', isCorrect: false, audioKey: 'gökdelen', spokenText: 'skyscraper' },
      { id: 212, word: 'kale', imageUrl: '/images/212.png', isCorrect: false, audioKey: 'kale', spokenText: 'castle' },
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' }
    ]
  },
  {
    id: 1864,
    question: 'Which one is the castle?',
    questionAudioKey: 'q_which_is_castle',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 212, word: 'kale', imageUrl: '/images/212.png', isCorrect: true, audioKey: 'kale', spokenText: 'castle' },
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: false, audioKey: 'ev', spokenText: 'house' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hospital' },
      { id: 612, word: 'gökdelen', imageUrl: '/images/612.png', isCorrect: false, audioKey: 'gökdelen', spokenText: 'skyscraper' }
    ]
  },
  {
    id: 1865,
    question: 'Which one is the skyscraper?',
    questionAudioKey: 'q_which_is_skyscraper',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 612, word: 'gökdelen', imageUrl: '/images/612.png', isCorrect: true, audioKey: 'gökdelen', spokenText: 'skyscraper' },
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: false, audioKey: 'ev', spokenText: 'house' },
      { id: 534, word: 'kuş evi', imageUrl: '/images/534.png', isCorrect: false, audioKey: 'kuş_evi', spokenText: 'birdhouse' },
      { id: 212, word: 'kale', imageUrl: '/images/212.png', isCorrect: false, audioKey: 'kale', spokenText: 'castle' }
    ]
  },
  {
    id: 1866,
    question: 'Which one is the restaurant?',
    questionAudioKey: 'q_which_is_restaurant',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: true, audioKey: 'restoran', spokenText: 'restaurant' },
      { id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: false, audioKey: 'sinema_salonu', spokenText: 'cinema' },
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hospital' }
    ]
  },
  {
    id: 1867,
    question: 'Which one is the cinema?',
    questionAudioKey: 'q_which_is_cinema',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: true, audioKey: 'sinema_salonu', spokenText: 'cinema' },
      { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: false, audioKey: 'restoran', spokenText: 'restaurant' },
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' },
      { id: 857, word: 'alışveriş merkezi', imageUrl: '/images/857.png', isCorrect: false, audioKey: 'alışveriş_merkezi', spokenText: 'shopping mall' }
    ]
  },
  {
    id: 1868,
    question: 'Which one is the mosque?',
    questionAudioKey: 'q_which_is_mosque',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 841, word: 'cami', imageUrl: '/images/841.png', isCorrect: true, audioKey: 'cami', spokenText: 'mosque' },
      { id: 212, word: 'kale', imageUrl: '/images/212.png', isCorrect: false, audioKey: 'kale', spokenText: 'castle' },
      { id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' },
      { id: 533, word: 'ev', imageUrl: '/images/533.png', isCorrect: false, audioKey: 'ev', spokenText: 'house' }
    ]
  }
	,
	{
		id: 1869,
		question: 'Which one is the shopping mall?',
		questionAudioKey: 'q_which_is_shopping_mall',
		activityType: ActivityType.ObjectRecognition,
		options: [
			{ id: 857, word: 'alışveriş merkezi', imageUrl: '/images/857.png', isCorrect: true, audioKey: 'alışveriş_merkezi', spokenText: 'shopping mall' },
			{ id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: false, audioKey: 'restoran', spokenText: 'restaurant' },
			{ id: 881, word: 'sinema salonu', imageUrl: '/images/881.png', isCorrect: false, audioKey: 'sinema_salonu', spokenText: 'cinema' },
			{ id: 497, word: 'okul', imageUrl: '/images/497.png', isCorrect: false, audioKey: 'okul', spokenText: 'school' }
		]
	}
];