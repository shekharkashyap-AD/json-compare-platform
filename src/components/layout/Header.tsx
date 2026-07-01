import React from 'react';
import { useUIStore } from '@stores/uiStore';
import { useTheme } from '@hooks/useTheme';
import Button from '@components/common/Button';

const Header: React.FC = () => {
  const { toggleSidebar } = useUIStore();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 dark:text-gray-400">
            ☰
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">JSON Compare</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
