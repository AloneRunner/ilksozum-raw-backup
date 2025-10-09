import React from 'react';

const FullnessIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5v15A2.25 2.25 0 006.75 21.75h10.5A2.25 2.25 0 0019.5 19.5v-15A2.25 2.25 0 0017.25 2.25H6.75A2.25 2.25 0 004.5 4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15" />
        </svg>
    );
};

export default FullnessIcon;