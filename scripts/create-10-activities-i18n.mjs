import fs from 'fs';
import path from 'path';

const activities = [
  { name: 'dugumCozuk', tr: { knotted: 'düğümlü', untied: 'çözük' }, en: { knotted: 'knotted', untied: 'untied' }, de: { knotted: 'verknotet', untied: 'aufgeknotet' }, fr: { knotted: 'noué', untied: 'dénoué' }, nl: { knotted: 'geknoopt', untied: 'losgeknoopt' }, az: { knotted: 'düyünlü', untied: 'açılmış' }, tokens: ['ayakkabı', 'hortum', 'kurdele'] },
  { name: 'hardSoft', tr: { hard: 'sert', soft: 'yumuşak' }, en: { hard: 'hard', soft: 'soft' }, de: { hard: 'hart', soft: 'weich' }, fr: { hard: 'dur', soft: 'doux' }, nl: { hard: 'hard', soft: 'zacht' }, az: { hard: 'sərt', soft: 'yumşaq' }, tokens: ['taş', 'pamuk', 'tuğla', 'yastık', 'çekiç', 'oyuncak_ayı', 'masa', 'sünger', 'elmas', 'yün', 'kask', 'bere', 'tencere', 'hamur', 'ceviz', 'ekmek', 'otoyol', 'çim', 'misket', 'fındık', 'peynir', 'elma', 'şeftali'] },
  { name: 'heavyLight', tr: { heavy: 'ağır', light: 'hafif' }, en: { heavy: 'heavy', light: 'light' }, de: { heavy: 'schwer', light: 'leicht' }, fr: { heavy: 'lourd', light: 'léger' }, nl: { heavy: 'zwaar', light: 'licht' }, az: { heavy: 'ağır', light: 'yüngül' }, tokens: ['halter', 'tüy', 'fil', 'balina', 'kuş', 'ansiklopedi', 'kağıt', 'roka', 'kamyon', 'balon', 'karpuz', 'çilek', 'valiz', 'çorap', 'traktör', 'kelebek', 'kanepe', 'su_şişesi'] },
  { name: 'hotCold', tr: { hot: 'sıcak', cold: 'soğuk' }, en: { hot: 'hot', cold: 'cold' }, de: { hot: 'heiß', cold: 'kalt' }, fr: { hot: 'chaud', cold: 'froid' }, nl: { hot: 'heet', cold: 'koud' }, az: { hot: 'isti', cold: 'soyuq' }, tokens: ['güneş', 'kardan_adam', 'ateş', 'buz', 'kahve', 'limonata', 'soba', 'buzdolabı', 'çorba', 'dondurma', 'fırın', 'buzluk', 'erik', 'kırmızı_biber'] },
  { name: 'hungryFull', tr: { hungry: 'aç', satiated: 'tok' }, en: { hungry: 'hungry', satiated: 'satiated' }, de: { hungry: 'hungrig', satiated: 'satt' }, fr: { hungry: 'affamé', satiated: 'rassasié' }, nl: { hungry: 'hongerig', satiated: 'verzadigd' }, az: { hungry: 'ac', satiated: 'tox' }, tokens: ['kedi', 'sincap', 'bebek', 'canavar', 'maymun', 'kuş'] },
  { name: 'kalabalikTenha', tr: { crowded: 'kalabalık', sparse: 'tenha' }, en: { crowded: 'crowded', sparse: 'deserted' }, de: { crowded: 'überfüllt', sparse: 'verlassen' }, fr: { crowded: 'bondé', sparse: 'désert' }, nl: { crowded: 'druk', sparse: 'verlaten' }, az: { crowded: 'izdihamlı', sparse: 'boş' }, tokens: ['trafik', 'yol', 'durak', 'orman', 'ağaç', 'kuş_sürüsü', 'insan_grubu', 'adam'] },
  { name: 'kirisikDuzgun', tr: { wrinkled: 'kırışık', smooth: 'düzgün' }, en: { wrinkled: 'wrinkled', smooth: 'smooth' }, de: { wrinkled: 'zerknittert', smooth: 'glatt' }, fr: { wrinkled: 'froissé', smooth: 'lisse' }, nl: { wrinkled: 'gerimpeld', smooth: 'glad' }, az: { wrinkled: 'qırışmış', smooth: 'hamar' }, tokens: ['gömlek', 'kağıt', 'pantolon', 'yatak', 'çamaşır', 'havlu', 'tişört'] },
  { name: 'longShort', tr: { long: 'uzun', short: 'kısa' }, en: { long: 'long', short: 'short' }, de: { long: 'lang', short: 'kurz' }, fr: { long: 'long', short: 'court' }, nl: { long: 'lang', short: 'kort' }, az: { long: 'uzun', short: 'qısa' }, tokens: ['zürafa', 'fare', 'pantolon', 'şort', 'havuç', 'merdiven', 'tabure', 'tren', 'araba', 'bağırsak', 'kalem'] },
  { name: 'messyClean', tr: { messy: 'dağınık', tidy: 'toplu' }, en: { messy: 'messy', tidy: 'tidy' }, de: { messy: 'unordentlich', tidy: 'ordentlich' }, fr: { messy: 'en désordre', tidy: 'en ordre' }, nl: { messy: 'rommelig', tidy: 'netjes' }, az: { messy: 'dağınıq', tidy: 'səliqəli' }, tokens: ['oda', 'kitaplık', 'kalemlik', 'yatak', 'dolap', 'masa', 'saç'] },
  { name: 'noisyQuiet', tr: { noisy: 'gürültülü', quiet: 'sessiz' }, en: { noisy: 'noisy', quiet: 'quiet' }, de: { noisy: 'laut', quiet: 'leise' }, fr: { noisy: 'bruyant', quiet: 'silencieux' }, nl: { noisy: 'luidruchtig', quiet: 'stil' }, az: { noisy: 'səs-küylü', quiet: 'sakit' }, tokens: ['aslan', 'davul', 'yastık', 'şimşek', 'tüy', 'traktör', 'kelebek', 'tren', 'yaprak'] }
];

const locales = ['tr', 'en', 'de', 'fr', 'nl', 'az'];

activities.forEach(activity => {
  const { name, tokens, ...translations } = activity;
  
  locales.forEach(locale => {
    const t = translations[locale];
    const questions = {};
    const dir = `src/i18n/${locale}`;
    
    // Create question keys based on the activity type
    if (name === 'dugumCozuk') {
      questions.q_which_is_knotted = locale === 'tr' ? 'Düğüm olan hangisi?' : locale === 'en' ? 'Which one is knotted?' : locale === 'de' ? 'Welches ist verknotet?' : locale === 'fr' ? 'Lequel est noué?' : locale === 'nl' ? 'Welke is geknoopt?' : 'Hansı düyünlüdür?';
      questions.q_which_is_untied = locale === 'tr' ? 'Çözük olan hangisi?' : locale === 'en' ? 'Which one is untied?' : locale === 'de' ? 'Welches ist aufgeknotet?' : locale === 'fr' ? 'Lequel est dénoué?' : locale === 'nl' ? 'Welke is losgeknoopt?' : 'Hansı açılmışdır?';
    } else if (name === 'hardSoft') {
      questions.q_which_is_hard = locale === 'tr' ? 'Sert olan hangisi?' : locale === 'en' ? 'Which one is hard?' : locale === 'de' ? 'Welches ist hart?' : locale === 'fr' ? 'Lequel est dur?' : locale === 'nl' ? 'Welke is hard?' : 'Hansı sərtdir?';
      questions.q_which_is_soft = locale === 'tr' ? 'Yumuşak olan hangisi?' : locale === 'en' ? 'Which one is soft?' : locale === 'de' ? 'Welches ist weich?' : locale === 'fr' ? 'Lequel est doux?' : locale === 'nl' ? 'Welke is zacht?' : 'Hansı yumşaqdır?';
    } else if (name === 'heavyLight') {
      questions.q_which_is_heavy = locale === 'tr' ? 'Ağır olan hangisi?' : locale === 'en' ? 'Which one is heavy?' : locale === 'de' ? 'Welches ist schwer?' : locale === 'fr' ? 'Lequel est lourd?' : locale === 'nl' ? 'Welke is zwaar?' : 'Hansı ağırdır?';
      questions.q_which_is_light = locale === 'tr' ? 'Hafif olan hangisi?' : locale === 'en' ? 'Which one is light?' : locale === 'de' ? 'Welches ist leicht?' : locale === 'fr' ? 'Lequel est léger?' : locale === 'nl' ? 'Welke is licht?' : 'Hansı yüngüldür?';
    } else if (name === 'hotCold') {
      questions.q_which_is_hot = locale === 'tr' ? 'Sıcak olan hangisi?' : locale === 'en' ? 'Which one is hot?' : locale === 'de' ? 'Welches ist heiß?' : locale === 'fr' ? 'Lequel est chaud?' : locale === 'nl' ? 'Welke is heet?' : 'Hansı istidir?';
      questions.q_which_is_cold = locale === 'tr' ? 'Soğuk olan hangisi?' : locale === 'en' ? 'Which one is cold?' : locale === 'de' ? 'Welches ist kalt?' : locale === 'fr' ? 'Lequel est froid?' : locale === 'nl' ? 'Welke is koud?' : 'Hansı soyuqdur?';
    } else if (name === 'hungryFull') {
      questions.q_which_is_hungry = locale === 'tr' ? 'Aç olan hangisi?' : locale === 'en' ? 'Which one is hungry?' : locale === 'de' ? 'Welches ist hungrig?' : locale === 'fr' ? 'Lequel est affamé?' : locale === 'nl' ? 'Welke is hongerig?' : 'Hansı acıqdır?';
      questions.q_which_is_satiated = locale === 'tr' ? 'Tok olan hangisi?' : locale === 'en' ? 'Which one is satiated?' : locale === 'de' ? 'Welches ist satt?' : locale === 'fr' ? 'Lequel est rassasié?' : locale === 'nl' ? 'Welke is verzadigd?' : 'Hansı toxdur?';
    } else if (name === 'kalabalikTenha') {
      questions.q_which_is_crowded = locale === 'tr' ? 'Kalabalık olan hangisi?' : locale === 'en' ? 'Which one is crowded?' : locale === 'de' ? 'Welches ist überfüllt?' : locale === 'fr' ? 'Lequel est bondé?' : locale === 'nl' ? 'Welke is druk?' : 'Hansı izdihamlıdır?';
      questions.q_which_is_sparse = locale === 'tr' ? 'Tenha olan hangisi?' : locale === 'en' ? 'Which one is deserted?' : locale === 'de' ? 'Welches ist verlassen?' : locale === 'fr' ? 'Lequel est désert?' : locale === 'nl' ? 'Welke is verlaten?' : 'Hansı boşdur?';
    } else if (name === 'kirisikDuzgun') {
      questions.q_which_is_wrinkled = locale === 'tr' ? 'Kırışık olan hangisi?' : locale === 'en' ? 'Which one is wrinkled?' : locale === 'de' ? 'Welches ist zerknittert?' : locale === 'fr' ? 'Lequel est froissé?' : locale === 'nl' ? 'Welke is gerimpeld?' : 'Hansı qırışmışdır?';
      questions.q_which_is_smooth = locale === 'tr' ? 'Düzgün olan hangisi?' : locale === 'en' ? 'Which one is smooth?' : locale === 'de' ? 'Welches ist glatt?' : locale === 'fr' ? 'Lequel est lisse?' : locale === 'nl' ? 'Welke is glad?' : 'Hansı hamardır?';
    } else if (name === 'longShort') {
      questions.q_which_is_long = locale === 'tr' ? 'Uzun olan hangisi?' : locale === 'en' ? 'Which one is long?' : locale === 'de' ? 'Welches ist lang?' : locale === 'fr' ? 'Lequel est long?' : locale === 'nl' ? 'Welke is lang?' : 'Hansı uzundur?';
      questions.q_which_is_short = locale === 'tr' ? 'Kısa olan hangisi?' : locale === 'en' ? 'Which one is short?' : locale === 'de' ? 'Welches ist kurz?' : locale === 'fr' ? 'Lequel est court?' : locale === 'nl' ? 'Welke is kort?' : 'Hansı qısadır?';
    } else if (name === 'messyClean') {
      questions.q_which_is_messy = locale === 'tr' ? 'Dağınık olan hangisi?' : locale === 'en' ? 'Which one is messy?' : locale === 'de' ? 'Welches ist unordentlich?' : locale === 'fr' ? 'Lequel est en désordre?' : locale === 'nl' ? 'Welke is rommelig?' : 'Hansı dağınıqdır?';
      questions.q_which_is_tidy = locale === 'tr' ? 'Toplu olan hangisi?' : locale === 'en' ? 'Which one is tidy?' : locale === 'de' ? 'Welches ist ordentlich?' : locale === 'fr' ? 'Lequel est en ordre?' : locale === 'nl' ? 'Welke is netjes?' : 'Hansı səliqəlidir?';
    } else if (name === 'noisyQuiet') {
      questions.q_which_is_noisy = locale === 'tr' ? 'Gürültülü olan hangisi?' : locale === 'en' ? 'Which one is noisy?' : locale === 'de' ? 'Welches ist laut?' : locale === 'fr' ? 'Lequel est bruyant?' : locale === 'nl' ? 'Welke is luidruchtig?' : 'Hansı səs-küylüdür?';
      questions.q_which_is_quiet = locale === 'tr' ? 'Sessiz olan hangisi?' : locale === 'en' ? 'Which one is quiet?' : locale === 'de' ? 'Welches ist leise?' : locale === 'fr' ? 'Lequel est silencieux?' : locale === 'nl' ? 'Welke is stil?' : 'Hansı sakitdir?';
    }
    
    // Generate yes/no answers for each token
    tokens.forEach(token => {
      const normalizedToken = token.replace(/_/g, '_');
      // Get the two quality names for this activity
      const qualities = Object.keys(t);
      qualities.forEach(quality => {
        const qualityWord = t[quality];
        questions[`yes_${normalizedToken}_${quality}`] = locale === 'tr' 
          ? `Evet, ${token.replace(/_/g, ' ')} ${qualityWord}.`
          : locale === 'en' 
          ? `Yes, the ${token.replace(/_/g, ' ')} is ${qualityWord}.`
          : locale === 'de'
          ? `Ja, ${token.replace(/_/g, ' ')} ist ${qualityWord}.`
          : locale === 'fr'
          ? `Oui, ${token.replace(/_/g, ' ')} est ${qualityWord}.`
          : locale === 'nl'
          ? `Ja, ${token.replace(/_/g, ' ')} is ${qualityWord}.`
          : `Bəli, ${token.replace(/_/g, ' ')} ${qualityWord}.`;
          
        questions[`no_${normalizedToken}_${quality}`] = locale === 'tr'
          ? `Hayır, ${token.replace(/_/g, ' ')} ${qualityWord} değil.`
          : locale === 'en'
          ? `No, the ${token.replace(/_/g, ' ')} is not ${qualityWord}.`
          : locale === 'de'
          ? `Nein, ${token.replace(/_/g, ' ')} ist nicht ${qualityWord}.`
          : locale === 'fr'
          ? `Non, ${token.replace(/_/g, ' ')} n'est pas ${qualityWord}.`
          : locale === 'nl'
          ? `Nee, ${token.replace(/_/g, ' ')} is niet ${qualityWord}.`
          : `Xeyr, ${token.replace(/_/g, ' ')} ${qualityWord} deyil.`;
      });
    });
    
    const content = {
      questions
    };
    
    const filePath = path.join(dir, `${name}.json`);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Created ${locale}/${name}.json (${Object.keys(questions).length} keys)`);
  });
});

console.log('\n✅ Created 60 i18n JSON files for 10 activities!');
