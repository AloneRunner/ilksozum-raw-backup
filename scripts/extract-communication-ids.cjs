const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const commPath = path.join(repoRoot, 'src', 'services', 'communicationData.ts');
const dbDir = path.join(repoRoot, 'src', 'services', 'database');

function buildImageMap() {
  const files = fs.readdirSync(dbDir).filter(f => f.startsWith('imageData'));
  const map = {};
  const idWordRe = /["']?id["']?\s*:\s*(\d+)\s*,[\s\S]*?["']?word["']?\s*:\s*['`"]([^'"`]+)['`"]/g;
  for (const f of files) {
    const full = path.join(dbDir, f);
    let content;
    try { content = fs.readFileSync(full, 'utf8'); } catch (e) { continue; }
    let m;
    while ((m = idWordRe.exec(content))) {
      const id = Number(m[1]);
      const word = m[2];
      map[id] = word;
    }
  }
  return map;
}

function extract() {
  const imageMap = buildImageMap();
  const comm = fs.readFileSync(commPath, 'utf8');

  const catHeaderRe = /id:\s*'([^']+)'\s*,\s*title:\s*'([^']+)'/g;
  const subRe = /\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*imageId:\s*(\d+),\s*cards:\s*\[([\s\S]*?)\]\s*\}/g;
  const createImgRe = /createCardFromImage\((\d+)(?:,\s*'([^']*)')?\)/g;
  const createManualRe = /createManualCard\(\s*'([^']+)'\s*,\s*'([^']+)'(?:\s*,\s*(\d+))?\s*\)/g;

  const cats = [];
  // Find category headers and then extract their subCategories array by bracket matching.
  let hm;
  while ((hm = catHeaderRe.exec(comm))) {
    const catId = hm[1];
    const catTitle = hm[2];
    // find where this header occurs and search forward for 'subCategories'
    const startIdx = hm.index;
    const subIdx = comm.indexOf('subCategories', startIdx);
    if (subIdx === -1) continue;
    const arrStart = comm.indexOf('[', subIdx);
    if (arrStart === -1) continue;
    // find matching closing bracket
    let i = arrStart + 1;
    let depth = 1;
    while (i < comm.length && depth > 0) {
      const ch = comm[i];
      if (ch === '[') depth++; else if (ch === ']') depth--;
      i++;
    }
    const arrEnd = i;
    const subBlock = comm.slice(arrStart + 1, arrEnd - 1);
    const subs = [];
    let sm;
    while ((sm = subRe.exec(subBlock))) {
      const subId = sm[1];
      const subTitle = sm[2];
      const subImageId = Number(sm[3]);
      const cardsBlock = sm[4];
      const cards = [];
      let m;
      while ((m = createImgRe.exec(cardsBlock))) {
        const imgId = Number(m[1]);
        const customText = m[2] || null;
        cards.push({ type: 'image', imageId: imgId, customText, cardId: `img_${imgId}` , imageWord: imageMap[imgId] || null });
      }
      while ((m = createManualRe.exec(cardsBlock))) {
        const cardId = m[1];
        const text = m[2];
        const imageId = m[3] ? Number(m[3]) : null;
        cards.push({ type: 'manual', id: cardId, text, imageId, imageWord: imageId ? (imageMap[imageId] || null) : null });
      }
      subs.push({ subId, subTitle, subImageId, subImageWord: imageMap[subImageId] || null, cards });
    }
    cats.push({ catId, catTitle, subCategories: subs });
  }
  return cats;
}

const out = extract();
console.log(JSON.stringify(out, null, 2));
