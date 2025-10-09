
import React, { Suspense, useMemo, useEffect } from 'react';
import { applyDocumentLanguage, getCurrentLanguage } from './i18n/index.ts';
import { setSpeechLanguage } from './services/speechService.ts';
import { AppContext, IAppContext } from './contexts/AppContext.ts';
import { useAppCore } from './hooks/useAppCore.ts';
import { getScreenBackground } from './themes/themeManager.ts';
import { ScreenState, Tab } from './types.ts';

import Spinner from './components/Spinner.tsx';
import Toast from './components/Toast.tsx';
import BannerAd from './components/BannerAd.tsx';
import BottomNavBar from './components/BottomNavBar.tsx';
import { AppRouter } from './components/navigation/AppRouter.tsx';
import BasketIcon from './components/icons/BasketIcon.tsx';
import VideoBackground from './components/VideoBackground.tsx';

export default function App(): React.ReactNode {
  const appCore = useAppCore();
  const { settings, profile, navigation, print, toast } = appCore;

  const background = getScreenBackground(settings.theme);

  useEffect(() => {
    // Ensure <html lang> reflects current language
    applyDocumentLanguage();
    // Update speech language
    setSpeechLanguage(getCurrentLanguage());
  }, [settings.language]);

  const showNavBar = useMemo(() => 
    profile.activeProfile && [ScreenState.MainMenu, ScreenState.Achievements, ScreenState.CommunicationMenu].includes(appCore.screenState)
  , [profile.activeProfile, appCore.screenState]);

  const showPrintPoolButton = useMemo(() =>
    settings.isPremium && [ScreenState.CommunicationDetail, ScreenState.ObjectCategoriesMenu, ScreenState.ObjectCategoriesIntlMenu, ScreenState.PrintSelectionDetail].includes(appCore.screenState)
  , [settings.isPremium, appCore.screenState]);

  return (
    <AppContext.Provider value={appCore as IAppContext}>
      <div className={`relative w-screen h-screen overflow-hidden transition-colors duration-500 ${background.type === 'gradient' ? background.value : ''} flex flex-col`}>
        {background.type === 'video' && <VideoBackground src={background.value} />}
        <Suspense fallback={<div className="flex items-center justify-center h-full"><Spinner /></div>}>
          <div className={`w-full flex-grow min-h-0 ${!settings.isPremium ? 'pt-16' : ''} ${showNavBar ? 'pb-20 landscape:pb-0 landscape:pl-20' : ''}`}>
             <AppRouter />
          </div>
          {showNavBar && (
            <BottomNavBar 
              activeTab={navigation.activeTab} 
              onSelectTab={(tab: Tab) => navigation.setActiveTab(tab)}
              onSelectSettings={() => appCore.setScreenState(ScreenState.Settings)}
            />
          )}
        </Suspense>
        {showPrintPoolButton && (
          <button
              onClick={() => {
                  appCore.setPreviousScreen(appCore.screenState);
                  appCore.setScreenState(ScreenState.PrintPool);
              }}
              className="fixed bottom-24 right-4 landscape:bottom-4 landscape:right-auto landscape:left-24 z-40 w-16 h-16 bg-sky-500 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform"
              aria-label={`Yazdırma sepetini görüntüle (${print.printPool.length} kart)`}
          >
              <BasketIcon className="w-8 h-8"/>
              {print.printPool.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                      {print.printPool.length}
                  </span>
              )}
          </button>
        )}
        {!settings.isPremium && <BannerAd />}
        {toast.toast && <Toast message={toast.toast.message} type={toast.toast.type} />}
      </div>
    </AppContext.Provider>
  );
}
