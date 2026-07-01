import React from 'react';

interface DiffViewerProps {
  diff: any;
}

const DiffViewer: React.FC<DiffViewerProps> = ({ diff }) => {
  return (
    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
      <pre className="overflow-x-auto text-sm text-gray-900 dark:text-gray-100">
        {JSON.stringify(diff, null, 2)}
      </pre>
    </div>
  );
};

export default DiffViewer;
