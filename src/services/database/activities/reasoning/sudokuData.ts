import { SudokuRound, ActivityType } from '../../../../types.ts';

export const sudokuData: Omit<SudokuRound, 'puzzleGrid'>[] = [
    {
        id: 1, questionText: 'Eksik olanı yerleştir.', questionAudioKey: 'q_place_the_missing', activityType: ActivityType.Sudoku,
        itemPool: [ {id: 65, word: 'daire', imageUrl: '/images/65.png'}, {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'} ],
        solutionGrid: [
            {id: 65, word: 'daire', imageUrl: '/images/65.png'}, {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'},
            {id: 66, word: 'kare', imageUrl: '/images/66.png'}, {id: 65, word: 'daire', imageUrl: '/images/65.png'}, {id: 67, word: 'üçgen', imageUrl: '/images/67.png'},
            {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'}, {id: 65, word: 'daire', imageUrl: '/images/65.png'},
        ],
    },
    {
        id: 2, questionText: 'Eksik olanı yerleştir.', questionAudioKey: 'q_place_the_missing', activityType: ActivityType.Sudoku,
        itemPool: [ {id: 69, word: 'yıldız', imageUrl: '/images/69.png'}, {id: 68, word: 'dikdörtgen', imageUrl: '/images/68.png'}, {id: 65, word: 'daire', imageUrl: '/images/65.png'} ],
        solutionGrid: [
            {id: 69, word: 'yıldız', imageUrl: '/images/69.png'}, {id: 68, word: 'dikdörtgen', imageUrl: '/images/68.png'}, {id: 65, word: 'daire', imageUrl: '/images/65.png'},
            {id: 65, word: 'daire', imageUrl: '/images/65.png'}, {id: 69, word: 'yıldız', imageUrl: '/images/69.png'}, {id: 68, word: 'dikdörtgen', imageUrl: '/images/68.png'},
            {id: 68, word: 'dikdörtgen', imageUrl: '/images/68.png'}, {id: 65, word: 'daire', imageUrl: '/images/65.png'}, {id: 69, word: 'yıldız', imageUrl: '/images/69.png'},
        ],
    },
    {
        id: 3, questionText: 'Eksik olanı yerleştir.', questionAudioKey: 'q_place_the_missing', activityType: ActivityType.Sudoku,
        itemPool: [ {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'}, {id: 69, word: 'yıldız', imageUrl: '/images/69.png'} ],
        solutionGrid: [
            {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'}, {id: 69, word: 'yıldız', imageUrl: '/images/69.png'},
            {id: 69, word: 'yıldız', imageUrl: '/images/69.png'}, {id: 67, word: 'üçgen', imageUrl: '/images/67.png'}, {id: 66, word: 'kare', imageUrl: '/images/66.png'},
            {id: 66, word: 'kare', imageUrl: '/images/66.png'}, {id: 69, word: 'yıldız', imageUrl: '/images/69.png'}, {id: 67, word: 'üçgen', imageUrl: '/images/67.png'},
        ],
    }
];