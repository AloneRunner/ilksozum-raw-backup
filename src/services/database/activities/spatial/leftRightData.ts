import { ConceptRound, ActivityType } from '../../../../types';
import { imageData } from '../../imageData';

// --------------------------------------------------------------------------
// YARDIMCI FONKSİYON
// --------------------------------------------------------------------------
const findImage = (id: number): any => {
    const image = imageData.find(img => img.id === id);
    if (!image) {
        console.warn(`[leftRightData] Image with ID ${id} not found.`);
        return { id, word: "unknown", imageUrl: "" }; 
    }
    return image;
};

// --------------------------------------------------------------------------
// SOL / SAĞ (LeftRight) - TAM LİSTE
// --------------------------------------------------------------------------

export const leftRightData: ConceptRound[] = [
    // ----------------------------------------------------------------------
    // 1. Araba (Sol - 1) vs Fil (Sağ - 28)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Araba sola bakıyor.', wrong: 'Hayır, fil sağa bakıyor.' },
            en: { correct: 'Yes! The car is facing left.', wrong: 'No, the elephant is facing right.' },
            de: { correct: 'Ja! Das Auto schaut nach links.', wrong: 'Nein, der Elefant schaut nach rechts.' },
            fr: { correct: "Oui ! La voiture regarde à gauche.", wrong: "Non, l'éléphant regarde à droite." },
            nl: { correct: 'Ja! De auto kijkt naar links.', wrong: 'Nee, de olifant kijkt naar rechts.' },
            az: { correct: 'Bəli! Maşın sola baxır.', wrong: 'Xeyr, fil sağa baxır.' }
        },
        options: [
            { ...findImage(1), isCorrect: true, audioKey: "araba_sol", spokenText: "araba" },
            { ...findImage(28), isCorrect: false, audioKey: "fil_sag", spokenText: "fil" }
        ]
    },
    {
        id: 2,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Fil sağa bakıyor.', wrong: 'Hayır, araba sola bakıyor.' },
            en: { correct: 'Yes! The elephant is facing right.', wrong: 'No, the car is facing left.' },
            de: { correct: 'Ja! Der Elefant schaut nach rechts.', wrong: 'Nein, das Auto schaut nach links.' },
            fr: { correct: "Oui ! L'éléphant regarde à droite.", wrong: "Non, la voiture regarde à gauche." },
            nl: { correct: 'Ja! De olifant kijkt naar rechts.', wrong: 'Nee, de auto kijkt naar links.' },
            az: { correct: 'Bəli! Fil sağa baxır.', wrong: 'Xeyr, maşın sola baxır.' }
        },
        options: [
            { ...findImage(1), isCorrect: false, audioKey: "araba_sol", spokenText: "araba" },
            { ...findImage(28), isCorrect: true, audioKey: "fil_sag", spokenText: "fil" }
        ]
    },

    // ----------------------------------------------------------------------
    // 2. Ördek (Sol - 26) vs Tavşan (Sağ - 41)
    // ----------------------------------------------------------------------
    {
        id: 3,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Ördek sola bakıyor.', wrong: 'Hayır, tavşan sağa bakıyor.' },
            en: { correct: 'Yes! The duck is facing left.', wrong: 'No, the rabbit is facing right.' },
            de: { correct: 'Ja! Die Ente schaut nach links.', wrong: 'Nein, der Hase schaut nach rechts.' },
            fr: { correct: "Oui ! Le canard regarde à gauche.", wrong: "Non, le lapin regarde à droite." },
            nl: { correct: 'Ja! De eend kijkt naar links.', wrong: 'Nee, het konijn kijkt naar rechts.' },
            az: { correct: 'Bəli! Ördək sola baxır.', wrong: 'Xeyr, dovşan sağa baxır.' }
        },
        options: [
            { ...findImage(26), isCorrect: true, audioKey: "ordek_sol", spokenText: "ördek" },
            { ...findImage(41), isCorrect: false, audioKey: "tavsan_sag", spokenText: "tavşan" }
        ]
    },
    {
        id: 4,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Tavşan sağa bakıyor.', wrong: 'Hayır, ördek sola bakıyor.' },
            en: { correct: 'Yes! The rabbit is facing right.', wrong: 'No, the duck is facing left.' },
            de: { correct: 'Ja! Der Hase schaut nach rechts.', wrong: 'Nein, die Ente schaut nach links.' },
            fr: { correct: "Oui ! Le lapin regarde à droite.", wrong: "Non, le canard regarde à gauche." },
            nl: { correct: 'Ja! Het konijn kijkt naar rechts.', wrong: 'Nee, de eend kijkt naar links.' },
            az: { correct: 'Bəli! Dovşan sağa baxır.', wrong: 'Xeyr, ördək sola baxır.' }
        },
        options: [
            { ...findImage(26), isCorrect: false, audioKey: "ordek_sol", spokenText: "ördek" },
            { ...findImage(41), isCorrect: true, audioKey: "tavsan_sag", spokenText: "tavşan" }
        ]
    },

    // ----------------------------------------------------------------------
    // 3. Tren (Sol - 106) vs Kuş (Sağ - 73)
    // ----------------------------------------------------------------------
    {
        id: 5,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Tren sola bakıyor.', wrong: 'Hayır, kuş sağa bakıyor.' },
            en: { correct: 'Yes! The train is facing left.', wrong: 'No, the bird is facing right.' },
            de: { correct: 'Ja! Der Zug schaut nach links.', wrong: 'Nein, der Vogel schaut nach rechts.' },
            fr: { correct: "Oui ! Le train regarde à gauche.", wrong: "Non, l'oiseau regarde à droite." },
            nl: { correct: 'Ja! De trein kijkt naar links.', wrong: 'Nee, de vogel kijkt naar rechts.' },
            az: { correct: 'Bəli! Qatar sola baxır.', wrong: 'Xeyr, quş sağa baxır.' }
        },
        options: [
            { ...findImage(106), isCorrect: true, audioKey: "tren_sol", spokenText: "tren" },
            { ...findImage(73), isCorrect: false, audioKey: "kus_sag", spokenText: "kuş" }
        ]
    },
    {
        id: 6,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Kuş sağa bakıyor.', wrong: 'Hayır, tren sola bakıyor.' },
            en: { correct: 'Yes! The bird is facing right.', wrong: 'No, the train is facing left.' },
            de: { correct: 'Ja! Der Vogel schaut nach rechts.', wrong: 'Nein, der Zug schaut nach links.' },
            fr: { correct: "Oui ! L'oiseau regarde à droite.", wrong: "Non, le train regarde à gauche." },
            nl: { correct: 'Ja! De vogel kijkt naar rechts.', wrong: 'Nee, de trein kijkt naar links.' },
            az: { correct: 'Bəli! Quş sağa baxır.', wrong: 'Xeyr, qatar sola baxır.' }
        },
        options: [
            { ...findImage(106), isCorrect: false, audioKey: "tren_sol", spokenText: "tren" },
            { ...findImage(73), isCorrect: true, audioKey: "kus_sag", spokenText: "kuş" }
        ]
    },

    // ----------------------------------------------------------------------
    // 4. Kaplumbağa (Sol - 42) vs Yunus (Sağ - 763)
    // ----------------------------------------------------------------------
    {
        id: 7,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Kaplumbağa sola bakıyor.', wrong: 'Hayır, yunus sağa bakıyor.' },
            en: { correct: 'Yes! The turtle is facing left.', wrong: 'No, the dolphin is facing right.' },
            de: { correct: 'Ja! Die Schildkröte schaut nach links.', wrong: 'Nein, der Delfin schaut nach rechts.' },
            fr: { correct: "Oui ! La tortue regarde à gauche.", wrong: "Non, le dauphin regarde à droite." },
            nl: { correct: 'Ja! De schildpad kijkt naar links.', wrong: 'Nee, de dolfijn kijkt naar rechts.' },
            az: { correct: 'Bəli! Tısbağa sola baxır.', wrong: 'Xeyr, delfin sağa baxır.' }
        },
        options: [
            { ...findImage(42), isCorrect: true, audioKey: "kaplumbaga_sol", spokenText: "kaplumbağa" },
            { ...findImage(763), isCorrect: false, audioKey: "yunus_sag", spokenText: "yunus" }
        ]
    },
    {
        id: 8,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Yunus sağa bakıyor.', wrong: 'Hayır, kaplumbağa sola bakıyor.' },
            en: { correct: 'Yes! The dolphin is facing right.', wrong: 'No, the turtle is facing left.' },
            de: { correct: 'Ja! Der Delfin schaut nach rechts.', wrong: 'Nein, die Schildkröte schaut nach links.' },
            fr: { correct: "Oui ! Le dauphin regarde à droite.", wrong: "Non, la tortue regarde à gauche." },
            nl: { correct: 'Ja! De dolfijn kijkt naar rechts.', wrong: 'Nee, de schildpad kijkt naar links.' },
            az: { correct: 'Bəli! Delfin sağa baxır.', wrong: 'Xeyr, tısbağa sola baxır.' }
        },
        options: [
            { ...findImage(42), isCorrect: false, audioKey: "kaplumbaga_sol", spokenText: "kaplumbağa" },
            { ...findImage(763), isCorrect: true, audioKey: "yunus_sag", spokenText: "yunus" }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. Çita (Sol - 145) vs Ambulans (Sağ - 257)
    // ----------------------------------------------------------------------
    {
        id: 9,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Çita sola bakıyor.', wrong: 'Hayır, ambulans sağa bakıyor.' },
            en: { correct: 'Yes! The cheetah is facing left.', wrong: 'No, the ambulance is facing right.' },
            de: { correct: 'Ja! Der Gepard schaut nach links.', wrong: 'Nein, der Krankenwagen schaut nach rechts.' },
            fr: { correct: "Oui ! Le guépard regarde à gauche.", wrong: "Non, l'ambulance regarde à droite." },
            nl: { correct: 'Ja! De jachtluipaard kijkt naar links.', wrong: 'Nee, de ambulance kijkt naar rechts.' },
            az: { correct: 'Bəli! Hepard sola baxır.', wrong: 'Xeyr, təcili yardım sağa baxır.' }
        },
        options: [
            { ...findImage(145), isCorrect: true, audioKey: "cita_sol", spokenText: "çita" },
            { ...findImage(257), isCorrect: false, audioKey: "ambulans_sag", spokenText: "ambulans" }
        ]
    },
    {
        id: 10,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Ambulans sağa bakıyor.', wrong: 'Hayır, çita sola bakıyor.' },
            en: { correct: 'Yes! The ambulance is facing right.', wrong: 'No, the cheetah is facing left.' },
            de: { correct: 'Ja! Der Krankenwagen schaut nach rechts.', wrong: 'Nein, der Gepard schaut nach links.' },
            fr: { correct: "Oui ! L'ambulance regarde à droite.", wrong: "Non, le guépard regarde à gauche." },
            nl: { correct: 'Ja! De ambulance kijkt naar rechts.', wrong: 'Nee, de jachtluipaard kijkt naar links.' },
            az: { correct: 'Bəli! Təcili yardım sağa baxır.', wrong: 'Xeyr, hepard sola baxır.' }
        },
        options: [
            { ...findImage(145), isCorrect: false, audioKey: "cita_sol", spokenText: "çita" },
            { ...findImage(257), isCorrect: true, audioKey: "ambulans_sag", spokenText: "ambulans" }
        ]
    },

    // ----------------------------------------------------------------------
    // 6. Uçak (Sol - 107) vs Tavuk (Sağ - 377)
    // ----------------------------------------------------------------------
    {
        id: 11,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Uçak sola bakıyor.', wrong: 'Hayır, tavuk sağa bakıyor.' },
            en: { correct: 'Yes! The plane is facing left.', wrong: 'No, the chicken is facing right.' },
            de: { correct: 'Ja! Das Flugzeug schaut nach links.', wrong: 'Nein, das Huhn schaut nach rechts.' },
            fr: { correct: "Oui ! L'avion regarde à gauche.", wrong: "Non, le poulet regarde à droite." },
            nl: { correct: 'Ja! Het vliegtuig kijkt naar links.', wrong: 'Nee, de kip kijkt naar rechts.' },
            az: { correct: 'Bəli! Təyyarə sola baxır.', wrong: 'Xeyr, toyuq sağa baxır.' }
        },
        options: [
            { ...findImage(107), isCorrect: true, audioKey: "ucak_sol", spokenText: "uçak" },
            { ...findImage(377), isCorrect: false, audioKey: "tavuk_sag", spokenText: "tavuk" }
        ]
    },
    {
        id: 12,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Tavuk sağa bakıyor.', wrong: 'Hayır, uçak sola bakıyor.' },
            en: { correct: 'Yes! The chicken is facing right.', wrong: 'No, the plane is facing left.' },
            de: { correct: 'Ja! Das Huhn schaut nach rechts.', wrong: 'Nein, das Flugzeug schaut nach links.' },
            fr: { correct: "Oui ! Le poulet regarde à droite.", wrong: "Non, l'avion regarde à gauche." },
            nl: { correct: 'Ja! De kip kijkt naar rechts.', wrong: 'Nee, het vliegtuig kijkt naar links.' },
            az: { correct: 'Bəli! Toyuq sağa baxır.', wrong: 'Xeyr, təyyarə sola baxır.' }
        },
        options: [
            { ...findImage(107), isCorrect: false, audioKey: "ucak_sol", spokenText: "uçak" },
            { ...findImage(377), isCorrect: true, audioKey: "tavuk_sag", spokenText: "tavuk" }
        ]
    },

    // ----------------------------------------------------------------------
    // 7. Maymun (Sol - 277) vs Ayakkabı (Sağ - 59)
    // ----------------------------------------------------------------------
    {
        id: 13,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Maymun sola bakıyor.', wrong: 'Hayır, ayakkabı sağa bakıyor.' },
            en: { correct: 'Yes! The monkey is facing left.', wrong: 'No, the shoe is facing right.' },
            de: { correct: 'Ja! Der Affe schaut nach links.', wrong: 'Nein, der Schuh schaut nach rechts.' },
            fr: { correct: "Oui ! Le singe regarde à gauche.", wrong: "Non, la chaussure regarde à droite." },
            nl: { correct: 'Ja! De aap kijkt naar links.', wrong: 'Nee, de schoen kijkt naar rechts.' },
            az: { correct: 'Bəli! Meymun sola baxır.', wrong: 'Xeyr, ayaqqabı sağa baxır.' }
        },
        options: [
            { ...findImage(277), isCorrect: true, audioKey: "maymun_sol", spokenText: "maymun" },
            { ...findImage(59), isCorrect: false, audioKey: "ayakkabi_sag", spokenText: "ayakkabı" }
        ]
    },
    {
        id: 14,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Ayakkabı sağa bakıyor.', wrong: 'Hayır, maymun sola bakıyor.' },
            en: { correct: 'Yes! The shoe is facing right.', wrong: 'No, the monkey is facing left.' },
            de: { correct: 'Ja! Der Schuh schaut nach rechts.', wrong: 'Nein, der Affe schaut nach links.' },
            fr: { correct: "Oui ! La chaussure regarde à droite.", wrong: "Non, le singe regarde à gauche." },
            nl: { correct: 'Ja! De schoen kijkt naar rechts.', wrong: 'Nee, de aap kijkt naar links.' },
            az: { correct: 'Bəli! Ayaqqabı sağa baxır.', wrong: 'Xeyr, meymun sola baxır.' }
        },
        options: [
            { ...findImage(277), isCorrect: false, audioKey: "maymun_sol", spokenText: "maymun" },
            { ...findImage(59), isCorrect: true, audioKey: "ayakkabi_sag", spokenText: "ayakkabı" }
        ]
    },

    // ----------------------------------------------------------------------
    // 8. Solucan (Sol - 150) vs Uğur Böceği (Sağ - 92)
    // ----------------------------------------------------------------------
    {
        id: 15,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Solucan sola bakıyor.', wrong: 'Hayır, uğur böceği sağa bakıyor.' },
            en: { correct: 'Yes! The worm is facing left.', wrong: 'No, the ladybug is facing right.' },
            de: { correct: 'Ja! Der Wurm schaut nach links.', wrong: 'Nein, der Marienkäfer schaut nach rechts.' },
            fr: { correct: "Oui ! Le ver regarde à gauche.", wrong: "Non, la coccinelle regarde à droite." },
            nl: { correct: 'Ja! De worm kijkt naar links.', wrong: 'Nee, het lieveheersbeestje kijkt naar rechts.' },
            az: { correct: 'Bəli! Soxulcan sola baxır.', wrong: 'Xeyr, parabüzən sağa baxır.' }
        },
        options: [
            { ...findImage(150), isCorrect: true, audioKey: "solucan_sol", spokenText: "solucan" },
            { ...findImage(92), isCorrect: false, audioKey: "ugurbocegi_sag", spokenText: "uğur böceği" }
        ]
    },
    {
        id: 16,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Uğur böceği sağa bakıyor.', wrong: 'Hayır, solucan sola bakıyor.' },
            en: { correct: 'Yes! The ladybug is facing right.', wrong: 'No, the worm is facing left.' },
            de: { correct: 'Ja! Der Marienkäfer schaut nach rechts.', wrong: 'Nein, der Wurm schaut nach links.' },
            fr: { correct: "Oui ! La coccinelle regarde à droite.", wrong: "Non, le ver regarde à gauche." },
            nl: { correct: 'Ja! Het lieveheersbeestje kijkt naar rechts.', wrong: 'Nee, de worm kijkt naar links.' },
            az: { correct: 'Bəli! Parabüzən sağa baxır.', wrong: 'Xeyr, soxulcan sola baxır.' }
        },
        options: [
            { ...findImage(150), isCorrect: false, audioKey: "solucan_sol", spokenText: "solucan" },
            { ...findImage(92), isCorrect: true, audioKey: "ugurbocegi_sag", spokenText: "uğur böceği" }
        ]
    },

    // ----------------------------------------------------------------------
    // 9. Horoz (Sol - 102) vs Tırtıl (Sağ - 445)
    // ----------------------------------------------------------------------
    {
        id: 17,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Horoz sola bakıyor.', wrong: 'Hayır, tırtıl sağa bakıyor.' },
            en: { correct: 'Yes! The rooster is facing left.', wrong: 'No, the caterpillar is facing right.' },
            de: { correct: 'Ja! Der Hahn schaut nach links.', wrong: 'Nein, die Raupe schaut nach rechts.' },
            fr: { correct: "Oui ! Le coq regarde à gauche.", wrong: "Non, la chenille regarde à droite." },
            nl: { correct: 'Ja! De haan kijkt naar links.', wrong: 'Nee, de rups kijkt naar rechts.' },
            az: { correct: 'Bəli! Xoruz sola baxır.', wrong: 'Xeyr, tırtıl sağa baxır.' }
        },
        options: [
            { ...findImage(102), isCorrect: true, audioKey: "horoz_sol", spokenText: "horoz" },
            { ...findImage(445), isCorrect: false, audioKey: "tirtil_sag", spokenText: "tırtıl" }
        ]
    },
    {
        id: 18,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Tırtıl sağa bakıyor.', wrong: 'Hayır, horoz sola bakıyor.' },
            en: { correct: 'Yes! The caterpillar is facing right.', wrong: 'No, the rooster is facing left.' },
            de: { correct: 'Ja! Die Raupe schaut nach rechts.', wrong: 'Nein, der Hahn schaut nach links.' },
            fr: { correct: "Oui ! La chenille regarde à droite.", wrong: "Non, le coq regarde à gauche." },
            nl: { correct: 'Ja! De rups kijkt naar rechts.', wrong: 'Nee, de haan kijkt naar links.' },
            az: { correct: 'Bəli! Tırtıl sağa baxır.', wrong: 'Xeyr, xoruz sola baxır.' }
        },
        options: [
            { ...findImage(102), isCorrect: false, audioKey: "horoz_sol", spokenText: "horoz" },
            { ...findImage(445), isCorrect: true, audioKey: "tirtil_sag", spokenText: "tırtıl" }
        ]
    },

    // ----------------------------------------------------------------------
    // 10. İtfaiye Aracı (Sol - 256) vs Atlet (Sağ - 709)
    // ----------------------------------------------------------------------
    {
        id: 19,
        question: "Sola bakan hangisi?",
        questionAudioKey: "q_which_faces_left",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! İtfaiye aracı sola bakıyor.', wrong: 'Hayır, atlet sağa bakıyor.' },
            en: { correct: 'Yes! The fire truck is facing left.', wrong: 'No, the singlet is facing right.' },
            de: { correct: 'Ja! Das Feuerwehrauto schaut nach links.', wrong: 'Nein, das Unterhemd schaut nach rechts.' },
            fr: { correct: "Oui ! Le camion de pompiers regarde à gauche.", wrong: "Non, le maillot de corps regarde à droite." },
            nl: { correct: 'Ja! De brandweerwagen kijkt naar links.', wrong: 'Nee, het hemd kijkt naar rechts.' },
            az: { correct: 'Bəli! Yanğınsöndürən maşın sola baxır.', wrong: 'Xeyr, atlet sağa baxır.' }
        },
        options: [
            { ...findImage(256), isCorrect: true, audioKey: "itfaiye_sol", spokenText: "itfaiye" },
            { ...findImage(709), isCorrect: false, audioKey: "atlet_sag", spokenText: "atlet" }
        ]
    },
    {
        id: 20,
        question: "Sağa bakan hangisi?",
        questionAudioKey: "q_which_faces_right",
        activityType: ActivityType.LeftRight,
        speech: {
            tr: { correct: 'Evet! Atlet sağa bakıyor.', wrong: 'Hayır, itfaiye aracı sola bakıyor.' },
            en: { correct: 'Yes! The singlet is facing right.', wrong: 'No, the fire truck is facing left.' },
            de: { correct: 'Ja! Das Unterhemd schaut nach rechts.', wrong: 'Nein, das Feuerwehrauto schaut nach links.' },
            fr: { correct: "Oui ! Le maillot de corps regarde à droite.", wrong: "Non, le camion de pompiers regarde à gauche." },
            nl: { correct: 'Ja! Het hemd kijkt naar rechts.', wrong: 'Nee, de brandweerwagen kijkt naar links.' },
            az: { correct: 'Bəli! Atlet sağa baxır.', wrong: 'Xeyr, yanğınsöndürən maşın sola baxır.' }
        },
        options: [
            { ...findImage(256), isCorrect: false, audioKey: "itfaiye_sol", spokenText: "itfaiye" },
            { ...findImage(709), isCorrect: true, audioKey: "atlet_sag", spokenText: "atlet" }
        ]
    }
];