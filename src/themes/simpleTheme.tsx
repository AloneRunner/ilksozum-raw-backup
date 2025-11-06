import React from 'react';
import ProgressIndicator from '../components/ui/ProgressIndicator.tsx';

// Lightweight compatibility utilities and styles that used to belong to the removed 'simple' theme.
// These exports provide neutral, accessible defaults so existing components keep working.

export const SIMPLE_THEME_TAG_CLASS = 'inline-flex items-center gap-1 rounded-full bg-white/90 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 shadow-sm';
export const SIMPLE_THEME_TEXT_PRIMARY = 'text-slate-900';
export const SIMPLE_THEME_TEXT_SECONDARY = 'text-slate-600';
export const SIMPLE_THEME_TEXT_MUTED = 'text-slate-500';
export const SIMPLE_THEME_SECTION_CLASS = 'mt-6 mb-3 text-lg font-semibold text-slate-700 tracking-tight';
export const SIMPLE_THEME_ICON_WRAPPER = 'inline-flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 p-3 shadow-sm';
export const SIMPLE_THEME_CARD_OVERLAY = 'bg-slate-900/5';
export const SIMPLE_THEME_ACTION_BUTTON = 'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md transition-all duration-200';

// Minimal color map used by some screens for icon accent selection
export const SIMPLE_THEME_COLORS = {
  default: { icon: 'bg-slate-100 text-slate-700' },
  rose: { icon: 'bg-rose-100 text-rose-700' },
  amber: { icon: 'bg-amber-100 text-amber-700' },
  teal: { icon: 'bg-teal-100 text-teal-700' },
  indigo: { icon: 'bg-indigo-100 text-indigo-700' },
  emerald: { icon: 'bg-emerald-100 text-emerald-700' },
  purple: { icon: 'bg-purple-100 text-purple-700' },
  sky: { icon: 'bg-sky-100 text-sky-700' },
  cyan: { icon: 'bg-cyan-100 text-cyan-700' },
  orange: { icon: 'bg-orange-100 text-orange-700' },
} as const;

export const getSimpleCardClassName = (_color: string, extra?: string) => {
  // Color is intentionally not used for container styling in this neutral fallback.
  return `group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl p-4 bg-white/95 border border-slate-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:shadow-lg ${extra || ''}`.trim();
};

export const SimpleThemeWrapper: React.FC<{ className?: string; maxWidthClassName?: string; children: React.ReactNode }>
  = ({ className = '', maxWidthClassName = 'max-w-4xl', children }) => {
  return (
    <div className={`w-full flex flex-col items-center justify-start h-full mx-auto p-4 ${maxWidthClassName} ${className}`.trim()}>
      {children}
    </div>
  );
};

// Lightweight card used by ConceptActivities in simple-mode. Neutral styling; shows optional aggregate progress.
export const SimpleCard: React.FC<{
  title: string;
  subtitle?: string;
  icon: React.FC<{ className?: string }>;
  color?: keyof typeof SIMPLE_THEME_COLORS | string;
  stats?: { attempts: number; completions: number; totalCorrect?: number; totalQuestions?: number };
  onClick?: () => void;
  disabled?: boolean;
  isSimple2Theme?: boolean;
}> = ({ title, subtitle, icon: Icon, color = 'default', stats, onClick, disabled, isSimple2Theme: _isSimple2Theme }) => {
  const iconAccent = SIMPLE_THEME_COLORS[(color as keyof typeof SIMPLE_THEME_COLORS)]?.icon || SIMPLE_THEME_COLORS.default.icon;
  const hasProgress = !!stats && (stats.attempts || 0) > 0;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
  className={getSimpleCardClassName(String(color), `${disabled ? 'opacity-40 pointer-events-none grayscale' : ''} ${hasProgress ? 'min-h-[140px]' : 'min-h-[100px]'}`)}
    >
      <span className={`pointer-events-none absolute inset-0 ${SIMPLE_THEME_CARD_OVERLAY} opacity-0 transition-opacity duration-200 group-hover:opacity-100`} />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5 pr-2">
          <h2 className={`text-lg font-bold sm:text-xl leading-tight ${SIMPLE_THEME_TEXT_PRIMARY}`}>{title}</h2>
          {subtitle ? (
            <p className={`text-xs sm:text-sm leading-snug ${SIMPLE_THEME_TEXT_SECONDARY}`}>{subtitle}</p>
          ) : null}
        </div>
        <span className={`${SIMPLE_THEME_ICON_WRAPPER} ${iconAccent} shrink-0`}>
          <Icon className="h-6 w-6" />
        </span>
      </div>
      {hasProgress && stats ? (
        <ProgressIndicator
          mode="aggregate"
          attempts={stats.attempts}
          completions={stats.completions}
          totalCorrect={stats.totalCorrect}
          totalQuestions={stats.totalQuestions}
          className="left-5 right-5 bottom-4"
        />
      ) : null}
    </button>
  );
};

export default {};
