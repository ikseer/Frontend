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
import AuthTextField from '@/components/TextField/AuthTextField';

// icons
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';

// css
import '../register/register.css';

interface formDataType {
  username: string;
  password: string;
}

export default function Login() {
  const { register, formState, handleSubmit } =
    useForm<formDataType>({
      username:'',
      password:''
    });
  const { errors } = formState;



  const handleLoginSubmit = (data:formDataType) => {
    console.log(data)
  
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
          <h1 className="mt-4 text-2xl font-bold ">Welcome to IKSIR</h1>
          <div className="w-3/4 mt-5">
            <AuthTextField
              id="username"
              Icon={<LuMail />}
              placeholder="Email or Username"
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
              placeholder="password"
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

          <AuthButton title="Login" width="75%" height="42px" />

          <div className="w-3/4">
            <Link href="/reset-password">Forgot your password?</Link>
            <section>
              <span>Don’t have an account, </span>
              <Link
                href="/register"
                style={{ color: '#0B9992', fontWeight: '600' }}
              >
                Register now
              </Link>
              ?
            </section>
          </div>
          <DividerText text="or"/>
          <AuthShape authImage={Google} text="google" width="76%" />
          <AuthShape authImage={Facebook} text="facebook" width="76%" />
        </article>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}
