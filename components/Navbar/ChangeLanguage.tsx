'use client';
// main
import React from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface ChangeLanguageType {
  ar: string;
  en: string;
}
export default function ChangeLanguage({ ar, en }: ChangeLanguageType) {
  const pathname = usePathname();
  const three = pathname.slice(1, 3);
  const [selected, setSelected] = useState<string>(three);
  const handleLanguageChange = (local: string) => {
    setSelected(local);
    const newPath = pathname.slice(3);
    if (newPath) location.href = `/${local}/${newPath}`;
    else location.href = `/${local}`;
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="dark:bg-zinc-950 border-none focus:border-none"
    >
      {/* There are some limitation on using Select and option with Link component in nextjs "can't use it."*/}
      <option value="en" selected={selected === 'en'}>
        {en}
      </option>
      <option value="ar" selected={selected === 'ar'}>
        {ar}
      </option>
    </select>
  );
}
