import React, { useState, useEffect } from 'react';
import { imageData } from '../services/database/imageData.ts';
import { ImageMetadata } from '../types.ts';
import Card from './ui/Card.tsx';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import RestoreIcon from './icons/RestoreIcon.tsx';

interface BannedImagesScreenProps {
  bannedImageIds: Set<number>;
  onUnbanImage: (id: number) => void;
  onBack: () => void;
}

const BannedImagesScreen: React.FC<BannedImagesScreenProps> = ({ bannedImageIds, onUnbanImage, onBack }) => {
    const [bannedItems, setBannedItems] = useState<ImageMetadata[]>([]);

    useEffect(() => {
        const items = imageData.filter(item => bannedImageIds.has(item.id));
        setBannedItems(items);
    }, [bannedImageIds]);

  return (
    <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
      <div className="w-full flex items-center mb-8 relative">
        <button 
          onClick={onBack} 
          className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" 
          aria-label="Ayarlara dön"
        >
          <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
        </button>
        <h1 className="flex-1 text-center text-3xl sm:text-4xl font-black text-slate-800">
          Yasaklı Görseller
        </h1>
      </div>
      
      {bannedItems.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="text-2xl text-slate-700 font-semibold">Yasaklanmış görsel bulunmuyor.</p>
            <p className="text-lg text-slate-500 mt-2">Etkinliklerdeki "yasakla" butonuyla istemediğiniz görselleri buradan yönetebilirsiniz.</p>
        </div>
      ) : (
        <div className="w-full flex-grow overflow-y-auto pr-2 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {bannedItems.map(item => (
                    <div key={item.id} className="relative group">
                        <Card imageUrl={item.imageUrl} word={item.word} onClick={() => {}} className="aspect-square"/>
                        <button 
                            onClick={() => onUnbanImage(item.id)}
                            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                            aria-label={`${item.word} görselini geri yükle`}
                        >
                            <RestoreIcon className="w-12 h-12 mb-2"/>
                            <span className="font-bold">Geri Yükle</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(BannedImagesScreen);