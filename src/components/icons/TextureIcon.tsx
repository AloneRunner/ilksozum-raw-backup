import React from 'react';

const TextureIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3.25-3.25m0 0l3.25 3.25m-3.25-3.25v3.25m0 0l3.25 3.25m-3.25-3.25L6.75 10.75m6-3.25l3.25-3.25m0 0l3.25 3.25m-3.25-3.25v3.25m0 0l3.25 3.25m-3.25-3.25L12.75 10.75m-6 3.25l3.25-3.25m0 0l3.25 3.25m-3.25-3.25v3.25m0 0l3.25 3.25m-3.25-3.25L6.75 14m6 3.25l3.25-3.25m0 0l3.25 3.25m-3.25-3.25v3.25m0 0l3.25 3.25m-3.25-3.25L12.75 17.25" />
        </svg>
    );
};

export default TextureIcon;