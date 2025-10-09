// src/themes/colorManager.ts
export type AppColor = 'sky' | 'amber' | 'teal' | 'indigo' | 'rose' | 'cyan' | 'lime' | 'purple' | 'orange' | 'pink' | 'blue' | 'slate' | 'red' | 'green' | 'yellow';

const colorMap = {
    sky:    { bg100: 'bg-sky-100', bg200: 'bg-sky-200', bg500: 'bg-sky-500', hoverBg200: 'hover:bg-sky-200', text600: 'text-sky-600', text700: 'text-sky-700', text800: 'text-sky-800', accent: 'text-sky-600', ring: 'ring-sky-300' },
    amber:  { bg100: 'bg-amber-100', bg200: 'bg-amber-200', bg500: 'bg-amber-500', hoverBg200: 'hover:bg-amber-200', text600: 'text-amber-600', text700: 'text-amber-700', text800: 'text-amber-800', accent: 'text-amber-600', ring: 'ring-amber-300' },
    teal:   { bg100: 'bg-teal-100', bg200: 'bg-teal-200', bg500: 'bg-teal-500', hoverBg200: 'hover:bg-teal-200', text600: 'text-teal-600', text700: 'text-teal-700', text800: 'text-teal-800', accent: 'text-teal-600', ring: 'ring-teal-300' },
    indigo: { bg100: 'bg-indigo-100', bg200: 'bg-indigo-200', bg500: 'bg-indigo-500', hoverBg200: 'hover:bg-indigo-200', text600: 'text-indigo-600', text700: 'text-indigo-700', text800: 'text-indigo-800', accent: 'text-indigo-600', ring: 'ring-indigo-300' },
    rose:   { bg100: 'bg-rose-100', bg200: 'bg-rose-200', bg500: 'bg-rose-500', hoverBg200: 'hover:bg-rose-200', text600: 'text-rose-600', text700: 'text-rose-700', text800: 'text-rose-800', accent: 'text-rose-600', ring: 'ring-rose-300' },
    cyan:   { bg100: 'bg-cyan-100', bg200: 'bg-cyan-200', bg500: 'bg-cyan-500', hoverBg200: 'hover:bg-cyan-200', text600: 'text-cyan-600', text700: 'text-cyan-700', text800: 'text-cyan-800', accent: 'text-cyan-600', ring: 'ring-cyan-300' },
    lime:   { bg100: 'bg-lime-100', bg200: 'bg-lime-200', bg500: 'bg-lime-500', hoverBg200: 'hover:bg-lime-200', text600: 'text-lime-600', text700: 'text-lime-700', text800: 'text-lime-800', accent: 'text-lime-600', ring: 'ring-lime-300' },
    purple: { bg100: 'bg-purple-100', bg200: 'bg-purple-200', bg500: 'bg-purple-500', hoverBg200: 'hover:bg-purple-200', text600: 'text-purple-600', text700: 'text-purple-700', text800: 'text-purple-800', accent: 'text-purple-600', ring: 'ring-purple-300' },
    orange: { bg100: 'bg-orange-100', bg200: 'bg-orange-200', bg500: 'bg-orange-500', hoverBg200: 'hover:bg-orange-200', text600: 'text-orange-600', text700: 'text-orange-700', text800: 'text-orange-800', accent: 'text-orange-600', ring: 'ring-orange-300' },
    pink:   { bg100: 'bg-pink-100', bg200: 'bg-pink-200', bg500: 'bg-pink-500', hoverBg200: 'hover:bg-pink-200', text600: 'text-pink-600', text700: 'text-pink-700', text800: 'text-pink-800', accent: 'text-pink-600', ring: 'ring-pink-300' },
    blue:   { bg100: 'bg-blue-100', bg200: 'bg-blue-200', bg500: 'bg-blue-500', hoverBg200: 'hover:bg-blue-200', text600: 'text-blue-600', text700: 'text-blue-700', text800: 'text-blue-800', accent: 'text-blue-600', ring: 'ring-blue-300' },
    slate:  { bg100: 'bg-slate-100', bg200: 'bg-slate-200', bg500: 'bg-slate-500', hoverBg200: 'hover:bg-slate-200', text600: 'text-slate-600', text700: 'text-slate-700', text800: 'text-slate-800', accent: 'text-slate-600', ring: 'ring-slate-300' },
    red:    { bg100: 'bg-red-100', bg200: 'bg-red-200', bg500: 'bg-red-500', hoverBg200: 'hover:bg-red-200', text600: 'text-red-600', text700: 'text-red-700', text800: 'text-red-800', accent: 'text-red-600', ring: 'ring-red-300' },
    green:  { bg100: 'bg-green-100', bg200: 'bg-green-200', bg500: 'bg-green-500', hoverBg200: 'hover:bg-green-200', text600: 'text-green-600', text700: 'text-green-700', text800: 'text-green-800', accent: 'text-green-600', ring: 'ring-green-300' },
    yellow: { bg100: 'bg-yellow-100', bg200: 'bg-yellow-200', bg500: 'bg-yellow-500', hoverBg200: 'hover:bg-yellow-200', text600: 'text-yellow-600', text700: 'text-yellow-700', text800: 'text-yellow-800', accent: 'text-yellow-600', ring: 'ring-yellow-300' },
};

export const getColorClasses = (color: AppColor | string) => {
    return colorMap[color as AppColor] || colorMap.slate;
};