"use client";
import useCart from "../store/cart/cart";
import NoItem from "./components/NoItem/NoItem";
import Coupon from "./components/RightSideView/Coupon";
import OrderSummary from "./components/RightSideView/OrderSummary";
import PaymentMethod from "./components/RightSideView/Payment";
import RightSideContainer from "./components/RightSideView/RightSideContainer";
import CartHeader from "./components/cartView/CartHeader";
import CartView from "./components/cartView/CartView";

export default function ShowShoppingItems() {
	const { cartItems } = useCart();

	return (
		<>
			{cartItems ? (
				<div className="lg:flex justify-between p-5">
					<div className="lg:w-7/12 w-full">
						<h1>Shopping Cart</h1>
						<div className=" flex justify-between">
							<div>
								<CartHeader />
								<CartView cartItems={cartItems} />
							</div>
						</div>
					</div>

					<div className="lg:w-4/12 md:flex lg:block gap-x-2 lg:mt-0 justify-between w-full mt-20">
						<RightSideContainer>
							<Coupon />
						</RightSideContainer>
						<RightSideContainer>
							<OrderSummary />
						</RightSideContainer>
						<RightSideContainer>
							<PaymentMethod />
						</RightSideContainer>
					</div>
				</div>
			) : (
				<NoItem />
			)}
		</>
	);
}
