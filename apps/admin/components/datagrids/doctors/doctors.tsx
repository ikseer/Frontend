import type { UseTableOptions } from "@/hooks/use-our-table";
import type { Doctor } from "@ikseer/lib/types";
import { MantineReactTable } from "mantine-react-table";
import useDoctorsTable from "./use-doctors-table";

export function DoctorsTable(options: UseTableOptions<Doctor>) {
	const doctorsTable = useDoctorsTable(options);
	return <MantineReactTable table={doctorsTable} />;
}
