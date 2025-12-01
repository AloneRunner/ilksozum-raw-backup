import { ConceptRound, ActivityType } from '../../../../types';

export const kirisikDuzgunData: ConceptRound[] = [
    // 1. Gömlek
    { id: 231, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "" }
    ]},
    { id: 232, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "" },
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "" }
    ]},

    // 2. Kağıt
    { id: 233, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: true, audioKey: "kağıt", spokenText: "" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kağıt", spokenText: "" }
    ]},
    { id: 234, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: false, audioKey: "kağıt", spokenText: "" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kağıt", spokenText: "" }
    ]},

    // 3. Pantolon
    { id: 235, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: true, audioKey: "pantolon", spokenText: "" },
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: false, audioKey: "pantolon", spokenText: "" }
    ]},
    { id: 236, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: false, audioKey: "pantolon", spokenText: "" },
        { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: true, audioKey: "pantolon", spokenText: "" }
    ]},

    // 4. Yatak
    { id: 237, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "" }
    ]},
    { id: 238, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "" },
        { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "" }
    ]},

    // 5. Çamaşır vs Havlu
    { id: 239, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: true, audioKey: "çamaşır", spokenText: "" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: false, audioKey: "havlu", spokenText: "" }
    ]},
    { id: 240, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: false, audioKey: "çamaşır", spokenText: "" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: true, audioKey: "havlu", spokenText: "" }
    ]},

    // 6. Elma
    { id: 241, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: true, audioKey: "elma", spokenText: "" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "" }
    ]},
    { id: 242, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: false, audioKey: "elma", spokenText: "" },
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "" }
    ]},

    // 7. Yüz (Yaşlı vs Genç)
    { id: 243, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: true, audioKey: "yüz", spokenText: "" }, // Nine
        { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: false, audioKey: "yüz", spokenText: "" } // Bebek
    ]},
    { id: 244, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: false, audioKey: "yüz", spokenText: "" },
        { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: true, audioKey: "yüz", spokenText: "" }
    ]},

    // 8. Alüminyum Folyo
    { id: 15, question: "Kırışık olan hangisi?", questionAudioKey: "q_which_is_wrinkled", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "" }
    ]},
    { id: 16, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_smooth", activityType: ActivityType.KirisikDuzgun, options: [
        { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "" }
    ]},
];