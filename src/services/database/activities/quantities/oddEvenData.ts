import { ConceptRound, ActivityType } from '../../../../types.ts';

export const oddEvenData: ConceptRound[] = [
    // 1. çorap
    { id: 1, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "çorap", spokenText: "bu çorap tek" },
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: false, audioKey: "çoraplar", spokenText: "bu çoraplar çift" }
    ]},
    { id: 1.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "çorap", spokenText: "bu çorap tek" },
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: true, audioKey: "çoraplar", spokenText: "bu çoraplar çift" }
    ]},
    // 2. Eldiven
    { id: 2, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: true, audioKey: "eldiven", spokenText: "bu eldiven tek" },
        { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: false, audioKey: "eldivenler", spokenText: "bu eldivenler çift" }
    ]},
    { id: 2.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: false, audioKey: "eldiven", spokenText: "bu eldiven tek" },
        { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: true, audioKey: "eldivenler", spokenText: "bu eldivenler çift" }
    ]},
    // 3. küpe
    { id: 3, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: true, audioKey: "küpe", spokenText: "bu küpe tek" },
        { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: false, audioKey: "küpeler", spokenText: "bu küpeler çift" }
    ]},
    { id: 3.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: false, audioKey: "küpe", spokenText: "bu küpe tek" },
        { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: true, audioKey: "küpeler", spokenText: "bu küpeler çift" }
    ]},
    // 4. Paten
    { id: 4, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: true, audioKey: "paten", spokenText: "bu paten tek" },
        { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: false, audioKey: "patenler", spokenText: "bu patenler çift" }
    ]},
    { id: 4.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: false, audioKey: "paten", spokenText: "bu paten tek" },
        { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: true, audioKey: "patenler", spokenText: "bu patenler çift" }
    ]},
    // 5. Kayak
    { id: 5, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: true, audioKey: "kayak", spokenText: "bu kayak tek" },
        { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: false, audioKey: "kayaklar", spokenText: "bu kayaklar çift" }
    ]},
    { id: 5.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: false, audioKey: "kayak", spokenText: "bu kayak tek" },
        { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: true, audioKey: "kayaklar", spokenText: "bu kayaklar çift" }
    ]},
    // 6. Davul çubuğu
    { id: 6, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_çubuğu", spokenText: "bu çubuk tek" },
        { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: false, audioKey: "davul_çubukları", spokenText: "bu çubuklar çift" }
    ]},
    { id: 6.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_çubuğu", spokenText: "bu çubuk tek" },
        { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: true, audioKey: "davul_çubukları", spokenText: "bu çubuklar çift" }
    ]},
    // 7. Göz
    { id: 7, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "göz", spokenText: "bu göz tek" },
        { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: false, audioKey: "gözler", spokenText: "bu gözler çift" }
    ]},
    { id: 7.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "bu göz tek" },
        { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: true, audioKey: "gözler", spokenText: "bu gözler çift" }
    ]},
    // 8. Elma (43 vs 44)
    { id: 8, question: "Tek olan hangisi?", questionAudioKey: "q_which_is_odd", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "bu elma tek" },
        { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: false, audioKey: "elmalar", spokenText: "bu elmalar çift" }
    ]},
    { id: 8.1, question: "Çift olan hangisi?", questionAudioKey: "q_which_is_even", activityType: ActivityType.OddEven, options: [ // Key eklendi
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "bu elma tek" },
        { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: true, audioKey: "elmalar", spokenText: "bu elmalar çift" }
    ]},
];