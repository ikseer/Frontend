'use client'
import React from 'react';
import { LuLogOut } from 'react-icons/lu';
import { Link, useRouter } from '@/navigation';
import storeProfile from "@/store/profile/profile"

import Image from 'next/image';
import useAuthStore from '@/store/auth/useAuth';

export default function ProfileDropDown() {
  // global store not used to make the component "server component"
  const {logout, userInfo} = useAuthStore()
  const {id} = userInfo
  const route = useRouter()
  const {userInfo: profileStoreData} = storeProfile()
  console.log(profileStoreData, "from proifle Drop down")

  const handleLogout =  () => {
    console.log("trigger logout button")
    logout()
    route.push('/login')
    
  }

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <Image
          className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src={profileStoreData.image}
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
            {`${profileStoreData?.firstName} ${profileStoreData?.lastName}`}
          </Link>
          <button
            className="cursor-pointer w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            onClick={() => handleLogout()}
          >
            <LuLogOut />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
