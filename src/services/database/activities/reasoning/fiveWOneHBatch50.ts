import { ConceptRound } from '../../../../types';

export const fiveWOneHBatch50: ConceptRound[] = [
  // ... (buraya yukarıdaki 50 turun tamamı gelecek, kısaltılmış)
];

// KATEGORİ AYIRICI: Soru tipine göre filtreleme fonksiyonu
export type FiveWOneHCategory = 'Kim' | 'Ne' | 'Nerede' | 'Ne Zaman' | 'Neden' | 'Nasıl';

export function getFiveWOneHCategory(round: ConceptRound): FiveWOneHCategory | 'Diğer' {
  const key = round.questionAudioKey || '';
  if (key.includes('who')) return 'Kim';
  if (key.includes('what')) return 'Ne';
  if (key.includes('where')) return 'Nerede';
  if (key.includes('when')) return 'Ne Zaman';
  if (key.includes('why')) return 'Neden';
  if (key.includes('how')) return 'Nasıl';
  return 'Diğer';
}

export function filterFiveWOneHByCategory(rounds: ConceptRound[], category: FiveWOneHCategory): ConceptRound[] {
  return rounds.filter(r => getFiveWOneHCategory(r) === category);
}
