import React, { useState } from 'react';
import { validateAgainstSchema } from '@utils/jsonValidation';
import Button from '@components/common/Button';

const SchemaValidator: React.FC = () => {
  const [schema, setSchema] = useState('');
  const [json, setJson] = useState('');
  const [result, setResult] = useState<{ valid: boolean; errors?: any[] } | null>(null);

  const handleValidate = () => {
    try {
      const schemaObj = JSON.parse(schema);
      const jsonObj = JSON.parse(json);
      const validationResult = validateAgainstSchema(jsonObj, schemaObj);
      setResult(validationResult);
    } catch (error) {
      console.error('Invalid JSON or schema');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
        placeholder="JSON Schema"
        className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
      />
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="JSON to validate"
        className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
      />
      <Button onClick={handleValidate}>Validate</Button>
      {result && (
        <div className={`rounded-lg p-4 ${result.valid ? 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-200' : 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200'}`}>
          {result.valid ? '✓ Valid' : '✗ Invalid'}
          {result.errors && (
            <ul className="mt-2 space-y-1">
              {result.errors.map((error, i) => (
                <li key={i} className="text-sm">
                  {JSON.stringify(error)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SchemaValidator;
