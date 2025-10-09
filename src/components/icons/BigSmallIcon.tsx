
import React from 'react';

const BigSmallIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <circle cx="8" cy="14" r="5" />
            <circle cx="17" cy="10" r="3" />
        </svg>

    );
};

export default BigSmallIcon;
