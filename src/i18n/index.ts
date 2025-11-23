// Lightweight i18n utilities - Modular structure
import trCommon from './tr/common.json';
import trScreens from './tr/screens.json';
import trLetterActivities from './tr/letterActivities.json';
import trGameActivities from './tr/gameActivities.json';
import trConcepts from './tr/concepts.json';
import trObjects from './tr/objects.json';
import trQuestions from './tr/questions.json';
import trActivityFeedback from './tr/activityFeedback.json';
import trCommunication from './tr/communication.json';

import enCommon from './en/common.json';
import enScreens from './en/screens.json';
import enLetterActivities from './en/letterActivities.json';
import enGameActivities from './en/gameActivities.json';
import enConcepts from './en/concepts.json';
import enObjects from './en/objects.json';
import enQuestions from './en/questions.json';
import enActivityFeedback from './en/activityFeedback.json';
import enCommunication from './en/communication.json';

import deCommon from './de/common.json';
import deScreens from './de/screens.json';
import deLetterActivities from './de/letterActivities.json';
import deGameActivities from './de/gameActivities.json';
import deConcepts from './de/concepts.json';
import deObjects from './de/objects.json';
import deQuestions from './de/questions.json';
import deActivityFeedback from './de/activityFeedback.json';
import deCommunication from './de/communication.json';

import frCommon from './fr/common.json';
import frScreens from './fr/screens.json';
import frLetterActivities from './fr/letterActivities.json';
import frGameActivities from './fr/gameActivities.json';
import frConcepts from './fr/concepts.json';
import frObjects from './fr/objects.json';
import frQuestions from './fr/questions.json';
import frActivityFeedback from './fr/activityFeedback.json';
import frCommunication from './fr/communication.json';

import nlCommon from './nl/common.json';
import nlScreens from './nl/screens.json';
import nlLetterActivities from './nl/letterActivities.json';
import nlGameActivities from './nl/gameActivities.json';
import nlConcepts from './nl/concepts.json';
import nlObjects from './nl/objects.json';
import nlQuestions from './nl/questions.json';
import nlActivityFeedback from './nl/activityFeedback.json';
import nlCommunication from './nl/communication.json';

import azCommon from './az/common.json';
import azScreens from './az/screens.json';
import azLetterActivities from './az/letterActivities.json';
import azGameActivities from './az/gameActivities.json';
// import azContent from './az/content.json'; // SİLİNDİ (AZ)
import azConcepts from './az/concepts.json';
import azObjects from './az/objects.json';
import azQuestions from './az/questions.json';
import azActivityFeedback from './az/activityFeedback.json';
import azCommunication from './az/communication.json';

export type Locale = 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az';

type Dict = Record<string, any>;

// Deep-merge utility
function isPlainObject(v: any): v is Record<string, any> {
  return v && typeof v === 'object' && !Array.isArray(v);
}

function mergeInto(target: Dict, src: Dict) {
  for (const k of Object.keys(src)) {
    const sv = src[k];
    const tv = target[k];
    if (isPlainObject(sv) && isPlainObject(tv)) {
      mergeInto(tv, sv);
    } else if (isPlainObject(sv)) {
      target[k] = JSON.parse(JSON.stringify(sv));
    } else {
      target[k] = sv;
    }
  }
}

function deepMerge(...objs: Dict[]): Dict {
  const out: Dict = {};
  for (const o of objs) {
    if (o && typeof o === 'object') mergeInto(out, o);
  }
  return out;
}

// Merge all modules for each language
const resources: Record<Locale, Dict> = {
  tr: deepMerge(
    {},
    trCommon,
    trScreens,
    trLetterActivities,
    trGameActivities,
    trConcepts,
    trObjects,
    trQuestions,
    trActivityFeedback,
    trCommunication,
  ),
  en: deepMerge(
    {},
    enCommon,
    enScreens,
    enLetterActivities,
    enGameActivities,
    enConcepts,
    enObjects,
    enQuestions,
    enActivityFeedback,
    enCommunication,
  ),
  de: deepMerge(
    {},
    deCommon,
    deScreens,
    deLetterActivities,
    deGameActivities,
    deConcepts,
    deObjects,
    deQuestions,
    deActivityFeedback,
    deCommunication,
  ),
  fr: deepMerge(
    {},
    frCommon,
    frScreens,
    frLetterActivities,
    frGameActivities,
    frConcepts,
    frObjects,
    frQuestions,
    frActivityFeedback,
    frCommunication,
  ),
  nl: deepMerge(
    {},
    nlCommon,
    nlScreens,
    nlLetterActivities,
    nlGameActivities,
    nlConcepts,
    nlObjects,
    nlQuestions,
    nlActivityFeedback,
    nlCommunication,
  ),
  az: deepMerge(
    {},
    azCommon,
    azScreens,
    azLetterActivities,
    azGameActivities,
    // azContent, // SİLİNDİ (AZ)
    azConcepts,
    azObjects,
    azQuestions,
    azActivityFeedback,
    azCommunication,
  ),
};

// ... (dosyanın geri kalanı aynı)

let currentLang: Locale = ((): Locale => {
  const stored = localStorage.getItem('lang_v1');
  const supported: Locale[] = ['tr','en','de','fr','nl','az'];
  if (stored && supported.includes(stored as Locale)) {
    return stored as Locale;
  }
  const nav = (navigator.language || 'tr').toLowerCase();
  if (nav.startsWith('tr')) return 'tr';
  if (nav.startsWith('de')) return 'de';
  if (nav.startsWith('fr')) return 'fr';
  if (nav.startsWith('nl')) return 'nl';
  if (nav.startsWith('az')) return 'az';
  return 'en';
})();

export function getCurrentLanguage(): Locale {
  return currentLang;
}

export function setCurrentLanguage(lang: Locale) {
  currentLang = lang;
  try { localStorage.setItem('lang_v1', lang); } catch {}
  applyDocumentLanguage();
}

export function applyDocumentLanguage() {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLang;
  }
}

// Simple dotted path lookup
function lookup(dict: Dict, path: string): string | undefined {
  const parts = path.split('.');
  let node: any = dict;
  for (const p of parts) {
    if (node && typeof node === 'object' && p in node) node = node[p];
    else return undefined;
  }
  return typeof node === 'string' ? node : undefined;
}

export function t(key: string, fallback?: string): string {
  const res = lookup(resources[currentLang], key);
  if (res) return res;
  const resTr = lookup(resources.tr, key);
  if (resTr) return resTr;
  if (key.startsWith('objects.')) {
    const parts = key.split('.').slice(1);
    const last = parts.join('.');
    const placeholder = last.replace(/_/g, ' ');
    return placeholder || (fallback ?? key);
  }
  return fallback ?? key;
}

export function lookupLocale(key: string, locale?: Locale): string | undefined {
  const loc = locale ?? currentLang;
  return lookup(resources[loc], key);
}

// Return raw resource value (could be string | array | object)
export function getRaw(key: string, locale?: Locale): any {
  const loc = locale ?? currentLang;
  const parts = key.split('.');
  let node: any = resources[loc];
  for (const p of parts) {
    if (node && typeof node === 'object' && p in node) node = node[p];
    else return undefined;
  }
  return node;
}

applyDocumentLanguage();