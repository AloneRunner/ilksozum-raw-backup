import { ConceptRound, ActivityType } from '../../../../types.ts';

export const oldNewData: ConceptRound[] = [
    // 1. Eski Bisiklet (907) vs Yeni Bisiklet (910)
    { 
        id: 1, 
        question: "Eski olan hangisi?", 
        questionAudioKey: "q_which_is_old", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "eski bisiklet" },
            { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "yeni bisiklet" }
        ]
    },
    { 
        id: 2, 
        question: "Yeni olan hangisi?", 
        questionAudioKey: "q_which_is_new", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "eski bisiklet" },
            { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "yeni bisiklet" }
        ]
    },
    // 2. Eski Araba (911) vs Yeni Araba (912)
    { 
        id: 3, 
        question: "Eski olan hangisi?", 
        questionAudioKey: "q_which_is_old", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: true, audioKey: "araba", spokenText: "eski araba" },
            { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: false, audioKey: "araba", spokenText: "yeni araba" }
        ]
    },
    { 
        id: 4, 
        question: "Yeni olan hangisi?", 
        questionAudioKey: "q_which_is_new", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: false, audioKey: "araba", spokenText: "eski araba" },
            { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: true, audioKey: "araba", spokenText: "yeni araba" }
        ]
    },
    // 3. Eski Tren (913) vs Yeni Tren (914)
    { 
        id: 5, 
        question: "Eski olan hangisi?", 
        questionAudioKey: "q_which_is_old", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: true, audioKey: "tren", spokenText: "eski tren" },
            { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: false, audioKey: "tren", spokenText: "yeni tren" }
        ]
    },
    { 
        id: 6, 
        question: "Yeni olan hangisi?", 
        questionAudioKey: "q_which_is_new", 
        activityType: ActivityType.OldNew, 
        options: [
            { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: false, audioKey: "tren", spokenText: "eski tren" },
            { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: true, audioKey: "tren", spokenText: "yeni tren" }
        ]
    },
     // Mevcut Eski Ayakkabı (60) - Yeni Ayakkabı (59)
    { id: 7, question: "Eski olan hangisi?", questionAudioKey: "q_which_is_old", activityType: ActivityType.OldNew, options: [
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "eski ayakkabı" },
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "yeni ayakkabı" }
    ]},
    { id: 8, question: "Yeni olan hangisi?", questionAudioKey: "q_which_is_new", activityType: ActivityType.OldNew, options: [
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "eski ayakkabı" },
        { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "yeni ayakkabı" }
    ]},
];
