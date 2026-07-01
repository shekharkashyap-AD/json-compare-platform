import React, { useState } from 'react';
import { generatePatch, convertToRFC6902 } from '@utils/jsonPatch';
import Button from '@components/common/Button';

const JsonPatchGenerator: React.FC = () => {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [patch, setPatch] = useState<any>(null);

  const handleGeneratePatch = () => {
    try {
      const leftObj = JSON.parse(left);
      const rightObj = JSON.parse(right);
      const generatedPatch = generatePatch(leftObj, rightObj);
      const rfc6902 = convertToRFC6902(generatedPatch);
      setPatch({ delta: generatedPatch, rfc6902 });
    } catch (error) {
      console.error('Failed to generate patch:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <textarea
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="Original JSON"
          className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
        <textarea
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Modified JSON"
          className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
      </div>
      <Button onClick={handleGeneratePatch}>Generate Patch</Button>
      {patch && (
        <div className="space-y-2">
          <h3 className="font-semibold">RFC 6902 Patch:</h3>
          <pre className="rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800">
            {JSON.stringify(patch.rfc6902, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default JsonPatchGenerator;
