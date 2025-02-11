import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Dropdown as PrimeDropdown } from 'primereact/dropdown';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface DropdownProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  options: any[];
  optionLabel?: string;
  optionValue?: string;
}

export const Dropdown = ({
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
}: DropdownProps) => {
  const { t } = useZTranslate();
  const dropdownRef = useRef<PrimeDropdown>(null);

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
      <PrimeDropdown
        ref={dropdownRef}
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
