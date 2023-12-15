"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from "../../public/images/Logo.svg"
import Image from "next/image";
import ChangeLanguage from './changeLanguage';
import ThemeSwitcher from "../darkTheme/switchMode";
import {Link} from "../../navigation"
import "../../app/[locale]/globals.css"
import "./guestNavbar.css"
import { usePathname } from 'next/navigation'
import { Stack} from "@mui/material"



interface translatedValues {
  title: string,
  login:string,
  register:string
}


export default function GuestNavBar({title, login, register}:translatedValues) {
  const pathname = usePathname()

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget as unknown as React.SetStateAction<null>);
};

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Stack className="mobile-menu"> 
          <ChangeLanguage />
          <ThemeSwitcher />
          <Link href="/login" className={pathname.slice(3,) === "/login"? "active2": ""}>{login}</Link>
          <Link href="/register" className={pathname.slice(3,) === "/register"? "active2": ""}>{register}</Link>
  
      </Stack>
    </Menu>
  );
  
const renderDesktopMenu = (
  <div className="flex w-full">
          {/* left side */}
          <section className="nav-left-side flex items-center">
            <Link href="/" className="mr-2">
                <Image src={Logo} alt="Logo images" />
            </Link>
              <Link href="/">
                  <h1>{title}</h1>
              </Link>
          </section>

          {/* make space between them */}
          <div className="grow"/>

          {/* right side */}
          <section className="nav-right-side xs: hidden md:flex items-center justify-between">
              <ChangeLanguage />
              <ThemeSwitcher />
              <Link href="/login" className={pathname.slice(3,) === "/login"?     "active": ""}>{login}</Link>
            <Link href="/register" className={pathname.slice(3,) === "/register"? "active": ""}>{register}</Link>
          </section>


          <section className="xs:block md:hidden ">
            <IconButton onClick={handleMobileMenuOpen} >
              <MoreIcon />  
            </IconButton>
          </section>
      </div>
)


  return (
    <main className="guest-navbar w-screen">
      <div className="md:container md:mx-auto w-full"> 

        {renderDesktopMenu}
        {renderMobileMenu}

      </div>
    </main>
  );
}
