// Lightweight i18n utilities - Modular structure
import trCommon from './tr/common.json';
import trScreens from './tr/screens.json';
import trLetterActivities from './tr/letterActivities.json';
import trGameActivities from './tr/gameActivities.json';
import trContent from './tr/content.json';

import enCommon from './en/common.json';
import enScreens from './en/screens.json';
import enLetterActivities from './en/letterActivities.json';
import enGameActivities from './en/gameActivities.json';
import enContent from './en/content.json';

import deCommon from './de/common.json';
import deScreens from './de/screens.json';
import deLetterActivities from './de/letterActivities.json';
import deGameActivities from './de/gameActivities.json';
import deContent from './de/content.json';

import frCommon from './fr/common.json';
import frScreens from './fr/screens.json';
import frLetterActivities from './fr/letterActivities.json';
import frGameActivities from './fr/gameActivities.json';
import frContent from './fr/content.json';

import nlCommon from './nl/common.json';
import nlScreens from './nl/screens.json';
import nlLetterActivities from './nl/letterActivities.json';
import nlGameActivities from './nl/gameActivities.json';
import nlContent from './nl/content.json';

import azCommon from './az/common.json';
import azScreens from './az/screens.json';
import azLetterActivities from './az/letterActivities.json';
import azGameActivities from './az/gameActivities.json';
import azContent from './az/content.json';

export type Locale = 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az';

type Dict = Record<string, any>;

// Merge all modules for each language
const resources: Record<Locale, Dict> = {
  tr: { ...trCommon, ...trScreens, ...trLetterActivities, ...trGameActivities, ...trContent },
  en: { ...enCommon, ...enScreens, ...enLetterActivities, ...enGameActivities, ...enContent },
  de: { ...deCommon, ...deScreens, ...deLetterActivities, ...deGameActivities, ...deContent },
  fr: { ...frCommon, ...frScreens, ...frLetterActivities, ...frGameActivities, ...frContent },
  nl: { ...nlCommon, ...nlScreens, ...nlLetterActivities, ...nlGameActivities, ...nlContent },
  az: { ...azCommon, ...azScreens, ...azLetterActivities, ...azGameActivities, ...azContent },
};

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
  return fallback ?? key;
}

// Initialize document <html lang>
applyDocumentLanguage();
