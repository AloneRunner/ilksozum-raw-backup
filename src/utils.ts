export const shuffleArray = <T,>(array: T[]): T[] => {
    if (!array || array.length === 0) return [];
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export function getValueFromLocalStorage<T>(key: string, defaultValue: T): T {
    try {
        const item = window.localStorage.getItem(key);
        if (!item) return defaultValue;
        try {
            return JSON.parse(item);
        } catch (parseErr) {
            // Some values may be stored as plain strings (e.g. "en").
            // If defaultValue is a string (or typeof T is string), return raw item.
            if (typeof defaultValue === 'string') {
                return item as unknown as T;
            }
            // Fallback: return defaultValue when parsing fails for non-string defaults
            console.warn(`LocalStorage key “${key}” contains non-JSON value; returning default.`);
            return defaultValue;
        }
    } catch (error) {
        console.error(`Error reading localStorage key “${key}”:`, error);
        return defaultValue;
    }
}
