import { ConceptRound, ActivityType } from '../../../../types.ts';

export const seffafOpakData: ConceptRound[] = [
    // 1. Bardak vs Teneke Kutu
    { id: 1, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: false, audioKey: "teneke_kutu", spokenText: "opak kutu" }
    ]},
    { id: 2, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: true, audioKey: "teneke_kutu", spokenText: "opak kutu" }
    ]},

    // 2. Akvaryum vs Ahşap Kutu
    { id: 3, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: true, audioKey: "akvaryum", spokenText: "şeffaf akvaryum" },
        { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: false, audioKey: "ahşap_kutu", spokenText: "opak kutu" } // Boş hazine sandığı görseli
    ]},
    { id: 4, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: false, audioKey: "akvaryum", spokenText: "şeffaf akvaryum" },
        { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: true, audioKey: "ahşap_kutu", spokenText: "opak kutu" }
    ]},

    // 3. Cam Kavanoz vs Toprak Saksı
    { id: 5, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "şeffaf kavanoz" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksı", spokenText: "opak saksı" }
    ]},
    { id: 6, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "şeffaf kavanoz" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksı", spokenText: "opak saksı" }
    ]},

    // 4. Su vs Süt
    { id: 7, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: true, audioKey: "su", spokenText: "şeffaf su" }, // Dolu bardak görseli
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: false, audioKey: "süt", spokenText: "opak süt" } // Süt kutusu görseli
    ]},
    { id: 8, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: false, audioKey: "su", spokenText: "şeffaf su" },
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: true, audioKey: "süt", spokenText: "opak süt" }
    ]},

    // 5. Plastik Poşet vs Karton Klasör
    { id: 9, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: true, audioKey: "poşet", spokenText: "şeffaf poşet" },
        { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: false, audioKey: "klasör", spokenText: "opak klasör" }
    ]},
    { id: 10, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: false, audioKey: "poşet", spokenText: "şeffaf poşet" },
        { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: true, audioKey: "klasör", spokenText: "opak klasör" }
    ]},

    // 6. Büyüteç vs Kitap
    { id: 11, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: true, audioKey: "büyüteç", spokenText: "şeffaf büyüteç" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "opak kitap" }
    ]},
    { id: 12, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: false, audioKey: "büyüteç", spokenText: "şeffaf büyüteç" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "opak kitap" }
    ]},

    // 7. Cam Bilye vs Lastik
    { id: 13, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: true, audioKey: "bilye", spokenText: "şeffaf bilye" },
        { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: false, audioKey: "lastik", spokenText: "opak lastik" }
    ]},
    { id: 14, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: false, audioKey: "bilye", spokenText: "şeffaf bilye" },
        { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: true, audioKey: "lastik", spokenText: "opak lastik" }
    ]},

    // 8. Ampul vs Tuğla
    { id: 15, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: true, audioKey: "ampul", spokenText: "şeffaf ampul" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    { id: 16, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: false, audioKey: "ampul", spokenText: "şeffaf ampul" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},

    // 9. Streç Film vs Alüminyum Folyo
    { id: 17, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: true, audioKey: "streç_film", spokenText: "şeffaf film" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "alüminyum_folyo", spokenText: "opak folyo" }
    ]},
    { id: 18, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: false, audioKey: "streç_film", spokenText: "şeffaf film" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "alüminyum_folyo", spokenText: "opak folyo" }
    ]},

    // 10. Pencere vs Tuğla
    { id: 19, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "pencere", spokenText: "şeffaf pencere" }, // Açık pencere görseli
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    { id: 20, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "pencere", spokenText: "şeffaf pencere" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},

    // 11. Gözlük vs Güneş Gözlüğü
    { id: 21, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gözlük", spokenText: "şeffaf gözlük" },
        { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: false, audioKey: "güneş_gözlüğü", spokenText: "opak gözlük" }
    ]},
    { id: 22, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gözlük", spokenText: "şeffaf gözlük" },
        { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: true, audioKey: "güneş_gözlüğü", spokenText: "opak gözlük" }
    ]},
    // Yeni: Bardak (şeffaf vs mat) - user-provided images
    { id: 23, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: true, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: false, audioKey: "bardak", spokenText: "mat bardak" }
    ]},
    { id: 24, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: false, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: true, audioKey: "bardak", spokenText: "mat bardak" }
    ]},
];