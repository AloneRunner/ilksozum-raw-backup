
import React from 'react';

const ActivitiesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25a3 3 0 013-3h8.5a3 3 0 013 3v13.5a3 3 0 01-3 3h-8.5a3 3 0 01-3-3V5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12h-7.5" />
    </svg>
);
export default ActivitiesIcon;
