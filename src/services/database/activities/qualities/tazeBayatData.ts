import { ConceptRound, ActivityType } from '../../../../types.ts';

export const tazeBayatData: ConceptRound[] = [
    // 1. Ekmek
    { id: 1, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: true, audioKey: "ekmek", spokenText: "taze ekmek" },
        { id: 253, word: "ekmek", imageUrl: "/images/253.png", isCorrect: false, audioKey: "ekmek", spokenText: "küflü ekmek" }
    ]},
    { id: 2, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 112, word: "ekmek", imageUrl: "/images/112.png", isCorrect: false, audioKey: "ekmek", spokenText: "taze ekmek" },
        { id: 253, word: "ekmek", imageUrl: "/images/253.png", isCorrect: true, audioKey: "ekmek", spokenText: "küflü ekmek" }
    ]},

    // 2. Elma
    { id: 3, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: true, audioKey: "elma", spokenText: "taze elma" },
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: false, audioKey: "elma", spokenText: "çürük elma" }
    ]},
    { id: 4, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 43, word: "elma", imageUrl: "/images/43.png", isCorrect: false, audioKey: "elma", spokenText: "taze elma" },
        { id: 666, word: "elma", imageUrl: "/images/666.png", isCorrect: true, audioKey: "elma", spokenText: "çürük elma" }
    ]},

    // 3. Muz
    { id: 5, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: true, audioKey: "muz", spokenText: "taze muz" },
        { id: 665, word: "muz", imageUrl: "/images/665.png", isCorrect: false, audioKey: "muz", spokenText: "bayat muz" }
    ]},
    { id: 6, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 114, word: "muz", imageUrl: "/images/114.png", isCorrect: false, audioKey: "muz", spokenText: "taze muz" },
        { id: 665, word: "muz", imageUrl: "/images/665.png", isCorrect: true, audioKey: "muz", spokenText: "bayat muz" }
    ]},

    // 4. Gül
    { id: 7, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 309, word: "gül", imageUrl: "/images/309.png", isCorrect: true, audioKey: "gül", spokenText: "taze gül" },
        { id: 664, word: "gül", imageUrl: "/images/664.png", isCorrect: false, audioKey: "gül", spokenText: "solmuş gül" }
    ]},
    { id: 8, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 309, word: "gül", imageUrl: "/images/309.png", isCorrect: false, audioKey: "gül", spokenText: "taze gül" },
        { id: 664, word: "gül", imageUrl: "/images/664.png", isCorrect: true, audioKey: "gül", spokenText: "solmuş gül" }
    ]},

    // 5. Havuç
    { id: 9, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: true, audioKey: "havuç", spokenText: "taze havuç" },
        { id: 667, word: "havuç", imageUrl: "/images/667.png", isCorrect: false, audioKey: "havuç", spokenText: "bayat havuç" }
    ]},
    { id: 10, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 98, word: "havuç", imageUrl: "/images/98.png", isCorrect: false, audioKey: "havuç", spokenText: "taze havuç" },
        { id: 667, word: "havuç", imageUrl: "/images/667.png", isCorrect: true, audioKey: "havuç", spokenText: "bayat havuç" }
    ]},

    // 6. Süt
    { id: 11, question: "Taze olan hangisi?", questionAudioKey: "q_which_is_fresh", activityType: ActivityType.TazeBayat, options: [
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: true, audioKey: "süt", spokenText: "taze süt" },
        { id: 761, word: "süt", imageUrl: "/images/761.png", isCorrect: false, audioKey: "süt", spokenText: "bozuk süt" }
    ]},
    { id: 12, question: "Bayat olan hangisi?", questionAudioKey: "q_which_is_stale", activityType: ActivityType.TazeBayat, options: [
        { id: 265, word: "süt", imageUrl: "/images/265.png", isCorrect: false, audioKey: "süt", spokenText: "taze süt" },
        { id: 761, word: "süt", imageUrl: "/images/761.png", isCorrect: true, audioKey: "süt", spokenText: "bozuk süt" }
    ]},

// (Removed accidentally placed broken/intact window questions from Taze/Bayat activity)
];