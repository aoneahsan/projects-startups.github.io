import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

export const useZForm = <T extends Record<string, any>>(
  props?: UseFormProps<T>
): UseFormReturn<T> => {
  return useForm<T>(props);
}; 