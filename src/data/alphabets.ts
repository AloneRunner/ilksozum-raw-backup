/**
 * Unified alphabet specifications per language.
 * Used by letter-based activities (Grid, FindTheLetter, Hangman, etc.).
 */

export interface AlphabetGroup { name: string; letters: string[] }
export interface AlphabetSpec {
  letters: string[];
  displayGroups?: AlphabetGroup[]; // Optional pedagogical ordering groups
  digraphs?: string[];            // Multi-character units treated as single sounds (future)
  accentedPolicy?: 'separate' | 'base'; // How to treat accented variants in UI (future)
}

// Turkish letter groups preserved from existing constants
const TURKISH_GROUPS: AlphabetGroup[] = [
  { name: '1. Grup', letters: ['A','N','E','T','İ','L'] },
  { name: '2. Grup', letters: ['O','K','U','R','İ','M'] },
  { name: '3. Grup', letters: ['Ü','S','Ö','Y','D','Z'] },
  { name: '4. Grup', letters: ['Ç','B','G','C','Ş'] },
  { name: '5. Grup', letters: ['P','H','V','Ğ','F','J'] },
];

export const ALPHABETS: Record<string, AlphabetSpec> = {
  tr: {
    letters: ['A','B','C','Ç','D','E','F','G','Ğ','H','I','İ','J','K','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z'],
    displayGroups: TURKISH_GROUPS,
  },
  az: {
    // Azerbaijani Latin alphabet
    letters: ['A','B','C','Ç','D','E','Ə','F','G','Ğ','H','X','I','İ','J','K','Q','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z'],
  },
  de: {
    // Umlauts included as separate selectable letters for child-friendly activities
    letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Ä','Ö','Ü'],
    accentedPolicy: 'separate',
  },
  en: {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  },
  fr: {
    // Accents handled at word level; base letters used for selection.
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    accentedPolicy: 'base',
  },
  nl: {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    digraphs: ['IJ','OE','UI','IE','OU','EU','SCH'],
  },
};

export function getAlphabet(lang: string): string[] {
  return ALPHABETS[lang]?.letters || ALPHABETS.en.letters;
}

export function getDisplayGroups(lang: string): AlphabetGroup[] | undefined {
  return ALPHABETS[lang]?.displayGroups;
}
