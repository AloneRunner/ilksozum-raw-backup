import { ActivityType, ConceptRound, ImageMetadata } from '../../../../types';

const questionMeta = (id: number, word: string, count: number): ImageMetadata => ({
  id,
  word,
  imageUrl: `/images/${id}.png`,
  audioKeys: { default: word },
  tags: { category: 'eller', count }
});

const baseSpeech = {
  tr: {
    question: 'Hangisinde bu kadar var?',
    correct: 'Evet! Bu görselde de aynı sayı var.',
    wrong: 'Hayır, bu görseldeki sayı farklı.'
  },
  en: {
    question: 'Which one has this many?',
    correct: 'Yes! This picture shows the same amount.',
    wrong: 'No, that picture shows a different amount.'
  },
  de: {
    question: 'Welche zeigt genauso viele?',
    correct: 'Ja! Dieses Bild hat genauso viele.',
    wrong: 'Nein, dieses Bild hat eine andere Anzahl.'
  },
  fr: {
    question: 'Lequel en montre autant ?',
    correct: 'Oui ! Cette image en montre autant.',
    wrong: "Non, cette image montre une autre quantité."
  },
  nl: {
    question: 'Welke heeft er zoveel?',
    correct: 'Ja! Deze afbeelding heeft er evenveel.',
    wrong: 'Nee, deze afbeelding heeft een ander aantal.'
  },
  az: {
    question: 'Hansında bu qədər var?',
    correct: 'Bəli! Bu şəkildə də eyni saydadır.',
    wrong: 'Xeyr, bu şəkildə say başqadır.'
  }
};

const questionText = 'Hangisinde bu kadar var?';
const questionAudioKey = 'q_count_match';

const handMeta = [
  { id: 1002, word: 'bir parmak gösteren el', count: 1 },
  { id: 1003, word: 'iki parmak gösteren el', count: 2 },
  { id: 1004, word: 'üç parmak gösteren el', count: 3 },
  { id: 1005, word: 'dört parmak gösteren el', count: 4 },
  { id: 1006, word: 'beş parmak gösteren el', count: 5 },
];

export const countMatchData: ConceptRound[] = [
  {
    id: 11001,
    activityType: ActivityType.CountMatch,
    question: questionText,
    questionAudioKey,
    questionItem: questionMeta(handMeta[0].id, handMeta[0].word, handMeta[0].count),
    speech: baseSpeech,
    options: [
      { id: 29, word: 'fare', spokenText: 'fare', imageUrl: '/images/29.png', audioKey: 'fare', isCorrect: true },
      { id: 1007, word: 'iki ördek', spokenText: 'iki ördek', imageUrl: '/images/1007.png', audioKey: 'iki_ordek', isCorrect: false },
      { id: 1010, word: 'beş arı', spokenText: 'beş arı', imageUrl: '/images/1010.png', audioKey: 'bes_ari', isCorrect: false },
    ]
  },
  {
    id: 11002,
    activityType: ActivityType.CountMatch,
    question: questionText,
    questionAudioKey,
    questionItem: questionMeta(handMeta[1].id, handMeta[1].word, handMeta[1].count),
    speech: baseSpeech,
    options: [
      { id: 1007, word: 'iki ördek', spokenText: 'iki ördek', imageUrl: '/images/1007.png', audioKey: 'iki_ordek', isCorrect: true },
      { id: 1008, word: 'üç kurbağa', spokenText: 'üç kurbağa', imageUrl: '/images/1008.png', audioKey: 'uc_kurbaga', isCorrect: false },
      { id: 1010, word: 'beş arı', spokenText: 'beş arı', imageUrl: '/images/1010.png', audioKey: 'bes_ari', isCorrect: false },
    ]
  },
  {
    id: 11003,
    activityType: ActivityType.CountMatch,
    question: questionText,
    questionAudioKey,
    questionItem: questionMeta(handMeta[2].id, handMeta[2].word, handMeta[2].count),
    speech: baseSpeech,
    options: [
      { id: 1008, word: 'üç kurbağa', spokenText: 'üç kurbağa', imageUrl: '/images/1008.png', audioKey: 'uc_kurbaga', isCorrect: true },
      { id: 1007, word: 'iki ördek', spokenText: 'iki ördek', imageUrl: '/images/1007.png', audioKey: 'iki_ordek', isCorrect: false },
      { id: 1009, word: 'dört kelebek', spokenText: 'dört kelebek', imageUrl: '/images/1009.png', audioKey: 'dort_kelebek', isCorrect: false },
    ]
  },
  {
    id: 11004,
    activityType: ActivityType.CountMatch,
    question: questionText,
    questionAudioKey,
    questionItem: questionMeta(handMeta[3].id, handMeta[3].word, handMeta[3].count),
    speech: baseSpeech,
    options: [
      { id: 1009, word: 'dört kelebek', spokenText: 'dört kelebek', imageUrl: '/images/1009.png', audioKey: 'dort_kelebek', isCorrect: true },
      { id: 1007, word: 'iki ördek', spokenText: 'iki ördek', imageUrl: '/images/1007.png', audioKey: 'iki_ordek', isCorrect: false },
      { id: 1010, word: 'beş arı', spokenText: 'beş arı', imageUrl: '/images/1010.png', audioKey: 'bes_ari', isCorrect: false },
    ]
  },
  {
    id: 11005,
    activityType: ActivityType.CountMatch,
    question: questionText,
    questionAudioKey,
    questionItem: questionMeta(handMeta[4].id, handMeta[4].word, handMeta[4].count),
    speech: baseSpeech,
    options: [
      { id: 1010, word: 'beş arı', spokenText: 'beş arı', imageUrl: '/images/1010.png', audioKey: 'bes_ari', isCorrect: true },
      { id: 1008, word: 'üç kurbağa', spokenText: 'üç kurbağa', imageUrl: '/images/1008.png', audioKey: 'uc_kurbaga', isCorrect: false },
      { id: 29, word: 'fare', spokenText: 'fare', imageUrl: '/images/29.png', audioKey: 'fare', isCorrect: false },
    ]
  },
];
