import React from 'react'

export default function BrandNameAndLogo({name}) {
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

  )
}