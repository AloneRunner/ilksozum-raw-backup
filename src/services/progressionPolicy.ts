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
  
  // Otherwise, don't reduce access: keep already-unlocked units available.
  // (Previously this computed a smaller 'baseCeiling' and returned the min,
  // which could demote previously unlocked units.)
  let maxUnlocked = 1;
  currentUnlockedUnits.forEach(u => { if (u > maxUnlocked) maxUnlocked = u; });

  // Important: do not *reduce* access to units the child has already unlocked.
  // Previously the function returned Math.min(baseCeiling, maxUnlocked) which could
  // lower the allowed ceiling below the already-unlocked units when `baseCeiling` was small.
  // That caused children who had reached higher units to be shown only Unit 1 again
  // when `advances` for the day was 0. To avoid demoting progress we return the
  // already-unlocked maximum unit here (unless a freeze due to 3 daily advances applies).
  return Math.max(1, maxUnlocked);
}
