/**
 * Placeholder data for Categorize activity (Kategorilere Ayır)
 * Unit 6: Örüntü ve İlişkiler
 * 
 * TODO: Populate with real category pairs and items
 */

export interface CategorizeItem {
  id: number;
  word: string;
  imageUrl: string;
  category: 'left' | 'right';
}

export interface CategorizeRound {
  id: number;
  leftLabel: string;
  rightLabel: string;
  items: CategorizeItem[];
}

export const CATEGORIZE_ROUNDS: CategorizeRound[] = [
  {
    id: 1,
    leftLabel: 'Meyve',
    rightLabel: 'Sebze',
    items: [
      { id: 1, word: 'Elma', imageUrl: '/images/fruits/apple.png', category: 'left' },
      { id: 2, word: 'Havuç', imageUrl: '/images/vegetables/carrot.png', category: 'right' },
      { id: 3, word: 'Muz', imageUrl: '/images/fruits/banana.png', category: 'left' },
      { id: 4, word: 'Domates', imageUrl: '/images/vegetables/tomato.png', category: 'right' },
    ]
  },
  // TODO: Add more rounds
];
