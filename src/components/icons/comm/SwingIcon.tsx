
import React from 'react';

const SwingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-4.5m12 4.5v-4.5m-12 0h12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4.5" />
    </svg>
);
export default SwingIcon;
