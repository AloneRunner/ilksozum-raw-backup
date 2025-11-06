import { ActivityType, ConceptRound } from '../../../../types';

// Curated static rounds for Object Recognition (Natural Objects) in English
// Expanded to 7 rounds starting from ID 1911.

export const enNaturalObjectsData: ConceptRound[] = [
  {
    id: 1911,
    question: 'Which one is the stone?',
    questionAudioKey: 'q_which_is_stone_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: true, audioKey: 'taş', spokenText: 'stone' },
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: false, audioKey: 'dal', spokenText: 'branch' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 141, word: 'buz', imageUrl: '/images/141.png', isCorrect: false, audioKey: 'buz', spokenText: 'ice' }
    ]
  },
  {
    id: 1912,
    question: 'Which one is the branch?',
    questionAudioKey: 'q_which_is_branch',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: true, audioKey: 'dal', spokenText: 'branch' },
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 537, word: 'ağaç gövdesi', imageUrl: '/images/537.png', isCorrect: false, audioKey: 'ağaç_gövdesi', spokenText: 'tree trunk' }
    ]
  },
  {
    id: 1913,
    question: 'Which one is the leaf?',
    questionAudioKey: 'q_which_is_leaf_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: true, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: false, audioKey: 'dal', spokenText: 'branch' },
      { id: 139, word: 'tüy', imageUrl: '/images/139.png', isCorrect: false, audioKey: 'tüy', spokenText: 'feather' },
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' }
    ]
  },
  {
    id: 1914,
    question: 'Which one is the ice?',
    questionAudioKey: 'q_which_is_ice_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 141, word: 'buz', imageUrl: '/images/141.png', isCorrect: true, audioKey: 'buz', spokenText: 'ice' },
      { id: 696, word: 'su', imageUrl: '/images/696.png', isCorrect: false, audioKey: 'su', spokenText: 'water' },
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' },
      { id: 586, word: 'elmas', imageUrl: '/images/586.png', isCorrect: false, audioKey: 'elmas', spokenText: 'diamond' }
    ]
  },
  {
    id: 1915,
    question: 'Which one is the water?',
    questionAudioKey: 'q_which_is_water',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 696, word: 'su', imageUrl: '/images/696.png', isCorrect: true, audioKey: 'su', spokenText: 'water' },
      { id: 141, word: 'buz', imageUrl: '/images/141.png', isCorrect: false, audioKey: 'buz', spokenText: 'ice' },
			{ id: 316, word: 'tohum', imageUrl: '/images/316.png', isCorrect: false, audioKey: 'tohum', spokenText: 'seed' },
      { id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: false, audioKey: 'kar', spokenText: 'snow' }
    ]
  },
  {
    id: 1916,
    question: 'Which one is the tree trunk?',
    questionAudioKey: 'q_which_is_tree_trunk_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 537, word: 'ağaç gövdesi', imageUrl: '/images/537.png', isCorrect: true, audioKey: 'ağaç_gövdesi', spokenText: 'tree trunk' },
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: false, audioKey: 'dal', spokenText: 'branch' },
      { id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' },
      { id: 886, word: 'dal', imageUrl: '/images/886.png', isCorrect: false, audioKey: 'dal', spokenText: 'thick branch' }
    ]
  },
  {
    id: 1917,
    question: 'Which one is the feather?',
    questionAudioKey: 'q_which_is_feather_person',
    activityType: ActivityType.ObjectRecognition,
    options: [
      { id: 139, word: 'tüy', imageUrl: '/images/139.png', isCorrect: true, audioKey: 'tüy', spokenText: 'feather' },
      { id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' },
      { id: 27, word: 'pamuk', imageUrl: '/images/27.png', isCorrect: false, audioKey: 'pamuk', spokenText: 'cotton' },
      { id: 536, word: 'dal', imageUrl: '/images/536.png', isCorrect: false, audioKey: 'dal', spokenText: 'branch' }
    ]
	},
	{
		id: 1918,
		question: 'Which one is the snow?',
		questionAudioKey: 'q_which_is_snow_person',
		activityType: ActivityType.ObjectRecognition,
		options: [
			{ id: 405, word: 'kar', imageUrl: '/images/405.png', isCorrect: true, audioKey: 'kar', spokenText: 'snow' },
			{ id: 141, word: 'buz', imageUrl: '/images/141.png', isCorrect: false, audioKey: 'buz', spokenText: 'ice' },
			{ id: 347, word: 'taş', imageUrl: '/images/347.png', isCorrect: false, audioKey: 'taş', spokenText: 'stone' },
			{ id: 117, word: 'yaprak', imageUrl: '/images/117.png', isCorrect: false, audioKey: 'yaprak', spokenText: 'leaf' }
		]
	},
	{
		id: 1919,
		question: 'Which one is the waterfall?',
		questionAudioKey: 'q_which_is_waterfall_person',
		activityType: ActivityType.ObjectRecognition,
		options: [
			{ id: 216, word: 'şelale', imageUrl: '/images/216.png', isCorrect: true, audioKey: 'şelale', spokenText: 'waterfall' },
			{ id: 343, word: 'nehir', imageUrl: '/images/343.png', isCorrect: false, audioKey: 'nehir', spokenText: 'river' },
			{ id: 696, word: 'su', imageUrl: '/images/696.png', isCorrect: false, audioKey: 'su', spokenText: 'water' },
			{ id: 195, word: 'dağ', imageUrl: '/images/195.png', isCorrect: false, audioKey: 'dağ', spokenText: 'mountain' }
		]
	}
];