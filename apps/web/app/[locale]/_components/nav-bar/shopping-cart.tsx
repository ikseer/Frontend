import { Link } from "@/navigation";
import { serverAPI } from "@ikseer/api/config/api.server";
import { LuShoppingCart } from "react-icons/lu";
export async function ShoppingCart() {
	const data = await serverAPI.order.getCart();
	console.log("cart itemsss", data, "cart items");
	return (
		<Link className="cursor-pointer" href="/cart">
			<LuShoppingCart />
		</Link>
	);
}
