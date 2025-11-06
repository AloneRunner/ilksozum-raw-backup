import { ConceptRound, ActivityType } from '../../../../types';

export const brokenIntactData: ConceptRound[] = [
    // 1. Tabak
    { id: 1, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "sağlam tabak" },
        { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: false, audioKey: "kırık_tabak", spokenText: "kırık tabak" }
    ]},
    { id: 2, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "sağlam tabak" },
        { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: true, audioKey: "kırık_tabak", spokenText: "kırık tabak" }
    ]},

    // 2. Bardak
    { id: 3, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "sağlam bardak" }, // Sağlam: Boş bardak
        { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: false, audioKey: "kırık_bardak", spokenText: "kırık bardak" }
    ]},
    { id: 4, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "sağlam bardak" },
        { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: true, audioKey: "kırık_bardak", spokenText: "kırık bardak" }
    ]},

    // 3. Vazo
    { id: 5, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "sağlam vazo" },
        { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: false, audioKey: "kırık_vazo", spokenText: "kırık vazo" }
    ]},
    { id: 6, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "sağlam vazo" },
        { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: true, audioKey: "kırık_vazo", spokenText: "kırık vazo" }
    ]},

    // 4. Akıllı Telefon
    { id: 7, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: true, audioKey: "akıllı_telefon", spokenText: "sağlam telefon" },
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: false, audioKey: "kırık_telefon", spokenText: "kırık telefon" }
    ]},
    { id: 8, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: false, audioKey: "akıllı_telefon", spokenText: "sağlam telefon" },
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: true, audioKey: "kırık_telefon", spokenText: "kırık telefon" }
    ]},

    // 5. Araba
    { id: 9, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "sağlam araba" },
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: false, audioKey: "kırık_araba", spokenText: "kırık araba" }
    ]},
    { id: 10, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "sağlam araba" },
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: true, audioKey: "kırık_araba", spokenText: "kırık araba" }
    ]},

    // 6. Yumurta
    { id: 11, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: true, audioKey: "yumurta", spokenText: "sağlam yumurta" },
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: false, audioKey: "kırık_yumurta", spokenText: "kırık yumurta" }
    ]},
    { id: 12, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: false, audioKey: "yumurta", spokenText: "sağlam yumurta" },
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: true, audioKey: "kırık_yumurta", spokenText: "kırık yumurta" }
    ]},

    // 7. Pencere (ID Düzeltildi - Doğru Sağlam Pencere kullanıldı)
    { id: 13, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: true, audioKey: "pencere", spokenText: "sağlam pencere" }, // Sağlam: Kapalı pencere
        { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: false, audioKey: "kırık_pencere", spokenText: "kırık pencere" }
    ]},
    { id: 14, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: false, audioKey: "pencere", spokenText: "sağlam pencere" },
        { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: true, audioKey: "kırık_pencere", spokenText: "kırık pencere" }
    ]},

    // 8. Sandalye
    { id: 15, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "sağlam sandalye" },
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: false, audioKey: "kırık_sandalye", spokenText: "kırık sandalye" }
    ]},
    { id: 16, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "sağlam sandalye" },
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: true, audioKey: "kırık_sandalye", spokenText: "kırık sandalye" }
    ]},

    // 9. Gözlük
    { id: 17, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gözlük", spokenText: "sağlam gözlük" },
        { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: false, audioKey: "kırık_gözlük", spokenText: "kırık gözlük" }
    ]},
    { id: 18, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gözlük", spokenText: "sağlam gözlük" },
        { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: true, audioKey: "kırık_gözlük", spokenText: "kırık gözlük" }
    ]},

    // 10. Kalem
    { id: 19, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: true, audioKey: "kalem", spokenText: "sağlam kalem" }, // Sağlam: Küt uçlu kalem
        { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: false, audioKey: "kırık_kalem", spokenText: "kırık kalem" }
    ]},
    { id: 20, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: false, audioKey: "kalem", spokenText: "sağlam kalem" },
        { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: true, audioKey: "kırık_kalem", spokenText: "kırık kalem" }
    ]},

    // 11. Televizyon
    { id: 21, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: true, audioKey: "televizyon", spokenText: "sağlam televizyon" },
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: false, audioKey: "kırık_televizyon", spokenText: "kırık televizyon" }
    ]},
    { id: 22, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: false, audioKey: "televizyon", spokenText: "sağlam televizyon" },
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: true, audioKey: "kırık_televizyon", spokenText: "kırık televizyon" }
    ]},

    // 12. Monitör
    { id: 23, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: true, audioKey: "monitör", spokenText: "sağlam monitör" },
        { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: false, audioKey: "kırık_monitör", spokenText: "kırık monitör" }
    ]},
    { id: 24, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: false, audioKey: "monitör", spokenText: "sağlam monitör" },
        { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: true, audioKey: "kırık_monitör", spokenText: "kırık monitör" }
    ]},

    // 13. Cetvel
    { id: 25, question: "Sağlam olan hangisi?", questionAudioKey: "q_which_is_intact", activityType: ActivityType.BrokenIntact, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "sağlam cetvel" },
        { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: false, audioKey: "kırık_cetvel", spokenText: "kırık cetvel" }
    ]},
    { id: 26, question: "Kırık olan hangisi?", questionAudioKey: "q_which_is_broken", activityType: ActivityType.BrokenIntact, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "sağlam cetvel" },
        { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: true, audioKey: "kırık_cetvel", spokenText: "kırık cetvel" }
    ]},
];