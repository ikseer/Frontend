"use client";

import { DiscountCard } from "@/components/discount-card";
import DiscountForm from "@/components/forms/discount";
import { QueryComponent } from "@/components/query-compoenent";
import { discountsHooks } from "@ikseer/api/hooks/products";
import type { discountSchema } from "@ikseer/api/services/products";
import { Box, Button, Flex, Stack, Title } from "@mantine/core";
import { Plus, Ticket } from "lucide-react";
import { useState } from "react";
import type { z } from "zod";
import type { Product } from "@ikseer/lib/types";

export function ProductDiscount({ product }: { product: Product }) {
	const [formState, setFormState] = useState<"update" | "create">();

	const query = discountsHooks.useInifinite({
		filters: [
			{
				id: "product",
				value: product.id,
			},
		],
	});

	const [initialValues, setInitialValues] = useState<
		z.infer<typeof discountSchema> & { id?: string }
	>();

	const create = discountsHooks.useCreate();
	const update = discountsHooks.useUpdate();

	return (
		<Box>
			<Flex justify="space-between" mb="xl">
				<Title component="h1">Discounts</Title>
				<Button
					leftSection={<Plus />}
					onClick={() => {
						setInitialValues(undefined);
						setFormState("create");
					}}
				>
					New discount
				</Button>
			</Flex>
			<Stack>
				<QueryComponent
					query={query}
					render={(data) => {
						if (data.pages[0]?.results.length === 0) {
							return (
								<div className="w-full h-full flex flex-col items-center justify-center gap-4 py-8">
									<Ticket
										size={100}
										strokeWidth={1}
										className="text-gray-400"
									/>
									<p>No discounts</p>
								</div>
							);
						}
						return data.pages.map((page) =>
							page.results.map((data) => (
								<DiscountCard
									discount={data}
									key={data.id}
									onEdit={() => {
										setInitialValues({
											id: data.id,
											discount_type: data.discount_type,
											discount_amount: Number.parseFloat(
												data.discount_amount || "0",
											),
											start_date: data.start_date && new Date(data.start_date),
											end_date: data.end_date && new Date(data.end_date),
											active: data.active,
											product: data.product,
										});
										setFormState("update");
									}}
								/>
							)),
						);
					}}
				/>
				<div className="w-full text-center">
					<Button
						onClick={() => query.fetchNextPage()}
						disabled={!query.hasNextPage || query.isFetchingNextPage}
						type="button"
					>
						{query.isFetchingNextPage
							? "Loading more..."
							: query.hasNextPage
								? "Load More"
								: "Nothing more to load"}
					</Button>
				</div>
			</Stack>
			<DiscountForm
				product={product.id}
				initialValues={initialValues}
				opened={!!formState}
				onClose={() => setFormState(undefined)}
				onSuccess={() => setFormState(undefined)}
				onSubmit={async (data) => {
					if (formState === "create") return create.mutateAsync(data);
					if (!initialValues?.id)
						throw new Error("Can't find the ID being updated");
					return update.mutateAsync({
						...data,
						id: initialValues?.id,
					});
				}}
			/>
		</Box>
	);
}
