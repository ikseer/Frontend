// main
import React from 'react'

// components
import PinNumber from '@/components/PinNumber/PinNumber'
import Button from '@/components/Buttons/AuthButton'




export default function RegisterConfirmEmail() {
  return (
    <div className="flex flex-col items-center content-center">
      <h1 className="mt-6 text-slate-800 dark:text-slate-100 text-2xl">Confirm your email</h1>
      <p className="my-4 w-1/2 text-slate-700 dark:text-slate-300 text-sm text-center"> Please enter the code sent to your email. It expires after 10 minutes.</p> 
      <PinNumber count={4} PinNumberClassName="my-5"/>
      <span className="text-xs text-slate-700 dark:text-slate-300">Didn’t get the code? </span>
      <Button title = "Resent" width = "155px" height = "46px"  ButtonClassName='mt-2 mb-5 bg-white text-zinc-950 dark:bg-zinc-900 dark:text-slate-100'/>
    </div>  
  )
}
