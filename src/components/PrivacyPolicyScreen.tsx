
import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { policyTitle, policySections } from '../services/privacyContent.ts';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
        <div className="w-full flex items-center mb-6 relative">
            <button 
                onClick={onBack} 
                className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label="Ayarlara dön"
            >
                <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
            </button>
            <h1 className="flex-1 text-center text-3xl sm:text-4xl font-black text-slate-800">
                {policyTitle}
            </h1>
        </div>
      
        <div className="w-full flex-grow overflow-y-auto bg-white/80 p-6 rounded-2xl shadow-inner pr-4">
            <div className="prose prose-slate max-w-none">
                {policySections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-xl font-bold text-slate-700">{section.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicyScreen;
