
import React from 'react';

const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 01-9-9V3.75h1.5a9.75 9.75 0 019 9h.75a9.75 9.75 0 019-9h1.5v6a9.75 9.75 0 01-9 9z" />
        </svg>

    );
};

export default TrophyIcon;
