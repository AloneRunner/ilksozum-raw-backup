import { ConceptRound, ActivityType } from '../../../../types';

export const highLowData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Dağ - Tepe (195-196)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Hangisi daha yüksek?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Dağ daha yüksek.', wrong: 'Hayır, tepe daha alçak.' },
            en: { correct: 'Yes! The mountain is higher.', wrong: 'No, the hill is lower.' },
            de: { correct: 'Ja! Der Berg ist höher.', wrong: 'Nein, der Hügel ist niedriger.' },
            fr: { correct: "Oui ! La montagne est plus haute.", wrong: "Non, la colline est plus basse." },
            nl: { correct: 'Ja! De berg is hoger.', wrong: 'Nee, de heuvel is lager.' },
            az: { correct: 'Bəli! Dağ daha hündürdür.', wrong: 'Xeyr, təpə daha alçaqdır.' }
        },
        options: [
            { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: true, audioKey: "dag", spokenText: "dağ" },
            { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: false, audioKey: "tepe", spokenText: "tepe" }
        ]
    },
    { 
        id: 2, 
        question: "Hangisi daha alçak?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Tepe daha alçak.', wrong: 'Hayır, dağ daha yüksek.' },
            en: { correct: 'Yes! The hill is lower.', wrong: 'No, the mountain is higher.' },
            de: { correct: 'Ja! Der Hügel ist niedriger.', wrong: 'Nein, der Berg ist höher.' },
            fr: { correct: "Oui ! La colline est plus basse.", wrong: "Non, la montagne est plus haute." },
            nl: { correct: 'Ja! De heuvel is lager.', wrong: 'Nee, de berg is hoger.' },
            az: { correct: 'Bəli! Təpə daha alçaqdır.', wrong: 'Xeyr, dağ daha hündürdür.' }
        },
        options: [
            { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: false, audioKey: "dag", spokenText: "dağ" },
            { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: true, audioKey: "tepe", spokenText: "tepe" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Trambolin (Çocuk) - Tabure (391-495)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Hangisi daha yüksekte?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Çocuk daha yüksekte.', wrong: 'Hayır, tabure daha alçakta.' },
            en: { correct: 'Yes! The child is higher.', wrong: 'No, the stool is lower.' },
            de: { correct: 'Ja! Das Kind ist höher.', wrong: 'Nein, der Hocker ist niedriger.' },
            fr: { correct: "Oui ! L'enfant est plus haut.", wrong: "Non, le tabouret est plus bas." },
            nl: { correct: 'Ja! Het kind is hoger.', wrong: 'Nee, de kruk is lager.' },
            az: { correct: 'Bəli! Uşaq daha yüksəkdədir.', wrong: 'Xeyr, taburet daha alçaqdadır.' }
        },
        options: [
            { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: true, audioKey: "cocuk_trambolinde_yuksek", spokenText: "çocuk" },
            { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: false, audioKey: "tabure_alcak", spokenText: "tabure" }
        ]
    },
    { 
        id: 4, 
        question: "Hangisi daha alçakta?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Tabure daha alçakta.', wrong: 'Hayır, çocuk daha yüksekte.' },
            en: { correct: 'Yes! The stool is lower.', wrong: 'No, the child is higher.' },
            de: { correct: 'Ja! Der Hocker ist niedriger.', wrong: 'Nein, das Kind ist höher.' },
            fr: { correct: "Oui ! Le tabouret est plus bas.", wrong: "Non, l'enfant est plus haut." },
            nl: { correct: 'Ja! De kruk is lager.', wrong: 'Nee, het kind is hoger.' },
            az: { correct: 'Bəli! Taburet daha alçaqdadır.', wrong: 'Xeyr, uşaq daha yüksəkdədir.' }
        },
        options: [
            { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: false, audioKey: "cocuk_trambolinde_yuksek", spokenText: "çocuk" },
            { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: true, audioKey: "tabure_alcak", spokenText: "tabure" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Salıncak - Çocuk Tepede vs Altta (392-393)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Hangisi daha yüksekte?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Çocuk daha yüksekte.', wrong: 'Hayır, salıncak daha alçakta.' },
            en: { correct: 'Yes! The child is higher.', wrong: 'No, the swing is lower.' },
            de: { correct: 'Ja! Das Kind ist höher.', wrong: 'Nein, die Schaukel ist niedriger.' },
            fr: { correct: "Oui ! L'enfant est plus haut.", wrong: "Non, la balançoire est plus basse." },
            nl: { correct: 'Ja! Het kind is hoger.', wrong: 'Nee, de schommel is lager.' },
            az: { correct: 'Bəli! Uşaq daha yüksəkdədir.', wrong: 'Xeyr, yelləncək daha alçaqdadır.' }
        },
        options: [
            { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: true, audioKey: "cocuk_salincakta_yuksek", spokenText: "çocuk" },
            { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: false, audioKey: "salincak_alcak", spokenText: "salıncak" }
        ]
    },
    { 
        id: 6, 
        question: "Hangisi daha alçakta?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Salıncak daha alçakta.', wrong: 'Hayır, çocuk daha yüksekte.' },
            en: { correct: 'Yes! The swing is lower.', wrong: 'No, the child is higher.' },
            de: { correct: 'Ja! Die Schaukel ist niedriger.', wrong: 'Nein, das Kind ist höher.' },
            fr: { correct: "Oui ! La balançoire est plus basse.", wrong: "Non, l'enfant est plus haut." },
            nl: { correct: 'Ja! De schommel is lager.', wrong: 'Nee, het kind is hoger.' },
            az: { correct: 'Bəli! Yelləncək daha alçaqdadır.', wrong: 'Xeyr, uşaq daha yüksəkdədir.' }
        },
        options: [
            { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: false, audioKey: "cocuk_salincakta_yuksek", spokenText: "çocuk" },
            { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: true, audioKey: "salincak_alcak", spokenText: "salıncak" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Kitaplar - Raf vs Sehpa (611-610)
    // ----------------------------------------------------------------------
    { 
        id: 7, 
        question: "Hangi kitaplar yukarıda?", 
        questionAudioKey: "q_books_high", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Bu kitaplar yukarıda.', wrong: 'Hayır, bu kitaplar aşağıda.' },
            en: { correct: 'Yes! These books are high.', wrong: 'No, these books are low.' },
            de: { correct: 'Ja! Diese Bücher sind oben.', wrong: 'Nein, diese Bücher sind unten.' },
            fr: { correct: "Oui ! Ces livres sont en haut.", wrong: "Non, ces livres sont en bas." },
            nl: { correct: 'Ja! Deze boeken zijn hoog.', wrong: 'Nee, deze boeken zijn laag.' },
            az: { correct: 'Bəli! Bu kitablar yuxarıdadır.', wrong: 'Xeyr, bu kitablar aşağıdadır.' }
        },
        options: [
            { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: true, audioKey: "kitaplar_raf_yuksek", spokenText: "yukarıda" },
            { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: false, audioKey: "kitaplar_sehpa_alcak", spokenText: "aşağıda" }
        ]
    },
    { 
        id: 8, 
        question: "Hangi kitaplar aşağıda?", 
        questionAudioKey: "q_books_low", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Bu kitaplar aşağıda.', wrong: 'Hayır, bu kitaplar yukarıda.' },
            en: { correct: 'Yes! These books are low.', wrong: 'No, these books are high.' },
            de: { correct: 'Ja! Diese Bücher sind unten.', wrong: 'Nein, diese Bücher sind oben.' },
            fr: { correct: "Oui ! Ces livres sont en bas.", wrong: "Non, ces livres sont en haut." },
            nl: { correct: 'Ja! Deze boeken zijn laag.', wrong: 'Nee, deze boeken zijn hoog.' },
            az: { correct: 'Bəli! Bu kitablar aşağıdadır.', wrong: 'Xeyr, bu kitablar yuxarıdadır.' }
        },
        options: [
            { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: false, audioKey: "kitaplar_raf_yuksek", spokenText: "yukarıda" },
            { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: true, audioKey: "kitaplar_sehpa_alcak", spokenText: "aşağıda" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. Gökdelen - Ev (612-571)
    // ----------------------------------------------------------------------
    { 
        id: 9, 
        question: "Hangi bina daha yüksek?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Gökdelen daha yüksek.', wrong: 'Hayır, ev daha alçak.' },
            en: { correct: 'Yes! The skyscraper is higher.', wrong: 'No, the house is lower.' },
            de: { correct: 'Ja! Der Wolkenkratzer ist höher.', wrong: 'Nein, das Haus ist niedriger.' },
            fr: { correct: "Oui ! Le gratte-ciel est plus haut.", wrong: "Non, la maison est plus basse." },
            nl: { correct: 'Ja! De wolkenkrabber is hoger.', wrong: 'Nee, het huis is lager.' },
            az: { correct: 'Bəli! Göydələn daha hündürdür.', wrong: 'Xeyr, ev daha alçaqdır.' }
        },
        options: [
            { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: true, audioKey: "gokdelen_yuksek", spokenText: "gökdelen" },
            { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: false, audioKey: "ev_alcak", spokenText: "ev" }
        ]
    },
    { 
        id: 10, 
        question: "Hangi bina daha alçak?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Ev daha alçak.', wrong: 'Hayır, gökdelen daha yüksek.' },
            en: { correct: 'Yes! The house is lower.', wrong: 'No, the skyscraper is higher.' },
            de: { correct: 'Ja! Das Haus ist niedriger.', wrong: 'Nein, der Wolkenkratzer ist höher.' },
            fr: { correct: "Oui ! La maison est plus basse.", wrong: "Non, le gratte-ciel est plus haut." },
            nl: { correct: 'Ja! Het huis is lager.', wrong: 'Nee, de wolkenkrabber is hoger.' },
            az: { correct: 'Bəli! Ev daha alçaqdır.', wrong: 'Xeyr, göydələn daha hündürdür.' }
        },
        options: [
            { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: false, audioKey: "gokdelen_yuksek", spokenText: "gökdelen" },
            { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: true, audioKey: "ev_alcak", spokenText: "ev" }
        ]
    },

    // ----------------------------------------------------------------------
    // 6. Kitaplık - Yüksek vs Alçak (614-613)
    // ----------------------------------------------------------------------
    { 
        id: 11, 
        question: "Hangi dolap daha yüksek?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Bu dolap daha yüksek.', wrong: 'Hayır, bu dolap daha alçak.' },
            en: { correct: 'Yes! This cupboard is higher.', wrong: 'No, this cupboard is lower.' },
            de: { correct: 'Ja! Dieser Schrank ist höher.', wrong: 'Nein, dieser Schrank ist niedriger.' },
            fr: { correct: "Oui ! Ce placard est plus haut.", wrong: "Non, ce placard est plus bas." },
            nl: { correct: 'Ja! Deze kast is hoger.', wrong: 'Nee, deze kast is lager.' },
            az: { correct: 'Bəli! Bu dolab daha hündürdür.', wrong: 'Xeyr, bu dolab daha alçaqdır.' }
        },
        options: [
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplik_yuksek", spokenText: "kitaplık" },
            { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplik_alcak", spokenText: "kitaplık" }
        ]
    },
    { 
        id: 12, 
        question: "Hangi dolap daha alçak?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Bu dolap daha alçak.', wrong: 'Hayır, bu dolap daha yüksek.' },
            en: { correct: 'Yes! This cupboard is lower.', wrong: 'No, this cupboard is higher.' },
            de: { correct: 'Ja! Dieser Schrank ist niedriger.', wrong: 'Nein, dieser Schrank ist höher.' },
            fr: { correct: "Oui ! Ce placard est plus bas.", wrong: "Non, ce placard est plus haut." },
            nl: { correct: 'Ja! Deze kast is lager.', wrong: 'Nee, deze kast is hoger.' },
            az: { correct: 'Bəli! Bu dolab daha alçaqdır.', wrong: 'Xeyr, bu dolab daha hündürdür.' }
        },
        options: [
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplik_yuksek", spokenText: "kitaplık" },
            { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplik_alcak", spokenText: "kitaplık" }
        ]
    },

    // ----------------------------------------------------------------------
    // 7. Tümsek - Çukur (729-728)
    // ----------------------------------------------------------------------
    { 
        id: 13, 
        question: "Hangi yer daha yüksek?", 
        questionAudioKey: "q_which_is_higher", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Tümsek daha yüksek.', wrong: 'Hayır, çukur daha alçak.' },
            en: { correct: 'Yes! The mound is higher.', wrong: 'No, the pit is lower.' },
            de: { correct: 'Ja! Der Hügel ist höher.', wrong: 'Nein, die Grube ist niedriger.' },
            fr: { correct: "Oui ! La butte est plus haute.", wrong: "Non, le trou est plus bas." },
            nl: { correct: 'Ja! De heuvel is hoger.', wrong: 'Nee, de kuil is lager.' },
            az: { correct: 'Bəli! Təpəcik daha hündürdür.', wrong: 'Xeyr, çuxur daha alçaqdır.' }
        },
        options: [
            { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: true, audioKey: "tumsek_yuksek", spokenText: "tümsek" },
            { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: false, audioKey: "cukur_alcak", spokenText: "çukur" }
        ]
    },
    { 
        id: 14, 
        question: "Hangi yer daha alçak?", 
        questionAudioKey: "q_which_is_lower", 
        activityType: ActivityType.HighLow, 
        speech: {
            tr: { correct: 'Evet! Çukur daha alçak.', wrong: 'Hayır, tümsek daha yüksek.' },
            en: { correct: 'Yes! The pit is lower.', wrong: 'No, the mound is higher.' },
            de: { correct: 'Ja! Die Grube ist niedriger.', wrong: 'Nein, der Hügel ist höher.' },
            fr: { correct: "Oui ! Le trou est plus bas.", wrong: "Non, la butte est plus haute." },
            nl: { correct: 'Ja! De kuil is lager.', wrong: 'Nee, de heuvel is hoger.' },
            az: { correct: 'Bəli! Çuxur daha alçaqdır.', wrong: 'Xeyr, təpəcik daha hündürdür.' }
        },
        options: [
            { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: false, audioKey: "tumsek_yuksek", spokenText: "tümsek" },
            { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: true, audioKey: "cukur_alcak", spokenText: "çukur" }
        ]
    }
];