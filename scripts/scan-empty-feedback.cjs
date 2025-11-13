const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', 'src', 'i18n');
const locales = fs.readdirSync(i18nDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

function walk(obj, callback, parentKey) {
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      if (val && typeof val === 'object' && ('question' in val) && ('correct' in val || 'wrong' in val)) {
        callback(parentKey ? `${parentKey}.${key}` : key, val);
      } else {
        walk(val, callback, parentKey ? `${parentKey}.${key}` : key);
      }
    }
  }
}

const report = {};
for (const locale of locales) {
  const file = path.join(i18nDir, locale, 'gameActivities.json');
  if (!fs.existsSync(file)) continue;
  try {
    const raw = fs.readFileSync(file, 'utf8');
    const j = JSON.parse(raw);
    const missing = [];
    walk(j, (fullKey, node) => {
      const key = fullKey.replace(/^fiveWOneH\./, '').replace(/^fiveWOneH\.?/, '');
      const correctEmpty = ('correct' in node) && (String(node.correct).trim() === '');
      const wrongEmpty = ('wrong' in node) && (String(node.wrong).trim() === '');
      if (correctEmpty || wrongEmpty) {
        missing.push({ key, correctEmpty, wrongEmpty });
      }
    });
    report[locale] = { file, missingCount: missing.length, missing };
  } catch (e) {
    report[locale] = { file, error: String(e) };
  }
}

console.log(JSON.stringify(report, null, 2));
