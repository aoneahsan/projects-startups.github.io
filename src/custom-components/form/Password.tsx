import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Password as PrimePassword } from 'primereact/password';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface PasswordProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  toggleMask?: boolean;
  feedback?: boolean;
}

export const Password = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  toggleMask = true,
  feedback = true,
  ...props
}: PasswordProps) => {
  const { t } = useZTranslate();
  const passwordRef = useRef<PrimePassword>(null);

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
      <PrimePassword
        ref={passwordRef}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        toggleMask={toggleMask}
        feedback={feedback}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
