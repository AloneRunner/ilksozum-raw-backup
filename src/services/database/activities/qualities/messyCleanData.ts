import { ConceptRound, ActivityType } from '../../../../types';

export const messyCleanData: ConceptRound[] = [
    // 1. Oda
    { id: 264, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: true, audioKey: "oda", spokenText: "" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: false, audioKey: "oda", spokenText: "" }
    ]},
    { id: 265, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: false, audioKey: "oda", spokenText: "" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: true, audioKey: "oda", spokenText: "" }
    ]},

    // 2. Kitaplık
    { id: 266, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: true, audioKey: "kitaplık", spokenText: "" },
        { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: false, audioKey: "kitaplık", spokenText: "" }
    ]},
    { id: 267, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: false, audioKey: "kitaplık", spokenText: "" },
        { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: true, audioKey: "kitaplık", spokenText: "" }
    ]},

    // 3. Kalemlik
    { id: 268, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik", spokenText: "" },
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik", spokenText: "" }
    ]},
    { id: 269, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik", spokenText: "" },
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik", spokenText: "" }
    ]},

    // 4. Yatak
    { id: 270, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "" }
    ]},
    { id: 271, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "" }
    ]},

    // 5. Dolap
    { id: 272, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: true, audioKey: "dolap", spokenText: "" },
        { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: false, audioKey: "dolap", spokenText: "" }
    ]},
    { id: 273, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: false, audioKey: "dolap", spokenText: "" },
        { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: true, audioKey: "dolap", spokenText: "" }
    ]},

    // 6. Saç
    { id: 274, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: true, audioKey: "saç", spokenText: "" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: false, audioKey: "saç", spokenText: "" }
    ]},
    { id: 275, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: false, audioKey: "saç", spokenText: "" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: true, audioKey: "saç", spokenText: "" }
    ]},

    // 7. Gömlek
    { id: 276, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "" }, // Kırışık/Kirli Gömlek
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "" } // Düzgün/Temiz Gömlek
    ]},
    { id: 277, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "" }
    ]},

    // 8. Oyuncak Kutusu
    { id: 278, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "" },
        { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "" }
    ]},
    { id: 279, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "" },
        { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "" }
    ]},

    // 9. Kitap Yığını vs Masa
    { id: 280, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: true, audioKey: "kitap_yigini", spokenText: "" },
        { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: false, audioKey: "masa", spokenText: "" } // Düzgün masa
    ]},
    { id: 281, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: false, audioKey: "kitap_yigini", spokenText: "" },
        { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: true, audioKey: "masa", spokenText: "" }
    ]},

    // 10. Puzzle
    { id: 282, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: true, audioKey: "puzzle_parcalari", spokenText: "" },
        { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: false, audioKey: "puzzle", spokenText: "" }
    ]},
    { id: 20, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [ // AudioKey eklendi
        { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: false, audioKey: "puzzle_parcalari", spokenText: "" },
        { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: true, audioKey: "puzzle", spokenText: "" }
    ]},

    // 11. Çöp Kutusu
    { id: 21, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [ // AudioKey eklendi
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "" }, // Dolu/Dağınık
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "" } // Boş/Temiz
    ]},
    { id: 22, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [ // AudioKey eklendi
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "" }
    ]},
];