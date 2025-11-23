import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(__filename, '..', '..');
const i18nDir = path.join(root, 'src', 'i18n');
const outDir = path.join(root, 'reports');
const langs = ['en','tr','de','fr','nl','az'];

async function read(lang){
  const p = path.join(i18nDir, lang, 'questions.json');
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw).questions || {};
}

async function run(){
  await fs.mkdir(outDir, { recursive: true });
  const data = {};
  for(const l of langs) data[l] = await read(l);
  const keys = Object.keys(data.en);

  for(const l of langs){
    if(l === 'en') continue;
    const rows = ['key,issue,langValue,enValue,trValue'];
    for(const k of keys){
      const v = (data[l][k] || '').replace(/\"/g,'"').replace(/\n/g,'\\n');
      const en = (data.en[k] || '').replace(/\"/g,'"').replace(/\n/g,'\\n');
      const tr = (data.tr[k] || '').replace(/\"/g,'"').replace(/\n/g,'\\n');
      let issue = '';
      if(!v) issue = 'empty';
      else if(v === en) issue = 'same-as-en';
      else if(v === tr) issue = 'same-as-tr';
      if(issue) rows.push(`${k},${issue},"${v}","${en}","${tr}"`);
    }
    const out = rows.join('\n') + '\n';
    await fs.writeFile(path.join(outDir, `fallbacks-${l}.csv`), out, 'utf8');
    console.log('Wrote', `fallbacks-${l}.csv`);
  }
}

run().catch(e => { console.error(e); process.exitCode = 1; });
