"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from "../../public/images/Logo.svg"
import Image from "next/image";
import ChangeLanguage from './changeLanguage';
import ThemeSwitcher from "../darkTheme/switchMode";
import {Link} from "../../navigation"
import "./guestNavbar.module.css"


interface translatedValues {
  title: string,
  login:string,
  register:string
}


export default function GuestNavBar({title, login, register}:translatedValues) {

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>):void => {
    setMobileMoreAnchorEl(event.currentTarget);
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
  <AppBar position="static">
        <Toolbar >
          {/* left side */}
          <Link href="/">
              <Image src={Logo} alt="Logo images" />
          </Link>
            <Link href="/">
                <h1>{title}</h1>
            </Link>

          {/* make space between them */}
          <div className="grow"/>

          {/* right side */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
              <ChangeLanguage />
              <ThemeSwitcher />
        
              <Link href="/login">{login}</Link>
            <Link href="/register">{register}</Link>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleMobileMenuOpen} >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
)


// const navbarStyl2e = {
//   backgroundColor: "red",
//   color:"red",
//   flexGrow: 1,
// };

  return (
    <div className="guest-navbar">
      {renderDesktopMenu}
      {renderMobileMenu}
    </div>
  );
}
