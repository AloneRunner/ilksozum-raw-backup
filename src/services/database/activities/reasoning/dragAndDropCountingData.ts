import { DragAndDropCountingRound, ActivityType } from '../../../../types.ts';

export const dragAndDropCountingData: DragAndDropCountingRound[] = [
    { id: 1, question: 'Sepete 3 elma koy.', questionAudioKey: 'q_put_3_apples', itemToDrag: {id: 43, word: 'elma', imageUrl: '/images/43.png', audioKeys: {default: 'elma'}, tags: {category:''}}, targetCount: 3, activityType: ActivityType.DragAndDropCounting },
    { id: 2, question: 'Kutuya 5 top koy.', questionAudioKey: 'q_put_5_balls', itemToDrag: {id: 156, word: 'top', imageUrl: '/images/156.png', audioKeys: {default: 'top'}, tags: {category:''}}, targetCount: 5, activityType: ActivityType.DragAndDropCounting },
    { id: 3, question: 'Akvaryuma 4 balık koy.', questionAudioKey: 'q_put_4_fish', itemToDrag: {id: 740, word: 'balık', imageUrl: '/images/740.png', audioKeys: {default: 'balık'}, tags: {category:''}}, targetCount: 4, activityType: ActivityType.DragAndDropCounting },
    { id: 4, question: 'Tabağa 2 kurabiye koy.', questionAudioKey: 'q_put_2_cookies', itemToDrag: {id: 330, word: 'bisküvi', imageUrl: '/images/330.png', audioKeys: {default: 'bisküvi'}, tags: {category:''}}, targetCount: 2, activityType: ActivityType.DragAndDropCounting }
];