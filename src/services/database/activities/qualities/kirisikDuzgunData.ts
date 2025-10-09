import { ConceptRound, ActivityType } from '../../../../types';

export const kirisikDuzgunData: ConceptRound[] = [
    // Kırışık Gömlek (254) vs Düzgün Gömlek (255)
    { id: 1, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "kırışık gömlek" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "düzgün gömlek" }
    ]},
    { id: 2, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "kırışık gömlek" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "düzgün gömlek" }
    ]},
    // Buruşuk Kağıt (668) vs Düzgün Kağıt (642)
    { id: 3, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: true, audioKey: "kağıt", spokenText: "kırışık kağıt" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kağıt", spokenText: "düzgün kağıt" }
    ]},
    { id: 4, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: false, audioKey: "kağıt", spokenText: "kırışık kağıt" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kağıt", spokenText: "düzgün kağıt" }
    ]},
    // Kırışık Pantolon (732) vs Düzgün Pantolon (79)
    { id: 5, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: true, audioKey: "pantolon", spokenText: "kırışık pantolon" },
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: false, audioKey: "pantolon", spokenText: "düzgün pantolon" }
    ]},
    { id: 6, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: false, audioKey: "pantolon", spokenText: "kırışık pantolon" },
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: true, audioKey: "pantolon", spokenText: "düzgün pantolon" }
    ]},
    // Kırışık Yatak (659) vs Düzgün Yatak (606)
    { id: 7, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "kırışık yatak" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "düzgün yatak" }
    ]},
    { id: 8, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "kırışık yatak" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "düzgün yatak" }
    ]},
    // Kırışık Çamaşır (735) vs Düzgün Havlu (523)
    { id: 9, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: true, audioKey: "çamaşır", spokenText: "kırışık çamaşır" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: false, audioKey: "havlu", spokenText: "düzgün havlu" }
    ]},
    { id: 10, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: false, audioKey: "çamaşır", spokenText: "kırışık çamaşır" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: true, audioKey: "havlu", spokenText: "düzgün havlu" }
    ]},
    // Kırışık Elma (666) vs Düzgün Elma (43)
    { id: 11, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: true, audioKey: "elma", spokenText: "kırışık elma" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "düzgün elma" }
    ]},
    { id: 12, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: false, audioKey: "elma", spokenText: "kırışık elma" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "düzgün elma" }
    ]},
    // Kırışık Yüz (701) vs Düzgün Yüz (579)
    { id: 13, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: true, audioKey: "yüz", spokenText: "kırışık yüz" },
        { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: false, audioKey: "yüz", spokenText: "düzgün yüz" }
    ]},
    { id: 14, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: false, audioKey: "yüz", spokenText: "kırışık yüz" },
        { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: true, audioKey: "yüz", spokenText: "düzgün yüz" }
    ]},
    // Kırışık Folyo (733) vs Düzgün Folyo (734)
    { id: 15, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "kırışık folyo" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "düzgün folyo" }
    ]},
    { id: 16, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "kırışık folyo" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "düzgün folyo" }
    ]},
];