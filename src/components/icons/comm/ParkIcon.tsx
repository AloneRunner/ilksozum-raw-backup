
import React from 'react';

const ParkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5zM8.25 12c0 2.485-2.015 4.5-4.5 4.5S-.75 14.485-.75 12c0-2.485 2.015-4.5 4.5-4.5S8.25 9.515 8.25 12z" />
    </svg>
);
export default ParkIcon;
