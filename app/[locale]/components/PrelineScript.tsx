'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { IStaticMethods } from 'preline/preline';
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 1000);
  }, [path]);

  return null;
}
