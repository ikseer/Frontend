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
	| "foreignKey"
	| (string & Record<never, never>);

/**
 * These filter options are compatible with mantine-react-table.
 */
export type SearchOptions = {
	filters?: {
		id: string;
		operator?: FilterFn;
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
};
