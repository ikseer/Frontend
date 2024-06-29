import type { Product } from "@ikseer/lib/types";

interface CartViewProps {
	cartItems: Product[];
}
export default function CartView({ cartItems }: CartViewProps) {
	return (
		<>
			{cartItems.length > 0 ? (
				cartItems.map((product) => (
					<div
						className="bg-zinc-100 dark:bg-zinc-950 grid items-center grid-cols-12 mb-3"
						key={`${product.id}`}
					>
						<div className="gap-x-2 flex items-center col-span-5">
							<div className="w-[70px] ">
								{/* <Image
									src={getLink(product.images[0].image)}
									alt="cart Image"
									width={300}
									height={300}
								/> */}
							</div>
							<div>
								<p>{product.name}</p>
								<p>{product.generic_name}</p>
							</div>
						</div>
						<div className="w-fit col-span-3"></div>
						<div className="col-span-3">${product.price}</div>
						<div className="col-span-1"></div>
					</div>
				))
			) : (
				<div>there is no product</div>
			)}
		</>
	);
}
