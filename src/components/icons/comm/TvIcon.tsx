
import React from 'react';

const TvIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.5m6-1.5v1.5m-6-1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H9z" />
    </svg>
);
export default TvIcon;
