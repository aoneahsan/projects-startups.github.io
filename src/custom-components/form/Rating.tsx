import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Rating as PrimeRating } from 'primereact/rating';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface RatingProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  ariaLabel?: string;
  stars?: number;
  cancel?: boolean;
}

export const Rating = ({
  name,
  control,
  label,
  labelTranslationKey,
  ariaLabel,
  stars = 5,
  cancel = true,
  ...props
}: RatingProps) => {
  const { t } = useZTranslate();
  const ratingRef = useRef<PrimeRating>(null);

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
      <PrimeRating
        ref={ratingRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        stars={stars}
        cancel={cancel}
        aria-label={ariaLabel}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
