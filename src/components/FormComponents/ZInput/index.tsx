import { FormInputTypeEnum } from '@/enums/form';
import { InputText } from 'primereact/inputtext';

interface IZInputProps {
  id: string; // used for the 'for' attribute in the label
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
  type: FormInputTypeEnum;
  labelText?: string;
  hideLabel?: boolean;
  onChange: (e: any) => void;
  value: string;
  onBlur: () => void;
  removeMargin?: boolean;
}

const ZInput: React.FC<IZInputProps> = ({
  labelClassName,
  id,
  placeholder,
  inputClassName,
  type,
  labelText,
  hideLabel,
  onBlur,
  onChange,
  value,
  removeMargin,
}) => {
  return (
    <>
      {!hideLabel && (
        <label
          htmlFor={id}
          className={`block text-900 font-medium mb-2 ${labelClassName}`}
        >
          {labelText}
        </label>
      )}
      <InputText
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full ${inputClassName} ${removeMargin ? '' : 'mb-3'}`}
        onChange={(e) => {
          if (onChange) {
            onChange(e?.target?.value);
          }
        }}
        onBlur={(e) => {
          if (onBlur) {
            onBlur();
          }
        }}
        value={value ?? ''}
      />
    </>
  );
};

export default ZInput;
