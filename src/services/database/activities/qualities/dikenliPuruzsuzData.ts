import { ConceptRound, ActivityType } from '../../../../types';

export const dikenliPuruzsuzData: ConceptRound[] = [
    // 1. Kaktüs vs Elma
    { 
        id: 109, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny_person", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Kaktüs dikenlidir.', wrong: 'Hayır, elma pürüzsüzdür.' },
            en: { correct: 'Yes! The cactus is thorny.', wrong: 'No, the apple is smooth.' },
            de: { correct: 'Ja! Der Kaktus ist stachelig.', wrong: 'Nein, der Apfel ist glatt.' },
            fr: { correct: "Oui ! Le cactus est épineux.", wrong: "Non, la pomme est lisse." },
            nl: { correct: 'Ja! De cactus is stekelig.', wrong: 'Nee, de appel is glad.' },
            az: { correct: 'Bəli! Kaktus tikanlıdır.', wrong: 'Xeyr, alma hamardır.' }
        },
        options: [
            { id: 281, word: "kaktüs", imageUrl: "/images/281.png", isCorrect: true, audioKey: "kaktus", spokenText: "kaktüs" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" }
        ]
    },
    { 
        id: 110, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Elma pürüzsüzdür.', wrong: 'Hayır, kaktüs dikenlidir.' },
            en: { correct: 'Yes! The apple is smooth.', wrong: 'No, the cactus is thorny.' },
            de: { correct: 'Ja! Der Apfel ist glatt.', wrong: 'Nein, der Kaktus ist stachelig.' },
            fr: { correct: "Oui ! La pomme est lisse.", wrong: "Non, le cactus est épineux." },
            nl: { correct: 'Ja! De appel is glad.', wrong: 'Nee, de cactus is stekelig.' },
            az: { correct: 'Bəli! Alma hamardır.', wrong: 'Xeyr, kaktus tikanlıdır.' }
        },
        options: [
            { id: 281, word: "kaktüs", imageUrl: "/images/281.png", isCorrect: false, audioKey: "kaktus", spokenText: "kaktüs" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" }
        ]
    },

    // 2. Kirpi vs Yunus
    { 
        id: 111, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Kirpi dikenlidir.', wrong: 'Hayır, yunus pürüzsüzdür.' },
            en: { correct: 'Yes! The hedgehog is thorny.', wrong: 'No, the dolphin is smooth.' },
            de: { correct: 'Ja! Der Igel ist stachelig.', wrong: 'Nein, der Delfin ist glatt.' },
            fr: { correct: "Oui ! Le hérisson est épineux.", wrong: "Non, le dauphin est lisse." },
            nl: { correct: 'Ja! De egel is stekelig.', wrong: 'Nee, de dolfijn is glad.' },
            az: { correct: 'Bəli! Kirpi tikanlıdır.', wrong: 'Xeyr, delfin hamardır.' }
        },
        options: [
            { id: 418, word: "kirpi", imageUrl: "/images/418.png", isCorrect: true, audioKey: "kirpi", spokenText: "kirpi" },
            { id: 763, word: "yunus", imageUrl: "/images/763.png", isCorrect: false, audioKey: "yunus", spokenText: "yunus" }
        ]
    },
    { 
        id: 112, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Yunus pürüzsüzdür.', wrong: 'Hayır, kirpi dikenlidir.' },
            en: { correct: 'Yes! The dolphin is smooth.', wrong: 'No, the hedgehog is thorny.' },
            de: { correct: 'Ja! Der Delfin ist glatt.', wrong: 'Nein, der Igel ist stachelig.' },
            fr: { correct: "Oui ! Le dauphin est lisse.", wrong: "Non, le hérisson est épineux." },
            nl: { correct: 'Ja! De dolfijn is glad.', wrong: 'Nee, de egel is stekelig.' },
            az: { correct: 'Bəli! Delfin hamardır.', wrong: 'Xeyr, kirpi tikanlıdır.' }
        },
        options: [
            { id: 418, word: "kirpi", imageUrl: "/images/418.png", isCorrect: false, audioKey: "kirpi", spokenText: "kirpi" },
            { id: 763, word: "yunus", imageUrl: "/images/763.png", isCorrect: true, audioKey: "yunus", spokenText: "yunus" }
        ]
    },

    // 3. Deniz Kestanesi vs Deniz Yıldızı
    { 
        id: 113, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Deniz kestanesi dikenlidir.', wrong: 'Hayır, deniz yıldızı pürüzsüzdür.' },
            en: { correct: 'Yes! The sea urchin is thorny.', wrong: 'No, the starfish is smooth.' },
            de: { correct: 'Ja! Der Seeigel ist stachelig.', wrong: 'Nein, der Seestern ist glatt.' },
            fr: { correct: "Oui ! L'oursin est épineux.", wrong: "Non, l'étoile de mer est lisse." },
            nl: { correct: 'Ja! De zee-egel is stekelig.', wrong: 'Nee, de zeester is glad.' },
            az: { correct: 'Bəli! Dəniz kirpisi tikanlıdır.', wrong: 'Xeyr, dəniz ulduzu hamardır.' }
        },
        options: [
            { id: 692, word: "deniz kestanesi", imageUrl: "/images/692.png", isCorrect: true, audioKey: "deniz_kestanesi", spokenText: "deniz kestanesi" },
            { id: 359, word: "deniz yıldızı", imageUrl: "/images/359.png", isCorrect: false, audioKey: "deniz_yildizi", spokenText: "deniz yıldızı" }
        ]
    },
    { 
        id: 114, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Deniz yıldızı pürüzsüzdür.', wrong: 'Hayır, deniz kestanesi dikenlidir.' },
            en: { correct: 'Yes! The starfish is smooth.', wrong: 'No, the sea urchin is thorny.' },
            de: { correct: 'Ja! Der Seestern ist glatt.', wrong: 'Nein, der Seeigel ist stachelig.' },
            fr: { correct: "Oui ! L'étoile de mer est lisse.", wrong: "Non, l'oursin est épineux." },
            nl: { correct: 'Ja! De zeester is glad.', wrong: 'Nee, de zee-egel is stekelig.' },
            az: { correct: 'Bəli! Dəniz ulduzu hamardır.', wrong: 'Xeyr, dəniz kirpisi tikanlıdır.' }
        },
        options: [
            { id: 692, word: "deniz kestanesi", imageUrl: "/images/692.png", isCorrect: false, audioKey: "deniz_kestanesi", spokenText: "deniz kestanesi" },
            { id: 359, word: "deniz yıldızı", imageUrl: "/images/359.png", isCorrect: true, audioKey: "deniz_yildizi", spokenText: "deniz yıldızı" }
        ]
    },

    // 4. Dikenli Tel vs İp
    { 
        id: 115, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Dikenli tel dikenlidir.', wrong: 'Hayır, ip pürüzsüzdür.' },
            en: { correct: 'Yes! The barbed wire is thorny.', wrong: 'No, the rope is smooth.' },
            de: { correct: 'Ja! Der Stacheldraht ist stachelig.', wrong: 'Nein, das Seil ist glatt.' },
            fr: { correct: "Oui ! Le fil barbelé est épineux.", wrong: "Non, la corde est lisse." },
            nl: { correct: 'Ja! Het prikkeldraad is stekelig.', wrong: 'Nee, het touw is glad.' },
            az: { correct: 'Bəli! Tikanlı məftil tikanlıdır.', wrong: 'Xeyr, ip hamardır.' }
        },
        options: [
            { id: 693, word: "dikenli tel", imageUrl: "/images/693.png", isCorrect: true, audioKey: "dikenli_tel", spokenText: "dikenli tel" },
            { id: 224, word: "ip", imageUrl: "/images/224.png", isCorrect: false, audioKey: "ip", spokenText: "ip" }
        ]
    },
    { 
        id: 116, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! İp pürüzsüzdür.', wrong: 'Hayır, dikenli tel dikenlidir.' },
            en: { correct: 'Yes! The rope is smooth.', wrong: 'No, the barbed wire is thorny.' },
            de: { correct: 'Ja! Das Seil ist glatt.', wrong: 'Nein, der Stacheldraht ist stachelig.' },
            fr: { correct: "Oui ! La corde est lisse.", wrong: "Non, le fil barbelé est épineux." },
            nl: { correct: 'Ja! Het touw is glad.', wrong: 'Nee, het prikkeldraad is stekelig.' },
            az: { correct: 'Bəli! İp hamardır.', wrong: 'Xeyr, tikanlı məftil tikanlıdır.' }
        },
        options: [
            { id: 693, word: "dikenli tel", imageUrl: "/images/693.png", isCorrect: false, audioKey: "dikenli_tel", spokenText: "dikenli tel" },
            { id: 224, word: "ip", imageUrl: "/images/224.png", isCorrect: true, audioKey: "ip", spokenText: "ip" }
        ]
    },

    // 5. Enginar vs Patlıcan
    { 
        id: 117, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Enginar dikenlidir.', wrong: 'Hayır, patlıcan pürüzsüzdür.' },
            en: { correct: 'Yes! The artichoke is thorny.', wrong: 'No, the eggplant is smooth.' },
            de: { correct: 'Ja! Die Artischocke ist stachelig.', wrong: 'Nein, die Aubergine ist glatt.' },
            fr: { correct: "Oui ! L'artichaut est épineux.", wrong: "Non, l'aubergine est lisse." },
            nl: { correct: 'Ja! De artisjok is stekelig.', wrong: 'Nee, de aubergine is glad.' },
            az: { correct: 'Bəli! Ənginar tikanlıdır.', wrong: 'Xeyr, badımcan hamardır.' }
        },
        options: [
            { id: 695, word: "enginar", imageUrl: "/images/695.png", isCorrect: true, audioKey: "enginar", spokenText: "enginar" },
            { id: 280, word: "patlıcan", imageUrl: "/images/280.png", isCorrect: false, audioKey: "patlican", spokenText: "patlıcan" }
        ]
    },
    { 
        id: 118, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Patlıcan pürüzsüzdür.', wrong: 'Hayır, enginar dikenlidir.' },
            en: { correct: 'Yes! The eggplant is smooth.', wrong: 'No, the artichoke is thorny.' },
            de: { correct: 'Ja! Die Aubergine ist glatt.', wrong: 'Nein, die Artischocke ist stachelig.' },
            fr: { correct: "Oui ! L'aubergine est lisse.", wrong: "Non, l'artichaut est épineux." },
            nl: { correct: 'Ja! De aubergine is glad.', wrong: 'Nee, de artisjok is stekelig.' },
            az: { correct: 'Bəli! Badımcan hamardır.', wrong: 'Xeyr, ənginar tikanlıdır.' }
        },
        options: [
            { id: 695, word: "enginar", imageUrl: "/images/695.png", isCorrect: false, audioKey: "enginar", spokenText: "enginar" },
            { id: 280, word: "patlıcan", imageUrl: "/images/280.png", isCorrect: true, audioKey: "patlican", spokenText: "patlıcan" }
        ]
    },

    // 7. Dikenli Gül Dalı vs Pürüzsüz Dal
    { 
        id: 119, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Dikenli dal dikenlidir.', wrong: 'Hayır, dal pürüzsüzdür.' },
            en: { correct: 'Yes! The thorny branch is thorny.', wrong: 'No, the branch is smooth.' },
            de: { correct: 'Ja! Der dornige Zweig ist stachelig.', wrong: 'Nein, der Zweig ist glatt.' },
            fr: { correct: "Oui ! La branche épineuse est épineuse.", wrong: "Non, la branche est lisse." },
            nl: { correct: 'Ja! De doornige tak is stekelig.', wrong: 'Nee, de tak is glad.' },
            az: { correct: 'Bəli! Tikanlı budaq tikanlıdır.', wrong: 'Xeyr, budaq hamardır.' }
        },
        options: [
            { id: 346, word: "dikenli dal", imageUrl: "/images/346.png", isCorrect: true, audioKey: "dikenli_dal", spokenText: "dikenli dal" },
            { id: 536, word: "dal", imageUrl: "/images/536.png", isCorrect: false, audioKey: "dal", spokenText: "dal" }
        ]
    },
    { 
        id: 120, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Dal pürüzsüzdür.', wrong: 'Hayır, dikenli dal dikenlidir.' },
            en: { correct: 'Yes! The branch is smooth.', wrong: 'No, the thorny branch is thorny.' },
            de: { correct: 'Ja! Der Zweig ist glatt.', wrong: 'Nein, der dornige Zweig ist stachelig.' },
            fr: { correct: "Oui ! La branche est lisse.", wrong: "Non, la branche épineuse est épineuse." },
            nl: { correct: 'Ja! De tak is glad.', wrong: 'Nee, de doornige tak is stekelig.' },
            az: { correct: 'Bəli! Budaq hamardır.', wrong: 'Xeyr, tikanlı budaq tikanlıdır.' }
        },
        options: [
            { id: 346, word: "dikenli dal", imageUrl: "/images/346.png", isCorrect: false, audioKey: "dikenli_dal", spokenText: "dikenli dal" },
            { id: 536, word: "dal", imageUrl: "/images/536.png", isCorrect: true, audioKey: "dal", spokenText: "dal" }
        ]
    },

    // 8. Ananas vs Elma
    { 
        id: 121, 
        question: "Dikenli olan hangisi?", 
        questionAudioKey: "q_which_is_thorny", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Ananas dikenlidir.', wrong: 'Hayır, elma pürüzsüzdür.' },
            en: { correct: 'Yes! The pineapple is thorny.', wrong: 'No, the apple is smooth.' },
            de: { correct: 'Ja! Die Ananas ist stachelig.', wrong: 'Nein, der Apfel ist glatt.' },
            fr: { correct: "Oui ! L'ananas est épineux.", wrong: "Non, la pomme est lisse." },
            nl: { correct: 'Ja! De ananas is stekelig.', wrong: 'Nee, de appel is glad.' },
            az: { correct: 'Bəli! Ananas tikanlıdır.', wrong: 'Xeyr, alma hamardır.' }
        },
        options: [
            { id: 279, word: "ananas", imageUrl: "/images/279.png", isCorrect: true, audioKey: "ananas", spokenText: "ananas" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" }
        ]
    },
    { 
        id: 122, 
        question: "Pürüzsüz olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.DikenliPuruzsuz, 
        speech: {
            tr: { correct: 'Evet! Elma pürüzsüzdür.', wrong: 'Hayır, ananas dikenlidir.' },
            en: { correct: 'Yes! The apple is smooth.', wrong: 'No, the pineapple is thorny.' },
            de: { correct: 'Ja! Der Apfel ist glatt.', wrong: 'Nein, die Ananas ist stachelig.' },
            fr: { correct: "Oui ! La pomme est lisse.", wrong: "Non, l'ananas est épineux." },
            nl: { correct: 'Ja! De appel is glad.', wrong: 'Nee, de ananas is stekelig.' },
            az: { correct: 'Bəli! Alma hamardır.', wrong: 'Xeyr, ananas tikanlıdır.' }
        },
        options: [
            { id: 279, word: "ananas", imageUrl: "/images/279.png", isCorrect: false, audioKey: "ananas", spokenText: "ananas" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" }
        ]
    },
];