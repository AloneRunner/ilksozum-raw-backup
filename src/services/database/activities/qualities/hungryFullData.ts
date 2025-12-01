import { ConceptRound, ActivityType } from '../../../../types.ts';

export const hungryFullData: ConceptRound[] = [
    // 1. Kedi
    { id: 205, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: true, audioKey: "kedi_aç", spokenText: "" },
        { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: false, audioKey: "kedi_tok", spokenText: "" }
    ]},
    { id: 206, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: false, audioKey: "kedi_aç", spokenText: "" },
        { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: true, audioKey: "kedi_tok", spokenText: "" }
    ]},

    // 2. Sincap
    { id: 207, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: true, audioKey: "sincap_aç", spokenText: "" },
        { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: false, audioKey: "sincap_tok", spokenText: "" }
    ]},
    { id: 208, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: false, audioKey: "sincap_aç", spokenText: "" },
        { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: true, audioKey: "sincap_tok", spokenText: "" }
    ]},

    // 3. Bebek
    { id: 209, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: true, audioKey: "bebek_aç", spokenText: "" },
        { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: false, audioKey: "bebek_tok", spokenText: "" }
    ]},
    { id: 210, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: false, audioKey: "bebek_aç", spokenText: "" },
        { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: true, audioKey: "bebek_tok", spokenText: "" }
    ]},

    // 4. Canavar
    { id: 211, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 755, word: "canavar", imageUrl: "/images/755.png", isCorrect: true, audioKey: "canavar_aç", spokenText: "" },
        { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: false, audioKey: "canavar_tok", spokenText: "" }
    ]},
    { id: 212, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 755, word: "canavar", imageUrl: "/images/755.png", isCorrect: false, audioKey: "canavar_aç", spokenText: "" },
        { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: true, audioKey: "canavar_tok", spokenText: "" }
    ]},

    // 5. Maymun
    { id: 213, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: true, audioKey: "maymun_aç", spokenText: "" },
        { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: false, audioKey: "maymun_tok", spokenText: "" }
    ]},
    { id: 214, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: false, audioKey: "maymun_aç", spokenText: "" },
        { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: true, audioKey: "maymun_tok", spokenText: "" }
    ]},

    // 6. Kuş
    { id: 215, question: "Aç olan hangisi?", questionAudioKey: "q_which_is_hungry_person", activityType: ActivityType.HungryFull, options: [
        { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: true, audioKey: "kuş_aç", spokenText: "" },
        { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: false, audioKey: "kuş_tok", spokenText: "" }
    ]},
    { id: 216, question: "Tok olan hangisi?", questionAudioKey: "q_which_is_satiated_person", activityType: ActivityType.HungryFull, options: [
        { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: false, audioKey: "kuş_aç", spokenText: "" },
        { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: true, audioKey: "kuş_tok", spokenText: "" }
    ]},
];