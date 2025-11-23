import fs from 'fs';
import path from 'path';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(walk(full));
    else if (e.isFile() && /\.ts$/.test(e.name)) files.push(full);
  }
  return files;
}

const dbDir = path.resolve('src/services/database');
const files = walk(dbDir);

const audioKeys = new Set();

const regexAudioKey = /audioKey\s*:\s*"([^"]+)"/g;
const regexAudioKeysDefault = /"audioKeys"\s*:\s*\{([\s\S]*?)\}/g;
const regexDefaultVal = /"default"\s*:\s*"([^"]+)"/g;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = regexAudioKey.exec(content))) {
    audioKeys.add(m[1]);
  }
  while ((m = regexAudioKeysDefault.exec(content))) {
    const block = m[1];
    let m2;
    while ((m2 = regexDefaultVal.exec(block))) {
      audioKeys.add(m2[1]);
    }
  }
}

const keys = [...audioKeys].sort();

function loadObjectsJson(p) {
  try {
    const raw = fs.readFileSync(p, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed.objects || {};
  } catch (e) {
    return {};
  }
}

const trObjects = loadObjectsJson(path.resolve('src/i18n/tr/objects.json'));
const enObjects = loadObjectsJson(path.resolve('src/i18n/en/objects.json'));

const missing = { tr: [], en: [] };

for (const k of keys) {
  if (!(k in trObjects)) missing.tr.push(k);
  if (!(k in enObjects)) missing.en.push(k);
}

console.log('Found audioKey values:', keys.length);
console.log(keys.join('\n'));
console.log('\nMissing in TR objects.json:', missing.tr.length);
console.log(missing.tr.join('\n'));
console.log('\nMissing in EN objects.json:', missing.en.length);
console.log(missing.en.join('\n'));

// Write report
const report = {
  found: keys,
  missing,
};
fs.writeFileSync('reports/audioKey-coverage.json', JSON.stringify(report, null, 2));
console.log('\nReport saved to reports/audioKey-coverage.json');
