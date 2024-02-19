'use client';
import React from 'react';
// import Image from 'next/image' => use when connect with backend
import { LuShoppingCart } from 'react-icons/lu';
import useCard from '@/store/cart';
import { Link } from '@/navigation';
// interface
import {
  SingleItemType,
  SingleProductCardType,
} from '../../../../../../types/product.types';

export default function SingleProductCard({ item }: SingleItemType) {
  const { addItemToCart } = useCard();

  const handleAddToCard = (item: SingleProductCardType) => {
    addItemToCart(item);
  };

  return (
    <div
      className="flex flex-col bg-white border shadow-sm rounded-xl
         dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-slate-700/[.7]
         "
    >
      <Link className="w-full" href={`${item.id}`}>
        <img
          className="w-full h-auto rounded-t-xl"
          src="https://placehold.co/600x400"
          alt="Image Description"
          width={500}
          height={500}
        />
      </Link>
      <div className="p-4 md:p-5  relative">
        <button
          className="bg-teal-600 p-2 absolute right-4 top-[-20px] rounded-full cursor-pointer "
          onClick={() => handleAddToCard(item)}
        >
          <LuShoppingCart className="text-white dark:text-zinc-950" />
        </button>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-zinc-800 dark:text-white">
            {item.name}
          </h3>
          <p className="text-sm font-medium text-zinc-800 dark:text-white">
            {item.price} EGP
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-zinc-500 dark:text-zinc-400">
            {item.generic_name}
          </p>
          {item.discount && (
            <div className="text-xs font-medium">
              <del className="text-zinc-400 dark:text-zinc-500 mr-2">
                {item.price} EGP
              </del>
              <span className="text-red-700">47%</span>
            </div>
          )}
        </div>

        <p className="mt-1 text-sm text-gray-400 dark:text-zinc-400">
          {item.factory_company}
        </p>
      </div>
    </div>
  );
}
