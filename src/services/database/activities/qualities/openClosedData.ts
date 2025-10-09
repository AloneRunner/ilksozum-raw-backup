import { ConceptRound, ActivityType } from '../../../../types';

export const openClosedData: ConceptRound[] = [
    // Açık Kutu (6) - Kapalı Kutu (5)
    { id: 1, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: true, audioKey: "kutu", spokenText: "açık kutu" },
        { id: 5, word: "kutu", imageUrl: "/images/5.png", isCorrect: false, audioKey: "kutu", spokenText: "kapalı kutu" }
    ]},
    { id: 2, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: false, audioKey: "kutu", spokenText: "açık kutu" },
        { id: 5, word: "kutu", imageUrl: "/images/5.png", isCorrect: true, audioKey: "kutu", spokenText: "kapalı kutu" }
    ]},
    // Açık Kitap (38) - Kapalı Kitap (36)
    { id: 3, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 38, word: "kitap", imageUrl: "/images/38.png", isCorrect: true, audioKey: "kitap", spokenText: "açık kitap" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kapalı kitap" }
    ]},
    { id: 4, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 38, word: "kitap", imageUrl: "/images/38.png", isCorrect: false, audioKey: "kitap", spokenText: "açık kitap" },
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kapalı kitap" }
    ]},
    // Açık Kapı (595) - Kapalı Kapı (39)
    { id: 5, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: true, audioKey: "kapı", spokenText: "açık kapı" },
        { id: 39, word: "kapı", imageUrl: "/images/39.png", isCorrect: false, audioKey: "kapı", spokenText: "kapalı kapı" }
    ]},
    { id: 6, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: false, audioKey: "kapı", spokenText: "açık kapı" },
        { id: 39, word: "kapı", imageUrl: "/images/39.png", isCorrect: true, audioKey: "kapı", spokenText: "kapalı kapı" }
    ]},
    // Açık Pencere (596) - Kapalı Pencere (598)
    { id: 7, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "pencere", spokenText: "açık pencere" },
        { id: 598, word: "pencere", imageUrl: "/images/598.png", isCorrect: false, audioKey: "pencere", spokenText: "kapalı pencere" }
    ]},
    { id: 8, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "pencere", spokenText: "açık pencere" },
        { id: 598, word: "pencere", imageUrl: "/images/598.png", isCorrect: true, audioKey: "pencere", spokenText: "kapalı pencere" }
    ]},
    // Açık Göz (564) - Kapalı Göz (597)
    { id: 9, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "göz", spokenText: "açık göz" },
        { id: 597, word: "göz", imageUrl: "/images/597.png", isCorrect: false, audioKey: "göz", spokenText: "kapalı göz" }
    ]},
    { id: 10, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "açık göz" },
        { id: 597, word: "göz", imageUrl: "/images/597.png", isCorrect: true, audioKey: "göz", spokenText: "kapalı göz" }
    ]},
    // Açık Hazine Sandığı (202) - Kapalı Hazine Sandığı (201)
    { id: 11, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "açık sandık" },
        { id: 201, word: "hazine sandığı", imageUrl: "/images/201.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "kapalı sandık" }
    ]},
    { id: 12, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "açık sandık" },
        { id: 201, word: "hazine sandığı", imageUrl: "/images/201.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "kapalı sandık" }
    ]},
    // Açık Musluk (303) - Kapalı Musluk (304)
    { id: 13, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 303, word: "musluk", imageUrl: "/images/303.png", isCorrect: true, audioKey: "musluk", spokenText: "açık musluk" },
        { id: 304, word: "musluk", imageUrl: "/images/304.png", isCorrect: false, audioKey: "musluk", spokenText: "kapalı musluk" }
    ]},
    { id: 14, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 303, word: "musluk", imageUrl: "/images/303.png", isCorrect: false, audioKey: "musluk", spokenText: "açık musluk" },
        { id: 304, word: "musluk", imageUrl: "/images/304.png", isCorrect: true, audioKey: "musluk", spokenText: "kapalı musluk" }
    ]},
    // Açık Dolap (660) - Kapalı Dolap (339)
    { id: 15, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 660, word: "elbise dolabı", imageUrl: "/images/660.png", isCorrect: true, audioKey: "elbise_dolabı", spokenText: "açık dolap" },
        { id: 339, word: "elbise dolabı", imageUrl: "/images/339.png", isCorrect: false, audioKey: "elbise_dolabı", spokenText: "kapalı dolap" }
    ]},
    { id: 16, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 660, word: "elbise dolabı", imageUrl: "/images/660.png", isCorrect: false, audioKey: "elbise_dolabı", spokenText: "açık dolap" },
        { id: 339, word: "elbise dolabı", imageUrl: "/images/339.png", isCorrect: true, audioKey: "elbise_dolabı", spokenText: "kapalı dolap" }
    ]},
    // Açık Zarf (396) - Kapalı Zarf (600)
    { id: 17, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 396, word: "zarf", imageUrl: "/images/396.png", isCorrect: true, audioKey: "zarf", spokenText: "açık zarf" },
        { id: 600, word: "zarf", imageUrl: "/images/600.png", isCorrect: false, audioKey: "zarf", spokenText: "kapalı zarf" }
    ]},
    { id: 18, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 396, word: "zarf", imageUrl: "/images/396.png", isCorrect: false, audioKey: "zarf", spokenText: "açık zarf" },
        { id: 600, word: "zarf", imageUrl: "/images/600.png", isCorrect: true, audioKey: "zarf", spokenText: "kapalı zarf" }
    ]},
    // Açık Şişe (519) - Kapalı Şişe (518)
    { id: 19, question: "Açık olan hangisi?", questionAudioKey: "q_which_is_open", activityType: ActivityType.OpenClosed, options: [
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "açık şişe" },
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "kapalı şişe" }
    ]},
    { id: 20, question: "Kapalı olan hangisi?", questionAudioKey: "q_which_is_closed", activityType: ActivityType.OpenClosed, options: [
        { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_şişesi", spokenText: "açık şişe" },
        { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_şişesi", spokenText: "kapalı şişe" }
    ]},
];