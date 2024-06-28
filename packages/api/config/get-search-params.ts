import type { SearchOptions } from "./types";

export function getSearchParams({
	columnFilterFns,
	columnFilters,
	globalFilter,
	pagination,
	sorting,
}: SearchOptions = {}) {
	const params = new URLSearchParams();

	if (pagination) {
		params.set("page", (pagination.pageIndex + 1).toString());
		params.set("limit", pagination.pageSize.toString());
	}

	if (sorting && sorting.length > 0)
		params.append(
			"ordering",
			sorting
				.map(({ id, desc }) => (desc ? `-${getId(id)}` : getId(id)))
				.join(),
		);

	if (globalFilter) params.set("full_name__icontains", globalFilter);

	if (columnFilters)
		for (const { id, value } of columnFilters) {
			if (
				typeof value === "string" ||
				typeof value === "number" ||
				typeof value === "boolean"
			)
				params.set(
					`${getId(id)}${getOperator(columnFilterFns?.[id])}`,
					value.toString(),
				);
		}

	return params;
}

function getOperator(
	op?: NonNullable<SearchOptions["columnFilterFns"]>[string],
) {
	// TODO: handle more operators
	if (op === "contains") return "__icontains";
	return "";
}

function getId(id: string) {
	return id.replaceAll(".", "__");
}
