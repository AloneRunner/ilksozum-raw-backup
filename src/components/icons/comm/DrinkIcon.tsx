
import React from 'react';

const DrinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25v3.75m3 3V12m0 0H9.75m3 0H15m0 0V9m0 0H9.75m3 0H15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75a2.25 2.25 0 01-2.25 2.25H6z" />
    </svg>
);
export default DrinkIcon;
