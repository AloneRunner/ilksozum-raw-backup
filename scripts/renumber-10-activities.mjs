import fs from 'fs';

// Define the mappings: [filePath, oldStart, newStart, totalRounds]
const files = [
  ['src/services/database/activities/qualities/hardSoftData.ts', 1, 131, 24],
  ['src/services/database/activities/qualities/heavyLightData.ts', 1, 155, 24],
  ['src/services/database/activities/qualities/hotColdData.ts', 1, 179, 26],
  ['src/services/database/activities/qualities/kalabalikTenhaData.ts', 1, 217, 14],
  ['src/services/database/activities/qualities/kirisikDuzgunData.ts', 1, 231, 14],
  ['src/services/database/activities/qualities/longShortData.ts', 1, 245, 19],
  ['src/services/database/activities/qualities/messyCleanData.ts', 1, 264, 19],
  ['src/services/database/activities/qualities/noisyQuietData.ts', 1, 283, 18]
];

files.forEach(([filePath, oldStart, newStart, totalRounds]) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Renumber IDs from high to low to avoid conflicts
  for (let i = totalRounds; i >= 1; i--) {
    const oldId = oldStart + i - 1;
    const newId = newStart + i - 1;
    const regex = new RegExp(`\\{ id: ${oldId},`, 'g');
    content = content.replace(regex, `{ id: ${newId},`);
  }
  
  // Clear all spokenText fields
  content = content.replace(/spokenText: "[^"]*"/g, 'spokenText: ""');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${filePath.split('/').pop()} (${oldStart}-${oldStart+totalRounds-1} → ${newStart}-${newStart+totalRounds-1})`);
});

console.log('\n✅ All 8 remaining files renumbered and spokenText cleared!');
