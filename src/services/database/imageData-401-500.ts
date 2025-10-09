import { ImageMetadata } from '../../types.ts';

export const imageData_401_500: ImageMetadata[] = [
  {
    "id": 401,
    "word": "resim",
    "imageUrl": "/images/401.png",
    "audioKeys": { "default": "resim", "concept": "sonra" },
    "tags": {
      "sequence": { "group": "resim-yapma", "order": 2 },
      "category": "nesne",
      "concept": ["önce-sonra"],
      "state": "sonra",
      "lifeform": "cansız",
      "syllables": ["re", "sim"],
      "letters": ["R", "E", "S", "İ", "M"]
    }
  },
  {
    "id": 402,
    "word": "boyama",
    "imageUrl": "/images/402.png",
    "audioKeys": { "default": "boyama", "concept": "önce" },
    "tags": {
      "sequence": { "group": "resim-yapma", "order": 1 },
      "category": "nesne",
      "concept": ["önce-sonra"],
      "state": "önce",
      "lifeform": "cansız",
      "syllables": ["bo", "ya", "ma"],
      "letters": ["B", "O", "Y", "A", "M", "A"]
    }
  },
  {
    "id": 403,
    "word": "hediye kutusu",
    "imageUrl": "/images/403.png",
    "audioKeys": { "default": "hediye_kutusu", "concept": "kapalı" },
    "tags": {
      "category": "nesne",
      "concept": ["açık-kapalı"],
      "state": "kapalı",
      "lifeform": "cansız",
      "syllables": ["he", "di", "ye", "ku", "tu", "su"],
      "letters": ["H", "E", "D", "İ", "Y", "E", "K", "U", "T", "U", "S", "U"]
    }
  },
  {
    "id": 404,
    "word": "takvim",
    "imageUrl": "/images/404.png",
    "audioKeys": { "default": "takvim" },
    "tags": {
      "category": "nesne",
      "lifeform": "cansız",
      "syllables": ["tak", "vim"],
      "letters": ["T", "A", "K", "V", "İ", "M"]
    }
  },
  {
    "id": 405,
    "word": "kar",
    "imageUrl": "/images/405.png",
    "audioKeys": { "default": "kar", "concept": "soğuk" },
    "pairGroupId": ["sicak-soguk-doga-1"],
    "tags": {
      "category": "doğa olayı",
      "concept": ["sıcak-soğuk"],
      "temperature": "soğuk",
      "lifeform": "cansız",
      "syllables": ["kar"],
      "letters": ["K", "A", "R"]
    }
  },
  {
    "id": 406,
    "word": "rüzgar",
    "imageUrl": "/images/406.png",
    "audioKeys": { "default": "rüzgar" },
    "tags": {
      "category": "doğa olayı",
      "lifeform": "cansız",
      "syllables": ["rüz", "gar"],
      "letters": ["R", "Ü", "Z", "G", "A", "R"]
    }
  },
  {
    "id": 407,
    "word": "şimşek",
    "imageUrl": "/images/407.png",
    "audioKeys": { "default": "şimşek" },
    "tags": {
      "category": "doğa olayı",
      "lifeform": "cansız",
      "syllables": ["şim", "şek"],
      "letters": ["Ş", "İ", "M", "Ş", "E", "K"]
    }
  },
  {
    "id": 408,
    "word": "göktaşı",
    "imageUrl": "/images/408.png",
    "audioKeys": { "default": "göktaşı" },
    "tags": {
      "syllables": ["gök", "ta", "şı"],
      "category": "uzay",
      "lifeform": "cansız",
      "letters": ["G", "Ö", "K", "T", "A", "Ş", "İ"]
    }
  },
  {
    "id": 409,
    "word": "peçete",
    "imageUrl": "/images/409.png",
    "audioKeys": { "default": "peçete", "concept": "ince" },
    "pairGroupId": ["ince-kalin-nesne-2"],
    "tags": {
      "category": "ev_esya",
      "concept": ["ince-kalın"],
      "thickness": "ince",
      "lifeform": "cansız",
      "syllables": ["pe", "çe", "te"],
      "letters": ["P", "E", "Ç", "E", "T", "E"]
    }
  },
  {
    "id": 410,
    "word": "havlu",
    "imageUrl": "/images/410.png",
    "audioKeys": { "default": "havlu", "concept": "kalın" },
    "pairGroupId": ["ince-kalin-nesne-2"],
    "tags": {
      "category": "none",
      "concept": ["ince-kalın"],
      "thickness": "kalın",
      "color": "mavi",
      "lifeform": "cansız",
      "syllables": ["hav", "lu"],
      "letters": ["H", "A", "V", "L", "U"]
    }
  },
  {
    "id": 411,
    "word": "ayakkabı",
    "imageUrl": "/images/411.png",
    "audioKeys": { "default": "ayakkabı", "concept": "düğüm" },
    "pairGroupId": "dugum-cozuk-ayakkabi-1",
    "tags": {
      "category": "none",
      "concept": ["düğüm-çözük", "tek-çift"],
      "state": "düğüm",
      "quantity_type": "çift",
      "lifeform": "cansız",
      "syllables": ["a", "yak", "ka", "bı"],
      "letters": ["A", "Y", "A", "K", "K", "A", "B", "İ"]
    }
  },
  {
    "id": 412,
    "word": "ayakkabı",
    "imageUrl": "/images/412.png",
    "audioKeys": { "default": "ayakkabı", "concept": "çözük" },
    "pairGroupId": ["dugum-cozuk-ayakkabi-1"],
    "tags": {
      "category": "none",
      "concept": ["düğüm-çözük", "tek-çift"],
      "state": "çözük",
      "quantity_type": "tek",
      "lifeform": "cansız",
      "syllables": ["a", "yak", "ka", "bı"],
      "letters": ["A", "Y", "A", "K", "K", "A", "B", "İ"]
    }
  },
  {
    "id": 413,
    "word": "trafik lambası",
    "imageUrl": "/images/413.png",
    "audioKeys": { "default": "trafik_lambası" },
    "pairGroupId": ["renk-trafik-lamba-1"],
    "tags": {
      "category": "nesne",
      "concept": ["renkler"],
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["tra", "fik", "lam", "ba", "sı"],
      "letters": ["T", "R", "A", "F", "İ", "K", "L", "A", "M", "B", "A", "S", "İ"]
    }
  },
  {
    "id": 414,
    "word": "trafik lambası",
    "imageUrl": "/images/414.png",
    "audioKeys": { "default": "trafik_lambası" },
    "pairGroupId": ["renk-trafik-lamba-1"],
    "tags": {
      "category": "nesne",
      "concept": ["renkler"],
      "color": "yeşil",
      "lifeform": "cansız",
      "syllables": ["tra", "fik", "lam", "ba", "sı"],
      "letters": ["T", "R", "A", "F", "İ", "K", "L", "A", "M", "B", "A", "S", "İ"]
    }
  },
  {
    "id": 415,
    "word": "tilki",
    "imageUrl": "/images/415.png",
    "audioKeys": { "default": "tilki" },
    "tags": {
      "category": "hayvan",
      "color": "turuncu",
      "lifeform": "canlı",
      "syllables": ["til", "ki"],
      "letters": ["T", "İ", "L", "K", "İ"]
    }
  },
  {
    "id": 416,
    "word": "geyik",
    "imageUrl": "/images/416.png",
    "audioKeys": { "default": "geyik" },
    "tags": {
      "category": "hayvan",
      "lifeform": "canlı",
      "syllables": ["ge", "yik"],
      "letters": ["G", "E", "Y", "İ", "K"]
    }
  },
  {
    "id": 417,
    "word": "sincap",
    "imageUrl": "/images/417.png",
    "audioKeys": { "default": "sincap", "concept": "tok" },
    "pairGroupId": ["ac-tok-sincap-1"],
    "tags": {
      "category": "hayvan",
      "concept": ["aç-tok"],
      "state": "tok",
      "lifeform": "canlı",
      "syllables": ["sin", "cap"],
      "letters": ["S", "İ", "N", "C", "A", "P"]
    }
  },
  {
    "id": 418,
    "word": "kirpi",
    "imageUrl": "/images/418.png",
    "audioKeys": { "default": "kirpi", "concept": "dikenli" },
    "pairGroupId": ["dikenli-puruzsuz-hayvan-1", "sivri-kut-hayvan-1"],
    "tags": {
      "syllables": ["kir", "pi"],
      "category": "hayvan",
      "concept": ["dikenli-pürüzsüz", "sivri-küt"],
      "lifeform": "canlı",
      "letters": ["K", "İ", "R", "P", "İ"],
      "texture": "dikenli",
      "quality": "sivri"
    }
  },
  {
    "id": 419,
    "word": "mandalina",
    "imageUrl": "/images/419.png",
    "audioKeys": { "default": "mandalina" },
    "tags": {
      "category": "meyve",
      "color": "turuncu",
      "lifeform": "canlı",
      "syllables": ["man", "da", "li", "na"],
      "letters": ["M", "A", "N", "D", "A", "L", "İ", "N", "A"]
    }
  },
  {
    "id": 420,
    "word": "ıspanak",
    "imageUrl": "/images/420.png",
    "audioKeys": { "default": "ıspanak" },
    "tags": {
      "category": "sebze",
      "lifeform": "canlı",
      "syllables": ["ıs", "pa", "nak"],
      "letters": ["İ", "S", "P", "A", "N", "A", "K"]
    }
  },
  {
    "id": 421,
    "word": "pırasa",
    "imageUrl": "/images/421.png",
    "audioKeys": { "default": "pırasa" },
    "tags": {
      "category": "sebze",
      "lifeform": "canlı",
      "syllables": ["pı", "ra", "sa"],
      "letters": ["P", "İ", "R", "A", "S", "A"]
    }
  },
  {
    "id": 422,
    "word": "tuvalet",
    "imageUrl": "/images/422.png",
    "audioKeys": { "default": "tuvalet" },
    "tags": {
      "category": "banyo",
      "lifeform": "cansız",
      "syllables": ["tu", "va", "let"],
      "letters": ["T", "U", "V", "A", "L", "E", "T"]
    }
  },
  {
    "id": 423,
    "word": "lavabo",
    "imageUrl": "/images/423.png",
    "audioKeys": { "default": "lavabo" },
    "tags": {
      "category": "banyo",
      "lifeform": "cansız",
      "syllables": ["la", "va", "bo"],
      "letters": ["L", "A", "V", "A", "B", "O"]
    }
  },
  {
    "id": 424,
    "word": "küvet",
    "imageUrl": "/images/424.png",
    "audioKeys": { "default": "küvet" },
    "tags": {
      "category": "banyo",
      "lifeform": "cansız",
      "syllables": ["kü", "vet"],
      "letters": ["K", "Ü", "V", "E", "T"]
    }
  },
  {
    "id": 425,
    "word": "diş macunu",
    "imageUrl": "/images/425.png",
    "audioKeys": { "default": "diş_macunu" },
    "tags": {
      "category": "banyo",
      "lifeform": "cansız",
      "syllables": ["diş", "ma", "cu", "nu"],
      "letters": ["D", "İ", "Ş", "M", "A", "C", "U", "N", "U"]
    }
  },
  {
    "id": 426,
    "word": "şampuan",
    "imageUrl": "/images/426.png",
    "audioKeys": { "default": "şampuan" },
    "tags": {
      "category": "banyo",
      "lifeform": "cansız",
      "syllables": ["şam", "pu", "an"],
      "letters": ["Ş", "A", "M", "P", "U", "A", "N"]
    }
  },
  {
    "id": 427,
    "word": "düdük",
    "imageUrl": "/images/427.png",
    "audioKeys": { "default": "düdük" },
    "tags": {
      "category": "oyuncak",
      "concept": ["duyular"],
      "sense": "ses",
      "sound": "gürültülü",
      "lifeform": "cansız",
      "syllables": ["dü", "dük"],
      "letters": ["D", "Ü", "D", "Ü", "K"]
    }
  },
  {
    "id": 428,
    "word": "zil",
    "imageUrl": "/images/428.png",
    "audioKeys": { "default": "zil" },
    "tags": {
      "category": "muzik_aleti",
      "lifeform": "cansız",
      "syllables": ["zil"],
      "letters": ["Z", "İ", "L"]
    }
  },
  {
    "id": 429,
    "word": "tef",
    "imageUrl": "/images/429.png",
    "audioKeys": { "default": "tef" },
    "tags": {
      "category": "muzik_aleti",
      "lifeform": "cansız",
      "syllables": ["tef"],
      "letters": ["T", "E", "F"]
    }
  },
  {
    "id": 430,
    "word": "bank",
    "imageUrl": "/images/430.png",
    "audioKeys": { "default": "bank" },
    "tags": {
      "category": "yer",
      "lifeform": "cansız",
      "syllables": ["bank"],
      "letters": ["B", "A", "N", "K"]
    }
  },
  {
    "id": 431,
    "word": "posta kutusu",
    "imageUrl": "/images/431.png",
    "audioKeys": { "default": "posta_kutusu" },
    "tags": {
      "category": "nesne",
      "concept": ["şekiller"],
      "shape": "dikdörtgen",
      "lifeform": "cansız",
      "syllables": ["pos", "ta", "ku", "tu", "su"],
      "letters": ["P", "O", "S", "T", "A", "K", "U", "T", "U", "S", "U"]
    }
  },
  {
    "id": 432,
    "word": "saksı",
    "imageUrl": "/images/432.png",
    "audioKeys": { "default": "saksı", "concept": "boş" },
    "pairGroupId": ["dolu-bos-saksi-1", "parlak-mat-saksi-1"],
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş", "parlak-mat"],
      "fullness": "boş",
      "texture": "mat",
      "lifeform": "cansız",
      "syllables": ["sak", "sı"],
      "letters": ["S", "A", "K", "S", "İ"]
    }
  },
  {
    "id": 433,
    "word": "saksı",
    "imageUrl": "/images/433.png",
    "audioKeys": { "default": "saksı", "concept": "dolu" },
    "pairGroupId": "dolu-bos-saksi-1",
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş"],
      "fullness": "dolu",
      "lifeform": "cansız",
      "syllables": ["sak", "sı"],
      "letters": ["S", "A", "K", "S", "İ"]
    }
  },
  {
    "id": 434,
    "word": "çim",
    "imageUrl": "/images/434.png",
    "audioKeys": { "default": "çim", "concept": "kısa" },
    "pairGroupId": ["uzun-kisa-cim-1", "sert-yumusak-zemin-1"],
    "tags": {
      "category": "bitki",
      "concept": ["uzun-kısa", "sert-yumuşak"],
      "length": "kısa",
      "texture": "yumuşak",
      "color": "yeşil",
      "lifeform": "canlı",
      "syllables": ["çim"],
      "letters": ["Ç", "İ", "M"]
    }
  },
  {
    "id": 435,
    "word": "çim",
    "imageUrl": "/images/435.png",
    "audioKeys": { "default": "çim", "concept": "uzun" },
    "pairGroupId": "uzun-kisa-cim-1",
    "tags": {
      "category": "bitki",
      "concept": ["uzun-kısa"],
      "length": "uzun",
      "lifeform": "canlı",
      "syllables": ["çim"],
      "letters": ["Ç", "İ", "M"]
    }
  },
  {
    "id": 436,
    "word": "radyo",
    "imageUrl": "/images/436.png",
    "audioKeys": { "default": "radyo" },
    "tags": {
      "category": "ev_esya",
      "concept": ["duyular"],
      "sense": "ses",
      "lifeform": "cansız",
      "syllables": ["rad", "yo"],
      "letters": ["R", "A", "D", "Y", "O"]
    }
  },
  {
    "id": 437,
    "word": "baston",
    "imageUrl": "/images/437.png",
    "audioKeys": { "default": "baston" },
    "tags": {
      "category": "nesne",
      "lifeform": "cansız",
      "syllables": ["bas", "ton"],
      "letters": ["B", "A", "S", "T", "O", "N"]
    }
  },
  {
    "id": 438,
    "word": "halı",
    "imageUrl": "/images/438.png",
    "audioKeys": { "default": "halı", "concept": "kirli" },
    "pairGroupId": "temiz-kirli-hali-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["temiz-kirli", "şekiller"],
      "quality": ["kirli"],
      "lifeform": "cansız",
      "syllables": ["ha", "lı"],
      "letters": ["H", "A", "L", "İ"]
    }
  },
  {
    "id": 439,
    "word": "halı",
    "imageUrl": "/images/439.png",
    "audioKeys": { "default": "halı", "concept": "temiz" },
    "pairGroupId": ["temiz-kirli-hali-1", "kirisik-duzgun-hali-1"],
    "tags": {
      "category": "ev_esya",
      "concept": ["temiz-kirli", "kırışık-düzgün"],
      "quality": ["temiz", "düzgün"],
      "lifeform": "cansız",
      "syllables": ["ha", "lı"],
      "letters": ["H", "A", "L", "İ"]
    }
  },
  {
    "id": 440,
    "word": "kardan adam",
    "imageUrl": "/images/440.png",
    "audioKeys": { "default": "kardan_adam", "concept": "soğuk" },
    "pairGroupId": "sicak-soguk-doga-1",
    "tags": {
      "category": "insan",
      "concept": ["sıcak-soğuk"],
      "temperature": "soğuk",
      "lifeform": "cansız",
      "syllables": ["kar", "dan", "a", "dam"],
      "letters": ["K", "A", "R", "D", "A", "N", "A", "D", "A", "M"]
    }
  },
  {
    "id": 441,
    "word": "diş fırçası",
    "imageUrl": "/images/441.png",
    "audioKeys": { "default": "diş_fırçası" },
    "tags": {
      "syllables": ["diş", "fır", "ça", "sı"],
      "category": "banyo",
      "lifeform": "cansız",
      "letters": ["D", "İ", "Ş", "F", "İ", "R", "Ç", "A", "S", "İ"]
    }
  },
  {
    "id": 442,
    "word": "tohum",
    "imageUrl": "/images/442.png",
    "audioKeys": { "default": "tohum", "concept": "önce" },
    "tags": {
      "sequence": { "group": "tohum-cicek", "order": 1 },
      "category": "bitki",
      "concept": ["önce-sonra"],
      "state": "önce",
      "lifeform": "canlı",
      "syllables": ["to", "hum"],
      "letters": ["T", "O", "H", "U", "M"]
    }
  },
  {
    "id": 443,
    "word": "çiçek",
    "imageUrl": "/images/443.png",
    "audioKeys": { "default": "çiçek", "concept": "sonra" },
    "tags": {
      "sequence": { "group": "tohum-cicek", "order": 2 },
      "category": "bitki",
      "concept": ["önce-sonra"],
      "state": "sonra",
      "lifeform": "canlı",
      "syllables": ["çi", "çek"],
      "letters": ["Ç", "İ", "Ç", "E", "K"]
    }
  },
  {
    "id": 444,
    "word": "palmiye ağacı",
    "imageUrl": "/images/444.png",
    "audioKeys": { "default": "palmiye_ağacı" },
    "tags": {
      "category": "bitki",
      "lifeform": "canlı",
      "syllables": ["pal", "mi", "ye", "a", "ğa", "cı"],
      "letters": ["P", "A", "L", "M", "İ", "Y", "E", "A", "Ğ", "A", "C", "İ"]
    }
  },
  {
    "id": 445,
    "word": "tırtıl",
    "imageUrl": "/images/445.png",
    "audioKeys": { "default": "tırtıl", "concept": "önce" },
    "pairGroupId": ["uzun-kisa-hayvan-4"],
    "tags": {
      "sequence": { "group": "tirtil-kelebek", "order": 1 },
      "category": "hayvan",
      "concept": ["önce-sonra", "uzun-kısa"],
      "state": "önce",
      "length": "kısa",
      "lifeform": "canlı",
      "syllables": ["tır", "tıl"],
      "letters": ["T", "İ", "R", "T", "İ", "L"]
    }
  },
  {
    "id": 446,
    "word": "kavanoz",
    "imageUrl": "/images/446.png",
    "audioKeys": { "default": "kavanoz", "concept": "dolu" },
    "pairGroupId": "dolu-bos-kavanoz-1",
    "tags": {
      "category": "none",
      "concept": ["dolu-boş"],
      "fullness": "dolu",
      "lifeform": "cansız",
      "syllables": ["ka", "va", "noz"],
      "letters": ["K", "A", "V", "A", "N", "O", "Z"]
    }
  },
  {
    "id": 447,
    "word": "kavanoz",
    "imageUrl": "/images/447.png",
    "audioKeys": { "default": "kavanoz", "concept": "boş" },
    "pairGroupId": ["dolu-bos-kavanoz-1", "seffaf-opak-nesne-3"],
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş", "şeffaf-opak"],
      "fullness": "boş",
      "quality": ["şeffaf"],
      "lifeform": "cansız",
      "syllables": ["ka", "va", "noz"],
      "letters": ["K", "A", "V", "A", "N", "O", "Z"]
    }
  },
  {
    "id": 448,
    "word": "sepet",
    "imageUrl": "/images/448.png",
    "audioKeys": { "default": "sepet", "concept": "dolu" },
    "pairGroupId": ["dolu-bos-sepet-1", "derin-sig-sepet-1"],
    "tags": {
      "category": "none",
      "concept": ["dolu-boş", "derin-sığ"],
      "fullness": "dolu",
      "depth": "derin",
      "lifeform": "cansız",
      "syllables": ["se", "pet"],
      "letters": ["S", "E", "P", "E", "T"]
    }
  },
  {
    "id": 449,
    "word": "sepet",
    "imageUrl": "/images/449.png",
    "audioKeys": { "default": "sepet", "concept": "boş" },
    "pairGroupId": "dolu-bos-sepet-1",
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş"],
      "fullness": "boş",
      "lifeform": "cansız",
      "syllables": ["se", "pet"],
      "letters": ["S", "E", "P", "E", "T"]
    }
  },
  {
    "id": 450,
    "word": "çocuk",
    "imageUrl": "/images/450.png",
    "audioKeys": { "default": "çocuk", "concept": "arkasında" },
    "pairGroupId": "onunde-arkasinda-cocuk-agac-1",
    "tags": {
      "category": "none",
      "concept": ["önünde-arkasında"],
      "position": "arkasında",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk"],
      "letters": ["Ç", "O", "C", "U", "K"]
    }
  },
   {
    "id": 451,
    "word": "çocuk",
    "imageUrl": "/images/451.png",
    "audioKeys": { "default": "çocuk", "concept": "önünde" },
    "pairGroupId": "onunde-arkasinda-cocuk-agac-1",
    "tags": {
      "category": "insan",
      "concept": ["önünde-arkasında"],
      "position": "önünde",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk"],
      "letters": ["Ç", "O", "C", "U", "K"]
    }
  },
  {
    "id": 452,
    "word": "araba",
    "imageUrl": "/images/452.png",
    "audioKeys": { "default": "araba", "concept": "önünde" },
    "pairGroupId": "onunde-arkasinda-araba-ev-1",
    "tags": {
      "category": "none",
      "concept": ["önünde-arkasında"],
      "position": "önünde",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 453,
    "word": "araba",
    "imageUrl": "/images/453.png",
    "audioKeys": { "default": "araba", "concept": "arkasında" },
    "pairGroupId": "onunde-arkasinda-araba-ev-1",
    "tags": {
      "category": "none",
      "concept": ["önünde-arkasında"],
      "position": "arkasında",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 454,
    "word": "çocuklar",
    "imageUrl": "/images/454.png",
    "audioKeys": { "default": "çocuklar", "concept": "karşısında" },
    "pairGroupId": "yaninda-karsisinda-cocuklar-1",
    "tags": {
      "category": "insan",
      "concept": ["yanında-karşısında"],
      "position": "karşısında",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk", "lar"],
      "letters": ["Ç", "O", "C", "U", "K", "L", "A", "R"]
    }
  },
  {
    "id": 455,
    "word": "çocuklar",
    "imageUrl": "/images/455.png",
    "audioKeys": { "default": "çocuklar", "concept": "yanında" },
    "pairGroupId": "yaninda-karsisinda-cocuklar-1",
    "tags": {
      "category": "insan",
      "concept": ["yanında-karşısında"],
      "position": "yanında",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk", "lar"],
      "letters": ["Ç", "O", "C", "U", "K", "L", "A", "R"]
    }
  },
  {
    "id": 456,
    "word": "binalar",
    "imageUrl": "/images/456.png",
    "audioKeys": { "default": "binalar", "concept": "arasında" },
    "pairGroupId": "arasinda-yaninda-ev-1",
    "tags": {
      "category": "bina",
      "concept": ["arasında-yanında"],
      "position": "arasında",
      "lifeform": "cansız",
      "syllables": ["bi", "na", "lar"],
      "letters": ["B", "İ", "N", "A", "L", "A", "R"]
    }
  },
  {
    "id": 457,
    "word": "binalar",
    "imageUrl": "/images/457.png",
    "audioKeys": { "default": "binalar", "concept": "yanında" },
    "pairGroupId": "arasinda-yaninda-ev-1",
    "tags": {
      "category": "bina",
      "concept": ["arasında-yanında"],
      "position": "yanında",
      "lifeform": "cansız",
      "syllables": ["bi", "na", "lar"],
      "letters": ["B", "İ", "N", "A", "L", "A", "R"]
    }
  },
  {
    "id": 458,
    "word": "çocuk",
    "imageUrl": "/images/458.png",
    "audioKeys": { "default": "çocuk" },
    "tags": {
      "category": "insan",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk"],
      "letters": ["Ç", "O", "C", "U", "K"]
    }
  },
  {
    "id": 459,
    "word": "çiçekler",
    "imageUrl": "/images/459.png",
    "audioKeys": { "default": "çiçekler", "concept": "az" },
    "pairGroupId": "az-cok-cicek-1",
    "tags": {
      "category": "bitki",
      "concept": ["az-çok"],
      "quantity": "az",
      "lifeform": "canlı",
      "syllables": ["çi", "çek", "ler"],
      "letters": ["Ç", "İ", "Ç", "E", "K", "L", "E", "R"]
    }
  },
  {
    "id": 460,
    "word": "koyun",
    "imageUrl": "/images/460.png",
    "audioKeys": { "default": "koyun", "concept": "yaşlı" },
    "pairGroupId": "yasli-genc-koyun-1",
    "tags": {
      "category": "hayvan",
      "concept": ["yaşlı-genç"],
      "age": "yaşlı",
      "lifeform": "canlı",
      "syllables": ["ko", "yun"],
      "letters": ["K", "O", "Y", "U", "N"]
    }
  },
  {
    "id": 461,
    "word": "keçi",
    "imageUrl": "/images/461.png",
    "audioKeys": { "default": "keçi" },
    "tags": {
      "category": "hayvan",
      "lifeform": "canlı",
      "syllables": ["ke", "çi"],
      "letters": ["K", "E", "Ç", "İ"]
    }
  },
  {
    "id": 462,
    "word": "kuzu",
    "imageUrl": "/images/462.png",
    "audioKeys": { "default": "kuzu", "concept": "genç" },
    "pairGroupId": "yasli-genc-koyun-1",
    "tags": {
      "category": "hayvan",
      "concept": ["yaşlı-genç"],
      "age": "genç",
      "lifeform": "canlı",
      "syllables": ["ku", "zu"],
      "letters": ["K", "U", "Z", "U"]
    }
  },
  {
    "id": 463,
    "word": "armut",
    "imageUrl": "/images/463.png",
    "audioKeys": { "default": "armut" },
    "tags": {
      "category": "none",
      "lifeform": "canlı",
      "syllables": ["ar", "mut"],
      "letters": ["A", "R", "M", "U", "T"]
    }
  },
  {
    "id": 464,
    "word": "akıllı telefon",
    "imageUrl": "/images/464.png",
    "audioKeys": { "default": "akıllı_telefon", "concept": "yeni" },
    "pairGroupId": "eski-yeni-telefon-1",
    "tags": {
      "category": "nesne",
      "concept": ["eski-yeni", "sağlam-kırık"],
      "condition": "yeni",
      "quality": "sağlam",
      "shape": "dikdörtgen",
      "lifeform": "cansız",
      "syllables": ["a", "kıl", "lı", "te", "le", "fon"],
      "letters": ["A", "K", "I", "L", "L", "I", "T", "E", "L", "E", "F", "O", "N"]
    }
  },
  {
    "id": 465,
    "word": "akıllı telefon",
    "imageUrl": "/images/465.png",
    "audioKeys": { "default": "akıllı_telefon", "concept": "eski" },
    "pairGroupId": "eski-yeni-telefon-1",
    "tags": {
      "category": "nesne",
      "concept": ["eski-yeni", "sağlam-kırık"],
      "condition": "eski",
      "quality": "kırık",
      "shape": "dikdörtgen",
      "lifeform": "cansız",
      "syllables": ["a", "kıl", "lı", "te", "le", "fon"],
      "letters": ["A", "K", "I", "L", "L", "I", "T", "E", "L", "E", "F", "O", "N"]
    }
  },
  {
    "id": 466,
    "word": "mum",
    "imageUrl": "/images/466.png",
    "audioKeys": { "default": "mum", "concept": "ince" },
    "pairGroupId": ["ince-kalin-mum-1", "sicak-soguk-esya-1"],
    "tags": {
      "category": "none",
      "concept": ["ince-kalın", "sıcak-soğuk"],
      "thickness": "ince",
      "temperature": "sıcak",
      "lifeform": "cansız",
      "syllables": ["mum"],
      "letters": ["M", "U", "M"]
    }
  },
  {
    "id": 467,
    "word": "fırça",
    "imageUrl": "/images/467.png",
    "audioKeys": { "default": "fırça", "concept": "ince" },
    "pairGroupId": ["ince-kalin-firca-1", "genis-dar-firca-1"],
    "tags": {
      "category": "none",
      "concept": ["ince-kalın", "geniş-dar"],
      "thickness": "ince",
      "width": "dar",
      "lifeform": "cansız",
      "syllables": ["fır", "ça"],
      "letters": ["F", "İ", "R", "Ç", "A"]
    }
  },
  {
    "id": 468,
    "word": "meyve suyu",
    "imageUrl": "/images/468.png",
    "audioKeys": { "default": "meyve_suyu", "concept": "dolu" },
    "pairGroupId": "dolu-bos-bardak-2",
    "tags": {
      "category": "yiyecek",
      "concept": ["dolu-boş"],
      "fullness": "dolu",
      "lifeform": "cansız",
      "syllables": ["mey", "ve", "su", "yu"],
      "letters": ["M", "E", "Y", "V", "E", "S", "U", "Y", "U"]
    }
  },
  {
    "id": 469,
    "word": "bardak",
    "imageUrl": "/images/469.png",
    "audioKeys": { "default": "bardak", "concept": "boş" },
    "pairGroupId": "dolu-bos-bardak-2",
    "tags": {
      "category": "none",
      "concept": ["dolu-boş"],
      "fullness": "boş",
      "lifeform": "cansız",
      "syllables": ["bar", "dak"],
      "letters": ["B", "A", "R", "D", "A", "K"]
    }
  },
  {
    "id": 470,
    "word": "çocuk havuzu",
    "imageUrl": "/images/470.png",
    "audioKeys": { "default": "çocuk_havuzu", "concept": "dolu" },
    "pairGroupId": ["dolu-bos-havuz-1", "islak-kuru-havuz-1"],
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş", "ıslak-kuru"],
      "fullness": "dolu",
      "state": "ıslak",
      "lifeform": "cansız",
      "syllables": ["ço", "cuk", "ha", "vu", "zu"],
      "letters": ["Ç", "O", "C", "U", "K", "H", "A", "V", "U", "Z", "U"]
    }
  },
  {
    "id": 471,
    "word": "çocuk havuzu",
    "imageUrl": "/images/471.png",
    "audioKeys": { "default": "çocuk_havuzu", "concept": "boş" },
    "pairGroupId": ["dolu-bos-havuz-1", "islak-kuru-havuz-1", "derin-sig-doga-1"],
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş", "ıslak-kuru", "derin-sığ"],
      "fullness": "boş",
      "state": "kuru",
      "depth": "sığ",
      "lifeform": "cansız",
      "syllables": ["ço", "cuk", "ha", "vu", "zu"],
      "letters": ["Ç", "O", "C", "U", "K", "H", "A", "V", "U", "Z", "U"]
    }
  },
  {
    "id": 472,
    "word": "kitap",
    "imageUrl": "/images/472.png",
    "audioKeys": { "default": "kitap", "concept": "üstünde" },
    "pairGroupId": "ustunde-altinda-kitap-masa-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "üstünde",
      "color": "mavi",
      "lifeform": "cansız",
      "syllables": ["ki", "tap"],
      "letters": ["K", "İ", "T", "A", "P"]
    }
  },
  {
    "id": 473,
    "word": "kitap",
    "imageUrl": "/images/473.png",
    "audioKeys": { "default": "kitap", "concept": "altında" },
    "pairGroupId": "ustunde-altinda-kitap-masa-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "altında",
      "lifeform": "cansız",
      "syllables": ["ki", "tap"],
      "letters": ["K", "İ", "T", "A", "P"]
    }
  },
  {
    "id": 474,
    "word": "elmalar",
    "imageUrl": "/images/474.png",
    "audioKeys": { "default": "elmalar", "concept": "içinde" },
    "pairGroupId": "icinde-disinda-elma-sepet-1",
    "tags": {
      "category": "none",
      "concept": ["içinde-dışında"],
      "position": "içinde",
      "lifeform": "canlı",
      "syllables": ["el", "ma", "lar"],
      "letters": ["E", "L", "M", "A", "L", "A", "R"]
    }
  },
  {
    "id": 475,
    "word": "none",
    "imageUrl": "/images/475.png",
    "audioKeys": { "default": "elmalar", "concept": "dışında" },
    "pairGroupId": "icinde-disinda-elma-sepet-1",
    "tags": {
      "category": "meyve",
      "concept": ["içinde-dışında"],
      "position": "dışında",
      "lifeform": "canlı",
      "syllables": ["el", "ma", "lar"],
      "letters": ["E", "L", "M", "A", "L", "A", "R"]
    }
  },
  {
    "id": 476,
    "word": "aile",
    "imageUrl": "/images/476.png",
    "audioKeys": { "default": "aile", "concept": "arasında" },
    "pairGroupId": "arasinda-yaninda-aile-1",
    "tags": {
      "syllables": ["a", "i", "le"],
      "category": "insan",
      "concept": ["arasında-yanında"],
      "lifeform": "canlı",
      "letters": ["A", "İ", "L", "E"],
      "position": "arasında"
    }
  },
  {
    "id": 477,
    "word": "aile",
    "imageUrl": "/images/477.png",
    "audioKeys": { "default": "aile", "concept": "yanında" },
    "pairGroupId": ["arasinda-yaninda-aile-1"],
    "tags": {
      "category": "insan",
      "concept": ["arasında-yanında"],
      "position": "yanında",
      "lifeform": "canlı",
      "syllables": ["a", "i", "le"],
      "letters": ["A", "İ", "L", "E"]
    }
  },
  {
    "id": 478,
    "word": "yastık",
    "imageUrl": "/images/478.png",
    "audioKeys": { "default": "yastık", "concept": "altında" },
    "pairGroupId": "ustunde-altinda-yastik-yatak-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "altında",
      "lifeform": "cansız",
      "syllables": ["yas", "tık"],
      "letters": ["Y", "A", "S", "T", "I", "K"]
    }
  },
  {
    "id": 479,
    "word": "gözler",
    "imageUrl": "/images/479.png",
    "audioKeys": { "default": "gözler", "concept": "çift" },
    "pairGroupId": "tek-cift-goz-1",
    "tags": {
      "category": "vücut",
      "concept": ["tek-çift", "duyular"],
      "quantity_type": "çift",
      "sense": "görme",
      "lifeform": "canlı",
      "syllables": ["göz", "ler"],
      "letters": ["G", "Ö", "Z", "L", "E", "R"]
    }
  },
  {
    "id": 480,
    "word": "yapboz",
    "imageUrl": "/images/480.png",
    "audioKeys": { "default": "yapboz", "concept": "sonra" },
    "tags": {
      "sequence": { "group": "yapboz", "order": 2 },
      "category": "oyuncak",
      "concept": ["önce-sonra"],
      "state": "sonra",
      "lifeform": "cansız",
      "syllables": ["yap", "boz"],
      "letters": ["Y", "A", "P", "B", "O", "Z"]
    }
  },
  {
    "id": 481,
    "word": "yapboz",
    "imageUrl": "/images/481.png",
    "audioKeys": { "default": "yapboz", "concept": "önce" },
    "tags": {
      "sequence": { "group": "yapboz", "order": 1 },
      "category": "oyuncak",
      "concept": ["önce-sonra"],
      "state": "önce",
      "lifeform": "cansız",
      "syllables": ["yap", "boz"],
      "letters": ["Y", "A", "P", "B", "O", "Z"]
    }
  },
  {
    "id": 482,
    "word": "yastık",
    "imageUrl": "/images/482.png",
    "audioKeys": { "default": "yastık", "concept": "üstünde" },
    "pairGroupId": "ustunde-altinda-yastik-yatak-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "üstünde",
      "lifeform": "cansız",
      "syllables": ["yas", "tık"],
      "letters": ["Y", "A", "S", "T", "I", "K"]
    }
  },
  {
    "id": 483,
    "word": "çiçek buketi",
    "imageUrl": "/images/483.png",
    "audioKeys": { "default": "çiçek_buketi", "concept": "çok" },
    "pairGroupId": "az-cok-cicek-1",
    "tags": {
      "category": "bitki",
      "concept": ["az-çok"],
      "quantity": "çok",
      "lifeform": "canlı",
      "syllables": ["çi", "çek", "bu", "ke", "ti"],
      "letters": ["Ç", "İ", "Ç", "E", "K", "B", "U", "K", "E", "T", "İ"]
    }
  },
  {
    "id": 484,
    "word": "adam",
    "imageUrl": "/images/484.png",
    "audioKeys": { "default": "adam", "concept": "arkasında" },
    "pairGroupId": "onunde-arkasinda-adam-kapi-1",
    "tags": {
      "category": "insan",
      "concept": ["önünde-arkasında"],
      "position": "arkasında",
      "lifeform": "canlı",
      "syllables": ["a", "dam"],
      "letters": ["A", "D", "A", "M"]
    }
  },
  {
    "id": 485,
    "word": "adam",
    "imageUrl": "/images/485.png",
    "audioKeys": { "default": "adam", "concept": "önünde" },
    "pairGroupId": "onunde-arkasinda-adam-kapi-1",
    "tags": {
      "category": "insan",
      "concept": ["önünde-arkasında"],
      "position": "önünde",
      "lifeform": "canlı",
      "syllables": ["a", "dam"],
      "letters": ["A", "D", "A", "M"]
    }
  },
  {
    "id": 486,
    "word": "pasta dilimi",
    "imageUrl": "/images/486.png",
    "audioKeys": { "default": "pasta dilimi", "concept": "çeyrek" },
    "pairGroupId": ["butun-yarim-ceyrek-pasta-1", "ustunde-altinda-kiraz-pasta-1"],
    "tags": {
      "syllables": ["pas", "ta", "di", "li", "mi"],
      "category": "yiyecek",
      "concept": ["bütün-yarım-çeyrek", "üstünde-altında"],
      "lifeform": "cansız",
      "letters": ["P", "A", "S", "T", "A", "D", "İ", "L", "İ", "M", "İ"],
      "fraction": "çeyrek",
      "position": "üstünde"
    }
  },
  {
    "id": 487,
    "word": "çöp kovası",
    "imageUrl": "/images/487.png",
    "audioKeys": { "default": "çöp_kovası", "concept": "boş" },
    "pairGroupId": "dolu-bos-cop-kutusu-1",
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş"],
      "fullness": "boş",
      "lifeform": "cansız",
      "syllables": ["çöp", "ko", "va", "sı"],
      "letters": ["Ç", "Ö", "P", "K", "O", "V", "A", "S", "İ"]
    }
  },
  {
    "id": 488,
    "word": "saç",
    "imageUrl": "/images/488.png",
    "audioKeys": { "default": "saç", "concept": "kısa" },
    "pairGroupId": "uzun-kisa-sac-1",
    "tags": {
      "category": "vücut",
      "concept": ["uzun-kısa"],
      "length": "kısa",
      "lifeform": "canlı",
      "syllables": ["saç"],
      "letters": ["S", "A", "Ç"]
    }
  },
  {
    "id": 489,
    "word": "sincap",
    "imageUrl": "/images/489.png",
    "audioKeys": { "default": "sincap", "concept": "aç" },
    "pairGroupId": "ac-tok-sincap-1",
    "tags": {
      "category": "none",
      "concept": ["aç-tok"],
      "state": "aç",
      "lifeform": "canlı",
      "syllables": ["sin", "cap"],
      "letters": ["S", "İ", "N", "C", "A", "P"]
    }
  },
  {
    "id": 490,
    "word": "kulak",
    "imageUrl": "/images/490.png",
    "audioKeys": { "default": "kulak" },
    "tags": {
      "category": "vücut",
      "concept": ["duyular"],
      "sense": "ses",
      "lifeform": "canlı",
      "syllables": ["ku", "lak"],
      "letters": ["K", "U", "L", "A", "K"]
    }
  },
  {
    "id": 491,
    "word": "balina",
    "imageUrl": "/images/491.png",
    "audioKeys": { "default": "balina", "concept": "ağır" },
    "pairGroupId": ["agir-hafif-hayvan-3", "buyuk-kucuk-hayvan-2"],
    "tags": {
      "syllables": ["ba", "li", "na"],
      "category": "hayvan",
      "concept": ["ağır-hafif", "büyük-küçük"],
      "lifeform": "canlı",
      "letters": ["B", "A", "L", "İ", "N", "A"],
      "weight": "ağır",
      "size": "büyük"
    }
  },
  {
    "id": 492,
    "word": "gemi",
    "imageUrl": "/images/492.png",
    "audioKeys": { "default": "gemi", "concept": "büyük" },
    "pairGroupId": ["buyuk-kucuk-tasit-4", "hizli-yavas-tasit-1"],
    "tags": {
      "category": "none",
      "concept": ["büyük-küçük", "hızlı-yavaş"],
      "size": "büyük",
      "speed": "hızlı",
      "lifeform": "cansız",
      "syllables": ["ge", "mi"],
      "letters": ["G", "E", "M", "İ"]
    }
  },
  {
    "id": 493,
    "word": "sandal",
    "imageUrl": "/images/493.gif",
    "audioKeys": { "default": "sandal", "concept": "küçük" },
    "pairGroupId": ["buyuk-kucuk-tasit-4", "hizli-yavas-tasit-3"],
    "tags": {
      "category": "taşıt",
      "concept": ["büyük-küçük", "hızlı-yavaş"],
      "size": "küçük",
      "speed": "yavaş",
      "lifeform": "cansız",
      "syllables": ["san", "dal"],
      "letters": ["S", "A", "N", "D", "A", "L"]
    }
  },
  {
    "id": 494,
    "word": "merdiven",
    "imageUrl": "/images/494.png",
    "audioKeys": { "default": "merdiven", "concept": "uzun" },
    "pairGroupId": ["uzun-kisa-nesne-2", "yuksek-alcak-nesne-1"],
    "tags": {
      "category": "none",
      "concept": ["uzun-kısa", "yüksek-alçak"],
      "length": "uzun",
      "height": "yüksek",
      "lifeform": "cansız",
      "syllables": ["mer", "di", "ven"],
      "letters": ["M", "E", "R", "D", "İ", "V", "E", "N"]
    }
  },
  {
    "id": 495,
    "word": "tabure",
    "imageUrl": "/images/495.png",
    "audioKeys": { "default": "tabure", "concept": "kısa" },
    "pairGroupId": ["uzun-kisa-nesne-2", "yuksek-alcak-nesne-1"],
    "tags": {
      "category": "nesne",
      "concept": ["uzun-kısa", "yüksek-alçak"],
      "length": "kısa",
      "height": "alçak",
      "lifeform": "cansız",
      "syllables": ["ta", "bu", "re"],
      "letters": ["T", "A", "B", "U", "R", "E"]
    }
  },
  {
    "id": 496,
    "word": "çekiç",
    "imageUrl": "/images/496.png",
    "audioKeys": { "default": "çekiç", "concept": "sert" },
    "pairGroupId": "sert-yumusak-oyuncak-1",
    "tags": {
      "category": "tamir_aleti",
      "concept": ["sert-yumuşak"],
      "texture": "sert",
      "lifeform": "cansız",
      "syllables": ["çe", "kiç"],
      "letters": ["Ç", "E", "K", "İ", "Ç"]
    }
  },
  {
    "id": 497,
    "word": "okul",
    "imageUrl": "/images/497.png",
    "audioKeys": { "default": "okul" },
    "tags": {
      "category": "bina",
      "lifeform": "cansız",
      "syllables": ["o", "kul"],
      "letters": ["O", "K", "U", "L"]
    }
  },
  {
    "id": 498,
    "word": "nar",
    "imageUrl": "/images/498.png",
    "audioKeys": { "default": "nar" },
    "tags": {
      "category": "meyve",
      "color": "kırmızı",
      "lifeform": "canlı",
      "syllables": ["nar"],
      "letters": ["N", "A", "R"]
    }
  },
  {
    "id": 499,
    "word": "şapka",
    "imageUrl": "/images/499.png",
    "audioKeys": { "default": "şapka", "concept": "üstünde" },
    "pairGroupId": "ustunde-altinda-sapka-1",
    "tags": {
      "category": "giysi",
      "concept": ["üstünde-altında"],
      "position": "üstünde",
      "lifeform": "cansız",
      "syllables": ["şap", "ka"],
      "letters": ["Ş", "A", "P", "K", "A"]
    }
  },
  {
    "id": 500,
    "word": "çocuk",
    "imageUrl": "/images/500.png",
    "audioKeys": { "default": "çocuk", "concept": "mutlu" },
    "tags": {
      "category": "insan",
      "concept": ["duygular"],
      "emotion": "mutlu",
      "lifeform": "canlı",
      "syllables": ["ço", "cuk"],
      "letters": ["Ç", "O", "C", "U", "K"]
    }
  }
];