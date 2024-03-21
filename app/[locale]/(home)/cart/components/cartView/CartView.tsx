'use client';
import IncrementAndDecrement from '../../../components/IncrementAndDecrement';
import RemoveProduct from './RemoveProduct';
import { ProductType } from '@/types/product.types';
import Image from 'next/image';

interface CartViewProps {
  cartItems: ProductType[];
}
export default function CartView({ cartItems }: CartViewProps) {
  const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div
            className="grid grid-cols-12 bg-slate-100 dark:bg-zinc-950 items-center mb-3"
            key={`${product.id}`}
          >
            {/* product */}
            <div className="col-span-5 flex items-center gap-x-2">
              <div className="w-[70px] ">
                <Image
                  src={`${BASEURL}${product.images[0].image}`}
                  alt="cart Image"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <p>{product.name}</p>
                <p>{product.generic_name}</p>
              </div>
            </div>
            {/* add & minus */}
            <div className="col-span-3 w-fit">
              {/* product={product} */}
              <IncrementAndDecrement item={product} />
            </div>
            {/* Price */}
            <div className="col-span-3">${product.price?.toFixed(3)}</div>
            {/* trash */}
            <div className="col-span-1">
              <RemoveProduct productId={product.id} />
            </div>
          </div>
        ))
      ) : (
        <div>there is no product</div>
      )}
    </>
  );
}
