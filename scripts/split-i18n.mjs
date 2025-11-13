#!/usr/bin/env node
/**
 * i18n Dosyalarını Modüler Yapıya Böl
 * Güvenli ve dikkatli yaklaşım - önce TR test edilir, sonra diğerleri
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// Kategori tanımları
const CATEGORIES = {
  common: [
    'app', 'choice', 'accessibility', 'feedback', 'settings', 'categories',
    'menu', 'common', 'tabs', 'consent', 'themes'
  ],
  screens: [
    'achievements', 'settingsEx', 'parentReport', 'programReport', 
    'activityMgmt', 'parentTips', 'printPool', 'programMode'
  ],
  letterActivities: [
    'letters', 'activities', 'story'
  ],
  gameActivities: [
    'reasoning', 'fineMotor', 'experimental', 'lineTracing', 
    'rhythmFollowing', 'simplePuzzle', 'fiveWOneH'
  ],
  content: [
    'concepts', 'objects', 'communication', 'questions', 'activityFeedback'
  ]
};

/**
 * Ana bölme fonksiyonu
 */
function splitLanguageFile(lang) {
  const inputFile = path.join(I18N_DIR, `${lang}.json`);
  
  // Dosya kontrolü
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ ${lang}.json bulunamadı!`);
    return false;
  }

  console.log(`\n📂 ${lang}.json işleniyor...`);
  
  try {
    // JSON'u oku
    const originalData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
    console.log(`   ✓ JSON parse başarılı (${Object.keys(originalData).length} ana key)`);

    // Klasör oluştur
    const langDir = path.join(I18N_DIR, lang);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
      console.log(`   ✓ ${lang}/ klasörü oluşturuldu`);
    }

    // Her kategori için dosya oluştur
    const createdFiles = {};
    let totalKeys = 0;

    for (const [category, keys] of Object.entries(CATEGORIES)) {
      const categoryData = {};
      let categoryKeyCount = 0;

      // İlgili key'leri topla
      for (const key of keys) {
        if (originalData[key]) {
          categoryData[key] = originalData[key];
          categoryKeyCount++;
          totalKeys++;
        }
      }

      // Dosyayı yaz
      const outputFile = path.join(langDir, `${category}.json`);
      fs.writeFileSync(
        outputFile, 
        JSON.stringify(categoryData, null, 2), 
        'utf-8'
      );
      
      const stats = fs.statSync(outputFile);
      const lines = fs.readFileSync(outputFile, 'utf-8').split('\n').length;
      createdFiles[category] = { keys: categoryKeyCount, lines };
      
      console.log(`   ✓ ${category}.json: ${categoryKeyCount} key, ${lines} satır`);
    }

    // Kayıp key kontrolü
    const allCategorizedKeys = new Set(Object.values(CATEGORIES).flat());
    const missingKeys = Object.keys(originalData).filter(k => !allCategorizedKeys.has(k));
    
    if (missingKeys.length > 0) {
      console.warn(`   ⚠️  Kategorize edilmemiş key'ler: ${missingKeys.join(', ')}`);
      // Bunları common'a ekle
      const commonFile = path.join(langDir, 'common.json');
      const commonData = JSON.parse(fs.readFileSync(commonFile, 'utf-8'));
      missingKeys.forEach(key => {
        commonData[key] = originalData[key];
      });
      fs.writeFileSync(commonFile, JSON.stringify(commonData, null, 2), 'utf-8');
      console.log(`   ✓ ${missingKeys.length} kayıp key common.json'a eklendi`);
    }

    console.log(`   ✅ ${lang} tamamlandı: ${totalKeys} key → 5 dosya`);
    return true;

  } catch (error) {
    console.error(`   ❌ Hata: ${error.message}`);
    return false;
  }
}

/**
 * Ana çalıştırma
 */
async function main() {
  console.log('🚀 i18n Bölme İşlemi Başladı\n');
  console.log('📋 Kategori Planı:');
  Object.entries(CATEGORIES).forEach(([cat, keys]) => {
    console.log(`   ${cat}: ${keys.length} key`);
  });

  // Önce sadece TR'yi test et
  console.log('\n🧪 Test Aşaması: Sadece TR');
  const trSuccess = splitLanguageFile('tr');

  if (!trSuccess) {
    console.error('\n❌ TR bölme başarısız! İşlem durduruluyor.');
    process.exit(1);
  }

  console.log('\n✅ TR başarılı! Diğer dillere devam ediliyor...\n');

  // Diğer diller
  const languages = ['en', 'de', 'fr', 'nl', 'az'];
  let successCount = 0;

  for (const lang of languages) {
    if (splitLanguageFile(lang)) {
      successCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Tamamlandı: ${successCount + 1}/6 dil başarılı`);
  console.log('='.repeat(50));
}

main().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
