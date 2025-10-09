import { ConceptRound, ActivityType } from '../../../../types';

export const noisyQuietData: ConceptRound[] = [
    // Kükreyen Aslan (199) - Uyuyan Aslan (200)
    { id: 1, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 199, word: "kükreyen aslan", imageUrl: "/images/199.png", isCorrect: true, audioKey: "kükreyen_aslan", spokenText: "gürültülü aslan" },
        { id: 200, word: "uyuyan aslan", imageUrl: "/images/200.png", isCorrect: false, audioKey: "uyuyan_aslan", spokenText: "sessiz aslan" }
    ]},
    { id: 2, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 199, word: "kükreyen aslan", imageUrl: "/images/199.png", isCorrect: false, audioKey: "kükreyen_aslan", spokenText: "gürültülü aslan" },
        { id: 200, word: "uyuyan aslan", imageUrl: "/images/200.png", isCorrect: true, audioKey: "uyuyan_aslan", spokenText: "sessiz aslan" }
    ]},
    // Davul (72) - Yastık (137)
    { id: 3, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: true, audioKey: "davul", spokenText: "gürültülü davul" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "sessiz yastık" }
    ]},
    { id: 4, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: false, audioKey: "davul", spokenText: "gürültülü davul" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "sessiz yastık" }
    ]},
    // Şimşek (407) - Tüy (139)
    { id: 5, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 407, word: "şimşek", imageUrl: "/images/407.png", isCorrect: true, audioKey: "şimşek", spokenText: "gürültülü şimşek" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "sessiz tüy" }
    ]},
    { id: 6, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 407, word: "şimşek", imageUrl: "/images/407.png", isCorrect: false, audioKey: "şimşek", spokenText: "gürültülü şimşek" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "sessiz tüy" }
    ]},
    // Traktör (289) - Kelebek (274)
    { id: 7, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "gürültülü traktör" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "sessiz kelebek" }
    ]},
    { id: 8, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "gürültülü traktör" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "sessiz kelebek" }
    ]},
    // Tren (106) - Yaprak (117)
    { id: 9, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: true, audioKey: "tren", spokenText: "gürültülü tren" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: false, audioKey: "yaprak", spokenText: "sessiz yaprak" }
    ]},
    { id: 10, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: false, audioKey: "tren", spokenText: "gürültülü tren" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: true, audioKey: "yaprak", spokenText: "sessiz yaprak" }
    ]},
    // Kamyon (288) - Tüy (139)
    { id: 11, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "gürültülü kamyon" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "sessiz tüy" }
    ]},
    { id: 12, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "gürültülü kamyon" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "sessiz tüy" }
    ]},
    // Roket (204) - Yastık (137)
    { id: 13, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: true, audioKey: "roket", spokenText: "gürültülü roket" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "sessiz yastık" }
    ]},
    { id: 14, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: false, audioKey: "roket", spokenText: "gürültülü roket" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "sessiz yastık" }
    ]},
    // Davul (72) - Kitap (37)
    { id: 15, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: true, audioKey: "davul", spokenText: "gürültülü davul" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: false, audioKey: "kitap", spokenText: "sessiz kitap" }
    ]},
    { id: 16, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: false, audioKey: "davul", spokenText: "gürültülü davul" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "sessiz kitap" }
    ]},
];