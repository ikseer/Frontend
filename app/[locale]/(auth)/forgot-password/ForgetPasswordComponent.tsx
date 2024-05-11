'use client';
import React from 'react';
import InputField from '@/components/site/InputField/InputField';
import Button from '@/components/site/Buttons/Button';
import { useForm } from 'react-hook-form';

export default function ForgetPasswordComponent() {
  const { register, formState } = useForm();
  const { errors } = formState;

  return (
    <div className="p-5 w-[550px] flex flex-col items-center justify-center">
      <h1 className="text-center mb-8 text-2xl font-semibold">
        Reset Password
      </h1>
      <InputField
        register={register}
        errors={errors}
        id="new-password"
        type="password"
        labels={['New Password']}
        flexType="flex-col"
        width="75%"
      />
      <InputField
        register={register}
        errors={errors}
        id="new-password-confirm"
        type="password"
        labels={['Confirm new password']}
        flexType="flex-col"
        width="75%"
      />
      <Button title="Confirm new password" width="75%" height="50px" />
    </div>
  );
}
