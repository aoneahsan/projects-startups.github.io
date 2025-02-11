import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { MultiSelect as PrimeMultiSelect } from 'primereact/multiselect';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface MultiSelectProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  options: any[];
  optionLabel?: string;
  optionValue?: string;
}

export const MultiSelect = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  options,
  optionLabel = 'label',
  optionValue = 'value',
  ...props
}: MultiSelectProps) => {
  const { t } = useZTranslate();
  const multiSelectRef = useRef<PrimeMultiSelect>(null);

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
      <PrimeMultiSelect
        ref={multiSelectRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        options={options}
        optionLabel={optionLabel}
        optionValue={optionValue}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
