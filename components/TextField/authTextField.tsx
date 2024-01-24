"use client"
import React, { ChangeEvent } from 'react'
import "../../app/[locale]/globals.css"
import "./authTextField.css"
import { useRef, useState } from 'react';


interface propsType {
    labels?:string,
    Icon?: React.ReactElement,
    isRequired?:boolean,
    width?:( string | undefined)
    onChange:(event: string) => void,
}

export default function AuthTextField({Icon, labels, onChange, isRequired, width}:propsType) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnClick = () => {
        if(inputRef.current)
        {
            console.log(inputRef.current)
            const currInput = inputRef.current?.querySelector("input")
            if(currInput)
                currInput.focus();
        }
    }
    const mainStyle = {
        width: {width} || "100%"
    }
return (
    <div className="auth-input mt-4 " style={mainStyle}>
        <div className="relative">
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
        </div>


    </div>
  )
}

