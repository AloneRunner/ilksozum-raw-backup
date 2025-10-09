import { ConceptRound, NumberSequencingRound, ActivityType } from '../../../types.ts';

// All rounds focus on forward counting, with increasing range and complexity.
// Backward counting and complex patterns are removed.
export const numberSequencingData: NumberSequencingRound[] = [
    // --- EASY (1-10, single missing number) ---
    { id: 1, question: "Sıradaki sayı hangisi?", questionAudioKey: "", numbers: [1, 2, 3, null], answer: 4, options: [4, 5, 6], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 2, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [5, null, 7, 8], answer: 6, options: [9, 6, 4], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 3, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [null, 2, 3, 4], answer: 1, options: [1, 0, 5], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 4, question: "Sıradaki sayı hangisi?", questionAudioKey: "", numbers: [7, 8, 9, null], answer: 10, options: [8, 10, 6], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 5, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [2, 3, null, 5], answer: 4, options: [4, 6, 1], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 6, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [6, 7, null, 9], answer: 8, options: [10, 5, 8], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 7, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [null, 8, 9, 10], answer: 7, options: [7, 6, 5], difficulty: 'easy', activityType: ActivityType.NumberSequencing },
    { id: 8, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [4, 5, 6, null], answer: 7, options: [8, 7, 5], difficulty: 'easy', activityType: ActivityType.NumberSequencing },

    // --- MEDIUM (1-20, longer sequences) ---
    { id: 9, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [11, 12, null, 14], answer: 13, options: [15, 13, 10], difficulty: 'medium', activityType: ActivityType.NumberSequencing },
    { id: 10, question: "Sıradaki sayı hangisi?", questionAudioKey: "", numbers: [16, 17, 18, null], answer: 19, options: [20, 15, 19], difficulty: 'medium', activityType: ActivityType.NumberSequencing },
    { id: 11, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [9, 10, null, 12, 13], answer: 11, options: [11, 8, 14], difficulty: 'medium', activityType: ActivityType.NumberSequencing },
    { id: 12, question: "Eksik sayı hangisi?", questionAudioKey: "", numbers: [15, null, 17, 18, 19], answer: 16, options: [14, 20, 16], difficulty: 'medium', activityType: ActivityType.NumberSequencing },
    { id: 13, question: "Sıradaki sayı hangisi?", questionAudioKey: "", numbers: [13, 14, 15, 16, null], answer: 17, options: [18, 17, 15], difficulty: 'medium', activityType: ActivityType.NumberSequencing },

    // --- HARD (Simple skip counting forward) ---
    { id: 14, question: "İkişer sayalım, sıradaki ne?", questionAudioKey: "", numbers: [2, 4, 6, null], answer: 8, options: [10, 7, 8], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
    { id: 15, question: "İkişer sayalım, eksik olan ne?", questionAudioKey: "", numbers: [1, 3, null, 7], answer: 5, options: [9, 5, 6], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
    { id: 16, question: "Beşer sayalım, sıradaki ne?", questionAudioKey: "", numbers: [5, 10, 15, null], answer: 20, options: [25, 20, 16], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
    { id: 17, question: "Onar sayalım, sıradaki ne?", questionAudioKey: "", numbers: [10, 20, null, 40], answer: 30, options: [50, 25, 30], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
    { id: 18, question: "İkişer sayalım, eksik olan ne?", questionAudioKey: "", numbers: [10, 12, null, 16], answer: 14, options: [18, 13, 14], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
    { id: 19, question: "İkişer sayalım, baştaki ne?", questionAudioKey: "", numbers: [null, 4, 6, 8], answer: 2, options: [2, 10, 3], difficulty: 'hard', activityType: ActivityType.NumberSequencing },
];

export const fewMuchData: ConceptRound[] = [
    // 1. Üzüm (87 vs 88)
    { id: 1, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: true, audioKey: "üzüm", spokenText: "az üzüm" },
        { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: false, audioKey: "üzüm", spokenText: "çok üzüm" }
    ]},
    { id: 2, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: false, audioKey: "üzüm", spokenText: "az üzüm" },
        { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: true, audioKey: "üzüm", spokenText: "çok üzüm" }
    ]},
    // 2. Misket (389 vs 390)
    { id: 3, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: true, audioKey: "kavanoz", spokenText: "az misket" },
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "çok misket" }
    ]},
    { id: 4, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: false, audioKey: "kavanoz", spokenText: "az misket" },
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "çok misket" }
    ]},
    // 3. Kitap (613 vs 614)
    { id: 5, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplık", spokenText: "az kitap" },
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplık", spokenText: "çok kitap" }
    ]},
    { id: 6, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplık", spokenText: "az kitap" },
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplık", spokenText: "çok kitap" }
    ]},
    // 4. Para (248 vs 757)
    { id: 7, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: true, audioKey: "para", spokenText: "az para" },
        { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: false, audioKey: "para", spokenText: "çok para" }
    ]},
    { id: 8, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: false, audioKey: "para", spokenText: "az para" },
        { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: true, audioKey: "para", spokenText: "çok para" }
    ]},
    // 5. Balık (740 vs 739)
    { id: 9, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "az balık" },
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "çok balık" }
    ]},
    { id: 10, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "az balık" },
        { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "çok balık" }
    ]},
    // 6. Kuş (742 vs 741)
    { id: 11, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: true, audioKey: "kuş", spokenText: "az kuş" },
        { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: false, audioKey: "kuşlar", spokenText: "çok kuş" }
    ]},
    { id: 12, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: false, audioKey: "kuş", spokenText: "az kuş" },
        { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: true, audioKey: "kuşlar", spokenText: "çok kuş" }
    ]},
    // 7. Kalem (714 vs 715)
    { id: 13, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "az kalem" },
        { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "çok kalem" }
    ]},
    { id: 14, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "az kalem" },
        { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "çok kalem" }
    ]},
     // 8. Çiçekler (459 vs 483) - YENİ
    { id: 15, question: "Az olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: true, audioKey: "çiçekler", spokenText: "az çiçek" },
        { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: false, audioKey: "çiçek_buketi", spokenText: "çok çiçek" }
    ]},
    { id: 16, question: "Çok olan hangisi?", questionAudioKey: "", activityType: ActivityType.FewMuch, options: [
        { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: false, audioKey: "çiçekler", spokenText: "az çiçek" },
        { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: true, audioKey: "çiçek_buketi", spokenText: "çok çiçek" }
    ]},
];

export const halfQuarterWholeData: ConceptRound[] = [
    // Pizza
    { id: 1, question: "Bütün olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: true, audioKey: "pizza", spokenText: "bütün pizza" },
        { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: false, audioKey: "pizza", spokenText: "yarım pizza" },
        { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: false, audioKey: "pizza_dilimi", spokenText: "çeyrek pizza" }
    ]},
    { id: 2, question: "Yarım olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: false, audioKey: "pizza", spokenText: "bütün pizza" },
        { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: true, audioKey: "pizza", spokenText: "yarım pizza" },
        { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: false, audioKey: "pizza_dilimi", spokenText: "çeyrek pizza" }
    ]},
    { id: 3, question: "Çeyrek olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: false, audioKey: "pizza", spokenText: "bütün pizza" },
        { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: false, audioKey: "pizza", spokenText: "yarım pizza" },
        { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: true, audioKey: "pizza_dilimi", spokenText: "çeyrek pizza" }
    ]},
    // Portakal
    { id: 4, question: "Bütün olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 115, word: "portakal", imageUrl: "/images/115.png", isCorrect: true, audioKey: "portakal", spokenText: "bütün portakal" },
        { id: 508, word: "portakal", imageUrl: "/images/508.png", isCorrect: false, audioKey: "portakal", spokenText: "yarım portakal" }
    ]},
    // Simit
    { id: 5, question: "Bütün olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 296, word: "simit", imageUrl: "/images/296.png", isCorrect: true, audioKey: "simit", spokenText: "bütün simit" },
        { id: 509, word: "simit", imageUrl: "/images/509.png", isCorrect: false, audioKey: "simit", spokenText: "yarım simit" }
    ]},
    // Pasta
    { id: 6, question: "Bütün olan hangisi?", questionAudioKey: "", activityType: ActivityType.HalfQuarterWhole, options: [
        { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: true, audioKey: "pasta", spokenText: "bütün pasta" },
        { id: 486, word: "pasta dilimi", imageUrl: "/images/486.png", isCorrect: false, audioKey: "pasta_dilimi", spokenText: "pasta dilimi" }
    ]}
];

export const fullEmptyData: ConceptRound[] = [
    // 1. Kutu
    { id: 1, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: true, audioKey: "kutu", spokenText: "dolu kutu" },
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: false, audioKey: "kutu", spokenText: "boş kutu" }
    ]},
    { id: 1.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: false, audioKey: "kutu", spokenText: "dolu kutu" },
        { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: true, audioKey: "kutu", spokenText: "boş kutu" }
    ]},
    // 2. Bardak
    { id: 2, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: true, audioKey: "bardak", spokenText: "dolu bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "boş bardak" }
    ]},
    { id: 2.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: false, audioKey: "bardak", spokenText: "dolu bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "boş bardak" }
    ]},
    // 3. Şişe
    { id: 3, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 518, word: "şişe", imageUrl: "/images/518.png", isCorrect: true, audioKey: "şişe", spokenText: "dolu şişe" },
        { id: 519, word: "şişe", imageUrl: "/images/519.png", isCorrect: false, audioKey: "şişe", spokenText: "boş şişe" }
    ]},
    { id: 3.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 518, word: "şişe", imageUrl: "/images/518.png", isCorrect: false, audioKey: "şişe", spokenText: "dolu şişe" },
        { id: 519, word: "şişe", imageUrl: "/images/519.png", isCorrect: true, audioKey: "şişe", spokenText: "boş şişe" }
    ]},
    // 4. Sepet
    { id: 4, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "dolu sepet" },
        { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: false, audioKey: "sepet", spokenText: "boş sepet" }
    ]},
    { id: 4.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "dolu sepet" },
        { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: true, audioKey: "sepet", spokenText: "boş sepet" }
    ]},
    // 5. Kase
    { id: 5, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: true, audioKey: "kase", spokenText: "dolu kase" },
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "boş kase" }
    ]},
    { id: 5.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: false, audioKey: "kase", spokenText: "dolu kase" },
        { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "boş kase" }
    ]},
    // 6. Kumbara
    { id: 6, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: true, audioKey: "kumbara", spokenText: "dolu kumbara" },
        { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: false, audioKey: "kumbara", spokenText: "boş kumbara" }
    ]},
    { id: 6.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: false, audioKey: "kumbara", spokenText: "dolu kumbara" },
        { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: true, audioKey: "kumbara", spokenText: "boş kumbara" }
    ]},
    // 7. Kavanoz
    { id: 7, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "dolu kavanoz" },
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "boş kavanoz" }
    ]},
    { id: 7.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "dolu kavanoz" },
        { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "boş kavanoz" }
    ]},
     // 8. Çöp Kutusu (284 vs 45) - YENİ
    { id: 8, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
    { id: 8.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: false, audioKey: "çöp_kutusu", spokenText: "dolu çöp kutusu" },
        { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: true, audioKey: "çöp_kutusu", spokenText: "boş çöp kutusu" }
    ]},
    // 9. Vazo (35 vs 34) - YENİ
    { id: 9, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: true, audioKey: "vazo", spokenText: "dolu vazo" },
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "boş vazo" }
    ]},
    { id: 9.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: false, audioKey: "vazo", spokenText: "dolu vazo" },
        { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "boş vazo" }
    ]},
    // 10. Saksı (433 vs 432) - YENİ
    { id: 10, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: true, audioKey: "saksı", spokenText: "dolu saksı" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksı", spokenText: "boş saksı" }
    ]},
    { id: 10.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: false, audioKey: "saksı", spokenText: "dolu saksı" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksı", spokenText: "boş saksı" }
    ]},
    // 11. Hazine Sandığı (202 vs 203) - YENİ
    { id: 11, question: "Dolu olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "dolu sandık" },
        { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "boş sandık" }
    ]},
    { id: 11.1, question: "Boş olan hangisi?", questionAudioKey: "", activityType: ActivityType.FullEmpty, options: [
        { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: false, audioKey: "hazine_sandığı", spokenText: "dolu sandık" },
        { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: true, audioKey: "hazine_sandığı", spokenText: "boş sandık" }
    ]},
];

export const oddEvenData: ConceptRound[] = [
    // 1. Çorap
    { id: 1, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "çorap", spokenText: "tek çorap" },
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: false, audioKey: "çoraplar", spokenText: "çift çorap" }
    ]},
    { id: 1.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "çorap", spokenText: "tek çorap" },
        { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: true, audioKey: "çoraplar", spokenText: "çift çorap" }
    ]},
    // 2. Eldiven
    { id: 2, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: true, audioKey: "eldiven", spokenText: "tek eldiven" },
        { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: false, audioKey: "eldivenler", spokenText: "çift eldiven" }
    ]},
    { id: 2.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: false, audioKey: "eldiven", spokenText: "tek eldiven" },
        { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: true, audioKey: "eldivenler", spokenText: "çift eldiven" }
    ]},
    // 3. Küpe
    { id: 3, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: true, audioKey: "küpe", spokenText: "tek küpe" },
        { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: false, audioKey: "küpeler", spokenText: "çift küpe" }
    ]},
     { id: 3.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: false, audioKey: "küpe", spokenText: "tek küpe" },
        { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: true, audioKey: "küpeler", spokenText: "çift küpe" }
    ]},
    // 4. Paten
    { id: 4, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: true, audioKey: "paten", spokenText: "tek paten" },
        { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: false, audioKey: "patenler", spokenText: "çift paten" }
    ]},
    { id: 4.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: false, audioKey: "paten", spokenText: "tek paten" },
        { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: true, audioKey: "patenler", spokenText: "çift paten" }
    ]},
    // 5. Kayak
    { id: 5, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: true, audioKey: "kayak", spokenText: "tek kayak" },
        { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: false, audioKey: "kayaklar", spokenText: "çift kayak" }
    ]},
    { id: 5.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: false, audioKey: "kayak", spokenText: "tek kayak" },
        { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: true, audioKey: "kayaklar", spokenText: "çift kayak" }
    ]},
    // 6. Davul Çubuğu
    { id: 6, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_çubuğu", spokenText: "tek davul çubuğu" },
        { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: false, audioKey: "davul_çubukları", spokenText: "çift davul çubuğu" }
    ]},
    { id: 6.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_çubuğu", spokenText: "tek davul çubuğu" },
        { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: true, audioKey: "davul_çubukları", spokenText: "çift davul çubuğu" }
    ]},
    // 7. Göz
    { id: 7, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "göz", spokenText: "tek göz" },
        { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: false, audioKey: "gözler", spokenText: "çift göz" }
    ]},
    { id: 7.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "göz", spokenText: "tek göz" },
        { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: true, audioKey: "gözler", spokenText: "çift göz" }
    ]},
    // 8. Elma (43 vs 44)
    { id: 8, question: "Tek olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "tek elma" },
        { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: false, audioKey: "elmalar", spokenText: "çift elma" }
    ]},
    { id: 8.1, question: "Çift olan hangisi?", questionAudioKey: "", activityType: ActivityType.OddEven, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "tek elma" },
        { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: true, audioKey: "elmalar", spokenText: "çift elma" }
    ]},
];