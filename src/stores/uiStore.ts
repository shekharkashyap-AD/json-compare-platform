import { create } from 'zustand';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  viewMode: 'split' | 'left' | 'right' | 'diff';
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setViewMode: (mode: 'split' | 'left' | 'right' | 'diff') => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  sidebarOpen: true,
  viewMode: 'split',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setViewMode: (mode) => set({ viewMode: mode }),
}));
