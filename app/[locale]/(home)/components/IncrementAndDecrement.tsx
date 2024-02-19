'use client';
import React, { useState } from 'react';
// import useCard from '@/store/cart';
// import SingleProductCardType from "@types/product.types";

export default function IncrementAndDecrement() {
  const [value, setValue] = useState(1);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  // const { addToCart } = useCard()

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
