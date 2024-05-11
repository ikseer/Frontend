import React from 'react';
import Image from 'next/image';
import Button from '@/components/site/Buttons/Button';
interface AccountType {
  image: string;
  name: string;
  buttonText: string;
}

export default function Account({ image, name, buttonText }: AccountType) {
  return (
    <div className="flex justify-between my-3">
      <div className="flex">
        <div className="w-10 h-10">
          <Image src={image} alt={name} />
        </div>
        <h1 className="text-2xl font-bold text-zinc-700 dark:text-slate-200">
          {name}
        </h1>
      </div>

      <Button
        type="submit"
        title={buttonText}
        width="150px"
        height="42px"
        ButtonClassName="bg-slate-100 border-2  border-gray-200 hover:bg-gray-200
                hover:text-zinc-500  text-teal-600 
               dark:bg-zinc-950 dark:text-slate-400 font-medium border-1 border-slate-200
               dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-slate-300
               "
        background="bg-white"
      />
    </div>
  );
}
