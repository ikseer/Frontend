import { useGetCart } from "@ikseer/api/hooks/orders";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "./small-screen";

export default function CartIcon() {
	const { data } = useGetCart();
	const itemsNumber = data?.items
		?.map((ele) => ele.quantity)
		.reduce((a, b) => a + b, 0);
	return (
		<NavLink href="/cart" className="ltr:me-4 rtl:ms-4 relative flex">
			<ShoppingCart />
			<span className="absolute top-[-14px] right-[-12px] flex items-center justify-center w-6 h-6 text-xs text-white bg-teal-500 rounded-full">
				{itemsNumber || 0}
			</span>
		</NavLink>
	);
}
