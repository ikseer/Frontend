"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import Rating from "@/components/rating";
import { useProductById } from "@ikseer/api/hooks/products";
import AddDeleteItem from "../../_components/add-delete-item";
import ProductsImage from "./_components/products-image";
import { ReportAProblem } from "./_components/report-problem-dialog";
import { Share } from "./_components/share-dialog";

export default function CurrentProduct({
	params,
}: { params: { productId: string } }) {
	const { productId } = params;
	const { data: product } = useProductById(productId);
	if (!product) {
		return (
			<div className="page-container">
				{" "}
				<SkeletonCard />
			</div>
		);
	}
	return (
		<main className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:gap-x-[20px] page-container">
			<ProductsImage images={product?.images} />
			<div className="space-y-4">
				<h1 className="text-2xl font-bold">{product?.name}</h1>
				<section className="flex items-center justify-between gap-x-2">
					<Rating rating={3} />
					<Share />
					<ReportAProblem />
				</section>
				<p className="flex text-gray-500 dark:text-zinc-500 gap-x-2">
					{product?.description}
				</p>
				<h3 className="text-3xl font-bold">${product?.price}</h3>
				<AddDeleteItem productId={productId} />
			</div>
		</main>
	);
}
