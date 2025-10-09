
import React from 'react';
// A generic food icon as a placeholder
const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9.75v.001M17.25 10.5a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 21a5.25 5.25 0 11-8.5 0 5.25 5.25 0 018.5 0z" />
    </svg>
);
export default AppleIcon;
