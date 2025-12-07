import { ConceptRound, ActivityType } from '../../../../types';

export const openClosedData: ConceptRound[] = [
    // 1. Kutu
    { 
        id: 1, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kutu açıktır.', wrong: 'Hayır, kutu kapalıdır.' },
            en: { correct: 'Yes! The box is open.', wrong: 'No, the box is closed.' },
            de: { correct: 'Ja! Die Schachtel ist offen.', wrong: 'Nein, die Schachtel ist geschlossen.' },
            fr: { correct: "Oui ! La boîte est ouverte.", wrong: "Non, la boîte est fermée." },
            nl: { correct: 'Ja! De doos is open.', wrong: 'Nee, de doos is gesloten.' },
            az: { correct: 'Bəli! Qutu açıqdır.', wrong: 'Xeyr, qutu bağlıdır.' }
        },
        options: [
            { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" },
            { id: 5, word: "kutu", imageUrl: "/images/5.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" }
        ]
    },
    { 
        id: 2, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kutu kapalıdır.', wrong: 'Hayır, kutu açıktır.' },
            en: { correct: 'Yes! The box is closed.', wrong: 'No, the box is open.' },
            de: { correct: 'Ja! Die Schachtel ist geschlossen.', wrong: 'Nein, die Schachtel ist offen.' },
            fr: { correct: "Oui ! La boîte est fermée.", wrong: "Non, la boîte est ouverte." },
            nl: { correct: 'Ja! De doos is gesloten.', wrong: 'Nee, de doos is open.' },
            az: { correct: 'Bəli! Qutu bağlıdır.', wrong: 'Xeyr, qutu açıqdır.' }
        },
        options: [
            { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" },
            { id: 5, word: "kutu", imageUrl: "/images/5.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" }
        ]
    },

    // 2. Kitap
    { 
        id: 3, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kitap açıktır.', wrong: 'Hayır, kitap kapalıdır.' },
            en: { correct: 'Yes! The book is open.', wrong: 'No, the book is closed.' },
            de: { correct: 'Ja! Das Buch ist offen.', wrong: 'Nein, das Buch ist geschlossen.' },
            fr: { correct: "Oui ! Le livre est ouvert.", wrong: "Non, le livre est fermé." },
            nl: { correct: 'Ja! Het boek is open.', wrong: 'Nee, het boek is gesloten.' },
            az: { correct: 'Bəli! Kitab açıqdır.', wrong: 'Xeyr, kitab bağlıdır.' }
        },
        options: [
            { id: 38, word: "kitap", imageUrl: "/images/38.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kitap" }
        ]
    },
    { 
        id: 4, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kitap kapalıdır.', wrong: 'Hayır, kitap açıktır.' },
            en: { correct: 'Yes! The book is closed.', wrong: 'No, the book is open.' },
            de: { correct: 'Ja! Das Buch ist geschlossen.', wrong: 'Nein, das Buch ist offen.' },
            fr: { correct: "Oui ! Le livre est fermé.", wrong: "Non, le livre est ouvert." },
            nl: { correct: 'Ja! Het boek is gesloten.', wrong: 'Nee, het boek is open.' },
            az: { correct: 'Bəli! Kitab bağlıdır.', wrong: 'Xeyr, kitab açıqdır.' }
        },
        options: [
            { id: 38, word: "kitap", imageUrl: "/images/38.png", isCorrect: false, audioKey: "kitap", spokenText: "kitap" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" }
        ]
    },

    // 3. Kapı
    { 
        id: 5, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kapı açıktır.', wrong: 'Hayır, kapı kapalıdır.' },
            en: { correct: 'Yes! The door is open.', wrong: 'No, the door is closed.' },
            de: { correct: 'Ja! Die Tür ist offen.', wrong: 'Nein, die Tür ist geschlossen.' },
            fr: { correct: "Oui ! La porte est ouverte.", wrong: "Non, la porte est fermée." },
            nl: { correct: 'Ja! De deur is open.', wrong: 'Nee, de deur is gesloten.' },
            az: { correct: 'Bəli! Qapı açıqdır.', wrong: 'Xeyr, qapı bağlıdır.' }
        },
        options: [
            { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: true, audioKey: "kapi", spokenText: "kapı" },
            { id: 39, word: "kapı", imageUrl: "/images/39.png", isCorrect: false, audioKey: "kapi", spokenText: "kapı" }
        ]
    },
    { 
        id: 6, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Kapı kapalıdır.', wrong: 'Hayır, kapı açıktır.' },
            en: { correct: 'Yes! The door is closed.', wrong: 'No, the door is open.' },
            de: { correct: 'Ja! Die Tür ist geschlossen.', wrong: 'Nein, die Tür ist offen.' },
            fr: { correct: "Oui ! La porte est fermée.", wrong: "Non, la porte est ouverte." },
            nl: { correct: 'Ja! De deur is gesloten.', wrong: 'Nee, de deur is open.' },
            az: { correct: 'Bəli! Qapı bağlıdır.', wrong: 'Xeyr, qapı açıqdır.' }
        },
        options: [
            { id: 595, word: "kapı", imageUrl: "/images/595.png", isCorrect: false, audioKey: "kapi", spokenText: "kapı" },
            { id: 39, word: "kapı", imageUrl: "/images/39.png", isCorrect: true, audioKey: "kapi", spokenText: "kapı" }
        ]
    },

    // 4. Pencere
    { 
        id: 7, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Pencere açıktır.', wrong: 'Hayır, pencere kapalıdır.' },
            en: { correct: 'Yes! The window is open.', wrong: 'No, the window is closed.' },
            de: { correct: 'Ja! Das Fenster ist offen.', wrong: 'Nein, das Fenster ist geschlossen.' },
            fr: { correct: "Oui ! La fenêtre est ouverte.", wrong: "Non, la fenêtre est fermée." },
            nl: { correct: 'Ja! Het raam is open.', wrong: 'Nee, het raam is gesloten.' },
            az: { correct: 'Bəli! Pəncərə açıqdır.', wrong: 'Xeyr, pəncərə bağlıdır.' }
        },
        options: [
            { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "pencere", spokenText: "pencere" },
            { id: 83, word: "pencere", imageUrl: "/images/83.png", isCorrect: false, audioKey: "pencere", spokenText: "pencere" }
        ]
    },
    { 
        id: 8, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Pencere kapalıdır.', wrong: 'Hayır, pencere açıktır.' },
            en: { correct: 'Yes! The window is closed.', wrong: 'No, the window is open.' },
            de: { correct: 'Ja! Das Fenster ist geschlossen.', wrong: 'Nein, das Fenster ist offen.' },
            fr: { correct: "Oui ! La fenêtre est fermée.", wrong: "Non, la fenêtre est ouverte." },
            nl: { correct: 'Ja! Het raam is gesloten.', wrong: 'Nee, het raam is open.' },
            az: { correct: 'Bəli! Pəncərə bağlıdır.', wrong: 'Xeyr, pəncərə açıqdır.' }
        },
        options: [
            { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "pencere", spokenText: "pencere" },
            { id: 83, word: "pencere", imageUrl: "/images/83.png", isCorrect: true, audioKey: "pencere", spokenText: "pencere" }
        ]
    },

    // 5. Göz
    { 
        id: 9, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Göz açıktır.', wrong: 'Hayır, göz kapalıdır.' },
            en: { correct: 'Yes! The eye is open.', wrong: 'No, the eye is closed.' },
            de: { correct: 'Ja! Das Auge ist offen.', wrong: 'Nein, das Auge ist geschlossen.' },
            fr: { correct: "Oui ! L'œil est ouvert.", wrong: "Non, l'œil est fermé." },
            nl: { correct: 'Ja! Het oog is open.', wrong: 'Nee, het oog is gesloten.' },
            az: { correct: 'Bəli! Göz açıqdır.', wrong: 'Xeyr, göz bağlıdır.' }
        },
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "goz", spokenText: "göz" },
            { id: 597, word: "göz", imageUrl: "/images/597.png", isCorrect: false, audioKey: "goz", spokenText: "göz" }
        ]
    },
    { 
        id: 10, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Göz kapalıdır.', wrong: 'Hayır, göz açıktır.' },
            en: { correct: 'Yes! The eye is closed.', wrong: 'No, the eye is open.' },
            de: { correct: 'Ja! Das Auge ist geschlossen.', wrong: 'Nein, das Auge ist offen.' },
            fr: { correct: "Oui ! L'œil est fermé.", wrong: "Non, l'œil est ouvert." },
            nl: { correct: 'Ja! Het oog is gesloten.', wrong: 'Nee, het oog is open.' },
            az: { correct: 'Bəli! Göz bağlıdır.', wrong: 'Xeyr, göz açıqdır.' }
        },
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "goz", spokenText: "göz" },
            { id: 597, word: "göz", imageUrl: "/images/597.png", isCorrect: true, audioKey: "goz", spokenText: "göz" }
        ]
    },

    // 6. Hazine Sandığı
    { 
        id: 11, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Sandık açıktır.', wrong: 'Hayır, sandık kapalıdır.' },
            en: { correct: 'Yes! The chest is open.', wrong: 'No, the chest is closed.' },
            de: { correct: 'Ja! Die Truhe ist offen.', wrong: 'Nein, die Truhe ist geschlossen.' },
            fr: { correct: "Oui ! Le coffre est ouvert.", wrong: "Non, le coffre est fermé." },
            nl: { correct: 'Ja! De kist is open.', wrong: 'Nee, de kist is gesloten.' },
            az: { correct: 'Bəli! Sandıq açıqdır.', wrong: 'Xeyr, sandıq bağlıdır.' }
        },
        options: [
            { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: true, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" },
            { id: 201, word: "hazine sandığı", imageUrl: "/images/201.png", isCorrect: false, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" }
        ]
    },
    { 
        id: 12, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Sandık kapalıdır.', wrong: 'Hayır, sandık açıktır.' },
            en: { correct: 'Yes! The chest is closed.', wrong: 'No, the chest is open.' },
            de: { correct: 'Ja! Die Truhe ist geschlossen.', wrong: 'Nein, die Truhe ist offen.' },
            fr: { correct: "Oui ! Le coffre est fermé.", wrong: "Non, le coffre est ouvert." },
            nl: { correct: 'Ja! De kist is gesloten.', wrong: 'Nee, de kist is open.' },
            az: { correct: 'Bəli! Sandıq bağlıdır.', wrong: 'Xeyr, sandıq açıqdır.' }
        },
        options: [
            { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: false, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" },
            { id: 201, word: "hazine sandığı", imageUrl: "/images/201.png", isCorrect: true, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" }
        ]
    },

    // 7. Musluk
    { 
        id: 13, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Musluk açıktır.', wrong: 'Hayır, musluk kapalıdır.' },
            en: { correct: 'Yes! The faucet is open.', wrong: 'No, the faucet is closed.' },
            de: { correct: 'Ja! Der Wasserhahn ist offen.', wrong: 'Nein, der Wasserhahn ist geschlossen.' },
            fr: { correct: "Oui ! Le robinet est ouvert.", wrong: "Non, le robinet est fermé." },
            nl: { correct: 'Ja! De kraan is open.', wrong: 'Nee, de kraan is gesloten.' },
            az: { correct: 'Bəli! Kran açıqdır.', wrong: 'Xeyr, kran bağlıdır.' }
        },
        options: [
            { id: 303, word: "musluk", imageUrl: "/images/303.png", isCorrect: true, audioKey: "musluk", spokenText: "musluk" },
            { id: 304, word: "musluk", imageUrl: "/images/304.png", isCorrect: false, audioKey: "musluk", spokenText: "musluk" }
        ]
    },
    { 
        id: 14, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Musluk kapalıdır.', wrong: 'Hayır, musluk açıktır.' },
            en: { correct: 'Yes! The faucet is closed.', wrong: 'No, the faucet is open.' },
            de: { correct: 'Ja! Der Wasserhahn ist geschlossen.', wrong: 'Nein, der Wasserhahn ist offen.' },
            fr: { correct: "Oui ! Le robinet est fermé.", wrong: "Non, le robinet est ouvert." },
            nl: { correct: 'Ja! De kraan is gesloten.', wrong: 'Nee, de kraan is open.' },
            az: { correct: 'Bəli! Kran bağlıdır.', wrong: 'Xeyr, kran açıqdır.' }
        },
        options: [
            { id: 303, word: "musluk", imageUrl: "/images/303.png", isCorrect: false, audioKey: "musluk", spokenText: "musluk" },
            { id: 304, word: "musluk", imageUrl: "/images/304.png", isCorrect: true, audioKey: "musluk", spokenText: "musluk" }
        ]
    },

    // 8. Elbise Dolabı
    { 
        id: 15, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Dolap açıktır.', wrong: 'Hayır, dolap kapalıdır.' },
            en: { correct: 'Yes! The closet is open.', wrong: 'No, the closet is closed.' },
            de: { correct: 'Ja! Der Schrank ist offen.', wrong: 'Nein, der Schrank ist geschlossen.' },
            fr: { correct: "Oui ! L'armoire est ouverte.", wrong: "Non, l'armoire est fermée." },
            nl: { correct: 'Ja! De kast is open.', wrong: 'Nee, de kast is gesloten.' },
            az: { correct: 'Bəli! Şkaf açıqdır.', wrong: 'Xeyr, şkaf bağlıdır.' }
        },
        options: [
            { id: 660, word: "elbise dolabı", imageUrl: "/images/660.png", isCorrect: true, audioKey: "elbise_dolabi", spokenText: "elbise dolabı" },
            { id: 339, word: "elbise dolabı", imageUrl: "/images/339.png", isCorrect: false, audioKey: "elbise_dolabi", spokenText: "elbise dolabı" }
        ]
    },
    { 
        id: 16, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Dolap kapalıdır.', wrong: 'Hayır, dolap açıktır.' },
            en: { correct: 'Yes! The closet is closed.', wrong: 'No, the closet is open.' },
            de: { correct: 'Ja! Der Schrank ist geschlossen.', wrong: 'Nein, der Schrank ist offen.' },
            fr: { correct: "Oui ! L'armoire est fermée.", wrong: "Non, l'armoire est ouverte." },
            nl: { correct: 'Ja! De kast is gesloten.', wrong: 'Nee, de kast is open.' },
            az: { correct: 'Bəli! Şkaf bağlıdır.', wrong: 'Xeyr, şkaf açıqdır.' }
        },
        options: [
            { id: 660, word: "elbise dolabı", imageUrl: "/images/660.png", isCorrect: false, audioKey: "elbise_dolabi", spokenText: "elbise dolabı" },
            { id: 339, word: "elbise dolabı", imageUrl: "/images/339.png", isCorrect: true, audioKey: "elbise_dolabi", spokenText: "elbise dolabı" }
        ]
    },

    // 9. Zarf
    { 
        id: 17, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Zarf açıktır.', wrong: 'Hayır, zarf kapalıdır.' },
            en: { correct: 'Yes! The envelope is open.', wrong: 'No, the envelope is closed.' },
            de: { correct: 'Ja! Der Umschlag ist offen.', wrong: 'Nein, der Umschlag ist geschlossen.' },
            fr: { correct: "Oui ! L'enveloppe est ouverte.", wrong: "Non, l'enveloppe est fermée." },
            nl: { correct: 'Ja! De envelop is open.', wrong: 'Nee, de envelop is gesloten.' },
            az: { correct: 'Bəli! Zərf açıqdır.', wrong: 'Xeyr, zərf bağlıdır.' }
        },
        options: [
            { id: 396, word: "zarf", imageUrl: "/images/396.png", isCorrect: true, audioKey: "zarf", spokenText: "zarf" },
            { id: 600, word: "zarf", imageUrl: "/images/600.png", isCorrect: false, audioKey: "zarf", spokenText: "zarf" }
        ]
    },
    { 
        id: 18, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Zarf kapalıdır.', wrong: 'Hayır, zarf açıktır.' },
            en: { correct: 'Yes! The envelope is closed.', wrong: 'No, the envelope is open.' },
            de: { correct: 'Ja! Der Umschlag ist geschlossen.', wrong: 'Nein, der Umschlag ist offen.' },
            fr: { correct: "Oui ! L'enveloppe est fermée.", wrong: "Non, l'enveloppe est ouverte." },
            nl: { correct: 'Ja! De envelop is gesloten.', wrong: 'Nee, de envelop is open.' },
            az: { correct: 'Bəli! Zərf bağlıdır.', wrong: 'Xeyr, zərf açıqdır.' }
        },
        options: [
            { id: 396, word: "zarf", imageUrl: "/images/396.png", isCorrect: false, audioKey: "zarf", spokenText: "zarf" },
            { id: 600, word: "zarf", imageUrl: "/images/600.png", isCorrect: true, audioKey: "zarf", spokenText: "zarf" }
        ]
    },

    // 10. Su Şişesi
    { 
        id: 19, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Şişe açıktır.', wrong: 'Hayır, şişe kapalıdır.' },
            en: { correct: 'Yes! The bottle is open.', wrong: 'No, the bottle is closed.' },
            de: { correct: 'Ja! Die Flasche ist offen.', wrong: 'Nein, die Flasche ist geschlossen.' },
            fr: { correct: "Oui ! La bouteille est ouverte.", wrong: "Non, la bouteille est fermée." },
            nl: { correct: 'Ja! De fles is open.', wrong: 'Nee, de fles is gesloten.' },
            az: { correct: 'Bəli! Şüşə açıqdır.', wrong: 'Xeyr, şüşə bağlıdır.' }
        },
        options: [
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },
    { 
        id: 20, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Şişe kapalıdır.', wrong: 'Hayır, şişe açıktır.' },
            en: { correct: 'Yes! The bottle is closed.', wrong: 'No, the bottle is open.' },
            de: { correct: 'Ja! Die Flasche ist geschlossen.', wrong: 'Nein, die Flasche ist offen.' },
            fr: { correct: "Oui ! La bouteille est fermée.", wrong: "Non, la bouteille est ouverte." },
            nl: { correct: 'Ja! De fles is gesloten.', wrong: 'Nee, de fles is open.' },
            az: { correct: 'Bəli! Şüşə bağlıdır.', wrong: 'Xeyr, şüşə açıqdır.' }
        },
        options: [
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },

    // 11. Şemsiye
    { 
        id: 21, 
        question: "Açık olan hangisi?", 
        questionAudioKey: "q_which_is_open", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Şemsiye açıktır.', wrong: 'Hayır, şemsiye kapalıdır.' },
            en: { correct: 'Yes! The umbrella is open.', wrong: 'No, the umbrella is closed.' },
            de: { correct: 'Ja! Der Regenschirm ist offen.', wrong: 'Nein, der Regenschirm ist geschlossen.' },
            fr: { correct: "Oui ! Le parapluie est ouvert.", wrong: "Non, le parapluie est fermé." },
            nl: { correct: 'Ja! De paraplu is open.', wrong: 'Nee, de paraplu is gesloten.' },
            az: { correct: 'Bəli! Çətir açıqdır.', wrong: 'Xeyr, çətir bağlıdır.' }
        },
        options: [
            { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: true, audioKey: "semsiye", spokenText: "şemsiye" },
            { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: false, audioKey: "semsiye", spokenText: "şemsiye" }
        ]
    },
    { 
        id: 22, 
        question: "Kapalı olan hangisi?", 
        questionAudioKey: "q_which_is_closed", 
        activityType: ActivityType.OpenClosed, 
        speech: {
            tr: { correct: 'Evet! Şemsiye kapalıdır.', wrong: 'Hayır, şemsiye açıktır.' },
            en: { correct: 'Yes! The umbrella is closed.', wrong: 'No, the umbrella is open.' },
            de: { correct: 'Ja! Der Regenschirm ist geschlossen.', wrong: 'Nein, der Regenschirm ist offen.' },
            fr: { correct: "Oui ! Le parapluie est fermé.", wrong: "Non, le parapluie est ouvert." },
            nl: { correct: 'Ja! De paraplu is gesloten.', wrong: 'Nee, de paraplu is open.' },
            az: { correct: 'Bəli! Çətir bağlıdır.', wrong: 'Xeyr, çətir açıqdır.' }
        },
        options: [
            { id: 157, word: "şemsiye", imageUrl: "/images/157.png", isCorrect: false, audioKey: "semsiye", spokenText: "şemsiye" },
            { id: 158, word: "şemsiye", imageUrl: "/images/158.png", isCorrect: true, audioKey: "semsiye", spokenText: "şemsiye" }
        ]
    },
];