import React from 'react';
import Button from '@components/common/Button';

interface EditorToolbarProps {
  onFormat?: () => void;
  onMinify?: () => void;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onFormat, onMinify }) => {
  return (
    <div className="flex gap-2 border-b border-gray-200 px-4 py-2 dark:border-gray-800">
      <Button variant="secondary" size="sm" onClick={onFormat}>
        Format
      </Button>
      <Button variant="secondary" size="sm" onClick={onMinify}>
        Minify
      </Button>
    </div>
  );
};

export default EditorToolbar;
