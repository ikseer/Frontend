// main
'use client';
import React from 'react';
import { Link } from '../../navigation';
import { usePathname } from 'next/navigation';
// interfaces
interface AuthorProfileDataType {
  login: string;
  register: string;
}

export default function AuthOrProfile({
  login,
  register,
}: AuthorProfileDataType) {
  let pathname = usePathname();
  pathname = pathname.slice(3);
  return (
    <>
      <Link
        href="/login"
        className={
          pathname === '/login'
            ? 'bg-teal-500 rounded-full px-4 py-2 text-white'
            : 'text-teal-500'
        }
      >
        {login}
      </Link>
      <Link
        href="/register"
        className={
          pathname === '/register'
            ? 'bg-teal-500 rounded-full px-4 py-2 text-white'
            : 'text-teal-500'
        }
      >
        {register}
      </Link>
    </>
  );
}
