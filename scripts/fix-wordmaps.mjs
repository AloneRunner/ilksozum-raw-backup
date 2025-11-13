import fs from 'fs';

const files = [
  'src/utils/wordmap.tr-en.json',
  'src/utils/wordmap.tr-fr.json',
  'src/utils/wordmap.tr-nl.json',
  'src/utils/wordmap.tr-de.json',
  'src/utils/wordmap.tr-az.json'
];

const actionKeys = [
  'Altına','Alçalt','Araya','Arkaya','Aşağı','Bayatlat','Boyutu Değiştir','Boşalt','Bütün','Canlandır','Dağıt','Derinleştir','Doldur','Doyur','Düğümle','Dışarı','Gece','Gündüz','Isla','Kapat','Karşılıklı','Kirlet','Kurut','Kır','Onar','Sağ','Sol','Soldur','Sığlaştır','Tazele','Temizle','Topla','Uzaklaştır','Yakınlaştır','Yan Yana','Yana','Yarım','Yukarı','Yükselt','Çevir','Çeyrek','Çöz','Öne','Üstüne','İçeri'
];

const missingObjectsByLang = {
  fr: {
    'bebek bezi': 'couche',
    'deniz atı': 'hippocampe',
    'hindi': 'dindon',
    'incir': 'figue',
    'koç': 'bélier',
    'kumanda': 'télécommande',
    'kurt': 'loup',
    'köpek balığı': 'requin',
    'rende': 'râpe',
    'saç kurutma makinesi': 'sèche-cheveux',
    'sarımsak': 'ail',
    'tel zımba': 'agrafeuse',
    'tırnak makası': 'coupe-ongles',
    'yengeç': 'crabe'
  },
  nl: {
    'bebek bezi': 'luier',
    'deniz atı': 'zeepaardje',
    'hindi': 'kalkoen',
    'incir': 'vijg',
    'koç': 'ram',
    'kumanda': 'afstandsbediening',
    'kurt': 'wolf',
    'köpek balığı': 'haai',
    'rende': 'rasp',
    'saç kurutma makinesi': 'föhn',
    'sarımsak': 'knoflook',
    'tel zımba': 'nietmachine',
    'tırnak makası': 'nagelknipper',
    'yengeç': 'krab'
  },
  de: {
    'bebek bezi': 'Windel',
    'deniz atı': 'Seepferdchen',
    'hindi': 'Truthahn',
    'incir': 'Feige',
    'koç': 'Widder',
    'kumanda': 'Fernbedienung',
    'kurt': 'Wolf',
    'köpek balığı': 'Hai',
    'rende': 'Reibe',
    'saç kurutma makinesi': 'Föhn',
    'sarımsak': 'Knoblauch',
    'tel zımba': 'Tacker',
    'tırnak makası': 'Nagelknipser',
    'yengeç': 'Krabbe'
  },
  az: {
    'bebek bezi': 'uşaq bezi',
    'deniz atı': 'dəniz atı',
    'hindi': 'hindi',
    'incir': 'əncir',
    'koç': 'qoç',
    'kumanda': 'pult',
    'kurt': 'canavar',
    'köpek balığı': 'köpək balığı',
    'rende': 'rəndə',
    'saç kurutma makinesi': 'saç qurutma maşını',
    'sarımsak': 'sarımsaq',
    'tel zımba': 'stapler',
    'tırnak makası': 'dırnaq kəsən',
    'yengeç': 'xərçəng'
  }
};

function fixKnots(lang, data) {
  const attrs = data['Nitelikler (Sıfatlar ve Durumlar)'] || {};
  if (lang === 'fr') {
    if (attrs['düğüm'] && attrs['düğüm'] !== 'nœud') attrs['düğüm'] = 'nœud';
    if (!attrs['düğümlü']) attrs['düğümlü'] = 'noué';
  }
  if (lang === 'nl') {
    if (!attrs['düğümlü']) attrs['düğümlü'] = 'geknoopt';
  }
  if (lang === 'az') {
    if (attrs['düğüm'] !== 'düyün') attrs['düğüm'] = 'düyün';
    if (!attrs['düğümlü']) attrs['düğümlü'] = 'düyünlü';
  }
  data['Nitelikler (Sıfatlar ve Durumlar)'] = attrs;
}

function ensureEylemler(data) {
  if (!data['Eylemler']) data['Eylemler'] = {};
}

function moveActionsToEylemler(data) {
  ensureEylemler(data);
  const comm = data['Communication'] || {};
  for (const k of actionKeys) {
    if (comm.hasOwnProperty(k)) {
      data['Eylemler'][k] = comm[k];
      delete comm[k];
    }
  }
  data['Communication'] = comm;
}

function moveSpaceShuttleToObjects(data) {
  const comm = data['Communication'] || {};
  if (comm['uzay mekiği']) {
    const objs = data['Nesneler ve Varlıklar'] || {};
    if (!objs['uzay mekiği']) objs['uzay mekiği'] = comm['uzay mekiği'];
    delete comm['uzay mekiği'];
    data['Nesneler ve Varlıklar'] = objs;
    data['Communication'] = comm;
  }
}

function addMissingObjects(lang, data) {
  const map = missingObjectsByLang[lang];
  if (!map) return;
  const objs = data['Nesneler ve Varlıklar'] || {};
  for (const [tr, trn] of Object.entries(map)) {
    if (!objs.hasOwnProperty(tr)) objs[tr] = trn;
  }
  data['Nesneler ve Varlıklar'] = objs;
}

function dedupeNlCommunication(data) {
  const comm = data['Communication'] || {};
  if (comm['tost'] && comm['Tost']) delete comm['tost'];
  if (comm['sulu yemek'] && comm['Sulu Yemek']) delete comm['sulu yemek'];
  if (comm['Salıncak'] && comm['salıncak']) delete comm['Salıncak'];
  data['Communication'] = comm;
}

for (const path of files) {
  const content = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(content);
  const lang = path.endsWith('-fr.json') ? 'fr'
    : path.endsWith('-nl.json') ? 'nl'
    : path.endsWith('-de.json') ? 'de'
    : path.endsWith('-az.json') ? 'az'
    : 'en';

  // Structural moves
  moveActionsToEylemler(data);
  moveSpaceShuttleToObjects(data);

  // Fix knots
  fixKnots(lang, data);

  // Add missing object words (not for English)
  addMissingObjects(lang, data);

  // NL-specific duplicate cleanup
  if (lang === 'nl') dedupeNlCommunication(data);

  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${path}`);
}
