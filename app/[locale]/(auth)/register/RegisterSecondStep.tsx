// main
'use client';
import React from 'react';
import { useState } from 'react';

// components
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber';
import SaveAndContinue from '@/components/Buttons/AuthButton';

// context
import { useRegisterContext } from '@/contexts/Register/RegisterContext';

// custom hooks
import { usePhoneNumber } from '@/customHooks/Auth/useRegister';


interface RegisterSecondStepType {
  thirdStepKeys: string[];
}
interface PhoneNumberType {
  phoneNumber: string
  passPhoneNumber: React.Dispatch<React.SetStateAction<string>>
}

export default function RegisterSecondStep({
  thirdStepKeys,
}: RegisterSecondStepType) {
  const { triggerFunction } = useRegisterContext();
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumberType>();
  const {mutate} = usePhoneNumber()
  const passPhoneNumber = (value:string) => {
      setPhoneNumber(value)

  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({phone: phoneNumber})
    console.log('fix', phoneNumber)
    
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
          <PhoneNumberValidation passPhoneNumber={passPhoneNumber}/>
          <SaveAndContinue title={thirdStepKeys[2]} width="75%" height="42px" />
          <SaveAndContinue
            title={thirdStepKeys[3]}
            width="75%"
            height="42px"
            background="bg-slate-200 dark:bg-zinc-900"
          />
        </form>
  );
}
