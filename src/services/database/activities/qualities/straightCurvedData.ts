import { ConceptRound, ActivityType } from '../../../../types';

export const straightCurvedData: ConceptRound[] = [
    // 1. Yol
    { id: 1, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 530, word: "yol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "yol", spokenText: "düz yol" }, // Aslında patika görseli ama düz
        { id: 62, word: "yol", imageUrl: "/images/62.png", isCorrect: false, audioKey: "yol", spokenText: "eğri yol" }
    ]},
    { id: 2, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 530, word: "yol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "yol", spokenText: "düz yol" },
        { id: 62, word: "yol", imageUrl: "/images/62.png", isCorrect: true, audioKey: "yol", spokenText: "eğri yol" }
    ]},

    // 2. Cetvel vs Solucan
    { id: 3, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "düz cetvel" },
        { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: false, audioKey: "solucan", spokenText: "eğri solucan" }
    ]},
    { id: 4, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "düz cetvel" },
        { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: true, audioKey: "solucan", spokenText: "eğri solucan" }
    ]},

    // 3. Ok vs Yay
    { id: 5, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 634, word: "ok", imageUrl: "/images/634.png", isCorrect: true, audioKey: "ok", spokenText: "düz ok" },
        { id: 633, word: "yay", imageUrl: "/images/633.png", isCorrect: false, audioKey: "yay", spokenText: "eğri yay" }
    ]},
    { id: 6, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 634, word: "ok", imageUrl: "/images/634.png", isCorrect: false, audioKey: "ok", spokenText: "düz ok" },
        { id: 633, word: "yay", imageUrl: "/images/633.png", isCorrect: true, audioKey: "yay", spokenText: "eğri yay" }
    ]},

    // 4. Kalem vs Muz
    { id: 7, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: true, audioKey: "kalem", spokenText: "düz kalem" },
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "eğri muz" }
    ]},
    { id: 8, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: false, audioKey: "kalem", spokenText: "düz kalem" },
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "eğri muz" }
    ]},

    // 5. Davul Çubuğu vs Yılan
    { id: 9, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_çubuğu", spokenText: "düz çubuk" },
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: false, audioKey: "yılan", spokenText: "eğri yılan" }
    ]},
    { id: 10, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_çubuğu", spokenText: "düz çubuk" },
        { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: true, audioKey: "yılan", spokenText: "eğri yılan" }
    ]},

    // 6. Kitap vs Ay
    { id: 11, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "düz kitap" },
        { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: false, audioKey: "ay", spokenText: "eğri ay" }
    ]},
    { id: 12, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "düz kitap" },
        { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay", spokenText: "eğri ay" }
    ]},

    // 7. Tuğla vs Gökkuşağı
    { id: 13, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tuğla", spokenText: "düz tuğla" },
        { id: 159, word: "gökkuşağı", imageUrl: "/images/159.png", isCorrect: false, audioKey: "gökkuşağı", spokenText: "eğri gökkuşağı" }
    ]},
    { id: 14, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tuğla", spokenText: "düz tuğla" },
        { id: 159, word: "gökkuşağı", imageUrl: "/images/159.png", isCorrect: true, audioKey: "gökkuşağı", spokenText: "eğri gökkuşağı" }
    ]},

    // 8. Bıçak vs Salatalık
    { id: 15, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 262, word: "bıçak", imageUrl: "/images/262.png", isCorrect: true, audioKey: "bıçak", spokenText: "düz bıçak" },
        { id: 116, word: "salatalık", imageUrl: "/images/116.png", isCorrect: false, audioKey: "salatalık", spokenText: "eğri salatalık" }
    ]},
    { id: 16, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 262, word: "bıçak", imageUrl: "/images/262.png", isCorrect: false, audioKey: "bıçak", spokenText: "düz bıçak" },
        { id: 116, word: "salatalık", imageUrl: "/images/116.png", isCorrect: true, audioKey: "salatalık", spokenText: "eğri salatalık" }
    ]},

    // 9. Masa vs Nehir
    { id: 17, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "düz masa" },
        { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: false, audioKey: "nehir", spokenText: "eğri nehir" }
    ]},
    { id: 18, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "düz masa" },
        { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: true, audioKey: "nehir", spokenText: "eğri nehir" }
    ]},

    // 10. Bıçak vs Kaşık
    // (Removed) Bıçak vs Kaşık pair per user request
    
    // --- YENİ EKLENEN SORU ---
    // 11. Pırasa vs Muz
    { id: 21, question: "Düz olan hangisi?", questionAudioKey: "q_which_is_straight", activityType: ActivityType.StraightCurved, options: [
        { id: 421, word: "pırasa", imageUrl: "/images/421.png", isCorrect: true, audioKey: "pırasa", spokenText: "düz pırasa" },
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "eğri muz" }
    ]},
    { id: 22, question: "Eğri olan hangisi?", questionAudioKey: "q_which_is_curved", activityType: ActivityType.StraightCurved, options: [
        { id: 421, word: "pırasa", imageUrl: "/images/421.png", isCorrect: false, audioKey: "pırasa", spokenText: "düz pırasa" },
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "eğri muz" }
    ]},
];