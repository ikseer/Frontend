// main
import * as React from 'react'


// components
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber'
import SaveAndContinue from '@/components/Buttons/TealButton/AuthButton';

const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log('OTP page')
}

export default function RegisterSecondStep() {
  return (
    <form className="flex flex-col justify-center items-center "
      onSubmit={handleOnSubmit}>
      <div>
        <h1 className="text-4xl dark:text-white my-4 text-center">Phone number</h1>
        <p className="text-center">Phone number is required for main features in the app</p>
      </div>
      <PhoneNumberValidation />
      <SaveAndContinue title='Save and continue' width='75%'  height='42px' />
      <SaveAndContinue title='skip' width='75%'  height='42px' background='bg-slate-200 dark:bg-zinc-900'/>
    </form>
  )
}