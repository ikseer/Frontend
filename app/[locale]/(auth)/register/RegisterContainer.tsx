"use client";
import React, { ReactNode } from 'react'

interface childrenDataType {
    children: ReactNode
}


export default function RegisterContainer({children}:childrenDataType) {
  const mainStyle = {
    width: "550px",
    margin:"auto"
  }
  
  return (
    <article style = {mainStyle} className="rounded-lg bg-zinc-800" data-hs-stepper>
        {children}
    </article>
  );
}
