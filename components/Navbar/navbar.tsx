import React from 'react'
import ThemeSwitcher from "../darkTheme/switchMode";
import Logo from "../../public/images/Logo.svg"
import Image from "next/image";
import {Link} from "../../navigation"
import {useTranslations} from 'next-intl';

interface Values {
    value: string,
    locale?: string,
    children: string
}




const handleOnChange = (value:string) => {
    console.log(value)
}

export default function NavBar() {
  const t = useTranslations('Index');
  return (
    <header className="d-flex">
        <div className="logo-section">
            <Link href="/">
                <Image src={Logo} alt="Logo images" />
            </Link>
            <Link href="/">
                <h1>{t("title")}</h1>
            </Link>
        </div>

        <div className="actions-section">
            <select id="languageSelect">
                <option value="en"> En </option>
                <option value="ar"> ar </option>
            </select>
            <ThemeSwitcher />
            <Link href="/login" >{t("Login")}</Link>
            <Link href="/register">{t("Register")}</Link>
        </div>
    </header>
  )
}


