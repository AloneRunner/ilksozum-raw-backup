import { ConceptRound, ActivityType } from '../../../../types';

export const longShortData: ConceptRound[] = [
    // 1. Zürafa vs Fare
    { id: 245, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long_person", activityType: ActivityType.LongShort, options: [
        { id: 101, word: "zürafa", imageUrl: "/images/101.png", isCorrect: true, audioKey: "zürafa", spokenText: "" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: false, audioKey: "fare", spokenText: "" }
    ]},
    { id: 246, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 101, word: "zürafa", imageUrl: "/images/101.png", isCorrect: false, audioKey: "zürafa", spokenText: "" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: true, audioKey: "fare", spokenText: "" }
    ]},

    // 2. Pantolon vs Şort
    { id: 247, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: true, audioKey: "pantolon", spokenText: "" },
        { id: 80, word: "şort", imageUrl: "/images/80.png", isCorrect: false, audioKey: "şort", spokenText: "" }
    ]},
    { id: 248, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: false, audioKey: "pantolon", spokenText: "" },
        { id: 80, word: "şort", imageUrl: "/images/80.png", isCorrect: true, audioKey: "şort", spokenText: "" }
    ]},

    // 3. Havuç
    { id: 249, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: true, audioKey: "havuç", spokenText: "" },
        { id: 99, word: "havuç", imageUrl: "/images/99.png", isCorrect: false, audioKey: "havuç", spokenText: "" }
    ]},
    { id: 250, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: false, audioKey: "havuç", spokenText: "" },
        { id: 99, word: "havuç", imageUrl: "/images/99.png", isCorrect: true, audioKey: "havuç", spokenText: "" }
    ]},

    // 4. Merdiven vs Tabure
    { id: 251, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 494, word: "merdiven", imageUrl: "/images/494.png", isCorrect: true, audioKey: "merdiven", spokenText: "" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: false, audioKey: "tabure", spokenText: "" }
    ]},
    { id: 252, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 494, word: "merdiven", imageUrl: "/images/494.png", isCorrect: false, audioKey: "merdiven", spokenText: "" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: true, audioKey: "tabure", spokenText: "" }
    ]},

    // 5. Tren vs Araba
    { id: 253, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: true, audioKey: "tren", spokenText: "" },
        { id: 246, word: "araba", imageUrl: "/images/2.png", isCorrect: false, audioKey: "araba", spokenText: "" }
    ]},
    { id: 254, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: false, audioKey: "tren", spokenText: "" },
        { id: 246, word: "araba", imageUrl: "/images/2.png", isCorrect: true, audioKey: "araba", spokenText: "" }
    ]},

    // 6. Yılan vs Solucan
    { id: 255, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: true, audioKey: "yılan", spokenText: "" },
        { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: false, audioKey: "solucan", spokenText: "" }
    ]},
    { id: 256, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: false, audioKey: "yılan", spokenText: "" },
        { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: true, audioKey: "solucan", spokenText: "" }
    ]},

    // 7. Saç
    { id: 257, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: true, audioKey: "saç", spokenText: "" },
        { id: 488, word: "saç", imageUrl: "/images/488.png", isCorrect: false, audioKey: "saç", spokenText: "" }
    ]},
    { id: 258, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: false, audioKey: "saç", spokenText: "" },
        { id: 488, word: "saç", imageUrl: "/images/488.png", isCorrect: true, audioKey: "saç", spokenText: "" }
    ]},

    // 8. Ağaç
    { id: 259, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 252, word: "ağaç", imageUrl: "/images/8.png", isCorrect: true, audioKey: "ağaç", spokenText: "" },
        { id: 253, word: "ağaç", imageUrl: "/images/9.png", isCorrect: false, audioKey: "ağaç", spokenText: "" }
    ]},
    { id: 260, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 252, word: "ağaç", imageUrl: "/images/8.png", isCorrect: false, audioKey: "ağaç", spokenText: "" },
        { id: 253, word: "ağaç", imageUrl: "/images/9.png", isCorrect: true, audioKey: "ağaç", spokenText: "" }
    ]},

    // 9. Cetvel vs Silgi
    { id: 261, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "" }
    ]},
    { id: 262, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "" }
    ]},

    // 10. Kalem vs Silgi
    { id: 263, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: true, audioKey: "kalem", spokenText: "" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "" }
    ]},
    { id: 20, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: false, audioKey: "kalem", spokenText: "" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "" }
    ]},

    // 11. Yılan vs Tırtıl
    { id: 21, question: "Uzun olan hangisi?", questionAudioKey: "q_which_is_long", activityType: ActivityType.LongShort, options: [
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: true, audioKey: "yılan", spokenText: "" },
        { id: 445, word: "tırtıl", imageUrl: "/images/445.png", isCorrect: false, audioKey: "tırtıl", spokenText: "" }
    ]},
    { id: 22, question: "Kısa olan hangisi?", questionAudioKey: "q_which_is_short", activityType: ActivityType.LongShort, options: [
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: false, audioKey: "yılan", spokenText: "" },
        { id: 445, word: "tırtıl", imageUrl: "/images/445.png", isCorrect: true, audioKey: "tırtıl", spokenText: "" }
    ]},
];