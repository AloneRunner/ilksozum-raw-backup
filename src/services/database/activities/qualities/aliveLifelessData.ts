import { ConceptRound, ActivityType } from '../../../../types';

export const aliveLifelessData: ConceptRound[] = [
    // 1. Ağaç (10) vs Taş (347)
    { id: 1, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "ağaç", spokenText: "canlı ağaç" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "cansız taş" }
    ]},
    { id: 2, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "ağaç", spokenText: "canlı ağaç" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "cansız taş" }
    ]},
    // 2. Kedi (702) vs Masa (134)
    { id: 3, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: true, audioKey: "kedi", spokenText: "canlı kedi" },
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "cansız masa" }
    ]},
    { id: 4, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: false, audioKey: "kedi", spokenText: "canlı kedi" },
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "cansız masa" }
    ]},
    // 3. Çiçek (443) vs Araba (1)
    { id: 5, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: true, audioKey: "çiçek", spokenText: "canlı çiçek" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "cansız araba" }
    ]},
    { id: 6, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: false, audioKey: "çiçek", spokenText: "canlı çiçek" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "cansız araba" }
    ]},
    // 4. Çocuk (547) vs Robot (177)
    { id: 7, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "çocuk", spokenText: "canlı çocuk" },
        { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: false, audioKey: "robot", spokenText: "cansız robot" }
    ]},
    { id: 8, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "çocuk", spokenText: "canlı çocuk" },
        { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: true, audioKey: "robot", spokenText: "cansız robot" }
    ]},
    // 5. Kelebek (274) vs Kitap (36)
    { id: 9, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "canlı kelebek" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "cansız kitap" }
    ]},
    { id: 10, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "canlı kelebek" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "cansız kitap" }
    ]},
    // 6. Balık (740) vs Sandalye (319)
    { id: 11, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: true, audioKey: "balık", spokenText: "canlı balık" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "cansız sandalye" }
    ]},
    { id: 12, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: false, audioKey: "balık", spokenText: "canlı balık" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "cansız sandalye" }
    ]},
    // 7. Muz (114) vs Gömlek (255)
    { id: 13, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "canlı muz" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gömlek", spokenText: "cansız gömlek" }
    ]},
    { id: 14, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "canlı muz" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gömlek", spokenText: "cansız gömlek" }
    ]},
    // 8. Karınca (349) vs Anahtar (142)
    { id: 15, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karınca", spokenText: "canlı karınca" },
        { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: false, audioKey: "anahtar", spokenText: "cansız anahtar" }
    ]},
    { id: 16, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karınca", spokenText: "canlı karınca" },
        { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: true, audioKey: "anahtar", spokenText: "cansız anahtar" }
    ]},
    // 9. Doktor (324) vs Çanta (207)
    { id: 17, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: true, audioKey: "doktor", spokenText: "canlı doktor" },
        { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: false, audioKey: "çanta", spokenText: "cansız çanta" }
    ]},
    { id: 18, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: false, audioKey: "doktor", spokenText: "canlı doktor" },
        { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: true, audioKey: "çanta", spokenText: "cansız çanta" }
    ]},
    // 10. Kurbağa (275) vs Top (156)
    { id: 19, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: true, audioKey: "kurbağa", spokenText: "canlı kurbağa" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "cansız top" }
    ]},
    { id: 20, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: false, audioKey: "kurbağa", spokenText: "canlı kurbağa" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "cansız top" }
    ]},
];