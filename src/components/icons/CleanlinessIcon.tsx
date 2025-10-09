import React from 'react';

const CleanlinessIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75l-4.5 4.5m0-4.5l4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 14.25l4.5-4.5" />
        </svg>
    );
};

export default CleanlinessIcon;