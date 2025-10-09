
import React from 'react';

const LegIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m0 12l-3.75-3.75M12 15l3.75-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
    </svg>
);
export default LegIcon;
