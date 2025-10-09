import React from 'react';

const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20.42 12.37a2.5 2.5 0 0 0-2.82-3.26A2.5 2.5 0 0 0 15.75 6H12a2.5 2.5 0 0 0-2.5 2.5V10.5A2.5 2.5 0 0 0 6 9.15a2.5 2.5 0 0 0-3.26-2.82 2.5 2.5 0 0 0-2.32 2.5v.17a2.5 2.5 0 0 0 2.5 2.32A2.5 2.5 0 0 0 6 12.5v1.5a2.5 2.5 0 0 0 3.15 2.35 2.5 2.5 0 0 0-1.84 2.97c.59.88 1.63 1.37 2.69 1.37h.17a2.5 2.5 0 0 0 2.32-2.5A2.5 2.5 0 0 0 12 15.75V12a2.5 2.5 0 0 0 2.5-2.5h1.85a2.5 2.5 0 0 0 2.97-1.84 2.5 2.5 0 0 0-1.4-3.29Z" />
        </svg>
    );
};

export default PuzzlePieceIcon;