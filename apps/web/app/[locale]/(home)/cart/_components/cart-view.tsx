"use client";
import type { CartItems } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/components/ui/button";
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
import { Trash } from "lucide-react";
import Image from "next/image";
import AddDeleteItem from "../../_components/add-delete-item";

export default function CartItemView({
	cartItems,
	className,
}: { cartItems: CartItems[]; className?: string }) {
	const totalPrice = cartItems.reduce(
		(acc, curr) => acc + Number(curr.product_final_price),
		0,
	);
	return (
		<Table className={className}>
			<TableCaption>A list of your recent invoices.</TableCaption>
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
						<TableCell className="flex items-center font-medium gap-x-2">
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
						<TableCell>{cart.product_final_price}</TableCell>
						<TableCell className="text-right">
							<Button>
								<Trash />
							</Button>
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
