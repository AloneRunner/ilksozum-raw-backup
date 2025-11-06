import React, { useMemo, useState } from 'react';
import { t } from '../i18n';
import { SimpleThemeWrapper, SIMPLE_THEME_ACTION_BUTTON, SIMPLE_THEME_TEXT_PRIMARY, SIMPLE_THEME_TEXT_SECONDARY } from '../themes/simpleTheme.tsx';
import AcademicCapIcon from './icons/AcademicCapIcon.tsx';
import { ActivityStats } from '../types.ts';
import { UNIT_DEFINITIONS } from '../constants/unitDefinitions';
import { getUnitCompletionPercentage, isUnitUnlocked, getUnlockedUnits } from '../services/masteryEngine';
import { buildDailySession, getRecommendedSessionLength, shouldShowNewSession } from '../services/sessionBuilder';
import { getActivityMetadata } from '../constants/activityMetadata';
import { getAllowedUnitCeiling, getPolicyToday } from '../services/progressionPolicy';
import LockClosedIcon from './icons/LockClosedIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface ProgramModeIntroScreenProps {
  onBack: () => void;
  onStartProgramMode: () => void | Promise<void>;
  theme: string;
  activityStats: Record<string, ActivityStats>;
  masteredObjectCategories?: Set<string>;
  lastSessionDate?: string;
  profileId?: string;
}

type TabType = 'progress' | 'units' | 'today';

const ProgramModeIntroScreen: React.FC<ProgramModeIntroScreenProps> = ({ 
  onBack, 
  onStartProgramMode, 
  activityStats,
  masteredObjectCategories = new Set(),
  lastSessionDate,
  profileId
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('today');
  
  // Calculate unit progress
  const unitProgress = useMemo(() => 
    UNIT_DEFINITIONS.map(unit => ({
      ...unit,
      isUnlocked: isUnitUnlocked(unit.unitNumber, activityStats, masteredObjectCategories),
      completionPercentage: getUnitCompletionPercentage(unit.unitNumber, activityStats, masteredObjectCategories)
    })),
    [activityStats, masteredObjectCategories]
  );

  // Build today's session within daily unit ceiling (max 1 advancement per day)
  const todaySession = useMemo(() => {
    const sessionLength = getRecommendedSessionLength(
      Object.keys(activityStats).filter(id => activityStats[id]?.completions > 0).length
    );
    const unlocked = getUnlockedUnits(activityStats, masteredObjectCategories);
    const ceiling = profileId ? getAllowedUnitCeiling(profileId, unlocked) : undefined;
    return buildDailySession(activityStats, masteredObjectCategories, undefined, sessionLength, ceiling);
  }, [activityStats, masteredObjectCategories, profileId]);

  // Check if today's session is fresh
  const isSessionFresh = useMemo(() => 
    shouldShowNewSession(lastSessionDate),
    [lastSessionDate]
  );

  // Render progress circles
  const renderProgressCircles = (percentage: number, total: number = 7) => {
    const filled = Math.round((percentage / 100) * total);
    return (
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < filled ? 'bg-emerald-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  // Get activity name with metadata
  const getActivityName = (activityId: string) => {
    const metadata = getActivityMetadata(activityId);
    return metadata?.activityName || activityId;
  };

  // Render tab button
  const TabButton = ({ tab, label, icon }: { tab: TabType; label: string; icon: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
        activeTab === tab
          ? 'bg-emerald-600 text-white shadow-sm'
          : 'bg-white text-gray-600 hover:bg-emerald-50'
      }`}
    >
      {icon} {label}
    </button>
  );
  return (
    <SimpleThemeWrapper maxWidthClassName="max-w-3xl" className="gap-4">
      <header className="mb-2 text-center">
        <div className="inline-flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3 border border-emerald-200 shadow-sm">
          <AcademicCapIcon className="h-6 w-6 text-emerald-600" />
          <h1 className={`text-2xl font-black ${SIMPLE_THEME_TEXT_PRIMARY}`}>
            {t('programMode.title', 'Program Modu')}
          </h1>
        </div>
        <p className={`mt-3 text-sm sm:text-base ${SIMPLE_THEME_TEXT_SECONDARY}`}>
          {t('programMode.subtitle', 'Uzman planıyla 10 ünitede beceri geliştirin')}
        </p>
      </header>

      {/* TABS */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
        <TabButton tab="today" label={t('programMode.tabs.today', 'Bugün')} icon="🎯" />
        <TabButton tab="progress" label={t('programMode.tabs.progress', 'İlerleme')} icon="📊" />
        <TabButton tab="units" label={t('programMode.tabs.units', 'Üniteler')} icon="📚" />
      </div>

      {/* TAB CONTENT */}
      {activeTab === 'today' && (
        <>
          {/* TODAY'S SESSION */}
          {todaySession.activities.length > 0 ? (
            <section className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-sm p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className={`text-lg font-bold ${SIMPLE_THEME_TEXT_PRIMARY}`}>
                  🎯 {t('programMode.todaySession', 'Bugünün Programı')}
                </h2>
                <div className="flex items-center gap-2">
                  {!isSessionFresh && (
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-200 text-orange-800 font-semibold">
                      {t('programMode.alreadyDone', 'Bugün yapıldı')}
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full bg-emerald-200 text-emerald-800 font-semibold`}>
                    ~{todaySession.estimatedDuration} dk
                  </span>
                </div>
              </div>

              {/* Daily progression note */}
              {profileId && (() => {
                const snap = getPolicyToday(profileId);
                if ((snap.advances || 0) >= 1) {
                  return (
                    <div className="mb-3 text-xs text-amber-800 bg-amber-100 border border-amber-200 rounded-lg px-3 py-2">
                      {t('programMode.dailyLimitNote', 'Bugün yeni ünite ilerleme hakkınızı kullandınız. Pekiştirme ve tekrarlarla devam edelim.')}
                    </div>
                  );
                }
                return null;
              })()}

              <div className="space-y-3">
                {/* Warmup */}
                {todaySession.activities.filter(a => a.sessionRole === 'warmup').length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-orange-600 mb-1">
                      🔥 {t('programMode.warmup', 'Isınma')}
                    </p>
                    <ul className="space-y-1 text-sm">
                      {todaySession.activities
                        .filter(a => a.sessionRole === 'warmup')
                        .map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-orange-500">•</span>
                            <span>{activity.activityName}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* New Content */}
                {todaySession.activities.filter(a => a.sessionRole === 'new').length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-blue-600 mb-1">
                      📚 {t('programMode.newContent', 'Yeni İçerik')}
                    </p>
                    <ul className="space-y-1 text-sm">
                      {todaySession.activities
                        .filter(a => a.sessionRole === 'new')
                        .map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{activity.activityName}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Reinforcement */}
                {todaySession.activities.filter(a => a.sessionRole === 'reinforcement').length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-purple-600 mb-1">
                      💪 {t('programMode.reinforcement', 'Pekiştirme')}
                    </p>
                    <ul className="space-y-1 text-sm">
                      {todaySession.activities
                        .filter(a => a.sessionRole === 'reinforcement')
                        .map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-purple-500">•</span>
                            <span>{activity.activityName}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ) : (
            <section className="rounded-2xl bg-white/95 border border-emerald-100 shadow-sm p-8 text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className={`text-lg font-semibold ${SIMPLE_THEME_TEXT_PRIMARY}`}>
                {t('programMode.allComplete', 'Tebrikler!')}
              </p>
              <p className={`text-sm ${SIMPLE_THEME_TEXT_SECONDARY} mt-1`}>
                {t('programMode.allCompleteDesc', 'Tüm etkinlikler tamamlandı!')}
              </p>
            </section>
          )}

          {/* INFO FOR PARENTS */}
          <section className="rounded-2xl bg-white/95 border border-gray-100 shadow-sm p-4 sm:p-5">
            <h2 className={`text-sm font-bold mb-2 ${SIMPLE_THEME_TEXT_PRIMARY}`}>
              💡 {t('programMode.sessionRules', 'Oturum Kuralları')}
            </h2>
            <ul className={`list-disc pl-5 space-y-1 text-xs ${SIMPLE_THEME_TEXT_SECONDARY}`}>
              <li>
                <strong>{t('programMode.rules.count', 'Oturum başına etkinlik sayısı:')}</strong> {todaySession.activities.length} etkinlik 
                ({todaySession.activities.filter(a => a.sessionRole === 'warmup').length} ısınma, {' '}
                {todaySession.activities.filter(a => a.sessionRole === 'new').length} yeni içerik, {' '}
                {todaySession.activities.filter(a => a.sessionRole === 'reinforcement').length} pekiştirme)
              </li>
              <li>
                <strong>{t('programMode.rules.selection', 'Seçim mantığı:')}</strong> Günlük seanslar aralıklı tekrar prensibiyle oluşturulur (Isınma → Yeni içerik → Pekiştirme)
              </li>
              <li>
                <strong>{t('programMode.rules.failure', 'Başarısızlık durumu:')}</strong> Etkinlik tamamlanır, skor kaydedilir. Ustalaşılmadıysa sonraki günlerde tekrar gelir.
              </li>
              <li>
                <strong>{t('programMode.rules.mastery', 'Ustalaşma kuralları:')}</strong> 
                <ul className="ml-4 mt-1">
                  <li>• <strong>Geniş havuz</strong> (Renkler, Şekiller vb.): 15 denemede %80 başarı</li>
                  <li>• <strong>Dar havuz</strong> (5N1K, Benzer Farklı vb.): 2 mükemmel seans (%100)</li>
                </ul>
              </li>
              <li>
                <strong>{t('programMode.rules.daily', 'Günlük limit:')}</strong> Günde 1 oturum önerilir (optimal aralıklı öğrenme için)
              </li>
              <li>
                <strong>{t('programMode.rules.joker', 'Joker Hakkı:')}</strong> Ebeveynler kilitli bir etkinliği süreli olarak açabilir; bu, ustalaşma kurallarını atlamaz, sadece erişime izin verir.
              </li>
            </ul>
          </section>
        </>
      )}

      {activeTab === 'progress' && (
        <section className="rounded-2xl bg-white/95 border border-emerald-100 shadow-sm p-4 sm:p-6">
          <h2 className={`text-lg font-bold mb-4 ${SIMPLE_THEME_TEXT_PRIMARY}`}>
            📊 {t('programMode.unitProgress', 'Ünite İlerlemesi')}
          </h2>
          <div className="space-y-3">
            {unitProgress.map((unit) => (
              <div key={unit.unitNumber} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-700">
                  {unit.unitNumber}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-semibold ${unit.isUnlocked ? SIMPLE_THEME_TEXT_PRIMARY : 'text-gray-400'}`}>
                      {unit.unitName}
                    </span>
                    {unit.isUnlocked ? (
                      <span className="text-xs text-emerald-600 font-medium">
                        {unit.completionPercentage === 100 ? (
                          <CheckCircleIcon className="h-4 w-4 inline text-emerald-600" />
                        ) : (
                          `%${unit.completionPercentage}`
                        )}
                      </span>
                    ) : (
                      <LockClosedIcon className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                  {renderProgressCircles(unit.completionPercentage)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'units' && (
        <section className="rounded-2xl bg-white/95 border border-emerald-100 shadow-sm p-4 sm:p-6">
          <h2 className={`text-lg font-bold mb-4 ${SIMPLE_THEME_TEXT_PRIMARY}`}>
            📚 {t('programMode.unitDetails', 'Ünite Detayları')}
          </h2>
          <div className="space-y-4">
            {unitProgress.map((unit) => (
              <details 
                key={unit.unitNumber}
                className={`group rounded-lg border ${unit.isUnlocked ? 'border-emerald-200' : 'border-gray-200'} overflow-hidden`}
              >
                <summary className={`cursor-pointer px-4 py-3 ${unit.isUnlocked ? 'bg-emerald-50' : 'bg-gray-50'} hover:brightness-95 transition-all`}>
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full ${unit.isUnlocked ? 'bg-emerald-200' : 'bg-gray-200'} flex items-center justify-center text-sm font-bold ${unit.isUnlocked ? 'text-emerald-800' : 'text-gray-500'}`}>
                      {unit.unitNumber}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${unit.isUnlocked ? SIMPLE_THEME_TEXT_PRIMARY : 'text-gray-400'}`}>
                          {unit.unitName}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">
                            {unit.activities.length} etkinlik
                          </span>
                          {!unit.isUnlocked && <LockClosedIcon className="h-3 w-3 text-gray-400" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="p-4 bg-white border-t border-gray-100">
                  <ul className="space-y-2 text-sm">
                    {unit.activities.map((activityId, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <span className={unit.isUnlocked ? SIMPLE_THEME_TEXT_SECONDARY : 'text-gray-400'}>
                          {getActivityName(activityId as string)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {!unit.isUnlocked && (
                    <p className="mt-3 text-xs text-gray-500 italic">
                      🔒 {t('programMode.unlockHint', 'Bir önceki üniteyi %80 tamamlayınca açılır')}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="mt-2 flex items-center justify-between gap-3">
        <button type="button" onClick={onBack} className={SIMPLE_THEME_ACTION_BUTTON}>
          {t('app.back', 'Geri dön')}
        </button>
        <button
          type="button"
          onClick={onStartProgramMode}
          disabled={todaySession.activities.length === 0}
          className={`${SIMPLE_THEME_ACTION_BUTTON} !bg-emerald-600 !text-white border-emerald-500 hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {todaySession.activities.length === 0 
            ? t('programMode.noActivities', 'Tüm etkinlikler tamamlandı!')
            : t('programMode.start', 'Seansı Başlat')}
        </button>
      </div>
    </SimpleThemeWrapper>
  );
};

export default React.memo(ProgramModeIntroScreen);
