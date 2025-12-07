import { ConceptRound, ActivityType } from '../../../../types';

export const parlakMatData: ConceptRound[] = [
    // 1. Yılbaşı Süsü vs Kırmızı Top
    { 
        id: 1, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Yılbaşı süsü parlaktır.', wrong: 'Hayır, top mattır.' },
            en: { correct: 'Yes! The christmas ornament is shiny.', wrong: 'No, the ball is matte.' },
            de: { correct: 'Ja! Der Weihnachtsschmuck ist glänzend.', wrong: 'Nein, der Ball ist matt.' },
            fr: { correct: "Oui ! La décoration de Noël est brillante.", wrong: "Non, la balle est mate." },
            nl: { correct: 'Ja! De kerstversiering is glanzend.', wrong: 'Nee, de bal is mat.' },
            az: { correct: 'Bəli! Yeni il bəzəyi parlaqdır.', wrong: 'Xeyr, top matdır.' }
        },
        options: [
            { id: 155, word: "yılbaşı süsü", imageUrl: "/images/155.png", isCorrect: true, audioKey: "yilbasi_susu", spokenText: "yılbaşı süsü" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" }
        ]
    },
    { 
        id: 2, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Top mattır.', wrong: 'Hayır, yılbaşı süsü parlaktır.' },
            en: { correct: 'Yes! The ball is matte.', wrong: 'No, the christmas ornament is shiny.' },
            de: { correct: 'Ja! Der Ball ist matt.', wrong: 'Nein, der Weihnachtsschmuck ist glänzend.' },
            fr: { correct: "Oui ! La balle est mate.", wrong: "Non, la décoration de Noël est brillante." },
            nl: { correct: 'Ja! De bal is mat.', wrong: 'Nee, de kerstversiering is glanzend.' },
            az: { correct: 'Bəli! Top matdır.', wrong: 'Xeyr, yeni il bəzəyi parlaqdır.' }
        },
        options: [
            { id: 155, word: "yılbaşı süsü", imageUrl: "/images/155.png", isCorrect: false, audioKey: "yilbasi_susu", spokenText: "yılbaşı süsü" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "top" }
        ]
    },

    // 2. Elmas vs Taş
    { 
        id: 3, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Elmas parlaktır.', wrong: 'Hayır, taş mattır.' },
            en: { correct: 'Yes! The diamond is shiny.', wrong: 'No, the stone is matte.' },
            de: { correct: 'Ja! Der Diamant ist glänzend.', wrong: 'Nein, der Stein ist matt.' },
            fr: { correct: "Oui ! Le diamant est brillant.", wrong: "Non, la pierre est mate." },
            nl: { correct: 'Ja! De diamant is glanzend.', wrong: 'Nee, de steen is mat.' },
            az: { correct: 'Bəli! Almaz parlaqdır.', wrong: 'Xeyr, daş matdır.' }
        },
        options: [
            { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: true, audioKey: "elmas", spokenText: "elmas" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "tas", spokenText: "taş" }
        ]
    },
    { 
        id: 4, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Taş mattır.', wrong: 'Hayır, elmas parlaktır.' },
            en: { correct: 'Yes! The stone is matte.', wrong: 'No, the diamond is shiny.' },
            de: { correct: 'Ja! Der Stein ist matt.', wrong: 'Nein, der Diamant ist glänzend.' },
            fr: { correct: "Oui ! La pierre est mate.", wrong: "Non, le diamant est brillant." },
            nl: { correct: 'Ja! De steen is mat.', wrong: 'Nee, de diamant is glanzend.' },
            az: { correct: 'Bəli! Daş matdır.', wrong: 'Xeyr, almaz parlaqdır.' }
        },
        options: [
            { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: false, audioKey: "elmas", spokenText: "elmas" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "tas", spokenText: "taş" }
        ]
    },

    // 3. Yüzük vs Lastik
    { 
        id: 5, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Yüzük parlaktır.', wrong: 'Hayır, lastik mattır.' },
            en: { correct: 'Yes! The ring is shiny.', wrong: 'No, the tire is matte.' },
            de: { correct: 'Ja! Der Ring ist glänzend.', wrong: 'Nein, der Reifen ist matt.' },
            fr: { correct: "Oui ! La bague est brillante.", wrong: "Non, le pneu est mat." },
            nl: { correct: 'Ja! De ring is glanzend.', wrong: 'Nee, de band is mat.' },
            az: { correct: 'Bəli! Üzük parlaqdır.', wrong: 'Xeyr, təkər matdır.' }
        },
        options: [
            { id: 345, word: "yüzük", imageUrl: "/images/345.png", isCorrect: true, audioKey: "yuzuk", spokenText: "yüzük" },
            { id: 670, word: "araba lastiği", imageUrl: "/images/670.png", isCorrect: false, audioKey: "araba_lastigi", spokenText: "araba lastiği" }
        ]
    },
    { 
        id: 6, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Lastik mattır.', wrong: 'Hayır, yüzük parlaktır.' },
            en: { correct: 'Yes! The tire is matte.', wrong: 'No, the ring is shiny.' },
            de: { correct: 'Ja! Der Reifen ist matt.', wrong: 'Nein, der Ring ist glänzend.' },
            fr: { correct: "Oui ! Le pneu est mat.", wrong: "Non, la bague est brillante." },
            nl: { correct: 'Ja! De band is mat.', wrong: 'Nee, de ring is glanzend.' },
            az: { correct: 'Bəli! Təkər matdır.', wrong: 'Xeyr, üzük parlaqdır.' }
        },
        options: [
            { id: 345, word: "yüzük", imageUrl: "/images/345.png", isCorrect: false, audioKey: "yuzuk", spokenText: "yüzük" },
            { id: 670, word: "araba lastiği", imageUrl: "/images/670.png", isCorrect: true, audioKey: "araba_lastigi", spokenText: "araba lastiği" }
        ]
    },

    // 4. Ayna vs Tahta
    { 
        id: 7, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Ayna parlaktır.', wrong: 'Hayır, tahta mattır.' },
            en: { correct: 'Yes! The mirror is shiny.', wrong: 'No, the wood is matte.' },
            de: { correct: 'Ja! Der Spiegel ist glänzend.', wrong: 'Nein, das Holz ist matt.' },
            fr: { correct: "Oui ! Le miroir est brillant.", wrong: "Non, le bois est mat." },
            nl: { correct: 'Ja! De spiegel is glanzend.', wrong: 'Nee, het hout is mat.' },
            az: { correct: 'Bəli! Güzgü parlaqdır.', wrong: 'Xeyr, taxta matdır.' }
        },
        options: [
            { id: 148, word: "ayna", imageUrl: "/images/148.png", isCorrect: true, audioKey: "ayna", spokenText: "ayna" },
            { id: 669, word: "tahta", imageUrl: "/images/669.png", isCorrect: false, audioKey: "tahta", spokenText: "tahta" }
        ]
    },
    { 
        id: 8, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Tahta mattır.', wrong: 'Hayır, ayna parlaktır.' },
            en: { correct: 'Yes! The wood is matte.', wrong: 'No, the mirror is shiny.' },
            de: { correct: 'Ja! Das Holz ist matt.', wrong: 'Nein, der Spiegel ist glänzend.' },
            fr: { correct: "Oui ! Le bois est mat.", wrong: "Non, le miroir est brillant." },
            nl: { correct: 'Ja! Het hout is mat.', wrong: 'Nee, de spiegel is glanzend.' },
            az: { correct: 'Bəli! Taxta matdır.', wrong: 'Xeyr, güzgü parlaqdır.' }
        },
        options: [
            { id: 148, word: "ayna", imageUrl: "/images/148.png", isCorrect: false, audioKey: "ayna", spokenText: "ayna" },
            { id: 669, word: "tahta", imageUrl: "/images/669.png", isCorrect: true, audioKey: "tahta", spokenText: "tahta" }
        ]
    },

    // 5. Disko Topu vs Yün
    { 
        id: 9, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Disko topu parlaktır.', wrong: 'Hayır, yün mattır.' },
            en: { correct: 'Yes! The disco ball is shiny.', wrong: 'No, the wool is matte.' },
            de: { correct: 'Ja! Die Diskokugel ist glänzend.', wrong: 'Nein, die Wolle ist matt.' },
            fr: { correct: "Oui ! La boule à facettes est brillante.", wrong: "Non, la laine est mate." },
            nl: { correct: 'Ja! De discobal is glanzend.', wrong: 'Nee, de wol is mat.' },
            az: { correct: 'Bəli! Disko topu parlaqdır.', wrong: 'Xeyr, yun matdır.' }
        },
        options: [
            { id: 673, word: "disko topu", imageUrl: "/images/673.png", isCorrect: true, audioKey: "disko_topu", spokenText: "disko topu" },
            { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yun", spokenText: "yün" }
        ]
    },
    { 
        id: 10, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Yün mattır.', wrong: 'Hayır, disko topu parlaktır.' },
            en: { correct: 'Yes! The wool is matte.', wrong: 'No, the disco ball is shiny.' },
            de: { correct: 'Ja! Die Wolle ist matt.', wrong: 'Nein, die Diskokugel ist glänzend.' },
            fr: { correct: "Oui ! La laine est mate.", wrong: "Non, la boule à facettes est brillante." },
            nl: { correct: 'Ja! De wol is mat.', wrong: 'Nee, de discobal is glanzend.' },
            az: { correct: 'Bəli! Yun matdır.', wrong: 'Xeyr, disko topu parlaqdır.' }
        },
        options: [
            { id: 673, word: "disko topu", imageUrl: "/images/673.png", isCorrect: false, audioKey: "disko_topu", spokenText: "disko topu" },
            { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yun", spokenText: "yün" }
        ]
    },

    // 6. Tencere vs Saksı
    { 
        id: 11, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Tencere parlaktır.', wrong: 'Hayır, saksı mattır.' },
            en: { correct: 'Yes! The pot is shiny.', wrong: 'No, the flowerpot is matte.' },
            de: { correct: 'Ja! Der Topf ist glänzend.', wrong: 'Nein, der Blumentopf ist matt.' },
            fr: { correct: "Oui ! La casserole est brillante.", wrong: "Non, le pot de fleurs est mat." },
            nl: { correct: 'Ja! De pan is glanzend.', wrong: 'Nee, de bloempot is mat.' },
            az: { correct: 'Bəli! Qazan parlaqdır.', wrong: 'Xeyr, gül dibçəyi matdır.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "tencere" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksi", spokenText: "saksı" }
        ]
    },
    { 
        id: 12, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Saksı mattır.', wrong: 'Hayır, tencere parlaktır.' },
            en: { correct: 'Yes! The flowerpot is matte.', wrong: 'No, the pot is shiny.' },
            de: { correct: 'Ja! Der Blumentopf ist matt.', wrong: 'Nein, der Topf ist glänzend.' },
            fr: { correct: "Oui ! Le pot de fleurs est mat.", wrong: "Non, la casserole est brillante." },
            nl: { correct: 'Ja! De bloempot is mat.', wrong: 'Nee, de pan is glanzend.' },
            az: { correct: 'Bəli! Gül dibçəyi matdır.', wrong: 'Xeyr, qazan parlaqdır.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "tencere" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksi", spokenText: "saksı" }
        ]
    },

    // 7. Ayakkabı (Parlak vs Mat/Eski)
    { 
        id: 13, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Bu ayakkabı parlaktır.', wrong: 'Hayır, bu ayakkabı mattır.' },
            en: { correct: 'Yes! This shoe is shiny.', wrong: 'No, this shoe is matte.' },
            de: { correct: 'Ja! Dieser Schuh ist glänzend.', wrong: 'Nein, dieser Schuh ist matt.' },
            fr: { correct: "Oui ! Cette chaussure est brillante.", wrong: "Non, cette chaussure est mate." },
            nl: { correct: 'Ja! Deze schoen is glanzend.', wrong: 'Nee, deze schoen is mat.' },
            az: { correct: 'Bəli! Bu ayaqqabı parlaqdır.', wrong: 'Xeyr, bu ayaqqabı matdır.' }
        },
        options: [
            { id: 672, word: "ayakkabı", imageUrl: "/images/672.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },
    { 
        id: 14, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Bu ayakkabı mattır.', wrong: 'Hayır, bu ayakkabı parlaktır.' },
            en: { correct: 'Yes! This shoe is matte.', wrong: 'No, this shoe is shiny.' },
            de: { correct: 'Ja! Dieser Schuh ist matt.', wrong: 'Nein, dieser Schuh ist glänzend.' },
            fr: { correct: "Oui ! Cette chaussure est mate.", wrong: "Non, cette chaussure est brillante." },
            nl: { correct: 'Ja! Deze schoen is mat.', wrong: 'Nee, deze schoen is glanzend.' },
            az: { correct: 'Bəli! Bu ayaqqabı matdır.', wrong: 'Xeyr, bu ayaqqabı parlaqdır.' }
        },
        options: [
            { id: 672, word: "ayakkabı", imageUrl: "/images/672.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },

    // 8. Jeton vs Silgi
    { 
        id: 15, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Jeton parlaktır.', wrong: 'Hayır, silgi mattır.' },
            en: { correct: 'Yes! The token is shiny.', wrong: 'No, the eraser is matte.' },
            de: { correct: 'Ja! Die Münze ist glänzend.', wrong: 'Nein, der Radiergummi ist matt.' },
            fr: { correct: "Oui ! Le jeton est brillant.", wrong: "Non, la gomme est mate." },
            nl: { correct: 'Ja! De munt is glanzend.', wrong: 'Nee, de gum is mat.' },
            az: { correct: 'Bəli! Jeton parlaqdır.', wrong: 'Xeyr, pozan matdır.' }
        },
        options: [
            { id: 33, word: "jeton", imageUrl: "/images/33.png", isCorrect: true, audioKey: "jeton", spokenText: "jeton" },
            { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "silgi" }
        ]
    },
    { 
        id: 16, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Silgi mattır.', wrong: 'Hayır, jeton parlaktır.' },
            en: { correct: 'Yes! The eraser is matte.', wrong: 'No, the token is shiny.' },
            de: { correct: 'Ja! Der Radiergummi ist matt.', wrong: 'Nein, die Münze ist glänzend.' },
            fr: { correct: "Oui ! La gomme est mate.", wrong: "Non, le jeton est brillant." },
            nl: { correct: 'Ja! De gum is mat.', wrong: 'Nee, de munt is glanzend.' },
            az: { correct: 'Bəli! Pozan matdır.', wrong: 'Xeyr, jeton parlaqdır.' }
        },
        options: [
            { id: 33, word: "jeton", imageUrl: "/images/33.png", isCorrect: false, audioKey: "jeton", spokenText: "jeton" },
            { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "silgi" }
        ]
    },

    // 9. Folyo vs Kağıt
    { 
        id: 17, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Folyo parlaktır.', wrong: 'Hayır, kağıt mattır.' },
            en: { correct: 'Yes! The foil is shiny.', wrong: 'No, the paper is matte.' },
            de: { correct: 'Ja! Die Folie ist glänzend.', wrong: 'Nein, das Papier ist matt.' },
            fr: { correct: "Oui ! La feuille est brillante.", wrong: "Non, le papier est mat." },
            nl: { correct: 'Ja! De folie is glanzend.', wrong: 'Nee, het papier is mat.' },
            az: { correct: 'Bəli! Folqa parlaqdır.', wrong: 'Xeyr, kağız matdır.' }
        },
        options: [
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },
    { 
        id: 18, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Kağıt mattır.', wrong: 'Hayır, folyo parlaktır.' },
            en: { correct: 'Yes! The paper is matte.', wrong: 'No, the foil is shiny.' },
            de: { correct: 'Ja! Das Papier ist matt.', wrong: 'Nein, die Folie ist glänzend.' },
            fr: { correct: "Oui ! Le papier est mat.", wrong: "Non, la feuille est brillante." },
            nl: { correct: 'Ja! Het papier is mat.', wrong: 'Nee, de folie is glanzend.' },
            az: { correct: 'Bəli! Kağız matdır.', wrong: 'Xeyr, folqa parlaqdır.' }
        },
        options: [
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },

    // 10. Misket vs Kırmızı Top
    { 
        id: 19, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Misket parlaktır.', wrong: 'Hayır, top mattır.' },
            en: { correct: 'Yes! The marble is shiny.', wrong: 'No, the ball is matte.' },
            de: { correct: 'Ja! Die Murmel ist glänzend.', wrong: 'Nein, der Ball ist matt.' },
            fr: { correct: "Oui ! La bille est brillante.", wrong: "Non, la balle est mate." },
            nl: { correct: 'Ja! De knikker is glanzend.', wrong: 'Nee, de bal is mat.' },
            az: { correct: 'Bəli! Mərmər daşı parlaqdır.', wrong: 'Xeyr, top matdır.' }
        },
        options: [
            { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "misket" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" }
        ]
    },
    { 
        id: 20, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Top mattır.', wrong: 'Hayır, misket parlaktır.' },
            en: { correct: 'Yes! The ball is matte.', wrong: 'No, the marble is shiny.' },
            de: { correct: 'Ja! Der Ball ist matt.', wrong: 'Nein, die Murmel ist glänzend.' },
            fr: { correct: "Oui ! La balle est mate.", wrong: "Non, la bille est brillante." },
            nl: { correct: 'Ja! De bal is mat.', wrong: 'Nee, de knikker is glanzend.' },
            az: { correct: 'Bəli! Top matdır.', wrong: 'Xeyr, mərmər daşı parlaqdır.' }
        },
        options: [
            { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "misket" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "top" }
        ]
    },

    // 11. Tencere vs Tava
    { 
        id: 21, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Tencere parlaktır.', wrong: 'Hayır, tava mattır.' },
            en: { correct: 'Yes! The pot is shiny.', wrong: 'No, the pan is matte.' },
            de: { correct: 'Ja! Der Topf ist glänzend.', wrong: 'Nein, die Pfanne ist matt.' },
            fr: { correct: "Oui ! La casserole est brillante.", wrong: "Non, la poêle est mate." },
            nl: { correct: 'Ja! De pan is glanzend.', wrong: 'Nee, de koekenpan is mat.' },
            az: { correct: 'Bəli! Qazan parlaqdır.', wrong: 'Xeyr, tava matdır.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "tencere" },
            { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: false, audioKey: "tava", spokenText: "tava" }
        ]
    },
    { 
        id: 22, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Tava mattır.', wrong: 'Hayır, tencere parlaktır.' },
            en: { correct: 'Yes! The pan is matte.', wrong: 'No, the pot is shiny.' },
            de: { correct: 'Ja! Die Pfanne ist matt.', wrong: 'Nein, der Topf ist glänzend.' },
            fr: { correct: "Oui ! La poêle est mate.", wrong: "Non, la casserole est brillante." },
            nl: { correct: 'Ja! De koekenpan is mat.', wrong: 'Nee, de pan is glanzend.' },
            az: { correct: 'Bəli! Tava matdır.', wrong: 'Xeyr, qazan parlaqdır.' }
        },
        options: [
            { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "tencere" },
            { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: true, audioKey: "tava", spokenText: "tava" }
        ]
    },

    // 12. Bardak (parlak vs mat)
    { 
        id: 23, 
        question: "Parlak olan hangisi?", 
        questionAudioKey: "q_which_is_shiny", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Bu bardak parlaktır.', wrong: 'Hayır, bu bardak mattır.' },
            en: { correct: 'Yes! This glass is shiny.', wrong: 'No, this glass is matte.' },
            de: { correct: 'Ja! Dieses Glas ist glänzend.', wrong: 'Nein, dieses Glas ist matt.' },
            fr: { correct: "Oui ! Ce verre est brillant.", wrong: "Non, ce verre est mat." },
            nl: { correct: 'Ja! Dit glas is glanzend.', wrong: 'Nee, dit glas is mat.' },
            az: { correct: 'Bəli! Bu stəkan parlaqdır.', wrong: 'Xeyr, bu stəkan matdır.' }
        },
        options: [
            { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" },
            { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
    { 
        id: 24, 
        question: "Mat olan hangisi?", 
        questionAudioKey: "q_which_is_matte", 
        activityType: ActivityType.ParlakMat, 
        speech: {
            tr: { correct: 'Evet! Bu bardak mattır.', wrong: 'Hayır, bu bardak parlaktır.' },
            en: { correct: 'Yes! This glass is matte.', wrong: 'No, this glass is shiny.' },
            de: { correct: 'Ja! Dieses Glas ist matt.', wrong: 'Nein, dieses Glas ist glänzend.' },
            fr: { correct: "Oui ! Ce verre est mat.", wrong: "Non, ce verre est brillant." },
            nl: { correct: 'Ja! Dit glas is mat.', wrong: 'Nee, dit glas is glanzend.' },
            az: { correct: 'Bəli! Bu stəkan matdır.', wrong: 'Xeyr, bu stəkan parlaqdır.' }
        },
        options: [
            { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" },
            { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
];