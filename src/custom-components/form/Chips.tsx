import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Chips as PrimeChips } from 'primereact/chips';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface ChipsProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  max?: number;
  allowDuplicate?: boolean;
}

export const Chips = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  max,
  allowDuplicate = false,
  ...props
}: ChipsProps) => {
  const { t } = useZTranslate();
  const chipsRef = useRef<PrimeChips>(null);

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
      <PrimeChips
        ref={chipsRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        max={max}
        allowDuplicate={allowDuplicate}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
