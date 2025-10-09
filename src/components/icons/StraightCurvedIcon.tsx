
import React from 'react';

const StraightCurvedIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6c6 0 12 6 12 6s6-6 6-6" />
        </svg>
    );
};

export default StraightCurvedIcon;
