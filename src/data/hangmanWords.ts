/**
 * Adam Asmaca oyunu için kelime havuzu
 * Wordmap.tr-en.json'dan seçilmiş basit Türkçe kelimeler
 * 3-8 harf arası, çocuklar için tanıdık kelimeler
 */
import { getAlphabet } from './alphabets.ts';

export interface HangmanCategory {
  name: string;
  words: string[];
}

export const HANGMAN_CATEGORIES: HangmanCategory[] = [
  {
    name: 'Hayvanlar',
    words: [
      'kedi',
      'köpek',
      'kuş',
      'balık',
      'aslan',
      'fil',
      'ayı',
      'tilki',
      'tavşan',
      'fare',
      'inek',
      'at',
      'koyun',
      'keçi',
      'maymun',
      'zebra',
      'panda',
      'tavuk',
      'ördek',
      'arı',
      'kurbağa',
      'yılan'
    ]
  },
  {
    name: 'Meyveler',
    words: [
      'elma',
      'armut',
      'muz',
      'üzüm',
      'kiraz',
      'kivi',
      'nar',
      'erik',
      'limon',
      'kavun',
      'karpuz'
    ]
  },
  {
    name: 'Renkler',
    words: [
      'kırmızı',
      'mavi',
      'yeşil',
      'sarı',
      'beyaz',
      'siyah',
      'pembe',
      'mor',
      'turuncu',
      'gri',
      'kahve'
    ]
  },
  {
    name: 'Nesneler',
    words: [
      'top',
      'kitap',
      'kalem',
      'masa',
      'kapı',
      'pencere',
      'sandalye',
      'tabak',
      'bardak',
      'çanta',
      'ayakkabı',
      'şapka',
      'gözlük',
      'ayna',
      'saat',
      'telefon',
      'oyuncak',
      'balon',
      'bisiklet'
    ]
  },
  {
    name: 'Doğa',
    words: [
      'ağaç',
      'çiçek',
      'yaprak',
      'güneş',
      'ay',
      'yıldız',
      'bulut',
      'kar',
      'yağmur',
      'deniz',
      'göl',
      'dağ',
      'tepe',
      'orman'
    ]
  },
  {
    name: 'Yiyecek',
    words: [
      'ekmek',
      'peynir',
      'süt',
      'yumurta',
      'bal',
      'çorba',
      'pilav',
      'makarna',
      'pizza',
      'pasta',
      'bisküvi',
      'çikolata'
    ]
  }
];

/**
 * Tüm kategorilerden rastgele bir kelime seç
 */
export function getRandomWord(): { word: string; category: string } {
  const allWords: { word: string; category: string }[] = [];
  
  HANGMAN_CATEGORIES.forEach(category => {
    category.words.forEach(word => {
      allWords.push({ word, category: category.name });
    });
  });
  
  const randomIndex = Math.floor(Math.random() * allWords.length);
  return allWords[randomIndex];
}

/**
 * Belirli bir kategoriden rastgele kelime seç
 */
export function getRandomWordFromCategory(categoryName: string): string {
  const category = HANGMAN_CATEGORIES.find(cat => cat.name === categoryName);
  if (!category || category.words.length === 0) {
    return getRandomWord().word;
  }
  
  const randomIndex = Math.floor(Math.random() * category.words.length);
  return category.words[randomIndex];
}

/**
 * Türk alfabesi (Adam Asmaca için)
 */
export const TURKISH_ALPHABET = getAlphabet('tr');

/**
 * Çok dilli destek: Her dil için alfabe + kategori seti
 */
export interface HangmanLocalePack {
  alphabet: string[];
  upperCaseLocale: string; // toLocaleUpperCase için (örn. 'tr-TR', 'en-US')
  categories: HangmanCategory[];
}

const EN_ALPHABET = getAlphabet('en');
const DE_ALPHABET = getAlphabet('de');
const AZ_ALPHABET = getAlphabet('az');

const EN_CATEGORIES: HangmanCategory[] = [
  {
    name: 'Animals',
    words: [
      'cat','dog','bird','fish','lion','elephant','bear','fox','rabbit','mouse','cow','horse','sheep','goat','monkey','zebra','panda','chicken','duck','bee','frog','snake'
    ]
  },
  {
    name: 'Fruits',
    words: [
      'apple','pear','banana','grape','cherry','kiwi','pomegranate','plum','lemon','melon','watermelon'
    ]
  },
  {
    name: 'Colors',
    words: [
      'red','blue','green','yellow','white','black','pink','purple','orange','gray','brown'
    ]
  },
  {
    name: 'Objects',
    words: [
      'ball','book','pencil','table','door','window','chair','plate','glass','bag','shoe','hat','glasses','mirror','clock','phone','toy','balloon','bicycle'
    ]
  },
  {
    name: 'Nature',
    words: [
      'tree','flower','leaf','sun','moon','star','cloud','snow','rain','sea','lake','mountain','hill','forest'
    ]
  },
  {
    name: 'Food',
    words: [
      'bread','cheese','milk','egg','honey','soup','rice','pasta','pizza','cake','biscuit','chocolate'
    ]
  }
];

// German word packs (child-friendly nouns; lowercase for consistent uppercasing later)
const DE_CATEGORIES: HangmanCategory[] = [
  { name: 'Tiere', words: ['katze','hund','vogel','fisch','löwe','elefant','bär','fuchs','hase','maus','kuh','pferd','schaf','ziege','affe','zebra'] },
  { name: 'Früchte', words: ['apfel','birne','banane','traube','kirsche','kiwi','pflaume','zitrone','melone','wassermelone'] },
  { name: 'Farben', words: ['rot','blau','grün','gelb','weiß','schwarz','rosa','lila','orange','grau','braun'] },
  { name: 'Gegenstände', words: ['ball','buch','bleistift','tisch','tür','fenster','stuhl','teller','glas','tasche','schuh','hut','brille','uhr','telefon','spielzeug'] },
  { name: 'Natur', words: ['baum','blume','blatt','sonne','mond','stern','wolke','schnee','regen','see','berg','hügel','wald'] },
  { name: 'Essen', words: ['brot','käse','milch','ei','honig','suppe','reis','pasta','pizza','kuchen','keks','schokolade'] },
];

// Azerbaijani localized packs (starter list, request feedback for corrections)
const AZ_CATEGORIES: HangmanCategory[] = [
  { name: 'Heyvanlar', words: ['pişik','it','quş','balıq','at','inək','qoyun'] },
  { name: 'Meyvələr', words: ['alma','armud','banan','üzüm','albalı','kivi','limon','qarpız','nar'] },
  { name: 'Rənglər', words: ['qırmızı','mavi','yaşıl','sarı','ağ','qara','çəhrayı','bənövşəyi','narıncı','boz'] },
  { name: 'Əşyalar', words: ['top','kitab','qələm','masa','qapı','pəncərə','stul','boşqab','stəkan','çanta','ayaqqabı','papaq'] },
  { name: 'Təbiət', words: ['ağac','çiçək','yarpaq','günəş','ay','ulduz','bulud','qar','yağış','dəniz','göl','dağ','təpə','meşə'] },
  { name: 'Qida', words: ['çörək','pendir','süd','yumurta','bal','şorba','düyü','makaron','pitsa','tort','peçenye','şokolad'] },
];

const PACKS: Record<string, HangmanLocalePack> = {
  tr: { alphabet: TURKISH_ALPHABET, upperCaseLocale: 'tr-TR', categories: HANGMAN_CATEGORIES },
  en: { alphabet: EN_ALPHABET, upperCaseLocale: 'en-US', categories: EN_CATEGORIES },
  de: { alphabet: DE_ALPHABET, upperCaseLocale: 'de-DE', categories: DE_CATEGORIES },
  az: { alphabet: AZ_ALPHABET, upperCaseLocale: 'az-AZ', categories: AZ_CATEGORIES },
};

/**
 * Geçerli dil için Hangman paketini döndür (varsayılan: en → tr)
 */
export function getHangmanPack(lang: string): HangmanLocalePack {
  return PACKS[lang] || PACKS['en'] || PACKS['tr'];
}

export function getAlphabetForLang(lang: string): string[] {
  return getHangmanPack(lang).alphabet;
}

export function getUppercaseLocaleForLang(lang: string): string {
  return getHangmanPack(lang).upperCaseLocale;
}

export function getRandomWordIntl(lang: string): { word: string; category: string } {
  const pack = getHangmanPack(lang);
  const allWords: { word: string; category: string }[] = [];
  pack.categories.forEach(category => {
    category.words.forEach(word => allWords.push({ word, category: category.name }));
  });
  const randomIndex = Math.floor(Math.random() * allWords.length);
  return allWords[randomIndex];
}

export function getRandomWordFromCategoryIntl(lang: string, categoryName: string): string {
  const pack = getHangmanPack(lang);
  const category = pack.categories.find(cat => cat.name === categoryName);
  if (!category || category.words.length === 0) return getRandomWordIntl(lang).word;
  const randomIndex = Math.floor(Math.random() * category.words.length);
  return category.words[randomIndex];
}
