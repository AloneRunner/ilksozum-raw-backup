import { ConceptRound, ActivityType } from '../../../../types';

export const aliveLifelessData: ConceptRound[] = [
    // 1. Ağaç vs Taş
    { 
        id: 1, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Ağaç canlıdır.', wrong: 'Hayır, taş cansızdır.' },
            en: { correct: 'Yes! The tree is alive.', wrong: 'No, the stone is non-living.' },
            de: { correct: 'Ja! Der Baum lebt.', wrong: 'Nein, der Stein lebt nicht.' },
            fr: { correct: "Oui ! L'arbre est vivant.", wrong: "Non, la pierre n'est pas vivante." },
            nl: { correct: 'Ja! De boom leeft.', wrong: 'Nee, de steen leeft niet.' },
            az: { correct: 'Bəli! Ağac canlıdır.', wrong: 'Xeyr, daş cansızdır.' }
        },
        options: [
            { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "tas", spokenText: "taş" }
        ]
    },
    { 
        id: 2, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Taş cansızdır.', wrong: 'Hayır, ağaç canlıdır.' },
            en: { correct: 'Yes! The stone is non-living.', wrong: 'No, the tree is alive.' },
            de: { correct: 'Ja! Der Stein ist leblos.', wrong: 'Nein, der Baum lebt.' },
            fr: { correct: "Oui ! La pierre n'est pas vivante.", wrong: "Non, l'arbre est vivant." },
            nl: { correct: 'Ja! De steen is levenloos.', wrong: 'Nee, de boom leeft.' },
            az: { correct: 'Bəli! Daş cansızdır.', wrong: 'Xeyr, ağac canlıdır.' }
        },
        options: [
            { id: 10, word: "ağaç", imageUrl: "/images/10.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" },
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "tas", spokenText: "taş" }
        ]
    },

    // 2. Kedi vs Masa
    { 
        id: 3, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Kedi canlıdır.', wrong: 'Hayır, masa cansızdır.' },
            en: { correct: 'Yes! The cat is alive.', wrong: 'No, the table is non-living.' },
            de: { correct: 'Ja! Die Katze lebt.', wrong: 'Nein, der Tisch lebt nicht.' },
            fr: { correct: "Oui ! Le chat est vivant.", wrong: "Non, la table n'est pas vivante." },
            nl: { correct: 'Ja! De kat leeft.', wrong: 'Nee, de tafel leeft niet.' },
            az: { correct: 'Bəli! Pişik canlıdır.', wrong: 'Xeyr, masa cansızdır.' }
        },
        options: [
            { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: true, audioKey: "kedi", spokenText: "kedi" },
            { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: false, audioKey: "masa", spokenText: "masa" }
        ]
    },
    { 
        id: 4, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Masa cansızdır.', wrong: 'Hayır, kedi canlıdır.' },
            en: { correct: 'Yes! The table is non-living.', wrong: 'No, the cat is alive.' },
            de: { correct: 'Ja! Der Tisch ist leblos.', wrong: 'Nein, die Katze lebt.' },
            fr: { correct: "Oui ! La table n'est pas vivante.", wrong: "Non, le chat est vivant." },
            nl: { correct: 'Ja! De tafel is levenloos.', wrong: 'Nee, de kat leeft.' },
            az: { correct: 'Bəli! Masa cansızdır.', wrong: 'Xeyr, pişik canlıdır.' }
        },
        options: [
            { id: 702, word: "kedi", imageUrl: "/images/702.png", isCorrect: false, audioKey: "kedi", spokenText: "kedi" },
            { id: 134, word: "masa", imageUrl: "/images/134.png", isCorrect: true, audioKey: "masa", spokenText: "masa" }
        ]
    },

    // 3. Çiçek vs Araba
    { 
        id: 5, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Çiçek canlıdır.', wrong: 'Hayır, araba cansızdır.' },
            en: { correct: 'Yes! The flower is alive.', wrong: 'No, the car is non-living.' },
            de: { correct: 'Ja! Die Blume lebt.', wrong: 'Nein, das Auto lebt nicht.' },
            fr: { correct: "Oui ! La fleur est vivante.", wrong: "Non, la voiture n'est pas vivante." },
            nl: { correct: 'Ja! De bloem leeft.', wrong: 'Nee, de auto leeft niet.' },
            az: { correct: 'Bəli! Çiçək canlıdır.', wrong: 'Xeyr, maşın cansızdır.' }
        },
        options: [
            { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: true, audioKey: "cicek", spokenText: "çiçek" },
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: false, audioKey: "araba", spokenText: "araba" }
        ]
    },
    { 
        id: 6, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Araba cansızdır.', wrong: 'Hayır, çiçek canlıdır.' },
            en: { correct: 'Yes! The car is non-living.', wrong: 'No, the flower is alive.' },
            de: { correct: 'Ja! Das Auto ist leblos.', wrong: 'Nein, die Blume lebt.' },
            fr: { correct: "Oui ! La voiture n'est pas vivante.", wrong: "Non, la fleur est vivante." },
            nl: { correct: 'Ja! De auto is levenloos.', wrong: 'Nee, de bloem leeft.' },
            az: { correct: 'Bəli! Maşın cansızdır.', wrong: 'Xeyr, çiçək canlıdır.' }
        },
        options: [
            { id: 443, word: "çiçek", imageUrl: "/images/443.png", isCorrect: false, audioKey: "cicek", spokenText: "çiçek" },
            { id: 1, word: "araba", imageUrl: "/images/1.png", isCorrect: true, audioKey: "araba", spokenText: "araba" }
        ]
    },

    // 4. Çocuk vs Robot
    { 
        id: 7, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive_person", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Çocuk canlıdır.', wrong: 'Hayır, robot cansızdır.' },
            en: { correct: 'Yes! The child is alive.', wrong: 'No, the robot is non-living.' },
            de: { correct: 'Ja! Das Kind lebt.', wrong: 'Nein, der Roboter lebt nicht.' },
            fr: { correct: "Oui ! L'enfant est vivant.", wrong: "Non, le robot n'est pas vivant." },
            nl: { correct: 'Ja! Het kind leeft.', wrong: 'Nee, de robot leeft niet.' },
            az: { correct: 'Bəli! Uşaq canlıdır.', wrong: 'Xeyr, robot cansızdır.' }
        },
        options: [
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk", spokenText: "çocuk" },
            { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: false, audioKey: "robot", spokenText: "robot" }
        ]
    },
    { 
        id: 8, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Robot cansızdır.', wrong: 'Hayır, çocuk canlıdır.' },
            en: { correct: 'Yes! The robot is non-living.', wrong: 'No, the child is alive.' },
            de: { correct: 'Ja! Der Roboter ist leblos.', wrong: 'Nein, das Kind lebt.' },
            fr: { correct: "Oui ! Le robot n'est pas vivant.", wrong: "Non, l'enfant est vivant." },
            nl: { correct: 'Ja! De robot is levenloos.', wrong: 'Nee, het kind leeft.' },
            az: { correct: 'Bəli! Robot cansızdır.', wrong: 'Xeyr, uşaq canlıdır.' }
        },
        options: [
            { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk", spokenText: "çocuk" },
            { id: 177, word: "robot", imageUrl: "/images/177.png", isCorrect: true, audioKey: "robot", spokenText: "robot" }
        ]
    },

    // 5. Kelebek vs Kitap
    { 
        id: 9, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Kelebek canlıdır.', wrong: 'Hayır, kitap cansızdır.' },
            en: { correct: 'Yes! The butterfly is alive.', wrong: 'No, the book is non-living.' },
            de: { correct: 'Ja! Der Schmetterling lebt.', wrong: 'Nein, das Buch lebt nicht.' },
            fr: { correct: "Oui ! Le papillon est vivant.", wrong: "Non, le livre n'est pas vivant." },
            nl: { correct: 'Ja! De vlinder leeft.', wrong: 'Nee, het boek leeft niet.' },
            az: { correct: 'Bəli! Kəpənək canlıdır.', wrong: 'Xeyr, kitab cansızdır.' }
        },
        options: [
            { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "kelebek" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kitap" }
        ]
    },
    { 
        id: 10, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Kitap cansızdır.', wrong: 'Hayır, kelebek canlıdır.' },
            en: { correct: 'Yes! The book is non-living.', wrong: 'No, the butterfly is alive.' },
            de: { correct: 'Ja! Das Buch ist leblos.', wrong: 'Nein, der Schmetterling lebt.' },
            fr: { correct: "Oui ! Le livre n'est pas vivant.", wrong: "Non, le papillon est vivant." },
            nl: { correct: 'Ja! Het boek is levenloos.', wrong: 'Nee, de vlinder leeft.' },
            az: { correct: 'Bəli! Kitab cansızdır.', wrong: 'Xeyr, kəpənək canlıdır.' }
        },
        options: [
            { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "kelebek" },
            { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kitap" }
        ]
    },

    // 6. Balık vs Sandalye
    { 
        id: 11, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Balık canlıdır.', wrong: 'Hayır, sandalye cansızdır.' },
            en: { correct: 'Yes! The fish is alive.', wrong: 'No, the chair is non-living.' },
            de: { correct: 'Ja! Der Fisch lebt.', wrong: 'Nein, der Stuhl lebt nicht.' },
            fr: { correct: "Oui ! Le poisson est vivant.", wrong: "Non, la chaise n'est pas vivante." },
            nl: { correct: 'Ja! De vis leeft.', wrong: 'Nee, de stoel leeft niet.' },
            az: { correct: 'Bəli! Balıq canlıdır.', wrong: 'Xeyr, stul cansızdır.' }
        },
        options: [
            { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: true, audioKey: "balik", spokenText: "balık" },
            { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: false, audioKey: "sandalye", spokenText: "sandalye" }
        ]
    },
    { 
        id: 12, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Sandalye cansızdır.', wrong: 'Hayır, balık canlıdır.' },
            en: { correct: 'Yes! The chair is non-living.', wrong: 'No, the fish is alive.' },
            de: { correct: 'Ja! Der Stuhl ist leblos.', wrong: 'Nein, der Fisch lebt.' },
            fr: { correct: "Oui ! La chaise n'est pas vivante.", wrong: "Non, le poisson est vivant." },
            nl: { correct: 'Ja! De stoel is levenloos.', wrong: 'Nee, de vis leeft.' },
            az: { correct: 'Bəli! Stul cansızdır.', wrong: 'Xeyr, balıq canlıdır.' }
        },
        options: [
            { id: 740, word: "balık", imageUrl: "/images/740.png", isCorrect: false, audioKey: "balik", spokenText: "balık" },
            { id: 319, word: "sandalye", imageUrl: "/images/319.png", isCorrect: true, audioKey: "sandalye", spokenText: "sandalye" }
        ]
    },

    // 8. Karınca vs Anahtar
    { 
        id: 15, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Karınca canlıdır.', wrong: 'Hayır, anahtar cansızdır.' },
            en: { correct: 'Yes! The ant is alive.', wrong: 'No, the key is non-living.' },
            de: { correct: 'Ja! Die Ameise lebt.', wrong: 'Nein, der Schlüssel lebt nicht.' },
            fr: { correct: "Oui ! La fourmi est vivante.", wrong: "Non, la clé n'est pas vivante." },
            nl: { correct: 'Ja! De mier leeft.', wrong: 'Nee, de sleutel leeft niet.' },
            az: { correct: 'Bəli! Qarışqa canlıdır.', wrong: 'Xeyr, açar cansızdır.' }
        },
        options: [
            { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karinca", spokenText: "karınca" },
            { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: false, audioKey: "anahtar", spokenText: "anahtar" }
        ]
    },
    { 
        id: 16, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Anahtar cansızdır.', wrong: 'Hayır, karınca canlıdır.' },
            en: { correct: 'Yes! The key is non-living.', wrong: 'No, the ant is alive.' },
            de: { correct: 'Ja! Der Schlüssel ist leblos.', wrong: 'Nein, die Ameise lebt.' },
            fr: { correct: "Oui ! La clé n'est pas vivante.", wrong: "Non, la fourmi est vivante." },
            nl: { correct: 'Ja! De sleutel is levenloos.', wrong: 'Nee, de mier leeft.' },
            az: { correct: 'Bəli! Açar cansızdır.', wrong: 'Xeyr, qarışqa canlıdır.' }
        },
        options: [
            { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karinca", spokenText: "karınca" },
            { id: 142, word: "anahtar", imageUrl: "/images/142.png", isCorrect: true, audioKey: "anahtar", spokenText: "anahtar" }
        ]
    },

    // 9. Doktor vs Çanta
    { 
        id: 17, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive_person", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Doktor canlıdır.', wrong: 'Hayır, çanta cansızdır.' },
            en: { correct: 'Yes! The doctor is alive.', wrong: 'No, the bag is non-living.' },
            de: { correct: 'Ja! Der Arzt lebt.', wrong: 'Nein, die Tasche lebt nicht.' },
            fr: { correct: "Oui ! Le médecin est vivant.", wrong: "Non, le sac n'est pas vivant." },
            nl: { correct: 'Ja! De dokter leeft.', wrong: 'Nee, de tas leeft niet.' },
            az: { correct: 'Bəli! Həkim canlıdır.', wrong: 'Xeyr, çanta cansızdır.' }
        },
        options: [
            { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: true, audioKey: "doktor", spokenText: "doktor" },
            { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: false, audioKey: "canta", spokenText: "çanta" }
        ]
    },
    { 
        id: 18, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Çanta cansızdır.', wrong: 'Hayır, doktor canlıdır.' },
            en: { correct: 'Yes! The bag is non-living.', wrong: 'No, the doctor is alive.' },
            de: { correct: 'Ja! Die Tasche ist leblos.', wrong: 'Nein, der Arzt lebt.' },
            fr: { correct: "Oui ! Le sac n'est pas vivant.", wrong: "Non, le médecin est vivant." },
            nl: { correct: 'Ja! De tas is levenloos.', wrong: 'Nee, de dokter leeft.' },
            az: { correct: 'Bəli! Çanta cansızdır.', wrong: 'Xeyr, həkim canlıdır.' }
        },
        options: [
            { id: 324, word: "doktor", imageUrl: "/images/324.png", isCorrect: false, audioKey: "doktor", spokenText: "doktor" },
            { id: 207, word: "çanta", imageUrl: "/images/207.png", isCorrect: true, audioKey: "canta", spokenText: "çanta" }
        ]
    },

    // 10. Kurbağa vs Top
    { 
        id: 19, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Kurbağa canlıdır.', wrong: 'Hayır, top cansızdır.' },
            en: { correct: 'Yes! The frog is alive.', wrong: 'No, the ball is non-living.' },
            de: { correct: 'Ja! Der Frosch lebt.', wrong: 'Nein, der Ball lebt nicht.' },
            fr: { correct: "Oui ! La grenouille est vivante.", wrong: "Non, la balle n'est pas vivante." },
            nl: { correct: 'Ja! De kikker leeft.', wrong: 'Nee, de bal leeft niet.' },
            az: { correct: 'Bəli! Qurbağa canlıdır.', wrong: 'Xeyr, top cansızdır.' }
        },
        options: [
            { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: true, audioKey: "kurbaga", spokenText: "kurbağa" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "top" }
        ]
    },
    { 
        id: 20, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Top cansızdır.', wrong: 'Hayır, kurbağa canlıdır.' },
            en: { correct: 'Yes! The ball is non-living.', wrong: 'No, the frog is alive.' },
            de: { correct: 'Ja! Der Ball ist leblos.', wrong: 'Nein, der Frosch lebt.' },
            fr: { correct: "Oui ! La balle n'est pas vivante.", wrong: "Non, la grenouille est vivante." },
            nl: { correct: 'Ja! De bal is levenloos.', wrong: 'Nee, de kikker leeft.' },
            az: { correct: 'Bəli! Top cansızdır.', wrong: 'Xeyr, qurbağa canlıdır.' }
        },
        options: [
            { id: 275, word: "kurbağa", imageUrl: "/images/275.png", isCorrect: false, audioKey: "kurbaga", spokenText: "kurbağa" },
            { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "top" }
        ]
    },

    // 11. Zebra vs Tuvalet Kağıdı
    { 
        id: 21, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Zebra canlıdır.', wrong: 'Hayır, tuvalet kağıdı cansızdır.' },
            en: { correct: 'Yes! The zebra is alive.', wrong: 'No, the toilet paper is non-living.' },
            de: { correct: 'Ja! Das Zebra lebt.', wrong: 'Nein, das Toilettenpapier lebt nicht.' },
            fr: { correct: "Oui ! Le zèbre est vivant.", wrong: "Non, le papier toilette n'est pas vivant." },
            nl: { correct: 'Ja! De zebra leeft.', wrong: 'Nee, het toiletpapier leeft niet.' },
            az: { correct: 'Bəli! Zebra canlıdır.', wrong: 'Xeyr, tualet kağızı cansızdır.' }
        },
        options: [
            { id: 866, word: "zebra", imageUrl: "/images/866.png", isCorrect: true, audioKey: "zebra", spokenText: "zebra" },
            { id: 815, word: "tuvalet kağıdı", imageUrl: "/images/815.png", isCorrect: false, audioKey: "tuvalet_kagidi", spokenText: "tuvalet kağıdı" }
        ]
    },
    { 
        id: 22, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Tuvalet kağıdı cansızdır.', wrong: 'Hayır, zebra canlıdır.' },
            en: { correct: 'Yes! The toilet paper is non-living.', wrong: 'No, the zebra is alive.' },
            de: { correct: 'Ja! Das Toilettenpapier ist leblos.', wrong: 'Nein, das Zebra lebt.' },
            fr: { correct: "Oui ! Le papier toilette n'est pas vivant.", wrong: "Non, le zèbre est vivant." },
            nl: { correct: 'Ja! Het toiletpapier is levenloos.', wrong: 'Nee, de zebra leeft.' },
            az: { correct: 'Bəli! Tualet kağızı cansızdır.', wrong: 'Xeyr, zebra canlıdır.' }
        },
        options: [
            { id: 866, word: "zebra", imageUrl: "/images/866.png", isCorrect: false, audioKey: "zebra", spokenText: "zebra" },
            { id: 815, word: "tuvalet kağıdı", imageUrl: "/images/815.png", isCorrect: true, audioKey: "tuvalet_kagidi", spokenText: "tuvalet kağıdı" }
        ]
    },

    // 13. Hamster vs Helikopter
    { 
        id: 25, 
        question: "Canlı olan hangisi?", 
        questionAudioKey: "q_which_is_alive", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Hamster canlıdır.', wrong: 'Hayır, helikopter cansızdır.' },
            en: { correct: 'Yes! The hamster is alive.', wrong: 'No, the helicopter is non-living.' },
            de: { correct: 'Ja! Der Hamster lebt.', wrong: 'Nein, der Hubschrauber lebt nicht.' },
            fr: { correct: "Oui ! Le hamster est vivant.", wrong: "Non, l'hélicoptère n'est pas vivant." },
            nl: { correct: 'Ja! De hamster leeft.', wrong: 'Nee, de helikopter leeft niet.' },
            az: { correct: 'Bəli! Hamster canlıdır.', wrong: 'Xeyr, helikopter cansızdır.' }
        },
        options: [
            { id: 861, word: "hamster", imageUrl: "/images/861.png", isCorrect: true, audioKey: "hamster", spokenText: "hamster" },
            { id: 162, word: "helikopter", imageUrl: "/images/162.png", isCorrect: false, audioKey: "helikopter", spokenText: "helikopter" }
        ]
    },
    { 
        id: 26, 
        question: "Cansız olan hangisi?", 
        questionAudioKey: "q_which_is_lifeless", 
        activityType: ActivityType.AliveLifeless, 
        speech: {
            tr: { correct: 'Evet! Helikopter cansızdır.', wrong: 'Hayır, hamster canlıdır.' },
            en: { correct: 'Yes! The helicopter is non-living.', wrong: 'No, the hamster is alive.' },
            de: { correct: 'Ja! Der Hubschrauber ist leblos.', wrong: 'Nein, der Hamster lebt.' },
            fr: { correct: "Oui ! L'hélicoptère n'est pas vivant.", wrong: "Non, le hamster est vivant." },
            nl: { correct: 'Ja! De helikopter is levenloos.', wrong: 'Nee, de hamster leeft.' },
            az: { correct: 'Bəli! Helikopter cansızdır.', wrong: 'Xeyr, hamster canlıdır.' }
        },
        options: [
            { id: 861, word: "hamster", imageUrl: "/images/861.png", isCorrect: false, audioKey: "hamster", spokenText: "hamster" },
            { id: 162, word: "helikopter", imageUrl: "/images/162.png", isCorrect: true, audioKey: "helikopter", spokenText: "helikopter" }
        ]
    },
];