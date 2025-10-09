import React, { useState, useRef } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import RestoreIcon from './icons/RestoreIcon.tsx';
import CrownIcon from './icons/CrownIcon.tsx';
import HeartIcon from './icons/HeartIcon.tsx';
import XCircleIcon from './icons/XCircleIcon.tsx';
import { ActivityCategory, Profile } from '../types.ts';
import { getAvatar } from './ProfileSelectionScreen.tsx';
import { ACHIEVEMENTS } from '../constants.ts';
import LockClosedIcon from './icons/LockClosedIcon.tsx';
import { getColorClasses } from '../themes/colorManager.ts';
import { THEMES } from '../themes/themeManager.ts';
import { useAppContext } from '../contexts/AppContext.ts';
import { t } from '../i18n/index.ts';


interface SettingsScreenProps {
  onBack: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  isAutoSpeakEnabled: boolean;
  onToggleAutoSpeak: () => void;
  isBanButtonEnabled: boolean;
  onToggleBanButton: () => void;
  isFastTransitionEnabled: boolean;
  onToggleFastTransition: () => void;
  onSelectPrivacyPolicy: () => void;
  onManageBannedImages: () => void;
  isPremium: boolean;
  hasPurchasedPremium: boolean;
  onPurchasePremium: () => void;
  onResetProgress: () => void;
  theme: string;
  onChangeTheme: (themeKey: string) => void;
  activeProfile: Profile;
  onManageProfiles: () => void;
  onManageActivities: (category: ActivityCategory) => void;
  showPremiumToast: () => void;
}

const ToggleSwitch: React.FC<{ isEnabled: boolean; onToggle: () => void }> = ({ isEnabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
      isEnabled ? 'bg-green-500' : 'bg-slate-300'
    }`}
  >
    <span
      className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
        isEnabled ? 'translate-x-7' : 'translate-x-1'
      }`}
    />
  </button>
);

const SettingsRow: React.FC<{ title: string; subtitle: string; children: React.ReactNode; isPremiumFeature?: boolean; isPremiumUser?: boolean; onClick?: () => void; isThemed: boolean; }> = ({ title, subtitle, children, isPremiumFeature, isPremiumUser, onClick, isThemed }) => {
  const rowBg = isThemed ? 'bg-white/10' : 'bg-white/80';
  const textColor = isThemed ? 'text-white' : 'text-slate-800';
  const subTextColor = isThemed ? 'text-white/70' : 'text-slate-500';

  return (
    <div onClick={onClick} className={`flex justify-between items-center p-4 rounded-xl shadow-sm transition-opacity ${rowBg} ${isPremiumFeature && !isPremiumUser ? 'opacity-60' : ''} ${onClick ? 'cursor-pointer' : ''}`}>
      <div>
        <h3 className={`font-bold flex items-center ${textColor}`}>
          {title}
          {isPremiumFeature && <CrownIcon className="w-5 h-5 text-amber-500 ml-2"/>}
        </h3>
        <p className={`text-sm ${subTextColor}`}>{subtitle}</p>
      </div>
      {children}
    </div>
  );
};


const ParentGateButton: React.FC<{ onConfirm: () => void; isThemed: boolean }> = ({ onConfirm, isThemed }) => {
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<number | null>(null);
    const intervalRef = useRef<number | null>(null);
    const HOLD_DURATION = 2000; // 2 seconds

    const startHold = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);

        setProgress(0);
        
        const startTime = Date.now();
        intervalRef.current = window.setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const currentProgress = Math.min(100, (elapsedTime / HOLD_DURATION) * 100);
            setProgress(currentProgress);
        }, 50);

        timerRef.current = window.setTimeout(() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setProgress(100);
            onConfirm();
            setTimeout(() => setProgress(0), 500);
        }, HOLD_DURATION);
    };

    const cancelHold = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
        timerRef.current = null;
        intervalRef.current = null;
        setProgress(0);
    };
    
    const buttonClass = isThemed 
        ? 'bg-amber-400/80 text-white' 
        : 'bg-white text-amber-500';

    return (
        <button
            onPointerDown={startHold}
            onPointerUp={cancelHold}
            onPointerLeave={cancelHold}
            className={`relative font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform transform overflow-hidden ${buttonClass}`}
            aria-label="Satın almak için 2 saniye basılı tutun"
        >
            <div 
                className="absolute top-0 left-0 h-full bg-green-300/50 transition-all duration-100"
                style={{ width: `${progress}%` }}
            />
            <span className="relative z-10 flex items-center justify-center">
                 Premium'a Geç & Destek Ol <HeartIcon className="inline w-5 h-5 ml-1"/>
            </span>
        </button>
    );
};


const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onBack, isMuted, onToggleMute, isAutoSpeakEnabled, onToggleAutoSpeak, isBanButtonEnabled, onToggleBanButton,
  isFastTransitionEnabled, onToggleFastTransition, onSelectPrivacyPolicy, onManageBannedImages, isPremium, hasPurchasedPremium,
  onPurchasePremium, onResetProgress, theme, onChangeTheme, activeProfile, onManageProfiles, onManageActivities, showPremiumToast,
}) => {
  const { settings } = useAppContext();
  const isThemed = settings.theme !== 'simple';

  const handleResetClick = () => {
    if (window.confirm(`${activeProfile.name} için tüm ilerlemeyi sıfırlamak istediğinizden emin misiniz? Bu işlem geri alınamaz.`)) {
      onResetProgress();
    }
  };
  
  const Avatar = getAvatar(activeProfile.avatar);

  const titleColor = isThemed ? 'text-white text-shadow-soft' : 'text-slate-800';
  const iconColor = isThemed ? 'text-white' : 'text-slate-700';
  const sectionTitleColor = isThemed ? 'text-white/90 text-shadow-soft' : 'text-slate-700';
  const rowBg = isThemed ? 'bg-white/10' : 'bg-white/80';
  const textColor = isThemed ? 'text-white' : 'text-slate-800';
  const subTextColor = isThemed ? 'text-white/70' : 'text-slate-500';

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button 
          onClick={onBack} 
          className={`absolute left-0 p-2 rounded-full transition-colors ${isThemed ? 'bg-black/10 hover:bg-black/20' : 'bg-white/50 hover:bg-white'}`}
          aria-label="Ana menüye dön"
        >
          <ArrowLeftIcon className={`w-8 h-8 ${iconColor}`} />
        </button>
        <h1 className={`flex-1 text-center text-3xl sm:text-4xl font-black ${titleColor}`}>
          Ayarlar
        </h1>
      </div>
      
      <div className="w-full space-y-4 overflow-y-auto pr-2 pb-4">
        {!hasPurchasedPremium && (
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6 rounded-2xl shadow-lg text-white text-center">
            <CrownIcon className="w-12 h-12 mx-auto mb-2"/>
            <h2 className="text-2xl font-bold mb-2 text-shadow-soft">Premium Özellikler</h2>
            <p className="mb-4 text-shadow-soft">Tüm reklamları kaldırın, temalı arayüzü açın, gelişim raporunu görüntüleyin ve daha fazlasına erişin!</p>
            <ParentGateButton onConfirm={onPurchasePremium} isThemed={isThemed}/>
          </div>
        )}

  <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Profil</h2>
        <div className={`p-4 rounded-xl shadow-sm flex items-center justify-between ${rowBg}`}>
            <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isThemed ? 'bg-white/10' : 'bg-sky-100'}`}>
                    <Avatar className="w-12 h-12 text-sky-600"/>
                </div>
                <div>
                    <p className={`text-sm ${subTextColor}`}>Aktif Profil</p>
                    <h3 className={`font-bold text-xl ${textColor}`}>{activeProfile.name}</h3>
                </div>
            </div>
            <button onClick={onManageProfiles} className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-sky-600 transition-colors">
                Yönet
            </button>
        </div>
        
  <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Uygulama Teması</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(THEMES).map(([key, themeInfo]) => {
                const isThemedButton = themeInfo.type === 'video';
                const isSelected = theme === key;
                return (
                    <button 
                        key={key}
                        onClick={() => {
                            if (!isPremium && isThemedButton) {
                                showPremiumToast();
                            } else {
                                onChangeTheme(key);
                            }
                        }}
                        className={`relative p-2 rounded-xl border-2 transition-all duration-200 ${isSelected ? 'border-sky-500 ring-2 ring-sky-500' : 'border-transparent'}`}
                    >
                        <div className={`w-full h-20 rounded-lg ${themeInfo.previewClass} flex items-center justify-center`}>
                           {!isPremium && isThemedButton && <LockClosedIcon className="w-8 h-8 text-white/70"/>}
                        </div>
                        <p className={`text-center font-semibold mt-2 ${textColor}`}>{themeInfo.name}</p>
                    </button>
                )
            })}
        </div>

        <div className="grid grid-cols-1 landscape:grid-cols-2 gap-4">
            <div>
                <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Genel Ayarlar</h2>
                <div className="space-y-3 mt-2">
                    {/* Language selector */}
                    <SettingsRow title={t('settings.language')} subtitle={t('settings.languageSubtitle')} isThemed={isThemed}>
                        <select
                          value={settings.language}
                          onChange={(e) => settings.onChangeLanguage(e.target.value as any)}
                          className={`px-3 py-2 rounded-lg border bg-white text-slate-800 ${isThemed ? 'border-white/30' : 'border-slate-300'}`}
                          aria-label={t('settings.language')}
                        >
                          <option value="tr">Türkçe</option>
                          <option value="en">English</option>
                          <option value="de">Deutsch</option>
                          <option value="fr">Français</option>
                          <option value="nl">Nederlands</option>
                          <option value="az">Azərbaycan dili</option>
                        </select>
                    </SettingsRow>
                    <p className={`text-xs ${subTextColor} -mt-2 mb-1`}>{t('settings.languageNote')}</p>
                    <SettingsRow title="Sessiz Mod" subtitle="Tüm sesleri kapatır" isThemed={isThemed}>
                        <ToggleSwitch isEnabled={isMuted} onToggle={onToggleMute} />
                    </SettingsRow>
                    <SettingsRow title="Otomatik Seslendirme" subtitle="Sorular otomatik okunur" isThemed={isThemed}>
                        <ToggleSwitch isEnabled={isAutoSpeakEnabled} onToggle={onToggleAutoSpeak} />
                    </SettingsRow>
                    <SettingsRow title="Hızlı Mod" subtitle="Geçişleri hızlandırır" isPremiumFeature={true} isPremiumUser={isPremium} onClick={!isPremium ? showPremiumToast : undefined} isThemed={isThemed}>
                        {isPremium ? <ToggleSwitch isEnabled={isFastTransitionEnabled} onToggle={onToggleFastTransition} /> : <LockClosedIcon className="w-7 h-7 text-slate-400"/>}
                    </SettingsRow>
                </div>
            </div>
             <div>
                <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>İçerik Ayarları</h2>
                <div className="space-y-3 mt-2">
                    <SettingsRow title="Görsel Yasaklama" subtitle="'Yasakla' düğmesini gösterir" isThemed={isThemed}>
                        <ToggleSwitch isEnabled={isBanButtonEnabled} onToggle={onToggleBanButton} />
                    </SettingsRow>
                    <SettingsRow title="Yasaklı Görselleri Yönet" subtitle="Yasakladıklarınızı düzenleyin" isThemed={isThemed}>
                        <button onClick={onManageBannedImages} className={`p-2 rounded-full ${isThemed ? 'bg-white/20 hover:bg-white/30' : 'bg-slate-200 hover:bg-slate-300'}`}>
                            <RestoreIcon className={`w-6 h-6 ${isThemed ? 'text-white/80' : 'text-slate-600'}`}/>
                        </button>
                    </SettingsRow>
                </div>
            </div>
        </div>

        <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Etkinlik Yönetimi</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             {ACHIEVEMENTS.map(ach => {
                 const colorClasses = getColorClasses(ach.color);
                 return (
                     <button 
                         key={ach.id}
                         onClick={() => onManageActivities(ach.id)}
                         className={`flex items-center gap-3 p-3 rounded-xl shadow-sm hover:bg-white/20 transition-colors ${rowBg}`}
                     >
                         <div className={`p-2 ${colorClasses.bg100} rounded-lg`}>
                             <ach.icon className={`w-6 h-6 ${colorClasses.text600}`} />
                         </div>
                         <span className={`font-semibold ${textColor}`}>{ach.name}</span>
                     </button>
                 );
             })}
         </div>

        <div className="grid grid-cols-1 landscape:grid-cols-2 gap-4">
            <div>
                 <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Veri Yönetimi</h2>
                <div className="space-y-3 mt-2">
                    <SettingsRow title="İlerlemeyi Sıfırla" subtitle={`${activeProfile.name}'in tüm verilerini siler`} isThemed={isThemed}>
                        <button onClick={handleResetClick} className={`p-2 rounded-full transition-colors ${isThemed ? 'bg-red-500/20 hover:bg-red-500/40' : 'bg-red-100 hover:bg-red-200'}`} aria-label="Tüm ilerlemeyi sıfırla">
                            <XCircleIcon className={`w-6 h-6 ${isThemed ? 'text-red-300' : 'text-red-600'}`}/>
                        </button>
                    </SettingsRow>
                </div>
            </div>
             <div>
                <h2 className={`text-xl font-bold pt-4 pb-2 border-b border-slate-300/70 ${sectionTitleColor}`}>Hakkında</h2>
                <div className="space-y-3 mt-2">
                    <SettingsRow title="Gizlilik Politikası" subtitle="Veri kullanımı ve haklarınız" isThemed={isThemed}>
                       <button onClick={onSelectPrivacyPolicy} className={`font-bold hover:underline ${isThemed ? 'text-sky-300' : 'text-sky-600'}`}>
                        Oku
                      </button>
                    </SettingsRow>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;