export default function OrderDetails({
	totalPrice,
	price,
	discount,
}: { totalPrice: number; price: number; discount: number }) {
	return (
		<section>
			<h3 className="text-3xl font-bold">Order Details</h3>
			<div className="flex justify-between">
				<p>Products Price</p>
				<p>{price}</p>
			</div>
			<div className="flex justify-between">
				<p>Discount</p>
				<p>{discount}</p>
			</div>
			<div className="flex justify-between">
				<p>total</p>
				<p>{totalPrice}</p>
			</div>
		</section>
	);
}
