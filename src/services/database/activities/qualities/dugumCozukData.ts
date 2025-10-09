import { ConceptRound, ActivityType } from '../../../../types.ts';

export const dugumCozukData: ConceptRound[] = [
    // 1. Ayakkabı Bağcığı
    { id: 1, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "düğümlü ayakkabı" },
        { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "çözük ayakkabı" }
    ]},
    { id: 2, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 411, word: "ayakkabı", imageUrl: "/images/411.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "düğümlü ayakkabı" },
        { id: 412, word: "ayakkabı", imageUrl: "/images/412.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "çözük ayakkabı" }
    ]},
    // 2. Hortum
    { id: 3, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: true, audioKey: "hortum", spokenText: "düğümlü hortum" },
        { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: false, audioKey: "hortum", spokenText: "çözük hortum" }
    ]},
    { id: 4, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 747, word: "hortum", imageUrl: "/images/747.png", isCorrect: false, audioKey: "hortum", spokenText: "düğümlü hortum" },
        { id: 748, word: "hortum", imageUrl: "/images/748.png", isCorrect: true, audioKey: "hortum", spokenText: "çözük hortum" }
    ]},
    // 3. Kurdele - YENİ EKLENDİ
    { id: 5, question: "Düğüm olan hangisi?", questionAudioKey: "q_which_is_knotted", activityType: ActivityType.DugumCozuk, options: [
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: true, audioKey: "kurdele", spokenText: "düğümlü kurdele" },
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: false, audioKey: "kurdele", spokenText: "çözük kurdele" }
    ]},
    { id: 6, question: "Çözük olan hangisi?", questionAudioKey: "q_which_is_untied", activityType: ActivityType.DugumCozuk, options: [
        { id: 517, word: "kurdele", imageUrl: "/images/517.png", isCorrect: false, audioKey: "kurdele", spokenText: "düğümlü kurdele" },
        { id: 516, word: "kurdele", imageUrl: "/images/516.png", isCorrect: true, audioKey: "kurdele", spokenText: "çözük kurdele" }
    ]}
];