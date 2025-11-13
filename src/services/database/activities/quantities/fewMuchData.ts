import { ConceptRound, ActivityType } from '../../../../types.ts';

export const fewMuchData: ConceptRound[] = [
    // 1. Üzüm (87 vs 88)
    { id: 1, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few_person", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: true, audioKey: "üzüm", spokenText: "bu üzümler az" },
        { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: false, audioKey: "üzüm", spokenText: "bu üzümler çok" }
    ]},
    { id: 2, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: false, audioKey: "üzüm", spokenText: "bu üzümler az" },
        { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: true, audioKey: "üzüm", spokenText: "bu üzümler çok" }
    ]},

    // 2. Misket (389 vs 390)
    { id: 3, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: true, audioKey: "kavanoz", spokenText: "bu misketler az" },
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "bu misketler çok" }
    ]},
    { id: 4, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: false, audioKey: "kavanoz", spokenText: "bu misketler az" },
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "bu misketler çok" }
    ]},

    // 3. Kitap (613 vs 614)
    { id: 5, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplık", spokenText: "bu kitaplar az" },
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplık", spokenText: "bu kitaplar çok" }
    ]},
    { id: 6, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplık", spokenText: "bu kitaplar az" },
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplık", spokenText: "bu kitaplar çok" }
    ]},

    // 4. Para (248 vs 757)
    { id: 7, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: true, audioKey: "para", spokenText: "bu para az" },
        { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: false, audioKey: "para", spokenText: "bu para çok" }
    ]},
    { id: 8, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: false, audioKey: "para", spokenText: "bu para az" },
        { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: true, audioKey: "para", spokenText: "bu para çok" }
    ]},

    // 5. Balık (740 vs 739)
    { id: 9, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "bu balıklar az" },
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "bu balıklar çok" }
    ]},
    { id: 10, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "bu balıklar az" },
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "bu balıklar çok" }
    ]},

    // 6. Kuş (742 vs 741)
    { id: 11, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: true, audioKey: "kuş", spokenText: "bu kuşlar az" },
        { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: false, audioKey: "kuşlar", spokenText: "bu kuşlar çok" }
    ]},
    { id: 12, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: false, audioKey: "kuş", spokenText: "bu kuşlar az" },
        { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: true, audioKey: "kuşlar", spokenText: "bu kuşlar çok" }
    ]},

    // 7. Kalem (715 vs 714) - ID'ler ters yazılmış, düzeltildi
    { id: 13, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "bu kalemler az" },
        { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "bu kalemler çok" }
    ]},
    { id: 14, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "bu kalemler az" },
        { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "bu kalemler çok" }
    ]},

    // 8. Çiçekler (459 vs 483)
    { id: 15, question: "Az olan hangisi?", questionAudioKey: "q_which_is_few", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: true, audioKey: "çiçekler", spokenText: "bu çiçekler az" },
        { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: false, audioKey: "çiçek_buketi", spokenText: "bu çiçekler çok" }
    ]},
    { id: 16, question: "Çok olan hangisi?", questionAudioKey: "q_which_is_much", activityType: ActivityType.FewMuch, options: [ // Key eklendi
        { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: false, audioKey: "çiçekler", spokenText: "bu çiçekler az" },
        { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: true, audioKey: "çiçek_buketi", spokenText: "bu çiçekler çok" }
    ]},
];