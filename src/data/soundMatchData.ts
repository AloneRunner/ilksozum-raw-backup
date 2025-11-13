/**
 * Placeholder data for SoundMatch activity (Ses-Resim Eşleştirme)
 * Unit 1: Merhaba Dünya
 * 
 * TODO: Populate with real audio keys and image URLs
 */

export interface SoundMatchRound {
  id: number;
  audioKey: string;
  correctImageUrl: string;
  distractorImages: string[];
}

export const SOUND_MATCH_ROUNDS: SoundMatchRound[] = [
  {
    id: 1,
    audioKey: 'colors_red',
    correctImageUrl: '/images/colors/red.png',
    distractorImages: ['/images/colors/blue.png', '/images/colors/yellow.png']
  },
  {
    id: 2,
    audioKey: 'shapes_circle',
    correctImageUrl: '/images/shapes/circle.png',
    distractorImages: ['/images/shapes/square.png', '/images/shapes/triangle.png']
  },
  // TODO: Add more rounds
];
