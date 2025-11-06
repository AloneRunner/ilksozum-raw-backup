import { ConceptRound, ActivityType } from '../../../../types';

export const hardSoftData: ConceptRound[] = [
    // 1. Taş vs Pamuk
    { id: 1, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard_person", activityType: ActivityType.HardSoft, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "sert taş" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "yumuşak pamuk" }
    ]},
    { id: 2, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "sert taş" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "yumuşak pamuk" }
    ]},

    // 2. Tuğla vs Yastık
    { id: 3, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "sert tuğla" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "yumuşak yastık" }
    ]},
    { id: 4, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "sert tuğla" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "yumuşak yastık" }
    ]},

    // 3. Çekiç vs Oyuncak Ayı
    { id: 5, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 496, word: "çekiç", imageUrl: "/images/496.png", isCorrect: true, audioKey: "çekiç", spokenText: "sert çekiç" },
        { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: false, audioKey: "oyuncak_ayı", spokenText: "yumuşak oyuncak ayı" }
    ]},
    { id: 6, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 496, word: "çekiç", imageUrl: "/images/496.png", isCorrect: false, audioKey: "çekiç", spokenText: "sert çekiç" },
        { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: true, audioKey: "oyuncak_ayı", spokenText: "yumuşak oyuncak ayı" }
    ]},

    // 4. Masa vs Sünger
    { id: 7, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "sert masa" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: false, audioKey: "sünger", spokenText: "yumuşak sünger" } // Image URL düzeltildi (.png -> .gif)
    ]},
    { id: 8, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "sert masa" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: true, audioKey: "sünger", spokenText: "yumuşak sünger" } // Image URL düzeltildi (.png -> .gif)
    ]},

    // 5. Elmas vs Yün
    { id: 9, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: true, audioKey: "elmas", spokenText: "sert elmas" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yün", spokenText: "yumuşak yün" }
    ]},
    { id: 10, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: false, audioKey: "elmas", spokenText: "sert elmas" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yün", spokenText: "yumuşak yün" }
    ]},

    // 6. Kask vs Bere
    { id: 11, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 370, word: "kask", imageUrl: "/images/370.png", isCorrect: true, audioKey: "kask", spokenText: "sert kask" },
        { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: false, audioKey: "bere", spokenText: "yumuşak bere" }
    ]},
    { id: 12, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 370, word: "kask", imageUrl: "/images/370.png", isCorrect: false, audioKey: "kask", spokenText: "sert kask" },
        { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: true, audioKey: "bere", spokenText: "yumuşak bere" }
    ]},

    // 7. Tencere vs Hamur
    { id: 13, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "sert tencere" },
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: false, audioKey: "hamur", spokenText: "yumuşak hamur" }
    ]},
    { id: 14, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "sert tencere" },
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: true, audioKey: "hamur", spokenText: "yumuşak hamur" }
    ]},

    // 8. Ceviz vs Ekmek
    { id: 15, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: true, audioKey: "ceviz", spokenText: "sert ceviz" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "ekmek", spokenText: "yumuşak ekmek" }
    ]},
    { id: 16, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: false, audioKey: "ceviz", spokenText: "sert ceviz" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "ekmek", spokenText: "yumuşak ekmek" }
    ]},

    // 9. Otoyol vs Çim
    { id: 17, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "otoyol", spokenText: "sert otoyol" },
        { id: 434, word: "çim", imageUrl: "/images/434.png", isCorrect: false, audioKey: "çim", spokenText: "yumuşak çim" }
    ]},
    { id: 18, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "otoyol", spokenText: "sert otoyol" },
        { id: 434, word: "çim", imageUrl: "/images/434.png", isCorrect: true, audioKey: "çim", spokenText: "yumuşak çim" }
    ]},

    // 10. Misket vs Yün
    { id: 19, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "sert misket" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yün", spokenText: "yumuşak yün" }
    ]},
    { id: 20, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "sert misket" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yün", spokenText: "yumuşak yün" }
    ]},

    // 11. Fındık vs Peynir
    { id: 21, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 94, word: "fındık", imageUrl: "/images/94.png", isCorrect: true, audioKey: "fındık", spokenText: "sert fındık" },
        { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: false, audioKey: "peynir", spokenText: "yumuşak peynir" }
    ]},
    { id: 22, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 94, word: "fındık", imageUrl: "/images/94.png", isCorrect: false, audioKey: "fındık", spokenText: "sert fındık" },
        { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: true, audioKey: "peynir", spokenText: "yumuşak peynir" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 12. Elma vs Şeftali
    { id: 23, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "sert elma" },
        { id: 333, word: "şeftali", imageUrl: "/images/333.png", isCorrect: false, audioKey: "şeftali", spokenText: "yumuşak şeftali" }
    ]},
    { id: 24, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "sert elma" },
        { id: 333, word: "şeftali", imageUrl: "/images/333.png", isCorrect: true, audioKey: "şeftali", spokenText: "yumuşak şeftali" }
    ]},
];