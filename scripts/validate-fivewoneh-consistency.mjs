import fs from 'fs';
import path from 'path';

const root = process.cwd();
const dataPath = path.join(root, 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const raw = fs.readFileSync(dataPath, 'utf8');

// Extract rounds using regex
const roundPattern = /\{\s*id:\s*(\d+),[\s\S]*?question:\s*['"`](.*?)['"`],[\s\S]*?questionItem:\s*(?:meta|{id:\s*)(\d+).*?\},\s*options:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;

const rounds = [];
let match;
while ((match = roundPattern.exec(raw)) !== null) {
  const [, id, question, imageId, optionsRaw] = match;
  
  // Extract correct option
  const correctMatch = /(word:\s*['"`](.*?)['"`].*?isCorrect:\s*true|isCorrect:\s*true.*?word:\s*['"`](.*?)['"`])/s.exec(optionsRaw);
  const correctWord = correctMatch ? (correctMatch[2] || correctMatch[3]) : 'UNKNOWN';
  
  rounds.push({ id: parseInt(id), question, imageId: parseInt(imageId), correctWord });
}

console.log(`Extracted ${rounds.length} rounds\n`);

// Validate consistency
let issues = 0;
for (const r of rounds) {
  const problems = [];
  
  // Check if question and correct answer are semantically aligned
  const q = r.question.toLowerCase();
  const c = r.correctWord.toLowerCase();
  
  // Example heuristics
  if (q.includes('hastalanınca') && !c.includes('doktor')) problems.push('Hastalanınca → doktor bekleniyor');
  if (q.includes('yangın') && !c.includes('itfaiye')) problems.push('Yangın → itfaiye bekleniyor');
  if (q.includes('uçağı') && !c.includes('pilot')) problems.push('Uçağı → pilot bekleniyor');
  if (q.includes('saçımızı') && !c.includes('berber')) problems.push('Saçımızı → berber bekleniyor');
  if (q.includes('yemeği') && !c.includes('aşçı')) problems.push('Yemeği → aşçı bekleniyor');
  if (q.includes('ders anlatır') && !c.includes('öğretmen')) problems.push('Ders anlatır → öğretmen bekleniyor');
  if (q.includes('mektup') && !c.includes('postacı')) problems.push('Mektup → postacı bekleniyor');
  
  if (problems.length > 0) {
    console.log(`❌ ID ${r.id}: "${r.question}" → Correct: "${r.correctWord}"`);
    problems.forEach(p => console.log(`   - ${p}`));
    issues++;
  }
}

if (issues === 0) {
  console.log('✅ All rounds passed basic consistency checks!');
} else {
  console.log(`\n⚠️  Found ${issues} potential issues.`);
}
