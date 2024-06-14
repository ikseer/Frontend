"use client";
import { BACKEND_URL } from "@/lib/constants";
import type { Product } from "@/types";
import Image from "next/image";
import IncrementAndDecrement from "../../../components/IncrementAndDecrement";
import RemoveProduct from "./RemoveProduct";

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
								<Image
									src={`${BACKEND_URL}${product.images[0].image}`}
									alt="cart Image"
									width={300}
									height={300}
								/>
							</div>
							<div>
								<p>{product.name}</p>
								<p>{product.generic_name}</p>
							</div>
						</div>
						<div className="w-fit col-span-3">
							<IncrementAndDecrement item={product} />
						</div>
						<div className="col-span-3">${product.price?.toFixed(3)}</div>
						<div className="col-span-1">
							<RemoveProduct productId={product.id} />
						</div>
					</div>
				))
			) : (
				<div>there is no product</div>
			)}
		</>
	);
}
