#!/usr/bin/env node
/**
 * i18n Modüler Yapı Test Scripti
 * Tüm dillerin dosyalarını yükleyip karşılaştırır
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const I18N_DIR = join(__dirname, 'src', 'i18n');

const LANGUAGES = ['tr', 'en', 'de', 'fr', 'nl', 'az'];
const FILES = ['common.json', 'screens.json', 'letterActivities.json', 'gameActivities.json', 'content.json'];

console.log('🔍 i18n Modüler Yapı Test Ediliyor...\n');

// 1. Dosya yapısı kontrolü
console.log('📁 Dosya Yapısı Kontrolü:');
const missingFiles = [];
for (const lang of LANGUAGES) {
  const langDir = join(I18N_DIR, lang);
  for (const file of FILES) {
    const filePath = join(langDir, file);
    try {
      readFileSync(filePath, 'utf-8');
      process.stdout.write('.');
    } catch (error) {
      missingFiles.push(`${lang}/${file}`);
      process.stdout.write('✗');
    }
  }
}
console.log(missingFiles.length === 0 ? '\n✅ Tüm dosyalar mevcut!\n' : `\n❌ Eksik dosyalar: ${missingFiles.join(', ')}\n`);

// 2. JSON geçerliliği kontrolü
console.log('📝 JSON Geçerliliği Kontrolü:');
const invalidFiles = [];
for (const lang of LANGUAGES) {
  for (const file of FILES) {
    const filePath = join(I18N_DIR, lang, file);
    try {
      const content = readFileSync(filePath, 'utf-8');
      JSON.parse(content);
      process.stdout.write('.');
    } catch (error) {
      invalidFiles.push(`${lang}/${file}: ${error.message}`);
      process.stdout.write('✗');
    }
  }
}
console.log(invalidFiles.length === 0 ? '\n✅ Tüm JSON dosyaları geçerli!\n' : `\n❌ Hatalı dosyalar:\n${invalidFiles.join('\n')}\n`);

// 3. Anahtar tutarlılığı kontrolü
console.log('🔑 Anahtar Tutarlılığı Kontrolü:');
const languageKeys = {};

// Her dil için tüm anahtarları topla
for (const lang of LANGUAGES) {
  const allKeys = new Set();
  for (const file of FILES) {
    const filePath = join(I18N_DIR, lang, file);
    try {
      const content = readFileSync(filePath, 'utf-8');
      const data = JSON.parse(content);
      
      // Nested anahtarları da ekle
      const extractKeys = (obj, prefix = '') => {
        for (const key in obj) {
          const fullKey = prefix ? `${prefix}.${key}` : key;
          allKeys.add(fullKey);
          if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            extractKeys(obj[key], fullKey);
          }
        }
      };
      extractKeys(data);
    } catch (error) {
      // Hata durumunda devam et
    }
  }
  languageKeys[lang] = allKeys;
}

// TR'yi referans al, diğerlerini karşılaştır
const trKeys = languageKeys['tr'];
console.log(`  TR'de toplam ${trKeys.size} anahtar var`);

for (const lang of LANGUAGES.filter(l => l !== 'tr')) {
  const langKeys = languageKeys[lang];
  const missing = [...trKeys].filter(k => !langKeys.has(k));
  const extra = [...langKeys].filter(k => !trKeys.has(k));
  
  console.log(`  ${lang.toUpperCase()}: ${langKeys.size} anahtar`);
  if (missing.length > 0) {
    console.log(`    ⚠️  TR'de olup ${lang}'de olmayan: ${missing.length} anahtar`);
    if (missing.length <= 5) {
      console.log(`       ${missing.join(', ')}`);
    }
  }
  if (extra.length > 0) {
    console.log(`    ⚠️  ${lang}'de olup TR'de olmayan: ${extra.length} anahtar`);
    if (extra.length <= 5) {
      console.log(`       ${extra.join(', ')}`);
    }
  }
  if (missing.length === 0 && extra.length === 0) {
    console.log(`    ✅ Tam uyumlu!`);
  }
}

console.log('\n');

// 4. Dosya boyutu karşılaştırması
console.log('📊 Dosya Boyutları:');
for (const file of FILES) {
  console.log(`\n  ${file}:`);
  for (const lang of LANGUAGES) {
    const filePath = join(I18N_DIR, lang, file);
    try {
      const content = readFileSync(filePath, 'utf-8');
      const lines = content.split('\n').length;
      const keys = Object.keys(JSON.parse(content)).length;
      console.log(`    ${lang}: ${lines} satır, ${keys} üst seviye anahtar`);
    } catch (error) {
      console.log(`    ${lang}: ❌ Okunamadı`);
    }
  }
}

console.log('\n✨ Test tamamlandı!\n');
