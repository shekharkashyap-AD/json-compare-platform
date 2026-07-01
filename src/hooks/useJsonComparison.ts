import { useState, useCallback } from 'react';
import { compareJSON, parseJSON, isValidJSON } from '@utils/jsonComparison';

export const useJsonComparison = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState(null);

  const compare = useCallback((left: string, right: string) => {
    setIsLoading(true);
    setError(null);

    try {
      if (!isValidJSON(left) || !isValidJSON(right)) {
        throw new Error('Invalid JSON in one or both inputs');
      }

      const leftObj = parseJSON(left);
      const rightObj = parseJSON(right);
      const comparisonResult = compareJSON(leftObj, rightObj);

      setResult(comparisonResult);
      return comparisonResult;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Comparison failed';
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { compare, isLoading, error, result };
};
