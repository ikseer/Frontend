"use client";
import type { DiscountProduct } from "@ikseer/lib/types";
import { getDateFromString } from "@ikseer/lib/use-format-date";
import { getLink } from "@ikseer/lib/utils";
import { MoveDown } from "lucide-react";
import ImageView from "./image-view";

export function DiscountCard({ item }: { item: DiscountProduct }) {
	return (
		<div className="bg-zinc-100 rounded-xl dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700 flex flex-col py-5 border shadow-lg">
			<ImageView
				src={getLink(item?.image)}
				alt="Description"
				productId={item.id}
			/>
			<div className="z-10 p-4">
				<section className="gap-x-2 flex items-center bg-red-600 w-fit mt-[-55px] mb-6 p-2 text-xs rounded-lg">
					<p className="text-zinc-800 dark:text-white text-sm font-medium">
						{((1 - item.after_price / item.before_price) * 100).toFixed(2)}%
					</p>
					<h3>limited time deal</h3>
				</section>
				<section className="flex items-center justify-between">
					<p className="text-zinc-500"> {getDateFromString(item.end_date)}</p>

					<div className="gap-x-1 flex items-center text-red-500">
						<p className="text-zinc-500">
							<del>{item.before_price} EGP</del>
						</p>
						{((1 - item.after_price / item.before_price) * 100).toFixed(2)}
						%<MoveDown className="w-3 h-4" />
					</div>
				</section>
			</div>
		</div>
	);
}
