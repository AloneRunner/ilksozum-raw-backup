import fs from 'fs';
import path from 'path';

function normalize(s) {
  if (!s) return '';
  try {
    return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, '_').replace(/[^\w_]/g, '').toLowerCase();
  } catch(e) {
    return s.replace(/\s+/g, '_').replace(/[^\w_]/g, '').toLowerCase();
  }
}

const repoRoot = process.cwd();
const trSpatialPath = path.join(repoRoot, 'src', 'i18n', 'tr', 'spatial.json');
const filesToScan = [
  path.join(repoRoot, 'src', 'services', 'database', 'activities', 'spatialData.ts'),
  path.join(repoRoot, 'src', 'services', 'database', 'activities', 'temporalData.ts'),
];

let spatialKeys = new Set();
try {
  const j = JSON.parse(fs.readFileSync(trSpatialPath, 'utf8'));
  if (j && j.spatial) {
    Object.keys(j.spatial).forEach(k => spatialKeys.add(k));
  }
} catch(e) {
  console.error('Could not read tr spatial json:', e.message);
}

const found = new Set();
for (const f of filesToScan) {
  try {
    const txt = fs.readFileSync(f, 'utf8');
    const rx = /audioKey\s*:\s*['\"]([^'\"]+)['\"]/g;
    let m;
    while ((m = rx.exec(txt)) !== null) {
      const raw = m[1];
      const norm = normalize(raw);
      found.add(norm);
    }
    // also check for spokenText occurrences that might be used
    const rx2 = /spokenText\s*:\s*['\"]([^'\"]+)['\"]/g;
    while ((m = rx2.exec(txt)) !== null) {
      const raw = m[1];
      const norm = normalize(raw);
      found.add(norm);
    }
  } catch(e) {
    console.error('Could not read', f, e.message);
  }
}

const missing = [];
for (const k of Array.from(found).sort()) {
  const yes = `spatial.yes_${k}`;
  const no = `spatial.no_${k}`;
  if (!spatialKeys.has(`yes_${k}`) && !spatialKeys.has(`no_${k}`) && !spatialKeys.has(k) && !spatialKeys.has(yes) && !spatialKeys.has(no)) {
    missing.push(k);
  }
}

console.log('Found', found.size, 'unique normalized audio keys/spokenText tokens.');
if (missing.length === 0) {
  console.log('No obvious missing spatial keys in src/i18n/tr/spatial.json for these tokens.');
} else {
  console.log('Missing spatial keys for the following normalized tokens:\n', missing.join('\n'));
}

// Also print a short matrix of presence
console.log('\nPresence matrix (token -> yes/no keys in tr/spatial.json):');
for (const k of Array.from(found).sort()) {
  const yesKey = `yes_${k}`;
  const noKey = `no_${k}`;
  const hasYes = spatialKeys.has(yesKey);
  const hasNo = spatialKeys.has(noKey);
  console.log(k.padEnd(30), ' yes:', hasYes ? '✅' : '❌', ' no:', hasNo ? '✅' : '❌');
}
