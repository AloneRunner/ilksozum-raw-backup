#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const ACTIVITIES_DIR = path.join(ROOT, 'src', 'services', 'database', 'activities');
const OUT_TEMPLATES = path.join(ROOT, 'i18n_templates', 'concepts');
const OUT_EXPORTS = path.join(ROOT, 'i18n_exports');

await fs.mkdir(OUT_TEMPLATES, { recursive: true });
await fs.mkdir(OUT_EXPORTS, { recursive: true });

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await walk(full));
    } else if (/\.ts$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
};

const files = await walk(ACTIVITIES_DIR);
const roundOrigin = {};
const csvRows = ['file,roundId,question,questionAudioKey,options'];

for (const file of files) {
  const content = await fs.readFile(file, 'utf8');
  // Find object literal chunks that look like ConceptRound entries
  const re = /\{[\s\S]*?id\s*:\s*(\d+)[\s\S]*?question\s*:\s*"([^"]*)"[\s\S]*?(questionAudioKey\s*:\s*"([^"]*)")?[\s\S]*?options\s*:\s*\[([\s\S]*?)\]/g;
  let m;
  const relFile = path.relative(ROOT, file).replace(/\\/g, '/');
  const rounds = {};
  while ((m = re.exec(content)) !== null) {
    const id = m[1];
    const question = m[2] || '';
    const questionAudioKey = m[4] || '';
    const optionsText = m[5] || '';
    const optionRe = /\{[^}]*?id\s*:\s*(\d+)[^}]*?word\s*:\s*"([^"]*)"[^}]*?spokenText\s*:\s*"([^"]*)"[^}]*?\}/g;
    const options = {};
    let om;
    while ((om = optionRe.exec(optionsText)) !== null) {
      const oid = om[1];
      const word = om[2];
      const spoken = om[3];
      options[oid] = spoken || word || '';
    }
    rounds[id] = { question, questionAudioKey, options };
    // If the same round id appears in multiple files, prefer the aliveLifeless data file
    // so Alive/Lifeless rounds are attributed correctly in dev logs.
    if (!roundOrigin[id] || relFile.includes('activities/qualities/aliveLifelessData.ts')) {
      roundOrigin[id] = relFile;
    }
    csvRows.push(`${relFile},${id},"${question.replace(/"/g,'\"')}",${questionAudioKey || ''},"${Object.values(options).join('|').replace(/"/g,'\"')}"`);
  }

  if (Object.keys(rounds).length > 0) {
    const base = path.basename(file, path.extname(file));
    const out = { rounds };
    const outPathTR = path.join(OUT_TEMPLATES, `${base}.tr.json`);
    const outPathEN = path.join(OUT_TEMPLATES, `${base}.en.json`);
    await fs.writeFile(outPathTR, JSON.stringify(out, null, 2), 'utf8');
    // create english placeholder (copy question to en as best-effort)
    const outEn = { rounds: {} };
    for (const [rid, r] of Object.entries(rounds)) {
      outEn.rounds[rid] = { question: r.question, questionAudioKey: r.questionAudioKey, options: r.options };
    }
    await fs.writeFile(outPathEN, JSON.stringify(outEn, null, 2), 'utf8');
  }
}

await fs.writeFile(path.join(OUT_EXPORTS, 'round-origin.json'), JSON.stringify(roundOrigin, null, 2), 'utf8');
await fs.writeFile(path.join(OUT_EXPORTS, 'concept-rounds.csv'), csvRows.join('\n'), 'utf8');

console.log(`Wrote ${Object.keys(roundOrigin).length} round origins to ${path.join('i18n_exports','round-origin.json')}`);
