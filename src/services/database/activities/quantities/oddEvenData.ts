import { ConceptRound, ActivityType } from '../../../../types';

export const oddEvenData: ConceptRound[] = [
    // 1. Çorap
    { 
        id: 1, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu çorap tektir.', wrong: 'Hayır, bu çoraplar çifttir.' },
            en: { correct: 'Yes! This sock is single.', wrong: 'No, these socks are a pair.' },
            de: { correct: 'Ja! Diese Socke ist einzeln.', wrong: 'Nein, diese Socken sind ein Paar.' },
            fr: { correct: "Oui ! Cette chaussette est seule.", wrong: "Non, ces chaussettes sont une paire." },
            nl: { correct: 'Ja! Deze sok is enkel.', wrong: 'Nee, deze sokken zijn een paar.' },
            az: { correct: 'Bəli! Bu corab təkdir.', wrong: 'Xeyr, bu corablar cütdür.' }
        },
        options: [
            { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "corap", spokenText: "çorap" },
            { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: false, audioKey: "coraplar", spokenText: "çoraplar" }
        ]
    },
    { 
        id: 1.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu çoraplar çifttir.', wrong: 'Hayır, bu çorap tektir.' },
            en: { correct: 'Yes! These socks are a pair.', wrong: 'No, this sock is single.' },
            de: { correct: 'Ja! Diese Socken sind ein Paar.', wrong: 'Nein, diese Socke ist einzeln.' },
            fr: { correct: "Oui ! Ces chaussettes sont une paire.", wrong: "Non, cette chaussette est seule." },
            nl: { correct: 'Ja! Deze sokken zijn een paar.', wrong: 'Nee, deze sok is enkel.' },
            az: { correct: 'Bəli! Bu corablar cütdür.', wrong: 'Xeyr, bu corab təkdir.' }
        },
        options: [
            { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "corap", spokenText: "çorap" },
            { id: 147, word: "çoraplar", imageUrl: "/images/147.png", isCorrect: true, audioKey: "coraplar", spokenText: "çoraplar" }
        ]
    },

    // 2. Eldiven
    { 
        id: 2, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu eldiven tektir.', wrong: 'Hayır, bu eldivenler çifttir.' },
            en: { correct: 'Yes! This glove is single.', wrong: 'No, these gloves are a pair.' },
            de: { correct: 'Ja! Dieser Handschuh ist einzeln.', wrong: 'Nein, diese Handschuhe sind ein Paar.' },
            fr: { correct: "Oui ! Ce gant est seul.", wrong: "Non, ces gants sont une paire." },
            nl: { correct: 'Ja! Deze handschoen is enkel.', wrong: 'Nee, deze handschoenen zijn een paar.' },
            az: { correct: 'Bəli! Bu əlcək təkdir.', wrong: 'Xeyr, bu əlcəklər cütdür.' }
        },
        options: [
            { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: true, audioKey: "eldiven", spokenText: "eldiven" },
            { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: false, audioKey: "eldivenler", spokenText: "eldivenler" }
        ]
    },
    { 
        id: 2.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu eldivenler çifttir.', wrong: 'Hayır, bu eldiven tektir.' },
            en: { correct: 'Yes! These gloves are a pair.', wrong: 'No, this glove is single.' },
            de: { correct: 'Ja! Diese Handschuhe sind ein Paar.', wrong: 'Nein, dieser Handschuh ist einzeln.' },
            fr: { correct: "Oui ! Ces gants sont une paire.", wrong: "Non, ce gant est seul." },
            nl: { correct: 'Ja! Deze handschoenen zijn een paar.', wrong: 'Nee, deze handschoen is enkel.' },
            az: { correct: 'Bəli! Bu əlcəklər cütdür.', wrong: 'Xeyr, bu əlcək təkdir.' }
        },
        options: [
            { id: 553, word: "eldiven", imageUrl: "/images/553.png", isCorrect: false, audioKey: "eldiven", spokenText: "eldiven" },
            { id: 272, word: "eldivenler", imageUrl: "/images/272.png", isCorrect: true, audioKey: "eldivenler", spokenText: "eldivenler" }
        ]
    },

    // 3. Küpe
    { 
        id: 3, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu küpe tektir.', wrong: 'Hayır, bu küpeler çifttir.' },
            en: { correct: 'Yes! This earring is single.', wrong: 'No, these earrings are a pair.' },
            de: { correct: 'Ja! Dieser Ohrring ist einzeln.', wrong: 'Nein, diese Ohrringe sind ein Paar.' },
            fr: { correct: "Oui ! Cette boucle d'oreille est seule.", wrong: "Non, ces boucles d'oreilles sont une paire." },
            nl: { correct: 'Ja! Deze oorbel is enkel.', wrong: 'Nee, deze oorbellen zijn een paar.' },
            az: { correct: 'Bəli! Bu sırğa təkdir.', wrong: 'Xeyr, bu sırğalar cütdür.' }
        },
        options: [
            { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: true, audioKey: "kupe", spokenText: "küpe" },
            { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: false, audioKey: "kupeler", spokenText: "küpeler" }
        ]
    },
    { 
        id: 3.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu küpeler çifttir.', wrong: 'Hayır, bu küpe tektir.' },
            en: { correct: 'Yes! These earrings are a pair.', wrong: 'No, this earring is single.' },
            de: { correct: 'Ja! Diese Ohrringe sind ein Paar.', wrong: 'Nein, dieser Ohrring ist einzeln.' },
            fr: { correct: "Oui ! Ces boucles d'oreilles sont une paire.", wrong: "Non, cette boucle d'oreille est seule." },
            nl: { correct: 'Ja! Deze oorbellen zijn een paar.', wrong: 'Nee, deze oorbel is enkel.' },
            az: { correct: 'Bəli! Bu sırğalar cütdür.', wrong: 'Xeyr, bu sırğa təkdir.' }
        },
        options: [
            { id: 758, word: "küpe", imageUrl: "/images/758.png", isCorrect: false, audioKey: "kupe", spokenText: "küpe" },
            { id: 759, word: "küpeler", imageUrl: "/images/759.png", isCorrect: true, audioKey: "kupeler", spokenText: "küpeler" }
        ]
    },

    // 4. Paten
    { 
        id: 4, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu paten tektir.', wrong: 'Hayır, bu patenler çifttir.' },
            en: { correct: 'Yes! This skate is single.', wrong: 'No, these skates are a pair.' },
            de: { correct: 'Ja! Dieser Schlittschuh ist einzeln.', wrong: 'Nein, diese Schlittschuhe sind ein Paar.' },
            fr: { correct: "Oui ! Ce patin est seul.", wrong: "Non, ces patins sont une paire." },
            nl: { correct: 'Ja! Deze schaats is enkel.', wrong: 'Nee, deze schaatsen zijn een paar.' },
            az: { correct: 'Bəli! Bu konki təkdir.', wrong: 'Xeyr, bu konkiler cütdür.' }
        },
        options: [
            { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: true, audioKey: "paten", spokenText: "paten" },
            { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: false, audioKey: "patenler", spokenText: "patenler" }
        ]
    },
    { 
        id: 4.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu patenler çifttir.', wrong: 'Hayır, bu paten tektir.' },
            en: { correct: 'Yes! These skates are a pair.', wrong: 'No, this skate is single.' },
            de: { correct: 'Ja! Diese Schlittschuhe sind ein Paar.', wrong: 'Nein, dieser Schlittschuh ist einzeln.' },
            fr: { correct: "Oui ! Ces patins sont une paire.", wrong: "Non, ce patin est seul." },
            nl: { correct: 'Ja! Deze schaatsen zijn een paar.', wrong: 'Nee, deze schaats is enkel.' },
            az: { correct: 'Bəli! Bu konkiler cütdür.', wrong: 'Xeyr, bu konki təkdir.' }
        },
        options: [
            { id: 221, word: "paten", imageUrl: "/images/221.png", isCorrect: false, audioKey: "paten", spokenText: "paten" },
            { id: 382, word: "patenler", imageUrl: "/images/382.png", isCorrect: true, audioKey: "patenler", spokenText: "patenler" }
        ]
    },

    // 5. Kayak
    { 
        id: 5, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu kayak tektir.', wrong: 'Hayır, bu kayaklar çifttir.' },
            en: { correct: 'Yes! This ski is single.', wrong: 'No, these skis are a pair.' },
            de: { correct: 'Ja! Dieser Ski ist einzeln.', wrong: 'Nein, diese Skier sind ein Paar.' },
            fr: { correct: "Oui ! Ce ski est seul.", wrong: "Non, ces skis sont une paire." },
            nl: { correct: 'Ja! Deze ski is enkel.', wrong: 'Nee, deze ski\'s zijn een paar.' },
            az: { correct: 'Bəli! Bu xizək təkdir.', wrong: 'Xeyr, bu xizəklər cütdür.' }
        },
        options: [
            { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: true, audioKey: "kayak", spokenText: "kayak" },
            { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: false, audioKey: "kayaklar", spokenText: "kayaklar" }
        ]
    },
    { 
        id: 5.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu kayaklar çifttir.', wrong: 'Hayır, bu kayak tektir.' },
            en: { correct: 'Yes! These skis are a pair.', wrong: 'No, this ski is single.' },
            de: { correct: 'Ja! Diese Skier sind ein Paar.', wrong: 'Nein, dieser Ski ist einzeln.' },
            fr: { correct: "Oui ! Ces skis sont une paire.", wrong: "Non, ce ski est seul." },
            nl: { correct: 'Ja! Deze ski\'s zijn een paar.', wrong: 'Nee, deze ski is enkel.' },
            az: { correct: 'Bəli! Bu xizəklər cütdür.', wrong: 'Xeyr, bu xizək təkdir.' }
        },
        options: [
            { id: 322, word: "kayak", imageUrl: "/images/322.png", isCorrect: false, audioKey: "kayak", spokenText: "kayak" },
            { id: 292, word: "kayaklar", imageUrl: "/images/292.png", isCorrect: true, audioKey: "kayaklar", spokenText: "kayaklar" }
        ]
    },

    // 6. Davul çubuğu
    { 
        id: 6, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu çubuk tektir.', wrong: 'Hayır, bu çubuklar çifttir.' },
            en: { correct: 'Yes! This stick is single.', wrong: 'No, these sticks are a pair.' },
            de: { correct: 'Ja! Dieser Stock ist einzeln.', wrong: 'Nein, diese Stöcke sind ein Paar.' },
            fr: { correct: "Oui ! Ce bâton est seul.", wrong: "Non, ces bâtons sont une paire." },
            nl: { correct: 'Ja! Deze stok is enkel.', wrong: 'Nee, deze stokken zijn een paar.' },
            az: { correct: 'Bəli! Bu çubuq təkdir.', wrong: 'Xeyr, bu çubuqlar cütdür.' }
        },
        options: [
            { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_cubugu", spokenText: "davul çubuğu" },
            { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: false, audioKey: "davul_cubuklari", spokenText: "davul çubukları" }
        ]
    },
    { 
        id: 6.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu çubuklar çifttir.', wrong: 'Hayır, bu çubuk tektir.' },
            en: { correct: 'Yes! These sticks are a pair.', wrong: 'No, this stick is single.' },
            de: { correct: 'Ja! Diese Stöcke sind ein Paar.', wrong: 'Nein, dieser Stock ist einzeln.' },
            fr: { correct: "Oui ! Ces bâtons sont une paire.", wrong: "Non, ce bâton est seul." },
            nl: { correct: 'Ja! Deze stokken zijn een paar.', wrong: 'Nee, deze stok is enkel.' },
            az: { correct: 'Bəli! Bu çubuqlar cütdür.', wrong: 'Xeyr, bu çubuq təkdir.' }
        },
        options: [
            { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_cubugu", spokenText: "davul çubuğu" },
            { id: 520, word: "davul çubukları", imageUrl: "/images/520.png", isCorrect: true, audioKey: "davul_cubuklari", spokenText: "davul çubukları" }
        ]
    },

    // 7. Göz
    { 
        id: 7, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu göz tektir.', wrong: 'Hayır, bu gözler çifttir.' },
            en: { correct: 'Yes! This eye is single.', wrong: 'No, these eyes are a pair.' },
            de: { correct: 'Ja! Dieses Auge ist einzeln.', wrong: 'Nein, diese Augen sind ein Paar.' },
            fr: { correct: "Oui ! Cet œil est seul.", wrong: "Non, ces yeux sont une paire." },
            nl: { correct: 'Ja! Dit oog is enkel.', wrong: 'Nee, deze ogen zijn een paar.' },
            az: { correct: 'Bəli! Bu göz təkdir.', wrong: 'Xeyr, bu gözlər cütdür.' }
        },
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: true, audioKey: "goz", spokenText: "göz" },
            { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: false, audioKey: "gozler", spokenText: "gözler" }
        ]
    },
    { 
        id: 7.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu gözler çifttir.', wrong: 'Hayır, bu göz tektir.' },
            en: { correct: 'Yes! These eyes are a pair.', wrong: 'No, this eye is single.' },
            de: { correct: 'Ja! Diese Augen sind ein Paar.', wrong: 'Nein, dieses Auge ist einzeln.' },
            fr: { correct: "Oui ! Ces yeux sont une paire.", wrong: "Non, cet œil est seul." },
            nl: { correct: 'Ja! Deze ogen zijn een paar.', wrong: 'Nee, dit oog is enkel.' },
            az: { correct: 'Bəli! Bu gözlər cütdür.', wrong: 'Xeyr, bu göz təkdir.' }
        },
        options: [
            { id: 564, word: "göz", imageUrl: "/images/564.png", isCorrect: false, audioKey: "goz", spokenText: "göz" },
            { id: 479, word: "gözler", imageUrl: "/images/479.png", isCorrect: true, audioKey: "gozler", spokenText: "gözler" }
        ]
    },

    // 8. Elma
    { 
        id: 8, 
        question: "Tek olan hangisi?", 
        questionAudioKey: "q_which_is_odd", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu elma tektir.', wrong: 'Hayır, bu elmalar çifttir.' },
            en: { correct: 'Yes! This apple is single.', wrong: 'No, these apples are a pair.' },
            de: { correct: 'Ja! Dieser Apfel ist einzeln.', wrong: 'Nein, diese Äpfel sind ein Paar.' },
            fr: { correct: "Oui ! Cette pomme est seule.", wrong: "Non, ces pommes sont une paire." },
            nl: { correct: 'Ja! Deze appel is enkel.', wrong: 'Nee, deze appels zijn een paar.' },
            az: { correct: 'Bəli! Bu alma təkdir.', wrong: 'Xeyr, bu almalar cütdür.' }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "elma" },
            { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: false, audioKey: "elmalar", spokenText: "elmalar" }
        ]
    },
    { 
        id: 8.1, 
        question: "Çift olan hangisi?", 
        questionAudioKey: "q_which_is_even", 
        activityType: ActivityType.OddEven, 
        speech: {
            tr: { correct: 'Evet! Bu elmalar çifttir.', wrong: 'Hayır, bu elma tektir.' },
            en: { correct: 'Yes! These apples are a pair.', wrong: 'No, this apple is single.' },
            de: { correct: 'Ja! Diese Äpfel sind ein Paar.', wrong: 'Nein, dieser Apfel ist einzeln.' },
            fr: { correct: "Oui ! Ces pommes sont une paire.", wrong: "Non, cette pomme est seule." },
            nl: { correct: 'Ja! Deze appels zijn een paar.', wrong: 'Nee, deze appel is enkel.' },
            az: { correct: 'Bəli! Bu almalar cütdür.', wrong: 'Xeyr, bu alma təkdir.' }
        },
        options: [
            { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "elma" },
            { id: 44, word: "elmalar", imageUrl: "/images/44.png", isCorrect: true, audioKey: "elmalar", spokenText: "elmalar" }
        ]
    },
];