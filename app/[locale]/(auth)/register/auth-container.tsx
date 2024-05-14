'use client';
import type { ReactNode } from 'react';

export default function RegisterContainer({ children }: {children: ReactNode}) {
  const mainStyle = {
    maxWidth: '550px',
    margin: 'auto',
  }

  return (
    <main
      style={mainStyle}
      className="rounded-lg bg-white dark:bg-zinc-950 "
      data-hs-stepper
    >
      {children}
    </main>
  );
}
