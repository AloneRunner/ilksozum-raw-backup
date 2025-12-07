import { ConceptRound, ActivityType } from '../../../../types';

export const heavyLightData: ConceptRound[] = [
    // 1. Halter vs Tüy
    { 
        id: 155, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Halter ağırdır.', wrong: 'Hayır, tüy hafiftir.' },
            en: { correct: 'Yes! The barbell is heavy.', wrong: 'No, the feather is light.' },
            de: { correct: 'Ja! Die Hantel ist schwer.', wrong: 'Nein, die Feder ist leicht.' },
            fr: { correct: "Oui ! L'haltère est lourd.", wrong: "Non, la plume est légère." },
            nl: { correct: 'Ja! De halter is zwaar.', wrong: 'Nee, de veer is licht.' },
            az: { correct: 'Bəli! Ştanq ağırdır.', wrong: 'Xeyr, lələk yüngüldür.' }
        },
        options: [
            { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: true, audioKey: "halter", spokenText: "halter" },
            { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tuy", spokenText: "tüy" }
        ]
    },
    { 
        id: 156, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Tüy hafiftir.', wrong: 'Hayır, halter ağırdır.' },
            en: { correct: 'Yes! The feather is light.', wrong: 'No, the barbell is heavy.' },
            de: { correct: 'Ja! Die Feder ist leicht.', wrong: 'Nein, die Hantel ist schwer.' },
            fr: { correct: "Oui ! La plume est légère.", wrong: "Non, l'haltère est lourd." },
            nl: { correct: 'Ja! De veer is licht.', wrong: 'Nee, de halter is zwaar.' },
            az: { correct: 'Bəli! Lələk yüngüldür.', wrong: 'Xeyr, ştanq ağırdır.' }
        },
        options: [
            { id: 138, word: "halter", imageUrl: "/images/138.png", isCorrect: false, audioKey: "halter", spokenText: "halter" },
            { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tuy", spokenText: "tüy" }
        ]
    },

    // 2. Fil vs Tüy
    { 
        id: 157, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Fil ağırdır.', wrong: 'Hayır, tüy hafiftir.' },
            en: { correct: 'Yes! The elephant is heavy.', wrong: 'No, the feather is light.' },
            de: { correct: 'Ja! Der Elefant ist schwer.', wrong: 'Nein, die Feder ist leicht.' },
            fr: { correct: "Oui ! L'éléphant est lourd.", wrong: "Non, la plume est légère." },
            nl: { correct: 'Ja! De olifant is zwaar.', wrong: 'Nee, de veer is licht.' },
            az: { correct: 'Bəli! Fil ağırdır.', wrong: 'Xeyr, lələk yüngüldür.' }
        },
        options: [
            { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: true, audioKey: "fil", spokenText: "fil" },
            { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: false, audioKey: "tuy", spokenText: "tüy" }
        ]
    },
    { 
        id: 158, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Tüy hafiftir.', wrong: 'Hayır, fil ağırdır.' },
            en: { correct: 'Yes! The feather is light.', wrong: 'No, the elephant is heavy.' },
            de: { correct: 'Ja! Die Feder ist leicht.', wrong: 'Nein, der Elefant ist schwer.' },
            fr: { correct: "Oui ! La plume est légère.", wrong: "Non, l'éléphant est lourd." },
            nl: { correct: 'Ja! De veer is licht.', wrong: 'Nee, de olifant is zwaar.' },
            az: { correct: 'Bəli! Lələk yüngüldür.', wrong: 'Xeyr, fil ağırdır.' }
        },
        options: [
            { id: 28, word: "fil", imageUrl: "/images/28.png", isCorrect: false, audioKey: "fil", spokenText: "fil" },
            { id: 139, word: "tüy", imageUrl: "/images/139.png", isCorrect: true, audioKey: "tuy", spokenText: "tüy" }
        ]
    },

    // 3. Balina vs Kuş
    { 
        id: 159, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Balina ağırdır.', wrong: 'Hayır, kuş hafiftir.' },
            en: { correct: 'Yes! The whale is heavy.', wrong: 'No, the bird is light.' },
            de: { correct: 'Ja! Der Wal ist schwer.', wrong: 'Nein, der Vogel ist leicht.' },
            fr: { correct: "Oui ! La baleine est lourde.", wrong: "Non, l'oiseau est léger." },
            nl: { correct: 'Ja! De walvis is zwaar.', wrong: 'Nee, de vogel is licht.' },
            az: { correct: 'Bəli! Balina ağırdır.', wrong: 'Xeyr, quş yüngüldür.' }
        },
        options: [
            { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: true, audioKey: "balina", spokenText: "balina" },
            { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: false, audioKey: "kus", spokenText: "kuş" }
        ]
    },
    { 
        id: 160, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Kuş hafiftir.', wrong: 'Hayır, balina ağırdır.' },
            en: { correct: 'Yes! The bird is light.', wrong: 'No, the whale is heavy.' },
            de: { correct: 'Ja! Der Vogel ist leicht.', wrong: 'Nein, der Wal ist schwer.' },
            fr: { correct: "Oui ! L'oiseau est léger.", wrong: "Non, la baleine est lourde." },
            nl: { correct: 'Ja! De vogel is licht.', wrong: 'Nee, de walvis is zwaar.' },
            az: { correct: 'Bəli! Quş yüngüldür.', wrong: 'Xeyr, balina ağırdır.' }
        },
        options: [
            { id: 491, word: "balina", imageUrl: "/images/491.png", isCorrect: false, audioKey: "balina", spokenText: "balina" },
            { id: 73, word: "kuş", imageUrl: "/images/73.png", isCorrect: true, audioKey: "kus", spokenText: "kuş" }
        ]
    },

    // 4. Ansiklopedi vs Kağıt
    { 
        id: 161, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Ansiklopedi ağırdır.', wrong: 'Hayır, kağıt hafiftir.' },
            en: { correct: 'Yes! The encyclopedia is heavy.', wrong: 'No, the paper is light.' },
            de: { correct: 'Ja! Die Enzyklopädie ist schwer.', wrong: 'Nein, das Papier ist leicht.' },
            fr: { correct: "Oui ! L'encyclopédie est lourde.", wrong: "Non, le papier est léger." },
            nl: { correct: 'Ja! De encyclopedie is zwaar.', wrong: 'Nee, het papier is licht.' },
            az: { correct: 'Bəli! Ensiklopediya ağırdır.', wrong: 'Xeyr, kağız yüngüldür.' }
        },
        options: [
            { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },
    { 
        id: 162, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Kağıt hafiftir.', wrong: 'Hayır, ansiklopedi ağırdır.' },
            en: { correct: 'Yes! The paper is light.', wrong: 'No, the encyclopedia is heavy.' },
            de: { correct: 'Ja! Das Papier ist leicht.', wrong: 'Nein, die Enzyklopädie ist schwer.' },
            fr: { correct: "Oui ! Le papier est léger.", wrong: "Non, l'encyclopédie est lourde." },
            nl: { correct: 'Ja! Het papier is licht.', wrong: 'Nee, de encyclopedie is zwaar.' },
            az: { correct: 'Bəli! Kağız yüngüldür.', wrong: 'Xeyr, ensiklopediya ağırdır.' }
        },
        options: [
            { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "ansiklopedi" },
            { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kagit", spokenText: "kağıt" }
        ]
    },

    // 5. Taş vs Roka (Yaprak)
    { 
        id: 163, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Taş ağırdır.', wrong: 'Hayır, roka hafiftir.' },
            en: { correct: 'Yes! The stone is heavy.', wrong: 'No, the arugula is light.' },
            de: { correct: 'Ja! Der Stein ist schwer.', wrong: 'Nein, der Rucola ist leicht.' },
            fr: { correct: "Oui ! La pierre est lourde.", wrong: "Non, la roquette est légère." },
            nl: { correct: 'Ja! De steen is zwaar.', wrong: 'Nee, de rucola is licht.' },
            az: { correct: 'Bəli! Daş ağırdır.', wrong: 'Xeyr, roka yüngüldür.' }
        },
        options: [
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "tas", spokenText: "taş" },
            { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: false, audioKey: "roka", spokenText: "roka" }
        ]
    },
    { 
        id: 164, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Roka hafiftir.', wrong: 'Hayır, taş ağırdır.' },
            en: { correct: 'Yes! The arugula is light.', wrong: 'No, the stone is heavy.' },
            de: { correct: 'Ja! Der Rucola ist leicht.', wrong: 'Nein, der Stein ist schwer.' },
            fr: { correct: "Oui ! La roquette est légère.", wrong: "Non, la pierre est lourde." },
            nl: { correct: 'Ja! De rucola is licht.', wrong: 'Nee, de steen is zwaar.' },
            az: { correct: 'Bəli! Roka yüngüldür.', wrong: 'Xeyr, daş ağırdır.' }
        },
        options: [
            { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "tas", spokenText: "taş" },
            { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: true, audioKey: "roka", spokenText: "roka" }
        ]
    },

    // 6. Kamyon vs Balon
    { 
        id: 165, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Kamyon ağırdır.', wrong: 'Hayır, balon hafiftir.' },
            en: { correct: 'Yes! The truck is heavy.', wrong: 'No, the balloon is light.' },
            de: { correct: 'Ja! Der Lastwagen ist schwer.', wrong: 'Nein, der Ballon ist leicht.' },
            fr: { correct: "Oui ! Le camion est lourd.", wrong: "Non, le ballon est léger." },
            nl: { correct: 'Ja! De vrachtwagen is zwaar.', wrong: 'Nee, de ballon is licht.' },
            az: { correct: 'Bəli! Yük maşını ağırdır.', wrong: 'Xeyr, şar yüngüldür.' }
        },
        options: [
            { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: true, audioKey: "kamyon", spokenText: "kamyon" },
            { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: false, audioKey: "balon", spokenText: "balon" }
        ]
    },
    { 
        id: 166, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Balon hafiftir.', wrong: 'Hayır, kamyon ağırdır.' },
            en: { correct: 'Yes! The balloon is light.', wrong: 'No, the truck is heavy.' },
            de: { correct: 'Ja! Der Ballon ist leicht.', wrong: 'Nein, der Lastwagen ist schwer.' },
            fr: { correct: "Oui ! Le ballon est léger.", wrong: "Non, le camion est lourd." },
            nl: { correct: 'Ja! De ballon is licht.', wrong: 'Nee, de vrachtwagen is zwaar.' },
            az: { correct: 'Bəli! Şar yüngüldür.', wrong: 'Xeyr, yük maşını ağırdır.' }
        },
        options: [
            { id: 288, word: "kamyon", imageUrl: "/images/288.png", isCorrect: false, audioKey: "kamyon", spokenText: "kamyon" },
            { id: 130, word: "balon", imageUrl: "/images/130.png", isCorrect: true, audioKey: "balon", spokenText: "balon" }
        ]
    },

    // 7. Karpuz vs Çilek
    { 
        id: 167, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Karpuz ağırdır.', wrong: 'Hayır, çilek hafiftir.' },
            en: { correct: 'Yes! The watermelon is heavy.', wrong: 'No, the strawberry is light.' },
            de: { correct: 'Ja! Die Wassermelone ist schwer.', wrong: 'Nein, die Erdbeere ist leicht.' },
            fr: { correct: "Oui ! La pastèque est lourde.", wrong: "Non, la fraise est légère." },
            nl: { correct: 'Ja! De watermeloen is zwaar.', wrong: 'Nee, de aardbei is licht.' },
            az: { correct: 'Bəli! Qarpız ağırdır.', wrong: 'Xeyr, çiyələk yüngüldür.' }
        },
        options: [
            { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: true, audioKey: "karpuz", spokenText: "karpuz" },
            { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: false, audioKey: "cilek", spokenText: "çilek" }
        ]
    },
    { 
        id: 168, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Çilek hafiftir.', wrong: 'Hayır, karpuz ağırdır.' },
            en: { correct: 'Yes! The strawberry is light.', wrong: 'No, the watermelon is heavy.' },
            de: { correct: 'Ja! Die Erdbeere ist leicht.', wrong: 'Nein, die Wassermelone ist schwer.' },
            fr: { correct: "Oui ! La fraise est légère.", wrong: "Non, la pastèque est lourde." },
            nl: { correct: 'Ja! De aardbei is licht.', wrong: 'Nee, de watermeloen is zwaar.' },
            az: { correct: 'Bəli! Çiyələk yüngüldür.', wrong: 'Xeyr, qarpız ağırdır.' }
        },
        options: [
            { id: 170, word: "karpuz", imageUrl: "/images/170.png", isCorrect: false, audioKey: "karpuz", spokenText: "karpuz" },
            { id: 171, word: "çilek", imageUrl: "/images/171.png", isCorrect: true, audioKey: "cilek", spokenText: "çilek" }
        ]
    },

    // 8. Tuğla vs Pamuk
    { 
        id: 169, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Tuğla ağırdır.', wrong: 'Hayır, pamuk hafiftir.' },
            en: { correct: 'Yes! The brick is heavy.', wrong: 'No, the cotton is light.' },
            de: { correct: 'Ja! Der Ziegelstein ist schwer.', wrong: 'Nein, die Baumwolle ist leicht.' },
            fr: { correct: "Oui ! La brique est lourde.", wrong: "Non, le coton est léger." },
            nl: { correct: 'Ja! De baksteen is zwaar.', wrong: 'Nee, het katoen is licht.' },
            az: { correct: 'Bəli! Kərpic ağırdır.', wrong: 'Xeyr, pambıq yüngüldür.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: true, audioKey: "tugla", spokenText: "tuğla" },
            { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: false, audioKey: "pamuk", spokenText: "pamuk" }
        ]
    },
    { 
        id: 170, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Pamuk hafiftir.', wrong: 'Hayır, tuğla ağırdır.' },
            en: { correct: 'Yes! The cotton is light.', wrong: 'No, the brick is heavy.' },
            de: { correct: 'Ja! Die Baumwolle ist leicht.', wrong: 'Nein, der Ziegelstein ist schwer.' },
            fr: { correct: "Oui ! Le coton est léger.", wrong: "Non, la brique est lourde." },
            nl: { correct: 'Ja! Het katoen is licht.', wrong: 'Nee, de baksteen is zwaar.' },
            az: { correct: 'Bəli! Pambıq yüngüldür.', wrong: 'Xeyr, kərpic ağırdır.' }
        },
        options: [
            { id: 136, word: "tuğla", imageUrl: "/images/136.png", isCorrect: false, audioKey: "tugla", spokenText: "tuğla" },
            { id: 27, word: "pamuk", imageUrl: "/images/27.png", isCorrect: true, audioKey: "pamuk", spokenText: "pamuk" }
        ]
    },

    // 9. Valiz vs Çorap
    { 
        id: 171, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Valiz ağırdır.', wrong: 'Hayır, çorap hafiftir.' },
            en: { correct: 'Yes! The suitcase is heavy.', wrong: 'No, the sock is light.' },
            de: { correct: 'Ja! Der Koffer ist schwer.', wrong: 'Nein, die Socke ist leicht.' },
            fr: { correct: "Oui ! La valise est lourde.", wrong: "Non, la chaussette est légère." },
            nl: { correct: 'Ja! De koffer is zwaar.', wrong: 'Nee, de sok is licht.' },
            az: { correct: 'Bəli! Çamadan ağırdır.', wrong: 'Xeyr, corab yüngüldür.' }
        },
        options: [
            { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: true, audioKey: "valiz", spokenText: "valiz" },
            { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: false, audioKey: "corap", spokenText: "çorap" }
        ]
    },
    { 
        id: 172, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Çorap hafiftir.', wrong: 'Hayır, valiz ağırdır.' },
            en: { correct: 'Yes! The sock is light.', wrong: 'No, the suitcase is heavy.' },
            de: { correct: 'Ja! Die Socke ist leicht.', wrong: 'Nein, der Koffer ist schwer.' },
            fr: { correct: "Oui ! La chaussette est légère.", wrong: "Non, la valise est lourde." },
            nl: { correct: 'Ja! De sok is licht.', wrong: 'Nee, de koffer is zwaar.' },
            az: { correct: 'Bəli! Corab yüngüldür.', wrong: 'Xeyr, çamadan ağırdır.' }
        },
        options: [
            { id: 31, word: "valiz", imageUrl: "/images/31.png", isCorrect: false, audioKey: "valiz", spokenText: "valiz" },
            { id: 146, word: "çorap", imageUrl: "/images/146.png", isCorrect: true, audioKey: "corap", spokenText: "çorap" }
        ]
    },

    // 10. Traktör vs Kelebek
    { 
        id: 173, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Traktör ağırdır.', wrong: 'Hayır, kelebek hafiftir.' },
            en: { correct: 'Yes! The tractor is heavy.', wrong: 'No, the butterfly is light.' },
            de: { correct: 'Ja! Der Traktor ist schwer.', wrong: 'Nein, der Schmetterling ist leicht.' },
            fr: { correct: "Oui ! Le tracteur est lourd.", wrong: "Non, le papillon est léger." },
            nl: { correct: 'Ja! De tractor is zwaar.', wrong: 'Nee, de vlinder is licht.' },
            az: { correct: 'Bəli! Traktor ağırdır.', wrong: 'Xeyr, kəpənək yüngüldür.' }
        },
        options: [
            { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: true, audioKey: "traktor", spokenText: "traktör" },
            { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: false, audioKey: "kelebek", spokenText: "kelebek" }
        ]
    },
    { 
        id: 174, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Kelebek hafiftir.', wrong: 'Hayır, traktör ağırdır.' },
            en: { correct: 'Yes! The butterfly is light.', wrong: 'No, the tractor is heavy.' },
            de: { correct: 'Ja! Der Schmetterling ist leicht.', wrong: 'Nein, der Traktor ist schwer.' },
            fr: { correct: "Oui ! Le papillon est léger.", wrong: "Non, le tracteur est lourd." },
            nl: { correct: 'Ja! De vlinder is licht.', wrong: 'Nee, de tractor is zwaar.' },
            az: { correct: 'Bəli! Kəpənək yüngüldür.', wrong: 'Xeyr, traktor ağırdır.' }
        },
        options: [
            { id: 289, word: "traktör", imageUrl: "/images/289.png", isCorrect: false, audioKey: "traktor", spokenText: "traktör" },
            { id: 274, word: "kelebek", imageUrl: "/images/274.png", isCorrect: true, audioKey: "kelebek", spokenText: "kelebek" }
        ]
    },

    // 11. Kanepe vs Yastık
    { 
        id: 175, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Kanepe ağırdır.', wrong: 'Hayır, yastık hafiftir.' },
            en: { correct: 'Yes! The sofa is heavy.', wrong: 'No, the pillow is light.' },
            de: { correct: 'Ja! Das Sofa ist schwer.', wrong: 'Nein, das Kissen ist leicht.' },
            fr: { correct: "Oui ! Le canapé est lourd.", wrong: "Non, l'oreiller est léger." },
            nl: { correct: 'Ja! De bank is zwaar.', wrong: 'Nee, het kussen is licht.' },
            az: { correct: 'Bəli! Divan ağırdır.', wrong: 'Xeyr, yastıq yüngüldür.' }
        },
        options: [
            { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: true, audioKey: "kanepe", spokenText: "kanepe" },
            { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: false, audioKey: "yastik", spokenText: "yastık" }
        ]
    },
    { 
        id: 176, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Yastık hafiftir.', wrong: 'Hayır, kanepe ağırdır.' },
            en: { correct: 'Yes! The pillow is light.', wrong: 'No, the sofa is heavy.' },
            de: { correct: 'Ja! Das Kissen ist leicht.', wrong: 'Nein, das Sofa ist schwer.' },
            fr: { correct: "Oui ! L'oreiller est léger.", wrong: "Non, le canapé est lourd." },
            nl: { correct: 'Ja! Het kussen is licht.', wrong: 'Nee, de bank is zwaar.' },
            az: { correct: 'Bəli! Yastıq yüngüldür.', wrong: 'Xeyr, divan ağırdır.' }
        },
        options: [
            { id: 549, word: "kanepe", imageUrl: "/images/549.png", isCorrect: false, audioKey: "kanepe", spokenText: "kanepe" },
            { id: 137, word: "yastık", imageUrl: "/images/137.png", isCorrect: true, audioKey: "yastik", spokenText: "yastık" }
        ]
    },

    // 12. Dolu Su Şişesi vs Boş Su Şişesi
    { 
        id: 177, 
        question: "Ağır olan hangisi?", 
        questionAudioKey: "q_which_is_heavy", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Dolu şişe ağırdır.', wrong: 'Hayır, boş şişe hafiftir.' },
            en: { correct: 'Yes! The full bottle is heavy.', wrong: 'No, the empty bottle is light.' },
            de: { correct: 'Ja! Die volle Flasche ist schwer.', wrong: 'Nein, die leere Flasche ist leicht.' },
            fr: { correct: "Oui ! La bouteille pleine est lourde.", wrong: "Non, la bouteille vide est légère." },
            nl: { correct: 'Ja! De volle fles is zwaar.', wrong: 'Nee, de lege fles is licht.' },
            az: { correct: 'Bəli! Dolu şüşə ağırdır.', wrong: 'Xeyr, boş şüşə yüngüldür.' }
        },
        options: [
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },
    { 
        id: 178, 
        question: "Hafif olan hangisi?", 
        questionAudioKey: "q_which_is_light", 
        activityType: ActivityType.HeavyLight, 
        speech: {
            tr: { correct: 'Evet! Boş şişe hafiftir.', wrong: 'Hayır, dolu şişe ağırdır.' },
            en: { correct: 'Yes! The empty bottle is light.', wrong: 'No, the full bottle is heavy.' },
            de: { correct: 'Ja! Die leere Flasche ist leicht.', wrong: 'Nein, die volle Flasche ist schwer.' },
            fr: { correct: "Oui ! La bouteille vide est légère.", wrong: "Non, la bouteille pleine est lourde." },
            nl: { correct: 'Ja! De lege fles is licht.', wrong: 'Nee, de volle fles is zwaar.' },
            az: { correct: 'Bəli! Boş şüşə yüngüldür.', wrong: 'Xeyr, dolu şüşə ağırdır.' }
        },
        options: [
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },
];