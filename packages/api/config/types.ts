export type FilterFn =
	| "between"
	| "betweenInclusive"
	| "contains"
	| "empty"
	| "endsWith"
	| "equals"
	| "fuzzy"
	| "greaterThan"
	| "greaterThanOrEqualTo"
	| "lessThan"
	| "lessThanOrEqualTo"
	| "notEmpty"
	| "notEquals"
	| "startsWith"
	| "includesString"
	| "includesStringSensitive"
	| "equalsString"
	| "arrIncludes"
	| "arrIncludesAll"
	| "arrIncludesSome"
	| "weakEquals"
	| "inNumberRange"
	| "foreignKey";

/**
 * These filter options are compatible with mantine-react-table.
 */
export interface SearchOptions {
	columnFilterFns?: Record<string, FilterFn | (string & Record<never, never>)>;
	columnFilters?: {
		id: string;
		value: unknown;
	}[];
	globalFilter?: string;
	pagination?: {
		/** 0-based index for the page which is of size `pagination.pageSize` */
		pageIndex?: number;
		/** default to 15 */
		pageSize?: number;
	};
	sorting?: {
		desc: boolean;
		id: string;
	}[];
}
