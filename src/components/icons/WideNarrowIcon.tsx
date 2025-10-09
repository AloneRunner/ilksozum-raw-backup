
import React from 'react';

const WideNarrowIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <rect x="4" y="6" width="6" height="12" rx="1" />
            <rect x="14" y="6" width="2" height="12" rx="1" />
        </svg>
    );
};

export default WideNarrowIcon;
