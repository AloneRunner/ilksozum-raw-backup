
import React, { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { showBanner, hideBanner } from '../services/monetizationService.ts';

const BannerAd: React.FC = () => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    const isNativePlatform = Capacitor.isNativePlatform();
    setIsNative(isNativePlatform);

    if (isNativePlatform) {
      // Bileşen yüklendiğinde (mount), banner'ı göster.
      const displayBanner = async () => {
        await showBanner();
      };
      
      displayBanner();

      // Bileşen kaldırıldığında (unmount), banner'ı temizle.
      // Bu, kullanıcı premium satın aldığında veya reklam olmayan bir ekrana geçtiğinde
      // reklamın kalıcı olarak kaybolmasını sağlar.
      return () => {
        const removeBanner = async () => {
          await hideBanner();
        };
        removeBanner();
      };
    }
  }, []); // Boş dizi, bu etkinin sadece mount ve unmount'ta çalışmasını sağlar.

  if (isNative) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-16 bg-transparent pointer-events-none z-40 no-print"
        aria-label="Reklam Alanı"
      >
        {/* Bu alan, alttaki içeriğin reklam tarafından ezilmemesi için 
            App.tsx'deki padding ile birlikte çalışır. 
            Gerçek reklam, bu bileşenin üzerine native olarak çizilir. */}
      </div>
    );
  }
  
  // Tarayıcıda (önizlemede) gösterilecek sahte reklam alanı
  return (
    <div
      className="fixed top-0 left-0 w-full h-16 bg-slate-700 text-white flex items-center justify-center text-sm font-semibold z-40 no-print"
      aria-label="Test Reklam Alanı"
    >
      Reklam Alanı (Test Önizlemesi)
    </div>
  );
};

export default BannerAd;