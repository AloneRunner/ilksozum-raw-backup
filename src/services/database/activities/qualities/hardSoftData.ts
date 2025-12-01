import { ConceptRound, ActivityType } from '../../../../types';

export const hardSoftData: ConceptRound[] = [
    // 1. Taş vs Pamuk
    { id: 131, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard_person", activityType: ActivityType.HardSoft, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "" }
    ]},
    { id: 132, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "" },
        { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "" }
    ]},

    // 2. Tuğla vs Yastık
    { id: 133, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastık", spokenText: "" }
    ]},
    { id: 134, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "" },
        { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastık", spokenText: "" }
    ]},

    // 3. Çekiç vs Oyuncak Ayı
    { id: 135, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 496, word: "çekiç", imageUrl: "/images/496.png", isCorrect: true, audioKey: "çekiç", spokenText: "" },
        { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: false, audioKey: "oyuncak_ayı", spokenText: "" }
    ]},
    { id: 136, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 496, word: "çekiç", imageUrl: "/images/496.png", isCorrect: false, audioKey: "çekiç", spokenText: "" },
        { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: true, audioKey: "oyuncak_ayı", spokenText: "" }
    ]},

    // 4. Masa vs Sünger
    { id: 137, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: false, audioKey: "sünger", spokenText: "" } // Image URL düzeltildi (.png -> .gif)
    ]},
    { id: 138, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: true, audioKey: "sünger", spokenText: "" } // Image URL düzeltildi (.png -> .gif)
    ]},

    // 5. Elmas vs Yün
    { id: 139, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: true, audioKey: "elmas", spokenText: "" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yün", spokenText: "" }
    ]},
    { id: 140, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: false, audioKey: "elmas", spokenText: "" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yün", spokenText: "" }
    ]},

    // 6. Kask vs Bere
    { id: 141, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 370, word: "kask", imageUrl: "/images/370.png", isCorrect: true, audioKey: "kask", spokenText: "" },
        { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: false, audioKey: "bere", spokenText: "" }
    ]},
    { id: 142, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 370, word: "kask", imageUrl: "/images/370.png", isCorrect: false, audioKey: "kask", spokenText: "" },
        { id: 336, word: "bere", imageUrl: "/images/336.png", isCorrect: true, audioKey: "bere", spokenText: "" }
    ]},

    // 7. Tencere vs Hamur
    { id: 143, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "" },
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: false, audioKey: "hamur", spokenText: "" }
    ]},
    { id: 144, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "" },
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: true, audioKey: "hamur", spokenText: "" }
    ]},

    // 8. Ceviz vs Ekmek
    { id: 145, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: true, audioKey: "ceviz", spokenText: "" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "ekmek", spokenText: "" }
    ]},
    { id: 146, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: false, audioKey: "ceviz", spokenText: "" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "ekmek", spokenText: "" }
    ]},

    // 9. Otoyol vs Çim
    { id: 147, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "otoyol", spokenText: "" },
        { id: 434, word: "çim", imageUrl: "/images/434.png", isCorrect: false, audioKey: "çim", spokenText: "" }
    ]},
    { id: 148, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "otoyol", spokenText: "" },
        { id: 434, word: "çim", imageUrl: "/images/434.png", isCorrect: true, audioKey: "çim", spokenText: "" }
    ]},

    // 10. Misket vs Yün
    { id: 149, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yün", spokenText: "" }
    ]},
    { id: 150, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yün", spokenText: "" }
    ]},

    // 11. Fındık vs Peynir
    { id: 151, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 94, word: "fındık", imageUrl: "/images/94.png", isCorrect: true, audioKey: "fındık", spokenText: "" },
        { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: false, audioKey: "peynir", spokenText: "" }
    ]},
    { id: 152, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 94, word: "fındık", imageUrl: "/images/94.png", isCorrect: false, audioKey: "fındık", spokenText: "" },
        { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: true, audioKey: "peynir", spokenText: "" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 12. Elma vs Şeftali
    { id: 153, question: "Sert olan hangisi?", questionAudioKey: "q_which_is_hard", activityType: ActivityType.HardSoft, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "" },
        { id: 333, word: "şeftali", imageUrl: "/images/333.png", isCorrect: false, audioKey: "şeftali", spokenText: "" }
    ]},
    { id: 154, question: "Yumuşak olan hangisi?", questionAudioKey: "q_which_is_soft", activityType: ActivityType.HardSoft, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "" },
        { id: 333, word: "şeftali", imageUrl: "/images/333.png", isCorrect: true, audioKey: "şeftali", spokenText: "" }
    ]},
];