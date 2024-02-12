'use client';

// Main
import React from 'react';
import LabelInfo from './LabelInfo';
import { useForm } from 'react-hook-form';

// Components
import Select from '@/components/Select/Select';
import DisplayGender from '@/components/Gender/DisplayGender';
import { timeZoneList } from './DifferentTimeZone';
import AuthTextField from '@/components/InputField/InputField';
import BasicSettingButton from './BasicSettingButton';

// Hooks
import { useGetProfile } from '@/customHooks/Profile/useProfile';

// Interface
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
  const { data } = useGetProfile();
  console.log(data, 'data');
  const { register, formState, handleSubmit, reset } = useForm<ProfileType>({
    defaultValues: {
      ...data,
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
      <Select
        label="Timezone"
        selectOptions={timeZoneList}
        register={register}
      />
      {/* Gender */}
      <DisplayGender register={register} />

      <BasicSettingButton onClick={() => reset()} />
    </form>
  );
}
