'use client'


import InputField from "@/components/InputField/InputField"
import { Link } from "@/navigation"
import { useForm } from "react-hook-form"
import Button  from "@/components/Buttons/Button"

interface FormDataType {
    old_password: string
    new_password1: string
    new_password2: string
}


export default function ChangePassword() {
    const { register, formState } = useForm<FormDataType>();
    const { errors } = formState;

    return (
        <form>
            <InputField
                id="old_password"
                placeholder="Old password"
                flexType="flex-col"
                width="75%"
                register={register}
                errors={errors}
                labels={['Old password', <Link key="forgot-password" href="/forgot-password" className="text-teal-600">Forgot Password?</Link>]}
                type="password"
            />
            <InputField
                id="new_password1"
                placeholder="New password"
                flexType="flex-col"
                width="75%"
                register={register}
                errors={errors}
                labels={['New password']}
                type="password"
            />
            <InputField
                id="new_password2"
                placeholder="Repeat password"
                flexType="flex-col"
                width="75%"
                register={register}
                errors={errors}
                labels={['Repeat password']}
                type="password"
            />
            <Button type="submit" title="Save" width="150px" height="42px" 
                ButtonClassName="bg-slate-100 text-teal-600 dark:bg-zinc-950 dark:text-slate-200 font-medium 
                border-1 border-slate-200"
                background="text-white"/>
        </form>

    );
}


// title,
//   width,
//   height,
//   background,
//   ButtonClassName,
//   type,