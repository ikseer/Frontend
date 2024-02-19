'use client';
import IncrementAndDecrement from '../../components/IncrementAndDecrement';
import { LuTrash2 } from 'react-icons/lu';
import useCart from '@/store/cart';
export default function CartView() {
  const { cartItems } = useCart();
  console.log(cartItems, cartItems);
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
                <img src={} alt="temp" />
              </div>
              <div>
                <p>{product.name}</p>
                <p>{product.generic_name}</p>
              </div>
            </div>
            {/* add & minus */}
            <div className="col-span-3 w-fit">
              {/* product={product} */}
              <IncrementAndDecrement />
            </div>
            {/* Price */}
            <div className="col-span-3">${product.price?.toFixed(3)}</div>
            {/* trash */}
            <div className="col-span-1">
              <LuTrash2 />
            </div>
          </div>
        ))
      ) : (
        <div>there is no product</div>
      )}
    </>
  );
}