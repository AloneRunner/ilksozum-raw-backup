import { ConceptRound, ActivityType } from '../../../../types';

export const noisyQuietData: ConceptRound[] = [
    // 1. Aslan (Kükreyen vs Uyuyan)
    { id: 283, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy_person", activityType: ActivityType.NoisyQuiet, options: [
        { id: 199, word: "kükreyen aslan", imageUrl: "/images/199.png", isCorrect: true, audioKey: "kükreyen_aslan", spokenText: "" },
        { id: 200, word: "uyuyan aslan", imageUrl: "/images/200.png", isCorrect: false, audioKey: "uyuyan_aslan", spokenText: "" }
    ]},
    { id: 284, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 199, word: "kükreyen aslan", imageUrl: "/images/199.png", isCorrect: false, audioKey: "kükreyen_aslan", spokenText: "" },
        { id: 200, word: "uyuyan aslan", imageUrl: "/images/200.png", isCorrect: true, audioKey: "uyuyan_aslan", spokenText: "" }
    ]},

    // 2. Davul vs Yastık
    { id: 285, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: true, audioKey: "davul", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "" }
    ]},
    { id: 286, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: false, audioKey: "davul", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "" }
    ]},

    // 3. Şimşek vs Tüy
    { id: 287, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 407, word: "şimşek", imageUrl: "/images/407.png", isCorrect: true, audioKey: "şimşek", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "" }
    ]},
    { id: 288, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 407, word: "şimşek", imageUrl: "/images/407.png", isCorrect: false, audioKey: "şimşek", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "" }
    ]},

    // 4. Traktör vs Kelebek
    { id: 289, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktör", spokenText: "" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "" }
    ]},
    { id: 290, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktör", spokenText: "" },
        { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "" }
    ]},

    // 5. Tren vs Yaprak
    { id: 291, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: true, audioKey: "tren", spokenText: "" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: false, audioKey: "yaprak", spokenText: "" }
    ]},
    { id: 292, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: false, audioKey: "tren", spokenText: "" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: true, audioKey: "yaprak", spokenText: "" }
    ]},

    // 6. Kamyon vs Tüy
    { id: 293, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "" }
    ]},
    { id: 294, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "" },
        { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tüy", spokenText: "" }
    ]},

    // 7. Roket vs Yastık
    { id: 295, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: true, audioKey: "roket", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "" }
    ]},
    { id: 296, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: false, audioKey: "roket", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "" }
    ]},

    // 8. Davul vs Kitap
    { id: 297, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: true, audioKey: "davul", spokenText: "" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: false, audioKey: "kitap", spokenText: "" }
    ]},
    { id: 298, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: false, audioKey: "davul", spokenText: "" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "" }
    ]},

    // --- YENİ EKLENEN SORULAR ---
    // 9. Gitar vs Fırça
    { id: 299, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 180, word: "gitar", imageUrl: "/images/180.png", isCorrect: true, audioKey: "gitar", spokenText: "" },
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: false, audioKey: "fırça", spokenText: "" }
    ]},
    { id: 300, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 180, word: "gitar", imageUrl: "/images/180.png", isCorrect: false, audioKey: "gitar", spokenText: "" },
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: true, audioKey: "fırça", spokenText: "" }
    ]},

    // 10. Düdük vs Pamuk
    { id: 19, question: "Gürültülü olan hangisi?", questionAudioKey: "q_which_is_noisy", activityType: ActivityType.NoisyQuiet, options: [
        { id: 427, word: "düdük", imageUrl: "/images/427.png", isCorrect: true, audioKey: "düdük", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "" }
    ]},
    { id: 20, question: "Sessiz olan hangisi?", questionAudioKey: "q_which_is_quiet", activityType: ActivityType.NoisyQuiet, options: [
        { id: 427, word: "düdük", imageUrl: "/images/427.png", isCorrect: false, audioKey: "düdük", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "" }
    ]},
];