import { ConceptRound, ActivityType } from '../../../../types';

export const fewMuchData: ConceptRound[] = [
    // 1. Üzüm
    { 
        id: 1, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few_person", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu üzümler az.', wrong: 'Hayır, bu üzümler çok.' },
            en: { correct: 'Yes! These grapes are few.', wrong: 'No, these grapes are many.' },
            de: { correct: 'Ja! Diese Trauben sind wenige.', wrong: 'Nein, diese Trauben sind viele.' },
            fr: { correct: "Oui ! Ces raisins sont peu nombreux.", wrong: "Non, ces raisins sont nombreux." },
            nl: { correct: 'Ja! Deze druiven zijn weinig.', wrong: 'Nee, deze druiven zijn veel.' },
            az: { correct: 'Bəli! Bu üzümlər azdır.', wrong: 'Xeyr, bu üzümlər çoxdur.' }
        },
        options: [
            { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: true, audioKey: "uzum", spokenText: "üzüm" },
            { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: false, audioKey: "uzum", spokenText: "üzüm" }
        ]
    },
    { 
        id: 2, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu üzümler çok.', wrong: 'Hayır, bu üzümler az.' },
            en: { correct: 'Yes! These grapes are many.', wrong: 'No, these grapes are few.' },
            de: { correct: 'Ja! Diese Trauben sind viele.', wrong: 'Nein, diese Trauben sind wenige.' },
            fr: { correct: "Oui ! Ces raisins sont nombreux.", wrong: "Non, ces raisins sont peu nombreux." },
            nl: { correct: 'Ja! Deze druiven zijn veel.', wrong: 'Nee, deze druiven zijn weinig.' },
            az: { correct: 'Bəli! Bu üzümlər çoxdur.', wrong: 'Xeyr, bu üzümlər azdır.' }
        },
        options: [
            { id: 87, word: "üzüm", imageUrl: "/images/87.png", isCorrect: false, audioKey: "uzum", spokenText: "üzüm" },
            { id: 88, word: "üzüm", imageUrl: "/images/88.png", isCorrect: true, audioKey: "uzum", spokenText: "üzüm" }
        ]
    },

    // 2. Misket
    { 
        id: 3, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu misketler az.', wrong: 'Hayır, bu misketler çok.' },
            en: { correct: 'Yes! These marbles are few.', wrong: 'No, these marbles are many.' },
            de: { correct: 'Ja! Diese Murmeln sind wenige.', wrong: 'Nein, diese Murmeln sind viele.' },
            fr: { correct: "Oui ! Ces billes sont peu nombreuses.", wrong: "Non, ces billes sont nombreuses." },
            nl: { correct: 'Ja! Deze knikkers zijn weinig.', wrong: 'Nee, deze knikkers zijn veel.' },
            az: { correct: 'Bəli! Bu mərmər daşları azdır.', wrong: 'Xeyr, bu mərmər daşları çoxdur.' }
        },
        options: [
            { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: true, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: false, audioKey: "kavanoz", spokenText: "kavanoz" }
        ]
    },
    { 
        id: 4, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu misketler çok.', wrong: 'Hayır, bu misketler az.' },
            en: { correct: 'Yes! These marbles are many.', wrong: 'No, these marbles are few.' },
            de: { correct: 'Ja! Diese Murmeln sind viele.', wrong: 'Nein, diese Murmeln sind wenige.' },
            fr: { correct: "Oui ! Ces billes sont nombreuses.", wrong: "Non, ces billes sont peu nombreuses." },
            nl: { correct: 'Ja! Deze knikkers zijn veel.', wrong: 'Nee, deze knikkers zijn weinig.' },
            az: { correct: 'Bəli! Bu mərmər daşları çoxdur.', wrong: 'Xeyr, bu mərmər daşları azdır.' }
        },
        options: [
            { id: 389, word: "kavanoz", imageUrl: "/images/389.png", isCorrect: false, audioKey: "kavanoz", spokenText: "kavanoz" },
            { id: 390, word: "kavanoz", imageUrl: "/images/390.png", isCorrect: true, audioKey: "kavanoz", spokenText: "kavanoz" }
        ]
    },

    // 3. Kitap
    { 
        id: 5, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kitaplar az.', wrong: 'Hayır, bu kitaplar çok.' },
            en: { correct: 'Yes! These books are few.', wrong: 'No, these books are many.' },
            de: { correct: 'Ja! Diese Bücher sind wenige.', wrong: 'Nein, diese Bücher sind viele.' },
            fr: { correct: "Oui ! Ces livres sont peu nombreux.", wrong: "Non, ces livres sont nombreux." },
            nl: { correct: 'Ja! Deze boeken zijn weinig.', wrong: 'Nee, deze boeken zijn veel.' },
            az: { correct: 'Bəli! Bu kitablar azdır.', wrong: 'Xeyr, bu kitablar çoxdur.' }
        },
        options: [
            { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },
    { 
        id: 6, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kitaplar çok.', wrong: 'Hayır, bu kitaplar az.' },
            en: { correct: 'Yes! These books are many.', wrong: 'No, these books are few.' },
            de: { correct: 'Ja! Diese Bücher sind viele.', wrong: 'Nein, diese Bücher sind wenige.' },
            fr: { correct: "Oui ! Ces livres sont nombreux.", wrong: "Non, ces livres sont peu nombreux." },
            nl: { correct: 'Ja! Deze boeken zijn veel.', wrong: 'Nee, deze boeken zijn weinig.' },
            az: { correct: 'Bəli! Bu kitablar çoxdur.', wrong: 'Xeyr, bu kitablar azdır.' }
        },
        options: [
            { id: 613, word: "kitaplık", imageUrl: "/images/613.png", isCorrect: false, audioKey: "kitaplik", spokenText: "kitaplık" },
            { id: 614, word: "kitaplık", imageUrl: "/images/614.png", isCorrect: true, audioKey: "kitaplik", spokenText: "kitaplık" }
        ]
    },

    // 4. Para
    { 
        id: 7, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu para az.', wrong: 'Hayır, bu para çok.' },
            en: { correct: 'Yes! This money is little.', wrong: 'No, this money is much.' },
            de: { correct: 'Ja! Dieses Geld ist wenig.', wrong: 'Nein, dieses Geld ist viel.' },
            fr: { correct: "Oui ! C'est peu d'argent.", wrong: "Non, c'est beaucoup d'argent." },
            nl: { correct: 'Ja! Dit geld is weinig.', wrong: 'Nee, dit geld is veel.' },
            az: { correct: 'Bəli! Bu pul azdır.', wrong: 'Xeyr, bu pul çoxdur.' }
        },
        options: [
            { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: true, audioKey: "para", spokenText: "para" },
            { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: false, audioKey: "para", spokenText: "para" }
        ]
    },
    { 
        id: 8, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu para çok.', wrong: 'Hayır, bu para az.' },
            en: { correct: 'Yes! This money is much.', wrong: 'No, this money is little.' },
            de: { correct: 'Ja! Dieses Geld ist viel.', wrong: 'Nein, dieses Geld ist wenig.' },
            fr: { correct: "Oui ! C'est beaucoup d'argent.", wrong: "Non, c'est peu d'argent." },
            nl: { correct: 'Ja! Dit geld is veel.', wrong: 'Nee, dit geld is weinig.' },
            az: { correct: 'Bəli! Bu pul çoxdur.', wrong: 'Xeyr, bu pul azdır.' }
        },
        options: [
            { id: 248, word: "para", imageUrl: "/images/248.png", isCorrect: false, audioKey: "para", spokenText: "para" },
            { id: 757, word: "para", imageUrl: "/images/757.png", isCorrect: true, audioKey: "para", spokenText: "para" }
        ]
    },

    // 5. Balık
    { 
        id: 9, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu balıklar az.', wrong: 'Hayır, bu balıklar çok.' },
            en: { correct: 'Yes! These fish are few.', wrong: 'No, these fish are many.' },
            de: { correct: 'Ja! Diese Fische sind wenige.', wrong: 'Nein, diese Fische sind viele.' },
            fr: { correct: "Oui ! Ces poissons sont peu nombreux.", wrong: "Non, ces poissons sont nombreux." },
            nl: { correct: 'Ja! Deze vissen zijn weinig.', wrong: 'Nee, deze vissen zijn veel.' },
            az: { correct: 'Bəli! Bu balıqlar azdır.', wrong: 'Xeyr, bu balıqlar çoxdur.' }
        },
        options: [
            { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: true, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: false, audioKey: "akvaryum", spokenText: "akvaryum" }
        ]
    },
    { 
        id: 10, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu balıklar çok.', wrong: 'Hayır, bu balıklar az.' },
            en: { correct: 'Yes! These fish are many.', wrong: 'No, these fish are few.' },
            de: { correct: 'Ja! Diese Fische sind viele.', wrong: 'Nein, diese Fische sind wenige.' },
            fr: { correct: "Oui ! Ces poissons sont nombreux.", wrong: "Non, ces poissons sont peu nombreux." },
            nl: { correct: 'Ja! Deze vissen zijn veel.', wrong: 'Nee, deze vissen zijn weinig.' },
            az: { correct: 'Bəli! Bu balıqlar çoxdur.', wrong: 'Xeyr, bu balıqlar azdır.' }
        },
        options: [
            { id: 740, word: "akvaryum", imageUrl: "/images/740.png", isCorrect: false, audioKey: "akvaryum", spokenText: "akvaryum" },
            { id: 739, word: "akvaryum", imageUrl: "/images/739.png", isCorrect: true, audioKey: "akvaryum", spokenText: "akvaryum" }
        ]
    },

    // 6. Kuş
    { 
        id: 11, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kuşlar az.', wrong: 'Hayır, bu kuşlar çok.' },
            en: { correct: 'Yes! These birds are few.', wrong: 'No, these birds are many.' },
            de: { correct: 'Ja! Diese Vögel sind wenige.', wrong: 'Nein, diese Vögel sind viele.' },
            fr: { correct: "Oui ! Ces oiseaux sont peu nombreux.", wrong: "Non, ces oiseaux sont nombreux." },
            nl: { correct: 'Ja! Deze vogels zijn weinig.', wrong: 'Nee, deze vogels zijn veel.' },
            az: { correct: 'Bəli! Bu quşlar azdır.', wrong: 'Xeyr, bu quşlar çoxdur.' }
        },
        options: [
            { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: true, audioKey: "kus", spokenText: "kuş" },
            { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: false, audioKey: "kuslar", spokenText: "kuşlar" }
        ]
    },
    { 
        id: 12, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kuşlar çok.', wrong: 'Hayır, bu kuşlar az.' },
            en: { correct: 'Yes! These birds are many.', wrong: 'No, these birds are few.' },
            de: { correct: 'Ja! Diese Vögel sind viele.', wrong: 'Nein, diese Vögel sind wenige.' },
            fr: { correct: "Oui ! Ces oiseaux sont nombreux.", wrong: "Non, ces oiseaux sont peu nombreux." },
            nl: { correct: 'Ja! Deze vogels zijn veel.', wrong: 'Nee, deze vogels zijn weinig.' },
            az: { correct: 'Bəli! Bu quşlar çoxdur.', wrong: 'Xeyr, bu quşlar azdır.' }
        },
        options: [
            { id: 742, word: "kuş", imageUrl: "/images/742.png", isCorrect: false, audioKey: "kus", spokenText: "kuş" },
            { id: 741, word: "kuşlar", imageUrl: "/images/741.png", isCorrect: true, audioKey: "kuslar", spokenText: "kuşlar" }
        ]
    },

    // 7. Kalem
    { 
        id: 13, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kalemler az.', wrong: 'Hayır, bu kalemler çok.' },
            en: { correct: 'Yes! These pencils are few.', wrong: 'No, these pencils are many.' },
            de: { correct: 'Ja! Diese Stifte sind wenige.', wrong: 'Nein, diese Stifte sind viele.' },
            fr: { correct: "Oui ! Ces crayons sont peu nombreux.", wrong: "Non, ces crayons sont nombreux." },
            nl: { correct: 'Ja! Deze potloden zijn weinig.', wrong: 'Nee, deze potloden zijn veel.' },
            az: { correct: 'Bəli! Bu qələmlər azdır.', wrong: 'Xeyr, bu qələmlər çoxdur.' }
        },
        options: [
            { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "boya kalemleri" },
            { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "boya kalemleri" }
        ]
    },
    { 
        id: 14, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu kalemler çok.', wrong: 'Hayır, bu kalemler az.' },
            en: { correct: 'Yes! These pencils are many.', wrong: 'No, these pencils are few.' },
            de: { correct: 'Ja! Diese Stifte sind viele.', wrong: 'Nein, diese Stifte sind wenige.' },
            fr: { correct: "Oui ! Ces crayons sont nombreux.", wrong: "Non, ces crayons sont peu nombreux." },
            nl: { correct: 'Ja! Deze potloden zijn veel.', wrong: 'Nee, deze potloden zijn weinig.' },
            az: { correct: 'Bəli! Bu qələmlər çoxdur.', wrong: 'Xeyr, bu qələmlər azdır.' }
        },
        options: [
            { id: 714, word: "boya kalemleri", imageUrl: "/images/714.png", isCorrect: false, audioKey: "boya_kalemleri", spokenText: "boya kalemleri" },
            { id: 715, word: "boya kalemleri", imageUrl: "/images/715.png", isCorrect: true, audioKey: "boya_kalemleri", spokenText: "boya kalemleri" }
        ]
    },

    // 8. Çiçekler
    { 
        id: 15, 
        question: "Az olan hangisi?", 
        questionAudioKey: "q_which_is_few", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu çiçekler az.', wrong: 'Hayır, bu çiçekler çok.' },
            en: { correct: 'Yes! These flowers are few.', wrong: 'No, these flowers are many.' },
            de: { correct: 'Ja! Diese Blumen sind wenige.', wrong: 'Nein, diese Blumen sind viele.' },
            fr: { correct: "Oui ! Ces fleurs sont peu nombreuses.", wrong: "Non, ces fleurs sont nombreuses." },
            nl: { correct: 'Ja! Deze bloemen zijn weinig.', wrong: 'Nee, deze bloemen zijn veel.' },
            az: { correct: 'Bəli! Bu çiçəklər azdır.', wrong: 'Xeyr, bu çiçəklər çoxdur.' }
        },
        options: [
            { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: true, audioKey: "cicekler", spokenText: "çiçekler" },
            { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: false, audioKey: "cicek_buketi", spokenText: "çiçek buketi" }
        ]
    },
    { 
        id: 16, 
        question: "Çok olan hangisi?", 
        questionAudioKey: "q_which_is_much", 
        activityType: ActivityType.FewMuch, 
        speech: {
            tr: { correct: 'Evet! Bu çiçekler çok.', wrong: 'Hayır, bu çiçekler az.' },
            en: { correct: 'Yes! These flowers are many.', wrong: 'No, these flowers are few.' },
            de: { correct: 'Ja! Diese Blumen sind viele.', wrong: 'Nein, diese Blumen sind wenige.' },
            fr: { correct: "Oui ! Ces fleurs sont nombreuses.", wrong: "Non, ces fleurs sont peu nombreuses." },
            nl: { correct: 'Ja! Deze bloemen zijn veel.', wrong: 'Nee, deze bloemen zijn weinig.' },
            az: { correct: 'Bəli! Bu çiçəklər çoxdur.', wrong: 'Xeyr, bu çiçəklər azdır.' }
        },
        options: [
            { id: 459, word: "çiçekler", imageUrl: "/images/459.png", isCorrect: false, audioKey: "cicekler", spokenText: "çiçekler" },
            { id: 483, word: "çiçek buketi", imageUrl: "/images/483.png", isCorrect: true, audioKey: "cicek_buketi", spokenText: "çiçek buketi" }
        ]
    },
];