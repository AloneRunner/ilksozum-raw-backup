/**
 * Mastery Engine for Unit-Based Program Mode
 * Implements differentiated mastery rules (Wide vs Narrow pool)
 * and activity/unit unlock logic
 */

import { 
  ActivityType, 
  ActivityStats, 
  MasteryPoolType, 
  PrerequisiteRule,
  ParentOverride 
} from '../types';
import { ACTIVITY_METADATA_MAP, getActivityMetadata } from '../constants/activityMetadata';
import { UNIT_DEFINITIONS, getUnitDefinition } from '../constants/unitDefinitions';

/**
 * Check if an activity has been mastered based on its pool type
 * 
 * WIDE POOL: Requires 80% success rate in last 15 attempts (program mode 100%, free mode 50% weight)
 * NARROW POOL: Requires 100% in last 2 consecutive perfect sessions (program mode only)
 */
export function isMasteryAchieved(
  activityId: ActivityType | string,
  stats: ActivityStats | undefined
): boolean {
  if (!stats || !stats.history || stats.history.length === 0) {
    return false; // No attempts yet
  }

  const metadata = getActivityMetadata(activityId);
  if (!metadata) {
    console.warn(`No metadata found for activity: ${activityId}`);
    return false;
  }

  const { masteryRule } = metadata;
  const { poolType } = masteryRule;

  if (poolType === MasteryPoolType.WIDE) {
    // WIDE POOL: Check last N attempts for success rate with mode weighting
    const window = masteryRule.recentAttemptsWindow || 15;
    const threshold = masteryRule.masteryThreshold || 0.8;
    
    const recentAttempts = stats.history.slice(-window);
    if (recentAttempts.length < window) {
      return false; // Need at least 'window' attempts
    }

    // Apply weighting: program mode = 1.0, free mode = 0.5
    let weightedCorrect = 0;
    let weightedTotal = 0;
    for (const attempt of recentAttempts) {
      const weight = attempt.mode === 'program' ? 1.0 : 0.5;
      weightedCorrect += attempt.score * weight;
      weightedTotal += attempt.total * weight;
    }
    
    if (weightedTotal === 0) return false;
    
    const successRate = weightedCorrect / weightedTotal;
    return successRate >= threshold;
  } else {
    // NARROW POOL: Check last N sessions for perfect scores (program mode only)
    const requiredPerfect = masteryRule.perfectSessionsRequired || 2;
    
    // Filter to program mode attempts only
    const programAttempts = stats.history.filter(a => a.mode === 'program' || !a.mode);
    const recentSessions = programAttempts.slice(-requiredPerfect);
    if (recentSessions.length < requiredPerfect) {
      return false; // Need at least 'requiredPerfect' program sessions
    }

    // All recent program sessions must be perfect (100%)
    return recentSessions.every((session) => 
      session.total > 0 && session.score === session.total
    );
  }
}

/**
 * Check if a prerequisite rule is satisfied
 * Handles complex prerequisite logic with AND/OR/MIN_CATEGORIES
 */
export function isPrerequisiteSatisfied(
  prerequisite: PrerequisiteRule | null,
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): boolean {
  if (prerequisite === null) {
    return true; // No prerequisite (Kilitsiz)
  }

  // Simple prerequisite: single activity ID
  if (typeof prerequisite === 'string' || typeof prerequisite === 'number') {
    const activityId = prerequisite.toString();
    
    // Check if it's an object category
    if (masteredObjectCategories.has(activityId)) {
      return true;
    }
    
    // Check if it's a regular activity
    const stats = allStats[activityId];
    return isMasteryAchieved(activityId, stats);
  }

  // Complex prerequisite with AND/OR/MIN_CATEGORIES
  if ('type' in prerequisite) {
    if (prerequisite.type === 'AND') {
      // All conditions must be satisfied
      return prerequisite.conditions.every((condition) =>
        isPrerequisiteSatisfied(condition, allStats, masteredObjectCategories)
      );
    } else if (prerequisite.type === 'OR') {
      // At least one condition must be satisfied
      return prerequisite.conditions.some((condition) =>
        isPrerequisiteSatisfied(condition, allStats, masteredObjectCategories)
      );
    } else if (prerequisite.type === 'MIN_CATEGORIES') {
      // Minimum number of object categories must be mastered
      return masteredObjectCategories.size >= prerequisite.count;
    }
  }

  console.warn('Unknown prerequisite type:', prerequisite);
  return false;
}

/**
 * Check if an activity is unlocked for the child
 * An activity is unlocked if:
 * 1. Its unit is unlocked
 * 2. Its prerequisites are satisfied
 * 3. OR parent override is active
 */
export function isActivityUnlocked(
  activityId: ActivityType | string,
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>,
  unlockedUnits: Set<number>,
  parentOverrides?: ParentOverride[]
): boolean {
  // Check parent override first
  if (parentOverrides) {
    const override = parentOverrides.find(
      (o) => o.activityId === activityId && o.expiresAt > Date.now()
    );
    if (override) {
      return true; // Parent Joker active
    }
  }

  const metadata = getActivityMetadata(activityId);
  if (!metadata) {
    console.warn(`No metadata found for activity: ${activityId}`);
    return false;
  }

  // Check if unit is unlocked
  if (!unlockedUnits.has(metadata.unitNumber)) {
    return false;
  }

  // Check if prerequisites are satisfied
  return isPrerequisiteSatisfied(
    metadata.prerequisite,
    allStats,
    masteredObjectCategories
  );
}

/**
 * Check if a unit is unlocked
 * A unit is unlocked if all its prerequisite units are 80% complete
 */
export function isUnitUnlocked(
  unitNumber: number,
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): boolean {
  const unitDef = getUnitDefinition(unitNumber);
  if (!unitDef) {
    console.warn(`No unit definition found for unit: ${unitNumber}`);
    return false;
  }

  // First unit is always unlocked
  if (unitNumber === 1) {
    return true;
  }

  // Check if all prerequisite units are completed
  return unitDef.prerequisiteUnits.every((prereqUnitNum) => {
    return isUnitComplete(prereqUnitNum, allStats, masteredObjectCategories);
  });
}

/**
 * Check if a unit is complete (80% of activities mastered)
 */
export function isUnitComplete(
  unitNumber: number,
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): boolean {
  const unitDef = getUnitDefinition(unitNumber);
  if (!unitDef) {
    return false;
  }

  const masteredCount = unitDef.activities.filter((activityId) => {
    // Check if it's an object category
    if (typeof activityId === 'string' && masteredObjectCategories.has(activityId)) {
      return true;
    }
    
    // Check if it's a regular activity
    const stats = allStats[activityId as string];
    return isMasteryAchieved(activityId, stats);
  }).length;

  const completionRate = masteredCount / unitDef.activities.length;
  return completionRate >= unitDef.completionThreshold;
}

/**
 * Get all unlocked units for the current profile
 */
export function getUnlockedUnits(
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): Set<number> {
  const unlockedUnits = new Set<number>();

  for (const unit of UNIT_DEFINITIONS) {
    if (isUnitUnlocked(unit.unitNumber, allStats, masteredObjectCategories)) {
      unlockedUnits.add(unit.unitNumber);
    }
  }

  return unlockedUnits;
}

/**
 * Get unit completion percentage (0-100)
 */
export function getUnitCompletionPercentage(
  unitNumber: number,
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): number {
  const unitDef = getUnitDefinition(unitNumber);
  if (!unitDef) {
    return 0;
  }

  const masteredCount = unitDef.activities.filter((activityId) => {
    // Check if it's an object category
    if (typeof activityId === 'string' && masteredObjectCategories.has(activityId)) {
      return true;
    }
    
    // Check if it's a regular activity
    const stats = allStats[activityId as string];
    return isMasteryAchieved(activityId, stats);
  }).length;

  return Math.round((masteredCount / unitDef.activities.length) * 100);
}

/**
 * Get all activities that are currently unlocked and not yet mastered
 * (Available for today's session)
 */
export function getAvailableActivities(
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>,
  parentOverrides?: ParentOverride[]
): (ActivityType | string)[] {
  const unlockedUnits = getUnlockedUnits(allStats, masteredObjectCategories);
  const availableActivities: (ActivityType | string)[] = [];

  for (const activityId of Object.keys(ACTIVITY_METADATA_MAP)) {
    // Skip if already mastered
    if (isMasteryAchieved(activityId, allStats[activityId])) {
      continue;
    }

    // Check if unlocked
    if (isActivityUnlocked(
      activityId,
      allStats,
      masteredObjectCategories,
      unlockedUnits,
      parentOverrides
    )) {
      availableActivities.push(activityId);
    }
  }

  return availableActivities;
}

/**
 * Get all activities that have been mastered
 * (Available for warmup/reinforcement in session)
 */
export function getMasteredActivities(
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>
): (ActivityType | string)[] {
  const masteredActivities: (ActivityType | string)[] = [];

  for (const activityId of Object.keys(ACTIVITY_METADATA_MAP)) {
    if (isMasteryAchieved(activityId, allStats[activityId])) {
      masteredActivities.push(activityId);
    }
  }

  // Add mastered object categories
  masteredObjectCategories.forEach((category) => {
    masteredActivities.push(category);
  });

  return masteredActivities;
}
