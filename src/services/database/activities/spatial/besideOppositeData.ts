import { ConceptRound, ActivityType } from '../../../../types';

export const besideOppositeData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Sandalyeler (96-97)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Yan yana olanlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Sandalyeler yan yanadır.', wrong: 'Hayır, sandalyeler karşılıklıdır.' },
            en: { correct: 'Yes! The chairs are beside each other.', wrong: 'No, the chairs are opposite.' },
            de: { correct: 'Ja! Die Stühle stehen nebeneinander.', wrong: 'Nein, die Stühle stehen gegenüber.' },
            fr: { correct: "Oui ! Les chaises sont côte à côte.", wrong: "Non, les chaises sont face à face." },
            nl: { correct: 'Ja! De stoelen staan naast elkaar.', wrong: 'Nee, de stoelen staan tegenover elkaar.' },
            az: { correct: 'Bəli! Stullar yan-yanadır.', wrong: 'Xeyr, stullar qarşı-qarşıyadır.' }
        },
        options: [
            { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: true, audioKey: "sandalyeler_yanyana", spokenText: "yan yana" },
            { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: false, audioKey: "sandalyeler_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    {
        id: 2, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite,
        speech: {
            tr: { correct: 'Evet! Sandalyeler karşılıklıdır.', wrong: 'Hayır, sandalyeler yan yanadır.' },
            en: { correct: 'Yes! The chairs are opposite.', wrong: 'No, the chairs are beside each other.' },
            de: { correct: 'Ja! Die Stühle stehen gegenüber.', wrong: 'Nein, die Stühle stehen nebeneinander.' },
            fr: { correct: "Oui ! Les chaises sont face à face.", wrong: "Non, les chaises sont côte à côte." },
            nl: { correct: 'Ja! De stoelen staan tegenover elkaar.', wrong: 'Nee, de stoelen staan naast elkaar.' },
            az: { correct: 'Bəli! Stullar qarşı-qarşıyadır.', wrong: 'Xeyr, stullar yan-yanadır.' }
        },
        options: [
            { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: false, audioKey: "sandalyeler_yanyana", spokenText: "yan yana" },
            { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: true, audioKey: "sandalyeler_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Çocuklar (455-454)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Yan yana duranlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Çocuklar yan yanadır.', wrong: 'Hayır, çocuklar karşılıklıdır.' },
            en: { correct: 'Yes! The children are beside each other.', wrong: 'No, the children are opposite.' },
            de: { correct: 'Ja! Die Kinder stehen nebeneinander.', wrong: 'Nein, die Kinder stehen gegenüber.' },
            fr: { correct: "Oui ! Les enfants sont côte à côte.", wrong: "Non, les enfants sont face à face." },
            nl: { correct: 'Ja! De kinderen staan naast elkaar.', wrong: 'Nee, de kinderen staan tegenover elkaar.' },
            az: { correct: 'Bəli! Uşaqlar yan-yanadır.', wrong: 'Xeyr, uşaqlar qarşı-qarşıyadır.' }
        },
        options: [
            { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: true, audioKey: "cocuklar_yanyana", spokenText: "yan yana" },
            { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: false, audioKey: "cocuklar_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 4, 
        question: "Karşılıklı duranlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Çocuklar karşılıklıdır.', wrong: 'Hayır, çocuklar yan yanadır.' },
            en: { correct: 'Yes! The children are opposite.', wrong: 'No, the children are beside each other.' },
            de: { correct: 'Ja! Die Kinder stehen gegenüber.', wrong: 'Nein, die Kinder stehen nebeneinander.' },
            fr: { correct: "Oui ! Les enfants sont face à face.", wrong: "Non, les enfants sont côte à côte." },
            nl: { correct: 'Ja! De kinderen staan tegenover elkaar.', wrong: 'Nee, de kinderen staan naast elkaar.' },
            az: { correct: 'Bəli! Uşaqlar qarşı-qarşıyadır.', wrong: 'Xeyr, uşaqlar yan-yanadır.' }
        },
        options: [
            { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: false, audioKey: "cocuklar_yanyana", spokenText: "yan yana" },
            { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: true, audioKey: "cocuklar_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Satranç Taşları (511-510)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Yan yana olanlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Satranç taşları yan yanadır.', wrong: 'Hayır, satranç taşları karşılıklıdır.' },
            en: { correct: 'Yes! The chess pieces are beside each other.', wrong: 'No, the chess pieces are opposite.' },
            de: { correct: 'Ja! Die Schachfiguren stehen nebeneinander.', wrong: 'Nein, die Schachfiguren stehen gegenüber.' },
            fr: { correct: "Oui ! Les pièces d'échecs sont côte à côte.", wrong: "Non, les pièces d'échecs sont face à face." },
            nl: { correct: 'Ja! De schaakstukken staan naast elkaar.', wrong: 'Nee, de schaakstukken staan tegenover elkaar.' },
            az: { correct: 'Bəli! Şahmat fiqurları yan-yanadır.', wrong: 'Xeyr, şahmat fiqurları qarşı-qarşıyadır.' }
        },
        options: [
            { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: true, audioKey: "satranc_taslari_yanyana", spokenText: "yan yana" },
            { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: false, audioKey: "satranc_taslari_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 6, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Satranç taşları karşılıklıdır.', wrong: 'Hayır, satranç taşları yan yanadır.' },
            en: { correct: 'Yes! The chess pieces are opposite.', wrong: 'No, the chess pieces are beside each other.' },
            de: { correct: 'Ja! Die Schachfiguren stehen gegenüber.', wrong: 'Nein, die Schachfiguren stehen nebeneinander.' },
            fr: { correct: "Oui ! Les pièces d'échecs sont face à face.", wrong: "Non, les pièces d'échecs sont côte à côte." },
            nl: { correct: 'Ja! De schaakstukken staan tegenover elkaar.', wrong: 'Nee, de schaakstukken staan naast elkaar.' },
            az: { correct: 'Bəli! Şahmat fiqurları qarşı-qarşıyadır.', wrong: 'Xeyr, şahmat fiqurları yan-yanadır.' }
        },
        options: [
            { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: false, audioKey: "satranc_taslari_yanyana", spokenText: "yan yana" },
            { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: true, audioKey: "satranc_taslari_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Evler (515-514)
    // ----------------------------------------------------------------------
    { 
        id: 9, 
        question: "Yan yana olanlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Evler yan yanadır.', wrong: 'Hayır, evler karşılıklıdır.' },
            en: { correct: 'Yes! The houses are beside each other.', wrong: 'No, the houses are opposite.' },
            de: { correct: 'Ja! Die Häuser stehen nebeneinander.', wrong: 'Nein, die Häuser stehen gegenüber.' },
            fr: { correct: "Oui ! Les maisons sont côte à côte.", wrong: "Non, les maisons sont face à face." },
            nl: { correct: 'Ja! De huizen staan naast elkaar.', wrong: 'Nee, de huizen staan tegenover elkaar.' },
            az: { correct: 'Bəli! Evlər yan-yanadır.', wrong: 'Xeyr, evlər qarşı-qarşıyadır.' }
        },
        options: [
            { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: true, audioKey: "evler_yanyana", spokenText: "yan yana" },
            { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: false, audioKey: "evler_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 10, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Evler karşılıklıdır.', wrong: 'Hayır, evler yan yanadır.' },
            en: { correct: 'Yes! The houses are opposite.', wrong: 'No, the houses are beside each other.' },
            de: { correct: 'Ja! Die Häuser stehen gegenüber.', wrong: 'Nein, die Häuser stehen nebeneinander.' },
            fr: { correct: "Oui ! Les maisons sont face à face.", wrong: "Non, les maisons sont côte à côte." },
            nl: { correct: 'Ja! De huizen staan tegenover elkaar.', wrong: 'Nee, de huizen staan naast elkaar.' },
            az: { correct: 'Bəli! Evlər qarşı-qarşıyadır.', wrong: 'Xeyr, evlər yan-yanadır.' }
        },
        options: [
            { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: false, audioKey: "evler_yanyana", spokenText: "yan yana" },
            { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: true, audioKey: "evler_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. Tuzluk ve Biberlik (626-625)
    // ----------------------------------------------------------------------
    { 
        id: 11, 
        question: "Yan yana olanlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Tuzluk ve biberlik yan yanadır.', wrong: 'Hayır, tuzluk ve biberlik karşılıklıdır.' },
            en: { correct: 'Yes! The salt and pepper shakers are beside each other.', wrong: 'No, they are opposite.' },
            de: { correct: 'Ja! Salz- und Pfefferstreuer stehen nebeneinander.', wrong: 'Nein, sie stehen gegenüber.' },
            fr: { correct: "Oui ! La salière et la poivrière sont côte à côte.", wrong: "Non, elles sont face à face." },
            nl: { correct: 'Ja! Het peper- en zoutstel staan naast elkaar.', wrong: 'Nee, ze staan tegenover elkaar.' },
            az: { correct: 'Bəli! Duz qabı və istiot qabı yan-yanadır.', wrong: 'Xeyr, onlar qarşı-qarşıyadır.' }
        },
        options: [
            { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik_yanyana", spokenText: "yan yana" },
            { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 12, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Tuzluk ve biberlik karşılıklıdır.', wrong: 'Hayır, tuzluk ve biberlik yan yanadır.' },
            en: { correct: 'Yes! The salt and pepper shakers are opposite.', wrong: 'No, they are beside each other.' },
            de: { correct: 'Ja! Salz- und Pfefferstreuer stehen gegenüber.', wrong: 'Nein, sie stehen nebeneinander.' },
            fr: { correct: "Oui ! La salière et la poivrière sont face à face.", wrong: "Non, elles sont côte à côte." },
            nl: { correct: 'Ja! Het peper- en zoutstel staan tegenover elkaar.', wrong: 'Nee, ze staan naast elkaar.' },
            az: { correct: 'Bəli! Duz qabı və istiot qabı qarşı-qarşıyadır.', wrong: 'Xeyr, onlar yan-yanadır.' }
        },
        options: [
            { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik_yanyana", spokenText: "yan yana" },
            { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 6. Kediler (628-627)
    // ----------------------------------------------------------------------
    { 
        id: 13, 
        question: "Yan yana duranlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Kediler yan yanadır.', wrong: 'Hayır, kediler karşılıklıdır.' },
            en: { correct: 'Yes! The cats are beside each other.', wrong: 'No, the cats are opposite.' },
            de: { correct: 'Ja! Die Katzen stehen nebeneinander.', wrong: 'Nein, die Katzen stehen gegenüber.' },
            fr: { correct: "Oui ! Les chats sont côte à côte.", wrong: "Non, les chats sont face à face." },
            nl: { correct: 'Ja! De katten staan naast elkaar.', wrong: 'Nee, de katten staan tegenover elkaar.' },
            az: { correct: 'Bəli! Pişiklər yan-yanadır.', wrong: 'Xeyr, pişiklər qarşı-qarşıyadır.' }
        },
        options: [
            { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: true, audioKey: "kediler_yanyana", spokenText: "yan yana" },
            { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: false, audioKey: "kediler_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 14, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Kediler karşılıklıdır.', wrong: 'Hayır, kediler yan yanadır.' },
            en: { correct: 'Yes! The cats are opposite.', wrong: 'No, the cats are beside each other.' },
            de: { correct: 'Ja! Die Katzen stehen gegenüber.', wrong: 'Nein, die Katzen stehen nebeneinander.' },
            fr: { correct: "Oui ! Les chats sont face à face.", wrong: "Non, les chats sont côte à côte." },
            nl: { correct: 'Ja! De katten staan tegenover elkaar.', wrong: 'Nee, de katten staan naast elkaar.' },
            az: { correct: 'Bəli! Pişiklər qarşı-qarşıyadır.', wrong: 'Xeyr, pişiklər yan-yanadır.' }
        },
        options: [
            { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: false, audioKey: "kediler_yanyana", spokenText: "yan yana" },
            { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: true, audioKey: "kediler_karsilikli", spokenText: "karşılıklı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 7. Futbolcular (630-629)
    // ----------------------------------------------------------------------
    { 
        id: 15, 
        question: "Yan yana olanlar hangisi?", 
        questionAudioKey: "q_which_are_beside", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Futbolcular yan yanadır.', wrong: 'Hayır, futbolcular karşılıklıdır.' },
            en: { correct: 'Yes! The football players are beside each other.', wrong: 'No, they are opposite.' },
            de: { correct: 'Ja! Die Fußballspieler stehen nebeneinander.', wrong: 'Nein, sie stehen gegenüber.' },
            fr: { correct: "Oui ! Les footballeurs sont côte à côte.", wrong: "Non, ils sont face à face." },
            nl: { correct: 'Ja! De voetballers staan naast elkaar.', wrong: 'Nee, ze staan tegenover elkaar.' },
            az: { correct: 'Bəli! Futbolçular yan-yanadır.', wrong: 'Xeyr, futbolçular qarşı-qarşıyadır.' }
        },
        options: [
            { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: true, audioKey: "futbolcular_yanyana", spokenText: "yan yana" },
            { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: false, audioKey: "futbolcular_karsilikli", spokenText: "karşılıklı" }
        ]
    },
    { 
        id: 16, 
        question: "Karşılıklı olanlar hangisi?", 
        questionAudioKey: "q_which_are_opposite", 
        activityType: ActivityType.BesideOpposite, 
        speech: {
            tr: { correct: 'Evet! Futbolcular karşılıklıdır.', wrong: 'Hayır, futbolcular yan yanadır.' },
            en: { correct: 'Yes! The football players are opposite.', wrong: 'No, they are beside each other.' },
            de: { correct: 'Ja! Die Fußballspieler stehen gegenüber.', wrong: 'Nein, sie stehen nebeneinander.' },
            fr: { correct: "Oui ! Les footballeurs sont face à face.", wrong: "Non, ils sont côte à côte." },
            nl: { correct: 'Ja! De voetballers staan tegenover elkaar.', wrong: 'Nee, ze staan naast elkaar.' },
            az: { correct: 'Bəli! Futbolçular qarşı-qarşıyadır.', wrong: 'Xeyr, futbolçular yan-yanadır.' }
        },
        options: [
            { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: false, audioKey: "futbolcular_yanyana", spokenText: "yan yana" },
            { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: true, audioKey: "futbolcular_karsilikli", spokenText: "karşılıklı" }
        ]
    }
];