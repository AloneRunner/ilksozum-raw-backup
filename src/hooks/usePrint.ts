import { useState, useCallback } from 'react';
import { CommunicationCard } from '../types.ts';
import { useLocalStorage } from './useLocalStorage.ts';

interface UsePrintProps {
    showToast: (message: string, type?: 'error' | 'info', duration?: number) => void;
}

export const usePrint = ({ showToast }: UsePrintProps) => {
    const [cardsToPrint, setCardsToPrint] = useState<CommunicationCard[]>([]);
    const [printCategoryColor, setPrintCategoryColor] = useState<string>('slate');
    const [printPool, setPrintPool] = useLocalStorage<CommunicationCard[]>('printPool_v1', []);
    const [categoryForPrintSelection, setCategoryForPrintSelection] = useState<{ id: string; title: string; color: string } | null>(null);

    const handleTogglePrintPool = useCallback((card: CommunicationCard) => {
        setPrintPool(prevPool => {
            const isInPool = prevPool.some(p => p.id === card.id);
            if (isInPool) {
                return prevPool.filter(p => p.id !== card.id);
            } else {
                if (prevPool.length >= 9) {
                    showToast("Yazdırma sepetine en fazla 9 kart ekleyebilirsiniz.", 'info');
                    return prevPool;
                }
                return [...prevPool, card];
            }
        });
    }, [showToast, setPrintPool]);

    const handleClearPrintPool = useCallback(() => setPrintPool([]), [setPrintPool]);
    
    const handleUpdatePrintPool = useCallback((cardsToAdd: CommunicationCard[], previousScreen: any, setScreenState: any) => {
        setPrintPool(prevPool => {
            const newPool = [...prevPool];
            const existingIds = new Set(prevPool.map(c => c.id));
            
            for(const card of cardsToAdd) {
                if (newPool.length >= 9) {
                    showToast(`Sepete en fazla 9 kart eklenebilir. Sadece ${newPool.length - prevPool.length} kart daha eklendi.`, 'info');
                    break;
                }
                if (!existingIds.has(card.id)) {
                    newPool.push(card);
                }
            }
            return newPool;
        });
        
        showToast(`${cardsToAdd.length} kart sepete eklendi.`, 'info');
        setScreenState(previousScreen);
    }, [showToast, setPrintPool]);

    return {
        cardsToPrint,
        setCardsToPrint,
        printCategoryColor,
        setPrintCategoryColor,
        printPool,
        categoryForPrintSelection,
        setCategoryForPrintSelection,
        handleTogglePrintPool,
        handleClearPrintPool,
        handleUpdatePrintPool,
    };
};