
import React from 'react';

const OldNewIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.237-4.263-9.5-9.5-9.5S.5 6.763.5 12s4.263 9.5 9.5 9.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12H10m9.5 0a9.5 9.5 0 01-9.5 9.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H8.25" />
        </svg>
    );
};

export default OldNewIcon;
