/**
 * Activity Metadata for Unit-Based Program Mode
 * Based on Gemini AI pedagogical planning and 10-unit skill pyramid
 * 
 * This is the "brain" of the program mode system - it defines:
 * - Which unit each activity belongs to
 * - Prerequisites for unlocking each activity
 * - Mastery type (Wide vs Narrow pool) and thresholds
 */

import { ActivityType, ActivityMetadata, MasteryPoolType } from '../types';

/**
 * Master metadata map for all 101 activities
 * Key: ActivityType | string (for object categories)
 * Value: ActivityMetadata with unit, prerequisites, mastery rules
 */
export const ACTIVITY_METADATA_MAP: Record<string, ActivityMetadata> = {
  // ========================================
  // ÜNİTE 1: MERHABA DÜNYA (Temel Algı)
  // ========================================
  [ActivityType.Colors]: {
    activityId: ActivityType.Colors,
    activityName: 'Renkler',
    unitNumber: 1,
    prerequisite: null, // Kilitsiz
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Shapes]: {
    activityId: ActivityType.Shapes,
    activityName: 'Şekiller',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.LineTracing]: {
    activityId: ActivityType.LineTracing,
    activityName: 'Çizgi Takip',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'hayvanlar': {
    activityId: 'hayvanlar',
    activityName: 'Hayvanlar',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'meyveler': {
    activityId: 'meyveler',
    activityName: 'Meyveler',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'tasitlar': {
    activityId: 'tasitlar',
    activityName: 'Taşıtlar',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'oyuncaklar': {
    activityId: 'oyuncaklar',
    activityName: 'Oyuncaklar',
    unitNumber: 1,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },

  // ========================================
  // ÜNİTE 2: FİZİKSEL DÜNYA (Temel Karşılaştırmalar)
  // ========================================
  [ActivityType.BigSmall]: {
    activityId: ActivityType.BigSmall,
    activityName: 'Büyük / Küçük',
    unitNumber: 2,
    prerequisite: { type: 'OR', conditions: ['hayvanlar', 'tasitlar'] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.InsideOutside]: {
    activityId: ActivityType.InsideOutside,
    activityName: 'İçinde / Dışında',
    unitNumber: 2,
    prerequisite: { type: 'OR', conditions: ['oyuncaklar', 'ev_esyalari'] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.OnUnder]: {
    activityId: ActivityType.OnUnder,
    activityName: 'Üstünde / Altında',
    unitNumber: 2,
    prerequisite: { type: 'OR', conditions: ['oyuncaklar', 'ev_esyalari'] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.ShapeColoring]: {
    activityId: ActivityType.ShapeColoring,
    activityName: 'Şekil Boyama',
    unitNumber: 2,
    prerequisite: ActivityType.Shapes,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'vucudun_bolumleri': {
    activityId: 'vucudun_bolumleri',
    activityName: 'Vücudun Bölümleri',
    unitNumber: 2,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'giysiler_aksesuarlar': {
    activityId: 'giysiler_aksesuarlar',
    activityName: 'Giysiler & Aksesuarlar',
    unitNumber: 2,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'ev_esyalari': {
    activityId: 'ev_esyalari',
    activityName: 'Ev Eşyaları',
    unitNumber: 2,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },

  // ========================================
  // ÜNİTE 3: HAFIZA VE DİKKAT (Temel Bilişsel Beceriler)
  // ========================================
  [ActivityType.MemoryCards]: {
    activityId: ActivityType.MemoryCards,
    activityName: 'Hafıza Kartları',
    unitNumber: 3,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.WhatDoesntBelong]: {
    activityId: ActivityType.WhatDoesntBelong,
    activityName: 'Hangisi Farklı? (Aşama 1: Somut)',
    unitNumber: 3,
    prerequisite: { type: 'AND', conditions: [ActivityType.Colors, ActivityType.Shapes] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.FullEmpty]: {
    activityId: ActivityType.FullEmpty,
    activityName: 'Dolu / Boş',
    unitNumber: 3,
    prerequisite: { type: 'OR', conditions: ['mutfak_gerecleri', 'icecekler'] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'mutfak_gerecleri': {
    activityId: 'mutfak_gerecleri',
    activityName: 'Mutfak Gereçleri',
    unitNumber: 3,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'icecekler': {
    activityId: 'icecekler',
    activityName: 'İçecekler',
    unitNumber: 3,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'sebzeler': {
    activityId: 'sebzeler',
    activityName: 'Sebzeler',
    unitNumber: 3,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'diger_yiyecekler': {
    activityId: 'diger_yiyecekler',
    activityName: 'Diğer Yiyecekler',
    unitNumber: 3,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },

  // ========================================
  // ÜNİTE 4: NİTELİKLER I (İleri Karşılaştırmalar)
  // ========================================
  [ActivityType.LongShort]: {
    activityId: ActivityType.LongShort,
    activityName: 'Uzun / Kısa',
    unitNumber: 4,
    prerequisite: ActivityType.BigSmall,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.ThinThick]: {
    activityId: ActivityType.ThinThick,
    activityName: 'İnce / Kalın',
    unitNumber: 4,
    prerequisite: ActivityType.BigSmall,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.WideNarrow]: {
    activityId: ActivityType.WideNarrow,
    activityName: 'Geniş / Dar',
    unitNumber: 4,
    prerequisite: ActivityType.BigSmall,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.FewMuch]: {
    activityId: ActivityType.FewMuch,
    activityName: 'Az / Çok',
    unitNumber: 4,
    prerequisite: ActivityType.FullEmpty,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.OpenClosed]: {
    activityId: ActivityType.OpenClosed,
    activityName: 'Açık / Kapalı',
    unitNumber: 4,
    prerequisite: 'ev_esyalari',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'bitkiler': {
    activityId: 'bitkiler',
    activityName: 'Bitkiler',
    unitNumber: 4,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'aile_uyeleri': {
    activityId: 'aile_uyeleri',
    activityName: 'Aile Üyeleri',
    unitNumber: 4,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },

  // ========================================
  // ÜNİTE 5: NİTELİKLER II (Duyusal ve Soyut Kavramlar)
  // ========================================
  [ActivityType.WetDry]: {
    activityId: ActivityType.WetDry,
    activityName: 'Islak / Kuru',
    unitNumber: 5,
    prerequisite: 'giysiler_aksesuarlar', // Simplified from complex condition
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.CleanDirty]: {
    activityId: ActivityType.CleanDirty,
    activityName: 'Temiz / Kirli',
    unitNumber: 5,
    prerequisite: 'vucudun_bolumleri',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.HotCold]: {
    activityId: ActivityType.HotCold,
    activityName: 'Sıcak / Soğuk',
    unitNumber: 5,
    prerequisite: 'diger_yiyecekler',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.HardSoft]: {
    activityId: ActivityType.HardSoft,
    activityName: 'Sert / Yumuşak',
    unitNumber: 5,
    prerequisite: 'oyuncaklar',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Emotions]: {
    activityId: ActivityType.Emotions,
    activityName: 'Duygular',
    unitNumber: 5,
    prerequisite: 'vucudun_bolumleri',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.DayNight]: {
    activityId: ActivityType.DayNight,
    activityName: 'Gündüz / Gece',
    unitNumber: 5,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'meslekler': {
    activityId: 'meslekler',
    activityName: 'Meslekler',
    unitNumber: 5,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'mekanlar_odalar': {
    activityId: 'mekanlar_odalar',
    activityName: 'Mekanlar & Odalar',
    unitNumber: 5,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'aletler': {
    activityId: 'aletler',
    activityName: 'Aletler',
    unitNumber: 5,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.DikenliPuruzsuz]: {
    activityId: ActivityType.DikenliPuruzsuz,
    activityName: 'Dikenli / Pürüzsüz',
    unitNumber: 5,
    prerequisite: { type: 'OR', conditions: ['bitkiler', 'hayvanlar'] },
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.DugumCozuk]: {
    activityId: ActivityType.DugumCozuk,
    activityName: 'Düğüm / Çözük',
    unitNumber: 5,
    prerequisite: 'giysiler_aksesuarlar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },

  // ========================================
  // ÜNİTE 6: ÖRÜNTÜ VE İLİŞKİLER (İleri Bilişsel Beceriler)
  // ========================================
  [ActivityType.PatternCompletion]: {
    activityId: ActivityType.PatternCompletion,
    activityName: 'Örüntü Tamamlama',
    unitNumber: 6,
    prerequisite: { type: 'AND', conditions: [ActivityType.Colors, ActivityType.Shapes] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.FunctionalMatching]: {
    activityId: ActivityType.FunctionalMatching,
    activityName: 'İşlevsel Eşleştirme',
    unitNumber: 6,
    prerequisite: { 
      type: 'OR', 
      conditions: [
        { type: 'AND', conditions: ['mutfak_gerecleri', 'diger_yiyecekler'] },
        { type: 'AND', conditions: ['giysiler_aksesuarlar', 'vucudun_bolumleri'] }
      ] 
    },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  // Note: WhatDoesntBelong_Kategori is just WhatDoesntBelong at higher stage
  [ActivityType.RhythmFollowing]: {
    activityId: ActivityType.RhythmFollowing,
    activityName: 'Ritim Takip',
    unitNumber: 6,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'muzik_aletleri': {
    activityId: 'muzik_aletleri',
    activityName: 'Müzik Aletleri',
    unitNumber: 6,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'okul_ofis_gerecleri': {
    activityId: 'okul_ofis_gerecleri',
    activityName: 'Okul & Ofis Gereçleri',
    unitNumber: 6,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.BrokenIntact]: {
    activityId: ActivityType.BrokenIntact,
    activityName: 'Sağlam / Kırık',
    unitNumber: 6,
    prerequisite: 'oyuncaklar',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.RoughSmooth]: {
    activityId: ActivityType.RoughSmooth,
    activityName: 'Pürüzlü / Pürüzsüz',
    unitNumber: 6,
    prerequisite: 'oyuncaklar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.HeavyLight]: {
    activityId: ActivityType.HeavyLight,
    activityName: 'Ağır / Hafif',
    unitNumber: 6,
    prerequisite: 'oyuncaklar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.BitterSweet]: {
    activityId: ActivityType.BitterSweet,
    activityName: 'Acı / Tatlı',
    unitNumber: 6,
    prerequisite: 'diger_yiyecekler',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },

  // ========================================
  // ÜNİTE 7: GÖRECELİ KAVRAMLAR (Perspektif ve Karşılaştırma)
  // ========================================
  [ActivityType.RelativeBigSmall]: {
    activityId: ActivityType.RelativeBigSmall,
    activityName: 'Göreceli Büyük / Küçük',
    unitNumber: 7,
    prerequisite: ActivityType.BigSmall,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeLongShort]: {
    activityId: ActivityType.RelativeLongShort,
    activityName: 'Göreceli Uzun / Kısa',
    unitNumber: 7,
    prerequisite: ActivityType.LongShort,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeThinThick]: {
    activityId: ActivityType.RelativeThinThick,
    activityName: 'Göreceli İnce / Kalın',
    unitNumber: 7,
    prerequisite: ActivityType.ThinThick,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeWideNarrow]: {
    activityId: ActivityType.RelativeWideNarrow,
    activityName: 'Göreceli Geniş / Dar',
    unitNumber: 7,
    prerequisite: ActivityType.WideNarrow,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeFewMuch]: {
    activityId: ActivityType.RelativeFewMuch,
    activityName: 'Göreceli Az / Çok',
    unitNumber: 7,
    prerequisite: ActivityType.FewMuch,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.BeforeAfter]: {
    activityId: ActivityType.BeforeAfter,
    activityName: 'Önce / Sonra',
    unitNumber: 7,
    prerequisite: ActivityType.DayNight,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.BelowAbove]: {
    activityId: ActivityType.BelowAbove,
    activityName: 'Aşağıda / Yukarıda',
    unitNumber: 7,
    prerequisite: ActivityType.OnUnder,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.BesideOpposite]: {
    activityId: ActivityType.BesideOpposite,
    activityName: 'Yanında / Karşısında',
    unitNumber: 7,
    prerequisite: ActivityType.OnUnder,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.InFrontOfBehind]: {
    activityId: ActivityType.InFrontOfBehind,
    activityName: 'Önünde / Arkada',
    unitNumber: 7,
    prerequisite: ActivityType.OnUnder,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.NearFar]: {
    activityId: ActivityType.NearFar,
    activityName: 'Yakın / Uzak',
    unitNumber: 7,
    prerequisite: ActivityType.OnUnder,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.HighLow]: {
    activityId: ActivityType.HighLow,
    activityName: 'Yüksek / Alçak',
    unitNumber: 7,
    prerequisite: ActivityType.OnUnder,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.YesNo]: {
    activityId: ActivityType.YesNo,
    activityName: 'Evet / Hayır',
    unitNumber: 7,
    prerequisite: { 
      type: 'AND', 
      conditions: [ActivityType.Colors, { type: 'MIN_CATEGORIES', count: 2, category: 'object' }] 
    },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.TazeBayat]: {
    activityId: ActivityType.TazeBayat,
    activityName: 'Taze / Bayat',
    unitNumber: 7,
    prerequisite: 'diger_yiyecekler',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.KirisikDuzgun]: {
    activityId: ActivityType.KirisikDuzgun,
    activityName: 'Kırışık / Düzgün',
    unitNumber: 7,
    prerequisite: 'giysiler_aksesuarlar',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.SivriKut]: {
    activityId: ActivityType.SivriKut,
    activityName: 'Sivri / Küt',
    unitNumber: 7,
    prerequisite: 'aletler',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.ParlakMat]: {
    activityId: ActivityType.ParlakMat,
    activityName: 'Parlak / Mat',
    unitNumber: 7,
    prerequisite: 'oyuncaklar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.OldNew]: {
    activityId: ActivityType.OldNew,
    activityName: 'Eski / Yeni',
    unitNumber: 7,
    prerequisite: 'oyuncaklar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },

  // ========================================
  // ÜNİTE 8: NEDEN-SONUÇ VE SIRALAMA (Mantıksal Düşünme)
  // ========================================
  [ActivityType.CauseEffect]: {
    activityId: ActivityType.CauseEffect,
    activityName: 'Neden - Sonuç',
    unitNumber: 8,
    prerequisite: { type: 'AND', conditions: [ActivityType.BeforeAfter, ActivityType.FunctionalMatching] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.SequencingStories]: {
    activityId: ActivityType.SequencingStories,
    activityName: 'Olay Sıralama',
    unitNumber: 8,
    prerequisite: ActivityType.CauseEffect,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.DragAndDropCounting]: {
    activityId: ActivityType.DragAndDropCounting,
    activityName: 'Nesneleri Taşı (Sayı)',
    unitNumber: 8,
    prerequisite: ActivityType.FewMuch,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.DragAndDropPositioning]: {
    activityId: ActivityType.DragAndDropPositioning,
    activityName: 'Topu Yerleştir (Konum)',
    unitNumber: 8,
    prerequisite: { type: 'AND', conditions: [ActivityType.OnUnder, ActivityType.InsideOutside] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.HalfQuarterWhole]: {
    activityId: ActivityType.HalfQuarterWhole,
    activityName: 'Bütün / Yarım / Çeyrek',
    unitNumber: 8,
    prerequisite: ActivityType.FewMuch,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  'dogal_yapilar_uzay': {
    activityId: 'dogal_yapilar_uzay',
    activityName: 'Doğal Yapılar & Uzay',
    unitNumber: 8,
    prerequisite: null,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.MessyClean]: {
    activityId: ActivityType.MessyClean,
    activityName: 'Dağınık / Toplu',
    unitNumber: 8,
    prerequisite: { type: 'OR', conditions: ['oyuncaklar', 'ev_esyalari'] },
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.StraightCurved]: {
    activityId: ActivityType.StraightCurved,
    activityName: 'Düz / Eğri',
    unitNumber: 8,
    prerequisite: ActivityType.LineTracing,
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },

  // ========================================
  // ÜNİTE 9: SORGULAMA VE ANALİZ (Gelişmiş Sorgulama)
  // ========================================
  // Note: 5N1K activities are mapped as FiveWOneH with different contexts
  [ActivityType.FiveWOneH]: {
    activityId: ActivityType.FiveWOneH,
    activityName: '5N1K (Kim/Ne/Nerede)',
    unitNumber: 9,
    prerequisite: { 
      type: 'AND', 
      conditions: [ActivityType.SequencingStories, 'meslekler'] 
    },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Sudoku]: {
    activityId: ActivityType.Sudoku,
    activityName: 'Görsel Sudoku',
    unitNumber: 9,
    prerequisite: { type: 'AND', conditions: [ActivityType.PatternCompletion, ActivityType.WhatDoesntBelong] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.AliveLifeless]: {
    activityId: ActivityType.AliveLifeless,
    activityName: 'Canlı / Cansız',
    unitNumber: 9,
    prerequisite: { type: 'AND', conditions: ['hayvanlar', 'bitkiler', 'tasitlar'] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Between]: {
    activityId: ActivityType.Between,
    activityName: 'Arasında',
    unitNumber: 9,
    prerequisite: ActivityType.BesideOpposite,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.OddEven]: {
    activityId: ActivityType.OddEven,
    activityName: 'Tek / Çift',
    unitNumber: 9,
    prerequisite: ActivityType.DragAndDropCounting,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeNearFar]: {
    activityId: ActivityType.RelativeNearFar,
    activityName: 'Göreceli Yakın / Uzak',
    unitNumber: 9,
    prerequisite: ActivityType.NearFar,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.RelativeHighLow]: {
    activityId: ActivityType.RelativeHighLow,
    activityName: 'Göreceli Yüksek / Alçak',
    unitNumber: 9,
    prerequisite: ActivityType.HighLow,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.DerinSig]: {
    activityId: ActivityType.DerinSig,
    activityName: 'Derin / Sığ',
    unitNumber: 9,
    prerequisite: 'oyuncaklar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.KalabalikTenha]: {
    activityId: ActivityType.KalabalikTenha,
    activityName: 'Kalabalık / Tenha',
    unitNumber: 9,
    prerequisite: 'mekanlar_odalar',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.HungryFull]: {
    activityId: ActivityType.HungryFull,
    activityName: 'Aç / Tok',
    unitNumber: 9,
    prerequisite: 'hayvanlar', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.YoungOld]: {
    activityId: ActivityType.YoungOld,
    activityName: 'Yaşlı / Genç',
    unitNumber: 9,
    prerequisite: 'aile_uyeleri',
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },

  // ========================================
  // ÜNİTE 10: USTALIK (Sentez ve Okuma Hazırlığı)
  // ========================================
  // 5N1K Advanced (Neden/Nasıl/Ne Zaman) - using FiveWOneH with context
  [ActivityType.LeftRight]: {
    activityId: ActivityType.LeftRight,
    activityName: 'Sağ / Sol',
    unitNumber: 10,
    prerequisite: 'vucudun_bolumleri',
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Senses]: {
    activityId: ActivityType.Senses,
    activityName: 'Duyularımız',
    unitNumber: 10,
    prerequisite: { type: 'AND', conditions: [ActivityType.HotCold, ActivityType.HardSoft] },
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.TembelCaliskan]: {
    activityId: ActivityType.TembelCaliskan,
    activityName: 'Tembel / Çalışkan',
    unitNumber: 10,
    prerequisite: 'aile_uyeleri', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.SeffafOpak]: {
    activityId: ActivityType.SeffafOpak,
    activityName: 'Şeffaf / Opak',
    unitNumber: 10,
    prerequisite: 'mutfak_gerecleri', // Simplified
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  [ActivityType.FastSlow]: {
    activityId: ActivityType.FastSlow,
    activityName: 'Hızlı / Yavaş',
    unitNumber: 10,
    prerequisite: { type: 'OR', conditions: ['tasitlar', 'hayvanlar'] },
    masteryRule: { poolType: MasteryPoolType.NARROW, perfectSessionsRequired: 2 }
  },
  
  // === OKUMA HAZIRLIĞI KULVARI (Parallel Track in Unit 10) ===
  [ActivityType.FindTheSoundInImage]: {
    activityId: ActivityType.FindTheSoundInImage,
    activityName: 'Görselde Sesi Bul',
    unitNumber: 10,
    prerequisite: null, // Kulvar Başlangıcı
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.FindTheLetter]: {
    activityId: ActivityType.FindTheLetter,
    activityName: 'Harf Bulma',
    unitNumber: 10,
    prerequisite: null, // Kulvar Başlangıcı
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.FindTheLetterInGrid]: {
    activityId: ActivityType.FindTheLetterInGrid,
    activityName: 'Harf Tablosu',
    unitNumber: 10,
    prerequisite: ActivityType.FindTheLetter,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.SoundPresence]: {
    activityId: ActivityType.SoundPresence,
    activityName: 'Seste Harf Var mı?',
    unitNumber: 10,
    prerequisite: ActivityType.FindTheSoundInImage,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.Syllabification]: {
    activityId: ActivityType.Syllabification,
    activityName: 'Heceleme',
    unitNumber: 10,
    prerequisite: ActivityType.SoundPresence,
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
  [ActivityType.EmbeddedStory]: {
    activityId: ActivityType.EmbeddedStory,
    activityName: 'Hikaye Zamanı',
    unitNumber: 10,
    prerequisite: null, // Ayrı beceri
    masteryRule: { poolType: MasteryPoolType.WIDE, masteryThreshold: 0.8, recentAttemptsWindow: 15 }
  },
};

/**
 * Helper function to get metadata for an activity
 */
export function getActivityMetadata(activityId: ActivityType | string): ActivityMetadata | undefined {
  return ACTIVITY_METADATA_MAP[activityId as string];
}

/**
 * Helper function to get all activities in a unit
 */
export function getActivitiesInUnit(unitNumber: number): ActivityMetadata[] {
  return Object.values(ACTIVITY_METADATA_MAP).filter(
    (metadata) => metadata.unitNumber === unitNumber
  );
}
