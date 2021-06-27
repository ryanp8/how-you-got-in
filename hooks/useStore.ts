import create from 'zustand';
import { PostFetchOptions } from '../types'

interface Store extends PostFetchOptions {
    setActFilter: (applied: boolean) => void;
    setSatFilter: (applied: boolean) => void;
    setGpaFilter: (applied: boolean) => void;
    setActScore: (newMaxScore: number) => void;
    setSatScore: (newMaxScore: number) => void;
    setGpa: (newMaxScore: number) => void;
    storeChanged: number;
    setStoreChange: () => void;
}

export const useStore = create<Store>(set => ({
    actFilter: false,
    satFilter: false,
    gpaFilter: false,
    actScore: 36,
    satScore: 1600,
    gpa: 5,
    storeChanged: 1,
    setActFilter: (applied: boolean) => set(state => ({ actFilter: applied })),
    setSatFilter: (applied: boolean) => set(state => ({ satFilter: applied })),
    setGpaFilter: (applied: boolean) => set(state => ({ gpaFilter: applied })),
    setActScore: (newMaxScore: number) => set(state => ({ actScore: newMaxScore})),
    setSatScore: (newMaxScore: number) => set(state => ({ satScore: newMaxScore})),
    setGpa: (newMaxScore: number) => set(state => ({ gpa: newMaxScore})),
    setStoreChange: () => set(state => ({ storeChanged: Math.random() }))
}));


