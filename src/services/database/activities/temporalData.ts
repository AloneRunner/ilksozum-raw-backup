import { ConceptRound, ActivityType } from '../../../types.ts';

export const beforeAfterData: ConceptRound[] = [
    // 1. Dondurma
    { id: 1, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before_person", activityType: ActivityType.BeforeAfter, options: [
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "bütün dondurma" },
        { id: 64, word: "dondurma", imageUrl: "/images/64.png", isCorrect: false, audioKey: "erimiş_dondurma", spokenText: "erimiş dondurma" }
    ]},
    { id: 2, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "bütün dondurma" },
        { id: 64, word: "dondurma", imageUrl: "/images/64.png", isCorrect: true, audioKey: "erimiş_dondurma", spokenText: "erimiş dondurma" }
    ]},
    // 2. Yumurta -> Civciv
    { id: 3, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: true, audioKey: "kırık_yumurta", spokenText: "kırık yumurta" },
        { id: 376, word: "civciv", imageUrl: "/images/376.png", isCorrect: false, audioKey: "civciv", spokenText: "civciv" }
    ]},
    { id: 4, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: false, audioKey: "kırık_yumurta", spokenText: "kırık yumurta" },
        { id: 376, word: "civciv", imageUrl: "/images/376.png", isCorrect: true, audioKey: "civciv", spokenText: "civciv" }
    ]},
    // 3. Tohum -> Filiz
    { id: 5, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 316, word: "tohum", imageUrl: "/images/316.png", isCorrect: true, audioKey: "tohum", spokenText: "tohum" },
        { id: 317, word: "filiz", imageUrl: "/images/317.png", isCorrect: false, audioKey: "filiz", spokenText: "filiz" }
    ]},
    { id: 6, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 316, word: "tohum", imageUrl: "/images/316.png", isCorrect: false, audioKey: "tohum", spokenText: "tohum" },
        { id: 317, word: "filiz", imageUrl: "/images/317.png", isCorrect: true, audioKey: "filiz", spokenText: "filiz" }
    ]},
    // 4. Hamur -> Ekmek
    { id: 7, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: true, audioKey: "hamur", spokenText: "hamur" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "ekmek", spokenText: "ekmek" }
    ]},
    { id: 8, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 588, word: "hamur", imageUrl: "/images/588.png", isCorrect: false, audioKey: "hamur", spokenText: "hamur" },
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "ekmek", spokenText: "ekmek" }
    ]},
    // 5. Dağınık Oda -> Toplu Oda - YENİ
    { id: 9, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: true, audioKey: "dağınık_oda", spokenText: "dağınık oda" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: false, audioKey: "toplu_oda", spokenText: "toplu oda" }
    ]},
    { id: 10, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: false, audioKey: "dağınık_oda", spokenText: "dağınık oda" },
        { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: true, audioKey: "toplu_oda", spokenText: "toplu oda" }
    ]},
    // 6. Kirli El -> Temiz El - YENİ
    { id: 11, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: true, audioKey: "kirli_el", spokenText: "kirli el" },
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: false, audioKey: "temiz_el", spokenText: "temiz el" }
    ]},
    { id: 12, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 591, word: "el", imageUrl: "/images/591.png", isCorrect: false, audioKey: "kirli_el", spokenText: "kirli el" },
        { id: 590, word: "el", imageUrl: "/images/590.png", isCorrect: true, audioKey: "temiz_el", spokenText: "temiz el" }
    ]},
    // Ev Temeli -> Biten Ev - YENİ EKLENDİ
    { id: 13, question: "Önce hangisi olur?", questionAudioKey: "q_which_is_before", activityType: ActivityType.BeforeAfter, options: [
        { id: 602, word: "temel", imageUrl: "/images/602.png", isCorrect: true, audioKey: "temel", spokenText: "evin temeli" },
        { id: 601, word: "ev", imageUrl: "/images/601.png", isCorrect: false, audioKey: "ev", spokenText: "bitmiş ev" }
    ]},
    { id: 14, question: "Sonra hangisi olur?", questionAudioKey: "q_which_is_after", activityType: ActivityType.BeforeAfter, options: [
        { id: 602, word: "temel", imageUrl: "/images/602.png", isCorrect: false, audioKey: "temel", spokenText: "evin temeli" },
        { id: 601, word: "ev", imageUrl: "/images/601.png", isCorrect: true, audioKey: "ev", spokenText: "bitmiş ev" }
    ]},
    // Diğer sıralama verileri reasoningData.ts dosyasında "sequencingStoryData" olarak yer alıyor.
];

export const dayNightData: ConceptRound[] = [
    // 1. Güneş vs Ay
    { id: 1, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day", activityType: ActivityType.DayNight, options: [
      { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "güneş" },
      { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: false, audioKey: "ay", spokenText: "ay" }
    ]},
    { id: 2, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
      { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "güneş" },
      { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay", spokenText: "ay" }
    ]},
    // 2. Manzara
    { id: 3, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day", activityType: ActivityType.DayNight, options: [
      { id: 11, word: "manzara", imageUrl: "/images/11.gif", isCorrect: true, audioKey: "manzara", spokenText: "gündüz manzarası" },
      { id: 12, word: "manzara", imageUrl: "/images/12.gif", isCorrect: false, audioKey: "manzara", spokenText: "gece manzarası" }
    ]},
    { id: 4, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
      { id: 11, word: "manzara", imageUrl: "/images/11.gif", isCorrect: false, audioKey: "manzara", spokenText: "gündüz manzarası" },
      { id: 12, word: "manzara", imageUrl: "/images/12.gif", isCorrect: true, audioKey: "manzara", spokenText: "gece manzarası" }
    ]},
    // 3. Gökyüzü
    { id: 5, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day_person", activityType: ActivityType.DayNight, options: [
      { id: 604, word: "gökyüzü", imageUrl: "/images/604.png", isCorrect: true, audioKey: "gökyüzü", spokenText: "gündüz" },
      { id: 603, word: "gökyüzü", imageUrl: "/images/603.png", isCorrect: false, audioKey: "gökyüzü", spokenText: "gece" }
    ]},
    { id: 6, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
      { id: 604, word: "gökyüzü", imageUrl: "/images/604.png", isCorrect: false, audioKey: "gökyüzü", spokenText: "gündüz" },
      { id: 603, word: "gökyüzü", imageUrl: "/images/603.png", isCorrect: true, audioKey: "gökyüzü", spokenText: "gece" }
    ]},
    // 4. Horoz vs Baykuş
    { id: 7, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day", activityType: ActivityType.DayNight, options: [
      { id: 102, word: "horoz", imageUrl: "/images/102.png", isCorrect: true, audioKey: "horoz", spokenText: "horoz" },
      { id: 103, word: "baykuş", imageUrl: "/images/103.png", isCorrect: false, audioKey: "baykuş", spokenText: "baykuş" }
    ]},
    { id: 8, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
      { id: 102, word: "horoz", imageUrl: "/images/102.png", isCorrect: false, audioKey: "horoz", spokenText: "horoz" },
      { id: 103, word: "baykuş", imageUrl: "/images/103.png", isCorrect: true, audioKey: "baykuş", spokenText: "baykuş" }
    ]},
    // 5. Pencere - YENİ
    { id: 9, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day", activityType: ActivityType.DayNight, options: [
      { id: 81, word: "pencere", imageUrl: "/images/81.png", isCorrect: true, audioKey: "pencere", spokenText: "gündüz penceresi" },
      { id: 83, word: "pencere", imageUrl: "/images/83.png", isCorrect: false, audioKey: "pencere", spokenText: "gece penceresi" }
    ]},
    { id: 10, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
      { id: 81, word: "pencere", imageUrl: "/images/81.png", isCorrect: false, audioKey: "pencere", spokenText: "gündüz penceresi" },
      { id: 83, word: "pencere", imageUrl: "/images/83.png", isCorrect: true, audioKey: "pencere", spokenText: "gece penceresi" }
    ]},
    // 6. Park - YENİ
    { id: 11, question: "Gündüz olan hangisi?", questionAudioKey: "q_which_is_day", activityType: ActivityType.DayNight, options: [
        { id: 505, word: "çocuk parkı", imageUrl: "/images/505.png", isCorrect: true, audioKey: "çocuk_parkı", spokenText: "gündüz parkı" },
        { id: 506, word: "çocuk parkı", imageUrl: "/images/506.png", isCorrect: false, audioKey: "çocuk_parkı", spokenText: "gece parkı" }
    ]},
    { id: 12, question: "Gece olan hangisi?", questionAudioKey: "q_which_is_night", activityType: ActivityType.DayNight, options: [
        { id: 505, word: "çocuk parkı", imageUrl: "/images/505.png", isCorrect: false, audioKey: "çocuk_parkı", spokenText: "gündüz parkı" },
        { id: 506, word: "çocuk parkı", imageUrl: "/images/506.png", isCorrect: true, audioKey: "çocuk_parkı", spokenText: "gece parkı" }
    ]},
];

export const fastSlowData: ConceptRound[] = [
    // 1. Tavşan vs Kaplumbağa
    { id: 1, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 41, word: "tavşan", imageUrl: "/images/41.gif", isCorrect: true, audioKey: "tavşan", spokenText: "hızlı tavşan" },
        { id: 42, word: "kaplumbağa", imageUrl: "/images/42.gif", isCorrect: false, audioKey: "kaplumbağa", spokenText: "yavaş kaplumbağa" }
    ]},
    { id: 2, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 41, word: "tavşan", imageUrl: "/images/41.gif", isCorrect: false, audioKey: "tavşan", spokenText: "hızlı tavşan" },
        { id: 42, word: "kaplumbağa", imageUrl: "/images/42.gif", isCorrect: true, audioKey: "kaplumbağa", spokenText: "yavaş kaplumbağa" }
    ]},
    // 2. Çita vs Salyangoz
    { id: 3, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 145, word: "çita", imageUrl: "/images/145.gif", isCorrect: true, audioKey: "çita", spokenText: "hızlı çita" },
        { id: 222, word: "salyangoz", imageUrl: "/images/222.gif", isCorrect: false, audioKey: "salyangoz", spokenText: "yavaş salyangoz" }
    ]},
    { id: 4, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 145, word: "çita", imageUrl: "/images/145.gif", isCorrect: false, audioKey: "çita", spokenText: "hızlı çita" },
        { id: 222, word: "salyangoz", imageUrl: "/images/222.gif", isCorrect: true, audioKey: "salyangoz", spokenText: "yavaş salyangoz" }
    ]},
    // 3. Roket vs Sandal
    { id: 5, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: true, audioKey: "roket", spokenText: "hızlı roket" },
        { id: 493, word: "sandal", imageUrl: "/images/493.gif", isCorrect: false, audioKey: "sandal", spokenText: "yavaş sandal" }
    ]},
    { id: 6, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 204, word: "roket", imageUrl: "/images/204.gif", isCorrect: false, audioKey: "roket", spokenText: "hızlı roket" },
        { id: 493, word: "sandal", imageUrl: "/images/493.gif", isCorrect: true, audioKey: "sandal", spokenText: "yavaş sandal" }
    ]},
    // 4. Bisikletler
    { id: 7, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "hızlı bisiklet" },
        { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "yavaş bisiklet" }
    ]},
    { id: 8, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 910, word: "bisiklet", imageUrl: "/images/910.gif", isCorrect: false, audioKey: "bisiklet", spokenText: "hızlı bisiklet" },
        { id: 907, word: "bisiklet", imageUrl: "/images/907.gif", isCorrect: true, audioKey: "bisiklet", spokenText: "yavaş bisiklet" }
    ]},
    // 5. Gergedan vs Deve
    { id: 9, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 908, word: "gergedan", imageUrl: "/images/908.gif", isCorrect: true, audioKey: "gergedan", spokenText: "hızlı gergedan" },
        { id: 909, word: "deve", imageUrl: "/images/909.gif", isCorrect: false, audioKey: "deve", spokenText: "yavaş deve" }
    ]},
    { id: 10, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 908, word: "gergedan", imageUrl: "/images/908.gif", isCorrect: false, audioKey: "gergedan", spokenText: "hızlı gergedan" },
        { id: 909, word: "deve", imageUrl: "/images/909.gif", isCorrect: true, audioKey: "deve", spokenText: "yavaş deve" }
    ]},
    // 6. Arabalar
    { id: 11, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: true, audioKey: "araba", spokenText: "hızlı araba" },
        { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: false, audioKey: "araba", spokenText: "yavaş araba" }
    ]},
    { id: 12, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 912, word: "araba", imageUrl: "/images/912.gif", isCorrect: false, audioKey: "araba", spokenText: "hızlı araba" },
        { id: 911, word: "araba", imageUrl: "/images/911.gif", isCorrect: true, audioKey: "araba", spokenText: "yavaş araba" }
    ]},
    // 7. Trenler
    { id: 13, question: "Hızlı olan hangisi?", questionAudioKey: "q_which_is_fast", activityType: ActivityType.FastSlow, options: [
        { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: true, audioKey: "tren", spokenText: "hızlı tren" },
        { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: false, audioKey: "tren", spokenText: "yavaş tren" }
    ]},
    { id: 14, question: "Yavaş olan hangisi?", questionAudioKey: "q_which_is_slow", activityType: ActivityType.FastSlow, options: [
        { id: 914, word: "tren", imageUrl: "/images/914.gif", isCorrect: false, audioKey: "tren", spokenText: "hızlı tren" },
        { id: 913, word: "tren", imageUrl: "/images/913.gif", isCorrect: true, audioKey: "tren", spokenText: "yavaş tren" }
    ]},
];
