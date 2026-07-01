import React from 'react';
import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: string;
  theme?: string;
  height?: string;
  readOnly?: boolean;
}

const MonacoEditorComponent: React.FC<MonacoEditorProps> = ({
  value,
  onChange,
  language = 'json',
  theme = 'vs-dark',
  height = '500px',
  readOnly = false,
}) => {
  return (
    <Editor
      height={height}
      language={language}
      theme={theme}
      value={value}
      onChange={onChange}
      options={{
        minimap: { enabled: true },
        lineNumbers: 'on',
        folding: true,
        wordWrap: 'on',
        readOnly,
      }}
    />
  );
};

export default MonacoEditorComponent;
