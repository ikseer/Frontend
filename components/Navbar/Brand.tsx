import React from 'react';
interface BrandNameAndLogoType {
  name: string;
}

export default function BrandNameAndLogo({ name }: BrandNameAndLogoType) {
  return (
    <div>
      <a
        className="flex-none text-xl font-semibold dark:text-white"
        href="#"
        aria-label="Brand"
      >
        {name}
      </a>
    </div>
  );
}
