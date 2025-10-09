import React from 'react';

const HouseIconSimple: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M50 5 L 95 40 L 85 40 L 85 95 L 15 95 L 15 40 L 5 40 Z" fill="#f59e0b" stroke="#9a3412" strokeWidth="4" />
    </svg>
);

export default HouseIconSimple;