
import React from 'react';

const TiredIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
    </svg>
);
export default TiredIcon;
