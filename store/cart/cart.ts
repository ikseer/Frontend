import { create } from 'zustand';

import { ProductType } from '@/types/product.types';

interface useCardType {
  cartItems: ProductType[];
  // eslint-disable-next-line no-unused-vars
  addItemToCart: (item: ProductType) => void;
  // eslint-disable-next-line no-unused-vars
  minusItemFromCart: (item: ProductType) => void;
  // eslint-disable-next-line no-unused-vars
  removeItemFromCart: (item: number) => void;
}

const useCart = create<useCardType>((set, get) => ({
  cartItems: [],
  addItemToCart: (item: ProductType) => {
    console.log(get().cartItems);
    const isExist = get().cartItems.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      if (typeof isExist.quantity === 'number') {
        isExist.quantity++;
      }
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
  minusItemFromCart: (item: ProductType) => {
    console.log(get().cartItems);
    const isExist = get().cartItems.find((cartItem) => cartItem.id == item.id);
    if (isExist) {
      if (typeof isExist.quantity === 'number') isExist.quantity--;
    }
  },
  removeItemFromCart: (productId: number) => {
    const isExist = get().cartItems.find(
      (cartItem) => cartItem.id == productId,
    );
    if (isExist) {
      if (typeof isExist.quantity === 'number') {
        set({
          cartItems: get().cartItems.filter(
            (cartItem) => cartItem.id !== productId,
          ),
        });
      }
    }
  },
}));

export default useCart;
