import { ConceptRound, ActivityType } from '../../../../types';

export const kalabalikTenhaData: ConceptRound[] = [
    // 1. Kalabalık Trafik (743) vs Tenha Yol (744)
    { id: 1, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: true, audioKey: "trafik", spokenText: "kalabalık trafik" },
        { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: false, audioKey: "yol", spokenText: "tenha yol" }
    ]},
    { id: 2, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: false, audioKey: "trafik", spokenText: "kalabalık trafik" },
        { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: true, audioKey: "yol", spokenText: "tenha yol" }
    ]},
    // 2. Kalabalık Durak (197) vs Tenha Durak (198)
    { id: 3, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: true, audioKey: "durak", spokenText: "kalabalık durak" },
        { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: false, audioKey: "durak", spokenText: "tenha durak" }
    ]},
    { id: 4, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: false, audioKey: "durak", spokenText: "kalabalık durak" },
        { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: true, audioKey: "durak", spokenText: "tenha durak" }
    ]},
    // 3. Kalabalık Orman (242) vs Tenha Alan (104)
    { id: 5, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: true, audioKey: "orman", spokenText: "kalabalık orman" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "ağaç", spokenText: "tenha alan" }
    ]},
    { id: 6, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: false, audioKey: "orman", spokenText: "kalabalık orman" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "ağaç", spokenText: "tenha alan" }
    ]},
    // 4. Kalabalık Kuş Sürüsü (617) vs Tek Kuş (73)
    { id: 7, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: true, audioKey: "kuş_sürüsü", spokenText: "kalabalık kuş sürüsü" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kuş", spokenText: "tek kuş" }
    ]},
    { id: 8, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: false, audioKey: "kuş_sürüsü", spokenText: "kalabalık kuş sürüsü" },
        { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kuş", spokenText: "tek kuş" }
    ]},
    // 5. Kalabalık İnsan Grubu (193) vs Tek Başına İnsan (718)
    { id: 9, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: true, audioKey: "insan_grubu", spokenText: "kalabalık insan grubu" },
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: false, audioKey: "adam", spokenText: "tek başına adam" }
    ]},
    { id: 10, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: false, audioKey: "insan_grubu", spokenText: "kalabalık insan grubu" },
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: true, audioKey: "adam", spokenText: "tek başına adam" }
    ]},
    // 6. Kalabalık Akvaryum (739) vs Tenha Akvaryum (740)
    { id: 11, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "kalabalık akvaryum" },
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "tenha akvaryum" }
    ]},
    { id: 12, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "kalabalık akvaryum" },
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "tenha akvaryum" }
    ]},
    // 7. Kalabalık Ağaç (741) vs Tenha Ağaç (742)
    { id: 13, question: "Kalabalık olan hangisi?", questionAudioKey: "q_which_is_crowded", activityType: ActivityType.KalabalikTenha, options: [
        { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: true, audioKey: "ağaç", spokenText: "kalabalık ağaç" },
        { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: false, audioKey: "ağaç", spokenText: "tenha ağaç" }
    ]},
    { id: 14, question: "Tenha olan hangisi?", questionAudioKey: "q_which_is_sparse", activityType: ActivityType.KalabalikTenha, options: [
        { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: false, audioKey: "ağaç", spokenText: "kalabalık ağaç" },
        { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: true, audioKey: "ağaç", spokenText: "tenha ağaç" }
    ]},
];
