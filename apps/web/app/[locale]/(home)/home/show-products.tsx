"use client";
import { useProducts } from "@ikseer/api/hooks/products";
import type { Product } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/src/components/ui/button";
import SingleProductCard from "./single-product-card";

export default function ShowCards() {
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
		useProducts();
	const pages = data?.pages;

	return (
		<div className="p-10">
			<h1 className="mb-10 text-3xl font-bold text-center text-zinc-950 dark:text-white">
				Featured Products
			</h1>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				{Array.isArray(pages) &&
					pages.map(
						(currPage) =>
							Array.isArray(currPage.results) &&
							currPage.results.map((item: Product) => (
								<SingleProductCard key={`${item.id}`} item={item} />
							)),
					)}
			</div>
			<Button
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}
				type="button"
				className="w-[200px] h-[40px]  text-semibold text-center my-5 mx-auto border-2 border-solid border-gray-200 dark:border-zinc-900 -white-200 dark:bg-zinc-950"
			>
				{isFetchingNextPage
					? "Loading more..."
					: hasNextPage
						? "Load More"
						: "Nothing more to load"}
			</Button>
		</div>
	);
}
