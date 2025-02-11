import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Slider as PrimeSlider } from 'primereact/slider';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface SliderProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  ariaLabel?: string;
  min?: number;
  max?: number;
  step?: number;
  range?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export const Slider = ({
  name,
  control,
  label,
  labelTranslationKey,
  ariaLabel,
  min = 0,
  max = 100,
  step = 1,
  range = false,
  orientation = 'horizontal',
  ...props
}: SliderProps) => {
  const { t } = useZTranslate();
  const sliderRef = useRef<PrimeSlider>(null);

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
      <PrimeSlider
        ref={sliderRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        min={min}
        max={max}
        step={step}
        range={range}
        orientation={orientation}
        aria-label={ariaLabel}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
