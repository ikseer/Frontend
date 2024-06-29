"use client";

export default function OrderSummary() {
	const currOrderPrice = 0;
	return (
		<div>
			<div className="flex justify-between">
				<p>Discount</p>
				<p>{(0).toFixed(2)}</p>
			</div>
			<div className="flex justify-between">
				<p>Delivery</p>
				<p>{currOrderPrice.toFixed(2)}</p>
			</div>
			<div className="flex justify-between">
				<p>Tax</p>
				<p>{(0).toFixed(2)}</p>
			</div>
			<div className="flex justify-between">
				<p>total</p>
				<p>{currOrderPrice.toFixed(3)}</p>
			</div>
		</div>
	);
}
