import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const targets = ['az','fr'];

async function read(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  return {path: p, json: JSON.parse(raw)};
}

async function backup(filePath){
  const bak = filePath + '.bak.copytr';
  await fs.copyFile(filePath, bak);
  return bak;
}

function needsReplace(targetVal, enVal){
  if(!targetVal) return true;
  if(typeof targetVal !== 'string') return true;
  const t = targetVal.trim();
  if(t === '') return true;
  if(t.startsWith('[MISSING]')) return true;
  return false;
}

async function run(){
  const tr = await read('tr');
  const en = await read('en');
  const dataTR = tr.json.questions || {};
  const dataEN = en.json.questions || {};

  for(const tgt of targets){
    const r = await read(tgt);
    const p = r.path;
    const q = r.json.questions || {};
    await backup(p);
    let changed = 0;

    for(const k of Object.keys(dataTR)){
      const trv = dataTR[k];
      if(!trv || typeof trv !== 'string') continue;
      const env = dataEN[k] ?? '';
      const cur = q[k];
      if(needsReplace(cur, env)){
        q[k] = '[TR] ' + trv;
        changed++;
      }
    }

    // also ensure keys that exist in EN but not in target get TR copy
    for(const k of Object.keys(dataEN)){
      if(k in q) continue;
      const trv = dataTR[k];
      if(trv && typeof trv === 'string'){
        q[k] = '[TR] ' + trv;
        changed++;
      }
    }

    const out = {questions:{}};
    Object.keys(q).sort().forEach(k => out.questions[k] = q[k]);
    await fs.writeFile(p, JSON.stringify(out, null, 2) + '\n', 'utf8');
    console.log(`${tgt}: wrote ${changed} changes (backup: ${p}.bak.copytr)`);
  }
}

run().catch(err => { console.error(err); process.exitCode = 1; });
