
import React from 'react';

const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12.75L12 12.5l-.75.25m1.5 0V9.75M12 12.5V9.75m0 2.75H9.75m2.25 0H15m3-3l1.5 1.5-1.5 1.5m-1.5-3l-1.5-1.5 1.5-1.5" />
    </svg>
);
export default ToothIcon;
