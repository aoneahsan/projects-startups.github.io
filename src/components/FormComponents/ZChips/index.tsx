import { RFFormFieldEnum } from '@/enums/form';
import { Chips } from 'primereact/chips';

interface IZChipsProps {
  id: string; // used for the 'for' attribute in the label
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
  labelText?: string;
  hideLabel?: boolean;
  onChange: (e: any) => void;
  value: string[];
  onBlur: () => void;
  removeMargin?: boolean;
}

const ZChips: React.FC<IZChipsProps> = ({
  labelClassName,
  id,
  placeholder,
  inputClassName,
  labelText,
  hideLabel = false,
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

      <Chips
        placeholder={placeholder}
        id={RFFormFieldEnum.tags}
        className={`w-full ${inputClassName} ${removeMargin ? '' : 'mb-3'}`}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e?.value);
          }
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }
        }}
      />
    </>
  );
};

export default ZChips;
