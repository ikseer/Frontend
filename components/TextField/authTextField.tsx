"use client"

import { Stack, TextField, InputAdornment, IconButton } from '@mui/material'
import React, { ChangeEvent } from 'react'
import "../../app/[locale]/globals.css"
import "./authTextField.css"
import { useRef, useState } from 'react';

interface propsType {
    labels:string,
    Icon: React.ReactElement,
    onChange:(event: string) => void,
    isRequired?:boolean
}

export default function AuthTextField({Icon, labels, onChange, isRequired}:propsType) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnClick = () => {
        if(inputRef.current)
        {
            const currInput = inputRef.current?.querySelector("input")
            if(currInput)
                currInput.focus();
        }
    }

return (
    <Stack className="auth-input mt-4">
        <TextField 
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
            endAdornment: <InputAdornment position="end">
               <IconButton onClick={handleOnClick}>
                    {Icon}
               </IconButton>
                </InputAdornment>,
        }} 
        InputLabelProps={{className:"setColor"}}
        variant="standard"
        label={labels}
        required={isRequired}
        />
        
    </Stack>
  )
}

