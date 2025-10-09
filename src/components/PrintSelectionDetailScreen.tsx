import React, { useState, useMemo, useCallback } from 'react';
import { CommunicationCard } from '../types.ts';
import { imageData } from '../services/database/imageData.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import CheckCircleIcon from './icons/CheckCircleIcon.tsx';

interface PrintSelectionDetailScreenProps {
  category: { id: string; title: string; color: string };
  onBack: () => void;
  onConfirmSelection: (selectedCards: CommunicationCard[]) => void;
  bannedImageIds: Set<number>;
  currentPrintPool: CommunicationCard[];
}

const SelectableCard: React.FC<{ card: CommunicationCard; onSelect: () => void; isSelected: boolean; }> = ({ card, onSelect, isSelected }) => {
    const image = imageData.find(img => img.id === card.imageId);
    return (
        <button
            onClick={onSelect}
            className="relative w-full aspect-square bg-white p-2 flex flex-col items-center justify-end rounded-2xl shadow-md group transition-transform transform hover:scale-105"
        >
            <img src={image?.imageUrl || '/images/placeholder.png'} alt={card.text} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
            <h2 className="relative text-sm font-bold text-white z-10 text-center">{card.text}</h2>
            {isSelected && (
                <div className="absolute inset-0 bg-sky-500/70 flex items-center justify-center rounded-2xl animate-pop-in">
                    <CheckCircleIcon className="w-1/2 h-1/2 text-white"/>
                </div>
            )}
        </button>
    );
};

const PrintSelectionDetailScreen: React.FC<PrintSelectionDetailScreenProps> = ({
  category, onBack, onConfirmSelection, bannedImageIds, currentPrintPool
}) => {
    const [selectedCardIds, setSelectedCardIds] = useState<Set<string>>(new Set());
    const POOL_LIMIT = 9;

    const availableCards = useMemo(() => {
        const itemsToPrint = imageData.filter(item => item.tags.category === category.id && !bannedImageIds.has(item.id));
        const uniqueItems = Array.from(new Map(itemsToPrint.map(item => [item.word, item])).values());

        return uniqueItems.map(item => ({
            id: `obj_${item.id}`,
            text: item.word,
            imageId: item.id,
            audioKey: item.audioKeys.default,
            categoryColor: category.color
        }));
    }, [category.id, category.color, bannedImageIds]);

    const handleToggleSelect = useCallback((cardId: string) => {
        setSelectedCardIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(cardId)) {
                newSet.delete(cardId);
            } else {
                newSet.add(cardId);
            }
            return newSet;
        });
    }, []);
    
    const handleConfirm = () => {
        const cardsToAdd = availableCards.filter(card => selectedCardIds.has(card.id));
        onConfirmSelection(cardsToAdd);
    };
    
    const currentPoolIds = useMemo(() => new Set(currentPrintPool.map(c => c.id)), [currentPrintPool]);
    const totalSelectionCount = currentPrintPool.length + Array.from(selectedCardIds).filter(id => !currentPoolIds.has(id)).length;
    const canAddMore = totalSelectionCount <= POOL_LIMIT;

    return (
        <div className="flex flex-col h-full w-full max-w-4xl mx-auto p-4 animate-fade-in bg-slate-100">
            <header className="w-full flex-shrink-0 flex items-center justify-between mb-4">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label="Geri dön">
                    <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
                </button>
                <h1 className="text-xl font-bold text-slate-800 text-center">"{category.title}" için Kart Seç</h1>
                <div className="w-12"></div>
            </header>
            
            <p className="text-center text-slate-600 mb-4">Sepete eklemek istediğiniz kartları seçin. Sepetinizde {currentPrintPool.length} kart var. Toplam limit {POOL_LIMIT}.</p>

            <main className="flex-grow overflow-y-auto bg-white/60 p-4 rounded-2xl shadow-inner">
                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {availableCards.map(card => (
                        <SelectableCard 
                            key={card.id} 
                            card={card} 
                            isSelected={selectedCardIds.has(card.id)} 
                            onSelect={() => handleToggleSelect(card.id)}
                        />
                    ))}
                 </div>
            </main>
            
            <footer className="w-full flex-shrink-0 flex items-center justify-between mt-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-slate-400 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-slate-500 transition-colors"
                    aria-label="İptal et"
                >
                    İptal
                </button>
                <button
                    onClick={handleConfirm}
                    disabled={selectedCardIds.size === 0 || !canAddMore}
                    className="flex items-center gap-2 bg-sky-500 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Seçilenleri Sepete Ekle"
                >
                    <span>Sepete Ekle ({selectedCardIds.size})</span>
                </button>
            </footer>
             {!canAddMore && (
                <p className="text-center text-red-600 font-semibold mt-2">
                    Sepetiniz dolmak üzere veya dolu. En fazla {POOL_LIMIT} kart ekleyebilirsiniz.
                </p>
            )}
        </div>
    );
};

export default PrintSelectionDetailScreen;