import { create } from 'zustand';

interface EditorState {
  fontSize: number;
  tabSize: number;
  wordWrap: boolean;
  language: 'json' | 'yaml';
  setFontSize: (size: number) => void;
  setTabSize: (size: number) => void;
  setWordWrap: (wrap: boolean) => void;
  setLanguage: (lang: 'json' | 'yaml') => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  fontSize: 14,
  tabSize: 2,
  wordWrap: true,
  language: 'json',
  setFontSize: (size) => set({ fontSize: size }),
  setTabSize: (size) => set({ tabSize: size }),
  setWordWrap: (wrap) => set({ wordWrap: wrap }),
  setLanguage: (lang) => set({ language: lang }),
}));
