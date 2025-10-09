
import React from 'react';

const CheeseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488a2.25 2.25 0 01-1.923 0l-6.478-3.488A2.25 2.25 0 012.25 9.906V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488a2.25 2.25 0 01-1.923 0l-6.478-3.488A2.25 2.25 0 012.25 9.906V9m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 9m19.5 0v9A2.25 2.25 0 0119.5 21H4.5A2.25 2.25 0 012.25 18v-9m19.5-9l-9 4.5-9-4.5" />
    </svg>
);
export default CheeseIcon;
