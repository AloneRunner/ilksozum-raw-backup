import { ActivityType } from '../../../../types';

/**
 * Emotion Puppet Game Data
 * Çocuklar yüz parçalarını seçerek belirtilen duyguyu oluşturur
 */

export interface EmotionPuppetRound {
  id: number;
  targetEmotion: string;
  targetEmotionLabel: string;
  targetEmotionKey: string; // i18n key
  activityType: ActivityType.EmotionPuppet;
  correctParts: {
    eyes: string;
    mouth: string;
    eyebrows: string;
  };
}

export const emotionPuppetData: EmotionPuppetRound[] = [
  // 1. Mutlu Yüz
  {
    id: 1,
    targetEmotion: 'happy',
    targetEmotionLabel: 'Mutlu',
    targetEmotionKey: 'emotionPuppet.emotions.happy',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'happy-eyes',
      mouth: 'happy-mouth',
      eyebrows: 'happy-brows',
    },
  },

  // 2. Üzgün Yüz
  {
    id: 2,
    targetEmotion: 'sad',
    targetEmotionLabel: 'Üzgün',
    targetEmotionKey: 'emotionPuppet.emotions.sad',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'sad-eyes',
      mouth: 'sad-mouth',
      eyebrows: 'sad-brows',
    },
  },

  // 3. Kızgın Yüz
  {
    id: 3,
    targetEmotion: 'angry',
    targetEmotionLabel: 'Kızgın',
    targetEmotionKey: 'emotionPuppet.emotions.angry',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'angry-eyes',
      mouth: 'angry-mouth',
      eyebrows: 'angry-brows',
    },
  },

  // 4. Şaşkın Yüz
  {
    id: 4,
    targetEmotion: 'surprised',
    targetEmotionLabel: 'Şaşkın',
    targetEmotionKey: 'emotionPuppet.emotions.surprised',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'surprised-eyes',
      mouth: 'surprised-mouth',
      eyebrows: 'surprised-brows',
    },
  },

  // 5. Tekrar Mutlu (farklı kombinasyonla pekiştirme)
  {
    id: 5,
    targetEmotion: 'happy',
    targetEmotionLabel: 'Mutlu',
    targetEmotionKey: 'emotionPuppet.emotions.happy',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'happy-eyes',
      mouth: 'happy-mouth',
      eyebrows: 'happy-brows',
    },
  },

  // 6. Tekrar Üzgün (pekiştirme)
  {
    id: 6,
    targetEmotion: 'sad',
    targetEmotionLabel: 'Üzgün',
    targetEmotionKey: 'emotionPuppet.emotions.sad',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'sad-eyes',
      mouth: 'sad-mouth',
      eyebrows: 'sad-brows',
    },
  },

  // 7. Tekrar Kızgın (pekiştirme)
  {
    id: 7,
    targetEmotion: 'angry',
    targetEmotionLabel: 'Kızgın',
    targetEmotionKey: 'emotionPuppet.emotions.angry',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'angry-eyes',
      mouth: 'angry-mouth',
      eyebrows: 'angry-brows',
    },
  },

  // 8. Tekrar Şaşkın (pekiştirme)
  {
    id: 8,
    targetEmotion: 'surprised',
    targetEmotionLabel: 'Şaşkın',
    targetEmotionKey: 'emotionPuppet.emotions.surprised',
    activityType: ActivityType.EmotionPuppet,
    correctParts: {
      eyes: 'surprised-eyes',
      mouth: 'surprised-mouth',
      eyebrows: 'surprised-brows',
    },
  },
];

export default emotionPuppetData;
