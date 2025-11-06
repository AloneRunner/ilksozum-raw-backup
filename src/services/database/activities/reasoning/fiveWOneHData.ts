import { ActivityType, ConceptRound, ImageMetadata } from '../../../../types';

// 5N1K: Kim? Ne? Nerede? Ne zaman? Neden? Nasıl?
// Not: Image ID'ler mevcut public/images kümesine göre hazırlanmıştır.
// Gerekirse rahatça çoğaltılabilir.

const meta = (id: number, word: string): ImageMetadata => ({
  id,
  word,
  imageUrl: `/images/${id}.png`,
  audioKeys: { default: word },
  tags: { category: '' }
});

export const fiveWOneHData: ConceptRound[] = [
  // 1) KİM?
  {
    id: 1,
    activityType: ActivityType.FiveWOneH,
    question: 'Hastalanınca kime gideriz?',
    questionAudioKey: 'q_who_to_when_sick',
    speech: {
      tr: { correct: 'Evet! Hastalanınca doktora gideriz.', wrong: 'Hayır, hastalanınca oraya gitmeyiz.' },
      en: { correct: 'Yes! We go to the doctor when we are sick.', wrong: "No, that's not where we go when we are sick." }
    },
    questionItem: meta(784, 'hasta çocuk'),
    options: [
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: true, audioKey: 'doktor', spokenText: 'doktor' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postacı' },
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: false, audioKey: 'itfaiyeci', spokenText: 'itfaiyeci' },
    ],
  },
  {
    id: 2,
    activityType: ActivityType.FiveWOneH,
    question: 'Yangın çıkınca kimi ararız?',
    questionAudioKey: 'q_who_to_when_fire',
    speech: {
      tr: { correct: 'Doğru! Yangın çıkınca itfaiyeyi ararız.', wrong: 'Hayır, yangında itfaiyeyi aramalıyız.' },
      en: { correct: 'Correct! We call the firefighters in a fire.', wrong: 'No, in a fire we should call the firefighters.' }
    },
    questionItem: meta(707, 'ateş'),
    options: [
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: true, audioKey: 'itfaiyeci', spokenText: 'itfaiyeci' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postacı' },
    ],
  },
  {
    id: 3,
    activityType: ActivityType.FiveWOneH,
    question: 'Bunu kim kullanır?',
    questionAudioKey: 'q_who_uses_this',
    speech: {
      tr: { correct: 'Evet! Kara tahtayı öğretmen kullanır.', wrong: 'Hayır, bunu genellikle öğretmen kullanır.' },
      en: { correct: 'Yes! A teacher uses the blackboard.', wrong: 'No, it is usually used by a teacher.' }
    },
    questionItem: meta(883, 'kara tahta'),
    options: [
      { id: 84, word: 'öğretmen', imageUrl: '/images/84.png', isCorrect: true, audioKey: 'öğretmen', spokenText: 'öğretmen' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postacı' },
    ],
  },
  {
    id: 4,
    activityType: ActivityType.FiveWOneH,
    question: 'Mektubu kim getirir?',
    questionAudioKey: 'q_who_brings_letter',
    speech: {
      tr: { correct: 'Doğru! Mektubu postacı getirir.', wrong: 'Hayır, mektubu postacı getirir.' },
      en: { correct: 'Correct! The postman brings the letter.', wrong: 'No, the postman brings the letter.' }
    },
    questionItem: meta(600, 'zarf'),
    options: [
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: true, audioKey: 'postacı', spokenText: 'postacı' },
      { id: 327, word: 'itfaiyeci', imageUrl: '/images/327.png', isCorrect: false, audioKey: 'itfaiyeci', spokenText: 'itfaiyeci' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
    ],
  },

  // 2) NE?
  {
    id: 5,
    activityType: ActivityType.FiveWOneH,
    question: 'Dişlerimizi ne ile fırçalarız?',
    questionAudioKey: 'q_what_brush_teeth_with',
    speech: {
      tr: { correct: 'Evet! Dişlerimizi diş macunu ile fırçalarız.', wrong: 'Hayır, dişlerimizi onunla fırçalamayız.' },
      en: { correct: 'Yes! We brush our teeth with toothpaste.', wrong: "No, we don't brush our teeth with that." }
    },
    questionItem: meta(441, 'diş fırçası'),
    options: [
      { id: 425, word: 'diş macunu', imageUrl: '/images/425.png', isCorrect: true, audioKey: 'diş_macunu', spokenText: 'diş macunu' },
      { id: 209, word: 'sabun', imageUrl: '/images/209.png', isCorrect: false, audioKey: 'sabun', spokenText: 'sabun' },
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: false, audioKey: 'silgi', spokenText: 'silgi' },
    ],
  },
  {
    id: 6,
    activityType: ActivityType.FiveWOneH,
    question: 'Yemek yemek için ne kullanırız?',
    questionAudioKey: 'q_what_eat_with',
    speech: {
      tr: { correct: 'Doğru! Yemek yemek için çatal kullanırız.', wrong: 'Hayır, yemek için o kullanılmaz.' },
      en: { correct: 'Correct! We use a fork to eat.', wrong: "No, we don't use that to eat." }
    },
    questionItem: meta(267, 'makarna'),
    options: [
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: true, audioKey: 'çatal', spokenText: 'çatal' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'kaşık' },
      { id: 296, word: 'simit', imageUrl: '/images/296.png', isCorrect: false, audioKey: 'simit', spokenText: 'simit' },
    ],
  },

  // 3) NEREDE?
  {
    id: 7,
    activityType: ActivityType.FiveWOneH,
    question: 'Doktor nerede çalışır?',
    questionAudioKey: 'q_where_doctor_works',
    speech: {
      tr: { correct: 'Evet! Doktor hastanede çalışır.', wrong: 'Hayır, doktor hastanede çalışır.' },
      en: { correct: 'Yes! A doctor works at a hospital.', wrong: 'No, a doctor works at a hospital.' }
    },
    questionItem: meta(324, 'doktor'),
    options: [
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: true, audioKey: 'hastane', spokenText: 'hastane' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'yatak' },
      { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: false, audioKey: 'park', spokenText: 'park' },
    ],
  },
  {
    id: 8,
    activityType: ActivityType.FiveWOneH,
    question: 'Salıncak nerededir?',
    questionAudioKey: 'q_where_is_swing',
    speech: {
      tr: { correct: 'Doğru! Salıncak çocuk parkındadır.', wrong: 'Hayır, salıncak parkta bulunur.' },
      en: { correct: 'Correct! The swing is at the playground.', wrong: 'No, the swing is at the playground.' }
    },
    questionItem: meta(393, 'salıncak'),
    options: [
      { id: 505, word: 'çocuk parkı', imageUrl: '/images/505.png', isCorrect: true, audioKey: 'çocuk_parkı', spokenText: 'çocuk parkı' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
      { id: 903, word: 'kapı', imageUrl: '/images/903.png', isCorrect: false, audioKey: 'kapı', spokenText: 'kapı' },
    ],
  },
  {
    id: 9,
    activityType: ActivityType.FiveWOneH,
    question: 'Nerede uyuruz?',
    questionAudioKey: 'q_where_do_we_sleep',
    speech: {
      tr: { correct: 'Evet! Yatakta uyuruz.', wrong: 'Hayır, orada uyumayız.' },
      en: { correct: 'Yes! We sleep in a bed.', wrong: "No, we don't sleep there." }
    },
    questionItem: meta(901, 'uyuyan çocuk'),
    options: [
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: true, audioKey: 'yatak', spokenText: 'yatak' },
      { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: false, audioKey: 'park', spokenText: 'park' },
      { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: false, audioKey: 'akvaryum', spokenText: 'akvaryum' },
    ],
  },
  {
    id: 10,
    activityType: ActivityType.FiveWOneH,
    question: 'Balık nerede yaşar?',
    questionAudioKey: 'q_where_fish_lives',
    speech: {
      tr: { correct: 'Evet! Balık akvaryumda yaşar.', wrong: 'Hayır, balık orada yaşamaz.' },
      en: { correct: 'Yes! Fish live in an aquarium.', wrong: "No, fish don't live there." }
    },
    questionItem: meta(740, 'balık'),
    options: [
      { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: true, audioKey: 'akvaryum', spokenText: 'akvaryum' },
      { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'yatak' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
    ],
  },

  // 4) NE ZAMAN?
  {
    id: 11,
    activityType: ActivityType.FiveWOneH,
    question: 'Baykuşu ne zaman görürüz?',
    questionAudioKey: 'q_when_see_owl',
    speech: {
      tr: { correct: 'Doğru! Baykuşu gece görürüz.', wrong: 'Hayır, baykuş genelde gece görülür.' },
      en: { correct: 'Correct! We see owls at night.', wrong: 'No, owls are usually seen at night.' }
    },
    questionItem: meta(103, 'baykuş'),
    options: [
      { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: true, audioKey: 'gece', spokenText: 'gece' },
      { id: 52, word: 'yağmur', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'yağmur' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'kar' },
    ],
  },
  {
    id: 12,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman şemsiye kullanırız?',
    questionAudioKey: 'q_when_use_umbrella',
    speech: {
      tr: { correct: 'Evet! Yağmurda şemsiye kullanırız.', wrong: 'Hayır, o zamanda şemsiye kullanmayız.' },
      en: { correct: 'Yes! We use an umbrella when it rains.', wrong: "No, we don't use an umbrella then." }
    },
    questionItem: meta(157, 'şemsiye'),
    options: [
      { id: 52, word: 'yağmurda', imageUrl: '/images/52.png', isCorrect: true, audioKey: 'yağmur', spokenText: 'yağmurda' },
      { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'gece' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'kar' },
    ],
  },
  {
    id: 13,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman bere takarız?',
    questionAudioKey: 'q_when_wear_beanie',
    speech: {
      tr: { correct: 'Doğru! Karlı havada bere takarız.', wrong: 'Hayır, o zaman bere takmayız.' },
      en: { correct: 'Correct! We wear a beanie when it snows.', wrong: "No, we don't wear a beanie then." }
    },
    questionItem: meta(336, 'bere'),
    options: [
      { id: 405, word: 'karlı havada', imageUrl: '/images/405.png', isCorrect: true, audioKey: 'kar', spokenText: 'karlı havada' },
      { id: 52, word: 'yağmurda', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'yağmurda' },
      { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'gece' },
    ],
  },

  // 5) NEDEN?
  {
    id: 14,
    activityType: ActivityType.FiveWOneH,
    question: 'Dondurma neden eridi?',
    questionAudioKey: 'q_why_icecream_melted',
    speech: {
      tr: { correct: 'Evet! Dondurma güneşten erir.', wrong: 'Hayır, dondurma bunun yüzünden erimez.' },
      en: { correct: 'Yes! Ice cream melts because of the sun.', wrong: "No, that's not why ice cream melts." }
    },
    questionItem: meta(64, 'erimiş dondurma'),
    options: [
      { id: 237, word: 'güneşten', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'güneşten' },
      { id: 603, word: 'geceden', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'geceden' },
      { id: 405, word: 'kardan', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'kardan' },
    ],
  },
  {
    id: 15,
    activityType: ActivityType.FiveWOneH,
    question: 'Elbiseler neden düzgün?',
    questionAudioKey: 'q_why_clothes_neat',
    speech: {
      tr: { correct: 'Doğru! Çünkü ütülendi.', wrong: 'Hayır, bu yüzden düzgün olmaz.' },
      en: { correct: 'Correct! Because they were ironed.', wrong: "No, that doesn't make them neat." }
    },
    questionItem: meta(255, 'düzgün gömlek'),
    options: [
      { id: 305, word: 'ütülendiği için', imageUrl: '/images/305.png', isCorrect: true, audioKey: 'ütü', spokenText: 'ütülendiği için' },
      { id: 209, word: 'sabundan', imageUrl: '/images/209.png', isCorrect: false, audioKey: 'sabun', spokenText: 'sabundan' },
      { id: 296, word: 'simitten', imageUrl: '/images/296.png', isCorrect: false, audioKey: 'simit', spokenText: 'simitten' },
    ],
  },

  // 6) NASIL?
  {
    id: 16,
    activityType: ActivityType.FiveWOneH,
    question: 'Okula nasıl gideriz?',
    questionAudioKey: 'q_how_go_to_school',
    speech: {
      tr: { correct: 'Evet! Okula okul otobüsüyle gideriz.', wrong: 'Hayır, genelde öyle gitmeyiz.' },
      en: { correct: 'Yes! We go to school by school bus.', wrong: "No, we don’t usually go that way." }
    },
    questionItem: meta(497, 'okul'),
    options: [
      { id: 105, word: 'okul otobüsüyle', imageUrl: '/images/105.png', isCorrect: true, audioKey: 'okul_otobüsü', spokenText: 'okul otobüsüyle' },
      { id: 1, word: 'arabayla', imageUrl: '/images/1.png', isCorrect: false, audioKey: 'araba', spokenText: 'arabayla' },
      { id: 110, word: 'bisikletle', imageUrl: '/images/110.png', isCorrect: false, audioKey: 'bisiklet', spokenText: 'bisikletle' },
    ],
  },
  {
    id: 17,
    activityType: ActivityType.FiveWOneH,
    question: 'Kapıyı nasıl açarız?',
    questionAudioKey: 'q_how_open_door',
    speech: {
      tr: { correct: 'Evet! Kapıyı anahtarla açarız.', wrong: 'Hayır, kapıyı onunla açmayız.' },
      en: { correct: 'Yes! We open the door with a key.', wrong: "No, we don’t open the door with that." }
    },
    questionItem: meta(39, 'kapı'),
    options: [
      { id: 142, word: 'anahtarla', imageUrl: '/images/142.png', isCorrect: true, audioKey: 'anahtar', spokenText: 'anahtarla' },
      { id: 37, word: 'kitapla', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'kitapla' },
      { id: 535, word: 'silgiyle', imageUrl: '/images/535.png', isCorrect: false, audioKey: 'silgi', spokenText: 'silgiyle' },
    ],
  },
  {
    id: 18,
    activityType: ActivityType.FiveWOneH,
    question: 'Bebek kendini nasıl hissediyor?',
    questionAudioKey: 'q_how_baby_feels',
    speech: {
      tr: { correct: 'Doğru! Bebek üzgün hissediyor.', wrong: 'Hayır, bebek öyle hissetmiyor.' },
      en: { correct: 'Correct! The baby feels sad.', wrong: "No, the baby doesn’t feel that way." }
    },
    questionItem: meta(752, 'ağlayan bebek'),
    options: [
      { id: 501, word: 'üzgün', imageUrl: '/images/501.png', isCorrect: true, audioKey: 'üzgün', spokenText: 'üzgün' },
      { id: 500, word: 'mutlu', imageUrl: '/images/500.png', isCorrect: false, audioKey: 'mutlu', spokenText: 'mutlu' },
      { id: 503, word: 'şaşkın', imageUrl: '/images/503.png', isCorrect: false, audioKey: 'şaşkın', spokenText: 'şaşkın' },
    ],
  },
    // === Ek Turlar (901–916'dan uyarlanan güvenli eklemeler) ===
    // 901 — Uyuyan çocuk (NEREDE?)
    {
      id: 901,
      activityType: ActivityType.FiveWOneH,
      question: 'Bu çocuk nerede uyuyor olabilir?',
      questionAudioKey: 'q_where_is_sleeping_child',
      speech: {
        tr: { correct: 'Evet! Genelde yatakta uyuruz.', wrong: 'Hayır, genelde yatakta uyuruz.' },
        en: { correct: 'Yes! We usually sleep in a bed.', wrong: 'No, we usually sleep in a bed.' }
      },
      questionItem: meta(901, 'uyuyan çocuk'),
      options: [
        { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: true, audioKey: 'yatak', spokenText: 'yatak' },
        { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: false, audioKey: 'park', spokenText: 'park' },
        { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: false, audioKey: 'akvaryum', spokenText: 'akvaryum' },
      ],
    },
    // 902 — Oyun oynamak isteyen çocuk (NEDEN?)
    {
      id: 902,
      activityType: ActivityType.FiveWOneH,
      question: 'Bu çocuk neden oyun oynamak istiyor?',
      questionAudioKey: 'q_why_child_wants_play',
      speech: {
        tr: { correct: 'Doğru! Eğlenmek ve arkadaşlarıyla vakit geçirmek istiyor.', wrong: 'Hayır, genelde eğlenmek ve arkadaşlarıyladır.' },
        en: { correct: 'Correct! To have fun and play with friends.', wrong: 'No, usually to have fun with friends.' }
      },
      questionItem: meta(902, 'oyun oynamak isteyen çocuk'),
      options: [
        { id: 838, word: 'arkadaş', imageUrl: '/images/838.png', isCorrect: true, audioKey: 'arkadaş', spokenText: 'arkadaş' },
        { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
        { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
      ],
    },
    // 903 — Dışarı çıkmak isteyen çocuk (NEREDE?)
    {
      id: 903,
      activityType: ActivityType.FiveWOneH,
      question: 'Dışarıda nereye gitmek isteyebilir?',
      questionAudioKey: 'q_where_child_wants_to_go_outside',
      speech: {
        tr: { correct: 'Evet! Parka gitmek isteyebilir.', wrong: 'Hayır, genelde parka gitmek ister.' },
        en: { correct: 'Yes! The child may want to go to the park.', wrong: 'No, usually the park is desired.' }
      },
      questionItem: meta(903, 'dışarı çıkmak isteyen çocuk'),
      options: [
        { id: 142, word: 'anahtarla', imageUrl: '/images/142.png', isCorrect: false, audioKey: 'anahtar', spokenText: 'anahtarla' },
        { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: true, audioKey: 'çocuk_parkı', spokenText: 'park' },
        { id: 105, word: 'okul otobüsüyle', imageUrl: '/images/105.png', isCorrect: false, audioKey: 'okul_otobüsü', spokenText: 'okul otobüsüyle' },
      ],
    },
    // 904 — Yorulmuş çocuk (NEDEN?)
    {
      id: 904,
      activityType: ActivityType.FiveWOneH,
      question: 'Bu çocuk neden yorulmuş olabilir?',
      questionAudioKey: 'q_why_child_tired',
      speech: {
        tr: { correct: 'Doğru! Uzun süre oynadığı veya az uyuduğu için olabilir.', wrong: 'Hayır, genellikle uzun aktivite ya da az uyku yüzündendir.' },
        en: { correct: 'Correct! Due to long play or little sleep.', wrong: 'No, usually because of long activity or little sleep.' }
      },
      questionItem: meta(904, 'yorulmuş çocuk'),
      options: [
        { id: 825, word: 'oyun/bisiklet', imageUrl: '/images/825.png', isCorrect: true, audioKey: 'bisiklet', spokenText: 'oyun veya bisiklet' },
        { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: false, audioKey: 'akvaryum', spokenText: 'akvaryum' },
        { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'güneş' },
      ],
    },
    // 905 — Parka gitmek isteyen çocuk (NEREDE?)
    {
      id: 905,
      activityType: ActivityType.FiveWOneH,
      question: 'Bu çocuk hangi yere gitmek istiyor?',
      questionAudioKey: 'q_where_child_wants_go_park',
      speech: {
        tr: { correct: 'Evet! Parka gitmek istiyor.', wrong: 'Hayır, başka bir yere gitmek istemiyor.' },
        en: { correct: 'Yes! Wants to go to the park.', wrong: 'No, not to a different place.' }
      },
      questionItem: meta(905, 'parka gitmek isteyen çocuk'),
      options: [
        { id: 505, word: 'çocuk parkı', imageUrl: '/images/505.png', isCorrect: true, audioKey: 'çocuk_parkı', spokenText: 'çocuk parkı' },
        { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: false, audioKey: 'restoran', spokenText: 'restoran' },
        { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
      ],
    },
    // 906 — Arabayla gezmek isteyen çocuk (NASIL?)
    {
      id: 906,
      activityType: ActivityType.FiveWOneH,
      question: 'Bu çocuk arabayla nasıl gezer?',
      questionAudioKey: 'q_how_child_prefers_drive',
      speech: {
        tr: { correct: 'Doğru! Emniyet kemeri takarak ve ebeveyniyle.', wrong: 'Hayır, güvenli şekilde ve yetişkinle olmalı.' },
        en: { correct: 'Correct! Wearing a seatbelt and with a parent.', wrong: 'No, it should be safely with an adult.' }
      },
      questionItem: meta(906, 'arabayla gezmek isteyen çocuk'),
      options: [
        { id: 1, word: 'arabayla', imageUrl: '/images/1.png', isCorrect: true, audioKey: 'araba', spokenText: 'arabayla' },
        { id: 105, word: 'okul otobüsüyle', imageUrl: '/images/105.png', isCorrect: false, audioKey: 'okul_otobüsü', spokenText: 'okul otobüsüyle' },
        { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: false, audioKey: 'akvaryum', spokenText: 'akvaryum' },
      ],
    },
    // 908 — Gergedan (NE ZAMAN?) — questionItem uses GIF in imageData
    {
      id: 908,
      activityType: ActivityType.FiveWOneH,
      question: 'Gergedanlar genelde ne zaman daha aktiftir?',
      questionAudioKey: 'q_when_rhino_active',
      speech: {
        tr: { correct: 'Doğru! Türüne göre gündüz veya alacakaranlıkta olabilir.', wrong: 'Hayır, gece değil genelde.' },
        en: { correct: 'Correct! Depending on species, day or twilight.', wrong: 'No, usually not at night.' }
      },
      questionItem: { id: 908, word: 'gergedan', imageUrl: '/images/908.gif', audioKeys: { default: 'gergedan' }, tags: { category: '' } },
      options: [
        { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'gece' },
        { id: 237, word: 'gündüz', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'gündüz' },
        { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'kar' },
      ],
    },
    // 909 — Deve (NEREDE?) — questionItem uses GIF in imageData
    {
      id: 909,
      activityType: ActivityType.FiveWOneH,
      question: 'Develer genelde nerede bulunur?',
      questionAudioKey: 'q_where_camels_live',
      speech: {
        tr: { correct: 'Evet! Çöller ve kuru bölgelerde.', wrong: 'Hayır, genellikle çöllerdedir.' },
        en: { correct: 'Yes! In deserts and dry areas.', wrong: 'No, usually in deserts.' }
      },
      questionItem: { id: 909, word: 'deve', imageUrl: '/images/909.gif', audioKeys: { default: 'deve' }, tags: { category: '' } },
      options: [
        { id: 237, word: 'çöl', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'çöl' },
        { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'plaj' },
        { id: 841, word: 'cami', imageUrl: '/images/841.png', isCorrect: false, audioKey: 'cami', spokenText: 'cami' },
      ],
    },
    // 915 — Balık (NEREDE?) — questionItem uses GIF in imageData
    {
      id: 915,
      activityType: ActivityType.FiveWOneH,
      question: 'Balıklar genelde nerede yaşar?',
      questionAudioKey: 'q_where_fish_live_915',
      speech: {
        tr: { correct: 'Evet! Suyun içinde yaşarlar.', wrong: 'Hayır, su dışında yaşamazlar.' },
        en: { correct: 'Yes! They live in water.', wrong: "No, they don't live out of water." }
      },
      questionItem: { id: 915, word: 'balık', imageUrl: '/images/915.gif', audioKeys: { default: 'balık' }, tags: { category: '' } },
      options: [
        { id: 310, word: 'akvaryum', imageUrl: '/images/310.png', isCorrect: true, audioKey: 'akvaryum', spokenText: 'akvaryum' },
        { id: 606, word: 'yatak', imageUrl: '/images/606.png', isCorrect: false, audioKey: 'yatak', spokenText: 'yatak' },
        { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: false, audioKey: 'park', spokenText: 'park' },
      ],
    },
    // 916 — Ayı (NE ZAMAN?) — questionItem uses GIF in imageData
    {
      id: 916,
      activityType: ActivityType.FiveWOneH,
      question: 'Ayılar ne zaman kış uykusuna yatar?',
      questionAudioKey: 'q_when_bears_hibernate',
      speech: {
        tr: { correct: 'Doğru! Kış geldiğinde.', wrong: 'Hayır, kış döneminde olur.' },
        en: { correct: 'Correct! During winter.', wrong: 'No, in the winter season.' }
      },
      questionItem: { id: 916, word: 'ayı', imageUrl: '/images/916.gif', audioKeys: { default: 'ayı' }, tags: { category: '' } },
      options: [
        { id: 405, word: 'kış', imageUrl: '/images/405.png', isCorrect: true, audioKey: 'kar', spokenText: 'kış' },
        { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'güneş' },
        { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'gece' },
      ],
    },
  
  // === Ek Tur Önerileri (Gemini) ===
  // 1) KİM?
  {
    id: 101,
    activityType: ActivityType.FiveWOneH,
    question: 'Uçağı kim kullanır?',
    questionAudioKey: 'q_who_flies_plane',
    speech: {
      tr: { correct: 'Evet! Uçağı pilot kullanır.', wrong: 'Hayır, uçağı o kullanmaz.' },
      en: { correct: 'Yes! A pilot flies the plane.', wrong: "No, they don’t fly the plane." }
    },
    questionItem: meta(107, 'uçak'),
    options: [
      { id: 387, word: 'pilot', imageUrl: '/images/387.png', isCorrect: true, audioKey: 'pilot', spokenText: 'pilot' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postacı' },
      { id: 380, word: 'astronot', imageUrl: '/images/380.png', isCorrect: false, audioKey: 'astronot', spokenText: 'astronot' },
    ],
  },
  {
    id: 102,
    activityType: ActivityType.FiveWOneH,
    question: 'Saçımızı kesmesi için kime gideriz?',
    questionAudioKey: 'q_who_cuts_hair',
    speech: {
      tr: { correct: 'Doğru! Saçımızı berber keser.', wrong: 'Hayır, saçımızı o kesmez.' },
      en: { correct: 'Correct! A barber cuts our hair.', wrong: "No, they don’t cut our hair." }
    },
    questionItem: meta(144, 'makas'),
    options: [
      { id: 835, word: 'berber', imageUrl: '/images/835.png', isCorrect: true, audioKey: 'berber', spokenText: 'berber' },
      { id: 380, word: 'astronot', imageUrl: '/images/380.png', isCorrect: false, audioKey: 'astronot', spokenText: 'astronot' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
    ],
  },
  {
    id: 103,
    activityType: ActivityType.FiveWOneH,
    question: 'Bize sütü kim sağlar?',
    questionAudioKey: 'q_who_provides_milk',
    speech: {
      tr: { correct: 'Evet! Sütü çiftçi sağlar.', wrong: 'Hayır, sütü genelde çiftçi sağlar.' },
      en: { correct: 'Yes! A farmer provides milk.', wrong: 'No, it is usually provided by a farmer.' }
    },
    questionItem: meta(291, 'inek'),
    options: [
      { id: 837, word: 'çiftçi', imageUrl: '/images/837.png', isCorrect: true, audioKey: 'çiftçi', spokenText: 'çiftçi' },
      { id: 839, word: 'polis', imageUrl: '/images/839.png', isCorrect: false, audioKey: 'polis', spokenText: 'polis' },
      { id: 834, word: 'postacı', imageUrl: '/images/834.png', isCorrect: false, audioKey: 'postacı', spokenText: 'postacı' },
    ],
  },

  // 2) NE?
  {
    id: 104,
    activityType: ActivityType.FiveWOneH,
    question: 'Yazıyı silmek için ne kullanırız?',
    questionAudioKey: 'q_what_erase_text',
    speech: {
      tr: { correct: 'Doğru! Yazıyı silmek için silgi kullanırız.', wrong: 'Hayır, yazıyı onunla silmeyiz.' },
      en: { correct: 'Correct! We use an eraser to erase.', wrong: "No, we don’t erase with that." }
    },
    questionItem: meta(121, 'kalem'),
    options: [
      { id: 535, word: 'silgi', imageUrl: '/images/535.png', isCorrect: true, audioKey: 'silgi', spokenText: 'silgi' },
      { id: 126, word: 'çatal', imageUrl: '/images/126.png', isCorrect: false, audioKey: 'çatal', spokenText: 'çatal' },
      { id: 51, word: 'fırça', imageUrl: '/images/51.png', isCorrect: false, audioKey: 'fırça', spokenText: 'fırça' },
    ],
  },
  {
    id: 105,
    activityType: ActivityType.FiveWOneH,
    question: 'Boyunu ölçmek için ne kullanırsın?',
    questionAudioKey: 'q_what_measure_height',
    speech: {
      tr: { correct: 'Evet! Boyu ölçmek için cetvel kullanırız.', wrong: 'Hayır, boyu onunla ölçmeyiz.' },
      en: { correct: 'Yes! We use a ruler to measure height.', wrong: "No, we don’t measure height with that." }
    },
    questionItem: meta(101, 'zürafa'),
    options: [
      { id: 149, word: 'cetvel', imageUrl: '/images/149.png', isCorrect: true, audioKey: 'cetvel', spokenText: 'cetvel' },
      { id: 496, word: 'çekiç', imageUrl: '/images/496.png', isCorrect: false, audioKey: 'çekiç', spokenText: 'çekiç' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'kaşık' },
    ],
  },
  {
    id: 106,
    activityType: ActivityType.FiveWOneH,
    question: 'Banyodan sonra ne ile kurulanırız?',
    questionAudioKey: 'q_what_dry_after_bath',
    speech: {
      tr: { correct: 'Doğru! Banyodan sonra havluyla kurulanırız.', wrong: 'Hayır, onunla kurulanmayız.' },
      en: { correct: 'Correct! We dry ourselves with a towel after a bath.', wrong: "No, we don’t dry with that." }
    },
    questionItem: meta(424, 'küvet'),
    options: [
      { id: 816, word: 'havlu', imageUrl: '/images/816.png', isCorrect: true, audioKey: 'havlu', spokenText: 'havlu' },
      { id: 137, word: 'yastık', imageUrl: '/images/137.png', isCorrect: false, audioKey: 'yastık', spokenText: 'yastık' },
      { id: 296, word: 'simit', imageUrl: '/images/296.png', isCorrect: false, audioKey: 'simit', spokenText: 'simit' },
    ],
  },

  // 3) NEREDE?
  {
    id: 107,
    activityType: ActivityType.FiveWOneH,
    question: 'Yemek yemek için nereye gideriz?',
    questionAudioKey: 'q_where_to_eat',
    speech: {
      tr: { correct: 'Evet! Yemek için restorana gideriz.', wrong: 'Hayır, yemek için oraya gitmeyiz.' },
      en: { correct: 'Yes! We go to a restaurant to eat.', wrong: "No, we don’t go there to eat." }
    },
    questionItem: meta(125, 'kaşık'),
    options: [
      { id: 880, word: 'restoran', imageUrl: '/images/880.png', isCorrect: true, audioKey: 'restoran', spokenText: 'restoran' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
      { id: 505, word: 'park', imageUrl: '/images/505.png', isCorrect: false, audioKey: 'park', spokenText: 'park' },
    ],
  },
  {
    id: 108,
    activityType: ActivityType.FiveWOneH,
    question: 'Kitap okumak için nereye gidebiliriz?',
    questionAudioKey: 'q_where_to_read_books',
    speech: {
      tr: { correct: 'Doğru! Kitap okumak için kütüphaneye gidebiliriz.', wrong: 'Hayır, kitap okumak için orası uygun değil.' },
      en: { correct: 'Correct! We can go to the library to read books.', wrong: "No, that’s not a good place to read books." }
    },
    questionItem: meta(36, 'kitap'),
      options: [
        { id: 614, word: 'kütüphane', imageUrl: '/images/614.png', isCorrect: true, audioKey: 'kütüphane', spokenText: 'kütüphane' },
        { id: 858, word: 'plaj', imageUrl: '/images/858.png', isCorrect: false, audioKey: 'plaj', spokenText: 'plaj' },
        { id: 174, word: 'ev', imageUrl: '/images/174.png', isCorrect: false, audioKey: 'ev', spokenText: 'ev' },
      ],
  },
  {
    id: 109,
    activityType: ActivityType.FiveWOneH,
    question: 'Alışverişi nereden yaparız?',
    questionAudioKey: 'q_where_to_shop',
    speech: {
      tr: { correct: 'Evet! Alışverişi marketten yaparız.', wrong: 'Hayır, alışverişi oradan yapmayız.' },
      en: { correct: 'Yes! We shop at the market.', wrong: "No, we don’t shop there." }
    },
    questionItem: meta(248, 'para'),
    options: [
      { id: 879, word: 'market', imageUrl: '/images/879.png', isCorrect: true, audioKey: 'market', spokenText: 'market' },
      { id: 841, word: 'cami', imageUrl: '/images/841.png', isCorrect: false, audioKey: 'cami', spokenText: 'cami' },
      { id: 852, word: 'hastane', imageUrl: '/images/852.png', isCorrect: false, audioKey: 'hastane', spokenText: 'hastane' },
    ],
  },

  // 4) NE ZAMAN?
  {
    id: 110,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman yatağımıza gireriz?',
    questionAudioKey: 'q_when_go_to_bed',
    speech: {
      tr: { correct: 'Doğru! Yatağa gece gireriz.', wrong: 'Hayır, o zaman yatağa girmeyiz.' },
      en: { correct: 'Correct! We go to bed at night.', wrong: "No, we don’t go to bed then." }
    },
    questionItem: meta(606, 'yatak'),
      options: [
        { id: 603, word: 'gece', imageUrl: '/images/603.png', isCorrect: true, audioKey: 'gece', spokenText: 'gece' },
        { id: 11, word: 'gündüz', imageUrl: '/images/11.png', isCorrect: false, audioKey: 'gündüz', spokenText: 'gündüz' },
        { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'kar' },
      ],
  },
  {
    id: 111,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman plaja gideriz?',
    questionAudioKey: 'q_when_go_to_beach',
    speech: {
      tr: { correct: 'Evet! Güneşli havada plaja gideriz.', wrong: 'Hayır, o havada plaja gitmeyiz.' },
      en: { correct: 'Yes! We go to the beach when it’s sunny.', wrong: "No, we don’t go to the beach then." }
    },
    questionItem: meta(858, 'plaj'),
    options: [
      { id: 237, word: 'güneşli havada', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'güneşli havada' },
      { id: 405, word: 'karlı havada', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'karlı havada' },
      { id: 52, word: 'yağmurda', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'yağmurda' },
    ],
  },
  {
    id: 112,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman kardan adam yaparız?',
    questionAudioKey: 'q_when_make_snowman',
    speech: {
      tr: { correct: 'Doğru! Kar yağınca kardan adam yaparız.', wrong: 'Hayır, o zaman kardan adam yapmayız.' },
      en: { correct: 'Correct! We make a snowman when it snows.', wrong: "No, we don’t make a snowman then." }
    },
    questionItem: meta(440, 'kardan adam'),
    options: [
      { id: 405, word: 'kar yağınca', imageUrl: '/images/405.png', isCorrect: true, audioKey: 'kar', spokenText: 'kar yağınca' },
      { id: 52, word: 'yağmurda', imageUrl: '/images/52.png', isCorrect: false, audioKey: 'yağmur', spokenText: 'yağmurda' },
      { id: 237, word: 'güneşte', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'güneşte' },
    ],
  },

  // 5) NEDEN?
  {
    id: 113,
    activityType: ActivityType.FiveWOneH,
    question: 'Bu çocuk neden üşüyor?',
    questionAudioKey: 'q_why_child_cold',
    speech: {
      tr: { correct: 'Evet! Soğuk hava yüzünden üşüyor.', wrong: 'Hayır, bunun yüzünden üşümez.' },
      en: { correct: 'Yes! Because it is cold.', wrong: "No, that’s not why they’re cold." }
    },
    questionItem: meta(899, 'üşüyen çocuk'),
    options: [
      { id: 643, word: 'soğuk hava', imageUrl: '/images/643.png', isCorrect: true, audioKey: 'soğuk', spokenText: 'soğuktan' },
      { id: 707, word: 'ateş', imageUrl: '/images/707.png', isCorrect: false, audioKey: 'ateş', spokenText: 'ateşten' },
      { id: 237, word: 'güneş', imageUrl: '/images/237.png', isCorrect: false, audioKey: 'güneş', spokenText: 'güneşten' },
    ],
  },
  {
    id: 114,
    activityType: ActivityType.FiveWOneH,
    question: 'Bu saç neden ıslak?',
    questionAudioKey: 'q_why_hair_wet',
    speech: {
      tr: { correct: 'Doğru! Duş alındığı için ıslak.', wrong: 'Hayır, bu yüzden ıslak değil.' },
      en: { correct: 'Correct! It’s wet because of a shower.', wrong: "No, that’s not why it’s wet." }
    },
    questionItem: meta(594, 'ıslak saç'),
    options: [
      { id: 300, word: 'duş alındı', imageUrl: '/images/300.png', isCorrect: true, audioKey: 'duş', spokenText: 'duş aldığı için' },
      { id: 856, word: 'tarandı', imageUrl: '/images/856.png', isCorrect: false, audioKey: 'tarak', spokenText: 'tarandığı için' },
      { id: 540, word: 'mum', imageUrl: '/images/540.png', isCorrect: false, audioKey: 'mum', spokenText: 'mumdan' },
    ],
  },

  // 6) NASIL?
  {
    id: 115,
    activityType: ActivityType.FiveWOneH,
    question: 'Yüksek bir rafa nasıl ulaşırız?',
    questionAudioKey: 'q_how_reach_high_shelf',
    speech: {
      tr: { correct: 'Evet! Merdivenle ulaşırız.', wrong: 'Hayır, onunla ulaşamayız.' },
      en: { correct: 'Yes! We use a ladder to reach.', wrong: "No, we can’t reach with that." }
    },
    questionItem: meta(611, 'yüksek raf'),
    options: [
      { id: 143, word: 'merdivenle', imageUrl: '/images/143.png', isCorrect: true, audioKey: 'merdiven', spokenText: 'merdivenle' },
      { id: 319, word: 'sandalyeyle', imageUrl: '/images/319.png', isCorrect: false, audioKey: 'sandalye', spokenText: 'sandalyeyle' },
      { id: 59, word: 'ayakkabıyla', imageUrl: '/images/59.png', isCorrect: false, audioKey: 'ayakkabı', spokenText: 'ayakkabıyla' },
    ],
  },
  {
    id: 116,
    activityType: ActivityType.FiveWOneH,
    question: 'Denizde nasıl seyahat ederiz?',
    questionAudioKey: 'q_how_travel_at_sea',
    speech: {
      tr: { correct: 'Doğru! Denizde gemiyle seyahat ederiz.', wrong: 'Hayır, denizde genelde onunla gitmeyiz.' },
      en: { correct: 'Correct! We travel by ship at sea.', wrong: "No, we don’t usually travel by that at sea." }
    },
    questionItem: meta(225, 'deniz'),
    options: [
      { id: 492, word: 'gemiyle', imageUrl: '/images/492.png', isCorrect: true, audioKey: 'gemi', spokenText: 'gemiyle' },
      { id: 105, word: 'okul otobüsüyle', imageUrl: '/images/105.png', isCorrect: false, audioKey: 'okul_otobüsü', spokenText: 'okul otobüsüyle' },
      { id: 1, word: 'arabayla', imageUrl: '/images/1.png', isCorrect: false, audioKey: 'araba', spokenText: 'arabayla' },
    ],
  },
  {
    id: 117,
    activityType: ActivityType.FiveWOneH,
    question: 'Odayı nasıl temizleriz?',
    questionAudioKey: 'q_how_clean_room',
    speech: {
      tr: { correct: 'Evet! Odayı temizlik kovası ve malzemeleriyle temizleriz.', wrong: 'Hayır, odayı onunla temizlemeyiz.' },
      en: { correct: 'Yes! We clean the room with a cleaning bucket and supplies.', wrong: "No, we don’t clean the room with that." }
    },
    questionItem: meta(229, 'dağınık oda'),
    options: [
      { id: 797, word: 'temizlik kovasıyla', imageUrl: '/images/797.png', isCorrect: true, audioKey: 'temizlik', spokenText: 'temizlik kovasıyla' },
      { id: 804, word: 'cipsle', imageUrl: '/images/804.png', isCorrect: false, audioKey: 'cips', spokenText: 'cipsle' },
      { id: 37, word: 'kitapla', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'kitapla' },
    ],
  },
  
  // === Yeni, özenle seçilmiş turlar (TR-öncelikli, question TTS override'lı) ===
  // 1) KİM?
  {
    id: 118,
    activityType: ActivityType.FiveWOneH,
    question: 'Okulda bize kim ders anlatır?',
    questionAudioKey: 'q_who_teaches_at_school',
    speech: {
      tr: {
        question: 'Resme bak. Okulda bize kim ders anlatır? Doğru kişiyi seç.',
        correct: 'Doğru! Öğretmen ders anlatır.',
        wrong: 'Hayır, okulda dersi öğretmen anlatır.'
      },
      en: {
        question: 'Look at the picture. Who teaches us at school? Pick the right person.',
        correct: 'Correct! The teacher teaches.',
        wrong: 'No, at school the teacher teaches.'
      }
    },
    questionItem: meta(497, 'okul'),
    options: [
      { id: 84, word: 'öğretmen', imageUrl: '/images/84.png', isCorrect: true, audioKey: 'öğretmen', spokenText: 'öğretmen' },
      { id: 324, word: 'doktor', imageUrl: '/images/324.png', isCorrect: false, audioKey: 'doktor', spokenText: 'doktor' },
      { id: 839, word: 'polis', imageUrl: '/images/839.png', isCorrect: false, audioKey: 'polis', spokenText: 'polis' },
    ],
  },

  // 2) NE?
  {
    id: 119,
    activityType: ActivityType.FiveWOneH,
    question: 'Suyu ne ile içeriz?',
    questionAudioKey: 'q_what_do_we_drink_water_with',
    speech: {
      tr: {
        question: 'Suyu içmek için hangisini kullanırız? Dikkatlice seç.',
        correct: 'Evet! Suyu bardakla içeriz.',
        wrong: 'Hayır, suyu onunla içmeyiz.'
      },
      en: {
        question: 'Which one do we use to drink water? Choose carefully.',
        correct: 'Yes! We drink water with a glass.',
        wrong: "No, we don’t drink water with that."
      }
    },
    questionItem: meta(124, 'bardak'),
    options: [
      { id: 124, word: 'bardak', imageUrl: '/images/124.png', isCorrect: true, audioKey: 'bardak', spokenText: 'bardak' },
      { id: 153, word: 'tabak', imageUrl: '/images/153.png', isCorrect: false, audioKey: 'tabak', spokenText: 'tabak' },
      { id: 125, word: 'kaşık', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'kaşık' },
    ],
  },

  // 3) NEREDE?
  {
    id: 120,
    activityType: ActivityType.FiveWOneH,
    question: 'Kitapları nerede saklarız?',
    questionAudioKey: 'q_where_do_we_store_books',
    speech: {
      tr: {
        question: 'Kitapları nereye koyarız? Doğru yeri seç.',
        correct: 'Doğru! Kitaplıkta saklarız.',
        wrong: 'Hayır, kitapları kitaplıkta saklarız.'
      },
      en: {
        question: 'Where do we keep books? Pick the right place.',
        correct: 'Correct! We keep them on a bookshelf.',
        wrong: 'No, we keep books on a bookshelf.'
      }
    },
    questionItem: meta(37, 'kitap'),
    options: [
      { id: 287, word: 'kitaplık', imageUrl: '/images/287.png', isCorrect: true, audioKey: 'kitaplık', spokenText: 'kitaplık' },
      { id: 339, word: 'dolap', imageUrl: '/images/339.png', isCorrect: false, audioKey: 'dolap', spokenText: 'dolap' },
      { id: 134, word: 'masa', imageUrl: '/images/134.png', isCorrect: false, audioKey: 'masa', spokenText: 'masa' },
    ],
  },

  // 4) NE ZAMAN?
  {
    id: 121,
    activityType: ActivityType.FiveWOneH,
    question: 'Ne zaman güneş kremi süreriz?',
    questionAudioKey: 'q_when_use_sunscreen',
    speech: {
      tr: {
        question: 'Ne zaman güneş kremi sürmeliyiz? Doğru zamanı seç.',
        correct: 'Evet! Güneşli havada süreriz.',
        wrong: 'Hayır, güneş kremi genelde güneşli havada sürülür.'
      },
      en: {
        question: 'When do we use sunscreen? Choose the right time.',
        correct: 'Yes! When it’s sunny.',
        wrong: 'No, we usually use it when it’s sunny.'
      }
    },
    questionItem: meta(237, 'güneş'),
    options: [
      { id: 237, word: 'güneşli havada', imageUrl: '/images/237.png', isCorrect: true, audioKey: 'güneş', spokenText: 'güneşli havada' },
      { id: 603, word: 'gecede', imageUrl: '/images/603.png', isCorrect: false, audioKey: 'gece', spokenText: 'gecede' },
      { id: 405, word: 'karlı havada', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'karlı havada' },
    ],
  },

  // 5) NEDEN?
  {
    id: 122,
    activityType: ActivityType.FiveWOneH,
    question: 'Neden ellerimizi yıkarız?',
    questionAudioKey: 'q_why_wash_hands',
    speech: {
      tr: {
        question: 'Ellerimizi neden yıkarız? Sağlıklı nedeni seç.',
        correct: 'Doğru! Temiz olmak ve mikroplardan korunmak için.',
        wrong: 'Hayır, ellerimizi temiz olmak için yıkarız.'
      },
      en: {
        question: 'Why do we wash our hands? Pick the healthy reason.',
        correct: 'Correct! To be clean and protect from germs.',
        wrong: 'No, we wash hands to be clean.'
      }
    },
    questionItem: meta(441, 'diş fırçası'),
    options: [
      { id: 209, word: 'temiz olmak için', imageUrl: '/images/209.png', isCorrect: true, audioKey: 'sabun', spokenText: 'temiz olmak için' },
      { id: 496, word: 'çekiç yüzünden', imageUrl: '/images/496.png', isCorrect: false, audioKey: 'çekiç', spokenText: 'çekiç yüzünden' },
      { id: 296, word: 'simitten dolayı', imageUrl: '/images/296.png', isCorrect: false, audioKey: 'simit', spokenText: 'simitten dolayı' },
    ],
  },

  // 6) NASIL?
  {
    id: 123,
    activityType: ActivityType.FiveWOneH,
    question: 'Ellerimizi nasıl kurularız?',
    questionAudioKey: 'q_how_dry_hands',
    speech: {
      tr: {
        question: 'Ellerimizi yıkadıktan sonra nasıl kurularız? Doğru yöntemi seç.',
        correct: 'Evet! Havluyla kurularız.',
        wrong: 'Hayır, eller havluyla kurulanır.'
      },
      en: {
        question: 'After washing hands, how do we dry them? Choose the right method.',
        correct: 'Yes! We dry them with a towel.',
        wrong: 'No, we dry hands with a towel.'
      }
    },
    questionItem: meta(815, 'tuvalet kağıdı'),
    options: [
      { id: 523, word: 'havluyla', imageUrl: '/images/523.png', isCorrect: true, audioKey: 'havlu', spokenText: 'havluyla' },
      { id: 125, word: 'kaşıkla', imageUrl: '/images/125.png', isCorrect: false, audioKey: 'kaşık', spokenText: 'kaşıkla' },
      { id: 37, word: 'kitapla', imageUrl: '/images/37.png', isCorrect: false, audioKey: 'kitap', spokenText: 'kitapla' },
    ],
  },
];
