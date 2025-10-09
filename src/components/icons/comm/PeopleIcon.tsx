
import React from 'react';

const PeopleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.305c.395-.429.744-1.28.744-2.174 0-1.094-.418-2.16-1.135-2.956-1.086-1.194-2.554-1.928-4.22-2.274a15.15 15.15 0 00-3.32-1.071c-1.423-.429-2.923-1.152-4.286-2.071-.395-.26-1.061-.428-1.782-.428a3.35 3.35 0 00-3.12 3.12c0 .52.195 1.02.534 1.414.28.324.636.594.995.835l.343.23c.395.26.744.594 1.036.994.29.398.536.87.688 1.378a9.337 9.337 0 00.262 1.378c.395 1.83.995 3.493 1.782 5.021a1.5 1.5 0 002.625.372z" />
    </svg>
);
export default PeopleIcon;
