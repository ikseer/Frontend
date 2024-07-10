"use client";
import type { CartItems } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@ikseer/ui/components/ui/table";
import Image from "next/image";
import AddDeleteItem from "../../_components/add-delete-item";
import DeleteItemById from "../../_components/delete-item";

export default function CartItemView({
	cartItems,
	className,
}: { cartItems: CartItems[]; className?: string }) {
	const totalPrice = cartItems.reduce(
		(acc, curr) => acc + Number(curr.product_final_price * curr.quantity),
		0,
	);
	return (
		<Table className={className}>
			<TableCaption>A list items added to the your cart.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="">Product</TableHead>
					<TableHead>Quantity</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{cartItems.map((cart) => (
					<TableRow key={cart.id}>
						<TableCell className="gap-x-2 flex items-center font-medium">
							<Image
								src={getLink(cart.product_image)}
								alt="product"
								width={50}
								height={50}
								className="rounded-md"
							/>
							{cart.product_name}
						</TableCell>
						<TableCell>
							<AddDeleteItem productId={cart.product} />
						</TableCell>
						<TableCell>{cart.product_final_price * cart.quantity}</TableCell>
						<TableCell className="text-right">
							<DeleteItemById cartItemId={cart.id} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">{totalPrice}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
