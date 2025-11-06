import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Professions) in English
// Corrected a non-existent ID and expanded to 12 rounds.

export const enProfessionsData: ConceptRound[] = [
  {
    id: 1701,
    question: 'Which one is the doctor?',
    questionAudioKey: 'q_which_is_doctor_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: true, audioKey: 'doktor', spokenText: 'doctor' },
      { id: 386, word: 'hemşire', imageUrl: '/images/386.png', isCorrect: false, audioKey: 'hemşire', spokenText: 'nurse' },
      { id: 325, word: 'polis', imageUrl: '/images/325.png', isCorrect: false, audioKey: 'polis', spokenText: 'police officer' },
      { id: 326, word: 'aşçı', imageUrl: '/images/326.png', isCorrect: false, audioKey: 'aşçı', spokenText: 'chef' }
    ]
  },
  {
    id: 1702,
    question: 'Which one is the police officer?',
    questionAudioKey: 'q_which_is_police',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 325, word: 'polis', imageUrl: '/images/325.png', isCorrect: true, audioKey: 'polis', spokenText: 'police officer' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doctor' },
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: false, audioKey: 'itfaiyeci', spokenText: 'firefighter' },
      { id: 835, word: 'berber', imageUrl: '/images/835.png', isCorrect: false, audioKey: 'berber', spokenText: 'barber' }
    ]
  },
  {
    id: 1703,
    question: 'Which one is the firefighter?',
    questionAudioKey: 'q_which_is_firefighter_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: true, audioKey: 'itfaiyeci', spokenText: 'firefighter' },
      { id: 326, word: 'aşçı', imageUrl: '/images/326.png', isCorrect: false, audioKey: 'aşçı', spokenText: 'chef' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doctor' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postman' }
    ]
  },
  {
    id: 1704,
    question: 'Which one is the chef?',
    questionAudioKey: 'q_which_is_chef_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 326, word: 'aşçı', imageUrl: '/images/326.png', isCorrect: true, audioKey: 'aşçı', spokenText: 'chef' },
      { id: 878, word: 'garson', imageUrl: '/images/878.png', isCorrect: false, audioKey: 'garson', spokenText: 'waiter' },
      { id: 325, word: 'polis', imageUrl: '/images/325.png', isCorrect: false, audioKey: 'polis', spokenText: 'police officer' },
      { id: 835, word: 'berber', imageUrl: '/images/835.png', isCorrect: false, audioKey: 'berber', spokenText: 'barber' }
    ]
  },
  {
    id: 1705,
    question: 'Which one is the nurse?',
    questionAudioKey: 'q_which_is_nurse_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 386, word: 'hemşire', imageUrl: '/images/386.png', isCorrect: true, audioKey: 'hemşire', spokenText: 'nurse' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doctor' },
      { id: 387, word: 'pilot', imageUrl: '/images/387.png', isCorrect: false, audioKey: 'pilot', spokenText: 'pilot' },
      { id: 388, word: 'çiftçi', imageUrl: '/images/388.png', isCorrect: false, audioKey: 'çiftçi', spokenText: 'farmer' } // HATA DÜZELTİLDİ: ID 1245 -> 388
    ]
  },
  {
    id: 1706,
    question: 'Which one is the pilot?',
    questionAudioKey: 'q_which_is_pilot_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 387, word: 'pilot', imageUrl: '/images/387.png', isCorrect: true, audioKey: 'pilot', spokenText: 'pilot' },
      { id: 380, word: 'astronot', imageUrl: '/images/380.png', isCorrect: false, audioKey: 'astronot', spokenText: 'astronaut' },
      { id: 325, word: 'polis', imageUrl: '/images/325.png', isCorrect: false, audioKey: 'polis', spokenText: 'police officer' },
      { id: 835, word: 'berber', imageUrl: '/images/835.png', isCorrect: false, audioKey: 'berber', spokenText: 'barber' }
    ]
  },
  {
    id: 1707,
    question: 'Which one is the farmer?',
    questionAudioKey: 'q_which_is_farmer_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 388, word: 'çiftçi', imageUrl: '/images/388.png', isCorrect: true, audioKey: 'çiftçi', spokenText: 'farmer' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postman' },
      { id: 869, word: 'manav', imageUrl: '/images/869.png', isCorrect: false, audioKey: 'manav', spokenText: 'grocer' },
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: false, audioKey: 'itfaiyeci', spokenText: 'firefighter' }
    ]
  },
  {
    id: 1708,
    question: 'Which one is the postman?',
    questionAudioKey: 'q_which_is_postman_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: true, audioKey: 'postacı', spokenText: 'postman' },
      { id: 877, word: 'kasiyer', imageUrl: '/images/877.png', isCorrect: false, audioKey: 'kasiyer', spokenText: 'cashier' },
      { id: 878, word: 'garson', imageUrl: '/images/878.png', isCorrect: false, audioKey: 'garson', spokenText: 'waiter' },
      { id: 833, word: 'temizlik görevlisi', imageUrl: '/images/833.png', isCorrect: false, audioKey: 'temizlik_görevlisi', spokenText: 'cleaner' }
    ]
  },
  {
    id: 1709,
    question: 'Which one is the barber?',
    questionAudioKey: 'q_which_is_barber_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 835, word: 'berber', imageUrl: '/images/835.png', isCorrect: true, audioKey: 'berber', spokenText: 'barber' },
      { id: 326, word: 'aşçı', imageUrl: '/images/326.png', isCorrect: false, audioKey: 'aşçı', spokenText: 'chef' },
      { id: 387, word: 'pilot', imageUrl: '/images/387.png', isCorrect: false, audioKey: 'pilot', spokenText: 'pilot' },
      { id: 388, word: 'çiftçi', imageUrl: '/images/388.png', isCorrect: false, audioKey: 'çiftçi', spokenText: 'farmer' }
    ]
  },
  {
    id: 1710,
    question: 'Which one is the teacher?',
    questionAudioKey: 'q_which_is_teacher_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 84, word: 'öğretmen', imageUrl: '/images/84.png', isCorrect: true, audioKey: 'öğretmen', spokenText: 'teacher' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doctor' },
      { id: 386, word: 'hemşire', imageUrl: '/images/386.png', isCorrect: false, audioKey: 'hemşire', spokenText: 'nurse' },
      { id: 832, word: 'müdür', imageUrl: '/images/832.png', isCorrect: false, audioKey: 'müdür', spokenText: 'manager' }
    ]
  },
  {
    id: 1711,
    question: 'Which one is the waiter?',
    questionAudioKey: 'q_which_is_waiter_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 878, word: 'garson', imageUrl: '/images/878.png', isCorrect: true, audioKey: 'garson', spokenText: 'waiter' },
      { id: 326, word: 'aşçı', imageUrl: '/images/326.png', isCorrect: false, audioKey: 'aşçı', spokenText: 'chef' },
      { id: 877, word: 'kasiyer', imageUrl: '/images/877.png', isCorrect: false, audioKey: 'kasiyer', spokenText: 'cashier' },
      { id: 869, word: 'manav', imageUrl: '/images/869.png', isCorrect: false, audioKey: 'manav', spokenText: 'grocer' }
    ]
  },
  {
    id: 1712,
    question: 'Which one is the astronaut?',
    questionAudioKey: 'q_which_is_astronaut_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 380, word: 'astronot', imageUrl: '/images/380.png', isCorrect: true, audioKey: 'astronot', spokenText: 'astronaut' },
      { id: 387, word: 'pilot', imageUrl: '/images/387.png', isCorrect: false, audioKey: 'pilot', spokenText: 'pilot' },
      { id: 325, word: 'polis', imageUrl: '/images/325.png', isCorrect: false, audioKey: 'polis', spokenText: 'police officer' },
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: false, audioKey: 'itfaiyeci', spokenText: 'firefighter' }
    ]
  }
];