// main
'use client';
import React, { useContext } from 'react';
import { nextRefProvider } from './RegisterALLThreeStep';

// components
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber';
import SaveAndContinue from '@/components/Buttons/AuthButton';

interface RegisterSecondStepType {
  thirdStepKeys: string[];
}

export default function RegisterSecondStep({
  thirdStepKeys,
}: RegisterSecondStepType) {
  const contextValue = useContext(nextRefProvider);
  if (!contextValue) throw new Error('Context is null');
  // if(!secondStepKeys) throw new Error('Second Step word is null');
  const { triggerFunction } = contextValue;
  const handleOnSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(triggerFunction);
    if (triggerFunction && triggerFunction.current)
      triggerFunction.current.click();
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
      <PhoneNumberValidation />
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
