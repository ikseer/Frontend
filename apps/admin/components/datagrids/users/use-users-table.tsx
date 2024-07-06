import type { User } from "@ikseer/lib/types";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import type { MRT_ColumnDef } from "mantine-react-table";
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { clientAPI } from "@ikseer/api/utils/api.client";
import { getAvatarLink } from "@ikseer/lib/get-avatar";
import { useMemo } from "react";
import useOurTable, {
	type UseTableOptions,
} from "../../../hooks/use-our-table";
import NA from "@ikseer/ui/components/NA";

export default function useUsersTable({
	data,
	initialFilters,
	tableOptions,
	deleted,
}: UseTableOptions<User> = {}) {
	const columns = useMemo<MRT_ColumnDef<User>[]>(
		() => [
			{
				accessorKey: "image",
				header: "Image",
				enableSorting: false,
				enableColumnFilter: false,
				Cell: ({ cell }) => {
					return (
						<img
							alt="User's avatar"
							src={getAvatarLink(cell.row.original)}
							className="w-10 h-10 rounded-full object-cover"
						/>
					);
				},
			},
			{
				accessorKey: "first_name",
				header: "First name",
				Cell: ({ cell }) => {
					return <NA>{cell.getValue() as string}</NA>;
				},
			},
			{
				accessorKey: "last_name",
				header: "Last name",
				Cell: ({ cell }) => {
					return <NA>{cell.getValue() as string}</NA>;
				},
			},
			{
				accessorKey: "user_type",
				header: "User type",
			},
			{
				accessorKey: "username",
				header: "Username",
			},
			{
				accessorKey: "email",
				header: "Email",
			},
			{
				accessorKey: "gender",
				header: "Gender",
			},
		],
		[],
	);

	return useOurTable(
		{
			id: "users",
			deleted,
			data,
			fetchData: clientAPI.accounts.users.list,
			initialFilters,
		},
		{
			columns,
			enableRowActions: true,
			...tableOptions,
		},
	);
}
