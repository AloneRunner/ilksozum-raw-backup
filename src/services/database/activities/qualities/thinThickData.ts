import { ConceptRound, ActivityType } from '../../../../types.ts';

export const thinThickData: ConceptRound[] = [
    // 1. Kitap
    { id: 1, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: true, audioKey: "kitap", spokenText: "kalın kitap" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: false, audioKey: "kitap", spokenText: "ince kitap" }
    ]},
    { id: 2, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 36, word: "kitap", imageUrl: "/images/36.png", isCorrect: false, audioKey: "kitap", spokenText: "kalın kitap" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "ince kitap" }
    ]},

    // 2. Kalem (ID'ler Düzeltildi)
    { id: 3, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: true, audioKey: "kalem", spokenText: "kalın kalem" }, 
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: false, audioKey: "kalem", spokenText: "ince kalem" } 
    ]},
    { id: 4, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 121, word: "kalem", imageUrl: "/images/121.png", isCorrect: false, audioKey: "kalem", spokenText: "kalın kalem" }, 
        { id: 122, word: "kalem", imageUrl: "/images/122.png", isCorrect: true, audioKey: "kalem", spokenText: "ince kalem" } 
    ]},

    // 3. Fırça
    { id: 5, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: true, audioKey: "fırça", spokenText: "kalın fırça" },
        { id: 467, word: "fırça", imageUrl: "/images/467.png", isCorrect: false, audioKey: "fırça", spokenText: "ince fırça" }
    ]},
    { id: 6, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 539, word: "fırça", imageUrl: "/images/539.png", isCorrect: false, audioKey: "fırça", spokenText: "kalın fırça" },
        { id: 467, word: "fırça", imageUrl: "/images/467.png", isCorrect: true, audioKey: "fırça", spokenText: "ince fırça" }
    ]},

    // 4. Halat vs İp
    { id: 7, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 223, word: "halat", imageUrl: "/images/223.png", isCorrect: true, audioKey: "halat", spokenText: "kalın halat" },
        { id: 224, word: "ip", imageUrl: "/images/224.png", isCorrect: false, audioKey: "ip", spokenText: "ince ip" }
    ]},
    { id: 8, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 223, word: "halat", imageUrl: "/images/223.png", isCorrect: false, audioKey: "halat", spokenText: "kalın halat" },
        { id: 224, word: "ip", imageUrl: "/images/224.png", isCorrect: true, audioKey: "ip", spokenText: "ince ip" }
    ]},

    // 5. Ağaç Gövdesi vs Dal
    { id: 9, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: true, audioKey: "ağaç_gövdesi", spokenText: "kalın ağaç gövdesi" },
        { id: 536, word: "dal", imageUrl: "/images/536.png", isCorrect: false, audioKey: "dal", spokenText: "ince dal" }
    ]},
    { id: 10, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: false, audioKey: "ağaç_gövdesi", spokenText: "kalın ağaç gövdesi" },
        { id: 536, word: "dal", imageUrl: "/images/536.png", isCorrect: true, audioKey: "dal", spokenText: "ince dal" }
    ]},

    // 6. Havlu vs Peçete (ID'leri kontrol et!)
    { id: 11, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 410, word: "havlu", imageUrl: "/images/410.png", isCorrect: true, audioKey: "havlu", spokenText: "kalın havlu" }, // Potansiyel ID hatası? Görsel küp.
        { id: 409, word: "peçete", imageUrl: "/images/409.png", isCorrect: false, audioKey: "peçete", spokenText: "ince peçete" } // Potansiyel ID hatası? Görsel piramit.
    ]},
    { id: 12, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 410, word: "havlu", imageUrl: "/images/410.png", isCorrect: false, audioKey: "havlu", spokenText: "kalın havlu" },
        { id: 409, word: "peçete", imageUrl: "/images/409.png", isCorrect: true, audioKey: "peçete", spokenText: "ince peçete" }
    ]},

    // 7. Vida vs Çivi
    { id: 13, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 53, word: "vida", imageUrl: "/images/53.png", isCorrect: true, audioKey: "vida", spokenText: "kalın vida" },
        { id: 306, word: "çivi", imageUrl: "/images/306.png", isCorrect: false, audioKey: "çivi", spokenText: "ince çivi" }
    ]},
    { id: 14, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 53, word: "vida", imageUrl: "/images/53.png", isCorrect: false, audioKey: "vida", spokenText: "kalın vida" },
        { id: 306, word: "çivi", imageUrl: "/images/306.png", isCorrect: true, audioKey: "çivi", spokenText: "ince çivi" }
    ]},

    // 8. Ağaç Gövdesi vs Roka
    { id: 15, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: true, audioKey: "ağaç_gövdesi", spokenText: "kalın ağaç gövdesi" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: false, audioKey: "roka", spokenText: "ince roka" }
    ]},
    { id: 16, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 537, word: "ağaç gövdesi", imageUrl: "/images/537.png", isCorrect: false, audioKey: "ağaç_gövdesi", spokenText: "kalın ağaç gövdesi" },
        { id: 704, word: "roka", imageUrl: "/images/704.png", isCorrect: true, audioKey: "roka", spokenText: "ince roka" }
    ]},

    // 9. Ansiklopedi vs Kitap
    { id: 17, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: true, audioKey: "ansiklopedi", spokenText: "kalın ansiklopedi" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: false, audioKey: "kitap", spokenText: "ince kitap" }
    ]},
    { id: 18, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 554, word: "ansiklopedi", imageUrl: "/images/554.png", isCorrect: false, audioKey: "ansiklopedi", spokenText: "kalın ansiklopedi" },
        { id: 37, word: "kitap", imageUrl: "/images/37.png", isCorrect: true, audioKey: "kitap", spokenText: "ince kitap" }
    ]},

    // 10. Davul Çubuğu vs İğne
    { id: 19, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: true, audioKey: "davul_çubuğu", spokenText: "kalın davul çubuğu" },
        { id: 528, word: "iğne", imageUrl: "/images/528.png", isCorrect: false, audioKey: "iğne", spokenText: "ince iğne" }
    ]},
    { id: 20, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 592, word: "davul çubuğu", imageUrl: "/images/592.png", isCorrect: false, audioKey: "davul_çubuğu", spokenText: "kalın davul çubuğu" },
        { id: 528, word: "iğne", imageUrl: "/images/528.png", isCorrect: true, audioKey: "iğne", spokenText: "ince iğne" }
    ]},

    // 11. Dal
    { id: 21, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 886, word: "dal", imageUrl: "/images/886.png", isCorrect: true, audioKey: "dal", spokenText: "kalın dal" },
        { id: 885, word: "dal", imageUrl: "/images/885.png", isCorrect: false, audioKey: "dal", spokenText: "ince dal" }
    ]},
    { id: 22, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 886, word: "dal", imageUrl: "/images/886.png", isCorrect: false, audioKey: "dal", spokenText: "kalın dal" },
        { id: 885, word: "dal", imageUrl: "/images/885.png", isCorrect: true, audioKey: "dal", spokenText: "ince dal" }
    ]},

    // --- YENİ EKLENEN SORU ---
    // 12. Kurdele
    { id: 23, question: "Kalın olan hangisi?", questionAudioKey: "q_which_is_thick", activityType: ActivityType.ThinThick, options: [
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: true, audioKey: "kurdele", spokenText: "kalın kurdele" },
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: false, audioKey: "kurdele", spokenText: "ince kurdele" }
    ]},
    { id: 24, question: "İnce olan hangisi?", questionAudioKey: "q_which_is_thin", activityType: ActivityType.ThinThick, options: [
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: false, audioKey: "kurdele", spokenText: "kalın kurdele" },
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: true, audioKey: "kurdele", spokenText: "ince kurdele" }
    ]},
];