import fs from 'fs';

const activities = ['dugumCozuk', 'hardSoft', 'heavyLight', 'hotCold', 'hungryFull', 'kalabalikTenha', 'kirisikDuzgun', 'longShort', 'messyClean', 'noisyQuiet'];
const locales = ['tr', 'en', 'de', 'fr', 'nl', 'az'];

let content = fs.readFileSync('src/i18n/index.ts', 'utf8');

// Add imports after trDikenliPuruzsuz for each locale
locales.forEach(locale => {
  const upperLocale = locale.charAt(0).toUpperCase() + locale.slice(1);
  const importMarker = `import ${locale}DikenliPuruzsuz from './${locale}/dikenliPuruzsuz.json';`;
  
  const newImports = activities.map(activity => {
    const camelCase = activity.charAt(0).toUpperCase() + activity.slice(1);
    return `import ${locale}${camelCase} from './${locale}/${activity}.json';`;
  }).join('\n');
  
  content = content.replace(importMarker, `${importMarker}\n${newImports}`);
});

// Add to deepMerge arrays for each locale
locales.forEach(locale => {
  const upperLocale = locale.charAt(0).toUpperCase() + locale.slice(1);
  const mergeMarker = `${locale}DikenliPuruzsuz,`;
  
  const newMerges = activities.map(activity => {
    const camelCase = activity.charAt(0).toUpperCase() + activity.slice(1);
    return `    ${locale}${camelCase},`;
  }).join('\n');
  
  content = content.replace(mergeMarker, `${mergeMarker}\n${newMerges}`);
});

fs.writeFileSync('src/i18n/index.ts', content, 'utf8');
console.log('✅ Added 60 imports and 60 deepMerge entries to src/i18n/index.ts!');
