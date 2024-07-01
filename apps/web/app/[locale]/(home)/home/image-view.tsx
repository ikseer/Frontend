import { Link } from "@/navigation";
import {
	useCreateCartItem,
	useEditCartItem,
	useGetCart,
} from "@ikseer/api/hooks/orders";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
import { toast } from "@ikseer/ui/components/ui/use-toast";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ImageView({
	productId,
	src,
	alt,
	topSales: _,
	hasDiscount: __,
}: {
	productId: string;
	src: string;
	alt: string;
	topSales?: boolean;
	hasDiscount?: boolean;
}) {
	const { data: myCart } = useGetCart();
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

	const handleAddItem = () => {
		if (!myCart) {
			toast({
				title: "Yout don't have an active account",
				description: "please login to be able to add to cart",
				variant: "error",
			});
			return;
		}

		if (productQuantity && productInCart) {
			console.log("edit");
			addItemToCart.mutate({
				quantity: productQuantity + 1,
				cart: cartId as string,
				product: productId,
				cartItemId: productInCart.id,
			});
		} else {
			console.log("create");
			createCartItem.mutate({
				quantity: 1,
				cart: cartId as string,
				product: productId,
			});
		}
	};
	const handleMinusItem = () => {
		if (!myCart) {
			toast({
				title: "Yout don't have an active account",
				description: "please login to be able to add to cart",
				variant: "error",
			});
			return;
		}
		if (productQuantity && productInCart) {
			console.log("edit");
			addItemToCart.mutate({
				quantity: productQuantity - 1,
				cart: cartId as string,
				product: productId,
				cartItemId: productInCart.id,
			});
		} else {
			console.log("create");
			createCartItem.mutate({
				quantity: 1,
				cart: cartId as string,
				product: productId,
			});
		}
	};

	return (
		<section className="relative overflow-hidden group/image rounded-t-xl">
			<Link href={`/products/${productId}`}>
				<Image
					className="aspect-[4/3] object-cover w-full transition ease-in-out rounded-t-xl hover:scale-110"
					src={getLink(src)}
					alt={alt}
					width={50}
					height={50}
				/>
			</Link>
			<div className="absolute  rtl:right-[60px] ltr:left-[200px]  bottom-[5px] w-full group/addButton">
				<div className="items-center hidden ms-[-50px] mb-2 group-hover/addButton:flex gap-x-2">
					<Button
						variant="submit"
						iconOnly
						className="rounded-full"
						onClick={handleAddItem}
					>
						<Plus className="text-zinc-50 dark:text-zinc-950" />
					</Button>
					<p className="flex items-center px-3 py-1 text-xl bg-teal-600 rounded-full aspect-square">
						{productQuantity}
					</p>
					<Button
						variant="submit"
						iconOnly
						className="rounded-full"
						disabled={productQuantity === 0}
						onClick={handleMinusItem}
					>
						<Minus className="text-zinc-50 dark:text-zinc-950" />
					</Button>
				</div>
				<Button
					type="button"
					className="hidden p-2 rounded-full cursor-pointer group-hover/image:block"
					variant="submit"
				>
					<ShoppingCart className="text-zinc-50 dark:text-zinc-950" />
				</Button>
			</div>
		</section>
	);
}
