import { ConceptRound, ActivityType } from '../../../../types';

export const hotColdData: ConceptRound[] = [
    // 1. Güneş vs Kardan Adam
    { 
        id: 179, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Güneş sıcaktır.', wrong: 'Hayır, kardan adam soğuktur.' },
            en: { correct: 'Yes! The sun is hot.', wrong: 'No, the snowman is cold.' },
            de: { correct: 'Ja! Die Sonne ist heiß.', wrong: 'Nein, der Schneemann ist kalt.' },
            fr: { correct: "Oui ! Le soleil est chaud.", wrong: "Non, le bonhomme de neige est froid." },
            nl: { correct: 'Ja! De zon is heet.', wrong: 'Nee, de sneeuwpop is koud.' },
            az: { correct: 'Bəli! Günəş istidir.', wrong: 'Xeyr, qar adamı soyuqdur.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "gunes", spokenText: "güneş" },
            { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: false, audioKey: "kardan_adam", spokenText: "kardan adam" }
        ]
    },
    { 
        id: 180, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Kardan adam soğuktur.', wrong: 'Hayır, güneş sıcaktır.' },
            en: { correct: 'Yes! The snowman is cold.', wrong: 'No, the sun is hot.' },
            de: { correct: 'Ja! Der Schneemann ist kalt.', wrong: 'Nein, die Sonne ist heiß.' },
            fr: { correct: "Oui ! Le bonhomme de neige est froid.", wrong: "Non, le soleil est chaud." },
            nl: { correct: 'Ja! De sneeuwpop is koud.', wrong: 'Nee, de zon is heet.' },
            az: { correct: 'Bəli! Qar adamı soyuqdur.', wrong: 'Xeyr, günəş istidir.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "gunes", spokenText: "güneş" },
            { id: 440, word: "kardan adam", imageUrl: "/images/440.png", isCorrect: true, audioKey: "kardan_adam", spokenText: "kardan adam" }
        ]
    },

    // 2. Ateş vs Buz
    { 
        id: 181, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Ateş sıcaktır.', wrong: 'Hayır, buz soğuktur.' },
            en: { correct: 'Yes! The fire is hot.', wrong: 'No, the ice is cold.' },
            de: { correct: 'Ja! Das Feuer ist heiß.', wrong: 'Nein, das Eis ist kalt.' },
            fr: { correct: "Oui ! Le feu est chaud.", wrong: "Non, la glace est froide." },
            nl: { correct: 'Ja! Het vuur is heet.', wrong: 'Nee, het ijs is koud.' },
            az: { correct: 'Bəli! Atəş istidir.', wrong: 'Xeyr, buz soyuqdur.' }
        },
        options: [
            { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ates", spokenText: "ateş" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "buz" }
        ]
    },
    { 
        id: 182, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buz soğuktur.', wrong: 'Hayır, ateş sıcaktır.' },
            en: { correct: 'Yes! The ice is cold.', wrong: 'No, the fire is hot.' },
            de: { correct: 'Ja! Das Eis ist kalt.', wrong: 'Nein, das Feuer ist heiß.' },
            fr: { correct: "Oui ! La glace est froide.", wrong: "Non, le feu est chaud." },
            nl: { correct: 'Ja! Het ijs is koud.', wrong: 'Nee, het vuur is heet.' },
            az: { correct: 'Bəli! Buz soyuqdur.', wrong: 'Xeyr, atəş istidir.' }
        },
        options: [
            { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ates", spokenText: "ateş" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "buz" }
        ]
    },

    // 3. Kahve vs Limonata
    { 
        id: 183, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Kahve sıcaktır.', wrong: 'Hayır, limonata soğuktur.' },
            en: { correct: 'Yes! The coffee is hot.', wrong: 'No, the lemonade is cold.' },
            de: { correct: 'Ja! Der Kaffee ist heiß.', wrong: 'Nein, die Limonade ist kalt.' },
            fr: { correct: "Oui ! Le café est chaud.", wrong: "Non, la limonade est froide." },
            nl: { correct: 'Ja! De koffie is heet.', wrong: 'Nee, de limonade is koud.' },
            az: { correct: 'Bəli! Qəhvə istidir.', wrong: 'Xeyr, limonad soyuqdur.' }
        },
        options: [
            { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: true, audioKey: "kahve", spokenText: "kahve" },
            { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: false, audioKey: "limonata", spokenText: "limonata" }
        ]
    },
    { 
        id: 184, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Limonata soğuktur.', wrong: 'Hayır, kahve sıcaktır.' },
            en: { correct: 'Yes! The lemonade is cold.', wrong: 'No, the coffee is hot.' },
            de: { correct: 'Ja! Die Limonade ist kalt.', wrong: 'Nein, der Kaffee ist heiß.' },
            fr: { correct: "Oui ! La limonade est froide.", wrong: "Non, le café est chaud." },
            nl: { correct: 'Ja! De limonade is koud.', wrong: 'Nee, de koffie is heet.' },
            az: { correct: 'Bəli! Limonad soyuqdur.', wrong: 'Xeyr, qəhvə istidir.' }
        },
        options: [
            { id: 140, word: "kahve", imageUrl: "/images/140.png", isCorrect: false, audioKey: "kahve", spokenText: "kahve" },
            { id: 331, word: "limonata", imageUrl: "/images/331.png", isCorrect: true, audioKey: "limonata", spokenText: "limonata" }
        ]
    },

    // 4. Soba vs Buzdolabı
    { 
        id: 185, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Soba sıcaktır.', wrong: 'Hayır, buzdolabı soğuktur.' },
            en: { correct: 'Yes! The stove is hot.', wrong: 'No, the fridge is cold.' },
            de: { correct: 'Ja! Der Ofen ist heiß.', wrong: 'Nein, der Kühlschrank ist kalt.' },
            fr: { correct: "Oui ! Le poêle est chaud.", wrong: "Non, le réfrigérateur est froid." },
            nl: { correct: 'Ja! De kachel is heet.', wrong: 'Nee, de koelkast is koud.' },
            az: { correct: 'Bəli! Soba istidir.', wrong: 'Xeyr, soyuducu soyuqdur.' }
        },
        options: [
            { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "soba" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabi", spokenText: "buzdolabı" }
        ]
    },
    { 
        id: 186, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buzdolabı soğuktur.', wrong: 'Hayır, soba sıcaktır.' },
            en: { correct: 'Yes! The fridge is cold.', wrong: 'No, the stove is hot.' },
            de: { correct: 'Ja! Der Kühlschrank ist kalt.', wrong: 'Nein, der Ofen ist heiß.' },
            fr: { correct: "Oui ! Le réfrigérateur est froid.", wrong: "Non, le poêle est chaud." },
            nl: { correct: 'Ja! De koelkast is koud.', wrong: 'Nee, de kachel is heet.' },
            az: { correct: 'Bəli! Soyuducu soyuqdur.', wrong: 'Xeyr, soba istidir.' }
        },
        options: [
            { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "soba" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabi", spokenText: "buzdolabı" }
        ]
    },

    // 5. Çorba vs Dondurma
    { 
        id: 187, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Çorba sıcaktır.', wrong: 'Hayır, dondurma soğuktur.' },
            en: { correct: 'Yes! The soup is hot.', wrong: 'No, the ice cream is cold.' },
            de: { correct: 'Ja! Die Suppe ist heiß.', wrong: 'Nein, das Eis ist kalt.' },
            fr: { correct: "Oui ! La soupe est chaude.", wrong: "Non, la glace est froide." },
            nl: { correct: 'Ja! De soep is heet.', wrong: 'Nee, het ijs is koud.' },
            az: { correct: 'Bəli! Şorba istidir.', wrong: 'Xeyr, dondurma soyuqdur.' }
        },
        options: [
            { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: true, audioKey: "corba", spokenText: "çorba" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },
    { 
        id: 188, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Dondurma soğuktur.', wrong: 'Hayır, çorba sıcaktır.' },
            en: { correct: 'Yes! The ice cream is cold.', wrong: 'No, the soup is hot.' },
            de: { correct: 'Ja! Das Eis ist kalt.', wrong: 'Nein, die Suppe ist heiß.' },
            fr: { correct: "Oui ! La glace est froide.", wrong: "Non, la soupe est chaude." },
            nl: { correct: 'Ja! Het ijs is koud.', wrong: 'Nee, de soep is heet.' },
            az: { correct: 'Bəli! Dondurma soyuqdur.', wrong: 'Xeyr, şorba istidir.' }
        },
        options: [
            { id: 266, word: "çorba", imageUrl: "/images/266.png", isCorrect: false, audioKey: "corba", spokenText: "çorba" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },

    // 6. Termometre
    { 
        id: 189, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Bu sıcak.', wrong: 'Hayır, bu soğuk.' },
            en: { correct: 'Yes! This is hot.', wrong: 'No, this is cold.' },
            de: { correct: 'Ja! Das ist heiß.', wrong: 'Nein, das ist kalt.' },
            fr: { correct: "Oui ! C'est chaud.", wrong: "Non, c'est froid." },
            nl: { correct: 'Ja! Dit is heet.', wrong: 'Nee, dit is koud.' },
            az: { correct: 'Bəli! Bu istidir.', wrong: 'Xeyr, bu soyuqdur.' }
        },
        options: [
            { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: true, audioKey: "termometre", spokenText: "termometre" },
            { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: false, audioKey: "termometre", spokenText: "termometre" }
        ]
    },
    { 
        id: 190, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Bu soğuk.', wrong: 'Hayır, bu sıcak.' },
            en: { correct: 'Yes! This is cold.', wrong: 'No, this is hot.' },
            de: { correct: 'Ja! Das ist kalt.', wrong: 'Nein, das ist heiß.' },
            fr: { correct: "Oui ! C'est froid.", wrong: "Non, c'est chaud." },
            nl: { correct: 'Ja! Dit is koud.', wrong: 'Nee, dit is heet.' },
            az: { correct: 'Bəli! Bu soyuqdur.', wrong: 'Xeyr, bu istidir.' }
        },
        options: [
            { id: 260, word: "termometre", imageUrl: "/images/260.png", isCorrect: false, audioKey: "termometre", spokenText: "termometre" },
            { id: 261, word: "termometre", imageUrl: "/images/261.png", isCorrect: true, audioKey: "termometre", spokenText: "termometre" }
        ]
    },

    // 7. Ütü vs Vantilatör
    { 
        id: 191, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Ütü sıcaktır.', wrong: 'Hayır, vantilatör soğuktur.' },
            en: { correct: 'Yes! The iron is hot.', wrong: 'No, the fan is cold.' },
            de: { correct: 'Ja! Das Bügeleisen ist heiß.', wrong: 'Nein, der Ventilator ist kalt.' },
            fr: { correct: "Oui ! Le fer à repasser est chaud.", wrong: "Non, le ventilateur est froid." },
            nl: { correct: 'Ja! Het strijkijzer is heet.', wrong: 'Nee, de ventilator is koud.' },
            az: { correct: 'Bəli! Ütü istidir.', wrong: 'Xeyr, sərinkeş soyuqdur.' }
        },
        options: [
            { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: true, audioKey: "utu", spokenText: "ütü" },
            { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: false, audioKey: "vantilator", spokenText: "vantilatör" }
        ]
    },
    { 
        id: 192, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Vantilatör soğuktur.', wrong: 'Hayır, ütü sıcaktır.' },
            en: { correct: 'Yes! The fan is cold.', wrong: 'No, the iron is hot.' },
            de: { correct: 'Ja! Der Ventilator ist kalt.', wrong: 'Nein, das Bügeleisen ist heiß.' },
            fr: { correct: "Oui ! Le ventilateur est froid.", wrong: "Non, le fer à repasser est chaud." },
            nl: { correct: 'Ja! De ventilator is koud.', wrong: 'Nee, het strijkijzer is heet.' },
            az: { correct: 'Bəli! Sərinkeş soyuqdur.', wrong: 'Xeyr, ütü istidir.' }
        },
        options: [
            { id: 305, word: "ütü", imageUrl: "/images/305.png", isCorrect: false, audioKey: "utu", spokenText: "ütü" },
            { id: 89, word: "vantilatör", imageUrl: "/images/89.png", isCorrect: true, audioKey: "vantilator", spokenText: "vantilatör" }
        ]
    },

    // 8. Volkan vs Buzdağı
    { 
        id: 193, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Volkan sıcaktır.', wrong: 'Hayır, buzdağı soğuktur.' },
            en: { correct: 'Yes! The volcano is hot.', wrong: 'No, the iceberg is cold.' },
            de: { correct: 'Ja! Der Vulkan ist heiß.', wrong: 'Nein, der Eisberg ist kalt.' },
            fr: { correct: "Oui ! Le volcan est chaud.", wrong: "Non, l'iceberg est froid." },
            nl: { correct: 'Ja! De vulkaan is heet.', wrong: 'Nee, de ijsberg is koud.' },
            az: { correct: 'Bəli! Vulkan istidir.', wrong: 'Xeyr, aysberq soyuqdur.' }
        },
        options: [
            { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: true, audioKey: "volkan", spokenText: "volkan" },
            { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: false, audioKey: "buzdagi", spokenText: "buzdağı" }
        ]
    },
    { 
        id: 194, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buzdağı soğuktur.', wrong: 'Hayır, volkan sıcaktır.' },
            en: { correct: 'Yes! The iceberg is cold.', wrong: 'No, the volcano is hot.' },
            de: { correct: 'Ja! Der Eisberg ist kalt.', wrong: 'Nein, der Vulkan ist heiß.' },
            fr: { correct: "Oui ! L'iceberg est froid.", wrong: "Non, le volcan est chaud." },
            nl: { correct: 'Ja! De ijsberg is koud.', wrong: 'Nee, de vulkaan is heet.' },
            az: { correct: 'Bəli! Aysberq soyuqdur.', wrong: 'Xeyr, vulkan istidir.' }
        },
        options: [
            { id: 233, word: "volkan", imageUrl: "/images/233.png", isCorrect: false, audioKey: "volkan", spokenText: "volkan" },
            { id: 643, word: "buzdağı", imageUrl: "/images/643.png", isCorrect: true, audioKey: "buzdagi", spokenText: "buzdağı" }
        ]
    },

    // 9. Jakuzi vs İglo
    { 
        id: 195, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Jakuzi sıcaktır.', wrong: 'Hayır, iglo soğuktur.' },
            en: { correct: 'Yes! The jacuzzi is hot.', wrong: 'No, the igloo is cold.' },
            de: { correct: 'Ja! Der Whirlpool ist heiß.', wrong: 'Nein, das Iglu ist kalt.' },
            fr: { correct: "Oui ! Le jacuzzi est chaud.", wrong: "Non, l'igloo est froid." },
            nl: { correct: 'Ja! De jacuzzi is heet.', wrong: 'Nee, de iglo is koud.' },
            az: { correct: 'Bəli! Cakuzi istidir.', wrong: 'Xeyr, iqlo soyuqdur.' }
        },
        options: [
            { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: true, audioKey: "jakuzi", spokenText: "jakuzi" },
            { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "iglo" }
        ]
    },
    { 
        id: 196, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! İglo soğuktur.', wrong: 'Hayır, jakuzi sıcaktır.' },
            en: { correct: 'Yes! The igloo is cold.', wrong: 'No, the jacuzzi is hot.' },
            de: { correct: 'Ja! Das Iglu ist kalt.', wrong: 'Nein, der Whirlpool ist heiß.' },
            fr: { correct: "Oui ! L'igloo est froid.", wrong: "Non, le jacuzzi est chaud." },
            nl: { correct: 'Ja! De iglo is koud.', wrong: 'Nee, de jacuzzi is heet.' },
            az: { correct: 'Bəli! İqlo soyuqdur.', wrong: 'Xeyr, cakuzi istidir.' }
        },
        options: [
            { id: 95, word: "jakuzi", imageUrl: "/images/95.png", isCorrect: false, audioKey: "jakuzi", spokenText: "jakuzi" },
            { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "iglo" }
        ]
    },

    // 10. Mum vs Klima
    { 
        id: 197, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Mum sıcaktır.', wrong: 'Hayır, klima soğuktur.' },
            en: { correct: 'Yes! The candle is hot.', wrong: 'No, the air conditioner is cold.' },
            de: { correct: 'Ja! Die Kerze ist heiß.', wrong: 'Nein, die Klimaanlage ist kalt.' },
            fr: { correct: "Oui ! La bougie est chaude.", wrong: "Non, la climatisation est froide." },
            nl: { correct: 'Ja! De kaars is heet.', wrong: 'Nee, de airco is koud.' },
            az: { correct: 'Bəli! Şam istidir.', wrong: 'Xeyr, kondisioner soyuqdur.' }
        },
        options: [
            { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: true, audioKey: "mum", spokenText: "mum" },
            { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: false, audioKey: "klima", spokenText: "klima" }
        ]
    },
    { 
        id: 198, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Klima soğuktur.', wrong: 'Hayır, mum sıcaktır.' },
            en: { correct: 'Yes! The air conditioner is cold.', wrong: 'No, the candle is hot.' },
            de: { correct: 'Ja! Die Klimaanlage ist kalt.', wrong: 'Nein, die Kerze ist heiß.' },
            fr: { correct: "Oui ! La climatisation est froide.", wrong: "Non, la bougie est chaude." },
            nl: { correct: 'Ja! De airco is koud.', wrong: 'Nee, de kaars is heet.' },
            az: { correct: 'Bəli! Kondisioner soyuqdur.', wrong: 'Xeyr, şam istidir.' }
        },
        options: [
            { id: 466, word: "mum", imageUrl: "/images/466.png", isCorrect: false, audioKey: "mum", spokenText: "mum" },
            { id: 708, word: "klima", imageUrl: "/images/708.png", isCorrect: true, audioKey: "klima", spokenText: "klima" }
        ]
    },

    // 11. Çay vs Buz
    { 
        id: 199, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Çay sıcaktır.', wrong: 'Hayır, buz soğuktur.' },
            en: { correct: 'Yes! The tea is hot.', wrong: 'No, the ice is cold.' },
            de: { correct: 'Ja! Der Tee ist heiß.', wrong: 'Nein, das Eis ist kalt.' },
            fr: { correct: "Oui ! Le thé est chaud.", wrong: "Non, la glace est froide." },
            nl: { correct: 'Ja! De thee is heet.', wrong: 'Nee, het ijs is koud.' },
            az: { correct: 'Bəli! Çay istidir.', wrong: 'Xeyr, buz soyuqdur.' }
        },
        options: [
            { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "cay", spokenText: "çay" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "buz" }
        ]
    },
    { 
        id: 200, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buz soğuktur.', wrong: 'Hayır, çay sıcaktır.' },
            en: { correct: 'Yes! The ice is cold.', wrong: 'No, the tea is hot.' },
            de: { correct: 'Ja! Das Eis ist kalt.', wrong: 'Nein, der Tee ist heiß.' },
            fr: { correct: "Oui ! La glace est froide.", wrong: "Non, le thé est chaud." },
            nl: { correct: 'Ja! Het ijs is koud.', wrong: 'Nee, de thee is heet.' },
            az: { correct: 'Bəli! Buz soyuqdur.', wrong: 'Xeyr, çay istidir.' }
        },
        options: [
            { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "cay", spokenText: "çay" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "buz" }
        ]
    },

    // 12. Güneş vs İglo
    { 
        id: 201, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Güneş sıcaktır.', wrong: 'Hayır, iglo soğuktur.' },
            en: { correct: 'Yes! The sun is hot.', wrong: 'No, the igloo is cold.' },
            de: { correct: 'Ja! Die Sonne ist heiß.', wrong: 'Nein, das Iglu ist kalt.' },
            fr: { correct: "Oui ! Le soleil est chaud.", wrong: "Non, l'igloo est froid." },
            nl: { correct: 'Ja! De zon is heet.', wrong: 'Nee, de iglo is koud.' },
            az: { correct: 'Bəli! Günəş istidir.', wrong: 'Xeyr, iqlo soyuqdur.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "gunes", spokenText: "güneş" },
            { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: false, audioKey: "iglo", spokenText: "iglo" }
        ]
    },
    { 
        id: 202, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! İglo soğuktur.', wrong: 'Hayır, güneş sıcaktır.' },
            en: { correct: 'Yes! The igloo is cold.', wrong: 'No, the sun is hot.' },
            de: { correct: 'Ja! Das Iglu ist kalt.', wrong: 'Nein, die Sonne ist heiß.' },
            fr: { correct: "Oui ! L'igloo est froid.", wrong: "Non, le soleil est chaud." },
            nl: { correct: 'Ja! De iglo is koud.', wrong: 'Nee, de zon is heet.' },
            az: { correct: 'Bəli! İqlo soyuqdur.', wrong: 'Xeyr, günəş istidir.' }
        },
        options: [
            { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "gunes", spokenText: "güneş" },
            { id: 646, word: "iglo", imageUrl: "/images/646.png", isCorrect: true, audioKey: "iglo", spokenText: "iglo" }
        ]
    },

    // 13. Ateş vs Dondurma
    { 
        id: 203, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Ateş sıcaktır.', wrong: 'Hayır, dondurma soğuktur.' },
            en: { correct: 'Yes! The fire is hot.', wrong: 'No, the ice cream is cold.' },
            de: { correct: 'Ja! Das Feuer ist heiß.', wrong: 'Nein, das Eis ist kalt.' },
            fr: { correct: "Oui ! Le feu est chaud.", wrong: "Non, la glace est froide." },
            nl: { correct: 'Ja! Het vuur is heet.', wrong: 'Nee, het ijs is koud.' },
            az: { correct: 'Bəli! Atəş istidir.', wrong: 'Xeyr, dondurma soyuqdur.' }
        },
        options: [
            { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: true, audioKey: "ates", spokenText: "ateş" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: false, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },
    { 
        id: 204, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Dondurma soğuktur.', wrong: 'Hayır, ateş sıcaktır.' },
            en: { correct: 'Yes! The ice cream is cold.', wrong: 'No, the fire is hot.' },
            de: { correct: 'Ja! Das Eis ist kalt.', wrong: 'Nein, das Feuer ist heiß.' },
            fr: { correct: "Oui ! La glace est froide.", wrong: "Non, le feu est chaud." },
            nl: { correct: 'Ja! Het ijs is koud.', wrong: 'Nee, het vuur is heet.' },
            az: { correct: 'Bəli! Dondurma soyuqdur.', wrong: 'Xeyr, atəş istidir.' }
        },
        options: [
            { id: 707, word: "ateş", imageUrl: "/images/707.png", isCorrect: false, audioKey: "ates", spokenText: "ateş" },
            { id: 63, word: "dondurma", imageUrl: "/images/63.png", isCorrect: true, audioKey: "dondurma", spokenText: "dondurma" }
        ]
    },

    // 14. Soba vs Buz
    { 
        id: 27, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Soba sıcaktır.', wrong: 'Hayır, buz soğuktur.' },
            en: { correct: 'Yes! The stove is hot.', wrong: 'No, the ice is cold.' },
            de: { correct: 'Ja! Der Ofen ist heiß.', wrong: 'Nein, das Eis ist kalt.' },
            fr: { correct: "Oui ! Le poêle est chaud.", wrong: "Non, la glace est froide." },
            nl: { correct: 'Ja! De kachel is heet.', wrong: 'Nee, het ijs is koud.' },
            az: { correct: 'Bəli! Soba istidir.', wrong: 'Xeyr, buz soyuqdur.' }
        },
        options: [
            { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: true, audioKey: "soba", spokenText: "soba" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: false, audioKey: "buz", spokenText: "buz" }
        ]
    },
    { 
        id: 28, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buz soğuktur.', wrong: 'Hayır, soba sıcaktır.' },
            en: { correct: 'Yes! The ice is cold.', wrong: 'No, the stove is hot.' },
            de: { correct: 'Ja! Das Eis ist kalt.', wrong: 'Nein, der Ofen ist heiß.' },
            fr: { correct: "Oui ! La glace est froide.", wrong: "Non, le poêle est chaud." },
            nl: { correct: 'Ja! Het ijs is koud.', wrong: 'Nee, de kachel is heet.' },
            az: { correct: 'Bəli! Buz soyuqdur.', wrong: 'Xeyr, soba istidir.' }
        },
        options: [
            { id: 250, word: "soba", imageUrl: "/images/250.png", isCorrect: false, audioKey: "soba", spokenText: "soba" },
            { id: 141, word: "buz", imageUrl: "/images/141.png", isCorrect: true, audioKey: "buz", spokenText: "buz" }
        ]
    },

    // 15. Çay vs Buzdolabı
    { 
        id: 29, 
        question: "Sıcak olan hangisi?", 
        questionAudioKey: "q_which_is_hot", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Çay sıcaktır.', wrong: 'Hayır, buzdolabı soğuktur.' },
            en: { correct: 'Yes! The tea is hot.', wrong: 'No, the fridge is cold.' },
            de: { correct: 'Ja! Der Tee ist heiß.', wrong: 'Nein, der Kühlschrank ist kalt.' },
            fr: { correct: "Oui ! Le thé est chaud.", wrong: "Non, le réfrigérateur est froid." },
            nl: { correct: 'Ja! De thee is heet.', wrong: 'Nee, de koelkast is koud.' },
            az: { correct: 'Bəli! Çay istidir.', wrong: 'Xeyr, soyuducu soyuqdur.' }
        },
        options: [
            { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: true, audioKey: "cay", spokenText: "çay" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: false, audioKey: "buzdolabi", spokenText: "buzdolabı" }
        ]
    },
    { 
        id: 30, 
        question: "Soğuk olan hangisi?", 
        questionAudioKey: "q_which_is_cold", 
        activityType: ActivityType.HotCold, 
        speech: {
            tr: { correct: 'Evet! Buzdolabı soğuktur.', wrong: 'Hayır, çay sıcaktır.' },
            en: { correct: 'Yes! The fridge is cold.', wrong: 'No, the tea is hot.' },
            de: { correct: 'Ja! Der Kühlschrank ist kalt.', wrong: 'Nein, der Tee ist heiß.' },
            fr: { correct: "Oui ! Le réfrigérateur est froid.", wrong: "Non, le thé est chaud." },
            nl: { correct: 'Ja! De koelkast is koud.', wrong: 'Nee, de thee is heet.' },
            az: { correct: 'Bəli! Soyuducu soyuqdur.', wrong: 'Xeyr, çay istidir.' }
        },
        options: [
            { id: 644, word: "çay", imageUrl: "/images/644.png", isCorrect: false, audioKey: "cay", spokenText: "çay" },
            { id: 251, word: "buzdolabı", imageUrl: "/images/251.png", isCorrect: true, audioKey: "buzdolabi", spokenText: "buzdolabı" }
        ]
    },
];