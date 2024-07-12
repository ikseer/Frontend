"use client";
import UsersCRUDTable from "@/components/datagrids/users/users-crud";
import { Routes } from "@/lib/routes";
import { Anchor, Box, Breadcrumbs, Title } from "@mantine/core";

export default function UsersPage() {
	return (
		<Box>
			<Title component={"h1"} mb="md" mt="xl">
				Users
			</Title>
			<Breadcrumbs mb="xl">
				<Anchor href={Routes.dashboard()}>Dashboard</Anchor>
				<span>Users</span>
			</Breadcrumbs>
			<UsersCRUDTable />
		</Box>
	);
}
