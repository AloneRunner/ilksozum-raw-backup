interface Background {
    type: 'video' | 'gradient';
    value: string;
}

interface Theme {
    name: string;
    previewClass: string;
    type: 'video' | 'gradient';
    value: string;
}

export const THEMES: Record<string, Theme> = {
  simple: { name: 'Sade', previewClass: 'bg-gradient-to-br from-sky-200 to-sky-400', type: 'gradient', value: 'bg-gradient-to-br from-sky-200 to-sky-400' },
  balon: { name: 'Balon', previewClass: 'bg-sky-300', type: 'video', value: '/videos/balon.mp4' },
  gunes: { name: 'Güneş', previewClass: 'bg-yellow-300', type: 'video', value: '/videos/gunes.mp4' },
  tilki: { name: 'Tilki', previewClass: 'bg-green-400', type: 'video', value: '/videos/tilki.mp4' },
  ay: { name: 'Ay', previewClass: 'bg-indigo-400', type: 'video', value: '/videos/ay.mp4' },
  geceorman: { name: 'Gece Ormanı', previewClass: 'bg-indigo-800', type: 'video', value: '/videos/geceorman.mp4' },
  yagmur: { name: 'Yağmur', previewClass: 'bg-slate-500', type: 'video', value: '/videos/yagmur.mp4' },
  kus: { name: 'Kuşlar', previewClass: 'bg-sky-400', type: 'video', value: '/videos/kus.mp4' },
  tilki2: { name: 'Çayır Tilkisi', previewClass: 'bg-lime-400', type: 'video', value: '/videos/tilki2.mp4' },
  kedi: { name: 'Kedi', previewClass: 'bg-green-400', type: 'video', value: '/videos/kedi.mp4' },
  kar: { name: 'Kar', previewClass: 'bg-sky-200', type: 'video', value: '/videos/kar.mp4' },
  gunbatimi: { name: 'Gün Batımı', previewClass: 'bg-orange-400', type: 'video', value: '/videos/gunbatimi.mp4' },
  ay2: { name: 'Hilal', previewClass: 'bg-indigo-500', type: 'video', value: '/videos/ay2.mp4' },
  zurafa: { name: 'Zürafa', previewClass: 'bg-cyan-300', type: 'video', value: '/videos/zurafa2.mp4' },
  geometri: { name: 'Geometrik', previewClass: 'bg-rose-200', type: 'video', value: '/videos/geometri.mp4' },
};


export const getScreenBackground = (
    themeKey: string
): Background => {
    const selectedTheme = THEMES[themeKey] || THEMES.simple;
    return {
        type: selectedTheme.type,
        value: selectedTheme.value,
    };
};