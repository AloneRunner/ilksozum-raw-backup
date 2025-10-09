import React from 'react';

const PandaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 7c.83 0 1.5.67 1.5 1.5S9.33 12 8.5 12 7 11.33 7 10.5 7.67 9 8.5 9zm3.5 8c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm3.5-5c-.83 0-1.5-.67-1.5-1.5S14.67 9 15.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z M8.5 5C9.88 5 11 6.12 11 7.5S9.88 10 8.5 10 6 8.88 6 7.5 7.12 5 8.5 5zm7 0c1.38 0 2.5 1.12 2.5 2.5S16.88 10 15.5 10 13 8.88 13 7.5 14.12 5 15.5 5z"/>
    </svg>
);

export default PandaIcon;