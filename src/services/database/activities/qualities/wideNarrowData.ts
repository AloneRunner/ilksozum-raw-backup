import { ConceptRound, ActivityType } from '../../../../types';

export const wideNarrowData: ConceptRound[] = [
    // 1. Koltuk (Geniş vs Dar)
    { 
        id: 1, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Koltuk geniştir.', wrong: 'Hayır, koltuk dardır.' },
            en: { correct: 'Yes! The armchair is wide.', wrong: 'No, the armchair is narrow.' },
            de: { correct: 'Ja! Der Sessel ist breit.', wrong: 'Nein, der Sessel ist schmal.' },
            fr: { correct: "Oui ! Le fauteuil est large.", wrong: "Non, le fauteuil est étroit." },
            nl: { correct: 'Ja! De fauteuil is breed.', wrong: 'Nee, de fauteuil is smal.' },
            az: { correct: 'Bəli! Kreslo genişdir.', wrong: 'Xeyr, kreslo dardır.' }
        },
        options: [
            { id: 549, word: "koltuk", imageUrl: "/images/549.png", isCorrect: true, audioKey: "koltuk", spokenText: "koltuk" },
            { id: 548, word: "koltuk", imageUrl: "/images/548.png", isCorrect: false, audioKey: "koltuk", spokenText: "koltuk" }
        ]
    },
    { 
        id: 2, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Koltuk dardır.', wrong: 'Hayır, koltuk geniştir.' },
            en: { correct: 'Yes! The armchair is narrow.', wrong: 'No, the armchair is wide.' },
            de: { correct: 'Ja! Der Sessel ist schmal.', wrong: 'Nein, der Sessel ist breit.' },
            fr: { correct: "Oui ! Le fauteuil est étroit.", wrong: "Non, le fauteuil est large." },
            nl: { correct: 'Ja! De fauteuil is smal.', wrong: 'Nee, de fauteuil is breed.' },
            az: { correct: 'Bəli! Kreslo dardır.', wrong: 'Xeyr, kreslo genişdir.' }
        },
        options: [
            { id: 549, word: "koltuk", imageUrl: "/images/549.png", isCorrect: false, audioKey: "koltuk", spokenText: "koltuk" },
            { id: 548, word: "koltuk", imageUrl: "/images/548.png", isCorrect: true, audioKey: "koltuk", spokenText: "koltuk" }
        ]
    },

    // 3. Yatak (Geniş vs Dar)
    { 
        id: 3, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Yatak geniştir.', wrong: 'Hayır, yatak dardır.' },
            en: { correct: 'Yes! The bed is wide.', wrong: 'No, the bed is narrow.' },
            de: { correct: 'Ja! Das Bett ist breit.', wrong: 'Nein, das Bett ist schmal.' },
            fr: { correct: "Oui ! Le lit est large.", wrong: "Non, le lit est étroit." },
            nl: { correct: 'Ja! Het bed is breed.', wrong: 'Nee, het bed is smal.' },
            az: { correct: 'Bəli! Yataq genişdir.', wrong: 'Xeyr, yataq dardır.' }
        },
        options: [
            { id: 532, word: "yatak", imageUrl: "/images/532.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" },
            { id: 531, word: "yatak", imageUrl: "/images/531.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" }
        ]
    },
    { 
        id: 4, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Yatak dardır.', wrong: 'Hayır, yatak geniştir.' },
            en: { correct: 'Yes! The bed is narrow.', wrong: 'No, the bed is wide.' },
            de: { correct: 'Ja! Das Bett ist schmal.', wrong: 'Nein, das Bett ist breit.' },
            fr: { correct: "Oui ! Le lit est étroit.", wrong: "Non, le lit est large." },
            nl: { correct: 'Ja! Het bed is smal.', wrong: 'Nee, het bed is breed.' },
            az: { correct: 'Bəli! Yataq dardır.', wrong: 'Xeyr, yataq genişdir.' }
        },
        options: [
            { id: 532, word: "yatak", imageUrl: "/images/532.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" },
            { id: 531, word: "yatak", imageUrl: "/images/531.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" }
        ]
    },

    // 5. Nehir vs Dere
    { 
        id: 5, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Nehir geniştir.', wrong: 'Hayır, dere dardır.' },
            en: { correct: 'Yes! The river is wide.', wrong: 'No, the creek is narrow.' },
            de: { correct: 'Ja! Der Fluss ist breit.', wrong: 'Nein, der Bach ist schmal.' },
            fr: { correct: "Oui ! La rivière est large.", wrong: "Non, le ruisseau est étroit." },
            nl: { correct: 'Ja! De rivier is breed.', wrong: 'Nee, de beek is smal.' },
            az: { correct: 'Bəli! Çay genişdir.', wrong: 'Xeyr, dərə dardır.' }
        },
        options: [
            { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: true, audioKey: "nehir", spokenText: "nehir" },
            { id: 567, word: "dere", imageUrl: "/images/567.png", isCorrect: false, audioKey: "dere", spokenText: "dere" }
        ]
    },
    { 
        id: 6, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Dere dardır.', wrong: 'Hayır, nehir geniştir.' },
            en: { correct: 'Yes! The creek is narrow.', wrong: 'No, the river is wide.' },
            de: { correct: 'Ja! Der Bach ist schmal.', wrong: 'Nein, der Fluss ist breit.' },
            fr: { correct: "Oui ! Le ruisseau est étroit.", wrong: "Non, la rivière est large." },
            nl: { correct: 'Ja! De beek is smal.', wrong: 'Nee, de rivier is breed.' },
            az: { correct: 'Bəli! Dərə dardır.', wrong: 'Xeyr, çay genişdir.' }
        },
        options: [
            { id: 343, word: "nehir", imageUrl: "/images/343.png", isCorrect: false, audioKey: "nehir", spokenText: "nehir" },
            { id: 567, word: "dere", imageUrl: "/images/567.png", isCorrect: true, audioKey: "dere", spokenText: "dere" }
        ]
    },

    // 7. Otoyol vs Patika
    { 
        id: 7, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Otoyol geniştir.', wrong: 'Hayır, patika dardır.' },
            en: { correct: 'Yes! The highway is wide.', wrong: 'No, the path is narrow.' },
            de: { correct: 'Ja! Die Autobahn ist breit.', wrong: 'Nein, der Pfad ist schmal.' },
            fr: { correct: "Oui ! L'autoroute est large.", wrong: "Non, le sentier est étroit." },
            nl: { correct: 'Ja! De snelweg is breed.', wrong: 'Nee, het pad is smal.' },
            az: { correct: 'Bəli! Yol genişdir.', wrong: 'Xeyr, cığır dardır.' }
        },
        options: [
            { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: true, audioKey: "otoyol", spokenText: "otoyol" },
            { id: 529, word: "patika", imageUrl: "/images/529.png", isCorrect: false, audioKey: "patika", spokenText: "patika" }
        ]
    },
    { 
        id: 8, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Patika dardır.', wrong: 'Hayır, otoyol geniştir.' },
            en: { correct: 'Yes! The path is narrow.', wrong: 'No, the highway is wide.' },
            de: { correct: 'Ja! Der Pfad ist schmal.', wrong: 'Nein, die Autobahn ist breit.' },
            fr: { correct: "Oui ! Le sentier est étroit.", wrong: "Non, l'autoroute est large." },
            nl: { correct: 'Ja! Het pad is smal.', wrong: 'Nee, de snelweg is breed.' },
            az: { correct: 'Bəli! Cığır dardır.', wrong: 'Xeyr, yol genişdir.' }
        },
        options: [
            { id: 530, word: "otoyol", imageUrl: "/images/530.png", isCorrect: false, audioKey: "otoyol", spokenText: "otoyol" },
            { id: 529, word: "patika", imageUrl: "/images/529.png", isCorrect: true, audioKey: "patika", spokenText: "patika" }
        ]
    },

    // 9. Kapı vs Pencere
    { 
        id: 9, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Kapı geniştir.', wrong: 'Hayır, pencere dardır.' },
            en: { correct: 'Yes! The door is wide.', wrong: 'No, the window is narrow.' },
            de: { correct: 'Ja! Die Tür ist breit.', wrong: 'Nein, das Fenster ist schmal.' },
            fr: { correct: "Oui ! La porte est large.", wrong: "Non, la fenêtre est étroite." },
            nl: { correct: 'Ja! De deur is breed.', wrong: 'Nee, het raam is smal.' },
            az: { correct: 'Bəli! Qapı genişdir.', wrong: 'Xeyr, pəncərə dardır.' }
        },
        options: [
            { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: true, audioKey: "kapi", spokenText: "kapı" },
            { id: 566, word: "pencere", imageUrl: "/images/566.png", isCorrect: false, audioKey: "pencere", spokenText: "pencere" }
        ]
    },
    { 
        id: 10, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Pencere dardır.', wrong: 'Hayır, kapı geniştir.' },
            en: { correct: 'Yes! The window is narrow.', wrong: 'No, the door is wide.' },
            de: { correct: 'Ja! Das Fenster ist schmal.', wrong: 'Nein, die Tür ist breit.' },
            fr: { correct: "Oui ! La fenêtre est étroite.", wrong: "Non, la porte est large." },
            nl: { correct: 'Ja! Het raam is smal.', wrong: 'Nee, de deur is breed.' },
            az: { correct: 'Bəli! Pəncərə dardır.', wrong: 'Xeyr, qapı genişdir.' }
        },
        options: [
            { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: false, audioKey: "kapi", spokenText: "kapı" },
            { id: 566, word: "pencere", imageUrl: "/images/566.png", isCorrect: true, audioKey: "pencere", spokenText: "pencere" }
        ]
    },

    // 11. Kitaplık (Geniş vs Dar)
    { 
        id: 11, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Kitaplık geniştir.', wrong: 'Hayır, kitaplık dardır.' },
            en: { correct: 'Yes! The bookshelf is wide.', wrong: 'No, the bookshelf is narrow.' },
            de: { correct: 'Ja! Das Bücherregal ist breit.', wrong: 'Nein, das Bücherregal ist schmal.' },
            fr: { correct: "Oui ! La bibliothèque est large.", wrong: "Non, la bibliothèque est étroite." },
            nl: { correct: 'Ja! De boekenkast is breed.', wrong: 'Nee, de boekenkast is smal.' },
            az: { correct: 'Bəli! Kitab rəfi genişdir.', wrong: 'Xeyr, kitab rəfi dardır.' }
        },
        options: [
            { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },
    { 
        id: 12, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Kitaplık dardır.', wrong: 'Hayır, kitaplık geniştir.' },
            en: { correct: 'Yes! The bookshelf is narrow.', wrong: 'No, the bookshelf is wide.' },
            de: { correct: 'Ja! Das Bücherregal ist schmal.', wrong: 'Nein, das Bücherregal ist breit.' },
            fr: { correct: "Oui ! La bibliothèque est étroite.", wrong: "Non, la bibliothèque est large." },
            nl: { correct: 'Ja! De boekenkast is smal.', wrong: 'Nee, de boekenkast is breed.' },
            az: { correct: 'Bəli! Kitab rəfi dardır.', wrong: 'Xeyr, kitab rəfi genişdir.' }
        },
        options: [
            { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },

    // 13. Fırça (Geniş vs Dar)
    { 
        id: 13, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Fırça geniştir.', wrong: 'Hayır, fırça dardır.' },
            en: { correct: 'Yes! The brush is wide.', wrong: 'No, the brush is narrow.' },
            de: { correct: 'Ja! Der Pinsel ist breit.', wrong: 'Nein, der Pinsel ist schmal.' },
            fr: { correct: "Oui ! Le pinceau est large.", wrong: "Non, le pinceau est étroit." },
            nl: { correct: 'Ja! De kwast is breed.', wrong: 'Nee, de kwast is smal.' },
            az: { correct: 'Bəli! Fırça genişdir.', wrong: 'Xeyr, fırça dardır.' }
        },
        options: [
            { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: true, audioKey: "firca", spokenText: "fırça" },
            { id: 467, word: "fırça", imageUrl: "/images/467.png", isCorrect: false, audioKey: "firca", spokenText: "fırça" }
        ]
    },
    { 
        id: 14, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Fırça dardır.', wrong: 'Hayır, fırça geniştir.' },
            en: { correct: 'Yes! The brush is narrow.', wrong: 'No, the brush is wide.' },
            de: { correct: 'Ja! Der Pinsel ist schmal.', wrong: 'Nein, der Pinsel ist breit.' },
            fr: { correct: "Oui ! Le pinceau est étroit.", wrong: "Non, le pinceau est large." },
            nl: { correct: 'Ja! De kwast is smal.', wrong: 'Nee, de kwast is breed.' },
            az: { correct: 'Bəli! Fırça dardır.', wrong: 'Xeyr, fırça genişdir.' }
        },
        options: [
            { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: false, audioKey: "firca", spokenText: "fırça" },
            { id: 467, word: "fırça", imageUrl: "/images/467.png", isCorrect: true, audioKey: "firca", spokenText: "fırça" }
        ]
    },

    // 15. Ansiklopedi vs Cetvel
    { 
        id: 15, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Ansiklopedi geniştir.', wrong: 'Hayır, cetvel dardır.' },
            en: { correct: 'Yes! The encyclopedia is wide.', wrong: 'No, the ruler is narrow.' },
            de: { correct: 'Ja! Die Enzyklopädie ist breit.', wrong: 'Nein, das Lineal ist schmal.' },
            fr: { correct: "Oui ! L'encyclopédie est large.", wrong: "Non, la règle est étroite." },
            nl: { correct: 'Ja! De encyclopedie is breed.', wrong: 'Nee, de liniaal is smal.' },
            az: { correct: 'Bəli! Ensiklopediya genişdir.', wrong: 'Xeyr, xətkeş dardır.' }
        },
        options: [
            { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: false, audioKey: "cetvel", spokenText: "cetvel" }
        ]
    },
    { 
        id: 16, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Cetvel dardır.', wrong: 'Hayır, ansiklopedi geniştir.' },
            en: { correct: 'Yes! The ruler is narrow.', wrong: 'No, the encyclopedia is wide.' },
            de: { correct: 'Ja! Das Lineal ist schmal.', wrong: 'Nein, die Enzyklopädie ist breit.' },
            fr: { correct: "Oui ! La règle est étroite.", wrong: "Non, l'encyclopédie est large." },
            nl: { correct: 'Ja! De liniaal is smal.', wrong: 'Nee, de encyclopedie is breed.' },
            az: { correct: 'Bəli! Xətkeş dardır.', wrong: 'Xeyr, ensiklopediya genişdir.' }
        },
        options: [
            { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
            { id: 149, word: "cetvel", imageUrl: "/images/149.png", isCorrect: true, audioKey: "cetvel", spokenText: "cetvel" }
        ]
    },

    // 17. Koli Bandı vs Bant
    { 
        id: 17, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Koli bandı geniştir.', wrong: 'Hayır, bant dardır.' },
            en: { correct: 'Yes! The duct tape is wide.', wrong: 'No, the tape is narrow.' },
            de: { correct: 'Ja! Das Klebeband ist breit.', wrong: 'Nein, der Tesafilm ist schmal.' },
            fr: { correct: "Oui ! Le ruban adhésif est large.", wrong: "Non, le scotch est étroit." },
            nl: { correct: 'Ja! De ducttape is breed.', wrong: 'Nee, het plakband is smal.' },
            az: { correct: 'Bəli! Bağlama lenti genişdir.', wrong: 'Xeyr, lent dardır.' }
        },
        options: [
            { id: 568, word: "koli bandı", imageUrl: "/images/568.png", isCorrect: true, audioKey: "koli_bandi", spokenText: "koli bandı" },
            { id: 569, word: "bant", imageUrl: "/images/569.png", isCorrect: false, audioKey: "bant", spokenText: "bant" }
        ]
    },
    { 
        id: 18, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Bant dardır.', wrong: 'Hayır, koli bandı geniştir.' },
            en: { correct: 'Yes! The tape is narrow.', wrong: 'No, the duct tape is wide.' },
            de: { correct: 'Ja! Der Tesafilm ist schmal.', wrong: 'Nein, das Klebeband ist breit.' },
            fr: { correct: "Oui ! Le scotch est étroit.", wrong: "Non, le ruban adhésif est large." },
            nl: { correct: 'Ja! Het plakband is smal.', wrong: 'Nee, de ducttape is breed.' },
            az: { correct: 'Bəli! Lent dardır.', wrong: 'Xeyr, bağlama lenti genişdir.' }
        },
        options: [
            { id: 568, word: "koli bandı", imageUrl: "/images/568.png", isCorrect: false, audioKey: "koli_bandi", spokenText: "koli bandı" },
            { id: 569, word: "bant", imageUrl: "/images/569.png", isCorrect: true, audioKey: "bant", spokenText: "bant" }
        ]
    },

    // 19. Kase vs Bardak
    { 
        id: 19, 
        question: "Geniş olan hangisi?", 
        questionAudioKey: "q_which_is_wide", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Kase geniştir.', wrong: 'Hayır, bardak dardır.' },
            en: { correct: 'Yes! The bowl is wide.', wrong: 'No, the glass is narrow.' },
            de: { correct: 'Ja! Die Schüssel ist breit.', wrong: 'Nein, das Glas ist schmal.' },
            fr: { correct: "Oui ! Le bol est large.", wrong: "Non, le verre est étroit." },
            nl: { correct: 'Ja! De kom is breed.', wrong: 'Nee, het glas is smal.' },
            az: { correct: 'Bəli! Kasa genişdir.', wrong: 'Xeyr, stəkan dardır.' }
        },
        options: [
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "kase" },
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
    { 
        id: 20, 
        question: "Dar olan hangisi?", 
        questionAudioKey: "q_which_is_narrow", 
        activityType: ActivityType.WideNarrow, 
        speech: {
            tr: { correct: 'Evet! Bardak dardır.', wrong: 'Hayır, kase geniştir.' },
            en: { correct: 'Yes! The glass is narrow.', wrong: 'No, the bowl is wide.' },
            de: { correct: 'Ja! Das Glas ist schmal.', wrong: 'Nein, die Schüssel ist breit.' },
            fr: { correct: "Oui ! Le verre est étroit.", wrong: "Non, le bol est large." },
            nl: { correct: 'Ja! Het glas is smal.', wrong: 'Nee, de kom is breed.' },
            az: { correct: 'Bəli! Stəkan dardır.', wrong: 'Xeyr, kasa genişdir.' }
        },
        options: [
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "kase" },
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
];