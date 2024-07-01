import { serverAPI } from "./../../../../../../packages/api/config/api.server";
import CartItemView from "./_components/cart-view";
import { Coupon } from "./_components/coupon";
import NoCartItem from "./_components/no-cart-items";
import OrderDetails from "./_components/order-details";
import PaymentMethod from "./_components/payment";

export default async function Cart() {
	const cartItems = await (await serverAPI.order.getCart()).items;
	const totalPrice = cartItems.reduce(
		(acc, curr) => acc + Number(curr.product_final_price),
		0,
	);
	return (
		<>
			{cartItems.length ? (
				<main className="grid grid-cols-3 page-container md:grid-cols-4 gap-x-4">
					<section className="col-span-3">
						<CartItemView cartItems={cartItems} />
					</section>
					<section className="flex flex-col col-span-3 space-y-10 md:col-span-1">
						<Coupon />
						<OrderDetails
							totalPrice={totalPrice}
							price={totalPrice}
							discount={0}
						/>
						<PaymentMethod />
					</section>
				</main>
			) : (
				<NoCartItem />
			)}
		</>
	);
}
