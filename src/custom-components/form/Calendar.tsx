import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface CalendarProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  showTime?: boolean;
  dateFormat?: string;
}

export const Calendar = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  showTime = false,
  dateFormat = 'dd/mm/yy',
  ...props
}: CalendarProps) => {
  const { t } = useZTranslate();
  const calendarRef = useRef<PrimeCalendar>(null);

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
      <PrimeCalendar
        ref={calendarRef}
        value={field.value}
        onChange={(e) => field.onChange(e.value)}
        showTime={showTime}
        dateFormat={dateFormat}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
