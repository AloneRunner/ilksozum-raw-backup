import { ConceptRound, ActivityType } from '../../../../types';

export const kalabalikTenhaData: ConceptRound[] = [
    // 1. Trafik vs Yol
    { 
        id: 217, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Trafik kalabalıktır.', wrong: 'Hayır, yol tenhadır.' },
            en: { correct: 'Yes! The traffic is crowded.', wrong: 'No, the road is sparse.' },
            de: { correct: 'Ja! Der Verkehr ist dicht.', wrong: 'Nein, die Straße ist leer.' },
            fr: { correct: "Oui ! La circulation est dense.", wrong: "Non, la route est déserte." },
            nl: { correct: 'Ja! Het verkeer is druk.', wrong: 'Nee, de weg is rustig.' },
            az: { correct: 'Bəli! Tıxac sıxdır.', wrong: 'Xeyr, yol boşdur.' }
        },
        options: [
            { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: true, audioKey: "trafik", spokenText: "trafik" },
            { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: false, audioKey: "yol", spokenText: "yol" }
        ]
    },
    { 
        id: 218, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Yol tenhadır.', wrong: 'Hayır, trafik kalabalıktır.' },
            en: { correct: 'Yes! The road is sparse.', wrong: 'No, the traffic is crowded.' },
            de: { correct: 'Ja! Die Straße ist leer.', wrong: 'Nein, der Verkehr ist dicht.' },
            fr: { correct: "Oui ! La route est déserte.", wrong: "Non, la circulation est dense." },
            nl: { correct: 'Ja! De weg is rustig.', wrong: 'Nee, het verkeer is druk.' },
            az: { correct: 'Bəli! Yol boşdur.', wrong: 'Xeyr, tıxac sıxdır.' }
        },
        options: [
            { id: 743, word: "trafik", imageUrl: "/images/743.png", isCorrect: false, audioKey: "trafik", spokenText: "trafik" },
            { id: 744, word: "yol", imageUrl: "/images/744.png", isCorrect: true, audioKey: "yol", spokenText: "yol" }
        ]
    },

    // 2. Durak
    { 
        id: 219, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Durak kalabalıktır.', wrong: 'Hayır, durak tenhadır.' },
            en: { correct: 'Yes! The stop is crowded.', wrong: 'No, the stop is sparse.' },
            de: { correct: 'Ja! Die Haltestelle ist voll.', wrong: 'Nein, die Haltestelle ist leer.' },
            fr: { correct: "Oui ! L'arrêt est bondé.", wrong: "Non, l'arrêt est désert." },
            nl: { correct: 'Ja! De halte is druk.', wrong: 'Nee, de halte is rustig.' },
            az: { correct: 'Bəli! Dayanacaq sıxdır.', wrong: 'Xeyr, dayanacaq boşdur.' }
        },
        options: [
            { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: true, audioKey: "durak", spokenText: "durak" },
            { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: false, audioKey: "durak", spokenText: "durak" }
        ]
    },
    { 
        id: 220, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Durak tenhadır.', wrong: 'Hayır, durak kalabalıktır.' },
            en: { correct: 'Yes! The stop is sparse.', wrong: 'No, the stop is crowded.' },
            de: { correct: 'Ja! Die Haltestelle ist leer.', wrong: 'Nein, die Haltestelle ist voll.' },
            fr: { correct: "Oui ! L'arrêt est désert.", wrong: "Non, l'arrêt est bondé." },
            nl: { correct: 'Ja! De halte is rustig.', wrong: 'Nee, de halte is druk.' },
            az: { correct: 'Bəli! Dayanacaq boşdur.', wrong: 'Xeyr, dayanacaq sıxdır.' }
        },
        options: [
            { id: 197, word: "durak", imageUrl: "/images/197.png", isCorrect: false, audioKey: "durak", spokenText: "durak" },
            { id: 198, word: "durak", imageUrl: "/images/198.png", isCorrect: true, audioKey: "durak", spokenText: "durak" }
        ]
    },

    // 3. Orman vs Tek Ağaç
    { 
        id: 221, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Orman kalabalıktır.', wrong: 'Hayır, ağaç tenhadır.' },
            en: { correct: 'Yes! The forest is crowded.', wrong: 'No, the tree is sparse.' },
            de: { correct: 'Ja! Der Wald ist dicht.', wrong: 'Nein, der Baum ist allein.' },
            fr: { correct: "Oui ! La forêt est dense.", wrong: "Non, l'arbre est seul." },
            nl: { correct: 'Ja! Het bos is dicht.', wrong: 'Nee, de boom is alleen.' },
            az: { correct: 'Bəli! Meşə sıxdır.', wrong: 'Xeyr, ağac təkdir.' }
        },
        options: [
            { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: true, audioKey: "orman", spokenText: "orman" },
            { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" }
        ]
    },
    { 
        id: 222, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Ağaç tenhadır.', wrong: 'Hayır, orman kalabalıktır.' },
            en: { correct: 'Yes! The tree is sparse.', wrong: 'No, the forest is crowded.' },
            de: { correct: 'Ja! Der Baum ist allein.', wrong: 'Nein, der Wald ist dicht.' },
            fr: { correct: "Oui ! L'arbre est seul.", wrong: "Non, la forêt est dense." },
            nl: { correct: 'Ja! De boom is alleen.', wrong: 'Nee, het bos is dicht.' },
            az: { correct: 'Bəli! Ağac təkdir.', wrong: 'Xeyr, meşə sıxdır.' }
        },
        options: [
            { id: 242, word: "orman", imageUrl: "/images/242.png", isCorrect: false, audioKey: "orman", spokenText: "orman" },
            { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" }
        ]
    },

    // 4. Kuş Sürüsü vs Tek Kuş
    { 
        id: 223, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Kuş sürüsü kalabalıktır.', wrong: 'Hayır, kuş tenhadır.' },
            en: { correct: 'Yes! The flock of birds is crowded.', wrong: 'No, the bird is sparse.' },
            de: { correct: 'Ja! Der Vogelschwarm ist groß.', wrong: 'Nein, der Vogel ist allein.' },
            fr: { correct: "Oui ! La volée d'oiseaux est nombreuse.", wrong: "Non, l'oiseau est seul." },
            nl: { correct: 'Ja! De zwerm vogels is groot.', wrong: 'Nee, de vogel is alleen.' },
            az: { correct: 'Bəli! Quş sürüsü sıxdır.', wrong: 'Xeyr, quş təkdir.' }
        },
        options: [
            { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: true, audioKey: "kus_surusu", spokenText: "kuş sürüsü" },
            { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kus", spokenText: "kuş" }
        ]
    },
    { 
        id: 224, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Kuş tenhadır.', wrong: 'Hayır, kuş sürüsü kalabalıktır.' },
            en: { correct: 'Yes! The bird is sparse.', wrong: 'No, the flock of birds is crowded.' },
            de: { correct: 'Ja! Der Vogel ist allein.', wrong: 'Nein, der Vogelschwarm ist groß.' },
            fr: { correct: "Oui ! L'oiseau est seul.", wrong: "Non, la volée d'oiseaux est nombreuse." },
            nl: { correct: 'Ja! De vogel is alleen.', wrong: 'Nee, de zwerm vogels is groot.' },
            az: { correct: 'Bəli! Quş təkdir.', wrong: 'Xeyr, quş sürüsü sıxdır.' }
        },
        options: [
            { id: 617, word: "kuş sürüsü", imageUrl: "/images/617.png", isCorrect: false, audioKey: "kus_surusu", spokenText: "kuş sürüsü" },
            { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kus", spokenText: "kuş" }
        ]
    },

    // 5. İnsan Grubu vs Tek Adam
    { 
        id: 225, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! İnsan grubu kalabalıktır.', wrong: 'Hayır, adam tenhadır.' },
            en: { correct: 'Yes! The group of people is crowded.', wrong: 'No, the man is sparse.' },
            de: { correct: 'Ja! Die Menschengruppe ist groß.', wrong: 'Nein, der Mann ist allein.' },
            fr: { correct: "Oui ! Le groupe de personnes est nombreux.", wrong: "Non, l'homme est seul." },
            nl: { correct: 'Ja! De groep mensen is groot.', wrong: 'Nee, de man is alleen.' },
            az: { correct: 'Bəli! İnsan qrupu sıxdır.', wrong: 'Xeyr, adam təkdir.' }
        },
        options: [
            { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: true, audioKey: "insan_grubu", spokenText: "insan grubu" },
            { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: false, audioKey: "adam", spokenText: "adam" }
        ]
    },
    { 
        id: 226, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Adam tenhadır.', wrong: 'Hayır, insan grubu kalabalıktır.' },
            en: { correct: 'Yes! The man is sparse.', wrong: 'No, the group of people is crowded.' },
            de: { correct: 'Ja! Der Mann ist allein.', wrong: 'Nein, die Menschengruppe ist groß.' },
            fr: { correct: "Oui ! L'homme est seul.", wrong: "Non, le groupe de personnes est nombreux." },
            nl: { correct: 'Ja! De man is alleen.', wrong: 'Nee, de groep mensen is groot.' },
            az: { correct: 'Bəli! Adam təkdir.', wrong: 'Xeyr, insan qrupu sıxdır.' }
        },
        options: [
            { id: 193, word: "insan grubu", imageUrl: "/images/193.png", isCorrect: false, audioKey: "insan_grubu", spokenText: "insan grubu" },
            { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: true, audioKey: "adam", spokenText: "adam" }
        ]
    },

    // 6. Akvaryum
    { 
        id: 227, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Akvaryum kalabalıktır.', wrong: 'Hayır, akvaryum tenhadır.' },
            en: { correct: 'Yes! The aquarium is crowded.', wrong: 'No, the aquarium is sparse.' },
            de: { correct: 'Ja! Das Aquarium ist voll.', wrong: 'Nein, das Aquarium ist leer.' },
            fr: { correct: "Oui ! L'aquarium est bondé.", wrong: "Non, l'aquarium est désert." },
            nl: { correct: 'Ja! Het aquarium is vol.', wrong: 'Nee, het aquarium is leeg.' },
            az: { correct: 'Bəli! Akvarium sıxdır.', wrong: 'Xeyr, akvarium boşdur.' }
        },
        options: [
            { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "akvaryum" }
        ]
    },
    { 
        id: 228, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Akvaryum tenhadır.', wrong: 'Hayır, akvaryum kalabalıktır.' },
            en: { correct: 'Yes! The aquarium is sparse.', wrong: 'No, the aquarium is crowded.' },
            de: { correct: 'Ja! Das Aquarium ist leer.', wrong: 'Nein, das Aquarium ist voll.' },
            fr: { correct: "Oui ! L'aquarium est désert.", wrong: "Non, l'aquarium est bondé." },
            nl: { correct: 'Ja! Het aquarium is leeg.', wrong: 'Nee, het aquarium is vol.' },
            az: { correct: 'Bəli! Akvarium boşdur.', wrong: 'Xeyr, akvarium sıxdır.' }
        },
        options: [
            { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "akvaryum" }
        ]
    },

    // 7. Ağaçtaki Kuşlar
    { 
        id: 229, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Ağaç kalabalıktır.', wrong: 'Hayır, ağaç tenhadır.' },
            en: { correct: 'Yes! The tree is crowded.', wrong: 'No, the tree is sparse.' },
            de: { correct: 'Ja! Der Baum ist voll.', wrong: 'Nein, der Baum ist leer.' },
            fr: { correct: "Oui ! L'arbre est bondé.", wrong: "Non, l'arbre est désert." },
            nl: { correct: 'Ja! De boom is vol.', wrong: 'Nee, de boom is leeg.' },
            az: { correct: 'Bəli! Ağac sıxdır.', wrong: 'Xeyr, ağac boşdur.' }
        },
        options: [
            { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" },
            { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" }
        ]
    },
    { 
        id: 230, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Ağaç tenhadır.', wrong: 'Hayır, ağaç kalabalıktır.' },
            en: { correct: 'Yes! The tree is sparse.', wrong: 'No, the tree is crowded.' },
            de: { correct: 'Ja! Der Baum ist leer.', wrong: 'Nein, der Baum ist voll.' },
            fr: { correct: "Oui ! L'arbre est désert.", wrong: "Non, l'arbre est bondé." },
            nl: { correct: 'Ja! De boom is leeg.', wrong: 'Nee, de boom is vol.' },
            az: { correct: 'Bəli! Ağac boşdur.', wrong: 'Xeyr, ağac sıxdır.' }
        },
        options: [
            { id: 741, word: "ağaç", imageUrl: "/images/741.png", isCorrect: false, audioKey: "agac", spokenText: "ağaç" },
            { id: 742, word: "ağaç", imageUrl: "/images/742.png", isCorrect: true, audioKey: "agac", spokenText: "ağaç" }
        ]
    },

    // 8. Otobüs (Dolu) vs Otobüs (Boş)
    { 
        id: 15, 
        question: "Kalabalık olan hangisi?", 
        questionAudioKey: "q_which_is_crowded", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Otobüs kalabalıktır.', wrong: 'Hayır, otobüs tenhadır.' },
            en: { correct: 'Yes! The bus is crowded.', wrong: 'No, the bus is sparse.' },
            de: { correct: 'Ja! Der Bus ist voll.', wrong: 'Nein, der Bus ist leer.' },
            fr: { correct: "Oui ! Le bus est bondé.", wrong: "Non, le bus est désert." },
            nl: { correct: 'Ja! De bus is vol.', wrong: 'Nee, de bus is leeg.' },
            az: { correct: 'Bəli! Avtobus sıxdır.', wrong: 'Xeyr, avtobus boşdur.' }
        },
        options: [
            { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: true, audioKey: "okul_otobusu", spokenText: "okul otobüsü" },
            { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: false, audioKey: "okul_otobusu", spokenText: "okul otobüsü" }
        ]
    },
    { 
        id: 16, 
        question: "Tenha olan hangisi?", 
        questionAudioKey: "q_which_is_sparse", 
        activityType: ActivityType.KalabalikTenha, 
        speech: {
            tr: { correct: 'Evet! Otobüs tenhadır.', wrong: 'Hayır, otobüs kalabalıktır.' },
            en: { correct: 'Yes! The bus is sparse.', wrong: 'No, the bus is crowded.' },
            de: { correct: 'Ja! Der Bus ist leer.', wrong: 'Nein, der Bus ist voll.' },
            fr: { correct: "Oui ! Le bus est désert.", wrong: "Non, le bus est bondé." },
            nl: { correct: 'Ja! De bus is leeg.', wrong: 'Nee, de bus is vol.' },
            az: { correct: 'Bəli! Avtobus boşdur.', wrong: 'Xeyr, avtobus sıxdır.' }
        },
        options: [
            { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: false, audioKey: "okul_otobusu", spokenText: "okul otobüsü" },
            { id: 105, word: "okul otobüsü", imageUrl: "/images/105.png", isCorrect: true, audioKey: "okul_otobusu", spokenText: "okul otobüsü" }
        ]
    },
];