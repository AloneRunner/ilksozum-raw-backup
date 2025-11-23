import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const langs = ['en','tr','de','fr','nl','az'];
// Only apply semi-auto fixes to languages requested (Azerbaijani and French)
const targets = ['az','fr'];

function safePrefix(val, prefix){
  if(!val) return val;
  if(val.startsWith(prefix)) return val;
  return prefix + val;
}

async function read(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  return {path: p, json: JSON.parse(raw)};
}

async function backup(filePath){
  const bak = filePath + '.bak';
  await fs.copyFile(filePath, bak);
  return bak;
}

async function run(){
  const data = {};
  for(const l of langs){
    const r = await read(l);
    data[l] = {path: r.path, questions: r.json.questions || {}};
  }

  const keys = Object.keys(data.en.questions);
  const summary = {};
  for(const t of targets) summary[t] = {copiedFromTR:0, leftAsEN:0, alreadyTR:0};

  for(const t of targets){
    // backup
    await backup(data[t].path);
    // apply rules
    for(const k of keys){
      const val = data[t].questions[k] ?? '';
      const en = data.en.questions[k] ?? '';
      const tr = data.tr.questions[k] ?? '';

      // If target value is missing, empty, or equals English, and Turkish has a different value,
      // copy the Turkish value into the target prefixed with '[TR] '. Also handle values already
      // marked as '[MISSING]'. This is conservative and leaves other values untouched.
      const isMissingMarker = typeof val === 'string' && val.startsWith('[MISSING]');
      const isEmpty = !val || (typeof val === 'string' && val.trim() === '');
      const isSameAsEn = val === en;

      if((isMissingMarker || isEmpty || isSameAsEn) && tr && tr !== en){
        data[t].questions[k] = safePrefix(tr, '[TR] ');
        summary[t].copiedFromTR++;
      } else if(val === tr && tr && tr !== en){
        // already same as tr (fallback earlier) — ensure prefix
        data[t].questions[k] = safePrefix(val, '[TR] ');
        summary[t].alreadyTR++;
      }
    }

    // write back sorted
    const outObj = {questions:{}};
    Object.keys(data[t].questions).sort().forEach(k => { outObj.questions[k] = data[t].questions[k]; });
    await fs.writeFile(data[t].path, JSON.stringify(outObj, null, 2) + '\n', 'utf8');
  }

  console.log('Semi-auto fixes applied. Summary:');
  console.table(summary);
  console.log('Backups created with .bak suffix for each modified file.');
}

run().catch(err => { console.error(err); process.exitCode = 1; });
