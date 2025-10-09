import React from 'react';

const DistanceIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 21V3M19 21V3" />
        </svg>
    );
};

export default DistanceIcon;