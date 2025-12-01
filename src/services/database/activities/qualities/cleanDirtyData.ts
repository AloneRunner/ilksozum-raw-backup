import { ConceptRound, ActivityType } from '../../../../types';

export const cleanDirtyData: ConceptRound[] = [
    // 1. El
    { id: 77, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean_person", activityType: ActivityType.CleanDirty, options: [
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: true, audioKey: "temiz_el", spokenText: "" },
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: false, audioKey: "kirli_el", spokenText: "" }
    ]},
    { id: 78, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: false, audioKey: "temiz_el", spokenText: "" },
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: true, audioKey: "kirli_el", spokenText: "" }
    ]},

    // 2. Tabak
    { id: 79, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "temiz_tabak", spokenText: "" },
        { id: 589, word: "tabak", imageUrl: "/images/589.png", isCorrect: false, audioKey: "kirli_tabak", spokenText: "" }
    ]},
    { id: 80, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "temiz_tabak", spokenText: "" },
        { id: 589, word: "tabak", imageUrl: "/images/589.png", isCorrect: true, audioKey: "kirli_tabak", spokenText: "" }
    ]},

    // 3. Pencere (ID Düzeltildi)
    { id: 81, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: true, audioKey: "temiz_pencere", spokenText: "" }, // ID 596 -> 82 olarak düzeltildi
        { id: 593, word: "pencere", imageUrl: "/images/593.png", isCorrect: false, audioKey: "kirli_pencere", spokenText: "" }
    ]},
    { id: 82, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: false, audioKey: "temiz_pencere", spokenText: "" }, // ID 596 -> 82 olarak düzeltildi
        { id: 593, word: "pencere", imageUrl: "/images/593.png", isCorrect: true, audioKey: "kirli_pencere", spokenText: "" }
    ]},

    // 4. Tişört
    { id: 83, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: true, audioKey: "temiz_tişört", spokenText: "" },
        { id: 14, word: "tişört", imageUrl: "/images/14.gif", isCorrect: false, audioKey: "kirli_tişört", spokenText: "" }
    ]},
    { id: 84, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: false, audioKey: "temiz_tişört", spokenText: "" },
        { id: 14, word: "tişört", imageUrl: "/images/14.gif", isCorrect: true, audioKey: "kirli_tişört", spokenText: "" }
    ]},

    // 5. Ayakkabı
    { id: 85, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: true, audioKey: "temiz_ayakkabı", spokenText: "" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "kirli_ayakkabı", spokenText: "" }
    ]},
    { id: 86, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: false, audioKey: "temiz_ayakkabı", spokenText: "" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "kirli_ayakkabı", spokenText: "" }
    ]},

    // 6. Halı
    { id: 87, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 439, word: "halı", imageUrl: "/images/439.png", isCorrect: true, audioKey: "temiz_halı", spokenText: "" },
        { id: 438, word: "halı", imageUrl: "/images/438.png", isCorrect: false, audioKey: "kirli_halı", spokenText: "" }
    ]},
    { id: 88, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 439, word: "halı", imageUrl: "/images/439.png", isCorrect: false, audioKey: "temiz_halı", spokenText: "" },
        { id: 438, word: "halı", imageUrl: "/images/438.png", isCorrect: true, audioKey: "kirli_halı", spokenText: "" }
    ]},

    // 7. Araba
    { id: 89, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "temiz_araba", spokenText: "" },
        { id: 3, word: "araba", imageUrl: "/images/3.png", isCorrect: false, audioKey: "kirli_araba", spokenText: "" }
    ]},
    { id: 90, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "temiz_araba", spokenText: "" },
        { id: 3, word: "araba", imageUrl: "/images/3.png", isCorrect: true, audioKey: "kirli_araba", spokenText: "" }
    ]},

    // 8. Gömlek
    { id: 91, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "temiz_gömlek", spokenText: "" },
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "kirli_gömlek", spokenText: "" }
    ]},
    { id: 92, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "temiz_gömlek", spokenText: "" },
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "kirli_gömlek", spokenText: "" }
    ]},

    // 9. Çorap
    { id: 93, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: true, audioKey: "çoraplar", spokenText: "" },
        { id: 58, word: "çorap", imageUrl: "/images/58.png", isCorrect: false, audioKey: "çorap", spokenText: "" }
    ]},
    { id: 94, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: false, audioKey: "çoraplar", spokenText: "" },
        { id: 58, word: "çorap", imageUrl: "/images/58.png", isCorrect: true, audioKey: "çorap", spokenText: "" }
    ]},
];