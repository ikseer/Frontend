// main
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// components
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber';
import SaveAndContinue from '@/components/Buttons/AuthButton';

// custom hooks
import { usePhoneNumber } from '@/customHooks/Auth/useRegister';

interface RegisterSecondStepType {
  thirdStepKeys: string[];
}

export default function RegisterSecondStep({
  thirdStepKeys,
}: RegisterSecondStepType) {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const passPhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const route = useRouter();
  const { mutate } = usePhoneNumber();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ phone: phoneNumber });
  };

  return (
    <form
      className="flex flex-col justify-center items-center "
      onSubmit={handleOnSubmit}
    >
      <div>
        <h1 className="text-4xl dark:text-white my-5 text-center">
          {thirdStepKeys[0]}
        </h1>
        <p className="text-center mb-5 text-sm">{thirdStepKeys[1]}</p>
      </div>
      <PhoneNumberValidation passPhoneNumber={passPhoneNumber} />
      <SaveAndContinue title={thirdStepKeys[2]} width="75%" height="42px" />
      <SaveAndContinue
        title={thirdStepKeys[3]}
        width="75%"
        height="42px"
        type="button"
        background="bg-slate-200 dark:bg-zinc-900"
        onClick={() => route.push('/')}
      />
    </form>
  );
}
