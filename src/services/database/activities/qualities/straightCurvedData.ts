import { ConceptRound, ActivityType } from '../../../../types';

export const straightCurvedData: ConceptRound[] = [
    // 1. Yol
    { 
        id: 1, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Yol düzdür.', wrong: 'Hayır, yol eğridir.' },
            en: { correct: 'Yes! The road is straight.', wrong: 'No, the road is curved.' },
            de: { correct: 'Ja! Die Straße ist gerade.', wrong: 'Nein, die Straße ist kurvig.' },
            fr: { correct: "Oui ! La route est droite.", wrong: "Non, la route est courbée." },
            nl: { correct: 'Ja! De weg is recht.', wrong: 'Nee, de weg is krom.' },
            az: { correct: 'Bəli! Yol düzdür.', wrong: 'Xeyr, yol əyridir.' }
        },
        options: [
            { id: 530, word: "yol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "yol", spokenText: "yol" },
            { id: 62, word: "yol", imageUrl: "/images/62.png", isCorrect: false, audioKey: "yol", spokenText: "yol" }
        ]
    },
    { 
        id: 2, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Yol eğridir.', wrong: 'Hayır, yol düzdür.' },
            en: { correct: 'Yes! The road is curved.', wrong: 'No, the road is straight.' },
            de: { correct: 'Ja! Die Straße ist kurvig.', wrong: 'Nein, die Straße ist gerade.' },
            fr: { correct: "Oui ! La route est courbée.", wrong: "Non, la route est droite." },
            nl: { correct: 'Ja! De weg is krom.', wrong: 'Nee, de weg is recht.' },
            az: { correct: 'Bəli! Yol əyridir.', wrong: 'Xeyr, yol düzdür.' }
        },
        options: [
            { id: 530, word: "yol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "yol", spokenText: "yol" },
            { id: 62, word: "yol", imageUrl: "/images/62.png", isCorrect: true, audioKey: "yol", spokenText: "yol" }
        ]
    },

    // 2. Cetvel vs Solucan
    { 
        id: 3, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Cetvel düzdür.', wrong: 'Hayır, solucan eğridir.' },
            en: { correct: 'Yes! The ruler is straight.', wrong: 'No, the worm is curved.' },
            de: { correct: 'Ja! Das Lineal ist gerade.', wrong: 'Nein, der Wurm ist krumm.' },
            fr: { correct: "Oui ! La règle est droite.", wrong: "Non, le ver est courbé." },
            nl: { correct: 'Ja! De liniaal is recht.', wrong: 'Nee, de worm is krom.' },
            az: { correct: 'Bəli! Xətkeş düzdür.', wrong: 'Xeyr, soxulcan əyridir.' }
        },
        options: [
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "cetvel" },
            { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: false, audioKey: "solucan", spokenText: "solucan" }
        ]
    },
    { 
        id: 4, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Solucan eğridir.', wrong: 'Hayır, cetvel düzdür.' },
            en: { correct: 'Yes! The worm is curved.', wrong: 'No, the ruler is straight.' },
            de: { correct: 'Ja! Der Wurm ist krumm.', wrong: 'Nein, das Lineal ist gerade.' },
            fr: { correct: "Oui ! Le ver est courbé.", wrong: "Non, la règle est droite." },
            nl: { correct: 'Ja! De worm is krom.', wrong: 'Nee, de liniaal is recht.' },
            az: { correct: 'Bəli! Soxulcan əyridir.', wrong: 'Xeyr, xətkeş düzdür.' }
        },
        options: [
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "cetvel" },
            { id: 150, word: "solucan", imageUrl: "/images/150.png", isCorrect: true, audioKey: "solucan", spokenText: "solucan" }
        ]
    },

    // 3. Ok vs Yay
    { 
        id: 5, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Ok düzdür.', wrong: 'Hayır, yay eğridir.' },
            en: { correct: 'Yes! The arrow is straight.', wrong: 'No, the bow is curved.' },
            de: { correct: 'Ja! Der Pfeil ist gerade.', wrong: 'Nein, der Bogen ist krumm.' },
            fr: { correct: "Oui ! La flèche est droite.", wrong: "Non, l'arc est courbé." },
            nl: { correct: 'Ja! De pijl is recht.', wrong: 'Nee, de boog is krom.' },
            az: { correct: 'Bəli! Ox düzdür.', wrong: 'Xeyr, yay əyridir.' }
        },
        options: [
            { id: 634, word: "ok", imageUrl: "/images/634.png", isCorrect: true, audioKey: "ok", spokenText: "ok" },
            { id: 633, word: "yay", imageUrl: "/images/633.png", isCorrect: false, audioKey: "yay", spokenText: "yay" }
        ]
    },
    { 
        id: 6, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Yay eğridir.', wrong: 'Hayır, ok düzdür.' },
            en: { correct: 'Yes! The bow is curved.', wrong: 'No, the arrow is straight.' },
            de: { correct: 'Ja! Der Bogen ist krumm.', wrong: 'Nein, der Pfeil ist gerade.' },
            fr: { correct: "Oui ! L'arc est courbé.", wrong: "Non, la flèche est droite." },
            nl: { correct: 'Ja! De boog is krom.', wrong: 'Nee, de pijl is recht.' },
            az: { correct: 'Bəli! Yay əyridir.', wrong: 'Xeyr, ox düzdür.' }
        },
        options: [
            { id: 634, word: "ok", imageUrl: "/images/634.png", isCorrect: false, audioKey: "ok", spokenText: "ok" },
            { id: 633, word: "yay", imageUrl: "/images/633.png", isCorrect: true, audioKey: "yay", spokenText: "yay" }
        ]
    },

    // 4. Kalem vs Muz
    { 
        id: 7, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Kalem düzdür.', wrong: 'Hayır, muz eğridir.' },
            en: { correct: 'Yes! The pencil is straight.', wrong: 'No, the banana is curved.' },
            de: { correct: 'Ja! Der Stift ist gerade.', wrong: 'Nein, die Banane ist krumm.' },
            fr: { correct: "Oui ! Le crayon est droit.", wrong: "Non, la banane est courbée." },
            nl: { correct: 'Ja! Het potlood is recht.', wrong: 'Nee, de banaan is krom.' },
            az: { correct: 'Bəli! Qələm düzdür.', wrong: 'Xeyr, banan əyridir.' }
        },
        options: [
            { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: true, audioKey: "kalem", spokenText: "kalem" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "muz" }
        ]
    },
    { 
        id: 8, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Muz eğridir.', wrong: 'Hayır, kalem düzdür.' },
            en: { correct: 'Yes! The banana is curved.', wrong: 'No, the pencil is straight.' },
            de: { correct: 'Ja! Die Banane ist krumm.', wrong: 'Nein, der Stift ist gerade.' },
            fr: { correct: "Oui ! La banane est courbée.", wrong: "Non, le crayon est droit." },
            nl: { correct: 'Ja! De banaan is krom.', wrong: 'Nee, het potlood is recht.' },
            az: { correct: 'Bəli! Banan əyridir.', wrong: 'Xeyr, qələm düzdür.' }
        },
        options: [
            { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: false, audioKey: "kalem", spokenText: "kalem" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "muz" }
        ]
    },

    // 5. Davul Çubuğu vs Yılan
    { 
        id: 9, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Çubuk düzdür.', wrong: 'Hayır, yılan eğridir.' },
            en: { correct: 'Yes! The stick is straight.', wrong: 'No, the snake is curved.' },
            de: { correct: 'Ja! Der Stock ist gerade.', wrong: 'Nein, die Schlange ist krumm.' },
            fr: { correct: "Oui ! Le bâton est droit.", wrong: "Non, le serpent est courbé." },
            nl: { correct: 'Ja! De stok is recht.', wrong: 'Nee, de slang is krom.' },
            az: { correct: 'Bəli! Çubuq düzdür.', wrong: 'Xeyr, ilan əyridir.' }
        },
        options: [
            { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_cubugu", spokenText: "davul çubuğu" },
            { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: false, audioKey: "yilan", spokenText: "yılan" }
        ]
    },
    { 
        id: 10, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Yılan eğridir.', wrong: 'Hayır, çubuk düzdür.' },
            en: { correct: 'Yes! The snake is curved.', wrong: 'No, the stick is straight.' },
            de: { correct: 'Ja! Die Schlange ist krumm.', wrong: 'Nein, der Stock ist gerade.' },
            fr: { correct: "Oui ! Le serpent est courbé.", wrong: "Non, le bâton est droit." },
            nl: { correct: 'Ja! De slang is krom.', wrong: 'Nee, de stok is recht.' },
            az: { correct: 'Bəli! İlan əyridir.', wrong: 'Xeyr, çubuq düzdür.' }
        },
        options: [
            { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_cubugu", spokenText: "davul çubuğu" },
            { id: 323, word: "yılan", imageUrl: "/images/323.png", isCorrect: true, audioKey: "yilan", spokenText: "yılan" }
        ]
    },

    // 6. Kitap vs Ay
    { 
        id: 11, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Kitap düzdür.', wrong: 'Hayır, ay eğridir.' },
            en: { correct: 'Yes! The book is straight.', wrong: 'No, the moon is curved.' },
            de: { correct: 'Ja! Das Buch ist gerade.', wrong: 'Nein, der Mond ist krumm.' },
            fr: { correct: "Oui ! Le livre est droit.", wrong: "Non, la lune est courbée." },
            nl: { correct: 'Ja! Het boek is recht.', wrong: 'Nee, de maan is krom.' },
            az: { correct: 'Bəli! Kitab düzdür.', wrong: 'Xeyr, ay əyridir.' }
        },
        options: [
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" },
            { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: false, audioKey: "ay", spokenText: "ay" }
        ]
    },
    { 
        id: 12, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Ay eğridir.', wrong: 'Hayır, kitap düzdür.' },
            en: { correct: 'Yes! The moon is curved.', wrong: 'No, the book is straight.' },
            de: { correct: 'Ja! Der Mond ist krumm.', wrong: 'Nein, das Buch ist gerade.' },
            fr: { correct: "Oui ! La lune est courbée.", wrong: "Non, le livre est droit." },
            nl: { correct: 'Ja! De maan is krom.', wrong: 'Nee, het boek is recht.' },
            az: { correct: 'Bəli! Ay əyridir.', wrong: 'Xeyr, kitab düzdür.' }
        },
        options: [
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kitap" },
            { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay", spokenText: "ay" }
        ]
    },

    // 7. Tuğla vs Gökkuşağı
    { 
        id: 13, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Tuğla düzdür.', wrong: 'Hayır, gökkuşağı eğridir.' },
            en: { correct: 'Yes! The brick is straight.', wrong: 'No, the rainbow is curved.' },
            de: { correct: 'Ja! Der Ziegelstein ist gerade.', wrong: 'Nein, der Regenbogen ist krumm.' },
            fr: { correct: "Oui ! La brique est droite.", wrong: "Non, l'arc-en-ciel est courbé." },
            nl: { correct: 'Ja! De baksteen is recht.', wrong: 'Nee, de regenboog is krom.' },
            az: { correct: 'Bəli! Kərpic düzdür.', wrong: 'Xeyr, göy qurşağı əyridir.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tugla", spokenText: "tuğla" },
            { id: 159, word: "gökkuşağı", imageUrl: "/images/159.png", isCorrect: false, audioKey: "gokkusagi", spokenText: "gökkuşağı" }
        ]
    },
    { 
        id: 14, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Gökkuşağı eğridir.', wrong: 'Hayır, tuğla düzdür.' },
            en: { correct: 'Yes! The rainbow is curved.', wrong: 'No, the brick is straight.' },
            de: { correct: 'Ja! Der Regenbogen ist krumm.', wrong: 'Nein, der Ziegelstein ist gerade.' },
            fr: { correct: "Oui ! L'arc-en-ciel est courbé.", wrong: "Non, la brique est droite." },
            nl: { correct: 'Ja! De regenboog is krom.', wrong: 'Nee, de baksteen is recht.' },
            az: { correct: 'Bəli! Göy qurşağı əyridir.', wrong: 'Xeyr, kərpic düzdür.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tugla", spokenText: "tuğla" },
            { id: 159, word: "gökkuşağı", imageUrl: "/images/159.png", isCorrect: true, audioKey: "gokkusagi", spokenText: "gökkuşağı" }
        ]
    },

    // 8. Bıçak vs Salatalık
    { 
        id: 15, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Bıçak düzdür.', wrong: 'Hayır, salatalık eğridir.' },
            en: { correct: 'Yes! The knife is straight.', wrong: 'No, the cucumber is curved.' },
            de: { correct: 'Ja! Das Messer ist gerade.', wrong: 'Nein, die Gurke ist krumm.' },
            fr: { correct: "Oui ! Le couteau est droit.", wrong: "Non, le concombre est courbé." },
            nl: { correct: 'Ja! Het mes is recht.', wrong: 'Nee, de komkommer is krom.' },
            az: { correct: 'Bəli! Bıçaq düzdür.', wrong: 'Xeyr, xiyar əyridir.' }
        },
        options: [
            { id: 262, word: "bıçak", imageUrl: "/images/262.png", isCorrect: true, audioKey: "bicak", spokenText: "bıçak" },
            { id: 116, word: "salatalık", imageUrl: "/images/116.png", isCorrect: false, audioKey: "salatalik", spokenText: "salatalık" }
        ]
    },
    { 
        id: 16, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Salatalık eğridir.', wrong: 'Hayır, bıçak düzdür.' },
            en: { correct: 'Yes! The cucumber is curved.', wrong: 'No, the knife is straight.' },
            de: { correct: 'Ja! Die Gurke ist krumm.', wrong: 'Nein, das Messer ist gerade.' },
            fr: { correct: "Oui ! Le concombre est courbé.", wrong: "Non, le couteau est droit." },
            nl: { correct: 'Ja! De komkommer is krom.', wrong: 'Nee, het mes is recht.' },
            az: { correct: 'Bəli! Xiyar əyridir.', wrong: 'Xeyr, bıçaq düzdür.' }
        },
        options: [
            { id: 262, word: "bıçak", imageUrl: "/images/262.png", isCorrect: false, audioKey: "bicak", spokenText: "bıçak" },
            { id: 116, word: "salatalık", imageUrl: "/images/116.png", isCorrect: true, audioKey: "salatalik", spokenText: "salatalık" }
        ]
    },

    // 9. Masa vs Nehir
    { 
        id: 17, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Masa düzdür.', wrong: 'Hayır, nehir eğridir.' },
            en: { correct: 'Yes! The table is straight.', wrong: 'No, the river is curved.' },
            de: { correct: 'Ja! Der Tisch ist gerade.', wrong: 'Nein, der Fluss ist krumm.' },
            fr: { correct: "Oui ! La table est droite.", wrong: "Non, la rivière est courbée." },
            nl: { correct: 'Ja! De tafel is recht.', wrong: 'Nee, de rivier is krom.' },
            az: { correct: 'Bəli! Masa düzdür.', wrong: 'Xeyr, çay əyridir.' }
        },
        options: [
            { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "masa" },
            { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: false, audioKey: "nehir", spokenText: "nehir" }
        ]
    },
    { 
        id: 18, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Nehir eğridir.', wrong: 'Hayır, masa düzdür.' },
            en: { correct: 'Yes! The river is curved.', wrong: 'No, the table is straight.' },
            de: { correct: 'Ja! Der Fluss ist krumm.', wrong: 'Nein, der Tisch ist gerade.' },
            fr: { correct: "Oui ! La rivière est courbée.", wrong: "Non, la table est droite." },
            nl: { correct: 'Ja! De rivier is krom.', wrong: 'Nee, de tafel is recht.' },
            az: { correct: 'Bəli! Çay əyridir.', wrong: 'Xeyr, masa düzdür.' }
        },
        options: [
            { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "masa" },
            { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: true, audioKey: "nehir", spokenText: "nehir" }
        ]
    },

    // 11. Pırasa vs Muz
    { 
        id: 21, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_straight", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Pırasa düzdür.', wrong: 'Hayır, muz eğridir.' },
            en: { correct: 'Yes! The leek is straight.', wrong: 'No, the banana is curved.' },
            de: { correct: 'Ja! Der Lauch ist gerade.', wrong: 'Nein, die Banane ist krumm.' },
            fr: { correct: "Oui ! Le poireau est droit.", wrong: "Non, la banane est courbée." },
            nl: { correct: 'Ja! De prei is recht.', wrong: 'Nee, de banaan is krom.' },
            az: { correct: 'Bəli! Kəvər düzdür.', wrong: 'Xeyr, banan əyridir.' }
        },
        options: [
            { id: 421, word: "pırasa", imageUrl: "/images/421.png", isCorrect: true, audioKey: "pirasa", spokenText: "pırasa" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "muz" }
        ]
    },
    { 
        id: 22, 
        question: "Eğri olan hangisi?", 
        questionAudioKey: "q_which_is_curved", 
        activityType: ActivityType.StraightCurved, 
        speech: {
            tr: { correct: 'Evet! Muz eğridir.', wrong: 'Hayır, pırasa düzdür.' },
            en: { correct: 'Yes! The banana is curved.', wrong: 'No, the leek is straight.' },
            de: { correct: 'Ja! Die Banane ist krumm.', wrong: 'Nein, der Lauch ist gerade.' },
            fr: { correct: "Oui ! La banane est courbée.", wrong: "Non, le poireau est droit." },
            nl: { correct: 'Ja! De banaan is krom.', wrong: 'Nee, de prei is recht.' },
            az: { correct: 'Bəli! Banan əyridir.', wrong: 'Xeyr, kəvər düzdür.' }
        },
        options: [
            { id: 421, word: "pırasa", imageUrl: "/images/421.png", isCorrect: false, audioKey: "pirasa", spokenText: "pırasa" },
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "muz" }
        ]
    },
];