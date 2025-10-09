
import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="w-24 h-24 relative">
            <div className="w-full h-full rounded-full absolute border-8 border-solid border-gray-200"></div>
            <div className="w-full h-full rounded-full absolute border-8 border-solid border-sky-500 border-t-transparent animate-spin"></div>
        </div>
    );
};

export default Spinner;
