import type { Product } from "@/types";
import { create } from "zustand";

interface useCardType {
	cartItems: Product[];
	// eslint-disable-next-line no-unused-vars
	addItemToCart: (item: Product) => void;
	// eslint-disable-next-line no-unused-vars
	minusItemFromCart: (item: Product) => void;
	// eslint-disable-next-line no-unused-vars
	removeItemFromCart: (item: number) => void;
	orderPrice: () => number;
}

const useCart = create<useCardType>((set, get) => ({
	cartItems: [],
	addItemToCart: (item: Product) => {
		console.log(get().cartItems);
		const isExist = get().cartItems.find((cartItem) => cartItem.id === item.id);
		if (isExist) {
			if (typeof isExist.quantity === "number") {
				isExist.quantity++;
			}
			set({ cartItems: get().cartItems });
		} else {
			set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
		}
	},
	minusItemFromCart: (item: Product) => {
		console.log(get().cartItems);
		const isExist = get().cartItems.find((cartItem) => cartItem.id === item.id);
		if (isExist) {
			if (typeof isExist.quantity === "number") isExist.quantity--;
		}
		set({ cartItems: get().cartItems });
	},
	removeItemFromCart: (productId: number) => {
		const isExist = get().cartItems.find(
			(cartItem) => cartItem.id === productId,
		);
		if (isExist) {
			if (typeof isExist.quantity === "number") {
				set({
					cartItems: get().cartItems.filter(
						(cartItem) => cartItem.id !== productId,
					),
				});
			}
		}
	},
	orderPrice: () => {
		let total = 0;
		// biome-ignore lint/complexity/noForEach: <explanation>
		get().cartItems.forEach((item) => {
			total += item.price * item.quantity;
		});
		return total;
	},
}));

export default useCart;
