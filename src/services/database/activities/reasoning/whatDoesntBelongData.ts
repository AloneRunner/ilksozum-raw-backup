import { ConceptRound, ActivityType } from '../../../../types.ts';

// Curated Odd One Out (WhatDoesntBelong) rounds - 20 statik tur
// İlk 4 tur: Basit görsel (3 aynı nesne + 1 farklı nesne)
// Sonraki 16 tur: Kategori bazlı (3 meyve + 1 hayvan gibi okul öncesi seviyesi)
export const whatDoesntBelongData: ConceptRound[] = [
    // === GRUP 1: BASİT GÖRSEL TURLAR (3 aynı + 1 farklı) ===
    { 
        id: 1, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} farklı.", wrong: "Hayır, bu da aynı." },
            en: { correct: "Yes, {item} is different.", wrong: "No, this is the same." }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "araba" }
        ]
    },
    { 
        id: 2, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} farklı.", wrong: "Hayır, bu da aynı." },
            en: { correct: "Yes, {item} is different.", wrong: "No, this is the same." }
        },
        options: [
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" },
            { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" }
        ]
    },
    { 
        id: 3, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} farklı.", wrong: "Hayır, bu da aynı." },
            en: { correct: "Yes, {item} is different.", wrong: "No, this is the same." }
        },
        options: [
            { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "ayakkabı" },
            { id: 111, word: "şapka", imageUrl: "/images/111.png", isCorrect: false, audioKey: "şapka", spokenText: "şapka" },
            { id: 111, word: "şapka", imageUrl: "/images/111.png", isCorrect: false, audioKey: "şapka", spokenText: "şapka" },
            { id: 111, word: "şapka", imageUrl: "/images/111.png", isCorrect: false, audioKey: "şapka", spokenText: "şapka" }
        ]
    },
    { 
        id: 4, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} farklı.", wrong: "Hayır, bu da aynı." },
            en: { correct: "Yes, {item} is different.", wrong: "No, this is the same." }
        },
        options: [
            { id: 65, word: "daire", imageUrl: "/images/65.png", isCorrect: false, audioKey: "daire", spokenText: "daire" },
            { id: 65, word: "daire", imageUrl: "/images/65.png", isCorrect: false, audioKey: "daire", spokenText: "daire" },
            { id: 65, word: "daire", imageUrl: "/images/65.png", isCorrect: false, audioKey: "daire", spokenText: "daire" },
            { id: 67, word: "üçgen", imageUrl: "/images/67.png", isCorrect: true, audioKey: "üçgen", spokenText: "üçgen" }
        ]
    },

    // === GRUP 2: KATEGORİ BAZLI TURLAR (okul öncesi/ASD uygun) ===
    { 
        id: 5, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir taşıt; diğerleri meyve.", wrong: "Hayır, {item} bir meyve." },
            en: { correct: "Yes, {item} is a vehicle; the others are fruit.", wrong: "No, {item} is a fruit." }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "muz" },
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "araba" },
            { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "çilek", spokenText: "çilek" }
        ]
    },
    { 
        id: 6, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir giysi; diğerleri hayvan.", wrong: "Hayır, {item} bir hayvan." },
            en: { correct: "Yes, {item} is clothing; the others are animals.", wrong: "No, {item} is an animal." }
        },
        options: [
            { id: 100, word: "aslan", imageUrl: "/images/100.png", isCorrect: false, audioKey: "aslan", spokenText: "aslan" },
            { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: true, audioKey: "tişört", spokenText: "tişört" },
            { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "fil" },
            { id: 41, word: "tavşan", imageUrl: "/images/41.png", isCorrect: false, audioKey: "tavşan", spokenText: "tavşan" }
        ]
    },
    { 
        id: 7, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir giysi; diğerleri taşıt.", wrong: "Hayır, {item} bir taşıt." },
            en: { correct: "Yes, {item} is clothing; the others are vehicles.", wrong: "No, {item} is a vehicle." }
        },
        options: [
            { id: 107, word: "uçak", imageUrl: "/images/107.png", isCorrect: false, audioKey: "uçak", spokenText: "uçak" },
            { id: 106, word: "tren", imageUrl: "/images/106.png", isCorrect: false, audioKey: "tren", spokenText: "tren" },
            { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: true, audioKey: "pantolon", spokenText: "pantolon" },
            { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: false, audioKey: "okul_otobüsü", spokenText: "okul otobüsü" }
        ]
    },
    { 
        id: 8, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir oyuncak; diğerleri müzik aleti.", wrong: "Hayır, {item} bir müzik aleti." },
            en: { correct: "Yes, {item} is a toy; the others are musical instruments.", wrong: "No, {item} is a musical instrument." }
        },
        options: [
            { id: 72, word: "davul", imageUrl: "/images/72.png", isCorrect: false, audioKey: "davul", spokenText: "davul" },
            { id: 180, word: "gitar", imageUrl: "/images/180.png", isCorrect: false, audioKey: "gitar", spokenText: "gitar" },
            { id: 208, word: "keman", imageUrl: "/images/208.png", isCorrect: false, audioKey: "keman", spokenText: "keman" },
            { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: true, audioKey: "oyuncak_ayı", spokenText: "oyuncak ayı" }
        ]
    },
    { 
        id: 9, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir meyve; diğerleri sebze.", wrong: "Hayır, {item} bir sebze." },
            en: { correct: "Yes, {item} is a fruit; the others are vegetables.", wrong: "No, {item} is a vegetable." }
        },
        options: [
            { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: false, audioKey: "havuç", spokenText: "havuç" },
            { id: 311, word: "brokoli", imageUrl: "/images/311.png", isCorrect: false, audioKey: "brokoli", spokenText: "brokoli" },
            { id: 116, word: "salatalık", imageUrl: "/images/116.png", isCorrect: false, audioKey: "salatalık", spokenText: "salatalık" },
            { id: 115, word: "portakal", imageUrl: "/images/115.png", isCorrect: true, audioKey: "portakal", spokenText: "portakal" }
        ]
    },
    { 
        id: 10, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir doğa nesnesi; diğerleri şekil.", wrong: "Hayır, {item} bir şekil." },
            en: { correct: "Yes, {item} is a natural object; the others are shapes.", wrong: "No, {item} is a shape." }
        },
        options: [
            { id: 65, word: "daire", imageUrl: "/images/65.png", isCorrect: false, audioKey: "daire", spokenText: "daire" },
            { id: 66, word: "küp", imageUrl: "/images/66.png", isCorrect: false, audioKey: "küp", spokenText: "küp" },
            { id: 67, word: "üçgen", imageUrl: "/images/67.png", isCorrect: false, audioKey: "üçgen", spokenText: "üçgen" },
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş", spokenText: "güneş" }
        ]
    },
    { 
        id: 11, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir çocuk; diğerleri meslek.", wrong: "Hayır, {item} bir meslek sahibi." },
            en: { correct: "Yes, {item} is a child; the others are professions.", wrong: "No, {item} is a profession." }
        },
        options: [
            { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: false, audioKey: "doktor", spokenText: "doktor" },
            { id: 325, word: "polis", imageUrl: "/images/325.png", isCorrect: false, audioKey: "polis", spokenText: "polis" },
            { id: 500, word: "çocuk", imageUrl: "/images/500.png", isCorrect: true, audioKey: "çocuk", spokenText: "çocuk" },
            { id: 327, word: "itfaiyeci", imageUrl: "/images/327.png", isCorrect: false, audioKey: "itfaiyeci", spokenText: "itfaiyeci" }
        ]
    },
    { 
        id: 12, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir eşya; diğerleri mobilya.", wrong: "Hayır, {item} bir mobilya." },
            en: { correct: "Yes, {item} is an object; the others are furniture.", wrong: "No, {item} is furniture." }
        },
        options: [
            { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "masa" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabı", spokenText: "buzdolabı" },
            { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "sandalye" },
            { id: 224, word: "ip", imageUrl: "/images/224.png", isCorrect: true, audioKey: "ip", spokenText: "ip" }
        ]
    },
    { 
        id: 13, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir mutfak eşyası; diğerleri banyo eşyası.", wrong: "Hayır, {item} bir banyo eşyası." },
            en: { correct: "Yes, {item} is a kitchen item; the others are bathroom items.", wrong: "No, {item} is a bathroom item." }
        },
        options: [
            { id: 209, word: "sabun", imageUrl: "/images/209.png", isCorrect: false, audioKey: "sabun", spokenText: "sabun" },
            { id: 167, word: "sünger", imageUrl: "/images/167.png", isCorrect: false, audioKey: "sünger", spokenText: "sünger" },
            { id: 422, word: "tuvalet", imageUrl: "/images/422.png", isCorrect: false, audioKey: "tuvalet", spokenText: "tuvalet" },
            { id: 125, word: "kaşık", imageUrl: "/images/125.png", isCorrect: true, audioKey: "kaşık", spokenText: "kaşık" }
        ]
    },
    { 
        id: 14, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir eşya; diğerleri canlı.", wrong: "Hayır, {item} bir canlı." },
            en: { correct: "Yes, {item} is an object; the others are living things.", wrong: "No, {item} is a living thing." }
        },
        options: [
            { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: false, audioKey: "kurbağa", spokenText: "kurbağa" },
            { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: false, audioKey: "doktor", spokenText: "doktor" },
            { id: 281, word: "kaktüs", imageUrl: "/images/281.png", isCorrect: false, audioKey: "kaktüs", spokenText: "kaktüs" },
            { id: 301, word: "bulaşık makinesi", imageUrl: "/images/301.png", isCorrect: true, audioKey: "bulaşık_makinesi", spokenText: "bulaşık makinesi" }
        ]
    },
    { 
        id: 15, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir alet; diğerleri sofra takımı.", wrong: "Hayır, {item} bir sofra takımı." },
            en: { correct: "Yes, {item} is a tool; the others are cutlery.", wrong: "No, {item} is cutlery." }
        },
        options: [
            { id: 125, word: "kaşık", imageUrl: "/images/125.png", isCorrect: false, audioKey: "kaşık", spokenText: "kaşık" },
            { id: 126, word: "çatal", imageUrl: "/images/126.png", isCorrect: false, audioKey: "çatal", spokenText: "çatal" },
            { id: 262, word: "bıçak", imageUrl: "/images/262.png", isCorrect: false, audioKey: "bıçak", spokenText: "bıçak" },
            { id: 496, word: "çekiç", imageUrl: "/images/496.png", isCorrect: true, audioKey: "çekiç", spokenText: "çekiç" }
        ]
    },
    { 
        id: 16, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir yiyecek; diğerleri hayvan.", wrong: "Hayır, {item} bir hayvan." },
            en: { correct: "Yes, {item} is food; the others are animals.", wrong: "No, {item} is an animal." }
        },
        options: [
            { id: 580, word: "kedi", imageUrl: "/images/580.png", isCorrect: false, audioKey: "kedi", spokenText: "kedi" },
            { id: 582, word: "köpek", imageUrl: "/images/582.png", isCorrect: false, audioKey: "köpek", spokenText: "köpek" },
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "pişmiş_ekmek", spokenText: "ekmek" },
            { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kuş", spokenText: "kuş" }
        ]
    },
    { 
        id: 17, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir içecek; diğerleri meyve.", wrong: "Hayır, {item} bir meyve." },
            en: { correct: "Yes, {item} is a drink; the others are fruit.", wrong: "No, {item} is a fruit." }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 115, word: "portakal", imageUrl: "/images/115.png", isCorrect: false, audioKey: "portakal", spokenText: "portakal" },
            { id: 312, word: "su", imageUrl: "/images/312.png", isCorrect: true, audioKey: "su", spokenText: "su" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "muz" }
        ]
    },
    { 
        id: 18, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir renk; diğerleri oyuncak.", wrong: "Hayır, {item} bir oyuncak." },
            en: { correct: "Yes, {item} is a color; the others are toys.", wrong: "No, {item} is a toy." }
        },
        options: [
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" },
            { id: 276, word: "oyuncak ayı", imageUrl: "/images/276.png", isCorrect: false, audioKey: "oyuncak_ayı", spokenText: "oyuncak ayı" },
            { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: false, audioKey: "robot", spokenText: "robot" },
            { id: 26, word: "kırmızı", imageUrl: "/images/26.png", isCorrect: true, audioKey: "kırmızı", spokenText: "kırmızı" }
        ]
    },
    { 
        id: 19, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir hava durumu; diğerleri giysi.", wrong: "Hayır, {item} bir giysi." },
            en: { correct: "Yes, {item} is weather; the others are clothing.", wrong: "No, {item} is clothing." }
        },
        options: [
            { id: 13, word: "tişört", imageUrl: "/images/13.png", isCorrect: false, audioKey: "tişört", spokenText: "tişört" },
            { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: false, audioKey: "pantolon", spokenText: "pantolon" },
            { id: 52, word: "yağmur", imageUrl: "/images/52.png", isCorrect: true, audioKey: "yağmur", spokenText: "yağmur" },
            { id: 59, word: "ayakkabı", imageUrl: "/images/59.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "ayakkabı" }
        ]
    },
    { 
        id: 20, 
        question: "Hangisi farklı?", 
        questionAudioKey: "q_which_is_different_person", 
        activityType: ActivityType.WhatDoesntBelong,
        speech: {
            tr: { correct: "Evet, {item} bir bina; diğerleri taşıt.", wrong: "Hayır, {item} bir taşıt." },
            en: { correct: "Yes, {item} is a building; the others are vehicles.", wrong: "No, {item} is a vehicle." }
        },
        options: [
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "araba" },
            { id: 110, word: "bisiklet", imageUrl: "/images/110.png", isCorrect: false, audioKey: "bisiklet", spokenText: "bisiklet" },
            { id: 107, word: "uçak", imageUrl: "/images/107.png", isCorrect: false, audioKey: "uçak", spokenText: "uçak" },
            { id: 903, word: "ev", imageUrl: "/images/903.png", isCorrect: true, audioKey: "ev", spokenText: "ev" }
        ]
    },
];
