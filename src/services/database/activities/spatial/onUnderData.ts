import { ConceptRound, ActivityType } from '../../../../types';

export const onUnderData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Top - Masa (20-21)
    // ----------------------------------------------------------------------
    { 
        id: 1, 
        question: "Masanın üstünde olan hangisi?", 
        questionAudioKey: "q_on_table", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Top masanın üstündedir.', wrong: 'Hayır, top masanın altındadır.' },
            en: { correct: 'Yes! The ball is on the table.', wrong: 'No, the ball is under the table.' },
            de: { correct: 'Ja! Der Ball ist auf dem Tisch.', wrong: 'Nein, der Ball ist unter dem Tisch.' },
            fr: { correct: "Oui ! La balle est sur la table.", wrong: "Non, la balle est sous la table." },
            nl: { correct: 'Ja! De bal ligt op de tafel.', wrong: 'Nee, de bal ligt onder de tafel.' },
            az: { correct: 'Bəli! Top masanın üstündədir.', wrong: 'Xeyr, top masanın altındadır.' }
        },
        options: [
            { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: true, audioKey: "top_masanin_ustunde", spokenText: "top" },
            { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: false, audioKey: "top_masanin_altinda", spokenText: "top" }
        ]
    },
    { 
        id: 2, 
        question: "Masanın altında olan hangisi?", 
        questionAudioKey: "q_under_table", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Top masanın altındadır.', wrong: 'Hayır, top masanın üstündedir.' },
            en: { correct: 'Yes! The ball is under the table.', wrong: 'No, the ball is on the table.' },
            de: { correct: 'Ja! Der Ball ist unter dem Tisch.', wrong: 'Nein, der Ball ist auf dem Tisch.' },
            fr: { correct: "Oui ! La balle est sous la table.", wrong: "Non, la balle est sur la table." },
            nl: { correct: 'Ja! De bal ligt onder de tafel.', wrong: 'Nee, de bal ligt op de tafel.' },
            az: { correct: 'Bəli! Top masanın altındadır.', wrong: 'Xeyr, top masanın üstündədir.' }
        },
        options: [
            { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: false, audioKey: "top_masanin_ustunde", spokenText: "top" },
            { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: true, audioKey: "top_masanin_altinda", spokenText: "top" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Kedi - Sandalye (160-91)
    // ----------------------------------------------------------------------
    { 
        id: 3, 
        question: "Sandalyenin üstünde olan hangisi?", 
        questionAudioKey: "q_on_chair", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kedi sandalyenin üstündedir.', wrong: 'Hayır, kedi sandalyenin altındadır.' },
            en: { correct: 'Yes! The cat is on the chair.', wrong: 'No, the cat is under the chair.' },
            de: { correct: 'Ja! Die Katze ist auf dem Stuhl.', wrong: 'Nein, die Katze ist unter dem Stuhl.' },
            fr: { correct: "Oui ! Le chat est sur la chaise.", wrong: "Non, le chat est sous la chaise." },
            nl: { correct: 'Ja! De kat zit op de stoel.', wrong: 'Nee, de kat zit onder de stoel.' },
            az: { correct: 'Bəli! Pişik stulun üstündədir.', wrong: 'Xeyr, pişik stulun altındadır.' }
        },
        options: [
            { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: true, audioKey: "kedi_sandalyenin_ustunde", spokenText: "kedi" },
            { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: false, audioKey: "kedi_sandalyenin_altinda", spokenText: "kedi" }
        ]
    },
    { 
        id: 4, 
        question: "Sandalyenin altında olan hangisi?", 
        questionAudioKey: "q_under_chair", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kedi sandalyenin altındadır.', wrong: 'Hayır, kedi sandalyenin üstündedir.' },
            en: { correct: 'Yes! The cat is under the chair.', wrong: 'No, the cat is on the chair.' },
            de: { correct: 'Ja! Die Katze ist unter dem Stuhl.', wrong: 'Nein, die Katze ist auf dem Stuhl.' },
            fr: { correct: "Oui ! Le chat est sous la chaise.", wrong: "Non, le chat est sur la chaise." },
            nl: { correct: 'Ja! De kat zit onder de stoel.', wrong: 'Nee, de kat zit op de stoel.' },
            az: { correct: 'Bəli! Pişik stulun altındadır.', wrong: 'Xeyr, pişik stulun üstündədir.' }
        },
        options: [
            { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: false, audioKey: "kedi_sandalyenin_ustunde", spokenText: "kedi" },
            { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: true, audioKey: "kedi_sandalyenin_altinda", spokenText: "kedi" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Kiraz - Pasta (486-183)
    // ----------------------------------------------------------------------
    { 
        id: 5, 
        question: "Pastanın üstünde olan hangisi?", 
        questionAudioKey: "q_on_cake", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kiraz pastanın üstündedir.', wrong: 'Hayır, kiraz pastanın altındadır.' },
            en: { correct: 'Yes! The cherry is on the cake.', wrong: 'No, the cherry is under the cake.' },
            de: { correct: 'Ja! Die Kirsche ist auf dem Kuchen.', wrong: 'Nein, die Kirsche ist unter dem Kuchen.' },
            fr: { correct: "Oui ! La cerise est sur le gâteau.", wrong: "Non, la cerise est sous le gâteau." },
            nl: { correct: 'Ja! De kers ligt op de taart.', wrong: 'Nee, de kers ligt onder de taart.' },
            az: { correct: 'Bəli! Albalı tortun üstündədir.', wrong: 'Xeyr, albalı tortun altındadır.' }
        },
        options: [
            { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: true, audioKey: "kiraz_pastanin_ustunde", spokenText: "kiraz" },
            { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: false, audioKey: "kiraz_pastanin_altinda", spokenText: "kiraz" }
        ]
    },
    { 
        id: 6, 
        question: "Pastanın altında olan hangisi?", 
        questionAudioKey: "q_under_cake", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kiraz pastanın altındadır.', wrong: 'Hayır, kiraz pastanın üstündedir.' },
            en: { correct: 'Yes! The cherry is under the cake.', wrong: 'No, the cherry is on the cake.' },
            de: { correct: 'Ja! Die Kirsche ist unter dem Kuchen.', wrong: 'Nein, die Kirsche ist auf dem Kuchen.' },
            fr: { correct: "Oui ! La cerise est sous le gâteau.", wrong: "Non, la cerise est sur le gâteau." },
            nl: { correct: 'Ja! De kers ligt onder de taart.', wrong: 'Nee, de kers ligt op de taart.' },
            az: { correct: 'Bəli! Albalı tortun altındadır.', wrong: 'Xeyr, albalı tortun üstündədir.' }
        },
        options: [
            { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: false, audioKey: "kiraz_pastanin_ustunde", spokenText: "kiraz" },
            { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: true, audioKey: "kiraz_pastanin_altinda", spokenText: "kiraz" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Top - Merdiven (172-173)
    // ----------------------------------------------------------------------
    { 
        id: 7, 
        question: "Merdivenin üstünde olan hangisi?", 
        questionAudioKey: "q_on_stairs", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Top merdivenin üstündedir.', wrong: 'Hayır, top merdivenin altındadır.' },
            en: { correct: 'Yes! The ball is on the stairs.', wrong: 'No, the ball is under the stairs.' },
            de: { correct: 'Ja! Der Ball ist auf der Treppe.', wrong: 'Nein, der Ball ist unter der Treppe.' },
            fr: { correct: "Oui ! La balle est sur l'escalier.", wrong: "Non, la balle est sous l'escalier." },
            nl: { correct: 'Ja! De bal ligt op de trap.', wrong: 'Nee, de bal ligt onder de trap.' },
            az: { correct: 'Bəli! Top pilləkənin üstündədir.', wrong: 'Xeyr, top pilləkənin altındadır.' }
        },
        options: [
            { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: true, audioKey: "top_merdivenin_ustunde", spokenText: "top" },
            { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: false, audioKey: "top_merdivenin_altinda", spokenText: "top" }
        ]
    },
    { 
        id: 8, 
        question: "Merdivenin altında olan hangisi?", 
        questionAudioKey: "q_under_stairs", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Top merdivenin altındadır.', wrong: 'Hayır, top merdivenin üstündedir.' },
            en: { correct: 'Yes! The ball is under the stairs.', wrong: 'No, the ball is on the stairs.' },
            de: { correct: 'Ja! Der Ball ist unter der Treppe.', wrong: 'Nein, der Ball ist auf der Treppe.' },
            fr: { correct: "Oui ! La balle est sous l'escalier.", wrong: "Non, la balle est sur l'escalier." },
            nl: { correct: 'Ja! De bal ligt onder de trap.', wrong: 'Nee, de bal ligt op de trap.' },
            az: { correct: 'Bəli! Top pilləkənin altındadır.', wrong: 'Xeyr, top pilləkənin üstündədir.' }
        },
        options: [
            { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: false, audioKey: "top_merdivenin_ustunde", spokenText: "top" },
            { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: true, audioKey: "top_merdivenin_altinda", spokenText: "top" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. Yastık - Yatak (482-478)
    // ----------------------------------------------------------------------
    { 
        id: 9, 
        question: "Yatağın üstünde olan hangisi?", 
        questionAudioKey: "q_on_bed", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Yastık yatağın üstündedir.', wrong: 'Hayır, yastık yatağın altındadır.' },
            en: { correct: 'Yes! The pillow is on the bed.', wrong: 'No, the pillow is under the bed.' },
            de: { correct: 'Ja! Das Kissen ist auf dem Bett.', wrong: 'Nein, das Kissen ist unter dem Bett.' },
            fr: { correct: "Oui ! L'oreiller est sur le lit.", wrong: "Non, l'oreiller est sous le lit." },
            nl: { correct: 'Ja! Het kussen ligt op het bed.', wrong: 'Nee, het kussen ligt onder het bed.' },
            az: { correct: 'Bəli! Yastıq çarpayının üstündədir.', wrong: 'Xeyr, yastıq çarpayının altındadır.' }
        },
        options: [
            { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: true, audioKey: "yastik_yatagin_ustunde", spokenText: "yastık" },
            { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: false, audioKey: "yastik_yatagin_altinda", spokenText: "yastık" }
        ]
    },
    { 
        id: 10, 
        question: "Yatağın altında olan hangisi?", 
        questionAudioKey: "q_under_bed", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Yastık yatağın altındadır.', wrong: 'Hayır, yastık yatağın üstündedir.' },
            en: { correct: 'Yes! The pillow is under the bed.', wrong: 'No, the pillow is on the bed.' },
            de: { correct: 'Ja! Das Kissen ist unter dem Bett.', wrong: 'Nein, das Kissen ist auf dem Bett.' },
            fr: { correct: "Oui ! L'oreiller est sous le lit.", wrong: "Non, l'oreiller est sur le lit." },
            nl: { correct: 'Ja! Het kussen ligt onder het bed.', wrong: 'Nee, het kussen ligt op het bed.' },
            az: { correct: 'Bəli! Yastıq çarpayının altındadır.', wrong: 'Xeyr, yastıq çarpayının üstündədir.' }
        },
        options: [
            { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: false, audioKey: "yastik_yatagin_ustunde", spokenText: "yastık" },
            { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: true, audioKey: "yastik_yatagin_altinda", spokenText: "yastık" }
        ]
    },

    // ----------------------------------------------------------------------
    // 6. Şapka - Kafa (499-690)
    // ----------------------------------------------------------------------
    { 
        id: 11, 
        question: "Kafanın üstünde olan hangisi?", 
        questionAudioKey: "q_on_head", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Şapka kafanın üstündedir.', wrong: 'Hayır, şapka yerde duruyor.' }, // "kafanın altında" yerine "yerde" daha doğal ama format gereği "altında" denebilir, görsele göre "Kafanın altında" biraz garip durabilir ama konsept olarak "alt/üst" öğretiyoruz. Burada "Kafanın üstünde" sorusunun yanlışına odaklanalım.
            en: { correct: 'Yes! The hat is on the head.', wrong: 'No, the hat is under the head.' },
            de: { correct: 'Ja! Der Hut ist auf dem Kopf.', wrong: 'Nein, der Hut ist unter dem Kopf.' },
            fr: { correct: "Oui ! Le chapeau est sur la tête.", wrong: "Non, le chapeau est sous la tête." },
            nl: { correct: 'Ja! De hoed zit op het hoofd.', wrong: 'Nee, de hoed zit onder het hoofd.' },
            az: { correct: 'Bəli! Şapka başın üstündədir.', wrong: 'Xeyr, şapka başın altındadır.' }
        },
        options: [
            { id: 499, word: "şapka", imageUrl: "/images/499.png", isCorrect: true, audioKey: "sapka_kafanin_ustunde", spokenText: "şapka" },
            { id: 690, word: "şapka", imageUrl: "/images/690.png", isCorrect: false, audioKey: "sapka_kafanin_altinda", spokenText: "şapka" }
        ]
    },
    // Not: Şapka için "Kafanın altında" sorusu orijinal veride yoktu, sadece ID 11 vardı. Sadece üstte sorulmuş. ID 12 atlanmış orijinalde. Ben de eklemedim.

    // ----------------------------------------------------------------------
    // 7. Kuş - Bulut (85-86)
    // ----------------------------------------------------------------------
    { 
        id: 13, 
        question: "Hangi kuş bulutun üstünde?", 
        questionAudioKey: "q_bird_above_cloud", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kuş bulutun üstündedir.', wrong: 'Hayır, kuş bulutun altındadır.' },
            en: { correct: 'Yes! The bird is above the cloud.', wrong: 'No, the bird is below the cloud.' },
            de: { correct: 'Ja! Der Vogel ist über der Wolke.', wrong: 'Nein, der Vogel ist unter der Wolke.' },
            fr: { correct: "Oui ! L'oiseau est au-dessus du nuage.", wrong: "Non, l'oiseau est en dessous du nuage." },
            nl: { correct: 'Ja! De vogel is boven de wolk.', wrong: 'Nee, de vogel is onder de wolk.' },
            az: { correct: 'Bəli! Quş buludun üstündədir.', wrong: 'Xeyr, quş buludun altındadır.' }
        },
        options: [
            { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: true, audioKey: "kus_bulutun_ustunde", spokenText: "kuş" },
            { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: false, audioKey: "kus_bulutun_altinda", spokenText: "kuş" }
        ]
    },
    { 
        id: 14, 
        question: "Hangi kuş bulutun altında?", 
        questionAudioKey: "q_bird_below_cloud", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kuş bulutun altındadır.', wrong: 'Hayır, kuş bulutun üstündedir.' },
            en: { correct: 'Yes! The bird is below the cloud.', wrong: 'No, the bird is above the cloud.' },
            de: { correct: 'Ja! Der Vogel ist unter der Wolke.', wrong: 'Nein, der Vogel ist über der Wolke.' },
            fr: { correct: "Oui ! L'oiseau est en dessous du nuage.", wrong: "Non, l'oiseau est au-dessus du nuage." },
            nl: { correct: 'Ja! De vogel is onder de wolk.', wrong: 'Nee, de vogel is boven de wolk.' },
            az: { correct: 'Bəli! Quş buludun altındadır.', wrong: 'Xeyr, quş buludun üstündədir.' }
        },
        options: [
            { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: false, audioKey: "kus_bulutun_ustunde", spokenText: "kuş" },
            { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: true, audioKey: "kus_bulutun_altinda", spokenText: "kuş" }
        ]
    },

    // ----------------------------------------------------------------------
    // 8. Kitap - Masa (472-473)
    // ----------------------------------------------------------------------
    { 
        id: 15, 
        question: "Masanın üstünde olan hangisi?", 
        questionAudioKey: "q_book_on_table", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kitap masanın üstündedir.', wrong: 'Hayır, kitap masanın altındadır.' },
            en: { correct: 'Yes! The book is on the table.', wrong: 'No, the book is under the table.' },
            de: { correct: 'Ja! Das Buch ist auf dem Tisch.', wrong: 'Nein, das Buch ist unter dem Tisch.' },
            fr: { correct: "Oui ! Le livre est sur la table.", wrong: "Non, le livre est sous la table." },
            nl: { correct: 'Ja! Het boek ligt op de tafel.', wrong: 'Nee, het boek ligt onder de tafel.' },
            az: { correct: 'Bəli! Kitab masanın üstündədir.', wrong: 'Xeyr, kitab masanın altındadır.' }
        },
        options: [
            { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: true, audioKey: "kitap_masanin_ustunde", spokenText: "kitap" },
            { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: false, audioKey: "kitap_masanin_altinda", spokenText: "kitap" }
        ]
    },
    { 
        id: 16, 
        question: "Masanın altında olan hangisi?", 
        questionAudioKey: "q_book_under_table", 
        activityType: ActivityType.OnUnder, 
        speech: {
            tr: { correct: 'Evet! Kitap masanın altındadır.', wrong: 'Hayır, kitap masanın üstündedir.' },
            en: { correct: 'Yes! The book is under the table.', wrong: 'No, the book is on the table.' },
            de: { correct: 'Ja! Das Buch ist unter dem Tisch.', wrong: 'Nein, das Buch ist auf dem Tisch.' },
            fr: { correct: "Oui ! Le livre est sous la table.", wrong: "Non, le livre est sur la table." },
            nl: { correct: 'Ja! Het boek ligt onder de tafel.', wrong: 'Nee, het boek ligt op de tafel.' },
            az: { correct: 'Bəli! Kitab masanın altındadır.', wrong: 'Xeyr, kitab masanın üstündədir.' }
        },
        options: [
            { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: false, audioKey: "kitap_masanin_ustunde", spokenText: "kitap" },
            { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: true, audioKey: "kitap_masanin_altinda", spokenText: "kitap" }
        ]
    }
];