import { ActivityType, Word } from '../../../../types';
import { imageData } from '../../imageData.ts';

// A helper function to safely get metadata for a given ID
const getMeta = (id: number) => {
    const item = imageData.find(item => item.id === id);
    if (!item) {
        console.warn(`No metadata found for ID: ${id}`);
        return { imageUrl: '', audioKeys: { default: '' } };
    }
    return item;
};

export const enYesNoData: Word[] = [
    // --- Animals ---
    { id: 16, word: 'cat', imageUrl: getMeta(16).imageUrl, audioKeys: { default: getMeta(16).audioKeys.default }, questionText: 'Is this a cat?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 16, word: 'dog', imageUrl: getMeta(16).imageUrl, audioKeys: { default: getMeta(47).audioKeys.default }, questionText: 'Is this a dog?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 47, word: 'dog', imageUrl: getMeta(47).imageUrl, audioKeys: { default: getMeta(47).audioKeys.default }, questionText: 'Is this a dog?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 47, word: 'lion', imageUrl: getMeta(47).imageUrl, audioKeys: { default: getMeta(100).audioKeys.default }, questionText: 'Is this a lion?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 28, word: 'elephant', imageUrl: getMeta(28).imageUrl, audioKeys: { default: getMeta(28).audioKeys.default }, questionText: 'Is this an elephant?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 28, word: 'mouse', imageUrl: getMeta(28).imageUrl, audioKeys: { default: getMeta(29).audioKeys.default }, questionText: 'Is this a mouse?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 101, word: 'giraffe', imageUrl: getMeta(101).imageUrl, audioKeys: { default: getMeta(101).audioKeys.default }, questionText: 'Is this a giraffe?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 101, word: 'horse', imageUrl: getMeta(101).imageUrl, audioKeys: { default: getMeta(290).audioKeys.default }, questionText: 'Is this a horse?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 41, word: 'rabbit', imageUrl: getMeta(41).imageUrl, audioKeys: { default: getMeta(41).audioKeys.default }, questionText: 'Is this a rabbit?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 41, word: 'squirrel', imageUrl: getMeta(41).imageUrl, audioKeys: { default: getMeta(417).audioKeys.default }, questionText: 'Is this a squirrel?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 73, word: 'bird', imageUrl: getMeta(73).imageUrl, audioKeys: { default: getMeta(73).audioKeys.default }, questionText: 'Is this a bird?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 73, word: 'fish', imageUrl: getMeta(73).imageUrl, audioKeys: { default: getMeta(740).audioKeys.default }, questionText: 'Is this a fish?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 42, word: 'turtle', imageUrl: getMeta(42).imageUrl, audioKeys: { default: getMeta(42).audioKeys.default }, questionText: 'Is this a turtle?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 42, word: 'snake', imageUrl: getMeta(42).imageUrl, audioKeys: { default: getMeta(323).audioKeys.default }, questionText: 'Is this a snake?', isCorrectAnswer: false, activityType: ActivityType.YesNo },

    // --- Fruits & Food ---
    { id: 43, word: 'apple', imageUrl: getMeta(43).imageUrl, audioKeys: { default: getMeta(43).audioKeys.default }, questionText: 'Is this an apple?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 43, word: 'orange', imageUrl: getMeta(43).imageUrl, audioKeys: { default: getMeta(115).audioKeys.default }, questionText: 'Is this an orange?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 114, word: 'banana', imageUrl: getMeta(114).imageUrl, audioKeys: { default: getMeta(114).audioKeys.default }, questionText: 'Is this a banana?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 114, word: 'lemon', imageUrl: getMeta(114).imageUrl, audioKeys: { default: getMeta(55).audioKeys.default }, questionText: 'Is this a lemon?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 23, word: 'pizza', imageUrl: getMeta(23).imageUrl, audioKeys: { default: getMeta(23).audioKeys.default }, questionText: 'Is this a pizza?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 23, word: 'cake', imageUrl: getMeta(23).imageUrl, audioKeys: { default: getMeta(78).audioKeys.default }, questionText: 'Is this a cake?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 112, word: 'bread', imageUrl: getMeta(112).imageUrl, audioKeys: { default: getMeta(112).audioKeys.default }, questionText: 'Is this bread?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 112, word: 'cheese', imageUrl: getMeta(112).imageUrl, audioKeys: { default: getMeta(50).audioKeys.default }, questionText: 'Is this cheese?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 113, word: 'egg', imageUrl: getMeta(113).imageUrl, audioKeys: { default: getMeta(113).audioKeys.default }, questionText: 'Is this an egg?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 113, word: 'egg', imageUrl: getMeta(113).imageUrl, audioKeys: { default: getMeta(113).audioKeys.default }, questionText: 'Is this a potato?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 63, word: 'ice cream', imageUrl: getMeta(63).imageUrl, audioKeys: { default: getMeta(63).audioKeys.default }, questionText: 'Is this ice cream?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 63, word: 'ice cream', imageUrl: getMeta(63).imageUrl, audioKeys: { default: getMeta(63).audioKeys.default }, questionText: 'Is this yogurt?', isCorrectAnswer: false, activityType: ActivityType.YesNo },

    // --- Objects & Vehicles ---
    { id: 1, word: 'car', imageUrl: getMeta(1).imageUrl, audioKeys: { default: getMeta(1).audioKeys.default }, questionText: 'Is this a car?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 1, word: 'bus', imageUrl: getMeta(1).imageUrl, audioKeys: { default: getMeta(105).audioKeys.default }, questionText: 'Is this a bus?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 156, word: 'ball', imageUrl: getMeta(156).imageUrl, audioKeys: { default: getMeta(156).audioKeys.default }, questionText: 'Is this a ball?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 156, word: 'balloon', imageUrl: getMeta(156).imageUrl, audioKeys: { default: getMeta(130).audioKeys.default }, questionText: 'Is this a balloon?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 37, word: 'book', imageUrl: getMeta(37).imageUrl, audioKeys: { default: getMeta(37).audioKeys.default }, questionText: 'Is this a book?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 37, word: 'notebook', imageUrl: getMeta(37).imageUrl, audioKeys: { default: getMeta(882).audioKeys.default }, questionText: 'Is this a notebook?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 134, word: 'table', imageUrl: getMeta(134).imageUrl, audioKeys: { default: getMeta(134).audioKeys.default }, questionText: 'Is this a table?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 134, word: 'chair', imageUrl: getMeta(134).imageUrl, audioKeys: { default: getMeta(319).audioKeys.default }, questionText: 'Is this a chair?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 110, word: 'bicycle', imageUrl: getMeta(110).imageUrl, audioKeys: { default: getMeta(110).audioKeys.default }, questionText: 'Is this a bicycle?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 110, word: 'motorcycle', imageUrl: getMeta(110).imageUrl, audioKeys: { default: getMeta(259).audioKeys.default }, questionText: 'Is this a motorcycle?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 106, word: 'train', imageUrl: getMeta(106).imageUrl, audioKeys: { default: getMeta(106).audioKeys.default }, questionText: 'Is this a train?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 106, word: 'airplane', imageUrl: getMeta(106).imageUrl, audioKeys: { default: getMeta(107).audioKeys.default }, questionText: 'Is this an airplane?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 606, word: 'bed', imageUrl: getMeta(606).imageUrl, audioKeys: { default: getMeta(606).audioKeys.default }, questionText: 'Is this a bed?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 606, word: 'sofa', imageUrl: getMeta(606).imageUrl, audioKeys: { default: getMeta(549).audioKeys.default }, questionText: 'Is this a sofa?', isCorrectAnswer: false, activityType: ActivityType.YesNo },

    // --- Clothing (DÜZELTİLDİ) ---
    { id: 13, word: 't-shirt', imageUrl: getMeta(13).imageUrl, audioKeys: { default: getMeta(13).audioKeys.default }, questionText: 'Is this a t-shirt?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 13, word: 'dress', imageUrl: getMeta(13).imageUrl, audioKeys: { default: getMeta(268).audioKeys.default }, questionText: 'Is this a dress?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    
    // PANTOLON İÇİN DOĞRU ÇİFT EKLENDİ
    { id: 79, word: 'pants', imageUrl: getMeta(79).imageUrl, audioKeys: { default: getMeta(79).audioKeys.default }, questionText: 'Are these pants?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 79, word: 'shorts', imageUrl: getMeta(79).imageUrl, audioKeys: { default: getMeta(80).audioKeys.default }, questionText: 'Are these shorts?', isCorrectAnswer: false, activityType: ActivityType.YesNo },

    { id: 59, word: 'shoe', imageUrl: getMeta(59).imageUrl, audioKeys: { default: getMeta(59).audioKeys.default }, questionText: 'Is this a shoe?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 59, word: 'boot', imageUrl: getMeta(59).imageUrl, audioKeys: { default: getMeta(307).audioKeys.default }, questionText: 'Is this a boot?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 147, word: 'socks', imageUrl: getMeta(147).imageUrl, audioKeys: { default: getMeta(147).audioKeys.default }, questionText: 'Are these socks?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 147, word: 'gloves', imageUrl: getMeta(147).imageUrl, audioKeys: { default: getMeta(272).audioKeys.default }, questionText: 'Are these gloves?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
    { id: 111, word: 'hat', imageUrl: getMeta(111).imageUrl, audioKeys: { default: getMeta(111).audioKeys.default }, questionText: 'Is this a hat?', isCorrectAnswer: true, activityType: ActivityType.YesNo },
    { id: 111, word: 'scarf', imageUrl: getMeta(111).imageUrl, audioKeys: { default: getMeta(271).audioKeys.default }, questionText: 'Is this a scarf?', isCorrectAnswer: false, activityType: ActivityType.YesNo },
];