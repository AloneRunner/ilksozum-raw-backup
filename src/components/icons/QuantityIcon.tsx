
import React from 'react';

const QuantityIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <circle cx="8" cy="16" r="2" />
            <circle cx="15" cy="16" r="2" />
            <circle cx="15" cy="9" r="2" />
            <circle cx="8" cy="9" r="2" />
        </svg>
    );
};

export default QuantityIcon;
