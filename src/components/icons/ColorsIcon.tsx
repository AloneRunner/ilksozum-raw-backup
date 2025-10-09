
import React from 'react';

const ColorsIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118 2.25 2.25 0 01-2.47-2.118c0-1.02.64-1.907 1.544-2.264a3 3 0 00-1.128-5.78c1.097 0 2.036.64 2.47 1.544A2.25 2.25 0 018.03 9.53c1.02 0 1.907-.64 2.264-1.544a3 3 0 005.78-1.128 2.25 2.25 0 012.47-2.118 2.25 2.25 0 012.47 2.118c0 1.02-.64 1.907-1.544 2.264a3 3 0 001.128 5.78c-1.097 0-2.036-.64-2.47-1.544a2.25 2.25 0 01-2.264-.001 2.25 2.25 0 01-2.47 2.118c-1.02 0-1.907.64-2.264 1.544a3 3 0 00-5.78 1.128z" />
        </svg>

    );
};

export default ColorsIcon;
