"use client";
import { useGetCart } from "@ikseer/api/hooks/orders";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import CartItemView from "./_components/cart-view";
import NoCartItem from "./_components/no-cart-items";
import OrderDetails from "./_components/order-details";

export default function Cart() {
	const { data, isLoading } = useGetCart();
	if (isLoading) {
		return (
			<div className="page-container">
				<Skeleton />
			</div>
		);
	}
	if (!data || !data.items.length) {
		return <NoCartItem />;
	}

	const cartItems = data.items;
	const totalPrice = cartItems.reduce(
		(acc, curr) => acc + Number(curr.product_final_price * curr.quantity),
		0,
	);
	return (
		<main className="page-container md:grid-cols-4 gap-x-5 grid grid-cols-3">
			<section className="col-span-3">
				<CartItemView cartItems={cartItems} />
			</section>
			<section className="md:col-span-1 flex flex-col col-span-3 space-y-10">
				{/* <Coupon /> */}
				<OrderDetails totalPrice={totalPrice} price={totalPrice} discount={0} />
			</section>
		</main>
	);
}
