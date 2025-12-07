import { ConceptRound, ActivityType } from '../../../../types';

export const messyCleanData: ConceptRound[] = [
    // 1. Oda
    { 
        id: 264, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Oda dağınıktır.', wrong: 'Hayır, oda topludur.' },
            en: { correct: 'Yes! The room is messy.', wrong: 'No, the room is tidy.' },
            de: { correct: 'Ja! Das Zimmer ist unordentlich.', wrong: 'Nein, das Zimmer ist ordentlich.' },
            fr: { correct: "Oui ! La chambre est en désordre.", wrong: "Non, la chambre est rangée." },
            nl: { correct: 'Ja! De kamer is rommelig.', wrong: 'Nee, de kamer is netjes.' },
            az: { correct: 'Bəli! Otaq dağınıqdır.', wrong: 'Xeyr, otaq səliqəlidir.' }
        },
        options: [
            { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: true, audioKey: "oda", spokenText: "oda" },
            { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: false, audioKey: "oda", spokenText: "oda" }
        ]
    },
    { 
        id: 265, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Oda topludur.', wrong: 'Hayır, oda dağınıktır.' },
            en: { correct: 'Yes! The room is tidy.', wrong: 'No, the room is messy.' },
            de: { correct: 'Ja! Das Zimmer ist ordentlich.', wrong: 'Nein, das Zimmer ist unordentlich.' },
            fr: { correct: "Oui ! La chambre est rangée.", wrong: "Non, la chambre est en désordre." },
            nl: { correct: 'Ja! De kamer is netjes.', wrong: 'Nee, de kamer is rommelig.' },
            az: { correct: 'Bəli! Otaq səliqəlidir.', wrong: 'Xeyr, otaq dağınıqdır.' }
        },
        options: [
            { id: 229, word: "oda", imageUrl: "/images/229.png", isCorrect: false, audioKey: "oda", spokenText: "oda" },
            { id: 230, word: "oda", imageUrl: "/images/230.png", isCorrect: true, audioKey: "oda", spokenText: "oda" }
        ]
    },

    // 2. Kitaplık
    { 
        id: 266, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Kitaplık dağınıktır.', wrong: 'Hayır, kitaplık topludur.' },
            en: { correct: 'Yes! The bookshelf is messy.', wrong: 'No, the bookshelf is tidy.' },
            de: { correct: 'Ja! Das Bücherregal ist unordentlich.', wrong: 'Nein, das Bücherregal ist ordentlich.' },
            fr: { correct: "Oui ! La bibliothèque est en désordre.", wrong: "Non, la bibliothèque est rangée." },
            nl: { correct: 'Ja! De boekenkast is rommelig.', wrong: 'Nee, de boekenkast is netjes.' },
            az: { correct: 'Bəli! Kitab rəfi dağınıqdır.', wrong: 'Xeyr, kitab rəfi səliqəlidir.' }
        },
        options: [
            { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },
    { 
        id: 267, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Kitaplık topludur.', wrong: 'Hayır, kitaplık dağınıktır.' },
            en: { correct: 'Yes! The bookshelf is tidy.', wrong: 'No, the bookshelf is messy.' },
            de: { correct: 'Ja! Das Bücherregal ist ordentlich.', wrong: 'Nein, das Bücherregal ist unordentlich.' },
            fr: { correct: "Oui ! La bibliothèque est rangée.", wrong: "Non, la bibliothèque est en désordre." },
            nl: { correct: 'Ja! De boekenkast is netjes.', wrong: 'Nee, de boekenkast is rommelig.' },
            az: { correct: 'Bəli! Kitab rəfi səliqəlidir.', wrong: 'Xeyr, kitab rəfi dağınıqdır.' }
        },
        options: [
            { id: 286, word: "kitaplık", imageUrl: "/images/286.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 287, word: "kitaplık", imageUrl: "/images/287.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },

    // 3. Kalemlik
    { 
        id: 268, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Kalemlik dağınıktır.', wrong: 'Hayır, kalemlik topludur.' },
            en: { correct: 'Yes! The pencil case is messy.', wrong: 'No, the pencil case is tidy.' },
            de: { correct: 'Ja! Das Federmäppchen ist unordentlich.', wrong: 'Nein, das Federmäppchen ist ordentlich.' },
            fr: { correct: "Oui ! La trousse est en désordre.", wrong: "Non, la trousse est rangée." },
            nl: { correct: 'Ja! De etui is rommelig.', wrong: 'Nee, de etui is netjes.' },
            az: { correct: 'Bəli! Qələm qabı dağınıqdır.', wrong: 'Xeyr, qələm qabı səliqəlidir.' }
        },
        options: [
            { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: true, audioKey: "kalemlik", spokenText: "kalemlik" },
            { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: false, audioKey: "kalemlik", spokenText: "kalemlik" }
        ]
    },
    { 
        id: 269, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Kalemlik topludur.', wrong: 'Hayır, kalemlik dağınıktır.' },
            en: { correct: 'Yes! The pencil case is tidy.', wrong: 'No, the pencil case is messy.' },
            de: { correct: 'Ja! Das Federmäppchen ist ordentlich.', wrong: 'Nein, das Federmäppchen ist unordentlich.' },
            fr: { correct: "Oui ! La trousse est rangée.", wrong: "Non, la trousse est en désordre." },
            nl: { correct: 'Ja! De etui is netjes.', wrong: 'Nee, de etui is rommelig.' },
            az: { correct: 'Bəli! Qələm qabı səliqəlidir.', wrong: 'Xeyr, qələm qabı dağınıqdır.' }
        },
        options: [
            { id: 544, word: "kalemlik", imageUrl: "/images/544.png", isCorrect: false, audioKey: "kalemlik", spokenText: "kalemlik" },
            { id: 543, word: "kalemlik", imageUrl: "/images/543.png", isCorrect: true, audioKey: "kalemlik", spokenText: "kalemlik" }
        ]
    },

    // 4. Yatak
    { 
        id: 270, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Yatak dağınıktır.', wrong: 'Hayır, yatak topludur.' },
            en: { correct: 'Yes! The bed is messy.', wrong: 'No, the bed is tidy.' },
            de: { correct: 'Ja! Das Bett ist unordentlich.', wrong: 'Nein, das Bett ist ordentlich.' },
            fr: { correct: "Oui ! Le lit est défait.", wrong: "Non, le lit est fait." },
            nl: { correct: 'Ja! Het bed is rommelig.', wrong: 'Nee, het bed is netjes.' },
            az: { correct: 'Bəli! Yataq dağınıqdır.', wrong: 'Xeyr, yataq səliqəlidir.' }
        },
        options: [
            { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" },
            { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" }
        ]
    },
    { 
        id: 271, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Yatak topludur.', wrong: 'Hayır, yatak dağınıktır.' },
            en: { correct: 'Yes! The bed is tidy.', wrong: 'No, the bed is messy.' },
            de: { correct: 'Ja! Das Bett ist ordentlich.', wrong: 'Nein, das Bett ist unordentlich.' },
            fr: { correct: "Oui ! Le lit est fait.", wrong: "Non, le lit est défait." },
            nl: { correct: 'Ja! Het bed is netjes.', wrong: 'Nee, het bed is rommelig.' },
            az: { correct: 'Bəli! Yataq səliqəlidir.', wrong: 'Xeyr, yataq dağınıqdır.' }
        },
        options: [
            { id: 659, word: "yatak", imageUrl: "/images/659.png", isCorrect: false, audioKey: "yatak", spokenText: "yatak" },
            { id: 606, word: "yatak", imageUrl: "/images/606.png", isCorrect: true, audioKey: "yatak", spokenText: "yatak" }
        ]
    },

    // 5. Dolap
    { 
        id: 272, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Dolap dağınıktır.', wrong: 'Hayır, dolap topludur.' },
            en: { correct: 'Yes! The closet is messy.', wrong: 'No, the closet is tidy.' },
            de: { correct: 'Ja! Der Schrank ist unordentlich.', wrong: 'Nein, der Schrank ist ordentlich.' },
            fr: { correct: "Oui ! L'armoire est en désordre.", wrong: "Non, l'armoire est rangée." },
            nl: { correct: 'Ja! De kast is rommelig.', wrong: 'Nee, de kast is netjes.' },
            az: { correct: 'Bəli! Şkaf dağınıqdır.', wrong: 'Xeyr, şkaf səliqəlidir.' }
        },
        options: [
            { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: true, audioKey: "dolap", spokenText: "dolap" },
            { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: false, audioKey: "dolap", spokenText: "dolap" }
        ]
    },
    { 
        id: 273, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Dolap topludur.', wrong: 'Hayır, dolap dağınıktır.' },
            en: { correct: 'Yes! The closet is tidy.', wrong: 'No, the closet is messy.' },
            de: { correct: 'Ja! Der Schrank ist ordentlich.', wrong: 'Nein, der Schrank ist unordentlich.' },
            fr: { correct: "Oui ! L'armoire est rangée.", wrong: "Non, l'armoire est en désordre." },
            nl: { correct: 'Ja! De kast is netjes.', wrong: 'Nee, de kast is rommelig.' },
            az: { correct: 'Bəli! Şkaf səliqəlidir.', wrong: 'Xeyr, şkaf dağınıqdır.' }
        },
        options: [
            { id: 661, word: "dolap", imageUrl: "/images/661.png", isCorrect: false, audioKey: "dolap", spokenText: "dolap" },
            { id: 660, word: "dolap", imageUrl: "/images/660.png", isCorrect: true, audioKey: "dolap", spokenText: "dolap" }
        ]
    },

    // 6. Saç
    { 
        id: 274, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Saç dağınıktır.', wrong: 'Hayır, saç topludur.' },
            en: { correct: 'Yes! The hair is messy.', wrong: 'No, the hair is tidy.' },
            de: { correct: 'Ja! Die Haare sind unordentlich.', wrong: 'Nein, die Haare sind ordentlich.' },
            fr: { correct: "Oui ! Les cheveux sont en désordre.", wrong: "Non, les cheveux sont coiffés." },
            nl: { correct: 'Ja! Het haar is warrig.', wrong: 'Nee, het haar is netjes.' },
            az: { correct: 'Bəli! Saç dağınıqdır.', wrong: 'Xeyr, saç səliqəlidir.' }
        },
        options: [
            { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: true, audioKey: "sac", spokenText: "saç" },
            { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: false, audioKey: "sac", spokenText: "saç" }
        ]
    },
    { 
        id: 275, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Saç topludur.', wrong: 'Hayır, saç dağınıktır.' },
            en: { correct: 'Yes! The hair is tidy.', wrong: 'No, the hair is messy.' },
            de: { correct: 'Ja! Die Haare sind ordentlich.', wrong: 'Nein, die Haare sind unordentlich.' },
            fr: { correct: "Oui ! Les cheveux sont coiffés.", wrong: "Non, les cheveux sont en désordre." },
            nl: { correct: 'Ja! Het haar is netjes.', wrong: 'Nee, het haar is warrig.' },
            az: { correct: 'Bəli! Saç səliqəlidir.', wrong: 'Xeyr, saç dağınıqdır.' }
        },
        options: [
            { id: 663, word: "saç", imageUrl: "/images/663.png", isCorrect: false, audioKey: "sac", spokenText: "saç" },
            { id: 662, word: "saç", imageUrl: "/images/662.png", isCorrect: true, audioKey: "sac", spokenText: "saç" }
        ]
    },

    // 7. Gömlek
    { 
        id: 276, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Gömlek kırışıktır.', wrong: 'Hayır, gömlek düzgündür.' },
            en: { correct: 'Yes! The shirt is wrinkled.', wrong: 'No, the shirt is neat.' },
            de: { correct: 'Ja! Das Hemd ist zerknittert.', wrong: 'Nein, das Hemd ist ordentlich.' },
            fr: { correct: "Oui ! La chemise est froissée.", wrong: "Non, la chemise est repassée." },
            nl: { correct: 'Ja! Het overhemd is gekreukt.', wrong: 'Nee, het overhemd is netjes.' },
            az: { correct: 'Bəli! Köynək qırışıqdır.', wrong: 'Xeyr, köynək ütülüdür.' }
        },
        options: [
            { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: true, audioKey: "gomlek", spokenText: "gömlek" },
            { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: false, audioKey: "gomlek", spokenText: "gömlek" }
        ]
    },
    { 
        id: 277, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Gömlek düzgündür.', wrong: 'Hayır, gömlek kırışıktır.' },
            en: { correct: 'Yes! The shirt is neat.', wrong: 'No, the shirt is wrinkled.' },
            de: { correct: 'Ja! Das Hemd ist ordentlich.', wrong: 'Nein, das Hemd ist zerknittert.' },
            fr: { correct: "Oui ! La chemise est repassée.", wrong: "Non, la chemise est froissée." },
            nl: { correct: 'Ja! Het overhemd is netjes.', wrong: 'Nee, het overhemd is gekreukt.' },
            az: { correct: 'Bəli! Köynək ütülüdür.', wrong: 'Xeyr, köynək qırışıqdır.' }
        },
        options: [
            { id: 254, word: "gömlek", imageUrl: "/images/254.png", isCorrect: false, audioKey: "gomlek", spokenText: "gömlek" },
            { id: 255, word: "gömlek", imageUrl: "/images/255.png", isCorrect: true, audioKey: "gomlek", spokenText: "gömlek" }
        ]
    },

    // 8. Oyuncak Kutusu
    { 
        id: 278, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Oyuncak kutusu dağınıktır.', wrong: 'Hayır, oyuncak kutusu topludur.' },
            en: { correct: 'Yes! The toy box is messy.', wrong: 'No, the toy box is tidy.' },
            de: { correct: 'Ja! Die Spielzeugkiste ist unordentlich.', wrong: 'Nein, die Spielzeugkiste ist ordentlich.' },
            fr: { correct: "Oui ! Le coffre à jouets est en désordre.", wrong: "Non, le coffre à jouets est rangé." },
            nl: { correct: 'Ja! De speelgoeddoos is rommelig.', wrong: 'Nee, de speelgoeddoos is netjes.' },
            az: { correct: 'Bəli! Oyuncaq qutusu dağınıqdır.', wrong: 'Xeyr, oyuncaq qutusu səliqəlidir.' }
        },
        options: [
            { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "oyuncak kutusu" },
            { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "oyuncak kutusu" }
        ]
    },
    { 
        id: 279, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Oyuncak kutusu topludur.', wrong: 'Hayır, oyuncak kutusu dağınıktır.' },
            en: { correct: 'Yes! The toy box is tidy.', wrong: 'No, the toy box is messy.' },
            de: { correct: 'Ja! Die Spielzeugkiste ist ordentlich.', wrong: 'Nein, die Spielzeugkiste ist unordentlich.' },
            fr: { correct: "Oui ! Le coffre à jouets est rangé.", wrong: "Non, le coffre à jouets est en désordre." },
            nl: { correct: 'Ja! De speelgoeddoos is netjes.', wrong: 'Nee, de speelgoeddoos is rommelig.' },
            az: { correct: 'Bəli! Oyuncaq qutusu səliqəlidir.', wrong: 'Xeyr, oyuncaq qutusu dağınıqdır.' }
        },
        options: [
            { id: 657, word: "oyuncak kutusu", imageUrl: "/images/657.png", isCorrect: false, audioKey: "oyuncak_kutusu", spokenText: "oyuncak kutusu" },
            { id: 658, word: "oyuncak kutusu", imageUrl: "/images/658.png", isCorrect: true, audioKey: "oyuncak_kutusu", spokenText: "oyuncak kutusu" }
        ]
    },

    // 9. Kitap Yığını vs Masa
    { 
        id: 280, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Kitaplar dağınıktır.', wrong: 'Hayır, masa topludur.' },
            en: { correct: 'Yes! The books are messy.', wrong: 'No, the table is tidy.' },
            de: { correct: 'Ja! Die Bücher sind unordentlich.', wrong: 'Nein, der Tisch ist ordentlich.' },
            fr: { correct: "Oui ! Les livres sont en désordre.", wrong: "Non, la table est rangée." },
            nl: { correct: 'Ja! De boeken zijn rommelig.', wrong: 'Nee, de tafel is netjes.' },
            az: { correct: 'Bəli! Kitablar dağınıqdır.', wrong: 'Xeyr, masa səliqəlidir.' }
        },
        options: [
            { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: true, audioKey: "kitap_yigini", spokenText: "kitap yığını" },
            { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: false, audioKey: "masa", spokenText: "masa" }
        ]
    },
    { 
        id: 281, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Masa topludur.', wrong: 'Hayır, kitaplar dağınıktır.' },
            en: { correct: 'Yes! The table is tidy.', wrong: 'No, the books are messy.' },
            de: { correct: 'Ja! Der Tisch ist ordentlich.', wrong: 'Nein, die Bücher sind unordentlich.' },
            fr: { correct: "Oui ! La table est rangée.", wrong: "Non, les livres sont en désordre." },
            nl: { correct: 'Ja! De tafel is netjes.', wrong: 'Nee, de boeken zijn rommelig.' },
            az: { correct: 'Bəli! Masa səliqəlidir.', wrong: 'Xeyr, kitablar dağınıqdır.' }
        },
        options: [
            { id: 656, word: "kitap yığını", imageUrl: "/images/656.png", isCorrect: false, audioKey: "kitap_yigini", spokenText: "kitap yığını" },
            { id: 352, word: "masa", imageUrl: "/images/352.png", isCorrect: true, audioKey: "masa", spokenText: "masa" }
        ]
    },

    // 10. Puzzle
    { 
        id: 282, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Puzzle dağınıktır.', wrong: 'Hayır, puzzle tamamlanmıştır.' },
            en: { correct: 'Yes! The puzzle is messy.', wrong: 'No, the puzzle is complete.' },
            de: { correct: 'Ja! Das Puzzle ist unordentlich.', wrong: 'Nein, das Puzzle ist vollständig.' },
            fr: { correct: "Oui ! Le puzzle est en désordre.", wrong: "Non, le puzzle est terminé." },
            nl: { correct: 'Ja! De puzzel is rommelig.', wrong: 'Nee, de puzzel is compleet.' },
            az: { correct: 'Bəli! Yapboz dağınıqdır.', wrong: 'Xeyr, yapboz tamamlanıb.' }
        },
        options: [
            { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: true, audioKey: "puzzle_parcalari", spokenText: "puzzle parçaları" },
            { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: false, audioKey: "puzzle", spokenText: "puzzle" }
        ]
    },
    { 
        id: 20, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Puzzle tamamlanmıştır.', wrong: 'Hayır, puzzle dağınıktır.' },
            en: { correct: 'Yes! The puzzle is complete.', wrong: 'No, the puzzle is messy.' },
            de: { correct: 'Ja! Das Puzzle ist vollständig.', wrong: 'Nein, das Puzzle ist unordentlich.' },
            fr: { correct: "Oui ! Le puzzle est terminé.", wrong: "Non, le puzzle est en désordre." },
            nl: { correct: 'Ja! De puzzel is compleet.', wrong: 'Nee, de puzzel is rommelig.' },
            az: { correct: 'Bəli! Yapboz tamamlanıb.', wrong: 'Xeyr, yapboz dağınıqdır.' }
        },
        options: [
            { id: 481, word: "puzzle parçaları", imageUrl: "/images/481.png", isCorrect: false, audioKey: "puzzle_parcalari", spokenText: "puzzle parçaları" },
            { id: 480, word: "puzzle", imageUrl: "/images/480.png", isCorrect: true, audioKey: "puzzle", spokenText: "puzzle" }
        ]
    },

    // 11. Çöp Kutusu
    { 
        id: 21, 
        question: "Dağınık olan hangisi?", 
        questionAudioKey: "q_which_is_messy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Çöp kutusu doludur.', wrong: 'Hayır, çöp kutusu boştur.' },
            en: { correct: 'Yes! The trash can is full.', wrong: 'No, the trash can is empty.' },
            de: { correct: 'Ja! Der Mülleimer ist voll.', wrong: 'Nein, der Mülleimer ist leer.' },
            fr: { correct: "Oui ! La poubelle est pleine.", wrong: "Non, la poubelle est vide." },
            nl: { correct: 'Ja! De prullenbak is vol.', wrong: 'Nee, de prullenbak is leeg.' },
            az: { correct: 'Bəli! Zibil qutusu doludur.', wrong: 'Xeyr, zibil qutusu boşdur.' }
        },
        options: [
            { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: true, audioKey: "cop_kutusu", spokenText: "çöp kutusu" },
            { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: false, audioKey: "cop_kutusu", spokenText: "çöp kutusu" }
        ]
    },
    { 
        id: 22, 
        question: "Toplu olan hangisi?", 
        questionAudioKey: "q_which_is_tidy", 
        activityType: ActivityType.MessyClean, 
        speech: {
            tr: { correct: 'Evet! Çöp kutusu boştur.', wrong: 'Hayır, çöp kutusu doludur.' },
            en: { correct: 'Yes! The trash can is empty.', wrong: 'No, the trash can is full.' },
            de: { correct: 'Ja! Der Mülleimer ist leer.', wrong: 'Nein, der Mülleimer ist voll.' },
            fr: { correct: "Oui ! La poubelle est vide.", wrong: "Non, la poubelle est pleine." },
            nl: { correct: 'Ja! De prullenbak is leeg.', wrong: 'Nee, de prullenbak is vol.' },
            az: { correct: 'Bəli! Zibil qutusu boşdur.', wrong: 'Xeyr, zibil qutusu doludur.' }
        },
        options: [
            { id: 284, word: "çöp kutusu", imageUrl: "/images/284.png", isCorrect: false, audioKey: "cop_kutusu", spokenText: "çöp kutusu" },
            { id: 45, word: "çöp kutusu", imageUrl: "/images/45.png", isCorrect: true, audioKey: "cop_kutusu", spokenText: "çöp kutusu" }
        ]
    },
];