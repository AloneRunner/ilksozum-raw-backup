# 🤖 AI Translation Guide for i18n Concept Files

## 📋 Task Overview
You need to update i18n JSON files for **concept-based activities** in languages: **French (FR), German (DE), Dutch (NL), Azerbaijani (AZ)**.

The English (EN) and Turkish (TR) versions have been corrected and serve as your reference templates.

---

## ✅ Correct Pattern (Follow This)

### Key Structure Rules:
1. **Remove `questions` wrapper** - Keys should be directly under the main namespace
2. **Use Turkish concept names in keys** - NOT English (e.g., `_uzun` not `_long`, `_sert` not `_hard`)
3. **Add concept suffix to ALL keys** - Format: `yes_{item}_{concept}` and `no_{item}_{concept}`
4. **Keep translations in target language** - Only the **key names** use Turkish normalization

---

## 📖 Examples

### ❌ WRONG (Old Format):
```json
{
  "longShort": {
    "questions": {
      "q_which_is_long": "Lequel est long?",
      "yes_girafe_long": "Oui, la girafe est longue.",
      "yes_souris_short": "Oui, la souris est courte."
    }
  }
}
```

### ✅ CORRECT (New Format):
```json
{
  "longShort": {
    "q_which_is_long": "Lequel est long?",
    "q_which_is_short": "Lequel est court?",
    "yes_zurafa_uzun": "Oui, la girafe est longue.",
    "no_zurafa_uzun": "Non, la girafe n'est pas longue.",
    "yes_fare_kisa": "Oui, la souris est courte.",
    "no_fare_kisa": "Non, la souris n'est pas courte."
  }
}
```

---

## 🔑 Concept Mappings (Turkish → English)

Use these **Turkish normalized keys** (remove diacritics: ş→s, ı→i, ğ→g, ü→u, ö→o, ç→c):

| Activity | Concept 1 (TR Key) | Concept 2 (TR Key) | EN Translation |
|----------|-------------------|-------------------|----------------|
| longShort | `_uzun` | `_kisa` | long / short |
| hardSoft | `_sert` | `_yumusak` | hard / soft |
| derinSig | `_derin` | `_sig` | deep / shallow |
| thinThick | `_ince` | `_kalin` | thin / thick |
| bigSmall | `_buyuk` | `_kucuk` | big / small |
| wideNarrow | `_genis` | `_dar` | wide / narrow |
| straightCurved | `_duz` | `_egri` | straight / curved |
| parlakMat | `_parlak` | `_mat` | shiny / matte |
| heavyLight | `_agir` | `_hafif` | heavy / light |
| hotCold | `_sicak` | `_soguk` | hot / cold |
| wetDry | `_islak` | `_kuru` | wet / dry |
| cleanDirty | `_temiz` | `_kirli` | clean / dirty |
| aliveLifeless | `_canli` | `_cansiz` | alive / lifeless |
| brokenIntact | `_kirik` | `_sagla m` | broken / intact |

---

## 📝 Step-by-Step Instructions

### For each file (e.g., `fr/longShort.json`):

1. **Open the corresponding EN file** (`en/longShort.json`) as reference
2. **Check EN file structure** - it has the correct key names
3. **Copy EN file keys** - these are the exact keys you need
4. **Translate only the VALUES** to your target language (FR/DE/NL/AZ)
5. **Keep the KEY NAMES identical** to EN version

### Example Workflow:

**EN version (reference):**
```json
{
  "longShort": {
    "q_which_is_long": "Which one is long?",
    "yes_zurafa_uzun": "Yes, the giraffe is long.",
    "no_zurafa_uzun": "No, the giraffe is not long."
  }
}
```

**FR version (translate VALUES only):**
```json
{
  "longShort": {
    "q_which_is_long": "Lequel est long?",
    "yes_zurafa_uzun": "Oui, la girafe est longue.",
    "no_zurafa_uzun": "Non, la girafe n'est pas longue."
  }
}
```

**DE version:**
```json
{
  "longShort": {
    "q_which_is_long": "Welches ist lang?",
    "yes_zurafa_uzun": "Ja, die Giraffe ist lang.",
    "no_zurafa_uzun": "Nein, die Giraffe ist nicht lang."
  }
}
```

---

## 📂 Files to Update

Update these files in `src/i18n/{lang}/` directories (FR, DE, NL, AZ):

### Priority 1 (Core Concepts):
- ✅ `derinSig.json` - ALREADY FIXED ✓
- ✅ `longShort.json` 
- ✅ `hardSoft.json`
- ✅ `straightCurvedConcepts.json`
- `thinThickConcepts.json`
- `bigSmall.json`
- `wideNarrowConcepts.json`
- `parlakMatConcepts.json`

### Priority 2 (Additional):
- `heavyLight.json`
- `hotCold.json`
- `wetDryConcepts.json`
- `cleanDirty.json`
- `aliveLifeless.json`
- `brokenIntact.json`
- `bitterSweet.json`
- `fullEmptyConcepts.json`
- `fewMuchConcepts.json`
- `openClosedConcepts.json`
- `oddEvenConcepts.json`
- `oldNewConcepts.json`
- `youngOldConcepts.json`
- `roughSmoothConcepts.json`
- `seffafOpakConcepts.json`
- `sivriKutConcepts.json`
- `tersDuzConcepts.json`

---

## ⚠️ Common Mistakes to Avoid

1. ❌ Don't keep `questions` wrapper
2. ❌ Don't use English in key names (`_long` → use `_uzun`)
3. ❌ Don't forget concept suffix on item keys
4. ❌ Don't translate key names - only translate VALUES
5. ❌ Don't use `"yes_item"` without concept - use `"yes_item_concept"`

---

## 🎯 Validation Checklist

After updating each file, verify:

- [ ] No `questions` object wrapper
- [ ] All keys use Turkish concept suffixes (check EN file for reference)
- [ ] Translations are natural in target language
- [ ] JSON syntax is valid (no trailing commas, proper quotes)
- [ ] Item names are normalized (no Turkish diacritics: ş→s, ç→c, etc.)

---

## 💡 Pro Tips

1. **Use EN file as master reference** - it has all correct key names
2. **Copy-paste key structure** from EN, then translate values
3. **Preserve grammatical gender/articles** in your language
4. **Keep sentence structure natural** - don't translate word-by-word
5. **Test with validator**: Use online JSON validators before saving

---

## 🚀 Ready to Start?

1. Open `src/i18n/en/{filename}.json` (reference)
2. Open `src/i18n/{your_lang}/{filename}.json` (to edit)
3. Copy EN keys, translate values
4. Save and validate JSON

**Questions?** Check the EN and TR versions - they're your source of truth!

Good luck! 🎉
