import { ConceptRound, ActivityType } from '../../../../types';

export const hotColdData: ConceptRound[] = [
    // 1. Güneş vs Kardan Adam
    { id: 179, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "" },
        { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: false, audioKey: "kardan_adam", spokenText: "" }
    ]},
    { id: 180, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "" },
        { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: true, audioKey: "kardan_adam", spokenText: "" }
    ]},

    // 2. Ateş vs Buz
    { id: 181, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ateş", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "" }
    ]},
    { id: 182, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ateş", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "" }
    ]},

    // 3. Kahve vs Limonata
    { id: 183, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: true, audioKey: "kahve", spokenText: "" },
        { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: false, audioKey: "limonata", spokenText: "" }
    ]},
    { id: 184, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: false, audioKey: "kahve", spokenText: "" },
        { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: true, audioKey: "limonata", spokenText: "" }
    ]},

    // 4. Soba vs Buzdolabı
    { id: 185, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "" }
    ]},
    { id: 186, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabı", spokenText: "" }
    ]},

    // 5. Çorba vs Dondurma
    { id: 187, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: true, audioKey: "çorba", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "" }
    ]},
    { id: 188, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: false, audioKey: "çorba", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "" }
    ]},

    // 6. Termometre (Sıcak) vs Termometre (Soğuk)
    { id: 189, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: true, audioKey: "termometre", spokenText: "" },
        { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: false, audioKey: "termometre", spokenText: "" }
    ]},
    { id: 190, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: false, audioKey: "termometre", spokenText: "" },
        { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: true, audioKey: "termometre", spokenText: "" }
    ]},

    // 7. Ütü vs Vantilatör
    { id: 191, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: true, audioKey: "ütü", spokenText: "" },
        { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: false, audioKey: "vantilatör", spokenText: "" }
    ]},
    { id: 192, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: false, audioKey: "ütü", spokenText: "" },
        { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: true, audioKey: "vantilatör", spokenText: "" }
    ]},

    // 8. Volkan vs Buzdağı
    { id: 193, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: true, audioKey: "volkan", spokenText: "" },
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: false, audioKey: "buzdağı", spokenText: "" }
    ]},
    { id: 194, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: false, audioKey: "volkan", spokenText: "" },
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: true, audioKey: "buzdağı", spokenText: "" }
    ]},

    // 9. Jakuzi vs İglo
    { id: 195, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: true, audioKey: "jakuzi", spokenText: "" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "" }
    ]},
    { id: 196, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: false, audioKey: "jakuzi", spokenText: "" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "" }
    ]},

    // 10. Mum vs Klima
    { id: 197, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: true, audioKey: "mum", spokenText: "" },
        { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: false, audioKey: "klima", spokenText: "" }
    ]},
    { id: 198, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: false, audioKey: "mum", spokenText: "" },
        { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: true, audioKey: "klima", spokenText: "" }
    ]},

    // 11. Çay vs Buz
    { id: 199, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "çay", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "" }
    ]},
    { id: 200, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "çay", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "" }
    ]},

    // 12. Güneş vs İglo
    { id: 201, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "" }
    ]},
    { id: 202, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "" }
    ]},

    // 13. Ateş vs Dondurma
    { id: 203, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ateş", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "" }
    ]},
    { id: 204, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ateş", spokenText: "" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "" }
    ]},

    // 14. Soba vs Buz
    { id: 27, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "" }
    ]},
    { id: 28, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "" }
    ]},

    // 15. Çay vs Buzdolabı
    { id: 29, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "çay", spokenText: "" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "" }
    ]},
    { id: 30, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "çay", spokenText: "" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabı", spokenText: "" }
    ]},
];