import React, { useState } from 'react';

interface TreeViewProps {
  diff: any;
}

const TreeView: React.FC<TreeViewProps> = ({ diff }) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleNode = (path: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpanded(newExpanded);
  };

  const renderNode = (obj: any, path: string = ''): React.ReactNode => {
    if (typeof obj !== 'object' || obj === null) {
      return <span className="text-gray-600 dark:text-gray-400">{String(obj)}</span>;
    }

    return (
      <div className="ml-4 space-y-1">
        {Object.entries(obj).map(([key, value]) => {
          const nodePath = `${path}.${key}`;
          const isExpandable = typeof value === 'object' && value !== null;
          const isExpanded = expanded.has(nodePath);

          return (
            <div key={nodePath}>
              <div className="flex items-center gap-2">
                {isExpandable ? (
                  <button
                    onClick={() => toggleNode(nodePath)}
                    className="w-4 text-left text-gray-600 dark:text-gray-400"
                  >
                    {isExpanded ? '▼' : '▶'}
                  </button>
                ) : (
                  <span className="w-4" />
                )}
                <span className="font-medium text-gray-900 dark:text-white">{key}:</span>
              </div>
              {isExpandable && isExpanded && renderNode(value, nodePath)}
            </div>
          );
        })}
      </div>
    );
  };

  return <div className="space-y-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">{renderNode(diff)}</div>;
};

export default TreeView;
