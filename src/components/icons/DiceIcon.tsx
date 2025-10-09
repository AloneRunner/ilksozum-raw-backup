import React from 'react';

const DiceIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.254 9.254 9 9.563 9h4.874c.31 0 .563.254.563.563v4.874c0 .31-.254.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.03 8.469V7.5a2.25 2.25 0 012.25-2.25h.008a2.25 2.25 0 012.25 2.25v.969" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.969 15.531V16.5a2.25 2.25 0 01-2.25 2.25H9.75a2.25 2.25 0 01-2.25-2.25v-.969" />
        </svg>
    );
};

export default DiceIcon;