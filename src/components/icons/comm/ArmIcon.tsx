
import React from 'react';

const ArmIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V12m0 0v5.25m0-5.25H9.75m2.25 0H15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12a6.375 6.375 0 11-12.75 0 6.375 6.375 0 0112.75 0z" />
    </svg>
);
export default ArmIcon;
