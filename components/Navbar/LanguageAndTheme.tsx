// components
import ChangeLanguage from './ChangeLanguage';
import ThemeSwitcher from '../darkTheme/SwitchMode';

export default function LanguageAndTheme() {
  return (
    <>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <ChangeLanguage />
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <ThemeSwitcher />
      </a>
    </>
  );
}
