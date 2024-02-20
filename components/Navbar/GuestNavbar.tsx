// main
import * as React from 'react';
import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation';

// components
import LoginOrProfile from './LoginOrProfile';
import LanguageAndTheme from './LanguageAndTheme';
import ResonsiveIcon from './ResponsiveIcon';
import BrandNameAndLogo from './Brand';
import HoverDropDown from './HoverDropDown';
import Card from './Card';

export default function GuestNavBar() {
  // const pathname = usePathname();
  const t = useTranslations();

  const dropDownKeys = [t('resourse')];

  return (
    <header className=" min-h-[70px] md:h-[70px] flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="relative w-full  border border-gray-200  py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto  dark:border-gray-700 dark:bg-zinc-950"
        aria-label="Global"
      >
        {/* left side */}
        <div className="flex items-center justify-between">
          <BrandNameAndLogo name={t('IKSIR')} />
          <ResonsiveIcon />
        </div>

        {/* Right Side */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <HoverDropDown dropDownWords={dropDownKeys} />
            <LanguageAndTheme ar={t('Ar')} en={t('En')} />
            <Card />
            <LoginOrProfile login={t('Log in')} register={t('Register')} />
          </div>
        </div>
      </nav>
    </header>
  );
}
