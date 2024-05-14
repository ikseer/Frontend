'use client';
import { useRouter } from 'next/navigation';
import { usePhoneNumber } from '@/customHooks/Auth/useRegister';
import { Button } from '@/components/ui/button';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Controller, useForm } from 'react-hook-form';



export function RegisterThridStep() {
  const router = useRouter();
  const { mutate } = usePhoneNumber();
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const phoneUtil = PhoneNumberUtil.getInstance();
  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch {
      return false;
    }
  };
  return (

      <form
        className="flex flex-col justify-center items-center py-10"
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <section className="w-2/3 space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl dark:text-white text-center">
            Phone number
          </h1>
          <p className="text-center text-sm">Phone number is required for main features in the app</p>
        </div>
        <div  className="space-y-1">
        <Controller
          name="phone"
          control={control}
          rules={{
            validate: (value) => isPhoneValid(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="eg"
            inputClassName="w-full"
            />
          )}
          />
        {errors["phone"] && (
          <p className="text-red-500 text-sm">Invalid Phone</p>
        )}
        </div>
      <div className="space-y-2">

        <Button
          className='bg-teal-600 hover:bg-teal-700 w-full' type="submit" disabled={errors["phone"]? true: false}>Save and Continue</Button>
        <Button type="button" className="w-full" onClick={() => router.push('/')}>Skip for now</Button>
          </div>
          </section>
      </form>

  );
}