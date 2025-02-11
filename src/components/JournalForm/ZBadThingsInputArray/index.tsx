import { FormInputTypeEnum, RFFormFieldEnum } from '@/enums/form';
import { FieldArray, useFormikContext } from 'formik';
import { Button } from 'primereact/button';
import ZInput from '../../FormComponents/ZInput';

interface IZBadThingsInputArrayProps {
  labelClassName?: string;
  inputClassName?: string;
  labelText?: string;
  placeholder?: string;
}

const ZBadThingsInputArray: React.FC<IZBadThingsInputArrayProps> = ({
  labelClassName,
  inputClassName,
  labelText = 'Bad Things',
  placeholder = 'I faced a challenge with ...',
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<{
    [RFFormFieldEnum.challengingThings]: Array<string>;
  }>();

  return (
    <>
      <FieldArray
        name={RFFormFieldEnum.challengingThings}
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
                      values?.[RFFormFieldEnum.challengingThings]?.length || 0,
                      ''
                    );
                  }}
                  size='small'
                  type='button'
                >
                  Add
                </Button>
              </div>
              {values?.[RFFormFieldEnum.challengingThings]?.map((el, index) => {
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
                          `${RFFormFieldEnum.challengingThings}[${index}]`,
                          val,
                          true
                        );
                      }}
                      onBlur={() => {
                        setFieldTouched(
                          `${RFFormFieldEnum.challengingThings}[${index}]`,
                          true,
                          true
                        );
                      }}
                      value={values?.[RFFormFieldEnum.challengingThings][index]}
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

export default ZBadThingsInputArray;
