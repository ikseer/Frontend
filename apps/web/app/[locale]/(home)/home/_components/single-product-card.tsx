"use client";
import { BACKEND_URL } from "@/lib/constants";
import { Link } from "@/navigation";
import type { Product } from "@/types";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../../store/cart/cart";

export default function SingleProductCard({ item }: { item: Product }) {
	const { addItemToCart } = useCart();
	const handleAddToCard = (item: Product) => {
		addItemToCart(item);
	};

	return (
		<div
			className="flex flex-col bg-white border shadow-sm rounded-xl
         dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700/[.7]"
		>
			<Link className=" aspect-[3/4]" href={`/products/${item.id}`}>
				<Image
					className="rounded-t-xl object-cover w-full h-full"
					src={`${BACKEND_URL}${item?.images[0]?.image}`}
					alt="Image Description"
					width={500}
					height={500}
				/>
			</Link>
			<div className="md:p-5 relative p-4">
				<button
					type="button"
					className="bg-teal-600 p-2 absolute right-4 top-[-20px] rounded-full cursor-pointer "
					onClick={() => handleAddToCard(item)}
				>
					<LuShoppingCart className="dark:text-zinc-950 text-white" />
				</button>
				<div className="flex items-center justify-between">
					<h3 className="text-zinc-800 dark:text-white text-lg font-bold">
						{item.name}
					</h3>
					<p className="text-zinc-800 dark:text-white text-sm font-medium">
						{item.price} EGP
					</p>
				</div>
				<div className="flex items-center justify-between">
					<p className=" text-zinc-500 dark:text-zinc-400">
						{item.generic_name}
					</p>
					{item.discount && (
						<div className="text-xs font-medium">
							<del className="text-zinc-400 dark:text-zinc-500 mr-2">
								{item.price} EGP
							</del>
							<span className="text-red-700">47%</span>
						</div>
					)}
				</div>

				<p className="dark:text-zinc-400 mt-1 text-sm text-gray-400">
					{item.factory_company}
				</p>
			</div>
		</div>
	);
}
