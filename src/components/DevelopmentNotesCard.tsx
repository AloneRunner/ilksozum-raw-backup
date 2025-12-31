import React, { useState } from 'react';
import { t, getRaw } from '../i18n/index.ts';

interface DevelopmentNotesCardProps {
  theme: string;
}

const DevelopmentNotesCard: React.FC<DevelopmentNotesCardProps> = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isCosmic = theme === 'deneme2';
  const isSimple = theme === 'simple';
  // safely read 'thisUpdate' items from i18n (may be missing or a string)
  const _rawThisUpdateItems = getRaw('developmentNotes.thisUpdate.items');
  const thisUpdateItems: string[] = Array.isArray(_rawThisUpdateItems) ? _rawThisUpdateItems : [];
  const fallbackThisUpdate = [
    'Küçük-Büyük etkinliğinde varlık görsellerinin boyutları, çocukların kullanımını kolaylaştırmak için yeniden düzenlendi.',
    'Pekiştirme modu eklendi: Pekiştirme oturumları artık program ilerlemesine katkı sağlıyor. Ayrıca pekiştirme adayları sıfır başarı gösteren etkinlikleri de kapsayacak şekilde genişletildi ve ebeveynlerin manuel olarak etkinlik ekleyip çıkarabileceği bir "Pekiştirmeye Ekle/Çıkar" düğmesi eklendi.',
    'Program modu artık son denemelere öncelik veriyor: ünite başarı hesaplamalarında son 6 deneme dikkate alınıyor (eski toplam raporlama değişmeden kalır). Joker Hakkı (ebeveyn geçici açma) davranışı da güncellendi; istenirse jokeri "ünite ilerlemesinden sayma" seçeneği ile kullanabilirsiniz. Aktif joker limiti ücretsiz kullanımda 3, premium için 15 olarak belirlendi.'
  ];
  const itemsToShow = thisUpdateItems.length ? thisUpdateItems : fallbackThisUpdate;
  
  // Cosmic tema stil
  if (isCosmic) {
    return (
      <div className="relative w-full mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-purple-400/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <h3 className="text-lg font-bold text-white drop-shadow-lg">
                {t('developmentNotes.title', 'Güncelleme Bilgileri')}
              </h3>
            </div>
            <span className={`text-white text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <p className={`text-sm text-cyan-200 mt-1 drop-shadow-md`}>
            {t('developmentNotes.subtitle', 'Uygulamamız büyümeye devam ediyor! Sabırlarınız için teşekkürler.')}
          </p>
        </button>
        
        {isExpanded && (
          <div className="mt-2 px-4 py-3 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-400/20 text-white animate-fade-in">
            {/* This update / release notes section (if present) */}
            <div className="mb-3">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2">🛠 {t('developmentNotes.thisUpdate.title', 'Bu güncellemede')}</h4>
              <ul className="text-sm space-y-1 ml-7 opacity-95">
                {itemsToShow.map((it: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2"><span className="mt-1">•</span><span>{it}</span></li>
                ))}
              </ul>
            </div>
            
            <Section
              icon="📚"
              title={t('developmentNotes.content.title', 'İçerik ve Etkinlik Genişletmeleri')}
              items={[
                t('developmentNotes.content.newObjects', 'Yeni nesneler eklenecek'),
                t('developmentNotes.content.objectCategories', 'Nesne kategorileri alt dallara ayrılacak'),
                t('developmentNotes.content.activityAudio', 'Etkinlik seslendirmeleri daha açıklayıcı hale getirilecek'),
                t('developmentNotes.content.letterActivities', 'Harf etkinlikleri geliştirilecek'),
                t('developmentNotes.content.letterDrawing', 'Harf çizim çalışmaları eklenecek'),
                t('developmentNotes.content.freeGames', 'Adam asmaca gibi serbest oyunlar eklenecek'),
                t('developmentNotes.content.fineMotor', 'İnce motor ve akıl oyunları geliştirilecek')
              ]}
            />
            
            <Section
              icon="🌍"
              title={t('developmentNotes.languages.title', 'Dil Yapısı ve Çoklu Dil Desteği')}
              items={[
                t('developmentNotes.languages.existingReview', 'Mevcut yabancı diller elden geçirilecek'),
                t('developmentNotes.languages.newLanguages', 'Yeni diller eklenecek'),
                t('developmentNotes.languages.learningActivities', 'Çoklu dil yapısı, yabancı dil öğrenme aktivitelerine dönüştürülecek')
              ]}
            />
            
            <Section
              icon="🎨"
              title={t('developmentNotes.themes.title', 'Tema ve Görsel Düzenlemeler')}
              items={[
                t('developmentNotes.themes.redesign', 'Temalar yeniden düzenlenecek')
              ]}
            />
            
            <Section
              icon="📊"
              title={t('developmentNotes.reports.title', 'Raporlama ve Geri Bildirim Sistemi')}
              items={[
                t('developmentNotes.reports.improvedReports', 'Raporlar seviyesi geliştirilecek'),
                t('developmentNotes.reports.detailedFeedback', 'Sadece etkinlik başarısı değil, etkinlik içindeki zorlanılan nesne/kavram da belirtilecek')
              ]}
            />
          </div>
        )}
      </div>
    );
  }
  
  // Simple ve diğer temalar için
  const bgClass = isSimple 
    ? 'bg-gradient-to-br from-purple-100 to-pink-50 border-purple-300'
    : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300';
    
  const textClass = isSimple ? 'text-purple-900' : 'text-indigo-900';
  const subtitleClass = isSimple ? 'text-purple-700' : 'text-indigo-700';
  
  return (
    <div className="relative w-full mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left px-4 py-3 rounded-2xl border-2 ${bgClass} shadow-md hover:shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <h3 className={`text-lg font-bold ${textClass}`}>
              {t('developmentNotes.title', 'Güncelleme Bilgileri')}
            </h3>
          </div>
          <span className={`${textClass} text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
        <p className={`text-sm ${subtitleClass} mt-1`}>
          {t('developmentNotes.subtitle', 'Uygulamamız büyümeye devam ediyor! Sabırlarınız için teşekkürler.')}
        </p>
        {/* developer short message removed from collapsed view to avoid duplication; see expanded 'Geliştirici Notu' */}
      </button>
      
      {isExpanded && (
        <div className={`mt-2 px-4 py-3 rounded-2xl border-2 ${bgClass} animate-fade-in`}>
          {/* This update / release notes section (if present) */}
          <div className="mb-3">
            <h4 className={`font-bold text-base mb-2 flex items-center gap-2 ${textClass}`}>
              🛠 {t('developmentNotes.thisUpdate.title', 'Bu güncellemede')}
            </h4>
            <ul className={`text-sm space-y-1 ml-7 ${textClass} opacity-95`}>
              {itemsToShow.map((it: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2"><span className="mt-1">•</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
          
          <Section
            icon="📚"
            title={t('developmentNotes.content.title', 'İçerik ve Etkinlik Genişletmeleri')}
            items={[
              t('developmentNotes.content.newObjects', 'Yeni nesneler eklenecek'),
              t('developmentNotes.content.objectCategories', 'Nesne kategorileri alt dallara ayrılacak'),
              t('developmentNotes.content.activityAudio', 'Etkinlik seslendirmeleri daha açıklayıcı hale getirilecek'),
              t('developmentNotes.content.letterActivities', 'Harf etkinlikleri geliştirilecek'),
              t('developmentNotes.content.letterDrawing', 'Harf çizim çalışmaları eklenecek'),
              t('developmentNotes.content.freeGames', 'Adam asmaca gibi serbest oyunlar eklenecek'),
              t('developmentNotes.content.fineMotor', 'İnce motor ve akıl oyunları geliştirilecek')
            ]}
            textClass={textClass}
          />
          
          <Section
            icon="🌍"
            title={t('developmentNotes.languages.title', 'Dil Yapısı ve Çoklu Dil Desteği')}
            items={[
              t('developmentNotes.languages.existingReview', 'Mevcut yabancı diller elden geçirilecek'),
              t('developmentNotes.languages.newLanguages', 'Yeni diller eklenecek'),
              t('developmentNotes.languages.learningActivities', 'Çoklu dil yapısı, yabancı dil öğrenme aktivitelerine dönüştürülecek')
            ]}
            textClass={textClass}
          />
          
          <Section
            icon="🎨"
            title={t('developmentNotes.themes.title', 'Tema ve Görsel Düzenlemeler')}
            items={[
              t('developmentNotes.themes.redesign', 'Temalar yeniden düzenlenecek')
            ]}
            textClass={textClass}
          />
          
          <Section
            icon="📊"
            title={t('developmentNotes.reports.title', 'Raporlama ve Geri Bildirim Sistemi')}
            items={[
              t('developmentNotes.reports.improvedReports', 'Raporlar seviyesi geliştirilecek'),
              t('developmentNotes.reports.detailedFeedback', 'Sadece etkinlik başarısı değil, etkinlik içindeki zorlanılan nesne/kavram da belirtilecek')
            ]}
            textClass={textClass}
          />
          {/* Developer long message shown in expanded view */}
          <div className="mt-3">
            <h4 className={`font-bold text-base mb-2 flex items-center gap-2 ${textClass}`}>
              <span>👩‍👦</span>
              {t('developmentNotes.developerMessage.title', 'Geliştirici Notu')}
            </h4>
            <p className={`text-sm ${textClass}`}>
              {t('developmentNotes.developerMessage.long', '')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

interface SectionProps {
  icon: string;
  title: string;
  items: string[];
  textClass?: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, items, textClass = 'text-white' }) => (
  <div className="mb-3 last:mb-0">
    <h4 className={`font-bold text-base mb-2 flex items-center gap-2 ${textClass}`}>
      <span>{icon}</span>
      {title}
    </h4>
    <ul className={`text-sm space-y-1 ml-7 ${textClass} opacity-90`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(DevelopmentNotesCard);
