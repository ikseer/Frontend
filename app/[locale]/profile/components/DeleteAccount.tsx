import React from 'react'
import Button from '@/components/Buttons/Button'

export default function DeleteAccount() {

    return (
        <div className="w-5/12">
            <div className="mb-3">
                <h1>Delete Your Account</h1>
                <p className="text-red-800">Danger one, please be careful</p>
            </div>
            
            <Button 
            type="submit" title="Delete my account" width="200px" height="42px" 
            ButtonClassName='dark:bg-zinc-950 dark:text-red-700 font-medium border-1 border-slate-200'
            background='text-white'
            />

        </div>
    )

}