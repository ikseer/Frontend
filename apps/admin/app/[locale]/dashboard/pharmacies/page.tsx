"use client";
import PharmaciesCRUDTable from "@/components/datagrids/pharmacies/pharmacies-crud";
import { Routes } from "@/lib/routes";
import { Anchor, Box, Breadcrumbs, Title } from "@mantine/core";

export default function PharmaciesPage() {
	return (
		<Box>
			<Title component={"h1"} mb="md" mt="xl">
				Pharmacies
			</Title>
			<Breadcrumbs mb="xl">
				<Anchor href={Routes.dashboard()}>Dashboard</Anchor>
				<span>Pharmacies</span>
			</Breadcrumbs>
			<PharmaciesCRUDTable />
		</Box>
	);
}
