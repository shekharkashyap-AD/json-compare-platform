import { useState, useCallback } from 'react';
import { readFile } from '@utils/fileHandling';

export const useFileUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const content = await readFile(file);
      return content;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to upload file';
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { uploadFile, isLoading, error };
};
