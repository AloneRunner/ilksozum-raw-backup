#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const i18nDir = path.join(root, 'src', 'i18n');
const reportsDir = path.join(root, 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

const locales = ['en','de','fr','nl','tr','az'];

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function flatten(obj, prefix = '', out = {}) {
  if (obj === null || obj === undefined) return out;
  if (typeof obj !== 'object') {
    out[prefix] = String(obj);
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => {
      const p = prefix ? `${prefix}[${i}]` : `[${i}]`;
      flatten(v, p, out);
    });
    return out;
  }
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null) {
      flatten(v, p, out);
    } else {
      out[p] = String(v);
    }
  }
  return out;
}

const dataByLocale = {};
const keysByLocale = {};

for (const loc of locales) {
  const fp = path.join(i18nDir, `${loc}.json`);
  const json = readJson(fp);
  if (!json) {
    dataByLocale[loc] = {};
    keysByLocale[loc] = new Set();
    continue;
  }
  const flat = flatten(json);
  dataByLocale[loc] = flat;
  keysByLocale[loc] = new Set(Object.keys(flat));
}

// Build union of keys across locales
const unionKeys = new Set();
for (const loc of locales) {
  for (const k of keysByLocale[loc]) unionKeys.add(k);
}

// Prepare CSV
const date = new Date();
const yyyymmdd = `${date.getFullYear()}${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}`;
const outCsv = path.join(reportsDir, `i18n-key-audit-${yyyymmdd}.csv`);

const header = ['key', ...locales.map(l => `${l}:status`), ...locales.map(l => `${l}:len`)];
const rows = [header.join(',')];

const sortedKeys = Array.from(unionKeys).sort();

let missingCounts = Object.fromEntries(locales.map(l => [l, 0]));
const missingKeys = Object.fromEntries(locales.map(l => [l, []]));

for (const key of sortedKeys) {
  const status = [];
  const lens = [];
  for (const loc of locales) {
    if (keysByLocale[loc].has(key)) {
      status.push('OK');
      const val = dataByLocale[loc][key];
      lens.push(val ? String(val).length : 0);
    } else {
      status.push('MISSING');
      lens.push('');
      missingCounts[loc]++;
      missingKeys[loc].push(key);
    }
  }
  const escapedKey = '"' + key.replace(/"/g, '""') + '"';
  rows.push([escapedKey, ...status, ...lens].join(','));
}

// Summary footer
rows.push('');
rows.push(['SUMMARY', ...locales.map(l => `${l}:missing=${missingCounts[l]}`)].join(','));

fs.writeFileSync(outCsv, rows.join('\n'), 'utf8');

// Write per-locale missing lists
for (const loc of locales) {
  if (missingCounts[loc] > 0) {
    const outTxt = path.join(reportsDir, `i18n-missing-${loc}-${yyyymmdd}.txt`);
    const body = missingKeys[loc].join('\n');
    fs.writeFileSync(outTxt, body, 'utf8');
  }
}

console.log(`Wrote ${outCsv}`);
console.log('Missing counts per locale:', missingCounts);
