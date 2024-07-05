"use client";
import { SkeletonCard } from "@/components/card-skeleton";
import Rating from "@/components/rating";
import { Link } from "@/navigation";
import {
	useInfiniteProducts,
	useProductById,
} from "@ikseer/api/hooks/products";
import { Button } from "@ikseer/ui/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import AddDeleteItem from "../../_components/add-delete-item";
import { ProductCard } from "../../_components/product-card";
import ProductsImage from "./_components/products-image";
import { Share } from "./_components/share-dialog";

export default function CurrentProduct({
	params,
}: {
	params: { productId: string };
}) {
	const { productId } = params;
	const { data: product } = useProductById(productId);
	const { data, isLoading } = useInfiniteProducts({
		pagination: {
			pageSize: 12,
		},
		columnFilters: [
			{
				id: "category",
				value: product?.category,
			},
		],
	});

	const relatedData = data?.pages?.[0]?.results;
	if (!product) {
		return (
			<div className="page-container">
				{" "}
				<SkeletonCard />
			</div>
		);
	}

	return (
		<main className="page-container space-y-6">
			<section className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:gap-x-[20px]">
				<ProductsImage images={product?.images} />
				<div className="space-y-4">
					<h1 className="text-2xl font-bold">{product?.name}</h1>
					<section className="gap-x-2 flex items-center justify-between">
						<Rating rating={3} />
						<Share />
						{/* <ReportAProblem /> */}
					</section>
					<p className="dark:text-zinc-500 gap-x-2 flex text-gray-500">
						{product?.description}
					</p>
					<div className="text-zinc-300 gap-x-5 flex items-center">
						<h3 className="text-zinc-950 dark:text-white text-3xl font-bold">
							${product?.price}
						</h3>
						<p className="text-lg text-red-700">
							{" "}
							{product?.stock} left in stock
						</p>
					</div>
					<div className="gap-x-5 flex">
						<AddDeleteItem productId={productId} />
						<Button>
							<Link href="/payment" className="gap-x-2 flex">
								<ShoppingBasket />
								Buy now
							</Link>
						</Button>
					</div>
				</div>
			</section>
			<section className="space-y-2">
				<h2 className=" text-2xl font-bold">Description</h2>
				<p className="text-zinc-400 px-2">{product.description}</p>
				<p className="text-zinc-400 px-2">{product.short_description}</p>
			</section>
			<section className="space-y-4">
				<h2 className=" text-2xl font-bold">Related products</h2>
				{isLoading ? (
					<div className="grid grid-cols-3 gap-4">
						{Array.from({ length: 12 }).map((index) => (
							<SkeletonCard key={index as number} />
						))}
					</div>
				) : (
					<div className="grid grid-cols-3 gap-4">
						{relatedData?.map((item) => (
							<ProductCard key={item.id} item={item} />
						))}
					</div>
				)}
			</section>
		</main>
	);
}
