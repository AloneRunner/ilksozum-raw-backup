
import React from 'react';

const PatternIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <circle cx="6" cy="12" r="2" />
            <rect x="11" y="10" width="4" height="4" rx="1" />
            <path d="M18 9l3 3-3 3" />
        </svg>
    );
};

export default PatternIcon;
