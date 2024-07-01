"use client";
import { useGetCart } from "@ikseer/api/hooks/orders";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import CartItemView from "./_components/cart-view";
import { Coupon } from "./_components/coupon";
import NoCartItem from "./_components/no-cart-items";
import OrderDetails from "./_components/order-details";
import PaymentMethod from "./_components/payment";

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
		(acc, curr) => acc + Number(curr.product_final_price),
		0,
	);
	return (
		<main className="grid grid-cols-3 page-container md:grid-cols-4 gap-x-4">
			<section className="col-span-3">
				<CartItemView cartItems={cartItems} />
			</section>
			<section className="flex flex-col col-span-3 space-y-10 md:col-span-1">
				<Coupon />
				<OrderDetails totalPrice={totalPrice} price={totalPrice} discount={0} />
				<PaymentMethod />
			</section>
		</main>
	);
}
