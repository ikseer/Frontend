"use client";

import { Flex } from "@mantine/core";
import { Plus } from "lucide-react";
import { productsHooks, useInfiniteProducts } from "@ikseer/api/hooks/products";
import { SkeletonCard } from "@ikseer/ui/components/card-skeleton";
import { Button, Input, Title } from "@mantine/core";
import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import ProductDetailsForm from "@/components/forms/product-details";
import { revalidateProducts } from "./[productId]/_components/utils.server";
import type { HomeProduct } from "@ikseer/lib/types";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage() {
	const [isCreating, setIsCreating] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
		useInfiniteProducts({
			filters: [{ id: "name", operator: "contains", value: searchQuery }],
		});

	const create = productsHooks.useCreate();

	const handleSearchChange = useCallback(
		debounce((q: string) => {
			setSearchQuery(q);
		}),
		[],
	);

	return (
		<div>
			<Flex justify={"space-between"}>
				<Title mb="md" component={"h1"}>
					Products
				</Title>
				<Button leftSection={<Plus />} onClick={() => setIsCreating(true)}>
					Create product
				</Button>
			</Flex>
			<ProductDetailsForm
				opened={isCreating}
				onSuccess={async () => {
					await revalidateProducts();
					setIsCreating(false);
				}}
				onClose={() => setIsCreating(false)}
				onSubmit={(data) => {
					console.log(data);
					return create.mutateAsync(data);
				}}
			/>
			<Input
				mb="md"
				leftSection={<Search />}
				placeholder="Search for products"
				onChange={(e) => handleSearchChange(e.target.value)}
			/>
			{isPending ? (
				<section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 5 }).map((item) => (
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
