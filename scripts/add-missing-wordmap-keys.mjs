#!/usr/bin/env node

/**
 * Add remaining missing wordmap keys to FR/DE/NL/AZ
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Translation mappings for missing words
const translations = {
  fr: {
    "yumusak": "doux",
    "bezelye": "petit pois",
    "domuz": "cochon",
    "elektrikli süpürge": "aspirateur",
    "alışveriş merkezi": "centre commercial",
    "fok balığı": "phoque",
    "gökkuşağı": "arc‑en‑ciel",
    "kanguru": "kangourou",
    "karides": "crevette",
    "kağıt havlu": "essuie‑tout",
    "kereviz": "céleri",
    "kuğu": "cygne",
    "kukla": "marionnette",
    "mikro dalga fırın": "four à micro‑ondes",
    "mutfak önlüğü": "tablier de cuisine",
    "ocak": "cuisinière",
    "pencere": "fenêtre",
    "tavus kuşu": "paon",
    "tenis raketi": "raquette de tennis",
    "gündüz penceresi": "fenêtre de jour",
    "gece penceresi": "fenêtre de nuit",
    "gündüz parkı": "parc de jour",
    "gece parkı": "parc de nuit",
    "gündüz manzarası": "vue de jour",
    "gece manzarası": "vue de nuit",
    "ıslak mendil": "lingette humide",
    "salıncakta sallanmak": "se balancer"
  },
  de: {
    "yumusak": "weich",
    "bezelye": "Erbse",
    "domuz": "Schwein",
    "elektrikli süpürge": "Staubsauger",
    "alışveriş merkezi": "Einkaufszentrum",
    "fok balığı": "Robbe",
    "kanguru": "Känguru",
    "karides": "Garnele",
    "kağıt havlu": "Papierhandtuch",
    "kereviz": "Sellerie",
    "kuğu": "Schwan",
    "kukla": "Puppe",
    "mikro dalga fırın": "Mikrowelle",
    "mutfak önlüğü": "Küchenschürze",
    "ocak": "Herd",
    "pencere": "Fenster",
    "tavus kuşu": "Pfau",
    "tenis raketi": "Tennisschläger",
    "gündüz penceresi": "Tagesfenster",
    "gece penceresi": "Nachtfenster",
    "gündüz parkı": "Tagespark",
    "gece parkı": "Nachtpark",
    "gündüz manzarası": "Tagesansicht",
    "gece manzarası": "Nachtansicht",
    "ıslak mendil": "Feuchttuch",
    "salıncakta sallanmak": "schaukeln"
  },
  nl: {
    "yumusak": "zacht",
    "bezelye": "erwt",
    "domuz": "varken",
    "elektrikli süpürge": "stofzuiger",
    "alışveriş merkezi": "winkelcentrum",
    "fok balığı": "zeehond",
    "gökkuşağı": "regenboog",
    "kanguru": "kangoeroe",
    "karides": "garnaal",
    "kağıt havlu": "keukenpapier",
    "kereviz": "selderij",
    "kuğu": "zwaan",
    "kukla": "pop",
    "mikro dalga fırın": "magnetron",
    "mutfak önlüğü": "keukenschort",
    "ocak": "fornuis",
    "pencere": "raam",
    "tavus kuşu": "pauw",
    "tenis raketi": "tennisracket",
    "gündüz penceresi": "dagraam",
    "gece penceresi": "nachtraam",
    "gündüz parkı": "dagpark",
    "gece parkı": "nachtpark",
    "gündüz manzarası": "daguitzicht",
    "gece manzarası": "nachtuitzicht",
    "şemsiye": "paraplu",
    "şurup": "siroop",
    "kütük": "boomstronk",
    "ıslak mendil": "vochtige doekje",
    "salıncakta sallanmak": "schommelen"
  },
  az: {
    "yumusak": "yumşaq",
    "bezelye": "noxud",
    "domuz": "donuz",
    "elektrikli süpürge": "elektrik süpürgəsi",
    "alışveriş merkezi": "alış‑veriş mərkəzi",
    "fok balığı": "suiti",
    "gökkuşağı": "göy qurşağı",
    "kanguru": "kenquru",
    "karides": "karides",
    "kağıt havlu": "kağız dəsmal",
    "kereviz": "kərəviz",
    "kuğu": "qu qu",
    "kukla": "kukla",
    "mikro dalga fırın": "mikrodalğalı soba",
    "mutfak önlüğü": "mətbəx önlüyü",
    "ocak": "soba",
    "pencere": "pəncərə",
    "tavus kuşu": "tovuz quşu",
    "tenis raketi": "tennis raketi",
    "gündüz penceresi": "gündüz pəncərəsi",
    "gece penceresi": "gecə pəncərəsi",
    "gündüz parkı": "gündüz parkı",
    "gece parkı": "gecə parkı",
    "gündüz manzarası": "gündüz mənzərəsi",
    "gece manzarası": "gecə mənzərəsi",
    "uzay mekiği": "kosmik gəmi",
    "ıslak mendil": "yaş dəsmal",
    "salıncakta sallanmak": "yelləncəkdə yellənmək",
    "salıncak": "yelləncək"
  }
};

// Add missing keys to each language
for (const lang of ['fr', 'de', 'nl', 'az']) {
  const wordmapPath = path.join(rootDir, 'src', 'utils', `wordmap.tr-${lang}.json`);
  const wordmap = JSON.parse(fs.readFileSync(wordmapPath, 'utf-8'));
  
  let addedCount = 0;
  
  // Add to Nitelikler category
  if (translations[lang]["yumusak"]) {
    if (!wordmap["Nitelikler (Sıfatlar ve Durumlar)"]["yumusak"]) {
      wordmap["Nitelikler (Sıfatlar ve Durumlar)"]["yumusak"] = translations[lang]["yumusak"];
      addedCount++;
    }
  }
  
  // Add to Nesneler ve Varlıklar category
  const objectWords = [
    "bezelye", "domuz", "elektrikli süpürge", "alışveriş merkezi", "fok balığı",
    "gökkuşağı", "kanguru", "karides", "kağıt havlu", "kereviz", "kuğu", "kukla",
    "mikro dalga fırın", "mutfak önlüğü", "ocak", "pencere", "tavus kuşu", "tenis raketi",
    "gündüz penceresi", "gece penceresi", "gündüz parkı", "gece parkı",
    "gündüz manzarası", "gece manzarası", "şemsiye", "şurup", "kütük", "uzay mekiği"
  ];
  
  for (const word of objectWords) {
    if (translations[lang][word] && !wordmap["Nesneler ve Varlıklar"][word]) {
      wordmap["Nesneler ve Varlıklar"][word] = translations[lang][word];
      addedCount++;
    }
  }
  
  // Add to Communication category
  const commWords = ["ıslak mendil", "salıncakta sallanmak", "salıncak"];
  
  for (const word of commWords) {
    if (translations[lang][word] && !wordmap["Communication"][word]) {
      wordmap["Communication"][word] = translations[lang][word];
      addedCount++;
    }
  }
  
  if (addedCount > 0) {
    fs.writeFileSync(wordmapPath, JSON.stringify(wordmap, null, 2) + '\n', 'utf-8');
    console.log(`✅ Added ${addedCount} missing words to ${lang.toUpperCase()}`);
  } else {
    console.log(`ℹ️  No words to add in ${lang.toUpperCase()}`);
  }
}

console.log('\n🎉 All missing wordmap keys added!');
