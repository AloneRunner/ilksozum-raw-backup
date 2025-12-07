import { ConceptRound, ActivityType } from '../../../../types';

export const bitterSweetData: ConceptRound[] = [
    // 1. Biber vs Bal
    { 
        id: 27, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter_person", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Biber acıdır.', wrong: 'Hayır, bal tatlıdır.' },
            en: { correct: 'Yes! The pepper is bitter.', wrong: 'No, the honey is sweet.' },
            de: { correct: 'Ja! Der Pfeffer ist bitter.', wrong: 'Nein, der Honig ist süß.' },
            fr: { correct: "Oui ! Le poivre est amer.", wrong: "Non, le miel est doux." },
            nl: { correct: 'Ja! De peper is bitter.', wrong: 'Nee, de honing is zoet.' },
            az: { correct: 'Bəli! Bibər acıdır.', wrong: 'Xeyr, bal şirindir.' }
        },
        options: [
            { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "biber" },
            { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: false, audioKey: "bal", spokenText: "bal" }
        ]
    },
    { 
        id: 28, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Bal tatlıdır.', wrong: 'Hayır, biber acıdır.' },
            en: { correct: 'Yes! The honey is sweet.', wrong: 'No, the pepper is bitter.' },
            de: { correct: 'Ja! Der Honig ist süß.', wrong: 'Nein, der Pfeffer ist bitter.' },
            fr: { correct: "Oui ! Le miel est doux.", wrong: "Non, le poivre est amer." },
            nl: { correct: 'Ja! De honing is zoet.', wrong: 'Nee, de peper is bitter.' },
            az: { correct: 'Bəli! Bal şirindir.', wrong: 'Xeyr, bibər acıdır.' }
        },
        options: [
            { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "biber" },
            { id: 228, word: "bal", imageUrl: "/images/228.png", isCorrect: true, audioKey: "bal", spokenText: "bal" }
        ]
    },

    // 2. Limon vs Lolipop
    { 
        id: 29, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Limon ekşidir.', wrong: 'Hayır, lolipop tatlıdır.' },
            en: { correct: 'Yes! The lemon is sour.', wrong: 'No, the lollipop is sweet.' },
            de: { correct: 'Ja! Die Zitrone ist sauer.', wrong: 'Nein, der Lutscher ist süß.' },
            fr: { correct: "Oui ! Le citron est acide.", wrong: "Non, la sucette est douce." },
            nl: { correct: 'Ja! De citroen is zuur.', wrong: 'Nee, de lolly is zoet.' },
            az: { correct: 'Bəli! Limon turşdur.', wrong: 'Xeyr, lolipop şirindir.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "limon" },
            { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: false, audioKey: "lolipop", spokenText: "lolipop" }
        ]
    },
    { 
        id: 30, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Lolipop tatlıdır.', wrong: 'Hayır, limon ekşidir.' },
            en: { correct: 'Yes! The lollipop is sweet.', wrong: 'No, the lemon is sour.' },
            de: { correct: 'Ja! Der Lutscher ist süß.', wrong: 'Nein, die Zitrone ist sauer.' },
            fr: { correct: "Oui ! La sucette est douce.", wrong: "Non, le citron est acide." },
            nl: { correct: 'Ja! De lolly is zoet.', wrong: 'Nee, de citroen is zuur.' },
            az: { correct: 'Bəli! Lolipop şirindir.', wrong: 'Xeyr, limon turşdur.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "limon" },
            { id: 240, word: "lolipop", imageUrl: "/images/240.png", isCorrect: true, audioKey: "lolipop", spokenText: "lolipop" }
        ]
    },

    // 3. Greyfurt vs Pasta
    { 
        id: 31, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Greyfurt ekşidir.', wrong: 'Hayır, pasta tatlıdır.' },
            en: { correct: 'Yes! The grapefruit is sour.', wrong: 'No, the cake is sweet.' },
            de: { correct: 'Ja! Die Grapefruit ist sauer.', wrong: 'Nein, der Kuchen ist süß.' },
            fr: { correct: "Oui ! Le pamplemousse est acide.", wrong: "Non, le gâteau est doux." },
            nl: { correct: 'Ja! De grapefruit is zuur.', wrong: 'Nee, de taart is zoet.' },
            az: { correct: 'Bəli! Qreyfurt turşdur.', wrong: 'Xeyr, tort şirindir.' }
        },
        options: [
            { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: true, audioKey: "greyfurt", spokenText: "greyfurt" },
            { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: false, audioKey: "pasta", spokenText: "pasta" }
        ]
    },
    { 
        id: 32, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Pasta tatlıdır.', wrong: 'Hayır, greyfurt ekşidir.' },
            en: { correct: 'Yes! The cake is sweet.', wrong: 'No, the grapefruit is sour.' },
            de: { correct: 'Ja! Der Kuchen ist süß.', wrong: 'Nein, die Grapefruit ist sauer.' },
            fr: { correct: "Oui ! Le gâteau est doux.", wrong: "Non, le pamplemousse est acide." },
            nl: { correct: 'Ja! De taart is zoet.', wrong: 'Nee, de grapefruit is zuur.' },
            az: { correct: 'Bəli! Tort şirindir.', wrong: 'Xeyr, qreyfurt turşdur.' }
        },
        options: [
            { id: 637, word: "greyfurt", imageUrl: "/images/637.png", isCorrect: false, audioKey: "greyfurt", spokenText: "greyfurt" },
            { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: true, audioKey: "pasta", spokenText: "pasta" }
        ]
    },

    // 4. Vişne vs Kiraz
    { 
        id: 33, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Vişne ekşidir.', wrong: 'Hayır, kiraz tatlıdır.' },
            en: { correct: 'Yes! The sour cherry is sour.', wrong: 'No, the sweet cherry is sweet.' },
            de: { correct: 'Ja! Die Sauerkirsche ist sauer.', wrong: 'Nein, die Süßkirsche ist süß.' },
            fr: { correct: "Oui ! La griotte est acide.", wrong: "Non, la cerise est douce." },
            nl: { correct: 'Ja! De zure kers is zuur.', wrong: 'Nee, de zoete kers is zoet.' },
            az: { correct: 'Bəli! Vişnə turşdur.', wrong: 'Xeyr, gilas şirindir.' }
        },
        options: [
            { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: true, audioKey: "eksi_visne", spokenText: "vişne" },
            { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: false, audioKey: "tatli_kiraz", spokenText: "kiraz" }
        ]
    },
    { 
        id: 34, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Kiraz tatlıdır.', wrong: 'Hayır, vişne ekşidir.' },
            en: { correct: 'Yes! The sweet cherry is sweet.', wrong: 'No, the sour cherry is sour.' },
            de: { correct: 'Ja! Die Süßkirsche ist süß.', wrong: 'Nein, die Sauerkirsche ist sauer.' },
            fr: { correct: "Oui ! La cerise est douce.", wrong: "Non, la griotte est acide." },
            nl: { correct: 'Ja! De zoete kers is zoet.', wrong: 'Nee, de zure kers is zuur.' },
            az: { correct: 'Bəli! Gilas şirindir.', wrong: 'Xeyr, vişnə turşdur.' }
        },
        options: [
            { id: 294, word: "vişne", imageUrl: "/images/294.png", isCorrect: false, audioKey: "eksi_visne", spokenText: "vişne" },
            { id: 278, word: "kiraz", imageUrl: "/images/278.png", isCorrect: true, audioKey: "tatli_kiraz", spokenText: "kiraz" }
        ]
    },

    // 5. Kahve vs Milkshake
    { 
        id: 35, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Kahve acıdır.', wrong: 'Hayır, milkshake tatlıdır.' },
            en: { correct: 'Yes! The coffee is bitter.', wrong: 'No, the milkshake is sweet.' },
            de: { correct: 'Ja! Der Kaffee ist bitter.', wrong: 'Nein, der Milchshake ist süß.' },
            fr: { correct: "Oui ! Le café est amer.", wrong: "Non, le milk-shake est doux." },
            nl: { correct: 'Ja! De koffie is bitter.', wrong: 'Nee, de milkshake is zoet.' },
            az: { correct: 'Bəli! Qəhvə acıdır.', wrong: 'Xeyr, kokteyl şirindir.' }
        },
        options: [
            { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "kahve" },
            { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: false, audioKey: "milkshake", spokenText: "milkshake" }
        ]
    },
    { 
        id: 36, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Milkshake tatlıdır.', wrong: 'Hayır, kahve acıdır.' },
            en: { correct: 'Yes! The milkshake is sweet.', wrong: 'No, the coffee is bitter.' },
            de: { correct: 'Ja! Der Milchshake ist süß.', wrong: 'Nein, der Kaffee ist bitter.' },
            fr: { correct: "Oui ! Le milk-shake est doux.", wrong: "Non, le café est amer." },
            nl: { correct: 'Ja! De milkshake is zoet.', wrong: 'Nee, de koffie is bitter.' },
            az: { correct: 'Bəli! Kokteyl şirindir.', wrong: 'Xeyr, qəhvə acıdır.' }
        },
        options: [
            { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "kahve" },
            { id: 645, word: "milkshake", imageUrl: "/images/645.png", isCorrect: true, audioKey: "milkshake", spokenText: "milkshake" }
        ]
    },

    // 6. Limon vs Çikolata
    { 
        id: 37, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Limon ekşidir.', wrong: 'Hayır, çikolata tatlıdır.' },
            en: { correct: 'Yes! The lemon is sour.', wrong: 'No, the chocolate is sweet.' },
            de: { correct: 'Ja! Die Zitrone ist sauer.', wrong: 'Nein, die Schokolade ist süß.' },
            fr: { correct: "Oui ! Le citron est acide.", wrong: "Non, le chocolat est doux." },
            nl: { correct: 'Ja! De citroen is zuur.', wrong: 'Nee, de chocolade is zoet.' },
            az: { correct: 'Bəli! Limon turşdur.', wrong: 'Xeyr, şokolad şirindir.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "limon" },
            { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: false, audioKey: "cikolata", spokenText: "çikolata" }
        ]
    },
    { 
        id: 38, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Çikolata tatlıdır.', wrong: 'Hayır, limon ekşidir.' },
            en: { correct: 'Yes! The chocolate is sweet.', wrong: 'No, the lemon is sour.' },
            de: { correct: 'Ja! Die Schokolade ist süß.', wrong: 'Nein, die Zitrone ist sauer.' },
            fr: { correct: "Oui ! Le chocolat est doux.", wrong: "Non, le citron est acide." },
            nl: { correct: 'Ja! De chocolade is zoet.', wrong: 'Nee, de citroen is zuur.' },
            az: { correct: 'Bəli! Şokolad şirindir.', wrong: 'Xeyr, limon turşdur.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "limon" },
            { id: 297, word: "çikolata", imageUrl: "/images/297.png", isCorrect: true, audioKey: "cikolata", spokenText: "çikolata" }
        ]
    },

    // 7. Sirke vs Reçel
    { 
        id: 39, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Sirke ekşidir.', wrong: 'Hayır, reçel tatlıdır.' },
            en: { correct: 'Yes! The vinegar is sour.', wrong: 'No, the jam is sweet.' },
            de: { correct: 'Ja! Der Essig ist sauer.', wrong: 'Nein, die Marmelade ist süß.' },
            fr: { correct: "Oui ! Le vinaigre est acide.", wrong: "Non, la confiture est douce." },
            nl: { correct: 'Ja! De azijn is zuur.', wrong: 'Nee, de jam is zoet.' },
            az: { correct: 'Bəli! Sirkə turşdur.', wrong: 'Xeyr, mürəbbə şirindir.' }
        },
        options: [
            { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: true, audioKey: "sirke", spokenText: "sirke" },
            { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: false, audioKey: "recel", spokenText: "reçel" }
        ]
    },
    { 
        id: 40, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Reçel tatlıdır.', wrong: 'Hayır, sirke ekşidir.' },
            en: { correct: 'Yes! The jam is sweet.', wrong: 'No, the vinegar is sour.' },
            de: { correct: 'Ja! Die Marmelade ist süß.', wrong: 'Nein, der Essig ist sauer.' },
            fr: { correct: "Oui ! La confiture est douce.", wrong: "Non, le vinaigre est acide." },
            nl: { correct: 'Ja! De jam is zoet.', wrong: 'Nee, de azijn is zuur.' },
            az: { correct: 'Bəli! Mürəbbə şirindir.', wrong: 'Xeyr, sirkə turşdur.' }
        },
        options: [
            { id: 638, word: "sirke", imageUrl: "/images/638.png", isCorrect: false, audioKey: "sirke", spokenText: "sirke" },
            { id: 639, word: "reçel", imageUrl: "/images/639.png", isCorrect: true, audioKey: "recel", spokenText: "reçel" }
        ]
    },

    // 8. Soğan vs Çilek
    { 
        id: 41, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Soğan acıdır.', wrong: 'Hayır, çilek tatlıdır.' },
            en: { correct: 'Yes! The onion is bitter.', wrong: 'No, the strawberry is sweet.' },
            de: { correct: 'Ja! Die Zwiebel ist bitter.', wrong: 'Nein, die Erdbeere ist süß.' },
            fr: { correct: "Oui ! L'oignon est amer.", wrong: "Non, la fraise est douce." },
            nl: { correct: 'Ja! De ui is bitter.', wrong: 'Nee, de aardbei is zoet.' },
            az: { correct: 'Bəli! Soğan acıdır.', wrong: 'Xeyr, çiyələk şirindir.' }
        },
        options: [
            { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: true, audioKey: "sogan", spokenText: "soğan" },
            { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "cilek", spokenText: "çilek" }
        ]
    },
    { 
        id: 42, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Çilek tatlıdır.', wrong: 'Hayır, soğan acıdır.' },
            en: { correct: 'Yes! The strawberry is sweet.', wrong: 'No, the onion is bitter.' },
            de: { correct: 'Ja! Die Erdbeere ist süß.', wrong: 'Nein, die Zwiebel ist bitter.' },
            fr: { correct: "Oui ! La fraise est douce.", wrong: "Non, l'oignon est amer." },
            nl: { correct: 'Ja! De aardbei is zoet.', wrong: 'Nee, de ui is bitter.' },
            az: { correct: 'Bəli! Çiyələk şirindir.', wrong: 'Xeyr, soğan acıdır.' }
        },
        options: [
            { id: 75, word: "soğan", imageUrl: "/images/75.png", isCorrect: false, audioKey: "sogan", spokenText: "soğan" },
            { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "cilek", spokenText: "çilek" }
        ]
    },

    // 9. Kahve vs Bisküvi
    { 
        id: 43, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Kahve acıdır.', wrong: 'Hayır, bisküvi tatlıdır.' },
            en: { correct: 'Yes! The coffee is bitter.', wrong: 'No, the biscuit is sweet.' },
            de: { correct: 'Ja! Der Kaffee ist bitter.', wrong: 'Nein, der Keks ist süß.' },
            fr: { correct: "Oui ! Le café est amer.", wrong: "Non, le biscuit est doux." },
            nl: { correct: 'Ja! De koffie is bitter.', wrong: 'Nee, het koekje is zoet.' },
            az: { correct: 'Bəli! Qəhvə acıdır.', wrong: 'Xeyr, peçenye şirindir.' }
        },
        options: [
            { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: true, audioKey: "kahve", spokenText: "kahve" },
            { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: false, audioKey: "biskuvi", spokenText: "bisküvi" }
        ]
    },
    { 
        id: 44, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Bisküvi tatlıdır.', wrong: 'Hayır, kahve acıdır.' },
            en: { correct: 'Yes! The biscuit is sweet.', wrong: 'No, the coffee is bitter.' },
            de: { correct: 'Ja! Der Keks ist süß.', wrong: 'Nein, der Kaffee ist bitter.' },
            fr: { correct: "Oui ! Le biscuit est doux.", wrong: "Non, le café est amer." },
            nl: { correct: 'Ja! Het koekje is zoet.', wrong: 'Nee, de koffie is bitter.' },
            az: { correct: 'Bəli! Peçenye şirindir.', wrong: 'Xeyr, qəhvə acıdır.' }
        },
        options: [
            { id: 635, word: "kahve", imageUrl: "/images/635.png", isCorrect: false, audioKey: "kahve", spokenText: "kahve" },
            { id: 330, word: "bisküvi", imageUrl: "/images/330.png", isCorrect: true, audioKey: "biskuvi", spokenText: "bisküvi" }
        ]
    },

    // 10. Biber vs Dondurma
    { 
        id: 45, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Biber acıdır.', wrong: 'Hayır, dondurma tatlıdır.' },
            en: { correct: 'Yes! The pepper is bitter.', wrong: 'No, the ice cream is sweet.' },
            de: { correct: 'Ja! Der Pfeffer ist bitter.', wrong: 'Nein, das Eis ist süß.' },
            fr: { correct: "Oui ! Le poivre est amer.", wrong: "Non, la glace est douce." },
            nl: { correct: 'Ja! De peper is bitter.', wrong: 'Nee, het ijs is zoet.' },
            az: { correct: 'Bəli! Bibər acıdır.', wrong: 'Xeyr, dondurma şirindir.' }
        },
        options: [
            { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: true, audioKey: "biber", spokenText: "biber" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },
    { 
        id: 46, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Dondurma tatlıdır.', wrong: 'Hayır, biber acıdır.' },
            en: { correct: 'Yes! The ice cream is sweet.', wrong: 'No, the pepper is bitter.' },
            de: { correct: 'Ja! Das Eis ist süß.', wrong: 'Nein, der Pfeffer ist bitter.' },
            fr: { correct: "Oui ! La glace est douce.", wrong: "Non, le poivre est amer." },
            nl: { correct: 'Ja! Het ijs is zoet.', wrong: 'Nee, de peper is bitter.' },
            az: { correct: 'Bəli! Dondurma şirindir.', wrong: 'Xeyr, bibər acıdır.' }
        },
        options: [
            { id: 227, word: "biber", imageUrl: "/images/227.png", isCorrect: false, audioKey: "biber", spokenText: "biber" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },

    // 11. Limon vs Elma
    { 
        id: 47, 
        question: "Ekşi olan hangisi?", 
        questionAudioKey: "q_which_is_sour", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Limon ekşidir.', wrong: 'Hayır, elma tatlıdır.' },
            en: { correct: 'Yes! The lemon is sour.', wrong: 'No, the apple is sweet.' },
            de: { correct: 'Ja! Die Zitrone ist sauer.', wrong: 'Nein, der Apfel ist süß.' },
            fr: { correct: "Oui ! Le citron est acide.", wrong: "Non, la pomme est douce." },
            nl: { correct: 'Ja! De citroen is zuur.', wrong: 'Nee, de appel is zoet.' },
            az: { correct: 'Bəli! Limon turşdur.', wrong: 'Xeyr, alma şirindir.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: true, audioKey: "limon", spokenText: "limon" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" }
        ]
    },
    { 
        id: 48, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Elma tatlıdır.', wrong: 'Hayır, limon ekşidir.' },
            en: { correct: 'Yes! The apple is sweet.', wrong: 'No, the lemon is sour.' },
            de: { correct: 'Ja! Der Apfel ist süß.', wrong: 'Nein, die Zitrone ist sauer.' },
            fr: { correct: "Oui ! La pomme est douce.", wrong: "Non, le citron est acide." },
            nl: { correct: 'Ja! De appel is zoet.', wrong: 'Nee, de citroen is zuur.' },
            az: { correct: 'Bəli! Alma şirindir.', wrong: 'Xeyr, limon turşdur.' }
        },
        options: [
            { id: 55, word: "limon", imageUrl: "/images/55.png", isCorrect: false, audioKey: "limon", spokenText: "limon" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" }
        ]
    },

    // 12. Zencefil vs Jelibon
    { 
        id: 49, 
        question: "Acı olan hangisi?", 
        questionAudioKey: "q_which_is_bitter", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Zencefil acıdır.', wrong: 'Hayır, jelibon tatlıdır.' },
            en: { correct: 'Yes! The ginger is bitter.', wrong: 'No, the jelly bean is sweet.' },
            de: { correct: 'Ja! Der Ingwer ist bitter.', wrong: 'Nein, das Gummibärchen ist süß.' },
            fr: { correct: "Oui ! Le gingembre est amer.", wrong: "Non, le bonbon est doux." },
            nl: { correct: 'Ja! De gember is bitter.', wrong: 'Nee, het snoepje is zoet.' },
            az: { correct: 'Bəli! Zəncəfil acıdır.', wrong: 'Xeyr, jelibon şirindir.' }
        },
        options: [
            { id: 640, word: "zencefil", imageUrl: "/images/640.png", isCorrect: true, audioKey: "zencefil", spokenText: "zencefil" },
            { id: 806, word: "jelibon", imageUrl: "/images/806.png", isCorrect: false, audioKey: "jelibon", spokenText: "jelibon" }
        ]
    },
    { 
        id: 50, 
        question: "Tatlı olan hangisi?", 
        questionAudioKey: "q_which_is_sweet", 
        activityType: ActivityType.BitterSweet, 
        speech: {
            tr: { correct: 'Evet! Jelibon tatlıdır.', wrong: 'Hayır, zencefil acıdır.' },
            en: { correct: 'Yes! The jelly bean is sweet.', wrong: 'No, the ginger is bitter.' },
            de: { correct: 'Ja! Das Gummibärchen ist süß.', wrong: 'Nein, der Ingwer ist bitter.' },
            fr: { correct: "Oui ! Le bonbon est doux.", wrong: "Non, le gingembre est amer." },
            nl: { correct: 'Ja! Het snoepje is zoet.', wrong: 'Nee, de gember is bitter.' },
            az: { correct: 'Bəli! Jelibon şirindir.', wrong: 'Xeyr, zəncəfil acıdır.' }
        },
        options: [
            { id: 640, word: "zencefil", imageUrl: "/images/640.png", isCorrect: false, audioKey: "zencefil", spokenText: "zencefil" },
            { id: 806, word: "jelibon", imageUrl: "/images/806.png", isCorrect: true, audioKey: "jelibon", spokenText: "jelibon" }
        ]
    },
];