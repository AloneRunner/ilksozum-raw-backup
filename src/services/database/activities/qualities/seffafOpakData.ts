import { ConceptRound, ActivityType } from '../../../../types';

export const seffafOpakData: ConceptRound[] = [
    // 1. Şeffaf Bardak (124) vs Opak Teneke Kutu (685)
    { id: 1, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: false, audioKey: "teneke_kutu", spokenText: "opak kutu" }
    ]},
    { id: 2, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "şeffaf bardak" },
        { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: true, audioKey: "teneke_kutu", spokenText: "opak kutu" }
    ]},
    // 2. Şeffaf Akvaryum (310) vs Opak Ahşap Kutu (203)
    { id: 3, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: true, audioKey: "akvaryum", spokenText: "şeffaf akvaryum" },
        { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: false, audioKey: "ahşap_kutu", spokenText: "opak kutu" }
    ]},
    { id: 4, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: false, audioKey: "akvaryum", spokenText: "şeffaf akvaryum" },
        { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: true, audioKey: "ahşap_kutu", spokenText: "opak kutu" }
    ]},
    // 3. Şeffaf Cam Kavanoz (447) vs Opak Toprak Saksı (432)
    { id: 5, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "şeffaf kavanoz" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksı", spokenText: "opak saksı" }
    ]},
    { id: 6, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "şeffaf kavanoz" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksı", spokenText: "opak saksı" }
    ]},
    // 4. Şeffaf Su (123) vs Opak Süt (265)
    { id: 7, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: true, audioKey: "su", spokenText: "şeffaf su" },
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: false, audioKey: "süt", spokenText: "opak süt" }
    ]},
    { id: 8, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: false, audioKey: "su", spokenText: "şeffaf su" },
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: true, audioKey: "süt", spokenText: "opak süt" }
    ]},
    // 5. Şeffaf Plastik Poşet (688) vs Opak Karton Klasör (689)
    { id: 9, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: true, audioKey: "poşet", spokenText: "şeffaf poşet" },
        { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: false, audioKey: "klasör", spokenText: "opak klasör" }
    ]},
    { id: 10, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: false, audioKey: "poşet", spokenText: "şeffaf poşet" },
        { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: true, audioKey: "klasör", spokenText: "opak klasör" }
    ]},
    // 6. Şeffaf Büyüteç (691) vs Opak Kitap (36)
    { id: 11, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: true, audioKey: "büyüteç", spokenText: "şeffaf büyüteç" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "opak kitap" }
    ]},
    { id: 12, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: false, audioKey: "büyüteç", spokenText: "şeffaf büyüteç" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "opak kitap" }
    ]},
    // 7. Şeffaf Cam Bilye (762) vs Opak Lastik (670)
    { id: 13, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: true, audioKey: "bilye", spokenText: "şeffaf bilye" },
        { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: false, audioKey: "lastik", spokenText: "opak lastik" }
    ]},
    { id: 14, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: false, audioKey: "bilye", spokenText: "şeffaf bilye" },
        { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: true, audioKey: "lastik", spokenText: "opak lastik" }
    ]},
    // 8. Şeffaf Ampul (574) vs Opak Tuğla (136)
    { id: 15, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: true, audioKey: "ampul", spokenText: "şeffaf ampul" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    { id: 16, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: false, audioKey: "ampul", spokenText: "şeffaf ampul" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    // 9. Şeffaf Streç Film (687) vs Opak Alüminyum Folyo (734)
    { id: 17, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: true, audioKey: "streç_film", spokenText: "şeffaf film" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "alüminyum_folyo", spokenText: "opak folyo" }
    ]},
    { id: 18, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: false, audioKey: "streç_film", spokenText: "şeffaf film" },
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "alüminyum_folyo", spokenText: "opak folyo" }
    ]},
    // 10. Şeffaf Pencere (596) vs Opak Tuğla (136)
    { id: 19, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "pencere", spokenText: "şeffaf pencere" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    { id: 20, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "pencere", spokenText: "şeffaf pencere" },
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "opak tuğla" }
    ]},
    // 11. Şeffaf Gözlük (93) vs Opak Güneş Gözlüğü (686) - YENİ
    { id: 21, question: "Şeffaf olan hangisi?", questionAudioKey: "q_which_is_transparent", activityType: ActivityType.SeffafOpak, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gözlük", spokenText: "şeffaf gözlük" },
        { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: false, audioKey: "güneş_gözlüğü", spokenText: "opak gözlük" }
    ]},
    { id: 22, question: "Opak olan hangisi?", questionAudioKey: "q_which_is_opaque", activityType: ActivityType.SeffafOpak, options: [
        { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gözlük", spokenText: "şeffaf gözlük" },
        { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: true, audioKey: "güneş_gözlüğü", spokenText: "opak gözlük" }
    ]},
];