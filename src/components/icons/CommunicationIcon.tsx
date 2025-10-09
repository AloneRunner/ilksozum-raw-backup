
import React from 'react';

const CommunicationIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.55c0 2.252.83 4.34 2.246 5.912l.232.232c.28.28.508.592.688.92l.252.463c.245.453.536.87.868 1.258l.343.398c.49.568.995 1.054 1.532 1.464l.538.414c.72.553 1.543.957 2.454 1.182a9.043 9.043 0 003.522 0c.911-.225 1.734-.63 2.454-1.182l.538-.414z" />
        </svg>
    );
};

export default CommunicationIcon;
