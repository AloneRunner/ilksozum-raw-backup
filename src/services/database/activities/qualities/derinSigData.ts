import { ConceptRound, ActivityType } from '../../../../types';

export const derinSigData: ConceptRound[] = [
    // 1. Deniz vs Göl
    { 
        id: 95, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Deniz derindir.', wrong: 'Hayır, göl sığdır.' },
            en: { correct: 'Yes! The sea is deep.', wrong: 'No, the lake is shallow.' },
            de: { correct: 'Ja! Das Meer ist tief.', wrong: 'Nein, der See ist flach.' },
            fr: { correct: "Oui ! La mer est profonde.", wrong: "Non, le lac est peu profond." },
            nl: { correct: 'Ja! De zee is diep.', wrong: 'Nee, het meer is ondiep.' },
            az: { correct: 'Bəli! Dəniz dərindir.', wrong: 'Xeyr, göl dayazdır.' }
        },
        options: [
            { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "deniz" },
            { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: false, audioKey: "gol", spokenText: "göl" }
        ]
    },
    { 
        id: 96, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Göl sığdır.', wrong: 'Hayır, deniz derindir.' },
            en: { correct: 'Yes! The lake is shallow.', wrong: 'No, the sea is deep.' },
            de: { correct: 'Ja! Der See ist flach.', wrong: 'Nein, das Meer ist tief.' },
            fr: { correct: "Oui ! Le lac est peu profond.", wrong: "Non, la mer est profonde." },
            nl: { correct: 'Ja! Het meer is ondiep.', wrong: 'Nee, de zee is diep.' },
            az: { correct: 'Bəli! Göl dayazdır.', wrong: 'Xeyr, dəniz dərindir.' }
        },
        options: [
            { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "deniz" },
            { id: 342, word: "göl", imageUrl: "/images/342.png", isCorrect: true, audioKey: "gol", spokenText: "göl" }
        ]
    },

    // 2. Kuyu vs Su Birikintisi
    { 
        id: 97, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Kuyu derindir.', wrong: 'Hayır, su birikintisi sığdır.' },
            en: { correct: 'Yes! The well is deep.', wrong: 'No, the puddle is shallow.' },
            de: { correct: 'Ja! Der Brunnen ist tief.', wrong: 'Nein, die Pfütze ist flach.' },
            fr: { correct: "Oui ! Le puits est profond.", wrong: "Non, la flaque d'eau est peu profonde." },
            nl: { correct: 'Ja! De put is diep.', wrong: 'Nee, de plas is ondiep.' },
            az: { correct: 'Bəli! Quyu dərindir.', wrong: 'Xeyr, gölməçə dayazdır.' }
        },
        options: [
            { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: true, audioKey: "kuyu", spokenText: "kuyu" },
            { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: false, audioKey: "su_birikintisi", spokenText: "su birikintisi" }
        ]
    },
    { 
        id: 98, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Su birikintisi sığdır.', wrong: 'Hayır, kuyu derindir.' },
            en: { correct: 'Yes! The puddle is shallow.', wrong: 'No, the well is deep.' },
            de: { correct: 'Ja! Die Pfütze ist flach.', wrong: 'Nein, der Brunnen ist tief.' },
            fr: { correct: "Oui ! La flaque d'eau est peu profonde.", wrong: "Non, le puits est profond." },
            nl: { correct: 'Ja! De plas is ondiep.', wrong: 'Nee, de put is diep.' },
            az: { correct: 'Bəli! Gölməçə dayazdır.', wrong: 'Xeyr, quyu dərindir.' }
        },
        options: [
            { id: 698, word: "kuyu", imageUrl: "/images/698.png", isCorrect: false, audioKey: "kuyu", spokenText: "kuyu" },
            { id: 699, word: "su birikintisi", imageUrl: "/images/699.png", isCorrect: true, audioKey: "su_birikintisi", spokenText: "su birikintisi" }
        ]
    },

    // 3. Kase vs Tabak
    { 
        id: 99, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Kase derindir.', wrong: 'Hayır, tabak sığdır.' },
            en: { correct: 'Yes! The bowl is deep.', wrong: 'No, the plate is shallow.' },
            de: { correct: 'Ja! Die Schüssel ist tief.', wrong: 'Nein, der Teller ist flach.' },
            fr: { correct: "Oui ! Le bol est profond.", wrong: "Non, l'assiette est peu profonde." },
            nl: { correct: 'Ja! De kom is diep.', wrong: 'Nee, het bord is ondiep.' },
            az: { correct: 'Bəli! Kasa dərindir.', wrong: 'Xeyr, boşqab dayazdır.' }
        },
        options: [
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "kase" },
            { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: false, audioKey: "tabak", spokenText: "tabak" }
        ]
    },
    { 
        id: 100, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Tabak sığdır.', wrong: 'Hayır, kase derindir.' },
            en: { correct: 'Yes! The plate is shallow.', wrong: 'No, the bowl is deep.' },
            de: { correct: 'Ja! Der Teller ist flach.', wrong: 'Nein, die Schüssel ist tief.' },
            fr: { correct: "Oui ! L'assiette est peu profonde.", wrong: "Non, le bol est profond." },
            nl: { correct: 'Ja! Het bord is ondiep.', wrong: 'Nee, de kom is diep.' },
            az: { correct: 'Bəli! Boşqab dayazdır.', wrong: 'Xeyr, kasa dərindir.' }
        },
        options: [
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "kase" },
            { id: 153, word: "tabak", imageUrl: "/images/153.png", isCorrect: true, audioKey: "tabak", spokenText: "tabak" }
        ]
    },

    // 4. Tencere vs Tava
    { 
        id: 101, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Tencere derindir.', wrong: 'Hayır, tava sığdır.' },
            en: { correct: 'Yes! The pot is deep.', wrong: 'No, the pan is shallow.' },
            de: { correct: 'Ja! Der Topf ist tief.', wrong: 'Nein, die Pfanne ist flach.' },
            fr: { correct: "Oui ! La casserole est profonde.", wrong: "Non, la poêle est peu profonde." },
            nl: { correct: 'Ja! De pan is diep.', wrong: 'Nee, de koekenpan is ondiep.' },
            az: { correct: 'Bəli! Qazan dərindir.', wrong: 'Xeyr, tava dayazdır.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "tencere" },
            { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: false, audioKey: "tava", spokenText: "tava" }
        ]
    },
    { 
        id: 102, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Tava sığdır.', wrong: 'Hayır, tencere derindir.' },
            en: { correct: 'Yes! The pan is shallow.', wrong: 'No, the pot is deep.' },
            de: { correct: 'Ja! Die Pfanne ist flach.', wrong: 'Nein, der Topf ist tief.' },
            fr: { correct: "Oui ! La poêle est peu profonde.", wrong: "Non, la casserole est profonde." },
            nl: { correct: 'Ja! De koekenpan is ondiep.', wrong: 'Nee, de pan is diep.' },
            az: { correct: 'Bəli! Tava dayazdır.', wrong: 'Xeyr, qazan dərindir.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "tencere" },
            { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: true, audioKey: "tava", spokenText: "tava" }
        ]
    },

    // 5. Derin Kutu vs Sığ Kutu
    { 
        id: 103, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Bu kutu derindir.', wrong: 'Hayır, bu kutu sığdır.' },
            en: { correct: 'Yes! This box is deep.', wrong: 'No, this box is shallow.' },
            de: { correct: 'Ja! Diese Schachtel ist tief.', wrong: 'Nein, diese Schachtel ist flach.' },
            fr: { correct: "Oui ! Cette boîte est profonde.", wrong: "Non, cette boîte est peu profonde." },
            nl: { correct: 'Ja! Deze doos is diep.', wrong: 'Nee, deze doos is ondiep.' },
            az: { correct: 'Bəli! Bu qutu dərindir.', wrong: 'Xeyr, bu qutu dayazdır.' }
        },
        options: [
            { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" },
            { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" }
        ]
    },
    { 
        id: 104, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Bu kutu sığdır.', wrong: 'Hayır, bu kutu derindir.' },
            en: { correct: 'Yes! This box is shallow.', wrong: 'No, this box is deep.' },
            de: { correct: 'Ja! Diese Schachtel ist flach.', wrong: 'Nein, diese Schachtel ist tief.' },
            fr: { correct: "Oui ! Cette boîte est peu profonde.", wrong: "Non, cette boîte est profonde." },
            nl: { correct: 'Ja! Deze doos is ondiep.', wrong: 'Nee, deze doos is diep.' },
            az: { correct: 'Bəli! Bu qutu dayazdır.', wrong: 'Xeyr, bu qutu dərindir.' }
        },
        options: [
            { id: 724, word: "kutu", imageUrl: "/images/724.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" },
            { id: 723, word: "kutu", imageUrl: "/images/723.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" }
        ]
    },

    // 6. Derin Sepet vs Sığ Tepsi
    { 
        id: 105, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Sepet derindir.', wrong: 'Hayır, tepsi sığdır.' },
            en: { correct: 'Yes! The basket is deep.', wrong: 'No, the tray is shallow.' },
            de: { correct: 'Ja! Der Korb ist tief.', wrong: 'Nein, das Tablett ist flach.' },
            fr: { correct: "Oui ! Le panier est profond.", wrong: "Non, le plateau est peu profond." },
            nl: { correct: 'Ja! De mand is diep.', wrong: 'Nee, het dienblad is ondiep.' },
            az: { correct: 'Bəli! Səbət dərindir.', wrong: 'Xeyr, sini dayazdır.' }
        },
        options: [
            { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "sepet" },
            { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: false, audioKey: "yemek_tepsisi", spokenText: "yemek tepsisi" }
        ]
    },
    { 
        id: 106, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Tepsi sığdır.', wrong: 'Hayır, sepet derindir.' },
            en: { correct: 'Yes! The tray is shallow.', wrong: 'No, the basket is deep.' },
            de: { correct: 'Ja! Das Tablett ist flach.', wrong: 'Nein, der Korb ist tief.' },
            fr: { correct: "Oui ! Le plateau est peu profond.", wrong: "Non, le panier est profond." },
            nl: { correct: 'Ja! Het dienblad is ondiep.', wrong: 'Nee, de mand is diep.' },
            az: { correct: 'Bəli! Sini dayazdır.', wrong: 'Xeyr, səbət dərindir.' }
        },
        options: [
            { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "sepet" },
            { id: 730, word: "yemek tepsisi", imageUrl: "/images/730.png", isCorrect: true, audioKey: "yemek_tepsisi", spokenText: "yemek tepsisi" }
        ]
    },

    // 7. Sığ Çocuk Havuzu vs Derin Deniz
    { 
        id: 107, 
        question: "Sığ olan hangisi?", 
        questionAudioKey: "q_which_is_shallow", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Çocuk havuzu sığdır.', wrong: 'Hayır, deniz derindir.' },
            en: { correct: 'Yes! The kiddie pool is shallow.', wrong: 'No, the sea is deep.' },
            de: { correct: 'Ja! Das Planschbecken ist flach.', wrong: 'Nein, das Meer ist tief.' },
            fr: { correct: "Oui ! La pataugeoire est peu profonde.", wrong: "Non, la mer est profonde." },
            nl: { correct: 'Ja! Het kinderbadje is ondiep.', wrong: 'Nee, de zee is diep.' },
            az: { correct: 'Bəli! Uşaq hovuzu dayazdır.', wrong: 'Xeyr, dəniz dərindir.' }
        },
        options: [
            { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: false, audioKey: "deniz", spokenText: "deniz" },
            { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: true, audioKey: "cocuk_havuzu", spokenText: "çocuk havuzu" }
        ]
    },
    { 
        id: 108, 
        question: "Derin olan hangisi?", 
        questionAudioKey: "q_which_is_deep", 
        activityType: ActivityType.DerinSig, 
        speech: {
            tr: { correct: 'Evet! Deniz derindir.', wrong: 'Hayır, çocuk havuzu sığdır.' },
            en: { correct: 'Yes! The sea is deep.', wrong: 'No, the kiddie pool is shallow.' },
            de: { correct: 'Ja! Das Meer ist tief.', wrong: 'Nein, das Planschbecken ist flach.' },
            fr: { correct: "Oui ! La mer est profonde.", wrong: "Non, la pataugeoire est peu profonde." },
            nl: { correct: 'Ja! De zee is diep.', wrong: 'Nee, het kinderbadje is ondiep.' },
            az: { correct: 'Bəli! Dəniz dərindir.', wrong: 'Xeyr, uşaq hovuzu dayazdır.' }
        },
        options: [
            { id: 225, word: "deniz", imageUrl: "/images/225.png", isCorrect: true, audioKey: "deniz", spokenText: "deniz" },
            { id: 471, word: "çocuk havuzu", imageUrl: "/images/471.png", isCorrect: false, audioKey: "cocuk_havuzu", spokenText: "çocuk havuzu" }
        ]
    },
];