import React, { useState } from 'react';
import { validateJSON } from '@utils/jsonValidation';
import Button from '@components/common/Button';

const JsonValidator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{ valid: boolean; errors?: string[] } | null>(null);

  const handleValidate = () => {
    const validationResult = validateJSON(input);
    setResult(validationResult);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your JSON here..."
        className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
      />
      <Button onClick={handleValidate}>Validate</Button>
      {result && (
        <div className={`rounded-lg p-4 ${result.valid ? 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-200' : 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200'}`}>
          {result.valid ? '✓ Valid JSON' : '✗ Invalid JSON'}
          {result.errors && (
            <ul className="mt-2 space-y-1">
              {result.errors.map((error, i) => (
                <li key={i} className="text-sm">
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default JsonValidator;
