import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const langs = ['en','tr','de','fr','nl','az'];
const pref = ['en','tr','az','de','fr','nl'];

async function readQuestions(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  const json = JSON.parse(raw);
  return {path: p, json};
}

function getQuestionsMap(json){
  return json && json.questions ? json.questions : {};
}

async function run(){
  const data = {};
  for(const l of langs){
    try{
      const r = await readQuestions(l);
      data[l] = {path: r.path, questions: getQuestionsMap(r.json)};
    }catch(err){
      console.error('Failed to read', l, err.message);
      return process.exitCode = 2;
    }
  }

  // build union
  const union = new Set();
  for(const l of langs){
    Object.keys(data[l].questions || {}).forEach(k => union.add(k));
  }

  // fill missing keys using fallback order
  for(const l of langs){
    const q = data[l].questions;
    for(const key of union){
      if(!(key in q)){
        // find fallback
        let val = undefined;
        for(const f of pref){
          if(data[f] && data[f].questions && (key in data[f].questions)){
            val = data[f].questions[key];
            break;
          }
        }
        if(val === undefined){
          val = '';
        }
        q[key] = val;
      }
    }
  }

  // write back files with sorted keys
  for(const l of langs){
    const obj = {questions: {}};
    const keys = Object.keys(data[l].questions).sort();
    for(const k of keys){ obj.questions[k] = data[l].questions[k]; }
    const out = JSON.stringify(obj, null, 2) + '\n';
    await fs.writeFile(data[l].path, out, 'utf8');
    console.log('Updated', data[l].path, 'keys:', keys.length);
  }

  console.log('Migration complete. Please review language files for correctness.');
}

run().catch(err => { console.error(err); process.exitCode = 1; });
