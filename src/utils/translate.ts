import rawWordmapEN from "./wordmap.tr-en.json";
import rawWordmapDE from "./wordmap.tr-de.json";
import rawWordmapFR from "./wordmap.tr-fr.json";
import rawWordmapNL from "./wordmap.tr-nl.json";
import rawWordmapAZ from "./wordmap.tr-az.json";
// Bu dosyanın Copilot tarafından oluşturulduğunu varsayıyoruz:
import supplementalTranslations from "../i18n/tr_en.json";

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

const wordMapFlatEN = flattenWordmap(rawWordmapEN as NestedWordMap);
const wordMapFlatDE = flattenWordmap((rawWordmapDE as unknown as NestedWordMap) || {});
const wordMapFlatFR = flattenWordmap((rawWordmapFR as unknown as NestedWordMap) || {});
const wordMapFlatNL = flattenWordmap((rawWordmapNL as unknown as NestedWordMap) || {});
const wordMapFlatAZ = flattenWordmap((rawWordmapAZ as unknown as NestedWordMap) || {});

const mergeTranslations = (flat: WordMap, entries: WordMap) => {
  for (const [key, value] of Object.entries(entries)) {
    const normalized = normalize(key);
    if (normalized && !flat[normalized]) {
      flat[normalized] = value;
    }
  }
};
// Merge additional EN-only translations into EN map
// The supplemental file may contain nested sections (e.g. a `questions` object).
// Recursively extract all string leaf values found anywhere in the object so
// we preserve useful translations while keeping a flat WordMap for merging.
const supplementalFlat: WordMap = {};

const extractStrings = (obj: unknown) => {
  if (!obj || typeof obj !== "object") return;
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof v === "string") {
      // top-level string or leaf string -> keep it
      supplementalFlat[k] = v;
      continue;
    }
    // if it's an object, recurse and attempt to capture its string leaves
    if (typeof v === "object" && v !== null) {
      // If the nested object itself contains string values with Turkish text as keys,
      // extracting inner keys (like question ids) is useful. Recurse into it.
      extractStrings(v);
    }
  }
};

extractStrings(supplementalTranslations);
mergeTranslations(wordMapFlatEN, supplementalFlat);
mergeTranslations(wordMapFlatEN, baseFallbackMap);

const tokenize = (value: string): string[] =>
  normalize(value)
    .split(/[\s-]+/)
    .filter(Boolean);

const capitalizeEnglish = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase(ENGLISH_LOCALE) + value.slice(1);
};

type TargetLang = 'en' | 'de' | 'fr' | 'nl' | 'az';
const translateToken = (token: string, lang: TargetLang): string | undefined => {
  switch (lang) {
    case 'de': return wordMapFlatDE[token];
    case 'fr': return wordMapFlatFR[token];
    case 'nl': return wordMapFlatNL[token];
    case 'az': return wordMapFlatAZ[token];
    default: return wordMapFlatEN[token];
  }
};

const translateComposite = (text: string, lang: TargetLang): string | undefined => {
  const normalized = normalize(text);
  if (!normalized) return undefined;

  const direct = translateToken(normalized, lang);
  if (direct) return direct;

  const tokens = tokenize(text);
  if (!tokens.length) return undefined;

  const translatedTokens = tokens.map((token) => translateToken(token, lang) ?? token);
  const changed = translatedTokens.some((token, index) => token !== tokens[index]);
  if (changed) {
    return translatedTokens.join(" ");
  }
  return undefined;
};

export function translateLabel(text: string, lang: 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az' | string): string {
  if (!text) return text;
  if (lang === 'tr') return text;
  // Determine target language
  const target: TargetLang = ['de','fr','nl','az','en'].includes(lang as any) ? (lang as TargetLang) : 'en';
  const translated = translateComposite(text, target);
  if (translated) {
    return target === 'en' ? capitalizeEnglish(translated) : translated;
  }
  // Fallback to EN map if target not found
  if (target !== 'en') {
    const en = translateComposite(text, 'en');
    if (en) return capitalizeEnglish(en);
  }
  return text;
}

export function getSpeechLocale(lang: 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az' | string): 'tr-TR' | 'en-US' | 'de-DE' | 'fr-FR' | 'nl-NL' | 'az-Latn-AZ' {
  switch (lang) {
    case 'tr':
      return 'tr-TR';
    case 'de':
      return 'de-DE';
    case 'fr':
      return 'fr-FR';
    case 'nl':
      return 'nl-NL';
    case 'az':
      return 'az-Latn-AZ';
    default:
      return 'en-US';
  }
}

export function withIndefiniteArticle(wordEn: string): string {
  if (!wordEn) return wordEn;
  const w = wordEn.trim();
  const first = w.charAt(0).toLowerCase();
  const useAn = ['a', 'e', 'i', 'o', 'u'].includes(first);
  return `${useAn ? 'an' : 'a'} ${w}`;
}

// --- AZERİCE ÇEVİRİLERİN EKLENDİĞİ BÖLÜM ---
const QUESTION_TRANSLATIONS: Record<string, Partial<Record<TargetLang, string>> & { en: string }> = {
  "Hangisi farklı?": {
    en: "Which one is different?",
    de: "Welches ist anders?",
    fr: "Lequel est différent ?",
    nl: "Welke is anders?",
    az: "Hansı fərqlidir?"
  },
  "Çiviyi neyle çakarız?": {
    en: "What do we use to hammer the nail?",
    de: "Womit schlagen wir den Nagel ein?",
    fr: "Avec quoi plantons-nous le clou ?",
    nl: "Waarmee slaan we de spijker in?",
    az: "Mismarı nə ilə vururuq?"
  },
  "Dişlerimizi neyle fırçalarız?": {
    en: "What do we brush our teeth with?",
    de: "Womit putzen wir unsere Zähne?",
    fr: "Avec quoi nous brossons-nous les dents ?",
    nl: "Waarmee poetsen we onze tanden?",
    az: "Dişlərimizi nə ilə fırçalayırıq?"
  },
  "Çoraptan sonra ne giyeriz?": {
    en: "What do we wear after socks?",
    de: "Was ziehen wir nach den Socken an?",
    fr: "Que mettons-nous après les chaussettes ?",
    nl: "Wat trekken we na de sokken aan?",
    az: "Corabdan sonra nə geyinirik?"
  },
  "Yastığı nerede kullanırız?": {
    en: "Where do we use the pillow?",
    de: "Wo benutzen wir das Kissen?",
    fr: "Où utilise-t-on l'oreiller ?",
    nl: "Waar gebruiken we het kussen?",
    az: "Yastığı harada istifadə edirik?"
  },
  "Çorbayı ne ile içeriz?": {
    en: "What do we use to eat soup?",
    de: "Womit essen wir die Suppe?",
    fr: "Avec quoi mangeons-nous la soupe ?",
    nl: "Waarmee eten we de soep?",
    az: "Şorbanı nə ilə içirik?"
  },
  "Resmi ne ile boyarız?": {
    en: "What do we use to color the picture?",
    de: "Womit malen wir das Bild aus?",
    fr: "Avec quoi colorions-nous le dessin ?",
    nl: "Waarmee kleuren we de tekening in?",
    az: "Şəkli nə ilə rəngləyirik?"
  },
  "Kağıda ne ile yazarız?": {
    en: "What do we write on paper with?",
    de: "Womit schreiben wir auf Papier?",
    fr: "Avec quoi écrivons-nous sur le papier ?",
    nl: "Waarmee schrijven we op papier?",
    az: "Kağıza nə ilə yazırıq?"
  },
  "Kapıyı ne ile açarız?": {
    en: "What do we use to open the door?",
    de: "Womit öffnen wir die Tür?",
    fr: "Avec quoi ouvrons-nous la porte ?",
    nl: "Waarmee openen we de deur?",
    az: "Qapını nə ilə açırıq?"
  },
  "Sola bakan hangisi?": {
    en: "Which one is looking left?",
    de: "Welches schaut nach links?",
    fr: "Lequel regarde à gauche ?",
    nl: "Welke kijkt naar links?",
    az: "Hansı sola baxır?"
  },
  "Sağa bakan hangisi?": {
    en: "Which one is looking right?",
    de: "Welches schaut nach rechts?",
    fr: "Lequel regarde à droite ?",
    nl: "Welke kijkt naar rechts?",
    az: "Hansı sağa baxır?"
  },
  "olan hangisi?": { // Bu genel bir kalıp, aşağıdaki regex ile yakalanıyor
    en: "Which one is?",
    de: "Welches ist?",
    fr: "Lequel est?",
    nl: "Welke is?",
    az: "Hansı?" // Genel kalıp için basit çeviri
  },
  "Az olan hangisi?": {
    en: "Which one has few?",
    de: "Welches hat wenige?",
    fr: "Lequel en a peu?",
    nl: "Welke heeft er weinig?",
    az: "Hansında azdır?"
  },
  "Çok olan hangisi?": {
    en: "Which one has many?",
    de: "Welches hat viele?",
    fr: "Lequel en a beaucoup?",
    nl: "Welke heeft er veel?",
    az: "Hansında çoxdur?"
  },
  "Tek olan hangisi?": {
    en: "Which one is odd?",
    de: "Welches ist ungerade?",
    fr: "Lequel est impair?",
    nl: "Welke is oneven?",
    az: "Hansı təkdir?"
  },
  "Çift olan hangisi?": {
    en: "Which one is even?",
    de: "Welches ist gerade?",
    fr: "Lequel est pair?",
    nl: "Welke is even?",
    az: "Hansı cütdür?"
  },
  "Yukarıda olan hangisi?": {
    en: "Which one is above?",
    de: "Welches ist oben?",
    fr: "Lequel est au-dessus?",
    nl: "Welke is bovenaan?", // Daha doğal olabilir diye 'boven' yerine 'bovenaan'
    az: "Hansı yuxarıdadır?"
  },
  "Aşağıda olan hangisi?": {
    en: "Which one is below?",
    de: "Welches ist unten?",
    fr: "Lequel est en dessous?",
    nl: "Welke is onderaan?", // Daha doğal olabilir diye 'beneden' yerine 'onderaan'
    az: "Hansı aşağıdadır?"
  },
  "İçinde olan hangisi?": {
    en: "Which one is inside?",
    de: "Welches ist drinnen?",
    fr: "Lequel est à l'intérieur?",
    nl: "Welke is binnen?",
    az: "Hansı içindədir?"
  },
  "Dışında olan hangisi?": {
    en: "Which one is outside?",
    de: "Welches ist draußen?",
    fr: "Lequel est à l'extérieur?",
    nl: "Welke is buiten?",
    az: "Hansı çöldədir?"
  },
  "Önünde olan hangisi?": {
    en: "Which one is in front?",
    de: "Welches ist vorne?",
    fr: "Lequel est devant?",
    nl: "Welke is vooraan?", // Daha doğal olabilir diye 'voor' yerine 'vooraan'
    az: "Hansı önündədir?"
  },
  "Arkasında olan hangisi?": {
    en: "Which one is behind?",
    de: "Welches ist hinten?",
    fr: "Lequel est derrière?",
    nl: "Welke is achteraan?", // Daha doğal olabilir diye 'achter' yerine 'achteraan'
    az: "Hansı arxasındadır?"
  },
  "Yakın olan hangisi?": {
    en: "Which one is near?",
    de: "Welches ist nah?",
    fr: "Lequel est proche?",
    nl: "Welke is dichtbij?",
    az: "Hansı yaxındır?"
  },
  "Uzak olan hangisi?": {
    en: "Which one is far?",
    de: "Welches ist weit?",
    fr: "Lequel est loin?",
    nl: "Welke is ver?",
    az: "Hansı uzaqdır?"
  },
  "Arasında olan hangisi?": {
    en: "Which one is between?",
    de: "Welches ist dazwischen?",
    fr: "Lequel est entre?",
    nl: "Welke is ertussen?",
    az: "Hansı arasındadır?"
  },
  "Yüksek olan hangisi?": {
    en: "Which one is high?",
    de: "Welches ist hoch?",
    fr: "Lequel est haut?",
    nl: "Welke is hoog?",
    az: "Hansı yüksəkdir?"
  },
  "Alçak olan hangisi?": {
    en: "Which one is low?",
    de: "Welches ist niedrig?",
    fr: "Lequel est bas?",
    nl: "Welke is laag?",
    az: "Hansı alçaqdır?"
  },
  "Gündüz olan hangisi?": {
    en: "Which one is day?",
    de: "Welches ist Tag?",
    fr: "Lequel est le jour?",
    nl: "Welke is dag?",
    az: "Hansı gündüzdür?"
  },
  "Gece olan hangisi?": {
    en: "Which one is night?",
    de: "Welches ist Nacht?",
    fr: "Lequel est la nuit?",
    nl: "Welke is nacht?",
    az: "Hansı gecədir?"
  },
  "Hızlı olan hangisi?": {
    en: "Which one is fast?",
    de: "Welches ist schnell?",
    fr: "Lequel est rapide?",
    nl: "Welke is snel?",
    az: "Hansı sürətlidir?"
  },
  "Yavaş olan hangisi?": {
    en: "Which one is slow?",
    de: "Welches ist langsam?",
    fr: "Lequel est lent?",
    nl: "Welke is traag?",
    az: "Hansı yavaşdır?"
  },
  "Önce olan hangisi?": {
    en: "Which one is before?",
    de: "Welches ist vorher?",
    fr: "Lequel est avant?",
    nl: "Welke is voor?",
    az: "Hansı əvvəldir?"
  },
  "Sonra olan hangisi?": {
    en: "Which one is after?",
    de: "Welches ist nachher?",
    fr: "Lequel est après?",
    nl: "Welke is na?",
    az: "Hansı sonradır?"
  },
  "Önce hangisi olur?": {
    en: "Which happens first?",
    de: "Was passiert zuerst?",
    fr: "Lequel arrive en premier?",
    nl: "Wat gebeurt er eerst?",
    az: "Əvvəl hansı olur?"
  },
  "Sonra hangisi olur?": {
    en: "Which happens after?",
    de: "Was passiert danach?",
    fr: "Lequel arrive après?",
    nl: "Wat gebeurt er daarna?",
    az: "Sonra hansı olur?"
  },
  "Büyük olan hangisi?": {
    en: "Which one is big?",
    de: "Welches ist groß?",
    fr: "Lequel est grand?",
    nl: "Welke is groot?",
    az: "Hansı böyükdür?"
  },
  "Küçük olan hangisi?": {
    en: "Which one is small?",
    de: "Welches ist klein?",
    fr: "Lequel est petit?",
    nl: "Welke is klein?",
    az: "Hansı kiçikdir?"
  },
  "Uzun olan hangisi?": {
    en: "Which one is long?",
    de: "Welches ist lang?",
    fr: "Lequel est long?",
    nl: "Welke is lang?",
    az: "Hansı uzundur?"
  },
  "Kısa olan hangisi?": {
    en: "Which one is short?",
    de: "Welches ist kurz?",
    fr: "Lequel est court?",
    nl: "Welke is kort?",
    az: "Hansı qısadır?"
  },
  "İnce olan hangisi?": {
    en: "Which one is thin?",
    de: "Welches ist dünn?",
    fr: "Lequel est fin?",
    nl: "Welke is dun?",
    az: "Hansı nazikdir?"
  },
  "Kalın olan hangisi?": {
    en: "Which one is thick?",
    de: "Welches ist dick?",
    fr: "Lequel est épais?",
    nl: "Welke is dik?",
    az: "Hansı qalındır?"
  },
  "Geniş olan hangisi?": {
    en: "Which one is wide?",
    de: "Welches ist breit?",
    fr: "Lequel est large?",
    nl: "Welke is breed?",
    az: "Hansı genişdir?"
  },
  "Dar olan hangisi?": {
    en: "Which one is narrow?",
    de: "Welches ist schmal?",
    fr: "Lequel est étroit?",
    nl: "Welke is smal?",
    az: "Hansı dardır?"
  },
  "Ağır olan hangisi?": {
    en: "Which one is heavy?",
    de: "Welches ist schwer?",
    fr: "Lequel est lourd?",
    nl: "Welke is zwaar?",
    az: "Hansı ağırdır?"
  },
  "Hafif olan hangisi?": {
    en: "Which one is light?",
    de: "Welches ist leicht?",
    fr: "Lequel est léger?",
    nl: "Welke is licht?",
    az: "Hansı yüngüldür?"
  },
  "Makarnayı ne ile yeriz?": {
    en: "What do we eat pasta with?",
    de: "Womit essen wir die Nudeln?",
    fr: "Avec quoi mangeons-nous les pâtes ?",
    nl: "Waarmee eten we de pasta?",
    az: "Makaronu nə ilə yeyirik?"
  },
  "Parayı nereye koyarız?": {
    en: "Where do we put the money?",
    de: "Wohin legen wir das Geld?",
    fr: "Où mettons-nous l'argent ?",
    nl: "Waar leggen we het geld neer?",
    az: "Pulu hara qoyuruq?"
  },
  "Bunun sonucu ne olur?": {
    en: "What is the result of this?",
    de: "Was ist die Folge davon?",
    fr: "Quel en est le résultat ?",
    nl: "Wat is het resultaat hiervan?",
    az: "Bunun nəticəsi nə olar?"
  },
  "Bunun nedeni ne olabilir?": {
    en: "What could be the cause of this?",
    de: "Was könnte die Ursache sein?",
    fr: "Quelle pourrait en être la cause ?",
    nl: "Wat zou hiervan de oorzaak kunnen zijn?",
    az: "Bunun səbəbi nə ola bilər?"
  },
  "Temiz olmak için ne gerekir?": {
    en: "What do we need to be clean?",
    de: "Was brauchen wir, um sauber zu sein?",
    fr: "De quoi avons-nous besoin pour être propres ?",
    nl: "Wat heb je nodig om schoon te worden?",
    az: "Təmiz olmaq üçün nə lazımdır?"
  },
  "Bunu düşürürsen ne olur?": {
    en: "What happens if you drop this?",
    de: "Was passiert, wenn du das fallen lässt?",
    fr: "Que se passe-t-il si tu laisses tomber ceci ?",
    nl: "Wat gebeurt er als je dit laat vallen?",
    az: "Bunu yerə salsan nə olar?"
  },
  "Bu olduğunda ne giyersin?": {
    en: "What do you wear when this happens?",
    de: "Was ziehst du an, wenn das passiert?",
    fr: "Que portes-tu quand cela arrive ?",
    nl: "Wat trek je aan als dit gebeurt?",
    az: "Bu olanda nə geyinirsən?"
  },
  "Sıradaki hangisi?": {
    en: "Which one comes next?",
    de: "Welches kommt als Nächstes?",
    fr: "Lequel vient ensuite ?",
    nl: "Welke komt hierna?",
    az: "Növbəti hansıdır?"
  },
  "Sepete 3 elma koy.": {
    en: "Put 3 apples in the basket.",
    de: "Lege 3 Äpfel in den Korb.",
    fr: "Mets 3 pommes dans le panier.",
    nl: "Leg 3 appels in de mand.",
    az: "Səbətə 3 alma qoy."
  },
  "Kutuya 5 top koy.": {
    en: "Put 5 balls in the box.",
    de: "Lege 5 Bälle in die Kiste.",
    fr: "Mets 5 balles dans la Schachtel.", // Muhtemelen la boîte olmalı
    nl: "Leg 5 ballen in de doos.",
    az: "Qutuya 5 top qoy."
  },
  "Akvaryuma 4 balık koy.": {
    en: "Put 4 fish in the aquarium.",
    de: "Setze 4 Fische ins Aquarium.",
    fr: "Mets 4 poissons dans l'aquarium.",
    nl: "Doe 4 vissen in het aquarium.",
    az: "Akvariuma 4 balıq qoy."
  },
  "Tabağa 2 kurabiye koy.": {
    en: "Put 2 cookies on the plate.",
    de: "Lege 2 Kekse auf den Teller.",
    fr: "Mets 2 biscuits dans l'assiette.",
    nl: "Leg 2 koekjes op het bord.",
    az: "Boşqaba 2 peçenye qoy."
  },
  "Topu kutunun içine koy.": {
    en: "Put the ball into the box.",
    de: "Lege den Ball in die Kiste.",
    fr: "Mets la balle dans la boîte.",
    nl: "Leg de bal in de doos.",
    az: "Topu qutunun içinə qoy."
  },
  "Kitabı masanın üstüne koy.": {
    en: "Put the book on the table.",
    de: "Leg das Buch auf den Tisch.",
    fr: "Mets le livre sur la table.",
    nl: "Leg het boek op de tafel.",
    az: "Kitabı masanın üstünə qoy."
  },
  "Olayları doğru sıraya diz.": {
    en: "Arrange the events in the correct order.",
    de: "Ordne die Ereignisse in die richtige Reihenfolge.",
    fr: "Mets les événements dans le bon ordre.",
    nl: "Zet de gebeurtenissen in de juiste volgorde.",
    az: "Hadisələri düzgün sıraya düz."
  },
  "Eksik olanı yerleştir.": {
    en: "Place the missing one.",
    de: "Setze das fehlende ein.",
    fr: "Place l'élément manquant.",
    nl: "Plaats het ontbrekende.",
    az: "Əskik olanı yerləşdir."
  }
};

export function translateQuestion(text: string, lang: 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az' | string): string {
  if (!text) return text;
  if (lang === 'tr') return text;
  const trimmed = text.trim();

  // Direct translation lookup
  const entry = QUESTION_TRANSLATIONS[trimmed];
  if (entry) {
    const target = (['en', 'de', 'fr', 'nl', 'az'] as const).includes(lang as any) ? (lang as TargetLang) : 'en';
    // Azerice çeviri yoksa İngilizceye dön
    return entry[target] ?? entry.en ?? trimmed;
  }

  // Pattern matching for common question structures
  const patterns = [
    {
      regex: /^(.*) olan hangisi\?$/,
      templates: {
        en: "Which one is $1?",
        de: "Welches ist $1?",
        fr: "Lequel est $1?",
        nl: "Welke is $1?",
        az: "Hansı $1?" // Azerice şablon eklendi
      }
    },
    {
      regex: /^(.*) hangisi\?$/, // Bu daha az kullanılır ama yine de ekleyelim
      templates: {
        en: "Which one is $1?",
        de: "Welches ist $1?",
        fr: "Lequel est $1?",
        nl: "Welke is $1?",
        az: "Hansı $1?" // Azerice şablon eklendi
      }
    },
    {
      regex: /^Hangisi (.*)\?$/,
      templates: {
        en: "Which one is $1?",
        de: "Welches ist $1?",
        fr: "Lequel est $1?",
        nl: "Welke is $1?",
        az: "Hansı $1?" // Azerice şablon eklendi
      }
    }
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern.regex);
    if (match) {
      const adjective = match[1];
      // Sıfatı çevirmeye çalış, çeviremezsen orijinalini kullan
      const translatedAdjective = translateLabel(adjective, lang) || adjective;
      const target = (['en', 'de', 'fr', 'nl', 'az'] as const).includes(lang as any) ? (lang as TargetLang) : 'en';
      // Hedef dil için şablonu al, yoksa İngilizce şablonu kullan
      const template = pattern.templates[target] || pattern.templates.en;
      return template.replace('$1', translatedAdjective);
    }
  }

  // Hiçbir eşleşme yoksa orijinal metni döndür
  return trimmed;
}