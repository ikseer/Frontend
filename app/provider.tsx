"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type propsType = {
    children: React.ReactNode;
};

export default function Providers({ children }: propsType) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}