
import React, { createContext } from 'react';
import { useAppCore } from '../hooks/useAppCore.ts';

// The type definition for our context value
export type IAppContext = ReturnType<typeof useAppCore>;

// Create the context with a default (null) value
export const AppContext = createContext<IAppContext | null>(null);

// Custom hook to use the AppContext
export const useAppContext = (): IAppContext => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
