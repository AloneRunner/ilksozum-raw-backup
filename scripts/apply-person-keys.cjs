#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsPath = path.join(process.cwd(), 'reports', 'living_rounds.json');
if (!fs.existsSync(reportsPath)) {
  console.error('reports/living_rounds.json not found. Run scripts/find-living-rounds.cjs first.');
  process.exit(1);
}

const reports = JSON.parse(fs.readFileSync(reportsPath, 'utf8'));

// Build unique rounds map: file -> Set(roundId)
const roundsByFile = new Map();
for (const r of reports) {
  const file = r.file;
  const id = r.roundId;
  if (!roundsByFile.has(file)) roundsByFile.set(file, new Set());
  roundsByFile.get(file).add(id);
}

const backupDir = path.join(process.cwd(), 'reports', 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

// Load locales
const i18nDir = path.join(process.cwd(), 'src', 'i18n');
const locales = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));
const i18nData = {};
for (const l of locales) {
  const p = path.join(i18nDir, l);
  try { i18nData[l] = JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.error('Failed to parse', p, e); process.exit(1); }
}

const changes = [];

for (const [file, idSet] of roundsByFile) {
  if (!fs.existsSync(file)) {
    console.warn('File not found:', file);
    continue;
  }
  const text = fs.readFileSync(file, 'utf8');
  const original = text;
  let modified = text;

  // backup original
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
  const backupPath = path.join(backupDir, rel + '.orig');
  const backupFolder = path.dirname(backupPath);
  if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder, { recursive: true });
  fs.writeFileSync(backupPath, original, 'utf8');

  // For each round id in this file, find questionAudioKey occurrences and match to nearest id
  const questionRegex = /questionAudioKey\s*[:=]\s*["']([^"']+)["']/g;
  for (const id of Array.from(idSet)) {
    let m;
    // iterate over questionAudioKey matches and check if the nearby block contains the id
    while ((m = questionRegex.exec(modified))) {
      const key = m[1];
      if (key.endsWith('_person')) continue;
      const matchIndex = m.index;
      // look backwards up to 800 chars to find an id: <num>
      const lookback = Math.max(0, matchIndex - 800);
      const context = modified.slice(lookback, matchIndex + 50); // include a bit after
  const idMatch = /\bid\s*[:=]\s*(\d+)/.exec(context);
      if (idMatch && Number(idMatch[1]) === Number(id)) {
        const newKey = key + '_person';
        const before = modified.slice(0, m.index);
        const after = modified.slice(m.index + m[0].length);
        const newQuestion = m[0].replace(key, newKey);
        modified = before + newQuestion + after;
        changes.push({ file: rel, roundId: id, oldKey: key, newKey });
        // reset regex lastIndex because modified changed
        questionRegex.lastIndex = 0;
        break; // move to next id
      }
    }
  }

  if (modified !== original) {
    fs.writeFileSync(file, modified, 'utf8');
    console.log('Patched', rel);
  }
}

// Update i18n files: for each change, add newKey with value copied from oldKey if present, else placeholder
for (const l of locales) {
  const data = i18nData[l];
  let updated = false;
  for (const c of changes) {
    const oldKey = c.oldKey;
    const newKey = c.newKey;
    // keys are under data.questions per repo conventions
    const q = data.questions || {};
    if (q[newKey]) continue; // already present
    if (q[oldKey]) {
      q[newKey] = q[oldKey];
      updated = true;
    } else {
      q[newKey] = '[TODO translate] ' + oldKey;
      updated = true;
    }
    data.questions = q;
  }
  if (updated) {
    const outPath = path.join(i18nDir, l);
    fs.writeFileSync(outPath, JSON.stringify(i18nData[l], null, 2), 'utf8');
    console.log('Updated locale', l);
  }
}

// Summary
console.log('Applied', changes.length, 'questionAudioKey changes across files. Backups in reports/backups/.');

// Run build to validate
console.log('Running npm run build to validate...');
const { spawnSync } = require('child_process');
const res = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', shell: true });
if (res.status !== 0) {
  console.error('Build failed. Please inspect errors.');
  process.exit(res.status);
}
console.log('Build succeeded.');
