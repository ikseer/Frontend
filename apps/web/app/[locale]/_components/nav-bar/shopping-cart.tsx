"use client";
import { Link } from "@/navigation";
import { useGetCart } from "@ikseer/api/hooks/orders";
import { LuShoppingCart } from "react-icons/lu";
export function ShoppingCart() {
	const { data } = useGetCart();
	const itemsNumber = data?.items
		?.map((ele) => ele.quantity)
		.reduce((a, b) => a + b, 0);

	return (
		<Link className="cursor-pointer" href="/cart">
			<LuShoppingCart />
			{itemsNumber && <span>{itemsNumber}</span>}
		</Link>
	);
}
