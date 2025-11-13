import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'services', 'database', 'activities', 'reasoning', 'fiveWOneHData.ts');
const raw = fs.readFileSync(dataPath, 'utf8');

const lines = raw.split('\n');
let rounds = [];
let current = null;
let inSpeech = false;
let speechBuffer = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const idMatch = /^\s*id:\s*(\d+),/.exec(line);
  if (idMatch) {
    if (current && current.question) rounds.push(current);
    current = { 
      id: parseInt(idMatch[1]), 
      lineNum: i + 1,
      question: '',
      speechCorrect: '',
      correctOption: ''
    };
    inSpeech = false;
    speechBuffer = '';
  }
  
  if (current) {
    const qMatch = /question:\s*['"`](.*?)['"`],/.exec(line);
    if (qMatch) current.question = qMatch[1];
    
    if (line.includes('speech:')) {
      inSpeech = true;
      speechBuffer = '';
    }
    
    if (inSpeech) {
      speechBuffer += line + '\n';
      const correctMatch = /correct:\s*['"`](.*?)['"`]/.exec(line);
      if (correctMatch && line.includes('tr:')) {
        current.speechCorrect = correctMatch[1];
      }
    }
    
    if (line.includes('questionItem:')) {
      inSpeech = false;
    }
    
    const optCorrectMatch = /word:\s*['"`](.*?)['"`].*isCorrect:\s*true/.exec(line);
    if (optCorrectMatch) current.correctOption = optCorrectMatch[1];
  }
}
if (current && current.question) rounds.push(current);

console.log(`İlk 15 round'un soru-feedback eşleşmesi:\n`);

for (let i = 0; i < Math.min(15, rounds.length); i++) {
  const r = rounds[i];
  console.log(`${i + 1}. ID ${r.id}:`);
  console.log(`   Soru: "${r.question}"`);
  console.log(`   Feedback: "${r.speechCorrect}"`);
  console.log(`   Doğru seçenek: "${r.correctOption}"`);
  
  // Basit tutarlılık kontrolü
  const q = r.question.toLowerCase();
  const f = r.speechCorrect.toLowerCase();
  const c = r.correctOption.toLowerCase();
  
  let mismatch = false;
  
  // Soru "hastalanınca" içeriyorsa feedback de "doktor" içermeli
  if (q.includes('hastalanınca') && !f.includes('doktor')) {
    console.log(`   ⚠️  Feedback soru ile uyumsuz!`);
    mismatch = true;
  }
  if (q.includes('yangın') && !f.includes('itfaiye')) {
    console.log(`   ⚠️  Feedback soru ile uyumsuz!`);
    mismatch = true;
  }
  if (q.includes('uçağı') && !f.includes('pilot') && !f.includes('uçak')) {
    console.log(`   ⚠️  Feedback soru ile uyumsuz!`);
    mismatch = true;
  }
  if (q.includes('saçımızı') && !f.includes('berber')) {
    console.log(`   ⚠️  Feedback soru ile uyumsuz!`);
    mismatch = true;
  }
  if (q.includes('yemeği') && !f.includes('aşçı')) {
    console.log(`   ⚠️  Feedback soru ile uyumsuz!`);
    mismatch = true;
  }
  
  if (!mismatch) console.log(`   ✅ Tutarlı`);
  console.log();
}
