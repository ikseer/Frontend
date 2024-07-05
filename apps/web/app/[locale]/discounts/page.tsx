"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import { useGetDiscountedProducts } from "@ikseer/api/hooks/products";
import { DiscountCard } from "../(home)/_components/discount-card";

export default function Discount() {
	const { data, isPending } = useGetDiscountedProducts();
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
						{Array.isArray(data?.results) &&
							data?.results.map((item) => (
								<DiscountCard key={item.id} item={item} />
							))}
					</div>
				</section>
			)}
		</div>
	);
}
