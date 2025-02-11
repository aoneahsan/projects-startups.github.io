import { useZTextField } from '@/hooks/aria/useZTextField';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { InputText as PrimeInputText } from 'primereact/inputtext';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface InputTextProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
}

export const InputText = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  ...props
}: InputTextProps) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLInputElement>(null);
  
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control
  });

  const { labelProps, inputProps } = useZTextField({
    ...props,
    'aria-label': ariaLabel,
  }, ref);

  const translatedLabel = labelTranslationKey ? t(labelTranslationKey) : label;
  const translatedPlaceholder = placeholderTranslationKey ? t(placeholderTranslationKey) : placeholder;

  return (
    <div className="field">
      {translatedLabel && (
        <label {...labelProps}>{translatedLabel}</label>
      )}
      <PrimeInputText
        ref={ref}
        {...field}
        {...inputProps}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
      />
      {error && (
        <small className="p-error">{error.message}</small>
      )}
    </div>
  );
}; 