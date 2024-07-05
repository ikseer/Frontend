import type { UseTableOptions } from "@/hooks/use-our-table";
import type { Pharmacy } from "@ikseer/lib/types";
import { MantineReactTable } from "mantine-react-table";
import usePharmaciesTable from "./use-pharmacies-table";

export function PharmaciesTable(options: UseTableOptions<Pharmacy>) {
	const pharmaciesTable = usePharmaciesTable(options);
	return <MantineReactTable table={pharmaciesTable} />;
}
