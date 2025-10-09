
import React from 'react';

const SudokuIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="10" y1="4" x2="10" y2="20" />
            <line x1="16" y1="4" x2="16" y2="20" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
    );
};

export default SudokuIcon;
