"use client";
import { Link } from "@/navigation";
import type { Product } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/src/components/ui/button";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

export default function SingleProductCard({ item }: { item: Product }) {
	return (
		<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700/[.7]">
			<Link className=" aspect-[3/4]" href={`/products/${item.id}`}>
				<Image
					className="object-cover w-full h-full rounded-t-xl"
					src={getLink(item?.images[0]?.image)}
					alt="Image Description"
					width={500}
					height={500}
				/>
			</Link>
			<div className="relative p-4 md:p-5">
				<Button
					type="button"
					className="bg-teal-600 p-2 absolute right-4 top-[-20px] rounded-full cursor-pointer "
				>
					<LuShoppingCart className="text-white dark:text-zinc-950" />
				</Button>
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-bold text-zinc-800 dark:text-white">
						{item.name}
					</h3>
					<p className="text-sm font-medium text-zinc-800 dark:text-white">
						{item.price} EGP
					</p>
				</div>
				<div className="flex items-center justify-between">
					<p className=" text-zinc-500 dark:text-zinc-400">
						{item.generic_name}
					</p>
					{item.discount && (
						<div className="text-xs font-medium">
							<del className="mr-2 text-zinc-400 dark:text-zinc-500">
								{item.price} EGP
							</del>
							<span className="text-red-700">47%</span>
						</div>
					)}
				</div>

				<p className="mt-1 text-sm text-gray-400 dark:text-zinc-400">
					{item.factory_company}
				</p>
			</div>
		</div>
	);
}
