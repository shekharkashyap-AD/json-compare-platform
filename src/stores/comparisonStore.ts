import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface ComparisonState {
  leftJSON: string;
  rightJSON: string;
  diff: any;
  similarity: number;
  setLeftJSON: (json: string) => void;
  setRightJSON: (json: string) => void;
  setDiff: (diff: any) => void;
  setSimilarity: (similarity: number) => void;
  clearComparison: () => void;
  swapJSON: () => void;
}

export const useComparisonStore = create<ComparisonState>()(subscribeWithSelector((set) => ({
  leftJSON: '',
  rightJSON: '',
  diff: null,
  similarity: 0,
  setLeftJSON: (json) => set({ leftJSON: json }),
  setRightJSON: (json) => set({ rightJSON: json }),
  setDiff: (diff) => set({ diff }),
  setSimilarity: (similarity) => set({ similarity }),
  clearComparison: () => set({ leftJSON: '', rightJSON: '', diff: null, similarity: 0 }),
  swapJSON: () => set((state) => ({ leftJSON: state.rightJSON, rightJSON: state.leftJSON })),
})));
