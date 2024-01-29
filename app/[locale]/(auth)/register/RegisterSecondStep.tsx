// main
import React, { useContext } from 'react';
import { nextRefProvider } from './page';

// components
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber';
import SaveAndContinue from '@/components/Buttons/AuthButton';

export default function RegisterSecondStep() {
  const contextValue = useContext(nextRefProvider);
  if (!contextValue) throw new Error('Context is null');
  const { triggerFunction } = contextValue;
  const handleOnSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(triggerFunction);
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
          Phone number
        </h1>
        <p className="text-center mb-5 text-sm">
          Phone number is required for main features in the app
        </p>
      </div>
      <PhoneNumberValidation />
      <SaveAndContinue title="Save and continue" width="75%" height="42px" />
      <SaveAndContinue
        title="skip"
        width="75%"
        height="42px"
        background="bg-slate-200 dark:bg-zinc-900"
      />
    </form>
  );
}
