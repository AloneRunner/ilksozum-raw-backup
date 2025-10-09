import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Space) in English
// Expanded to 8 rounds starting from ID 1831.

export const enSpaceData: ConceptRound[] = [
  {
    id: 1831,
    question: 'Which one is the planet?',
    questionAudioKey: 'q_which_is_planet',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 205, word: 'gezegen', imageUrl: '/images/205.png', isCorrect: true, audioKey: 'gezegen', spokenText: 'planet' },
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'sun' },
      { id: 238, word: 'ay', imageUrl: '/images/238.png', isCorrect: false, audioKey: 'ay', spokenText: 'moon' },
      { id: 239, word: 'yıldız', imageUrl: '/images/239.png', isCorrect: false, audioKey: 'yıldız', spokenText: 'star' }
    ]
  },
  {
    id: 1832,
    question: 'Which one is the sun?',
    questionAudioKey: 'q_which_is_sun',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'sun' },
      { id: 238, word: 'ay', imageUrl: '/images/238.png', isCorrect: false, audioKey: 'ay', spokenText: 'moon' },
      { id: 205, word: 'gezegen', imageUrl: '/images/205.png', isCorrect: false, audioKey: 'gezegen', spokenText: 'planet' },
      { id: 239, word: 'yıldız', imageUrl: '/images/239.png', isCorrect: false, audioKey: 'yıldız', spokenText: 'star' }
    ]
  },
  {
    id: 1833,
    question: 'Which one is the moon?',
    questionAudioKey: 'q_which_is_moon',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 238, word: 'ay', imageUrl: '/images/238.png', isCorrect: true, audioKey: 'ay', spokenText: 'moon' },
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'sun' },
      { id: 205, word: 'gezegen', imageUrl: '/images/205.png', isCorrect: false, audioKey: 'gezegen', spokenText: 'planet' },
      { id: 408, word: 'göktaşı', imageUrl: '/images/408.png', isCorrect: false, audioKey: 'göktaşı', spokenText: 'meteor' }
    ]
  },
  {
    id: 1834,
    question: 'Which one is the star?',
    questionAudioKey: 'q_which_is_star',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 239, word: 'yıldız', imageUrl: '/images/239.png', isCorrect: true, audioKey: 'yıldız', spokenText: 'star' },
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'sun' },
      { id: 238, word: 'ay', imageUrl: '/images/238.png', isCorrect: false, audioKey: 'ay', spokenText: 'moon' },
      { id: 205, word: 'gezegen', imageUrl: '/images/205.png', isCorrect: false, audioKey: 'gezegen', spokenText: 'planet' }
    ]
  },
  {
    id: 1835,
    question: 'Which one is the rocket?',
    questionAudioKey: 'q_which_is_rocket',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 204, word: 'roket', imageUrl: '/images/204.png', isCorrect: true, audioKey: 'roket', spokenText: 'rocket' },
      { id: 381, word: 'uzay mekiği', imageUrl: '/images/381.png', isCorrect: false, audioKey: 'uzay_mekiği', spokenText: 'space shuttle' },
      { id: 107, word: 'uçak', imageUrl: '/images/107.png', isCorrect: false, audioKey: 'uçak', spokenText: 'airplane' },
      { id: 408, word: 'göktaşı', imageUrl: '/images/408.png', isCorrect: false, audioKey: 'göktaşı', spokenText: 'meteor' }
    ]
  },
  {
    id: 1836,
    question: 'Which one is the space shuttle?',
    questionAudioKey: 'q_which_is_space_shuttle',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 381, word: 'uzay mekiği', imageUrl: '/images/381.png', isCorrect: true, audioKey: 'uzay_mekiği', spokenText: 'space shuttle' },
      { id: 204, word: 'roket', imageUrl: '/images/204.png', isCorrect: false, audioKey: 'roket', spokenText: 'rocket' },
      { id: 107, word: 'uçak', imageUrl: '/images/107.png', isCorrect: false, audioKey: 'uçak', spokenText: 'airplane' },
      { id: 162, word: 'helikopter', imageUrl: '/images/162.png', isCorrect: false, audioKey: 'helikopter', spokenText: 'helicopter' }
    ]
  },
  {
    id: 1837,
    question: 'Which one is the telescope?',
    questionAudioKey: 'q_which_is_telescope',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 379, word: 'teleskop', imageUrl: '/images/379.png', isCorrect: true, audioKey: 'teleskop', spokenText: 'telescope' },
      { id: 214, word: 'dürbün', imageUrl: '/images/214.png', isCorrect: false, audioKey: 'dürbün', spokenText: 'binoculars' },
      { id: 691, word: 'büyüteç', imageUrl: '/images/691.png', isCorrect: false, audioKey: 'büyüteç', spokenText: 'magnifying glass' },
      { id: 181, word: 'kamera', imageUrl: '/images/181.png', isCorrect: false, audioKey: 'kamera', spokenText: 'camera' }
    ]
  },
  {
    id: 1838,
    question: 'Which one is the meteor?',
    questionAudioKey: 'q_which_is_meteor',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 408, word: 'göktaşı', imageUrl: '/images/408.png', isCorrect: true, audioKey: 'göktaşı', spokenText: 'meteor' },
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' },
      { id: 205, word: 'gezegen', imageUrl: '/images/205.png', isCorrect: false, audioKey: 'gezegen', spokenText: 'planet' },
      { id: 238, word: 'ay', imageUrl: '/images/238.png', isCorrect: false, audioKey: 'ay', spokenText: 'moon' }
    ]
  }
];