'use client';
import { Link } from '@/navigation';
import { FormProvider } from 'react-hook-form';
import DividerText from '@/components/site/Divider/Divider';
import AuthShape from '@/components/site/ThridParthAuth/ThridPartyAuth';
import Radio from '@/components/site/Radio/Radio';
import { useRegister } from '@/customHooks/Auth/useRegister';
import Google from '@/images/auth/Google.svg';
import Facebook from '@/images/auth/Facebook.svg';
import { LuMail, LuKeyRound, LuUser } from 'react-icons/lu';

import '../register.css';
import { z } from 'zod'
import { useZodForm } from '@/lib/uer-zod-schema';
import { FormInput } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const schema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string(),
  password: z.string().min(8).max(20),
  gender: z.string(),
})

export default function RegisterFirstStep() {
  const form = useZodForm({
    schema: schema
  });

  const { mutate } = useRegister();
  const t = useTranslations("Register");

  return (
    <FormProvider {...form}>
      <form
        className="flex items-center justify-center flex-col rounded-lg space-y-6 py-10"
        autoComplete="off"
        onSubmit={form.handleSubmit((data) => {
            console.log(data)
            mutate(data)
        }
        )}
        data-hs-stepper
        noValidate
      >
        <h1 className="pt-5 text-2xl font-bold">{t('welcome-to-ikseer')}</h1>
        <section className="w-3/4 space-y-4">
          <section className="grid grid-cols-2 gap-5">
            <div >
              <label htmlFor='firstName'>{t('first-name')}</label>
              <FormInput
                placeholder={t('first-name')}
                name="firstName"
                className="rounded-md h-10" 
              />
            </div>
            <div>
              <label htmlFor='lastName'>{t('last-name')}</label>
              <FormInput
                placeholder={t('last-name')}
                name="lastName"
                className="rounded-md h-10"

              />
            </div>
          </section>
        <section className="flex w-full">
          <label htmlFor='email' className="h-10 cursor-pointer px-4 flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400" >
            <LuMail />
          </label>
            <FormInput
              name="email"
              placeholder={t('email')}
              className="rounded-e-md h-10"
            />

        </section>
        <section className="flex w-full">
          <label htmlFor='username'className="h-10 cursor-pointer px-4 flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400" >

            <LuUser />
          </label>
            <FormInput
              name="username"
              placeholder={t('username')}
            />

        </section>
        <section className="flex w-full">
          <label htmlFor='password' className="h-10 cursor-pointer px-4 flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400" >
           
            <LuKeyRound />
          </label>
            <FormInput
              name="password"
              placeholder={t('password')}
            />
        </section>
            <section className="flex gap-x-6 ">
              <div className="flex items-center gap-x-2">
                <Radio
                  name="gender"
                  value="male"
                />
                <label htmlFor='male'>{t('male')}</label>
              </div>
              <div className="flex items-center gap-x-2">
                <Radio
                  name="gender"
                  value="female"
                />
                <label htmlFor='female'>{t('female')}</label>
              </div>
              <div className="flex items-center gap-x-2">
                <Radio
                  name="gender"
                  value="prefernottosay"
                />
                <label htmlFor='prefernottosay'>{t('prefer-not-to-say')}</label>
              </div>
            </section>

        <Button type="submit" className="bg-teal-600 w-full hover:bg-teal-700 rounded-md">{t('sign-up')}</Button>

        <section className="w-3/4">
          <span>{t('already-have-an-account')} </span>
          <Link href="/login" className="text-teal-500 font-semibold">
            {t('login')}
          </Link>
        </section>
        <DividerText text={t('or')}/>
        <AuthShape  authImage={Google} text={t('continue-with-google')} />
        <AuthShape  authImage={Facebook} text={t('continue-with-facebook')} />

        </section>  
      </form>
    </FormProvider>
  );
}
