import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { ColorPicker as PrimeColorPicker } from 'primereact/colorpicker';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface ColorPickerProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  ariaLabel?: string;
  format?: 'hex' | 'rgb';
  inline?: boolean;
}

export const ColorPicker = ({
  name,
  control,
  label,
  labelTranslationKey,
  ariaLabel,
  format = 'hex',
  inline = false,
  ...props
}: ColorPickerProps) => {
  const { t } = useZTranslate();
  const colorPickerRef = useRef<PrimeColorPicker>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const translatedLabel = labelTranslationKey ? t(labelTranslationKey) : label;

  return (
    <div className='field'>
      {translatedLabel && <label>{translatedLabel}</label>}
      <PrimeColorPicker
        ref={colorPickerRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        format={format}
        inline={inline}
        aria-label={ariaLabel}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
