import * as jdp from 'jsondiffpatch';

export const compareJSON = (
  left: any,
  right: any,
  options?: { ignoreKeyOrder?: boolean; ignoreArrayOrder?: boolean }
) => {
  try {
    // Create diff patch
    const diff = jdp.diff(left, right);

    // Calculate similarity
    const leftStr = JSON.stringify(left);
    const rightStr = JSON.stringify(right);
    const similarity = leftStr === rightStr ? 100 : 0;

    return {
      diff,
      similarity,
      hasChanges: diff !== undefined,
    };
  } catch (error) {
    throw new Error(`Comparison failed: ${error}`);
  }
};

export const parseJSON = (json: string): any => {
  try {
    return JSON.parse(json);
  } catch (error) {
    throw new Error(`Invalid JSON: ${error}`);
  }
};

export const isValidJSON = (json: string): boolean => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};

export const getJSONPath = (obj: any, path: string[]): any => {
  return path.reduce((current, key) => current?.[key], obj);
};

export const setJSONPath = (obj: any, path: string[], value: any): any => {
  const newObj = JSON.parse(JSON.stringify(obj));
  let current = newObj;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }

  current[path[path.length - 1]] = value;
  return newObj;
};
