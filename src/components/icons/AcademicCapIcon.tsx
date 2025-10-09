import React from 'react';

const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.09-.322A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84l-2.09.322m0 0A51.063 51.063 0 0112 11.67a51.063 51.063 0 01-7.74-1.523" />
        </svg>
    );
};

export default AcademicCapIcon;
