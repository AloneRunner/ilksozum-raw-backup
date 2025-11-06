// Daily progression policy: at most one unit advancement per day per profile

export interface DailyPolicySnapshot {
  advances: number; // how many unit advancements happened today (0 or 1)
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
  return (snap.advances || 0) < 1;
}

export function recordUnitAdvanced(profileId: string, unitNumber: number) {
  const snap = getPolicyToday(profileId);
  const next: DailyPolicySnapshot = { ...snap, advances: Math.min(1, (snap.advances || 0) + 1), lastAdvancedUnit: unitNumber };
  try { window.localStorage.setItem(key(profileId), JSON.stringify(next)); } catch {}
}

export function getAllowedUnitCeiling(profileId: string, currentUnlockedUnits: Set<number>): number {
  const snap = getPolicyToday(profileId);
  if ((snap.advances || 0) >= 1 && snap.lastAdvancedUnit) {
    return snap.lastAdvancedUnit;
  }
  // If no advance yet today, ceiling is the max currently unlocked unit
  let max = 1;
  currentUnlockedUnits.forEach(u => { if (u > max) max = u; });
  return max;
}
