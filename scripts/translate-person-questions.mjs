#!/usr/bin/env node

/**
 * Translate [TODO translate] person question variants
 * Pattern: "Which one is X?" type questions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read TR content for reference and extract object mappings
const trContentPath = path.join(rootDir, 'src', 'i18n', 'tr', 'content.json');
const trContent = JSON.parse(fs.readFileSync(trContentPath, 'utf-8'));

// Object name mappings (TR → target language)
const objectMappings = {
  en: {
    "göz": "eye",
    "kulak": "ear",
    "el": "hand",
    "ayak": "foot",
    "saç": "hair",
    "ağız": "mouth",
    "dil": "tongue",
    "kol": "arm",
    "bacak": "leg",
    "kedi": "cat",
    "aslan": "lion",
    "fil": "elephant",
    "balık": "fish",
    "kuş": "bird",
    "tavşan": "rabbit",
    "zürafa": "giraffe",
    "kelebek": "butterfly",
    "arı": "bee",
    "ördek": "duck",
    "kaplumbağa": "turtle",
    "simit": "bagel",
    "elma": "apple",
    "portakal": "orange",
    "çilek": "strawberry",
    "üzüm": "grapes",
    "karpuz": "watermelon",
    "limon": "lemon",
    "armut": "pear",
    "kiraz": "cherry",
    "ananas": "pineapple",
    "kavun": "melon",
    "şeftali": "peach",
    "taş": "stone",
    "yaprak": "leaf",
    "buz": "ice",
    "ağaç gövdesi": "tree trunk",
    "tüy": "feather",
    "kar": "snow",
    "şelale": "waterfall",
    "öğretmen": "teacher",
    "bebek": "baby",
    "aile": "family",
    "büyükanne": "grandmother",
    "büyükbaba": "grandfather",
    "kral": "king",
    "kraliçe": "queen",
    "ağaç": "tree",
    "kaktüs": "cactus",
    "çimen": "grass",
    "pamuk": "cotton",
    "lale": "tulip",
    "papatya": "daisy",
    "doktor": "doctor",
    "itfaiyeci": "firefighter",
    "aşçı": "chef",
    "hemşire": "nurse",
    "pilot": "pilot",
    "çiftçi": "farmer",
    "postacı": "postman",
    "berber": "barber",
    "garson": "waiter",
    "astronot": "astronaut",
    "defter": "notebook",
    "uçurtma": "kite",
    "domates": "tomato",
    "patates": "potato",
    "soğan": "onion",
    "biber": "pepper",
    "marul": "lettuce",
    "havuç": "carrot",
    "patlıcan": "eggplant",
    "mısır": "corn",
    "brokoli": "broccoli",
    "karnabahar": "cauliflower",
    "lahana": "cabbage",
    "canlı": "alive",
    "büyük": "big",
    "acı": "bitter",
    "temiz": "clean",
    "dikenli": "thorny"
  },
  fr: {
    "göz": "œil",
    "kulak": "oreille",
    "el": "main",
    "ayak": "pied",
    "saç": "cheveux",
    "ağız": "bouche",
    "dil": "langue",
    "kol": "bras",
    "bacak": "jambe",
    "kedi": "chat",
    "aslan": "lion",
    "fil": "éléphant",
    "balık": "poisson",
    "kuş": "oiseau",
    "tavşan": "lapin",
    "zürafa": "girafe",
    "kelebek": "papillon",
    "arı": "abeille",
    "ördek": "canard",
    "kaplumbağa": "tortue",
    "simit": "bagel",
    "elma": "pomme",
    "portakal": "orange",
    "çilek": "fraise",
    "üzüm": "raisins",
    "karpuz": "pastèque",
    "limon": "citron",
    "armut": "poire",
    "kiraz": "cerise",
    "ananas": "ananas",
    "kavun": "melon",
    "şeftali": "pêche",
    "taş": "pierre",
    "yaprak": "feuille",
    "buz": "glace",
    "ağaç gövdesi": "tronc d'arbre",
    "tüy": "plume",
    "kar": "neige",
    "şelale": "cascade",
    "öğretmen": "enseignant",
    "bebek": "bébé",
    "aile": "famille",
    "büyükanne": "grand‑mère",
    "büyükbaba": "grand‑père",
    "kral": "roi",
    "kraliçe": "reine",
    "ağaç": "arbre",
    "kaktüs": "cactus",
    "çimen": "herbe",
    "pamuk": "coton",
    "lale": "tulipe",
    "papatya": "marguerite",
    "doktor": "médecin",
    "itfaiyeci": "pompier",
    "aşçı": "chef",
    "hemşire": "infirmière",
    "pilot": "pilote",
    "çiftçi": "fermier",
    "postacı": "facteur",
    "berber": "coiffeur",
    "garson": "serveur",
    "astronot": "astronaute",
    "defter": "cahier",
    "uçurtma": "cerf‑volant",
    "domates": "tomate",
    "patates": "pomme de terre",
    "soğan": "oignon",
    "biber": "poivron",
    "marul": "laitue",
    "havuç": "carotte",
    "patlıcan": "aubergine",
    "mısır": "maïs",
    "brokoli": "brocoli",
    "karnabahar": "chou‑fleur",
    "lahana": "chou",
    "canlı": "vivant",
    "büyük": "grand",
    "acı": "amer",
    "temiz": "propre",
    "dikenli": "épineux"
  },
  de: {
    "göz": "Auge",
    "kulak": "Ohr",
    "el": "Hand",
    "ayak": "Fuß",
    "saç": "Haar",
    "ağız": "Mund",
    "dil": "Zunge",
    "kol": "Arm",
    "bacak": "Bein",
    "kedi": "Katze",
    "aslan": "Löwe",
    "fil": "Elefant",
    "balık": "Fisch",
    "kuş": "Vogel",
    "tavşan": "Kaninchen",
    "zürafa": "Giraffe",
    "kelebek": "Schmetterling",
    "arı": "Biene",
    "ördek": "Ente",
    "kaplumbağa": "Schildkröte",
    "simit": "Bagel",
    "elma": "Apfel",
    "portakal": "Orange",
    "çilek": "Erdbeere",
    "üzüm": "Trauben",
    "karpuz": "Wassermelone",
    "limon": "Zitrone",
    "armut": "Birne",
    "kiraz": "Kirsche",
    "ananas": "Ananas",
    "kavun": "Melone",
    "şeftali": "Pfirsich",
    "taş": "Stein",
    "yaprak": "Blatt",
    "buz": "Eis",
    "ağaç gövdesi": "Baumstamm",
    "tüy": "Feder",
    "kar": "Schnee",
    "şelale": "Wasserfall",
    "öğretmen": "Lehrer",
    "bebek": "Baby",
    "aile": "Familie",
    "büyükanne": "Großmutter",
    "büyükbaba": "Großvater",
    "kral": "König",
    "kraliçe": "Königin",
    "ağaç": "Baum",
    "kaktüs": "Kaktus",
    "çimen": "Gras",
    "pamuk": "Baumwolle",
    "lale": "Tulpe",
    "papatya": "Gänseblümchen",
    "doktor": "Arzt",
    "itfaiyeci": "Feuerwehrmann",
    "aşçı": "Koch",
    "hemşire": "Krankenschwester",
    "pilot": "Pilot",
    "çiftçi": "Bauer",
    "postacı": "Postbote",
    "berber": "Friseur",
    "garson": "Kellner",
    "astronot": "Astronaut",
    "defter": "Heft",
    "uçurtma": "Drachen",
    "domates": "Tomate",
    "patates": "Kartoffel",
    "soğan": "Zwiebel",
    "biber": "Paprika",
    "marul": "Kopfsalat",
    "havuç": "Karotte",
    "patlıcan": "Aubergine",
    "mısır": "Mais",
    "brokoli": "Brokkoli",
    "karnabahar": "Blumenkohl",
    "lahana": "Kohl",
    "canlı": "lebendig",
    "büyük": "groß",
    "acı": "bitter",
    "temiz": "sauber",
    "dikenli": "stachelig"
  },
  nl: {
    "göz": "oog",
    "kulak": "oor",
    "el": "hand",
    "ayak": "voet",
    "saç": "haar",
    "ağız": "mond",
    "dil": "tong",
    "kol": "arm",
    "bacak": "been",
    "kedi": "kat",
    "aslan": "leeuw",
    "fil": "olifant",
    "balık": "vis",
    "kuş": "vogel",
    "tavşan": "konijn",
    "zürafa": "giraffe",
    "kelebek": "vlinder",
    "arı": "bij",
    "ördek": "eend",
    "kaplumbağa": "schildpad",
    "simit": "bagel",
    "elma": "appel",
    "portakal": "sinaasappel",
    "çilek": "aardbei",
    "üzüm": "druiven",
    "karpuz": "watermeloen",
    "limon": "citroen",
    "armut": "peer",
    "kiraz": "kers",
    "ananas": "ananas",
    "kavun": "meloen",
    "şeftali": "perzik",
    "taş": "steen",
    "yaprak": "blad",
    "buz": "ijs",
    "ağaç gövdesi": "boomstam",
    "tüy": "veer",
    "kar": "sneeuw",
    "şelale": "waterval",
    "öğretmen": "leraar",
    "bebek": "baby",
    "aile": "familie",
    "büyükanne": "grootmoeder",
    "büyükbaba": "grootvader",
    "kral": "koning",
    "kraliçe": "koningin",
    "ağaç": "boom",
    "kaktüs": "cactus",
    "çimen": "gras",
    "pamuk": "katoen",
    "lale": "tulp",
    "papatya": "madeliefje",
    "doktor": "dokter",
    "itfaiyeci": "brandweerman",
    "aşçı": "kok",
    "hemşire": "verpleegster",
    "pilot": "piloot",
    "çiftçi": "boer",
    "postacı": "postbode",
    "berber": "kapper",
    "garson": "ober",
    "astronot": "astronaut",
    "defter": "schrift",
    "uçurtma": "vlieger",
    "domates": "tomaat",
    "patates": "aardappel",
    "soğan": "ui",
    "biber": "paprika",
    "marul": "sla",
    "havuç": "wortel",
    "patlıcan": "aubergine",
    "mısır": "maïs",
    "brokoli": "broccoli",
    "karnabahar": "bloemkool",
    "lahana": "kool",
    "canlı": "levend",
    "büyük": "groot",
    "acı": "bitter",
    "temiz": "schoon",
    "dikenli": "stekelig"
  },
  az: {
    "göz": "göz",
    "kulak": "qulaq",
    "el": "əl",
    "ayak": "ayaq",
    "saç": "saç",
    "ağız": "ağız",
    "dil": "dil",
    "kol": "qol",
    "bacak": "ayaq",
    "kedi": "pişik",
    "aslan": "şir",
    "fil": "fil",
    "balık": "balıq",
    "kuş": "quş",
    "tavşan": "dovşan",
    "zürafa": "zürafə",
    "kelebek": "kəpənək",
    "arı": "arı",
    "ördek": "ördək",
    "kaplumbağa": "tısbağa",
    "simit": "simit",
    "elma": "alma",
    "portakal": "portağal",
    "çilek": "çiyələk",
    "üzüm": "üzüm",
    "karpuz": "qarpız",
    "limon": "limon",
    "armut": "armud",
    "kiraz": "albalı",
    "ananas": "ananas",
    "kavun": "qovun",
    "şeftali": "şaftalı",
    "taş": "daş",
    "yaprak": "yarpaq",
    "buz": "buz",
    "ağaç gövdesi": "ağac gövdəsi",
    "tüy": "lələk",
    "kar": "qar",
    "şelale": "şəlalə",
    "öğretmen": "müəllim",
    "bebek": "körpə",
    "aile": "ailə",
    "büyükanne": "nənə",
    "büyükbaba": "baba",
    "kral": "kral",
    "kraliçe": "kraliça",
    "ağaç": "ağac",
    "kaktüs": "kaktus",
    "çimen": "çəmən",
    "pamuk": "pambıq",
    "lale": "lalə",
    "papatya": "çobanyastığı",
    "doktor": "həkim",
    "itfaiyeci": "yanğınsöndürən",
    "aşçı": "aşpaz",
    "hemşire": "tibb bacısı",
    "pilot": "pilot",
    "çiftçi": "fermer",
    "postacı": "poçtalyon",
    "berber": "bərbər",
    "garson": "ofisiant",
    "astronot": "astronavt",
    "defter": "dəftər",
    "uçurtma": "uçurtma",
    "domates": "pomidor",
    "patates": "kartof",
    "soğan": "soğan",
    "biber": "bibər",
    "marul": "kahı",
    "havuç": "yerkökü",
    "patlıcan": "badımcan",
    "mısır": "qarğıdalı",
    "brokoli": "brokoli",
    "karnabahar": "kələm",
    "lahana": "kələm",
    "canlı": "canlı",
    "büyük": "böyük",
    "acı": "acı",
    "temiz": "təmiz",
    "dikenli": "tikanlı"
  }
};

// Question templates per language
const templates = {
  en: (obj, isPlural) => isPlural ? `Which ones are ${obj}?` : `Which one is ${obj}?`,
  fr: (obj, isPlural) => isPlural ? `Lesquels sont ${obj}?` : `Lequel est ${obj}?`,
  de: (obj, isPlural) => isPlural ? `Welche sind ${obj}?` : `Welches ist ${obj}?`,
  nl: (obj, isPlural) => isPlural ? `Welke zijn ${obj}?` : `Welke is ${obj}?`,
  az: (obj, isPlural) => isPlural ? `Hansılar ${obj}?` : `Hansı ${obj}?`
};

// Special case: "Görmek için hangisini kullanırız?"
const senseTemplates = {
  en: "Which one do we use to see?",
  fr: "Lequel utilisons‑nous pour voir?",
  de: "Welches benutzen wir zum Sehen?",
  nl: "Welke gebruiken we om te zien?",
  az: "Görmək üçün hansını istifadə edirik?"
};

// Recursive translation function
function translateTodoItems(obj, lang, trContent, changeLog) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursively process nested objects
      translateTodoItems(obj[key], lang, trContent, changeLog);
    } else if (typeof obj[key] === 'string' && obj[key].startsWith('[TODO translate]')) {
      // Special case: sense question
      if (key === 'q_which_sense_see_person') {
        obj[key] = senseTemplates[lang];
        changeLog.count++;
        continue;
      }
      
      // Get the TR version to extract the object name
      const trText = findKeyInObject(trContent, key);
      if (!trText) {
        console.warn(`⚠️  No TR reference for ${key} in ${lang.toUpperCase()}`);
        continue;
      }
      
      // Extract TR object (after "Hangisi " or "Hangileri ")
      let trObject = '';
      let isPlural = false;
      
      if (trText.startsWith('Hangileri ')) {
        trObject = trText.replace('Hangileri ', '').replace('?', '');
        isPlural = true;
      } else if (trText.startsWith('Hangisi ')) {
        trObject = trText.replace('Hangisi ', '').replace('?', '');
      } else {
        console.warn(`⚠️  Unexpected TR pattern for ${key}: "${trText}"`);
        continue;
      }
      
      // Translate the object
      const targetObject = objectMappings[lang][trObject];
      if (!targetObject) {
        console.warn(`⚠️  Missing object mapping for "${trObject}" in ${lang.toUpperCase()}`);
        continue;
      }
      
      // Generate translated question
      obj[key] = templates[lang](targetObject, isPlural);
      changeLog.count++;
    }
  }
}

// Helper to find a key in nested object structure
function findKeyInObject(obj, targetKey) {
  if (obj.hasOwnProperty(targetKey)) {
    return obj[targetKey];
  }
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const found = findKeyInObject(obj[key], targetKey);
      if (found !== undefined) {
        return found;
      }
    }
  }
  return undefined;
}

// Process each language
for (const lang of ['en', 'fr', 'de', 'nl', 'az']) {
  const contentPath = path.join(rootDir, 'src', 'i18n', lang, 'content.json');
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  
  const changeLog = { count: 0 };
  translateTodoItems(content, lang, trContent, changeLog);
  
  if (changeLog.count > 0) {
    fs.writeFileSync(contentPath, JSON.stringify(content, null, 2) + '\n', 'utf-8');
    console.log(`✅ Translated ${changeLog.count} person questions in ${lang.toUpperCase()}`);
  } else {
    console.log(`ℹ️  No TODO translations found in ${lang.toUpperCase()}`);
  }
}

console.log('\n🎉 All person question translations completed!');
