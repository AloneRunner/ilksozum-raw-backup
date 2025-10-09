
import React from 'react';

const SleepIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 15.5M9.75 3.104c.168-.02.337-.035.507-.044a23.481 23.481 0 015.932.654c.264.03.52.067.772.111m-6.45-1.527a44.832 44.832 0 00-1.28-1.033A49.19 49.19 0 006.33 1.104c-1.39.26-2.65.654-3.8 1.134" />
    </svg>
);
export default SleepIcon;
