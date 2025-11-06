#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readDirRecursive(dir) {
  const res = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) res.push(...readDirRecursive(full));
    else res.push(full);
  }
  return res;
}

function loadImageDataFiles(root) {
  const files = readDirRecursive(root).filter(f => /imageData-.*\.ts$/.test(f));
  const living = new Set();
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    // find occurrences of "id": <num> ... "lifeform": "canlı"
    const objRegex = /"id"\s*:\s*(\d+)[\s\S]*?"lifeform"\s*:\s*"(canlı|cansız)"/g;
    let m;
    while ((m = objRegex.exec(text))) {
      const id = m[1];
      const life = m[2];
      if (life === 'canlı') living.add(id);
    }
  }
  return living;
}

function scanActivityFiles(root, livingSet) {
  const files = readDirRecursive(root).filter(f => f.endsWith('.ts'));
  const results = [];
  const roundRegex = /\{[\s\S]*?id\s*[:=]\s*(\d+)[\s\S]*?options\s*:\s*\[([\s\S]*?)\][\s\S]*?\}/g;
  const optionRegex = /\{[\s\S]*?id\s*[:=]\s*(\d+)[\s\S]*?word\s*[:=]\s*["'`]([^"'`]+)["'`][\s\S]*?imageUrl\s*[:=]\s*["'`]\/images\/(\d+)\.(?:png|gif)["'`][\s\S]*?\}/g;

  for (const f of files) {
    if (!/\\activities\\/.test(f) && !/\/activities\//.test(f)) continue;
    const text = fs.readFileSync(f, 'utf8');
    let m;
    while ((m = roundRegex.exec(text))) {
      const roundId = m[1];
      const optionsBlock = m[2];
      let om;
      while ((om = optionRegex.exec(optionsBlock))) {
        const optId = om[1];
        const word = om[2];
        const imageId = om[3];
        if (livingSet.has(imageId)) {
          results.push({ file: f, roundId: Number(roundId), optionId: Number(optId), word, imageId: Number(imageId) });
        }
      }
    }
  }
  return results;
}

function writeReports(results) {
  const outDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const csv = ['file,roundId,optionId,word,imageId'];
  for (const r of results) {
    csv.push([r.file, r.roundId, r.optionId, '"' + r.word.replace(/"/g, '""') + '"', r.imageId].join(','));
  }
  fs.writeFileSync(path.join(outDir, 'living_rounds.csv'), csv.join('\n'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'living_rounds.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Wrote', results.length, 'matches to reports/living_rounds.csv and .json');
}

function main() {
  const root = path.join(process.cwd(), 'src', 'services', 'database');
  console.log('Scanning imageData files...');
  const living = loadImageDataFiles(root);
  console.log('Found', living.size, 'living image ids');
  console.log('Scanning activity files for references...');
  const activitiesRoot = path.join(root, 'activities');
  const results = scanActivityFiles(activitiesRoot, living);
  writeReports(results);
}

main();
