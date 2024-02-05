import React from 'react';

export default function Stack() {
  return (
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <a
        className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
        aria-label="Brand"
      >
        Iskeer
      </a>
      <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        © 2024 ISkeer.
      </p>
    </div>
  );
}
