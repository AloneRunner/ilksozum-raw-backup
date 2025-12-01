import { ConceptRound, ActivityType, ImageMetadata } from '../../../../types';
import { imageData } from '../imageData.ts';

// --------------------------------------------------------------------------
// YARDIMCI FONKSİYONLAR
// --------------------------------------------------------------------------

// "sakin" gibi tag hatalarını aşmak için dönüş tipini esnettik (any)
const findImage = (id: number): any => {
    const image = imageData.find(img => img.id === id);
    if (!image) {
        throw new Error(`[contentService] Image with ID ${id} not found in imageData.`);
    }
    return image;
};

// spokenText eklendi (Tip hatasını çözmek için)
const createOption = (image: ImageMetadata, isCorrect: boolean, direction: 'left' | 'right') => ({
    id: image.id,
    word: image.word,
    imageUrl: image.imageUrl,
    audioKey: `${image.audioKeys.default}_${direction}`,
    spokenText: "", // TypeScript hatasını önlemek için boş ekledik
    isCorrect,
});

const directionPairs = [
    { leftId: 1, rightId: 28 },    // araba vs fil
    { leftId: 26, rightId: 41 },   // ördek vs tavşan
    { leftId: 106, rightId: 73 },  // tren vs kuş
    { leftId: 42, rightId: 763 },  // kaplumbağa vs yunus
    { leftId: 145, rightId: 257 }, // çita vs ambulans
    { leftId: 107, rightId: 377 }, // uçak vs tavuk
    { leftId: 277, rightId: 59 },  // maymun vs ayakkabı
    { leftId: 150, rightId: 92 },  // solucan vs uğur böceği
    { leftId: 102, rightId: 445 }, // horoz vs tırtıl
    { leftId: 256, rightId: 709 }, // itfaiye aracı vs atlet
];

// --------------------------------------------------------------------------
// 1. SOL / SAĞ (LeftRight)
// --------------------------------------------------------------------------

export const leftRightData: ConceptRound[] = directionPairs.flatMap((pair, index) => {
    const leftImage = findImage(pair.leftId);
    const rightImage = findImage(pair.rightId);

    const roundForLeft: ConceptRound = {
        id: (index * 2) + 1,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        options: [
            createOption(leftImage, true, 'left'),
            createOption(rightImage, false, 'right'),
        ]
    };

    const roundForRight: ConceptRound = {
        id: (index * 2) + 2,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        options: [
            createOption(leftImage, false, 'left'),
            createOption(rightImage, true, 'right'),
        ]
    };

    return [roundForLeft, roundForRight];
});

// --------------------------------------------------------------------------
// 2. ÜSTÜNDE / ALTINDA (OnUnder)
// --------------------------------------------------------------------------

export const onUnderData: ConceptRound[] = [
    // 1. Top - Masa
    { id: 1, question: "Masanın üstünde olan hangisi?", questionAudioKey: "q_on_table", activityType: ActivityType.OnUnder, options: [
        { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: true, audioKey: "top_masanin_ustunde", spokenText: "" },
        { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: false, audioKey: "top_masanin_altinda", spokenText: "" }
    ]},
    { id: 2, question: "Masanın altında olan hangisi?", questionAudioKey: "q_under_table", activityType: ActivityType.OnUnder, options: [
        { id: 20, word: "top", imageUrl: "/images/20.png", isCorrect: false, audioKey: "top_masanin_ustunde", spokenText: "" },
        { id: 21, word: "top", imageUrl: "/images/21.png", isCorrect: true, audioKey: "top_masanin_altinda", spokenText: "" }
    ]},
    // 2. Kedi - Sandalye
    { id: 3, question: "Sandalyenin üstünde olan hangisi?", questionAudioKey: "q_on_chair", activityType: ActivityType.OnUnder, options: [
        { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: true, audioKey: "kedi_sandalyenin_ustunde", spokenText: "" },
        { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: false, audioKey: "kedi_sandalyenin_altinda", spokenText: "" }
    ]},
    { id: 4, question: "Sandalyenin altında olan hangisi?", questionAudioKey: "q_under_chair", activityType: ActivityType.OnUnder, options: [
        { id: 160, word: "kedi", imageUrl: "/images/160.png", isCorrect: false, audioKey: "kedi_sandalyenin_ustunde", spokenText: "" },
        { id: 91, word: "kedi", imageUrl: "/images/91.png", isCorrect: true, audioKey: "kedi_sandalyenin_altinda", spokenText: "" }
    ]},
    // 3. Kiraz - Pasta
    { id: 5, question: "Pastanın üstünde olan hangisi?", questionAudioKey: "q_on_cake", activityType: ActivityType.OnUnder, options: [
        { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: true, audioKey: "kiraz_pastanin_ustunde", spokenText: "" },
        { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: false, audioKey: "kiraz_pastanin_altinda", spokenText: "" }
    ]},
    { id: 6, question: "Pastanın altında olan hangisi?", questionAudioKey: "q_under_cake", activityType: ActivityType.OnUnder, options: [
        { id: 486, word: "kiraz", imageUrl: "/images/486.png", isCorrect: false, audioKey: "kiraz_pastanin_ustunde", spokenText: "" },
        { id: 183, word: "kiraz", imageUrl: "/images/183.png", isCorrect: true, audioKey: "kiraz_pastanin_altinda", spokenText: "" }
    ]},
    // 4. Top - Merdiven
    { id: 7, question: "Merdivenin üstünde olan hangisi?", questionAudioKey: "q_on_stairs", activityType: ActivityType.OnUnder, options: [
        { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: true, audioKey: "top_merdivenin_ustunde", spokenText: "" },
        { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: false, audioKey: "top_merdivenin_altinda", spokenText: "" }
    ]},
    { id: 8, question: "Merdivenin altında olan hangisi?", questionAudioKey: "q_under_stairs", activityType: ActivityType.OnUnder, options: [
        { id: 172, word: "top", imageUrl: "/images/172.png", isCorrect: false, audioKey: "top_merdivenin_ustunde", spokenText: "" },
        { id: 173, word: "top", imageUrl: "/images/173.png", isCorrect: true, audioKey: "top_merdivenin_altinda", spokenText: "" }
    ]},
    // 5. Yastık - Yatak
    { id: 9, question: "Yatağın üstünde olan hangisi?", questionAudioKey: "q_on_bed", activityType: ActivityType.OnUnder, options: [
        { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: true, audioKey: "yastik_yatagin_ustunde", spokenText: "" },
        { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: false, audioKey: "yastik_yatagin_altinda", spokenText: "" }
    ]},
    { id: 10, question: "Yatağın altında olan hangisi?", questionAudioKey: "q_under_bed", activityType: ActivityType.OnUnder, options: [
        { id: 482, word: "yastık", imageUrl: "/images/482.png", isCorrect: false, audioKey: "yastik_yatagin_ustunde", spokenText: "" },
        { id: 478, word: "yastık", imageUrl: "/images/478.png", isCorrect: true, audioKey: "yastik_yatagin_altinda", spokenText: "" }
    ]},
    // 6. Şapka - Kafa
    { id: 11, question: "Kafanın üstünde olan hangisi?", questionAudioKey: "q_on_head", activityType: ActivityType.OnUnder, options: [
        { id: 499, word: "şapka", imageUrl: "/images/499.png", isCorrect: true, audioKey: "sapka_kafanin_ustunde", spokenText: "" },
        { id: 690, word: "şapka", imageUrl: "/images/690.png", isCorrect: false, audioKey: "sapka_kafanin_altinda", spokenText: "" }
    ]},
    // 7. Kuş - Bulut
    { id: 13, question: "Hangi kuş bulutun üstünde?", questionAudioKey: "q_bird_above_cloud", activityType: ActivityType.OnUnder, options: [
        { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: true, audioKey: "kus_bulutun_ustunde", spokenText: "" },
        { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: false, audioKey: "kus_bulutun_altinda", spokenText: "" }
    ]},
    { id: 14, question: "Hangi kuş bulutun altında?", questionAudioKey: "q_bird_below_cloud", activityType: ActivityType.OnUnder, options: [
        { id: 85, word: "kuş", imageUrl: "/images/85.png", isCorrect: false, audioKey: "kus_bulutun_ustunde", spokenText: "" },
        { id: 86, word: "kuş", imageUrl: "/images/86.png", isCorrect: true, audioKey: "kus_bulutun_altinda", spokenText: "" }
    ]},
    // 8. Kitap - Masa
    { id: 15, question: "Masanın üstünde olan hangisi?", questionAudioKey: "q_book_on_table", activityType: ActivityType.OnUnder, options: [
        { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: true, audioKey: "kitap_masanin_ustunde", spokenText: "" },
        { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: false, audioKey: "kitap_masanin_altinda", spokenText: "" }
    ]},
    { id: 16, question: "Masanın altında olan hangisi?", questionAudioKey: "q_book_under_table", activityType: ActivityType.OnUnder, options: [
        { id: 472, word: "kitap", imageUrl: "/images/472.png", isCorrect: false, audioKey: "kitap_masanin_ustunde", spokenText: "" },
        { id: 473, word: "kitap", imageUrl: "/images/473.png", isCorrect: true, audioKey: "kitap_masanin_altinda", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 3. YUKARIDA / AŞAĞIDA (BelowAbove)
// --------------------------------------------------------------------------

export const belowAboveData: ConceptRound[] = [
    // 1. Uçak vs Gemi
    { id: 1, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: true, audioKey: "ucak", spokenText: "" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: false, audioKey: "gemi", spokenText: "" }
    ]},
    { id: 2, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: false, audioKey: "ucak", spokenText: "" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: true, audioKey: "gemi", spokenText: "" }
    ]},
    // 2. Güneş vs Ağaçlar
    { id: 3, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: true, audioKey: "gunes", spokenText: "" },
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: false, audioKey: "agaclar", spokenText: "" }
    ]},
    { id: 4, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 237, word: "güneş", imageUrl: "/images/237.png", isCorrect: false, audioKey: "gunes", spokenText: "" },
        { id: 513, word: "ağaçlar", imageUrl: "/images/513.png", isCorrect: true, audioKey: "agaclar", spokenText: "" }
    ]},
    // 3. Uçurtma vs Ağaç
    { id: 5, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: true, audioKey: "ucurtma", spokenText: "" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "agac", spokenText: "" }
    ]},
    { id: 6, question: "Aşağıda olan hangisi?", questionAudioKey: "q_which_is_below", activityType: ActivityType.BelowAbove, options: [
        { id: 135, word: "uçurtma", imageUrl: "/images/135.png", isCorrect: false, audioKey: "ucurtma", spokenText: "" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: true, audioKey: "agac", spokenText: "" }
    ]},
    // 4. Ay vs Ağaç
    { id: 7, question: "Yukarıda olan hangisi?", questionAudioKey: "q_which_is_above", activityType: ActivityType.BelowAbove, options: [
        { id: 238, word: "ay", imageUrl: "/images/238.png", isCorrect: true, audioKey: "ay", spokenText: "" },
        { id: 104, word: "ağaç", imageUrl: "/images/104.png", isCorrect: false, audioKey: "agac", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 4. YAN YANA / KARŞILIKLI (BesideOpposite)
// --------------------------------------------------------------------------

export const besideOppositeData: ConceptRound[] = [
    // 1. Sandalyeler
    { id: 1, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: true, audioKey: "sandalyeler_yanyana", spokenText: "" },
        { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: false, audioKey: "sandalyeler_karsilikli", spokenText: "" }
    ]},
    { id: 2, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 96, word: "sandalyeler", imageUrl: "/images/96.png", isCorrect: false, audioKey: "sandalyeler_yanyana", spokenText: "" },
        { id: 97, word: "sandalyeler", imageUrl: "/images/97.png", isCorrect: true, audioKey: "sandalyeler_karsilikli", spokenText: "" }
    ]},
    // 2. Çocuklar
    { id: 3, question: "Yan yana duranlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: true, audioKey: "cocuklar_yanyana", spokenText: "" },
        { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: false, audioKey: "cocuklar_karsilikli", spokenText: "" }
    ]},
    { id: 4, question: "Karşılıklı duranlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 455, word: "çocuklar", imageUrl: "/images/455.png", isCorrect: false, audioKey: "cocuklar_yanyana", spokenText: "" },
        { id: 454, word: "çocuklar", imageUrl: "/images/454.png", isCorrect: true, audioKey: "cocuklar_karsilikli", spokenText: "" }
    ]},
    // 3. Satranç Taşları
    { id: 5, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: true, audioKey: "satranc_taslari_yanyana", spokenText: "" },
        { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: false, audioKey: "satranc_taslari_karsilikli", spokenText: "" }
    ]},
    { id: 6, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 511, word: "satranç taşları", imageUrl: "/images/511.png", isCorrect: false, audioKey: "satranc_taslari_yanyana", spokenText: "" },
        { id: 510, word: "satranç taşları", imageUrl: "/images/510.png", isCorrect: true, audioKey: "satranc_taslari_karsilikli", spokenText: "" }
    ]},
    // 4. Evler
    { id: 9, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: true, audioKey: "evler_yanyana", spokenText: "" },
        { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: false, audioKey: "evler_karsilikli", spokenText: "" }
    ]},
    { id: 10, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 515, word: "evler", imageUrl: "/images/515.png", isCorrect: false, audioKey: "evler_yanyana", spokenText: "" },
        { id: 514, word: "evler", imageUrl: "/images/514.png", isCorrect: true, audioKey: "evler_karsilikli", spokenText: "" }
    ]},
    // 5. Tuzluk ve Biberlik
    { id: 11, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik_yanyana", spokenText: "" },
        { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik_karsilikli", spokenText: "" }
    ]},
    { id: 12, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 626, word: "tuzluk ve biberlik", imageUrl: "/images/626.png", isCorrect: false, audioKey: "tuzluk_ve_biberlik_yanyana", spokenText: "" },
        { id: 625, word: "tuzluk ve biberlik", imageUrl: "/images/625.png", isCorrect: true, audioKey: "tuzluk_ve_biberlik_karsilikli", spokenText: "" }
    ]},
    // 6. Kediler
    { id: 13, question: "Yan yana duranlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: true, audioKey: "kediler_yanyana", spokenText: "" },
        { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: false, audioKey: "kediler_karsilikli", spokenText: "" }
    ]},
    { id: 14, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 628, word: "kediler", imageUrl: "/images/628.png", isCorrect: false, audioKey: "kediler_yanyana", spokenText: "" },
        { id: 627, word: "kediler", imageUrl: "/images/627.png", isCorrect: true, audioKey: "kediler_karsilikli", spokenText: "" }
    ]},
    // 7. Futbolcular
    { id: 15, question: "Yan yana olanlar hangisi?", questionAudioKey: "q_which_are_beside", activityType: ActivityType.BesideOpposite, options: [
        { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: true, audioKey: "futbolcular_yanyana", spokenText: "" },
        { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: false, audioKey: "futbolcular_karsilikli", spokenText: "" }
    ]},
    { id: 16, question: "Karşılıklı olanlar hangisi?", questionAudioKey: "q_which_are_opposite", activityType: ActivityType.BesideOpposite, options: [
        { id: 630, word: "futbolcular", imageUrl: "/images/630.png", isCorrect: false, audioKey: "futbolcular_yanyana", spokenText: "" },
        { id: 629, word: "futbolcular", imageUrl: "/images/629.png", isCorrect: true, audioKey: "futbolcular_karsilikli", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 5. ÖNÜNDE / ARKASINDA (InFrontOfBehind)
// --------------------------------------------------------------------------

export const inFrontOfBehindData: ConceptRound[] = [
    // 1. Köpek - Kulübe
    { id: 1, question: "Kulübenin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: true, audioKey: "kopek_kulubenin_onunde", spokenText: "" },
        { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: false, audioKey: "kopek_kulubenin_arkasinda", spokenText: "" }
    ]},
    { id: 2, question: "Kulübenin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 48, word: "köpek", imageUrl: "/images/48.png", isCorrect: false, audioKey: "kopek_kulubenin_onunde", spokenText: "" },
        { id: 49, word: "köpek", imageUrl: "/images/49.png", isCorrect: true, audioKey: "kopek_kulubenin_arkasinda", spokenText: "" }
    ]},
    // 2. Çocuk - Ağaç
    { id: 3, question: "Ağacın önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: true, audioKey: "cocuk_agacin_onunde", spokenText: "" },
        { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: false, audioKey: "cocuk_agacin_arkasinda", spokenText: "" }
    ]},
    { id: 4, question: "Ağacın arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 451, word: "çocuk", imageUrl: "/images/451.png", isCorrect: false, audioKey: "cocuk_agacin_onunde", spokenText: "" },
        { id: 450, word: "çocuk", imageUrl: "/images/450.png", isCorrect: true, audioKey: "cocuk_agacin_arkasinda", spokenText: "" }
    ]},
    // 3. Araba - Ev
    { id: 5, question: "Evin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: true, audioKey: "araba_evin_onunde", spokenText: "" },
        { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: false, audioKey: "araba_evin_arkasinda", spokenText: "" }
    ]},
    { id: 6, question: "Evin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 452, word: "araba", imageUrl: "/images/452.png", isCorrect: false, audioKey: "araba_evin_onunde", spokenText: "" },
        { id: 453, word: "araba", imageUrl: "/images/453.png", isCorrect: true, audioKey: "araba_evin_arkasinda", spokenText: "" }
    ]},
    // 4. Çocuk - Sandalye
    { id: 7, question: "Sandalyenin önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: true, audioKey: "cocuk_sandalyenin_onunde", spokenText: "" },
        { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: false, audioKey: "cocuk_sandalyenin_arkasinda", spokenText: "" }
    ]},
    { id: 8, question: "Sandalyenin arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 547, word: "çocuk", imageUrl: "/images/547.png", isCorrect: false, audioKey: "cocuk_sandalyenin_onunde", spokenText: "" },
        { id: 545, word: "çocuk", imageUrl: "/images/545.png", isCorrect: true, audioKey: "cocuk_sandalyenin_arkasinda", spokenText: "" }
    ]},
    // 5. Adam - Kapı
    { id: 9, question: "Kapının önündeki hangisi?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: true, audioKey: "adam_kapinin_onunde", spokenText: "" },
        { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: false, audioKey: "adam_kapinin_arkasinda", spokenText: "" }
    ]},
    { id: 10, question: "Kapının arkasındaki hangisi?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 485, word: "adam", imageUrl: "/images/485.png", isCorrect: false, audioKey: "adam_kapinin_onunde", spokenText: "" },
        { id: 484, word: "adam", imageUrl: "/images/484.png", isCorrect: true, audioKey: "adam_kapinin_arkasinda", spokenText: "" }
    ]},
    // 6. Kalkan - Asker
    { id: 11, question: "Hangi kalkan askerin arkasında?", questionAudioKey: "q_which_is_behind", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: true, audioKey: "kalkan_askerin_arkasinda", spokenText: "" },
        { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: false, audioKey: "kalkan_askerin_onunde", spokenText: "" }
    ]},
    { id: 12, question: "Hangi kalkan askerin önünde?", questionAudioKey: "q_which_is_in_front", activityType: ActivityType.InFrontOfBehind, options: [
        { id: 717, word: "kalkan", imageUrl: "/images/717.png", isCorrect: false, audioKey: "kalkan_askerin_arkasinda", spokenText: "" },
        { id: 716, word: "kalkan", imageUrl: "/images/716.png", isCorrect: true, audioKey: "kalkan_askerin_onunde", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 6. İÇİNDE / DIŞINDA (InsideOutside)
// --------------------------------------------------------------------------

export const insideOutsideData: ConceptRound[] = [
    // 1. Köpek - Kulübe
    { id: 1, question: "Kulübenin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: true, audioKey: "kopek_kulubenin_icinde", spokenText: "" },
        { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: false, audioKey: "kopek_kulubenin_disinda", spokenText: "" }
    ]},
    { id: 2, question: "Kulübenin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 46, word: "köpek", imageUrl: "/images/46.png", isCorrect: false, audioKey: "kopek_kulubenin_icinde", spokenText: "" },
        { id: 47, word: "köpek", imageUrl: "/images/47.png", isCorrect: true, audioKey: "kopek_kulubenin_disinda", spokenText: "" }
    ]},
    // 2. Öğrenciler - Otobüs
    { id: 3, question: "Otobüsün içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: true, audioKey: "okul_otobusu_icinde", spokenText: "" },
        { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: false, audioKey: "ogrenciler_disinda", spokenText: "" }
    ]},
    { id: 4, question: "Otobüsün dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 194, word: "okul otobüsü", imageUrl: "/images/194.png", isCorrect: false, audioKey: "okul_otobusu_icinde", spokenText: "" },
        { id: 193, word: "öğrenciler", imageUrl: "/images/193.png", isCorrect: true, audioKey: "ogrenciler_disinda", spokenText: "" }
    ]},
    // 3. Elmalar - Sepet
    { id: 5, question: "Sepetin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: true, audioKey: "elmalar_sepette", spokenText: "" },
        { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: false, audioKey: "elmalar_disarda", spokenText: "" }
    ]},
    { id: 6, question: "Sepetin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 474, word: "elmalar", imageUrl: "/images/474.png", isCorrect: false, audioKey: "elmalar_sepette", spokenText: "" },
        { id: 475, word: "elmalar", imageUrl: "/images/475.png", isCorrect: true, audioKey: "elmalar_disarda", spokenText: "" }
    ]},
    // 4. Kalemler - Kalemlik
    { id: 7, question: "Kalemliğin içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik_icinde", spokenText: "" },
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik_disinda", spokenText: "" }
    ]},
    { id: 8, question: "Kalemliğin dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik_icinde", spokenText: "" },
        { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik_disinda", spokenText: "" }
    ]},
    // 5. İnsan - Çadır
    { id: 9, question: "Çadırın içindeki hangisi?", questionAudioKey: "q_which_is_inside", activityType: ActivityType.InsideOutside, options: [
        { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: true, audioKey: "insan_cadir_icinde", spokenText: "" },
        { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: false, audioKey: "insan_cadir_disinda", spokenText: "" }
    ]},
    { id: 10, question: "Çadırın dışındaki hangisi?", questionAudioKey: "q_which_is_outside", activityType: ActivityType.InsideOutside, options: [
        { id: 394, word: "insan", imageUrl: "/images/394.png", isCorrect: false, audioKey: "insan_cadir_icinde", spokenText: "" },
        { id: 395, word: "insan", imageUrl: "/images/395.png", isCorrect: true, audioKey: "insan_cadir_disinda", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 7. ARASINDA (Between)
// --------------------------------------------------------------------------

export const betweenData: ConceptRound[] = [
    { id: 1, question: "Blokların arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 22, word: "top", imageUrl: "/images/22.png", isCorrect: true, audioKey: "top_arasinda", spokenText: "" },
        { id: 632, word: "top", imageUrl: "/images/632.png", isCorrect: false, audioKey: "top_yanda", spokenText: "" }
    ]},
    { id: 2, question: "Binaların arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 456, word: "araba", imageUrl: "/images/456.png", isCorrect: true, audioKey: "araba_arasinda", spokenText: "" },
        { id: 457, word: "araba", imageUrl: "/images/457.png", isCorrect: false, audioKey: "araba_yanda", spokenText: "" }
    ]},
    { id: 3, question: "Annesiyle babasının arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 476, word: "çocuk", imageUrl: "/images/476.png", isCorrect: true, audioKey: "cocuk_arasinda", spokenText: "" },
        { id: 477, word: "çocuk", imageUrl: "/images/477.png", isCorrect: false, audioKey: "cocuk_yanda", spokenText: "" }
    ]},
    { id: 4, question: "Ekmeklerin arasında olan hangisi?", questionAudioKey: "q_which_is_between", activityType: ActivityType.Between, options: [
        { id: 623, word: "sandviç", imageUrl: "/images/623.png", isCorrect: true, audioKey: "sandvic_arasinda", spokenText: "" },
        { id: 624, word: "sandviç malzemeleri", imageUrl: "/images/624.png", isCorrect: false, audioKey: "sandvic_malzemeleri_yanda", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 8. YAKIN / UZAK (NearFar)
// --------------------------------------------------------------------------

export const nearFarData: ConceptRound[] = [
    // 1. Ev
    { id: 1, question: "Hangi ev daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: true, audioKey: "ev_yakin", spokenText: "" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: false, audioKey: "ev_uzak", spokenText: "" }
    ]},
    { id: 2, question: "Hangi ev daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 174, word: "ev", imageUrl: "/images/174.png", isCorrect: false, audioKey: "ev_yakin", spokenText: "" },
        { id: 175, word: "ev", imageUrl: "/images/175.png", isCorrect: true, audioKey: "ev_uzak", spokenText: "" }
    ]},
    // 2. Uçak
    { id: 3, question: "Hangi uçak daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 616, word: "uçak", imageUrl: "/images/616.png", isCorrect: true, audioKey: "ucak_yakin", spokenText: "" },
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: false, audioKey: "ucak_uzak", spokenText: "" }
    ]},
    { id: 4, question: "Hangi uçak daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 616, word: "uçak", imageUrl: "/images/616.png", isCorrect: false, audioKey: "ucak_yakin", spokenText: "" },
        { id: 615, word: "uçak", imageUrl: "/images/615.png", isCorrect: true, audioKey: "ucak_uzak", spokenText: "" }
    ]},
    // 3. Kuşlar
    { id: 5, question: "Hangi kuşlar daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 617, word: "kuşlar", imageUrl: "/images/617.png", isCorrect: true, audioKey: "kuslar_yakin", spokenText: "" },
        { id: 618, word: "kuşlar", imageUrl: "/images/618.png", isCorrect: false, audioKey: "kuslar_uzak", spokenText: "" }
    ]},
    { id: 6, question: "Hangi kuşlar daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 617, word: "kuşlar", imageUrl: "/images/617.png", isCorrect: false, audioKey: "kuslar_yakin", spokenText: "" },
        { id: 618, word: "kuşlar", imageUrl: "/images/618.png", isCorrect: true, audioKey: "kuslar_uzak", spokenText: "" }
    ]},
    // 4. Ay
    { id: 7, question: "Hangi ay daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 619, word: "ay", imageUrl: "/images/619.png", isCorrect: true, audioKey: "ay_yakin", spokenText: "" },
        { id: 620, word: "ay", imageUrl: "/images/620.png", isCorrect: false, audioKey: "ay_uzak", spokenText: "" }
    ]},
    { id: 8, question: "Hangi ay daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 619, word: "ay", imageUrl: "/images/619.png", isCorrect: false, audioKey: "ay_yakin", spokenText: "" },
        { id: 620, word: "ay", imageUrl: "/images/620.png", isCorrect: true, audioKey: "ay_uzak", spokenText: "" }
    ]},
    // 5. Gemi
    { id: 9, question: "Hangi gemi daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: true, audioKey: "gemi_yakin", spokenText: "" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: false, audioKey: "gemi_uzak", spokenText: "" }
    ]},
    { id: 10, question: "Hangi gemi daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 621, word: "gemi", imageUrl: "/images/621.png", isCorrect: false, audioKey: "gemi_yakin", spokenText: "" },
        { id: 622, word: "gemi", imageUrl: "/images/622.png", isCorrect: true, audioKey: "gemi_uzak", spokenText: "" }
    ]},
    // 6. Adam
    { id: 11, question: "Hangi adam daha yakın?", questionAudioKey: "q_which_is_near", activityType: ActivityType.NearFar, options: [
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: true, audioKey: "adam_yakin", spokenText: "" },
        { id: 719, word: "adam", imageUrl: "/images/719.png", isCorrect: false, audioKey: "adam_uzak", spokenText: "" }
    ]},
    { id: 12, question: "Hangi adam daha uzak?", questionAudioKey: "q_which_is_far", activityType: ActivityType.NearFar, options: [
        { id: 718, word: "adam", imageUrl: "/images/718.png", isCorrect: false, audioKey: "adam_yakin", spokenText: "" },
        { id: 719, word: "adam", imageUrl: "/images/719.png", isCorrect: true, audioKey: "adam_uzak", spokenText: "" }
    ]},
];

// --------------------------------------------------------------------------
// 9. YÜKSEK / ALÇAK (HighLow)
// --------------------------------------------------------------------------

export const highLowData: ConceptRound[] = [
    // 1. Dağ vs Tepe
    { id: 1, question: "Hangisi daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: true, audioKey: "dag", spokenText: "" },
        { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: false, audioKey: "tepe", spokenText: "" }
    ]},
    { id: 2, question: "Hangisi daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 195, word: "dağ", imageUrl: "/images/195.png", isCorrect: false, audioKey: "dag", spokenText: "" },
        { id: 196, word: "tepe", imageUrl: "/images/196.png", isCorrect: true, audioKey: "tepe", spokenText: "" }
    ]},
    // 2. Trambolin (Çocuk) vs Tabure
    { id: 3, question: "Hangisi daha yüksekte?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: true, audioKey: "cocuk_trambolinde_yuksek", spokenText: "" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: false, audioKey: "tabure_alcak", spokenText: "" }
    ]},
    { id: 4, question: "Hangisi daha alçakta?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 391, word: "çocuk", imageUrl: "/images/391.png", isCorrect: false, audioKey: "cocuk_trambolinde_yuksek", spokenText: "" },
        { id: 495, word: "tabure", imageUrl: "/images/495.png", isCorrect: true, audioKey: "tabure_alcak", spokenText: "" }
    ]},
    // 3. Salıncak (Çocuk Tepede vs Salıncak Altta)
    { id: 5, question: "Hangisi daha yüksekte?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: true, audioKey: "cocuk_salincakta_yuksek", spokenText: "" },
        { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: false, audioKey: "salincak_alcak", spokenText: "" }
    ]},
    { id: 6, question: "Hangisi daha alçakta?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 392, word: "çocuk", imageUrl: "/images/392.png", isCorrect: false, audioKey: "cocuk_salincakta_yuksek", spokenText: "" },
        { id: 393, word: "salıncak", imageUrl: "/images/393.png", isCorrect: true, audioKey: "salincak_alcak", spokenText: "" }
    ]},
    // 4. Kitaplar (Raf) - Görsel: Adam yukarı koyuyor vs Sehpadaki kitaplar
    { id: 7, question: "Hangi kitaplar yukarıda?", questionAudioKey: "q_books_high", activityType: ActivityType.HighLow, options: [
        { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: true, audioKey: "kitaplar_raf_yuksek", spokenText: "" },
        { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: false, audioKey: "kitaplar_sehpa_alcak", spokenText: "" }
    ]},
    { id: 8, question: "Hangi kitaplar aşağıda?", questionAudioKey: "q_books_low", activityType: ActivityType.HighLow, options: [
        { id: 611, word: "kitaplar", imageUrl: "/images/611.png", isCorrect: false, audioKey: "kitaplar_raf_yuksek", spokenText: "" },
        { id: 610, word: "kitaplar", imageUrl: "/images/610.png", isCorrect: true, audioKey: "kitaplar_sehpa_alcak", spokenText: "" }
    ]},
    // 5. Gökdelen vs Ev
    { id: 9, question: "Hangi bina daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: true, audioKey: "gokdelen_yuksek", spokenText: "" },
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: false, audioKey: "ev_alcak", spokenText: "" }
    ]},
    { id: 10, question: "Hangi bina daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 612, word: "gökdelen", imageUrl: "/images/612.png", isCorrect: false, audioKey: "gokdelen_yuksek", spokenText: "" },
        { id: 571, word: "ev", imageUrl: "/images/571.png", isCorrect: true, audioKey: "ev_alcak", spokenText: "" }
    ]},
    // 6. Kitaplık (Uzun vs Kısa)
    { id: 11, question: "Hangi dolap daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplik_yuksek", spokenText: "" },
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplik_alcak", spokenText: "" }
    ]},
    { id: 12, question: "Hangi dolap daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplik_yuksek", spokenText: "" },
        { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplik_alcak", spokenText: "" }
    ]},
    // 7. Tümsek vs Çukur
    { id: 13, question: "Hangi yer daha yüksek?", questionAudioKey: "q_which_is_higher", activityType: ActivityType.HighLow, options: [
        { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: true, audioKey: "tumsek_yuksek", spokenText: "" },
        { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: false, audioKey: "cukur_alcak", spokenText: "" }
    ]},
    { id: 14, question: "Hangi yer daha alçak?", questionAudioKey: "q_which_is_lower", activityType: ActivityType.HighLow, options: [
        { id: 729, word: "tümsek", imageUrl: "/images/729.png", isCorrect: false, audioKey: "tumsek_yuksek", spokenText: "" },
        { id: 728, word: "çukur", imageUrl: "/images/728.png", isCorrect: true, audioKey: "cukur_alcak", spokenText: "" }
    ]},
];