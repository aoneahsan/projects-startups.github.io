import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { RadioButton as PrimeRadioButton } from 'primereact/radiobutton';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface RadioOption {
  label: string;
  value: any;
  labelTranslationKey?: string;
}

export interface RadioButtonProps extends UseControllerProps<any> {
  options: RadioOption[];
  ariaLabel?: string;
}

export const RadioButton = ({
  name,
  control,
  options,
  ariaLabel,
  ...props
}: RadioButtonProps) => {
  const { t } = useZTranslate();
  const radioRef = useRef<PrimeRadioButton>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className='field-radiobutton'>
      {options.map((option) => {
        const translatedLabel = option.labelTranslationKey
          ? t(option.labelTranslationKey)
          : option.label;

        return (
          <div
            key={option.value}
            className='field-radiobutton'
          >
            <PrimeRadioButton
              ref={radioRef}
              value={option.value}
              checked={field.value === option.value}
              onChange={(e) => field.onChange(e.value)}
              aria-label={`${ariaLabel} ${translatedLabel}`}
              className={error ? 'p-invalid' : ''}
              {...props}
            />
            <label className={error ? 'p-error' : ''}>{translatedLabel}</label>
          </div>
        );
      })}
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
