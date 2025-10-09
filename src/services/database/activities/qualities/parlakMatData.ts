import { ConceptRound, ActivityType } from '../../../../types';

export const parlakMatData: ConceptRound[] = [
    // Parlak Yılbaşı Süsü (155) vs Mat Kırmızı Top (156)
    { id: 1, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 155, word: "yılbaşı süsü", imageUrl: "/images/155.png", isCorrect: true, audioKey: "yılbaşı_süsü", spokenText: "parlak süs" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "mat top" }
    ]},
    { id: 2, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 155, word: "yılbaşı süsü", imageUrl: "/images/155.png", isCorrect: false, audioKey: "yılbaşı_süsü", spokenText: "parlak süs" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "mat top" }
    ]},
    // Parlak Elmas (586) vs Mat Taş (347)
    { id: 3, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: true, audioKey: "elmas", spokenText: "parlak elmas" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: false, audioKey: "taş", spokenText: "mat taş" }
    ]},
    { id: 4, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 586, word: "elmas", imageUrl: "/images/586.png", isCorrect: false, audioKey: "elmas", spokenText: "parlak elmas" },
        { id: 347, word: "taş", imageUrl: "/images/347.png", isCorrect: true, audioKey: "taş", spokenText: "mat taş" }
    ]},
    // Parlak Yüzük (345) vs Mat Lastik (670)
    { id: 5, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 345, word: "yüzük", imageUrl: "/images/345.png", isCorrect: true, audioKey: "yüzük", spokenText: "parlak yüzük" },
        { id: 670, word: "araba lastiği", imageUrl: "/images/670.png", isCorrect: false, audioKey: "araba_lastiği", spokenText: "mat lastik" }
    ]},
    { id: 6, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 345, word: "yüzük", imageUrl: "/images/345.png", isCorrect: false, audioKey: "yüzük", spokenText: "parlak yüzük" },
        { id: 670, word: "araba lastiği", imageUrl: "/images/670.png", isCorrect: true, audioKey: "araba_lastiği", spokenText: "mat lastik" }
    ]},
    // Parlak Ayna (148) vs Mat Tahta (669)
    { id: 7, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 148, word: "ayna", imageUrl: "/images/148.png", isCorrect: true, audioKey: "ayna", spokenText: "parlak ayna" },
        { id: 669, word: "tahta", imageUrl: "/images/669.png", isCorrect: false, audioKey: "tahta", spokenText: "mat tahta" }
    ]},
    { id: 8, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 148, word: "ayna", imageUrl: "/images/148.png", isCorrect: false, audioKey: "ayna", spokenText: "parlak ayna" },
        { id: 669, word: "tahta", imageUrl: "/images/669.png", isCorrect: true, audioKey: "tahta", spokenText: "mat tahta" }
    ]},
    // Parlak Disko Topu (673) vs Mat Yün Yumağı (587)
    { id: 9, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 673, word: "disko topu", imageUrl: "/images/673.png", isCorrect: true, audioKey: "disko_topu", spokenText: "parlak disko topu" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: false, audioKey: "yün", spokenText: "mat yün" }
    ]},
    { id: 10, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 673, word: "disko topu", imageUrl: "/images/673.png", isCorrect: false, audioKey: "disko_topu", spokenText: "parlak disko topu" },
        { id: 587, word: "yün", imageUrl: "/images/587.png", isCorrect: true, audioKey: "yün", spokenText: "mat yün" }
    ]},
    // Parlak Tencere (671) vs Mat Toprak Saksı (432)
    { id: 11, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "parlak tencere" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksı", spokenText: "mat saksı" }
    ]},
    { id: 12, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "parlak tencere" },
        { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksı", spokenText: "mat saksı" }
    ]},
    // Parlak Ayakkabı (672) vs Mat Ayakkabı (60)
    { id: 13, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 672, word: "ayakkabı", imageUrl: "/images/672.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "parlak ayakkabı" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "mat ayakkabı" }
    ]},
    { id: 14, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 672, word: "ayakkabı", imageUrl: "/images/672.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "parlak ayakkabı" },
        { id: 60, word: "ayakkabı", imageUrl: "/images/60.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "mat ayakkabı" }
    ]},
    // Parlak Jeton (33) vs Mat Silgi (535)
    { id: 15, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 33, word: "jeton", imageUrl: "/images/33.png", isCorrect: true, audioKey: "jeton", spokenText: "parlak jeton" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: false, audioKey: "silgi", spokenText: "mat silgi" }
    ]},
    { id: 16, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 33, word: "jeton", imageUrl: "/images/33.png", isCorrect: false, audioKey: "jeton", spokenText: "parlak jeton" },
        { id: 535, word: "silgi", imageUrl: "/images/535.png", isCorrect: true, audioKey: "silgi", spokenText: "mat silgi" }
    ]},
    // Parlak Folyo (734) vs Mat Kağıt (642)
    { id: 17, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: true, audioKey: "aluminyum_folyo", spokenText: "parlak folyo" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: false, audioKey: "kağıt", spokenText: "mat kağıt" }
    ]},
    { id: 18, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 734, word: "alüminyum folyo", imageUrl: "/images/734.png", isCorrect: false, audioKey: "aluminyum_folyo", spokenText: "parlak folyo" },
        { id: 642, word: "kağıt", imageUrl: "/images/642.png", isCorrect: true, audioKey: "kağıt", spokenText: "mat kağıt" }
    ]},
    // Parlak Cam Bilye (762) vs Mat Kırmızı Top (156)
    { id: 19, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: true, audioKey: "misket", spokenText: "parlak bilye" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: false, audioKey: "top", spokenText: "mat top" }
    ]},
    { id: 20, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 762, word: "misket", imageUrl: "/images/762.png", isCorrect: false, audioKey: "misket", spokenText: "parlak bilye" },
        { id: 156, word: "top", imageUrl: "/images/156.png", isCorrect: true, audioKey: "top", spokenText: "mat top" }
    ]},
    // Parlak Tencere (671) vs Mat Tava (264)
    { id: 21, question: "Parlak olan hangisi?", questionAudioKey: "q_which_is_shiny", activityType: ActivityType.ParlakMat, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: true, audioKey: "tencere", spokenText: "parlak tencere" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: false, audioKey: "tava", spokenText: "mat tava" }
    ]},
    { id: 22, question: "Mat olan hangisi?", questionAudioKey: "q_which_is_matte", activityType: ActivityType.ParlakMat, options: [
        { id: 671, word: "tencere", imageUrl: "/images/671.png", isCorrect: false, audioKey: "tencere", spokenText: "parlak tencere" },
        { id: 264, word: "tava", imageUrl: "/images/264.png", isCorrect: true, audioKey: "tava", spokenText: "mat tava" }
    ]},
];