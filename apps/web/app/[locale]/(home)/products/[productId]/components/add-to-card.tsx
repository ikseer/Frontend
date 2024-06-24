import { Button } from "@ikseer/ui/src/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../../../store/cart/cart";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function AddToCardButton({ product }: any) {
	const { addItemToCart } = useCart();
	const handleOnClick = () => {
		addItemToCart(product);
	};
	return (
		<Button
			onClick={handleOnClick}
			className="mx-2 px-2 py-[23px] rounded-lg w-[120px] h-[30px]"
		>
			<LuShoppingCart /> Add to card
		</Button>
	);
}
