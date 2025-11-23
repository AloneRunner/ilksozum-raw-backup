import { ConceptRound, ActivityType, ImageMetadata } from '../../../types.ts';
import { imageData } from '../imageData.ts';

// Helper function to find image metadata by ID. Throws if not found.
const findImage = (id: number): ImageMetadata => {
    const image = imageData.find(img => img.id === id);
    if (!image) {
        // This is a developer error, so throwing is appropriate.
        throw new Error(`[contentService] Image with ID ${id} not found in imageData.`);
    }
    return image;
};

// Helper to create a ConceptOption from ImageMetadata
// NOTE: We no longer include inline `spokenText` here — TTS should use i18n keys only.
const createOption = (image: ImageMetadata, isCorrect: boolean) => ({
    id: image.id,
    word: image.word,
    imageUrl: image.imageUrl,
    audioKey: image.audioKeys.default,
    isCorrect,
});

// Create pairs for the rounds based on user-provided image IDs
const directionPairs = [
    { leftId: 1, rightId: 28 },    // araba vs fil
    { leftId: 26, rightId: 41 },   // ördek vs tavşan
    { leftId: 106, rightId: 73 },  // tren vs kuş
    { leftId: 42, rightId: 763 },  // kaplumbağa vs yunus (düzeltildi: kaplumbağa sola bakıyor)
    { leftId: 145, rightId: 257 }, // çita vs ambulans
    { leftId: 107, rightId: 377 }, // uçak vs tavuk
    { leftId: 277, rightId: 59 },  // maymun vs ayakkabı
    { leftId: 150, rightId: 92 },  // solucan vs uğur böceği
    { leftId: 102, rightId: 445 }, // horoz vs tırtıl
    { leftId: 256, rightId: 709 }, // itfaiye aracı vs atlet
];


// Generate the rounds based on the new structure
export const leftRightData: ConceptRound[] = directionPairs.flatMap((pair, index) => {
    const leftImage = findImage(pair.leftId);
    const rightImage = findImage(pair.rightId);

    const roundForLeft: ConceptRound = {
        id: (index * 2) + 1,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        options: [
            createOption(leftImage, true),
            createOption(rightImage, false),
        ]
    };

    const roundForRight: ConceptRound = {
        id: (index * 2) + 2,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        options: [
            createOption(leftImage, false),
            createOption(rightImage, true),
        ]
    };

    return [roundForLeft, roundForRight];
});


export const onUnderData: ConceptRound[] = [
    // 1. Top - Masa
    { id: 1, question: "Masanın üstünde olan hangisi?", questionAudioKey: "q_which_is_on_person", activityType: ActivityType.OnUnder, options: [
        { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: true, audioKey: "üstünde" },
        { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 2, question: "Masanın altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: false, audioKey: "üstünde" },
        { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: true, audioKey: "altında" }
    ]},
    // 2. Kedi - Sandalye
    { id: 3, question: "Sandalyenin üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: true, audioKey: "üstünde" },
        { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 4, question: "Sandalyenin altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: false, audioKey: "üstünde" },
        { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: true, audioKey: "altında" }
    ]},
    // 3. Kiraz - Pasta (fixed: both options use 'kiraz' as the object, matching image, word, and spokenText)
        { id: 5, question: "Pastanın üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
            { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: true, audioKey: "üstünde" },
            { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: false, audioKey: "altında" }
        ]},
        { id: 6, question: "Pastanın altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
            { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: false, audioKey: "üstünde" },
            { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: true, audioKey: "altında" }
        ]},
    // 4. Top - Merdiven
    { id: 7, question: "Merdivenin üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: true, audioKey: "üstünde" },
        { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 8, question: "Merdivenin altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: false, audioKey: "üstünde" },
        { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: true, audioKey: "altında" }
    ]},
    // 5. Yastık - Yatak
    { id: 9, question: "Yatağın üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: true, audioKey: "üstünde" },
        { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 10, question: "Yatağın altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: false, audioKey: "üstünde" },
        { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: true, audioKey: "altında" }
    ]},
    // 6. Şapka - Kafa/Yatak
    { id: 11, question: "Kafanın üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 499, word: "şapka", imageUrl: "/images/499.png", isCorrect: true, audioKey: "üstünde" },
        { id: 690, word: "şapka", imageUrl: "/images/690.png", isCorrect: false, audioKey: "altında" }
    ]},
    // 7. Kuş - Bulut
    // NOTE: Make the question explicit (include the noun) and provide a per-round
    // speech override so TTS reads the clearer sentence instead of the generic key.
    { id: 13, question: "Hangi kuş bulutun üstünde?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: true, audioKey: "üstünde" },
        { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 14, question: "Hangi kuş bulutun altında?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: false, audioKey: "üstünde" },
        { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: true, audioKey: "altında" }
    ]},
    // 8. Kitap - Masa
    { id: 15, question: "Masanın üstünde olan hangisi?", questionAudioKey: "q_which_is_on", activityType: ActivityType.OnUnder, options: [
        { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: true, audioKey: "üstünde" },
        { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: false, audioKey: "altında" }
    ]},
    { id: 16, question: "Masanın altında olan hangisi?", questionAudioKey: "q_which_is_under", activityType: ActivityType.OnUnder, options: [
        { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: false, audioKey: "üstünde" },
        { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: true, audioKey: "altında" }
    ]},
];

export const belowAboveData: ConceptRound[] = [
    // 1. Uçak vs Gemi
    { id: 1, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: true, audioKey: "uçak" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: false, audioKey: "gemi" }
    ]},
    { id: 2, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: false, audioKey: "uçak" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: true, audioKey: "gemi" }
    ]},
    // 2. Güneş vs Ağaçlar
    { id: 3, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "güneş" },
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: false, audioKey: "ağaçlar" }
    ]},
    { id: 4, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "güneş" },
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: true, audioKey: "ağaçlar" }
    ]},
    // 3. Uçurtma vs Ağaç
    { id: 5, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: true, audioKey: "uçurtma" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "ağaç" }
    ]},
    { id: 6, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: false, audioKey: "uçurtma" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "ağaç" }
    ]},
    // 4. Ay vs Ağaç
    { id: 7, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "ağaç" }
    ]},
    { id: 8, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: false, audioKey: "ay" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "ağaç" }
    ]},
];

export const besideOppositeData: ConceptRound[] = [
    // 1. Sandalyeler
    { id: 1, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: true, audioKey: "sandalyeler" },
        { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: false, audioKey: "sandalyeler" }
    ]},
    { id: 2, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: false, audioKey: "sandalyeler" },
        { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: true, audioKey: "sandalyeler" }
    ]},
    // 2. Çocuklar
    { id: 3, question: "Yan yana duranlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: true, audioKey: "çocuklar" },
        { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: false, audioKey: "çocuklar" }
    ]},
    { id: 4, question: "Karşılıklı duranlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: false, audioKey: "çocuklar" },
        { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: true, audioKey: "çocuklar" }
    ]},
    // 3. Satranç Taşları
    { id: 5, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: true, audioKey: "satranç_taşları" },
        { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: false, audioKey: "satranç_taşları" }
    ]},
    { id: 6, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: false, audioKey: "satranç_taşları" },
        { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: true, audioKey: "satranç_taşları" }
    ]},
    // 4. Ağaçlar
    { id: 7, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: true, audioKey: "ağaçlar" },
        { id: 512, word: "ağaçlar", imageUrl: "/images/512.png", isCorrect: false, audioKey: "ağaçlar" }
    ]},
    { id: 8, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: false, audioKey: "ağaçlar" },
        { id: 512, word: "ağaçlar", imageUrl: "/images/512.png", isCorrect: true, audioKey: "ağaçlar" }
    ]},
    // 5. Evler
    { id: 9, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: true, audioKey: "evler" },
        { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: false, audioKey: "evler" }
    ]},
    { id: 10, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: false, audioKey: "evler" },
        { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: true, audioKey: "evler" }
    ]},
    // 6. Tuzluk ve Biberlik
    { id: 11, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik" },
        { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik" }
    ]},
    { id: 12, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik" },
        { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik" }
    ]},
    // 7. Kediler
    { id: 13, question: "Yan yana duranlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: true, audioKey: "kediler" },
        { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: false, audioKey: "kediler" }
    ]},
    { id: 14, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: false, audioKey: "kediler" },
        { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: true, audioKey: "kediler" }
    ]},
    // 8. Futbolcular
    { id: 15, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: true, audioKey: "futbolcular" },
        { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: false, audioKey: "futbolcular" }
    ]},
    { id: 16, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: false, audioKey: "futbolcular" },
        { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: true, audioKey: "futbolcular" }
    ]},
];

export const inFrontOfBehindData: ConceptRound[] = [
    // 1. Köpek - Kulübe
    { id: 1, question: "Kulübenin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: true, audioKey: "köpek" },
        { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: false, audioKey: "köpek" }
    ]},
    { id: 2, question: "Kulübenin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: false, audioKey: "köpek" },
        { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: true, audioKey: "köpek" }
    ]},
    // 2. Çocuk - Ağaç
    { id: 3, question: "Ağacın önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: true, audioKey: "çocuk" },
        { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: false, audioKey: "çocuk" }
    ]},
    { id: 4, question: "Ağacın arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: false, audioKey: "çocuk" },
        { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: true, audioKey: "çocuk" }
    ]},
    // 3. Araba - Ev
    { id: 5, question: "Evin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: true, audioKey: "araba" },
        { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: false, audioKey: "araba" }
    ]},
    { id: 6, question: "Evin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: false, audioKey: "araba" },
        { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: true, audioKey: "araba" }
    ]},
    // 4. Çocuk - Sandalye
    { id: 7, question: "Sandalyenin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "çocuk" },
        { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: false, audioKey: "çocuk" }
    ]},
    { id: 8, question: "Sandalyenin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "çocuk" },
        { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: true, audioKey: "çocuk" }
    ]},
    // 5. Adam - Kapı
    { id: 9, question: "Kapının önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: true, audioKey: "adam" },
        { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: false, audioKey: "adam" }
    ]},
    { id: 10, question: "Kapının arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: false, audioKey: "adam" },
        { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: true, audioKey: "adam" }
    ]},
    // 6. Kalkan - Asker
        // 6. Kalkan - Asker (clarified: ask about the shield explicitly)
        { id: 11, question: "Hangi kalkan askerin arkasında?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
            { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: true, audioKey: "kalkan" },
            { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: false, audioKey: "kalkan" }
        ]},
        { id: 12, question: "Hangi kalkan askerin önünde?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
            { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: false, audioKey: "kalkan" },
            { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: true, audioKey: "kalkan" }
        ]},
];

export const insideOutsideData: ConceptRound[] = [
    // 1. Köpek - Kulübe
    { id: 1, question: "Kulübenin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: true, audioKey: "köpek" },
        { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: false, audioKey: "köpek" }
    ]},
    { id: 2, question: "Kulübenin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: false, audioKey: "köpek" },
        { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: true, audioKey: "köpek" }
    ]},
    // 2. Öğrenciler - Otobüs
    { id: 3, question: "Otobüsün içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: true, audioKey: "okul_otobüsü" },
        { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: false, audioKey: "öğrenciler" }
    ]},
    { id: 4, question: "Otobüsün dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: false, audioKey: "okul_otobüsü" },
        { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: true, audioKey: "öğrenciler" }
    ]},
    // 3. Elmalar - Sepet
    { id: 5, question: "Sepetin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: true, audioKey: "elmalar" },
        { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: false, audioKey: "elmalar" }
    ]},
    { id: 6, question: "Sepetin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: false, audioKey: "elmalar" },
        { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: true, audioKey: "elmalar" }
    ]},
    // 4. Kalemler - Kalemlik
    { id: 7, question: "Kalemliğin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik" },
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik" }
    ]},
    { id: 8, question: "Kalemliğin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik" },
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik" }
    ]},
    // 5. İnsan - Çadır
    { id: 9, question: "Çadırın içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: true, audioKey: "insan" },
        { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: false, audioKey: "insan" }
    ]},
    { id: 10, question: "Çadırın dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: false, audioKey: "insan" },
        { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: true, audioKey: "insan" }
    ]},
];

export const betweenData: ConceptRound[] = [
    { id: 1, question: "Blokların arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 22, word: "top", imageUrl: "/images/22.png", isCorrect: true, audioKey: "top" },
        { id: 632, word: "top", imageUrl: "/images/632.png", isCorrect: false, audioKey: "top" }
    ]},
    { id: 2, question: "Binaların arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 456, word: "araba", imageUrl: "/images/456.png", isCorrect: true, audioKey: "araba" },
        { id: 457, word: "araba", imageUrl: "/images/457.png", isCorrect: false, audioKey: "araba" }
    ]},
    { id: 3, question: "Annesiyle babasının arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 476, word: "çocuk", imageUrl: "/images/476.png", isCorrect: true, audioKey: "çocuk" },
        { id: 477, word: "çocuk", imageUrl: "/images/477.png", isCorrect: false, audioKey: "çocuk" }
    ]},
    { id: 4, question: "Ekmeklerin arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 623, word: "sandviç", imageUrl: "/images/623.png", isCorrect: true, audioKey: "sandviç" },
        { id: 624, word: "sandviç malzemeleri", imageUrl: "/images/624.png", isCorrect: false, audioKey: "sandviç_malzemeleri" }
    ]},
];

export const nearFarData: ConceptRound[] = [
    // 1. Ev
    { id: 1, question: "Hangi ev daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: true, audioKey: "ev" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: false, audioKey: "ev" }
    ]},
    { id: 2, question: "Hangi ev daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: false, audioKey: "ev" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: true, audioKey: "ev" }
    ]},
    // 2. Uçak
    { id: 3, question: "Hangi uçak daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 616, word: "uçak", imageUrl: "/images/616.png", isCorrect: true, audioKey: "uçak" },
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: false, audioKey: "uçak" }
    ]},
    { id: 4, question: "Hangi uçak daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 616, word: "uçak", imageUrl: "/images/616.png", isCorrect: false, audioKey: "uçak" },
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: true, audioKey: "uçak" }
    ]},
    // 3. Kuşlar
    { id: 5, question: "Hangi kuşlar daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 617, word: "kuşlar", imageUrl: "/images/617.png", isCorrect: true, audioKey: "kuşlar" },
        { id: 618, word: "kuşlar", imageUrl: "/images/618.png", isCorrect: false, audioKey: "kuşlar" }
    ]},
    { id: 6, question: "Hangi kuşlar daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 617, word: "kuşlar", imageUrl: "/images/617.png", isCorrect: false, audioKey: "kuşlar" },
        { id: 618, word: "kuşlar", imageUrl: "/images/618.png", isCorrect: true, audioKey: "kuşlar" }
    ]},
    // 4. Ay
    { id: 7, question: "Hangi ay daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 619, word: "ay", imageUrl: "/images/619.png", isCorrect: true, audioKey: "ay" },
        { id: 620, word: "ay", imageUrl: "/images/620.png", isCorrect: false, audioKey: "ay" }
    ]},
    { id: 8, question: "Hangi ay daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 619, word: "ay", imageUrl: "/images/619.png", isCorrect: false, audioKey: "ay" },
        { id: 620, word: "ay", imageUrl: "/images/620.png", isCorrect: true, audioKey: "ay" }
    ]},
    // 5. Gemi
    { id: 9, question: "Hangi gemi daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: true, audioKey: "gemi" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: false, audioKey: "gemi" }
    ]},
    { id: 10, question: "Hangi gemi daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: false, audioKey: "gemi" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: true, audioKey: "gemi" }
    ]},
    // 6. Adam
    { id: 11, question: "Hangi adam daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: true, audioKey: "adam" },
        { id: 719, word: "adam", imageUrl: "/images/719.png", isCorrect: false, audioKey: "adam" }
    ]},
    { id: 12, question: "Hangi adam daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: false, audioKey: "adam" },
        { id: 719, word: "adam", imageUrl: "/images/719.png", isCorrect: true, audioKey: "adam" }
    ]},
];

export const highLowData: ConceptRound[] = [
    // 1. Dağ vs Tepe - boyut karşılaştırması
    { id: 1, question: "Hangisi daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: true, audioKey: "dağ" },
        { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: false, audioKey: "tepe" }
    ]},
    { id: 2, question: "Hangisi daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: false, audioKey: "dağ" },
        { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: true, audioKey: "tepe" }
    ]},
    // 2. Trambolin - konum karşılaştırması
    { id: 3, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: true, audioKey: "çocuk" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: false, audioKey: "tabure" }
    ]},
    { id: 4, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: false, audioKey: "çocuk" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: true, audioKey: "tabure" }
    ]},
    // 3. Salıncak - konum karşılaştırması
    { id: 5, question: "Üstte olan hangisi?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: true, audioKey: "çocuk" },
        { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: false, audioKey: "salıncak" }
    ]},
    { id: 6, question: "Altta olan hangisi?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: false, audioKey: "çocuk" },
        { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: true, audioKey: "salıncak" }
    ]},
    // 4. Raf - raf konumu
    { id: 7, question: "Üst raftaki hangisi?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: true, audioKey: "kitaplar" },
        { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: false, audioKey: "kitaplar" }
    ]},
    { id: 8, question: "Alt raftaki hangisi?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: false, audioKey: "kitaplar" },
        { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: true, audioKey: "kitaplar" }
    ]},
    // 5. Gökdelen vs Ev - boyut karşılaştırması
    { id: 9, question: "Hangi bina daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: true, audioKey: "gökdelen" },
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: false, audioKey: "ev" }
    ]},
    { id: 10, question: "Hangi bina daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: false, audioKey: "gökdelen" },
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: true, audioKey: "ev" }
    ]},
    // 6. Kitaplık - boyut karşılaştırması
    { id: 11, question: "Hangi dolap daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplık" },
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplık" }
    ]},
    { id: 12, question: "Hangi dolap daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplık" },
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplık" }
    ]},
    // 7. Tümsek vs Çukur - arazi şekli karşılaştırması
    { id: 13, question: "Hangi yer daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: true, audioKey: "tümsek" },
        { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: false, audioKey: "çukur" }
    ]},
    { id: 14, question: "Hangi yer daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: false, audioKey: "tümsek" },
        { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: true, audioKey: "çukur" }
    ]},
];