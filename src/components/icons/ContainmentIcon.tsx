import React from 'react';

const ContainmentIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
    );
};

export default ContainmentIcon;