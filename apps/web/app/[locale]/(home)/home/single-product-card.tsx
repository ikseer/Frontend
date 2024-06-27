"use client";
import { Link } from "@/navigation";
import type { Product } from "@ikseer/lib/types";
import { getLink } from "@ikseer/lib/utils";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function SingleProductCard({ item }: { item: Product }) {
	console.info(item, "items ");

	return (
		<div className="flex flex-col border shadow-lg bg-zinc-100 rounded-xl dark:bg-zinc-950 dark:border-zinc-700 dark:shadow-zinc-700">
			<section className="relative group/image">
				<Link href={`/products/${item.id}`}>
					<Image
						className="object-cover w-full rounded-t-xl"
						src={getLink(item?.images[0]?.image)}
						alt="Image Description"
						width={50}
						height={50}
					/>
				</Link>
				<div className="absolute right-[60px] bottom-[5px]  w-full group/addButton">
					<div className="items-center hidden ms-[-50px] mb-2 group-hover/addButton:flex gap-x-2">
						<Button variant="submit" iconOnly className="rounded-full">
							<Plus className="text-zinc-50 dark:text-zinc-950" />
						</Button>
						<p className="flex items-center px-3 py-1 text-xl bg-teal-600 rounded-full aspect-square">
							{23}
						</p>
						<Button variant="submit" iconOnly className="rounded-full">
							<Minus className="text-zinc-50 dark:text-zinc-950" />
						</Button>
					</div>
					<Button
						type="button"
						className="hidden p-2 rounded-full cursor-pointer group-hover/image:block"
						variant="submit"
					>
						<ShoppingCart className="text-zinc-50 dark:text-zinc-950" />
					</Button>
				</div>
			</section>
			<div className="relative p-4 md:p-5">
				<section className="flex items-center justify-between">
					<h3 className="text-sm font-bold text-zinc-800 dark:text-white">
						{item.name}
					</h3>
					<p className="text-sm font-medium text-zinc-800 dark:text-white">
						{item.price} EGP
					</p>
				</section>
				<p className="mt-1 text-sm text-gray-400 dark:text-zinc-400">
					{item.factory_company}
				</p>
			</div>
		</div>
	);
}
