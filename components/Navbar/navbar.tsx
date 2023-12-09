'use client'
import React from 'react'
import ThemeSwitcher from "../darkTheme/switchMode";
import Logo from "../../public/images/Logo.svg"
import Image from "next/image";
import {Link} from "../../navigation"
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import {useState} from 'react'

interface translatedValues {
    title: string,
    login:string,
    register:string
}


export default function NavBar({title, login, register}:translatedValues) {
    const pathname = usePathname()
    const three = pathname.slice(1,3)   
    // console.log(three)
    const [selected, setSelected] = useState<string>(three)
    const handleLanguageChange = (local:string) => {  
        setSelected(local)
        const newPath = pathname.slice(3,)
        if (newPath) location.href = `/${local}/${newPath}`
        else location.href = `/${local}`
    }

  return (
    <header className="d-flex">
        <div className="logo-section">
            <Link href="/">
                <Image src={Logo} alt="Logo images" />
            </Link>
            <Link href="/">
                <h1>{title}</h1>
            </Link>
        </div>

        <div className="actions-section">
            {/* There are some limitation on using Select and option with Link component in nextjs "can't use it."*/}
            <select onChange={(e) => handleLanguageChange(e.target.value) }>
                <option value="en" selected={selected === 'en'} >En</option>
                <option value="ar" selected={selected === 'ar'} >Ar</option>
            </select>
    
            <ThemeSwitcher />
            <Link href="/login">{login}</Link>
            <Link href="/register">{register}</Link>
        </div>
    </header>
  )
}


