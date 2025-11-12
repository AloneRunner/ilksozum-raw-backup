import fs from 'fs';
import path from 'path';

const root = process.cwd();
const enContentPath = path.join(root, 'src', 'i18n', 'en', 'content.json');
const data = JSON.parse(fs.readFileSync(enContentPath, 'utf8'));

// Utilities
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function ensureQmark(s) {
  const t = s.trim();
  if (/[?]$/.test(t)) return t;
  return t.replace(/[.!]+$/, '').trim() + '?';
}

function swapBeAux(s) {
  // Why X is ... -> Why is X ...
  s = s.replace(/^(Why)\s+([^?]*?)\s+is\b/i, (_, w, subj) => `${cap(w.toLowerCase())} is ${subj}`);
  // Why X are ... -> Why are X ...
  s = s.replace(/^(Why)\s+([^?]*?)\s+are\b/i, (_, w, subj) => `${cap(w.toLowerCase())} are ${subj}`);
  // Where X is ... -> Where is X ...
  s = s.replace(/^(Where)\s+([^?]*?)\s+is\b/i, (_, w, subj) => `${cap(w.toLowerCase())} is ${subj}`);
  // Where X are ... -> Where are X ...
  s = s.replace(/^(Where)\s+([^?]*?)\s+are\b/i, (_, w, subj) => `${cap(w.toLowerCase())} are ${subj}`);
  return s;
}

function modalReorder(s) {
  // How we can -> How can we
  s = s.replace(/^(How|What|Why|Where|When)\s+we\s+(can|should|will|could|would|may|might)\b/i,
    (_, w, m) => `${cap(w.toLowerCase())} ${m.toLowerCase()} we`);
  s = s.replace(/^(How|What|Why|Where|When)\s+you\s+(can|should|will|could|would|may|might)\b/i,
    (_, w, m) => `${cap(w.toLowerCase())} ${m.toLowerCase()} you`);
  s = s.replace(/^(How|What|Why|Where|When)\s+they\s+(can|should|will|could|would|may|might)\b/i,
    (_, w, m) => `${cap(w.toLowerCase())} ${m.toLowerCase()} they`);
  s = s.replace(/^(How|What|Why|Where|When)\s+(he|she|it)\s+(can|should|will|could|would|may|might)\b/i,
    (_, w, subj, m) => `${cap(w.toLowerCase())} ${m.toLowerCase()} ${subj.toLowerCase()}`);
  return s;
}

function doDoesSupport(s) {
  // How we go -> How do we go
  s = s.replace(/^(How|What|Why|Where|When)\s+we\s+([a-z]+)/i,
    (_, w, v) => `${cap(w.toLowerCase())} do we ${v.toLowerCase()}`);
  s = s.replace(/^(How|What|Why|Where|When)\s+you\s+([a-z]+)/i,
    (_, w, v) => `${cap(w.toLowerCase())} do you ${v.toLowerCase()}`);
  s = s.replace(/^(How|What|Why|Where|When)\s+they\s+([a-z]+)/i,
    (_, w, v) => `${cap(w.toLowerCase())} do they ${v.toLowerCase()}`);
  // he/she/it -> does
  s = s.replace(/^(How|What|Why|Where|When)\s+(he|she|it)\s+([a-z]+)/i,
    (_, w, subj, v) => `${cap(w.toLowerCase())} does ${subj.toLowerCase()} ${v.toLowerCase()}`);
  // common nouns (child, baby, boy, girl, man, woman)
  s = s.replace(/^(How|What|Why|Where|When)\s+(child|baby|boy|girl|man|woman)\s+([a-z]+)/i,
    (_, w, noun, v) => `${cap(w.toLowerCase())} does the ${noun.toLowerCase()} ${v.toLowerCase()}`);
  // Which X we ... -> Which X do we ...
  s = s.replace(/^(Which\s+\w+)\s+we\s+([a-z]+)/i,
    (_, which, v) => `${cap(which)} do we ${v.toLowerCase()}`);
  s = s.replace(/^(Which\s+\w+)\s+they\s+([a-z]+)/i,
    (_, which, v) => `${cap(which)} do they ${v.toLowerCase()}`);
  s = s.replace(/^(Which\s+\w+)\s+(he|she|it)\s+([a-z]+)/i,
    (_, which, subj, v) => `${cap(which)} does ${subj.toLowerCase()} ${v.toLowerCase()}`);
  return s;
}

function tidy(s) {
  // Normalize spacing and capitalization of first word
  s = s.replace(/\s+/g, ' ').trim();
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return ensureQmark(s);
}

function fixQuestion(q) {
  if (!q || typeof q !== 'string') return q;
  let t = q.trim();
  const original = t;

  // Targeted quick fixes
  t = t.replace(/^How\s+go\b/i, 'How do we go');
  t = t.replace(/^How\s+open\b/i, 'How do we open');
  t = t.replace(/^How\s+make\b/i, 'How do we make');
  t = t.replace(/^What\s+do we do do\b/i, 'What do we do');

  // Structural fixes
  t = modalReorder(t);
  t = swapBeAux(t);
  t = doDoesSupport(t);
  t = tidy(t);

  return t === original ? t : t;
}

let changed = false;
if (data && data.questions) {
  for (const [k, v] of Object.entries(data.questions)) {
    if (typeof v === 'string' && /^q_/.test(k)) {
      const fixed = fixQuestion(v);
      if (fixed !== v) {
        data.questions[k] = fixed;
        changed = true;
      }
    }
  }
}

if (changed) {
  fs.writeFileSync(enContentPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Advanced: Updated English question sentences in en/content.json');
} else {
  console.log('Advanced: No further changes needed.');
}
