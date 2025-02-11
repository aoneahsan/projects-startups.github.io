import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface CheckboxProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  ariaLabel?: string;
}

export const Checkbox = ({
  name,
  control,
  label,
  labelTranslationKey,
  ariaLabel,
  ...props
}: CheckboxProps) => {
  const { t } = useZTranslate();
  const checkboxRef = useRef<PrimeCheckbox>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const translatedLabel = labelTranslationKey ? t(labelTranslationKey) : label;

  return (
    <div className='field-checkbox'>
      <PrimeCheckbox
        ref={checkboxRef}
        checked={field.value}
        onChange={(e) => field.onChange(e.checked)}
        aria-label={ariaLabel}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {translatedLabel && (
        <label className={error ? 'p-error' : ''}>{translatedLabel}</label>
      )}
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
