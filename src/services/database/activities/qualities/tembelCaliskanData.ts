import { ConceptRound, ActivityType } from '../../../../types';

export const tembelCaliskanData: ConceptRound[] = [
    // 1. Ağustos Böceği vs Karınca
    { id: 1, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy_person", activityType: ActivityType.TembelCaliskan, options: [
        { id: 348, word: "ağustos böceği", imageUrl: "/images/348.png", isCorrect: true, audioKey: "ağustos_böceği", spokenText: "tembel ağustos böceği" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: false, audioKey: "karınca", spokenText: "çalışkan karınca" }
    ]},
    { id: 2, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 348, word: "ağustos böceği", imageUrl: "/images/348.png", isCorrect: false, audioKey: "ağustos_böceği", spokenText: "tembel ağustos böceği" },
        { id: 349, word: "karınca", imageUrl: "/images/349.png", isCorrect: true, audioKey: "karınca", spokenText: "çalışkan karınca" }
    ]},

    // 2. Tembel Hayvan vs Kunduz
    { id: 3, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 684, word: "tembel hayvan", imageUrl: "/images/684.png", isCorrect: true, audioKey: "tembel_hayvan", spokenText: "tembel hayvan" },
        { id: 680, word: "kunduz", imageUrl: "/images/680.png", isCorrect: false, audioKey: "kunduz", spokenText: "çalışkan kunduz" }
    ]},
    { id: 4, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 684, word: "tembel hayvan", imageUrl: "/images/684.png", isCorrect: false, audioKey: "tembel_hayvan", spokenText: "tembel hayvan" },
        { id: 680, word: "kunduz", imageUrl: "/images/680.png", isCorrect: true, audioKey: "kunduz", spokenText: "çalışkan kunduz" }
    ]},

    // 3. Öğrenci (Tembel vs Çalışkan)
    { id: 5, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 676, word: "öğrenci", imageUrl: "/images/676.png", isCorrect: true, audioKey: "öğrenci", spokenText: "tembel öğrenci" },
        { id: 677, word: "öğrenci", imageUrl: "/images/677.png", isCorrect: false, audioKey: "öğrenci", spokenText: "çalışkan öğrenci" }
    ]},
    { id: 6, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 676, word: "öğrenci", imageUrl: "/images/676.png", isCorrect: false, audioKey: "öğrenci", spokenText: "tembel öğrenci" },
        { id: 677, word: "öğrenci", imageUrl: "/images/677.png", isCorrect: true, audioKey: "öğrenci", spokenText: "çalışkan öğrenci" }
    ]},

    // 4. Panda vs Arı
    { id: 7, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 320, word: "panda", imageUrl: "/images/320.png", isCorrect: true, audioKey: "panda", spokenText: "tembel panda" },
        { id: 273, word: "arı", imageUrl: "/images/273.png", isCorrect: false, audioKey: "arı", spokenText: "çalışkan arı" }
    ]},
    { id: 8, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 320, word: "panda", imageUrl: "/images/320.png", isCorrect: false, audioKey: "panda", spokenText: "tembel panda" },
        { id: 273, word: "arı", imageUrl: "/images/273.png", isCorrect: true, audioKey: "arı", spokenText: "çalışkan arı" }
    ]},

    // 5. Kaplumbağa vs Horoz
    { id: 9, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 42, word: "kaplumbağa", imageUrl: "/images/42.gif", isCorrect: true, audioKey: "kaplumbağa", spokenText: "tembel kaplumbağa" }, // Görsel .gif olabilir
        { id: 102, word: "horoz", imageUrl: "/images/102.png", isCorrect: false, audioKey: "horoz", spokenText: "çalışkan horoz" }
    ]},
    { id: 10, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 42, word: "kaplumbağa", imageUrl: "/images/42.gif", isCorrect: false, audioKey: "kaplumbağa", spokenText: "tembel kaplumbağa" }, // Görsel .gif olabilir
        { id: 102, word: "horoz", imageUrl: "/images/102.png", isCorrect: true, audioKey: "horoz", spokenText: "çalışkan horoz" }
    ]},

    // 6. Tembel Adam vs Atlet
    { id: 11, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 683, word: "adam", imageUrl: "/images/683.png", isCorrect: true, audioKey: "adam", spokenText: "tembel adam" },
        { id: 709, word: "atlet", imageUrl: "/images/709.png", isCorrect: false, audioKey: "atlet", spokenText: "çalışkan atlet" }
    ]},
    { id: 12, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 683, word: "adam", imageUrl: "/images/683.png", isCorrect: false, audioKey: "adam", spokenText: "tembel adam" },
        { id: 709, word: "atlet", imageUrl: "/images/709.png", isCorrect: true, audioKey: "atlet", spokenText: "çalışkan atlet" }
    ]},

    // 7. Koala vs At
    { id: 13, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 681, word: "koala", imageUrl: "/images/681.png", isCorrect: true, audioKey: "koala", spokenText: "tembel koala" },
        { id: 290, word: "at", imageUrl: "/images/290.png", isCorrect: false, audioKey: "at", spokenText: "çalışkan at" }
    ]},
    { id: 14, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 681, word: "koala", imageUrl: "/images/681.png", isCorrect: false, audioKey: "koala", spokenText: "tembel koala" },
        { id: 290, word: "at", imageUrl: "/images/290.png", isCorrect: true, audioKey: "at", spokenText: "çalışkan at" }
    ]},

    // 8. Uykulu Çocuk vs Çiftçi
    { id: 15, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 504, word: "çocuk", imageUrl: "/images/504.png", isCorrect: true, audioKey: "çocuk", spokenText: "uykulu çocuk" },
        { id: 388, word: "çiftçi", imageUrl: "/images/388.png", isCorrect: false, audioKey: "çiftçi", spokenText: "çalışkan çiftçi" } // ID 388 kullanıldı
    ]},
    { id: 16, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 504, word: "çocuk", imageUrl: "/images/504.png", isCorrect: false, audioKey: "çocuk", spokenText: "uykulu çocuk" },
        { id: 388, word: "çiftçi", imageUrl: "/images/388.png", isCorrect: true, audioKey: "çiftçi", spokenText: "çalışkan çiftçi" } // ID 388 kullanıldı
    ]},

    // 9. Tembel Kedi vs Çalışkan Köpek
    { id: 17, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 675, word: "kedi", imageUrl: "/images/675.png", isCorrect: true, audioKey: "kedi", spokenText: "tembel kedi" },
        { id: 682, word: "köpek", imageUrl: "/images/682.png", isCorrect: false, audioKey: "köpek", spokenText: "çalışkan köpek" }
    ]},
    { id: 18, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 675, word: "kedi", imageUrl: "/images/675.png", isCorrect: false, audioKey: "kedi", spokenText: "tembel kedi" },
        { id: 682, word: "köpek", imageUrl: "/images/682.png", isCorrect: true, audioKey: "köpek", spokenText: "çalışkan köpek" }
    ]},

    // 10. Maymun vs Kunduz
    { id: 19, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: true, audioKey: "maymun", spokenText: "tembel maymun" },
        { id: 680, word: "kunduz", imageUrl: "/images/680.png", isCorrect: false, audioKey: "kunduz", spokenText: "çalışkan kunduz" }
    ]},
    { id: 20, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 753, word: "maymun", imageUrl: "/images/753.png", isCorrect: false, audioKey: "maymun", spokenText: "tembel maymun" },
        { id: 680, word: "kunduz", imageUrl: "/images/680.png", isCorrect: true, audioKey: "kunduz", spokenText: "çalışkan kunduz" }
    ]},
    
    // --- YENİ EKLENEN SORU ---
    // 11. Tembel İşçi vs Çalışkan İşçi
    { id: 21, question: "Tembel olan hangisi?", questionAudioKey: "q_which_is_lazy", activityType: ActivityType.TembelCaliskan, options: [
        { id: 678, word: "işçi", imageUrl: "/images/678.png", isCorrect: true, audioKey: "işçi", spokenText: "tembel işçi" },
        { id: 679, word: "işçi", imageUrl: "/images/679.png", isCorrect: false, audioKey: "işçi", spokenText: "çalışkan işçi" }
    ]},
    { id: 22, question: "Çalışkan olan hangisi?", questionAudioKey: "q_which_is_hardworking", activityType: ActivityType.TembelCaliskan, options: [
        { id: 678, word: "işçi", imageUrl: "/images/678.png", isCorrect: false, audioKey: "işçi", spokenText: "tembel işçi" },
        { id: 679, word: "işçi", imageUrl: "/images/679.png", isCorrect: true, audioKey: "işçi", spokenText: "çalışkan işçi" }
    ]},
];