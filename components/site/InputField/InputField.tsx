'use client';

// Main
import React, { useRef } from 'react';
import '@/app/[locale]/globals.css';

// Interface
import { propsType, styleType } from './InputFieldTypes';

export default function AuthTextField({
  Icon,
  placeholder,
  width,
  id,
  register,
  errors,
  object,
  labels,
  type,
  flexType,
  disabled,
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
  // console.log(Icon, 'Icon');
  return (
    <div className="auth-input mt-3" style={mainStyle}>
      <div className={`flex ${flexType} rounded-lg shadow-sm`} ref={inputRef}>
        {Icon && (
          <span
            onClick={handleOnClick}
            className="cursor-pointer px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
          >
            {Icon}
          </span>
        )}
        {labels && (
          <div className="flex justify-between">
            {labels.map((item, indx) => (
              <label
                key={`${indx} - ${item}`}
                htmlFor={id}
                className="cursor-pointer block text-sm font-medium mb-2 dark:text-white"
              >
                {item}
              </label>
            ))}
          </div>
        )}
        {(!type || type == 'text') && (
          <input
            id={id}
            disabled={disabled}
            className={`py-2 px-3 pe-11 block w-full
             border-gray-200 shadow-sm text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300 
             disabled:opacity-50 disabled:pointer-events-none
              dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
               ${Icon ? 'rounded-e-lg ' : 'rounded-lg'}
            `}
            placeholder={placeholder}
            type="text"
            {...register(id, object)}
          />
        )}
        {type == 'password' && (
          <div className="relative w-full">
            <input
              id={id}
              disabled={disabled}
              type="password"
              className={`py-3 px-4 block w-full
          border-gray-200 shadow-sm text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300 
           disabled:opacity-50 disabled:pointer-events-none
           dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
           ${Icon ? 'rounded-e-lg ' : 'rounded-lg'}
            `}
              placeholder={placeholder}
              {...register(id, object)}
            />
            <button
              type="button"
              data-hs-toggle-password={`{"target": "#${id}"}`}
              className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                />
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                />
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                />
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                />
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                />
                <circle
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                />
              </svg>
            </button>
          </div>
        )}
        {type == 'date' && (
          <input
            id={id}
            disabled={disabled}
            className={`py-2 px-3 pe-11 block w-full
           border-gray-200 shadow-sm text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300 
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
             ${Icon ? 'rounded-e-lg ' : 'rounded-lg'}
          `}
            placeholder={placeholder}
            type="text"
            {...register(id, object, { valueAsDate: true })}
          />
        )}
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