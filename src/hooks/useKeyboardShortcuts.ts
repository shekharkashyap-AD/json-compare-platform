import { useEffect } from 'react';

interface ShortcutConfig {
  [key: string]: () => void;
}

export const useKeyboardShortcuts = (shortcuts: ShortcutConfig) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = `${event.ctrlKey || event.metaKey ? 'ctrl+' : ''}${
        event.shiftKey ? 'shift+' : ''
      }${event.key.toLowerCase()}`;

      if (shortcuts[key]) {
        event.preventDefault();
        shortcuts[key]();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};
