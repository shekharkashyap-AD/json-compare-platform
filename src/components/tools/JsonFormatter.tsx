import React, { useState } from 'react';
import { beautifyJSON, minifyJSON } from '@utils/jsonFormatting';
import Button from '@components/common/Button';
import Toast from '@components/common/Toast';

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

  const handleBeautify = () => {
    try {
      const result = beautifyJSON(input, 2);
      setOutput(result);
      setToast({ message: 'JSON beautified!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to beautify JSON', type: 'error' });
    }
  };

  const handleMinify = () => {
    try {
      const result = minifyJSON(input);
      setOutput(result);
      setToast({ message: 'JSON minified!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to minify JSON', type: 'error' });
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your JSON here..."
        className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
      />
      <div className="flex gap-2">
        <Button onClick={handleBeautify}>Beautify</Button>
        <Button onClick={handleMinify} variant="secondary">
          Minify
        </Button>
      </div>
      {output && (
        <textarea
          value={output}
          readOnly
          className="h-32 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type as 'success' | 'error' | 'info' | 'warning'}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default JsonFormatter;
