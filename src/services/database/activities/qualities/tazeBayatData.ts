import { ConceptRound, ActivityType } from '../../../../types';

export const tazeBayatData: ConceptRound[] = [
    // 1. Ekmek (Taze vs Küflü/Bayat)
    { 
        id: 1, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Ekmek tazedir.', wrong: 'Hayır, ekmek küflüdür.' },
            en: { correct: 'Yes! The bread is fresh.', wrong: 'No, the bread is moldy.' },
            de: { correct: 'Ja! Das Brot ist frisch.', wrong: 'Nein, das Brot ist schimmlig.' },
            fr: { correct: "Oui ! Le pain est frais.", wrong: "Non, le pain est moisi." },
            nl: { correct: 'Ja! Het brood is vers.', wrong: 'Nee, het brood is beschimmeld.' },
            az: { correct: 'Bəli! Çörək təzədir.', wrong: 'Xeyr, çörək kiflidir.' }
        },
        options: [
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "taze_ekmek", spokenText: "taze ekmek" },
            { id: 253, word: "ekmek", imageUrl: "/images/253.png", isCorrect: false, audioKey: "kuflu_ekmek", spokenText: "küflü ekmek" }
        ]
    },
    { 
        id: 2, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Ekmek küflüdür.', wrong: 'Hayır, ekmek tazedir.' },
            en: { correct: 'Yes! The bread is moldy.', wrong: 'No, the bread is fresh.' },
            de: { correct: 'Ja! Das Brot ist schimmlig.', wrong: 'Nein, das Brot ist frisch.' },
            fr: { correct: "Oui ! Le pain est moisi.", wrong: "Non, le pain est frais." },
            nl: { correct: 'Ja! Het brood is beschimmeld.', wrong: 'Nee, het brood is vers.' },
            az: { correct: 'Bəli! Çörək kiflidir.', wrong: 'Xeyr, çörək təzədir.' }
        },
        options: [
            { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "taze_ekmek", spokenText: "taze ekmek" },
            { id: 253, word: "ekmek", imageUrl: "/images/253.png", isCorrect: true, audioKey: "kuflu_ekmek", spokenText: "küflü ekmek" }
        ]
    },

    // 2. Elma (Taze vs Çürük)
    { 
        id: 3, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Elma tazedir.', wrong: 'Hayır, elma çürüktür.' },
            en: { correct: 'Yes! The apple is fresh.', wrong: 'No, the apple is rotten.' },
            de: { correct: 'Ja! Der Apfel ist frisch.', wrong: 'Nein, der Apfel ist verfault.' },
            fr: { correct: "Oui ! La pomme est fraîche.", wrong: "Non, la pomme est pourrie." },
            nl: { correct: 'Ja! De appel is vers.', wrong: 'Nee, de appel is rot.' },
            az: { correct: 'Bəli! Alma təzədir.', wrong: 'Xeyr, alma çürükdür.' }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "taze_elma", spokenText: "taze elma" },
            { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: false, audioKey: "curuk_elma", spokenText: "çürük elma" }
        ]
    },
    { 
        id: 4, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Elma çürüktür.', wrong: 'Hayır, elma tazedir.' },
            en: { correct: 'Yes! The apple is rotten.', wrong: 'No, the apple is fresh.' },
            de: { correct: 'Ja! Der Apfel ist verfault.', wrong: 'Nein, der Apfel ist frisch.' },
            fr: { correct: "Oui ! La pomme est pourrie.", wrong: "Non, la pomme est fraîche." },
            nl: { correct: 'Ja! De appel is rot.', wrong: 'Nee, de appel is vers.' },
            az: { correct: 'Bəli! Alma çürükdür.', wrong: 'Xeyr, alma təzədir.' }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "taze_elma", spokenText: "taze elma" },
            { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: true, audioKey: "curuk_elma", spokenText: "çürük elma" }
        ]
    },

    // 3. Muz (Taze vs Bayat/Çürük)
    { 
        id: 5, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Muz tazedir.', wrong: 'Hayır, muz bayattır.' },
            en: { correct: 'Yes! The banana is fresh.', wrong: 'No, the banana is rotten.' },
            de: { correct: 'Ja! Die Banane ist frisch.', wrong: 'Nein, die Banane ist verfault.' },
            fr: { correct: "Oui ! La banane est fraîche.", wrong: "Non, la banane est pourrie." },
            nl: { correct: 'Ja! De banaan is vers.', wrong: 'Nee, de banaan is rot.' },
            az: { correct: 'Bəli! Banan təzədir.', wrong: 'Xeyr, banan xarabdır.' }
        },
        options: [
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "taze_muz", spokenText: "taze muz" },
            { id: 665, word: "muz", imageUrl: "/images/665.png", isCorrect: false, audioKey: "bayat_muz", spokenText: "bayat muz" }
        ]
    },
    { 
        id: 6, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Muz bayattır.', wrong: 'Hayır, muz tazedir.' },
            en: { correct: 'Yes! The banana is rotten.', wrong: 'No, the banana is fresh.' },
            de: { correct: 'Ja! Die Banane ist verfault.', wrong: 'Nein, die Banane ist frisch.' },
            fr: { correct: "Oui ! La banane est pourrie.", wrong: "Non, la banane est fraîche." },
            nl: { correct: 'Ja! De banaan is rot.', wrong: 'Nee, de banaan is vers.' },
            az: { correct: 'Bəli! Banan xarabdır.', wrong: 'Xeyr, banan təzədir.' }
        },
        options: [
            { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "taze_muz", spokenText: "taze muz" },
            { id: 665, word: "muz", imageUrl: "/images/665.png", isCorrect: true, audioKey: "bayat_muz", spokenText: "bayat muz" }
        ]
    },

    // 4. Gül (Taze vs Solmuş)
    { 
        id: 7, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Gül tazedir.', wrong: 'Hayır, gül solmuştur.' },
            en: { correct: 'Yes! The rose is fresh.', wrong: 'No, the rose is wilted.' },
            de: { correct: 'Ja! Die Rose ist frisch.', wrong: 'Nein, die Rose ist verwelkt.' },
            fr: { correct: "Oui ! La rose est fraîche.", wrong: "Non, la rose est fanée." },
            nl: { correct: 'Ja! De roos is vers.', wrong: 'Nee, de roos is verwelkt.' },
            az: { correct: 'Bəli! Qızılgül təzədir.', wrong: 'Xeyr, qızılgül solmuşdur.' }
        },
        options: [
            { id: 309, word: "gül", imageUrl: "/images/309.png", isCorrect: true, audioKey: "taze_gul", spokenText: "taze gül" },
            { id: 664, word: "gül", imageUrl: "/images/664.png", isCorrect: false, audioKey: "solmus_gul", spokenText: "solmuş gül" }
        ]
    },
    { 
        id: 8, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Gül solmuştur.', wrong: 'Hayır, gül tazedir.' },
            en: { correct: 'Yes! The rose is wilted.', wrong: 'No, the rose is fresh.' },
            de: { correct: 'Ja! Die Rose ist verwelkt.', wrong: 'Nein, die Rose ist frisch.' },
            fr: { correct: "Oui ! La rose est fanée.", wrong: "Non, la rose est fraîche." },
            nl: { correct: 'Ja! De roos is verwelkt.', wrong: 'Nee, de roos is vers.' },
            az: { correct: 'Bəli! Qızılgül solmuşdur.', wrong: 'Xeyr, qızılgül təzədir.' }
        },
        options: [
            { id: 309, word: "gül", imageUrl: "/images/309.png", isCorrect: false, audioKey: "taze_gul", spokenText: "taze gül" },
            { id: 664, word: "gül", imageUrl: "/images/664.png", isCorrect: true, audioKey: "solmus_gul", spokenText: "solmuş gül" }
        ]
    },

    // 5. Havuç (Taze vs Bayat)
    { 
        id: 9, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Havuç tazedir.', wrong: 'Hayır, havuç bayattır.' },
            en: { correct: 'Yes! The carrot is fresh.', wrong: 'No, the carrot is stale.' },
            de: { correct: 'Ja! Die Karotte ist frisch.', wrong: 'Nein, die Karotte ist alt.' },
            fr: { correct: "Oui ! La carotte est fraîche.", wrong: "Non, la carotte est vieille." },
            nl: { correct: 'Ja! De wortel is vers.', wrong: 'Nee, de wortel is oud.' },
            az: { correct: 'Bəli! Kök təzədir.', wrong: 'Xeyr, kök bayatdır.' }
        },
        options: [
            { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: true, audioKey: "taze_havuc", spokenText: "taze havuç" },
            { id: 667, word: "havuç", imageUrl: "/images/667.png", isCorrect: false, audioKey: "bayat_havuc", spokenText: "bayat havuç" }
        ]
    },
    { 
        id: 10, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Havuç bayattır.', wrong: 'Hayır, havuç tazedir.' },
            en: { correct: 'Yes! The carrot is stale.', wrong: 'No, the carrot is fresh.' },
            de: { correct: 'Ja! Die Karotte ist alt.', wrong: 'Nein, die Karotte ist frisch.' },
            fr: { correct: "Oui ! La carotte est vieille.", wrong: "Non, la carotte est fraîche." },
            nl: { correct: 'Ja! De wortel is oud.', wrong: 'Nee, de wortel is vers.' },
            az: { correct: 'Bəli! Kök bayatdır.', wrong: 'Xeyr, kök təzədir.' }
        },
        options: [
            { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: false, audioKey: "taze_havuc", spokenText: "taze havuç" },
            { id: 667, word: "havuç", imageUrl: "/images/667.png", isCorrect: true, audioKey: "bayat_havuc", spokenText: "bayat havuç" }
        ]
    },

    // 6. Süt (Taze vs Bozuk)
    { 
        id: 11, 
        question: "Taze olan hangisi?", 
        questionAudioKey: "q_which_is_fresh", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Süt tazedir.', wrong: 'Hayır, süt bozuktur.' },
            en: { correct: 'Yes! The milk is fresh.', wrong: 'No, the milk is spoiled.' },
            de: { correct: 'Ja! Die Milch ist frisch.', wrong: 'Nein, die Milch ist verdorben.' },
            fr: { correct: "Oui ! Le lait est frais.", wrong: "Non, le lait est tourné." },
            nl: { correct: 'Ja! De melk is vers.', wrong: 'Nee, de melk is bedorven.' },
            az: { correct: 'Bəli! Süd təzədir.', wrong: 'Xeyr, süd xarabdır.' }
        },
        options: [
            { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: true, audioKey: "taze_sut", spokenText: "taze süt" },
            { id: 761, word: "süt", imageUrl: "/images/761.png", isCorrect: false, audioKey: "bozuk_sut", spokenText: "bozuk süt" }
        ]
    },
    { 
        id: 12, 
        question: "Bayat olan hangisi?", 
        questionAudioKey: "q_which_is_stale", 
        activityType: ActivityType.TazeBayat, 
        speech: {
            tr: { correct: 'Evet! Süt bozuktur.', wrong: 'Hayır, süt tazedir.' },
            en: { correct: 'Yes! The milk is spoiled.', wrong: 'No, the milk is fresh.' },
            de: { correct: 'Ja! Die Milch ist verdorben.', wrong: 'Nein, die Milch ist frisch.' },
            fr: { correct: "Oui ! Le lait est tourné.", wrong: "Non, le lait est frais." },
            nl: { correct: 'Ja! De melk is bedorven.', wrong: 'Nee, de melk is vers.' },
            az: { correct: 'Bəli! Süd xarabdır.', wrong: 'Xeyr, süd təzədir.' }
        },
        options: [
            { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: false, audioKey: "taze_sut", spokenText: "taze süt" },
            { id: 761, word: "süt", imageUrl: "/images/761.png", isCorrect: true, audioKey: "bozuk_sut", spokenText: "bozuk süt" }
        ]
    },
];