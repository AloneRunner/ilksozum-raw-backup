import { ConceptRound, ActivityType } from '../../../../types';

export const kalabalikTenhaData: ConceptRound[] = [
    // 1. Trafik vs Yol
    { id: 217, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: true, audioKey: "trafik", spokenText: "" },
        { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: false, audioKey: "yol", spokenText: "" }
    ]},
    { id: 218, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: false, audioKey: "trafik", spokenText: "" },
        { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: true, audioKey: "yol", spokenText: "" }
    ]},

    // 2. Durak
    { id: 219, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: true, audioKey: "durak", spokenText: "" },
        { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: false, audioKey: "durak", spokenText: "" }
    ]},
    { id: 220, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: false, audioKey: "durak", spokenText: "" },
        { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: true, audioKey: "durak", spokenText: "" }
    ]},

    // 3. Orman vs Tek Ağaç
    { id: 221, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
    { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: true, audioKey: "orman", spokenText: "" },
    { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "ağaç", spokenText: "" } // normalized to 'tenha ağaç'
    ]},
    { id: 222, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
    { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: false, audioKey: "orman", spokenText: "" },
    { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "ağaç", spokenText: "" } // normalized to 'tenha ağaç'
    ]},

    // 4. Kuş Sürüsü vs Tek Kuş
    { id: 223, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: true, audioKey: "kuş_sürüsü", spokenText: "" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kuş", spokenText: "" }
    ]},
    { id: 224, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: false, audioKey: "kuş_sürüsü", spokenText: "" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kuş", spokenText: "" }
    ]},

    // 5. İnsan Grubu vs Tek Adam
    { id: 225, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: true, audioKey: "insan_grubu", spokenText: "" },
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: false, audioKey: "adam", spokenText: "" }
    ]},
    { id: 226, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: false, audioKey: "insan_grubu", spokenText: "" },
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: true, audioKey: "adam", spokenText: "" }
    ]},

    // 6. Akvaryum (Kalabalık) vs Akvaryum (Tenha)
    { id: 227, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "" },
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "" }
    ]},
    { id: 228, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "" },
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "" }
    ]},

    // 7. Ağaçtaki Kuşlar (Kalabalık) vs Ağaçtaki Kuşlar (Tenha)
    { id: 229, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: true, audioKey: "ağaç", spokenText: "" },
        { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: false, audioKey: "ağaç", spokenText: "" }
    ]},
    { id: 230, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: false, audioKey: "ağaç", spokenText: "" },
        { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: true, audioKey: "ağaç", spokenText: "" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 8. Otobüs (Dolu) vs Otobüs (Boş)
    { id: 15, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: true, audioKey: "okul_otobüsü", spokenText: "" }, // Öğrenciler içinde
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: false, audioKey: "okul_otobüsü", spokenText: "" } // Boş otobüs
    ]},
    { id: 16, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: false, audioKey: "okul_otobüsü", spokenText: "" },
        { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: true, audioKey: "okul_otobüsü", spokenText: "" }
    ]},
];