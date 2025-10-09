
import React from 'react';

const WaterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m1.5 0h1.5m-1.5 0l-1.5-1.5m1.5 1.5V10.875C6 9.805 6.805 9 7.875 9h2.25c1.07 0 1.875.805 1.875 1.875v.25" />
    </svg>
);
export default WaterIcon;
