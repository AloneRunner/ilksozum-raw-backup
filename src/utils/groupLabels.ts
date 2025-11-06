import { imageData } from '../services/database/imageData.ts';
import type { Locale } from '../i18n/index.ts';

// Whitelist of safe, çocuk-dostu grup adları.
// Yalnızca burada tanımlı kategorileri seslendirmede kullanırız; diğerlerini yok sayarız.
type LabelInfo = {
  tr?: string;
  en?: string;
  trSingular?: string;
  enSingular?: string;
};

const FRIENDLY_CATEGORY_LABELS: Record<string, LabelInfo> = {
  'Hayvanlar': { tr: 'hayvanlar', en: 'animals', trSingular: 'hayvan', enSingular: 'animal' },
  'Taşıtlar': { tr: 'taşıtlar', en: 'vehicles', trSingular: 'taşıt', enSingular: 'vehicle' },
  'Meyveler': { tr: 'meyveler', en: 'fruits', trSingular: 'meyve', enSingular: 'fruit' },
  'Sebzeler': { tr: 'sebzeler', en: 'vegetables', trSingular: 'sebze', enSingular: 'vegetable' },
  'Oyuncaklar': { tr: 'oyuncaklar', en: 'toys', trSingular: 'oyuncak', enSingular: 'toy' },
  'Kıyafetler': { tr: 'kıyafetler', en: 'clothes', trSingular: 'kıyafet', enSingular: 'clothing item' },
  'Giyim': { tr: 'kıyafetler', en: 'clothes', trSingular: 'kıyafet', enSingular: 'clothing item' },
  'Ev Eşyaları': { tr: 'ev eşyaları', en: 'household items', trSingular: 'ev eşyası', enSingular: 'household item' },
  'Mutfak Eşyaları': { tr: 'mutfak eşyaları', en: 'kitchen items', trSingular: 'mutfak eşyası', enSingular: 'kitchen item' },
  'Mutfak Gereçleri': { tr: 'mutfak gereçleri', en: 'kitchen utensils', trSingular: 'mutfak gereci', enSingular: 'kitchen utensil' },
  'Banyo Eşyaları': { tr: 'banyo eşyaları', en: 'bathroom items', trSingular: 'banyo eşyası', enSingular: 'bathroom item' },
  'Şekiller': { tr: 'şekiller', en: 'shapes', trSingular: 'şekil', enSingular: 'shape' },
  'Meslekler': { tr: 'meslekler', en: 'professions', trSingular: 'meslek', enSingular: 'profession' },
  'Müzik Aletleri': { tr: 'müzik aletleri', en: 'musical instruments', trSingular: 'müzik aleti', enSingular: 'musical instrument' },
  'Tamir Aletleri': { tr: 'tamir aletleri', en: 'tools', trSingular: 'tamir aleti', enSingular: 'tool' },
  'Canlılar': { tr: 'canlılar', en: 'living things', trSingular: 'canlı', enSingular: 'living thing' },
};

const idToCategory = new Map<number, string>();
for (const item of imageData) {
  if (item && item.id && item.tags && typeof item.tags.category === 'string') {
    idToCategory.set(item.id, item.tags.category);
  }
}

export function getFriendlyCategoryLabelByImageId(id: number, lang: Locale): string | null {
  const raw = idToCategory.get(id);
  if (!raw) return null;
  const mapping = FRIENDLY_CATEGORY_LABELS[raw];
  if (!mapping) return null; // yalnızca whitelist
  const key = (lang as any) as 'tr' | 'en';
  const val = key === 'en' ? mapping.en : mapping.tr;
  return val || null;
}

export function getFriendlyCategoryLabelSingularByImageId(id: number, lang: Locale): string | null {
  const raw = idToCategory.get(id);
  if (!raw) return null;
  const mapping = FRIENDLY_CATEGORY_LABELS[raw];
  if (!mapping) return null;
  const key = (lang as any) as 'tr' | 'en';
  const val = key === 'en' ? mapping.enSingular : mapping.trSingular;
  return val || null;
}

export function getFriendlyCategoryLabelSingularFromRaw(raw: string | null | undefined, lang: Locale): string | null {
  if (!raw) return null;
  const mapping = FRIENDLY_CATEGORY_LABELS[raw];
  if (!mapping) return null;
  const key = (lang as any) as 'tr' | 'en';
  const val = key === 'en' ? mapping.enSingular : mapping.trSingular;
  return val || null;
}
