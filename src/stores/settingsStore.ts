import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSettings } from '@types/settings';

const defaultSettings: UserSettings = {
  theme: 'system',
  editor: {
    fontSize: 14,
    tabSize: 2,
    wordWrap: true,
    theme: 'dark',
  },
  comparison: {
    ignoreKeyOrder: false,
    ignoreArrayOrder: false,
    autoFormat: true,
    liveComparison: false,
  },
  general: {
    autosave: true,
    notifications: true,
    analytics: false,
  },
};

interface SettingsState {
  settings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(persist(
  (set) => ({
    settings: defaultSettings,
    updateSettings: (newSettings) =>
      set((state) => ({
        settings: { ...state.settings, ...newSettings },
      })),
    resetSettings: () => set({ settings: defaultSettings }),
  }),
  {
    name: 'json-compare-settings',
  }
));
