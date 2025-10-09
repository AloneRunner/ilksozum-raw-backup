import { ConceptRound, ActivityType } from '../../../../types';

export const heavyLightData: ConceptRound[] = [
    // 1) Halter - Tüy
    { id: 1, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: true, audioKey: "halter", spokenText: "ağır halter" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "hafif tüy" }
    ]},
    { id: 2, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: false, audioKey: "halter", spokenText: "ağır halter" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "hafif tüy" }
    ]},
    // 2) Fil - Tüy
    { id: 3, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: true, audioKey: "fil", spokenText: "ağır fil" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "hafif tüy" }
    ]},
    { id: 4, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "ağır fil" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "hafif tüy" }
    ]},
    // 3) Balina - Kuş
    { id: 5, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "ağır balina" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kuş", spokenText: "hafif kuş" }
    ]},
    { id: 6, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "ağır balina" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kuş", spokenText: "hafif kuş" }
    ]},
    // 4) Ansiklopedi - Kağıt
    { id: 7, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "ağır ansiklopedi" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kağıt", spokenText: "hafif kağıt" }
    ]},
    { id: 8, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "ağır ansiklopedi" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kağıt", spokenText: "hafif kağıt" }
    ]},
    // 5) Taş - Roka
    { id: 9, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "ağır taş" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: false, audioKey: "roka", spokenText: "hafif yaprak" }
    ]},
    { id: 10, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "ağır taş" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: true, audioKey: "roka", spokenText: "hafif yaprak" }
    ]},
    // 6) Kamyon - Balon
    { id: 11, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "ağır kamyon" },
        { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: false, audioKey: "balon", spokenText: "hafif balon" }
    ]},
    { id: 12, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "ağır kamyon" },
        { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: true, audioKey: "balon", spokenText: "hafif balon" }
    ]},
    // 7) Karpuz - Çilek
    { id: 13, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: true, audioKey: "karpuz", spokenText: "ağır karpuz" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "çilek", spokenText: "hafif çilek" }
    ]},
    { id: 14, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: false, audioKey: "karpuz", spokenText: "ağır karpuz" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "çilek", spokenText: "hafif çilek" }
    ]},
    // 8) Tuğla - Pamuk
    { id: 15, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "ağır tuğla" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "hafif pamuk" }
    ]},
    { id: 16, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "ağır tuğla" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "hafif pamuk" }
    ]},
    // 9) Valiz - Çorap
    { id: 17, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: true, audioKey: "valiz", spokenText: "ağır valiz" },
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "çorap", spokenText: "hafif çorap" }
    ]},
    { id: 18, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: false, audioKey: "valiz", spokenText: "ağır valiz" },
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "çorap", spokenText: "hafif çorap" }
    ]},
    // 10) Traktör - Kelebek
    { id: 19, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "ağır traktör" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "hafif kelebek" }
    ]},
    { id: 20, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "ağır traktör" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "hafif kelebek" }
    ]},
    // 11) Kanepe (Koltuk) - Yastık
    { id: 21, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 549, word: "koltuk", imageUrl: "/images/549.png", isCorrect: true, audioKey: "koltuk", spokenText: "ağır kanepe" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "hafif yastık" }
    ]},
    { id: 22, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 549, word: "koltuk", imageUrl: "/images/549.png", isCorrect: false, audioKey: "koltuk", spokenText: "ağır kanepe" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "hafif yastık" }
    ]}
];