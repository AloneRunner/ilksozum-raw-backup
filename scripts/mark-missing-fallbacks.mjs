import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const langs = ['en','tr','de','fr','nl','az'];
const targets = ['de','fr','nl','az'];

async function read(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  return {path: p, json: JSON.parse(raw)};
}

async function backup(file){
  await fs.copyFile(file, file + '.pre_mark.bak');
}

function startsWithAnyPrefixes(val){
  if(!val) return false;
  return val.startsWith('[TR] ') || val.startsWith('[MISSING] ');
}

async function run(){
  const data = {};
  for(const l of langs){
    const r = await read(l);
    data[l] = {path: r.path, questions: r.json.questions || {}};
  }

  const keys = Object.keys(data.en.questions);
  const summary = {};
  for(const t of targets) summary[t] = 0;

  for(const t of targets){
    await backup(data[t].path);
    for(const k of keys){
      const val = data[t].questions[k] ?? '';
      const en = data.en.questions[k] ?? '';
      if(!val) continue;
      if(val === en && !startsWithAnyPrefixes(val)){
        data[t].questions[k] = '[MISSING] ' + val;
        summary[t]++;
      }
    }
    const out = {questions:{}};
    Object.keys(data[t].questions).sort().forEach(k => out.questions[k] = data[t].questions[k]);
    await fs.writeFile(data[t].path, JSON.stringify(out, null, 2) + '\n', 'utf8');
  }

  console.log('Marked missing fallbacks. Summary:', summary);
}

run().catch(e => { console.error(e); process.exitCode = 1; });
