import { ConceptRound, ActivityType } from '../../../../types';

export const fullEmptyData: ConceptRound[] = [
    // 1. Kutu
    { 
        id: 1, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kutu doludur.', wrong: 'Hayır, kutu boştur.' },
            en: { correct: 'Yes! The box is full.', wrong: 'No, the box is empty.' },
            de: { correct: 'Ja! Die Schachtel ist voll.', wrong: 'Nein, die Schachtel ist leer.' },
            fr: { correct: "Oui ! La boîte est pleine.", wrong: "Non, la boîte est vide." },
            nl: { correct: 'Ja! De doos is vol.', wrong: 'Nee, de doos is leeg.' },
            az: { correct: 'Bəli! Qutu doludur.', wrong: 'Xeyr, qutu boşdur.' }
        },
        options: [
            { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" },
            { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" }
        ]
    },
    { 
        id: 1.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kutu boştur.', wrong: 'Hayır, kutu doludur.' },
            en: { correct: 'Yes! The box is empty.', wrong: 'No, the box is full.' },
            de: { correct: 'Ja! Die Schachtel ist leer.', wrong: 'Nein, die Schachtel ist voll.' },
            fr: { correct: "Oui ! La boîte est vide.", wrong: "Non, la boîte est pleine." },
            nl: { correct: 'Ja! De doos is leeg.', wrong: 'Nee, de doos is vol.' },
            az: { correct: 'Bəli! Qutu boşdur.', wrong: 'Xeyr, qutu doludur.' }
        },
        options: [
            { id: 7, word: "kutu", imageUrl: "/images/7.png", isCorrect: false, audioKey: "kutu", spokenText: "kutu" },
            { id: 6, word: "kutu", imageUrl: "/images/6.png", isCorrect: true, audioKey: "kutu", spokenText: "kutu" }
        ]
    },

    // 2. Bardak
    { 
        id: 2, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Bardak doludur.', wrong: 'Hayır, bardak boştur.' },
            en: { correct: 'Yes! The glass is full.', wrong: 'No, the glass is empty.' },
            de: { correct: 'Ja! Das Glas ist voll.', wrong: 'Nein, das Glas ist leer.' },
            fr: { correct: "Oui ! Le verre est plein.", wrong: "Non, le verre est vide." },
            nl: { correct: 'Ja! Het glas is vol.', wrong: 'Nee, het glas is leeg.' },
            az: { correct: 'Bəli! Stəkan doludur.', wrong: 'Xeyr, stəkan boşdur.' }
        },
        options: [
            { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" },
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" }
        ]
    },
    { 
        id: 2.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Bardak boştur.', wrong: 'Hayır, bardak doludur.' },
            en: { correct: 'Yes! The glass is empty.', wrong: 'No, the glass is full.' },
            de: { correct: 'Ja! Das Glas ist leer.', wrong: 'Nein, das Glas ist voll.' },
            fr: { correct: "Oui ! Le verre est vide.", wrong: "Non, le verre est plein." },
            nl: { correct: 'Ja! Het glas is leeg.', wrong: 'Nee, het glas is vol.' },
            az: { correct: 'Bəli! Stəkan boşdur.', wrong: 'Xeyr, stəkan doludur.' }
        },
        options: [
            { id: 123, word: "bardak", imageUrl: "/images/123.png", isCorrect: false, audioKey: "bardak", spokenText: "bardak" },
            { id: 124, word: "bardak", imageUrl: "/images/124.png", isCorrect: true, audioKey: "bardak", spokenText: "bardak" }
        ]
    },

    // 3. Şişe
    { 
        id: 3, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Şişe doludur.', wrong: 'Hayır, şişe boştur.' },
            en: { correct: 'Yes! The bottle is full.', wrong: 'No, the bottle is empty.' },
            de: { correct: 'Ja! Die Flasche ist voll.', wrong: 'Nein, die Flasche ist leer.' },
            fr: { correct: "Oui ! La bouteille est pleine.", wrong: "Non, la bouteille est vide." },
            nl: { correct: 'Ja! De fles is vol.', wrong: 'Nee, de fles is leeg.' },
            az: { correct: 'Bəli! Şüşə doludur.', wrong: 'Xeyr, şüşə boşdur.' }
        },
        options: [
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },
    { 
        id: 3.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Şişe boştur.', wrong: 'Hayır, şişe doludur.' },
            en: { correct: 'Yes! The bottle is empty.', wrong: 'No, the bottle is full.' },
            de: { correct: 'Ja! Die Flasche ist leer.', wrong: 'Nein, die Flasche ist voll.' },
            fr: { correct: "Oui ! La bouteille est vide.", wrong: "Non, la bouteille est pleine." },
            nl: { correct: 'Ja! De fles is leeg.', wrong: 'Nee, de fles is vol.' },
            az: { correct: 'Bəli! Şüşə boşdur.', wrong: 'Xeyr, şüşə doludur.' }
        },
        options: [
            { id: 518, word: "su şişesi", imageUrl: "/images/518.png", isCorrect: false, audioKey: "su_sisesi", spokenText: "su şişesi" },
            { id: 519, word: "su şişesi", imageUrl: "/images/519.png", isCorrect: true, audioKey: "su_sisesi", spokenText: "su şişesi" }
        ]
    },

    // 4. Sepet
    { 
        id: 4, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Sepet doludur.', wrong: 'Hayır, sepet boştur.' },
            en: { correct: 'Yes! The basket is full.', wrong: 'No, the basket is empty.' },
            de: { correct: 'Ja! Der Korb ist voll.', wrong: 'Nein, der Korb ist leer.' },
            fr: { correct: "Oui ! Le panier est plein.", wrong: "Non, le panier est vide." },
            nl: { correct: 'Ja! De mand is vol.', wrong: 'Nee, de mand is leeg.' },
            az: { correct: 'Bəli! Səbət doludur.', wrong: 'Xeyr, səbət boşdur.' }
        },
        options: [
            { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: true, audioKey: "sepet", spokenText: "sepet" },
            { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: false, audioKey: "sepet", spokenText: "sepet" }
        ]
    },
    { 
        id: 4.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Sepet boştur.', wrong: 'Hayır, sepet doludur.' },
            en: { correct: 'Yes! The basket is empty.', wrong: 'No, the basket is full.' },
            de: { correct: 'Ja! Der Korb ist leer.', wrong: 'Nein, der Korb ist voll.' },
            fr: { correct: "Oui ! Le panier est vide.", wrong: "Non, le panier est plein." },
            nl: { correct: 'Ja! De mand is leeg.', wrong: 'Nee, de mand is vol.' },
            az: { correct: 'Bəli! Səbət boşdur.', wrong: 'Xeyr, səbət doludur.' }
        },
        options: [
            { id: 448, word: "sepet", imageUrl: "/images/448.png", isCorrect: false, audioKey: "sepet", spokenText: "sepet" },
            { id: 449, word: "sepet", imageUrl: "/images/449.png", isCorrect: true, audioKey: "sepet", spokenText: "sepet" }
        ]
    },

    // 5. Kase
    { 
        id: 5, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kase doludur.', wrong: 'Hayır, kase boştur.' },
            en: { correct: 'Yes! The bowl is full.', wrong: 'No, the bowl is empty.' },
            de: { correct: 'Ja! Die Schüssel ist voll.', wrong: 'Nein, die Schüssel ist leer.' },
            fr: { correct: "Oui ! Le bol est plein.", wrong: "Non, le bol est vide." },
            nl: { correct: 'Ja! De kom is vol.', wrong: 'Nee, de kom is leeg.' },
            az: { correct: 'Bəli! Kasa doludur.', wrong: 'Xeyr, kasa boşdur.' }
        },
        options: [
            { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: true, audioKey: "kase", spokenText: "kase" },
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: false, audioKey: "kase", spokenText: "kase" }
        ]
    },
    { 
        id: 5.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kase boştur.', wrong: 'Hayır, kase doludur.' },
            en: { correct: 'Yes! The bowl is empty.', wrong: 'No, the bowl is full.' },
            de: { correct: 'Ja! Die Schüssel ist leer.', wrong: 'Nein, die Schüssel ist voll.' },
            fr: { correct: "Oui ! Le bol est vide.", wrong: "Non, le bol est plein." },
            nl: { correct: 'Ja! De kom is leeg.', wrong: 'Nee, de kom is vol.' },
            az: { correct: 'Bəli! Kasa boşdur.', wrong: 'Xeyr, kasa doludur.' }
        },
        options: [
            { id: 332, word: "kase", imageUrl: "/images/332.png", isCorrect: false, audioKey: "kase", spokenText: "kase" },
            { id: 700, word: "kase", imageUrl: "/images/700.png", isCorrect: true, audioKey: "kase", spokenText: "kase" }
        ]
    },

    // 6. Kumbara
    { 
        id: 6, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kumbara doludur.', wrong: 'Hayır, kumbara boştur.' },
            en: { correct: 'Yes! The piggy bank is full.', wrong: 'No, the piggy bank is empty.' },
            de: { correct: 'Ja! Das Sparschwein ist voll.', wrong: 'Nein, das Sparschwein ist leer.' },
            fr: { correct: "Oui ! La tirelire est pleine.", wrong: "Non, la tirelire est vide." },
            nl: { correct: 'Ja! De spaarpot is vol.', wrong: 'Nee, de spaarpot is leeg.' },
            az: { correct: 'Bəli! Donuz bankası doludur.', wrong: 'Xeyr, donuz bankası boşdur.' }
        },
        options: [
            { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: true, audioKey: "kumbara", spokenText: "kumbara" },
            { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: false, audioKey: "kumbara", spokenText: "kumbara" }
        ]
    },
    { 
        id: 6.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kumbara boştur.', wrong: 'Hayır, kumbara doludur.' },
            en: { correct: 'Yes! The piggy bank is empty.', wrong: 'No, the piggy bank is full.' },
            de: { correct: 'Ja! Das Sparschwein ist leer.', wrong: 'Nein, das Sparschwein ist voll.' },
            fr: { correct: "Oui ! La tirelire est vide.", wrong: "Non, la tirelire est pleine." },
            nl: { correct: 'Ja! De spaarpot is leeg.', wrong: 'Nee, de spaarpot is vol.' },
            az: { correct: 'Bəli! Donuz bankası boşdur.', wrong: 'Xeyr, donuz bankası doludur.' }
        },
        options: [
            { id: 263, word: "kumbara", imageUrl: "/images/263.png", isCorrect: false, audioKey: "kumbara", spokenText: "kumbara" },
            { id: 184, word: "kumbara", imageUrl: "/images/184.png", isCorrect: true, audioKey: "kumbara", spokenText: "kumbara" }
        ]
    },

    // 7. Kavanoz
    { 
        id: 7, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kavanoz doludur.', wrong: 'Hayır, kavanoz boştur.' },
            en: { correct: 'Yes! The jar is full.', wrong: 'No, the jar is empty.' },
            de: { correct: 'Ja! Das Glas ist voll.', wrong: 'Nein, das Glas ist leer.' },
            fr: { correct: "Oui ! Le bocal est plein.", wrong: "Non, le bocal est vide." },
            nl: { correct: 'Ja! De pot is vol.', wrong: 'Nee, de pot is leeg.' },
            az: { correct: 'Bəli! Banka doludur.', wrong: 'Xeyr, banka boşdur.' }
        },
        options: [
            { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: false, audioKey: "kavanoz", spokenText: "kavanoz" }
        ]
    },
    { 
        id: 7.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Kavanoz boştur.', wrong: 'Hayır, kavanoz doludur.' },
            en: { correct: 'Yes! The jar is empty.', wrong: 'No, the jar is full.' },
            de: { correct: 'Ja! Das Glas ist leer.', wrong: 'Nein, das Glas ist voll.' },
            fr: { correct: "Oui ! Le bocal est vide.", wrong: "Non, le bocal est plein." },
            nl: { correct: 'Ja! De pot is leeg.', wrong: 'Nee, de pot is vol.' },
            az: { correct: 'Bəli! Banka boşdur.', wrong: 'Xeyr, banka doludur.' }
        },
        options: [
            { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 447, word: "kavanoz", imageUrl: "/images/447.png", isCorrect: true, audioKey: "kavanoz", spokenText: "kavanoz" }
        ]
    },

    // 8. Çöp Kutusu
    { 
        id: 8, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
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
        id: 8.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
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

    // 9. Vazo
    { 
        id: 9, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Vazo doludur.', wrong: 'Hayır, vazo boştur.' },
            en: { correct: 'Yes! The vase is full.', wrong: 'No, the vase is empty.' },
            de: { correct: 'Ja! Die Vase ist voll.', wrong: 'Nein, die Vase ist leer.' },
            fr: { correct: "Oui ! Le vase est plein.", wrong: "Non, le vase est vide." },
            nl: { correct: 'Ja! De vaas is vol.', wrong: 'Nee, de vaas is leeg.' },
            az: { correct: 'Bəli! Güldan doludur.', wrong: 'Xeyr, güldan boşdur.' }
        },
        options: [
            { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: true, audioKey: "vazo", spokenText: "vazo" },
            { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: false, audioKey: "vazo", spokenText: "vazo" }
        ]
    },
    { 
        id: 9.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Vazo boştur.', wrong: 'Hayır, vazo doludur.' },
            en: { correct: 'Yes! The vase is empty.', wrong: 'No, the vase is full.' },
            de: { correct: 'Ja! Die Vase ist leer.', wrong: 'Nein, die Vase ist voll.' },
            fr: { correct: "Oui ! Le vase est vide.", wrong: "Non, le vase est plein." },
            nl: { correct: 'Ja! De vaas is leeg.', wrong: 'Nee, de vaas is vol.' },
            az: { correct: 'Bəli! Güldan boşdur.', wrong: 'Xeyr, güldan doludur.' }
        },
        options: [
            { id: 35, word: "vazo", imageUrl: "/images/35.png", isCorrect: false, audioKey: "vazo", spokenText: "vazo" },
            { id: 34, word: "vazo", imageUrl: "/images/34.png", isCorrect: true, audioKey: "vazo", spokenText: "vazo" }
        ]
    },

    // 10. Saksı
    { 
        id: 10, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Saksı doludur.', wrong: 'Hayır, saksı boştur.' },
            en: { correct: 'Yes! The flowerpot is full.', wrong: 'No, the flowerpot is empty.' },
            de: { correct: 'Ja! Der Blumentopf ist voll.', wrong: 'Nein, der Blumentopf ist leer.' },
            fr: { correct: "Oui ! Le pot de fleurs est plein.", wrong: "Non, le pot de fleurs est vide." },
            nl: { correct: 'Ja! De bloempot is vol.', wrong: 'Nee, de bloempot is leeg.' },
            az: { correct: 'Bəli! Gül dibçəyi doludur.', wrong: 'Xeyr, gül dibçəyi boşdur.' }
        },
        options: [
            { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: true, audioKey: "saksi", spokenText: "saksı" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: false, audioKey: "saksi", spokenText: "saksı" }
        ]
    },
    { 
        id: 10.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Saksı boştur.', wrong: 'Hayır, saksı doludur.' },
            en: { correct: 'Yes! The flowerpot is empty.', wrong: 'No, the flowerpot is full.' },
            de: { correct: 'Ja! Der Blumentopf ist leer.', wrong: 'Nein, der Blumentopf ist voll.' },
            fr: { correct: "Oui ! Le pot de fleurs est vide.", wrong: "Non, le pot de fleurs est plein." },
            nl: { correct: 'Ja! De bloempot is leeg.', wrong: 'Nee, de bloempot is vol.' },
            az: { correct: 'Bəli! Gül dibçəyi boşdur.', wrong: 'Xeyr, gül dibçəyi doludur.' }
        },
        options: [
            { id: 433, word: "saksı", imageUrl: "/images/433.png", isCorrect: false, audioKey: "saksi", spokenText: "saksı" },
            { id: 432, word: "saksı", imageUrl: "/images/432.png", isCorrect: true, audioKey: "saksi", spokenText: "saksı" }
        ]
    },

    // 11. Hazine Sandığı
    { 
        id: 11, 
        question: "Dolu olan hangisi?", 
        questionAudioKey: "q_which_is_full", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Sandık doludur.', wrong: 'Hayır, sandık boştur.' },
            en: { correct: 'Yes! The chest is full.', wrong: 'No, the chest is empty.' },
            de: { correct: 'Ja! Die Truhe ist voll.', wrong: 'Nein, die Truhe ist leer.' },
            fr: { correct: "Oui ! Le coffre est plein.", wrong: "Non, le coffre est vide." },
            nl: { correct: 'Ja! De kist is vol.', wrong: 'Nee, de kist is leeg.' },
            az: { correct: 'Bəli! Sandıq doludur.', wrong: 'Xeyr, sandıq boşdur.' }
        },
        options: [
            { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: true, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" },
            { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: false, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" }
        ]
    },
    { 
        id: 11.1, 
        question: "Boş olan hangisi?", 
        questionAudioKey: "q_which_is_empty", 
        activityType: ActivityType.FullEmpty, 
        speech: {
            tr: { correct: 'Evet! Sandık boştur.', wrong: 'Hayır, sandık doludur.' },
            en: { correct: 'Yes! The chest is empty.', wrong: 'No, the chest is full.' },
            de: { correct: 'Ja! Die Truhe ist leer.', wrong: 'Nein, die Truhe ist voll.' },
            fr: { correct: "Oui ! Le coffre est vide.", wrong: "Non, le coffre est plein." },
            nl: { correct: 'Ja! De kist is leeg.', wrong: 'Nee, de kist is vol.' },
            az: { correct: 'Bəli! Sandıq boşdur.', wrong: 'Xeyr, sandıq doludur.' }
        },
        options: [
            { id: 202, word: "hazine sandığı", imageUrl: "/images/202.png", isCorrect: false, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" },
            { id: 203, word: "hazine sandığı", imageUrl: "/images/203.png", isCorrect: true, audioKey: "hazine_sandigi", spokenText: "hazine sandığı" }
        ]
    },
];