import { ConceptRound, ActivityType } from '../../../../types';

export const seffafOpakData: ConceptRound[] = [
    // 1. Bardak vs Teneke Kutu
    { 
        id: 1, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Bardak şeffaftır.', wrong: 'Hayır, kutu opaktır.' },
            en: { correct: 'Yes! The glass is transparent.', wrong: 'No, the can is opaque.' },
            de: { correct: 'Ja! Das Glas ist durchsichtig.', wrong: 'Nein, die Dose ist undurchsichtig.' },
            fr: { correct: "Oui ! Le verre est transparent.", wrong: "Non, la boîte est opaque." },
            nl: { correct: 'Ja! Het glas is transparant.', wrong: 'Nee, het blik is ondoorzichtig.' },
            az: { correct: 'Bəli! Stəkan şəffafdır.', wrong: 'Xeyr, qutu qeyri-şəffafdır.' }
        },
        options: [
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" },
            { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: false, audioKey: "teneke_kutu", spokenText: "teneke kutu" }
        ]
    },
    { 
        id: 2, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Kutu opaktır.', wrong: 'Hayır, bardak şeffaftır.' },
            en: { correct: 'Yes! The can is opaque.', wrong: 'No, the glass is transparent.' },
            de: { correct: 'Ja! Die Dose ist undurchsichtig.', wrong: 'Nein, das Glas ist durchsichtig.' },
            fr: { correct: "Oui ! La boîte est opaque.", wrong: "Non, le verre est transparent." },
            nl: { correct: 'Ja! Het blik is ondoorzichtig.', wrong: 'Nee, het glas is transparant.' },
            az: { correct: 'Bəli! Qutu qeyri-şəffafdır.', wrong: 'Xeyr, stəkan şəffafdır.' }
        },
        options: [
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" },
            { id: 685, word: "teneke kutu", imageUrl: "/images/685.png", isCorrect: true, audioKey: "teneke_kutu", spokenText: "teneke kutu" }
        ]
    },

    // 2. Akvaryum vs Ahşap Kutu
    { 
        id: 3, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Akvaryum şeffaftır.', wrong: 'Hayır, kutu opaktır.' },
            en: { correct: 'Yes! The aquarium is transparent.', wrong: 'No, the box is opaque.' },
            de: { correct: 'Ja! Das Aquarium ist durchsichtig.', wrong: 'Nein, die Kiste ist undurchsichtig.' },
            fr: { correct: "Oui ! L'aquarium est transparent.", wrong: "Non, la boîte est opaque." },
            nl: { correct: 'Ja! Het aquarium is transparant.', wrong: 'Nee, de kist is ondoorzichtig.' },
            az: { correct: 'Bəli! Akvarium şəffafdır.', wrong: 'Xeyr, qutu qeyri-şəffafdır.' }
        },
        options: [
            { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: true, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: false, audioKey: "ahsap_kutu", spokenText: "ahşap kutu" }
        ]
    },
    { 
        id: 4, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Kutu opaktır.', wrong: 'Hayır, akvaryum şeffaftır.' },
            en: { correct: 'Yes! The box is opaque.', wrong: 'No, the aquarium is transparent.' },
            de: { correct: 'Ja! Die Kiste ist undurchsichtig.', wrong: 'Nein, das Aquarium ist durchsichtig.' },
            fr: { correct: "Oui ! La boîte est opaque.", wrong: "Non, l'aquarium est transparent." },
            nl: { correct: 'Ja! De kist is ondoorzichtig.', wrong: 'Nee, het aquarium is transparant.' },
            az: { correct: 'Bəli! Qutu qeyri-şəffafdır.', wrong: 'Xeyr, akvarium şəffafdır.' }
        },
        options: [
            { id: 310, word: "akvaryum", imageUrl: "/images/310.png", isCorrect: false, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 203, word: "ahşap kutu", imageUrl: "/images/203.png", isCorrect: true, audioKey: "ahsap_kutu", spokenText: "ahşap kutu" }
        ]
    },

    // 3. Cam Kavanoz vs Toprak Saksı
    { 
        id: 5, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Kavanoz şeffaftır.', wrong: 'Hayır, saksı opaktır.' },
            en: { correct: 'Yes! The jar is transparent.', wrong: 'No, the flowerpot is opaque.' },
            de: { correct: 'Ja! Das Glas ist durchsichtig.', wrong: 'Nein, der Blumentopf ist undurchsichtig.' },
            fr: { correct: "Oui ! Le bocal est transparent.", wrong: "Non, le pot de fleurs est opaque." },
            nl: { correct: 'Ja! De pot is transparant.', wrong: 'Nee, de bloempot is ondoorzichtig.' },
            az: { correct: 'Bəli! Banka şəffafdır.', wrong: 'Xeyr, gül dibçəyi qeyri-şəffafdır.' }
        },
        options: [
            { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksi", spokenText: "saksı" }
        ]
    },
    { 
        id: 6, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Saksı opaktır.', wrong: 'Hayır, kavanoz şeffaftır.' },
            en: { correct: 'Yes! The flowerpot is opaque.', wrong: 'No, the jar is transparent.' },
            de: { correct: 'Ja! Der Blumentopf ist undurchsichtig.', wrong: 'Nein, das Glas ist durchsichtig.' },
            fr: { correct: "Oui ! Le pot de fleurs est opaque.", wrong: "Non, le bocal est transparent." },
            nl: { correct: 'Ja! De bloempot is ondoorzichtig.', wrong: 'Nee, de pot is transparant.' },
            az: { correct: 'Bəli! Gül dibçəyi qeyri-şəffafdır.', wrong: 'Xeyr, banka şəffafdır.' }
        },
        options: [
            { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksi", spokenText: "saksı" }
        ]
    },

    // 4. Su vs Süt
    { 
        id: 7, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Su şeffaftır.', wrong: 'Hayır, süt opaktır.' },
            en: { correct: 'Yes! Water is transparent.', wrong: 'No, milk is opaque.' },
            de: { correct: 'Ja! Wasser ist durchsichtig.', wrong: 'Nein, Milch ist undurchsichtig.' },
            fr: { correct: "Oui ! L'eau est transparente.", wrong: "Non, le lait est opaque." },
            nl: { correct: 'Ja! Water is transparant.', wrong: 'Nee, melk is ondoorzichtig.' },
            az: { correct: 'Bəli! Su şəffafdır.', wrong: 'Xeyr, süd qeyri-şəffafdır.' }
        },
        options: [
            { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: true, audioKey: "su", spokenText: "su" },
            { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: false, audioKey: "sut", spokenText: "süt" }
        ]
    },
    { 
        id: 8, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Süt opaktır.', wrong: 'Hayır, su şeffaftır.' },
            en: { correct: 'Yes! Milk is opaque.', wrong: 'No, water is transparent.' },
            de: { correct: 'Ja! Milch ist undurchsichtig.', wrong: 'Nein, Wasser ist durchsichtig.' },
            fr: { correct: "Oui ! Le lait est opaque.", wrong: "Non, l'eau est transparente." },
            nl: { correct: 'Ja! Melk is ondoorzichtig.', wrong: 'Nee, water is transparant.' },
            az: { correct: 'Bəli! Süd qeyri-şəffafdır.', wrong: 'Xeyr, su şəffafdır.' }
        },
        options: [
            { id: 123, word: "su", imageUrl: "/images/123.png", isCorrect: false, audioKey: "su", spokenText: "su" },
            { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: true, audioKey: "sut", spokenText: "süt" }
        ]
    },

    // 5. Plastik Poşet vs Karton Klasör
    { 
        id: 9, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Poşet şeffaftır.', wrong: 'Hayır, klasör opaktır.' },
            en: { correct: 'Yes! The bag is transparent.', wrong: 'No, the folder is opaque.' },
            de: { correct: 'Ja! Die Tüte ist durchsichtig.', wrong: 'Nein, der Ordner ist undurchsichtig.' },
            fr: { correct: "Oui ! Le sac est transparent.", wrong: "Non, le dossier est opaque." },
            nl: { correct: 'Ja! De zak is transparant.', wrong: 'Nee, de map is ondoorzichtig.' },
            az: { correct: 'Bəli! Paket şəffafdır.', wrong: 'Xeyr, qovluq qeyri-şəffafdır.' }
        },
        options: [
            { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: true, audioKey: "poset", spokenText: "poşet" },
            { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: false, audioKey: "klasor", spokenText: "klasör" }
        ]
    },
    { 
        id: 10, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Klasör opaktır.', wrong: 'Hayır, poşet şeffaftır.' },
            en: { correct: 'Yes! The folder is opaque.', wrong: 'No, the bag is transparent.' },
            de: { correct: 'Ja! Der Ordner ist undurchsichtig.', wrong: 'Nein, die Tüte ist durchsichtig.' },
            fr: { correct: "Oui ! Le dossier est opaque.", wrong: "Non, le sac est transparent." },
            nl: { correct: 'Ja! De map is ondoorzichtig.', wrong: 'Nee, de zak is transparant.' },
            az: { correct: 'Bəli! Qovluq qeyri-şəffafdır.', wrong: 'Xeyr, paket şəffafdır.' }
        },
        options: [
            { id: 688, word: "poşet", imageUrl: "/images/688.png", isCorrect: false, audioKey: "poset", spokenText: "poşet" },
            { id: 689, word: "klasör", imageUrl: "/images/689.png", isCorrect: true, audioKey: "klasor", spokenText: "klasör" }
        ]
    },

    // 6. Büyüteç vs Kitap
    { 
        id: 11, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Büyüteç şeffaftır.', wrong: 'Hayır, kitap opaktır.' },
            en: { correct: 'Yes! The magnifying glass is transparent.', wrong: 'No, the book is opaque.' },
            de: { correct: 'Ja! Die Lupe ist durchsichtig.', wrong: 'Nein, das Buch ist undurchsichtig.' },
            fr: { correct: "Oui ! La loupe est transparente.", wrong: "Non, le livre est opaque." },
            nl: { correct: 'Ja! Het vergrootglas is transparant.', wrong: 'Nee, het boek is ondoorzichtig.' },
            az: { correct: 'Bəli! Böyüdücü şüşə şəffafdır.', wrong: 'Xeyr, kitab qeyri-şəffafdır.' }
        },
        options: [
            { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: true, audioKey: "buyutec", spokenText: "büyüteç" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kitap" }
        ]
    },
    { 
        id: 12, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Kitap opaktır.', wrong: 'Hayır, büyüteç şeffaftır.' },
            en: { correct: 'Yes! The book is opaque.', wrong: 'No, the magnifying glass is transparent.' },
            de: { correct: 'Ja! Das Buch ist undurchsichtig.', wrong: 'Nein, die Lupe ist durchsichtig.' },
            fr: { correct: "Oui ! Le livre est opaque.", wrong: "Non, la loupe est transparente." },
            nl: { correct: 'Ja! Het boek is ondoorzichtig.', wrong: 'Nee, het vergrootglas is transparant.' },
            az: { correct: 'Bəli! Kitab qeyri-şəffafdır.', wrong: 'Xeyr, böyüdücü şüşə şəffafdır.' }
        },
        options: [
            { id: 691, word: "büyüteç", imageUrl: "/images/691.png", isCorrect: false, audioKey: "buyutec", spokenText: "büyüteç" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" }
        ]
    },

    // 7. Cam Bilye vs Lastik
    { 
        id: 13, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Bilye şeffaftır.', wrong: 'Hayır, lastik opaktır.' },
            en: { correct: 'Yes! The marble is transparent.', wrong: 'No, the tire is opaque.' },
            de: { correct: 'Ja! Die Murmel ist durchsichtig.', wrong: 'Nein, der Reifen ist undurchsichtig.' },
            fr: { correct: "Oui ! La bille est transparente.", wrong: "Non, le pneu est opaque." },
            nl: { correct: 'Ja! De knikker is transparant.', wrong: 'Nee, de band is ondoorzichtig.' },
            az: { correct: 'Bəli! Mərmər daşı şəffafdır.', wrong: 'Xeyr, təkər qeyri-şəffafdır.' }
        },
        options: [
            { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: true, audioKey: "bilye", spokenText: "bilye" },
            { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: false, audioKey: "lastik", spokenText: "lastik" }
        ]
    },
    { 
        id: 14, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Lastik opaktır.', wrong: 'Hayır, bilye şeffaftır.' },
            en: { correct: 'Yes! The tire is opaque.', wrong: 'No, the marble is transparent.' },
            de: { correct: 'Ja! Der Reifen ist undurchsichtig.', wrong: 'Nein, die Murmel ist durchsichtig.' },
            fr: { correct: "Oui ! Le pneu est opaque.", wrong: "Non, la bille est transparente." },
            nl: { correct: 'Ja! De band is ondoorzichtig.', wrong: 'Nee, de knikker is transparant.' },
            az: { correct: 'Bəli! Təkər qeyri-şəffafdır.', wrong: 'Xeyr, mərmər daşı şəffafdır.' }
        },
        options: [
            { id: 762, word: "bilye", imageUrl: "/images/762.png", isCorrect: false, audioKey: "bilye", spokenText: "bilye" },
            { id: 670, word: "lastik", imageUrl: "/images/670.png", isCorrect: true, audioKey: "lastik", spokenText: "lastik" }
        ]
    },

    // 8. Ampul vs Tuğla
    { 
        id: 15, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Ampul şeffaftır.', wrong: 'Hayır, tuğla opaktır.' },
            en: { correct: 'Yes! The light bulb is transparent.', wrong: 'No, the brick is opaque.' },
            de: { correct: 'Ja! Die Glühbirne ist durchsichtig.', wrong: 'Nein, der Ziegelstein ist undurchsichtig.' },
            fr: { correct: "Oui ! L'ampoule est transparente.", wrong: "Non, la brique est opaque." },
            nl: { correct: 'Ja! De gloeilamp is transparant.', wrong: 'Nee, de baksteen is ondoorzichtig.' },
            az: { correct: 'Bəli! Lampa şəffafdır.', wrong: 'Xeyr, kərpic qeyri-şəffafdır.' }
        },
        options: [
            { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: true, audioKey: "ampul", spokenText: "ampul" },
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tugla", spokenText: "tuğla" }
        ]
    },
    { 
        id: 16, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Tuğla opaktır.', wrong: 'Hayır, ampul şeffaftır.' },
            en: { correct: 'Yes! The brick is opaque.', wrong: 'No, the light bulb is transparent.' },
            de: { correct: 'Ja! Der Ziegelstein ist undurchsichtig.', wrong: 'Nein, die Glühbirne ist durchsichtig.' },
            fr: { correct: "Oui ! La brique est opaque.", wrong: "Non, l'ampoule est transparente." },
            nl: { correct: 'Ja! De baksteen is ondoorzichtig.', wrong: 'Nee, de gloeilamp is transparant.' },
            az: { correct: 'Bəli! Kərpic qeyri-şəffafdır.', wrong: 'Xeyr, lampa şəffafdır.' }
        },
        options: [
            { id: 574, word: "ampul", imageUrl: "/images/574.png", isCorrect: false, audioKey: "ampul", spokenText: "ampul" },
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tugla", spokenText: "tuğla" }
        ]
    },

    // 9. Streç Film vs Alüminyum Folyo
    { 
        id: 17, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Streç film şeffaftır.', wrong: 'Hayır, folyo opaktır.' },
            en: { correct: 'Yes! The plastic wrap is transparent.', wrong: 'No, the foil is opaque.' },
            de: { correct: 'Ja! Die Frischhaltefolie ist durchsichtig.', wrong: 'Nein, die Alufolie ist undurchsichtig.' },
            fr: { correct: "Oui ! Le film plastique est transparent.", wrong: "Non, le papier aluminium est opaque." },
            nl: { correct: 'Ja! De vershoudfolie is transparant.', wrong: 'Nee, de aluminiumfolie is ondoorzichtig.' },
            az: { correct: 'Bəli! Streç film şəffafdır.', wrong: 'Xeyr, folqa qeyri-şəffafdır.' }
        },
        options: [
            { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: true, audioKey: "strec_film", spokenText: "streç film" },
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" }
        ]
    },
    { 
        id: 18, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Folyo opaktır.', wrong: 'Hayır, streç film şeffaftır.' },
            en: { correct: 'Yes! The foil is opaque.', wrong: 'No, the plastic wrap is transparent.' },
            de: { correct: 'Ja! Die Alufolie ist undurchsichtig.', wrong: 'Nein, die Frischhaltefolie ist durchsichtig.' },
            fr: { correct: "Oui ! Le papier aluminium est opaque.", wrong: "Non, le film plastique est transparent." },
            nl: { correct: 'Ja! De aluminiumfolie is ondoorzichtig.', wrong: 'Nee, de vershoudfolie is transparant.' },
            az: { correct: 'Bəli! Folqa qeyri-şəffafdır.', wrong: 'Xeyr, streç film şəffafdır.' }
        },
        options: [
            { id: 687, word: "streç film", imageUrl: "/images/687.png", isCorrect: false, audioKey: "strec_film", spokenText: "streç film" },
            { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "alüminyum folyo" }
        ]
    },

    // 10. Pencere vs Tuğla
    { 
        id: 19, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Pencere şeffaftır.', wrong: 'Hayır, tuğla opaktır.' },
            en: { correct: 'Yes! The window is transparent.', wrong: 'No, the brick is opaque.' },
            de: { correct: 'Ja! Das Fenster ist durchsichtig.', wrong: 'Nein, der Ziegelstein ist undurchsichtig.' },
            fr: { correct: "Oui ! La fenêtre est transparente.", wrong: "Non, la brique est opaque." },
            nl: { correct: 'Ja! Het raam is transparant.', wrong: 'Nee, de baksteen is ondoorzichtig.' },
            az: { correct: 'Bəli! Pəncərə şəffafdır.', wrong: 'Xeyr, kərpic qeyri-şəffafdır.' }
        },
        options: [
            { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: true, audioKey: "pencere", spokenText: "pencere" },
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tugla", spokenText: "tuğla" }
        ]
    },
    { 
        id: 20, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Tuğla opaktır.', wrong: 'Hayır, pencere şeffaftır.' },
            en: { correct: 'Yes! The brick is opaque.', wrong: 'No, the window is transparent.' },
            de: { correct: 'Ja! Der Ziegelstein ist undurchsichtig.', wrong: 'Nein, das Fenster ist durchsichtig.' },
            fr: { correct: "Oui ! La brique est opaque.", wrong: "Non, la fenêtre est transparente." },
            nl: { correct: 'Ja! De baksteen is ondoorzichtig.', wrong: 'Nee, het raam is transparant.' },
            az: { correct: 'Bəli! Kərpic qeyri-şəffafdır.', wrong: 'Xeyr, pəncərə şəffafdır.' }
        },
        options: [
            { id: 596, word: "pencere", imageUrl: "/images/596.png", isCorrect: false, audioKey: "pencere", spokenText: "pencere" },
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tugla", spokenText: "tuğla" }
        ]
    },

    // 11. Gözlük vs Güneş Gözlüğü
    { 
        id: 21, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Gözlük şeffaftır.', wrong: 'Hayır, güneş gözlüğü opaktır.' },
            en: { correct: 'Yes! The glasses are transparent.', wrong: 'No, the sunglasses are opaque.' },
            de: { correct: 'Ja! Die Brille ist durchsichtig.', wrong: 'Nein, die Sonnenbrille ist undurchsichtig.' },
            fr: { correct: "Oui ! Les lunettes sont transparentes.", wrong: "Non, les lunettes de soleil sont opaques." },
            nl: { correct: 'Ja! De bril is transparant.', wrong: 'Nee, de zonnebril is ondoorzichtig.' },
            az: { correct: 'Bəli! Eynək şəffafdır.', wrong: 'Xeyr, günəş eynəyi qeyri-şəffafdır.' }
        },
        options: [
            { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: true, audioKey: "gozluk", spokenText: "gözlük" },
            { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: false, audioKey: "gunes_gozlugu", spokenText: "güneş gözlüğü" }
        ]
    },
    { 
        id: 22, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Güneş gözlüğü opaktır.', wrong: 'Hayır, gözlük şeffaftır.' },
            en: { correct: 'Yes! The sunglasses are opaque.', wrong: 'No, the glasses are transparent.' },
            de: { correct: 'Ja! Die Sonnenbrille ist undurchsichtig.', wrong: 'Nein, die Brille ist durchsichtig.' },
            fr: { correct: "Oui ! Les lunettes de soleil sont opaques.", wrong: "Non, les lunettes sont transparentes." },
            nl: { correct: 'Ja! De zonnebril is ondoorzichtig.', wrong: 'Nee, de bril is transparant.' },
            az: { correct: 'Bəli! Günəş eynəyi qeyri-şəffafdır.', wrong: 'Xeyr, eynək şəffafdır.' }
        },
        options: [
            { id: 93, word: "gözlük", imageUrl: "/images/93.png", isCorrect: false, audioKey: "gozluk", spokenText: "gözlük" },
            { id: 686, word: "güneş gözlüğü", imageUrl: "/images/686.png", isCorrect: true, audioKey: "gunes_gozlugu", spokenText: "güneş gözlüğü" }
        ]
    },

    // 12. Bardak (şeffaf vs mat)
    { 
        id: 23, 
        question: "Şeffaf olan hangisi?", 
        questionAudioKey: "q_which_is_transparent", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Bardak şeffaftır.', wrong: 'Hayır, bardak opaktır.' },
            en: { correct: 'Yes! The glass is transparent.', wrong: 'No, the glass is opaque.' },
            de: { correct: 'Ja! Das Glas ist durchsichtig.', wrong: 'Nein, das Glas ist undurchsichtig.' },
            fr: { correct: "Oui ! Le verre est transparent.", wrong: "Non, le verre est opaque." },
            nl: { correct: 'Ja! Het glas is transparant.', wrong: 'Nee, het glas is ondoorzichtig.' },
            az: { correct: 'Bəli! Stəkan şəffafdır.', wrong: 'Xeyr, stəkan qeyri-şəffafdır.' }
        },
        options: [
            { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" },
            { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
    { 
        id: 24, 
        question: "Opak olan hangisi?", 
        questionAudioKey: "q_which_is_opaque", 
        activityType: ActivityType.SeffafOpak, 
        speech: {
            tr: { correct: 'Evet! Bardak opaktır.', wrong: 'Hayır, bardak şeffaftır.' },
            en: { correct: 'Yes! The glass is opaque.', wrong: 'No, the glass is transparent.' },
            de: { correct: 'Ja! Das Glas ist undurchsichtig.', wrong: 'Nein, das Glas ist durchsichtig.' },
            fr: { correct: "Oui ! Le verre est opaque.", wrong: "Non, le verre est transparent." },
            nl: { correct: 'Ja! Het glas is ondoorzichtig.', wrong: 'Nee, het glas is transparant.' },
            az: { correct: 'Bəli! Stəkan qeyri-şəffafdır.', wrong: 'Xeyr, stəkan şəffafdır.' }
        },
        options: [
            { id: 550, word: "bardak", imageUrl: "/images/550.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" },
            { id: 551, word: "bardak", imageUrl: "/images/551.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
];