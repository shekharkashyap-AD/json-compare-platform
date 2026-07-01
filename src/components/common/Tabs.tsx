import React, { useState } from 'react';
import clsx from 'clsx';

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultValue }) => {
  const [active, setActive] = useState(defaultValue || tabs[0]?.value);

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={clsx(
              'px-4 py-2 font-medium transition-colors',
              active === tab.value
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.value === active)?.content}
      </div>
    </div>
  );
};

export default Tabs;
