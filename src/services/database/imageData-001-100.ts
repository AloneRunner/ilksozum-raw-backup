import { ImageMetadata } from '../../types.ts';

export const imageData_001_100: ImageMetadata[] = [
  {
    "id": 1,
    "word": "araba",
    "imageUrl": "/images/1.png",
    "audioKeys": { "default": "araba", "concept": "büyük" },
    "pairGroupId": ["buyuk-kucuk-araba-1", "temiz-kirli-araba-1", "saglam-kirik-araba-1", "eski-yeni-araba-1"],
    "tags": {
      "category": "taşıt",
      "concept": ["büyük-küçük", "sağlam-kırık", "eski-yeni", "temiz-kirli"],
      "size": "büyük",
      "quality": ["temiz", "sağlam"],
      "condition": "yeni",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 2,
    "word": "araba",
    "imageUrl": "/images/2.png",
    "audioKeys": { "default": "araba", "concept": "küçük" },
    "pairGroupId": ["buyuk-kucuk-araba-1", "uzun-kisa-tasit-1"],
    "tags": {
      "category": "none",
      "concept": ["büyük-küçük", "uzun-kısa"],
      "size": "küçük",
      "length": "kısa",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 3,
    "word": "araba",
    "imageUrl": "/images/3.png",
    "audioKeys": { "default": "araba", "concept": "kirli" },
    "pairGroupId": "temiz-kirli-araba-1",
    "tags": {
      "category": "none",
      "concept": ["temiz-kirli"],
      "quality": "kirli",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 4,
    "word": "araba",
    "imageUrl": "/images/4.png",
    "audioKeys": { "default": "araba", "concept": "küçük" },
    "pairGroupId": "buyuk-kucuk-tasit-2",
    "tags": {
      "category": "none",
      "concept": ["büyük-küçük"],
      "size": "küçük",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "ba"],
      "letters": ["A", "R", "A", "B", "A"]
    }
  },
  {
    "id": 5,
    "word": "kutu",
    "imageUrl": "/images/5.png",
    "audioKeys": { "default": "kutu", "concept": "kapalı" },
    "pairGroupId": "acik-kapali-kutu-1",
    "tags": {
      "category": "nesne",
      "concept": ["açık-kapalı"],
      "state": "kapalı",
      "lifeform": "cansız",
      "syllables": ["ku", "tu"],
      "letters": ["K", "U", "T", "U"]
    }
  },
  {
    "id": 6,
    "word": "kutu",
    "imageUrl": "/images/6.png",
    "audioKeys": { "default": "kutu", "concept": "açık" },
    "pairGroupId": ["acik-kapali-kutu-1", "dolu-bos-kutu-1"],
    "tags": {
      "category": "none",
      "concept": ["açık-kapalı", "dolu-boş"],
      "state": "açık",
      "fullness": "boş",
      "shape": "kare",
      "lifeform": "cansız",
      "syllables": ["ku", "tu"],
      "letters": ["K", "U", "T", "U"]
    }
  },
  {
    "id": 7,
    "word": "kutu",
    "imageUrl": "/images/7.png",
    "audioKeys": { "default": "kutu", "concept": "dolu" },
    "pairGroupId": "dolu-bos-kutu-1",
    "tags": {
      "category": "none",
      "concept": ["dolu-boş"],
      "fullness": "dolu",
      "lifeform": "cansız",
      "syllables": ["ku", "tu"],
      "letters": ["K", "U", "T", "U"]
    }
  },
  {
    "id": 8,
    "word": "ağaç",
    "imageUrl": "/images/8.png",
    "audioKeys": { "default": "ağaç", "concept": "uzun" },
    "pairGroupId": ["uzun-kisa-agac-1"],
    "tags": {
      "category": "none",
      "concept": ["uzun-kısa"],
      "length": "uzun",
      "lifeform": "canlı",
      "syllables": ["a", "ğaç"],
      "letters": ["A", "Ğ", "A", "Ç"]
    }
  },
  {
    "id": 9,
    "word": "ağaç",
    "imageUrl": "/images/9.png",
    "audioKeys": { "default": "ağaç", "concept": "kısa" },
    "pairGroupId": "uzun-kisa-agac-1",
    "tags": {
      "category": "none",
      "concept": ["uzun-kısa"],
      "length": "kısa",
      "lifeform": "canlı",
      "syllables": ["a", "ğaç"],
      "letters": ["A", "Ğ", "A", "Ç"]
    }
  },
  {
    "id": 10,
    "word": "ağaç",
    "imageUrl": "/images/10.png",
    "audioKeys": { "default": "ağaç", "concept": "büyük" },
    "pairGroupId": ["buyuk-kucuk-bitki-1", "yasli-genc-bitki-1"],
    "tags": {
      "category": "bitki",
      "concept": ["büyük-küçük", "yaşlı-genç"],
      "size": "büyük",
      "age": "yaşlı",
      "color": "yeşil",
      "lifeform": "canlı",
      "syllables": ["a", "ğaç"],
      "letters": ["A", "Ğ", "A", "Ç"]
    }
  },
  {
    "id": 11,
    "word": "manzara",
    "imageUrl": "/images/11.gif",
    "audioKeys": { "default": "manzara", "concept": "gündüz" },
    "pairGroupId": "gunduz-gece-manzara-1",
    "tags": {
      "category": "doğal yapı",
      "concept": ["gündüz-gece"],
      "time": "gündüz",
      "color": "yeşil",
      "lifeform": "cansız",
      "syllables": ["man", "za", "ra"],
      "letters": ["M", "A", "N", "Z", "A", "R", "A"]
    }
  },
  {
    "id": 12,
    "word": "manzara",
    "imageUrl": "/images/12.gif",
    "audioKeys": { "default": "manzara", "concept": "gece" },
    "pairGroupId": "gunduz-gece-manzara-1",
    "tags": {
      "category": "doğal yapı",
      "concept": ["gündüz-gece", "aşağıda-yukarıda"],
      "time": "gece",
      "position": ["yukarıda", "aşağıda"],
      "lifeform": "cansız",
      "syllables": ["man", "za", "ra"],
      "letters": ["M", "A", "N", "Z", "A", "R", "A"]
    }
  },
  {
    "id": 13,
    "word": "tişört",
    "imageUrl": "/images/13.png",
    "audioKeys": { "default": "tişört", "concept": "temiz" },
    "pairGroupId": ["temiz-kirli-tisort-1", "islak-kuru-tisort-1"],
    "tags": {
      "category": "giysi",
      "concept": ["temiz-kirli", "ıslak-kuru"],
      "quality": "temiz",
      "state": "kuru",
      "color": "mavi",
      "lifeform": "cansız",
      "syllables": ["ti", "şört"],
      "letters": ["T", "İ", "Ş", "Ö", "R", "T"]
    }
  },
  {
    "id": 14,
    "word": "tişört",
    "imageUrl": "/images/14.gif",
    "audioKeys": { "default": "tişört", "concept": "kirli" },
    "pairGroupId": ["temiz-kirli-tisort-1", "temiz-kirli-tisort-2"],
    "tags": {
      "category": "none",
      "concept": ["temiz-kirli"],
      "quality": "kirli",
      "lifeform": "cansız",
      "syllables": ["ti", "şört"],
      "letters": ["T", "İ", "Ş", "Ö", "R", "T"]
    }
  },
  {
    "id": 15,
    "word": "tişört",
    "imageUrl": "/images/15.gif",
    "audioKeys": { "default": "tişört", "concept": "kirli" },
    "pairGroupId": ["temiz-kirli-tisort-1", "islak-kuru-tisort-1"],
    "tags": {
      "category": "none",
      "concept": ["temiz-kirli", "ıslak-kuru"],
      "quality": "kirli",
      "state": "ıslak",
      "lifeform": "cansız",
      "syllables": ["ti", "şört"],
      "letters": ["T", "İ", "Ş", "Ö", "R", "T"]
    }
  },
  {
    "id": 16,
    "word": "kedi",
    "imageUrl": "/images/16.png",
    "audioKeys": { "default": "kedi", "concept": "mutlu" },
    "pairGroupId": "duygu-kedi-grup",
    "tags": {
      "category": "hayvan",
      "concept": ["duygular"],
      "emotion": "mutlu",
      "lifeform": "canlı",
      "syllables": ["ke", "di"],
      "letters": ["K", "E", "D", "İ"]
    }
  },
  {
    "id": 17,
    "word": "kedi",
    "imageUrl": "/images/17.png",
    "audioKeys": { "default": "kedi", "concept": "üzgün" },
    "pairGroupId": "duygu-kedi-grup",
    "tags": {
      "category": "none",
      "concept": ["duygular"],
      "emotion": "üzgün",
      "lifeform": "canlı",
      "syllables": ["ke", "di"],
      "letters": ["K", "E", "D", "İ"]
    }
  },
  {
    "id": 18,
    "word": "kedi",
    "imageUrl": "/images/18.png",
    "audioKeys": { "default": "kedi", "concept": "kızgın" },
    "pairGroupId": "duygu-kedi-grup",
    "tags": {
      "category": "none",
      "concept": ["duygular"],
      "emotion": "kızgın",
      "lifeform": "canlı",
      "syllables": ["ke", "di"],
      "letters": ["K", "E", "D", "İ"]
    }
  },
  {
    "id": 19,
    "word": "kedi",
    "imageUrl": "/images/19.png",
    "audioKeys": { "default": "kedi", "concept": "şaşkın" },
    "pairGroupId": "duygu-kedi-grup",
    "tags": {
      "category": "none",
      "concept": ["duygular"],
      "emotion": "şaşkın",
      "lifeform": "canlı",
      "syllables": ["ke", "di"],
      "letters": ["K", "E", "D", "İ"]
    }
  },
  {
    "id": 20,
    "word": "masa",
    "imageUrl": "/images/20.png",
    "audioKeys": { "default": "masa", "concept": "üstünde" },
    "pairGroupId": "ustunde-altinda-top-masa-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "üstünde",
      "lifeform": "cansız",
      "syllables": ["ma", "sa"],
      "letters": ["M", "A", "S", "A"]
    }
  },
  {
    "id": 21,
    "word": "masa",
    "imageUrl": "/images/21.png",
    "audioKeys": { "default": "masa", "concept": "altında" },
    "pairGroupId": "ustunde-altinda-top-masa-1",
    "tags": {
      "category": "none",
      "concept": ["üstünde-altında"],
      "position": "altında",
      "lifeform": "cansız",
      "syllables": ["ma", "sa"],
      "letters": ["M", "A", "S", "A"]
    }
  },
  {
    "id": 22,
    "word": "arasında",
    "imageUrl": "/images/22.png",
    "audioKeys": { "default": "arasında" },
    "pairGroupId": "arasinda-yaninda-nesne-1",
    "tags": {
      "category": "nesne",
      "concept": ["arasında-yanında"],
      "position": "arasında",
      "lifeform": "cansız",
      "syllables": ["a", "ra", "sın", "da"],
      "letters": ["A", "R", "A", "S", "I", "N", "D", "A"]
    }
  },
  {
    "id": 23,
    "word": "pizza",
    "imageUrl": "/images/23.png",
    "audioKeys": { "default": "pizza", "concept": "bütün" },
    "pairGroupId": "butun-yarim-ceyrek-pizza-1",
    "tags": {
      "category": "yiyecek",
      "concept": ["bütün-yarım-çeyrek", "şekiller"],
      "fraction": "bütün",
      "shape": "daire",
      "lifeform": "cansız",
      "syllables": ["piz", "za"],
      "letters": ["P", "İ", "Z", "Z", "A"]
    }
  },
  {
    "id": 24,
    "word": "pizza",
    "imageUrl": "/images/24.png",
    "audioKeys": { "default": "pizza", "concept": "yarım" },
    "pairGroupId": "butun-yarim-ceyrek-pizza-1",
    "tags": {
      "category": "none",
      "concept": ["bütün-yarım-çeyrek"],
      "fraction": "yarım",
      "lifeform": "cansız",
      "syllables": ["piz", "za"],
      "letters": ["P", "İ", "Z", "Z", "A"]
    }
  },
  {
    "id": 25,
    "word": "pizza dilimi",
    "imageUrl": "/images/25.png",
    "audioKeys": { "default": "pizza dilimi", "concept": "çeyrek" },
    "pairGroupId": "butun-yarim-ceyrek-pizza-1",
    "tags": {
      "category": "none",
      "concept": ["bütün-yarım-çeyrek", "şekiller"],
      "fraction": "çeyrek",
      "shape": "üçgen",
      "lifeform": "cansız",
      "syllables": ["piz", "za"],
      "letters": ["P", "İ", "Z", "Z", "A"]
    }
  },
  {
    "id": 26,
    "word": "ördek",
    "imageUrl": "/images/26.png",
    "audioKeys": { "default": "ördek" },
    "tags": {
      "category": "hayvan",
      "concept": ["renkler"],
      "color": "sarı",
      "lifeform": "canlı",
      "syllables": ["ör", "dek"],
      "letters": ["Ö", "R", "D", "E", "K"]
    }
  },
  {
    "id": 27,
    "word": "pamuk",
    "imageUrl": "/images/27.png",
    "audioKeys": { "default": "pamuk", "concept": "yumuşak" },
    "pairGroupId": ["sert-yumusak-nesne-1", "agir-hafif-nesne-1"],
    "tags": {
      "category": "bitki",
      "concept": ["sert-yumuşak", "ağır-hafif"],
      "texture": "yumuşak",
      "weight": "hafif",
      "color": "beyaz",
      "lifeform": "canlı",
      "syllables": ["pa", "muk"],
      "letters": ["P", "A", "M", "U", "K"]
    }
  },
  {
    "id": 28,
    "word": "fil",
    "imageUrl": "/images/28.png",
    "audioKeys": { "default": "fil", "concept": "büyük" },
    "pairGroupId": ["buyuk-kucuk-hayvan-1", "agir-hafif-hayvan-2"],
    "tags": {
      "category": "hayvan",
      "concept": ["büyük-küçük", "ağır-hafif"],
      "size": "büyük",
      "weight": "ağır",
      "color": "gri",
      "lifeform": "canlı",
      "syllables": ["fil"],
      "letters": ["F", "İ", "L"]
    }
  },
  {
    "id": 29,
    "word": "fare",
    "imageUrl": "/images/29.png",
    "audioKeys": { "default": "fare", "concept": "küçük" },
    "pairGroupId": ["buyuk-kucuk-hayvan-1", "uzun-kisa-hayvan-2"],
    "tags": {
      "category": "hayvan",
      "concept": ["büyük-küçük", "uzun-kısa"],
      "size": "küçük",
      "length": "kısa",
      "color": "gri",
      "lifeform": "canlı",
      "syllables": ["fa", "re"],
      "letters": ["F", "A", "R", "E"]
    }
  },
  {
    "id": 30,
    "word": "düğme",
    "imageUrl": "/images/30.png",
    "audioKeys": { "default": "düğme" },
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "renkler"],
      "shape": "daire",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["düğ", "me"],
      "letters": ["D", "Ü", "Ğ", "M", "E"]
    }
  },
  {
    "id": 31,
    "word": "valiz",
    "imageUrl": "/images/31.png",
    "audioKeys": { "default": "valiz", "concept": "ağır" },
    "pairGroupId": "agir-hafif-esya-2",
    "tags": {
      "category": "none",
      "concept": ["ağır-hafif", "şekiller"],
      "weight": "ağır",
      "shape": "dikdörtgen",
      "color": "mavi",
      "lifeform": "cansız",
      "syllables": ["va", "liz"],
      "letters": ["V", "A", "L", "İ", "Z"]
    }
  },
  {
    "id": 32,
    "word": "papağan",
    "imageUrl": "/images/32.png",
    "audioKeys": { "default": "papağan" },
    "tags": {
      "category": "hayvan",
      "concept": ["renkler"],
      "color": ["çok renkli", "kırmızı", "mavi", "sarı"],
      "lifeform": "canlı",
      "syllables": ["pa", "pa", "ğan"],
      "letters": ["P", "A", "P", "A", "Ğ", "A", "N"]
    }
  },
  {
    "id": 33,
    "word": "jeton",
    "imageUrl": "/images/33.png",
    "audioKeys": { "default": "jeton", "concept": "parlak" },
    "pairGroupId": "parlak-mat-nesne-1",
    "tags": {
      "category": "nesne",
      "concept": ["parlak-mat", "şekiller"],
      "texture": "parlak",
      "shape": "daire",
      "lifeform": "cansız",
      "syllables": ["je", "ton"],
      "letters": ["J", "E", "T", "O", "N"]
    }
  },
  {
    "id": 34,
    "word": "vazo",
    "imageUrl": "/images/34.png",
    "audioKeys": { "default": "vazo", "concept": "boş" },
    "pairGroupId": ["dolu-bos-vazo-1", "saglam-kirik-vazo-1"],
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş", "sağlam-kırık"],
      "fullness": "boş",
      "quality": "sağlam",
      "color": "mavi",
      "lifeform": "cansız",
      "syllables": ["va", "zo"],
      "letters": ["V", "A", "Z", "O"]
    }
  },
  {
    "id": 35,
    "word": "vazo",
    "imageUrl": "/images/35.png",
    "audioKeys": { "default": "vazo", "concept": "dolu" },
    "pairGroupId": "dolu-bos-vazo-1",
    "tags": {
      "category": "none",
      "concept": ["dolu-boş"],
      "fullness": "dolu",
      "lifeform": "cansız",
      "syllables": ["va", "zo"],
      "letters": ["V", "A", "Z", "O"]
    }
  },
  {
    "id": 36,
    "word": "kitap",
    "imageUrl": "/images/36.png",
    "audioKeys": { "default": "kitap", "concept": "kalın" },
    "pairGroupId": ["ince-kalin-kitap-1", "acik-kapali-kitap-1", "seffaf-opak-nesne-1"],
    "tags": {
      "category": "none",
      "concept": ["ince-kalın", "açık-kapalı", "şeffaf-opak", "şekiller"],
      "thickness": "kalın",
      "state": "kapalı",
      "quality": "opak",
      "shape": "dikdörtgen",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["ki", "tap"],
      "letters": ["K", "İ", "T", "A", "P"]
    }
  },
  {
    "id": 37,
    "word": "kitap",
    "imageUrl": "/images/37.png",
    "audioKeys": { "default": "kitap", "concept": "ince" },
    "pairGroupId": ["ince-kalin-kitap-1", "eski-yeni-kitap-1"],
    "tags": {
      "category": "nesne",
      "concept": ["ince-kalın", "eski-yeni"],
      "thickness": "ince",
      "condition": "yeni",
      "color": "kırmızı",
      "lifeform": "cansız",
      "syllables": ["ki", "tap"],
      "letters": ["K", "İ", "T", "A", "P"]
    }
  },
  {
    "id": 38,
    "word": "kitap",
    "imageUrl": "/images/38.png",
    "audioKeys": { "default": "kitap", "concept": "açık" },
    "pairGroupId": "acik-kapali-kitap-1",
    "tags": {
      "category": "none",
      "concept": ["açık-kapalı"],
      "state": "açık",
      "lifeform": "cansız",
      "syllables": ["ki", "tap"],
      "letters": ["K", "İ", "T", "A", "P"]
    }
  },
  {
    "id": 39,
    "word": "kapı",
    "imageUrl": "/images/39.png",
    "audioKeys": { "default": "kapı", "concept": "geniş" },
    "pairGroupId": ["genis-dar-kapi-1", "acik-kapali-kapi-1"],
    "tags": {
      "category": "ev_esya",
      "concept": ["geniş-dar", "açık-kapalı"],
      "width": "geniş",
      "state": "kapalı",
      "shape": "dikdörtgen",
      "color": "kahverengi",
      "lifeform": "cansız",
      "syllables": ["ka", "pı"],
      "letters": ["K", "A", "P", "I"]
    }
  },
  {
    "id": 40,
    "word": "kapı",
    "imageUrl": "/images/40.png",
    "audioKeys": { "default": "kapı", "concept": "dar" },
    "pairGroupId": "genis-dar-kapi-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["geniş-dar"],
      "width": "dar",
      "lifeform": "cansız",
      "syllables": ["ka", "pı"],
      "letters": ["K", "A", "P", "I"]
    }
  },
  {
    "id": 41,
    "word": "tavşan",
    "imageUrl": "/images/41.gif",
    "audioKeys": { "default": "tavşan", "concept": "hızlı" },
    "pairGroupId": "hizli-yavas-hayvan-1",
    "tags": {
      "category": "hayvan",
      "concept": ["hızlı-yavaş"],
      "speed": "hızlı",
      "color": "beyaz",
      "lifeform": "canlı",
      "syllables": ["tav", "şan"],
      "letters": ["T", "A", "V", "Ş", "A", "N"]
    }
  },
  {
    "id": 42,
    "word": "kaplumbağa",
    "imageUrl": "/images/42.gif",
    "audioKeys": { "default": "kaplumbağa", "concept": "yavaş" },
    "pairGroupId": ["hizli-yavas-hayvan-1", "sivri-kut-hayvan-1", "tembel-caliskan-hayvan-1"],
    "tags": {
      "category": "hayvan",
      "concept": ["hızlı-yavaş", "sivri-küt", "tembel-çalışkan", "ters-düz"],
      "speed": "yavaş",
      "quality": ["küt", "tembel", "düzgün"],
      "lifeform": "canlı",
      "syllables": ["kap", "lum", "ba", "ğa"],
      "letters": ["K", "A", "P", "L", "U", "M", "B", "A", "Ğ", "A"]
    }
  },
  {
    "id": 43,
    "word": "elma",
    "imageUrl": "/images/43.png",
    "audioKeys": { "default": "elma", "concept": "pürüzsüz" },
    "pairGroupId": ["puruzlu-puruzsuz-meyve-1", "taze-bayat-elma-1", "kirisik-duzgun-elma-1", "aci-tatli-meyve-2", "tek-cift-elma-1"],
    "tags": {
      "category": "meyve",
      "concept": ["pürüzlü-pürüzsüz", "taze-bayat", "kırışık-düzgün", "acı-tatlı", "tek-çift", "şekiller"],
      "texture": "pürüzsüz",
      "quality": ["taze", "düzgün"],
      "taste": "tatlı",
      "quantity_type": "tek",
      "color": "kırmızı",
      "shape": "daire",
      "lifeform": "canlı",
      "syllables": ["el", "ma"],
      "letters": ["E", "L", "M", "A"]
    }
  },
  {
    "id": 44,
    "word": "elmalar",
    "imageUrl": "/images/44.png",
    "audioKeys": { "default": "elmalar", "concept": "çift" },
    "pairGroupId": "tek-cift-elma-1",
    "tags": {
      "category": "meyve",
      "concept": ["tek-çift"],
      "quantity_type": "çift",
      "lifeform": "canlı",
      "syllables": ["el", "ma", "lar"],
      "letters": ["E", "L", "M", "A", "L", "A", "R"]
    }
  },
  {
    "id": 45,
    "word": "çöp kutusu",
    "imageUrl": "/images/45.png",
    "audioKeys": { "default": "çöp kutusu", "concept": "boş" },
    "pairGroupId": "dolu-bos-cop-kutusu-1",
    "tags": {
      "category": "nesne",
      "concept": ["dolu-boş"],
      "fullness": "boş",
      "lifeform": "cansız",
      "syllables": ["çöp", "ku", "tu", "su"],
      "letters": ["Ç", "Ö", "P", "K", "U", "T", "U", "S", "U"]
    }
  },
  {
    "id": 46,
    "word": "köpek",
    "imageUrl": "/images/46.png",
    "audioKeys": { "default": "köpek", "concept": "içinde" },
    "pairGroupId": "icinde-disinda-kopek-kulube-1",
    "tags": {
      "category": "hayvan",
      "concept": ["içinde-dışında"],
      "position": "içinde",
      "lifeform": "canlı",
      "syllables": ["kö", "pek"],
      "letters": ["K", "Ö", "P", "E", "K"]
    }
  },
  {
    "id": 47,
    "word": "köpek",
    "imageUrl": "/images/47.png",
    "audioKeys": { "default": "köpek", "concept": "dışında" },
    "pairGroupId": "icinde-disinda-kopek-kulube-1",
    "tags": {
      "category": "hayvan",
      "concept": ["içinde-dışında"],
      "position": "dışında",
      "lifeform": "canlı",
      "syllables": ["kö", "pek"],
      "letters": ["K", "Ö", "P", "E", "K"]
    }
  },
  {
    "id": 48,
    "word": "köpek",
    "imageUrl": "/images/48.png",
    "audioKeys": { "default": "köpek", "concept": "önünde" },
    "pairGroupId": "onunde-arkasinda-kopek-kulube-1",
    "tags": {
      "category": "hayvan",
      "concept": ["önünde-arkasında"],
      "position": "önünde",
      "lifeform": "canlı",
      "syllables": ["kö", "pek"],
      "letters": ["K", "Ö", "P", "E", "K"]
    }
  },
  {
    "id": 49,
    "word": "köpek",
    "imageUrl": "/images/49.png",
    "audioKeys": { "default": "köpek", "concept": "arkasında" },
    "pairGroupId": "onunde-arkasinda-kopek-kulube-1",
    "tags": {
      "category": "hayvan",
      "concept": ["önünde-arkasında"],
      "position": "arkasında",
      "lifeform": "canlı",
      "syllables": ["kö", "pek"],
      "letters": ["K", "Ö", "P", "E", "K"]
    }
  },
  {
    "id": 50,
    "word": "peynir",
    "imageUrl": "/images/50.png",
    "audioKeys": { "default": "peynir", "concept": "yumuşak" },
    "pairGroupId": ["sert-yumusak-yiyecek-1", "puruzlu-puruzsuz-yiyecek-1"],
    "tags": {
      "category": "yiyecek",
      "concept": ["sert-yumuşak", "pürüzlü-pürüzsüz", "şekiller"],
      "texture": ["yumuşak", "pürüzsüz"],
      "shape": "üçgen",
      "color": "sarı",
      "lifeform": "cansız",
      "syllables": ["pey", "nir"],
      "letters": ["P", "E", "Y", "N", "İ", "R"]
    }
  },
  {
    "id": 51,
    "word": "fırça",
    "imageUrl": "/images/51.png",
    "audioKeys": { "default": "fırça", "concept": "ıslak" },
    "pairGroupId": "islak-kuru-firca-1",
    "tags": {
      "category": "tamir_aleti",
      "concept": ["ıslak-kuru"],
      "state": "ıslak",
      "lifeform": "cansız",
      "letters": ["F", "I", "R", "Ç", "A"],
      "syllables": ["fır", "ça"]
    }
  },
  {
    "id": 52,
    "word": "yağmur",
    "imageUrl": "/images/52.png",
    "audioKeys": { "default": "yağmur", "concept": "ıslak" },
    "pairGroupId": "islak-kuru-hava-1",
    "tags": {
      "category": "doğa olayı",
      "concept": ["ıslak-kuru"],
      "state": "ıslak",
      "lifeform": "cansız",
      "letters": ["Y", "A", "Ğ", "M", "U", "R"],
      "syllables": ["yağ", "mur"]
    }
  },
  {
    "id": 53,
    "word": "vida",
    "imageUrl": "/images/53.png",
    "audioKeys": { "default": "vida", "concept": "kalın" },
    "pairGroupId": ["ince-kalin-alet-1", "sivri-kut-alet-2"],
    "tags": {
      "category": "tamir_aleti",
      "concept": ["ince-kalın", "sivri-küt"],
      "thickness": "kalın",
      "quality": "küt",
      "lifeform": "cansız",
      "letters": ["V", "İ", "D", "A"],
      "syllables": ["vi", "da"]
    }
  },
  {
    "id": 54,
    "word": "pijama",
    "imageUrl": "/images/54.png",
    "audioKeys": { "default": "pijama" },
    "tags": {
      "category": "giysi",
      "lifeform": "cansız",
      "letters": ["P", "İ", "J", "A", "M", "A"],
      "syllables": ["pi", "ja", "ma"],
      "color": ["mavi", "sarı"]
    }
  },
  {
    "id": 55,
    "word": "limon",
    "imageUrl": "/images/55.png",
    "audioKeys": { "default": "limon", "concept": "ekşi" },
    "pairGroupId": "aci-tatli-meyve-2",
    "tags": {
      "category": "meyve",
      "concept": ["acı-tatlı", "duyular"],
      "taste": "ekşi",
      "sense": "tat",
      "lifeform": "canlı",
      "letters": ["L", "İ", "M", "O", "N"],
      "syllables": ["li", "mon"],
      "color": "sarı"
    }
  },
  {
    "id": 56,
    "word": "dondurma",
    "imageUrl": "/images/56.png",
    "audioKeys": { "default": "dondurma", "concept": "soğuk" },
    "pairGroupId": ["sicak-soguk-yiyecek-1", "sicak-soguk-yiyecek-2"],
    "tags": {
      "category": "yiyecek",
      "concept": ["sıcak-soğuk", "duyular", "şekiller"],
      "temperature": "soğuk",
      "sense": "dokunma",
      "shape": "üçgen",
      "lifeform": "cansız",
      "letters": ["D", "O", "N", "D", "U", "R", "M", "A"],
      "syllables": ["don", "dur", "ma"]
    }
  },
  {
    "id": 57,
    "word": "lale",
    "imageUrl": "/images/57.png",
    "audioKeys": { "default": "lale" },
    "tags": {
      "category": "bitki",
      "concept": ["renkler"],
      "lifeform": "canlı",
      "letters": ["L", "A", "L", "E"],
      "syllables": ["la", "le"],
      "color": "pembe"
    }
  },
  {
    "id": 58,
    "word": "çorap",
    "imageUrl": "/images/58.png",
    "audioKeys": { "default": "çorap", "concept": "kirli" },
    "pairGroupId": "temiz-kirli-corap-1",
    "tags": {
      "category": "giysi",
      "concept": ["temiz-kirli", "duyular"],
      "quality": "kirli",
      "sense": "koku",
      "lifeform": "cansız",
      "letters": ["Ç", "O", "R", "A", "P"],
      "syllables": ["ço", "rap"]
    }
  },
  {
    "id": 59,
    "word": "ayakkabı",
    "imageUrl": "/images/59.png",
    "audioKeys": { "default": "ayakkabı", "concept": "yeni" },
    "pairGroupId": ["eski-yeni-ayakkabi-1", "temiz-kirli-ayakkabi-1"],
    "tags": {
      "category": "giysi",
      "concept": ["eski-yeni", "temiz-kirli"],
      "condition": "yeni",
      "quality": "temiz",
      "lifeform": "cansız",
      "letters": ["A", "Y", "A", "K", "K", "A", "B", "I"],
      "syllables": ["a", "yak", "ka", "bı"]
    }
  },
  {
    "id": 60,
    "word": "ayakkabı",
    "imageUrl": "/images/60.png",
    "audioKeys": { "default": "ayakkabı", "concept": "eski" },
    "pairGroupId": ["eski-yeni-ayakkabi-1", "temiz-kirli-ayakkabi-1", "parlak-mat-ayakkabi-1"],
    "tags": {
      "category": "none",
      "concept": ["eski-yeni", "temiz-kirli", "parlak-mat"],
      "condition": "eski",
      "quality": "kirli",
      "texture": "mat",
      "lifeform": "cansız",
      "letters": ["A", "Y", "A", "K", "K", "A", "B", "I"],
      "syllables": ["a", "yak", "ka", "bı"]
    }
  },
  {
    "id": 61,
    "word": "yol",
    "imageUrl": "/images/61.png",
    "audioKeys": { "default": "yol", "concept": "düz" },
    "pairGroupId": ["duz-egri-yol-1", "duz-egri-yol-2"],
    "tags": {
      "category": "doğal yapı",
      "concept": ["düz-eğri"],
      "shape": "düz",
      "lifeform": "cansız",
      "letters": ["Y", "O", "L"],
      "syllables": ["yol"],
      "color": "gri"
    }
  },
  {
    "id": 62,
    "word": "yol",
    "imageUrl": "/images/62.png",
    "audioKeys": { "default": "yol", "concept": "eğri" },
    "pairGroupId": "duz-egri-yol-2",
    "tags": {
      "category": "doğal yapı",
      "concept": ["düz-eğri"],
      "shape": "eğri",
      "lifeform": "cansız",
      "letters": ["Y", "O", "L"],
      "syllables": ["yol"]
    }
  },
  {
    "id": 63,
    "word": "dondurma",
    "imageUrl": "/images/63.png",
    "audioKeys": { "default": "dondurma", "concept": "önce" },
    "pairGroupId": ["once-sonra-dondurma-1", "sicak-soguk-yiyecek-3", "aci-tatli-yiyecek-1"],
    "tags": {
      "sequence": { "group": "dondurma-erime", "order": 1 },
      "category": "yiyecek",
      "concept": ["önce-sonra", "sıcak-soğuk", "acı-tatlı"],
      "state": "önce",
      "temperature": "soğuk",
      "taste": "tatlı",
      "lifeform": "cansız",
      "letters": ["D", "O", "N", "D", "U", "R", "M", "A"],
      "syllables": ["don", "dur", "ma"],
      "color": "pembe"
    }
  },
  {
    "id": 64,
    "word": "dondurma",
    "imageUrl": "/images/64.png",
    "audioKeys": { "default": "dondurma", "concept": "sonra" },
    "pairGroupId": "once-sonra-dondurma-1",
    "tags": {
      "sequence": { "group": "dondurma-erime", "order": 2 },
      "category": "yiyecek",
      "concept": ["önce-sonra"],
      "state": "sonra",
      "lifeform": "cansız",
      "letters": ["D", "O", "N", "D", "U", "R", "M", "A"],
      "syllables": ["don", "dur", "ma"]
    }
  },
  {
    "id": 65,
    "word": "daire",
    "imageUrl": "/images/65.png",
    "audioKeys": { "default": "daire", "concept": "küt" },
    "pairGroupId": "sivri-kut-sekil-1",
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "sivri-küt"],
      "shape": "daire",
      "quality": "küt",
      "lifeform": "cansız",
      "letters": ["D", "A", "İ", "R", "E"],
      "syllables": ["da", "i", "re"],
      "color": "kırmızı"
    }
  },
  {
    "id": 66,
    "word": "küp",
    "imageUrl": "/images/66.png",
    "audioKeys": { "default": "küp" },
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "renkler"],
      "shape": "kare",
      "lifeform": "cansız",
      "letters": ["K", "Ü", "P"],
      "syllables": ["küp"],
      "color": "mavi"
    }
  },
  {
    "id": 67,
    "word": "üçgen",
    "imageUrl": "/images/67.png",
    "audioKeys": { "default": "üçgen" },
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "renkler"],
      "shape": "üçgen",
      "lifeform": "cansız",
      "letters": ["Ü", "Ç", "G", "E", "N"],
      "syllables": ["üç", "gen"],
      "color": "sarı"
    }
  },
  {
    "id": 68,
    "word": "dikdörtgen",
    "imageUrl": "/images/68.png",
    "audioKeys": { "default": "dikdörtgen" },
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "renkler"],
      "shape": "dikdörtgen",
      "lifeform": "cansız",
      "letters": ["D", "İ", "K", "D", "Ö", "R", "T", "G", "E", "N"],
      "syllables": ["dik", "dört", "gen"],
      "color": "yeşil"
    }
  },
  {
    "id": 69,
    "word": "yıldız",
    "imageUrl": "/images/69.png",
    "audioKeys": { "default": "yıldız", "concept": "sivri" },
    "pairGroupId": "sivri-kut-sekil-1",
    "tags": {
      "category": "nesne",
      "concept": ["şekiller", "sivri-küt"],
      "shape": "yıldız",
      "quality": "sivri",
      "lifeform": "cansız",
      "letters": ["Y", "I", "L", "D", "I", "Z"],
      "syllables": ["yıl", "dız"],
      "color": "turuncu"
    }
  },
  {
    "id": 70,
    "word": "ok",
    "imageUrl": "/images/70.png",
    "audioKeys": { "default": "ok", "concept": "sol" },
    "pairGroupId": "sag-sol-ok-1",
    "tags": {
      "category": "nesne",
      "concept": ["sağ-sol"],
      "direction": "sol",
      "lifeform": "cansız",
      "letters": ["O", "K"],
      "syllables": ["ok"],
      "color": "yeşil"
    }
  },
  {
    "id": 71,
    "word": "ok",
    "imageUrl": "/images/71.png",
    "audioKeys": { "default": "ok", "concept": "sağ" },
    "pairGroupId": "sag-sol-ok-1",
    "tags": {
      "category": "nesne",
      "concept": ["sağ-sol"],
      "direction": "sağ",
      "lifeform": "cansız",
      "letters": ["O", "K"],
      "syllables": ["ok"],
      "color": "yeşil"
    }
  },
  {
    "id": 72,
    "word": "davul",
    "imageUrl": "/images/72.png",
    "audioKeys": { "default": "davul" },
    "tags": {
      "category": "muzik_aleti",
      "concept": ["duyular"],
      "sense": "ses",
      "lifeform": "cansız",
      "letters": ["D", "A", "V", "U", "L"],
      "syllables": ["da", "vul"]
    }
  },
  {
    "id": 73,
    "word": "kuş",
    "imageUrl": "/images/73.png",
    "audioKeys": { "default": "kuş", "concept": "hafif" },
    "pairGroupId": ["agir-hafif-hayvan-3", "kalabalik-tenha-kus-1"],
    "tags": {
      "syllables": ["kuş"],
      "category": "hayvan",
      "concept": ["ağır-hafif", "kalabalık-tenha", "duyular"],
      "lifeform": "canlı",
      "letters": ["K", "U", "Ş"],
      "weight": "hafif",
      "density": "tenhâ",
      "sense": "ses"
    }
  },
  {
    "id": 74,
    "word": "el feneri",
    "imageUrl": "/images/74.png",
    "audioKeys": { "default": "el feneri" },
    "tags": {
      "category": "nesne",
      "concept": ["duyular", "şekiller"],
      "sense": "görme",
      "shape": "daire",
      "lifeform": "cansız",
      "letters": ["E", "L", "F", "E", "N", "E", "R", "İ"],
      "syllables": ["el", "fe", "ne", "ri"],
      "color": "sarı"
    }
  },
  {
    "id": 75,
    "word": "soğan",
    "imageUrl": "/images/75.png",
    "audioKeys": { "default": "soğan", "concept": "acı" },
    "pairGroupId": "aci-tatli-sebze-1",
    "tags": {
      "category": "sebze",
      "concept": ["acı-tatlı", "duyular"],
      "taste": "acı",
      "sense": "koku",
      "lifeform": "canlı",
      "letters": ["S", "O", "Ğ", "A", "N"],
      "syllables": ["so", "ğan"],
      "color": "kahverengi"
    }
  },
  {
    "id": 76,
    "word": "papatya",
    "imageUrl": "/images/76.png",
    "audioKeys": { "default": "papatya", "concept": "küçük" },
    "pairGroupId": "buyuk-kucuk-bitki-1",
    "tags": {
      "category": "bitki",
      "concept": ["büyük-küçük", "duyular", "şekiller"],
      "size": "küçük",
      "sense": "koku",
      "shape": "daire",
      "lifeform": "canlı",
      "letters": ["P", "A", "P", "A", "T", "Y", "A"],
      "syllables": ["pa", "pat", "ya"],
      "color": "beyaz"
    }
  },
  {
    "id": 77,
    "word": "yumurta",
    "imageUrl": "/images/77.png",
    "audioKeys": { "default": "yumurta", "concept": "kırık" },
    "pairGroupId": "saglam-kirik-yumurta-1",
    "tags": {
      "sequence": { "group": "yumurta-civciv", "order": 1 },
      "category": "yiyecek",
      "concept": ["sağlam-kırık", "önce-sonra", "şekiller"],
      "quality": "kırık",
      "state": "önce",
      "shape": "oval",
      "lifeform": "cansız",
      "letters": ["Y", "U", "M", "U", "R", "T", "A"],
      "syllables": ["yu", "mur", "ta"]
    }
  },
  {
    "id": 78,
    "word": "pasta",
    "imageUrl": "/images/78.png",
    "audioKeys": { "default": "pasta", "concept": "bütün" },
    "pairGroupId": ["aci-tatli-yiyecek-2", "butun-yarim-ceyrek-pasta-1"],
    "tags": {
      "category": "yiyecek",
      "concept": ["acı-tatlı", "bütün-yarım-çeyrek"],
      "taste": "tatlı",
      "fraction": "bütün",
      "lifeform": "cansız",
      "letters": ["P", "A", "S", "T", "A"],
      "syllables": ["pas", "ta"],
      "color": "pembe"
    }
  },
  {
    "id": 79,
    "word": "pantolon",
    "imageUrl": "/images/79.png",
    "audioKeys": { "default": "pantolon", "concept": "uzun" },
    "pairGroupId": ["uzun-kisa-giysi-1", "kirisik-duzgun-giysi-1"],
    "tags": {
      "category": "giysi",
      "concept": ["uzun-kısa", "kırışık-düzgün"],
      "length": "uzun",
      "quality": "düzgün",
      "lifeform": "cansız",
      "letters": ["P", "A", "N", "T", "O", "L", "O", "N"],
      "syllables": ["pan", "to", "lon"],
      "color": "mavi"
    }
  },
  {
    "id": 80,
    "word": "şort",
    "imageUrl": "/images/80.png",
    "audioKeys": { "default": "şort", "concept": "kısa" },
    "pairGroupId": "uzun-kisa-giysi-1",
    "tags": {
      "category": "giysi",
      "concept": ["uzun-kısa"],
      "length": "kısa",
      "lifeform": "cansız",
      "letters": ["Ş", "O", "R", "T"],
      "syllables": ["şort"],
      "color": "mavi"
    }
  },
  {
    "id": 81,
    "word": "pencere",
    "imageUrl": "/images/81.png",
    "audioKeys": { "default": "pencere", "concept": "gündüz" },
    "pairGroupId": "gunduz-gece-pencere-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["gündüz-gece"],
      "time": "gündüz",
      "lifeform": "cansız",
      "syllables": ["pen", "ce", "re"],
      "letters": ["P", "E", "N", "C", "E", "R", "E"]
    }
  },
  {
    "id": 82,
    "word": "pencere",
    "imageUrl": "/images/82.png",
    "audioKeys": { "default": "pencere" },
    "tags": {
      "category": "ev_esya",
      "concept": ["şekiller"],
      "shape": "dikdörtgen",
      "lifeform": "cansız",
      "syllables": ["pen", "ce", "re"],
      "letters": ["P", "E", "N", "C", "E", "R", "E"]
    }
  },
  {
    "id": 83,
    "word": "pencere",
    "imageUrl": "/images/83.png",
    "audioKeys": { "default": "pencere", "concept": "gece" },
    "pairGroupId": "gunduz-gece-pencere-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["gündüz-gece"],
      "time": "gece",
      "lifeform": "cansız",
      "syllables": ["pen", "ce", "re"],
      "letters": ["P", "E", "N", "C", "E", "R", "E"]
    }
  },
  {
    "id": 84,
    "word": "öğretmen",
    "imageUrl": "/images/84.png",
    "audioKeys": { "default": "öğretmen" },
    "tags": {
      "category": "profession",
      "lifeform": "canlı",
      "syllables": ["öğ", "ret", "men"],
      "letters": ["Ö", "Ğ", "R", "E", "T", "M", "E", "N"]
    }
  },
  {
    "id": 85,
    "word": "kuş",
    "imageUrl": "/images/85.png",
    "audioKeys": { "default": "kuş", "concept": "üstünde" },
    "pairGroupId": "ustunde-altinda-kus-bulut-1",
    "tags": {
      "syllables": ["kuş"],
      "category": "hayvan",
      "concept": ["üstünde-altında"],
      "lifeform": "canlı",
      "letters": ["K", "U", "Ş"],
      "position": "üstünde"
    }
  },
  {
    "id": 86,
    "word": "kuş",
    "imageUrl": "/images/86.png",
    "audioKeys": { "default": "kuş", "concept": "altında" },
    "pairGroupId": "ustunde-altinda-kus-bulut-1",
    "tags": {
      "syllables": ["kuş"],
      "category": "hayvan",
      "concept": ["üstünde-altında"],
      "lifeform": "canlı",
      "letters": ["K", "U", "Ş"],
      "position": "altında"
    }
  },
  {
    "id": 87,
    "word": "üzüm",
    "imageUrl": "/images/87.png",
    "audioKeys": { "default": "üzüm", "concept": "az" },
    "pairGroupId": "az-cok-meyve-1",
    "tags": {
      "category": "meyve",
      "concept": ["az-çok"],
      "quantity": "az",
      "lifeform": "canlı",
      "letters": ["Ü", "Z", "Ü", "M"],
      "syllables": ["ü", "züm"]
    }
  },
  {
    "id": 88,
    "word": "üzüm",
    "imageUrl": "/images/88.png",
    "audioKeys": { "default": "üzüm", "concept": "çok" },
    "pairGroupId": "az-cok-meyve-1",
    "tags": {
      "syllables": ["ü", "züm"],
      "category": "meyve",
      "concept": ["az-çok"],
      "lifeform": "canlı",
      "letters": ["Ü", "Z", "Ü", "M"],
      "quantity": "çok",
      "color": "mor"
    }
  },
  {
    "id": 89,
    "word": "vantilatör",
    "imageUrl": "/images/89.png",
    "audioKeys": { "default": "vantilatör", "concept": "hızlı" },
    "pairGroupId": ["hizli-yavas-esya-1", "sicak-soguk-esya-1"],
    "tags": {
      "category": "ev_esya",
      "concept": ["hızlı-yavaş", "sıcak-soğuk"],
      "speed": "hızlı",
      "temperature": "soğuk",
      "lifeform": "cansız",
      "letters": ["V", "A", "N", "T", "İ", "L", "A", "T", "Ö", "R"],
      "syllables": ["van", "ti", "la", "tör"]
    }
  },
  {
    "id": 90,
    "word": "vantilatör",
    "imageUrl": "/images/90.png",
    "audioKeys": { "default": "vantilatör", "concept": "yavaş" },
    "pairGroupId": "hizli-yavas-esya-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["hızlı-yavaş"],
      "speed": "yavaş",
      "lifeform": "cansız",
      "letters": ["V", "A", "N", "T", "İ", "L", "A", "T", "Ö", "R"],
      "syllables": ["van", "ti", "la", "tör"]
    }
  },
  {
    "id": 91,
    "word": "kedi",
    "imageUrl": "/images/91.png",
    "audioKeys": { "default": "kedi", "concept": "altında" },
    "pairGroupId": "ustunde-altinda-kedi-sandalye-1",
    "tags": {
      "syllables": ["ke", "di"],
      "category": "none",
      "concept": ["üstünde-altında"],
      "lifeform": "canlı",
      "letters": ["K", "E", "D", "İ"],
      "position": "altında"
    }
  },
  {
    "id": 92,
    "word": "uğur böceği",
    "imageUrl": "/images/92.png",
    "audioKeys": { "default": "uğur böceği" },
    "tags": {
      "syllables": ["u", "ğur", "bö", "ce", "ği"],
      "category": "hayvan",
      "concept": ["renkler", "şekiller"],
      "shape": "daire",
      "lifeform": "canlı",
      "letters": ["U", "Ğ", "U", "R", "B", "Ö", "C", "E", "Ğ", "İ"],
      "color": "kırmızı"
    }
  },
  {
    "id": 93,
    "word": "gözlük",
    "imageUrl": "/images/93.png",
    "audioKeys": { "default": "gözlük" },
    "pairGroupId": ["saglam-kirik-gozluk-1", "seffaf-opak-gozluk-1"],
    "tags": {
      "category": "giysi",
      "concept": ["sağlam-kırık", "şeffaf-opak", "duyular"],
      "quality": ["sağlam", "şeffaf"],
      "lifeform": "cansız",
      "letters": ["G", "Ö", "Z", "L", "Ü", "K"],
      "syllables": ["göz", "lük"],
      "sense": "görme",
      "color": "kırmızı"
    }
  },
  {
    "id": 94,
    "word": "fındık",
    "imageUrl": "/images/94.png",
    "audioKeys": { "default": "fındık", "concept": "sert" },
    "pairGroupId": "sert-yumusak-yiyecek-1",
    "tags": {
      "category": "meyve",
      "concept": ["sert-yumuşak"],
      "texture": "sert",
      "lifeform": "canlı",
      "letters": ["F", "I", "N", "D", "I", "K"],
      "syllables": ["fın", "dık"],
      "color": "kahverengi"
    }
  },
  {
    "id": 95,
    "word": "jakuzi",
    "imageUrl": "/images/95.png",
    "audioKeys": { "default": "jakuzi", "concept": "sıcak" },
    "pairGroupId": "sicak-soguk-banyo-1",
    "tags": {
      "category": "banyo",
      "concept": ["sıcak-soğuk"],
      "temperature": "sıcak",
      "lifeform": "cansız",
      "letters": ["J", "A", "K", "U", "Z", "İ"],
      "syllables": ["ja", "ku", "zi"]
    }
  },
  {
    "id": 96,
    "word": "sandalye",
    "imageUrl": "/images/96.png",
    "audioKeys": { "default": "sandalye", "concept": "yanında" },
    "pairGroupId": "yaninda-karsisinda-esya-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["yanında-karşısında"],
      "position": "yanında",
      "lifeform": "cansız",
      "letters": ["S", "A", "N", "D", "A", "L", "Y", "E"],
      "syllables": ["san", "dal", "ye"]
    }
  },
  {
    "id": 97,
    "word": "sandalye",
    "imageUrl": "/images/97.png",
    "audioKeys": { "default": "sandalye", "concept": "karşısında" },
    "pairGroupId": "yaninda-karsisinda-esya-1",
    "tags": {
      "category": "ev_esya",
      "concept": ["yanında-karşısında"],
      "position": "karşısında",
      "lifeform": "cansız",
      "letters": ["S", "A", "N", "D", "A", "L", "Y", "E"],
      "syllables": ["san", "dal", "ye"]
    }
  },
  {
    "id": 98,
    "word": "havuç",
    "imageUrl": "/images/98.png",
    "audioKeys": { "default": "havuç", "concept": "uzun" },
    "pairGroupId": ["uzun-kisa-sebze-1", "taze-bayat-sebze-1"],
    "tags": {
      "category": "sebze",
      "concept": ["uzun-kısa", "taze-bayat"],
      "length": "uzun",
      "quality": "taze",
      "lifeform": "canlı",
      "letters": ["H", "A", "V", "U", "Ç"],
      "syllables": ["ha", "vuç"],
      "color": "turuncu"
    }
  },
  {
    "id": 99,
    "word": "havuç",
    "imageUrl": "/images/99.png",
    "audioKeys": { "default": "havuç", "concept": "kısa" },
    "pairGroupId": "uzun-kisa-sebze-1",
    "tags": {
      "category": "sebze",
      "concept": ["uzun-kısa"],
      "length": "kısa",
      "lifeform": "canlı",
      "letters": ["H", "A", "V", "U", "Ç"],
      "syllables": ["ha", "vuç"],
      "color": "turuncu"
    }
  },
  {
    "id": 100,
    "word": "aslan",
    "imageUrl": "/images/100.png",
    "audioKeys": { "default": "aslan", "concept": "yaşlı" },
    "pairGroupId": "yasli-genc-aslan-1",
    "tags": {
      "syllables": ["as", "lan"],
      "category": "hayvan",
      "concept": ["yaşlı-genç"],
      "lifeform": "canlı",
      "letters": ["A", "S", "L", "A", "N"],
      "age": "yaşlı",
      "color": "kahverengi",
      "direction": "sol"
    }
  }
];