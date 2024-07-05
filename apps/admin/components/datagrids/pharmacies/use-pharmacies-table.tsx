import type { Pharmacy } from "@ikseer/lib/types";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import type { MRT_ColumnDef } from "mantine-react-table";
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { clientAPI } from "@ikseer/api/utils/api.client";
import { useMemo } from "react";
import useOurTable, {
	type UseTableOptions,
} from "../../../hooks/use-our-table";

export default function usePharmaciesTable({
	data,
	initialFilters,
	tableOptions,
	deleted,
}: UseTableOptions<Pharmacy> = {}) {
	const columns = useMemo<MRT_ColumnDef<Pharmacy>[]>(
		() => [
			{
				accessorKey: "name",
				header: "Name",
			},
			{
				accessorKey: "phone",
				header: "Phone",
			},
			{
				accessorKey: "location",
				header: "Location",
			},
			{
				accessorKey: "latitude",
				header: "Latitude",
			},
			{
				accessorKey: "longitude",
				header: "Longitude",
			},
		],
		[],
	);

	return useOurTable(
		{
			id: "pharmacies",
			deleted,
			data,
			fetchData: clientAPI.pharmacies.pharmacy.list,
			initialFilters,
		},
		{
			columns,
			enableRowActions: true,
			...tableOptions,
		},
	);
}
