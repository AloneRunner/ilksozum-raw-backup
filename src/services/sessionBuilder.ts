/**
 * Program Mode Session Builder
 * Implements spaced repetition algorithm for daily sessions
 * 
 * Session Structure:
 * 1. Warmup (1-2 mastered activities) - Easy confidence boost
 * 2. New Content (2-3 newly unlocked activities) - Learning focus
 * 3. Reinforcement (1-2 activities near mastery) - Solidify skills
 */

import { ActivityType, ActivityStats } from '../types';
import { 
  getAvailableActivities, 
  getMasteredActivities
} from './masteryEngine';
import { getActivityMetadata } from '../constants/activityMetadata';

export interface SessionActivity {
  activityId: ActivityType | string;
  activityName: string;
  sessionRole: 'warmup' | 'new' | 'reinforcement';
  unitNumber: number;
}

export interface DailySession {
  date: string; // ISO date string
  activities: SessionActivity[];
  estimatedDuration: number; // minutes
  focusUnit: number; // Primary unit for this session
}

/**
 * Build a daily session with spaced repetition
 * 
 * Algorithm:
 * 1. Select 1-2 mastered activities for warmup (random, prefer recently mastered)
 * 2. Select 2-3 available (unlocked but not mastered) activities for new content
 * 3. Select 1-2 activities that are close to mastery for reinforcement
 * 4. Avoid repeating same activities in consecutive sessions
 */
export function buildDailySession(
  allStats: Record<string, ActivityStats>,
  masteredObjectCategories: Set<string>,
  previousSessionActivities?: (ActivityType | string)[],
  sessionLength: 'short' | 'medium' | 'long' = 'medium',
  allowedUnitCeiling?: number
): DailySession {
  const masteredActivitiesRaw = getMasteredActivities(allStats, masteredObjectCategories);
  const availableActivitiesRaw = getAvailableActivities(allStats, masteredObjectCategories);

  // Apply unit ceiling if provided
  const inCeiling = (id: ActivityType | string) => {
    if (!allowedUnitCeiling) return true;
    const meta = getActivityMetadata(id);
    return meta ? meta.unitNumber <= allowedUnitCeiling : true;
  };

  const masteredActivities = masteredActivitiesRaw.filter(inCeiling);
  const availableActivities = availableActivitiesRaw.filter(inCeiling);
  
  const sessionActivities: SessionActivity[] = [];
  const usedActivities = new Set<string>();

  // Define session length parameters
  const sessionParams = {
    short: { warmup: 1, new: 2, reinforcement: 1, duration: 10 },
    medium: { warmup: 2, new: 3, reinforcement: 2, duration: 20 },
    long: { warmup: 2, new: 4, reinforcement: 2, duration: 30 },
  };
  const params = sessionParams[sessionLength];

  // 1. WARMUP: Select mastered activities (confidence boost)
  const warmupCandidates = masteredActivities
    .filter((id) => !previousSessionActivities?.includes(id))
    .slice(0, params.warmup * 3); // Get more candidates than needed

  const warmupActivities = selectRandomActivities(
    warmupCandidates,
    params.warmup,
    allStats,
    'warmup'
  );
  
  warmupActivities.forEach((activity) => {
    sessionActivities.push(activity);
    usedActivities.add(activity.activityId as string);
  });

  // 2. NEW CONTENT: Select unlocked but not mastered activities
  const newCandidates = availableActivities
    .filter((id) => !previousSessionActivities?.includes(id))
    .filter((id) => !usedActivities.has(id as string));

  const newActivities = selectRandomActivities(
    newCandidates,
    params.new,
    allStats,
    'new'
  );
  
  newActivities.forEach((activity) => {
    sessionActivities.push(activity);
    usedActivities.add(activity.activityId as string);
  });

  // 3. REINFORCEMENT: Select activities close to mastery (high attempts, not yet mastered)
  const reinforcementCandidates = availableActivities
    .filter((id) => !usedActivities.has(id as string))
    .filter((id) => {
      const stats = allStats[id as string];
      return stats && stats.attempts >= 3; // Has been practiced before
    })
    .sort((a, b) => {
      // Sort by attempts (descending) - prioritize activities with more practice
      const statsA = allStats[a as string];
      const statsB = allStats[b as string];
      return (statsB?.attempts || 0) - (statsA?.attempts || 0);
    });

  const reinforcementActivities = selectRandomActivities(
    reinforcementCandidates.slice(0, params.reinforcement * 2),
    params.reinforcement,
    allStats,
    'reinforcement'
  );
  
  reinforcementActivities.forEach((activity) => {
    sessionActivities.push(activity);
    usedActivities.add(activity.activityId as string);
  });

  // If we don't have enough activities, fill with available activities
  if (sessionActivities.length < params.warmup + params.new + params.reinforcement) {
    const fillCandidates = availableActivities.filter(
      (id) => !usedActivities.has(id as string)
    );
    
    const fillActivities = selectRandomActivities(
      fillCandidates,
      (params.warmup + params.new + params.reinforcement) - sessionActivities.length,
      allStats,
      'new'
    );
    
    fillActivities.forEach((activity) => {
      sessionActivities.push(activity);
    });
  }

  // Determine focus unit (most common unit in session)
  const focusUnit = determineFocusUnit(sessionActivities);

  return {
    date: new Date().toISOString().split('T')[0],
    activities: sessionActivities,
    estimatedDuration: params.duration,
    focusUnit,
  };
}

/**
 * Select random activities from candidates and convert to SessionActivity format
 */
function selectRandomActivities(
  candidates: (ActivityType | string)[],
  count: number,
  _allStats: Record<string, ActivityStats>,
  role: 'warmup' | 'new' | 'reinforcement'
): SessionActivity[] {
  const selected: SessionActivity[] = [];
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const activityId = shuffled[i];
    const metadata = getActivityMetadata(activityId);
    
    if (metadata) {
      selected.push({
        activityId,
        activityName: metadata.activityName,
        sessionRole: role,
        unitNumber: metadata.unitNumber,
      });
    }
  }
  
  return selected;
}

/**
 * Determine the focus unit for the session (most activities from which unit)
 */
function determineFocusUnit(activities: SessionActivity[]): number {
  const unitCounts = new Map<number, number>();
  
  activities.forEach((activity) => {
    unitCounts.set(
      activity.unitNumber,
      (unitCounts.get(activity.unitNumber) || 0) + 1
    );
  });
  
  let maxCount = 0;
  let focusUnit = 1;
  
  unitCounts.forEach((count, unit) => {
    if (count > maxCount) {
      maxCount = count;
      focusUnit = unit;
    }
  });
  
  return focusUnit;
}

/**
 * Get recommended session length based on child's age/progress
 * (Can be customized by parents in settings)
 */
export function getRecommendedSessionLength(
  totalMasteredActivities: number
): 'short' | 'medium' | 'long' {
  if (totalMasteredActivities < 10) {
    return 'short'; // Beginner - shorter sessions
  } else if (totalMasteredActivities < 30) {
    return 'medium'; // Intermediate
  } else {
    return 'long'; // Advanced - longer, more challenging sessions
  }
}

/**
 * Check if it's been long enough since last session (optional cooldown)
 * Returns true if a new session should be available
 */
export function shouldShowNewSession(lastSessionDate?: string): boolean {
  if (!lastSessionDate) {
    return true; // No previous session
  }

  const lastSession = new Date(lastSessionDate);
  const today = new Date();
  
  // Same day check (allow only 1 session per day for optimal spaced repetition)
  return lastSession.toISOString().split('T')[0] !== today.toISOString().split('T')[0];
}

/**
 * Get session history summary for parent dashboard
 */
export interface SessionSummary {
  totalSessions: number;
  averageDuration: number;
  lastSessionDate?: string;
  currentStreak: number; // Consecutive days
}

export function getSessionSummary(
  sessionHistory: DailySession[]
): SessionSummary {
  if (sessionHistory.length === 0) {
    return {
      totalSessions: 0,
      averageDuration: 0,
      currentStreak: 0,
    };
  }

  // Calculate average duration
  const totalDuration = sessionHistory.reduce(
    (sum, session) => sum + session.estimatedDuration,
    0
  );
  const averageDuration = Math.round(totalDuration / sessionHistory.length);

  // Calculate current streak
  const sortedSessions = [...sessionHistory].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  let currentStreak = 0;
  const today = new Date().toISOString().split('T')[0];
  let checkDate = today;
  
  for (const session of sortedSessions) {
    if (session.date === checkDate) {
      currentStreak++;
      // Move to previous day
      const prevDate = new Date(checkDate);
      prevDate.setDate(prevDate.getDate() - 1);
      checkDate = prevDate.toISOString().split('T')[0];
    } else {
      break; // Streak broken
    }
  }

  return {
    totalSessions: sessionHistory.length,
    averageDuration,
    lastSessionDate: sortedSessions[0]?.date,
    currentStreak,
  };
}
