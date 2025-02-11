import ZInput from '@/components/FormComponents/ZInput';
import { FormInputTypeEnum } from '@/enums/form';
import { getAuthInstance } from '@/firebaseInstance/auth';
import { useZNavigate } from '@/hooks/tanstack/router';
import { showToast } from '@/packagesHelpers/reactToastify';
import { useUserZState } from '@/states/user';
import { appRoutes } from '@/utils/constants/route';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import { Button } from 'primereact/button';
import React from 'react';

const Login: React.FC = () => {
  const auth = getAuthInstance();
  const updateUserZState = useUserZState((state) => state.updateUser);
  const zNavigate = useZNavigate();

  return (
    <div className='flex align-items-center justify-content-center min-h-screen'>
      <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6'>
        <div className='text-center mb-5'>
          <div className='text-900 text-3xl font-medium mb-3'>Login</div>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = 'Email is required';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );
              if (userCredential?.user?.email) {
                showToast({ content: 'Logged In Successfully!' });

                updateUserZState({ email: userCredential?.user?.email });
              } else {
                showToast({
                  content:
                    'Something Went wrong, invalid user data received, try again later!',
                });
              }
              // Redirect or perform any other actions after successful login
            } catch (error) {
              console.error('Error signing in:', error);
              showToast({ content: error?.message });
              // Handle error (e.g., show error message to the user)
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            setFieldValue,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <ZInput
                id='email'
                type={FormInputTypeEnum.email}
                placeholder='Email'
                labelText='Email'
                value={values.email}
                onChange={(val) => {
                  setFieldValue('email', val, true);
                }}
                onBlur={() => {
                  setFieldTouched('email', true, true);
                }}
                inputClassName={
                  touched.email && errors.email ? 'p-invalid' : ''
                }
              />
              {touched.email && errors.email && (
                <small className='p-error'>{errors.email}</small>
              )}
              <ZInput
                id='password'
                type={FormInputTypeEnum.password}
                placeholder='Password'
                labelText='Password'
                value={values.password}
                onChange={(val) => {
                  setFieldValue('password', val, true);
                }}
                onBlur={() => {
                  setFieldTouched('password', true, true);
                }}
                inputClassName={
                  touched.password && errors.password ? 'p-invalid' : ''
                }
              />
              {touched.password && errors.password && (
                <small className='p-error'>{errors.password}</small>
              )}
              <Button
                label='Login'
                icon='pi pi-sign-in'
                className='w-full mt-3'
                type='submit'
                disabled={isSubmitting}
              />
            </form>
          )}
        </Formik>

        <Button
          type='button'
          outlined
          label='Go to Register Page'
          icon='pi pi-user'
          className='w-full mt-3'
          onClick={() => {
            zNavigate(appRoutes.register);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
