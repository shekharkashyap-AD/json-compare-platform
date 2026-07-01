import React from 'react';
import { useUIStore } from '@stores/uiStore';

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useUIStore();

  if (!sidebarOpen) return null;

  const tools = [
    { label: 'JSON Compare', icon: '⚖️', href: '#' },
    { label: 'JSON Formatter', icon: '✨', href: '#' },
    { label: 'JSON Validator', icon: '✓', href: '#' },
    { label: 'Schema Validator', icon: '📋', href: '#' },
    { label: 'Merge Tool', icon: '🔀', href: '#' },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <nav className="space-y-2">
        {tools.map((tool) => (
          <a
            key={tool.label}
            href={tool.href}
            className="block rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="mr-2">{tool.icon}</span>
            {tool.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
