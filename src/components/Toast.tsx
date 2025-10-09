
import React from 'react';
import XCircleIcon from './icons/XCircleIcon.tsx';
import CheckCircleIcon from './icons/CheckCircleIcon.tsx';

interface ToastProps {
  message: string;
  type: 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const isError = type === 'error';

  const themeClasses = {
    container: isError ? 'bg-red-500' : 'bg-sky-500',
    icon: isError ? 'text-red-300' : 'text-sky-300',
  };

  return (
    <div 
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 w-11/12 max-w-md p-4 rounded-xl shadow-2xl text-white flex items-center z-50 animate-fade-in-up-toast ${themeClasses.container}`}
      role="alert"
      aria-live="assertive"
    >
      {isError ? 
        <XCircleIcon className={`w-7 h-7 mr-3 flex-shrink-0 ${themeClasses.icon}`} /> :
        <CheckCircleIcon className={`w-7 h-7 mr-3 flex-shrink-0 ${themeClasses.icon}`} />
      }
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
