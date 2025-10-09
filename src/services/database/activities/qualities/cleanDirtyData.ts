import { ConceptRound, ActivityType } from '../../../../types.ts';

export const cleanDirtyData: ConceptRound[] = [
    // 1. Temiz El (590) - Kirli El (591)
    { id: 1, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: true, audioKey: "temiz_el", spokenText: "temiz el" },
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: false, audioKey: "kirli_el", spokenText: "kirli el" }
    ]},
    { id: 2, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: false, audioKey: "temiz_el", spokenText: "temiz el" },
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: true, audioKey: "kirli_el", spokenText: "kirli el" }
    ]},
    // 2. Temiz Tabak (153) - Kirli Tabak (589)
    { id: 3, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "temiz_tabak", spokenText: "temiz tabak" },
        { id: 589, word: "tabak", imageUrl: "/images/589.png", isCorrect: false, audioKey: "kirli_tabak", spokenText: "kirli tabak" }
    ]},
    { id: 4, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "temiz_tabak", spokenText: "temiz tabak" },
        { id: 589, word: "tabak", imageUrl: "/images/589.png", isCorrect: true, audioKey: "kirli_tabak", spokenText: "kirli tabak" }
    ]},
    // 3. Temiz Pencere (596) - Kirli Pencere (593)
    { id: 5, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "temiz_pencere", spokenText: "temiz pencere" },
        { id: 593, word: "pencere", imageUrl: "/images/593.png", isCorrect: false, audioKey: "kirli_pencere", spokenText: "kirli pencere" }
    ]},
    { id: 6, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "temiz_pencere", spokenText: "temiz pencere" },
        { id: 593, word: "pencere", imageUrl: "/images/593.png", isCorrect: true, audioKey: "kirli_pencere", spokenText: "kirli pencere" }
    ]},
    // 4. Temiz Tişört (13) - Kirli Tişört (14)
    { id: 7, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: true, audioKey: "temiz_tişört", spokenText: "temiz tişört" },
        { id: 14, word: "tişört", imageUrl: "/images/14.gif", isCorrect: false, audioKey: "kirli_tişört", spokenText: "kirli tişört" }
    ]},
    { id: 8, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: false, audioKey: "temiz_tişört", spokenText: "temiz tişört" },
        { id: 14, word: "tişört", imageUrl: "/images/14.gif", isCorrect: true, audioKey: "kirli_tişört", spokenText: "kirli tişört" }
    ]},
    // 5. Temiz Ayakkabı (59) - Kirli Ayakkabı (60)
    { id: 9, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: true, audioKey: "temiz_ayakkabı", spokenText: "temiz ayakkabı" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "kirli_ayakkabı", spokenText: "kirli ayakkabı" }
    ]},
    { id: 10, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: false, audioKey: "temiz_ayakkabı", spokenText: "temiz ayakkabı" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "kirli_ayakkabı", spokenText: "kirli ayakkabı" }
    ]},
    // 6. Temiz Halı (439) - Kirli Halı (438)
    { id: 11, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 439, word: "halı", imageUrl: "/images/439.png", isCorrect: true, audioKey: "temiz_halı", spokenText: "temiz halı" },
        { id: 438, word: "halı", imageUrl: "/images/438.png", isCorrect: false, audioKey: "kirli_halı", spokenText: "kirli halı" }
    ]},
    { id: 12, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 439, word: "halı", imageUrl: "/images/439.png", isCorrect: false, audioKey: "temiz_halı", spokenText: "temiz halı" },
        { id: 438, word: "halı", imageUrl: "/images/438.png", isCorrect: true, audioKey: "kirli_halı", spokenText: "kirli halı" }
    ]},
    // 7. Temiz Araba (1) - Kirli Araba (3)
    { id: 13, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "temiz_araba", spokenText: "temiz araba" },
        { id: 3, word: "araba", imageUrl: "/images/3.png", isCorrect: false, audioKey: "kirli_araba", spokenText: "kirli araba" }
    ]},
    { id: 14, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "temiz_araba", spokenText: "temiz araba" },
        { id: 3, word: "araba", imageUrl: "/images/3.png", isCorrect: true, audioKey: "kirli_araba", spokenText: "kirli araba" }
    ]},
    // 8. Temiz Gömlek (255) - Kirli Gömlek (254)
    { id: 15, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "temiz_gömlek", spokenText: "temiz gömlek" },
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "kirli_gömlek", spokenText: "kirli gömlek" }
    ]},
    { id: 16, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "temiz_gömlek", spokenText: "temiz gömlek" },
        { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "kirli_gömlek", spokenText: "kirli gömlek" }
    ]},
    // 9. Temiz Çorap (147) vs Kirli Çorap (58) - Banyo yapan çocuk çifti yerine eklendi.
    { id: 17, question: "Temiz olan hangisi?", questionAudioKey: "q_which_is_clean", activityType: ActivityType.CleanDirty, options: [
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: true, audioKey: "çoraplar", spokenText: "temiz çoraplar" },
        { id: 58, word: "çorap", imageUrl: "/images/58.png", isCorrect: false, audioKey: "çorap", spokenText: "kirli çorap" }
    ]},
    { id: 18, question: "Kirli olan hangisi?", questionAudioKey: "q_which_is_dirty", activityType: ActivityType.CleanDirty, options: [
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: false, audioKey: "çoraplar", spokenText: "temiz çoraplar" },
        { id: 58, word: "çorap", imageUrl: "/images/58.png", isCorrect: true, audioKey: "çorap", spokenText: "kirli çorap" }
    ]},
];