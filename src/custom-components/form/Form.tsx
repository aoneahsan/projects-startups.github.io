import { useZForm } from '@/hooks/form/useZForm';
import { DefaultValues, FormProvider } from 'react-hook-form';

export interface FormProps<T extends Record<string, any>> {
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
}

export const Form = <T extends Record<string, any>>({
  children,
  onSubmit,
  defaultValues,
}: FormProps<T>) => {
  const methods = useZForm<T>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
