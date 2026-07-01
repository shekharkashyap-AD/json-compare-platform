import React, { useState } from 'react';
import Button from '@components/common/Button';

const MergeTool: React.FC = () => {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [merged, setMerged] = useState('');

  const handleMergeLeft = () => {
    try {
      const leftObj = JSON.parse(left);
      setMerged(JSON.stringify(leftObj, null, 2));
    } catch (error) {
      console.error('Invalid JSON');
    }
  };

  const handleMergeRight = () => {
    try {
      const rightObj = JSON.parse(right);
      setMerged(JSON.stringify(rightObj, null, 2));
    } catch (error) {
      console.error('Invalid JSON');
    }
  };

  const handleMergeDeep = () => {
    try {
      const leftObj = JSON.parse(left);
      const rightObj = JSON.parse(right);
      const merged = { ...leftObj, ...rightObj };
      setMerged(JSON.stringify(merged, null, 2));
    } catch (error) {
      console.error('Invalid JSON');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <textarea
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="Left JSON"
          className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
        <textarea
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Right JSON"
          className="h-32 w-full rounded-lg border border-gray-200 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={handleMergeLeft}>Accept Left</Button>
        <Button onClick={handleMergeRight} variant="secondary">
          Accept Right
        </Button>
        <Button onClick={handleMergeDeep} variant="secondary">
          Merge Deep
        </Button>
      </div>
      {merged && (
        <textarea
          value={merged}
          readOnly
          className="h-32 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono dark:border-gray-800 dark:bg-gray-800"
        />
      )}
    </div>
  );
};

export default MergeTool;
