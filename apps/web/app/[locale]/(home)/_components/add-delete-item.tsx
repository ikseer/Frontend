import Spinner from "@/components/spinner";
import {
	useCreateCartItem,
	useEditCartItem,
	useGetCart,
} from "@ikseer/api/hooks/order";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { useToast } from "@ikseer/ui/src/components/ui/use-toast";
import { Minus, Plus } from "lucide-react";

export default function AddDeleteItem({ productId }: { productId: string }) {
	const { data: myCart, isRefetching: _ } = useGetCart();
	const createCartItem = useCreateCartItem({
		cart: myCart?.id as string,
		product: productId,
	});
	const addItemToCart = useEditCartItem({
		cart: myCart?.id as string,
		product: productId,
	});

	const { items: products, id: cartId } = myCart || {};
	const productInCart = products?.find(
		(product) => product.product === productId,
	);
	const productQuantity = productInCart?.quantity || 0;
	const { toast } = useToast();
	const handleEditItem = (newQuantity: number) => {
		if (!myCart) {
			toast({
				title: "Yout don't have an active account",
				description: "please login to be able to add to cart",
				variant: "error",
			});
			return;
		}

		if (productInCart) {
			addItemToCart.mutate({
				quantity: newQuantity,
				cart: cartId as string,
				product: productId,
				cartItemId: productInCart.id,
			});
		} else {
			createCartItem.mutate({
				quantity: 1,
				cart: cartId as string,
				product: productId,
			});
		}
	};

	return (
		<section className="flex items-center gap-x-2">
			<Button
				variant="submit"
				iconOnly
				className="rounded-full"
				disabled={addItemToCart.isPending}
				onClick={() => handleEditItem(productQuantity + 1)}
			>
				{<Plus className="w-4 h-4" />}
			</Button>
			<span>{addItemToCart.isPending ? <Spinner /> : productQuantity}</span>
			<Button
				variant="submit"
				iconOnly
				disabled={addItemToCart.isPending || !productQuantity}
				className="rounded-full"
				onClick={() => handleEditItem(productQuantity - 1)}
			>
				{<Minus className="w-4 h-4" />}
			</Button>
		</section>
	);
}
