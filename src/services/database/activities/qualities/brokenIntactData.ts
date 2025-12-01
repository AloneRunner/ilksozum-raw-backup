import { ConceptRound, ActivityType } from '../../../../types';

export const brokenIntactData: ConceptRound[] = [
    // 1. Tabak
    { id: 51, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "" },
        { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: false, audioKey: "kırık_tabak", spokenText: "" }
    ]},
    { id: 52, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "" },
        { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: true, audioKey: "kırık_tabak", spokenText: "" }
    ]},

    // 2. Bardak
    { id: 53, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "" }, // Sağlam: Boş bardak
        { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: false, audioKey: "kırık_bardak", spokenText: "" }
    ]},
    { id: 54, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "" },
        { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: true, audioKey: "kırık_bardak", spokenText: "" }
    ]},

    // 3. Vazo
    { id: 55, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "" },
        { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: false, audioKey: "kırık_vazo", spokenText: "" }
    ]},
    { id: 56, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "" },
        { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: true, audioKey: "kırık_vazo", spokenText: "" }
    ]},

    // 4. Akıllı Telefon
    { id: 57, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: true, audioKey: "akıllı_telefon", spokenText: "" },
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: false, audioKey: "kırık_telefon", spokenText: "" }
    ]},
    { id: 58, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: false, audioKey: "akıllı_telefon", spokenText: "" },
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: true, audioKey: "kırık_telefon", spokenText: "" }
    ]},

    // 5. Araba
    { id: 59, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "" },
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: false, audioKey: "kırık_araba", spokenText: "" }
    ]},
    { id: 60, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "" },
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: true, audioKey: "kırık_araba", spokenText: "" }
    ]},

    // 6. Yumurta
    { id: 61, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: true, audioKey: "yumurta", spokenText: "" },
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: false, audioKey: "kırık_yumurta", spokenText: "" }
    ]},
    { id: 62, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: false, audioKey: "yumurta", spokenText: "" },
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: true, audioKey: "kırık_yumurta", spokenText: "" }
    ]},

    // 7. Pencere (ID Düzeltildi - Doğru Sağlam Pencere kullanıldı)
    { id: 63, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: true, audioKey: "pencere", spokenText: "" }, // Sağlam: Kapalı pencere
        { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: false, audioKey: "kırık_pencere", spokenText: "" }
    ]},
    { id: 64, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: false, audioKey: "pencere", spokenText: "" },
        { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: true, audioKey: "kırık_pencere", spokenText: "" }
    ]},

    // 8. Sandalye
    { id: 65, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "" },
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: false, audioKey: "kırık_sandalye", spokenText: "" }
    ]},
    { id: 66, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "" },
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: true, audioKey: "kırık_sandalye", spokenText: "" }
    ]},

    // 9. Gözlük
    { id: 67, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gözlük", spokenText: "" },
        { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: false, audioKey: "kırık_gözlük", spokenText: "" }
    ]},
    { id: 68, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gözlük", spokenText: "" },
        { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: true, audioKey: "kırık_gözlük", spokenText: "" }
    ]},

    // 10. Kalem
    { id: 69, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: true, audioKey: "kalem", spokenText: "" }, // Sağlam: Küt uçlu kalem
        { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: false, audioKey: "kırık_kalem", spokenText: "" }
    ]},
    { id: 70, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: false, audioKey: "kalem", spokenText: "" },
        { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: true, audioKey: "kırık_kalem", spokenText: "" }
    ]},

    // 11. Televizyon
    { id: 71, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: true, audioKey: "televizyon", spokenText: "" },
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: false, audioKey: "kırık_televizyon", spokenText: "" }
    ]},
    { id: 72, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: false, audioKey: "televizyon", spokenText: "" },
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: true, audioKey: "kırık_televizyon", spokenText: "" }
    ]},

    // 12. Monitör
    { id: 73, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: true, audioKey: "monitör", spokenText: "" },
        { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: false, audioKey: "kırık_monitör", spokenText: "" }
    ]},
    { id: 74, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: false, audioKey: "monitör", spokenText: "" },
        { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: true, audioKey: "kırık_monitör", spokenText: "" }
    ]},

    // 13. Cetvel
    { id: 75, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "" },
        { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: false, audioKey: "kırık_cetvel", spokenText: "" }
    ]},
    { id: 76, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "" },
        { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: true, audioKey: "kırık_cetvel", spokenText: "" }
    ]},
];