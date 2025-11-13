// Daily progression policy: at most three unit advancements per day per profile

export interface DailyPolicySnapshot {
  advances: number; // how many unit advancements happened today (0..3)
  lastAdvancedUnit?: number;
  date: string; // YYYY-MM-DD
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function key(profileId: string) {
  return `programPolicy_${profileId}_${today()}`;
}

export function getPolicyToday(profileId: string): DailyPolicySnapshot {
  try {
    const raw = window.localStorage.getItem(key(profileId));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.date === today()) return parsed;
    }
  } catch {}
  const snapshot: DailyPolicySnapshot = { advances: 0, date: today() };
  try { window.localStorage.setItem(key(profileId), JSON.stringify(snapshot)); } catch {}
  return snapshot;
}

export function canAdvanceUnitToday(profileId: string): boolean {
  const snap = getPolicyToday(profileId);
  return (snap.advances || 0) < 3;
}

export function recordUnitAdvanced(profileId: string, unitNumber: number) {
  const snap = getPolicyToday(profileId);
  const next: DailyPolicySnapshot = { ...snap, advances: Math.min(3, (snap.advances || 0) + 1), lastAdvancedUnit: unitNumber };
  try { window.localStorage.setItem(key(profileId), JSON.stringify(next)); } catch {}
}

export function getAllowedUnitCeiling(profileId: string, currentUnlockedUnits: Set<number>): number {
  const snap = getPolicyToday(profileId);
  
  // After 3 advancements, freeze at the last advanced unit
  if ((snap.advances || 0) >= 3 && snap.lastAdvancedUnit) {
    return snap.lastAdvancedUnit;
  }
  
  // Otherwise, ceiling = initial unit (1) + number of advancements
  // 0 advancements → ceiling = 1 (Unit 1 only)
  // 1 advancement → ceiling = 2 (Units 1-2)
  // 2 advancements → ceiling = 3 (Units 1-3)
  const baseCeiling = 1 + (snap.advances || 0);
  
  // But don't exceed what's actually unlocked
  let maxUnlocked = 1;
  currentUnlockedUnits.forEach(u => { if (u > maxUnlocked) maxUnlocked = u; });
  
  return Math.min(baseCeiling, maxUnlocked);
}
