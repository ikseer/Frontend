'use client';
// main
import * as React from 'react';

// components
// import ChangeLanguage from './ChangeLanguage';
// import ThemeSwitcher from '../darkTheme/SwitchMode';
import { usePathname } from 'next/navigation';
import LoginOrProfile from './LoginOrProfile';
import LanguageAndTheme from './LanguageAndTheme';
import ResonsiveIcon from './ResponsiveIcon';
import BrandNameAndLogo from './Brand'
import HoverDropDown from './HoverDropDown';


// icons
// import Logo from '../../public/images/Logo.svg';
// import Image from 'next/image';


export default function GuestNavBar() {
  const pathname = usePathname();
  return (
    <header className="min-h-[70px] md:h-[70px] flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="relative w-full  border border-gray-200  py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto  dark:border-gray-700 dark:bg-zinc-950"
        aria-label="Global"
      >
        {/* left side */}
        <div className="flex items-center justify-between">
          <BrandNameAndLogo/>
          <ResonsiveIcon />
        </div>

        {/* Right Side */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <HoverDropDown />
            <LanguageAndTheme />
            <LoginOrProfile pathname={pathname.slice(3)} />
          </div>
        </div>
      </nav>
    </header>
  );
}
