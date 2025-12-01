import { ConceptRound, ActivityType } from '../../../../types';

export const bitterSweetData: ConceptRound[] = [
    // 1. Biber vs Bal
    { id: 27, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter_person", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "" },
        { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: false, audioKey: "bal", spokenText: "" }
    ]},
    { id: 28, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "" },
        { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: true, audioKey: "bal", spokenText: "" }
    ]},

    // 2. Limon vs Lolipop
    { id: 29, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "" },
        { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: false, audioKey: "lolipop", spokenText: "" }
    ]},
    { id: 30, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "" },
        { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: true, audioKey: "lolipop", spokenText: "" }
    ]},

    // 3. Greyfurt vs Pasta
    { id: 31, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: true, audioKey: "greyfurt", spokenText: "" },
        { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: false, audioKey: "pasta", spokenText: "" }
    ]},
    { id: 32, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: false, audioKey: "greyfurt", spokenText: "" },
        { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: true, audioKey: "pasta", spokenText: "" }
    ]},

    // 4. Vişne vs Kiraz
    { id: 33, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: true, audioKey: "eksi_visne", spokenText: "" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: false, audioKey: "tatli_kiraz", spokenText: "" }
    ]},
    { id: 34, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: false, audioKey: "eksi_visne", spokenText: "" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: true, audioKey: "tatli_kiraz", spokenText: "" }
    ]},

    // 5. Kahve vs Milkshake
    { id: 35, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "" },
        { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: false, audioKey: "milkshake", spokenText: "" }
    ]},
    { id: 36, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "" },
        { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: true, audioKey: "milkshake", spokenText: "" }
    ]},

    // 6. Limon vs Çikolata
    { id: 37, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "" },
        { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: false, audioKey: "çikolata", spokenText: "" }
    ]},
    { id: 38, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "" },
        { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: true, audioKey: "çikolata", spokenText: "" }
    ]},

    // 7. Sirke vs Reçel
    { id: 39, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: true, audioKey: "sirke", spokenText: "" },
        { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: false, audioKey: "reçel", spokenText: "" }
    ]},
    { id: 40, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: false, audioKey: "sirke", spokenText: "" },
        { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: true, audioKey: "reçel", spokenText: "" }
    ]},

    // 8. Soğan vs Çilek
    { id: 41, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: true, audioKey: "soğan", spokenText: "" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "çilek", spokenText: "" }
    ]},
    { id: 42, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: false, audioKey: "soğan", spokenText: "" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "çilek", spokenText: "" }
    ]},

    // 9. Kahve vs Bisküvi
    { id: 43, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "" },
        { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: false, audioKey: "bisküvi", spokenText: "" }
    ]},
    { id: 44, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "" },
        { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: true, audioKey: "bisküvi", spokenText: "" }
    ]},

    // 10. Biber vs Dondurma
    { id: 45, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "" }
    ]},
    { id: 46, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "" }
    ]},

    // 11. Limon vs Elma
    { id: 47, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "" }
    ]},
    { id: 48, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 12. Zencefil vs Jelibon
    { id: 49, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 640, word: "zencefil", imageUrl: "/images/640.png", isCorrect: true, audioKey: "zencefil", spokenText: "" },
        { id: 806, word: "jelibon", imageUrl: "/images/806.png", isCorrect: false, audioKey: "jelibon", spokenText: "" }
    ]},
    { id: 50, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 640, word: "zencefil", imageUrl: "/images/640.png", isCorrect: false, audioKey: "zencefil", spokenText: "" },
        { id: 806, word: "jelibon", imageUrl: "/images/806.png", isCorrect: true, audioKey: "jelibon", spokenText: "" }
    ]},
];