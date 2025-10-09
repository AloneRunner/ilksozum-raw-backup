import React, { useState, useEffect, useRef, useId } from 'react';
import { ConceptRound, ActivityType } from '../types.ts';
import Card from './ui/Card.tsx';
import SpeakerIcon from './icons/SpeakerIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { speak, playEffect } from '../services/speechService.ts';
import BanIcon from './icons/BanIcon.tsx';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeSlashIcon from './icons/EyeSlashIcon.tsx';
import { useAutoSpeak } from '../hooks/useAutoSpeak.ts';
import PlusCircleIcon from './icons/PlusCircleIcon.tsx';
import MinusCircleIcon from './icons/MinusCircleIcon.tsx';
import PersonIcon from './icons/PersonIcon.tsx';
import AppleIcon from './icons/AppleIcon.tsx';
import SnowflakeIcon from './icons/SnowflakeIcon.tsx';
import HouseIconSimple from './icons/HouseIconSimple.tsx';
import LightBulbIcon from './icons/LightBulbIcon.tsx';
import useWindowSize from '../hooks/useWindowSize.ts';
import { t, getCurrentLanguage } from '../i18n/index.ts';
import { translateLabel } from '../utils/translate.ts';

// Localized question strings keyed by questionAudioKey; fallback to roundData.question when missing
const QUESTION_TEXTS: Record<'tr' | 'en', Record<string, string>> = {
    tr: {
        // Senses
        q_which_sense_see: 'Hangisiyle g?r?r?z?',
        q_which_sense_hear: 'Hangisiyle duyar?z?',
        q_which_sense_smell: 'Hangisiyle koku al?r?z?',
        q_which_sense_taste: 'Hangisiyle tat al?r?z?',
        q_which_sense_touch: 'Hangisiyle dokunuruz?',
        // Qualities

        q_which_is_big: 'Büyük olan hangisi?',
        q_which_is_small: 'Küçük olan hangisi?',
        q_which_is_long: 'Uzun olan hangisi?',
        q_which_is_short: 'Kısa olan hangisi?',
        q_which_is_thin: 'İnce olan hangisi?',
        q_which_is_thick: 'Kalın olan hangisi?',
        q_which_is_wide: 'Geniş olan hangisi?',
            'upright': 'upside down', 'upside down': 'upright', 'shiny': 'matte', 'matte': 'shiny', 'wrinkled': 'smooth',
            'deep': 'shallow', 'shallow': 'deep', 'crowded': 'sparse', 'sparse': 'crowded',
        q_which_is_narrow: 'Dar olan hangisi?',
        q_which_is_hard: 'Sert olan hangisi?',
        q_which_is_soft: 'Yumuşak olan hangisi?',
    q_which_is_clean: 'Temiz olan hangisi?',
    q_which_is_dirty: 'Kirli olan hangisi?',
    q_which_is_messy: 'Dağınık olan hangisi?',
    q_which_is_tidy: 'Toplu olan hangisi?',
        q_which_is_wet: 'Islak olan hangisi?',
        q_which_is_dry: 'Kuru olan hangisi?',
        q_which_is_open: 'Açık olan hangisi?',
        q_which_is_closed: 'Kapalı olan hangisi?',
        q_which_is_straight: 'Düz olan hangisi?',
        q_which_is_curved: 'Eğri olan hangisi?',
        q_which_is_rough: 'Pürüzlü olan hangisi?',
        q_which_is_smooth: 'Pürüzsüz olan hangisi?',
        q_which_is_thorny: 'Dikenli olan hangisi?',
        q_which_is_wrinkled: 'Kırışık olan hangisi?',
        q_which_is_pointed: 'Sivri olan hangisi?',
        q_which_is_blunt: 'Küt olan hangisi?',
    q_which_is_alive: 'Canlı olan hangisi?',
    q_which_is_lifeless: 'Cansız olan hangisi?',
    q_which_is_intact: 'Sağlam olan hangisi?',
    q_which_is_broken: 'Kırık olan hangisi?',
    // Note: q_which_is_old is context-dependent in TR (OldNew = "Eski"; YoungOld = "Yaşlı").
    // We handle the special-case in getLocalizedQuestion below.
    q_which_is_old: 'Eski olan hangisi?',
    q_which_is_new: 'Yeni olan hangisi?',
    q_which_is_young: 'Genç olan hangisi?',
        q_which_is_heavy: 'Ağır olan hangisi?',
        q_which_is_light: 'Hafif olan hangisi?',
        q_which_is_hot: 'Sıcak olan hangisi?',
        q_which_is_cold: 'Soğuk olan hangisi?',
    q_which_is_loud: 'Gürültülü olan hangisi?',
    q_which_is_noisy: 'Gürültülü olan hangisi?',
        q_which_is_quiet: 'Sessiz olan hangisi?',
    q_which_is_deep: 'Derin olan hangisi?',
    q_which_is_shallow: 'Sığ olan hangisi?',
    q_which_is_crowded: 'Kalabalık olan hangisi?',
    q_which_is_sparse: 'Tenha olan hangisi?',
    q_which_is_shiny: 'Parlak olan hangisi?',
    q_which_is_matte: 'Mat olan hangisi?',
    q_which_is_transparent: 'Şeffaf olan hangisi?',
    q_which_is_opaque: 'Opak olan hangisi?',
    q_which_is_fresh: 'Taze olan hangisi?',
    q_which_is_stale: 'Bayat olan hangisi?',
    q_which_is_lazy: 'Tembel olan hangisi?',
    q_which_is_hardworking: 'Çalışkan olan hangisi?',
    q_which_is_upright: 'Düzgün olan hangisi?',
        // Temporal
        q_which_is_before: 'Önce hangisi olur?',
        q_which_is_after: 'Sonra hangisi olur?',
        q_which_is_day: 'Gündüz olan hangisi?',
        q_which_is_night: 'Gece olan hangisi?',
        q_which_is_fast: 'Hızlı olan hangisi?',
        q_which_is_slow: 'Yavaş olan hangisi?',
        // Spatial
    q_which_is_above: 'Yukarıda olan hangisi?',
    q_which_is_below: 'Aşağıda olan hangisi?',
    q_which_is_on: 'Üstünde olan hangisi?',
    q_which_is_under: 'Altında olan hangisi?',
    q_which_are_beside: 'Yan yana olanlar hangisi?',
    q_which_are_opposite: 'Karşılıklı olanlar hangisi?',
    q_which_is_in_front: 'Önündeki hangisi?',
    q_which_is_behind: 'Arkasındaki hangisi?',
    q_which_is_inside: 'İçindeki hangisi?',
    q_which_is_outside: 'Dışındaki hangisi?',
    q_which_is_between: 'Arasında olan hangisi?',
    q_which_is_near: 'Daha yakın olan hangisi?',
    q_which_is_far: 'Daha uzak olan hangisi?',
    q_which_is_higher: 'Daha yüksekte olan hangisi?',
    q_which_is_lower: 'Daha alçakta olan hangisi?',
        q_which_faces_left: 'Sola bakan hangisi?',
        q_which_faces_right: 'Sağa bakan hangisi?',
    },
    en: {
        // Senses
        q_which_sense_see: 'Which sense do we use to see?',
        q_which_sense_hear: 'Which sense do we use to hear?',
        q_which_sense_smell: 'Which sense do we use to smell?',
        q_which_sense_taste: 'Which sense do we use to taste?',
        q_which_sense_touch: 'Which sense do we use to touch?',
        // Qualities

        q_which_is_big: 'Which one is big?',
        q_which_is_small: 'Which one is small?',
        q_which_is_long: 'Which one is long?',
        q_which_is_short: 'Which one is short?',
        q_which_is_thin: 'Which one is thin?',
        q_which_is_thick: 'Which one is thick?',
        q_which_is_wide: 'Which one is wide?',
        q_which_is_narrow: 'Which one is narrow?',
        q_which_is_hard: 'Which one is hard?',
        q_which_is_soft: 'Which one is soft?',
    q_which_is_clean: 'Which one is clean?',
    q_which_is_dirty: 'Which one is dirty?',
    q_which_is_messy: 'Which one is messy?',
    q_which_is_tidy: 'Which one is tidy?',
        q_which_is_wet: 'Which one is wet?',
        q_which_is_dry: 'Which one is dry?',
        q_which_is_open: 'Which one is open?',
        q_which_is_closed: 'Which one is closed?',
        q_which_is_straight: 'Which one is straight?',
        q_which_is_curved: 'Which one is curved?',
        q_which_is_rough: 'Which one is rough?',
        q_which_is_smooth: 'Which one is smooth?',
        q_which_is_thorny: 'Which one is thorny?',
        q_which_is_wrinkled: 'Which one is wrinkled?',
        q_which_is_pointed: 'Which one is pointed?',
        q_which_is_blunt: 'Which one is blunt?',
    q_which_is_alive: 'Which one is alive?',
    q_which_is_lifeless: 'Which one is lifeless?',
    q_which_is_intact: 'Which one is intact?',
    q_which_is_broken: 'Which one is broken?',
    q_which_is_old: 'Which one is old?',
    q_which_is_new: 'Which one is new?',
    q_which_is_young: 'Which one is young?',
        q_which_is_heavy: 'Which one is heavy?',
        q_which_is_light: 'Which one is light?',
        q_which_is_hot: 'Which one is hot?',
        q_which_is_cold: 'Which one is cold?',
    q_which_is_loud: 'Which one is noisy?',
    q_which_is_noisy: 'Which one is noisy?',
        q_which_is_quiet: 'Which one is quiet?',
    q_which_is_deep: 'Which one is deep?',
    q_which_is_shallow: 'Which one is shallow?',
    q_which_is_crowded: 'Which one is crowded?',
    q_which_is_sparse: 'Which one is sparse?',
    q_which_is_shiny: 'Which one is shiny?',
    q_which_is_matte: 'Which one is matte?',
    q_which_is_transparent: 'Which one is transparent?',
    q_which_is_opaque: 'Which one is opaque?',
    q_which_is_fresh: 'Which one is fresh?',
    q_which_is_stale: 'Which one is stale?',
    q_which_is_lazy: 'Which one is lazy?',
    q_which_is_hardworking: 'Which one is hardworking?',
    q_which_is_upright: 'Which one is upright?',
        // Temporal
        q_which_is_before: 'Which comes before?',
        q_which_is_after: 'Which comes after?',
        q_which_is_day: 'Which one is day?',
        q_which_is_night: 'Which one is night?',
        q_which_is_fast: 'Which one is fast?',
        q_which_is_slow: 'Which one is slow?',
        // Spatial
    q_which_is_above: 'Which one is above?',
    q_which_is_below: 'Which one is below?',
    q_which_is_on: 'Which one is on?',
    q_which_is_under: 'Which one is under?',
    q_which_are_beside: 'Which ones are side by side?',
    q_which_are_opposite: 'Which ones are opposite?',
    q_which_is_in_front: 'Which one is in front?',
    q_which_is_behind: 'Which one is behind?',
    q_which_is_inside: 'Which one is inside?',
    q_which_is_outside: 'Which one is outside?',
    q_which_is_between: 'Which one is between?',
    q_which_is_near: 'Which one is nearer?',
    q_which_is_far: 'Which one is farther?',
    q_which_is_higher: 'Which one is higher?',
    q_which_is_lower: 'Which one is lower?',
        q_which_faces_left: 'Which one faces left?',
        q_which_faces_right: 'Which one faces right?',
        // Dynamic/generic
        q_which_is_color: 'Which one is the color?',
        q_which_is_shape: 'Which one is the shape?',
        q_which_is_emotion: 'Which one is the emotion?',
        q_which_is_different: 'Which one is different?',
    }
};

function getLocalizedQuestion(roundData: ConceptRound, lang: ReturnType<typeof getCurrentLanguage>): string {
    const key = roundData.questionAudioKey;
    if (!key) return roundData.question;
    if (lang === 'tr') {
        // Special-case: In Turkish, "old" is "eski" for objects (OldNew) and "yaşlı" for age (YoungOld)
        if (key === 'q_which_is_old') {
            return roundData.activityType === ActivityType.OldNew
                ? 'Eski olan hangisi?'
                : 'Yaşlı olan hangisi?';
        }
        // Prefer the dynamic Turkish question when it already contains the target (e.g., "kırmızı olan hangisi?")
        return QUESTION_TEXTS.tr[key] || roundData.question;
    }
    // For English, reconstruct dynamic questions for Colors/Shapes/Emotions using the Turkish target from the question
    const extractTargetFromQuestion = (q?: string) => {
        if (!q) return '';
        // Expect pattern: "<target> olan hangisi?"
        const normalized = q.trim();
        const suffix = ' olan hangisi?';
        let target = normalized.endsWith(suffix)
            ? normalized.slice(0, -suffix.length)
            : normalized;
        return target.trim();
    };

    if (key === 'q_which_is_color' || key === 'q_which_is_shape' || key === 'q_which_is_emotion') {
        const targetTr = extractTargetFromQuestion(roundData.question);
        const targetEn = translateLabel(targetTr, 'en');
        return `Which one is ${targetEn}?`;
    }
    if (key === 'q_which_is_different') {
        return QUESTION_TEXTS.en[key] || 'Which one is different?';
    }
    return QUESTION_TEXTS.en[key] || roundData.question;
}

function getConceptFromQuestionKey(roundData: ConceptRound, lang: ReturnType<typeof getCurrentLanguage>): string | undefined {
    const key = roundData.questionAudioKey;
    if (!key) return undefined;
    if (key === 'q_which_is_color' || key === 'q_which_is_shape' || key === 'q_which_is_emotion') {
        // Derive the target token from Turkish question "<target> olan hangisi?" and translate if needed
        const extractTargetFromQuestion = (q?: string) => {
            if (!q) return '';
            const normalized = q.trim();
            const suffix = ' olan hangisi?';
            let target = normalized.endsWith(suffix)
                ? normalized.slice(0, -suffix.length)
                : normalized;
            return target.trim();
        };
        const targetTr = extractTargetFromQuestion(roundData.question);
        return lang === 'tr' ? targetTr.toLocaleLowerCase('tr-TR') : translateLabel(targetTr, 'en').toLocaleLowerCase('en-US');
    }
    // Map question keys to the core concept word for speech feedback
    const mapTr: Record<string, string> = {
        q_which_sense_see: 'g?z',
        q_which_sense_hear: 'kulak',
        q_which_sense_smell: 'burun',
        q_which_sense_taste: 'dil',
        q_which_sense_touch: 'el',
        q_which_is_big: 'büyük',
        q_which_is_small: 'küçük',
        q_which_is_long: 'uzun',
        q_which_is_short: 'kısa',
        q_which_is_thin: 'ince',
        q_which_is_thick: 'kalın',
        q_which_is_wide: 'geniş',
        q_which_is_narrow: 'dar',
        q_which_is_hard: 'sert',
        q_which_is_soft: 'yumuşak',
        q_which_is_clean: 'temiz',
        q_which_is_dirty: 'kirli',
        q_which_is_messy: 'dağınık',
        q_which_is_tidy: 'toplu',
        q_which_is_wet: 'ıslak',
        q_which_is_dry: 'kuru',
        q_which_is_open: 'açık',
        q_which_is_closed: 'kapalı',
        q_which_is_straight: 'düz',
        q_which_is_curved: 'eğri',
        q_which_is_rough: 'pürüzlü',
        q_which_is_smooth: 'pürüzsüz',
        q_which_is_thorny: 'dikenli',
        q_which_is_wrinkled: 'kırışık',
        q_which_is_pointed: 'sivri',
        q_which_is_blunt: 'küt',
    q_which_is_alive: 'canlı',
    q_which_is_lifeless: 'cansız',
    q_which_is_intact: 'sağlam',
    q_which_is_broken: 'kırık',
        // q_which_is_old is handled contextually below for TR
        q_which_is_new: 'yeni',
        q_which_is_young: 'genç',
        q_which_is_heavy: 'ağır',
        q_which_is_light: 'hafif',
        q_which_is_hot: 'sıcak',
        q_which_is_cold: 'soğuk',
    q_which_is_loud: 'gürültülü',
    q_which_is_noisy: 'gürültülü',
        q_which_is_quiet: 'sessiz',
    q_which_is_deep: 'derin',
    q_which_is_shallow: 'sığ',
    q_which_is_crowded: 'kalabalık',
    q_which_is_sparse: 'tenha',
    q_which_is_shiny: 'parlak',
    q_which_is_matte: 'mat',
    q_which_is_transparent: 'şeffaf',
    q_which_is_opaque: 'opak',
    q_which_is_fresh: 'taze',
    q_which_is_stale: 'bayat',
    q_which_is_lazy: 'tembel',
    q_which_is_hardworking: 'çalışkan',
    q_which_is_upright: 'düzgün',
        q_which_is_before: 'önce',
        q_which_is_after: 'sonra',
        q_which_is_day: 'gündüz',
        q_which_is_night: 'gece',
        q_which_is_fast: 'hızlı',
        q_which_is_slow: 'yavaş',
    q_which_is_above: 'yukarıda',
    q_which_is_below: 'aşağıda',
    q_which_is_on: 'üstünde',
    q_which_is_under: 'altında',
    q_which_are_beside: 'yan yana',
    q_which_are_opposite: 'karşılıklı',
    q_which_is_in_front: 'önünde',
    q_which_is_behind: 'arkasında',
    q_which_is_inside: 'içinde',
    q_which_is_outside: 'dışında',
    q_which_is_between: 'arasında',
    q_which_is_near: 'yakın',
    q_which_is_far: 'uzak',
    q_which_is_higher: 'yüksek',
    q_which_is_lower: 'alçak',
        q_which_faces_left: 'sola bakan',
        q_which_faces_right: 'sağa bakan',
    };
    const mapEn: Record<string, string> = {
        q_which_sense_see: 'eye',
        q_which_sense_hear: 'ear',
        q_which_sense_smell: 'nose',
        q_which_sense_taste: 'tongue',
        q_which_sense_touch: 'hand',
        q_which_is_big: 'big',
        q_which_is_small: 'small',
        q_which_is_long: 'long',
        q_which_is_short: 'short',
        q_which_is_thin: 'thin',
        q_which_is_thick: 'thick',
        q_which_is_wide: 'wide',
        q_which_is_narrow: 'narrow',
        q_which_is_hard: 'hard',
        q_which_is_soft: 'soft',
        q_which_is_clean: 'clean',
        q_which_is_dirty: 'dirty',
        q_which_is_messy: 'messy',
        q_which_is_tidy: 'tidy',
        q_which_is_wet: 'wet',
        q_which_is_dry: 'dry',
        q_which_is_open: 'open',
        q_which_is_closed: 'closed',
        q_which_is_straight: 'straight',
        q_which_is_curved: 'curved',
        q_which_is_rough: 'rough',
        q_which_is_smooth: 'smooth',
        q_which_is_thorny: 'thorny',
        q_which_is_wrinkled: 'wrinkled',
        q_which_is_pointed: 'pointed',
        q_which_is_blunt: 'blunt',
    q_which_is_alive: 'alive',
    q_which_is_lifeless: 'lifeless',
    q_which_is_intact: 'intact',
    q_which_is_broken: 'broken',
        q_which_is_old: 'old',
        q_which_is_new: 'new',
        q_which_is_young: 'young',
        q_which_is_heavy: 'heavy',
        q_which_is_light: 'light',
        q_which_is_hot: 'hot',
        q_which_is_cold: 'cold',
    q_which_is_loud: 'noisy',
    q_which_is_noisy: 'noisy',
        q_which_is_quiet: 'quiet',
    q_which_is_deep: 'deep',
    q_which_is_shallow: 'shallow',
    q_which_is_crowded: 'crowded',
    q_which_is_sparse: 'sparse',
    q_which_is_shiny: 'shiny',
    q_which_is_matte: 'matte',
    q_which_is_transparent: 'transparent',
    q_which_is_opaque: 'opaque',
    q_which_is_fresh: 'fresh',
    q_which_is_stale: 'stale',
    q_which_is_lazy: 'lazy',
    q_which_is_hardworking: 'hardworking',
    q_which_is_upright: 'upright',
        q_which_is_before: 'before',
        q_which_is_after: 'after',
        q_which_is_day: 'day',
        q_which_is_night: 'night',
        q_which_is_fast: 'fast',
        q_which_is_slow: 'slow',
    q_which_is_above: 'above',
    q_which_is_below: 'below',
    q_which_is_on: 'on',
    q_which_is_under: 'under',
    q_which_are_beside: 'side by side',
    q_which_are_opposite: 'opposite',
    q_which_is_in_front: 'in front',
    q_which_is_behind: 'behind',
    q_which_is_inside: 'inside',
    q_which_is_outside: 'outside',
    q_which_is_between: 'between',
    q_which_is_near: 'near',
    q_which_is_far: 'far',
    q_which_is_higher: 'higher',
    q_which_is_lower: 'lower',
        q_which_faces_left: 'faces left',
        q_which_faces_right: 'faces right',
    };
    if (lang === 'tr') {
        if (key === 'q_which_is_old') {
            // Contextual concept word in Turkish
            return roundData.activityType === ActivityType.OldNew ? 'eski' : 'yaşlı';
        }
        return mapTr[key];
    }
    return mapEn[key];
}

// translateLabel moved to ../utils/translate.ts and imported above

// Helper Icon Components (moved from inside InteractiveConceptHelper)
const AppleCoreIcon: React.FC<{ className?: string }> = ({ className }) => <svg viewBox="0 0 100 100" className={className}><path d="M 50 80 C 40 70, 40 50, 50 40 C 60 50, 60 70, 50 80 Z" fill="#fef2f2" /><path d="M63.8,4.2c-2.6-2.1-6.1-2.6-9.1-1.2c-3,1.4-5,4.3-5.2,7.6" fill="#4d7c0f"/></svg>;
const CarIcon: React.FC<{ className?: string }> = ({ className }) => <svg viewBox="0 0 100 50" className={className}><path d="M95,30 H85 L80,20 H30 L25,30 H5 a5,5 0 0,0 0,10 H15 a10,10 0 0,0 20,0 H75 a10,10 0 0,0 20,0 H95 a5,5 0 0,0 0,-10 Z" stroke="black" strokeWidth="2" /></svg>;
const SunIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;


// --- Interactive Helper Component ---
const InteractiveConceptHelper: React.FC<{ activityType: ActivityType }> = ({ activityType }) => {
    const uniqueId = useId();
    // States for various helpers
    const [scale, setScale] = useState(1);
    const [length, setLength] = useState(10);
    const [thickness, setThickness] = useState(6);
    const [width, setWidth] = useState(12);
    const [isHard, setIsHard] = useState(false);
    const [isRough, setIsRough] = useState(false);
    const [isThorny, setIsThorny] = useState(false);
    const [isWrinkled, setIsWrinkled] = useState(false);
    const [isSharp, setIsSharp] = useState(false);
    const [isCurved, setIsCurved] = useState(false);
    const [weight, setWeight] = useState(0.2);
    const [depth, setDepth] = useState(20);
    const [people, setPeople] = useState<{ id: number; x: number; y: number }[]>([]);
    const [isNew, setIsNew] = useState(true);
    const [isYoung, setIsYoung] = useState(true);
    const [isClean, setIsClean] = useState(true);
    const [isWet, setIsWet] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isIntact, setIsIntact] = useState(true);
    const [isTidy, setIsTidy] = useState(true);
    const [isFresh, setIsFresh] = useState(true);
    const [isKnotted, setIsKnotted] = useState(false);
    const [isFull, setIsFull] = useState(false);
    const [isRightSideUp, setIsRightSideUp] = useState(true);
    const [itemCount, setItemCount] = useState(1);
    const [fillLevel, setFillLevel] = useState(0);
    const [isAfter, setIsAfter] = useState(false);
    const [isDay, setIsDay] = useState(true);
    const [isHot, setIsHot] = useState(true);
    const [isShiny, setIsShiny] = useState(true);
    const [isTransparent, setIsTransparent] = useState(false);
    const [isAlive, setIsAlive] = useState(true);
    const [isWorking, setIsWorking] = useState(false);
    const [taste, setTaste] = useState<'sweet' | 'bitter'>('sweet');
    const [fraction, setFraction] = useState<'whole' | 'half' | 'quarter'>('whole');
    const [oddEvenCount, setOddEvenCount] = useState(1);
    const [position, setPosition] = useState<'on' | 'under'>('on');
    const [positionAbove, setPositionAbove] = useState<'above' | 'below'>('above');
    const [arrangement, setArrangement] = useState<'beside' | 'opposite'>('beside');
    const [isInFront, setIsInFront] = useState(true);
    const [isInside, setIsInside] = useState(false);
    const [isBetween, setIsBetween] = useState(false);
    const [leftRightPos, setLeftRightPos] = useState<'left' | 'right'>('left');
    const [isNear, setIsNear] = useState(true);
    const [highLowPos, setHighLowPos] = useState<'high' | 'low'>('low');
    
    const MAX_PEOPLE = 12;
    const MAX_ITEMS = 12;
    const MUCH_THRESHOLD = 5;

    const baseButtonClasses = "p-3 sm:p-4 rounded-full text-white shadow-lg transition-transform transform hover:scale-110 disabled:opacity-50";

    // Reset all states when activity type changes
    useEffect(() => {
        setScale(1); setLength(10); setThickness(6); setWidth(12); setIsHard(false);
        setIsRough(false); setIsThorny(false); setIsWrinkled(false); setIsSharp(false);
        setIsCurved(false); setWeight(0.2); setDepth(20); setPeople([]);
        setIsNew(true); setIsYoung(true); setIsClean(true); setIsWet(false);
        setIsOpen(false); setIsIntact(true); setIsTidy(true); setIsFresh(true);
        setIsKnotted(false); setIsFull(false); setIsRightSideUp(true);
        setItemCount(1); setFillLevel(0); setIsAfter(false); setIsDay(true);
        setIsHot(true); setIsShiny(true); setIsTransparent(false);
        setIsAlive(true); setIsWorking(false); setTaste('sweet'); setFraction('whole');
        setOddEvenCount(1); setPosition('on'); setPositionAbove('above'); setArrangement('beside');
        setIsInFront(true); setIsInside(false); setIsBetween(false); setLeftRightPos('left');
        setIsNear(true); setHighLowPos('low');
    }, [activityType]);
    
    const helper = (() => {
        switch(activityType) {
            case ActivityType.Colors: {
                const colors = [
                    { spoken: 'kırmızı', colorClass: 'bg-red-500' },
                    { spoken: 'mavi', colorClass: 'bg-blue-500' },
                    { spoken: 'sarı', colorClass: 'bg-yellow-400' },
                    { spoken: 'yeşil', colorClass: 'bg-green-500' },
                    { spoken: 'turuncu', colorClass: 'bg-orange-500' },
                    { spoken: 'mor', colorClass: 'bg-purple-500' },
                    { spoken: 'pembe', colorClass: 'bg-pink-500' },
                    { spoken: 'kahverengi', colorClass: 'bg-amber-800' },
                    { spoken: 'siyah', colorClass: 'bg-black' },
                    { spoken: 'beyaz', colorClass: 'bg-white border-2 border-slate-200' },
                ];
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="grid grid-cols-5 gap-2"> {colors.map(({ spoken, colorClass }) => ( <button key={spoken} onClick={() => speak(spoken)} className={`w-8 h-8 sm-landscape:w-6 sm-landscape:h-6 aspect-square rounded-xl shadow-md ${colorClass} transition transform hover:scale-110`} aria-label={spoken} /> ))} </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-2 sm-landscape:gap-1 mt-4 sm-landscape:mt-0"> <p className="text-sm font-medium text-slate-600">{t('choice.learnColors')}</p> </div> </div> );
            }
            case ActivityType.Shapes: {
                 const shapes = [
                    { spoken: 'daire', path: 'M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0' },
                    { spoken: 'kare', path: 'M 10 10 H 90 V 90 H 10 Z' },
                    { spoken: 'üçgen', path: 'M 50 10 L 90 90 H 10 Z' },
                    { spoken: 'dikdörtgen', path: 'M 10 25 H 90 V 75 H 10 Z' },
                    { spoken: 'yıldız', path: 'M 50,10 L 61,40 L 95,40 L 67,60 L 78,90 L 50,70 L 22,90 L 33,60 L 5,40 L 39,40 Z' },
                    { spoken: 'oval', path: 'M 50,50 m -40,0 a 40,25 0 1,1 80,0 a 40,25 0 1,1 -80,0' }
                 ];
              return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="grid grid-cols-3 gap-2"> {shapes.map(({ spoken, path }) => ( <button key={spoken} onClick={() => speak(spoken)} className="w-12 h-12 sm-landscape:w-10 sm-landscape:h-10 aspect-square rounded-xl shadow-md bg-indigo-400 p-2 sm-landscape:p-1 transition transform hover:scale-110" aria-label={spoken}><svg viewBox="0 0 100 100" className="w-full h-full"><path d={path} fill="white" /></svg></button> ))} </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-2 sm-landscape:gap-1 mt-4 sm-landscape:mt-0"> <p className="text-sm font-medium text-slate-600">{t('choice.learnShapes')}</p> </div> </div> );
            }
            case ActivityType.Emotions: {
                const emotions = [
                    { spoken: 'mutlu', color: '#facc15', svg: <svg viewBox="0 0 100 100"><circle cx="35" cy="45" r="6" fill="black" /><circle cx="65" cy="45" r="6" fill="black" /><path d="M30 65 Q 50 85 70 65" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round"/></svg> },
                    { spoken: 'üzgün', color: '#60a5fa', svg: <svg viewBox="0 0 100 100"><circle cx="35" cy="45" r="6" fill="black" /><circle cx="65" cy="45" r="6" fill="black" /><path d="M30 70 Q 50 55 70 70" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round"/></svg> },
                    { spoken: 'kızgın', color: '#ef4444', svg: <svg viewBox="0 0 100 100"><path d="M25 40 L 45 45" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M75 40 L 55 45" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round"/><circle cx="35" cy="45" r="6" fill="black" /><circle cx="65" cy="45" r="6" fill="black" /><path d="M35 70 H 65" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round"/></svg> },
                    { spoken: 'şaşkın', color: '#a78bfa', svg: <svg viewBox="0 0 100 100"><circle cx="35" cy="45" r="8" fill="black" /><circle cx="65" cy="45" r="8" fill="black" /><ellipse cx="50" cy="75" rx="15" ry="10" fill="black"/></svg> },
                    { spoken: 'korkmuş', color: '#4ade80', svg: <svg viewBox="0 0 100 100"><circle cx="35" cy="45" r="6" fill="black" /><circle cx="65" cy="45" r="6" fill="black" /><path d="M30 75 Q 40 65, 50 75 T 70 75" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" /></svg> },
                ];
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="grid grid-cols-3 sm:grid-cols-5 gap-2"> {emotions.map(({ spoken, color, svg }) => ( <button key={spoken} onClick={() => speak(spoken)} className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8 aspect-square rounded-full shadow-md p-1 transition transform hover:scale-110" style={{ backgroundColor: color }} aria-label={spoken}> {svg} </button> ))} </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-2 sm-landscape:gap-1 mt-4 sm-landscape:mt-0"> <p className="text-sm font-medium text-slate-600">{t('choice.learnEmotions')}</p> </div> </div> );
            }
            case ActivityType.BigSmall:
                return (
                    <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8">
                        <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl">
                            <div className="w-24 h-24 bg-lime-500 rounded-full transition-transform duration-300" style={{ transform: `scale(${scale})` }}></div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 mt-4 sm-landscape:mt-0 sm-landscape:gap-2">
                            <p className="font-semibold text-lg sm-landscape:text-base text-slate-700 mb-2 sm-landscape:mb-1">Boyutu Değiştir</p>
                            <button onClick={() => { setScale(s => Math.min(2, s + 0.25)); speak('büyük'); }} className={`${baseButtonClasses} bg-green-500 flex items-center gap-2 w-40 sm-landscape:w-32 sm-landscape:text-base`} disabled={scale >= 2}>
                                <PlusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" />
                                <span className="text-xl font-bold sm-landscape:text-lg">Büyük</span>
                            </button>
                            <button onClick={() => { setScale(s => Math.max(0.5, s - 0.25)); speak('küçük'); }} className={`${baseButtonClasses} bg-red-500 flex items-center gap-2 w-40 sm-landscape:w-32 sm-landscape:text-base`} disabled={scale <= 0.5}>
                                <MinusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" />
                                <span className="text-xl font-bold sm-landscape:text-lg">Küçük</span>
                            </button>
                        </div>
                    </div>
                );
            case ActivityType.LongShort:
                 return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="w-6 bg-lime-500 rounded-full transition-all duration-300" style={{ height: `${length}rem` }}></div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center items-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setLength(l => Math.max(2, l - 2)); speak('kısa'); }} className={`${baseButtonClasses} bg-red-500 sm-landscape:w-32`} disabled={length <= 2}><MinusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> <button onClick={() => { setLength(l => Math.min(8, l + 2)); speak('uzun'); }} className={`${baseButtonClasses} bg-green-500 sm-landscape:w-32`} disabled={length >= 8}><PlusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> </div> </div> );
            case ActivityType.ThinThick:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="h-24 bg-lime-500 rounded-md transition-all duration-300" style={{ width: `${thickness}rem` }}></div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setThickness(t => Math.max(1, t - 1.5)); speak('ince'); }} className={`${baseButtonClasses} bg-red-500`} disabled={thickness <= 1}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setThickness(t => Math.min(7, t + 1.5)); speak('kalın'); }} className={`${baseButtonClasses} bg-green-500`} disabled={thickness >= 7}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.WideNarrow:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="h-24 bg-lime-500 rounded-md transition-all duration-300" style={{ width: `${width}rem` }}></div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setWidth(w => Math.max(3, w - 3)); speak('dar'); }} className={`${baseButtonClasses} bg-red-500`} disabled={width <= 3}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setWidth(w => Math.min(15, w + 3)); speak('geniş'); }} className={`${baseButtonClasses} bg-green-500`} disabled={width >= 15}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.HeavyLight:
                const translateY = (weight - 0.2) * 20;
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="relative w-24 h-24"> <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-4 bg-lime-800/30 rounded-full" style={{ transform: `translateX(-50%) scale(${1 + weight/2}, ${0.5 + weight/4})`, opacity: weight * 0.8 }} /> <div className="absolute inset-0 bg-amber-600 border-4 border-amber-800 rounded-lg transition-transform duration-300" style={{ transform: `translateY(${translateY}px)` }}></div> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setWeight(w => Math.max(0.2, w - 0.2)); speak('hafif'); }} className={`${baseButtonClasses} bg-red-500`} disabled={weight <= 0.2}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setWeight(w => Math.min(1.0, w + 0.2)); speak('ağır'); }} className={`${baseButtonClasses} bg-green-500`} disabled={weight >= 1.0}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.DerinSig:
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-40 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="relative w-32 h-32 bg-sky-200 border-4 border-sky-400 overflow-hidden rounded-lg"> <div className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-300" style={{ height: `${depth}%` }} /> </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setDepth(d => Math.min(90, d + 15)); speak('derin'); }} className={`${baseButtonClasses} bg-green-500 text-sm sm-landscape:w-32`} disabled={depth >= 90}>Derinleştir</button> <button onClick={() => { setDepth(d => Math.max(10, d - 15)); speak('sığ'); }} className={`${baseButtonClasses} bg-red-500 text-sm sm-landscape:w-32`} disabled={depth <= 10}>Sığlaştır</button> </div> </div> );
            case ActivityType.KalabalikTenha:
                 const addPerson = () => { if (people.length < MAX_PEOPLE) { const wasCrowded = people.length > 3; const newCount = people.length + 1; setPeople(p => [...p, { id: Date.now(), x: Math.random() * 80 + 10, y: Math.random() * 40 + 50 }]); if(newCount > 3 && !wasCrowded) speak('kalabalık'); }};
                 const removePerson = () => { if (people.length > 0) { const wasCrowded = people.length > 3; const newCount = people.length - 1; setPeople(p => p.slice(0, -1)); if(newCount <= 3 && wasCrowded) speak('tenha'); }};
                 return ( <div className="w-full text-center"> <div className="h-40 flex items-end justify-center rounded-lg bg-slate-300/50 relative overflow-hidden"> {people.map(p => ( <PersonIcon key={p.id} className="absolute w-12 h-12 text-blue-600 transition-all animate-pop-in" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }} /> ))} </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={removePerson} className={`${baseButtonClasses} bg-red-500`} disabled={people.length === 0}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={addPerson} className={`${baseButtonClasses} bg-green-500`} disabled={people.length >= MAX_PEOPLE}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.HardSoft:
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="w-24 h-24 bg-lime-500 transition-all duration-300" style={{ borderRadius: isHard ? '8px' : '50%', transform: isHard ? 'scale(1)' : 'scale(1.1, 0.9)' }}></div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setIsHard(false); speak('yumuşak'); }} className={`${baseButtonClasses} bg-red-500 sm-landscape:w-32`}><MinusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> <button onClick={() => { setIsHard(true); speak('sert'); }} className={`${baseButtonClasses} bg-green-500 sm-landscape:w-32`}><PlusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> </div> </div> );
            case ActivityType.RoughSmooth:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className={`w-24 h-24 rounded-full transition-all duration-300 ${isRough ? 'bg-lime-700' : 'bg-lime-500'}`} style={{ backgroundImage: isRough ? 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)' : 'none', backgroundSize: '5px 5px' }}></div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsRough(false); speak('pürüzsüz'); }} className={`${baseButtonClasses} bg-red-500`}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setIsRough(true); speak('pürüzlü'); }} className={`${baseButtonClasses} bg-green-500`}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.DikenliPuruzsuz:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-24 h-24"> <circle cx="50" cy="50" r="20" fill="#84cc16" /> {[...Array(12)].map((_, i) => ( <line key={i} x1="50" y1="50" x2="50" y2="20" stroke="#4d7c0f" strokeWidth="4" strokeLinecap="round" className="transition-transform duration-300" style={{ transformOrigin: '50px 50px', transform: `rotate(${i * 30}deg) scaleY(${isThorny ? 1.5 : 0})` }} /> ))} </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsThorny(false); speak('pürüzsüz'); }} className={`${baseButtonClasses} bg-red-500`}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setIsThorny(true); speak('dikenli'); }} className={`${baseButtonClasses} bg-green-500`}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.KirisikDuzgun:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg className="w-28 h-24"> <filter id={`wrinkle-filter-${uniqueId}`}> <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="turbulence" /> <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" xChannelSelector="R" yChannelSelector="G" /> </filter> <rect width="100%" height="100%" fill="#84cc16" className="transition-all duration-300" style={{ filter: isWrinkled ? `url(#wrinkle-filter-${uniqueId})` : 'none' }} /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsWrinkled(false); speak('düzgün'); }} className={`${baseButtonClasses} bg-red-500`}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setIsWrinkled(true); speak('kırışık'); }} className={`${baseButtonClasses} bg-green-500`}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.SivriKut:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="w-8 h-24 bg-lime-500 transition-all duration-300" style={{ clipPath: isSharp ? 'polygon(50% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsSharp(false); speak('küt'); }} className={`${baseButtonClasses} bg-red-500`}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setIsSharp(true); speak('sivri'); }} className={`${baseButtonClasses} bg-green-500`}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.StraightCurved:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg width="128" height="32" viewBox="0 0 128 32"> <path d={isCurved ? "M 0 16 Q 32 0, 64 16 T 128 16" : "M 0 16 L 128 16"} stroke="#84cc16" fill="transparent" strokeWidth="8" strokeLinecap="round" className="transition-all duration-300" /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsCurved(false); speak('düz'); }} className={`${baseButtonClasses} bg-red-500`}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setIsCurved(true); speak('eğri'); }} className={`${baseButtonClasses} bg-green-500`}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.OldNew:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-28 h-28"> <path d="M77.2,42.8c-7.9-8.4-19.1-8.8-27.5-1c-2.3,2.1-4,4.6-5,7.3c-1-2.7-2.7-5.2-5-7.3c-8.4-7.8-19.6-7.4-27.5,1 C-5.7,53.2-4,72.3,7.5,81.8c2.4,2,5.1,3.6,8.1,4.7c3.4,1.3,7,1.8,10.6,1.4c3.6-0.3,7-1.5,10-3.3c3-1.8,5.7-4.3,7.9-7.2 c2.2,2.9,4.9,5.3,7.9,7.2c3,1.8,6.4,3,10,3.3c3.6,0.3,7.2-0.1,10.6-1.4c3-1.1,5.7-2.7,8.1-4.7C104,72.3,105.7,53.2,77.2,42.8z" className={`transition-colors duration-300 ${isNew ? 'fill-red-600' : 'fill-amber-800'}`}/> <path d="M63.8,4.2c-2.6-2.1-6.1-2.6-9.1-1.2c-3,1.4-5,4.3-5.2,7.6c-0.1,2,0.5,3.9,1.5,5.5c-0.3-3-0.1-6.1,0.8-9 c1.2-3.6,3.6-6.6,6.7-8.1C59.8,3.9,61.4,3.8,62.9,4c-0.2,0-0.3,0-0.5,0.1C62.1,4.1,62.8,4.2,63.8,4.2z" className={`transition-colors duration-300 ${isNew ? 'fill-[#4d7c0f]' : 'fill-[#654321]'}`}/> <path d="M 20 50 A 15 15, 0, 0, 0, 35 35" className={`transition-opacity duration-300 ${isNew ? 'opacity-0' : 'opacity-100'}`} fill="#654321" /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsNew(false); speak('eski'); }} className={`${baseButtonClasses} bg-amber-600 text-sm px-4`}>Eski</button> <button onClick={() => { setIsNew(true); speak('yeni'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-4`}>Yeni</button> </div> </div> );
            case ActivityType.YoungOld:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-28 h-28"> <circle cx="50" cy="50" r="45" fill="#facc15" stroke="#ca8a04" strokeWidth="4" /> <circle cx="35" cy="40" r="5" fill="black" /> <circle cx="65" cy="40" r="5" fill="black" /> <path d="M30 65 Q 50 80 70 65" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/> <path d="M25 30 Q 30 25 35 30" stroke="#ca8a04" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${isYoung ? 'opacity-0' : 'opacity-100'}`} /> <path d="M65 30 Q 70 25 75 30" stroke="#ca8a04" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${isYoung ? 'opacity-0' : 'opacity-100'}`} /> <path d="M20 50 Q 15 55 20 60" stroke="#ca8a04" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${isYoung ? 'opacity-0' : 'opacity-100'}`} /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsYoung(false); speak('yaşlı'); }} className={`${baseButtonClasses} bg-slate-500 text-sm px-4`}>Yaşlı</button> <button onClick={() => { setIsYoung(true); speak('genç'); }} className={`${baseButtonClasses} bg-pink-400 text-sm px-4`}>Genç</button> </div> </div> );
            case ActivityType.CleanDirty:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="relative w-28 h-28"> <svg viewBox="0 0 24 24" className="w-full h-full text-slate-200" fill="currentColor"><path d="M12 2L9 5h6L12 2zm2 17.5V14h-4v5.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5zM12 22c-1.1 0-2-.9-2-2v-6h4v6c0 1.1-.9 2-2 2zm8-17H4v17.5c0 1.93 1.57 3.5 3.5 3.5h7c1.93 0 3.5-1.57 3.5-3.5V5z"/></svg> <svg viewBox="0 0 24 24" className={`absolute top-1/2 left-1/4 w-10 h-10 text-amber-800 transition-opacity duration-300 ${isClean ? 'opacity-0' : 'opacity-100'}`} fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.41 14.59L12 13.17l-3.41 3.42-1.41-1.41L10.59 12 7.17 8.59l1.41-1.41L12 10.83l3.41-3.42 1.41 1.41L13.41 12l3.42 3.41-1.42 1.18z"/></svg> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsClean(false); speak('kirli'); }} className={`${baseButtonClasses} bg-amber-700 text-sm px-4`}>Kirlet</button> <button onClick={() => { setIsClean(true); speak('temiz'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-4`}>Temizle</button> </div> </div> );
            case ActivityType.WetDry:
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className={`relative w-28 h-28 rounded-lg transition-colors duration-300 ${isWet ? 'bg-sky-400' : 'bg-orange-300'}`}> {isWet && <span className="absolute bottom-2 left-2 text-xl">💧</span>} </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setIsWet(true); speak('ıslak'); }} className={`${baseButtonClasses} bg-blue-500 text-sm px-4 sm-landscape:w-32`}>Isla</button> <button onClick={() => { setIsWet(false); speak('kuru'); }} className={`${baseButtonClasses} bg-orange-500 text-sm px-4 sm-landscape:w-32`}>Kurut</button> </div> </div> );
            case ActivityType.OpenClosed:
                 return ( <div className="w-full text-center"> <div className="h-40 flex items-center justify-center" style={{ perspective: '800px' }}> <div className="relative w-28 h-40 bg-amber-800 rounded-lg p-2"> <div className={`w-full h-full bg-amber-600 rounded-md transition-transform duration-500`} style={{ transformOrigin: 'left', transform: isOpen ? 'rotateY(-110deg)' : 'rotateY(0deg)' }}> <div className="absolute top-1/2 -translate-y-1/2 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div> </div> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsOpen(false); speak('kapalı'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Kapat</button> <button onClick={() => { setIsOpen(true); speak('açık'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Aç</button> </div> </div> );
            case ActivityType.AliveLifeless:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-28 h-28"> <path d="M 50 100 V 50" stroke={isAlive ? '#166534' : '#78716c'} strokeWidth="10" strokeLinecap="round" /> <circle cx="50" cy="30" r="25" fill={isAlive ? '#fde047' : '#a8a29e'} className="transition-all duration-300" style={{ transformOrigin: '50px 50px', transform: isAlive ? 'rotate(0deg)' : 'rotate(-25deg)'}} /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsAlive(false); speak('cansız'); }} className={`${baseButtonClasses} bg-slate-500 text-sm px-4`}>Soldur</button> <button onClick={() => { setIsAlive(true); speak('canlı'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Canlandır</button> </div> </div> );
            case ActivityType.BrokenIntact:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-24 h-24"> <g className="transition-transform duration-300" style={{ transform: isIntact ? 'scale(1)' : 'scale(1.1)', opacity: isIntact ? 1 : 0.8 }}> <circle cx="50" cy="50" r="45" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="4" className={`transition-opacity duration-300 ${isIntact ? 'opacity-100' : 'opacity-0'}`} /> <g className={`transition-opacity duration-300 ${!isIntact ? 'opacity-100' : 'opacity-0'}`}> <path d="M 50 5 A 45 45 0 0 1 85 25" fill="none" stroke="#94a3b8" strokeWidth="4" style={{ transformOrigin: 'center', transform: 'translateX(-5px)'}} /> <path d="M 85 25 A 45 45 0 0 1 75 65" fill="none" stroke="#94a3b8" strokeWidth="4" style={{ transformOrigin: 'center', transform: 'translate(5px, 5px)'}}/> <path d="M 75 65 A 45 45 0 0 1 25 75" fill="none" stroke="#94a3b8" strokeWidth="4" style={{ transformOrigin: 'center', transform: 'translate(-5px, 8px)'}}/> <path d="M 25 75 A 45 45 0 0 1 50 5" fill="none" stroke="#94a3b8" strokeWidth="4" style={{ transformOrigin: 'center', transform: 'translate(3px, -8px)'}}/> </g> </g> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsIntact(false); speak('kırık'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Kır</button> <button onClick={() => { setIsIntact(true); speak('sağlam'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Onar</button> </div> </div> );
            case ActivityType.MessyClean:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="w-32 h-32 bg-amber-200 rounded-lg relative"> {[...Array(5)].map((_, i) => <div key={i} className="absolute w-8 h-8 bg-sky-500 rounded-md transition-all duration-500" style={{ top: isTidy ? '50%' : `${20 + (i*40)%60}%`, left: isTidy ? '50%' : `${20 + (i%3)*30}%`, transform: `translate(-50%,-50%) rotate(${isTidy ? `${i*15}deg` : `${i*72}deg`})` }}/>)} </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsTidy(false); speak('dağınık'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Dağıt</button> <button onClick={() => { setIsTidy(true); speak('toplu'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Topla</button> </div> </div> );
            case ActivityType.TazeBayat:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <AppleIcon className={`w-24 h-24 transition-colors duration-300 ${isFresh ? 'text-red-600' : 'text-yellow-800'}`}/> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsFresh(false); speak('bayat'); }} className={`${baseButtonClasses} bg-yellow-700 text-sm px-4`}>Bayatlat</button> <button onClick={() => { setIsFresh(true); speak('taze'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Tazele</button> </div> </div> );
            case ActivityType.DugumCozuk:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg width="128" height="64" viewBox="0 0 128 64"> <path d={isKnotted ? "M24 40 C 4 24, 60 8, 80 32 C 100 56, 124 24, 104 40 C 84 56, 52 56, 24 40 Z" : "M20 32 C 40 48, 88 16, 108 32" } stroke="#a16207" fill="transparent" strokeWidth="8" strokeLinecap="round" className="transition-all duration-500" /> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsKnotted(true); speak('düğüm'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Düğümle</button> <button onClick={() => { setIsKnotted(false); speak('çözük'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Çöz</button> </div> </div> );
            case ActivityType.HungryFull:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-28 h-28"> <circle cx="50" cy="50" r="45" fill={isFull ? '#a3e635' : '#fef08a'} stroke={isFull ? '#65a30d' : '#facc15'} strokeWidth="4" className="transition-colors duration-300"/> <circle cx="35" cy="40" r="5" fill="black" /> <circle cx="65" cy="40" r="5" fill="black" /> <path d={isFull ? "M30 65 Q 50 80 70 65" : "M30 70 Q 50 60 70 70"} stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" className="transition-all duration-300"/> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsFull(false); speak('aç'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Acık</button> <button onClick={() => { setIsFull(true); speak('tok'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Doyur</button> </div> </div> );
            case ActivityType.TembelCaliskan:
                return ( <div className="w-full text-center"> <div className={`h-32 flex items-center justify-center relative bg-sky-100 rounded-lg overflow-hidden`}> <div className={`w-12 h-12 bg-yellow-400 rounded-full absolute ${isWorking ? 'animate-move-fast' : 'animate-move-slow'}`}></div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsWorking(false); speak('tembel'); }} className={`${baseButtonClasses} bg-orange-400 text-sm px-4`}>Tembel</button> <button onClick={() => { setIsWorking(true); speak('çalışkan'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-4`}>Çalışkan</button> </div> </div> );
            case ActivityType.BitterSweet:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <svg viewBox="0 0 100 100" className="w-28 h-28"> <circle cx="50" cy="50" r="45" fill={taste === 'sweet' ? '#fde047' : '#a3e635'} stroke={taste === 'sweet' ? '#f59e0b' : '#65a30d'} strokeWidth="4" className="transition-colors duration-300"/> <circle cx="35" cy="40" r="5" fill="black" /> <circle cx="65" cy="40" r="5" fill="black" /> <path d={taste === 'sweet' ? "M30 65 Q 50 80 70 65" : "M30 75 Q 50 60 70 75"} stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" className="transition-all duration-300"/> </svg> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setTaste('bitter'); speak('acı'); }} className={`${baseButtonClasses} bg-green-600 text-sm px-4`}>Acı</button> <button onClick={() => { setTaste('sweet'); speak('tatlı'); }} className={`${baseButtonClasses} bg-pink-400 text-sm px-4`}>Tatlı</button> </div> </div> );
            case ActivityType.TersDuz:
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="w-24 h-24 transition-transform duration-500" style={{ transform: isRightSideUp ? 'rotate(0deg)' : 'rotate(180deg)' }}><HouseIconSimple className="w-full h-full" /></div> </div> <div className="flex justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setIsRightSideUp(prev => !prev); speak(isRightSideUp ? 'ters' : 'düz'); }} className={`${baseButtonClasses} bg-purple-500 text-sm px-4 sm-landscape:w-32`}>Çevir</button> </div> </div> );
            case ActivityType.FewMuch:
                 const addApple = () => { if (itemCount < MAX_ITEMS) { const wasFew = itemCount <= MUCH_THRESHOLD; const newCount = itemCount + 1; setItemCount(newCount); if(newCount > MUCH_THRESHOLD && wasFew) speak('çok'); }};
                 const removeApple = () => { if (itemCount > 0) { const wasMany = itemCount > MUCH_THRESHOLD; const newCount = itemCount - 1; setItemCount(newCount); if(newCount <= MUCH_THRESHOLD && wasMany) speak('az'); }};
                 return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-40 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="grid grid-cols-4 gap-1">{[...Array(itemCount)].map((_, i) => <AppleIcon key={i} className="w-8 h-8 text-red-600 animate-pop-in"/>)}</div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={removeApple} className={`${baseButtonClasses} bg-red-500 sm-landscape:w-32`} disabled={itemCount === 0}><MinusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> <button onClick={addApple} className={`${baseButtonClasses} bg-green-500 sm-landscape:w-32`} disabled={itemCount >= MAX_ITEMS}><PlusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> </div> </div> );
            case ActivityType.HalfQuarterWhole:
                const getPizzaClipPath = () => {
                    if (fraction === 'half') return 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
                    if (fraction === 'quarter') return 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)';
                    return 'none';
                };
                return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="w-24 h-24 bg-yellow-400 rounded-full border-4 border-amber-600 transition-all duration-300" style={{ clipPath: getPizzaClipPath() }} /> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setFraction('whole'); speak('bütün'); }} className={`${baseButtonClasses} bg-blue-500 text-xs px-2 py-1 sm-landscape:w-20`}>Bütün</button> <button onClick={() => { setFraction('half'); speak('yarım'); }} className={`${baseButtonClasses} bg-green-500 text-xs px-2 py-1 sm-landscape:w-20`}>Yarım</button> <button onClick={() => { setFraction('quarter'); speak('çeyrek'); }} className={`${baseButtonClasses} bg-red-500 text-xs px-2 py-1 sm-landscape:w-20`}>Çeyrek</button> </div> </div> );
            case ActivityType.FullEmpty:
                 return ( <div className="w-full text-center"> <div className="h-40 flex items-center justify-center"> <div className="relative w-24 h-32 bg-slate-200/50 border-4 border-slate-300 rounded-t-2xl rounded-b-lg"> <div className="absolute bottom-0 left-0 right-0 bg-blue-400 transition-all duration-300 rounded-b-md" style={{ height: `${fillLevel}%`}}></div> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setFillLevel(l => Math.max(0, l-25)); speak('boşalt'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Boşalt</button> <button onClick={() => { setFillLevel(l => Math.min(100, l+25)); speak('doldur'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Doldur</button> </div> </div> );
            case ActivityType.OddEven:
                const isEven = oddEvenCount % 2 === 0;
                return ( <div className="w-full text-center"> <div className="h-24 flex items-center justify-center rounded-lg bg-slate-300/50 p-2 relative"> <div className="grid grid-cols-5 gap-1">{[...Array(oddEvenCount)].map((_, i) => <AppleIcon key={i} className="w-6 h-6 text-red-600 animate-pop-in"/>)}</div> </div> <p className="font-bold text-2xl mt-2">{isEven ? 'Çift' : 'Tek'}</p> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setOddEvenCount(c => Math.max(1, c - 1)); speak(isEven ? 'tek' : 'çift'); }} className={`${baseButtonClasses} bg-red-500`} disabled={oddEvenCount <= 1}><MinusCircleIcon className="w-10 h-10" /></button> <button onClick={() => { setOddEvenCount(c => Math.min(10, c + 1)); speak(isEven ? 'tek' : 'çift'); }} className={`${baseButtonClasses} bg-green-500`} disabled={oddEvenCount >= 10}><PlusCircleIcon className="w-10 h-10" /></button> </div> </div> );
            case ActivityType.OnUnder:
                return ( <div className="w-full text-center"> <div className="h-32 flex flex-col items-center justify-center relative"> <div className="w-16 h-16 bg-red-500 rounded-full transition-all duration-300 absolute" style={{ bottom: position === 'on' ? '6rem' : '0rem' }} /> <div className="w-32 h-12 bg-amber-600 rounded-md absolute bottom-8" /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setPosition('under'); speak('altında'); }} className={`${baseButtonClasses} bg-blue-500 text-sm px-4`}>Altına</button> <button onClick={() => { setPosition('on'); speak('üstünde'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Üstüne</button> </div> </div> );
            case ActivityType.BelowAbove:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center relative"> <div className="absolute w-20 h-12 bg-sky-300 rounded-full" /> <div className="w-12 h-12 bg-yellow-400 rounded-full transition-transform duration-300 absolute" style={{ transform: `translateY(${positionAbove === 'above' ? '-3rem' : '3rem'})` }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setPositionAbove('below'); speak('aşağıda'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Aşağı</button> <button onClick={() => { setPositionAbove('above'); speak('yukarıda'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Yukarı</button> </div> </div> );
            case ActivityType.BesideOpposite:
                 return (
                    <div className="w-full text-center">
                        <div className="h-32 flex items-center justify-center relative w-64 mx-auto bg-slate-200/50 rounded-lg">
                            {/* The dividing line */}
                            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1 bg-slate-400 rounded-full" />

                            {/* Blue Person (Fixed) */}
                            <PersonIcon className="w-16 h-16 text-blue-600 absolute left-4 top-1/2 -translate-y-1/2" />
                            
                            {/* Green Person (Movable) */}
                            <PersonIcon 
                                className="w-16 h-16 text-green-600 absolute top-1/2 -translate-y-1/2 transition-all duration-500" 
                                style={{ 
                                    left: arrangement === 'beside' ? '5rem' : 'auto', 
                                    right: arrangement === 'beside' ? 'auto' : '1rem'
                                }}
                            />
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            <button onClick={() => { setArrangement('opposite'); speak('karşısında'); }} className={`${baseButtonClasses} bg-orange-500 text-sm px-2`}>Karşılıklı</button>
                            <button onClick={() => { setArrangement('beside'); speak('yanında'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-2`}>Yan Yana</button>
                        </div>
                    </div>
                );
            case ActivityType.InFrontOfBehind:
                 return ( <div className="w-full text-center" style={{ perspective: '300px' }}> <div className="h-32 flex items-center justify-center relative"> <div className="absolute w-24 h-24 bg-red-500 rounded-full transition-all duration-300" style={{ zIndex: isInFront ? 20 : 10, transform: `scale(${isInFront ? 1 : 0.85})`, filter: `blur(${isInFront ? 0 : '1px'})`, opacity: isInFront ? 1 : 0.9 }} /> <div className="absolute w-32 h-20 bg-amber-600 rounded-md" style={{ zIndex: 15 }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsInFront(false); speak('arkasında'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Arkaya</button> <button onClick={() => { setIsInFront(true); speak('önünde'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Öne</button> </div> </div> );
            case ActivityType.InsideOutside:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className="relative w-32 h-24 bg-amber-800 rounded-lg border-b-8 border-amber-600"> <div className="absolute w-12 h-12 bg-red-500 rounded-full transition-all duration-300" style={{ left: isInside ? '50%' : '-4rem', top: '50%', transform: 'translate(-50%, -50%)' }} /> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsInside(false); speak('dışında'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Dışarı</button> <button onClick={() => { setIsInside(true); speak('içinde'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>İçeri</button> </div> </div> );
            case ActivityType.Between:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center relative w-48 mx-auto"> <div className="w-12 h-24 bg-green-700 rounded-md absolute left-0" /> <div className="w-12 h-24 bg-green-700 rounded-md absolute right-0" /> <div className="absolute w-12 h-12 bg-red-500 rounded-full transition-all duration-300" style={{ left: isBetween ? '50%' : '-4rem', transform: 'translateX(-50%)' }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsBetween(false); speak('yanında'); }} className={`${baseButtonClasses} bg-orange-500 text-sm px-4`}>Yana</button> <button onClick={() => { setIsBetween(true); speak('arasında'); }} className={`${baseButtonClasses} bg-blue-500 text-sm px-4`}>Araya</button> </div> </div> );
            case ActivityType.LeftRight:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center relative w-64 mx-auto"> <div className="w-20 h-20 bg-amber-700 rounded-lg absolute left-1/2 -translate-x-1/2" /> <div className="w-12 h-12 bg-red-500 rounded-full absolute transition-all duration-300" style={{ left: leftRightPos === 'left' ? '0' : 'auto', right: leftRightPos === 'right' ? '0' : 'auto' }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setLeftRightPos('left'); speak('solunda'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Sol</button> <button onClick={() => { setLeftRightPos('right'); speak('sağında'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Sağ</button> </div> </div> );
            case ActivityType.NearFar:
                 return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center relative w-64 mx-auto"> <div className="w-20 h-20 bg-amber-700 rounded-lg absolute left-0" /> <div className="w-12 h-12 bg-red-500 rounded-full absolute transition-all duration-300" style={{ transform: `scale(${isNear ? 1 : 0.6})`, left: isNear ? '8rem' : '12rem' }} /> </div> <div className="flex justify-center gap-4 mt-2"> <button onClick={() => { setIsNear(false); speak('uzak'); }} className={`${baseButtonClasses} bg-orange-500 text-sm px-2`}>Uzaklaştır</button> <button onClick={() => { setIsNear(true); speak('yakın'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-2`}>Yakınlaştır</button> </div> </div> );
            case ActivityType.HighLow:
                 return ( <div className="w-full text-center"> <div className="h-40 flex items-center justify-center relative w-full"> <div className="w-16 h-16 bg-blue-500 rounded-full absolute transition-all duration-300" style={{ bottom: highLowPos === 'high' ? '8rem' : '1rem' }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setHighLowPos('low'); speak('alçak'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Alçalt</button> <button onClick={() => { setHighLowPos('high'); speak('yüksek'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Yükselt</button> </div> </div> );
            case ActivityType.BeforeAfter:
                 return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-32 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="relative w-28 h-28"> { isAfter ? <AppleCoreIcon className="w-full h-full text-red-600 animate-pop-in"/> : <AppleIcon className="w-full h-full text-red-600 animate-pop-in"/> } </div> </div> <div className="flex justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setIsAfter(prev => !prev); speak(isAfter ? 'önce' : 'sonra'); }} className={`${baseButtonClasses} bg-sky-500 text-sm px-4 sm-landscape:w-32`}>{isAfter ? 'Önce' : 'Sonra'}</button> </div> </div> );
            case ActivityType.DayNight:
                 return ( <div className="w-full text-center"> <div className={`h-32 flex items-center justify-center relative rounded-lg overflow-hidden transition-colors duration-500 ${isDay ? 'bg-sky-400' : 'bg-slate-800'}`}> <div className={`absolute w-16 h-16 rounded-full transition-all duration-500 ${isDay ? 'bg-yellow-300' : 'bg-slate-200'}`} style={{ transform: `translateY(${isDay ? '0' : '-100%'})`, opacity: isDay ? 1: 0.5 }} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsDay(false); speak('gece'); }} className={`${baseButtonClasses} bg-slate-700 text-sm px-4`}>Gece</button> <button onClick={() => { setIsDay(true); speak('gündüz'); }} className={`${baseButtonClasses} bg-sky-400 text-sm px-4`}>Gündüz</button> </div> </div> );
            case ActivityType.FastSlow:
                 return ( <div className="w-full text-center space-y-4"> <div className="relative h-20 w-full bg-slate-300 rounded-lg overflow-hidden"> <p className="font-bold text-sky-700 absolute top-1/2 -translate-y-1/2 left-4 z-10">Hızlı</p> <div onClick={() => speak('hızlı')} className="absolute w-24 h-20 top-0 left-0 animate-move-fast"><CarIcon className="w-full h-full fill-green-500" /></div> </div> <div className="relative h-20 w-full bg-slate-300 rounded-lg overflow-hidden"> <p className="font-bold text-sky-700 absolute top-1/2 -translate-y-1/2 left-4 z-10">Yavaş</p> <div onClick={() => speak('yavaş')} className="absolute w-24 h-20 top-0 left-0 animate-move-slow"><CarIcon className="w-full h-full fill-red-500" /></div> </div> </div> );
            case ActivityType.HotCold:
                 return ( <div className="w-full text-center flex flex-col sm-landscape:flex-row sm-landscape:items-center sm-landscape:justify-center sm-landscape:gap-8"> <div className="h-40 sm-landscape:h-48 flex items-center justify-center p-4 bg-slate-200/50 rounded-2xl"> <div className="relative w-32 h-32"> <div className={`w-full h-full transition-opacity duration-300 ${isHot ? 'opacity-100' : 'opacity-0'}`}> <SunIcon className="w-full h-full text-red-500" /> </div> <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${!isHot ? 'opacity-100' : 'opacity-0'}`}> <SnowflakeIcon className="w-full h-full text-blue-400" /> </div> </div> </div> <div className="flex flex-col sm-landscape:flex-row justify-center gap-4 sm-landscape:gap-2 mt-4 sm-landscape:mt-0"> <button onClick={() => { setIsHot(false); speak('soğuk'); }} className={`${baseButtonClasses} bg-blue-500 sm-landscape:w-32`}><MinusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> <button onClick={() => { setIsHot(true); speak('sıcak'); }} className={`${baseButtonClasses} bg-red-500 sm-landscape:w-32`}><PlusCircleIcon className="w-10 h-10 sm-landscape:w-8 sm-landscape:h-8" /></button> </div> </div> );
            case ActivityType.ParlakMat:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center"> <div className={`relative w-24 h-24 bg-lime-500 rounded-full overflow-hidden`}> <div className={`absolute -top-4 -left-4 w-16 h-16 bg-white/50 rounded-full transition-opacity duration-300 ${isShiny ? 'opacity-100' : 'opacity-0'}`} style={{ filter: 'blur(10px)', transform: 'rotate(-45deg)' }}/> </div> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsShiny(false); speak('mat'); }} className={`${baseButtonClasses} bg-red-500 text-sm px-4`}>Mat</button> <button onClick={() => { setIsShiny(true); speak('parlak'); }} className={`${baseButtonClasses} bg-green-500 text-sm px-4`}>Parlak</button> </div> </div> );
            case ActivityType.SeffafOpak:
                return ( <div className="w-full text-center"> <div className="h-32 flex items-center justify-center bg-repeat rounded-lg" style={{ backgroundImage: 'linear-gradient(45deg, #cbd5e1 25%, #e2e8f0 25%, #e2e8f0 50%, #cbd5e1 50%, #cbd5e1 75%, #e2e8f0 75%, #e2e8f0 100%)', backgroundSize: '28px 28px' }}> <div className={`w-24 h-24 bg-lime-500 transition-opacity duration-300 rounded-full ${isTransparent ? 'opacity-30' : 'opacity-100'}`} /> </div> <div className="flex justify-center gap-8 mt-2"> <button onClick={() => { setIsTransparent(true); speak('şeffaf'); }} className={`${baseButtonClasses} bg-sky-400 text-sm px-4`}>Şeffaf</button> <button onClick={() => { setIsTransparent(false); speak('opak'); }} className={`${baseButtonClasses} bg-slate-500 text-sm px-4`}>Opak</button> </div> </div> );
            case ActivityType.Senses:
                return null; // As per user feedback, this helper is not useful.
            default:
                return null;
        }
    })();

    if (!helper) return null;

    return (
        <div className="w-full text-center bg-slate-100/80 rounded-2xl p-2 sm:p-4 sm-landscape:p-2 landscape:max-w-md landscape:mx-auto">
            {helper}
        </div>
    )
};


type ConceptThemeColor = 'teal' | 'lime' | 'rose' | 'indigo' | 'purple' | 'amber' | 'cyan' | 'sky' | 'pink' | 'orange';

interface ConceptChoiceScreenProps {
    roundData: ConceptRound;
    onAdvance: (isCorrect: boolean) => void;
    currentCard: number;
    totalCards: number;
    onBack: () => void;
    themeColor: ConceptThemeColor;
    isAutoSpeakEnabled: boolean;
    onBanImage: (id: number) => void;
    isBanButtonEnabled: boolean;
    isWordLabelVisible: boolean;
    onToggleWordLabel: () => void;
    isFastTransitionEnabled: boolean;
}

const getOppositesMap = (lang: ReturnType<typeof getCurrentLanguage>): { [key: string]: string } => {
    if (lang === 'en') {
        return {
            'big': 'small', 'small': 'big', 'long': 'short', 'short': 'long', 'thin': 'thick', 'thick': 'thin',
            'wide': 'narrow', 'narrow': 'wide', 'old': 'new', 'new': 'old', 'hard': 'soft', 'soft': 'hard',
            'clean': 'dirty', 'dirty': 'clean', 'wet': 'dry', 'dry': 'wet', 'open': 'closed', 'closed': 'open',
            'straight': 'curved', 'curved': 'straight', 'alive': 'lifeless', 'lifeless': 'alive',
            'bitter': 'sweet', 'sweet': 'bitter', 'heavy': 'light', 'light': 'heavy', 'hot': 'cold', 'cold': 'hot',
            'rough': 'smooth', 'smooth': 'rough', 'intact': 'broken', 'broken': 'intact', 'messy': 'tidy', 'tidy': 'messy',
            'fresh': 'stale', 'stale': 'fresh', 'knotted': 'unknotted', 'unknotted': 'knotted', 'hungry': 'full', 'full': 'hungry',
            'lazy': 'hardworking', 'hardworking': 'lazy', 'transparent': 'opaque', 'opaque': 'transparent',
            'shiny': 'matte', 'matte': 'shiny', 'upright': 'upside down', 'upside down': 'upright', 'wrinkled': 'smooth',
            'inside': 'outside', 'outside': 'inside', 'day': 'night', 'night': 'day', 'fast': 'slow', 'slow': 'fast',
            'few': 'many', 'many': 'few', 'empty': 'full', 'above': 'below', 'below': 'above', 'left': 'right', 'right': 'left',
            'near': 'far', 'far': 'near', 'high': 'low', 'low': 'high', 'before': 'after', 'after': 'before', 'label': 'no label'
        };
    }
    // Turkish default
    return {
        'büyük': 'küçük', 'küçük': 'büyük', 'uzun': 'kısa', 'kısa': 'uzun', 'ince': 'kalın', 'kalın': 'ince', 'geniş': 'dar', 'dar': 'geniş', 'eski': 'yeni', 'yeni': 'eski', 'sert': 'yumuşak', 'yumuşak': 'sert', 'temiz': 'kirli', 'kirli': 'temiz', 'ıslak': 'kuru', 'kuru': 'ıslak', 'açık': 'kapalı', 'kapalı': 'açık', 'düz': 'eğri', 'eğri': 'düz', 'canlı': 'cansız', 'cansız': 'canlı', 'acı': 'tatlı', 'tatlı': 'acı', 'ekşi': 'tatlı', 'ağır': 'hafif', 'hafif': 'ağır', 'sıcak': 'soğuk', 'soğuk': 'sıcak', 'pürüzlü': 'pürüzsüz', 'pürüzsüz': 'pürüzlü', 'sağlam': 'kırık', 'kırık': 'sağlam', 'dağınık': 'toplu', 'toplu': 'dağınık', 'taze': 'bayat', 'bayat': 'taze', 'kırışık': 'pürüzsüz', 'düzgün': 'ters', 'ters': 'düzgün', 'sivri': 'küt', 'küt': 'sivri', 'parlak': 'mat', 'mat': 'parlak', 'tembel': 'çalışkan', 'çalışkan': 'tembel', 'şeffaf': 'opak', 'opak': 'şeffaf', 'dikenli': 'pürüzsüz', 'düğüm': 'çözük', 'çözük': 'düğüm', 'aç': 'tok', 'tok': 'aç', 'yaşlı': 'genç', 'genç': 'yaşlı', 'az': 'çok', 'çok': 'az', 'dolu': 'boş', 'boş': 'dolu', 'üstünde': 'altında', 'altında': 'üstünde', 'aşağıda': 'yukarıda', 'yukarıda': 'aşağıda', 'yanında': 'karşısında', 'karşısında': 'yanında', 'önünde': 'arkada', 'arkada': 'önünde', 'içinde': 'dışında', 'dışında': 'içinde', 'gündüz': 'gece', 'gece': 'gündüz', 'hızlı': 'yavaş', 'yavaş': 'hızlı'
    };
};
const langForOpposites = getCurrentLanguage();
const oppositeConcepts = langForOpposites === 'tr' ? getOppositesMap('tr') : getOppositesMap('en');

const ConceptChoiceScreen: React.FC<ConceptChoiceScreenProps> = ({
    roundData, onAdvance, currentCard, totalCards, onBack, themeColor, isAutoSpeakEnabled,
    onBanImage, isBanButtonEnabled, isWordLabelVisible, onToggleWordLabel, isFastTransitionEnabled
}) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isWrong, setIsWrong] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [mistakeMade, setMistakeMade] = useState(false);
    const [isHelperVisible, setIsHelperVisible] = useState(false);
    const [hintAnimation, setHintAnimation] = useState<{ id: number, type: 'grow' | 'shrink' } | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const { width, height } = useWindowSize();
    const isLandscape = width !== undefined && height !== undefined ? width > height : false;
    
    // Yatay ekran için uygun etkinlik türleri (ikili karşılaştırma yapan etkinlikler)
    const landscapeOptimizedActivities: ActivityType[] = Object.values(ActivityType)
        .filter((act): act is ActivityType => typeof act === 'number')
        .filter(act => act !== ActivityType.YesNo);
    
    const isConceptLandscape = landscapeOptimizedActivities.includes(roundData.activityType) && isLandscape;

    const currentLang = getCurrentLanguage();
    const localizedQuestion = getLocalizedQuestion(roundData, currentLang);

    useAutoSpeak(localizedQuestion, isAutoSpeakEnabled, roundData.id);

    const themeClasses = {
        teal: { text: 'text-teal-800', accent: 'text-teal-600', bg: 'bg-teal-100', hoverBg: 'hover:bg-teal-200', ring: 'focus:ring-teal-300' },
        lime: { text: 'text-lime-800', accent: 'text-lime-600', bg: 'bg-lime-100', hoverBg: 'hover:bg-lime-200', ring: 'focus:ring-lime-300' },
        rose: { text: 'text-rose-800', accent: 'text-rose-600', bg: 'bg-rose-100', hoverBg: 'hover:bg-rose-200', ring: 'focus:ring-rose-300' },
        indigo: { text: 'text-indigo-800', accent: 'text-indigo-600', bg: 'bg-indigo-100', hoverBg: 'hover:bg-indigo-200', ring: 'focus:ring-indigo-300' },
        purple: { text: 'text-purple-800', accent: 'text-purple-600', bg: 'bg-purple-100', hoverBg: 'hover:bg-purple-200', ring: 'focus:ring-purple-300' },
        amber: { text: 'text-amber-800', accent: 'text-amber-600', bg: 'bg-amber-100', hoverBg: 'hover:bg-amber-200', ring: 'focus:ring-amber-300' },
        cyan: { text: 'text-cyan-800', accent: 'text-cyan-600', bg: 'bg-cyan-100', hoverBg: 'hover:bg-cyan-200', ring: 'focus:ring-cyan-300' },
        sky: { text: 'text-sky-800', accent: 'text-sky-600', bg: 'bg-sky-100', hoverBg: 'hover:bg-sky-200', ring: 'focus:ring-sky-300' },
        pink: { text: 'text-pink-800', accent: 'text-pink-600', bg: 'bg-pink-100', hoverBg: 'hover:bg-pink-200', ring: 'focus:ring-pink-300' },
        orange: { text: 'text-orange-800', accent: 'text-orange-600', bg: 'bg-orange-100', hoverBg: 'hover:bg-orange-200', ring: 'focus:ring-orange-300' },
    };
    const currentTheme = themeClasses[themeColor];

    useEffect(() => {
        setSelectedId(null);
        setIsWrong(null);
        setIsCorrect(false);
        setMistakeMade(false);
        setIsHelperVisible(false);
        setHintAnimation(null);
    }, [roundData]);
    
     useEffect(() => {
        if(cardRef.current) {
            cardRef.current.focus();
        }
    }, [roundData.id]);

    const handleCardClick = async (optionId: number, isOptionCorrect: boolean, spokenText: string) => {
        if (isCorrect) return;
        setSelectedId(optionId);
        
    const locale = currentLang === 'tr' ? 'tr-TR' : 'en-US';
    const conceptFromKey = getConceptFromQuestionKey(roundData, currentLang);
    const questionConcept = (conceptFromKey || localizedQuestion.split(' ')[0]).toLocaleLowerCase(locale).trim();

        const shouldAppend = (baseText: string, concept?: string) => {
            if (!concept || !baseText) return false;
            return !baseText.toLocaleLowerCase('tr-TR').includes(concept.toLocaleLowerCase('tr-TR'));
        };

        if (isOptionCorrect) {
            setIsCorrect(true);
            if (isFastTransitionEnabled) {
                await playEffect('correct');
            } else {
                let speech = `${t('feedback.correctPrefix')} ${spokenText}`;
                const isDescriptiveActivity = oppositeConcepts[questionConcept] || 
                                            [ActivityType.Colors, ActivityType.Shapes, ActivityType.Emotions]
                                            .includes(roundData.activityType);
                                            
                if (isDescriptiveActivity && shouldAppend(spokenText, questionConcept)) {
                    speech += ` ${questionConcept}`;
                }
                await speak(`${speech}.`, currentLang === 'tr' ? 'tr-TR' : 'en-US');
            }
            setTimeout(() => onAdvance(!mistakeMade), isFastTransitionEnabled ? 400 : 1200);
        } else {
            setMistakeMade(true);
            setIsWrong(optionId);
            if (isFastTransitionEnabled) {
                await playEffect('incorrect');
            } else {
                const oppositeConcept = oppositeConcepts[questionConcept];
                let speech = `${t('feedback.wrongPrefix')} ${spokenText}`;
                
                if (shouldAppend(spokenText, oppositeConcept)) {
                    speech += ` ${oppositeConcept}`;
                }
                await speak(`${speech}.`, currentLang === 'tr' ? 'tr-TR' : 'en-US');
            }
            setTimeout(() => {
                setIsWrong(null);
                setSelectedId(null);
            }, 800);
        }
    };
    
    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();
        speak(localizedQuestion, currentLang === 'tr' ? 'tr-TR' : 'en-US');
    };

    const handleBan = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        onBanImage(id);
    }

    const handleHint = () => {
        if (isConceptLandscape) {
            const correctOption = roundData.options.find(o => o.isCorrect);
            const wrongOptions = roundData.options.filter(o => !o.isCorrect);

            // Doğru cevabı büyüt ve parlat
            if (correctOption) {
                setHintAnimation({ id: correctOption.id, type: 'grow' });
            }
            
            // Yanlış cevapları küçült (100ms sonra)
            setTimeout(() => {
                wrongOptions.forEach(option => {
                    setHintAnimation(prev => prev ? prev : { id: option.id, type: 'shrink' });
                });
            }, 300);
            
            // Animasyonu temizle
            setTimeout(() => setHintAnimation(null), 2000);
        } else {
            setIsHelperVisible(prev => !prev);
        }
    };

    const gridColsClass = roundData.options.length === 2 ? 'grid-cols-2' :
                          roundData.options.length === 3 ? 'grid-cols-3 sm-landscape:grid-cols-3' :
                          roundData.options.length === 4 ? 'grid-cols-2 sm-landscape:grid-cols-4' : 
                          'grid-cols-2 sm-landscape:grid-cols-4';

    const renderHeader = () => (
         <div className="w-full flex justify-between items-center mb-2 sm:mb-4 p-2 bg-white/50 backdrop-blur-sm rounded-full">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-white/50 transition-colors" aria-label={t('app.back')}>
                <ArrowLeftIcon className={`w-8 h-8 ${currentTheme.accent}`} />
            </button>
            <div className={`text-lg font-bold ${currentTheme.text}`}>
                {currentCard} / {totalCards}
            </div>
            <div className="w-12 h-12" />
        </div>
    );
    
    const renderQuestionItem = () => {
        if (!roundData.questionItem) return null;
        const questionItemWord = currentLang === 'tr'
            ? roundData.questionItem.word
            : translateLabel(roundData.questionItem.word, currentLang);
        return (
            <div className="mb-4 text-center">
                 <p className={`${currentTheme.text} text-lg sm-landscape:text-base font-semibold mb-2 landscape:text-base`}>{t('choice.matchPrompt')}</p>
                 <div className="w-32 h-32 sm-landscape:w-24 sm-landscape:h-24 mx-auto">
                    <Card
                        imageUrl={roundData.questionItem.imageUrl}
                        word={questionItemWord}
                        onClick={() => speak(questionItemWord)}
                        isRevealed={isWordLabelVisible}
                        className="aspect-square"
                    />
                 </div>
            </div>
        );
    }

    // re-declare currentLang already defined above for broader scope usage
    const optionsGrid = (
        <div className={`w-full grid ${gridColsClass} gap-3 sm:gap-4 sm-landscape:gap-2`}>
            {roundData.options.map((option) => {
                const sourceWord = option.spokenText || option.word;
                const displayWord = currentLang === 'tr' ? option.word : translateLabel(sourceWord, currentLang);
                const spokenWord = currentLang === 'tr' ? sourceWord : displayWord;
                return (
                    <Card
                        key={option.id}
                        imageUrl={option.imageUrl}
                        word={displayWord}
                        isRevealed={isCorrect || isWordLabelVisible}
                        isSelected={selectedId === option.id && !isWrong}
                        isCorrect={isCorrect && selectedId === option.id}
                        onClick={() => handleCardClick(option.id, option.isCorrect, spokenWord)}
                        className={`aspect-square ${isWrong === option.id ? 'animate-shake' : ''}`}
                    >
                        {isBanButtonEnabled && (
                            <button 
                                onClick={(e) => handleBan(e, option.id)}
                                className="absolute top-2 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors" 
                                aria-label="Bu görseli bir daha gösterme">
                                <BanIcon className="w-6 h-6 text-red-600" />
                            </button>
                        )}
                    </Card>
                );
            })}
        </div>
    );
    
    const supportedHelpers: ActivityType[] = [
        ActivityType.Colors, ActivityType.Shapes, ActivityType.Emotions,
        ActivityType.BigSmall, ActivityType.LongShort, ActivityType.ThinThick, ActivityType.WideNarrow,
        ActivityType.HeavyLight, ActivityType.DerinSig, ActivityType.KalabalikTenha,
        ActivityType.HardSoft, ActivityType.RoughSmooth, ActivityType.DikenliPuruzsuz,
        ActivityType.KirisikDuzgun, ActivityType.SivriKut, ActivityType.StraightCurved,
        ActivityType.OldNew, ActivityType.YoungOld, ActivityType.CleanDirty, ActivityType.WetDry,
        ActivityType.OpenClosed, ActivityType.BrokenIntact, ActivityType.MessyClean,
        ActivityType.TazeBayat, ActivityType.DugumCozuk, ActivityType.HungryFull,
        ActivityType.TersDuz, ActivityType.FewMuch, ActivityType.FullEmpty, ActivityType.BeforeAfter,
        ActivityType.DayNight, ActivityType.FastSlow, ActivityType.HotCold, ActivityType.ParlakMat, 
        ActivityType.SeffafOpak, ActivityType.AliveLifeless, ActivityType.TembelCaliskan,
        ActivityType.BitterSweet, ActivityType.HalfQuarterWhole, ActivityType.OddEven,
        ActivityType.OnUnder, ActivityType.BelowAbove, ActivityType.BesideOpposite,
        ActivityType.InFrontOfBehind, ActivityType.InsideOutside, ActivityType.Between,
        ActivityType.LeftRight, ActivityType.NearFar, ActivityType.HighLow
    ];

    if (isConceptLandscape) {
        return (
            <div 
             ref={cardRef}
             tabIndex={-1}
             className="flex flex-col h-full w-full max-w-7xl mx-auto animate-fade-in outline-none"
             aria-live="polite">
                
                {/* Header */}
                <div className="w-full flex justify-between items-center p-2 bg-white/70 backdrop-blur-sm rounded-full absolute top-2 left-1/2 -translate-x-1/2 z-20 max-w-lg shadow-lg">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-white/70 transition-colors" aria-label="Geri dön">
                        <ArrowLeftIcon className={`w-8 h-8 ${currentTheme.accent}`} />
                    </button>
                    <div className={`text-lg font-bold ${currentTheme.text}`}>{currentCard} / {totalCards}</div>
                    <div className="w-12 h-12" />
                </div>

                {/* Question */}
                <h1 className={`text-3xl font-bold text-center ${currentTheme.text} flex items-center justify-center gap-4 absolute top-20 left-1/2 -translate-x-1/2 z-20`}>
                    {localizedQuestion}
                    <button onClick={handleSpeak} className={`p-2 ${currentTheme.bg} rounded-full ${currentTheme.hoverBg} transition-colors`} aria-label={t('choice.readQuestion')}>
                        <SpeakerIcon className={`w-7 h-7 ${currentTheme.accent}`} />
                    </button>
                </h1>

                {/* Options */}
                <div className="flex-grow flex flex-row items-stretch justify-center w-full h-full">
                    {roundData.options.map((option) => {
                        const isOptionCorrect = isCorrect && selectedId === option.id;
                        const isOptionWrong = isWrong === option.id;
                        const hintClass = hintAnimation?.id === option.id 
                            ? (hintAnimation.type === 'grow' ? 'pulse-grow' : 'pulse-shrink') 
                            : '';
                        
                        // Hint sırasında doğru cevaba border ve arka plan ekle
                        const hintStyle = hintAnimation?.id === option.id && hintAnimation.type === 'grow' 
                            ? { 
                                border: '4px solid #10b981', 
                                boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)',
                                backgroundColor: '#dcfce7' // açık yeşil arka plan
                              }
                            : {};
                        const hintSourceWord = option.spokenText || option.word;
                        const hintDisplayWord = currentLang === 'tr' ? option.word : translateLabel(hintSourceWord, currentLang);
                        const hintSpokenWord = currentLang === 'tr' ? hintSourceWord : hintDisplayWord;

                        return (
                            <div
                                key={option.id}
                                onClick={() => handleCardClick(option.id, option.isCorrect, hintSpokenWord)}
                                className={`w-1/2 h-full flex items-center justify-center p-4 cursor-pointer transition-all duration-300 relative overflow-hidden ${hintClass} ${isOptionWrong ? 'animate-shake' : ''}`}
                                style={{ 
                                    backgroundColor: isOptionCorrect ? '#22c55e' : isOptionWrong ? '#ef4444' : '#f1f5f9',
                                    ...hintStyle
                                }}
                            >
                                <img src={option.imageUrl} alt={hintDisplayWord} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
                                
                                {/* Doğru Cevap Göstergesi */}
                                {hintAnimation?.id === option.id && hintAnimation.type === 'grow' && (
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                
                                {isWordLabelVisible && (
                                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 text-white text-xl font-bold px-4 py-2 rounded-full">{hintDisplayWord}</p>
                                )}

                                {isBanButtonEnabled && (
                                    <button 
                                        onClick={(e) => handleBan(e, option.id)}
                                        className="absolute top-4 right-4 p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors z-10" 
                                        aria-label={t('choice.banImageAria')}>
                                        <BanIcon className="w-6 h-6 text-red-600" />
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                    <button onClick={onToggleWordLabel} className={`flex flex-col items-center justify-center p-2 w-16 h-14 rounded-lg transition-colors text-center ${isWordLabelVisible ? currentTheme.bg : 'bg-white/50 hover:bg-white/70'} border border-slate-300/50`} aria-label={isWordLabelVisible ? t('choice.hideLabel') : t('choice.showLabel')}>
                        {isWordLabelVisible ? <EyeSlashIcon className={`w-6 h-6 ${currentTheme.accent}`} /> : <EyeIcon className={`w-6 h-6 ${currentTheme.accent}`} />}
                        <span className={`text-xs font-bold ${currentTheme.text} mt-1`}>{t('choice.label')}</span>
                    </button>
                    <button onClick={handleHint} className={`flex flex-col items-center justify-center p-2 w-16 h-14 rounded-lg transition-colors text-center bg-amber-100 hover:bg-amber-200 border border-amber-300`} aria-label={isHelperVisible ? t('choice.hideHint') : t('choice.showHint')}>
                        <LightBulbIcon className={`w-6 h-6 text-amber-600`} />
                        <span className={`text-xs font-bold text-amber-800 mt-1`}>{t('choice.hint')}</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div 
         ref={cardRef}
         tabIndex={-1}
         className="flex flex-col h-full w-full max-w-5xl mx-auto p-2 sm:p-4 animate-fade-in outline-none landscape:p-0"
         aria-live="polite">
            
            {renderHeader()}
            
            <div className="flex-grow w-full flex flex-col items-center justify-center p-4 sm:p-6 sm-landscape:p-2 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl overflow-y-auto">
                <div className="w-full flex flex-col landscape:flex-row landscape:items-start landscape:justify-center landscape:gap-6">
                    <div className="w-full flex flex-col items-center justify-start landscape:justify-center landscape:w-7/12 landscape:max-w-md">
                        <h1 className={`text-2xl sm:text-3xl font-bold text-center ${currentTheme.text} mb-4 flex items-center gap-4 landscape:text-2xl sm-landscape:text-lg`}>
                            {localizedQuestion}
                            <button onClick={handleSpeak} className={`p-2 ${currentTheme.bg} rounded-full ${currentTheme.hoverBg} transition-colors`} aria-label={t('choice.readQuestion')}>
                                <SpeakerIcon className={`w-7 h-7 ${currentTheme.accent}`} />
                            </button>
                        </h1>
                        {renderQuestionItem()}
                        {optionsGrid}
                    </div>
                    
                    <div className="hidden landscape:block landscape:w-5/12 landscape:flex-grow landscape:self-center">
                         {isHelperVisible && supportedHelpers.includes(roundData.activityType) && (
                            <div className="mt-4 animate-fade-in">
                                 <InteractiveConceptHelper activityType={roundData.activityType} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto flex-shrink-0 mt-auto pt-4">
                    <div className="w-full flex items-center justify-center landscape:hidden">
                         {isHelperVisible && supportedHelpers.includes(roundData.activityType) && (
                            <div className="w-full max-w-sm mb-2 animate-fade-in">
                                <InteractiveConceptHelper activityType={roundData.activityType} />
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <button onClick={onToggleWordLabel} className={`flex flex-col items-center justify-center p-2 w-20 sm-landscape:w-16 h-16 sm-landscape:h-14 rounded-lg transition-colors text-center ${isWordLabelVisible ? currentTheme.bg : 'bg-white/50 border border-slate-300/50'}`} aria-label={isWordLabelVisible ? t('choice.hideLabel') : t('choice.showLabel')}>
                            {isWordLabelVisible ? <EyeSlashIcon className={`w-7 h-7 sm-landscape:w-6 sm-landscape:h-6 ${currentTheme.accent}`} /> : <EyeIcon className={`w-7 h-7 sm-landscape:w-6 sm-landscape:h-6 ${currentTheme.accent}`} />}
                            <span className={`text-xs sm-landscape:text-[10px] font-bold ${currentTheme.text} mt-1`}>{t('choice.label')}</span>
                        </button>
                        {supportedHelpers.includes(roundData.activityType) && (
                            <button onClick={handleHint} className={`flex flex-col items-center justify-center p-2 w-20 sm-landscape:w-16 h-16 sm-landscape:h-14 rounded-lg transition-colors text-center ${isHelperVisible ? currentTheme.bg : 'bg-white/50 border border-slate-300/50'}`} aria-label={isHelperVisible ? t('choice.hideHint') : t('choice.showHint')}>
                                <LightBulbIcon className={`w-7 h-7 sm-landscape:w-6 sm-landscape:h-6 ${currentTheme.accent}`} />
                                <span className={`text-xs sm-landscape:text-[10px] font-bold ${currentTheme.text} mt-1`}>{t('choice.hint')}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ConceptChoiceScreen);
