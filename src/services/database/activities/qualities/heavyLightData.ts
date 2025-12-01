import { ConceptRound, ActivityType } from '../../../../types';

export const heavyLightData: ConceptRound[] = [
    // 1. Halter vs Tüy
    { id: 155, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: true, audioKey: "halter", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "" }
    ]},
    { id: 156, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: false, audioKey: "halter", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "" }
    ]},

    // 2. Fil vs Tüy
    { id: 157, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: true, audioKey: "fil", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "" }
    ]},
    { id: 158, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "" }
    ]},

    // 3. Balina vs Kuş
    { id: 159, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kuş", spokenText: "" }
    ]},
    { id: 160, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kuş", spokenText: "" }
    ]},

    // 4. Ansiklopedi vs Kağıt
    { id: 161, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kağıt", spokenText: "" }
    ]},
    { id: 162, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kağıt", spokenText: "" }
    ]},

    // 5. Taş vs Roka (Yaprak)
    { id: 163, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: false, audioKey: "roka", spokenText: "" }
    ]},
    { id: 164, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: true, audioKey: "roka", spokenText: "" }
    ]},

    // 6. Kamyon vs Balon
    { id: 165, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "" },
        { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: false, audioKey: "balon", spokenText: "" }
    ]},
    { id: 166, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "" },
        { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: true, audioKey: "balon", spokenText: "" }
    ]},

    // 7. Karpuz vs Çilek
    { id: 167, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: true, audioKey: "karpuz", spokenText: "" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "çilek", spokenText: "" }
    ]},
    { id: 168, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: false, audioKey: "karpuz", spokenText: "" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "çilek", spokenText: "" }
    ]},

    // 8. Tuğla vs Pamuk
    { id: 169, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "" }
    ]},
    { id: 170, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "" }
    ]},

    // 9. Valiz vs Çorap
    { id: 171, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: true, audioKey: "valiz", spokenText: "" },
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "çorap", spokenText: "" }
    ]},
    { id: 172, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: false, audioKey: "valiz", spokenText: "" },
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "çorap", spokenText: "" }
    ]},

    // 10. Traktör vs Kelebek
    { id: 173, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "" }
    ]},
    { id: 174, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "" }
    ]},

    // 11. Kanepe vs Yastık
    { id: 175, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: true, audioKey: "kanepe", spokenText: "" }, // Word 'koltuk' -> 'kanepe' olarak düzeltildi
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "" }
    ]},
    { id: 176, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: false, audioKey: "kanepe", spokenText: "" }, // Word 'koltuk' -> 'kanepe' olarak düzeltildi
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 12. Dolu Su Şişesi vs Boş Su Şişesi
    { id: 177, question: "Ağır olan hangisi?", questionAudioKey: "q_which_is_heavy", activityType: ActivityType.HeavyLight, options: [
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "" },
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "" }
    ]},
    { id: 178, question: "Hafif olan hangisi?", questionAudioKey: "q_which_is_light", activityType: ActivityType.HeavyLight, options: [
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "" },
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "" }
    ]},
];