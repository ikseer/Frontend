import Spinner from "@/components/spinner";
import {
	useCreateCartItem,
	useEditCartItem,
	useGetCart,
} from "@ikseer/api/hooks/orders";
import { useProductById } from "@ikseer/api/hooks/products";
import { cn } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import { useToast } from "@ikseer/ui/components/ui/use-toast";
import { Minus, Plus } from "lucide-react";

export default function AddDeleteItem({
	productId,
	className,
}: { productId: string; className?: string }) {
	const { data: myCart, isRefetching: _ } = useGetCart();

	const createItem = useCreateCartItem();

	const updateItem = useEditCartItem();

	const { data } = useProductById(productId);
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
			updateItem.mutate({
				id: productInCart.id,
				quantity: newQuantity,
				cart: cartId as string,
				product: productId,
			});
		} else {
			createItem.mutate({
				quantity: 1,
				cart: cartId as string,
				product: productId,
			});
		}
	};

	return (
		<section
			className={cn(
				"gap-x-1 w-fit flex items-center p-1.5 bg-teal-600 rounded-lg",
				className,
			)}
		>
			<Button
				iconOnly
				className="w-7 h-7 rounded-full"
				disabled={
					createItem.isPending ||
					updateItem.isPending ||
					(Number.isInteger(data?.stock) && data?.stock === productQuantity)
				}
				onClick={() => handleEditItem(productQuantity + 1)}
			>
				<Plus className="w-3 h-3" />
			</Button>
			<span>
				{createItem.isPending || updateItem.isPending ? (
					<Spinner className="size-4" />
				) : (
					productQuantity
				)}
			</span>
			<Button
				iconOnly
				disabled={
					createItem.isPending || updateItem.isPending || !productQuantity
				}
				className="w-7 h-7 rounded-full"
				onClick={() => handleEditItem(productQuantity - 1)}
			>
				<Minus className="w-3 h-3" />
			</Button>
		</section>
	);
}
