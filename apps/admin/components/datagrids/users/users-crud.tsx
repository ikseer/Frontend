"use client";

import UserForm from "@/components/forms/user";
import type { userSchema } from "@ikseer/api/services/accounts";
import { Box, Button, Flex, Menu } from "@mantine/core";
import { Plus } from "lucide-react";
import { MantineReactTable } from "mantine-react-table";
import { useState } from "react";
import type { z } from "zod";
import useUsersTable from "./use-users-table";
import { usersHooks } from "@ikseer/api/hooks/accounts";

export default function UsersCRUDTable() {
	const [formState, setFormState] = useState<"update" | "create">();
	const [initialValues, setInitialValues] = useState<
		z.infer<typeof userSchema> & { id?: string }
	>();

	const create = usersHooks.useCreate();
	const update = usersHooks.useUpdate();

	const table = useUsersTable({
		tableOptions: {
			renderRowActionMenuItems: ({ row }) => (
				<Menu.Item
					onClick={() => {
						const data = row.original;
						setInitialValues({
							id: data.id,
							first_name: data.first_name,
							last_name: data.last_name,
							email: data.email,
							is_staff: data.is_staff,
							user_type: data.user_type,
							username: data.username,
						});
						setFormState("update");
					}}
				>
					Edit
				</Menu.Item>
			),
		},
	});

	return (
		<Box>
			<Flex mb="md" justify="end">
				<Button
					leftSection={<Plus />}
					onClick={() => {
						setInitialValues(undefined);
						setFormState("create");
					}}
				>
					Add user
				</Button>
			</Flex>
			<MantineReactTable table={table} />
			<UserForm
				onSubmit={(data) => {
					if (formState === "create") return create.mutateAsync(data);
					if (!initialValues?.id)
						throw new Error("Can't find the ID being updated");
					return update.mutateAsync({
						...data,
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
