import React from 'react';

const AppleIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <path d="M17.23,13.59c-1,1.5-2.18,3.3-4.23,3.3s-3.23-1.8-4.23-3.3c-1.34-2-1.5-4.59-1.5-4.59s1.5-2,4-2c2.5,0,3.5,2,3.5,2s0.16,2.59-1.5,4.59M16,2a4,4,0,0,0-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4-1.79-4-4-4Z" />
    </svg>
);

export default AppleIcon;