import { ConceptRound, ActivityType } from '../../../../types';

export const derinSigData: ConceptRound[] = [
    // 1. Deniz vs Göl
    { id: 95, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: false, audioKey: "göl", spokenText: "" }
    ]},
    { id: 96, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "" },
        { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: true, audioKey: "göl", spokenText: "" }
    ]},

    // 2. Kuyu vs Su Birikintisi
    { id: 97, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: true, audioKey: "kuyu", spokenText: "" },
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: false, audioKey: "su_birikintisi", spokenText: "" }
    ]},
    { id: 98, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: false, audioKey: "kuyu", spokenText: "" },
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: true, audioKey: "su_birikintisi", spokenText: "" }
    ]},

    // 3. Kase vs Tabak
    { id: 99, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "" },
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "" }
    ]},
    { id: 100, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "" },
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "" }
    ]},

    // 4. Tencere vs Tava
    { id: 101, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: false, audioKey: "tava", spokenText: "" }
    ]},
    { id: 102, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: true, audioKey: "tava", spokenText: "" }
    ]},

    // 5. Derin Kutu vs Sığ Kutu
    { id: 103, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: true, audioKey: "kutu", spokenText: "" },
        { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: false, audioKey: "kutu", spokenText: "" }
    ]},
    { id: 104, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: false, audioKey: "kutu", spokenText: "" },
        { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: true, audioKey: "kutu", spokenText: "" }
    ]},

    // 6. Derin Sepet vs Sığ Tepsi
    { id: 105, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "" },
        { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: false, audioKey: "yemek_tepsisi", spokenText: "" }
    ]},
    { id: 106, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "" },
        { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: true, audioKey: "yemek_tepsisi", spokenText: "" }
    ]},

    // 7. Sığ Çocuk Havuzu vs Derin Deniz
    { id: 107, question: "Sığ olan hangisi?", questionAudioKey: "q_which_is_shallow", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "" },
        { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: true, audioKey: "çocuk_havuzu", spokenText: "" }
    ]},
    { id: 108, question: "Derin olan hangisi?", questionAudioKey: "q_which_is_deep", activityType: ActivityType.DerinSig, options: [
        { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "" },
        { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: false, audioKey: "çocuk_havuzu", spokenText: "" }
    ]},


];