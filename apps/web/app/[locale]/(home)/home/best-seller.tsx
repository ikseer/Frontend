"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";

export default function BestSeller() {
	const { data } = useInfiniteProducts({
		pageParam: 1,
		limit: 10,
		top_sales: true,
	});

	return (
		<section className="page-container">
			<div className="mb-10 text-center">
				<h2 className="text-3xl font-bold text-center text-zinc-950 dark:text-white">
					Best Sellers
				</h2>
				<p className="text-zinc-800 dark:text-zinc-400">
					best seller products in our smart pharmacy
				</p>
			</div>
			{!data ? (
				<section className="grid grid-cols-3 gap-5 page-container">
					{Array.from({ length: 3 }).map((item) => (
						<SkeletonCard key={item as number} />
					))}
				</section>
			) : (
				<InfiniteMovingCards
					items={data?.pages?.[0].results}
					direction="right"
					speed="slow"
				/>
			)}
		</section>
	);
}
