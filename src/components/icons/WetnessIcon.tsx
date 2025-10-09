import React from 'react';

const WetnessIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.622a8.981 8.981 0 013.962-2.121c.33-.082.68.038.929.284a1.088 1.088 0 01.284.929c-.082.33-.38.582-.72.668a8.981 8.981 0 01-2.121 3.962 8.287 8.287 0 002.374.962 8.252 8.252 0 004.126-14.406z" />
        </svg>
    );
};

export default WetnessIcon;