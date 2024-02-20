'use client';
import React, { useState } from 'react';
import useCart from '@/store/cart';
import { SingleItemType } from '@/types/product.types';

export default function IncrementAndDecrement({ item }: SingleItemType) {
  const { addItemToCart, minusItemFromCart } = useCart();
  const [value, setValue] = useState<number | null>(item.quantity);
  const handleIncrement = () => {
    addItemToCart(item);
    if (value) setValue(value + 1);
  };
  const handleDecrement = () => {
    minusItemFromCart(item);
    if (value) setValue(value - 1);
  };

  return (
    <div
      className="flex items-center gap-x-3 
        bg-white border-2 border-solid border-gray-300
        dark:bg-zinc-700 dark:border-zinc-950 px-2 py-[10px] rounded-md
        "
    >
      <button disabled={value === 1} onClick={handleDecrement}>
        -
      </button>

      <p>{value}</p>

      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
