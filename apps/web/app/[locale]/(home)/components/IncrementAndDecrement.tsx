"use client";
import type { Product } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { useState } from "react";
import useCart from "../store/cart/cart";

export default function IncrementAndDecrement({ item }: { item: Product }) {
	const { addItemToCart, minusItemFromCart } = useCart();
	const [value, setValue] = useState<number | null>(item?.quantity);
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
			<Button disabled={value === 1} onClick={handleDecrement}>
				-
			</Button>

			<p>{value}</p>

			<Button onClick={handleIncrement}>+</Button>
		</div>
	);
}
