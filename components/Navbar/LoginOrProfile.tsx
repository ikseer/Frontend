// main
import React from 'react'
import { Link } from '../../navigation';

// interfaces
interface AuthorProfileDataType {
    pathname: string,
}

export default function AuthOrProfile({pathname}:AuthorProfileDataType ) {
  return (
    <>
      <Link
        href="/login"
        className={pathname === '/login' ? 'bg-teal-500 rounded-full px-4 py-2 text-white' : 'text-teal-500'}
      >
                login
      </Link>
      <Link
        href="/register"
        className={pathname === '/register' ? 'bg-teal-500 rounded-full px-4 py-2 text-white' : 'text-teal-500'}
      >
        register
      </Link>
    </>
  )
}