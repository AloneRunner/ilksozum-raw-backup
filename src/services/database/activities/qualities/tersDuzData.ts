import { ConceptRound, ActivityType } from '../../../../types';

export const tersDuzData: ConceptRound[] = [
    // Terlik
    { id: 1, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_upright", activityType: ActivityType.TersDuz, options: [
        { id: 720, word: "terlik", imageUrl: "/images/720.png", isCorrect: true, audioKey: "terlik", spokenText: "terlik" },
        { id: 721, word: "terlik", imageUrl: "/images/721.png", isCorrect: false, audioKey: "terlik", spokenText: "ters terlik" }
    ]},
    // Kaplumbağa
    { id: 2, question: "Düzgün duran hangisi?", questionAudioKey: "q_which_is_upright", activityType: ActivityType.TersDuz, options: [
        { id: 42, word: "kaplumbağa", imageUrl: "/images/42.png", isCorrect: true, audioKey: "kaplumbağa", spokenText: "kaplumbağa" },
        { id: 722, word: "kaplumbağa", imageUrl: "/images/722.png", isCorrect: false, audioKey: "kaplumbağa", spokenText: "ters kaplumbağa" }
    ]},
    // Saat
    { id: 3, question: "Düzgün duran hangisi?", questionAudioKey: "q_which_is_upright", activityType: ActivityType.TersDuz, options: [
        { id: 844, word: "saat", imageUrl: "/images/844.png", isCorrect: true, audioKey: "saat", spokenText: "saat" },
        { id: 843, word: "saat", imageUrl: "/images/843.png", isCorrect: false, audioKey: "saat", spokenText: "ters saat" }
    ]},
    // Ayakkabı
    { id: 4, question: "Düzgün giyilmiş olan hangisi?", questionAudioKey: "q_which_is_upright", activityType: ActivityType.TersDuz, options: [
        { id: 846, word: "ayakkabı", imageUrl: "/images/846.png", isCorrect: true, audioKey: "ayakkabı", spokenText: "ayakkabı" },
        { id: 845, word: "ayakkabı", imageUrl: "/images/845.png", isCorrect: false, audioKey: "ayakkabı", spokenText: "ters ayakkabı" }
    ]},
    // Sandalet
    { id: 5, question: "Düzgün olan hangisi?", questionAudioKey: "q_which_is_upright", activityType: ActivityType.TersDuz, options: [
        { id: 848, word: "sandalet", imageUrl: "/images/848.png", isCorrect: true, audioKey: "sandalet", spokenText: "sandalet" },
        { id: 847, word: "sandalet", imageUrl: "/images/847.png", isCorrect: false, audioKey: "sandalet", spokenText: "ters sandalet" }
    ]},
];