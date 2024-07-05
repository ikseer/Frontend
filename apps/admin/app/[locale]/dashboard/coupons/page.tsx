"use client";

import { CouponCard } from "@/components/coupon-card";
import CouponForm from "@/components/forms/coupon";
import { QueryComponent } from "@/components/query-compoenent";
import { couponsHooks } from "@ikseer/api/hooks/products";
import type { couponSchema } from "@ikseer/api/services/products";
import { Box, Button, Flex, Stack, Title } from "@mantine/core";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { z } from "zod";

export default function CouponsPage() {
	const [formState, setFormState] = useState<"update" | "create">();
	const query = couponsHooks.useInifinite();
	const [initialValues, setInitialValues] = useState<
		z.infer<typeof couponSchema> & { id?: string }
	>();

	const create = couponsHooks.useCreate();
	const update = couponsHooks.useUpdate();

	return (
		<Box>
			<Flex justify="space-between" mb="xl">
				<Title component="h1">Coupons</Title>
				<Button
					leftSection={<Plus />}
					onClick={() => {
						setInitialValues(undefined);
						setFormState("create");
					}}
				>
					New coupon
				</Button>
			</Flex>
			<Stack>
				<QueryComponent
					query={query}
					render={(data) => {
						return data.pages.map((page) =>
							page.results.map((data) => (
								<CouponCard
									coupon={data}
									key={data.id}
									onEdit={() => {
										setInitialValues({
											id: data.id,
											discount_type: data.discount_type,
											discount_amount: Number.parseFloat(data.discount_amount),
											usage_limit: data.usage_limit,
											start_date: new Date(data.start_date),
											end_date: new Date(data.end_date),
											minimum_purchase_amount: data.minimum_purchase_amount
												? Number.parseFloat(data.minimum_purchase_amount)
												: null,
											active: data.active,
											code: data.code,
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
			<CouponForm
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
