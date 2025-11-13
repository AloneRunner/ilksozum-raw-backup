import { ActivityType } from '../../../../types';

/**
 * Object Collector Game Data
 * Defines different game scenarios with target objects and distractors
 */

export interface ObjectCollectorRound {
  id: number;
  category: string; // "Sadece meyveleri topla!" gibi açıklama
  categoryKey: string; // i18n key
  activityType: ActivityType.ObjectCollector;
  targetObjects: Array<{
    id: number;
    imageUrl: string;
    word: string;
  }>;
  distractorObjects: Array<{
    id: number;
    imageUrl: string;
    word: string;
  }>;
}

export const objectCollectorData: ObjectCollectorRound[] = [
  // Round 1: Sadece meyveleri topla
  {
    id: 1,
    category: 'Sadece meyveleri topla!',
    categoryKey: 'games.objectCollector.collectFruits',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 114, imageUrl: '/images/114.png', word: 'muz' },     // banana
      { id: 115, imageUrl: '/images/115.png', word: 'portakal' }, // orange
      { id: 171, imageUrl: '/images/171.png', word: 'çilek' },   // strawberry
      { id: 365, imageUrl: '/images/365.png', word: 'armut' },   // pear
      { id: 88, imageUrl: '/images/88.png', word: 'üzüm' },      // grapes
      { id: 170, imageUrl: '/images/170.png', word: 'karpuz' },  // watermelon
      { id: 703, imageUrl: '/images/703.png', word: 'limon' },   // lemon
    ],
    distractorObjects: [
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
      { id: 47, imageUrl: '/images/47.png', word: 'köpek' },     // dog
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 121, imageUrl: '/images/121.png', word: 'kalem' },   // pencil
    ],
  },

  // Round 2: Sadece hayvanları topla
  {
    id: 2,
    category: 'Sadece hayvanları topla!',
    categoryKey: 'games.objectCollector.collectAnimals',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
      { id: 47, imageUrl: '/images/47.png', word: 'köpek' },     // dog
      { id: 100, imageUrl: '/images/100.png', word: 'aslan' },   // lion
      { id: 28, imageUrl: '/images/28.png', word: 'fil' },       // elephant
      { id: 101, imageUrl: '/images/101.png', word: 'zürafa' },  // giraffe
      { id: 26, imageUrl: '/images/26.png', word: 'ördek' },     // duck
      { id: 274, imageUrl: '/images/274.png', word: 'kelebek' }, // butterfly
      { id: 400, imageUrl: '/images/400.png', word: 'balık' },   // fish
    ],
    distractorObjects: [
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 114, imageUrl: '/images/114.png', word: 'muz' },     // banana
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 121, imageUrl: '/images/121.png', word: 'kalem' },   // pencil
    ],
  },

  // Round 3: Sadece araçları topla
  {
    id: 3,
    category: 'Sadece araçları topla!',
    categoryKey: 'games.objectCollector.collectVehicles',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 124, imageUrl: '/images/124.png', word: 'araba' },      // car
      { id: 90, imageUrl: '/images/90.png', word: 'otobüs' },       // bus
      { id: 128, imageUrl: '/images/128.png', word: 'uçak' },       // airplane
      { id: 144, imageUrl: '/images/144.png', word: 'gemi' },       // ship
      { id: 267, imageUrl: '/images/267.png', word: 'helikopter' }, // helicopter
      { id: 266, imageUrl: '/images/266.png', word: 'tren' },       // train
    ],
    distractorObjects: [
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 606, imageUrl: '/images/606.png', word: 'yatak' },   // bed
    ],
  },

  // Round 4: Sadece kırmızı renkte olanları topla
  {
    id: 4,
    category: 'Sadece kırmızı olanları topla!',
    categoryKey: 'games.objectCollector.collectRed',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // red apple
      { id: 171, imageUrl: '/images/171.png', word: 'çilek' },   // strawberry
      { id: 170, imageUrl: '/images/170.png', word: 'karpuz' },  // watermelon
      { id: 124, imageUrl: '/images/124.png', word: 'araba' },   // (often red car)
    ],
    distractorObjects: [
      { id: 114, imageUrl: '/images/114.png', word: 'muz' },     // yellow banana
      { id: 115, imageUrl: '/images/115.png', word: 'portakal' }, // orange
      { id: 88, imageUrl: '/images/88.png', word: 'üzüm' },      // purple grapes
      { id: 703, imageUrl: '/images/703.png', word: 'limon' },   // yellow lemon
    ],
  },

  // Round 5: Sadece yiyecekleri topla
  {
    id: 5,
    category: 'Sadece yiyecekleri topla!',
    categoryKey: 'games.objectCollector.collectFood',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 114, imageUrl: '/images/114.png', word: 'muz' },     // banana
      { id: 115, imageUrl: '/images/115.png', word: 'portakal' }, // orange
      { id: 171, imageUrl: '/images/171.png', word: 'çilek' },   // strawberry
      { id: 131, imageUrl: '/images/131.png', word: 'ekmek' },   // bread
      { id: 132, imageUrl: '/images/132.png', word: 'süt' },     // milk
    ],
    distractorObjects: [
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 121, imageUrl: '/images/121.png', word: 'kalem' },   // pencil
      { id: 124, imageUrl: '/images/124.png', word: 'araba' },   // car
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
    ],
  },

  // Round 6: Sadece okul eşyalarını topla
  {
    id: 6,
    category: 'Sadece okul eşyalarını topla!',
    categoryKey: 'games.objectCollector.collectSchoolItems',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 121, imageUrl: '/images/121.png', word: 'kalem' },   // pencil
      { id: 535, imageUrl: '/images/535.png', word: 'silgi' },   // eraser
      { id: 138, imageUrl: '/images/138.png', word: 'çanta' },   // bag
      { id: 139, imageUrl: '/images/139.png', word: 'defter' },  // notebook
    ],
    distractorObjects: [
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
      { id: 124, imageUrl: '/images/124.png', word: 'araba' },   // car
      { id: 606, imageUrl: '/images/606.png', word: 'yatak' },   // bed
    ],
  },

  // Round 7: Sadece oyuncakları topla
  {
    id: 7,
    category: 'Sadece oyuncakları topla!',
    categoryKey: 'games.objectCollector.collectToys',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 109, imageUrl: '/images/109.png', word: 'oyuncak bebek' }, // doll
      { id: 276, imageUrl: '/images/276.png', word: 'oyuncak ayı' },   // teddy bear
      { id: 110, imageUrl: '/images/110.png', word: 'top' },           // ball
      { id: 380, imageUrl: '/images/380.png', word: 'astronot' },      // astronaut toy
    ],
    distractorObjects: [
      { id: 37, imageUrl: '/images/37.png', word: 'kitap' },     // book
      { id: 43, imageUrl: '/images/43.png', word: 'elma' },      // apple
      { id: 124, imageUrl: '/images/124.png', word: 'araba' },   // car (could be toy, but here as distractor)
      { id: 606, imageUrl: '/images/606.png', word: 'yatak' },   // bed
    ],
  },

  // Round 8: Sadece büyük hayvanları topla
  {
    id: 8,
    category: 'Sadece büyük hayvanları topla!',
    categoryKey: 'games.objectCollector.collectLargeAnimals',
    activityType: ActivityType.ObjectCollector,
    targetObjects: [
      { id: 28, imageUrl: '/images/28.png', word: 'fil' },       // elephant
      { id: 100, imageUrl: '/images/100.png', word: 'aslan' },   // lion
      { id: 101, imageUrl: '/images/101.png', word: 'zürafa' },  // giraffe
      { id: 290, imageUrl: '/images/290.png', word: 'ayı' },     // bear
    ],
    distractorObjects: [
      { id: 16, imageUrl: '/images/16.png', word: 'kedi' },      // cat
      { id: 29, imageUrl: '/images/29.png', word: 'fare' },      // mouse
      { id: 274, imageUrl: '/images/274.png', word: 'kelebek' }, // butterfly
      { id: 400, imageUrl: '/images/400.png', word: 'balık' },   // fish
    ],
  },
];

export default objectCollectorData;
