import { ConceptRound, ActivityType } from '../../../../types';

export const brokenIntactData: ConceptRound[] = [
    // 1. Tabak
    { 
        id: 51, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Tabak sağlamdır.', wrong: 'Hayır, tabak kırıktır.' },
            en: { correct: 'Yes! The plate is intact.', wrong: 'No, the plate is broken.' },
            de: { correct: 'Ja! Der Teller ist heil.', wrong: 'Nein, der Teller ist kaputt.' },
            fr: { correct: "Oui ! L'assiette est intacte.", wrong: "Non, l'assiette est cassée." },
            nl: { correct: 'Ja! Het bord is heel.', wrong: 'Nee, het bord is kapot.' },
            az: { correct: 'Bəli! Boşqab sağlamdır.', wrong: 'Xeyr, boşqab sınıqdır.' }
        },
        options: [
            { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "tabak" },
            { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: false, audioKey: "kirik_tabak", spokenText: "tabak" }
        ]
    },
    { 
        id: 52, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Tabak kırıktır.', wrong: 'Hayır, tabak sağlamdır.' },
            en: { correct: 'Yes! The plate is broken.', wrong: 'No, the plate is intact.' },
            de: { correct: 'Ja! Der Teller ist kaputt.', wrong: 'Nein, der Teller ist heil.' },
            fr: { correct: "Oui ! L'assiette est cassée.", wrong: "Non, l'assiette est intacte." },
            nl: { correct: 'Ja! Het bord is kapot.', wrong: 'Nee, het bord is heel.' },
            az: { correct: 'Bəli! Boşqab sınıqdır.', wrong: 'Xeyr, boşqab sağlamdır.' }
        },
        options: [
            { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "tabak" },
            { id: 154, word: "tabak", imageUrl: "/images/154.png", isCorrect: true, audioKey: "kirik_tabak", spokenText: "tabak" }
        ]
    },

    // 2. Bardak
    { 
        id: 53, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Bardak sağlamdır.', wrong: 'Hayır, bardak kırıktır.' },
            en: { correct: 'Yes! The glass is intact.', wrong: 'No, the glass is broken.' },
            de: { correct: 'Ja! Das Glas ist heil.', wrong: 'Nein, das Glas ist kaputt.' },
            fr: { correct: "Oui ! Le verre est intact.", wrong: "Non, le verre est cassé." },
            nl: { correct: 'Ja! Het glas is heel.', wrong: 'Nee, het glas is kapot.' },
            az: { correct: 'Bəli! Stəkan sağlamdır.', wrong: 'Xeyr, stəkan sınıqdır.' }
        },
        options: [
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" },
            { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: false, audioKey: "kirik_bardak", spokenText: "bardak" }
        ]
    },
    { 
        id: 54, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Bardak kırıktır.', wrong: 'Hayır, bardak sağlamdır.' },
            en: { correct: 'Yes! The glass is broken.', wrong: 'No, the glass is intact.' },
            de: { correct: 'Ja! Das Glas ist kaputt.', wrong: 'Nein, das Glas ist heil.' },
            fr: { correct: "Oui ! Le verre est cassé.", wrong: "Non, le verre est intact." },
            nl: { correct: 'Ja! Het glas is kapot.', wrong: 'Nee, het glas is heel.' },
            az: { correct: 'Bəli! Stəkan sınıqdır.', wrong: 'Xeyr, stəkan sağlamdır.' }
        },
        options: [
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" },
            { id: 652, word: "bardak", imageUrl: "/images/652.png", isCorrect: true, audioKey: "kirik_bardak", spokenText: "bardak" }
        ]
    },

    // 3. Vazo
    { 
        id: 55, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Vazo sağlamdır.', wrong: 'Hayır, vazo kırıktır.' },
            en: { correct: 'Yes! The vase is intact.', wrong: 'No, the vase is broken.' },
            de: { correct: 'Ja! Die Vase ist heil.', wrong: 'Nein, die Vase ist kaputt.' },
            fr: { correct: "Oui ! Le vase est intact.", wrong: "Non, le vase est cassé." },
            nl: { correct: 'Ja! De vaas is heel.', wrong: 'Nee, de vaas is kapot.' },
            az: { correct: 'Bəli! Güldan sağlamdır.', wrong: 'Xeyr, güldan sınıqdır.' }
        },
        options: [
            { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "vazo" },
            { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: false, audioKey: "kirik_vazo", spokenText: "vazo" }
        ]
    },
    { 
        id: 56, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Vazo kırıktır.', wrong: 'Hayır, vazo sağlamdır.' },
            en: { correct: 'Yes! The vase is broken.', wrong: 'No, the vase is intact.' },
            de: { correct: 'Ja! Die Vase ist kaputt.', wrong: 'Nein, die Vase ist heil.' },
            fr: { correct: "Oui ! Le vase est cassé.", wrong: "Non, le vase est intact." },
            nl: { correct: 'Ja! De vaas is kapot.', wrong: 'Nee, de vaas is heel.' },
            az: { correct: 'Bəli! Güldan sınıqdır.', wrong: 'Xeyr, güldan sağlamdır.' }
        },
        options: [
            { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "vazo" },
            { id: 651, word: "vazo", imageUrl: "/images/651.png", isCorrect: true, audioKey: "kirik_vazo", spokenText: "vazo" }
        ]
    },

    // 4. Akıllı Telefon
    { 
        id: 57, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Telefon sağlamdır.', wrong: 'Hayır, telefon kırıktır.' },
            en: { correct: 'Yes! The phone is intact.', wrong: 'No, the phone is broken.' },
            de: { correct: 'Ja! Das Telefon ist heil.', wrong: 'Nein, das Telefon ist kaputt.' },
            fr: { correct: "Oui ! Le téléphone est intact.", wrong: "Non, le téléphone est cassé." },
            nl: { correct: 'Ja! De telefoon is heel.', wrong: 'Nee, de telefoon is kapot.' },
            az: { correct: 'Bəli! Telefon sağlamdır.', wrong: 'Xeyr, telefon sınıqdır.' }
        },
        options: [
            { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: true, audioKey: "akilli_telefon", spokenText: "akıllı telefon" },
            { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: false, audioKey: "kirik_telefon", spokenText: "akıllı telefon" }
        ]
    },
    { 
        id: 58, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Telefon kırıktır.', wrong: 'Hayır, telefon sağlamdır.' },
            en: { correct: 'Yes! The phone is broken.', wrong: 'No, the phone is intact.' },
            de: { correct: 'Ja! Das Telefon ist kaputt.', wrong: 'Nein, das Telefon ist heil.' },
            fr: { correct: "Oui ! Le téléphone est cassé.", wrong: "Non, le téléphone est intact." },
            nl: { correct: 'Ja! De telefoon is kapot.', wrong: 'Nee, de telefoon is heel.' },
            az: { correct: 'Bəli! Telefon sınıqdır.', wrong: 'Xeyr, telefon sağlamdır.' }
        },
        options: [
            { id: 464, word: "akıllı telefon", imageUrl: "/images/464.png", isCorrect: false, audioKey: "akilli_telefon", spokenText: "akıllı telefon" },
            { id: 465, word: "akıllı telefon", imageUrl: "/images/465.png", isCorrect: true, audioKey: "kirik_telefon", spokenText: "akıllı telefon" }
        ]
    },

    // 5. Araba
    { 
        id: 59, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Araba sağlamdır.', wrong: 'Hayır, araba kırıktır.' },
            en: { correct: 'Yes! The car is intact.', wrong: 'No, the car is broken.' },
            de: { correct: 'Ja! Das Auto ist heil.', wrong: 'Nein, das Auto ist kaputt.' },
            fr: { correct: "Oui ! La voiture est intacte.", wrong: "Non, la voiture est cassée." },
            nl: { correct: 'Ja! De auto is heel.', wrong: 'Nee, de auto is kapot.' },
            az: { correct: 'Bəli! Maşın sağlamdır.', wrong: 'Xeyr, maşın sınıqdır.' }
        },
        options: [
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "araba" },
            { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: false, audioKey: "kirik_araba", spokenText: "araba" }
        ]
    },
    { 
        id: 60, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Araba kırıktır.', wrong: 'Hayır, araba sağlamdır.' },
            en: { correct: 'Yes! The car is broken.', wrong: 'No, the car is intact.' },
            de: { correct: 'Ja! Das Auto ist kaputt.', wrong: 'Nein, das Auto ist heil.' },
            fr: { correct: "Oui ! La voiture est cassée.", wrong: "Non, la voiture est intacte." },
            nl: { correct: 'Ja! De auto is kapot.', wrong: 'Nee, de auto is heel.' },
            az: { correct: 'Bəli! Maşın sınıqdır.', wrong: 'Xeyr, maşın sağlamdır.' }
        },
        options: [
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "araba" },
            { id: 108, word: "araba", imageUrl: "/images/108.png", isCorrect: true, audioKey: "kirik_araba", spokenText: "araba" }
        ]
    },

    // 6. Yumurta
    { 
        id: 61, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Yumurta sağlamdır.', wrong: 'Hayır, yumurta kırıktır.' },
            en: { correct: 'Yes! The egg is intact.', wrong: 'No, the egg is broken.' },
            de: { correct: 'Ja! Das Ei ist heil.', wrong: 'Nein, das Ei ist kaputt.' },
            fr: { correct: "Oui ! L'œuf est intact.", wrong: "Non, l'œuf est cassé." },
            nl: { correct: 'Ja! Het ei is heel.', wrong: 'Nee, het ei is kapot.' },
            az: { correct: 'Bəli! Yumurta sağlamdır.', wrong: 'Xeyr, yumurta sınıqdır.' }
        },
        options: [
            { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: true, audioKey: "yumurta", spokenText: "yumurta" },
            { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: false, audioKey: "kirik_yumurta", spokenText: "yumurta" }
        ]
    },
    { 
        id: 62, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Yumurta kırıktır.', wrong: 'Hayır, yumurta sağlamdır.' },
            en: { correct: 'Yes! The egg is broken.', wrong: 'No, the egg is intact.' },
            de: { correct: 'Ja! Das Ei ist kaputt.', wrong: 'Nein, das Ei ist heil.' },
            fr: { correct: "Oui ! L'œuf est cassé.", wrong: "Non, l'œuf est intact." },
            nl: { correct: 'Ja! Het ei is kapot.', wrong: 'Nee, het ei is heel.' },
            az: { correct: 'Bəli! Yumurta sınıqdır.', wrong: 'Xeyr, yumurta sağlamdır.' }
        },
        options: [
            { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: false, audioKey: "yumurta", spokenText: "yumurta" },
            { id: 77, word: "yumurta", imageUrl: "/images/77.png", isCorrect: true, audioKey: "kirik_yumurta", spokenText: "yumurta" }
        ]
    },

    // 7. Pencere
    { 
        id: 63, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Pencere sağlamdır.', wrong: 'Hayır, pencere kırıktır.' },
            en: { correct: 'Yes! The window is intact.', wrong: 'No, the window is broken.' },
            de: { correct: 'Ja! Das Fenster ist heil.', wrong: 'Nein, das Fenster ist kaputt.' },
            fr: { correct: "Oui ! La fenêtre est intacte.", wrong: "Non, la fenêtre est cassée." },
            nl: { correct: 'Ja! Het raam is heel.', wrong: 'Nee, het raam is kapot.' },
            az: { correct: 'Bəli! Pəncərə sağlamdır.', wrong: 'Xeyr, pəncərə sınıqdır.' }
        },
        options: [
            { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: true, audioKey: "pencere", spokenText: "pencere" },
            { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: false, audioKey: "kirik_pencere", spokenText: "pencere" }
        ]
    },
    { 
        id: 64, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Pencere kırıktır.', wrong: 'Hayır, pencere sağlamdır.' },
            en: { correct: 'Yes! The window is broken.', wrong: 'No, the window is intact.' },
            de: { correct: 'Ja! Das Fenster ist kaputt.', wrong: 'Nein, das Fenster ist heil.' },
            fr: { correct: "Oui ! La fenêtre est cassée.", wrong: "Non, la fenêtre est intacte." },
            nl: { correct: 'Ja! Het raam is kapot.', wrong: 'Nee, het raam is heel.' },
            az: { correct: 'Bəli! Pəncərə sınıqdır.', wrong: 'Xeyr, pəncərə sağlamdır.' }
        },
        options: [
            { id: 82, word: "pencere", imageUrl: "/images/82.png", isCorrect: false, audioKey: "pencere", spokenText: "pencere" },
            { id: 653, word: "pencere", imageUrl: "/images/653.png", isCorrect: true, audioKey: "kirik_pencere", spokenText: "pencere" }
        ]
    },

    // 8. Sandalye
    { 
        id: 65, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Sandalye sağlamdır.', wrong: 'Hayır, sandalye kırıktır.' },
            en: { correct: 'Yes! The chair is intact.', wrong: 'No, the chair is broken.' },
            de: { correct: 'Ja! Der Stuhl ist heil.', wrong: 'Nein, der Stuhl ist kaputt.' },
            fr: { correct: "Oui ! La chaise est intacte.", wrong: "Non, la chaise est cassée." },
            nl: { correct: 'Ja! De stoel is heel.', wrong: 'Nee, de stoel is kapot.' },
            az: { correct: 'Bəli! Stul sağlamdır.', wrong: 'Xeyr, stul sınıqdır.' }
        },
        options: [
            { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "sandalye" },
            { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: false, audioKey: "kirik_sandalye", spokenText: "sandalye" }
        ]
    },
    { 
        id: 66, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Sandalye kırıktır.', wrong: 'Hayır, sandalye sağlamdır.' },
            en: { correct: 'Yes! The chair is broken.', wrong: 'No, the chair is intact.' },
            de: { correct: 'Ja! Der Stuhl ist kaputt.', wrong: 'Nein, der Stuhl ist heil.' },
            fr: { correct: "Oui ! La chaise est cassée.", wrong: "Non, la chaise est intacte." },
            nl: { correct: 'Ja! De stoel is kapot.', wrong: 'Nee, de stoel is heel.' },
            az: { correct: 'Bəli! Stul sınıqdır.', wrong: 'Xeyr, stul sağlamdır.' }
        },
        options: [
            { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "sandalye" },
            { id: 318, word: "sandalye", imageUrl: "/images/318.png", isCorrect: true, audioKey: "kirik_sandalye", spokenText: "sandalye" }
        ]
    },

    // 9. Gözlük
    { 
        id: 67, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Gözlük sağlamdır.', wrong: 'Hayır, gözlük kırıktır.' },
            en: { correct: 'Yes! The glasses are intact.', wrong: 'No, the glasses are broken.' },
            de: { correct: 'Ja! Die Brille ist heil.', wrong: 'Nein, die Brille ist kaputt.' },
            fr: { correct: "Oui ! Les lunettes sont intactes.", wrong: "Non, les lunettes sont cassées." },
            nl: { correct: 'Ja! De bril is heel.', wrong: 'Nee, de bril is kapot.' },
            az: { correct: 'Bəli! Eynək sağlamdır.', wrong: 'Xeyr, eynək sınıqdır.' }
        },
        options: [
            { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gozluk", spokenText: "gözlük" },
            { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: false, audioKey: "kirik_gozluk", spokenText: "gözlük" }
        ]
    },
    { 
        id: 68, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Gözlük kırıktır.', wrong: 'Hayır, gözlük sağlamdır.' },
            en: { correct: 'Yes! The glasses are broken.', wrong: 'No, the glasses are intact.' },
            de: { correct: 'Ja! Die Brille ist kaputt.', wrong: 'Nein, die Brille ist heil.' },
            fr: { correct: "Oui ! Les lunettes sont cassées.", wrong: "Non, les lunettes sont intactes." },
            nl: { correct: 'Ja! De bril is kapot.', wrong: 'Nee, de bril is heel.' },
            az: { correct: 'Bəli! Eynək sınıqdır.', wrong: 'Xeyr, eynək sağlamdır.' }
        },
        options: [
            { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gozluk", spokenText: "gözlük" },
            { id: 760, word: "gözlük", imageUrl: "/images/760.png", isCorrect: true, audioKey: "kirik_gozluk", spokenText: "gözlük" }
        ]
    },

    // 10. Kalem
    { 
        id: 69, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Kalem sağlamdır.', wrong: 'Hayır, kalem kırıktır.' },
            en: { correct: 'Yes! The pencil is intact.', wrong: 'No, the pencil is broken.' },
            de: { correct: 'Ja! Der Stift ist heil.', wrong: 'Nein, der Stift ist kaputt.' },
            fr: { correct: "Oui ! Le crayon est intact.", wrong: "Non, le crayon est cassé." },
            nl: { correct: 'Ja! Het potlood is heel.', wrong: 'Nee, het potlood is kapot.' },
            az: { correct: 'Bəli! Qələm sağlamdır.', wrong: 'Xeyr, qələm sınıqdır.' }
        },
        options: [
            { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: true, audioKey: "kalem", spokenText: "kalem" },
            { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: false, audioKey: "kirik_kalem", spokenText: "kalem" }
        ]
    },
    { 
        id: 70, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Kalem kırıktır.', wrong: 'Hayır, kalem sağlamdır.' },
            en: { correct: 'Yes! The pencil is broken.', wrong: 'No, the pencil is intact.' },
            de: { correct: 'Ja! Der Stift ist kaputt.', wrong: 'Nein, der Stift ist heil.' },
            fr: { correct: "Oui ! Le crayon est cassé.", wrong: "Non, le crayon est intact." },
            nl: { correct: 'Ja! Het potlood is kapot.', wrong: 'Nee, het potlood is heel.' },
            az: { correct: 'Bəli! Qələm sınıqdır.', wrong: 'Xeyr, qələm sağlamdır.' }
        },
        options: [
            { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: false, audioKey: "kalem", spokenText: "kalem" },
            { id: 655, word: "kalem", imageUrl: "/images/655.png", isCorrect: true, audioKey: "kirik_kalem", spokenText: "kalem" }
        ]
    },

    // 11. Televizyon
    { 
        id: 71, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Televizyon sağlamdır.', wrong: 'Hayır, televizyon kırıktır.' },
            en: { correct: 'Yes! The TV is intact.', wrong: 'No, the TV is broken.' },
            de: { correct: 'Ja! Der Fernseher ist heil.', wrong: 'Nein, der Fernseher ist kaputt.' },
            fr: { correct: "Oui ! La télévision est intacte.", wrong: "Non, la télévision est cassée." },
            nl: { correct: 'Ja! De televisie is heel.', wrong: 'Nee, de televisie is kapot.' },
            az: { correct: 'Bəli! Televizor sağlamdır.', wrong: 'Xeyr, televizor sınıqdır.' }
        },
        options: [
            { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: true, audioKey: "televizyon", spokenText: "televizyon" },
            { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: false, audioKey: "kirik_televizyon", spokenText: "televizyon" }
        ]
    },
    { 
        id: 72, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Televizyon kırıktır.', wrong: 'Hayır, televizyon sağlamdır.' },
            en: { correct: 'Yes! The TV is broken.', wrong: 'No, the TV is intact.' },
            de: { correct: 'Ja! Der Fernseher ist kaputt.', wrong: 'Nein, der Fernseher ist heil.' },
            fr: { correct: "Oui ! La télévision est cassée.", wrong: "Non, la télévision est intacte." },
            nl: { correct: 'Ja! De televisie is kapot.', wrong: 'Nee, de televisie is heel.' },
            az: { correct: 'Bəli! Televizor sınıqdır.', wrong: 'Xeyr, televizor sağlamdır.' }
        },
        options: [
            { id: 892, word: "televizyon", imageUrl: "/images/892.png", isCorrect: false, audioKey: "televizyon", spokenText: "televizyon" },
            { id: 893, word: "televizyon", imageUrl: "/images/893.png", isCorrect: true, audioKey: "kirik_televizyon", spokenText: "televizyon" }
        ]
    },

    // 12. Monitör
    { 
        id: 73, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Monitör sağlamdır.', wrong: 'Hayır, monitör kırıktır.' },
            en: { correct: 'Yes! The monitor is intact.', wrong: 'No, the monitor is broken.' },
            de: { correct: 'Ja! Der Monitor ist heil.', wrong: 'Nein, der Monitor ist kaputt.' },
            fr: { correct: "Oui ! Le moniteur est intact.", wrong: "Non, le moniteur est cassé." },
            nl: { correct: 'Ja! De monitor is heel.', wrong: 'Nee, de monitor is kapot.' },
            az: { correct: 'Bəli! Monitor sağlamdır.', wrong: 'Xeyr, monitor sınıqdır.' }
        },
        options: [
            { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: true, audioKey: "monitor", spokenText: "monitör" },
            { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: false, audioKey: "kirik_monitor", spokenText: "monitör" }
        ]
    },
    { 
        id: 74, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Monitör kırıktır.', wrong: 'Hayır, monitör sağlamdır.' },
            en: { correct: 'Yes! The monitor is broken.', wrong: 'No, the monitor is intact.' },
            de: { correct: 'Ja! Der Monitor ist kaputt.', wrong: 'Nein, der Monitor ist heil.' },
            fr: { correct: "Oui ! Le moniteur est cassé.", wrong: "Non, le moniteur est intact." },
            nl: { correct: 'Ja! De monitor is kapot.', wrong: 'Nee, de monitor is heel.' },
            az: { correct: 'Bəli! Monitor sınıqdır.', wrong: 'Xeyr, monitor sağlamdır.' }
        },
        options: [
            { id: 705, word: "monitör", imageUrl: "/images/705.png", isCorrect: false, audioKey: "monitor", spokenText: "monitör" },
            { id: 706, word: "monitör", imageUrl: "/images/706.png", isCorrect: true, audioKey: "kirik_monitor", spokenText: "monitör" }
        ]
    },

    // 13. Cetvel
    { 
        id: 75, 
        question: "Sağlam olan hangisi?", 
        questionAudioKey: "q_which_is_intact", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Cetvel sağlamdır.', wrong: 'Hayır, cetvel kırıktır.' },
            en: { correct: 'Yes! The ruler is intact.', wrong: 'No, the ruler is broken.' },
            de: { correct: 'Ja! Das Lineal ist heil.', wrong: 'Nein, das Lineal ist kaputt.' },
            fr: { correct: "Oui ! La règle est intacte.", wrong: "Non, la règle est cassée." },
            nl: { correct: 'Ja! De liniaal is heel.', wrong: 'Nee, de liniaal is kapot.' },
            az: { correct: 'Bəli! Xətkeş sağlamdır.', wrong: 'Xeyr, xətkeş sınıqdır.' }
        },
        options: [
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "cetvel" },
            { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: false, audioKey: "kirik_cetvel", spokenText: "cetvel" }
        ]
    },
    { 
        id: 76, 
        question: "Kırık olan hangisi?", 
        questionAudioKey: "q_which_is_broken", 
        activityType: ActivityType.BrokenIntact, 
        speech: {
            tr: { correct: 'Evet! Cetvel kırıktır.', wrong: 'Hayır, cetvel sağlamdır.' },
            en: { correct: 'Yes! The ruler is broken.', wrong: 'No, the ruler is intact.' },
            de: { correct: 'Ja! Das Lineal ist kaputt.', wrong: 'Nein, das Lineal ist heil.' },
            fr: { correct: "Oui ! La règle est cassée.", wrong: "Non, la règle est intacte." },
            nl: { correct: 'Ja! De liniaal is kapot.', wrong: 'Nee, de liniaal is heel.' },
            az: { correct: 'Bəli! Xətkeş sınıqdır.', wrong: 'Xeyr, xətkeş sağlamdır.' }
        },
        options: [
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "cetvel" },
            { id: 654, word: "cetvel", imageUrl: "/images/654.png", isCorrect: true, audioKey: "kirik_cetvel", spokenText: "cetvel" }
        ]
    },
];