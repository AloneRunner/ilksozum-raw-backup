import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Natural Events) in English
// Expanded to 5 rounds starting from ID 1821.

export const enNaturalEventsData: ConceptRound[] = [
  {
    id: 1821,
    question: 'Which one is the rainbow?',
    questionAudioKey: 'q_which_is_rainbow',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 159, word: 'gökkuşağı', imageUrl: '/images/159.png', isCorrect: true, audioKey: 'gökkuşağı', spokenText: 'rainbow' },
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'rain' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'snow' },
      { id: 407, word: 'şimşek', imageUrl: '/images/407.png', isCorrect: false, audioKey: 'şimşek', spokenText: 'lightning' }
    ]
  },
  {
    id: 1822,
    question: 'Which one is the rain?',
    questionAudioKey: 'q_which_is_rain',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: true, audioKey: 'yağmur', spokenText: 'rain' },
      { id: 159, word: 'gökkuşağı', imageUrl: '/images/159.png', isCorrect: false, audioKey: 'gökkuşağı', spokenText: 'rainbow' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'snow' },
      { id: 406, word: 'rüzgar', imageUrl: '/images/406.png', isCorrect: false, audioKey: 'rüzgar', spokenText: 'wind' }
    ]
  },
  {
    id: 1823,
    question: 'Which one is the snow?',
    questionAudioKey: 'q_which_is_snow',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: true, audioKey: 'kar', spokenText: 'snow' },
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'rain' },
      { id: 406, word: 'rüzgar', imageUrl: '/images/406.png', isCorrect: false, audioKey: 'rüzgar', spokenText: 'wind' },
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'sun' }
    ]
  },
  {
    id: 1824,
    question: 'Which one is the lightning?',
    questionAudioKey: 'q_which_is_lightning',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 407, word: 'şimşek', imageUrl: '/images/407.png', isCorrect: true, audioKey: 'şimşek', spokenText: 'lightning' },
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'rain' },
      { id: 406, word: 'rüzgar', imageUrl: '/images/406.png', isCorrect: false, audioKey: 'rüzgar', spokenText: 'wind' },
      { id: 159, word: 'gökkuşağı', imageUrl: '/images/159.png', isCorrect: false, audioKey: 'gökkuşağı', spokenText: 'rainbow' }
    ]
  },
  {
    id: 1825,
    question: 'Which one is the wind?',
    questionAudioKey: 'q_which_is_wind',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 406, word: 'rüzgar', imageUrl: '/images/406.png', isCorrect: true, audioKey: 'rüzgar', spokenText: 'wind' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'snow' },
      { id: 407, word: 'şimşek', imageUrl: '/images/407.png', isCorrect: false, audioKey: 'şimşek', spokenText: 'lightning' },
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'rain' }
    ]
  }
];