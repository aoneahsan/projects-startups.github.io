import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { InputTextarea } from 'primereact/inputtextarea';
import { useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export interface TextAreaProps extends UseControllerProps<any> {
  label?: string;
  labelTranslationKey?: string;
  placeholder?: string;
  placeholderTranslationKey?: string;
  ariaLabel?: string;
  rows?: number;
  autoResize?: boolean;
}

export const TextArea = ({
  name,
  control,
  label,
  labelTranslationKey,
  placeholder,
  placeholderTranslationKey,
  ariaLabel,
  rows = 3,
  autoResize = true,
  ...props
}: TextAreaProps) => {
  const { t } = useZTranslate();
  const textareaRef = useRef<InputTextarea>(null);

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
      <InputTextarea
        ref={textareaRef}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        rows={rows}
        autoResize={autoResize}
        aria-label={ariaLabel}
        placeholder={translatedPlaceholder}
        className={error ? 'p-invalid' : ''}
        {...props}
      />
      {error && <small className='p-error'>{error.message}</small>}
    </div>
  );
};
