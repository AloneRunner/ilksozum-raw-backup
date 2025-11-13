import fs from 'fs';
import path from 'path';

const root = process.cwd();
const dataPath = path.join(root, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const trContentPath = path.join(root, 'src', 'i18n', 'tr', 'content.json');
const trGameActPath = path.join(root, 'src', 'i18n', 'tr', 'gameActivities.json');
const enContentPath = path.join(root, 'src', 'i18n', 'en', 'content.json');
const enGameActPath = path.join(root, 'src', 'i18n', 'en', 'gameActivities.json');

function read(p){return fs.readFileSync(p,'utf8')}
function writeJson(p, obj){fs.writeFileSync(p, JSON.stringify(obj, null, 2)+'\n','utf8')}

const src = read(dataPath);

// Extract blocks by locating questionAudioKey and then nearby fields
const keyRe = /questionAudioKey:\s*'([^']+)'/g;
const rounds = [];
let m;
while ((m = keyRe.exec(src))) {
  const key = m[1];
  const blockStart = src.lastIndexOf('{', m.index - 200);
  const blockEnd = src.indexOf('},', m.index + 1);
  const block = src.slice(Math.max(0, blockStart), blockEnd + 1);
  const qMatch = /question:\s*'([^']*)'/.exec(block);
  const trQ = qMatch ? qMatch[1] : '';
  const sMatch = /speech:\s*\{[\s\S]*?tr:\s*\{[\s\S]*?correct:\s*'([^']*)'[\s\S]*?wrong:\s*'([^']*)'[\s\S]*?\}[\s\S]*?en:\s*\{[\s\S]*?correct:\s*'([^']*)'[\s\S]*?wrong:\s*'([^']*)'[\s\S]*?\}/.exec(block);
  const trCorrect = sMatch ? sMatch[1] : '';
  const trWrong = sMatch ? sMatch[2] : '';
  const enCorrect = sMatch ? sMatch[3] : '';
  const enWrong = sMatch ? sMatch[4] : '';
  rounds.push({key, trQ, trCorrect, trWrong, enCorrect, enWrong});
}

if (!rounds.length){
  console.error('No rounds extracted.');
  process.exit(1);
}

// Update TR content.json questions ensuring accurate mapping
const trContent = JSON.parse(read(trContentPath));
trContent.questions = trContent.questions || {};
let trContentChanged = false;
for (const r of rounds){
  if (r.trQ && trContent.questions[r.key] !== r.trQ){
    trContent.questions[r.key] = r.trQ;
    trContentChanged = true;
  }
}
if (trContentChanged) writeJson(trContentPath, trContent);

// Update TR gameActivities.json both nested reasoning.fiveWOneH and top-level fiveWOneH
const trGame = JSON.parse(read(trGameActPath));
trGame.reasoning = trGame.reasoning || {};
trGame.reasoning.fiveWOneH = trGame.reasoning.fiveWOneH || {};
trGame.fiveWOneH = trGame.fiveWOneH || {};
let trGameChanged = false;
for (const r of rounds){
  const obj = { question: r.trQ, correct: r.trCorrect, wrong: r.trWrong };
  const cur1 = trGame.reasoning.fiveWOneH[r.key] || {};
  if (obj.question && (cur1.question !== obj.question || cur1.correct !== obj.correct || cur1.wrong !== obj.wrong)){
    trGame.reasoning.fiveWOneH[r.key] = obj;
    trGameChanged = true;
  }
  const cur2 = trGame.fiveWOneH[r.key] || {};
  if (obj.question && (cur2.question !== obj.question || cur2.correct !== obj.correct || cur2.wrong !== obj.wrong)){
    trGame.fiveWOneH[r.key] = obj;
    trGameChanged = true;
  }
}
if (trGameChanged) writeJson(trGameActPath, trGame);

// Optional: keep EN feedback aligned but do not overwrite EN questions
const enGame = JSON.parse(read(enGameActPath));
enGame.reasoning = enGame.reasoning || {};
enGame.reasoning.fiveWOneH = enGame.reasoning.fiveWOneH || {};
enGame.fiveWOneH = enGame.fiveWOneH || {};
let enGameChanged = false;
for (const r of rounds){
  const obj = { question: enGame.fiveWOneH[r.key]?.question || enGame.reasoning.fiveWOneH[r.key]?.question || '', correct: r.enCorrect, wrong: r.enWrong };
  const cur1 = enGame.reasoning.fiveWOneH[r.key] || {};
  if (obj.correct && (cur1.correct !== obj.correct || cur1.wrong !== obj.wrong)){
    enGame.reasoning.fiveWOneH[r.key] = { ...(cur1 || {}), correct: obj.correct, wrong: obj.wrong, question: cur1.question || obj.question };
    enGameChanged = true;
  }
  const cur2 = enGame.fiveWOneH[r.key] || {};
  if (obj.correct && (cur2.correct !== obj.correct || cur2.wrong !== obj.wrong)){
    enGame.fiveWOneH[r.key] = { ...(cur2 || {}), correct: obj.correct, wrong: obj.wrong, question: cur2.question || obj.question };
    enGameChanged = true;
  }
}
if (enGameChanged) writeJson(enGameActPath, enGame);

console.log(`Synced TR i18n for ${rounds.length} fiveWOneH rounds. Changes:`);
console.log(` - tr/content.json: ${trContentChanged ? 'UPDATED' : 'no change'}`);
console.log(` - tr/gameActivities.json: ${trGameChanged ? 'UPDATED' : 'no change'}`);
console.log(` - en/gameActivities.json: ${enGameChanged ? 'UPDATED' : 'no change'}`);
