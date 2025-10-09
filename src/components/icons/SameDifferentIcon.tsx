
import React from 'react';

const SameDifferentIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <circle cx="8" cy="12" r="4" />
            <rect x="15" y="9" width="6" height="6" rx="1" />
        </svg>
    );
};

export default SameDifferentIcon;
