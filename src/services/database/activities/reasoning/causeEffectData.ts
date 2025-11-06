import { ConceptRound, ActivityType } from '../../../../types.ts';

// Neden-Sonuç İlişkileri - Cause and Effect (20 rounds)
// Günlük olaylar arası sebep-sonuç bağlantıları
export const causeEffectData: ConceptRound[] = [
    { id: 1, question: "Yağmur yağınca ne yaparız?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 52, word: "yağmur", imageUrl: "/images/52.png", audioKeys: { default: "yağmur" }, tags: { category: "" } },
        options: [
            { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: true, audioKey: "şemsiye", spokenText: "şemsiye açılır" },
            { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: false, audioKey: "güneş_gözlüğü", spokenText: "güneş gözlüğü takılır" }
        ]
    },
    { id: 2, question: "Dondurma neden erir?", questionAudioKey: "q_what_is_the_cause", activityType: ActivityType.CauseEffect,
        questionItem: { id: 64, word: "dondurma", imageUrl: "/images/64.png", audioKeys: { default: "dondurma" }, tags: { category: "" } },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "güneş" },
            { id: 405, word: "kar", imageUrl: "/images/405.png", isCorrect: false, audioKey: "kar", spokenText: "kar" }
        ]
    },
    { id: 3, question: "Tohum ne olur?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 316, word: "tohum", imageUrl: "/images/316.png", audioKeys: { default: "tohum" }, tags: { category: "" } },
        options: [
            { id: 163, word: "bitki", imageUrl: "/images/163.png", isCorrect: true, audioKey: "bitki", spokenText: "bitki büyür" },
            { id: 537, word: "kütük", imageUrl: "/images/537.png", isCorrect: false, audioKey: "ağaç_gövdesi", spokenText: "ağaç kesilir" }
        ]
    },
    { id: 4, question: "Eller nasıl temizlenir?", questionAudioKey: "q_what_is_needed_to_be_clean", activityType: ActivityType.CauseEffect,
        questionItem: { id: 590, word: "el", imageUrl: "/images/590.png", audioKeys: { default: "temiz_el" }, tags: { category: "" } },
        options: [
            { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: false, audioKey: "kirli_el", spokenText: "kirli el" },
            { id: 209, word: "sabun", imageUrl: "/images/209.png", isCorrect: true, audioKey: "sabun", spokenText: "sabun" }
        ]
    },
    { id: 5, question: "Bunu düşürürsen ne olur?", questionAudioKey: "q_what_if_you_drop_this", activityType: ActivityType.CauseEffect,
        questionItem: { id: 113, word: "yumurta", imageUrl: "/images/113.png", audioKeys: { default: "yumurta" }, tags: { category: "" } },
        options: [
            { id: 77, word: "kırık yumurta", imageUrl: "/images/77.png", isCorrect: true, audioKey: "kırık_yumurta", spokenText: "yumurta kırılır" },
            { id: 376, word: "civciv", imageUrl: "/images/376.png", isCorrect: false, audioKey: "civciv", spokenText: "civciv çıkar" }
        ]
    },
    { id: 6, question: "Ateş nasıl yanar?", questionAudioKey: "q_what_is_the_cause", activityType: ActivityType.CauseEffect,
        questionItem: { id: 707, word: "ateş", imageUrl: "/images/707.png", audioKeys: { default: "ateş" }, tags: { category: "" } },
        options: [
            { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: true, audioKey: "ağaç_gövdesi", spokenText: "odun" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "taş" }
        ]
    },
    { id: 7, question: "Çekiçle vazo kırarsan ne olur?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 496, word: "çekiç", imageUrl: "/images/496.png", audioKeys: { default: "çekiç" }, tags: { category: "" } },
        options: [
            { id: 651, word: "kırık vazo", imageUrl: "/images/651.png", isCorrect: true, audioKey: "kırık_vazo", spokenText: "vazo kırılır" },
            { id: 35, word: "dolu vazo", imageUrl: "/images/35.png", isCorrect: false, audioKey: "dolu_vazo", spokenText: "vazo dolar" }
        ]
    },
    { id: 8, question: "Kar yağınca ne giyeriz?", questionAudioKey: "q_what_do_you_wear_when_this_happens", activityType: ActivityType.CauseEffect,
        questionItem: { id: 405, word: "kar", imageUrl: "/images/405.png", audioKeys: { default: "kar" }, tags: { category: "" } },
        options: [
            { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: true, audioKey: "bere", spokenText: "bere" },
            { id: 80, word: "şort", imageUrl: "/images/80.png", isCorrect: false, audioKey: "şort", spokenText: "şort" }
        ]
    },
    { id: 9, question: "Bebek acıkınca ne yapar?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 752, word: "bebek", imageUrl: "/images/752.png", audioKeys: { default: "bebek_aç" }, tags: { category: "" } },
        options: [
            { id: 371, word: "biberon", imageUrl: "/images/371.png", isCorrect: true, audioKey: "biberon_dolu", spokenText: "bebek süt içer" },
            { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: false, audioKey: "robot", spokenText: "bebek oyuncakla oynar" }
        ]
    },
    { id: 10, question: "Gömlek nasıl düzleşir?", questionAudioKey: "q_what_is_the_cause", activityType: ActivityType.CauseEffect,
        questionItem: { id: 255, word: "gömlek", imageUrl: "/images/255.png", audioKeys: { default: "gomlek_duzgun" }, tags: { category: "" } },
        options: [
            { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: true, audioKey: "ütü", spokenText: "ütü" },
            { id: 144, word: "makas", imageUrl: "/images/144.png", isCorrect: false, audioKey: "makas", spokenText: "makas" }
        ]
    },
    
    // === YENİ TURLAR: 11-15 (Düzeltilmiş ve doğrulanmış) ===
    { id: 11, question: "Gece olunca ne yaparız?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 603, word: "gece", imageUrl: "/images/603.png", audioKeys: { default: "gece" }, tags: { category: "" } },
        options: [
            { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "uyumak" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "oynamak" }
        ]
    },
    { id: 12, question: "Çiçek nasıl büyür?", questionAudioKey: "q_what_is_the_cause", activityType: ActivityType.CauseEffect,
        questionItem: { id: 443, word: "çiçek", imageUrl: "/images/443.png", audioKeys: { default: "çiçek" }, tags: { category: "" } },
        options: [
            { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: true, audioKey: "bardak", spokenText: "su" },
            { id: 144, word: "makas", imageUrl: "/images/144.png", isCorrect: false, audioKey: "makas", spokenText: "makas" }
        ]
    },
    { id: 13, question: "Kitap okuyunca ne olur?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 37, word: "kitap", imageUrl: "/images/37.png", audioKeys: { default: "kitap" }, tags: { category: "" } },
        options: [
            { id: 831, word: "öğrenci", imageUrl: "/images/831.png", isCorrect: true, audioKey: "öğrenci", spokenText: "öğrenmek" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top oynamak" }
        ]
    },
    { id: 14, question: "Balonu şişirince ne olur?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 130, word: "balon", imageUrl: "/images/130.png", audioKeys: { default: "balon" }, tags: { category: "" } },
        options: [
            { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: true, audioKey: "oyuncak_ayı", spokenText: "şişirmek" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "taş" }
        ]
    },
    { id: 15, question: "Hamur pişince ne olur?", questionAudioKey: "q_what_is_the_result", activityType: ActivityType.CauseEffect,
        questionItem: { id: 588, word: "hamur", imageUrl: "/images/588.png", audioKeys: { default: "hamur" }, tags: { category: "" } },
        options: [
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "pişmiş_ekmek", spokenText: "ekmek pişer" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "soğutmak" }
        ]
    },
];
