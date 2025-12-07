import { ConceptRound, ActivityType } from '../../../../types';

export const belowAboveData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Uçak - Gemi (615-622)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Yukarıda olan hangisi?", 
        questionAudioKey: "q_which_is_above", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Uçak yukarıdadır.', wrong: 'Hayır, gemi aşağıdadır.' },
            en: { correct: 'Yes! The plane is above.', wrong: 'No, the ship is below.' },
            de: { correct: 'Ja! Das Flugzeug ist oben.', wrong: 'Nein, das Schiff ist unten.' },
            fr: { correct: "Oui ! L'avion est en haut.", wrong: "Non, le navire est en bas." },
            nl: { correct: 'Ja! Het vliegtuig is boven.', wrong: 'Nee, het schip is beneden.' },
            az: { correct: 'Bəli! Təyyarə yuxarıdadır.', wrong: 'Xeyr, gəmi aşağıdadır.' }
        },
        options: [
            { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: true, audioKey: "ucak", spokenText: "uçak" },
            { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: false, audioKey: "gemi", spokenText: "gemi" }
        ]
    },
    { 
        id: 2, 
        question: "Aşağıda olan hangisi?", 
        questionAudioKey: "q_which_is_below", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Gemi aşağıdadır.', wrong: 'Hayır, uçak yukarıdadır.' },
            en: { correct: 'Yes! The ship is below.', wrong: 'No, the plane is above.' },
            de: { correct: 'Ja! Das Schiff ist unten.', wrong: 'Nein, das Flugzeug ist oben.' },
            fr: { correct: "Oui ! Le navire est en bas.", wrong: "Non, l'avion est en haut." },
            nl: { correct: 'Ja! Het schip is beneden.', wrong: 'Nee, het vliegtuig is boven.' },
            az: { correct: 'Bəli! Gəmi aşağıdadır.', wrong: 'Xeyr, təyyarə yuxarıdadır.' }
        },
        options: [
            { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: false, audioKey: "ucak", spokenText: "uçak" },
            { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: true, audioKey: "gemi", spokenText: "gemi" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Güneş - Ağaçlar (237-513)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Yukarıda olan hangisi?", 
        questionAudioKey: "q_which_is_above", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Güneş yukarıdadır.', wrong: 'Hayır, ağaçlar aşağıdadır.' },
            en: { correct: 'Yes! The sun is above.', wrong: 'No, the trees are below.' },
            de: { correct: 'Ja! Die Sonne ist oben.', wrong: 'Nein, die Bäume sind unten.' },
            fr: { correct: "Oui ! Le soleil est en haut.", wrong: "Non, les arbres sont en bas." },
            nl: { correct: 'Ja! De zon is boven.', wrong: 'Nee, de bomen zijn beneden.' },
            az: { correct: 'Bəli! Günəş yuxarıdadır.', wrong: 'Xeyr, ağaclar aşağıdadır.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "gunes", spokenText: "güneş" },
            { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: false, audioKey: "agaclar", spokenText: "ağaçlar" }
        ]
    },
    { 
        id: 4, 
        question: "Aşağıda olan hangisi?", 
        questionAudioKey: "q_which_is_below", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Ağaçlar aşağıdadır.', wrong: 'Hayır, güneş yukarıdadır.' },
            en: { correct: 'Yes! The trees are below.', wrong: 'No, the sun is above.' },
            de: { correct: 'Ja! Die Bäume sind unten.', wrong: 'Nein, die Sonne ist oben.' },
            fr: { correct: "Oui ! Les arbres sont en bas.", wrong: "Non, le soleil est en haut." },
            nl: { correct: 'Ja! De bomen zijn beneden.', wrong: 'Nee, de zon is boven.' },
            az: { correct: 'Bəli! Ağaclar aşağıdadır.', wrong: 'Xeyr, günəş yuxarıdadır.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "gunes", spokenText: "güneş" },
            { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: true, audioKey: "agaclar", spokenText: "ağaçlar" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Uçurtma - Ağaç (135-104)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Yukarıda olan hangisi?", 
        questionAudioKey: "q_which_is_above", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Uçurtma yukarıdadır.', wrong: 'Hayır, ağaç aşağıdadır.' },
            en: { correct: 'Yes! The kite is above.', wrong: 'No, the tree is below.' },
            de: { correct: 'Ja! Der Drachen ist oben.', wrong: 'Nein, der Baum ist unten.' },
            fr: { correct: "Oui ! Le cerf-volant est en haut.", wrong: "Non, l'arbre est en bas." },
            nl: { correct: 'Ja! De vlieger is boven.', wrong: 'Nee, de boom is beneden.' },
            az: { correct: 'Bəli! Çərpələng yuxarıdadır.', wrong: 'Xeyr, ağac aşağıdadır.' }
        },
        options: [
            { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: true, audioKey: "ucurtma", spokenText: "uçurtma" },
            { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" }
        ]
    },
    { 
        id: 6, 
        question: "Aşağıda olan hangisi?", 
        questionAudioKey: "q_which_is_below", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Ağaç aşağıdadır.', wrong: 'Hayır, uçurtma yukarıdadır.' },
            en: { correct: 'Yes! The tree is below.', wrong: 'No, the kite is above.' },
            de: { correct: 'Ja! Der Baum ist unten.', wrong: 'Nein, der Drachen ist oben.' },
            fr: { correct: "Oui ! L'arbre est en bas.", wrong: "Non, le cerf-volant est en haut." },
            nl: { correct: 'Ja! De boom is beneden.', wrong: 'Nee, de vlieger is boven.' },
            az: { correct: 'Bəli! Ağac aşağıdadır.', wrong: 'Xeyr, çərpələng yuxarıdadır.' }
        },
        options: [
            { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: false, audioKey: "ucurtma", spokenText: "uçurtma" },
            { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Ay - Ağaç (238-104)
    // ----------------------------------------------------------------------
    { 
        id: 7, 
        question: "Yukarıda olan hangisi?", 
        questionAudioKey: "q_which_is_above", 
        activityType: ActivityType.BelowAbove, 
        speech: {
            tr: { correct: 'Evet! Ay yukarıdadır.', wrong: 'Hayır, ağaç aşağıdadır.' },
            en: { correct: 'Yes! The moon is above.', wrong: 'No, the tree is below.' },
            de: { correct: 'Ja! Der Mond ist oben.', wrong: 'Nein, der Baum ist unten.' },
            fr: { correct: "Oui ! La lune est en haut.", wrong: "Non, l'arbre est en bas." },
            nl: { correct: 'Ja! De maan is boven.', wrong: 'Nee, de boom is beneden.' },
            az: { correct: 'Bəli! Ay yuxarıdadır.', wrong: 'Xeyr, ağac aşağıdadır.' }
        },
        options: [
            { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay", spokenText: "ay" },
            { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" }
        ]
    }
];