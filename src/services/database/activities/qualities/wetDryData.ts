import { ConceptRound, ActivityType } from '../../../../types.ts';

export const wetDryData: ConceptRound[] = [
    // Islak Sünger (166) - Kuru Sünger (167)
    { id: 1, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 166, word: "sünger", imageUrl: "/images/166.gif", isCorrect: true, audioKey: "sünger", spokenText: "ıslak sünger" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: false, audioKey: "sünger", spokenText: "kuru sünger" }
    ]},
    { id: 2, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 166, word: "sünger", imageUrl: "/images/166.gif", isCorrect: false, audioKey: "sünger", spokenText: "ıslak sünger" },
        { id: 167, word: "sünger", imageUrl: "/images/167.gif", isCorrect: true, audioKey: "sünger", spokenText: "kuru sünger" }
    ]},
    // Yağmur Bulutu (52) - Güneş (237)
    { id: 3, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 52, word: "yağmur", imageUrl: "/images/52.png", isCorrect: true, audioKey: "yağmur", spokenText: "yağmur" },
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş", spokenText: "güneş" }
    ]},
    { id: 4, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 52, word: "yağmur", imageUrl: "/images/52.png", isCorrect: false, audioKey: "yağmur", spokenText: "yağmur" },
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "güneş" }
    ]},
    // Islak Köpek (522) - Kuru Köpek (521)
    { id: 5, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet_person", activityType: ActivityType.WetDry, options: [
        { id: 522, word: "köpek", imageUrl: "/images/522.gif", isCorrect: true, audioKey: "köpek", spokenText: "ıslak köpek" },
        { id: 521, word: "köpek", imageUrl: "/images/521.gif", isCorrect: false, audioKey: "köpek", spokenText: "kuru köpek" }
    ]},
    { id: 6, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry_person", activityType: ActivityType.WetDry, options: [
        { id: 522, word: "köpek", imageUrl: "/images/522.gif", isCorrect: false, audioKey: "köpek", spokenText: "ıslak köpek" },
        { id: 521, word: "köpek", imageUrl: "/images/521.gif", isCorrect: true, audioKey: "köpek", spokenText: "kuru köpek" }
    ]},
    // Islak Saç (594) - Kuru Saç (662)
    { id: 7, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 594, word: "saç", imageUrl: "/images/594.png", isCorrect: true, audioKey: "saç", spokenText: "ıslak saç" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: false, audioKey: "saç", spokenText: "kuru saç" }
    ]},
    { id: 8, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 594, word: "saç", imageUrl: "/images/594.png", isCorrect: false, audioKey: "saç", spokenText: "ıslak saç" },
        { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: true, audioKey: "saç", spokenText: "kuru saç" }
    ]},
    // Islak Şemsiye (157) - Kuru Şemsiye (158)
    { id: 9, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: true, audioKey: "şemsiye", spokenText: "ıslak şemsiye" },
        { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: false, audioKey: "şemsiye", spokenText: "kuru şemsiye" }
    ]},
    { id: 10, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: false, audioKey: "şemsiye", spokenText: "ıslak şemsiye" },
        { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: true, audioKey: "şemsiye", spokenText: "kuru şemsiye" }
    ]},
    // Islak Tişört (15) - Kuru Tişört (13)
    { id: 11, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 15, word: "tişört", imageUrl: "/images/15.gif", isCorrect: true, audioKey: "tişört", spokenText: "ıslak tişört" },
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: false, audioKey: "tişört", spokenText: "kuru tişört" }
    ]},
    { id: 12, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 15, word: "tişört", imageUrl: "/images/15.gif", isCorrect: false, audioKey: "tişört", spokenText: "ıslak tişört" },
        { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: true, audioKey: "tişört", spokenText: "kuru tişört" }
    ]},
    // Islak Yol (599) - Kuru Yol (530)
    { id: 13, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet_person", activityType: ActivityType.WetDry, options: [
        { id: 599, word: "otoyol", imageUrl: "/images/599.png", isCorrect: true, audioKey: "otoyol", spokenText: "ıslak yol" },
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "otoyol", spokenText: "kuru yol" }
    ]},
    { id: 14, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 599, word: "otoyol", imageUrl: "/images/599.png", isCorrect: false, audioKey: "otoyol", spokenText: "ıslak yol" },
        { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "otoyol", spokenText: "kuru yol" }
    ]},
    // Islak Yaprak (647) - Kuru Yaprak (117)
    { id: 15, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 647, word: "yaprak", imageUrl: "/images/647.png", isCorrect: true, audioKey: "yaprak", spokenText: "ıslak yaprak" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: false, audioKey: "yaprak", spokenText: "kuru yaprak" }
    ]},
    { id: 16, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 647, word: "yaprak", imageUrl: "/images/647.png", isCorrect: false, audioKey: "yaprak", spokenText: "ıslak yaprak" },
        { id: 117, word: "yaprak", imageUrl: "/images/117.png", isCorrect: true, audioKey: "yaprak", spokenText: "kuru yaprak" }
    ]},
    // Su Bardağı (123) - Boş/Kuru Bardak (124)
    { id: 17, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: true, audioKey: "bardak", spokenText: "ıslak bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "kuru bardak" }
    ]},
    { id: 18, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: false, audioKey: "bardak", spokenText: "ıslak bardak" },
        { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "kuru bardak" }
    ]},
    // Islak Zemin (699) - Kuru Toprak (316)
    { id: 19, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: true, audioKey: "su_birikintisi", spokenText: "ıslak zemin" },
        { id: 316, word: "tohum", imageUrl: "/images/316.png", isCorrect: false, audioKey: "tohum", spokenText: "kuru toprak" }
    ]},
    { id: 20, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: false, audioKey: "su_birikintisi", spokenText: "ıslak zemin" },
        { id: 316, word: "tohum", imageUrl: "/images/316.png", isCorrect: true, audioKey: "tohum", spokenText: "kuru toprak" }
    ]},
    // Islak Boya Fırçası (51) - Kuru Fırça (539)
    { id: 21, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet", activityType: ActivityType.WetDry, options: [
        { id: 51, word: "fırça", imageUrl: "/images/51.png", isCorrect: true, audioKey: "fırça", spokenText: "ıslak fırça" },
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: false, audioKey: "fırça", spokenText: "kuru fırça" }
    ]},
    { id: 22, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry", activityType: ActivityType.WetDry, options: [
        { id: 51, word: "fırça", imageUrl: "/images/51.png", isCorrect: false, audioKey: "fırça", spokenText: "ıslak fırça" },
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: true, audioKey: "fırça", spokenText: "kuru fırça" }
    ]},
    // Kirli/Islak Köpek (522) - Temiz/Kuru Köpek (521)
    { id: 23, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet_person", activityType: ActivityType.WetDry, options: [
        { id: 522, word: "köpek", imageUrl: "/images/522.gif", isCorrect: true, audioKey: "köpek", spokenText: "ıslak köpek" },
        { id: 521, word: "köpek", imageUrl: "/images/521.gif", isCorrect: false, audioKey: "köpek", spokenText: "kuru köpek" }
    ]},
    { id: 24, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry_person", activityType: ActivityType.WetDry, options: [
        { id: 522, word: "köpek", imageUrl: "/images/522.gif", isCorrect: false, audioKey: "köpek", spokenText: "ıslak köpek" },
        { id: 521, word: "köpek", imageUrl: "/images/521.gif", isCorrect: true, audioKey: "köpek", spokenText: "kuru köpek" }
    ]},
     // Islak Banyo Yapan Çocuk (875) - Kuru Havlu (523)
    { id: 25, question: "Islak olan hangisi?", questionAudioKey: "q_which_is_wet_person", activityType: ActivityType.WetDry, options: [
        { id: 875, word: "banyo yapan çocuk", imageUrl: "/images/875.png", isCorrect: true, audioKey: "banyo_yapan_çocuk", spokenText: "ıslak banyo yapan çocuk" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: false, audioKey: "havlu", spokenText: "kuru havlu" }
    ]},
    { id: 26, question: "Kuru olan hangisi?", questionAudioKey: "q_which_is_dry_person", activityType: ActivityType.WetDry, options: [
        { id: 875, word: "banyo yapan çocuk", imageUrl: "/images/875.png", isCorrect: false, audioKey: "banyo_yapan_çocuk", spokenText: "ıslak banyo yapan çocuk" },
        { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: true, audioKey: "havlu", spokenText: "kuru havlu" }
    ]},
];