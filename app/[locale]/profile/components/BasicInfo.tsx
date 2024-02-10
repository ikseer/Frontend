'use client';
import React from 'react';
import LabelInfo from './LabelInfo';

import Select from '@/components/Select/Select';
import DisplayGender from '@/components/Gender/DisplayGender';
import { timeZoneList } from './DifferentTimeZone';
import AuthTextField from '@/components/InputField/InputField';

import { useForm } from 'react-hook-form';

interface ProfileType {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  date_of_birth: string;
  timezone: string;
  gender: string;
}

export default function BasicInfo() {
  const { register, formState, handleSubmit } = useForm<ProfileType>({
    defaultValues: {
      first_name: 'mohamed',
      last_name: 'yousef',
      email: 'modyyousef800@gmail.com',
      username: 'mohamedyousef',
      date_of_birth: '01/01/2000',
      timezone: 'UTC',
      gender: 'male',
    },
  });
  const { errors } = formState;
  const handleProfileSubmit = (data: ProfileType) => {
    console.log(data);
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(handleProfileSubmit)}>
      <div className="flex justify-between items-center">
        <LabelInfo
          mainText="full Name"
          secText="First and last name"
          inputText="first_name"
        />
        <div className="flex w-9/12 gap-x-2">
          {['first_name', 'last_name'].map((text, indx) => (
            <AuthTextField
              key={indx}
              id={text}
              register={register}
              errors={errors}
              object={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <LabelInfo mainText="Email" inputText="email" />
        <div className="flex w-9/12 gap-x-2">
          <AuthTextField
            id="email"
            register={register}
            errors={errors}
            object={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <LabelInfo mainText="Username" inputText="username" />
        <div className="flex w-9/12 gap-x-2">
          <AuthTextField
            id="username"
            register={register}
            errors={errors}
            object={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <LabelInfo mainText="Date of Birth" inputText="date_of_birth" />
        <div className="flex w-9/12 gap-x-2">
          <AuthTextField
            id="date_of_birth"
            register={register}
            errors={errors}
            object={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
          />
        </div>
      </div>

      {/*  time zone picker */}
      <Select label="Timezone" selectOptions={timeZoneList} />
      {/* Gender */}
      <DisplayGender />
    </form>
  );
}
