import fs from 'fs';
import path from 'path';

const root = process.cwd();
const dataPath = path.join(root, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const enContentPath = path.join(root, 'src', 'i18n', 'en', 'content.json');
const trContentPath = path.join(root, 'src', 'i18n', 'tr', 'content.json');
const enGameActPath = path.join(root, 'src', 'i18n', 'en', 'gameActivities.json');
const trGameActPath = path.join(root, 'src', 'i18n', 'tr', 'gameActivities.json');

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

const src = readFile(dataPath);

// Extract all questionAudioKey occurrences, then for each find surrounding fields robustly
const keyRe = /questionAudioKey:\s*'([^']+)'/g;
const entries = [];
let mm;
while ((mm = keyRe.exec(src))) {
  const key = mm[1];
  const idx = mm.index;
  // Look back for question (within 600 chars before)
  const before = src.slice(Math.max(0, idx - 1000), idx + 2000);
  const qMatch = /question:\s*'([^']*)'/.exec(before);
  const questionTr = qMatch ? qMatch[1].replace(/\\n/g, ' ') : '';
  // Look forward for speech block
  const after = src.slice(idx, idx + 2000);
  const sMatch = /speech:\s*\{[\s\S]*?tr:\s*\{[^}]*?correct:\s*'([^']*)'\s*,\s*wrong:\s*'([^']*)'[\s\S]*?\}\s*,\s*en:\s*\{[^}]*?correct:\s*'([^']*)'\s*,\s*wrong:\s*'([^']*)'[\s\S]*?\}/.exec(after);
  const trCorrect = sMatch ? sMatch[1].replace(/\\n/g, ' ') : '';
  const trWrong = sMatch ? sMatch[2].replace(/\\n/g, ' ') : '';
  const enCorrect = sMatch ? sMatch[3].replace(/\\n/g, ' ') : '';
  const enWrong = sMatch ? sMatch[4].replace(/\\n/g, ' ') : '';
  const guessQuestionEn = key.replace(/^q_/, '').split('_').join(' ');
  const questionEn = guessQuestionEn.charAt(0).toUpperCase() + guessQuestionEn.slice(1) + '?';
  entries.push({ key, questionTr, questionEn, trCorrect, trWrong, enCorrect, enWrong });
}

if (!entries.length) {
  console.error('No questionAudioKey entries found.');
  process.exit(1);
}

function mergeI18n(filePath, locale, prop) {
  const obj = JSON.parse(readFile(filePath));
  let changed = false;
  // Ensure container exists
  if (prop === 'questions') {
    obj.questions = obj.questions || {};
    for (const e of entries) {
      if (!obj.questions[e.key]) {
        obj.questions[e.key] = locale === 'tr' ? e.questionTr : e.questionEn;
        changed = true;
      }
    }
  }
  if (prop === 'gameFiveWOneH') {
    obj.reasoning = obj.reasoning || {};
    obj.reasoning.fiveWOneH = obj.reasoning.fiveWOneH || {};
    for (const e of entries) {
      if (!obj.reasoning.fiveWOneH[e.key]) {
        obj.reasoning.fiveWOneH[e.key] = {
          question: locale === 'tr' ? e.questionTr : e.questionEn,
          correct: locale === 'tr' ? e.trCorrect : e.enCorrect,
          wrong: locale === 'tr' ? e.trWrong : e.enWrong
        };
        changed = true;
      }
    }
  }
  if (changed) writeJson(filePath, obj);
  return changed;
}

let anyChange = false;
anyChange = mergeI18n(enContentPath, 'en', 'questions') || anyChange;
anyChange = mergeI18n(trContentPath, 'tr', 'questions') || anyChange;
anyChange = mergeI18n(enGameActPath, 'en', 'gameFiveWOneH') || anyChange;
anyChange = mergeI18n(trGameActPath, 'tr', 'gameFiveWOneH') || anyChange;

if (anyChange) {
  console.log('i18n files updated with missing fiveWOneH keys.');
} else {
  console.log('No changes needed - keys already present.');
}

process.exit(0);
