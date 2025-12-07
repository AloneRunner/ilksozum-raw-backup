import { ConceptRound, ActivityType } from '../../../../types';

export const insideOutsideData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Köpek - Kulübe (46-47)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Kulübenin içindeki hangisi?", 
        questionAudioKey: "q_which_is_inside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Köpek kulübenin içindedir.', wrong: 'Hayır, köpek kulübenin dışındadır.' },
            en: { correct: 'Yes! The dog is inside the kennel.', wrong: 'No, the dog is outside the kennel.' },
            de: { correct: 'Ja! Der Hund ist in der Hütte.', wrong: 'Nein, der Hund ist außerhalb der Hütte.' },
            fr: { correct: "Oui ! Le chien est dans la niche.", wrong: "Non, le chien est hors de la niche." },
            nl: { correct: 'Ja! De hond is in het hok.', wrong: 'Nee, de hond is buiten het hok.' },
            az: { correct: 'Bəli! İt yuvanın içindədir.', wrong: 'Xeyr, it yuvanın çölündədir.' }
        },
        options: [
            { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: true, audioKey: "kopek_kulubenin_icinde", spokenText: "içinde" },
            { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: false, audioKey: "kopek_kulubenin_disinda", spokenText: "dışında" }
        ]
    },
    { 
        id: 2, 
        question: "Kulübenin dışındaki hangisi?", 
        questionAudioKey: "q_which_is_outside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Köpek kulübenin dışındadır.', wrong: 'Hayır, köpek kulübenin içindedir.' },
            en: { correct: 'Yes! The dog is outside the kennel.', wrong: 'No, the dog is inside the kennel.' },
            de: { correct: 'Ja! Der Hund ist außerhalb der Hütte.', wrong: 'Nein, der Hund ist in der Hütte.' },
            fr: { correct: "Oui ! Le chien est hors de la niche.", wrong: "Non, le chien est dans la niche." },
            nl: { correct: 'Ja! De hond is buiten het hok.', wrong: 'Nee, de hond is in het hok.' },
            az: { correct: 'Bəli! İt yuvanın çölündədir.', wrong: 'Xeyr, it yuvanın içindədir.' }
        },
        options: [
            { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: false, audioKey: "kopek_kulubenin_icinde", spokenText: "içinde" },
            { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: true, audioKey: "kopek_kulubenin_disinda", spokenText: "dışında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Öğrenciler - Otobüs (194-193)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Otobüsün içindeki hangisi?", 
        questionAudioKey: "q_which_is_inside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Öğrenciler otobüsün içindedir.', wrong: 'Hayır, öğrenciler otobüsün dışındadır.' },
            en: { correct: 'Yes! The students are inside the bus.', wrong: 'No, the students are outside the bus.' },
            de: { correct: 'Ja! Die Schüler sind im Bus.', wrong: 'Nein, die Schüler sind außerhalb des Busses.' },
            fr: { correct: "Oui ! Les étudiants sont dans le bus.", wrong: "Non, les étudiants sont hors du bus." },
            nl: { correct: 'Ja! De studenten zijn in de bus.', wrong: 'Nee, de studenten zijn buiten de bus.' },
            az: { correct: 'Bəli! Şagirdlər avtobusun içindədir.', wrong: 'Xeyr, şagirdlər avtobusun çölündədir.' }
        },
        options: [
            { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: true, audioKey: "okul_otobusu_icinde", spokenText: "içinde" },
            { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: false, audioKey: "ogrenciler_disinda", spokenText: "dışında" }
        ]
    },
    { 
        id: 4, 
        question: "Otobüsün dışındaki hangisi?", 
        questionAudioKey: "q_which_is_outside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Öğrenciler otobüsün dışındadır.', wrong: 'Hayır, öğrenciler otobüsün içindedir.' },
            en: { correct: 'Yes! The students are outside the bus.', wrong: 'No, the students are inside the bus.' },
            de: { correct: 'Ja! Die Schüler sind außerhalb des Busses.', wrong: 'Nein, die Schüler sind im Bus.' },
            fr: { correct: "Oui ! Les étudiants sont hors du bus.", wrong: "Non, les étudiants sont dans le bus." },
            nl: { correct: 'Ja! De studenten zijn buiten de bus.', wrong: 'Nee, de studenten zijn in de bus.' },
            az: { correct: 'Bəli! Şagirdlər avtobusun çölündədir.', wrong: 'Xeyr, şagirdlər avtobusun içindədir.' }
        },
        options: [
            { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: false, audioKey: "okul_otobusu_icinde", spokenText: "içinde" },
            { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: true, audioKey: "ogrenciler_disinda", spokenText: "dışında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Elmalar - Sepet (474-475)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Sepetin içindeki hangisi?", 
        questionAudioKey: "q_which_is_inside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Elmalar sepetin içindedir.', wrong: 'Hayır, elmalar sepetin dışındadır.' },
            en: { correct: 'Yes! The apples are inside the basket.', wrong: 'No, the apples are outside the basket.' },
            de: { correct: 'Ja! Die Äpfel sind im Korb.', wrong: 'Nein, die Äpfel sind außerhalb des Korbs.' },
            fr: { correct: "Oui ! Les pommes sont dans le panier.", wrong: "Non, les pommes sont hors du panier." },
            nl: { correct: 'Ja! De appels zitten in de mand.', wrong: 'Nee, de appels liggen buiten de mand.' },
            az: { correct: 'Bəli! Almalar səbətin içindədir.', wrong: 'Xeyr, almalar səbətin çölündədir.' }
        },
        options: [
            { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: true, audioKey: "elmalar_sepette", spokenText: "içinde" },
            { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: false, audioKey: "elmalar_disarda", spokenText: "dışında" }
        ]
    },
    { 
        id: 6, 
        question: "Sepetin dışındaki hangisi?", 
        questionAudioKey: "q_which_is_outside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Elmalar sepetin dışındadır.', wrong: 'Hayır, elmalar sepetin içindedir.' },
            en: { correct: 'Yes! The apples are outside the basket.', wrong: 'No, the apples are inside the basket.' },
            de: { correct: 'Ja! Die Äpfel sind außerhalb des Korbs.', wrong: 'Nein, die Äpfel sind im Korb.' },
            fr: { correct: "Oui ! Les pommes sont hors du panier.", wrong: "Non, les pommes sont dans le panier." },
            nl: { correct: 'Ja! De appels liggen buiten de mand.', wrong: 'Nee, de appels zitten in de mand.' },
            az: { correct: 'Bəli! Almalar səbətin çölündədir.', wrong: 'Xeyr, almalar səbətin içindədir.' }
        },
        options: [
            { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: false, audioKey: "elmalar_sepette", spokenText: "içinde" },
            { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: true, audioKey: "elmalar_disarda", spokenText: "dışında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Kalemler - Kalemlik (543-544)
    // ----------------------------------------------------------------------
    { 
        id: 7, 
        question: "Kalemliğin içindeki hangisi?", 
        questionAudioKey: "q_which_is_inside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Kalemler kalemliğin içindedir.', wrong: 'Hayır, kalemler kalemliğin dışındadır.' },
            en: { correct: 'Yes! The pencils are inside the pencil case.', wrong: 'No, the pencils are outside the pencil case.' },
            de: { correct: 'Ja! Die Stifte sind im Federmäppchen.', wrong: 'Nein, die Stifte sind außerhalb des Federmäppchens.' },
            fr: { correct: "Oui ! Les crayons sont dans la trousse.", wrong: "Non, les crayons sont hors de la trousse." },
            nl: { correct: 'Ja! De potloden zitten in de etui.', wrong: 'Nee, de potloden liggen buiten de etui.' },
            az: { correct: 'Bəli! Qələmlər qələm qabının içindədir.', wrong: 'Xeyr, qələmlər qələm qabının çölündədir.' }
        },
        options: [
            { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik_icinde", spokenText: "içinde" },
            { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik_disinda", spokenText: "dışında" }
        ]
    },
    { 
        id: 8, 
        question: "Kalemliğin dışındaki hangisi?", 
        questionAudioKey: "q_which_is_outside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! Kalemler kalemliğin dışındadır.', wrong: 'Hayır, kalemler kalemliğin içindedir.' },
            en: { correct: 'Yes! The pencils are outside the pencil case.', wrong: 'No, the pencils are inside the pencil case.' },
            de: { correct: 'Ja! Die Stifte sind außerhalb des Federmäppchens.', wrong: 'Nein, die Stifte sind im Federmäppchen.' },
            fr: { correct: "Oui ! Les crayons sont hors de la trousse.", wrong: "Non, les crayons sont dans la trousse." },
            nl: { correct: 'Ja! De potloden liggen buiten de etui.', wrong: 'Nee, de potloden zitten in de etui.' },
            az: { correct: 'Bəli! Qələmlər qələm qabının çölündədir.', wrong: 'Xeyr, qələmlər qələm qabının içindədir.' }
        },
        options: [
            { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik_icinde", spokenText: "içinde" },
            { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik_disinda", spokenText: "dışında" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. İnsan - Çadır (394-395)
    // ----------------------------------------------------------------------
    { 
        id: 9, 
        question: "Çadırın içindeki hangisi?", 
        questionAudioKey: "q_which_is_inside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! İnsan çadırın içindedir.', wrong: 'Hayır, insan çadırın dışındadır.' },
            en: { correct: 'Yes! The person is inside the tent.', wrong: 'No, the person is outside the tent.' },
            de: { correct: 'Ja! Die Person ist im Zelt.', wrong: 'Nein, die Person ist außerhalb des Zeltes.' },
            fr: { correct: "Oui ! La personne est dans la tente.", wrong: "Non, la personne est hors de la tente." },
            nl: { correct: 'Ja! De persoon is in de tent.', wrong: 'Nee, de persoon is buiten de tent.' },
            az: { correct: 'Bəli! İnsan çadırın içindədir.', wrong: 'Xeyr, insan çadırın çölündədir.' }
        },
        options: [
            { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: true, audioKey: "insan_cadir_icinde", spokenText: "içinde" },
            { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: false, audioKey: "insan_cadir_disinda", spokenText: "dışında" }
        ]
    },
    { 
        id: 10, 
        question: "Çadırın dışındaki hangisi?", 
        questionAudioKey: "q_which_is_outside", 
        activityType: ActivityType.InsideOutside, 
        speech: {
            tr: { correct: 'Evet! İnsan çadırın dışındadır.', wrong: 'Hayır, insan çadırın içindedir.' },
            en: { correct: 'Yes! The person is outside the tent.', wrong: 'No, the person is inside the tent.' },
            de: { correct: 'Ja! Die Person ist außerhalb des Zeltes.', wrong: 'Nein, die Person ist im Zelt.' },
            fr: { correct: "Oui ! La personne est hors de la tente.", wrong: "Non, la personne est dans la tente." },
            nl: { correct: 'Ja! De persoon is buiten de tent.', wrong: 'Nee, de persoon is in de tent.' },
            az: { correct: 'Bəli! İnsan çadırın çölündədir.', wrong: 'Xeyr, insan çadırın içindədir.' }
        },
        options: [
            { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: false, audioKey: "insan_cadir_icinde", spokenText: "içinde" },
            { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: true, audioKey: "insan_cadir_disinda", spokenText: "dışında" }
        ]
    }
];