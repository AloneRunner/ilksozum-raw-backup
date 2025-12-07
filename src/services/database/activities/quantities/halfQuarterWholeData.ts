import { ConceptRound, ActivityType } from '../../../../types';

export const halfQuarterWholeData: ConceptRound[] = [
    // 1. Pizza (Bütün vs Yarım)
    { 
        id: 1, 
        question: "Bütün olan hangisi?", 
        questionAudioKey: "q_which_is_whole", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Pizza bütündür.', wrong: 'Hayır, pizza yarımdır.' },
            en: { correct: 'Yes! The pizza is whole.', wrong: 'No, the pizza is half.' },
            de: { correct: 'Ja! Die Pizza ist ganz.', wrong: 'Nein, die Pizza ist halb.' },
            fr: { correct: "Oui ! La pizza est entière.", wrong: "Non, la pizza est à moitié." },
            nl: { correct: 'Ja! De pizza is heel.', wrong: 'Nee, de pizza is half.' },
            az: { correct: 'Bəli! Pizza bütövdür.', wrong: 'Xeyr, pizza yarımdır.' }
        },
        options: [
            { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: true, audioKey: "pizza", spokenText: "pizza" },
            { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: false, audioKey: "pizza", spokenText: "pizza" }
        ]
    },
    { 
        id: 1.1, 
        question: "Yarım olan hangisi?", 
        questionAudioKey: "q_which_is_half", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Pizza yarımdır.', wrong: 'Hayır, pizza bütündür.' },
            en: { correct: 'Yes! The pizza is half.', wrong: 'No, the pizza is whole.' },
            de: { correct: 'Ja! Die Pizza ist halb.', wrong: 'Nein, die Pizza ist ganz.' },
            fr: { correct: "Oui ! La pizza est à moitié.", wrong: "Non, la pizza est entière." },
            nl: { correct: 'Ja! De pizza is half.', wrong: 'Nee, de pizza is heel.' },
            az: { correct: 'Bəli! Pizza yarımdır.', wrong: 'Xeyr, pizza bütövdür.' }
        },
        options: [
            { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: false, audioKey: "pizza", spokenText: "pizza" },
            { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: true, audioKey: "pizza", spokenText: "pizza" }
        ]
    },

    // 2. Pizza (Yarım vs Çeyrek)
    { 
        id: 2, 
        question: "Yarım olan hangisi?", 
        questionAudioKey: "q_which_is_half", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Pizza yarımdır.', wrong: 'Hayır, bu çeyrek pizzadır.' },
            en: { correct: 'Yes! The pizza is half.', wrong: 'No, this is a quarter pizza.' },
            de: { correct: 'Ja! Die Pizza ist halb.', wrong: 'Nein, das ist ein Viertel Pizza.' },
            fr: { correct: "Oui ! La pizza est à moitié.", wrong: "Non, c'est un quart de pizza." },
            nl: { correct: 'Ja! De pizza is half.', wrong: 'Nee, dit is een kwart pizza.' },
            az: { correct: 'Bəli! Pizza yarımdır.', wrong: 'Xeyr, bu dörddəbir pizzadır.' }
        },
        options: [
            { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: true, audioKey: "pizza", spokenText: "pizza" },
            { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: false, audioKey: "pizza_dilimi", spokenText: "pizza dilimi" }
        ]
    },
    { 
        id: 2.1, 
        question: "Çeyrek olan hangisi?", 
        questionAudioKey: "q_which_is_quarter", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Bu çeyrek pizzadır.', wrong: 'Hayır, pizza yarımdır.' },
            en: { correct: 'Yes! This is a quarter pizza.', wrong: 'No, the pizza is half.' },
            de: { correct: 'Ja! Das ist ein Viertel Pizza.', wrong: 'Nein, die Pizza ist halb.' },
            fr: { correct: "Oui ! C'est un quart de pizza.", wrong: "Non, la pizza est à moitié." },
            nl: { correct: 'Ja! Dit is een kwart pizza.', wrong: 'Nee, de pizza is half.' },
            az: { correct: 'Bəli! Bu dörddəbir pizzadır.', wrong: 'Xeyr, pizza yarımdır.' }
        },
        options: [
            { id: 24, word: "pizza", imageUrl: "/images/24.png", isCorrect: false, audioKey: "pizza", spokenText: "pizza" },
            { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: true, audioKey: "pizza_dilimi", spokenText: "pizza dilimi" }
        ]
    },

    // 3. Pizza (Bütün vs Çeyrek)
    { 
        id: 3, 
        question: "Bütün olan hangisi?", 
        questionAudioKey: "q_which_is_whole", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Pizza bütündür.', wrong: 'Hayır, bu çeyrek pizzadır.' },
            en: { correct: 'Yes! The pizza is whole.', wrong: 'No, this is a quarter pizza.' },
            de: { correct: 'Ja! Die Pizza ist ganz.', wrong: 'Nein, das ist ein Viertel Pizza.' },
            fr: { correct: "Oui ! La pizza est entière.", wrong: "Non, c'est un quart de pizza." },
            nl: { correct: 'Ja! De pizza is heel.', wrong: 'Nee, dit is een kwart pizza.' },
            az: { correct: 'Bəli! Pizza bütövdür.', wrong: 'Xeyr, bu dörddəbir pizzadır.' }
        },
        options: [
            { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: true, audioKey: "pizza", spokenText: "pizza" },
            { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: false, audioKey: "pizza_dilimi", spokenText: "pizza dilimi" }
        ]
    },
    { 
        id: 3.1, 
        question: "Çeyrek olan hangisi?", 
        questionAudioKey: "q_which_is_quarter", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Bu çeyrek pizzadır.', wrong: 'Hayır, pizza bütündür.' },
            en: { correct: 'Yes! This is a quarter pizza.', wrong: 'No, the pizza is whole.' },
            de: { correct: 'Ja! Das ist ein Viertel Pizza.', wrong: 'Nein, die Pizza ist ganz.' },
            fr: { correct: "Oui ! C'est un quart de pizza.", wrong: "Non, la pizza est entière." },
            nl: { correct: 'Ja! Dit is een kwart pizza.', wrong: 'Nee, de pizza is heel.' },
            az: { correct: 'Bəli! Bu dörddəbir pizzadır.', wrong: 'Xeyr, pizza bütövdür.' }
        },
        options: [
            { id: 23, word: "pizza", imageUrl: "/images/23.png", isCorrect: false, audioKey: "pizza", spokenText: "pizza" },
            { id: 25, word: "pizza dilimi", imageUrl: "/images/25.png", isCorrect: true, audioKey: "pizza_dilimi", spokenText: "pizza dilimi" }
        ]
    },

    // 4. Portakal (Bütün vs Yarım)
    { 
        id: 4, 
        question: "Bütün olan hangisi?", 
        questionAudioKey: "q_which_is_whole", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Portakal bütündür.', wrong: 'Hayır, portakal yarımdır.' },
            en: { correct: 'Yes! The orange is whole.', wrong: 'No, the orange is half.' },
            de: { correct: 'Ja! Die Orange ist ganz.', wrong: 'Nein, die Orange ist halb.' },
            fr: { correct: "Oui ! L'orange est entière.", wrong: "Non, l'orange est à moitié." },
            nl: { correct: 'Ja! De sinaasappel is heel.', wrong: 'Nee, de sinaasappel is half.' },
            az: { correct: 'Bəli! Portağal bütövdür.', wrong: 'Xeyr, portağal yarımdır.' }
        },
        options: [
            { id: 115, word: "portakal", imageUrl: "/images/115.png", isCorrect: true, audioKey: "portakal", spokenText: "portakal" },
            { id: 508, word: "portakal", imageUrl: "/images/508.png", isCorrect: false, audioKey: "portakal", spokenText: "portakal" }
        ]
    },
    { 
        id: 4.1, 
        question: "Yarım olan hangisi?", 
        questionAudioKey: "q_which_is_half", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Portakal yarımdır.', wrong: 'Hayır, portakal bütündür.' },
            en: { correct: 'Yes! The orange is half.', wrong: 'No, the orange is whole.' },
            de: { correct: 'Ja! Die Orange ist halb.', wrong: 'Nein, die Orange ist ganz.' },
            fr: { correct: "Oui ! L'orange est à moitié.", wrong: "Non, l'orange est entière." },
            nl: { correct: 'Ja! De sinaasappel is half.', wrong: 'Nee, de sinaasappel is heel.' },
            az: { correct: 'Bəli! Portağal yarımdır.', wrong: 'Xeyr, portağal bütövdür.' }
        },
        options: [
            { id: 115, word: "portakal", imageUrl: "/images/115.png", isCorrect: false, audioKey: "portakal", spokenText: "portakal" },
            { id: 508, word: "portakal", imageUrl: "/images/508.png", isCorrect: true, audioKey: "portakal", spokenText: "portakal" }
        ]
    },

    // 5. Simit (Bütün vs Yarım)
    { 
        id: 5, 
        question: "Bütün olan hangisi?", 
        questionAudioKey: "q_which_is_whole", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Simit bütündür.', wrong: 'Hayır, simit yarımdır.' },
            en: { correct: 'Yes! The bagel is whole.', wrong: 'No, the bagel is half.' },
            de: { correct: 'Ja! Der Sesamring ist ganz.', wrong: 'Nein, der Sesamring ist halb.' },
            fr: { correct: "Oui ! Le bagel est entier.", wrong: "Non, le bagel est à moitié." },
            nl: { correct: 'Ja! De bagel is heel.', wrong: 'Nee, de bagel is half.' },
            az: { correct: 'Bəli! Simit bütövdür.', wrong: 'Xeyr, simit yarımdır.' }
        },
        options: [
            { id: 296, word: "simit", imageUrl: "/images/296.png", isCorrect: true, audioKey: "simit", spokenText: "simit" },
            { id: 509, word: "simit", imageUrl: "/images/509.png", isCorrect: false, audioKey: "simit", spokenText: "simit" }
        ]
    },
    { 
        id: 5.1, 
        question: "Yarım olan hangisi?", 
        questionAudioKey: "q_which_is_half", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Simit yarımdır.', wrong: 'Hayır, simit bütündür.' },
            en: { correct: 'Yes! The bagel is half.', wrong: 'No, the bagel is whole.' },
            de: { correct: 'Ja! Der Sesamring ist halb.', wrong: 'Nein, der Sesamring ist ganz.' },
            fr: { correct: "Oui ! Le bagel est à moitié.", wrong: "Non, le bagel est entier." },
            nl: { correct: 'Ja! De bagel is half.', wrong: 'Nee, de bagel is heel.' },
            az: { correct: 'Bəli! Simit yarımdır.', wrong: 'Xeyr, simit bütövdür.' }
        },
        options: [
            { id: 296, word: "simit", imageUrl: "/images/296.png", isCorrect: false, audioKey: "simit", spokenText: "simit" },
            { id: 509, word: "simit", imageUrl: "/images/509.png", isCorrect: true, audioKey: "simit", spokenText: "simit" }
        ]
    },

    // 6. Pasta (Bütün vs Dilim)
    { 
        id: 6, 
        question: "Bütün olan hangisi?", 
        questionAudioKey: "q_which_is_whole", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Pasta bütündür.', wrong: 'Hayır, bu bir dilimdir.' },
            en: { correct: 'Yes! The cake is whole.', wrong: 'No, this is a slice.' },
            de: { correct: 'Ja! Der Kuchen ist ganz.', wrong: 'Nein, das ist ein Stück.' },
            fr: { correct: "Oui ! Le gâteau est entier.", wrong: "Non, c'est une tranche." },
            nl: { correct: 'Ja! De taart is heel.', wrong: 'Nee, dit is een stuk.' },
            az: { correct: 'Bəli! Tort bütövdür.', wrong: 'Xeyr, bu bir dilimdir.' }
        },
        options: [
            { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: true, audioKey: "pasta", spokenText: "pasta" },
            { id: 486, word: "pasta dilimi", imageUrl: "/images/486.png", isCorrect: false, audioKey: "pasta_dilimi", spokenText: "pasta dilimi" }
        ]
    },
    { 
        id: 6.1, 
        question: "Dilim olan hangisi?", 
        questionAudioKey: "q_which_is_slice", 
        activityType: ActivityType.HalfQuarterWhole, 
        speech: {
            tr: { correct: 'Evet! Bu bir dilimdir.', wrong: 'Hayır, pasta bütündür.' },
            en: { correct: 'Yes! This is a slice.', wrong: 'No, the cake is whole.' },
            de: { correct: 'Ja! Das ist ein Stück.', wrong: 'Nein, der Kuchen ist ganz.' },
            fr: { correct: "Oui ! C'est une tranche.", wrong: "Non, le gâteau est entier." },
            nl: { correct: 'Ja! Dit is een stuk.', wrong: 'Nee, de taart is heel.' },
            az: { correct: 'Bəli! Bu bir dilimdir.', wrong: 'Xeyr, tort bütövdür.' }
        },
        options: [
            { id: 78, word: "pasta", imageUrl: "/images/78.png", isCorrect: false, audioKey: "pasta", spokenText: "pasta" },
            { id: 486, word: "pasta dilimi", imageUrl: "/images/486.png", isCorrect: true, audioKey: "pasta_dilimi", spokenText: "pasta dilimi" }
        ]
    }
];