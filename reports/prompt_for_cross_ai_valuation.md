# Program Modu — Etkinlik Değerleme ve Seviyelendirme İstemi (Paylaşılacak Prompt)

Amaç
- Aşağıdaki etkinlik kataloğu için, okul öncesi ve otizm dostu bir pedagojik çerçevede “değer/öncelik” ve “sıralama/seviye” önerisi üretin.
- Somuttan soyuta giden bir akış, kısa oturumlar ve aralıklı tekrar (spaced repetition) ilkelerini gözetin.
- Velinin anlayacağı yalın bir dil ve geliştiricinin uygulayacağı net bir şema üretin.

Kısıtlar ve İlkeler
- Yaş grubu: 3–7 (bireysel farklılıklara hassas).
- Oturum süresi: 10–15 dk, 4–7 kısa aktivite (çok uzun zincirlerden kaçının).
- Somut → yarı somut → soyut ilerleyiş.
- Dikkat/pözitif pekiştirme: Başarıya göre hafif tekrar, başarısızlıkta zorlamadan geçiş.
- İçerik yalnızca sağlanan katalogdan seçilecek; yeni etkinlik icat etmeyin.
- Harf & Ses şu an TR ağırlıklı — kapsama olsa da önceliği genel kavramlar/akıl oyunlarına verin.

İstenen Çıktılar (2 parça)
1) Etkinlik Skor Kartı (JSON)
- Her etkinlik için bir kayıt üretin:
  - id: string (katalog ID’si)
  - name: string (katalog adı)
  - domain: one of [LetterSound, Objects, Concept, Reasoning, FineMotor, Relative]
  - valueScore: integer 1–5 (gelişimsel öncelik)
  - difficulty: integer 1–5 (algısal/zihinsel yük)
  - prerequisites: string[] (varsa kısa ID listesi)
  - rationale: string (1–2 cümle açıklama)

2) 12 Seviyelik Taslak Plan (JSON)
- levels: array of 12 öğe; her seviye için:
  - level: number (1–12)
  - activities: array of 4–7 öğe; her öğe:
    - id: string (katalog ID’si)
    - note: string (kısa gerekçe / rol: ısınma, kavram 1, akıl oyunu, nesne, pekiştirme vb.)
- Kurallar:
  - Her seviyede çeşitlilik: en az 1 kavram, 1 akıl oyunu; 2–3. seviyeden itibaren nesne slotu düzenli dönsün.
  - Bağımlılıkları saygıla (ör. BigSmall → LongShort vb.).
  - İlk 6 seviye temel, 7–12 pekiştirme + genişleme.

Biçim
- JSON çıktıyı iki blokta verin: "scoreCard" ve "levels".
- Maksimum toplam 3000–4000 tokenı hedefleyin (gerekirse kısa tutun).

Değerlendirme Ölçütleri
- Tutarlılık: Değer-difficulty-prereq uyuşması.
- Geniş kapsam: 12 seviyede ana temaların çoğuna dokunma.
- Uygulanabilirlik: Kısa, dengeli oturumlar.

Katalog (Yapıştırılacak)
- Aşağıdaki kataloğu eksiksiz kopyalayıp sorunun altına yapıştırın:

```
<<BURAYA reports/activity_catalog.md İÇERİĞİNİ YAPIŞTIRIN>>
```

Örnek Kayıt (scoreCard)
```
{
  "id": "BigSmall",
  "name": "Büyük / Küçük",
  "domain": "Concept",
  "valueScore": 5,
  "difficulty": 2,
  "prerequisites": [],
  "rationale": "Boyut kavramı birçok başka boyutsal kavram için temel oluşturur."
}
```

Örnek Seviye (levels)
```
{
  "level": 1,
  "activities": [
    { "id": "Colors", "note": "Isınma — somut ve hızlı başarı" },
    { "id": "BigSmall", "note": "Temel boyut kavramı" },
    { "id": "WhatDoesntBelong", "note": "Görsel dikkat ve sınıflama" },
    { "id": "meyveler", "note": "Nesne kategorisi — genel kelime dağarcığı" },
    { "id": "PatternCompletion", "note": "Kısa akıl oyunu — sıralı düşünme" }
  ]
}
```

Ek Notlar
- Çocuğun performansına göre aynı seans içinde mikro-tekrar olabilir; plan bunu zorunlu kılmaz.
- Eğer bir etkinliği atamakta ikilem yaşıyorsanız, kısa bir "kararsızlık" notu düşebilirsiniz.
- Yanıtınızı kısa ama uygulanabilir tutun; geliştirici bu çıktıyı seviye motoruna doğrudan besleyecek.
