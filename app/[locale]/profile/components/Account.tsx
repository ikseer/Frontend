import React from 'react'
import Image from 'next/image'
import Button from '@/components/Buttons/Button'
interface AccountType {
    image: string
    name: string
    buttonText: string
}
export default function Account({image, name, buttonText}: AccountType) {
    return (
        <div className="flex justify-between my-3">
            <div className="flex">
                <div className="w-10 h-10">
                    <Image src={image} alt={name} />
                </div>
                <h1 className="text-2xl font-bold">{name}</h1>
            </div>
            
            <Button type="submit" title={buttonText} width="150px" height="42px" 
                ButtonClassName="bg-slate-100 text-teal-600 dark:bg-zinc-950 dark:text-slate-200 font-medium 
                border-1 border-slate-200"
                background="text-white"
            />
        </div>
        
    )
}