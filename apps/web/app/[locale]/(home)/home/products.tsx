"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";
import type { HomeProduct } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/components/ui/button";
import { ProductCard } from "../_components/product-card";

export default function ShowCards() {
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
		useInfiniteProducts();

	return (
		<div className="page-container">
			<h1 className="mb-10 text-3xl font-bold text-center text-zinc-950 dark:text-white">
				Featured Products
			</h1>
			{isPending ? (
				<section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 12 }).map((item) => (
						<SkeletonCard key={item as number} />
					))}
				</section>
			) : (
				<section className="space-y-10">
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{Array.isArray(data?.pages) &&
							data.pages.map(
								(currPage) =>
									Array.isArray(currPage.results) &&
									currPage.results.map((item: HomeProduct) => (
										<ProductCard key={`${item.id}`} item={item} />
									)),
							)}
					</div>
					<div className="w-full text-center">
						<Button
							onClick={() => fetchNextPage()}
							disabled={!hasNextPage || isFetchingNextPage}
							type="button"
						>
							{isFetchingNextPage
								? "Loading more..."
								: hasNextPage
									? "Load More"
									: "Nothing more to load"}
						</Button>
					</div>
				</section>
			)}
		</div>
	);
}
