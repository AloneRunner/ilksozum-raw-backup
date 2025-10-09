
import React from 'react';

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v.75a3 3 0 003 3h1.5v6a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-6H15a3 3 0 003-3v-.75" />
        </svg>
    );
};

export default HomeIcon;
