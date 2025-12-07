import { ConceptRound, ActivityType } from '../../../../types';

export const youngOldData: ConceptRound[] = [
    // 1. Tavuk/Horoz vs Civciv
    { 
        id: 1, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Horoz yaşlıdır.', wrong: 'Hayır, civciv gençtir.' },
            en: { correct: 'Yes! The rooster is old.', wrong: 'No, the chick is young.' },
            de: { correct: 'Ja! Der Hahn ist alt.', wrong: 'Nein, das Küken ist jung.' },
            fr: { correct: "Oui ! Le coq est vieux.", wrong: "Non, le poussin est jeune." },
            nl: { correct: 'Ja! De haan is oud.', wrong: 'Nee, het kuiken is jong.' },
            az: { correct: 'Bəli! Xoruz yaşlıdır.', wrong: 'Xeyr, cücə gəncdir.' }
        },
        options: [
            { id: 377, word: "horoz", imageUrl: "/images/377.png", isCorrect: true, audioKey: "horoz", spokenText: "horoz" },
            { id: 376, word: "civciv", imageUrl: "/images/376.png", isCorrect: false, audioKey: "civciv", spokenText: "civciv" }
        ]
    },
    { 
        id: 2, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Civciv gençtir.', wrong: 'Hayır, horoz yaşlıdır.' },
            en: { correct: 'Yes! The chick is young.', wrong: 'No, the rooster is old.' },
            de: { correct: 'Ja! Das Küken ist jung.', wrong: 'Nein, der Hahn ist alt.' },
            fr: { correct: "Oui ! Le poussin est jeune.", wrong: "Non, le coq est vieux." },
            nl: { correct: 'Ja! Het kuiken is jong.', wrong: 'Nee, de haan is oud.' },
            az: { correct: 'Bəli! Cücə gəncdir.', wrong: 'Xeyr, xoruz yaşlıdır.' }
        },
        options: [
            { id: 377, word: "horoz", imageUrl: "/images/377.png", isCorrect: false, audioKey: "horoz", spokenText: "horoz" },
            { id: 376, word: "civciv", imageUrl: "/images/376.png", isCorrect: true, audioKey: "civciv", spokenText: "civciv" }
        ]
    },

    // 2. Nine vs Bebek
    { 
        id: 3, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Nine yaşlıdır.', wrong: 'Hayır, bebek gençtir.' },
            en: { correct: 'Yes! The grandmother is old.', wrong: 'No, the baby is young.' },
            de: { correct: 'Ja! Die Oma ist alt.', wrong: 'Nein, das Baby ist jung.' },
            fr: { correct: "Oui ! La grand-mère est vieille.", wrong: "Non, le bébé est jeune." },
            nl: { correct: 'Ja! De oma is oud.', wrong: 'Nee, de baby is jong.' },
            az: { correct: 'Bəli! Nənə yaşlıdır.', wrong: 'Xeyr, körpə gəncdir.' }
        },
        options: [
            { id: 701, word: "nine", imageUrl: "/images/701.png", isCorrect: true, audioKey: "nine", spokenText: "nine" },
            { id: 579, word: "bebek", imageUrl: "/images/579.png", isCorrect: false, audioKey: "bebek", spokenText: "bebek" }
        ]
    },
    { 
        id: 4, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Bebek gençtir.', wrong: 'Hayır, nine yaşlıdır.' },
            en: { correct: 'Yes! The baby is young.', wrong: 'No, the grandmother is old.' },
            de: { correct: 'Ja! Das Baby ist jung.', wrong: 'Nein, die Oma ist alt.' },
            fr: { correct: "Oui ! Le bébé est jeune.", wrong: "Non, la grand-mère est vieille." },
            nl: { correct: 'Ja! De baby is jong.', wrong: 'Nee, de oma is oud.' },
            az: { correct: 'Bəli! Körpə gəncdir.', wrong: 'Xeyr, nənə yaşlıdır.' }
        },
        options: [
            { id: 701, word: "nine", imageUrl: "/images/701.png", isCorrect: false, audioKey: "nine", spokenText: "nine" },
            { id: 579, word: "bebek", imageUrl: "/images/579.png", isCorrect: true, audioKey: "bebek", spokenText: "bebek" }
        ]
    },

    // 3. Dede vs Çocuk
    { 
        id: 5, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Dede yaşlıdır.', wrong: 'Hayır, çocuk gençtir.' },
            en: { correct: 'Yes! The grandfather is old.', wrong: 'No, the child is young.' },
            de: { correct: 'Ja! Der Opa ist alt.', wrong: 'Nein, das Kind ist jung.' },
            fr: { correct: "Oui ! Le grand-père est vieux.", wrong: "Non, l'enfant est jeune." },
            nl: { correct: 'Ja! De opa is oud.', wrong: 'Nee, het kind is jong.' },
            az: { correct: 'Bəli! Baba yaşlıdır.', wrong: 'Xeyr, uşaq gəncdir.' }
        },
        options: [
            { id: 578, word: "dede", imageUrl: "/images/578.png", isCorrect: true, audioKey: "dede", spokenText: "dede" },
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk", spokenText: "çocuk" }
        ]
    },
    { 
        id: 6, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Çocuk gençtir.', wrong: 'Hayır, dede yaşlıdır.' },
            en: { correct: 'Yes! The child is young.', wrong: 'No, the grandfather is old.' },
            de: { correct: 'Ja! Das Kind ist jung.', wrong: 'Nein, der Opa ist alt.' },
            fr: { correct: "Oui ! L'enfant est jeune.", wrong: "Non, le grand-père est vieux." },
            nl: { correct: 'Ja! Het kind is jong.', wrong: 'Nee, de opa is oud.' },
            az: { correct: 'Bəli! Uşaq gəncdir.', wrong: 'Xeyr, baba yaşlıdır.' }
        },
        options: [
            { id: 578, word: "dede", imageUrl: "/images/578.png", isCorrect: false, audioKey: "dede", spokenText: "dede" },
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk", spokenText: "çocuk" }
        ]
    },

    // 4. Yaşlı Ağaç vs Genç Filiz
    { 
        id: 7, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Ağaç yaşlıdır.', wrong: 'Hayır, filiz gençtir.' },
            en: { correct: 'Yes! The tree is old.', wrong: 'No, the sapling is young.' },
            de: { correct: 'Ja! Der Baum ist alt.', wrong: 'Nein, der Setzling ist jung.' },
            fr: { correct: "Oui ! L'arbre est vieux.", wrong: "Non, la jeune pousse est jeune." },
            nl: { correct: 'Ja! De boom is oud.', wrong: 'Nee, het boompje is jong.' },
            az: { correct: 'Bəli! Ağac yaşlıdır.', wrong: 'Xeyr, ting gəncdir.' }
        },
        options: [
            { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" },
            { id: 317, word: "filiz", imageUrl: "/images/317.png", isCorrect: false, audioKey: "filiz", spokenText: "filiz" }
        ]
    },
    { 
        id: 8, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Filiz gençtir.', wrong: 'Hayır, ağaç yaşlıdır.' },
            en: { correct: 'Yes! The sapling is young.', wrong: 'No, the tree is old.' },
            de: { correct: 'Ja! Der Setzling ist jung.', wrong: 'Nein, der Baum ist alt.' },
            fr: { correct: "Oui ! La jeune pousse est jeune.", wrong: "Non, l'arbre est vieux." },
            nl: { correct: 'Ja! Het boompje is jong.', wrong: 'Nee, de boom is oud.' },
            az: { correct: 'Bəli! Ting gəncdir.', wrong: 'Xeyr, ağac yaşlıdır.' }
        },
        options: [
            { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" },
            { id: 317, word: "filiz", imageUrl: "/images/317.png", isCorrect: true, audioKey: "filiz", spokenText: "filiz" }
        ]
    },

    // 5. Aslan vs Aslan Yavrusu
    { 
        id: 9, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Aslan yaşlıdır.', wrong: 'Hayır, yavru aslan gençtir.' },
            en: { correct: 'Yes! The lion is old.', wrong: 'No, the cub is young.' },
            de: { correct: 'Ja! Der Löwe ist alt.', wrong: 'Nein, das Löwenjunge ist jung.' },
            fr: { correct: "Oui ! Le lion est vieux.", wrong: "Non, le lionceau est jeune." },
            nl: { correct: 'Ja! De leeuw is oud.', wrong: 'Nee, de welp is jong.' },
            az: { correct: 'Bəli! Aslan yaşlıdır.', wrong: 'Xeyr, şir balası gəncdir.' }
        },
        options: [
            { id: 100, word: "aslan", imageUrl: "/images/100.png", isCorrect: true, audioKey: "aslan", spokenText: "aslan" },
            { id: 584, word: "aslan", imageUrl: "/images/584.png", isCorrect: false, audioKey: "yavru_aslan", spokenText: "yavru aslan" }
        ]
    },
    { 
        id: 10, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Yavru aslan gençtir.', wrong: 'Hayır, aslan yaşlıdır.' },
            en: { correct: 'Yes! The cub is young.', wrong: 'No, the lion is old.' },
            de: { correct: 'Ja! Das Löwenjunge ist jung.', wrong: 'Nein, der Löwe ist alt.' },
            fr: { correct: "Oui ! Le lionceau est jeune.", wrong: "Non, le lion est vieux." },
            nl: { correct: 'Ja! De welp is jong.', wrong: 'Nee, de leeuw is oud.' },
            az: { correct: 'Bəli! Şir balası gəncdir.', wrong: 'Xeyr, aslan yaşlıdır.' }
        },
        options: [
            { id: 100, word: "aslan", imageUrl: "/images/100.png", isCorrect: false, audioKey: "aslan", spokenText: "aslan" },
            { id: 584, word: "aslan", imageUrl: "/images/584.png", isCorrect: true, audioKey: "yavru_aslan", spokenText: "yavru aslan" }
        ]
    },

    // 6. Kurbağa vs İribaş
    { 
        id: 11, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Kurbağa yaşlıdır.', wrong: 'Hayır, iribaş gençtir.' },
            en: { correct: 'Yes! The frog is old.', wrong: 'No, the tadpole is young.' },
            de: { correct: 'Ja! Der Frosch ist alt.', wrong: 'Nein, die Kaulquappe ist jung.' },
            fr: { correct: "Oui ! La grenouille est vieille.", wrong: "Non, le têtard est jeune." },
            nl: { correct: 'Ja! De kikker is oud.', wrong: 'Nee, het kikkervisje is jong.' },
            az: { correct: 'Bəli! Qurbağa yaşlıdır.', wrong: 'Xeyr, çömçəquyruq gəncdir.' }
        },
        options: [
            { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: true, audioKey: "kurbaga", spokenText: "kurbağa" },
            { id: 583, word: "iribaş", imageUrl: "/images/583.png", isCorrect: false, audioKey: "iribas", spokenText: "iribaş" }
        ]
    },
    { 
        id: 12, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! İribaş gençtir.', wrong: 'Hayır, kurbağa yaşlıdır.' },
            en: { correct: 'Yes! The tadpole is young.', wrong: 'No, the frog is old.' },
            de: { correct: 'Ja! Die Kaulquappe ist jung.', wrong: 'Nein, der Frosch ist alt.' },
            fr: { correct: "Oui ! Le têtard est jeune.", wrong: "Non, la grenouille est vieille." },
            nl: { correct: 'Ja! Het kikkervisje is jong.', wrong: 'Nee, de kikker is oud.' },
            az: { correct: 'Bəli! Çömçəquyruq gəncdir.', wrong: 'Xeyr, qurbağa yaşlıdır.' }
        },
        options: [
            { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: false, audioKey: "kurbaga", spokenText: "kurbağa" },
            { id: 583, word: "iribaş", imageUrl: "/images/583.png", isCorrect: true, audioKey: "iribas", spokenText: "iribaş" }
        ]
    },

    // 7. Koyun vs Kuzu
    { 
        id: 13, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Koyun yaşlıdır.', wrong: 'Hayır, kuzu gençtir.' },
            en: { correct: 'Yes! The sheep is old.', wrong: 'No, the lamb is young.' },
            de: { correct: 'Ja! Das Schaf ist alt.', wrong: 'Nein, das Lamm ist jung.' },
            fr: { correct: "Oui ! Le mouton est vieux.", wrong: "Non, l'agneau est jeune." },
            nl: { correct: 'Ja! Het schaap is oud.', wrong: 'Nee, het lam is jong.' },
            az: { correct: 'Bəli! Qoyun yaşlıdır.', wrong: 'Xeyr, quzu gəncdir.' }
        },
        options: [
            { id: 460, word: "koyun", imageUrl: "/images/460.png", isCorrect: true, audioKey: "koyun", spokenText: "koyun" },
            { id: 462, word: "kuzu", imageUrl: "/images/462.png", isCorrect: false, audioKey: "kuzu", spokenText: "kuzu" }
        ]
    },
    { 
        id: 14, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Kuzu gençtir.', wrong: 'Hayır, koyun yaşlıdır.' },
            en: { correct: 'Yes! The lamb is young.', wrong: 'No, the sheep is old.' },
            de: { correct: 'Ja! Das Lamm ist jung.', wrong: 'Nein, das Schaf ist alt.' },
            fr: { correct: "Oui ! L'agneau est jeune.", wrong: "Non, le mouton est vieux." },
            nl: { correct: 'Ja! Het lam is jong.', wrong: 'Nee, het schaap is oud.' },
            az: { correct: 'Bəli! Quzu gəncdir.', wrong: 'Xeyr, qoyun yaşlıdır.' }
        },
        options: [
            { id: 460, word: "koyun", imageUrl: "/images/460.png", isCorrect: false, audioKey: "koyun", spokenText: "koyun" },
            { id: 462, word: "kuzu", imageUrl: "/images/462.png", isCorrect: true, audioKey: "kuzu", spokenText: "kuzu" }
        ]
    },

    // 8. Yaşlı Kedi vs Genç Kedi
    { 
        id: 15, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Kedi yaşlıdır.', wrong: 'Hayır, yavru kedi gençtir.' },
            en: { correct: 'Yes! The cat is old.', wrong: 'No, the kitten is young.' },
            de: { correct: 'Ja! Die Katze ist alt.', wrong: 'Nein, das Kätzchen ist jung.' },
            fr: { correct: "Oui ! Le chat est vieux.", wrong: "Non, le chaton est jeune." },
            nl: { correct: 'Ja! De kat is oud.', wrong: 'Nee, het katje is jong.' },
            az: { correct: 'Bəli! Pişik yaşlıdır.', wrong: 'Xeyr, pişik balası gəncdir.' }
        },
        options: [
            { id: 580, word: "kedi", imageUrl: "/images/580.png", isCorrect: true, audioKey: "kedi", spokenText: "kedi" },
            { id: 581, word: "kedi", imageUrl: "/images/581.png", isCorrect: false, audioKey: "yavru_kedi", spokenText: "yavru kedi" }
        ]
    },
    { 
        id: 16, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Yavru kedi gençtir.', wrong: 'Hayır, kedi yaşlıdır.' },
            en: { correct: 'Yes! The kitten is young.', wrong: 'No, the cat is old.' },
            de: { correct: 'Ja! Das Kätzchen ist jung.', wrong: 'Nein, die Katze ist alt.' },
            fr: { correct: "Oui ! Le chaton est jeune.", wrong: "Non, le chat est vieux." },
            nl: { correct: 'Ja! Het katje is jong.', wrong: 'Nee, de kat is oud.' },
            az: { correct: 'Bəli! Pişik balası gəncdir.', wrong: 'Xeyr, pişik yaşlıdır.' }
        },
        options: [
            { id: 580, word: "kedi", imageUrl: "/images/580.png", isCorrect: false, audioKey: "kedi", spokenText: "kedi" },
            { id: 581, word: "kedi", imageUrl: "/images/581.png", isCorrect: true, audioKey: "yavru_kedi", spokenText: "yavru kedi" }
        ]
    },

    // 9. Baba vs Çocuk
    { 
        id: 17, 
        question: "Yaşlı olan hangisi?", 
        questionAudioKey: "q_which_is_old_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Baba yaşlıdır.', wrong: 'Hayır, çocuk gençtir.' },
            en: { correct: 'Yes! The father is old.', wrong: 'No, the child is young.' },
            de: { correct: 'Ja! Der Vater ist alt.', wrong: 'Nein, das Kind ist jung.' },
            fr: { correct: "Oui ! Le père est vieux.", wrong: "Non, l'enfant est jeune." },
            nl: { correct: 'Ja! De vader is oud.', wrong: 'Nee, het kind is jong.' },
            az: { correct: 'Bəli! Ata yaşlıdır.', wrong: 'Xeyr, uşaq gəncdir.' }
        },
        options: [
            { id: 828, word: "baba", imageUrl: "/images/828.png", isCorrect: true, audioKey: "baba", spokenText: "baba" },
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk", spokenText: "çocuk" }
        ]
    },
    { 
        id: 18, 
        question: "Genç olan hangisi?", 
        questionAudioKey: "q_which_is_young_person", 
        activityType: ActivityType.YoungOld, 
        speech: {
            tr: { correct: 'Evet! Çocuk gençtir.', wrong: 'Hayır, baba yaşlıdır.' },
            en: { correct: 'Yes! The child is young.', wrong: 'No, the father is old.' },
            de: { correct: 'Ja! Das Kind ist jung.', wrong: 'Nein, der Vater ist alt.' },
            fr: { correct: "Oui ! L'enfant est jeune.", wrong: "Non, le père est vieux." },
            nl: { correct: 'Ja! Het kind is jong.', wrong: 'Nee, de vader is oud.' },
            az: { correct: 'Bəli! Uşaq gəncdir.', wrong: 'Xeyr, ata yaşlıdır.' }
        },
        options: [
            { id: 828, word: "baba", imageUrl: "/images/828.png", isCorrect: false, audioKey: "baba", spokenText: "baba" },
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk", spokenText: "çocuk" }
        ]
    },
];