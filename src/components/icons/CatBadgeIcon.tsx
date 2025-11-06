import React from 'react';

const CatBadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="catBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="31" fill="url(#catBadgeGradient)" />
    <path
      d="M17 8 L24 18 C25 19 26 20 28 20 L36 20 C38 20 39 19 40 18 L47 8 C49 5 53 6 54 9 L56 20 C57 24 56 29 55 33 C58 37 59 41 59 46 C59 53 52 58 32 58 C12 58 5 53 5 46 C5 41 6 37 9 33 C8 28 7 23 8 19 L10 9 C11 6 15 5 17 8 Z"
      fill="#f97316"
    />
    <circle cx="24" cy="32" r="6" fill="#fff" />
    <circle cx="40" cy="32" r="6" fill="#fff" />
    <circle cx="26" cy="32" r="3" fill="#0f172a" />
    <circle cx="38" cy="32" r="3" fill="#0f172a" />
    <path
      d="M20 44 C26 50 38 50 44 44"
      stroke="#0f172a"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 30 Q10 32 14 34"
      stroke="#f97316"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M50 30 Q54 32 50 34"
      stroke="#f97316"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default CatBadgeIcon;
