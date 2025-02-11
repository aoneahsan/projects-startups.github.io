import ZInput from '@/components/FormComponents/ZInput';
import { FormInputTypeEnum } from '@/enums/form';
import { getAuthInstance } from '@/firebaseInstance/auth';
import { useZNavigate } from '@/hooks/tanstack/router';
import { showToast } from '@/packagesHelpers/reactToastify';
import { useUserZState } from '@/states/user';
import { appRoutes } from '@/utils/constants/route';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import { Button } from 'primereact/button';
import React from 'react';

const Register: React.FC = () => {
  const firebaseAuth = getAuthInstance();
  const updateUserZState = useUserZState((state) => state.updateUser);
  const zNavigate = useZNavigate();

  return (
    <div className='flex align-items-center justify-content-center min-h-screen'>
      <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6'>
        <div className='text-center mb-5'>
          <div className='text-900 text-3xl font-medium mb-3'>Register</div>
        </div>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.username) {
              errors.username = 'Username is required';
            }
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              // Register user using Firebase Auth
              const { email, password } = values;
              const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
              );
              if (userCredential?.user?.email) {
                showToast({ content: 'Registered Successfully!' });

                updateUserZState({ email: userCredential?.user?.email });
              } else {
                showToast({
                  content:
                    'Something Went wrong, invalid user data received, try again later!',
                });
              }
              // Redirect or perform any other actions after successful registration
            } catch (error) {
              console.error('Error registering:', error);
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
            setFieldValue,
            setFieldTouched,
          }) => (
            <form onSubmit={handleSubmit}>
              <ZInput
                id='username'
                type={FormInputTypeEnum.text}
                placeholder='Username'
                labelText='Username'
                value={values.username}
                onChange={(val) => {
                  setFieldValue('username', val, true);
                }}
                onBlur={() => {
                  setFieldTouched('username', true, true);
                }}
                inputClassName={
                  touched.username && errors.username ? 'p-invalid' : ''
                }
              />
              {touched.username && errors.username && (
                <small className='p-error'>{errors.username}</small>
              )}
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
              <ZInput
                id='confirmPassword'
                type={FormInputTypeEnum.password}
                placeholder='Confirm Password'
                labelText='Confirm Password'
                value={values.confirmPassword}
                onChange={(val) => {
                  setFieldValue('confirmPassword', val, true);
                }}
                onBlur={() => {
                  setFieldTouched('confirmPassword', true, true);
                }}
                inputClassName={
                  touched.confirmPassword && errors.confirmPassword
                    ? 'p-invalid'
                    : ''
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <small className='p-error'>{errors.confirmPassword}</small>
              )}
              <Button
                label='Register'
                icon='pi pi-user'
                className='w-full mt-3'
                type='submit'
              />
            </form>
          )}
        </Formik>
        <Button
          type='button'
          outlined
          label='Go to Login Page'
          icon='pi pi-user'
          className='w-full mt-3'
          onClick={() => {
            zNavigate(appRoutes.login);
          }}
        />
      </div>
    </div>
  );
};

export default Register;
