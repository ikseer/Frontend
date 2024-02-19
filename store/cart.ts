import { create } from 'zustand';

import { SingleProductCardType } from '@/types/product.types';

interface useCardType {
  cartItems: SingleProductCardType[];
  // eslint-disable-next-line no-unused-vars
  addItemToCart: (item: SingleProductCardType) => void;
}

const useCart = create<useCardType>((set, get) => ({
  cartItems: [],
  addItemToCart: (item: SingleProductCardType) => {
    console.log(get().cartItems);
    const isExist = get().cartItems.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      if (typeof isExist.quantity === 'number') {
        isExist.quantity++;
      }
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
}));

export default useCart;
