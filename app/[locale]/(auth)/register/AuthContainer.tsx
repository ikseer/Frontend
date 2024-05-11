'use client';
// Main
import React, { ReactNode } from 'react';

interface childrenDataType {
  children: ReactNode;
}

export default function RegisterContainer({ children }: childrenDataType) {
  const mainStyle = {
    maxWidth: '550px',
    margin: 'auto',
  };

  return (
    <article
      style={mainStyle}
      className="rounded-lg bg-gray-100 dark:bg-zinc-950"
      data-hs-stepper
    >
      {children}
    </article>
  );
}
