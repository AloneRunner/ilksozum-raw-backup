import { ConceptRound, ActivityType } from '../../../../types';

export const dugumCozukData: ConceptRound[] = [
    // 1. Ayakkabı Bağcığı
    { 
        id: 125, 
        question: "Düğüm olan hangisi?", 
        questionAudioKey: "q_which_is_knotted", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Ayakkabı düğümlüdür.', wrong: 'Hayır, ayakkabı çözüktür.' },
            en: { correct: 'Yes! The shoe is knotted.', wrong: 'No, the shoe is untied.' },
            de: { correct: 'Ja! Der Schuh ist verknotet.', wrong: 'Nein, der Schuh ist offen.' },
            fr: { correct: "Oui ! La chaussure est nouée.", wrong: "Non, la chaussure est dénouée." },
            nl: { correct: 'Ja! De schoen is geknoopt.', wrong: 'Nee, de schoen is los.' },
            az: { correct: 'Bəli! Ayaqqabı düyünlüdür.', wrong: 'Xeyr, ayaqqabı açıqdır.' }
        },
        options: [
            { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },
    { 
        id: 126, 
        question: "Çözük olan hangisi?", 
        questionAudioKey: "q_which_is_untied", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Ayakkabı çözüktür.', wrong: 'Hayır, ayakkabı düğümlüdür.' },
            en: { correct: 'Yes! The shoe is untied.', wrong: 'No, the shoe is knotted.' },
            de: { correct: 'Ja! Der Schuh ist offen.', wrong: 'Nein, der Schuh ist verknotet.' },
            fr: { correct: "Oui ! La chaussure est dénouée.", wrong: "Non, la chaussure est nouée." },
            nl: { correct: 'Ja! De schoen is los.', wrong: 'Nee, de schoen is geknoopt.' },
            az: { correct: 'Bəli! Ayaqqabı açıqdır.', wrong: 'Xeyr, ayaqqabı düyünlüdür.' }
        },
        options: [
            { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },

    // 2. Hortum
    { 
        id: 127, 
        question: "Düğüm olan hangisi?", 
        questionAudioKey: "q_which_is_knotted", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Hortum düğümlüdür.', wrong: 'Hayır, hortum çözüktür.' },
            en: { correct: 'Yes! The hose is knotted.', wrong: 'No, the hose is untied.' },
            de: { correct: 'Ja! Der Schlauch ist verknotet.', wrong: 'Nein, der Schlauch ist offen.' },
            fr: { correct: "Oui ! Le tuyau est noué.", wrong: "Non, le tuyau est dénoué." },
            nl: { correct: 'Ja! De slang is geknoopt.', wrong: 'Nee, de slang is los.' },
            az: { correct: 'Bəli! Şlanq düyünlüdür.', wrong: 'Xeyr, şlanq açıqdır.' }
        },
        options: [
            { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: true, audioKey: "hortum", spokenText: "hortum" },
            { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: false, audioKey: "hortum", spokenText: "hortum" }
        ]
    },
    { 
        id: 128, 
        question: "Çözük olan hangisi?", 
        questionAudioKey: "q_which_is_untied", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Hortum çözüktür.', wrong: 'Hayır, hortum düğümlüdür.' },
            en: { correct: 'Yes! The hose is untied.', wrong: 'No, the hose is knotted.' },
            de: { correct: 'Ja! Der Schlauch ist offen.', wrong: 'Nein, der Schlauch ist verknotet.' },
            fr: { correct: "Oui ! Le tuyau est dénoué.", wrong: "Non, le tuyau est noué." },
            nl: { correct: 'Ja! De slang is los.', wrong: 'Nee, de slang is geknoopt.' },
            az: { correct: 'Bəli! Şlanq açıqdır.', wrong: 'Xeyr, şlanq düyünlüdür.' }
        },
        options: [
            { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: false, audioKey: "hortum", spokenText: "hortum" },
            { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: true, audioKey: "hortum", spokenText: "hortum" }
        ]
    },

    // 3. Kurdele
    { 
        id: 129, 
        question: "Düğüm olan hangisi?", 
        questionAudioKey: "q_which_is_knotted", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Kurdele düğümlüdür.', wrong: 'Hayır, kurdele çözüktür.' },
            en: { correct: 'Yes! The ribbon is knotted.', wrong: 'No, the ribbon is untied.' },
            de: { correct: 'Ja! Das Band ist verknotet.', wrong: 'Nein, das Band ist offen.' },
            fr: { correct: "Oui ! Le ruban est noué.", wrong: "Non, le ruban est dénoué." },
            nl: { correct: 'Ja! Het lint is geknoopt.', wrong: 'Nee, het lint is los.' },
            az: { correct: 'Bəli! Lent düyünlüdür.', wrong: 'Xeyr, lent açıqdır.' }
        },
        options: [
            { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: true, audioKey: "kurdele", spokenText: "kurdele" },
            { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: false, audioKey: "kurdele", spokenText: "kurdele" }
        ]
    },
    { 
        id: 130, 
        question: "Çözük olan hangisi?", 
        questionAudioKey: "q_which_is_untied", 
        activityType: ActivityType.DugumCozuk, 
        speech: {
            tr: { correct: 'Evet! Kurdele çözüktür.', wrong: 'Hayır, kurdele düğümlüdür.' },
            en: { correct: 'Yes! The ribbon is untied.', wrong: 'No, the ribbon is knotted.' },
            de: { correct: 'Ja! Das Band ist offen.', wrong: 'Nein, das Band ist verknotet.' },
            fr: { correct: "Oui ! Le ruban est dénoué.", wrong: "Non, le ruban est noué." },
            nl: { correct: 'Ja! Het lint is los.', wrong: 'Nee, het lint is geknoopt.' },
            az: { correct: 'Bəli! Lent açıqdır.', wrong: 'Xeyr, lent düyünlüdür.' }
        },
        options: [
            { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: false, audioKey: "kurdele", spokenText: "kurdele" },
            { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: true, audioKey: "kurdele", spokenText: "kurdele" }
        ]
    }
];