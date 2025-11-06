import { ConceptRound, ActivityType } from '../../../../types.ts';

export const fullEmptyData: ConceptRound[] = [
    // 1. Kutu
    { id: 1, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: true, audioKey: "kutu", spokenText: "dolu kutu" },
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: false, audioKey: "kutu", spokenText: "boş kutu" }
    ]},
    { id: 1.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: false, audioKey: "kutu", spokenText: "dolu kutu" },
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: true, audioKey: "kutu", spokenText: "boş kutu" }
    ]},
    // 2. Bardak
    { id: 2, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: true, audioKey: "bardak", spokenText: "dolu bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "boş bardak" }
    ]},
    { id: 2.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: false, audioKey: "bardak", spokenText: "dolu bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "boş bardak" }
    ]},
    // 3. Şişe
    { id: 3, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "dolu şişe" },
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "boş şişe" }
    ]},
    { id: 3.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "dolu şişe" },
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "boş şişe" }
    ]},
    // 4. Sepet
    { id: 4, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "dolu sepet" },
        { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: false, audioKey: "sepet", spokenText: "boş sepet" }
    ]},
    { id: 4.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "dolu sepet" },
        { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: true, audioKey: "sepet", spokenText: "boş sepet" }
    ]},
    // 5. Kase
    { id: 5, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: true, audioKey: "kase", spokenText: "dolu kase" },
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "boş kase" }
    ]},
    { id: 5.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: false, audioKey: "kase", spokenText: "dolu kase" },
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "boş kase" }
    ]},
    // 6. Kumbara
    { id: 6, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: true, audioKey: "kumbara", spokenText: "dolu kumbara" },
        { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: false, audioKey: "kumbara", spokenText: "boş kumbara" }
    ]},
    { id: 6.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: false, audioKey: "kumbara", spokenText: "dolu kumbara" },
        { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: true, audioKey: "kumbara", spokenText: "boş kumbara" }
    ]},
    // 7. Kavanoz
    { id: 7, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "dolu kavanoz" },
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "boş kavanoz" }
    ]},
    { id: 7.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "dolu kavanoz" },
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "boş kavanoz" }
    ]},
    // 8. Çöp Kutusu (284 vs 45)
    { id: 8, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
    { id: 8.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
    // 9. Vazo (35 vs 34)
    { id: 9, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: true, audioKey: "vazo", spokenText: "dolu vazo" },
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "boş vazo" }
    ]},
    { id: 9.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: false, audioKey: "vazo", spokenText: "dolu vazo" },
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "boş vazo" }
    ]},
    // 10. Saksı (433 vs 432)
    { id: 10, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: true, audioKey: "saksı", spokenText: "dolu saksı" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksı", spokenText: "boş saksı" }
    ]},
    { id: 10.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: false, audioKey: "saksı", spokenText: "dolu saksı" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksı", spokenText: "boş saksı" }
    ]},
    // 11. Hazine Sandığı (202 vs 203)
    { id: 11, question: "Dolu olan hangisi?", questionAudioKey: "q_which_is_full", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "dolu sandık" },
        { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "boş sandık" }
    ]},
    { id: 11.1, question: "Boş olan hangisi?", questionAudioKey: "q_which_is_empty", activityType: ActivityType.FullEmpty, options: [ // Key eklendi
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "dolu sandık" },
        { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "boş sandık" }
    ]},
];