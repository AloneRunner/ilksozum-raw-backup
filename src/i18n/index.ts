// Lightweight i18n utilities
import tr from './tr.json';
import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import nl from './nl.json';
import az from './az.json';

export type Locale = 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az';

type Dict = Record<string, any>;

const resources: Record<Locale, Dict> = {
  tr,
  en,
  de,
  fr,
  nl,
  az,
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
