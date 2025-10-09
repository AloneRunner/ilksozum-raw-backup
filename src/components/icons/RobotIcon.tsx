
import React from 'react';

const RobotIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5V4.5H10.5V1.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5H18.75V15.75H5.25V4.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75H10.5V10.5H9.75V9.75Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 9.75H14.25V10.5H13.5V9.75Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5H15V14.25H9V13.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.75H18V22.5H6V15.75Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18H10.5V20.25H9.75V18Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 18H14.25V20.25H13.5V18Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5H5.25V12.75H3V7.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 7.5H21V12.75H18.75V7.5Z" />
        </svg>
    );
};

export default RobotIcon;
