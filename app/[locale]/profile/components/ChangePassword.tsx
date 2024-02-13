'use client';

// Main
import React from 'react';
import { Link } from '@/navigation';
import { useForm } from 'react-hook-form';


// Components
import InputField from '@/components/InputField/InputField';
import Button from '@/components/Buttons/Button';


// Interface
interface FormDataType {
  old_password: string;
  new_password1: string;
  new_password2: string;
}

export default function ChangePassword() {
  const { register, formState, handleSubmit, watch } = useForm<FormDataType>();
  const { errors } = formState;
  const handleChangePasswordSumbit = (data: FormDataType) => {
    console.log(data)
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleChangePasswordSumbit)}>
      <h1>Change Password</h1>
      <InputField
        id="old_password"
        placeholder="Old password"
        flexType="flex-col"
        width="75%"
        register={register}
        errors={errors}
        labels={[
          <span
            key="old_password"
            className="text-zinc-600 dark:text-slate-400"
          >
            Old password
          </span>,
          <Link
            key="forgot-password"
            href="/forgot-password"
            className="text-teal-600"
          >
            Forgot Password?
          </Link>,
        ]}
        type="password"
        object={{
          required: 'Old password is required',
        }}
      />
      <InputField
        id="new_password1"
        placeholder="New password"
        flexType="flex-col"
        width="75%"
        register={register}
        errors={errors}
        labels={[
          <span
            key="new_password1"
            className="text-zinc-600 dark:text-slate-400"
          >
            Old password
          </span>,
        ]}
        type="password"
        object={{
          required: 'New password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          maxLength: {
            value: 20,
            message: 'Password must not exceed 128 characters',
          },
        }}
      />
      <InputField
        id="new_password2"
        placeholder="Repeat password"
        flexType="flex-col"
        width="75%"
        register={register}
        errors={errors}
        labels={[
          <span
            key="new_password2"
            className="text-zinc-600 dark:text-slate-400"
          >
            Old password
          </span>,
        ]}
        type="password"
        object={{
          required: 'Repeat password is required',
          validate: (value:string) => {
            if (value !== watch('new_password1')) {
              return 'Passwords do not match';
            }
          }
        }}
      />  
      <Button
        type="submit"
        title="Save"
        width="150px"
        height="42px"
        ButtonClassName="mt-5 bg-slate-100 border-2  border-gray-200 hover:bg-gray-200
                 hover:text-zinc-500  text-teal-600 
                dark:bg-zinc-950 dark:text-slate-400 font-medium border-1 border-slate-200
                dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-slate-300
                "
        background="bg-white"
      />
    </form>
  );
}
