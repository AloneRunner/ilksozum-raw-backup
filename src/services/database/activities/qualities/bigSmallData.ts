import { ConceptRound, ActivityType } from '../../../../types';

export const bigSmallData: ConceptRound[] = [
    // 1. Fil vs Fare
    { id: 1, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big_person", activityType: ActivityType.BigSmall, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: true, audioKey: "fil", spokenText: "fil" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: false, audioKey: "fare", spokenText: "fare" }
    ]},
    { id: 2, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "fil" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: true, audioKey: "fare", spokenText: "fare" }
    ]},

    // 2. Balina vs Karınca
    { id: 3, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "balina" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karınca", spokenText: "karınca" }
    ]},
    { id: 4, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "balina" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karınca", spokenText: "karınca" }
    ]},

    // 3. Okul Otobüsü vs Bisiklet
    { id: 5, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: true, audioKey: "okul_otobüsü", spokenText: "okul otobüsü" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: false, audioKey: "bisiklet", spokenText: "bisiklet" }
    ]},
    { id: 6, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: false, audioKey: "okul_otobüsü", spokenText: "okul otobüsü" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: true, audioKey: "bisiklet", spokenText: "bisiklet" }
    ]},

    // 4. Gemi vs Sandal (Birleştirildi)
    { id: 7, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 492, word: "gemi", imageUrl: "/images/492.png", isCorrect: true, audioKey: "gemi", spokenText: "gemi" },
        { id: 493, word: "sandal", imageUrl: "/images/493.gif", isCorrect: false, audioKey: "sandal", spokenText: "sandal" }
    ]},
    { id: 8, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 492, word: "gemi", imageUrl: "/images/492.png", isCorrect: false, audioKey: "gemi", spokenText: "gemi" },
        { id: 493, word: "sandal", imageUrl: "/images/493.gif", isCorrect: true, audioKey: "sandal", spokenText: "sandal" }
    ]},

    // 5. Ev vs Kuş Evi
    { id: 9, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: true, audioKey: "ev", spokenText: "ev" },
        { id: 534, word: "kuş evi", imageUrl: "/images/534.png", isCorrect: false, audioKey: "kuş_evi", spokenText: "kuş evi" }
    ]},
    { id: 10, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: false, audioKey: "ev", spokenText: "ev" },
        { id: 534, word: "kuş evi", imageUrl: "/images/534.png", isCorrect: true, audioKey: "kuş_evi", spokenText: "kuş evi" }
    ]},

    // 6. Araba (Büyük) vs Araba (Küçük)
    { id: 11, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "araba" },
        { id: 2, word: "araba", imageUrl: "/images/2.png", isCorrect: false, audioKey: "araba", spokenText: "araba" }
    ]},
    { id: 12, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "araba" },
        { id: 2, word: "araba", imageUrl: "/images/2.png", isCorrect: true, audioKey: "araba", spokenText: "araba" }
    ]},

    // 7. Kamyon vs Araba
    { id: 13, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "kamyon" },
        { id: 4, word: "araba", imageUrl: "/images/4.png", isCorrect: false, audioKey: "araba", spokenText: "araba" }
    ]},
    { id: 14, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "kamyon" },
        { id: 4, word: "araba", imageUrl: "/images/4.png", isCorrect: true, audioKey: "araba", spokenText: "araba" }
    ]},

    // 8. Güneş vs Yıldız
    { id: 15, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "güneş" },
        { id: 239, word: "yıldız", imageUrl: "/images/239.png", isCorrect: false, audioKey: "yıldız", spokenText: "yıldız" }
    ]},
    { id: 16, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "güneş" },
        { id: 239, word: "yıldız", imageUrl: "/images/239.png", isCorrect: true, audioKey: "yıldız", spokenText: "yıldız" }
    ]},

    // 9. Ağaç vs Papatya
    { id: 17, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "ağaç", spokenText: "ağaç" },
        { id: 76, word: "papatya", imageUrl: "/images/76.png", isCorrect: false, audioKey: "papatya", spokenText: "papatya" }
    ]},
    { id: 18, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "ağaç", spokenText: "ağaç" },
        { id: 76, word: "papatya", imageUrl: "/images/76.png", isCorrect: true, audioKey: "papatya", spokenText: "papatya" }
    ]},

    // 10. Gökdelen vs Ev (Birleştirildi)
    { id: 19, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: true, audioKey: "gökdelen", spokenText: "gökdelen" },
        { id: 533, word: "ev", imageUrl: "/images/533.png", isCorrect: false, audioKey: "ev", spokenText: "ev" }
    ]},
    { id: 20, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: false, audioKey: "gökdelen", spokenText: "gökdelen" },
        { id: 533, word: "ev", imageUrl: "/images/533.png", isCorrect: true, audioKey: "ev", spokenText: "ev" }
    ]},

    // 11. Balina vs Balık
    { id: 21, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "balina" },
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: false, audioKey: "balık", spokenText: "balık" }
    ]},
    { id: 22, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "balina" },
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: true, audioKey: "balık", spokenText: "balık" }
    ]},

    // 12. Pilates Topu vs Misket
    { id: 23, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 362, word: "pilates topu", imageUrl: "/images/362.png", isCorrect: true, audioKey: "pilates_topu", spokenText: "pilates topu" },
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "misket" }
    ]},
    { id: 24, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 362, word: "pilates topu", imageUrl: "/images/362.png", isCorrect: false, audioKey: "pilates_topu", spokenText: "pilates topu" },
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "misket" }
    ]},

    // 13. Karpuz vs Kiraz
    { id: 25, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: true, audioKey: "karpuz", spokenText: "karpuz" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: false, audioKey: "kiraz", spokenText: "kiraz" }
    ]},
    { id: 26, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: false, audioKey: "karpuz", spokenText: "karpuz" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: true, audioKey: "kiraz", spokenText: "kiraz" }
    ]},

    // 14. Ansiklopedi vs Silgi
    { id: 27, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "silgi" }
    ]},
    { id: 28, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "silgi" }
    ]},
    
    // 15. Traktör vs Bisiklet
    { id: 29, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "traktör" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: false, audioKey: "bisiklet", spokenText: "bisiklet" }
    ]},
    { id: 30, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "traktör" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: true, audioKey: "bisiklet", spokenText: "bisiklet" }
    ]},
    
    // 16. Kanepe vs Koltuk
    { id: 31, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: true, audioKey: "kanepe", spokenText: "kanepe" },
        { id: 548, word: "koltuk", imageUrl: "/images/548.png", isCorrect: false, audioKey: "koltuk", spokenText: "koltuk" }
    ]},
    { id: 32, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: false, audioKey: "kanepe", spokenText: "kanepe" },
        { id: 548, word: "koltuk", imageUrl: "/images/548.png", isCorrect: true, audioKey: "koltuk", spokenText: "koltuk" }
    ]},

    // 17. Merdiven vs Tabure
    { id: 33, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 494, word: "merdiven", imageUrl: "/images/494.png", isCorrect: true, audioKey: "merdiven", spokenText: "merdiven" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: false, audioKey: "tabure", spokenText: "tabure" }
    ]},
    { id: 34, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 494, word: "merdiven", imageUrl: "/images/494.png", isCorrect: false, audioKey: "merdiven", spokenText: "merdiven" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: true, audioKey: "tabure", spokenText: "tabure" }
    ]},
];