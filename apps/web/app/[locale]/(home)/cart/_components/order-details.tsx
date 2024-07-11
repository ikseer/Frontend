import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/components/ui/button";

export default function OrderDetails({
	totalPrice,
	price,
	discount,
}: { totalPrice: number; price: number; discount: number }) {
	return (
		<section className="px-2 py-6 space-y-3 border rounded-md">
			<h3 className="text-3xl font-bold">Order details</h3>
			<div className=" flex justify-between p-2 border rounded-md">
				<p>Products price</p>
				<p>{price} EGP</p>
			</div>
			<div className="flex justify-between p-2 border rounded-md">
				<p>Discount</p>
				<p>{discount} GEP</p>
			</div>
			<div className=" flex justify-between p-2 border rounded-md">
				<p>Total</p>
				<p>{totalPrice} GEP</p>
			</div>
			<Button className="w-full">
				<Link href="payment" className={"w-full"}>
					Checkout
				</Link>
			</Button>
		</section>
	);
}
