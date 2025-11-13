/**
 * Letter / sound focused activity data packs.
 * Keep lightweight curated lists to avoid incorrect phonics across languages.
 *
 * Data shapes:
 * - soundPresence: target letter and words that START with that letter (simple rule)
 * - syllabification: words split into syllables (only languages with reliable syllable boundaries now)
 */

export interface SoundPresenceEntry {
  letter: string;        // Display letter (case-insensitive match at word start)
  words: string[];       // Lowercase words starting with the letter
}

export interface SyllableWordEntry {
  word: string;          // Full word (lowercase)
  syllables: string[];   // Ordered syllables
}

export interface LetterActivityPack {
  soundPresence?: SoundPresenceEntry[];
  syllabification?: SyllableWordEntry[];
  notes?: string; // optional meta / feedback request
}

// Turkish: robust syllable boundaries
const PACK_TR: LetterActivityPack = {
  soundPresence: [
    { letter: 'A', words: ['ağaç','ayakkabı','armut','araba'] },
    { letter: 'B', words: ['balık','balon','bisküvi','bardak'] },
    { letter: 'Ç', words: ['çanta','çiçek','çorba','çikolata'] },
    { letter: 'D', words: ['deniz','dondurma','damla','dolap'] },
    { letter: 'E', words: ['elma','ekmek','eşek','ev'] },
    { letter: 'K', words: ['kedi','kapı','kalem','kitap'] },
    { letter: 'M', words: ['masa','maymun','mavi','makarna'] },
    { letter: 'S', words: ['sandalye','süt','saat','sarı'] },
  ],
  syllabification: [
    { word: 'araba', syllables: ['a','ra','ba'] },
    { word: 'balık', syllables: ['ba','lık'] },
    { word: 'sandalye', syllables: ['san','dal','ye'] },
    { word: 'çikolata', syllables: ['çi','ko','la','ta'] },
    { word: 'makarna', syllables: ['ma','kar','na'] },
    { word: 'ayakkabı', syllables: ['a','yak','ka','bı'] },
    { word: 'maymun', syllables: ['may','mun'] },
    { word: 'kalem', syllables: ['ka','lem'] },
    { word: 'televizyon', syllables: ['te','le','viz','yon'] },
    { word: 'oyuncak', syllables: ['o','yun','cak'] },
  ],
};

// English: only soundPresence (simple initial letter); syllabification deferred
const PACK_EN: LetterActivityPack = {
  soundPresence: [
    { letter: 'B', words: ['ball','book','bear','banana'] },
    { letter: 'C', words: ['cat','cake','car','cow'] },
    { letter: 'D', words: ['dog','duck','door','doll'] },
    { letter: 'F', words: ['fish','frog','flower','fox'] },
    { letter: 'S', words: ['sun','star','snake','sheep'] },
    { letter: 'T', words: ['tree','toy','tiger','train'] },
  ],
  notes: 'English syllabification omitted (irregular). Add curated list later.'
};

// German: umlauts included; syllabification optional later
const PACK_DE: LetterActivityPack = {
  soundPresence: [
    { letter: 'B', words: ['baum','bär','buch','brot'] },
    { letter: 'F', words: ['fisch','fenster','fuchs','farbe'] },
    { letter: 'K', words: ['katze','keks','kirsche','kinder'] },
    { letter: 'M', words: ['maus','mond','milch','meldung'] },
    { letter: 'S', words: ['sonne','stern','schnee','stuhl'] },
    { letter: 'Ä', words: ['äpfel'] },
    { letter: 'Ö', words: ['öl'] },
    { letter: 'Ü', words: ['übel'] },
  ],
  notes: 'Feedback requested for German word list correctness / age suitability.'
};

// Azerbaijani: initial curated lists, request feedback
const PACK_AZ: LetterActivityPack = {
  soundPresence: [
    { letter: 'A', words: ['alma','armud','ağac'] },
    { letter: 'B', words: ['balıq','bal','bir'] },
    { letter: 'Ç', words: ['çörək','çanta','çiçək'] },
    { letter: 'D', words: ['düyü','dərə','dəftər'] },
    { letter: 'Ə', words: ['əsgər','əkin'] },
    { letter: 'G', words: ['günəş','göl','göz'] },
    { letter: 'P', words: ['pendir','papaq','pitsa'] },
    { letter: 'Ş', words: ['şorba','şokolad','şapka'] },
  ],
  syllabification: [
    { word: 'alma', syllables: ['al','ma'] },
    { word: 'pendir', syllables: ['pen','dir'] },
    { word: 'balıq', syllables: ['ba','lıq'] },
    { word: 'günəş', syllables: ['gü','nəş'] },
    { word: 'düyü', syllables: ['dü','yü'] },
  ],
  notes: 'Azerbaijani data draft – please confirm diacritics & syllable splits.'
};

// French: basic soundPresence, syllabification deferred
const PACK_FR: LetterActivityPack = {
  soundPresence: [
    { letter: 'B', words: ['ballon','banane','bateau','bébé'] },
    { letter: 'C', words: ['chat','chocolat','carotte','cœur'] },
    { letter: 'F', words: ['fleur','fromage','fraise','feu'] },
    { letter: 'L', words: ['lion','lune','livre','lait'] },
    { letter: 'M', words: ['maison','mer','maman','main'] },
    { letter: 'P', words: ['poisson','pain','pomme','papa'] },
    { letter: 'S', words: ['soleil','souris','salade','sac'] },
  ],
  notes: 'French letter pack is in beta. Syllabification deferred due to silent letters.'
};

// Dutch: basic soundPresence
const PACK_NL: LetterActivityPack = {
  soundPresence: [
    { letter: 'B', words: ['boom','beer','boek','bal'] },
    { letter: 'D', words: ['deur','dat','duif','dak'] },
    { letter: 'K', words: ['kat','kaas','kind','koe'] },
    { letter: 'M', words: ['maan','melk','muis','mama'] },
    { letter: 'P', words: ['paard','peer','pan','papa'] },
    { letter: 'V', words: ['vis','vogel','vuur','vork'] },
    { letter: 'Z', words: ['zon','zee','zak','zes'] },
  ],
  notes: 'Dutch letter pack is in beta. Digraphs (ij, oe, etc.) not yet covered.'
};

export const LETTER_ACTIVITY_PACKS: Record<string, LetterActivityPack> = {
  tr: PACK_TR,
  en: PACK_EN,
  de: PACK_DE,
  az: PACK_AZ,
  fr: PACK_FR,
  nl: PACK_NL,
};

export function getLetterActivityPack(lang: string): LetterActivityPack {
  return LETTER_ACTIVITY_PACKS[lang] || LETTER_ACTIVITY_PACKS.en;
}
