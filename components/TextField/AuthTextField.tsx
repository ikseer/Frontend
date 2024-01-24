"use client"
// main
import React from 'react'
import "../../app/[locale]/globals.css"
import { useRef } from 'react';


interface propsType {
    placeholder:string,
    Icon?: React.ReactElement |string,
    width?: string | undefined,
    onChange:(event: any) => void,
}
interface styleType {
    width: string | undefined
}

export default function AuthTextField({Icon, placeholder, onChange, width}:propsType) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnClick = () => {
        console.log(inputRef)
        if(inputRef.current)
        {
            const currInput = inputRef.current?.querySelector("input")
            console.log(currInput)
            if(currInput)
                currInput.focus();
        }
    }
    const mainStyle:styleType = {
        width: width || "100%"
    }

return (
    <div className="auth-input mt-3" style={mainStyle}>
        <div className="flex rounded-lg shadow-sm" ref={inputRef}>
            {Icon && <span  onClick={handleOnClick} 
                className="cursor-pointer px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                {Icon} 
                </span>}

            <input 
            className={`py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-gray-300 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${Icon ? '': 'rounded-lg'}` }
            placeholder={placeholder}
            type="text"
            onChange={(e) => onChange(e.target.value)} 
            required
            />
        </div>


    </div>
  )
}

 {/* <div className="relative">
        <input type="text" id="hs-floating-underline-input-passowrd" 
        className="auth-input peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2" placeholder="********" 
        onClick={handleOnClick}
        onChange={(e) => onChange(e.target.value)} 
        ref={inputRef}
        />
        <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500">{labels}</label>
            <button className="cursor-pointer absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                {Icon}
            </button>
        </div> */}

