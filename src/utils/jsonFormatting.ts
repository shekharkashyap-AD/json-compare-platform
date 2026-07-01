export const beautifyJSON = (json: string, indent: number = 2): string => {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed, null, indent);
  } catch (error) {
    throw new Error(`Failed to beautify JSON: ${error}`);
  }
};

export const minifyJSON = (json: string): string => {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed);
  } catch (error) {
    throw new Error(`Failed to minify JSON: ${error}`);
  }
};

export const formatJSON = (json: string, format: 'pretty' | 'compact'): string => {
  return format === 'pretty' ? beautifyJSON(json) : minifyJSON(json);
};

export const escapeJSON = (str: string): string => {
  return JSON.stringify(str).slice(1, -1);
};

export const unescapeJSON = (str: string): string => {
  try {
    return JSON.parse(`"${str}"`);
  } catch {
    return str;
  }
};
