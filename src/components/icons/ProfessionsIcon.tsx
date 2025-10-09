
import React from 'react';

const ProfessionsIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l-3.75 3.75m3.75-3.75L15.75 11.25m-3.75-3.75V3m0 4.5v.75m-3.75 3.75H3m4.5 0h.75m10.5 0h-1.5m1.5 0h.75m-3.75-3.75l-3.75 3.75m3.75-3.75l3.75 3.75m-7.5 7.5V18a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-1.5m-7.5 0h7.5" />
        </svg>
    );
};

export default ProfessionsIcon;
