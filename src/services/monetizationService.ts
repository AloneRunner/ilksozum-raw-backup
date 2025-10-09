import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';

// ---- Ad IDs
const REAL_BANNER_ID = 'ca-app-pub-1337451525993562/1685338874';
const TEST_BANNER_ID = 'ca-app-pub-3940256099942544/6300978111';
const BANNER_ID = Capacitor.isNativePlatform() ? REAL_BANNER_ID : TEST_BANNER_ID;

// ---- RevenueCat
const RC_PUBLIC_SDK_KEY = 'goog_nISmHsACCmafpOJYWwvRhaaFCyW';
// KRİTİK DÜZELTME: Ürün Kimliği 'premium_upgrade' olarak değiştirildi.
// Bu, RevenueCat panelinizdeki ve Google Play'deki ürününüzün gerçek kimliğidir.
const PREMIUM_PRODUCT_ID = 'premium_upgrade';
const PREMIUM_ENTITLEMENT_ID = 'premium';

let rcInitialized = false;

const initializeRevenueCat = async (userId?: string) => {
  if (!Capacitor.isNativePlatform() || rcInitialized) return;
  try {
    await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
    await Purchases.configure({ apiKey: RC_PUBLIC_SDK_KEY });
    
    // Her kullanıcıyı benzersiz ID ile tanımla
    if (userId) {
      await Purchases.logIn({ appUserID: userId });
      console.log(`RevenueCat kullanıcı ID'si ayarlandı: ${userId}`);
    }
    
    rcInitialized = true;
  } catch (e) {
    console.error('RevenueCat init error:', e);
  }
};

export const initializeAds = async (): Promise<void> => {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await AdMob.initialize();
    console.log('AdMob initialized');

    // ❗️Types’ta yoksa bile runtime’da varsa çağır:
    const cfgFn = (AdMob as any)?.setRequestConfiguration as
      | ((cfg: any) => Promise<void>)
      | undefined;

    if (cfgFn) {
      await cfgFn({
        maxAdContentRating: 'G', 			      // <-- string kullan
        tagForChildDirectedTreatment: true, // COPPA sinyali
        tagForUnderAgeOfConsent: true, 	    // UAC sinyali
      });
      console.log('Kids mode request config set.');
    } else {
      console.log('setRequestConfiguration API yok; geçildi.');
    }
  } catch (e) {
    console.error('AdMob init error:', e);
  }
};

export const showBanner = async () => {
  if (!Capacitor.isNativePlatform()) return;
  const opts: BannerAdOptions = {
    adId: BANNER_ID,
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
  };
  try {
    await AdMob.showBanner(opts);
    console.log('Banner shown:', BANNER_ID);
  } catch (e) {
    console.error('Banner show error:', e);
  }
};

export const hideBanner = async () => {
  if (!Capacitor.isNativePlatform()) return;
  try { await AdMob.hideBanner(); } catch {}
};

export const restorePurchases = async (userId?: string) => {
  if (!Capacitor.isNativePlatform()) return false;
  await initializeRevenueCat(userId);
  if (!rcInitialized) return false;
  try {
    const { customerInfo } = await Purchases.restorePurchases();
    const hasPremium = !!customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID];
    if (hasPremium) await hideBanner();
    return hasPremium;
  } catch (e) {
    console.error('restorePurchases error:', e);
    return false;
  }
};

export const purchasePremium = async (userId?: string) => {
  await initializeRevenueCat(userId);
  if (!rcInitialized) return false;
  if (!Capacitor.isNativePlatform()) {
    // NOTE: alert() ve confirm() kullanmak yerine custom bir modal kullanmalısınız.
    console.warn('Simülasyon: Satın alma isteği gönderildi.');
    return true; 
  }
  try {
    const offerings = await Purchases.getOfferings();
    
    // YENİ TEŞHİS LOGU: RevenueCat'ten gelen tüm teklifleri kontrol et.
    console.log('RevenueCat Offerings Görüldü:', JSON.stringify(offerings, null, 2)); 

    const current = offerings.current;
    if (!current || !current.availablePackages?.length) {
        console.error('HATA: RevenueCat/Google Play hiç bir teklif/paket döndürmedi. Offerings boş!');
        return false;
    }

    // Doğru Ürün Kimliğine sahip paketi bulmaya çalış
    const pkg =
      current.availablePackages.find((p: any) => p?.product?.identifier === PREMIUM_PRODUCT_ID) ??
      current.availablePackages[0]; // Eğer bulunamazsa ilk paketi kullan (yedek)
      
    console.log(`Satın alınacak paket: ${pkg.identifier} (Ürün ID: ${pkg.product.identifier})`);

    const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg as any });
    const hasPremium = !!customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID];
    if (hasPremium) await hideBanner();
    return hasPremium;
  } catch (e: any) {
    // Kullanıcının işlemi iptal etmesi, ödeme hatası değildir.
    if (e?.userCancelled) {
        console.log('Satın alma işlemi kullanıcı tarafından iptal edildi.');
        return false;
    }
    console.error('purchasePremium error (Ödeme Hatası):', e);
    return false;
  }
};
