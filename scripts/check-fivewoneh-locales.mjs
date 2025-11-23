#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const repoRoot = process.cwd();
const reportPath = path.join(repoRoot, 'reports', 'update-fivewoneh-i18n.json');
const dataPath = path.join(repoRoot, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');

function loadCanonicalKeys() {
  if (fs.existsSync(reportPath)) {
    try {
      const raw = fs.readFileSync(reportPath, 'utf8');
      const j = JSON.parse(raw);
      if (Array.isArray(j.canonicalKeys) && j.canonicalKeys.length) return j.canonicalKeys;
    } catch (e) {
      // fallthrough
    }
  }
  if (fs.existsSync(dataPath)) {
    const src = fs.readFileSync(dataPath, 'utf8');
    const re = /questionAudioKey\s*:\s*['"](q_[a-z0-9_\-]+)['"]/gi;
    const keys = new Set();
    let m;
    while ((m = re.exec(src))) keys.add(m[1]);
    return Array.from(keys).sort();
  }
  console.error('No canonical source (report or fiveWOneHData) found.');
  process.exit(2);
}

function loadLocaleKeys(locale) {
  const p = path.join(repoRoot, 'src', 'i18n', locale, 'content.json');
  if (!fs.existsSync(p)) return { questions: [], feedback: [] };
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    const q = j.questions && typeof j.questions === 'object' ? Object.keys(j.questions) : [];
    const fb = (j.activityFeedback && j.activityFeedback.fiveWOneH && typeof j.activityFeedback.fiveWOneH === 'object') ? Object.keys(j.activityFeedback.fiveWOneH) : [];
    return { questions: q, feedback: fb };
  } catch (e) {
    return { questions: [], feedback: [] };
  }
}

function main() {
  const canonical = loadCanonicalKeys();
  const locales = ['az','de','fr','nl','en','tr'];
  const report = { timestamp: new Date().toISOString(), canonicalCount: canonical.length, locales: {} };

  for (const loc of locales) {
    const keys = loadLocaleKeys(loc);
    const present = new Set([...keys.questions, ...keys.feedback]);
    const missing = canonical.filter(k => !present.has(k));
    report.locales[loc] = { presentCount: present.size, missingCount: missing.length, missingKeys: missing };
    console.log(`Locale ${loc}: present ${present.size}, missing ${missing.length}`);
    if (missing.length > 0) console.log(missing.join(', '));
  }

  const outPath = path.join(repoRoot, 'reports', `fivew-locale-diff-${Date.now()}.json`);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('\nWrote report to', outPath);
}

main();
