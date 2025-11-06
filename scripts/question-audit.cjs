const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'src', 'services', 'database', 'activities');
const outDir = path.resolve(__dirname, '..', 'reports');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function walk(dir) {
  const res = [];
  const list = fs.readdirSync(dir);
  list.forEach((f) => {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) res.push(...walk(p));
    else if (stat.isFile() && p.endsWith('.ts')) res.push(p);
  });
  return res;
}

const files = walk(root);
const entries = [];

files.forEach((file) => {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('questionAudioKey')) {
      // attempt to extract key on same line
      const keyMatch = line.match(/questionAudioKey\s*[:=]\s*["']([^"']+)["']/);
      let key = keyMatch ? keyMatch[1] : null;
      // if not on same line, try next few lines
      if (!key) {
        for (let j = i; j < Math.min(i + 3, lines.length); j++) {
          const m = lines[j].match(/questionAudioKey\s*[:=]\s*["']([^"']+)["']/);
          if (m) { key = m[1]; break; }
        }
      }
      // find the question that belongs to the same object literal as this key
      // approach: locate the nearest opening '{' above this line that starts the object,
      // then scan forward until its matching '}' and look for question / questionText inside that block.
      let visible = '';
      // find start of object by scanning backwards for a line with '{'
      let objStart = -1;
      for (let j = i; j >= 0; j--) {
        if (lines[j].includes('{')) { objStart = j; break; }
      }
      let objEnd = -1;
      if (objStart >= 0) {
        // scan forward from objStart tracking brace depth
        let depth = 0;
        for (let j = objStart; j < lines.length; j++) {
          const linej = lines[j];
          for (const ch of linej) {
            if (ch === '{') depth++;
            else if (ch === '}') depth--;
          }
          if (depth === 0) { objEnd = j; break; }
        }
      }
      const searchFrom = objStart >= 0 ? objStart : Math.max(0, i - 10);
      const searchTo = objEnd >= 0 ? objEnd : Math.min(lines.length - 1, i + 10);
      for (let j = searchFrom; j <= searchTo; j++) {
        const qMatch = lines[j].match(/question(?:Text)?\s*[:=]\s*["']([^"']+)["']/);
        if (qMatch) { visible = qMatch[1]; break; }
      }
      // fallback: try to find question: "..." earlier in same object by scanning backwards until a closing brace
      entries.push({ file: path.relative(path.resolve(__dirname, '..'), file), line: i+1, key: key || '<missing>', visible });
    }
  }
});

// group by key
const grouped = {};
entries.forEach((e) => {
  if (!grouped[e.key]) grouped[e.key] = { key: e.key, files: new Set(), visibles: new Set(), entries: [] };
  grouped[e.key].files.add(e.file);
  if (e.visible && e.visible.trim()) grouped[e.key].visibles.add(e.visible.trim());
  grouped[e.key].entries.push(e);
});

const rows = [];
Object.values(grouped).forEach((g) => {
  const files = Array.from(g.files).sort();
  const visibles = Array.from(g.visibles).sort();
  const collision = visibles.length > 1 ? 'true' : 'false';
  rows.push({ key: g.key, collision, visibles: visibles.join(' | '), files: files.join(' | ') });
});

// write CSV
const csvPath = path.join(outDir, 'questionAudioKey-audit.csv');
const header = 'questionAudioKey,collision,distinctVisibleQuestions,files\n';
const csv = header + rows.map(r => `${escapeCSV(r.key)},${r.collision},${escapeCSV(r.visibles)},${escapeCSV(r.files)}`).join('\n');
fs.writeFileSync(csvPath, csv, 'utf8');

// also write details JSON
const detailsPath = path.join(outDir, 'questionAudioKey-audit-details.json');
fs.writeFileSync(detailsPath, JSON.stringify(grouped, replacer, 2), 'utf8');

console.log('Wrote audit CSV to', csvPath);

function escapeCSV(s) {
  if (s == null) return '';
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('|')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function replacer(key, val) {
  if (val instanceof Set) return Array.from(val);
  return val;
}
