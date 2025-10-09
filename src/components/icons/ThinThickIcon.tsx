
import React from 'react';

const ThinThickIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
            <rect x="6" y="4" width="2" height="16" strokeWidth="1.5" />
            <rect x="14" y="4" width="6" height="16" strokeWidth="1.5" />
        </svg>
    );
};

export default ThinThickIcon;
