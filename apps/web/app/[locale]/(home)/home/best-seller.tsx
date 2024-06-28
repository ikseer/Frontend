"use client";
import { useInfiniteProducts } from "@ikseer/api/hooks/products";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function BestSeller() {
	const bastSellerProduct = useInfiniteProducts({
		pageParam: 1,
		limit: 12,
		top_sales: true,
	});
	console.log(bastSellerProduct, "best seller products");

	return (
		<section className="page-container">
			<div className="mb-10 text-center">
				<h2 className="text-3xl font-bold text-center  text-zinc-950 dark:text-white">
					Best Sellers
				</h2>
				<p className="text-zinc-800 dark:text-zinc-400">
					best seller products in our smart pharmacy
				</p>
				{/* <CardImage src={""} /> */}
			</div>
		</section>
	);
}

function CardImage({ src }: { src: string }) {
	return (
		<div className="relative">
			<Image
				src={src}
				alt="item"
				width={100}
				height={100}
				className="w-full h-full"
			/>
			<p>Top Sales</p>
			<div className="group">
				<Minus />
				<ShoppingCart className="text-white dark:text-zinc-950" />
				<Plus />
			</div>
		</div>
	);
}
