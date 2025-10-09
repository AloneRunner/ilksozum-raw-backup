import { ConceptRound, ActivityType } from '../../../../types';

export const messyCleanData: ConceptRound[] = [
    // Dağınık Oda (229) vs Toplu Oda (230)
    { id: 1, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: true, audioKey: "oda", spokenText: "dağınık oda" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: false, audioKey: "oda", spokenText: "toplu oda" }
    ]},
    { id: 2, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: false, audioKey: "oda", spokenText: "dağınık oda" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: true, audioKey: "oda", spokenText: "toplu oda" }
    ]},
    // Dağınık Kitaplık (286) vs Toplu Kitaplık (287)
    { id: 3, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: true, audioKey: "kitaplık", spokenText: "dağınık kitaplık" },
        { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: false, audioKey: "kitaplık", spokenText: "toplu kitaplık" }
    ]},
    { id: 4, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: false, audioKey: "kitaplık", spokenText: "dağınık kitaplık" },
        { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: true, audioKey: "kitaplık", spokenText: "toplu kitaplık" }
    ]},
    // Dağınık Kalemlik (544) vs Toplu Kalemlik (543)
    { id: 5, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik", spokenText: "dağınık kalemlik" },
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik", spokenText: "toplu kalemlik" }
    ]},
    { id: 6, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik", spokenText: "dağınık kalemlik" },
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik", spokenText: "toplu kalemlik" }
    ]},
    // Dağınık Yatak (659) vs Toplu Yatak (606)
    { id: 7, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "dağınık yatak" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "toplu yatak" }
    ]},
    { id: 8, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "dağınık yatak" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "toplu yatak" }
    ]},
    // Dağınık Dolap (661) vs Toplu Dolap (660)
    { id: 9, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: true, audioKey: "dolap", spokenText: "dağınık dolap" },
        { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: false, audioKey: "dolap", spokenText: "toplu dolap" }
    ]},
    { id: 10, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: false, audioKey: "dolap", spokenText: "dağınık dolap" },
        { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: true, audioKey: "dolap", spokenText: "toplu dolap" }
    ]},
    // Dağınık Saç (663) vs Toplu Saç (662)
    { id: 11, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: true, audioKey: "saç", spokenText: "dağınık saç" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: false, audioKey: "saç", spokenText: "toplu saç" }
    ]},
    { id: 12, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: false, audioKey: "saç", spokenText: "dağınık saç" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: true, audioKey: "saç", spokenText: "toplu saç" }
    ]},
    // Dağınık Gömlek (254) vs Toplu Gömlek (255)
    { id: 13, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "dağınık gömlek" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "toplu gömlek" }
    ]},
    { id: 14, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "dağınık gömlek" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "toplu gömlek" }
    ]},
    // Dağınık Oyuncak Kutusu (657) vs Toplu Oyuncak Kutusu (658)
    { id: 15, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "dağınık oyuncak kutusu" },
        { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "toplu oyuncak kutusu" }
    ]},
    { id: 16, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "dağınık oyuncak kutusu" },
        { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "toplu oyuncak kutusu" }
    ]},
    // Dağınık Kitap Yığını (656) vs Toplu/Düzenli Masa (352)
    { id: 17, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: true, audioKey: "kitap_yigini", spokenText: "dağınık kitap yığını" },
        { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: false, audioKey: "masa", spokenText: "düzenli masa" }
    ]},
    { id: 18, question: "Toplu olan hangisi?", questionAudioKey: "q_which_is_tidy", activityType: ActivityType.MessyClean, options: [
        { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: false, audioKey: "kitap_yigini", spokenText: "dağınık kitap yığını" },
        { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: true, audioKey: "masa", spokenText: "düzenli masa" }
    ]},
    // Dağınık Puzzle Parçaları (481) vs Toplu Puzzle (480)
    { id: 19, question: "Dağınık olan hangisi?", questionAudioKey: "q_which_is_messy", activityType: ActivityType.MessyClean, options: [
        { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: true, audioKey: "puzzle_parcalari", spokenText: "dağınık puzzle parçaları" },
        { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: false, audioKey: "puzzle", spokenText: "toplu puzzle" }
    ]},
    { id: 20, question: "Toplu olan hangisi?", questionAudioKey: "", activityType: ActivityType.MessyClean, options: [
        { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: false, audioKey: "puzzle_parcalari", spokenText: "dağınık puzzle parçaları" },
        { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: true, audioKey: "puzzle", spokenText: "toplu puzzle" }
    ]},
    // Dolu/Dağınık Çöp Kutusu (284) vs Boş/Temiz Çöp Kutusu (45)
    { id: 21, question: "Dağınık olan hangisi?", questionAudioKey: "", activityType: ActivityType.MessyClean, options: [
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
    { id: 22, question: "Toplu olan hangisi?", questionAudioKey: "", activityType: ActivityType.MessyClean, options: [
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
];