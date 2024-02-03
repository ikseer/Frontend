'use client';
import { useForm } from 'react-hook-form';
import AuthTextField from '@/components/InputField/InputField';

interface DisplayBasicInfoType {
  mainText: string;
  secText?: string;
  inputText: string[];
}
export default function DisplayBasicInfo({
  mainText,
  secText,
  inputText,
}: DisplayBasicInfoType) {
  const { register, formState } = useForm();
  const { errors } = formState;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col w-2/12 ">
        <label className="cursor-pointer" htmlFor={inputText[0]}>
          {mainText}
        </label>
        <p className="text-xs text-gray-400">{secText}</p>
      </div>
      {/* <div> */}
      <div className="flex w-9/12 gap-x-2">
        {inputText.map((text, indx) => (
          <AuthTextField
            key={indx}
            id={text}
            register={register}
            errors={errors}
            object={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
