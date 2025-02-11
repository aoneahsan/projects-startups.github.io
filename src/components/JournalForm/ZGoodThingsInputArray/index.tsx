import { FormInputTypeEnum, RFFormFieldEnum } from '@/enums/form';
import { FieldArray, useFormikContext } from 'formik';
import { Button } from 'primereact/button';
import ZInput from '../../FormComponents/ZInput';

interface IZGoodThingsInputArrayProps {
  labelClassName?: string;
  inputClassName?: string;
  labelText?: string;
  placeholder?: string;
}

const ZGoodThingsInputArray: React.FC<IZGoodThingsInputArrayProps> = ({
  labelClassName,
  inputClassName,
  labelText = 'Good Things',
  placeholder = 'I am grateful for ...',
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<{
    [RFFormFieldEnum.goodThings]: Array<string>;
  }>();

  return (
    <>
      <FieldArray
        name={RFFormFieldEnum.goodThings}
        render={({ insert, remove }) => {
          return (
            <>
              <div className='flex justify-content-between align-items-center flex-row mb-3'>
                <label
                  className={`block text-900 font-medium mb-2 ${labelClassName}`}
                >
                  {labelText}
                </label>
                <Button
                  onClick={() => {
                    insert(
                      values?.[RFFormFieldEnum.goodThings]?.length || 0,
                      ''
                    );
                  }}
                  size='small'
                  type='button'
                >
                  Add
                </Button>
              </div>
              {values?.[RFFormFieldEnum.goodThings]?.map((el, index) => {
                return (
                  <div
                    className='flex justify-content-between align-items-center flex-row mb-2'
                    key={index}
                  >
                    <ZInput
                      id={el}
                      hideLabel
                      placeholder={placeholder}
                      type={FormInputTypeEnum.text}
                      inputClassName={`mr-2 ${inputClassName}`}
                      removeMargin
                      onChange={(val) => {
                        setFieldValue(
                          `${RFFormFieldEnum.goodThings}[${index}]`,
                          val,
                          true
                        );
                      }}
                      onBlur={() => {
                        setFieldTouched(
                          `${RFFormFieldEnum.goodThings}[${index}]`,
                          true,
                          true
                        );
                      }}
                      value={values?.[RFFormFieldEnum.goodThings][index]}
                    />
                    <Button
                      onClick={() => {
                        remove(index);
                      }}
                      size='small'
                      type='button'
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            </>
          );
        }}
      />
    </>
  );
};

export default ZGoodThingsInputArray;
