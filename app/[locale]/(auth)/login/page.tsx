// main
import { useTranslations } from 'next-intl';


// compnenet
import LoginMain from './LoginMain'


export default function Login() {
  const t = useTranslations('');
  const keys = [
    t('Welcome to IKSIR'),
    t('Email or username'),
    t('Password'),
    t('Log in'),
    t('Forgot your password?'),
    t('Don’t have an account,'),
    t('Register Now?'),
    t("or"),
    t('continue with google'),
    t('continue with facebook')
  ];
  return (
    <LoginMain keys={keys}/>

  );
}
