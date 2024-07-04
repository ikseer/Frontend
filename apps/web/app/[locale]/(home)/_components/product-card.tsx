"use client";
import type { HomeProduct } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";

import Rating from "@/components/rating";
import { MoveDown } from "lucide-react";
import ImageView from "./image-view";

export function ProductCard({ item }: { item: HomeProduct }) {
	return (
		<div className="bg-zinc-100 rounded-xl dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700 flex flex-col border shadow-lg">
			<ImageView
				src={getLink(item?.image)}
				alt="Description"
				productId={item.id}
			/>
			<div className="md:p-5 relative p-4">
				<section className="flex items-center justify-between">
					<h3 className="text-zinc-800 dark:text-white w-2/3 text-sm font-bold truncate">
						{item.name}
					</h3>
					<p className="text-zinc-800 dark:text-white text-sm font-medium">
						{item.price} EGP
					</p>
				</section>
				<section className="flex items-center justify-between">
					<p className="text-zinc-500"> {item.generic_name}</p>
					{item.discount && (
						<>
							<div className="gap-x-1 flex items-center text-red-500">
								<p className="text-zinc-500">
									<del>{item.discount.before_price} EGP</del>
								</p>
								{(
									(1 -
										item.discount?.after_price / item.discount.before_price) *
									100
								).toFixed(2)}
								%<MoveDown className="w-3 h-4" />
							</div>
						</>
					)}
				</section>
				{item.review && (
					<section className="flex items-center justify-between">
						<div className="gap-x-2 flex items-center">
							<Rating rating={item.review} /> {item.review}
						</div>
						<p className="gap-x-2 flex items-center text-sm">
							{item.stock} in stock
						</p>
					</section>
				)}
			</div>
		</div>
	);
}
