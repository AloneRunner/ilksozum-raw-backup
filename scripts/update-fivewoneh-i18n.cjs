#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const dataPath = path.join(workspaceRoot, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const locales = ['tr','en','az','de','fr','nl'];
const reportsDir = path.join(workspaceRoot, 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
const backupsDir = path.join(workspaceRoot, 'reports', 'backups-i18n');
if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });

function extractQuestionAudioKeys(tsText) {
  const re = /questionAudioKey:\s*['`\"]([^'"`]+)['`\"]/g;
  const keys = new Set();
  let m;
  while ((m = re.exec(tsText)) !== null) {
    keys.add(m[1]);
  }
  return Array.from(keys);
}

function loadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function writeJson(filePath, obj) {
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

const report = {
  timestamp: new Date().toISOString(),
  canonicalKeysCount: 0,
  canonicalKeys: [],
  locales: {},
  errors: []
};

try {
  const tsText = fs.readFileSync(dataPath, 'utf8');
  const canonicalKeys = extractQuestionAudioKeys(tsText);
  report.canonicalKeys = canonicalKeys;
  report.canonicalKeysCount = canonicalKeys.length;

  for (const loc of locales) {
    const locReport = { filled: [], removed: [], skipped: [], errors: [] };
    try {
      const i18nPath = path.join(workspaceRoot, 'src', 'i18n', loc, 'gameActivities.json');
      if (!fs.existsSync(i18nPath)) {
        locReport.skipped.push('file-missing');
        report.locales[loc] = locReport;
        continue;
      }

      const originalText = fs.readFileSync(i18nPath, 'utf8');
      // Backup original
      const backupPath = path.join(backupsDir, `${loc}-gameActivities-${Date.now()}.json`);
      fs.writeFileSync(backupPath, originalText, 'utf8');

      const obj = JSON.parse(originalText);
      // Support both top-level `fiveWOneH` and `reasoning.fiveWOneH` blocks
      const containers = [];
      if (obj.fiveWOneH && typeof obj.fiveWOneH === 'object') containers.push({parent: obj, name: 'fiveWOneH'});
      if (obj.reasoning && obj.reasoning.fiveWOneH && typeof obj.reasoning.fiveWOneH === 'object') containers.push({parent: obj.reasoning, name: 'fiveWOneH'});
      if (containers.length === 0) {
        locReport.skipped.push('no-fiveWOneH');
        report.locales[loc] = locReport;
        continue;
      }

      for (const container of containers) {
        const block = container.parent[container.name];
        const keys = Object.keys(block);
        for (const key of keys) {
          if (key === 'category') continue;
          const isCanonical = canonicalKeys.includes(key);
          if (!isCanonical) {
            locReport.removed.push(key);
            delete block[key];
            continue;
          }
          const entry = block[key];
          if (!entry || typeof entry !== 'object') continue;
          const qText = entry.question || '';
          if (loc === 'tr' || loc === 'en') {
            const correct = entry.correct;
            const wrong = entry.wrong;
            let changed = false;
            if (!correct || (typeof correct === 'string' && correct.trim() === '')) {
              entry.correct = (loc === 'tr' ? 'Doğru!' : 'Correct!') + (qText ? ' ' + qText : '');
              changed = true;
            }
            if (!wrong || (typeof wrong === 'string' && wrong.trim() === '')) {
              entry.wrong = (loc === 'tr' ? 'Hayır.' : 'No.') + (qText ? ' ' + qText : '');
              changed = true;
            }
            if (changed) locReport.filled.push(key);
          }
        }
      }

      // Write back safely
      writeJson(i18nPath, obj);
      report.locales[loc] = locReport;
    } catch (e) {
      locReport.errors.push(String(e));
      report.locales[loc] = locReport;
    }
  }
} catch (e) {
  report.errors.push(String(e));
}

const outPath = path.join(reportsDir, 'update-fivewoneh-i18n.json');
writeJson(outPath, report);
console.log('update complete — report written to', outPath);
