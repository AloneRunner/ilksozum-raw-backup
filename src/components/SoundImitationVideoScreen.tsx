import { useEffect, useState } from 'react';
import { t, getCurrentLanguage } from '../i18n/index.ts';
import { useAppContext } from '../contexts/AppContext.ts';
import UnderwaterBackdrop from './ui/UnderwaterBackdrop.tsx';

interface Props {
  onBack?: () => void;
}

type VideoItem = { id: string; titles: { [locale: string]: string }; file: string };

const VIDEO_ITEMS: VideoItem[] = [
  // --- 1. HAYVANLAR ---
  { id: 'a1', file: '/seskart/a1.mp4', titles: { tr: 'İnek — möö', en: 'Cow — moo', de: 'Kuh — muh', fr: 'Vache — meuh', nl: 'Koe — boe', az: 'İnək — möö' } },
  { id: 'a2', file: '/seskart/a2.mp4', titles: { tr: 'Maymun — u-u-u', en: 'Monkey — ooh ooh', de: 'Affe — uh uh', fr: 'Singe — ouah', nl: 'Aap — oe oe', az: 'Meymun — u-u-u' } },
  { id: 'a4', file: '/seskart/a4.mp4', titles: { tr: 'Eşek — a-i a-i', en: 'Donkey — hee-haw', de: 'Esel — i-ah', fr: 'Âne — hi-han', nl: 'Ezel — i-a', az: 'Eşşək — a-i a-i' } },
  { id: 'a6', file: '/seskart/a6.mp4', titles: { tr: 'Kurt — auuu', en: 'Wolf — awoo', de: 'Wolf — ahuuu', fr: 'Loup — aouuu', nl: 'Wolf — awoe', az: 'Qurd — auuu' } },
  { id: 'a8', file: '/seskart/a8.mp4', titles: { tr: 'Kedi — miyav', en: 'Cat — meow', de: 'Katze — miau', fr: 'Chat — miaou', nl: 'Kat — miau', az: 'Pişik — miyau' } },
  { id: 'a10', file: '/seskart/a10.mp4', titles: { tr: 'Köpek — hav hav', en: 'Dog — woof', de: 'Hund — wau wau', fr: 'Chien — ouaf', nl: 'Hond — woef', az: 'İt — hap hap' } },
  { id: 'a14', file: '/seskart/a14.mp4', titles: { tr: 'Yılan — ssss', en: 'Snake — hiss', de: 'Schlange — zisch', fr: 'Serpent — ssss', nl: 'Slang — ssss', az: 'İlan — ssss' } },
  { id: 'a19', file: '/seskart/a19.mp4', titles: { tr: 'Koyun — meee', en: 'Sheep — baa', de: 'Schaf — mäh', fr: 'Mouton — bêê', nl: 'Schaap — bèè', az: 'Qoyun — meee' } },
  { id: 'a21', file: '/seskart/a21.mp4', titles: { tr: 'Ördek — vak vak', en: 'Duck — quack', de: 'Ente — quak', fr: 'Canard — coin', nl: 'Eend — kwak', az: 'Ördək — vaq vaq' } },
  { id: 'a27', file: '/seskart/a27.mp4', titles: { tr: 'Kuş — cik cik', en: 'Bird — tweet', de: 'Vogel — tschipp', fr: 'Oiseau — cui cui', nl: 'Vogel — twiet', az: 'Quş — cik cik' } },
  { id: 'a28', file: '/seskart/a28.mp4', titles: { tr: 'Arı — vızzz', en: 'Bee — buzz', de: 'Biene — summ', fr: 'Abeille — bzzz', nl: 'Bij — zoem', az: 'Arı — vızzz' } },
  { id: 'a29', file: '/seskart/a29.mp4', titles: { tr: 'Horoz — ü-ü-rü-üü', en: 'Rooster — cock-a-doodle', de: 'Hahn — kikeriki', fr: 'Coq — cocorico', nl: 'Haan — kukeleku', az: 'Xoruz — qu-qur-qu' } },
  { id: 'a30', file: '/seskart/a30.mp4', titles: { tr: 'Tavuk — gıt gıt', en: 'Hen — cluck cluck', de: 'Huhn — gack gack', fr: 'Poule — cot cot', nl: 'Kip — tok tok', az: 'Toyuq — qıd qıd' } },
  { id: 'a31', file: '/seskart/a31.mp4', titles: { tr: 'Hindi — glu glu', en: 'Turkey — gobble', de: 'Truthahn — gulu', fr: 'Dindon — glou', nl: 'Kalkoen — klok', az: 'Hinduşka — qulu' } },
  { id: 'a32', file: '/seskart/a32.mp4', titles: { tr: 'Tavşan — kıtır', en: 'Rabbit — crunch', de: 'Hase — knusper', fr: 'Lapin — cric', nl: 'Konijn — knabbel', az: 'Dovşan — kıtır' } },
  { id: 'a34', file: '/seskart/a34.mp4', titles: { tr: 'Kurbağa — vrak', en: 'Frog — ribbit', de: 'Frosch — quak', fr: 'Grenouille — coa', nl: 'Kikker — kwak', az: 'Qurbağa — vraqq' } },

  // --- 2. İNSAN & DUYGULAR ---
  { id: 'a3', file: '/seskart/a3.mp4', titles: { tr: 'Uyku — eee eee', en: 'Sleep — hush hush', de: 'Schlaf — eia eia', fr: 'Dodo — dodo', nl: 'Slapen — ssst', az: 'Yuxu — lay lay' } },
  { id: 'a5', file: '/seskart/a5.mp4', titles: { tr: 'Gülme — ha ha', en: 'Laugh — ha ha', de: 'Lachen — hahaha', fr: 'Rire — hahaha', nl: 'Lachen — hahaha', az: 'Gülüş — xa xa' } },
  { id: 'a7', file: '/seskart/a7.mp4', titles: { tr: 'Üflemek — püf', en: 'Blow — puff', de: 'Pusten — pust', fr: 'Souffler — pff', nl: 'Blazen — pfff', az: 'Üfləmək — püf' } },
  { id: 'a9', file: '/seskart/a9.mp4', titles: { tr: 'Noel Baba — ho ho', en: 'Santa — ho ho', de: 'Weihnachtsmann — ho ho', fr: 'Père Noël — ho ho', nl: 'Kerstman — ho ho', az: 'Şaxta baba — ho ho' } },
  { id: 'a13', file: '/seskart/a13.mp4', titles: { tr: 'Şaşırma — aaa', en: 'Surprise — wow', de: 'Überraschung — oho', fr: 'Surpris — oh', nl: 'Verrassing — wauw', az: 'Təəccüb — aaa' } },
  { id: 'a16', file: '/seskart/a16.mp4', titles: { tr: 'Üşüme — brrr', en: 'Cold — brrr', de: 'Kalt — brrr', fr: 'Froid — brrr', nl: 'Koud — brrr', az: 'Üşümək — brrr' } },
  { id: 'a17', file: '/seskart/a17.mp4', titles: { tr: 'Asker — rap rap', en: 'Soldier — left right', de: 'Soldat — zack zack', fr: 'Soldat — une deux', nl: 'Soldaat — links rechts', az: 'Əsgər — rap rap' } },
  { id: 'a18', file: '/seskart/a18.mp4', titles: { tr: 'Sus — şşş', en: 'Quiet — shh', de: 'Leise — pst', fr: 'Chut — chut', nl: 'Stil — sst', az: 'Sus — şşş' } },
  { id: 'a22', file: '/seskart/a22.mp4', titles: { tr: 'Alkış — şak şak', en: 'Clap — clap clap', de: 'Klatschen — klatsch', fr: 'Applaudir — clap', nl: 'Klap — klap', az: 'Alqış — şaq şaq' } },
  { id: 'a23', file: '/seskart/a23.mp4', titles: { tr: 'Bay Bay — bay bay', en: 'Bye Bye — bye bye', de: 'Tschüss — tschüss', fr: 'Au revoir — bye', nl: 'Doei — doei', az: 'Sağ ol — sağ ol' } },
  { id: 'a24', file: '/seskart/a24.mp4', titles: { tr: 'Baş Ağrısı — zonk', en: 'Headache — ouch', de: 'Kopfweh — aua', fr: 'Mal de tête — aïe', nl: 'Hoofdpijn — au', az: 'Baş ağrısı — zonk' } },
  { id: 'a25', file: '/seskart/a25.mp4', titles: { tr: 'Zıplamak — hop hop', en: 'Jump — hop hop', de: 'Hüpfen — hopp', fr: 'Sauter — hop', nl: 'Springen — hup', az: 'Tullanmaq — hop' } },
  { id: 'a12', file: '/seskart/a12.mp4', titles: { tr: 'Davul — güm güm', en: 'Drum — boom boom', de: 'Trommel — bumm', fr: 'Tambour — boum', nl: 'Trommel — boem', az: 'Nağara — güm güm' } },

  // --- 3. ARAÇLAR & NESNELER ---
  { id: 'a11', file: '/seskart/a11.mp4', titles: { tr: 'Ambulans — nino', en: 'Ambulance — wee-woo', de: 'Ambulanz — tatü tata', fr: 'Ambulance — pin pon', nl: 'Ambulance — taatuu', az: 'Təcili yardım — nino' } },
  { id: 'a15', file: '/seskart/a15.mp4', titles: { tr: 'Araba — düt düt', en: 'Car — honk', de: 'Auto — tut tut', fr: 'Voiture — tut tut', nl: 'Auto — toet', az: 'Maşın — düt düt' } },
  { id: 'a20', file: '/seskart/a20.mp4', titles: { tr: 'Saat — tik tak', en: 'Clock — tick tock', de: 'Uhr — tick tack', fr: 'Horloge — tic tac', nl: 'Klok — tik tak', az: 'Saat — tik tak' } },
  { id: 'a26', file: '/seskart/a26.mp4', titles: { tr: 'Musluk — şıp şıp', en: 'Faucet — drip drop', de: 'Hahn — plitsch', fr: 'Robinet — plic', nl: 'Kraan — drup', az: 'Krant — tıp tıp' } },
  { id: 'a33', file: '/seskart/a33.mp4', titles: { tr: 'Mısır — pat pat', en: 'Popcorn — pop pop', de: 'Popcorn — pop', fr: 'Popcorn — pop', nl: 'Popcorn — pop', az: 'Qarğıdalı — pat pat' } },
  { id: 'a35', file: '/seskart/a35.mp4', titles: { tr: 'Makas — kırt kırt', en: 'Scissors — snip snip', de: 'Schere — schnipp', fr: 'Ciseaux — cric crac', nl: 'Schaar — knip', az: 'Qayçı — qırt qırt' } },
  { id: 'a36', file: '/seskart/a36.mp4', titles: { tr: 'Kapı — tak tak', en: 'Door — knock knock', de: 'Tür — klopf', fr: 'Porte — toc toc', nl: 'Deur — klop', az: 'Qapı — taq taq' } },
];

export default function SoundImitationVideoScreen({ onBack }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLandscape, setIsLandscape] = useState<boolean>(() => window.innerWidth > window.innerHeight);

  useEffect(() => {
    const onResize = () => setIsLandscape(window.innerWidth > window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && selectedIndex != null) setSelectedIndex(i => Math.max(0, (i || 0) - 1));
      if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && selectedIndex != null) setSelectedIndex(i => Math.min(VIDEO_ITEMS.length - 1, (i || 0) + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  const { settings } = useAppContext();
  const isUnderwater = settings.theme === 'deneme';

  // Current language (two-letter)
  const currentLang = getCurrentLanguage();

  // No external voiceover support — videos already contain their own audio (dublaj). Kept intentionally simple.

  return (
    <div className={`p-0 min-h-screen w-full flex flex-col items-center justify-start ${isUnderwater ? 'bg-[#001122]' : 'bg-slate-50'}`}>
      {isUnderwater && <UnderwaterBackdrop count={12} bubbleColorClass="bg-cyan-400/12 border-cyan-300/18" />}
      <div className="w-full p-4 flex items-center justify-between max-w-6xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl font-bold ${isUnderwater ? 'text-cyan-200' : 'text-slate-800'}`}>{t('activities.soundImitation.videosTitle','Ses Taklit Kartları — Videolar')}</h2>
        {onBack && <button onClick={onBack} className="text-sm text-slate-600">{t('common.back','Geri')}</button>}
      </div>

      {!isLandscape && (
        <div className="w-full p-6 bg-amber-50 text-amber-700 text-center">Lütfen cihazınızı yatay konuma çevirin (landscape) — videolar yatay oynatılacak.</div>
      )}

      

      <div className="w-full max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VIDEO_ITEMS.map((v, idx) => (
            <div key={v.id} className={`rounded-2xl shadow-lg overflow-hidden border ${isUnderwater ? 'bg-white/5 border-cyan-300/10' : 'bg-white/95 border-slate-200'}`}>
              <button onClick={() => setSelectedIndex(idx)} className="w-full h-full flex flex-col items-stretch group focus:outline-none">
                <div className="relative w-full bg-black/5">
                  {/* Use a poster image instead of a live video for the thumbnail to avoid large native controls on phones */}
                  <img src={`/seskart/${v.id}.png`} alt={`poster ${v.id}`} className="w-full h-44 object-cover" />
                  {/* small play badge (corner) */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center transition-opacity opacity-90">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M5 3v18l15-9z" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-left">
                  <div className={`font-semibold text-sm sm:text-base truncate ${isUnderwater ? 'text-cyan-100' : 'text-slate-800'}`}>{v.titles[currentLang] || v.titles['tr'] || Object.values(v.titles)[0]}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex != null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-white text-2xl">✕</button>
          <div className="w-full max-w-5xl">
            <div className="relative">
              <video
                src={VIDEO_ITEMS[selectedIndex].file}
                poster={`/seskart/${VIDEO_ITEMS[selectedIndex].id}.png`}
                controls
                autoPlay
                className="w-full aspect-video bg-black rounded"
              />

              {/* No external voice controls — videos include their own audio (dublaj) */}
            </div>
            <div className="mt-2 flex items-center justify-between text-white">
              <div className="font-semibold">{(() => {
                const lang = currentLang;
                return VIDEO_ITEMS[selectedIndex].titles[lang] || VIDEO_ITEMS[selectedIndex].titles['tr'] || Object.values(VIDEO_ITEMS[selectedIndex].titles)[0];
              })()}</div>
              <div className="text-sm">{selectedIndex + 1}/{VIDEO_ITEMS.length}</div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-4">
              <button onClick={() => setSelectedIndex(i => Math.max(0, (i || 0) - 1))} className="px-3 py-1 bg-white/10 text-white rounded">◀</button>
              <button onClick={() => setSelectedIndex(i => Math.min(VIDEO_ITEMS.length - 1, (i || 0) + 1))} className="px-3 py-1 bg-white/10 text-white rounded">▶</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
