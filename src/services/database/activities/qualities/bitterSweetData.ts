import { ConceptRound, ActivityType } from '../../../../types';

export const bitterSweetData: ConceptRound[] = [
    // 1. Biber (227) vs Bal (228)
    { id: 1, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "acı biber" },
        { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: false, audioKey: "bal", spokenText: "tatlı bal" }
    ]},
    { id: 2, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "acı biber" },
        { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: true, audioKey: "bal", spokenText: "tatlı bal" }
    ]},
    // 2. Limon (55) vs Lolipop (240)
    { id: 3, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: false, audioKey: "lolipop", spokenText: "tatlı lolipop" }
    ]},
    { id: 4, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: true, audioKey: "lolipop", spokenText: "tatlı lolipop" }
    ]},
    // 3. Greyfurt (637) vs Pasta (78)
    { id: 5, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: true, audioKey: "greyfurt", spokenText: "ekşi greyfurt" },
        { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: false, audioKey: "pasta", spokenText: "tatlı pasta" }
    ]},
    { id: 6, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: false, audioKey: "greyfurt", spokenText: "ekşi greyfurt" },
        { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: true, audioKey: "pasta", spokenText: "tatlı pasta" }
    ]},
    // 4. Ekşi Vişne (294) vs Tatlı Kiraz (278)
    { id: 7, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: true, audioKey: "eksi_vişne", spokenText: "ekşi vişne" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: false, audioKey: "tatli_kiraz", spokenText: "tatlı kiraz" }
    ]},
    { id: 8, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: false, audioKey: "eksi_vişne", spokenText: "ekşi vişne" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: true, audioKey: "tatli_kiraz", spokenText: "tatlı kiraz" }
    ]},
    // 5. Kahve (635) vs Milkshake (645)
    { id: 9, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "acı kahve" },
        { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: false, audioKey: "milkshake", spokenText: "tatlı milkshake" }
    ]},
    { id: 10, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "acı kahve" },
        { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: true, audioKey: "milkshake", spokenText: "tatlı milkshake" }
    ]},
    // 6. Limon (55) vs Çikolata (297)
    { id: 11, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: false, audioKey: "çikolata", spokenText: "tatlı çikolata" }
    ]},
    { id: 12, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: true, audioKey: "çikolata", spokenText: "tatlı çikolata" }
    ]},
    // 7. Sirke (638) vs Reçel (639)
    { id: 13, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: true, audioKey: "sirke", spokenText: "ekşi sirke" },
        { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: false, audioKey: "reçel", spokenText: "tatlı reçel" }
    ]},
    { id: 14, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: false, audioKey: "sirke", spokenText: "ekşi sirke" },
        { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: true, audioKey: "reçel", spokenText: "tatlı reçel" }
    ]},
    // 8. Soğan (75) vs Çilek (171)
    { id: 15, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: true, audioKey: "soğan", spokenText: "acı soğan" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "çilek", spokenText: "tatlı çilek" }
    ]},
    { id: 16, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: false, audioKey: "soğan", spokenText: "acı soğan" },
        { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "çilek", spokenText: "tatlı çilek" }
    ]},
    // 9. Kahve (635) vs Bisküvi (330)
    { id: 17, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "acı kahve" },
        { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: false, audioKey: "bisküvi", spokenText: "tatlı bisküvi" }
    ]},
    { id: 18, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "acı kahve" },
        { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: true, audioKey: "bisküvi", spokenText: "tatlı bisküvi" }
    ]},
    // 10. Biber (227) vs Dondurma (63)
    { id: 19, question: "Acı olan hangisi?", questionAudioKey: "q_which_is_bitter", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "acı biber" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "tatlı dondurma" }
    ]},
    { id: 20, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "acı biber" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "tatlı dondurma" }
    ]},
    // 11. Limon (55) vs Elma (43)
    { id: 21, question: "Ekşi olan hangisi?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "tatlı elma" }
    ]},
    { id: 22, question: "Tatlı olan hangisi?", questionAudioKey: "q_which_is_sweet", activityType: ActivityType.BitterSweet, options: [
        { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "ekşi limon" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "tatlı elma" }
    ]},
];