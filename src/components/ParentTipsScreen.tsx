import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { t } from '../i18n/index.ts';
import { useAppContext } from '../contexts/AppContext.ts';

interface ParentTipsScreenProps {
  onBack: () => void;
}

const ParentTipsScreen: React.FC<ParentTipsScreenProps> = ({ onBack }) => {
  const { settings } = useAppContext();
  const isSimpleTheme = settings.theme === 'simple';
  const titleColor = isSimpleTheme ? 'text-purple-900' : 'text-white text-shadow-soft';
  
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
        <div className="w-full flex items-center mb-6 relative">
            <button 
                onClick={onBack} 
                className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label={t('app.back', 'Go back')}
            >
                <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
            </button>
            <h1 className={`flex-1 text-center text-3xl sm:text-4xl font-black ${titleColor}`}>
                {t('menu.parentTips.title', 'Tips for Parents')}
            </h1>
        </div>
      
        <div className="w-full flex-grow overflow-y-auto bg-white/80 p-6 rounded-2xl shadow-inner pr-4">
            <div className="text-left text-slate-700 space-y-4">
                <h3 className="text-2xl font-bold text-amber-800 text-center mb-4">{t('parentTips.guide', 'App Guide')}</h3>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800">🎓 {t('parentTips.learnTogether.title', 'Learn Together')}</h4>
                  <p className="text-base mt-1">{t('parentTips.learnTogether.text', 'Do activities with your child. Repeat the names of objects and ask questions about them ("Where does this animal live?", "What does this fruit taste like?"). This supports language development and strengthens your bond.')}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800">👤 {t('parentTips.profile.title', 'Profile Management (Optional)')}</h4>
                  <p className="text-base mt-1">{t('parentTips.profile.text', 'On first launch, the app automatically creates a "Guest" profile. If you want to track multiple children separately, you can create new profiles from the Settings menu or switch between existing profiles.')}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">⚙️ {t('parentTips.settings.title', 'Explore Settings')}</h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>{t('parentTips.settings.themed.title', 'Themed UI')}:</strong> {t('parentTips.settings.themed.text', "Change the look of the app. 'Themed' mode has lively backgrounds, while 'Simple' mode offers a softer palette.")}</li>
                      <li><strong>{t('parentTips.settings.fastMode.title', 'Fast Mode')}:</strong> {t('parentTips.settings.fastMode.text', 'Shortens feedback and speeds transitions between activities.')}</li>
                      <li><strong>{t('parentTips.settings.ban.title', 'Ban Image')}:</strong> {t('parentTips.settings.ban.text', 'If your child dislikes an image, enable "Ban Image" in Settings and use the ban button during activities to hide it later.')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">📊 {t('parentTips.progress.title', 'Track Progress')}</h4>
                   <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>{t('parentTips.progress.achievements.title', 'Achievements Tab')}:</strong> {t('parentTips.progress.achievements.text', 'Shows which categories your child has mastered. Earn a badge by completing an activity perfectly 3 times!')}</li>
                      <li><strong>{t('parentTips.progress.report.title', 'Progress Report')}:</strong> {t('parentTips.progress.report.text', 'Highlights the most challenging and most successful activities for your child.')}</li>
                  </ul>
                </div>

                 <div>
                  <h4 className="text-lg font-bold text-slate-800">💬 {t('parentTips.communication.title', 'Communication Cards')}</h4>
                  <p className="text-base mt-1">{t('parentTips.communication.text', 'Help your child express needs, feelings, or requests using the Communication Cards section.')}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">⚙️ {t('parentTips.customize.title', 'Customize Activities')}</h4>
                  <p className="text-base mt-1">{t('parentTips.customize.text', 'Use Activity Management in Settings to focus on specific skills or temporarily disable activities your child is not ready for.')}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800">🎲 {t('parentTips.randomMode.title', 'Try Random Mode')}</h4>
                  <p className="text-base mt-1">{t('parentTips.randomMode.text', 'Presents a shuffled mix of all enabled exercises from different categories to reinforce learning in a fun way.')}</p>
                </div>
                
                 <div>
                  <h4 className="text-lg font-bold text-slate-800">💡 {t('parentTips.extra.title', 'Extra Tips')}</h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-base">
                      <li><strong>{t('parentTips.extra.practice.title', 'Practice Mode (Soon)')}:</strong> {t('parentTips.extra.practice.text', "Soon you'll be able to start a 'Practice Session' based on the activities your child struggles with the most.")}</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default React.memo(ParentTipsScreen);