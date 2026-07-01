export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  editor: {
    fontSize: number;
    tabSize: number;
    wordWrap: boolean;
    theme: 'light' | 'dark';
  };
  comparison: {
    ignoreKeyOrder: boolean;
    ignoreArrayOrder: boolean;
    autoFormat: boolean;
    liveComparison: boolean;
  };
  general: {
    autosave: boolean;
    notifications: boolean;
    analytics: boolean;
  };
}
