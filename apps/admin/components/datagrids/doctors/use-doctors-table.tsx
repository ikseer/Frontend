import type { Doctor } from "@ikseer/lib/types";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import type { MRT_ColumnDef } from "mantine-react-table";
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { clientAPI } from "@ikseer/api/utils/api.client";
import { getAvatarLink } from "@ikseer/lib/get-avatar";
import NA from "@ikseer/ui/components/NA";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import useOurTable, {
	type UseTableOptions,
} from "../../../hooks/use-our-table";

export default function useDoctorsTable({
	data,
	initialFilters,
	tableOptions,
	deleted,
}: UseTableOptions<Doctor> = {}) {
	const t = useTranslations("Doctors");
	const columns = useMemo<MRT_ColumnDef<Doctor>[]>(
		() => [
			{
				accessorKey: "image",
				header: t("image"),
				enableSorting: false,
				enableColumnFilter: false,
				Cell: ({ cell }) => {
					return (
						<img
							alt="Doctor's avatar"
							src={getAvatarLink(cell.row.original)}
							className="w-10 h-10 rounded-full object-cover"
						/>
					);
				},
			},
			{
				accessorKey: "first_name",
				header: t("first-name"),
				Cell: ({ cell }) => {
					return <NA>{cell.getValue() as string}</NA>;
				},
			},
			{
				accessorKey: "last_name",
				header: t("last-name"),
				Cell: ({ cell }) => {
					return <NA>{cell.getValue() as string}</NA>;
				},
			},
			{
				accessorKey: "specialization",
				header: t("specialization"),
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
			id: "doctors",
			deleted,
			data,
			fetchData: clientAPI.accounts.doctors.list,
			initialFilters,
		},
		{
			columns,
			enableRowActions: true,
			...tableOptions,
		},
	);
}
