import React from 'react';
import { LuLogOut } from 'react-icons/lu';
import { Link } from '@/navigation';
import { useLogout } from '@/customHooks/Auth/useLogout';
import Image from 'next/image';
import Profile from '../UserImage/profile.jpeg'
import Auth from '@/modules/Auth/Auth'

export default function ProfileDropDown() {
  const logout = useLogout()
  const auth = new Auth()
  const {id} = auth.getUserAuth()
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <Image
          className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src={Profile}
          alt="Image Description"
          width={500}
          height={500}
        />
      </button>

      {/* name & image */}
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
        aria-labelledby="hs-dropdown-with-header"
      >
        <div className="mt-2 py-2 first:pt-0 last:pb-0">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href={`/${id}`}
          >
            Setting Page
          </Link>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="/login"
          >
            <LuLogOut />
            <button onClick={logout}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
