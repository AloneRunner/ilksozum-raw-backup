import { ConceptRound, ActivityType } from '../../../../types';

export const hotColdData: ConceptRound[] = [
    // 1. Güneş vs Kardan Adam
    { id: 1, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "sıcak güneş" },
        { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: false, audioKey: "kardan_adam", spokenText: "soğuk kardan adam" }
    ]},
    { id: 2, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "sıcak güneş" },
        { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: true, audioKey: "kardan_adam", spokenText: "soğuk kardan adam" }
    ]},

    // 2. Ateş vs Buz
    { id: 3, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ateş", spokenText: "sıcak ateş" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "soğuk buz" }
    ]},
    { id: 4, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ateş", spokenText: "sıcak ateş" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "soğuk buz" }
    ]},

    // 3. Kahve vs Limonata
    { id: 5, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: true, audioKey: "kahve", spokenText: "sıcak kahve" },
        { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: false, audioKey: "limonata", spokenText: "soğuk limonata" }
    ]},
    { id: 6, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: false, audioKey: "kahve", spokenText: "sıcak kahve" },
        { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: true, audioKey: "limonata", spokenText: "soğuk limonata" }
    ]},

    // 4. Soba vs Buzdolabı
    { id: 7, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "sıcak soba" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "soğuk buzdolabı" }
    ]},
    { id: 8, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "sıcak soba" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabı", spokenText: "soğuk buzdolabı" }
    ]},

    // 5. Çorba vs Dondurma
    { id: 9, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: true, audioKey: "çorba", spokenText: "sıcak çorba" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "soğuk dondurma" }
    ]},
    { id: 10, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: false, audioKey: "çorba", spokenText: "sıcak çorba" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "soğuk dondurma" }
    ]},

    // 6. Termometre (Sıcak) vs Termometre (Soğuk)
    { id: 11, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: true, audioKey: "termometre", spokenText: "sıcak termometre" },
        { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: false, audioKey: "termometre", spokenText: "soğuk termometre" }
    ]},
    { id: 12, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: false, audioKey: "termometre", spokenText: "sıcak termometre" },
        { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: true, audioKey: "termometre", spokenText: "soğuk termometre" }
    ]},

    // 7. Ütü vs Vantilatör
    { id: 13, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: true, audioKey: "ütü", spokenText: "sıcak ütü" },
        { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: false, audioKey: "vantilatör", spokenText: "soğuk vantilatör" }
    ]},
    { id: 14, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: false, audioKey: "ütü", spokenText: "sıcak ütü" },
        { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: true, audioKey: "vantilatör", spokenText: "soğuk vantilatör" }
    ]},

    // 8. Volkan vs Buzdağı
    { id: 15, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: true, audioKey: "volkan", spokenText: "sıcak volkan" },
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: false, audioKey: "buzdağı", spokenText: "soğuk buzdağı" }
    ]},
    { id: 16, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: false, audioKey: "volkan", spokenText: "sıcak volkan" },
        { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: true, audioKey: "buzdağı", spokenText: "soğuk buzdağı" }
    ]},

    // 9. Jakuzi vs İglo
    { id: 17, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: true, audioKey: "jakuzi", spokenText: "sıcak jakuzi" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "soğuk iglo" }
    ]},
    { id: 18, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: false, audioKey: "jakuzi", spokenText: "sıcak jakuzi" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "soğuk iglo" }
    ]},

    // 10. Mum vs Klima
    { id: 19, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: true, audioKey: "mum", spokenText: "sıcak mum" },
        { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: false, audioKey: "klima", spokenText: "soğuk klima" }
    ]},
    { id: 20, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: false, audioKey: "mum", spokenText: "sıcak mum" },
        { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: true, audioKey: "klima", spokenText: "soğuk klima" }
    ]},

    // 11. Çay vs Buz
    { id: 21, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "çay", spokenText: "sıcak çay" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "soğuk buz" }
    ]},
    { id: 22, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "çay", spokenText: "sıcak çay" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "soğuk buz" }
    ]},

    // 12. Güneş vs İglo
    { id: 23, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "sıcak güneş" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "soğuk iglo" }
    ]},
    { id: 24, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "sıcak güneş" },
        { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "soğuk iglo" }
    ]},

    // 13. Ateş vs Dondurma
    { id: 25, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ateş", spokenText: "sıcak ateş" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "soğuk dondurma" }
    ]},
    { id: 26, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ateş", spokenText: "sıcak ateş" },
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "soğuk dondurma" }
    ]},

    // 14. Soba vs Buz
    { id: 27, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "sıcak soba" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "soğuk buz" }
    ]},
    { id: 28, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "sıcak soba" },
        { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "soğuk buz" }
    ]},

    // 15. Çay vs Buzdolabı
    { id: 29, question: "Sıcak olan hangisi?", questionAudioKey: "q_which_is_hot", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "çay", spokenText: "sıcak çay" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "soğuk buzdolabı" }
    ]},
    { id: 30, question: "Soğuk olan hangisi?", questionAudioKey: "q_which_is_cold", activityType: ActivityType.HotCold, options: [
        { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "çay", spokenText: "sıcak çay" },
        { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabı", spokenText: "soğuk buzdolabı" }
    ]},
];