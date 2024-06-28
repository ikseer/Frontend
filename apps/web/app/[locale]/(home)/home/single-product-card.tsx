"use client";
import type { ProductsList } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";

import ImageView from "./image-view";

export default function SingleProductCard({ item }: { item: ProductsList }) {
	console.info(item, "items ");

	return (
		<div className="flex flex-col border shadow-lg bg-zinc-100 rounded-xl dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700">
			<ImageView
				src={getLink(item?.image[0]?.image)}
				alt="Description"
				href={`/products/${item.id}`}
			/>
			<div className="relative p-4 md:p-5">
				<section className="flex items-center justify-between">
					<h3 className="text-sm font-bold text-zinc-800 dark:text-white">
						{item.name}
					</h3>
					<p className="text-sm font-medium text-zinc-800 dark:text-white">
						{item.price} EGP
					</p>
				</section>
			</div>
		</div>
	);
}
