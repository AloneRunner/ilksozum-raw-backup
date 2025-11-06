import { ActivityType, ConceptRound } from '../../../types';

export const sensesData: ConceptRound[] = [
    // --- Temel Organ Soruları ---
    { id: 1, question: "Hangisiyle görürüz?", questionAudioKey: "q_which_sense_see_person", activityType: ActivityType.Senses,
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "göz", spokenText: "göz" },
            { id: 490, word: "kulak", imageUrl: "/images/490.png", isCorrect: false, audioKey: "kulak", spokenText: "kulak" }
        ]
    },
    { id: 2, question: "Hangisiyle duyarız?", questionAudioKey: "q_which_sense_hear", activityType: ActivityType.Senses,
        options: [
            { id: 490, word: "kulak", imageUrl: "/images/490.png", isCorrect: true, audioKey: "kulak", spokenText: "kulak" },
            { id: 556, word: "burun", imageUrl: "/images/556.png", isCorrect: false, audioKey: "burun", spokenText: "burun" }
        ]
    },
    { id: 3, question: "Hangisiyle koku alırız?", questionAudioKey: "q_which_sense_smell", activityType: ActivityType.Senses,
        options: [
            { id: 556, word: "burun", imageUrl: "/images/556.png", isCorrect: true, audioKey: "burun", spokenText: "burun" },
            { id: 558, word: "dil", imageUrl: "/images/558.png", isCorrect: false, audioKey: "dil", spokenText: "dil" }
        ]
    },
    { id: 4, question: "Hangisiyle tat alırız?", questionAudioKey: "q_which_sense_taste", activityType: ActivityType.Senses,
        options: [
            { id: 558, word: "dil", imageUrl: "/images/558.png", isCorrect: true, audioKey: "dil", spokenText: "dil" },
            { id: 285, word: "el", imageUrl: "/images/285.png", isCorrect: false, audioKey: "el", spokenText: "el" }
        ]
    },
    { id: 5, question: "Hangisiyle dokunuruz?", questionAudioKey: "q_which_sense_touch", activityType: ActivityType.Senses,
        options: [
            { id: 285, word: "el", imageUrl: "/images/285.png", isCorrect: true, audioKey: "el", spokenText: "el" },
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "göz" }
        ]
    },

    // --- Nesneye Yönelik Organ Soruları ---
    { id: 6, question: "Bunu hangisiyle koklarız?", questionAudioKey: "q_which_organ_smell_this", activityType: ActivityType.Senses,
        options: [
            { id: 556, word: "burun", imageUrl: "/images/556.png", isCorrect: true, audioKey: "burun", spokenText: "burun" },
            { id: 490, word: "kulak", imageUrl: "/images/490.png", isCorrect: false, audioKey: "kulak", spokenText: "kulak" }
        ],
        questionItem: { id: 76, word: "çiçek", imageUrl: "/images/76.png", audioKeys: { default: "çiçek" }, tags: { category: "" }}
    },
    { id: 7, question: "Bunu hangisiyle duyarız?", questionAudioKey: "q_which_organ_hear_this", activityType: ActivityType.Senses,
        options: [
            { id: 490, word: "kulak", imageUrl: "/images/490.png", isCorrect: true, audioKey: "kulak", spokenText: "kulak" },
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "göz" }
        ],
        questionItem: { id: 72, word: "davul", imageUrl: "/images/72.png", audioKeys: { default: "davul" }, tags: { category: "" }}
    },
    { id: 8, question: "Bunu hangisiyle tadarız?", questionAudioKey: "q_which_organ_taste_this", activityType: ActivityType.Senses,
        options: [
            { id: 558, word: "dil", imageUrl: "/images/558.png", isCorrect: true, audioKey: "dil", spokenText: "dil" },
            { id: 556, word: "burun", imageUrl: "/images/556.png", isCorrect: false, audioKey: "burun", spokenText: "burun" }
        ],
        questionItem: { id: 43, word: "elma", imageUrl: "/images/43.png", audioKeys: { default: "elma" }, tags: { category: "" }}
    },
    { id: 9, question: "Bunu hangisiyle hissederiz?", questionAudioKey: "q_which_organ_touch_this", activityType: ActivityType.Senses,
        options: [
            { id: 285, word: "el", imageUrl: "/images/285.png", isCorrect: true, audioKey: "el", spokenText: "el" },
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "göz" }
        ],
        questionItem: { id: 346, word: "gül dalı", imageUrl: "/images/346.png", audioKeys: { default: "gül_dalı" }, tags: { category: "" } }
    },
    { id: 10, question: "Bunu hangisiyle görürüz?", questionAudioKey: "q_which_organ_see_this", activityType: ActivityType.Senses,
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "göz", spokenText: "göz" },
            { id: 490, word: "kulak", imageUrl: "/images/490.png", isCorrect: false, audioKey: "kulak", spokenText: "kulak" }
        ],
        questionItem: { id: 74, word: "el feneri", imageUrl: "/images/74.png", audioKeys: { default: "el_feneri" }, tags: { category: "" } }
    },

    // --- Kavramsal Duyu Soruları ---
    { id: 11, question: "Hangisi genellikle güzel kokar?", questionAudioKey: "q_which_smells_good", activityType: ActivityType.Senses,
        options: [
            { id: 309, word: "gül", imageUrl: "/images/309.png", isCorrect: true, audioKey: "gül", spokenText: "gül" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "taş" }
        ]
    },
    { id: 12, question: "Hangisi ses çıkarır?", questionAudioKey: "q_which_makes_sound", activityType: ActivityType.Senses,
        options: [
            { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: true, audioKey: "davul", spokenText: "davul" },
            { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "yastık" }
        ]
    },
    { id: 13, question: "Daha iyi görmek için hangisini kullanırız?", questionAudioKey: "q_which_helps_see_better", activityType: ActivityType.Senses,
        options: [
            { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gözlük", spokenText: "gözlük" },
            { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: false, audioKey: "bere", spokenText: "bere" }
        ]
    },
    { id: 14, question: "Hangisine dokunmak canımızı acıtabilir?", questionAudioKey: "q_which_can_hurt_touch", activityType: ActivityType.Senses,
        options: [
            { id: 281, word: "kaktüs", imageUrl: "/images/281.png", isCorrect: true, audioKey: "kaktüs", spokenText: "kaktüs" },
            { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tüy", spokenText: "tüy" }
        ]
    },
    { id: 15, question: "Hangisinin tadı genellikle ekşidir?", questionAudioKey: "q_which_is_sour", activityType: ActivityType.Senses,
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "limon" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "muz" }
        ]
    }
];