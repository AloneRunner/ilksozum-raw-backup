import { ConceptRound, ActivityType } from '../../../../types';

export const roughSmoothData: ConceptRound[] = [
    // 1. Ananas vs Elma
    { 
        id: 1, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough_person", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Ananas pürüzlüdür.', wrong: 'Hayır, elma pürüzsüzdür.' },
            en: { correct: 'Yes! The pineapple is rough.', wrong: 'No, the apple is smooth.' },
            de: { correct: 'Ja! Die Ananas ist rau.', wrong: 'Nein, der Apfel ist glatt.' },
            fr: { correct: "Oui ! L'ananas est rugueux.", wrong: "Non, la pomme est lisse." },
            nl: { correct: 'Ja! De ananas is ruw.', wrong: 'Nee, de appel is glad.' },
            az: { correct: 'Bəli! Ananas kələ-kötürdür.', wrong: 'Xeyr, alma hamardır.' }
        },
        options: [
            { id: 279, word: "ananas", imageUrl: "/images/279.png", isCorrect: true, audioKey: "ananas", spokenText: "ananas" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" }
        ]
    },
    { 
        id: 2, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Elma pürüzsüzdür.', wrong: 'Hayır, ananas pürüzlüdür.' },
            en: { correct: 'Yes! The apple is smooth.', wrong: 'No, the pineapple is rough.' },
            de: { correct: 'Ja! Der Apfel ist glatt.', wrong: 'Nein, die Ananas ist rau.' },
            fr: { correct: "Oui ! La pomme est lisse.", wrong: "Non, l'ananas est rugueux." },
            nl: { correct: 'Ja! De appel is glad.', wrong: 'Nee, de ananas is ruw.' },
            az: { correct: 'Bəli! Alma hamardır.', wrong: 'Xeyr, ananas kələ-kötürdür.' }
        },
        options: [
            { id: 279, word: "ananas", imageUrl: "/images/279.png", isCorrect: false, audioKey: "ananas", spokenText: "ananas" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" }
        ]
    },

    // 2. Tuğla vs Misket
    { 
        id: 3, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Tuğla pürüzlüdür.', wrong: 'Hayır, misket pürüzsüzdür.' },
            en: { correct: 'Yes! The brick is rough.', wrong: 'No, the marble is smooth.' },
            de: { correct: 'Ja! Der Ziegelstein ist rau.', wrong: 'Nein, die Murmel ist glatt.' },
            fr: { correct: "Oui ! La brique est rugueuse.", wrong: "Non, la bille est lisse." },
            nl: { correct: 'Ja! De baksteen is ruw.', wrong: 'Nee, de knikker is glad.' },
            az: { correct: 'Bəli! Kərpic kələ-kötürdür.', wrong: 'Xeyr, mərmər daşı hamardır.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tugla", spokenText: "tuğla" },
            { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "misket" }
        ]
    },
    { 
        id: 4, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Misket pürüzsüzdür.', wrong: 'Hayır, tuğla pürüzlüdür.' },
            en: { correct: 'Yes! The marble is smooth.', wrong: 'No, the brick is rough.' },
            de: { correct: 'Ja! Die Murmel ist glatt.', wrong: 'Nein, der Ziegelstein ist rau.' },
            fr: { correct: "Oui ! La bille est lisse.", wrong: "Non, la brique est rugueuse." },
            nl: { correct: 'Ja! De knikker is glad.', wrong: 'Nee, de baksteen is ruw.' },
            az: { correct: 'Bəli! Mərmər daşı hamardır.', wrong: 'Xeyr, kərpic kələ-kötürdür.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tugla", spokenText: "tuğla" },
            { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "misket" }
        ]
    },

    // 3. Ceviz vs Yumurta
    { 
        id: 5, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Ceviz pürüzlüdür.', wrong: 'Hayır, yumurta pürüzsüzdür.' },
            en: { correct: 'Yes! The walnut is rough.', wrong: 'No, the egg is smooth.' },
            de: { correct: 'Ja! Die Walnuss ist rau.', wrong: 'Nein, das Ei ist glatt.' },
            fr: { correct: "Oui ! La noix est rugueuse.", wrong: "Non, l'œuf est lisse." },
            nl: { correct: 'Ja! De walnoot is ruw.', wrong: 'Nee, het ei is glad.' },
            az: { correct: 'Bəli! Qoz kələ-kötürdür.', wrong: 'Xeyr, yumurta hamardır.' }
        },
        options: [
            { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: true, audioKey: "ceviz", spokenText: "ceviz" },
            { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: false, audioKey: "yumurta", spokenText: "yumurta" }
        ]
    },
    { 
        id: 6, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Yumurta pürüzsüzdür.', wrong: 'Hayır, ceviz pürüzlüdür.' },
            en: { correct: 'Yes! The egg is smooth.', wrong: 'No, the walnut is rough.' },
            de: { correct: 'Ja! Das Ei ist glatt.', wrong: 'Nein, die Walnuss ist rau.' },
            fr: { correct: "Oui ! L'œuf est lisse.", wrong: "Non, la noix est rugueuse." },
            nl: { correct: 'Ja! Het ei is glad.', wrong: 'Nee, de walnoot is ruw.' },
            az: { correct: 'Bəli! Yumurta hamardır.', wrong: 'Xeyr, qoz kələ-kötürdür.' }
        },
        options: [
            { id: 650, word: "ceviz", imageUrl: "/images/650.png", isCorrect: false, audioKey: "ceviz", spokenText: "ceviz" },
            { id: 113, word: "yumurta", imageUrl: "/images/113.png", isCorrect: true, audioKey: "yumurta", spokenText: "yumurta" }
        ]
    },

    // 4. Karnabahar vs Patlıcan
    { 
        id: 7, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Karnabahar pürüzlüdür.', wrong: 'Hayır, patlıcan pürüzsüzdür.' },
            en: { correct: 'Yes! The cauliflower is rough.', wrong: 'No, the eggplant is smooth.' },
            de: { correct: 'Ja! Der Blumenkohl ist rau.', wrong: 'Nein, die Aubergine ist glatt.' },
            fr: { correct: "Oui ! Le chou-fleur est rugueux.", wrong: "Non, l'aubergine est lisse." },
            nl: { correct: 'Ja! De bloemkool is ruw.', wrong: 'Nee, de aubergine is glad.' },
            az: { correct: 'Bəli! Gül kələmi kələ-kötürdür.', wrong: 'Xeyr, badımcan hamardır.' }
        },
        options: [
            { id: 648, word: "karnabahar", imageUrl: "/images/648.png", isCorrect: true, audioKey: "karnabahar", spokenText: "karnabahar" },
            { id: 280, word: "patlıcan", imageUrl: "/images/280.png", isCorrect: false, audioKey: "patlican", spokenText: "patlıcan" }
        ]
    },
    { 
        id: 8, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Patlıcan pürüzsüzdür.', wrong: 'Hayır, karnabahar pürüzlüdür.' },
            en: { correct: 'Yes! The eggplant is smooth.', wrong: 'No, the cauliflower is rough.' },
            de: { correct: 'Ja! Die Aubergine ist glatt.', wrong: 'Nein, der Blumenkohl ist rau.' },
            fr: { correct: "Oui ! L'aubergine est lisse.", wrong: "Non, le chou-fleur est rugueux." },
            nl: { correct: 'Ja! De aubergine is glad.', wrong: 'Nee, de bloemkool is ruw.' },
            az: { correct: 'Bəli! Badımcan hamardır.', wrong: 'Xeyr, gül kələmi kələ-kötürdür.' }
        },
        options: [
            { id: 648, word: "karnabahar", imageUrl: "/images/648.png", isCorrect: false, audioKey: "karnabahar", spokenText: "karnabahar" },
            { id: 280, word: "patlıcan", imageUrl: "/images/280.png", isCorrect: true, audioKey: "patlican", spokenText: "patlıcan" }
        ]
    },

    // 5. Kirpi vs Yunus
    { 
        id: 9, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Kirpi pürüzlüdür.', wrong: 'Hayır, yunus pürüzsüzdür.' },
            en: { correct: 'Yes! The hedgehog is rough.', wrong: 'No, the dolphin is smooth.' },
            de: { correct: 'Ja! Der Igel ist rau.', wrong: 'Nein, der Delfin ist glatt.' },
            fr: { correct: "Oui ! Le hérisson est rugueux.", wrong: "Non, le dauphin est lisse." },
            nl: { correct: 'Ja! De egel is ruw.', wrong: 'Nee, de dolfijn is glad.' },
            az: { correct: 'Bəli! Kirpi kələ-kötürdür.', wrong: 'Xeyr, delfin hamardır.' }
        },
        options: [
            { id: 418, word: "kirpi", imageUrl: "/images/418.png", isCorrect: true, audioKey: "kirpi", spokenText: "kirpi" },
            { id: 763, word: "yunus", imageUrl: "/images/763.png", isCorrect: false, audioKey: "yunus", spokenText: "yunus" }
        ]
    },
    { 
        id: 10, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Yunus pürüzsüzdür.', wrong: 'Hayır, kirpi pürüzlüdür.' },
            en: { correct: 'Yes! The dolphin is smooth.', wrong: 'No, the hedgehog is rough.' },
            de: { correct: 'Ja! Der Delfin ist glatt.', wrong: 'Nein, der Igel ist rau.' },
            fr: { correct: "Oui ! Le dauphin est lisse.", wrong: "Non, le hérisson est rugueux." },
            nl: { correct: 'Ja! De dolfijn is glad.', wrong: 'Nee, de egel is ruw.' },
            az: { correct: 'Bəli! Delfin hamardır.', wrong: 'Xeyr, kirpi kələ-kötürdür.' }
        },
        options: [
            { id: 418, word: "kirpi", imageUrl: "/images/418.png", isCorrect: false, audioKey: "kirpi", spokenText: "kirpi" },
            { id: 763, word: "yunus", imageUrl: "/images/763.png", isCorrect: true, audioKey: "yunus", spokenText: "yunus" }
        ]
    },

    // 6. Ağaç Gövdesi vs Taş
    { 
        id: 11, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Ağaç gövdesi pürüzlüdür.', wrong: 'Hayır, taş pürüzsüzdür.' },
            en: { correct: 'Yes! The tree trunk is rough.', wrong: 'No, the stone is smooth.' },
            de: { correct: 'Ja! Der Baumstamm ist rau.', wrong: 'Nein, der Stein ist glatt.' },
            fr: { correct: "Oui ! Le tronc d'arbre est rugueux.", wrong: "Non, la pierre est lisse." },
            nl: { correct: 'Ja! De boomstam is ruw.', wrong: 'Nee, de steen is glad.' },
            az: { correct: 'Bəli! Ağac gövdəsi kələ-kötürdür.', wrong: 'Xeyr, daş hamardır.' }
        },
        options: [
            { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: true, audioKey: "agac_govdesi", spokenText: "ağaç gövdesi" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "tas", spokenText: "taş" }
        ]
    },
    { 
        id: 12, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Taş pürüzsüzdür.', wrong: 'Hayır, ağaç gövdesi pürüzlüdür.' },
            en: { correct: 'Yes! The stone is smooth.', wrong: 'No, the tree trunk is rough.' },
            de: { correct: 'Ja! Der Stein ist glatt.', wrong: 'Nein, der Baumstamm ist rau.' },
            fr: { correct: "Oui ! La pierre est lisse.", wrong: "Non, le tronc d'arbre est rugueux." },
            nl: { correct: 'Ja! De steen is glad.', wrong: 'Nee, de boomstam is ruw.' },
            az: { correct: 'Bəli! Daş hamardır.', wrong: 'Xeyr, ağac gövdəsi kələ-kötürdür.' }
        },
        options: [
            { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: false, audioKey: "agac_govdesi", spokenText: "ağaç gövdesi" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "tas", spokenText: "taş" }
        ]
    },

    // 7. Portakal vs Armut
    { 
        id: 13, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Portakal pürüzlüdür.', wrong: 'Hayır, armut pürüzsüzdür.' },
            en: { correct: 'Yes! The orange is rough.', wrong: 'No, the pear is smooth.' },
            de: { correct: 'Ja! Die Orange ist rau.', wrong: 'Nein, die Birne ist glatt.' },
            fr: { correct: "Oui ! L'orange est rugueuse.", wrong: "Non, la poire est lisse." },
            nl: { correct: 'Ja! De sinaasappel is ruw.', wrong: 'Nee, de peer is glad.' },
            az: { correct: 'Bəli! Portağal kələ-kötürdür.', wrong: 'Xeyr, armud hamardır.' }
        },
        options: [
            { id: 168, word: "portakal", imageUrl: "/images/168.png", isCorrect: true, audioKey: "portakal", spokenText: "portakal" },
            { id: 365, word: "armut", imageUrl: "/images/365.png", isCorrect: false, audioKey: "armut", spokenText: "armut" }
        ]
    },
    { 
        id: 14, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Armut pürüzsüzdür.', wrong: 'Hayır, portakal pürüzlüdür.' },
            en: { correct: 'Yes! The pear is smooth.', wrong: 'No, the orange is rough.' },
            de: { correct: 'Ja! Die Birne ist glatt.', wrong: 'Nein, die Orange ist rau.' },
            fr: { correct: "Oui ! La poire est lisse.", wrong: "Non, l'orange est rugueuse." },
            nl: { correct: 'Ja! De peer is glad.', wrong: 'Nee, de sinaasappel is ruw.' },
            az: { correct: 'Bəli! Armud hamardır.', wrong: 'Xeyr, portağal kələ-kötürdür.' }
        },
        options: [
            { id: 168, word: "portakal", imageUrl: "/images/168.png", isCorrect: false, audioKey: "portakal", spokenText: "portakal" },
            { id: 365, word: "armut", imageUrl: "/images/365.png", isCorrect: true, audioKey: "armut", spokenText: "armut" }
        ]
    },

    // 8. Deniz Kestanesi vs Deniz Yıldızı
    { 
        id: 15, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Deniz kestanesi pürüzlüdür.', wrong: 'Hayır, deniz yıldızı pürüzsüzdür.' },
            en: { correct: 'Yes! The sea urchin is rough.', wrong: 'No, the starfish is smooth.' },
            de: { correct: 'Ja! Der Seeigel ist rau.', wrong: 'Nein, der Seestern ist glatt.' },
            fr: { correct: "Oui ! L'oursin est rugueux.", wrong: "Non, l'étoile de mer est lisse." },
            nl: { correct: 'Ja! De zee-egel is ruw.', wrong: 'Nee, de zeester is glad.' },
            az: { correct: 'Bəli! Dəniz kirpisi kələ-kötürdür.', wrong: 'Xeyr, dəniz ulduzu hamardır.' }
        },
        options: [
            { id: 692, word: "deniz kestanesi", imageUrl: "/images/692.png", isCorrect: true, audioKey: "deniz_kestanesi", spokenText: "deniz kestanesi" },
            { id: 359, word: "deniz yıldızı", imageUrl: "/images/359.png", isCorrect: false, audioKey: "deniz_yildizi", spokenText: "deniz yıldızı" }
        ]
    },
    { 
        id: 16, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Deniz yıldızı pürüzsüzdür.', wrong: 'Hayır, deniz kestanesi pürüzlüdür.' },
            en: { correct: 'Yes! The starfish is smooth.', wrong: 'No, the sea urchin is rough.' },
            de: { correct: 'Ja! Der Seestern ist glatt.', wrong: 'Nein, der Seeigel ist rau.' },
            fr: { correct: "Oui ! L'étoile de mer est lisse.", wrong: "Non, l'oursin est rugueux." },
            nl: { correct: 'Ja! De zeester is glad.', wrong: 'Nee, de zee-egel is ruw.' },
            az: { correct: 'Bəli! Dəniz ulduzu hamardır.', wrong: 'Xeyr, dəniz kirpisi kələ-kötürdür.' }
        },
        options: [
            { id: 692, word: "deniz kestanesi", imageUrl: "/images/692.png", isCorrect: false, audioKey: "deniz_kestanesi", spokenText: "deniz kestanesi" },
            { id: 359, word: "deniz yıldızı", imageUrl: "/images/359.png", isCorrect: true, audioKey: "deniz_yildizi", spokenText: "deniz yıldızı" }
        ]
    },

    // 9. Kivi vs Domates
    { 
        id: 17, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Kivi pürüzlüdür.', wrong: 'Hayır, domates pürüzsüzdür.' },
            en: { correct: 'Yes! The kiwi is rough.', wrong: 'No, the tomato is smooth.' },
            de: { correct: 'Ja! Die Kiwi ist rau.', wrong: 'Nein, die Tomate ist glatt.' },
            fr: { correct: "Oui ! Le kiwi est rugueux.", wrong: "Non, la tomate est lisse." },
            nl: { correct: 'Ja! De kiwi is ruw.', wrong: 'Nee, de tomaat is glad.' },
            az: { correct: 'Bəli! Kivi kələ-kötürdür.', wrong: 'Xeyr, pomidor hamardır.' }
        },
        options: [
            { id: 649, word: "kivi", imageUrl: "/images/649.png", isCorrect: true, audioKey: "kivi", spokenText: "kivi" },
            { id: 128, word: "domates", imageUrl: "/images/128.png", isCorrect: false, audioKey: "domates", spokenText: "domates" }
        ]
    },
    { 
        id: 18, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Domates pürüzsüzdür.', wrong: 'Hayır, kivi pürüzlüdür.' },
            en: { correct: 'Yes! The tomato is smooth.', wrong: 'No, the kiwi is rough.' },
            de: { correct: 'Ja! Die Tomate ist glatt.', wrong: 'Nein, die Kiwi ist rau.' },
            fr: { correct: "Oui ! La tomate est lisse.", wrong: "Non, le kiwi est rugueux." },
            nl: { correct: 'Ja! De tomaat is glad.', wrong: 'Nee, de kiwi is ruw.' },
            az: { correct: 'Bəli! Pomidor hamardır.', wrong: 'Xeyr, kivi kələ-kötürdür.' }
        },
        options: [
            { id: 649, word: "kivi", imageUrl: "/images/649.png", isCorrect: false, audioKey: "kivi", spokenText: "kivi" },
            { id: 128, word: "domates", imageUrl: "/images/128.png", isCorrect: true, audioKey: "domates", spokenText: "domates" }
        ]
    },

    // 10. Ekmek vs Peynir
    { 
        id: 19, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Ekmek pürüzlüdür.', wrong: 'Hayır, peynir pürüzsüzdür.' },
            en: { correct: 'Yes! The bread is rough.', wrong: 'No, the cheese is smooth.' },
            de: { correct: 'Ja! Das Brot ist rau.', wrong: 'Nein, der Käse ist glatt.' },
            fr: { correct: "Oui ! Le pain est rugueux.", wrong: "Non, le fromage est lisse." },
            nl: { correct: 'Ja! Het brood is ruw.', wrong: 'Nee, de kaas is glad.' },
            az: { correct: 'Bəli! Çörək kələ-kötürdür.', wrong: 'Xeyr, pendir hamardır.' }
        },
        options: [
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "ekmek", spokenText: "ekmek" },
            { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: false, audioKey: "peynir", spokenText: "peynir" }
        ]
    },
    { 
        id: 20, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Peynir pürüzsüzdür.', wrong: 'Hayır, ekmek pürüzlüdür.' },
            en: { correct: 'Yes! The cheese is smooth.', wrong: 'No, the bread is rough.' },
            de: { correct: 'Ja! Der Käse ist glatt.', wrong: 'Nein, das Brot ist rau.' },
            fr: { correct: "Oui ! Le fromage est lisse.", wrong: "Non, le pain est rugueux." },
            nl: { correct: 'Ja! De kaas is glad.', wrong: 'Nee, het brood is ruw.' },
            az: { correct: 'Bəli! Pendir hamardır.', wrong: 'Xeyr, çörək kələ-kötürdür.' }
        },
        options: [
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "ekmek", spokenText: "ekmek" },
            { id: 50, word: "peynir", imageUrl: "/images/50.png", isCorrect: true, audioKey: "peynir", spokenText: "peynir" }
        ]
    },

    // 11. Kaldırım vs Yol
    { 
        id: 21, 
        question: "Pürüzlü olan hangisi?", 
        questionAudioKey: "q_which_is_rough", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Kaldırım pürüzlüdür.', wrong: 'Hayır, yol pürüzsüzdür.' },
            en: { correct: 'Yes! The pavement is rough.', wrong: 'No, the road is smooth.' },
            de: { correct: 'Ja! Der Bürgersteig ist rau.', wrong: 'Nein, die Straße ist glatt.' },
            fr: { correct: "Oui ! Le trottoir est rugueux.", wrong: "Non, la route est lisse." },
            nl: { correct: 'Ja! De stoep is ruw.', wrong: 'Nee, de weg is glad.' },
            az: { correct: 'Bəli! Səki kələ-kötürdür.', wrong: 'Xeyr, yol hamardır.' }
        },
        options: [
            { id: 891, word: "kaldırım", imageUrl: "/images/891.png", isCorrect: true, audioKey: "kaldirim", spokenText: "kaldırım" },
            { id: 890, word: "yol", imageUrl: "/images/890.png", isCorrect: false, audioKey: "yol", spokenText: "yol" }
        ]
    },
    { 
        id: 22, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.RoughSmooth, 
        speech: {
            tr: { correct: 'Evet! Yol pürüzsüzdür.', wrong: 'Hayır, kaldırım pürüzlüdür.' },
            en: { correct: 'Yes! The road is smooth.', wrong: 'No, the pavement is rough.' },
            de: { correct: 'Ja! Die Straße ist glatt.', wrong: 'Nein, der Bürgersteig ist rau.' },
            fr: { correct: "Oui ! La route est lisse.", wrong: "Non, le trottoir est rugueux." },
            nl: { correct: 'Ja! De weg is glad.', wrong: 'Nee, de stoep is ruw.' },
            az: { correct: 'Bəli! Yol hamardır.', wrong: 'Xeyr, səki kələ-kötürdür.' }
        },
        options: [
            { id: 891, word: "kaldırım", imageUrl: "/images/891.png", isCorrect: false, audioKey: "kaldirim", spokenText: "kaldırım" },
            { id: 890, word: "yol", imageUrl: "/images/890.png", isCorrect: true, audioKey: "yol", spokenText: "yol" }
        ]
    },
];