import { Link } from "@/navigation";
import { LuShoppingCart } from "react-icons/lu";
export function ShoppingCart() {
	return (
		<Link className="cursor-pointer" href="/cart">
			<LuShoppingCart />
		</Link>
	);
}
