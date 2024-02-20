'use client';

import { LuTrash2 } from 'react-icons/lu';
import useCart from '@/store/cart';
interface RemoveproductType {
  productId: number;
}
export default function RemoveProduct({ productId }: RemoveproductType) {
  const { removeItemFromCart } = useCart();
  const handleRemoveProduct = () => {
    removeItemFromCart(productId);
  };

  return (
    <button onClick={handleRemoveProduct}>
      <LuTrash2 />
    </button>
  );
}
