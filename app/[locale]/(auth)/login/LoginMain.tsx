'use client';
//
import * as React from 'react';
import { Link } from '../../../../navigation';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// conponents
import AuthButton from '@/components/Buttons/AuthButton';
import DividerText from '@/components/Divider/Divider';
import Google from '@/public/images/auth/Google.svg';
import Facebook from '@/public/images/auth/Facebook.svg';
import AuthShape from '@/components/ThridParthAuth/ThridPartyAuth';
import AuthTextField from '@/components/InputField/AuthTextField';

// hooks
import { useLogin } from '@/customHooks/Auth/useLogin';

// icons
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';

// css
import '../register/register.css';

interface FormDataType {
  username: string;
  password: string;
}
interface LoginType {
  keys: string[];
}

export default function Login({ keys }: LoginType) {
  const { register, formState, handleSubmit } = useForm<FormDataType>();
  const { errors } = formState;
  const { mutate } = useLogin();

  const handleLoginSubmit = (data: FormDataType) => {
    mutate(data);
  };

  return (
    <div>
      <form
        className="pt-2 auth-parent flex items-center justify-center"
        autoComplete="off"
        onSubmit={handleSubmit(handleLoginSubmit)}
        noValidate
      >
        <article
          style={{ width: '550px' }}
          className="flex items-center justify-center flex-col rounded-lg bg-gray-100 dark:bg-zinc-950"
        >
          <h1 className="mt-4 text-2xl font-bold ">{keys[0]}</h1>
          <div className="w-3/4 mt-5">
            <AuthTextField
              id="username"
              Icon={<LuMail />}
              placeholder={keys[1]}
              register={register}
              errors={errors}
              object={{
                required: {
                  value: true,
                  message: 'username is required',
                },
              }}
            />

            <AuthTextField
              id="password"
              Icon={<LuKeyRound />}
              placeholder={keys[2]}
              register={register}
              errors={errors}
              object={{
                required: {
                  value: true,
                  message: 'password is required',
                },
              }}
            />
          </div>

          <AuthButton title={keys[3]} width="75%" height="42px" />

          <div className="w-3/4">
            <Link href="/reset-password">{keys[4]}</Link>
            <section>
              <span>{keys[5]}</span>
              <Link
                href="/register"
                style={{ color: '#0B9992', fontWeight: '600' }}
              >
                {keys[6]}
              </Link>
            </section>
          </div>
          <DividerText text={keys[7]} />
          <AuthShape authImage={Google} text={keys[8]} width="76%" />
          <AuthShape authImage={Facebook} text={keys[9]} width="76%" />
        </article>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}
