import { ConceptRound, ActivityType } from '../../../../types';

export const tersDuzData: ConceptRound[] = [
    // 1. Terlik
    { 
        id: 1, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Terlik düzgündür.', wrong: 'Hayır, terlik terstir.' },
            en: { correct: 'Yes! The slipper is upright.', wrong: 'No, the slipper is upside down.' },
            de: { correct: 'Ja! Der Hausschuh steht richtig.', wrong: 'Nein, der Hausschuh liegt verkehrt herum.' },
            fr: { correct: "Oui ! La pantoufle est à l'endroit.", wrong: "Non, la pantoufle est à l'envers." },
            nl: { correct: 'Ja! De pantoffel staat rechtop.', wrong: 'Nee, de pantoffel ligt ondersteboven.' },
            az: { correct: 'Bəli! Tərlik düzdür.', wrong: 'Xeyr, tərlik tərsdir.' }
        },
        options: [
            { id: 720, word: "terlik", imageUrl: "/images/720.png", isCorrect: true, audioKey: "terlik", spokenText: "terlik" },
            { id: 721, word: "terlik", imageUrl: "/images/721.png", isCorrect: false, audioKey: "terlik", spokenText: "terlik" }
        ]
    },
    { 
        id: 2, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Terlik terstir.', wrong: 'Hayır, terlik düzgündür.' },
            en: { correct: 'Yes! The slipper is upside down.', wrong: 'No, the slipper is upright.' },
            de: { correct: 'Ja! Der Hausschuh liegt verkehrt herum.', wrong: 'Nein, der Hausschuh steht richtig.' },
            fr: { correct: "Oui ! La pantoufle est à l'envers.", wrong: "Non, la pantoufle est à l'endroit." },
            nl: { correct: 'Ja! De pantoffel ligt ondersteboven.', wrong: 'Nee, de pantoffel staat rechtop.' },
            az: { correct: 'Bəli! Tərlik tərsdir.', wrong: 'Xeyr, tərlik düzdür.' }
        },
        options: [
            { id: 720, word: "terlik", imageUrl: "/images/720.png", isCorrect: false, audioKey: "terlik", spokenText: "terlik" },
            { id: 721, word: "terlik", imageUrl: "/images/721.png", isCorrect: true, audioKey: "terlik", spokenText: "terlik" }
        ]
    },

    // 2. Kaplumbağa
    { 
        id: 3, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Kaplumbağa düzdür.', wrong: 'Hayır, kaplumbağa terstir.' },
            en: { correct: 'Yes! The turtle is upright.', wrong: 'No, the turtle is upside down.' },
            de: { correct: 'Ja! Die Schildkröte steht richtig.', wrong: 'Nein, die Schildkröte liegt auf dem Rücken.' },
            fr: { correct: "Oui ! La tortue est à l'endroit.", wrong: "Non, la tortue est à l'envers." },
            nl: { correct: 'Ja! De schildpad staat rechtop.', wrong: 'Nee, de schildpad ligt ondersteboven.' },
            az: { correct: 'Bəli! Tısbağa düzdür.', wrong: 'Xeyr, tısbağa tərsdir.' }
        },
        options: [
            { id: 42, word: "kaplumbağa", imageUrl: "/images/42.png", isCorrect: true, audioKey: "kaplumbaga", spokenText: "kaplumbağa" },
            { id: 722, word: "kaplumbağa", imageUrl: "/images/722.png", isCorrect: false, audioKey: "kaplumbaga", spokenText: "kaplumbağa" }
        ]
    },
    { 
        id: 4, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Kaplumbağa terstir.', wrong: 'Hayır, kaplumbağa düzdür.' },
            en: { correct: 'Yes! The turtle is upside down.', wrong: 'No, the turtle is upright.' },
            de: { correct: 'Ja! Die Schildkröte liegt auf dem Rücken.', wrong: 'Nein, die Schildkröte steht richtig.' },
            fr: { correct: "Oui ! La tortue est à l'envers.", wrong: "Non, la tortue est à l'endroit." },
            nl: { correct: 'Ja! De schildpad ligt ondersteboven.', wrong: 'Nee, de schildpad staat rechtop.' },
            az: { correct: 'Bəli! Tısbağa tərsdir.', wrong: 'Xeyr, tısbağa düzdür.' }
        },
        options: [
            { id: 42, word: "kaplumbağa", imageUrl: "/images/42.png", isCorrect: false, audioKey: "kaplumbaga", spokenText: "kaplumbağa" },
            { id: 722, word: "kaplumbağa", imageUrl: "/images/722.png", isCorrect: true, audioKey: "kaplumbaga", spokenText: "kaplumbağa" }
        ]
    },

    // 3. Saat
    { 
        id: 5, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Saat düzdür.', wrong: 'Hayır, saat terstir.' },
            en: { correct: 'Yes! The clock is upright.', wrong: 'No, the clock is upside down.' },
            de: { correct: 'Ja! Die Uhr hängt richtig.', wrong: 'Nein, die Uhr hängt verkehrt herum.' },
            fr: { correct: "Oui ! L'horloge est à l'endroit.", wrong: "Non, l'horloge est à l'envers." },
            nl: { correct: 'Ja! De klok hangt goed.', wrong: 'Nee, de klok hangt ondersteboven.' },
            az: { correct: 'Bəli! Saat düzdür.', wrong: 'Xeyr, saat tərsdir.' }
        },
        options: [
            { id: 844, word: "saat", imageUrl: "/images/844.png", isCorrect: true, audioKey: "saat", spokenText: "saat" },
            { id: 843, word: "saat", imageUrl: "/images/843.png", isCorrect: false, audioKey: "saat", spokenText: "saat" }
        ]
    },
    { 
        id: 6, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Saat terstir.', wrong: 'Hayır, saat düzdür.' },
            en: { correct: 'Yes! The clock is upside down.', wrong: 'No, the clock is upright.' },
            de: { correct: 'Ja! Die Uhr hängt verkehrt herum.', wrong: 'Nein, die Uhr hängt richtig.' },
            fr: { correct: "Oui ! L'horloge est à l'envers.", wrong: "Non, l'horloge est à l'endroit." },
            nl: { correct: 'Ja! De klok hangt ondersteboven.', wrong: 'Nee, de klok hangt goed.' },
            az: { correct: 'Bəli! Saat tərsdir.', wrong: 'Xeyr, saat düzdür.' }
        },
        options: [
            { id: 844, word: "saat", imageUrl: "/images/844.png", isCorrect: false, audioKey: "saat", spokenText: "saat" },
            { id: 843, word: "saat", imageUrl: "/images/843.png", isCorrect: true, audioKey: "saat", spokenText: "saat" }
        ]
    },

    // 4. Ayakkabı
    { 
        id: 7, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Ayakkabı düzdür.', wrong: 'Hayır, ayakkabı terstir.' },
            en: { correct: 'Yes! The shoe is upright.', wrong: 'No, the shoe is upside down.' },
            de: { correct: 'Ja! Der Schuh steht richtig.', wrong: 'Nein, der Schuh liegt verkehrt herum.' },
            fr: { correct: "Oui ! La chaussure est à l'endroit.", wrong: "Non, la chaussure est à l'envers." },
            nl: { correct: 'Ja! De schoen staat rechtop.', wrong: 'Nee, de schoen ligt ondersteboven.' },
            az: { correct: 'Bəli! Ayaqqabı düzdür.', wrong: 'Xeyr, ayaqqabı tərsdir.' }
        },
        options: [
            { id: 846, word: "ayakkabı", imageUrl: "/images/846.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 845, word: "ayakkabı", imageUrl: "/images/845.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },
    { 
        id: 8, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Ayakkabı terstir.', wrong: 'Hayır, ayakkabı düzdür.' },
            en: { correct: 'Yes! The shoe is upside down.', wrong: 'No, the shoe is upright.' },
            de: { correct: 'Ja! Der Schuh liegt verkehrt herum.', wrong: 'Nein, der Schuh steht richtig.' },
            fr: { correct: "Oui ! La chaussure est à l'envers.", wrong: "Non, la chaussure est à l'endroit." },
            nl: { correct: 'Ja! De schoen ligt ondersteboven.', wrong: 'Nee, de schoen staat rechtop.' },
            az: { correct: 'Bəli! Ayaqqabı tərsdir.', wrong: 'Xeyr, ayaqqabı düzdür.' }
        },
        options: [
            { id: 846, word: "ayakkabı", imageUrl: "/images/846.png", isCorrect: false, audioKey: "ayakkabi", spokenText: "ayakkabı" },
            { id: 845, word: "ayakkabı", imageUrl: "/images/845.png", isCorrect: true, audioKey: "ayakkabi", spokenText: "ayakkabı" }
        ]
    },

    // 5. Sandalet
    { 
        id: 9, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Sandalet düzdür.', wrong: 'Hayır, sandalet terstir.' },
            en: { correct: 'Yes! The sandal is upright.', wrong: 'No, the sandal is upside down.' },
            de: { correct: 'Ja! Die Sandale steht richtig.', wrong: 'Nein, die Sandale liegt verkehrt herum.' },
            fr: { correct: "Oui ! La sandale est à l'endroit.", wrong: "Non, la sandale est à l'envers." },
            nl: { correct: 'Ja! De sandaal staat rechtop.', wrong: 'Nee, de sandaal ligt ondersteboven.' },
            az: { correct: 'Bəli! Səndəl düzdür.', wrong: 'Xeyr, səndəl tərsdir.' }
        },
        options: [
            { id: 848, word: "sandalet", imageUrl: "/images/848.png", isCorrect: true, audioKey: "sandalet", spokenText: "sandalet" },
            { id: 847, word: "sandalet", imageUrl: "/images/847.png", isCorrect: false, audioKey: "sandalet", spokenText: "sandalet" }
        ]
    },
    { 
        id: 10, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Sandalet terstir.', wrong: 'Hayır, sandalet düzdür.' },
            en: { correct: 'Yes! The sandal is upside down.', wrong: 'No, the sandal is upright.' },
            de: { correct: 'Ja! Die Sandale liegt verkehrt herum.', wrong: 'Nein, die Sandale steht richtig.' },
            fr: { correct: "Oui ! La sandale est à l'envers.", wrong: "Non, la sandale est à l'endroit." },
            nl: { correct: 'Ja! De sandaal ligt ondersteboven.', wrong: 'Nee, de sandaal staat rechtop.' },
            az: { correct: 'Bəli! Səndəl tərsdir.', wrong: 'Xeyr, səndəl düzdür.' }
        },
        options: [
            { id: 848, word: "sandalet", imageUrl: "/images/848.png", isCorrect: false, audioKey: "sandalet", spokenText: "sandalet" },
            { id: 847, word: "sandalet", imageUrl: "/images/847.png", isCorrect: true, audioKey: "sandalet", spokenText: "sandalet" }
        ]
    },

    // 6. Şemsiye
    { 
        id: 11, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Şemsiye düzdür.', wrong: 'Hayır, şemsiye terstir.' },
            en: { correct: 'Yes! The umbrella is upright.', wrong: 'No, the umbrella is upside down.' },
            de: { correct: 'Ja! Der Regenschirm steht richtig.', wrong: 'Nein, der Regenschirm ist verkehrt herum.' },
            fr: { correct: "Oui ! Le parapluie est à l'endroit.", wrong: "Non, le parapluie est à l'envers." },
            nl: { correct: 'Ja! De paraplu staat rechtop.', wrong: 'Nee, de paraplu is ondersteboven.' },
            az: { correct: 'Bəli! Çətir düzdür.', wrong: 'Xeyr, çətir tərsdir.' }
        },
        options: [
            { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: true, audioKey: "semsiye", spokenText: "şemsiye" },
            { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: false, audioKey: "semsiye", spokenText: "şemsiye" }
        ]
    },
    { 
        id: 12, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Şemsiye terstir.', wrong: 'Hayır, şemsiye düzdür.' },
            en: { correct: 'Yes! The umbrella is upside down.', wrong: 'No, the umbrella is upright.' },
            de: { correct: 'Ja! Der Regenschirm ist verkehrt herum.', wrong: 'Nein, der Regenschirm steht richtig.' },
            fr: { correct: "Oui ! Le parapluie est à l'envers.", wrong: "Non, le parapluie est à l'endroit." },
            nl: { correct: 'Ja! De paraplu is ondersteboven.', wrong: 'Nee, de paraplu staat rechtop.' },
            az: { correct: 'Bəli! Çətir tərsdir.', wrong: 'Xeyr, çətir düzdür.' }
        },
        options: [
            { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: false, audioKey: "semsiye", spokenText: "şemsiye" },
            { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: true, audioKey: "semsiye", spokenText: "şemsiye" }
        ]
    },

    // 7. Fincan/Kupa
    { 
        id: 13, 
        question: "Düz olan hangisi?", 
        questionAudioKey: "q_which_is_upright", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Kupa düzdür.', wrong: 'Hayır, kupa terstir.' },
            en: { correct: 'Yes! The mug is upright.', wrong: 'No, the mug is upside down.' },
            de: { correct: 'Ja! Der Becher steht richtig.', wrong: 'Nein, der Becher steht verkehrt herum.' },
            fr: { correct: "Oui ! La tasse est à l'endroit.", wrong: "Non, la tasse est à l'envers." },
            nl: { correct: 'Ja! De beker staat rechtop.', wrong: 'Nee, de beker staat ondersteboven.' },
            az: { correct: 'Bəli! Fincan düzdür.', wrong: 'Xeyr, fincan tərsdir.' }
        },
        options: [
            { id: 140, word: "kupa", imageUrl: "/images/140.png", isCorrect: true, audioKey: "kupa", spokenText: "kupa" },
            { id: 842, word: "fincan", imageUrl: "/images/842.png", isCorrect: false, audioKey: "fincan", spokenText: "fincan" }
        ]
    },
    { 
        id: 14, 
        question: "Ters olan hangisi?", 
        questionAudioKey: "q_which_is_upsidedown", 
        activityType: ActivityType.TersDuz, 
        speech: {
            tr: { correct: 'Evet! Kupa terstir.', wrong: 'Hayır, kupa düzdür.' },
            en: { correct: 'Yes! The mug is upside down.', wrong: 'No, the mug is upright.' },
            de: { correct: 'Ja! Der Becher steht verkehrt herum.', wrong: 'Nein, der Becher steht richtig.' },
            fr: { correct: "Oui ! La tasse est à l'envers.", wrong: "Non, la tasse est à l'endroit." },
            nl: { correct: 'Ja! De beker staat ondersteboven.', wrong: 'Nee, de beker staat rechtop.' },
            az: { correct: 'Bəli! Fincan tərsdir.', wrong: 'Xeyr, fincan düzdür.' }
        },
        options: [
            { id: 140, word: "kupa", imageUrl: "/images/140.png", isCorrect: false, audioKey: "kupa", spokenText: "kupa" },
            { id: 842, word: "fincan", imageUrl: "/images/842.png", isCorrect: true, audioKey: "fincan", spokenText: "fincan" }
        ]
    },
];