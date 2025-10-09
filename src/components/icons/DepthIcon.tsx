import React from 'react';

const DepthIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <circle cx="15" cy="15" r="5" fill="#a5f3fc" />
            <circle cx="9" cy="9" r="6" fill="#0891b2" />
        </svg>
    );
};

export default DepthIcon;