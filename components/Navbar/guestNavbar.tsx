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
      
       <ChangeLanguage />
        <ThemeSwitcher />
        <Link href="/login">{login}</Link>
        <Link href="/register">{register}</Link>
    </Menu>
  );
  
const renderDesktopMenu = (
  <div className="flex sticky top-0">
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


          <div className="flex xs:block md:hidden justify-items-center">
            <IconButton onClick={handleMobileMenuOpen} >
              <MoreIcon />
            </IconButton>
          </div>
      </div>
)


  return (
    <main className="guest-navbar">
      <div className="md:container md:mx-auto"> 

        {renderDesktopMenu}
        {renderMobileMenu}

      </div>
    </main>
  );
}
