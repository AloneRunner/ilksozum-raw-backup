import fs from 'fs';
import path from 'path';

const repoRoot = path.join(process.cwd());
const dataPath = path.join(repoRoot, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const enContent = JSON.parse(fs.readFileSync(path.join(repoRoot, 'src', 'i18n', 'en', 'content.json'), 'utf8'));
const trContent = JSON.parse(fs.readFileSync(path.join(repoRoot, 'src', 'i18n', 'tr', 'content.json'), 'utf8'));

const src = fs.readFileSync(dataPath, 'utf8');
const re = /questionAudioKey:\s*'([^']+)'/g;
let m; const keys = new Set();
while ((m = re.exec(src))) keys.add(m[1]);

const enQuestions = enContent.questions || {};
const trQuestions = trContent.questions || {};

const missing = { en: [], tr: [] };
for (const k of Array.from(keys).sort()) {
  if (!(k in enQuestions)) missing.en.push(k);
  if (!(k in trQuestions)) missing.tr.push(k);
}

console.log('Checked', keys.size, 'questionAudioKey values.');
console.log('Missing in EN:', missing.en.length ? missing.en.join(', ') : '(none)');
console.log('Missing in TR:', missing.tr.length ? missing.tr.join(', ') : '(none)');

// Also check fiveWOneH.activity-level feedback in gameActivities
const enGame = JSON.parse(fs.readFileSync(path.join(repoRoot, 'src', 'i18n', 'en', 'gameActivities.json'), 'utf8'));
const trGame = JSON.parse(fs.readFileSync(path.join(repoRoot, 'src', 'i18n', 'tr', 'gameActivities.json'), 'utf8'));
const enGameFive = (enGame.reasoning && enGame.reasoning.fiveWOneH) || {};
const trGameFive = (trGame.reasoning && trGame.reasoning.fiveWOneH) || {};
const missingGame = { en: [], tr: [] };
for (const k of Array.from(keys).sort()) {
  if (!(k in enGameFive)) missingGame.en.push(k);
  if (!(k in trGameFive)) missingGame.tr.push(k);
}
console.log('\nMissing in en/gameActivities fiveWOneH:', missingGame.en.length ? missingGame.en.join(', ') : '(none)');
console.log('Missing in tr/gameActivities fiveWOneH:', missingGame.tr.length ? missingGame.tr.join(', ') : '(none)');
