'use client';
// main
import React from 'react';
import '../../app/[locale]/globals.css';
import { useRef } from 'react';

interface propsType {
  placeholder: string;
  Icon?: React.ReactElement | string;
  width?: string | undefined;
  id: string;
  object?: object;
  errors: any;
  register: any;
}
interface styleType {
  width: string | undefined;
}

export default function AuthTextField({
  Icon,
  placeholder,
  width,
  id,
  register,
  errors,
  object,
}: propsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if (inputRef.current) {
      const currInput = inputRef.current?.querySelector('input');
      if (currInput) currInput.focus();
    }
  };
  const mainStyle: styleType = {
    width: width || '100%',
  };
  // console.log(errors, errors[id])
  return (
    <div className="auth-input mt-3" style={mainStyle}>
      <div className="flex rounded-lg shadow-sm" ref={inputRef}>
        {Icon && (
          <span
            onClick={handleOnClick}
            className="cursor-pointer px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
          >
            {Icon}
          </span>
        )}

        <input
          id={id}
          className={`py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${
            Icon ? '' : 'rounded-lg'
          }`}
          placeholder={placeholder}
          type="text"
          // onChange={(e) => onChange(e.target.value)}
          {...register(id, object)}
        />
      </div>
      <p
        className={`ml-2 mt-px text-xs font-normal text-red-500 dark:text-red-600 ${
          errors[id] && errors[id].message ? '' : 'invisible'
        }`}
      >
        {errors[id] && errors[id].message
          ? errors[id].message
          : 'Input Validation'}
      </p>
    </div>
  );
}
