import { ConceptRound, ActivityType } from '../../../../types';

export const aliveLifelessData: ConceptRound[] = [
    // 1. Ağaç vs Taş
    { id: 1, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "agac_canli", spokenText: "" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "tas_cansiz", spokenText: "" }
    ]},
    { id: 2, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "agac_canli", spokenText: "" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "tas_cansiz", spokenText: "" }
    ]},

    // 2. Kedi vs Masa
    { id: 3, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: true, audioKey: "kedi_canli", spokenText: "" },
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa_cansiz", spokenText: "" }
    ]},
    { id: 4, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: false, audioKey: "kedi_canli", spokenText: "" },
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa_cansiz", spokenText: "" }
    ]},

    // 3. Çiçek vs Araba
    { id: 5, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: true, audioKey: "cicek_canli", spokenText: "" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba_cansiz", spokenText: "" }
    ]},
    { id: 6, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: false, audioKey: "cicek_canli", spokenText: "" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba_cansiz", spokenText: "" }
    ]},

    // 4. Çocuk vs Robot
    { id: 7, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive_person", activityType: ActivityType.AliveLifeless, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk_canli", spokenText: "" },
        { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: false, audioKey: "robot_cansiz", spokenText: "" }
    ]},
    { id: 8, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk_canli", spokenText: "" },
        { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: true, audioKey: "robot_cansiz", spokenText: "" }
    ]},

    // 5. Kelebek vs Kitap
    { id: 9, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek_canli", spokenText: "" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap_cansiz", spokenText: "" }
    ]},
    { id: 10, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek_canli", spokenText: "" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap_cansiz", spokenText: "" }
    ]},

    // 6. Balık vs Sandalye
    { id: 11, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: true, audioKey: "balik_canli", spokenText: "" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye_cansiz", spokenText: "" }
    ]},
    { id: 12, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: false, audioKey: "balik_canli", spokenText: "" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye_cansiz", spokenText: "" }
    ]},

    // 8. Karınca vs Anahtar
    { id: 15, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karinca_canli", spokenText: "" },
        { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: false, audioKey: "anahtar_cansiz", spokenText: "" }
    ]},
    { id: 16, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karinca_canli", spokenText: "" },
        { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: true, audioKey: "anahtar_cansiz", spokenText: "" }
    ]},

    // 9. Doktor vs Çanta
    { id: 17, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive_person", activityType: ActivityType.AliveLifeless, options: [
        { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: true, audioKey: "doktor_canli", spokenText: "" },
        { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: false, audioKey: "canta_cansiz", spokenText: "" }
    ]},
    { id: 18, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: false, audioKey: "doktor_canli", spokenText: "" },
        { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: true, audioKey: "canta_cansiz", spokenText: "" }
    ]},

    // 10. Kurbağa vs Top
    { id: 19, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: true, audioKey: "kurbaga_canli", spokenText: "" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top_cansiz", spokenText: "" }
    ]},
    { id: 20, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: false, audioKey: "kurbaga_canli", spokenText: "" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top_cansiz", spokenText: "" }
    ]},

    // 11. Zebra vs Tuvalet Kağıdı
    { id: 21, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 866, word: "zebra", imageUrl: "/images/866.png", isCorrect: true, audioKey: "zebra_canli", spokenText: "" },
        { id: 815, word: "tuvalet kağıdı", imageUrl: "/images/815.png", isCorrect: false, audioKey: "tuvalet_kagidi_cansiz", spokenText: "" }
    ]},
    { id: 22, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 866, word: "zebra", imageUrl: "/images/866.png", isCorrect: false, audioKey: "zebra_canli", spokenText: "" },
        { id: 815, word: "tuvalet kağıdı", imageUrl: "/images/815.png", isCorrect: true, audioKey: "tuvalet_kagidi_cansiz", spokenText: "" }
    ]},

    // 13. Hamster vs Helikopter
    { id: 25, question: "Canlı olan hangisi?", questionAudioKey: "q_which_is_alive", activityType: ActivityType.AliveLifeless, options: [
        { id: 861, word: "hamster", imageUrl: "/images/861.png", isCorrect: true, audioKey: "hamster_canli", spokenText: "" },
        { id: 162, word: "helikopter", imageUrl: "/images/162.png", isCorrect: false, audioKey: "helikopter_cansiz", spokenText: "" }
    ]},
    { id: 26, question: "Cansız olan hangisi?", questionAudioKey: "q_which_is_lifeless", activityType: ActivityType.AliveLifeless, options: [
        { id: 861, word: "hamster", imageUrl: "/images/861.png", isCorrect: false, audioKey: "hamster_canli", spokenText: "" },
        { id: 162, word: "helikopter", imageUrl: "/images/162.png", isCorrect: true, audioKey: "helikopter_cansiz", spokenText: "" }
    ]},
];