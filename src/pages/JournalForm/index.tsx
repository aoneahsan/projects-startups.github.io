import ZChips from '@/components/FormComponents/ZChips';
import ZInput from '@/components/FormComponents/ZInput';
import ZBadThingsInputArray from '@/components/JournalForm/ZBadThingsInputArray';
import ZGoodThingsInputArray from '@/components/JournalForm/ZGoodThingsInputArray';
import { FormInputTypeEnum, RFFormFieldEnum } from '@/enums/form';
import { getAuthInstance } from '@/firebaseInstance/auth';
import { getFirestoreInstance } from '@/firebaseInstance/firestore';
import { useZNavigate } from '@/hooks/tanstack/router';
import { showToast } from '@/packagesHelpers/reactToastify';
import { collectionNames } from '@/utils/constants/firestore';
import { appRoutes } from '@/utils/constants/route';
import { addDoc, collection } from 'firebase/firestore';
import { Formik } from 'formik';
import { Button } from 'primereact/button';

const JournalForm: React.FC = () => {
  const zNavigate = useZNavigate();
  const auth = getAuthInstance();
  const firestore = getFirestoreInstance();

  return (
    <>
      <>
        <Formik
          initialValues={{
            [RFFormFieldEnum.goodThings]: [''],
            [RFFormFieldEnum.challengingThings]: [''],
            [RFFormFieldEnum.toRememberThisDayFor]: '',
            [RFFormFieldEnum.tags]: [],
          }}
          validate={(values) => {
            return {};
          }}
          onSubmit={async (values) => {
            const user = auth.currentUser;

            if (user) {
              const journalsRef = collection(
                firestore,
                collectionNames.users,
                user.uid,
                collectionNames.journals
              );
              await addDoc(journalsRef, {
                userId: user.uid,
                goodThings: values[RFFormFieldEnum.goodThings],
                challengingThings: values[RFFormFieldEnum.challengingThings],
                toRememberThisDayFor:
                  values[RFFormFieldEnum.toRememberThisDayFor],
                tags: values[RFFormFieldEnum.tags],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              });
              showToast({ content: 'Journal Entry Created Successfully!' });

              zNavigate(appRoutes.home);
            } else {
              showToast({ content: 'No user is logged in' });
            }
          }}
        >
          {({ handleSubmit, values, setFieldValue, setFieldTouched }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className='flex align-items-center justify-content-center'>
                  <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-8'>
                    <div className='text-center mb-5'>
                      <div className='text-900 text-3xl font-medium mb-3'>
                        Daily Reflection
                      </div>
                    </div>

                    <div>
                      <ZGoodThingsInputArray />
                      <ZBadThingsInputArray />
                      <ZInput
                        id={RFFormFieldEnum.toRememberThisDayFor}
                        placeholder='What did you learn today?'
                        labelText='Learnings'
                        type={FormInputTypeEnum.text}
                        onChange={(val) => {
                          setFieldValue(
                            RFFormFieldEnum.toRememberThisDayFor,
                            val,
                            true
                          );
                        }}
                        onBlur={() => {
                          setFieldTouched(
                            RFFormFieldEnum.toRememberThisDayFor,
                            true,
                            true
                          );
                        }}
                        value={values?.[RFFormFieldEnum.toRememberThisDayFor]}
                      />

                      <ZChips
                        id={RFFormFieldEnum.tags}
                        placeholder='Add tags'
                        value={values?.[RFFormFieldEnum.tags]}
                        labelText='Tags'
                        onChange={(val) => {
                          setFieldValue(RFFormFieldEnum.tags, val, true);
                        }}
                        onBlur={() => {
                          setFieldTouched(RFFormFieldEnum.tags, true, true);
                        }}
                      />

                      <Button
                        label='Add Journal Entry'
                        icon='pi pi-user'
                        className='w-full'
                        type='submit'
                      />
                      <Button
                        label='Go back to Home'
                        icon='pi pi-user'
                        className='w-full mt-3'
                        type='button'
                        outlined
                        onClick={() => {
                          zNavigate(appRoutes.home);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </>
    </>
  );
};

export default JournalForm;
