import React from 'react';

const BearIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 13.5c-1.6 0-3.09.7-4.14 1.86-.48.53-.86 1.15-1.11 1.84h-1.5c-.25-.69-.63-1.31-1.11-1.84C10.59 14.2 9.1 13.5 7.5 13.5 4.46 13.5 2 15.96 2 19v1h20v-1c0-3.04-2.46-5.5-5.5-5.5zm-11-4c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"/>
    </svg>
);

export default BearIcon;