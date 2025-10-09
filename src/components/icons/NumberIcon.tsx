
import React from 'react';

const NumberIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4M12 20v-2M18 12h2M4 12h2" />
            <text x="7" y="17" fontFamily="Arial" fontSize="10" fill="currentColor">1</text>
            <text x="13" y="11" fontFamily="Arial" fontSize="10" fill="currentColor">2</text>
        </svg>

    );
};

export default NumberIcon;
