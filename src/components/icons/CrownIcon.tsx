
import React from 'react';

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path fillRule="evenodd" d="M11.996 2.004a1.5 1.5 0 012.448 1.25l.366 3.664a1.5 1.5 0 001.448 1.345l3.82.076a1.5 1.5 0 011.248 2.404l-2.684 2.873a1.5 1.5 0 00-.455 1.685l1.043 3.76a1.5 1.5 0 01-2.224 1.708l-3.232-1.89a1.5 1.5 0 00-1.638 0l-3.232 1.89a1.5 1.5 0 01-2.224-1.708l1.043-3.76a1.5 1.5 0 00-.455-1.685L2.12 10.743a1.5 1.5 0 011.248-2.404l3.82-.076a1.5 1.5 0 001.448-1.345l.366-3.664a1.5 1.5 0 011.446-1.25z" clipRule="evenodd" />
        </svg>
    );
};

export default CrownIcon;
