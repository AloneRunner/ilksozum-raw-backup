import { ActivityType, ConceptRound } from '../../../types.ts';

// Bu dosya, temel kavram etkinliklerinin verilerini barındıracaktır.
// Evet/Hayır, Renkler ve Şekiller etkinlikleri artık contentService.ts içinde dinamik olarak üretilmektedir.

export const sensesData: ConceptRound[] = [
    {
        "id": 564, "question": "Hangisiyle g?r?r?z?", "questionAudioKey": "q_which_sense_see", "activityType": ActivityType.Senses,
        "options": [
            { "id": 564, "word": "g?z", "imageUrl": "/images/564.png", "isCorrect": true, "audioKey": "g?z", "spokenText": "g?z" },
            { "id": 490, "word": "kulak", "imageUrl": "/images/490.png", "isCorrect": false, "audioKey": "kulak", "spokenText": "kulak" }
        ]
    },
    {
        "id": 490, "question": "Hangisiyle duyar?z?", "questionAudioKey": "q_which_sense_hear", "activityType": ActivityType.Senses,
        "options": [
            { "id": 490, "word": "kulak", "imageUrl": "/images/490.png", "isCorrect": true, "audioKey": "kulak", "spokenText": "kulak" },
            { "id": 556, "word": "burun", "imageUrl": "/images/556.png", "isCorrect": false, "audioKey": "burun", "spokenText": "burun" }
        ]
    },
    {
        "id": 556, "question": "Hangisiyle koku al?r?z?", "questionAudioKey": "q_which_sense_smell", "activityType": ActivityType.Senses,
        "options": [
            { "id": 556, "word": "burun", "imageUrl": "/images/556.png", "isCorrect": true, "audioKey": "burun", "spokenText": "burun" },
            { "id": 558, "word": "dil", "imageUrl": "/images/558.png", "isCorrect": false, "audioKey": "dil", "spokenText": "dil" }
        ]
    },
    {
        "id": 558, "question": "Hangisiyle tat al?r?z?", "questionAudioKey": "q_which_sense_taste", "activityType": ActivityType.Senses,
        "options": [
            { "id": 558, "word": "dil", "imageUrl": "/images/558.png", "isCorrect": true, "audioKey": "dil", "spokenText": "dil" },
            { "id": 285, "word": "el", "imageUrl": "/images/285.png", "isCorrect": false, "audioKey": "el", "spokenText": "el" }
        ]
    },
    {
        "id": 285, "question": "Hangisiyle dokunuruz?", "questionAudioKey": "q_which_sense_touch", "activityType": ActivityType.Senses,
        "options": [
            { "id": 285, "word": "el", "imageUrl": "/images/285.png", "isCorrect": true, "audioKey": "el", "spokenText": "el" },
            { "id": 564, "word": "g?z", "imageUrl": "/images/564.png", "isCorrect": false, "audioKey": "g?z", "spokenText": "g?z" }
        ]
    },
    {
        "id": 76, "question": "Bunu hangisiyle koklar?z?", "questionAudioKey": "q_which_sense_smell", "activityType": ActivityType.Senses,
        "options": [
            { "id": 556, "word": "burun", "imageUrl": "/images/556.png", "isCorrect": true, "audioKey": "burun", "spokenText": "burun" },
            { "id": 490, "word": "kulak", "imageUrl": "/images/490.png", "isCorrect": false, "audioKey": "kulak", "spokenText": "kulak" }
        ],
        "questionItem": { "id": 76, "word": "?i?ek", "imageUrl": "/images/76.png", "audioKeys": { "default": "?i?ek" }, "tags": { "category": "" }}
    },
    {
        "id": 72, "question": "Bunu hangisiyle duyar?z?", "questionAudioKey": "q_which_sense_hear", "activityType": ActivityType.Senses,
        "options": [
            { "id": 490, "word": "kulak", "imageUrl": "/images/490.png", "isCorrect": true, "audioKey": "kulak", "spokenText": "kulak" },
            { "id": 564, "word": "g?z", "imageUrl": "/images/564.png", "isCorrect": false, "audioKey": "g?z", "spokenText": "g?z" }
        ],
        "questionItem": { "id": 72, "word": "davul", "imageUrl": "/images/72.png", "audioKeys": { "default": "davul" }, "tags": { "category": "" }}
    },
    {
        "id": 43, "question": "Bunu hangisiyle tadar?z?", "questionAudioKey": "q_which_sense_taste", "activityType": ActivityType.Senses,
        "options": [
            { "id": 558, "word": "dil", "imageUrl": "/images/558.png", "isCorrect": true, "audioKey": "dil", "spokenText": "dil" },
            { "id": 556, "word": "burun", "imageUrl": "/images/556.png", "isCorrect": false, "audioKey": "burun", "spokenText": "burun" }
        ],
        "questionItem": { "id": 43, "word": "elma", "imageUrl": "/images/43.png", "audioKeys": { "default": "elma" }, "tags": { "category": "" }}
    },
    {
        "id": 346, "question": "Bunu hangisiyle hissederiz?", "questionAudioKey": "q_which_sense_touch", "activityType": ActivityType.Senses,
        "options": [
            { "id": 285, "word": "el", "imageUrl": "/images/285.png", "isCorrect": true, "audioKey": "el", "spokenText": "el" },
            { "id": 564, "word": "g?z", "imageUrl": "/images/564.png", "isCorrect": false, "audioKey": "g?z", "spokenText": "g?z" }
        ],
        "questionItem": { "id": 346, "word": "g?l dal?", "imageUrl": "/images/346.png", "audioKeys": { "default": "g?l_dal?" }, "tags": { "category": "" } }
    },
    {
        "id": 74, "question": "Bunu hangisiyle g?r?r?z?", "questionAudioKey": "q_which_sense_see", "activityType": ActivityType.Senses,
        "options": [
            { "id": 564, "word": "g?z", "imageUrl": "/images/564.png", "isCorrect": true, "audioKey": "g?z", "spokenText": "g?z" },
            { "id": 490, "word": "kulak", "imageUrl": "/images/490.png", "isCorrect": false, "audioKey": "kulak", "spokenText": "kulak" }
        ],
        "questionItem": { "id": 74, "word": "el feneri", "imageUrl": "/images/74.png", "audioKeys": { "default": "el_feneri" }, "tags": { "category": "" } }
    }
];
