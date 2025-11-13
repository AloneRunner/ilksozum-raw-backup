import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const raw = fs.readFileSync(dataPath, 'utf8');

const lines = raw.split('\n');
let rounds = [];
let current = null;
let optionsBlock = '';
let inOptions = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const idMatch = /^\s*id:\s*(\d+),/.exec(line);
  if (idMatch) {
    if (current) {
      current.optionsRaw = optionsBlock.trim();
      rounds.push(current);
    }
    current = { 
      id: parseInt(idMatch[1]), 
      lineNum: i + 1,
      question: '', 
      imageId: '', 
      imageWord: '',
      correctOption: '',
      allOptions: []
    };
    inOptions = false;
    optionsBlock = '';
  }
  
  if (current) {
    const qMatch = /question:\s*['"`](.*?)['"`],/.exec(line);
    if (qMatch) current.question = qMatch[1];
    
    const imgMatch = /questionItem:\s*(?:meta\((\d+),\s*['"`](.*?)['"`]\)|.*?id:\s*(\d+).*?word:\s*['"`](.*?)['"`])/.exec(line);
    if (imgMatch) {
      current.imageId = imgMatch[1] || imgMatch[3] || '';
      current.imageWord = imgMatch[2] || imgMatch[4] || '';
    }
    
    if (line.includes('options:')) {
      inOptions = true;
    }
    
    if (inOptions) {
      optionsBlock += line + '\n';
      const wordMatch = /word:\s*['"`](.*?)['"`]/.exec(line);
      if (wordMatch) current.allOptions.push(wordMatch[1]);
      
      const correctMatch = /isCorrect:\s*true/.exec(line);
      if (correctMatch && wordMatch) {
        current.correctOption = wordMatch[1];
      }
    }
  }
}
if (current) {
  current.optionsRaw = optionsBlock.trim();
  rounds.push(current);
}

console.log(`Toplam ${rounds.length} round bulundu.\n`);

// Check duplicates
const questionMap = new Map();
const idSet = new Set();
let issues = 0;

for (const r of rounds) {
  // Duplicate ID
  if (idSet.has(r.id)) {
    console.log(`❌ DUPLICATE ID ${r.id} (satır ${r.lineNum})`);
    issues++;
  }
  idSet.add(r.id);
  
  // Duplicate question
  const q = r.question.trim();
  if (questionMap.has(q)) {
    console.log(`❌ DUPLICATE QUESTION: "${q}"`);
    console.log(`   İlk: ID ${questionMap.get(q).id} (satır ${questionMap.get(q).lineNum})`);
    console.log(`   Tekrar: ID ${r.id} (satır ${r.lineNum})`);
    issues++;
  } else {
    questionMap.set(q, r);
  }
  
  // Missing correct option
  if (!r.correctOption) {
    console.log(`❌ ID ${r.id}: Doğru cevap bulunamadı (satır ${r.lineNum})`);
    issues++;
  }
}

console.log(`\n${issues > 0 ? `⚠️  ${issues} sorun bulundu!` : '✅ Duplikasyon yok'}`);
