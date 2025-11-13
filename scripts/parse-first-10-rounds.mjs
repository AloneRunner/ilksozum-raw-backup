import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const raw = fs.readFileSync(dataPath, 'utf8');

// Extract first 10 rounds using simple parsing
const lines = raw.split('\n');
let rounds = [];
let current = null;
let inOptions = false;
let braceDepth = 0;

for (const line of lines) {
  const idMatch = /^\s*id:\s*(\d+),/.exec(line);
  if (idMatch) {
    if (current) rounds.push(current);
    current = { id: idMatch[1], question: '', imageId: '', imageWord: '', options: [] };
    inOptions = false;
    braceDepth = 0;
  }
  
  if (current) {
    const qMatch = /question:\s*['"`](.*?)['"`],/.exec(line);
    if (qMatch) current.question = qMatch[1];
    
    const imgMatch = /questionItem:\s*(?:meta\((\d+),\s*['"`](.*?)['"`]\)|{[^}]*id:\s*(\d+)[^}]*word:\s*['"`](.*?)['"`])/.exec(line);
    if (imgMatch) {
      current.imageId = imgMatch[1] || imgMatch[3];
      current.imageWord = imgMatch[2] || imgMatch[4];
    }
    
    if (line.includes('options:')) {
      inOptions = true;
    }
    
    if (inOptions) {
      const optMatch = /{[^}]*word:\s*['"`](.*?)['"`][^}]*isCorrect:\s*true/.exec(line);
      if (optMatch) current.correctOption = optMatch[1];
    }
  }
  
  if (rounds.length >= 10) break;
}
if (current && rounds.length < 10) rounds.push(current);

console.log('İlk 10 Round Analizi:\n');
rounds.slice(0, 10).forEach((r, i) => {
  console.log(`${i + 1}. ID ${r.id}:`);
  console.log(`   Soru: "${r.question}"`);
  console.log(`   Görsel: ${r.imageWord} (ID: ${r.imageId})`);
  console.log(`   Doğru Cevap: ${r.correctOption || 'BULUNAMADI'}`);
  console.log();
});
