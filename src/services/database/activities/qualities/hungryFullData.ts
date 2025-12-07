import { ConceptRound, ActivityType } from '../../../../types';

export const hungryFullData: ConceptRound[] = [
    // 1. Kedi
    { 
        id: 205, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Kedi açtır.', wrong: 'Hayır, kedi toktur.' },
            en: { correct: 'Yes! The cat is hungry.', wrong: 'No, the cat is full.' },
            de: { correct: 'Ja! Die Katze ist hungrig.', wrong: 'Nein, die Katze ist satt.' },
            fr: { correct: "Oui ! Le chat a faim.", wrong: "Non, le chat est rassasié." },
            nl: { correct: 'Ja! De kat heeft honger.', wrong: 'Nee, de kat is vol.' },
            az: { correct: 'Bəli! Pişik acdır.', wrong: 'Xeyr, pişik toxdur.' }
        },
        options: [
            { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: true, audioKey: "kedi_ac", spokenText: "kedi" },
            { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: false, audioKey: "kedi_tok", spokenText: "kedi" }
        ]
    },
    { 
        id: 206, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Kedi toktur.', wrong: 'Hayır, kedi açtır.' },
            en: { correct: 'Yes! The cat is full.', wrong: 'No, the cat is hungry.' },
            de: { correct: 'Ja! Die Katze ist satt.', wrong: 'Nein, die Katze ist hungrig.' },
            fr: { correct: "Oui ! Le chat est rassasié.", wrong: "Non, le chat a faim." },
            nl: { correct: 'Ja! De kat is vol.', wrong: 'Nee, de kat heeft honger.' },
            az: { correct: 'Bəli! Pişik toxdur.', wrong: 'Xeyr, pişik acdır.' }
        },
        options: [
            { id: 151, word: "kedi", imageUrl: "/images/151.png", isCorrect: false, audioKey: "kedi_ac", spokenText: "kedi" },
            { id: 152, word: "kedi", imageUrl: "/images/152.png", isCorrect: true, audioKey: "kedi_tok", spokenText: "kedi" }
        ]
    },

    // 2. Sincap
    { 
        id: 207, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Sincap açtır.', wrong: 'Hayır, sincap toktur.' },
            en: { correct: 'Yes! The squirrel is hungry.', wrong: 'No, the squirrel is full.' },
            de: { correct: 'Ja! Das Eichhörnchen ist hungrig.', wrong: 'Nein, das Eichhörnchen ist satt.' },
            fr: { correct: "Oui ! L'écureuil a faim.", wrong: "Non, l'écureuil est rassasié." },
            nl: { correct: 'Ja! De eekhoorn heeft honger.', wrong: 'Nee, de eekhoorn is vol.' },
            az: { correct: 'Bəli! Dələ acdır.', wrong: 'Xeyr, dələ toxdur.' }
        },
        options: [
            { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: true, audioKey: "sincap_ac", spokenText: "sincap" },
            { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: false, audioKey: "sincap_tok", spokenText: "sincap" }
        ]
    },
    { 
        id: 208, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Sincap toktur.', wrong: 'Hayır, sincap açtır.' },
            en: { correct: 'Yes! The squirrel is full.', wrong: 'No, the squirrel is hungry.' },
            de: { correct: 'Ja! Das Eichhörnchen ist satt.', wrong: 'Nein, das Eichhörnchen ist hungrig.' },
            fr: { correct: "Oui ! L'écureuil est rassasié.", wrong: "Non, l'écureuil a faim." },
            nl: { correct: 'Ja! De eekhoorn is vol.', wrong: 'Nee, de eekhoorn heeft honger.' },
            az: { correct: 'Bəli! Dələ toxdur.', wrong: 'Xeyr, dələ acdır.' }
        },
        options: [
            { id: 489, word: "sincap", imageUrl: "/images/489.png", isCorrect: false, audioKey: "sincap_ac", spokenText: "sincap" },
            { id: 417, word: "sincap", imageUrl: "/images/417.png", isCorrect: true, audioKey: "sincap_tok", spokenText: "sincap" }
        ]
    },

    // 3. Bebek
    { 
        id: 209, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Bebek açtır.', wrong: 'Hayır, bebek toktur.' },
            en: { correct: 'Yes! The baby is hungry.', wrong: 'No, the baby is full.' },
            de: { correct: 'Ja! Das Baby ist hungrig.', wrong: 'Nein, das Baby ist satt.' },
            fr: { correct: "Oui ! Le bébé a faim.", wrong: "Non, le bébé est rassasié." },
            nl: { correct: 'Ja! De baby heeft honger.', wrong: 'Nee, de baby is vol.' },
            az: { correct: 'Bəli! Körpə acdır.', wrong: 'Xeyr, körpə toxdur.' }
        },
        options: [
            { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: true, audioKey: "bebek_ac", spokenText: "bebek" },
            { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: false, audioKey: "bebek_tok", spokenText: "bebek" }
        ]
    },
    { 
        id: 210, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Bebek toktur.', wrong: 'Hayır, bebek açtır.' },
            en: { correct: 'Yes! The baby is full.', wrong: 'No, the baby is hungry.' },
            de: { correct: 'Ja! Das Baby ist satt.', wrong: 'Nein, das Baby ist hungrig.' },
            fr: { correct: "Oui ! Le bébé est rassasié.", wrong: "Non, le bébé a faim." },
            nl: { correct: 'Ja! De baby is vol.', wrong: 'Nee, de baby heeft honger.' },
            az: { correct: 'Bəli! Körpə toxdur.', wrong: 'Xeyr, körpə acdır.' }
        },
        options: [
            { id: 752, word: "bebek", imageUrl: "/images/752.png", isCorrect: false, audioKey: "bebek_ac", spokenText: "bebek" },
            { id: 751, word: "bebek", imageUrl: "/images/751.png", isCorrect: true, audioKey: "bebek_tok", spokenText: "bebek" }
        ]
    },

    // 4. Canavar
    { 
        id: 211, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Canavar açtır.', wrong: 'Hayır, canavar toktur.' },
            en: { correct: 'Yes! The monster is hungry.', wrong: 'No, the monster is full.' },
            de: { correct: 'Ja! Das Monster ist hungrig.', wrong: 'Nein, das Monster ist satt.' },
            fr: { correct: "Oui ! Le monstre a faim.", wrong: "Non, le monstre est rassasié." },
            nl: { correct: 'Ja! Het monster heeft honger.', wrong: 'Nee, het monster is vol.' },
            az: { correct: 'Bəli! Bədheybət acdır.', wrong: 'Xeyr, bədheybət toxdur.' }
        },
        options: [
            { id: 755, word: "canavar", imageUrl: "/images/755.png", isCorrect: true, audioKey: "canavar_ac", spokenText: "canavar" },
            { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: false, audioKey: "canavar_tok", spokenText: "canavar" }
        ]
    },
    { 
        id: 212, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Canavar toktur.', wrong: 'Hayır, canavar açtır.' },
            en: { correct: 'Yes! The monster is full.', wrong: 'No, the monster is hungry.' },
            de: { correct: 'Ja! Das Monster ist satt.', wrong: 'Nein, das Monster ist hungrig.' },
            fr: { correct: "Oui ! Le monstre est rassasié.", wrong: "Non, le monstre a faim." },
            nl: { correct: 'Ja! Het monster is vol.', wrong: 'Nee, het monster heeft honger.' },
            az: { correct: 'Bəli! Bədheybət toxdur.', wrong: 'Xeyr, bədheybət acdır.' }
        },
        options: [
            { id: 755, word: "canavar", imageUrl: "/images/755.png", isCorrect: false, audioKey: "canavar_ac", spokenText: "canavar" },
            { id: 756, word: "canavar", imageUrl: "/images/756.png", isCorrect: true, audioKey: "canavar_tok", spokenText: "canavar" }
        ]
    },

    // 5. Maymun
    { 
        id: 213, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Maymun açtır.', wrong: 'Hayır, maymun toktur.' },
            en: { correct: 'Yes! The monkey is hungry.', wrong: 'No, the monkey is full.' },
            de: { correct: 'Ja! Der Affe ist hungrig.', wrong: 'Nein, der Affe ist satt.' },
            fr: { correct: "Oui ! Le singe a faim.", wrong: "Non, le singe est rassasié." },
            nl: { correct: 'Ja! De aap heeft honger.', wrong: 'Nee, de aap is vol.' },
            az: { correct: 'Bəli! Meymun acdır.', wrong: 'Xeyr, meymun toxdur.' }
        },
        options: [
            { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: true, audioKey: "maymun_ac", spokenText: "maymun" },
            { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: false, audioKey: "maymun_tok", spokenText: "maymun" }
        ]
    },
    { 
        id: 214, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Maymun toktur.', wrong: 'Hayır, maymun açtır.' },
            en: { correct: 'Yes! The monkey is full.', wrong: 'No, the monkey is hungry.' },
            de: { correct: 'Ja! Der Affe ist satt.', wrong: 'Nein, der Affe ist hungrig.' },
            fr: { correct: "Oui ! Le singe est rassasié.", wrong: "Non, le singe a faim." },
            nl: { correct: 'Ja! De aap is vol.', wrong: 'Nee, de aap heeft honger.' },
            az: { correct: 'Bəli! Meymun toxdur.', wrong: 'Xeyr, meymun acdır.' }
        },
        options: [
            { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: false, audioKey: "maymun_ac", spokenText: "maymun" },
            { id: 277, word: "maymun", imageUrl: "/images/277.png", isCorrect: true, audioKey: "maymun_tok", spokenText: "maymun" }
        ]
    },

    // 6. Kuş
    { 
        id: 215, 
        question: "Aç olan hangisi?", 
        questionAudioKey: "q_which_is_hungry_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Kuş açtır.', wrong: 'Hayır, kuş toktur.' },
            en: { correct: 'Yes! The bird is hungry.', wrong: 'No, the bird is full.' },
            de: { correct: 'Ja! Der Vogel ist hungrig.', wrong: 'Nein, der Vogel ist satt.' },
            fr: { correct: "Oui ! L'oiseau a faim.", wrong: "Non, l'oiseau est rassasié." },
            nl: { correct: 'Ja! De vogel heeft honger.', wrong: 'Nee, de vogel is vol.' },
            az: { correct: 'Bəli! Quş acdır.', wrong: 'Xeyr, quş toxdur.' }
        },
        options: [
            { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: true, audioKey: "kus_ac", spokenText: "kuş" },
            { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: false, audioKey: "kus_tok", spokenText: "kuş" }
        ]
    },
    { 
        id: 216, 
        question: "Tok olan hangisi?", 
        questionAudioKey: "q_which_is_satiated_person", 
        activityType: ActivityType.HungryFull, 
        speech: {
            tr: { correct: 'Evet! Kuş toktur.', wrong: 'Hayır, kuş açtır.' },
            en: { correct: 'Yes! The bird is full.', wrong: 'No, the bird is hungry.' },
            de: { correct: 'Ja! Der Vogel ist satt.', wrong: 'Nein, der Vogel ist hungrig.' },
            fr: { correct: "Oui ! L'oiseau est rassasié.", wrong: "Non, l'oiseau a faim." },
            nl: { correct: 'Ja! De vogel is vol.', wrong: 'Nee, de vogel heeft honger.' },
            az: { correct: 'Bəli! Quş toxdur.', wrong: 'Xeyr, quş acdır.' }
        },
        options: [
            { id: 749, word: "kuş", imageUrl: "/images/749.png", isCorrect: false, audioKey: "kus_ac", spokenText: "kuş" },
            { id: 750, word: "kuş", imageUrl: "/images/750.png", isCorrect: true, audioKey: "kus_tok", spokenText: "kuş" }
        ]
    },
];