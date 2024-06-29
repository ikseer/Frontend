import type { Product } from "@ikseer/lib/types";

export default function CartView({ cartItems }: { cartItems: Product[] }) {
	return (
		<>
			{cartItems.length > 0 ? (
				cartItems.map((product) => (
					<div
						className="grid items-center grid-cols-12 mb-3 bg-zinc-100 dark:bg-zinc-950"
						key={`${product.id}`}
					>
						<div className="flex items-center col-span-5 gap-x-2">
							<div>
								<p>{product.name}</p>
								<p>{product.generic_name}</p>
							</div>
						</div>
						<div className="col-span-3">${product.price}</div>
					</div>
				))
			) : (
				<div>there is no product</div>
			)}
		</>
	);
}
