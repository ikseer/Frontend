import { Routes } from "@/lib/routes";
import type { Patient } from "@ikseer/lib/types";
import { Anchor } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import type { MRT_ColumnDef } from "mantine-react-table";
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { clientAPI } from "@ikseer/api/config/api.client";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import useOurTable, {
	type UseTableOptions,
} from "../../../hooks/use-our-table";

export default function usePatientsTable({
	data,
	initialFilters,
	tableOptions,
	globalFilter,
	deleted,
}: UseTableOptions<Patient> = {}) {
	const t = useTranslations("Patient");
	const columns = useMemo<MRT_ColumnDef<Patient>[]>(
		() => [
			{
				accessorKey: "first_name",
				header: t("first-name"),
				Cell: ({ cell }) => {
					return (
						<Anchor
							href={Routes.patient({
								patientId: cell.row.original.id as string,
							})}
						>
							{cell.getValue() as string}
						</Anchor>
					);
				},
			},
			{
				accessorKey: "last_name",
				header: t("last-name"),
			},
			{
				accessorKey: "date_of_birth",
				header: t("date-of-birth"),
			},
			{
				accessorKey: "email",
				header: t("email"),
			},
			{
				accessorKey: "gender",
				header: t("gender"),
			},
		],
		[t],
	);

	return useOurTable(
		{
			id: "patients",
			deleted,
			initialFilters,
			globalFilter,
			data,
			fetchData: clientAPI.accounts.getPatients,
		},
		{
			columns,
			...tableOptions,
		},
	);
}
