
import React from 'react';

const BasketIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.117 1.243H4.557c-.654 0-1.187-.585-1.117-1.243l1.263-12a1.5 1.5 0 011.487-1.263h8.31a1.5 1.5 0 011.487 1.263z" />
        </svg>
    );
};

export default BasketIcon;
