import { ConceptRound, ActivityType } from '../../../../types';

export const bigSmallData: ConceptRound[] = [
    // Fil (28) vs Fare (29)
    { id: 1, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: true, audioKey: "fil", spokenText: "büyük fil" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: false, audioKey: "fare", spokenText: "küçük fare" }
    ]},
    { id: 2, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "büyük fil" },
        { id: 29, word: "fare", imageUrl: "/images/29.png", isCorrect: true, audioKey: "fare", spokenText: "küçük fare" }
    ]},
    // Balina (491) vs Karınca (349)
    { id: 3, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "büyük balina" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karınca", spokenText: "küçük karınca" }
    ]},
    { id: 4, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "büyük balina" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karınca", spokenText: "küçük karınca" }
    ]},
    // Okul Otobüsü (105) vs Bisiklet (110)
    { id: 5, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: true, audioKey: "okul_otobüsü", spokenText: "büyük otobüs" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: false, audioKey: "bisiklet", spokenText: "küçük bisiklet" }
    ]},
    { id: 6, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: false, audioKey: "okul_otobüsü", spokenText: "büyük otobüs" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: true, audioKey: "bisiklet", spokenText: "küçük bisiklet" }
    ]},
    // Gemi (621) vs Sandal (493)
    { id: 7, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: true, audioKey: "gemi", spokenText: "büyük gemi" },
        { id: 493, word: "sandal", imageUrl: "/images/493.png", isCorrect: false, audioKey: "sandal", spokenText: "küçük sandal" }
    ]},
    { id: 8, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: false, audioKey: "gemi", spokenText: "büyük gemi" },
        { id: 493, word: "sandal", imageUrl: "/images/493.png", isCorrect: true, audioKey: "sandal", spokenText: "küçük sandal" }
    ]},
    // Ev (571) vs Kuş Evi (534)
    { id: 9, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: true, audioKey: "ev", spokenText: "büyük ev" },
        { id: 534, word: "kuş evi", imageUrl: "/images/534.png", isCorrect: false, audioKey: "kuş_evi", spokenText: "küçük kuş evi" }
    ]},
    { id: 10, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: false, audioKey: "ev", spokenText: "büyük ev" },
        { id: 534, word: "kuş evi", imageUrl: "/images/534.png", isCorrect: true, audioKey: "kuş_evi", spokenText: "küçük kuş evi" }
    ]},
    // Büyük Araba (1) vs Küçük Araba (2)
    { id: 11, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "büyük araba" },
        { id: 2, word: "araba", imageUrl: "/images/2.png", isCorrect: false, audioKey: "araba", spokenText: "küçük araba" }
    ]},
    { id: 12, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "büyük araba" },
        { id: 2, word: "araba", imageUrl: "/images/2.png", isCorrect: true, audioKey: "araba", spokenText: "küçük araba" }
    ]},
    // Kamyon (288) vs Araba (4)
    { id: 13, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "büyük kamyon" },
        { id: 4, word: "araba", imageUrl: "/images/4.png", isCorrect: false, audioKey: "araba", spokenText: "küçük araba" }
    ]},
    { id: 14, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "büyük kamyon" },
        { id: 4, word: "araba", imageUrl: "/images/4.png", isCorrect: true, audioKey: "araba", spokenText: "küçük araba" }
    ]},
    // Güneş (237) vs Yıldız (239)
    { id: 15, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "büyük güneş" },
        { id: 239, word: "yıldız", imageUrl: "/images/239.png", isCorrect: false, audioKey: "yıldız", spokenText: "küçük yıldız" }
    ]},
    { id: 16, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "büyük güneş" },
        { id: 239, word: "yıldız", imageUrl: "/images/239.png", isCorrect: true, audioKey: "yıldız", spokenText: "küçük yıldız" }
    ]},
    // Ağaç (10) vs Çiçek (76)
    { id: 17, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "ağaç", spokenText: "büyük ağaç" },
        { id: 76, word: "papatya", imageUrl: "/images/76.png", isCorrect: false, audioKey: "papatya", spokenText: "küçük papatya" }
    ]},
    { id: 18, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "ağaç", spokenText: "büyük ağaç" },
        { id: 76, word: "papatya", imageUrl: "/images/76.png", isCorrect: true, audioKey: "papatya", spokenText: "küçük papatya" }
    ]},
    // Gökdelen (612) vs Ev (175)
    { id: 19, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: true, audioKey: "gökdelen", spokenText: "büyük gökdelen" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: false, audioKey: "ev", spokenText: "küçük ev" }
    ]},
    { id: 20, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: false, audioKey: "gökdelen", spokenText: "büyük gökdelen" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: true, audioKey: "ev", spokenText: "küçük ev" }
    ]},
    // Balina (491) vs Balık (740)
    { id: 21, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "büyük balina" },
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: false, audioKey: "balık", spokenText: "küçük balık" }
    ]},
    { id: 22, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "büyük balina" },
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: true, audioKey: "balık", spokenText: "küçük balık" }
    ]},
    // Pilates Topu (362) vs Misket (762)
    { id: 23, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 362, word: "pilates topu", imageUrl: "/images/362.png", isCorrect: true, audioKey: "pilates_topu", spokenText: "büyük top" },
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "küçük misket" }
    ]},
    { id: 24, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 362, word: "pilates topu", imageUrl: "/images/362.png", isCorrect: false, audioKey: "pilates_topu", spokenText: "büyük top" },
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "küçük misket" }
    ]},
    // Karpuz (170) vs Kiraz (278)
    { id: 25, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: true, audioKey: "karpuz", spokenText: "büyük karpuz" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: false, audioKey: "kiraz", spokenText: "küçük kiraz" }
    ]},
    { id: 26, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: false, audioKey: "karpuz", spokenText: "büyük karpuz" },
        { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: true, audioKey: "kiraz", spokenText: "küçük kiraz" }
    ]},
    // Ansiklopedi (554) vs Silgi (535)
    { id: 27, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "büyük ansiklopedi" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "küçük silgi" }
    ]},
    { id: 28, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "büyük ansiklopedi" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "küçük silgi" }
    ]},
    // Traktör (289) vs Bisiklet (110)
    { id: 29, question: "Büyük olan hangisi?", questionAudioKey: "q_which_is_big", activityType: ActivityType.BigSmall, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "büyük traktör" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: false, audioKey: "bisiklet", spokenText: "küçük bisiklet" }
    ]},
    { id: 30, question: "Küçük olan hangisi?", questionAudioKey: "q_which_is_small", activityType: ActivityType.BigSmall, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "büyük traktör" },
        { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: true, audioKey: "bisiklet", spokenText: "küçük bisiklet" }
    ]},
];