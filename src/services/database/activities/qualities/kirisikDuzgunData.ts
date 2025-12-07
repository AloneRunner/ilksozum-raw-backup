import { ConceptRound, ActivityType } from '../../../../types';

export const kirisikDuzgunData: ConceptRound[] = [
    // 1. Gömlek
    { 
        id: 231, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Gömlek kırışıktır.', wrong: 'Hayır, gömlek düzgündür.' },
            en: { correct: 'Yes! The shirt is wrinkled.', wrong: 'No, the shirt is smooth.' },
            de: { correct: 'Ja! Das Hemd ist zerknittert.', wrong: 'Nein, das Hemd ist glatt.' },
            fr: { correct: "Oui ! La chemise est froissée.", wrong: "Non, la chemise est lisse." },
            nl: { correct: 'Ja! Het overhemd is gekreukt.', wrong: 'Nee, het overhemd is glad.' },
            az: { correct: 'Bəli! Köynək qırışıqdır.', wrong: 'Xeyr, köynək düzgündür.' }
        },
        options: [
            { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "gömlek" },
            { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "gömlek" }
        ]
    },
    { 
        id: 232, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Gömlek düzgündür.', wrong: 'Hayır, gömlek kırışıktır.' },
            en: { correct: 'Yes! The shirt is smooth.', wrong: 'No, the shirt is wrinkled.' },
            de: { correct: 'Ja! Das Hemd ist glatt.', wrong: 'Nein, das Hemd ist zerknittert.' },
            fr: { correct: "Oui ! La chemise est lisse.", wrong: "Non, la chemise est froissée." },
            nl: { correct: 'Ja! Het overhemd is glad.', wrong: 'Nee, het overhemd is gekreukt.' },
            az: { correct: 'Bəli! Köynək düzgündür.', wrong: 'Xeyr, köynək qırışıqdır.' }
        },
        options: [
            { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "gömlek" },
            { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "gömlek" }
        ]
    },

    // 2. Kağıt
    { 
        id: 233, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Kağıt kırışıktır.', wrong: 'Hayır, kağıt düzgündür.' },
            en: { correct: 'Yes! The paper is wrinkled.', wrong: 'No, the paper is smooth.' },
            de: { correct: 'Ja! Das Papier ist zerknittert.', wrong: 'Nein, das Papier ist glatt.' },
            fr: { correct: "Oui ! Le papier est froissé.", wrong: "Non, le papier est lisse." },
            nl: { correct: 'Ja! Het papier is gekreukt.', wrong: 'Nee, het papier is glad.' },
            az: { correct: 'Bəli! Kağız qırışıqdır.', wrong: 'Xeyr, kağız düzgündür.' }
        },
        options: [
            { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: true, audioKey: "kagit", spokenText: "kağıt" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },
    { 
        id: 234, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Kağıt düzgündür.', wrong: 'Hayır, kağıt kırışıktır.' },
            en: { correct: 'Yes! The paper is smooth.', wrong: 'No, the paper is wrinkled.' },
            de: { correct: 'Ja! Das Papier ist glatt.', wrong: 'Nein, das Papier ist zerknittert.' },
            fr: { correct: "Oui ! Le papier est lisse.", wrong: "Non, le papier est froissé." },
            nl: { correct: 'Ja! Het papier is glad.', wrong: 'Nee, het papier is gekreukt.' },
            az: { correct: 'Bəli! Kağız düzgündür.', wrong: 'Xeyr, kağız qırışıqdır.' }
        },
        options: [
            { id: 668, word: "kağıt", imageUrl: "/images/668.png", isCorrect: false, audioKey: "kagit", spokenText: "kağıt" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },

    // 3. Pantolon
    { 
        id: 235, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Pantolon kırışıktır.', wrong: 'Hayır, pantolon düzgündür.' },
            en: { correct: 'Yes! The pants are wrinkled.', wrong: 'No, the pants are smooth.' },
            de: { correct: 'Ja! Die Hose ist zerknittert.', wrong: 'Nein, die Hose ist glatt.' },
            fr: { correct: "Oui ! Le pantalon est froissé.", wrong: "Non, le pantalon est lisse." },
            nl: { correct: 'Ja! De broek is gekreukt.', wrong: 'Nee, de broek is glad.' },
            az: { correct: 'Bəli! Şalvar qırışıqdır.', wrong: 'Xeyr, şalvar düzgündür.' }
        },
        options: [
            { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: true, audioKey: "pantolon", spokenText: "pantolon" },
            { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: false, audioKey: "pantolon", spokenText: "pantolon" }
        ]
    },
    { 
        id: 236, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Pantolon düzgündür.', wrong: 'Hayır, pantolon kırışıktır.' },
            en: { correct: 'Yes! The pants are smooth.', wrong: 'No, the pants are wrinkled.' },
            de: { correct: 'Ja! Die Hose ist glatt.', wrong: 'Nein, die Hose ist zerknittert.' },
            fr: { correct: "Oui ! Le pantalon est lisse.", wrong: "Non, le pantalon est froissé." },
            nl: { correct: 'Ja! De broek is glad.', wrong: 'Nee, de broek is gekreukt.' },
            az: { correct: 'Bəli! Şalvar düzgündür.', wrong: 'Xeyr, şalvar qırışıqdır.' }
        },
        options: [
            { id: 732, word: "pantolon", imageUrl: "/images/732.png", isCorrect: false, audioKey: "pantolon", spokenText: "pantolon" },
            { id: 79, word: "pantolon", imageUrl: "/images/79.png", isCorrect: true, audioKey: "pantolon", spokenText: "pantolon" }
        ]
    },

    // 4. Yatak
    { 
        id: 237, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Yatak dağınıktır.', wrong: 'Hayır, yatak düzgündür.' },
            en: { correct: 'Yes! The bed is wrinkled.', wrong: 'No, the bed is smooth.' },
            de: { correct: 'Ja! Das Bett ist unordentlich.', wrong: 'Nein, das Bett ist ordentlich.' },
            fr: { correct: "Oui ! Le lit est défait.", wrong: "Non, le lit est fait." },
            nl: { correct: 'Ja! Het bed is rommelig.', wrong: 'Nee, het bed is netjes.' },
            az: { correct: 'Bəli! Yataq dağınıqdır.', wrong: 'Xeyr, yataq düzgündür.' }
        },
        options: [
            { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" },
            { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" }
        ]
    },
    { 
        id: 238, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Yatak düzgündür.', wrong: 'Hayır, yatak dağınıktır.' },
            en: { correct: 'Yes! The bed is smooth.', wrong: 'No, the bed is wrinkled.' },
            de: { correct: 'Ja! Das Bett ist ordentlich.', wrong: 'Nein, das Bett ist unordentlich.' },
            fr: { correct: "Oui ! Le lit est fait.", wrong: "Non, le lit est défait." },
            nl: { correct: 'Ja! Het bed is netjes.', wrong: 'Nee, het bed is rommelig.' },
            az: { correct: 'Bəli! Yataq düzgündür.', wrong: 'Xeyr, yataq dağınıqdır.' }
        },
        options: [
            { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" },
            { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" }
        ]
    },

    // 5. Çamaşır vs Havlu
    { 
        id: 239, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Çamaşır kırışıktır.', wrong: 'Hayır, havlu düzgündür.' },
            en: { correct: 'Yes! The laundry is wrinkled.', wrong: 'No, the towel is smooth.' },
            de: { correct: 'Ja! Die Wäsche ist zerknittert.', wrong: 'Nein, das Handtuch ist glatt.' },
            fr: { correct: "Oui ! Le linge est froissé.", wrong: "Non, la serviette est lisse." },
            nl: { correct: 'Ja! De was is gekreukt.', wrong: 'Nee, de handdoek is glad.' },
            az: { correct: 'Bəli! Paltar qırışıqdır.', wrong: 'Xeyr, dəsmal düzgündür.' }
        },
        options: [
            { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: true, audioKey: "camasir", spokenText: "çamaşır" },
            { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: false, audioKey: "havlu", spokenText: "havlu" }
        ]
    },
    { 
        id: 240, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Havlu düzgündür.', wrong: 'Hayır, çamaşır kırışıktır.' },
            en: { correct: 'Yes! The towel is smooth.', wrong: 'No, the laundry is wrinkled.' },
            de: { correct: 'Ja! Das Handtuch ist glatt.', wrong: 'Nein, die Wäsche ist zerknittert.' },
            fr: { correct: "Oui ! La serviette est lisse.", wrong: "Non, le linge est froissé." },
            nl: { correct: 'Ja! De handdoek is glad.', wrong: 'Nee, de was is gekreukt.' },
            az: { correct: 'Bəli! Dəsmal düzgündür.', wrong: 'Xeyr, paltar qırışıqdır.' }
        },
        options: [
            { id: 735, word: "çamaşır", imageUrl: "/images/735.png", isCorrect: false, audioKey: "camasir", spokenText: "çamaşır" },
            { id: 523, word: "havlu", imageUrl: "/images/523.png", isCorrect: true, audioKey: "havlu", spokenText: "havlu" }
        ]
    },

    // 6. Elma
    { 
        id: 241, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Elma buruşuktur.', wrong: 'Hayır, elma düzgündür.' },
            en: { correct: 'Yes! The apple is wrinkled.', wrong: 'No, the apple is smooth.' },
            de: { correct: 'Ja! Der Apfel ist schrumpelig.', wrong: 'Nein, der Apfel ist glatt.' },
            fr: { correct: "Oui ! La pomme est flétrie.", wrong: "Non, la pomme est lisse." },
            nl: { correct: 'Ja! De appel is rimpelig.', wrong: 'Nee, de appel is glad.' },
            az: { correct: 'Bəli! Alma qırışıqdır.', wrong: 'Xeyr, alma düzgündür.' }
        },
        options: [
            { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: true, audioKey: "elma", spokenText: "elma" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" }
        ]
    },
    { 
        id: 242, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Elma düzgündür.', wrong: 'Hayır, elma buruşuktur.' },
            en: { correct: 'Yes! The apple is smooth.', wrong: 'No, the apple is wrinkled.' },
            de: { correct: 'Ja! Der Apfel ist glatt.', wrong: 'Nein, der Apfel ist schrumpelig.' },
            fr: { correct: "Oui ! La pomme est lisse.", wrong: "Non, la pomme est flétrie." },
            nl: { correct: 'Ja! De appel is glad.', wrong: 'Nee, de appel is rimpelig.' },
            az: { correct: 'Bəli! Alma düzgündür.', wrong: 'Xeyr, alma qırışıqdır.' }
        },
        options: [
            { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" }
        ]
    },

    // 7. Yüz (Yaşlı vs Genç)
    { 
        id: 243, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Yüz kırışıktır.', wrong: 'Hayır, yüz pürüzsüzdür.' },
            en: { correct: 'Yes! The face is wrinkled.', wrong: 'No, the face is smooth.' },
            de: { correct: 'Ja! Das Gesicht ist faltig.', wrong: 'Nein, das Gesicht ist glatt.' },
            fr: { correct: "Oui ! Le visage est ridé.", wrong: "Non, le visage est lisse." },
            nl: { correct: 'Ja! Het gezicht is gerimpeld.', wrong: 'Nee, het gezicht is glad.' },
            az: { correct: 'Bəli! Üz qırışıqdır.', wrong: 'Xeyr, üz hamardır.' }
        },
        options: [
            { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: true, audioKey: "yuz", spokenText: "yüz" },
            { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: false, audioKey: "yuz", spokenText: "yüz" }
        ]
    },
    { 
        id: 244, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Yüz pürüzsüzdür.', wrong: 'Hayır, yüz kırışıktır.' },
            en: { correct: 'Yes! The face is smooth.', wrong: 'No, the face is wrinkled.' },
            de: { correct: 'Ja! Das Gesicht ist glatt.', wrong: 'Nein, das Gesicht ist faltig.' },
            fr: { correct: "Oui ! Le visage est lisse.", wrong: "Non, le visage est ridé." },
            nl: { correct: 'Ja! Het gezicht is glad.', wrong: 'Nee, het gezicht is gerimpeld.' },
            az: { correct: 'Bəli! Üz hamardır.', wrong: 'Xeyr, üz qırışıqdır.' }
        },
        options: [
            { id: 701, word: "yüz", imageUrl: "/images/701.png", isCorrect: false, audioKey: "yuz", spokenText: "yüz" },
            { id: 579, word: "yüz", imageUrl: "/images/579.png", isCorrect: true, audioKey: "yuz", spokenText: "yüz" }
        ]
    },

    // 8. Alüminyum Folyo
    { 
        id: 15, 
        question: "Kırışık olan hangisi?", 
        questionAudioKey: "q_which_is_wrinkled", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Folyo kırışıktır.', wrong: 'Hayır, folyo düzgündür.' },
            en: { correct: 'Yes! The foil is wrinkled.', wrong: 'No, the foil is smooth.' },
            de: { correct: 'Ja! Die Folie ist zerknittert.', wrong: 'Nein, die Folie ist glatt.' },
            fr: { correct: "Oui ! La feuille est froissée.", wrong: "Non, la feuille est lisse." },
            nl: { correct: 'Ja! De folie is gekreukt.', wrong: 'Nee, de folie is glad.' },
            az: { correct: 'Bəli! Folqa qırışıqdır.', wrong: 'Xeyr, folqa düzgündür.' }
        },
        options: [
            { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" },
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" }
        ]
    },
    { 
        id: 16, 
        question: "Düzgün olan hangisi?", 
        questionAudioKey: "q_which_is_smooth", 
        activityType: ActivityType.KirisikDuzgun, 
        speech: {
            tr: { correct: 'Evet! Folyo düzgündür.', wrong: 'Hayır, folyo kırışıktır.' },
            en: { correct: 'Yes! The foil is smooth.', wrong: 'No, the foil is wrinkled.' },
            de: { correct: 'Ja! Die Folie ist glatt.', wrong: 'Nein, die Folie ist zerknittert.' },
            fr: { correct: "Oui ! La feuille est lisse.", wrong: "Non, la feuille est froissée." },
            nl: { correct: 'Ja! De folie is glad.', wrong: 'Nee, de folie is gekreukt.' },
            az: { correct: 'Bəli! Folqa düzgündür.', wrong: 'Xeyr, folqa qırışıqdır.' }
        },
        options: [
            { id: 733, word: "alüminyum folyo", imageUrl: "/images/733.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" },
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" }
        ]
    },
];