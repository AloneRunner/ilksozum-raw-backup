import fs from 'fs';
import path from 'path';

const root = process.cwd();
const filePath = path.join(root, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
let src = fs.readFileSync(filePath, 'utf8');

// Insert spokenText: '<word>' after word: '<word>' before imageUrl in option objects
const before = src;
src = src.replace(/(word:\s*'([^']+)'\s*,)(\s*imageUrl:)/g, (_, a, word, c) => {
  // If spokenText already present shortly after, skip
  const segment = a + c;
  if (/spokenText\s*:/.test(segment)) return a + c;
  return `word: '${word}', spokenText: '${word}',` + c;
});

if (src !== before) {
  fs.writeFileSync(filePath, src, 'utf8');
  console.log('Inserted spokenText for options in fiveWOneHData.ts');
} else {
  console.log('No changes applied (spokenText already present or patterns not found).');
}
