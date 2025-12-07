import { ConceptRound, ActivityType } from '../../../../types';

export const inFrontOfBehindData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Köpek - Kulübe (48-49)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Kulübenin önündeki hangisi?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Köpek kulübenin önündedir.', wrong: 'Hayır, köpek kulübenin arkasındadır.' },
            en: { correct: 'Yes! The dog is in front of the kennel.', wrong: 'No, the dog is behind the kennel.' },
            de: { correct: 'Ja! Der Hund ist vor der Hütte.', wrong: 'Nein, der Hund ist hinter der Hütte.' },
            fr: { correct: "Oui ! Le chien est devant la niche.", wrong: "Non, le chien est derrière la niche." },
            nl: { correct: 'Ja! De hond staat voor het hok.', wrong: 'Nee, de hond staat achter het hok.' },
            az: { correct: 'Bəli! İt yuvanın önündədir.', wrong: 'Xeyr, it yuvanın arxasındadır.' }
        },
        options: [
            { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: true, audioKey: "kopek_kulubenin_onunde", spokenText: "önünde" },
            { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: false, audioKey: "kopek_kulubenin_arkasinda", spokenText: "arkasında" }
        ]
    },
    { 
        id: 2, 
        question: "Kulübenin arkasındaki hangisi?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Köpek kulübenin arkasındadır.', wrong: 'Hayır, köpek kulübenin önündedir.' },
            en: { correct: 'Yes! The dog is behind the kennel.', wrong: 'No, the dog is in front of the kennel.' },
            de: { correct: 'Ja! Der Hund ist hinter der Hütte.', wrong: 'Nein, der Hund ist vor der Hütte.' },
            fr: { correct: "Oui ! Le chien est derrière la niche.", wrong: "Non, le chien est devant la niche." },
            nl: { correct: 'Ja! De hond staat achter het hok.', wrong: 'Nee, de hond staat voor het hok.' },
            az: { correct: 'Bəli! İt yuvanın arxasındadır.', wrong: 'Xeyr, it yuvanın önündədir.' }
        },
        options: [
            { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: false, audioKey: "kopek_kulubenin_onunde", spokenText: "önünde" },
            { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: true, audioKey: "kopek_kulubenin_arkasinda", spokenText: "arkasında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Çocuk - Ağaç (451-450)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Ağacın önündeki hangisi?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Çocuk ağacın önündedir.', wrong: 'Hayır, çocuk ağacın arkasındadır.' },
            en: { correct: 'Yes! The child is in front of the tree.', wrong: 'No, the child is behind the tree.' },
            de: { correct: 'Ja! Das Kind ist vor dem Baum.', wrong: 'Nein, das Kind ist hinter dem Baum.' },
            fr: { correct: "Oui ! L'enfant est devant l'arbre.", wrong: "Non, l'enfant est derrière l'arbre." },
            nl: { correct: 'Ja! Het kind staat voor de boom.', wrong: 'Nee, het kind staat achter de boom.' },
            az: { correct: 'Bəli! Uşaq ağacın önündədir.', wrong: 'Xeyr, uşaq ağacın arxasındadır.' }
        },
        options: [
            { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: true, audioKey: "cocuk_agacin_onunde", spokenText: "önünde" },
            { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: false, audioKey: "cocuk_agacin_arkasinda", spokenText: "arkasında" }
        ]
    },
    { 
        id: 4, 
        question: "Ağacın arkasındaki hangisi?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Çocuk ağacın arkasındadır.', wrong: 'Hayır, çocuk ağacın önündedir.' },
            en: { correct: 'Yes! The child is behind the tree.', wrong: 'No, the child is in front of the tree.' },
            de: { correct: 'Ja! Das Kind ist hinter dem Baum.', wrong: 'Nein, das Kind ist vor dem Baum.' },
            fr: { correct: "Oui ! L'enfant est derrière l'arbre.", wrong: "Non, l'enfant est devant l'arbre." },
            nl: { correct: 'Ja! Het kind staat achter de boom.', wrong: 'Nee, het kind staat voor de boom.' },
            az: { correct: 'Bəli! Uşaq ağacın arxasındadır.', wrong: 'Xeyr, uşaq ağacın önündədir.' }
        },
        options: [
            { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: false, audioKey: "cocuk_agacin_onunde", spokenText: "önünde" },
            { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: true, audioKey: "cocuk_agacin_arkasinda", spokenText: "arkasında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Araba - Ev (452-453)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Evin önündeki hangisi?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Araba evin önündedir.', wrong: 'Hayır, araba evin arkasındadır.' },
            en: { correct: 'Yes! The car is in front of the house.', wrong: 'No, the car is behind the house.' },
            de: { correct: 'Ja! Das Auto ist vor dem Haus.', wrong: 'Nein, das Auto ist hinter dem Haus.' },
            fr: { correct: "Oui ! La voiture est devant la maison.", wrong: "Non, la voiture est derrière la maison." },
            nl: { correct: 'Ja! De auto staat voor het huis.', wrong: 'Nee, de auto staat achter het huis.' },
            az: { correct: 'Bəli! Maşın evin önündədir.', wrong: 'Xeyr, maşın evin arxasındadır.' }
        },
        options: [
            { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: true, audioKey: "araba_evin_onunde", spokenText: "önünde" },
            { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: false, audioKey: "araba_evin_arkasinda", spokenText: "arkasında" }
        ]
    },
    { 
        id: 6, 
        question: "Evin arkasındaki hangisi?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Araba evin arkasındadır.', wrong: 'Hayır, araba evin önündedir.' },
            en: { correct: 'Yes! The car is behind the house.', wrong: 'No, the car is in front of the house.' },
            de: { correct: 'Ja! Das Auto ist hinter dem Haus.', wrong: 'Nein, das Auto ist vor dem Haus.' },
            fr: { correct: "Oui ! La voiture est derrière la maison.", wrong: "Non, la voiture est devant la maison." },
            nl: { correct: 'Ja! De auto staat achter het huis.', wrong: 'Nee, de auto staat voor het huis.' },
            az: { correct: 'Bəli! Maşın evin arxasındadır.', wrong: 'Xeyr, maşın evin önündədir.' }
        },
        options: [
            { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: false, audioKey: "araba_evin_onunde", spokenText: "önünde" },
            { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: true, audioKey: "araba_evin_arkasinda", spokenText: "arkasında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Çocuk - Sandalye (547-545)
    // ----------------------------------------------------------------------
    { 
        id: 7, 
        question: "Sandalyenin önündeki hangisi?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Çocuk sandalyenin önündedir.', wrong: 'Hayır, çocuk sandalyenin arkasındadır.' },
            en: { correct: 'Yes! The child is in front of the chair.', wrong: 'No, the child is behind the chair.' },
            de: { correct: 'Ja! Das Kind ist vor dem Stuhl.', wrong: 'Nein, das Kind ist hinter dem Stuhl.' },
            fr: { correct: "Oui ! L'enfant est devant la chaise.", wrong: "Non, l'enfant est derrière la chaise." },
            nl: { correct: 'Ja! Het kind staat voor de stoel.', wrong: 'Nee, het kind staat achter de stoel.' },
            az: { correct: 'Bəli! Uşaq stulun önündədir.', wrong: 'Xeyr, uşaq stulun arxasındadır.' }
        },
        options: [
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk_sandalyenin_onunde", spokenText: "önünde" },
            { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: false, audioKey: "cocuk_sandalyenin_arkasinda", spokenText: "arkasında" }
        ]
    },
    { 
        id: 8, 
        question: "Sandalyenin arkasındaki hangisi?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Çocuk sandalyenin arkasındadır.', wrong: 'Hayır, çocuk sandalyenin önündedir.' },
            en: { correct: 'Yes! The child is behind the chair.', wrong: 'No, the child is in front of the chair.' },
            de: { correct: 'Ja! Das Kind ist hinter dem Stuhl.', wrong: 'Nein, das Kind ist vor dem Stuhl.' },
            fr: { correct: "Oui ! L'enfant est derrière la chaise.", wrong: "Non, l'enfant est devant la chaise." },
            nl: { correct: 'Ja! Het kind staat achter de stoel.', wrong: 'Nee, het kind staat voor de stoel.' },
            az: { correct: 'Bəli! Uşaq stulun arxasındadır.', wrong: 'Xeyr, uşaq stulun önündədir.' }
        },
        options: [
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk_sandalyenin_onunde", spokenText: "önünde" },
            { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: true, audioKey: "cocuk_sandalyenin_arkasinda", spokenText: "arkasında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. Adam - Kapı (485-484)
    // ----------------------------------------------------------------------
    { 
        id: 9, 
        question: "Kapının önündeki hangisi?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Adam kapının önündedir.', wrong: 'Hayır, adam kapının arkasındadır.' },
            en: { correct: 'Yes! The man is in front of the door.', wrong: 'No, the man is behind the door.' },
            de: { correct: 'Ja! Der Mann ist vor der Tür.', wrong: 'Nein, der Mann ist hinter der Tür.' },
            fr: { correct: "Oui ! L'homme est devant la porte.", wrong: "Non, l'homme est derrière la porte." },
            nl: { correct: 'Ja! De man staat voor de deur.', wrong: 'Nee, de man staat achter de deur.' },
            az: { correct: 'Bəli! Adam qapının önündədir.', wrong: 'Xeyr, adam qapının arxasındadır.' }
        },
        options: [
            { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: true, audioKey: "adam_kapinin_onunde", spokenText: "önünde" },
            { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: false, audioKey: "adam_kapinin_arkasinda", spokenText: "arkasında" }
        ]
    },
    { 
        id: 10, 
        question: "Kapının arkasındaki hangisi?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Adam kapının arkasındadır.', wrong: 'Hayır, adam kapının önündedir.' },
            en: { correct: 'Yes! The man is behind the door.', wrong: 'No, the man is in front of the door.' },
            de: { correct: 'Ja! Der Mann ist hinter der Tür.', wrong: 'Nein, der Mann ist vor der Tür.' },
            fr: { correct: "Oui ! L'homme est derrière la porte.", wrong: "Non, l'homme est devant la porte." },
            nl: { correct: 'Ja! De man staat achter de deur.', wrong: 'Nee, de man staat voor de deur.' },
            az: { correct: 'Bəli! Adam qapının arxasındadır.', wrong: 'Xeyr, adam qapının önündədir.' }
        },
        options: [
            { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: false, audioKey: "adam_kapinin_onunde", spokenText: "önünde" },
            { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: true, audioKey: "adam_kapinin_arkasinda", spokenText: "arkasında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 6. Kalkan - Asker (717-716)
    // ----------------------------------------------------------------------
    { 
        id: 11, 
        question: "Hangi kalkan askerin arkasında?", 
        questionAudioKey: "q_which_is_behind", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Kalkan askerin arkasındadır.', wrong: 'Hayır, kalkan askerin önündedir.' },
            en: { correct: 'Yes! The shield is behind the soldier.', wrong: 'No, the shield is in front of the soldier.' },
            de: { correct: 'Ja! Das Schild ist hinter dem Soldaten.', wrong: 'Nein, das Schild ist vor dem Soldaten.' },
            fr: { correct: "Oui ! Le bouclier est derrière le soldat.", wrong: "Non, le bouclier est devant le soldat." },
            nl: { correct: 'Ja! Het schild is achter de soldaat.', wrong: 'Nee, het schild is voor de soldaat.' },
            az: { correct: 'Bəli! Qalxan əsgərin arxasındadır.', wrong: 'Xeyr, qalxan əsgərin önündədir.' }
        },
        options: [
            { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: true, audioKey: "kalkan_askerin_arkasinda", spokenText: "arkasında" },
            { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: false, audioKey: "kalkan_askerin_onunde", spokenText: "önünde" }
        ]
    },
    { 
        id: 12, 
        question: "Hangi kalkan askerin önünde?", 
        questionAudioKey: "q_which_is_in_front", 
        activityType: ActivityType.InFrontOfBehind, 
        speech: {
            tr: { correct: 'Evet! Kalkan askerin önündedir.', wrong: 'Hayır, kalkan askerin arkasındadır.' },
            en: { correct: 'Yes! The shield is in front of the soldier.', wrong: 'No, the shield is behind the soldier.' },
            de: { correct: 'Ja! Das Schild ist vor dem Soldaten.', wrong: 'Nein, das Schild ist hinter dem Soldaten.' },
            fr: { correct: "Oui ! Le bouclier est devant le soldat.", wrong: "Non, le bouclier est derrière le soldat." },
            nl: { correct: 'Ja! Het schild is voor de soldaat.', wrong: 'Nee, het schild is achter de soldaat.' },
            az: { correct: 'Bəli! Qalxan əsgərin önündədir.', wrong: 'Xeyr, qalxan əsgərin arxasındadır.' }
        },
        options: [
            { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: false, audioKey: "kalkan_askerin_arkasinda", spokenText: "arkasında" },
            { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: true, audioKey: "kalkan_askerin_onunde", spokenText: "önünde" }
        ]
    }
];