import React from 'react';

const WaterGunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 14h-7a1.5 1.5 0 010-3h7m-1.5-3.093l-3-6-3 6m1.5 3.093v4.5M3.375 12.375h17.25" />
    </svg>
);
export default WaterGunIcon;
