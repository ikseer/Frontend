"use client";

import { Button } from "@ikseer/ui/src/components/ui/button";
import { LuTrash2 } from "react-icons/lu";
import useCart from "../../../store/cart/cart";
export default function RemoveProduct({ productId }: { productId: number }) {
	const { removeItemFromCart } = useCart();
	const handleRemoveProduct = () => {
		removeItemFromCart(productId);
	};

	return (
		<Button onClick={handleRemoveProduct}>
			<LuTrash2 />
		</Button>
	);
}
