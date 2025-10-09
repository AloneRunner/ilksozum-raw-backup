
import React from 'react';

const ChickenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c-2.485 0-4.5 1.567-4.5 3.5s2.015 3.5 4.5 3.5 4.5-1.567 4.5-3.5-2.015-3.5-4.5-3.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l-2.25 2.25M15 14.25l2.25 2.25" />
    </svg>
);
export default ChickenIcon;
