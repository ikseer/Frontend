import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { ShoppingBasket } from "lucide-react";

export default function NoCartItem() {
	return (
		<main className="grid hero place-content-center place-items-center gap-y-5">
			<ShoppingBasket className="text-gray-300 w-44 h-44" strokeWidth={0.5} />
			<p className="text-gray-300">Your cart is currently empty.</p>
			<Link href="/">
				<Button variant="submit">continue Shopping</Button>
			</Link>
		</main>
	);
}
