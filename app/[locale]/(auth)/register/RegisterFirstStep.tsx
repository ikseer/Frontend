'use client';

// main
import * as React from 'react';
import { useContext } from 'react';
import { Link } from '@/navigation';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// components
import AuthButton from '@/components/Buttons/AuthButton';
import DividerText from '@/components/Divider/Divider';
import AuthShape from '@/components/ThridParthAuth/ThridPartyAuth';
import AuthTextField from '@/components/TextField/AuthTextField';
import Radio from '@/components/Radio/Radio';
import { nextRefProvider } from './page';

// icons & images
import Google from '@/public/images/auth/Google.svg';
import Facebook from '@/public/images/auth/Facebook.svg';
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';
import { LuUser } from 'react-icons/lu';
// css
import './register.css';

// interface

interface formDataType {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  gender: string;
}

export default function RegisterMainData() {
  const { register, handleSubmit, formState } = useForm<formDataType>({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    gender: '',
  });
  const { errors } = formState;

  const contextData = useContext(nextRefProvider);
  if (!contextData) throw new Error('Context is null');
  const { triggerFunction }: any = contextData;

  const handleLoginSubmit = (data: formDataType) => {
    console.log(data);
    console.log('error', errors);
    if (triggerFunction && triggerFunction.current)
      triggerFunction.current.click();
  };

  const firstNameObject = {
    required: {
      value: true,
      message: 'First Name is required',
    },
  };
  const lastNameObject = {
    required: {
      value: true,
      message: 'Last Name is required',
    },
  };

  const emailObject = {
    required: {
      value: true, 
      message: 'this field required'
    }
    
  };

  const userObject = {
    required: {
      value: true,
      message: 'Username is required',
    },
  };
  const passwordObject = {
    required: {
      value: true,
      message: 'password is required',
    },
  };
  const radioList = ['male', 'female', 'Prefer not to say'];
  const TextFieldName = [
    ['First name', 'first_name', firstNameObject],
    ['Last name', 'last_name', lastNameObject],
  ] as const;

  // icon, placeholder, id, object
  const TextFieldOther = [
    [<LuMail key="email" />, 'Email', 'email', , emailObject],
    [<LuUser key="username" />, 'Username', 'username', userObject],
    [<LuKeyRound key="password" />, 'Password', 'password', passwordObject],
  ] as const;

  const authShape = [
    [Google, 'google'],
    [Facebook, 'facebook'],
  ];

  return (
    <>
      <form
        className="flex items-center justify-center flex-col rounded-lg"
        autoComplete="off"
        onSubmit={handleSubmit(handleLoginSubmit)}
        data-hs-stepper
        noValidate
      >
        <h1 className="pt-5 text-2xl font-bold">Welcome to IKSIR</h1>
        <div className="w-3/4 mt-5">
          <div className="grid grid-cols-2 gap-5">
            {TextFieldName.map((textField, indx) => (
              <AuthTextField
                key={indx}
                placeholder={textField[0] as string}
                id={textField[1] as string}
                register={register}
                errors={errors}
                object={textField[2] as any}
              />
            ))}
          </div>
          {TextFieldOther.map((textField, indx) => (
            <AuthTextField
              key={indx}
              Icon={textField[0]}
              placeholder={textField[1] as string}
              id={textField[2] as string}
              register={register}
              errors={errors}
              object={textField[3] as any}
            />
          ))}

          <div>
            <div className="flex gap-x-6">
              {radioList.map((e, indx) => (
                <Radio
                  key={indx}
                  text={e}
                  register={register}
                  object={{
                    required: {
                      value: true,
                      message: 'Gender is required',
                    },
                  }}
                />
              ))}
            </div>
            <p
              className={`ml-2 text-xs font-normal text-red-500 dark:text-red-600 ${
                errors.gender && errors.gender.message ? '' : 'invisible'
              }`}
            >
              {errors.gender && errors.gender.message
                ? errors.gender.message
                : 'Input Validation'}
            </p>
          </div>
        </div>

        {/* <StepperNavigationButtons /> */}
        <AuthButton
          title="Login"
          width="75%"
          height="42px"
          data-hs-stepper-next-btn
        />

        <section className="w-3/4">
          <span>Already have an account, </span>
          <Link href="/login" style={{ color: '#0B9992', fontWeight: '600' }}>
            Login now
          </Link>
          ?
        </section>
        <DividerText text="or" />
        <div className="grid grid-cols-2 w-full px-4 gap-2">
          {authShape.map((shape, indx) => (
            <AuthShape key={indx} authImage={shape[0]} text={shape[1]} />
          ))}
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
}
