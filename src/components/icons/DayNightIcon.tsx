import React from 'react';

const DayNightIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" clipPath="url(#clip)" />
            <clipPath id="clip">
                <rect x="12" y="3" width="9" height="18" />
            </clipPath>
        </svg>
    );
};

export default DayNightIcon;