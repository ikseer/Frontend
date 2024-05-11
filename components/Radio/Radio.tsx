'use client';

// Main
import React from 'react';
import { useRef } from 'react';

// Interface
interface radioDataType {
  text: string;
  register: any;
  object: any;
}

export default function Radio({ text, register, object }: radioDataType) {
  const radioRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    let inputRadio = radioRef.current;
    if (inputRadio) inputRadio.focus();
  };
  return (
    <div className="flex mt-3">
      <input
        ref={radioRef}
        type="radio"
        name="hs-radio-group"
        value={text}
        className="shrink-0 mt-0.5 rounded-full border-zinc-600  text-zinc-600 focus:ring-zinc-800 checked:border-zinc-800 disabled:opacity-50 disabled:pointer-events-none \
                dark:text-gray-50 dark:bg-gray-200 dark:border-gray-200 dark:checked:bg-gray-500 dark:checked:border-gray-500 dark:focus:ring-offset-gray-800"
        id={text} // unique Id
        {...register('gender', object)}
      />
      <label
        onClick={handleOnClick}
        htmlFor={text}
        className="text-sm text-gray-500 ms-2 dark:text-gray-400"
      >
        {text}
      </label>
    </div>
  );
}
