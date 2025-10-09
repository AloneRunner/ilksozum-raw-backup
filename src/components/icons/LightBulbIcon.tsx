
import React from 'react';

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-1.125a6.01 6.01 0 00-3 0m3 0a6.01 6.01 0 00-1.5-1.125a6.01 6.01 0 00-3 0m0 0a6.01 6.01 0 00-1.5 1.125a6.01 6.01 0 003 0m0 0a6.01 6.01 0 001.5 1.125a6.01 6.01 0 00-3 0m7.5-3.75a3 3 0 00-3-3h-3a3 3 0 00-3 3v3h9v-3z" />
        </svg>
    );
};

export default LightBulbIcon;
