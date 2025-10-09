import rawWordmap from "./wordmap.tr-en.json";

type WordMap = Record<string, string>;
type NestedWordMap = Record<string, WordMap>;

const TURKISH_LOCALE = "tr-TR";
const ENGLISH_LOCALE = "en-US";
const DIACRITICS_REGEX = /[\u0300-\u036f]/g;

const baseFallbackMap: WordMap = {
  mutlu: "happy",
  uzgun: "sad",
  kizgin: "angry",
  saskin: "surprised",
  korkmus: "scared",
  goruruz: "see",
  duyariz: "hear",
  koklariz: "smell",
  "tat aliriz": "taste",
  hissederiz: "feel",
};

const normalize = (value: string): string =>
  value
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .replace(/_/g, " ")
    .replace(/[\`'\u2019]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase(TURKISH_LOCALE);

const flattenWordmap = (map: NestedWordMap): WordMap => {
  const flat: WordMap = {};
  for (const category of Object.values(map)) {
    for (const [tr, en] of Object.entries(category)) {
      const key = normalize(tr);
      if (!flat[key]) {
        flat[key] = en;
      }
    }
  }
  return flat;
};

const wordMapFlat = flattenWordmap(rawWordmap as NestedWordMap);
for (const [key, value] of Object.entries(baseFallbackMap)) {
  wordMapFlat[normalize(key)] = value;
}

const tokenize = (value: string): string[] =>
  normalize(value)
    .split(/[\s-]+/)
    .filter(Boolean);

const capitalizeEnglish = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase(ENGLISH_LOCALE) + value.slice(1);
};

const translateToken = (token: string): string | undefined => {
  return wordMapFlat[token];
};

const translateComposite = (text: string): string | undefined => {
  const normalized = normalize(text);
  if (!normalized) return undefined;

  const direct = translateToken(normalized);
  if (direct) return direct;

  const tokens = tokenize(text);
  if (!tokens.length) return undefined;

  const translatedTokens = tokens.map((token) => translateToken(token) ?? token);
  const changed = translatedTokens.some((token, index) => token !== tokens[index]);
  if (changed) {
    return translatedTokens.join(" ");
  }
  return undefined;
};

export function translateLabel(text: string, lang: 'tr' | 'en' | string): string {
  if (lang === 'tr' || !text) return text;
  const translated = translateComposite(text);
  if (!translated) return text;
  return capitalizeEnglish(translated);
}

export function getSpeechLocale(lang: 'tr' | 'en' | string): 'tr-TR' | 'en-US' {
  return lang === 'tr' ? 'tr-TR' : 'en-US';
}

export function withIndefiniteArticle(wordEn: string): string {
  if (!wordEn) return wordEn;
  const w = wordEn.trim();
  const first = w.charAt(0).toLowerCase();
  const useAn = ['a', 'e', 'i', 'o', 'u'].includes(first);
  return `${useAn ? 'an' : 'a'} ${w}`;
}

