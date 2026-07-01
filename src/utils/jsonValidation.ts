import Ajv from 'ajv';

const ajv = new Ajv();

export const validateJSON = (json: string): { valid: boolean; errors?: string[] } => {
  try {
    JSON.parse(json);
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      errors: [error instanceof Error ? error.message : 'Invalid JSON'],
    };
  }
};

export const validateAgainstSchema = (
  json: any,
  schema: any
): { valid: boolean; errors?: any[] } => {
  try {
    const validate = ajv.compile(schema);
    const valid = validate(json);

    return {
      valid,
      errors: validate.errors || undefined,
    };
  } catch (error) {
    return {
      valid: false,
      errors: [error],
    };
  }
};
