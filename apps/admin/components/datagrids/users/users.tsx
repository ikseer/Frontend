import type { UseTableOptions } from "@/hooks/use-our-table";
import type { User } from "@ikseer/lib/types";
import { MantineReactTable } from "mantine-react-table";
import useUsersTable from "./use-users-table";

export function UsersTable(options: UseTableOptions<User>) {
	const usersTable = useUsersTable(options);
	return <MantineReactTable table={usersTable} />;
}
