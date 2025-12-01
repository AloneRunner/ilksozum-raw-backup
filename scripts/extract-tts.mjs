import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'i18n_exports');
const OUT_FILE = path.join(OUT_DIR, 'tts-inventory.csv');

const exts = ['.ts', '.tsx', '.js', '.mjs'];
const skipDirs = new Set(['node_modules', 'dist', 'build', 'public', 'android', '.git', 'archive', 'i18n_exports']);

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    if (d.isDirectory()) {
      if (skipDirs.has(d.name)) continue;
      results.push(...walk(path.join(dir, d.name)));
    } else if (d.isFile()) {
      if (exts.includes(path.extname(d.name))) results.push(path.join(dir, d.name));
    }
  }
  return results;
}

function escapeCsvCell(s) {
  if (s == null) return '';
  const str = String(s).replace(/\r?\n/g, ' ');
  if (/[",\n]/.test(str)) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function analyzeFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  const results = [];
  // simple regex to find speak( ... ) occurrences on a line
  const speakCall = /\bspeak\s*\(([^)]*)\)/g;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let m;
    while ((m = speakCall.exec(line)) !== null) {
      const arg = (m[1] || '').trim();
      let kind = 'dynamic';
      let textVal = '';
      // match string literal in single/double/backtick
      const litMatch = arg.match(/^`([\s\S]*)`\s*[,;]?$/) || arg.match(/^'([\s\S]*)'\s*[,;]?$/) || arg.match(/^"([\s\S]*)"\s*[,;]?$/);
      if (litMatch) {
        textVal = litMatch[1];
        if (arg.startsWith('`')) {
          if (textVal.includes('${')) kind = 'template(expression)';
          else kind = 'template(literal)';
        } else {
          kind = 'literal';
        }
      } else {
        // if argument is a variable or expression, try to capture short snippet
        kind = 'expression';
        textVal = arg.replace(/\s+/g, ' ');
      }
      results.push({ file: path.relative(ROOT, filePath), line: i + 1, kind, text: textVal, snippet: line.trim() });
    }
  }
  return results;
}

function main() {
  const files = walk(ROOT);
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const rows = [['file','line','kind','text','snippet']];
  for (const f of files) {
    try {
      const res = analyzeFile(f);
      for (const r of res) rows.push([r.file, String(r.line), r.kind, r.text, r.snippet]);
    } catch (e) {
      console.error('Error analyzing', f, e.message);
    }
  }
  const csv = rows.map(r => r.map(escapeCsvCell).join(',')).join('\n');
  fs.writeFileSync(OUT_FILE, csv, 'utf8');
  console.log('Wrote', OUT_FILE, 'with', rows.length - 1, 'entries');
}

main();
