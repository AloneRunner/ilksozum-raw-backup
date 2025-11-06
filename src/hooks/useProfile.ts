
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Profile, ActivityStats, ActivityCategory, ParentOverride } from '../types.ts';
import { useLocalStorage } from './useLocalStorage.ts';
import { getValueFromLocalStorage } from '../utils.ts';
import { ALL_SUB_ACHIEVEMENTS } from '../constants.ts';

const initializeEnabledActivities = (): string[] => {
    return ALL_SUB_ACHIEVEMENTS.map(sa => String(sa.id));
};

interface UseProfileProps {
    showToast: (message: string, type?: 'error' | 'info', duration?: number) => void;
}

export const useProfile = ({ showToast }: UseProfileProps) => {
    const [profiles, setProfiles] = useLocalStorage<Profile[]>('profiles_v1', []);
    const [activeProfileId, setActiveProfileId] = useLocalStorage<string | null>('activeProfileId_v1', null);
    const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
    const [activityStats, setActivityStats] = useState<Record<string, ActivityStats>>({});
    const [enabledActivities, setEnabledActivities] = useState<string[]>([]);
    const [parentOverrides, setParentOverrides] = useState<ParentOverride[]>([]);

    useEffect(() => {
        let profilesList = getValueFromLocalStorage<Profile[]>('profiles_v1', []);
        let currentProfile: Profile | null = null;

        if (profilesList.length === 0) {
            const guestProfile: Profile = { id: `guest_${Date.now()}`, name: 'Misafir', avatar: 'dog' };
            setProfiles([guestProfile]);
            setActiveProfileId(guestProfile.id);
            currentProfile = guestProfile;
        } else {
            const lastActiveId = getValueFromLocalStorage<string | null>('activeProfileId_v1', null);
            currentProfile = profilesList.find(p => p.id === lastActiveId) || profilesList[0];
            if (activeProfileId !== currentProfile.id) {
                setActiveProfileId(currentProfile.id);
            }
        }
        
        if (currentProfile) {
            setActiveProfile(currentProfile);
            const profileStats = getValueFromLocalStorage(`activityStats_profile_${currentProfile.id}`, {});
            let profileEnabledActivities = getValueFromLocalStorage(`enabledActivities_profile_${currentProfile.id}`, initializeEnabledActivities());
            const profileOverrides = getValueFromLocalStorage<ParentOverride[]>(`parentOverrides_profile_${currentProfile.id}`, []);
            // If stored value is an empty array (or falsy), treat as all activities enabled to avoid accidentally locking activities
            if (!Array.isArray(profileEnabledActivities) || profileEnabledActivities.length === 0) {
                profileEnabledActivities = initializeEnabledActivities();
            }
            setActivityStats(profileStats);
            setEnabledActivities(profileEnabledActivities);
            setParentOverrides(profileOverrides);
        }
    }, [profiles]); // Depends on profiles to re-init if profiles list is empty

    useEffect(() => {
        if (activeProfile) {
            try {
                window.localStorage.setItem(`activityStats_profile_${activeProfile.id}`, JSON.stringify(activityStats));
                window.localStorage.setItem(`enabledActivities_profile_${activeProfile.id}`, JSON.stringify(enabledActivities));
                window.localStorage.setItem(`parentOverrides_profile_${activeProfile.id}`, JSON.stringify(parentOverrides));
            } catch (error) {
                console.error('Failed to save profile data:', error);
            }
        }
    }, [activityStats, enabledActivities, parentOverrides, activeProfile]);

    const enabledActivitiesSet = useMemo(() => new Set(enabledActivities), [enabledActivities]);

    const handleSelectProfile = useCallback((profile: Profile) => {
        const profileStats = getValueFromLocalStorage(`activityStats_profile_${profile.id}`, {});
        let profileEnabledActivities = getValueFromLocalStorage(`enabledActivities_profile_${profile.id}`, initializeEnabledActivities());
        const profileOverrides = getValueFromLocalStorage<ParentOverride[]>(`parentOverrides_profile_${profile.id}`, []);
        if (!Array.isArray(profileEnabledActivities) || profileEnabledActivities.length === 0) {
            profileEnabledActivities = initializeEnabledActivities();
        }
        setActivityStats(profileStats);
        setEnabledActivities(profileEnabledActivities);
        setParentOverrides(profileOverrides);
        setActiveProfile(profile);
        setActiveProfileId(profile.id);
    }, [setActiveProfileId]);

    const handleCreateProfile = useCallback((name: string, avatar: string) => {
        const newProfile: Profile = { id: Date.now().toString(), name, avatar };
        setProfiles(prev => [...prev, newProfile]);
        handleSelectProfile(newProfile);
    }, [setProfiles, handleSelectProfile]);

    const handleResetProgress = useCallback(() => {
        if (activeProfile) {
            setActivityStats({});
            setEnabledActivities(initializeEnabledActivities());
            showToast(`${activeProfile.name} için ilerleme sıfırlandı.`, 'info');
        }
    }, [activeProfile, showToast]);

    const updateActivityAttempt = useCallback((activityId: string) => {
        setActivityStats(prev => {
            const currentStats = prev[activityId] || { attempts: 0, completions: 0, totalCorrect: 0, totalQuestions: 0, history: [] };
            return {
                ...prev,
                [activityId]: { ...currentStats, attempts: currentStats.attempts + 1 }
            };
        });
    }, []);
    
    const handleToggleActivityEnabled = useCallback((activityId: string) => {
        setEnabledActivities(prev => {
            const newSet = new Set(prev);
            if (newSet.has(activityId)) newSet.delete(activityId); else newSet.add(activityId);
            return Array.from(newSet);
        });
    }, []);

    const handleToggleCategoryEnabled = useCallback((category: ActivityCategory, isEnabled: boolean) => {
        const activitiesInCategory = ALL_SUB_ACHIEVEMENTS.filter(sa => sa.category === category).map(sa => String(sa.id));
        setEnabledActivities(prev => {
            const newSet = new Set(prev);
            if (isEnabled) activitiesInCategory.forEach(id => newSet.add(id));
            else activitiesInCategory.forEach(id => newSet.delete(id));
            return Array.from(newSet);
        });
    }, []);

    // Parent Override (Joker Hakkı) functions
    const handleAddParentOverride = useCallback((activityId: string, durationHours: number = 24, reason?: string) => {
        const expiresAt = Date.now() + (durationHours * 60 * 60 * 1000);
        const newOverride: ParentOverride = { activityId, expiresAt, reason };
        setParentOverrides(prev => {
            // Remove any existing override for this activity
            const filtered = prev.filter(o => o.activityId !== activityId);
            return [...filtered, newOverride];
        });
        showToast(`"${activityId}" geçici olarak açıldı (${durationHours} saat)`, 'info');
    }, [showToast]);

    const handleRemoveParentOverride = useCallback((activityId: string) => {
        setParentOverrides(prev => prev.filter(o => o.activityId !== activityId));
        showToast(`"${activityId}" için joker kaldırıldı`, 'info');
    }, [showToast]);

    const handleClearExpiredOverrides = useCallback(() => {
        const now = Date.now();
        setParentOverrides(prev => prev.filter(o => o.expiresAt > now));
    }, []);

    // Clean up expired overrides on mount and periodically
    useEffect(() => {
        handleClearExpiredOverrides();
        const interval = setInterval(handleClearExpiredOverrides, 60000); // Every minute
        return () => clearInterval(interval);
    }, [handleClearExpiredOverrides]);

    return {
        profiles,
        activeProfile,
        activityStats,
        setActivityStats,
        enabledActivitiesSet,
        parentOverrides,
        handleSelectProfile,
        handleCreateProfile,
        handleResetProgress,
        updateActivityAttempt,
        handleToggleActivityEnabled,
        handleToggleCategoryEnabled,
        handleAddParentOverride,
        handleRemoveParentOverride,
        handleClearExpiredOverrides,
    };
};
