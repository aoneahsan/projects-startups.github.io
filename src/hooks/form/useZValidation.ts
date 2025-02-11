import { RegisterOptions } from 'react-hook-form';

export type ValidationRules = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export const useZValidation = () => {
  const required = (message?: string): ValidationRules => ({
    required: message || 'This field is required',
  });

  const email = (message?: string): ValidationRules => ({
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: message || 'Invalid email address',
    },
  });

  const minLength = (length: number, message?: string): ValidationRules => ({
    minLength: {
      value: length,
      message: message || `Minimum length is ${length}`,
    },
  });

  const maxLength = (length: number, message?: string): ValidationRules => ({
    maxLength: {
      value: length,
      message: message || `Maximum length is ${length}`,
    },
  });

  return {
    required,
    email,
    minLength,
    maxLength,
  };
};
