import { fiveWOneHData } from '../src/services/database/activities/reasoning/fiveWOneHData.ts';

console.log('First 10 rounds:\n');
for (let i = 0; i < Math.min(10, fiveWOneHData.length); i++) {
  const r = fiveWOneHData[i];
  const correctOpt = r.options.find(o => o.isCorrect);
  console.log(`${i + 1}. ID ${r.id}:`);
  console.log(`   Soru: "${r.question}"`);
  console.log(`   Görsel: ${r.questionItem?.word || 'YOK'} (ID: ${r.questionItem?.id || 'N/A'})`);
  console.log(`   Doğru: ${correctOpt?.word || 'BULUNAMADI'}`);
  console.log(`   Seçenekler: ${r.options.map(o => o.word).join(', ')}`);
  console.log();
}
