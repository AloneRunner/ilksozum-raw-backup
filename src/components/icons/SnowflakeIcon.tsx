import React from 'react';

const SnowflakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636M4 4l4 4M16 16l4 4M4 20l4-4M16 8l4-4" />
    </svg>
);

export default SnowflakeIcon;