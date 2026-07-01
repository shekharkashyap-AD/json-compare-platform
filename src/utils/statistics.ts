export const calculateStatistics = (obj: any) => {
  let nodeCount = 0;
  let depth = 0;
  let objectCount = 0;
  let arrayCount = 0;
  let primitiveCount = 0;
  const duplicateKeys: Set<string> = new Set();
  const seenKeys: Set<string> = new Set();

  const traverse = (current: any, currentDepth: number = 0) => {
    depth = Math.max(depth, currentDepth);
    nodeCount++;

    if (Array.isArray(current)) {
      arrayCount++;
      current.forEach((item) => traverse(item, currentDepth + 1));
    } else if (typeof current === 'object' && current !== null) {
      objectCount++;
      for (const key in current) {
        if (seenKeys.has(key)) {
          duplicateKeys.add(key);
        }
        seenKeys.add(key);
        traverse(current[key], currentDepth + 1);
      }
    } else {
      primitiveCount++;
    }
  };

  traverse(obj);

  const fileSize = JSON.stringify(obj).length;
  const memoryEstimate = `${(fileSize / 1024).toFixed(2)} KB`;

  return {
    nodeCount,
    depth,
    objectCount,
    arrayCount,
    primitiveCount,
    duplicateKeys: Array.from(duplicateKeys),
    fileSize,
    memoryEstimate,
  };
};
