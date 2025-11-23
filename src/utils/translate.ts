import rawWordmapEN from "./wordmap.tr-en.json";
import rawWordmapDE from "./wordmap.tr-de.json";
import rawWordmapFR from "./wordmap.tr-fr.json";
import rawWordmapNL from "./wordmap.tr-nl.json";
import rawWordmapAZ from "./wordmap.tr-az.json";

// Modular i18n dosyalarından ek çevirileri al
import enCommon from "../i18n/en/common.json";
import enScreens from "../i18n/en/screens.json";
import enLetterActivities from "../i18n/en/letterActivities.json";
import enGameActivities from "../i18n/en/gameActivities.json";
import enConcepts from "../i18n/en/concepts.json";
import enObjects from "../i18n/en/objects.json";
import enQuestions from "../i18n/en/questions.json";
import trQuestions from "../i18n/tr/questions.json";
import deQuestions from "../i18n/de/questions.json";
import frQuestions from "../i18n/fr/questions.json";
import nlQuestions from "../i18n/nl/questions.json";
import azQuestions from "../i18n/az/questions.json";
import enActivityFeedback from "../i18n/en/activityFeedback.json";
import enCommunication from "../i18n/en/communication.json";

type TargetLang = 'en' | 'de' | 'fr' | 'nl' | 'az';
// QUESTION_TRANSLATIONS removed — use `src/i18n/*/questions.json` files instead.

// Prevent unused-import errors by referencing the imported modules in a single array.
const __IMPORTED: any[] = [
	rawWordmapEN,
	rawWordmapDE,
	rawWordmapFR,
	rawWordmapNL,
	rawWordmapAZ,
	enCommon,
	enScreens,
	enLetterActivities,
	enGameActivities,
	enConcepts,
	enObjects,
	enQuestions,
	trQuestions,
	deQuestions,
	frQuestions,
	nlQuestions,
	azQuestions,
	enActivityFeedback,
	enCommunication,
];
void __IMPORTED;

export function translateLabel(text: string, lang: string): string {
	if (!text) return text;
	if (lang === 'tr') return text;
	// Lightweight fallback: return original text for now.
	return text;
}

export function getSpeechLocale(lang: string): string {
	switch (lang) {
		case 'tr':
		case 'tr-TR':
			return 'tr-TR';
		case 'de':
		case 'de-DE':
			return 'de-DE';
		case 'fr':
		case 'fr-FR':
			return 'fr-FR';
		case 'nl':
		case 'nl-NL':
			return 'nl-NL';
		case 'az':
			return 'az-AZ';
		case 'en':
		default:
			return 'en-US';
	}
}

export function withIndefiniteArticle(word: string, lang?: string): string {
	const _lang = lang || 'en';
	if (_lang === 'en' || _lang.startsWith('en')) {
		if (!word) return word;
		const first = word[0].toLowerCase();
		const vowel = ['a', 'e', 'i', 'o', 'u'].includes(first);
		return `${vowel ? 'an' : 'a'} ${word}`;
	}
	return word;
}

export function translateQuestion(text: string, lang: 'tr' | 'en' | 'de' | 'fr' | 'nl' | 'az' | string): string {
	if (!text) return text;
	if (lang === 'tr') return text;
	const trimmed = text.trim();

	// Try to find the question key by matching the Turkish questions.json values.
	try {
		const trQs = (trQuestions as any)?.questions || {};
		let matchedKey: string | undefined;
		for (const [k, v] of Object.entries(trQs)) {
			if (typeof v === 'string' && v.trim() === trimmed) {
				matchedKey = k;
				break;
			}
		}
		if (matchedKey) {
			const target = (['en', 'de', 'fr', 'nl', 'az'] as const).includes(lang as any) ? (lang as TargetLang) : 'en';
			const langMaps: Record<TargetLang, any> = {
				en: enQuestions,
				de: deQuestions,
				fr: frQuestions,
				nl: nlQuestions,
				az: azQuestions,
			};
			const candidate = (langMaps[target]?.questions || {})[matchedKey] || (enQuestions as any)?.questions?.[matchedKey];
			if (candidate) return candidate;
		}
	} catch (err) {
		// if lookup fails, continue to pattern matching fallback below
	}

	// Pattern matching for common question structures (fallback)
	const patterns = [
		{
			regex: /^(.*) olan hangisi\?$/,
			templates: {
				en: "Which one is $1?",
				de: "Welches ist $1?",
				fr: "Lequel est $1?",
				nl: "Welke is $1?",
				az: "Hansı $1?"
			}
		},
		{
			regex: /^(.*) hangisi\?$/,
			templates: {
				en: "Which one is $1?",
				de: "Welches ist $1?",
				fr: "Lequel est $1?",
				nl: "Welke is $1?",
				az: "Hansı $1?"
			}
		},
		{
			regex: /^Hangisi (.*)\?$/,
			templates: {
				en: "Which one is $1?",
				de: "Welches ist $1?",
				fr: "Lequel est $1?",
				nl: "Welke is $1?",
				az: "Hansı $1?"
			}
		}
	];

	for (const pattern of patterns) {
		const match = trimmed.match(pattern.regex);
		if (match) {
			const adjective = match[1];
			const translatedAdjective = adjective;
			const target = (['en', 'de', 'fr', 'nl', 'az'] as const).includes(lang as any) ? (lang as TargetLang) : 'en';
			const template = pattern.templates[target] || pattern.templates.en;
			return template.replace('$1', translatedAdjective);
		}
	}

	return trimmed;
}