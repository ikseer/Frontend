import React from 'react'
import card from './one.jpeg'
import Image from 'next/image'
import { LuShoppingCart } from "react-icons/lu";

export default function SingleProductCard() {
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl
         dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-slate-700/[.7]
         ">
            <Image
                className="w-full h-auto rounded-t-xl" src={card.src} alt="Image Description"
                width={500}
                height={500}
            />
            <div className="p-4 md:p-5  relative
">
                <div className="bg-teal-600 p-2 absolute right-4 top-[-20px] rounded-full cursor-pointer ">
                    <LuShoppingCart className="text-white dark:text-zinc-950"/>

                </div>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-white">
                        Product Name
                    </h3>
                    <p className="text-sm font-medium text-zinc-800 dark:text-white">
                        10 EGP
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className=" text-zinc-500 dark:text-zinc-400">
                        second name for product
                    </p>
                    <div className="text-xs font-medium">
                       <del className="text-zinc-400 dark:text-zinc-500 mr-2">100 EGP</del>
                       <span className="text-red-700">47%</span>
                    </div>
                </div>


                <p className="mt-1 text-sm text-gray-400 dark:text-zinc-400">
                    Manufactured by: Abstral Inc.
                </p>
                
            </div>
        </div>
    )
}