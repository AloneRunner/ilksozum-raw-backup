import React from 'react';

const PrintIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 18.25m0 0a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25m-7.5 0h7.5m-7.5 0l-1.409-1.409a2.25 2.25 0 010-3.182l2.25-2.25a2.25 2.25 0 013.182 0l2.25 2.25a2.25 2.25 0 010 3.182l-1.409 1.409m-7.5 0a42.415 42.415 0 0010.56 0m-10.56 0L6 18.25m0 0a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25m0 0h-4.5m-4.5 0a2.25 2.25 0 01-2.25-2.25V5.25c0-1.242.984-2.25 2.25-2.25h10.5A2.25 2.25 0 0118 5.25v3.375" />
    </svg>
);

export default PrintIcon;