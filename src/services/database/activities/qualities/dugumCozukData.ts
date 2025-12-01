import { ConceptRound, ActivityType } from '../../../../types.ts';

export const dugumCozukData: ConceptRound[] = [
    // 1. Ayakkabı Bağcığı
    { id: 125, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "" },
        { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "" }
    ]},
    { id: 126, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "" },
        { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "" }
    ]},

    // 2. Hortum
    { id: 127, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: true, audioKey: "hortum", spokenText: "" },
        { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: false, audioKey: "hortum", spokenText: "" }
    ]},
    { id: 128, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: false, audioKey: "hortum", spokenText: "" },
        { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: true, audioKey: "hortum", spokenText: "" }
    ]},

    // 3. Kurdele
    { id: 129, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: true, audioKey: "kurdele", spokenText: "" },
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: false, audioKey: "kurdele", spokenText: "" }
    ]},
    { id: 130, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: false, audioKey: "kurdele", spokenText: "" },
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: true, audioKey: "kurdele", spokenText: "" }
    ]}
];