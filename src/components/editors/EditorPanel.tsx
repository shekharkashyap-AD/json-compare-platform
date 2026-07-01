import React from 'react';
import MonacoEditor from './MonacoEditor';
import EditorToolbar from './EditorToolbar';

interface EditorPanelProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onFormat?: () => void;
  onMinify?: () => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({
  title,
  value,
  onChange,
  onFormat,
  onMinify,
}) => {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-800">
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <EditorToolbar onFormat={onFormat} onMinify={onMinify} />
      <div className="flex-1">
        <MonacoEditor value={value} onChange={(val) => onChange(val || '')} />
      </div>
    </div>
  );
};

export default EditorPanel;
