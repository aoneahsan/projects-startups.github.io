import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { InputNumber as PrimeInputNumber } from 'primereact/inputnumber';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface InputNumberProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
}

export const InputNumber = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  ...props
}: InputNumberProps) => {
  const { t } = useZTranslate();
  const inputRef = useRef<PrimeInputNumber>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const translatedLabel = labelTranslationKey ? t(labelTranslationKey) : label;
  const translatedPlaceholder = placeholderTranslationKey
    ? t(placeholderTranslationKey)
    : placeholder;

  return (
    <div className='field'>
      {translatedLabel && <label>{translatedLabel}</label>}
      <PrimeInputNumber
        ref={inputRef}
        value={field.value}
        onValueChange={(e) => field.onChange(e.value)}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
