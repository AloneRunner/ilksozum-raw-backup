
import React from 'react';

const BreadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5c0-1.32-.832-2.493-2.01-2.923-1.178-.43-2.477.16-3.176 1.258a4.5 4.5 0 005.186 5.665z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.5a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export default BreadIcon;
