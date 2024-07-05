import type { FilterFn, SearchOptions } from "./types";

export function getSearchParams({
	filters,
	globalFilter,
	pagination,
	sorting,
}: SearchOptions = {}) {
	const params = new URLSearchParams();

	if (pagination) {
		if (pagination.pageIndex !== undefined)
			params.set("page", (pagination.pageIndex + 1).toString());
		if (pagination.pageSize !== undefined)
			params.set("limit", pagination.pageSize.toString());
		else params.set("limit", "15");
	}

	if (sorting && sorting.length > 0)
		params.append(
			"ordering",
			sorting
				.map(({ id, desc }) => (desc ? `-${getId(id)}` : getId(id)))
				.join(),
		);

	if (globalFilter) params.set("full_name__icontains", globalFilter);

	if (filters)
		for (const { id, value, operator } of filters) {
			if (
				typeof value === "string" ||
				typeof value === "number" ||
				typeof value === "boolean"
			)
				params.set(`${getId(id)}${getOperator(operator)}`, value.toString());
		}

	return params;
}

function getOperator(op?: FilterFn) {
	// TODO: handle more operators
	if (op === "contains") return "__icontains";
	return "";
}

function getId(id: string) {
	return id.replaceAll(".", "__");
}
