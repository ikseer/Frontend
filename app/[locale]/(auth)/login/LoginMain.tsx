'use client';
//
import * as React from 'react';
import { useState } from 'react';

// conponents
import AuthButton from '@/components/Buttons/AuthButton';
import DividerText from '@/components/Divider/Divider';
import Google from '@/public/images/auth/Google.svg';
import Facebook from '@/public/images/auth/Facebook.svg';
import AuthShape from '@/components/ThridParthAuth/ThridPartyAuth';
import AuthTextField from '@/components/TextField/AuthTextField';

// icons
import { MdEmail } from 'react-icons/md';
import { FaKey } from 'react-icons/fa';
import { Link } from '../../../../navigation';

// css
import '../register/register.css';

interface formDataType {
  username: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<formDataType>({
    username: '',
    password: '',
  });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  return (
    <form
      className="pt-2 auth-parent flex items-center justify-center"
      autoComplete="off"
      onSubmit={handleLoginSubmit}
    >
      <article
        style={{ width: '550px' }}
        className="flex items-center justify-center flex-col rounded-lg bg-gray-100 dark:bg-zinc-950"
      >
        <h1 className="mt-4 text-2xl font-bold ">Welcome to IKSIR</h1>
        <div className="w-3/4 mt-5">
          <AuthTextField
            Icon={<MdEmail />}
            placeholder="Email or Username"
            onChange={(val: string) => handleInputChange('username', val)}
          />
          <AuthTextField
            Icon={<FaKey />}
            placeholder="password"
            onChange={(val: string) => handleInputChange('password', val)}
          />
        </div>
        <AuthButton title="Login" width="75%" height="42px" />

        <div className="w-3/4">
          <Link href="/register">Forgot your password?</Link>
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
        <DividerText text="or" />
        <AuthShape authImage={Google} text="google" width="76%" />
        <AuthShape authImage={Facebook} text="facebook" width="76%" />
      </article>
    </form>
  );
}
