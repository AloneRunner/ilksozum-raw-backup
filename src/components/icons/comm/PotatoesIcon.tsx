import React from 'react';

const PotatoesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21v-8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12.75H4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12.75h8.25" />
    </svg>
);
export default PotatoesIcon;
