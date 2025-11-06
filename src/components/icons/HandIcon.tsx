import React from 'react';

interface HandIconProps {
  className?: string;
}

const HandIcon: React.FC<HandIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9 2a1 1 0 0 1 1 1v6h1.5V3a1 1 0 1 1 2 0v6H15V4a1 1 0 1 1 2 0v5.5h1a3.5 3.5 0 0 1 3.5 3.5c0 1.47-.56 2.813-1.464 3.832l-.08.095-.001.001A9.002 9.002 0 0 1 11 22a9 9 0 0 1-9-9V7a5 5 0 0 1 5-5h2zm1 2H8a3 3 0 0 0-3 3v6a7 7 0 1 0 14 0 1.5 1.5 0 0 0-1.5-1.5H17a1 1 0 0 1-1-1V6a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" clipRule="evenodd" />
    </svg>
  );
};

export default HandIcon;