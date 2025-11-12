import fs from 'fs';
import path from 'path';

const root = process.cwd();
const enContentPath = path.join(root, 'src', 'i18n', 'en', 'content.json');
const data = JSON.parse(fs.readFileSync(enContentPath, 'utf8'));

function fixSentence(s) {
  if (!s || typeof s !== 'string') return s;
  let t = s.trim();
  // Simple grammar fixes
  t = t.replace(/^How go\b/i, 'How do we go');
  t = t.replace(/^How child feels\??$/i, 'How does the child feel?');
  t = t.replace(/^How baby feels\??$/i, 'How does the baby feel?');
  t = t.replace(/^Why floor is\b/i, 'Why is the floor');
  t = t.replace(/^Why room is\b/i, 'Why is the room');
  t = t.replace(/^Why child is\b/i, 'Why is the child');
  t = t.replace(/^Why dirty dishes are\b/i, 'Why are the dirty dishes');
  t = t.replace(/^Why some people\b/i, 'Why do some people');
  t = t.replace(/^What we\b/i, 'What do we');
  // Ensure question mark
  if (!/[?]$/.test(t)) t = t.replace(/\.*$/, '').trim() + '?';
  // Capitalize first letter
  t = t.charAt(0).toUpperCase() + t.slice(1);
  return t;
}

let changed = false;
if (data && data.questions) {
  for (const [k, v] of Object.entries(data.questions)) {
    if (typeof v === 'string' && /^q_/.test(k)) {
      const fixed = fixSentence(v);
      if (fixed !== v) {
        data.questions[k] = fixed;
        changed = true;
      }
    }
  }
}

if (changed) {
  fs.writeFileSync(enContentPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated English question sentences in en/content.json');
} else {
  console.log('No changes needed for English question sentences.');
}
