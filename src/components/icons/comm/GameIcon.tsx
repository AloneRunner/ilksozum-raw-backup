
import React from 'react';

const GameIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v-6m3.75 6v-6m-7.5 3.75h7.5m9-12h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5z" />
    </svg>
);
export default GameIcon;
