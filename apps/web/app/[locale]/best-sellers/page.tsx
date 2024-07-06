"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";
import type { HomeProduct } from "@ikseer/lib/types";
import { ProductCard } from "../(home)/_components/product-card";

export default function BestSeller() {
	const { data, isPending } = useInfiniteProducts({
		pagination: {
			pageSize: 10,
		},
		filters: [
			{
				id: "number_of_sales__gte",
				value: 200,
			},
		],
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
				</section>
			)}
		</div>
	);
}
