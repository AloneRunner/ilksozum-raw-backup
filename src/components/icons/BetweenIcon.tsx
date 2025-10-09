import React from 'react';

const BetweenIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <rect x="3" y="6" width="4" height="12" rx="1" />
            <rect x="17" y="6" width="4" height="12" rx="1" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
    );
};

export default BetweenIcon;