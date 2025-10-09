import { ConceptRound, ActivityType } from '../../../../types';

export const hungryFullData: ConceptRound[] = [
    // 1. Kedi (151) vs Kedi (152)
    { id: 1, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: true, audioKey: "kedi_aç", spokenText: "aç kedi" },
        { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: false, audioKey: "kedi_tok", spokenText: "tok kedi" }
    ]},
    { id: 2, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: false, audioKey: "kedi_aç", spokenText: "aç kedi" },
        { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: true, audioKey: "kedi_tok", spokenText: "tok kedi" }
    ]},
    // 2. Sincap (489) vs Sincap (417)
    { id: 3, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: true, audioKey: "sincap_aç", spokenText: "aç sincap" },
        { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: false, audioKey: "sincap_tok", spokenText: "tok sincap" }
    ]},
    { id: 4, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: false, audioKey: "sincap_aç", spokenText: "aç sincap" },
        { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: true, audioKey: "sincap_tok", spokenText: "tok sincap" }
    ]},
    // 3. Bebek (752) vs Bebek (751) - YENİ
    { id: 5, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: true, audioKey: "bebek_aç", spokenText: "aç bebek" },
        { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: false, audioKey: "bebek_tok", spokenText: "tok bebek" }
    ]},
    { id: 6, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: false, audioKey: "bebek_aç", spokenText: "aç bebek" },
        { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: true, audioKey: "bebek_tok", spokenText: "tok bebek" }
    ]},
    // 4. Canavar (754/755) vs Canavar (756) - YENİ
    { id: 7, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 754, word: "canavar", imageUrl: "/images/754.png", isCorrect: true, audioKey: "canavar_aç", spokenText: "aç canavar" },
        { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: false, audioKey: "canavar_tok", spokenText: "tok canavar" }
    ]},
    { id: 8, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 755, word: "canavar", imageUrl: "/images/755.png", isCorrect: false, audioKey: "canavar_aç", spokenText: "aç canavar" },
        { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: true, audioKey: "canavar_tok", spokenText: "tok canavar" }
    ]},
    // 5. Maymun (753) vs Maymun (277) - YENİ
    { id: 9, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: true, audioKey: "maymun_aç", spokenText: "aç maymun" },
        { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: false, audioKey: "maymun_tok", spokenText: "tok maymun" }
    ]},
    { id: 10, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: false, audioKey: "maymun_aç", spokenText: "aç maymun" },
        { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: true, audioKey: "maymun_tok", spokenText: "tok maymun" }
    ]},
    // 6. Kuş (749) vs Kuş (750) - YENİ
    { id: 11, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry", activityType: ActivityType.HungryFull, options: [
        { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: true, audioKey: "kuş_aç", spokenText: "aç kuş" },
        { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: false, audioKey: "kuş_tok", spokenText: "tok kuş" }
    ]},
    { id: 12, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.HungryFull, options: [
        { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: false, audioKey: "kuş_aç", spokenText: "aç kuş" },
        { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: true, audioKey: "kuş_tok", spokenText: "tok kuş" }
    ]},
];