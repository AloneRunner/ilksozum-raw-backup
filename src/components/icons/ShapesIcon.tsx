
import React from 'react';

const ShapesIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            <circle cx="6" cy="6" r="2" />
            <rect x="16" y="16" width="4" height="4" rx="1" />
            <path d="M16 6l-4 4-4-4" />
        </svg>
    );
};

export default ShapesIcon;
