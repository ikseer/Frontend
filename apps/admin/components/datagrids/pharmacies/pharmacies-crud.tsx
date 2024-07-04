"use client";

import PharmacyForm from "@/components/forms/pharmacy";
import type { pharmacySchema as schema } from "@ikseer/api/services/pharmacies";
import { pharmaciesHooks as hooks } from "@ikseer/api/hooks/pharmacies";
import { Box, Button, Flex, Menu, SegmentedControl } from "@mantine/core";
import { Plus } from "lucide-react";
import { MantineReactTable } from "mantine-react-table";
import { useState } from "react";
import type { z } from "zod";
import usePharmaciesTable from "./use-pharmacies-table";

export default function PharmaciesCRUDTable() {
	const [tab, setTab] = useState<"deleted" | "current">("current");
	const [formState, setFormState] = useState<"update" | "create">();
	const [initialValues, setInitialValues] = useState<
		z.infer<typeof schema> & { id?: string }
	>();

	const create = hooks.useCreate();
	const update = hooks.useUpdate();
	// const deletePharmacies = useDeletePharmacies();
	// const restorePharmacies = useRestorePharmacies();

	const pharmaciesTable = usePharmaciesTable({
		deleted: tab === "deleted",
		tableOptions: {
			renderRowActionMenuItems: ({ row }) => (
				<>
					<Menu.Item
						onClick={() => {
							const data = row.original;
							setInitialValues({
								id: data.id,
								name: data.name,
								phone: data.phone,
								location: data.location,
								latitude: data.latitude,
								longitude: data.longitude,
							});
							setFormState("update");
						}}
					>
						{"Edit"}
					</Menu.Item>
					{/* {tab === "deleted" ? (
						<Menu.Item
							disabled={restorePharmacies.isPending}
							onClick={() => restorePharmacies.mutateAsync(row.original.id)}
						>
							{t("restore")}
						</Menu.Item>
					) : (
						<Menu.Item
							disabled={deletePharmacies.isPending}
							onClick={() => deletePharmacies.mutateAsync(row.original.id)}
						>
							{t("delete")}
						</Menu.Item>
					)} */}
				</>
			),
		},
	});

	return (
		<Box>
			<Flex mb="md" justify="space-between">
				<SegmentedControl
					radius="xl"
					data={[
						{ value: "current", label: "Current" },
						{
							value: "deleted",
							label: "Deleted",
						},
					]}
					onChange={(val) => {
						setTab(val as "deleted" | "current");
					}}
				/>
				<Button
					leftSection={<Plus />}
					onClick={() => {
						setInitialValues(undefined);
						setFormState("create");
					}}
				>
					Add pharmacy
				</Button>
			</Flex>
			<MantineReactTable table={pharmaciesTable} />
			<PharmacyForm
				onSubmit={(data) => {
					if (formState === "create") return create.mutateAsync(data);
					return update.mutateAsync({
						newData: data,
						id: initialValues?.id,
					});
				}}
				opened={!!formState}
				onSuccess={() => setFormState(undefined)}
				onClose={() => setFormState(undefined)}
				initialValues={initialValues}
			/>
		</Box>
	);
}
