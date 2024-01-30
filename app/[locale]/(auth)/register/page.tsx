// main
import React from 'react';
import { useTranslations } from 'next-intl';

// components
import RegisterAllThreeStep from './RegisterALLThreeStep';
import StepperNav from '@/components/Stepper/StepperNav';

// css
import './register.css';

export default function Register() {
  const t = useTranslations('');
  const firstStepKeys = [
    t('Welcome to IKSIR'),
    t('First name'),
    t('Last name'),
    t('Email'),
    t('username'),
    t('Password'),
    t('Male'),
    t('Female'),
    t('Prefer not to say'),
    t('Login'),
    t('Already have an account,'),
    t('Login Now?'),
    t('or'),
    t('continue with google'),
    t('continue with facebook'),
    t('This field is required'),
  ];

  const secondStepKeys = [
    t('Confirm your email'),
    t('Please enter the code sent to your email It expires after 10 minutes'),
    t('Didn’t get the code?'),
    t('Resend'),
  ];
  const thirdStepKeys = [
    t('Phone number'),
    t('Phone number is required for main features in the app'),
    t('Save and continue'),
    t('Skip for now'),
  ];

  const stepperNavLists = [
    ['1', t('First'), t('Basic details')],
    ['2', t('Second'), t('Confirm Email')],
    ['3', t('Third'), t('Phone number')],
  ];

  return (
    <div className="auth-parent">
      <div data-hs-stepper>
        <StepperNav stepperNavLists={stepperNavLists} />
        <RegisterAllThreeStep
          firstStepKeys={firstStepKeys}
          secondStepKeys={secondStepKeys}
          thirdStepKeys={thirdStepKeys}
        />
      </div>
    </div>
  );
}
