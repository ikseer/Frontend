'use client';

// Main
import React from 'react';
import { useTheme } from 'next-themes';

// Icons
import { LuMoon } from 'react-icons/lu';
import { LuSunMoon } from 'react-icons/lu';


const SwitchMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <button
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        {theme === 'dark' ? <LuSunMoon /> : <LuMoon />}
      </button>
    </div>
  );
};
export default SwitchMode;
