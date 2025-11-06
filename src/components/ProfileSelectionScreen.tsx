
import React, { useState } from 'react';
import { Profile } from '../types';
import BearIcon from './icons/avatars/BearIcon.tsx';
import BunnyIcon from './icons/avatars/BunnyIcon.tsx';
import CatIcon from './icons/avatars/CatIcon.tsx';
import DogIcon from './icons/avatars/DogIcon.tsx';
import FoxIcon from './icons/avatars/FoxIcon.tsx';
import PandaIcon from './icons/avatars/PandaIcon.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import { useAppContext } from '../contexts/AppContext.ts';

interface ProfileSelectionScreenProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
  onCreateProfile: (name: string, avatar: string) => void;
  onBack: () => void;
}

const avatars: { [key: string]: React.FC<{ className?: string }> } = {
  bear: BearIcon,
  bunny: BunnyIcon,
  cat: CatIcon,
  dog: DogIcon,
  fox: FoxIcon,
  panda: PandaIcon,
};

export const getAvatar = (avatarKey: string) => {
    return avatars[avatarKey] || DogIcon; // Default to DogIcon if not found
};


const ProfileSelectionScreen: React.FC<ProfileSelectionScreenProps> = ({ profiles, onSelectProfile, onCreateProfile, onBack }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [newName, setNewName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('dog');
    const { settings } = useAppContext();
    const isThemed = settings.theme !== 'simple';

    const handleCreate = () => {
        if (newName.trim()) {
            onCreateProfile(newName.trim(), selectedAvatar);
            setNewName('');
            setSelectedAvatar('dog');
            setIsCreating(false);
        }
    };

    const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
        const Avatar = getAvatar(profile.avatar);
        return (
            <button 
                onClick={() => onSelectProfile(profile)}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
                <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center">
                    <Avatar className="w-20 h-20 text-sky-600"/>
                </div>
                <h3 className={`text-xl font-bold ${isThemed ? 'text-white text-shadow-soft' : 'text-slate-700'} truncate`}>{profile.name}</h3>
            </button>
        )
    };

    if (isCreating) {
        return (
            <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto p-4 animate-fade-in">
                <h2 className={`text-3xl font-bold ${isThemed ? 'text-white text-shadow-soft' : 'text-slate-700'} mb-6`}>Yeni Profil Oluştur</h2>
                <div className="w-full bg-white/80 p-6 rounded-2xl shadow-xl space-y-4">
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Çocuğun adı"
                        maxLength={15}
                        className="w-full p-3 text-lg border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-sky-300 focus:border-sky-500 outline-none"
                    />
                    <div className="grid grid-cols-3 gap-3">
                        {Object.keys(avatars).map(avatarKey => {
                            const AvatarIcon = avatars[avatarKey];
                            return (
                                <button 
                                    key={avatarKey}
                                    onClick={() => setSelectedAvatar(avatarKey)}
                                    className={`p-2 rounded-xl transition-all ${selectedAvatar === avatarKey ? 'bg-sky-200 ring-4 ring-sky-400' : 'bg-slate-100 hover:bg-slate-200'}`}
                                >
                                    <AvatarIcon className="w-16 h-16 text-sky-700"/>
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex gap-4 mt-4">
                         <button 
                            onClick={() => setIsCreating(false)}
                            className="flex-1 bg-slate-400 text-white font-bold py-3 rounded-lg shadow-md hover:bg-slate-500 transition-colors"
                        >
                            İptal
                        </button>
                        <button 
                            onClick={handleCreate}
                            disabled={!newName.trim()}
                            className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-600 disabled:bg-slate-300 transition-colors"
                        >
                            Oluştur
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col items-center justify-start h-full max-w-2xl mx-auto p-4 animate-fade-in">
             <div className="w-full flex items-center mb-8 relative">
                <button 
                    onClick={onBack} 
                    className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" 
                    aria-label="Ayarlara dön"
                >
                    <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
                </button>
                <h1 className={`flex-1 text-center text-3xl sm:text-4xl font-black ${isThemed ? 'text-white text-shadow-soft' : 'text-slate-700'}`}>
                    Profilleri Yönet
                </h1>
            </div>

            <div className="w-full flex-grow">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {profiles.map(p => <ProfileCard key={p.id} profile={p} />)}
                     <button 
                        onClick={() => setIsCreating(true)}
                        className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-100/70 border-4 border-dashed border-slate-300 rounded-2xl shadow-inner text-slate-500 hover:bg-white/70 hover:border-sky-400 hover:text-sky-600 transition-colors"
                    >
                        <div className="w-24 h-24 rounded-full flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-bold">Yeni Profil Ekle</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSelectionScreen;
