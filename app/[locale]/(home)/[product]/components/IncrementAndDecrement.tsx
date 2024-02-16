'use client';
import React, { useState } from 'react';

export default function IncrementAndDecrement() {
  const [value, setValue] = useState(1);

  return (
    <div
      className="flex items-center gap-x-3 mr-2
        bg-white border-2 border-solid border-gray-300 
        "
    >
      <button disabled={value === 1} onClick={() => setValue(value - 1)}>
        -
      </button>

      <p>{value}</p>

      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}
