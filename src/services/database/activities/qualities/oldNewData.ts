import { ConceptRound, ActivityType } from '../../../../types';

export const oldNewData: ConceptRound[] = [
    // 1. Bisiklet
    { id: 1, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "eski bisiklet" },
        { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "yeni bisiklet" }
    ]},
    { id: 2, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "eski bisiklet" },
        { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "yeni bisiklet" }
    ]},

    // 2. Araba (Animasyon)
    { id: 3, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: true, audioKey: "araba", spokenText: "eski araba" },
        { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: false, audioKey: "araba", spokenText: "yeni araba" }
    ]},
    { id: 4, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: false, audioKey: "araba", spokenText: "eski araba" },
        { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: true, audioKey: "araba", spokenText: "yeni araba" }
    ]},

    // 3. Tren
    { id: 5, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: true, audioKey: "tren", spokenText: "eski tren" },
        { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: false, audioKey: "tren", spokenText: "yeni tren" }
    ]},
    { id: 6, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: false, audioKey: "tren", spokenText: "eski tren" },
        { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: true, audioKey: "tren", spokenText: "yeni tren" }
    ]},

    // 4. Ayakkabı
    { id: 7, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "eski ayakkabı" },
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "yeni ayakkabı" }
    ]},
    { id: 8, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "eski ayakkabı" },
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "yeni ayakkabı" }
    ]},

    // --- YENİ EKLENEN SORULAR ---
    // 5. Kale vs Ev
    { id: 9, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 212, word: "kale", imageUrl: "/images/212.png", isCorrect: true, audioKey: "kale", spokenText: "eski kale" },
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: false, audioKey: "ev", spokenText: "yeni ev" }
    ]},
    { id: 10, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 212, word: "kale", imageUrl: "/images/212.png", isCorrect: false, audioKey: "kale", spokenText: "eski kale" },
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: true, audioKey: "ev", spokenText: "yeni ev" }
    ]},

    // 6. Sandalye
    { id: 11, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: true, audioKey: "kırık_sandalye", spokenText: "eski sandalye" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "yeni sandalye" }
    ]},
    { id: 12, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: false, audioKey: "kırık_sandalye", spokenText: "eski sandalye" },
        { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "yeni sandalye" }
    ]},

    // 7. Araba (Kırık vs Yeni)
    { id: 13, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: true, audioKey: "kırık_araba", spokenText: "eski araba" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "yeni araba" }
    ]},
    { id: 14, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: false, audioKey: "kırık_araba", spokenText: "eski araba" },
        { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "yeni araba" }
    ]},

    // 8. Kitap
    { id: 15, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 570, word: "kitap", imageUrl: "/images/570.png", isCorrect: true, audioKey: "kitap", spokenText: "eski kitap" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: false, audioKey: "kitap", spokenText: "yeni kitap" }
    ]},
    { id: 16, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 570, word: "kitap", imageUrl: "/images/570.png", isCorrect: false, audioKey: "kitap", spokenText: "eski kitap" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "yeni kitap" }
    ]},

    // 9. Ampul vs Led Ampul
    { id: 17, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: true, audioKey: "ampul", spokenText: "eski ampul" },
        { id: 887, word: "led ampul", imageUrl: "/images/887.png", isCorrect: false, audioKey: "led_ampul", spokenText: "yeni ampul" }
    ]},
    { id: 18, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: false, audioKey: "ampul", spokenText: "eski ampul" },
        { id: 887, word: "led ampul", imageUrl: "/images/887.png", isCorrect: true, audioKey: "led_ampul", spokenText: "yeni ampul" }
    ]},

    // 10. Ev
    { id: 19, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 888, word: "ev", imageUrl: "/images/888.png", isCorrect: true, audioKey: "ev", spokenText: "eski ev" },
        { id: 889, word: "ev", imageUrl: "/images/889.png", isCorrect: false, audioKey: "ev", spokenText: "yeni ev" }
    ]},
    { id: 20, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 888, word: "ev", imageUrl: "/images/888.png", isCorrect: false, audioKey: "ev", spokenText: "eski ev" },
        { id: 889, word: "ev", imageUrl: "/images/889.png", isCorrect: true, audioKey: "ev", spokenText: "yeni ev" }
    ]},

    // 11. Televizyon
    { id: 21, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: true, audioKey: "kırık_televizyon", spokenText: "eski televizyon" },
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: false, audioKey: "televizyon", spokenText: "yeni televizyon" }
    ]},
    { id: 22, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: false, audioKey: "kırık_televizyon", spokenText: "eski televizyon" },
        { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: true, audioKey: "televizyon", spokenText: "yeni televizyon" }
    ]},

    // 12. Zarf vs Email
    { id: 23, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 572, word: "zarf", imageUrl: "/images/572.png", isCorrect: true, audioKey: "zarf", spokenText: "eski zarf" },
        { id: 573, word: "email", imageUrl: "/images/573.png", isCorrect: false, audioKey: "email", spokenText: "yeni email" }
    ]},
    { id: 24, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 572, word: "zarf", imageUrl: "/images/572.png", isCorrect: false, audioKey: "zarf", spokenText: "eski zarf" },
        { id: 573, word: "email", imageUrl: "/images/573.png", isCorrect: true, audioKey: "email", spokenText: "yeni email" }
    ]},

    // 13. Telefon (Kırık vs Yeni)
    { id: 25, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: true, audioKey: "kırık_telefon", spokenText: "eski telefon" },
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: false, audioKey: "akıllı_telefon", spokenText: "yeni telefon" }
    ]},
    { id: 26, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: false, audioKey: "kırık_telefon", spokenText: "eski telefon" },
        { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: true, audioKey: "akıllı_telefon", spokenText: "yeni telefon" }
    ]},
];