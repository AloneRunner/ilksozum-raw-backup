import { t } from '../i18n/index.ts';
import { useAppContext } from '../contexts/AppContext.ts';
import { useRef, useState } from 'react';
import UnderwaterBackdrop from './ui/UnderwaterBackdrop.tsx';

interface Props {
  onSelectSadece: () => void;
  onSelectVideo: () => void;
  onBack: () => void;
}

export default function SoundImitationMenu({ onSelectSadece, onSelectVideo, onBack }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlaying2, setIsPlaying2] = useState<boolean>(false);
  const [saksVersion, setSaksVersion] = useState<1 | 2>(1);
  const lyrics = `Hav hav dedi köpekçik
Pat pat koştu ayakçık
Şıp şıp damlar yağmurcuk

[Chorus]
Hav hav
Pat pat
Şıp şıp
Çat çat
Herkes seslere kat kat

[Verse 2]
Miyav dedi minik kedi
Vız vız uçtu arı peri
Tak tak çaldı kapı seni

[Chorus]
Hav hav
Pat pat
Şıp şıp
Çat çat
Herkes seslere kat kat

[Bridge]
Cik cik kuşlar uçar
Tık tık saat kaçar
Hop hop toplar zıplar

[Chorus]
Hav hav
Pat pat
Şıp şıp
Çat çat
Herkes seslere kat kat`;
  const lyrics2 = `[Verse]
Alkış, şak şak şak, eller havada,
Zıplamak, hop hop, bulutlar arada.
Asker yürür, rap rap, yolda sırada,
Gülüşler, ha ha, yayılsın her odada.

[Chorus]
Şak şak, hop hop, herkes katılsın,
Rap rap, ha ha, neşe saçsın!
Şak şak, hop hop, ritim tutulsun,
Rap rap, ha ha, gülüş unutulsun!

[Verse 2]
Kediler miyav, kuşlar cıv cıv,
Doğa şarkı söyler, hepimiz canlı.
Köpekler hav hav, neşeli bir kervan,
Seslerle dolu bu dünya, ne harika bir an!

[Chorus]
Şak şak, hop hop, herkes katılsın,
Rap rap, ha ha, neşe saçsın!
Şak şak, hop hop, ritim tutulsun,
Rap rap, ha ha, gülüş unutulsun!

[Bridge]
Birlikte gülelim, ha ha, çok güzel,
Şarkılarla dolsun günler, her özel.
Şak şak, hop hop, kalpler pır pır,
Seslerle dans eder dünya, ne şık bir sır!

[Outro]
Alkış, şak şak, sesler yankılansın,
Zıplamak, hop hop, göklere ulaşsın.
Rap rap, ha ha, çocuklar gülsün,
Bu şarkıyla herkes neşeyle dolsun!`;
  const { settings } = useAppContext();
  const isUnderwater = settings.theme === 'deneme';
  return (
    <div className="p-4 relative min-h-screen flex flex-col items-center justify-start">
      {isUnderwater && <UnderwaterBackdrop count={10} />}
      <div className="flex items-center justify-between mb-6 w-full max-w-2xl">
        <h2 className={`text-3xl font-extrabold tracking-tight drop-shadow-md ${isUnderwater ? 'text-cyan-200' : 'text-slate-800'}`}> 
          {t('activities.soundImitation.title','Ses Taklit Kartları')}
        </h2>
        <button onClick={onBack} className={`text-base font-semibold px-4 py-1.5 rounded-lg shadow transition ${isUnderwater ? 'text-cyan-100 bg-cyan-700/60 hover:bg-cyan-700/90' : 'text-slate-700 bg-slate-200/80 hover:bg-slate-300/90'}`}> 
          {t('common.back','Geri')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <button onClick={onSelectSadece} className={`rounded-2xl p-6 flex flex-col items-start gap-2 shadow-lg border-2 ${isUnderwater ? 'bg-gradient-to-b from-[#0a2a3d]/80 to-[#001219]/90 border-cyan-300/20 hover:from-cyan-900/80 hover:to-[#001219]/95' : 'bg-white/90 hover:bg-slate-100 border-slate-200/40'}`}>
          <div className={`text-xl font-bold drop-shadow-sm ${isUnderwater ? 'text-cyan-100' : 'text-slate-800'}`}>{t('activities.soundImitation.imagesTitle','Görsel Kartlar')}</div>
          <div className={`text-base font-medium ${isUnderwater ? 'text-cyan-200/90' : 'text-slate-600'}`}>{t('activities.soundImitation.imagesDesc','Resim kartlarını görüntüle; küçük resimlerden büyüterek gezin. / View image cards; tap to enlarge and swipe through.')}</div>
        </button>

        <button onClick={onSelectVideo} className={`rounded-2xl p-6 flex flex-col items-start gap-2 shadow-lg border-2 ${isUnderwater ? 'bg-gradient-to-b from-[#0a2a3d]/80 to-[#001219]/90 border-cyan-300/20 hover:from-cyan-900/80 hover:to-[#001219]/95' : 'bg-white/90 hover:bg-slate-100 border-slate-200/40'}`}>
          <div className={`text-xl font-bold drop-shadow-sm ${isUnderwater ? 'text-cyan-100' : 'text-slate-800'}`}>{t('activities.soundImitation.videosTitleShort','Kısa Videolar (Deneme)')}</div>
          <div className={`text-base font-medium ${isUnderwater ? 'text-cyan-200/90' : 'text-slate-600'}`}>{t('activities.soundImitation.videosDesc','Kısa videolar — deneme sürümü. Videolar yer kaplayabilir. / Short videos — experimental. Videos may take space.')}</div>
        </button>
      </div>

      <div className="w-full max-w-2xl px-0 py-8">
        <h3 className={`text-2xl font-bold mb-4 ${isUnderwater ? 'text-cyan-100 drop-shadow' : 'text-slate-800'}`}>{t('activities.soundImitation.experimentalMusic','Deneysel Müzik')}</h3>
        <div className="rounded-2xl shadow bg-white/90 p-5 flex flex-col gap-3 border border-cyan-100/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-lg text-cyan-900">Hav Hav — Pat Pat</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const a = audioRef.current;
                  if (!a) return;
                  if (a.paused) { a.play(); setIsPlaying(true); } else { a.pause(); setIsPlaying(false); }
                }}
                className="px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow transition"
              >
                {isPlaying ? 'Duraklat' : 'Oynat'}
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/muzik/havhavpatpat.mp3"
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
          />

          <details className="bg-slate-50 p-3 rounded-lg mt-2">
            <summary className="font-medium cursor-pointer">Şarkı Sözleri</summary>
            <pre className="whitespace-pre-wrap mt-2 text-sm text-slate-800">{lyrics}</pre>
          </details>
        </div>

        {/* Separate box for second experimental song (Şak Şak Hop Hop) */}
        <div className="mt-4 rounded-2xl shadow bg-white/90 p-5 flex flex-col gap-3 border border-cyan-100/30">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="font-bold text-lg text-rose-800">Şak Şak Hop Hop</div>
              {/* Minimal version selector immediately under the title */}
              <div className="mt-1 flex items-center gap-2 text-xs">
                <button
                  onClick={() => {
                    if (saksVersion !== 1) {
                      const a = audioRef2.current;
                      if (a && !a.paused) { a.pause(); setIsPlaying2(false); }
                      setSaksVersion(1);
                    }
                  }}
                  aria-pressed={saksVersion === 1}
                  className={`px-2 py-0.5 rounded-md border text-rose-700 ${saksVersion === 1 ? 'bg-rose-100 border-rose-200' : 'bg-transparent border-transparent hover:border-rose-100'}`}
                >
                  V1
                </button>
                <button
                  onClick={() => {
                    if (saksVersion !== 2) {
                      const a = audioRef2.current;
                      if (a && !a.paused) { a.pause(); setIsPlaying2(false); }
                      setSaksVersion(2);
                    }
                  }}
                  aria-pressed={saksVersion === 2}
                  className={`px-2 py-0.5 rounded-md border text-rose-700 ${saksVersion === 2 ? 'bg-rose-100 border-rose-200' : 'bg-transparent border-transparent hover:border-rose-100'}`}
                >
                  V2
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  const a1 = audioRef.current;
                  const a2 = audioRef2.current;
                  if (!a2) return;
                  if (a1 && !a1.paused) { a1.pause(); setIsPlaying(false); }
                  if (a2.paused) { a2.play(); setIsPlaying2(true); } else { a2.pause(); setIsPlaying2(false); }
                }}
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-md shadow-sm transition text-sm"
              >
                {isPlaying2 ? 'Duraklat' : 'Oynat'}
              </button>
            </div>
          </div>

          <audio ref={audioRef2} src={`/muzik/saksakhophop${saksVersion === 2 ? '2' : ''}.mp3`} onEnded={() => setIsPlaying2(false)} preload="metadata" />

          <details className="bg-transparent p-2 mt-1 rounded">
            <summary className="font-medium cursor-pointer">Şarkı Sözleri (Şak Şak Hop Hop)</summary>
            <pre className="whitespace-pre-wrap mt-2 text-sm text-slate-800">{lyrics2}</pre>
          </details>
        </div>
      </div>

      <div className={`mt-8 p-5 rounded-2xl text-base w-full max-w-2xl shadow-lg border ${isUnderwater ? 'bg-gradient-to-r from-cyan-900/30 via-[#022337]/30 to-teal-900/30 text-cyan-100 border-cyan-300/10' : 'bg-gradient-to-r from-pink-50 via-white to-amber-50 text-slate-700 border-slate-200/30'}`}>
        <div className="font-semibold mb-2">{t('activities.soundImitation.experimentalNoteTitle','Deneme Notu / Experimental')}</div>
        <div className="mb-2">{t('activities.soundImitation.experimentalNote','Videolu versiyon şu an deneme amaçlıdır ve kalıcı olmayabilir. Videolar büyük olabilir ve cihazınızda yer kaplayabilir; sizden gelen geri bildirimlere göre bu bölüm şekillendirilecektir.')}</div>
        <div className="mb-2">{t('activities.soundImitation.experimentalNoteEn','The video section is experimental and may not be permanent. Videos can be large — we will decide based on your feedback.')}</div>
        <div className="font-semibold">{t('activities.soundImitation.feedbackRequest','Uygulama için iyi/kötü tüm eleştirilerinizi lütfen mağaza yorumlarına yazınız. / Please leave feedback (good or bad) in the app store reviews.')}</div>
      </div>
    </div>
  );
}
