"use client";
import NoItem from "./components/NoItem/NoItem";
import Coupon from "./components/RightSideView/Coupon";
import OrderSummary from "./components/RightSideView/OrderSummary";
import PaymentMethod from "./components/RightSideView/Payment";
import RightSideContainer from "./components/RightSideView/RightSideContainer";
import CartHeader from "./components/cartView/CartHeader";

export default function ShowShoppingItems() {
	const { cartItems } = { cartItems: 0 };

	return (
		<>
			{cartItems ? (
				<div className="justify-between p-5 lg:flex">
					<div className="w-full lg:w-7/12">
						<h1>Shopping Cart</h1>
						<div className="flex justify-between ">
							<div>
								<CartHeader />
							</div>
						</div>
					</div>

					<div className="justify-between w-full mt-20 lg:w-4/12 md:flex lg:block gap-x-2 lg:mt-0">
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
