'use client';
// main
import React from 'react';
import AuthContainer from '../register/AuthContainer';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// components
import AuthButton from '@/components/Buttons/AuthButton';
import AuthTextField from '@/components/TextField/AuthTextField';

// css
import '../register/register.css';

type ResetPasswordDataType = {
  email: string;
};

export default function ResetPassword() {
  const { register, formState, handleSubmit } =
    useForm<ResetPasswordDataType>();
  const { errors } = formState;
  const handleResetPassword = (data: ResetPasswordDataType) => {
    console.log(data);
  };

  return (
    <div className="auth-parent">
      <div className="pt-4">
        <AuthContainer>
          <form
            className="flex flex-col items-center justify-center py-5"
            noValidate
            onSubmit={handleSubmit(handleResetPassword)}
            autoComplete="off"
          >
            <h1 className="text-2xl mb-4 text-center"> Reset password</h1>
            <p className="text-center text-gray-700 dark:text-gray-400 w-1/2 mb-4">
              If you forgot your password, please enter your email below to rest
              it.
            </p>
            <AuthTextField
              id="email"
              placeholder="example@email.com"
              width="75%"
              register={register}
              errors={errors}
              object={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
            />

            <AuthButton
              title="Reset password"
              width="75%"
              height="40px"
              ButtonClassName="mt-3 mb-5 text-white font-normal"
            />
            {/* <DevTool control={control}/> */}
          </form>
        </AuthContainer>
      </div>
    </div>
  );
}
