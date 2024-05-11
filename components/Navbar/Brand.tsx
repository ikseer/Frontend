// Main
import React from 'react';
import { Link } from '@/navigation';

// Interface
interface BrandNameAndLogoType {
  name: string;
}

export default function BrandNameAndLogo({ name }: BrandNameAndLogoType) {
  return (
    <div>
      <Link
        className="flex-none text-xl font-semibold dark:text-white"
        href="/"
        aria-label="Brand"
      >
        {name}
      </Link>
    </div>
  );
}
