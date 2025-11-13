#!/usr/bin/env node

/**
 * Find missing wordmap keys across languages
 * Compare TR (reference) against EN/FR/DE/NL/AZ
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load all wordmaps
const languages = ['tr', 'en', 'fr', 'de', 'nl', 'az'];
const wordmaps = {};

for (const lang of languages) {
  const wordmapPath = path.join(rootDir, 'src', 'utils', `wordmap.${lang === 'tr' ? 'tr-en' : 'tr-' + lang}.json`);
  wordmaps[lang] = JSON.parse(fs.readFileSync(wordmapPath, 'utf-8'));
}

// Collect all TR keys (flatten nested structure)
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key], prefix ? `${prefix}.${key}` : key));
    } else {
      keys.push(prefix ? `${prefix}.${key}` : key);
    }
  }
  return keys;
}

const trKeys = getAllKeys(wordmaps.tr);
console.log(`\n📊 Total TR keys: ${trKeys.length}\n`);

// Check each target language for missing keys
const results = {};

for (const lang of ['en', 'fr', 'de', 'nl', 'az']) {
  const langKeys = getAllKeys(wordmaps[lang]);
  const missing = [];
  
  for (const trKey of trKeys) {
    if (!langKeys.includes(trKey)) {
      missing.push(trKey);
    }
  }
  
  results[lang] = {
    total: langKeys.length,
    missing: missing
  };
  
  console.log(`${lang.toUpperCase()}:`);
  console.log(`  Total keys: ${langKeys.length}`);
  console.log(`  Missing keys: ${missing.length}`);
  
  if (missing.length > 0) {
    console.log(`  Missing items:`);
    missing.forEach(key => {
      const parts = key.split('.');
      const trValue = parts.reduce((obj, part) => obj?.[part], wordmaps.tr);
      console.log(`    - ${key}: "${trValue}"`);
    });
  }
  
  console.log('');
}

// Summary
console.log('\n📋 SUMMARY:');
console.log('='.repeat(60));
for (const lang of ['en', 'fr', 'de', 'nl', 'az']) {
  const { total, missing } = results[lang];
  const coverage = ((total - missing.length) / total * 100).toFixed(1);
  console.log(`${lang.toUpperCase()}: ${total - missing.length}/${total} keys (${coverage}% coverage) - ${missing.length} missing`);
}
