import React from 'react';

const BunnyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14c-1.93 0-3.5 1.57-3.5 3.5S10.07 21 12 21s3.5-1.57 3.5-3.5S13.93 14 12 14zm-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm5.5-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm-3 0c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z"/>
    </svg>
);

export default BunnyIcon;