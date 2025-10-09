import { ConceptRound, ActivityType } from '../../../../types';

export const derinSigData: ConceptRound[] = [
    // 1. Deniz (225) vs Göl (342)
    { id: 1, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "derin deniz" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: false, audioKey: "göl", spokenText: "sığ göl" }
    ]},
    { id: 2, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "derin deniz" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: true, audioKey: "göl", spokenText: "sığ göl" }
    ]},
    // 2. Kuyu (698) vs Su Birikintisi (699)
    { id: 3, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: true, audioKey: "kuyu", spokenText: "derin kuyu" },
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: false, audioKey: "su_birikintisi", spokenText: "sığ su birikintisi" }
    ]},
    { id: 4, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: false, audioKey: "kuyu", spokenText: "derin kuyu" },
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: true, audioKey: "su_birikintisi", spokenText: "sığ su birikintisi" }
    ]},
    // 3. Kase (700) vs Tabak (153)
    { id: 5, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "derin kase" },
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "sığ tabak" }
    ]},
    { id: 6, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "derin kase" },
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "sığ tabak" }
    ]},
    // 4. Tencere (671) vs Tava (264)
    { id: 7, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "derin tencere" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: false, audioKey: "tava", spokenText: "sığ tava" }
    ]},
    { id: 8, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "derin tencere" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: true, audioKey: "tava", spokenText: "sığ tava" }
    ]},
    // 5. Derin Kutu (724) vs Sığ Kutu (723)
    { id: 9, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: true, audioKey: "kutu", spokenText: "derin kutu" },
        { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: false, audioKey: "kutu", spokenText: "sığ kutu" }
    ]},
    { id: 10, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: false, audioKey: "kutu", spokenText: "derin kutu" },
        { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: true, audioKey: "kutu", spokenText: "sığ kutu" }
    ]},
    // 6. Derin Sepet (448) vs Sığ Tepsi (730)
    { id: 11, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "derin sepet" },
        { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: false, audioKey: "yemek_tepsisi", spokenText: "sığ tepsi" }
    ]},
    { id: 12, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "derin sepet" },
        { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: true, audioKey: "yemek_tepsisi", spokenText: "sığ tepsi" }
    ]},
    // 7. Sığ Çocuk Havuzu (471) vs Derin Deniz (225)
    { id: 13, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "derin deniz" },
        { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: true, audioKey: "çocuk_havuzu", spokenText: "sığ havuz" }
    ]},
    { id: 14, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "derin deniz" },
        { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: false, audioKey: "çocuk_havuzu", spokenText: "sığ havuz" }
    ]},
    // 8. Derin Buzdağı (643) vs Sığ Göl Kenarı (342)
    { id: 15, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: true, audioKey: "buzdağı", spokenText: "derin buzdağı" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: false, audioKey: "göl", spokenText: "sığ göl" }
    ]},
    { id: 16, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: false, audioKey: "buzdağı", spokenText: "derin buzdağı" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: true, audioKey: "göl", spokenText: "sığ göl" }
    ]},
];