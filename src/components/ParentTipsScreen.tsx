import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';

interface ParentTipsScreenProps {
  onBack: () => void;
}

const ParentTipsScreen: React.FC<ParentTipsScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
        <div className="w-full flex items-center mb-6 relative">
            <button 
                onClick={onBack} 
                className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label="Ana menüye dön"
            >
                <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
            </button>
            <h1 className="flex-1 text-center text-3xl sm:text-4xl font-black text-slate-800">
                Ebeveynler İçin İpuçları
            </h1>
        </div>
      
        <div className="w-full flex-grow overflow-y-auto bg-white/80 p-6 rounded-2xl shadow-inner pr-4">
            <div className="text-left text-slate-700 space-y-4">
                <h3 className="text-2xl font-bold text-amber-800 text-center mb-4">Uygulama Rehberi</h3>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800">🎓 Birlikte Öğrenin</h4>
                  <p className="text-base mt-1">Çocuğunuzla birlikte etkinlikleri yapın. Nesnelerin isimlerini tekrar edin, onlarla ilgili sorular sorun ("Bu hayvan nerede yaşar?", "Bu meyvenin tadı nasıl?"). Bu, hem dil gelişimini destekler hem de aranızdaki bağı güçlendirir.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800">👤 Profil Yönetimi (İsteğe Bağlı)</h4>
                  <p className="text-base mt-1">Uygulama, ilk açılışta otomatik olarak bir "Misafir" profili oluşturur. Birden fazla çocuğun ilerlemesini ayrı ayrı takip etmek isterseniz, <strong>Ayarlar</strong> menüsünden yeni profiller oluşturabilir veya mevcut profiller arasında geçiş yapabilirsiniz.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">⚙️ Ayarları Keşfedin</h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>Temalı Arayüz:</strong> Bu ayarla, uygulamanın görünümünü değiştirebilirsiniz. 'Temalı' modda canlı ve eğlenceli arka plan resimleri varken, 'Temasız' modda daha sade, göz yormayan ve yumuşak renk geçişlerine sahip bir arayüz sunulur. Çocuğunuzun dikkatini veya o anki modunu en iyi yansıtanı seçebilirsiniz.</li>
                      <li><strong>Hızlı Mod:</strong> Ayarlar menüsündeki "Hızlı Mod" seçeneğini açarak, doğru/yanlış seslendirmelerini kısaltabilir ve etkinlikler arası geçişleri hızlandırabilirsiniz.</li>
                      <li><strong>Görsel Yasaklama:</strong> Çocuğunuzun hoşlanmadığı bir görsel varsa, Ayarlar'dan "Görsel Yasaklamayı Etkinleştir" seçeneğini açıp etkinlik sırasında çıkan "yasakla" butonuyla o görseli bir daha görmemesini sağlayabilirsiniz.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">📊 Gelişimi Takip Edin</h4>
                   <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>Başarımlar Sekmesi:</strong> Ana menüdeki "Başarımlar" (🏆) sekmesi, çocuğunuzun hangi kategorilerde ustalaştığını gösterir. Bir etkinliği 3 kez hatasız tamamladığında rozet kazanır!</li>
                      <li><strong>Gelişim Raporu:</strong> Başarımlar ekranındaki "Gelişim Raporu" (🧠) butonu, en çok zorlanılan ve en başarılı olunan etkinlikleri listeler. Bu rapor, çocuğunuzun öğrenme sürecini anlamanız için size özel olarak hazırlanmıştır.</li>
                  </ul>
                </div>

                 <div>
                  <h4 className="text-lg font-bold text-slate-800">💬 İletişim Kartları Sekmesi</h4>
                  <p className="text-base mt-1">Ana menüdeki "İletişim Kartları" sekmesi, çocuğunuzun kendini ifade etmesine yardımcı olmak için tasarlanmıştır. İhtiyaçlarını, duygularını veya isteklerini belirtmek için bu kartları birlikte kullanabilirsiniz.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">⚙️ Etkinlikleri Özelleştirin</h4>
                  <p className="text-base mt-1">Çocuğunuzun öğrenme sürecini daha verimli hale getirmek için <strong>Ayarlar</strong> menüsündeki "Etkinlik Yönetimi" bölümünü kullanabilirsiniz. Buradan, belirli bir beceriye odaklanmak veya çocuğunuzun henüz hazır olmadığı ya da sevmediği etkinlikleri geçici olarak kapatmak için alıştırmaları etkinleştirebilir veya devre dışı bırakabilirsiniz.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">🎲 Rastgele Modu Deneyin</h4>
                  <p className="text-base mt-1">Ana menüdeki <strong>Rastgele Mod</strong>, sizin etkinleştirdiğiniz tüm alıştırmaları farklı kategorilerden karışık bir şekilde sunar. Bu mod, öğrenilen konuları eğlenceli bir şekilde tekrar etmek ve çocuğunuzun bildiklerini pekiştirmek için harika bir yoldur.</p>
                </div>
                
                 <div>
                  <h4 className="text-lg font-bold text-slate-800">💡 Ekstra İpuçları</h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>Pratik Modu (Yakında):</strong> Yakında, Gelişim Raporu'nda çocuğunuzun en çok zorlandığı etkinlikleri temel alan özel bir 'Pratik Çalışması' başlatabileceksiniz.</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default React.memo(ParentTipsScreen);