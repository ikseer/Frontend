"use client";

import { Button, Input, Title } from "@mantine/core";
import { Search } from "lucide-react";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";
import { SkeletonCard } from "@ikseer/ui/components/card-skeleton";
import type { HomeProduct } from "@ikseer/lib/types";
import { ProductCard } from "@/components/product-card";

export default function Product() {
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
		useInfiniteProducts();

	return (
		<div>
			<Title component={"h1"}>Products</Title>
			<Input leftSection={<Search />} placeholder="Search for products" />
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
										<ProductCard key={`${item.id}`} product={item} />
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
