// Main
import React, { useEffect, useState } from 'react';


// Components
import PinNumber from '@/components/PinNumber/PinNumber';
import Button from '@/components/Buttons/Button';


// Hooks
import { usePinCode } from '@/customHooks/Auth/useRegister';


// Interface
interface RegisterConfirmEmailType {
  secondStepKeys: string[];
}

export default function RegisterConfirmEmail({
  secondStepKeys,
}: RegisterConfirmEmailType) {
  const [pinCode, setPinCode] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });
  const { mutate } = usePinCode();
  useEffect(() => {
    console.log(pinCode);
    if (
      pinCode.pin1 &&
      pinCode.pin2 &&
      pinCode.pin3 &&
      pinCode.pin4 &&
      pinCode.pin5 &&
      pinCode.pin6
    ) {
      const handlePinCdoe = Object.values(pinCode).join('');
      mutate({ otp: handlePinCdoe });
    }
  }, [pinCode, mutate]);

  return (
    <form>
      <div className="flex flex-col items-center content-center">
        <h1 className="mt-6 text-slate-800 dark:text-slate-100 text-2xl">
          {secondStepKeys[0]}
        </h1>
        <p className="my-4 w-1/2 text-slate-700 dark:text-slate-300 text-sm text-center">
          {' '}
          {secondStepKeys[1]}
        </p>
        <div className={'flex space-x-3 justify-center my-5'} data-hs-pin-input>
          <PinNumber
            id="pin1"
            onChange={(e) => setPinCode({ ...pinCode, pin1: e.target.value })}
          />
          <PinNumber
            id="pin2"
            onChange={(e) => setPinCode({ ...pinCode, pin2: e.target.value })}
          />
          <PinNumber
            id="pin3"
            onChange={(e) => setPinCode({ ...pinCode, pin3: e.target.value })}
          />
          <PinNumber
            id="pin4"
            onChange={(e) => setPinCode({ ...pinCode, pin4: e.target.value })}
          />
          <PinNumber
            id="pin5"
            onChange={(e) => setPinCode({ ...pinCode, pin5: e.target.value })}
          />
          <PinNumber
            id="pin6"
            onChange={(e) => setPinCode({ ...pinCode, pin6: e.target.value })}
          />
        </div>

        <span className="text-xs text-slate-700 dark:text-slate-300">
          {secondStepKeys[2]}{' '}
        </span>
        <Button
          title={secondStepKeys[3]}
          width="155px"
          height="46px"
          ButtonClassName="mt-2 mb-5 bg-white text-zinc-950 dark:bg-zinc-900 dark:text-slate-100"
        />
      </div>
    </form>
  );
}
