import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const langs = ['en','tr','de','fr','nl','az'];

async function read(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw).questions || {};
}

async function run(){
  const data = {};
  for(const l of langs) data[l] = await read(l);

  const keys = Object.keys(data.en);
  const report = {};
  for(const l of langs){
    if(l === 'en') continue;
    report[l] = [];
    for(const k of keys){
      const val = data[l][k] ?? '';
      const enVal = data.en[k] ?? '';
      if(!val) { report[l].push({key:k, issue:'empty', value:val}); continue; }
      if(val === enVal) { report[l].push({key:k, issue:'same-as-en', value:val}); continue; }
      if(val === data.tr[k]) { report[l].push({key:k, issue:'same-as-tr', value:val}); continue; }
    }
  }

  for(const l of Object.keys(report)){
    console.log(`\n=== ${l} (${report[l].length}) ===`);
    const sample = report[l].slice(0,30);
    for(const r of sample) console.log(r.issue.padEnd(12), r.key);
    if(report[l].length > 30) console.log('... and', report[l].length - 30, 'more');
  }
}

run().catch(err => { console.error(err); process.exitCode = 1; });
