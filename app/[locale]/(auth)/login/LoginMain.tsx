'use client';
import { Link } from '@/navigation';
import { FormProvider } from 'react-hook-form';
import DividerText from '@/components/site/Divider/Divider';
import Google from '@/images/auth/Google.svg';
import Facebook from '@/images/auth/Facebook.svg';
import AuthShape from '@/components/site/ThridParthAuth/ThridPartyAuth';
import { useLogin } from '@/customHooks/Auth/useLogin';
import { LuMail } from 'react-icons/lu';
import { LuKeyRound } from 'react-icons/lu';
import '../register/register.css';
import { useTranslations } from 'next-intl';
import { FormInput } from '@/components/ui/input';
import { z } from 'zod';
import { useZodForm } from '@/lib/uer-zod-schema';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/site/spinner';

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
})

export default function Login() {
  const form = useZodForm({
    schema: schema,
  });
  const { mutate, isPending } = useLogin();
  const t = useTranslations('Login');

  return (
    <FormProvider {...form}>
      <form
        className="pt-2 auth-parent flex items-center justify-center"
        autoComplete="off"
        onSubmit={form.handleSubmit((LoginData) => mutate(LoginData)
        )}
        noValidate
      >
        <section
          style={{ width: '550px' }}
          className="flex items-center justify-center flex-col rounded-lg bg-gray-100 dark:bg-zinc-950"
        >
          <h1 className="mt-4 text-2xl font-bold ">{t('welcome-to-ikseer')}</h1>
          <div className="w-3/4 mt-5 space-y-4">
            <section className="flex w-full">
              <label htmlFor="username" className="h-10 cursor-pointer px-4   flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400" >
                <LuMail />
              </label>
              <FormInput
                name="username"
                placeholder={t('email-or-username')}
                type="text"
                className="rounded-e-md h-10"
              />
            </section>
            <section className="flex w-full">
              <label htmlFor="password" className="h-10 cursor-pointer px-4 flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400" >
                <LuKeyRound />
              </label>
              <FormInput
                name="password"
                placeholder={t('password')}
                type="password"
                className="rounded-e-md h-10"
              />
            </section>
          </div>

          <Button className="bg-teal-600 hover:bg-teal-700 w-3/4 h-[42px] my-5" 
          disabled={isPending}>
            {isPending? <Spinner /> : "Login"} 
          </Button>

          <div className="w-3/4">
            <Link href="/reset-password">{t('forgot-your-password')}</Link>
            <section>
              <span>{t('dont-have-an-account')}</span>
              <Link
                href="/register"
                style={{ color: '#0B9992', fontWeight: '600' }}
              >
                {t('register-now')}
              </Link>
            </section>
          </div>
          <DividerText text="or" />
          <AuthShape authImage={Google} text={t('continue-with-google')} width="76%" />
          <AuthShape authImage={Facebook} text={t('continue-with-facebook')} width="76%" />
        </section>
      </form>
    </FormProvider>
  );
}
