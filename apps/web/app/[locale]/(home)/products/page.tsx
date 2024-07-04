"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";
import type { HomeProduct } from "@ikseer/lib/types";
import { Button } from "@ikseer/ui/components/ui/button";
import { ProductCard } from "../_components/product-card";

export default function Products() {
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
		useInfiniteProducts({
			pagination: {
				pageSize: 30,
			},
		});

	return (
		<div className="page-container">
			{isPending ? (
				<section className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-5">
					{Array.from({ length: 12 }).map((item) => (
						<SkeletonCard key={item as number} />
					))}
				</section>
			) : (
				<section className="space-y-10">
					<div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-5">
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
